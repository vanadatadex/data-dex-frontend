import { CapsuleEthersV5Signer } from '@usecapsule/ethers-v5-integration'
import { CapsuleModal } from '@usecapsule/react-sdk'
import { ChainId } from '@vanadex/sdk-core'
import type { Actions, Provider, ProviderConnectInfo, ProviderRpcError } from '@web3-react/types'
import { Connector } from '@web3-react/types'
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { ethers } from 'ethers'
import * as React from 'react'
import { createRoot } from 'react-dom/client'

import { RPC_URLS } from '../constants/networks'
import capsuleClient from './Capsule'

type ICapsuleProvider = Provider & {
  isCapsule?: boolean
  isConnected?: () => boolean
  emit: (eventName: string, ...args: any[]) => void
}

type EventListener = (...args: any[]) => void

function parseChainId(chainId: string | number) {
  return typeof chainId === 'number' ? chainId : Number.parseInt(chainId, chainId.startsWith('0x') ? 16 : 10)
}

class CapsuleProvider implements Provider {
  private signer?: CapsuleEthersV5Signer
  public provider: ethers.providers.JsonRpcProvider
  public listeners: { [event: string]: EventListener[] } = {}

  constructor(provider: ethers.providers.JsonRpcProvider) {
    this.provider = provider
  }

  public setSigner(signer: CapsuleEthersV5Signer) {
    this.signer = signer
  }

  public async getFeeData(): Promise<any> {
    return this.provider.getFeeData()
  }

  public async request({ method, params }: { method: string; params?: any[] }): Promise<any> {
    let network
    let txParams
    let response
    switch (method) {
      case 'eth_accounts':
        return this.signer ? [await this.signer.getAddress()] : []
      case 'eth_chainId':
        network = await this.provider.getNetwork()
        return network.chainId
      case 'eth_requestAccounts':
        return this.signer ? [await this.signer.getAddress()] : []
      case 'eth_sendTransaction':
        if (!this.signer) throw new Error('No signer available')
        try {
          console.log(params)
          txParams = params?.[0] as any
          // Get current gas price
          const feeData = await this.provider.getFeeData()
          console.log('Fee data:', feeData)

          // Clean the transaction object - only include necessary fields
          const tx = {
            to: txParams.to,
            from: txParams.from,
            data: txParams.data,
            value: txParams.value,
            gasLimit: txParams.gas || txParams.gasLimit,
            type: 2,
            maxFeePerGas: feeData.maxFeePerGas ? ethers.utils.hexlify(feeData.maxFeePerGas) : undefined,
            maxPriorityFeePerGas: feeData.maxPriorityFeePerGas
              ? ethers.utils.hexlify(feeData.maxPriorityFeePerGas)
              : undefined,
          }
          console.log('cleanTx:', tx)

          const signedTx = await this.signer.signTransaction(tx)
          console.log('signedTx:', signedTx)

          // Send the transaction directly
          response = await this.provider.sendTransaction(signedTx)
          return response.hash
        } catch (error: any) {
          console.error('Transaction error:', error)
          if (error.message.includes('insufficient funds')) {
            throw new Error('Insufficient funds for transaction')
          }
          throw error
        }
      case 'wallet_switchEthereumChain':
        return null
      default:
        return this.provider.send(method, params || [])
    }
  }

  public on(eventName: string | symbol, listener: EventListener): this {
    if (!this.listeners[eventName as string]) {
      this.listeners[eventName as string] = []
    }
    this.listeners[eventName as string].push(listener)
    return this
  }

  public removeListener(eventName: string | symbol, listener: EventListener): this {
    if (!this.listeners[eventName as string]) return this
    this.listeners[eventName as string] = this.listeners[eventName as string].filter((l) => l !== listener)
    return this
  }

  public emit(eventName: string, ...args: any[]): void {
    if (!this.listeners[eventName]) return
    this.listeners[eventName].forEach((listener) => listener(...args))
  }
}

// eslint-disable-next-line import/no-unused-modules
export class CapsuleConnector extends Connector {
  public declare provider?: Provider
  private eagerConnection?: Promise<void>

  constructor({ actions, onError }: { actions: Actions; onError?: (error: Error) => void }) {
    super(actions, onError)
  }

  private async isomorphicInitialize(): Promise<void> {
    if (this.eagerConnection) return

    return (this.eagerConnection = Promise.resolve().then(async () => {
      if (capsuleClient) {
        try {
          // Initialize Capsule client
          await capsuleClient.init()

          // Initialize provider with default chain
          const ethersProvider = new ethers.providers.JsonRpcProvider(RPC_URLS[ChainId.VANA][0], ChainId.VANA)

          // Create provider without signer initially
          this.provider = new CapsuleProvider(ethersProvider)

          // Set up event listeners for the provider
          this.provider.on('connect', ({ chainId }: ProviderConnectInfo): void => {
            this.actions.update({ chainId: parseChainId(chainId) })
          })

          this.provider.on('disconnect', (error: ProviderRpcError): void => {
            this.actions.resetState()
            this.onError?.(error)
          })

          this.provider.on('chainChanged', (chainId: string) => {
            this.actions.update({ chainId: parseChainId(chainId) })
          })
        } catch (error) {
          console.error('Failed to initialize Capsule:', error)
          // Don't throw error here to allow eager connection to fail gracefully
        }
      }
    }))
  }

  public async connectEagerly(): Promise<void> {
    const cancelActivation = this.actions.startActivation()

    try {
      await this.isomorphicInitialize()
      if (!this.provider) return cancelActivation()

      // Check if there are any available wallets
      if (capsuleClient.availableWallets.length > 0) {
        // Create and set signer since we have an available wallet
        const ethersSigner = new CapsuleEthersV5Signer(capsuleClient, (this.provider as CapsuleProvider).provider)
        console.log('Created signer:', ethersSigner)
        ;(this.provider as CapsuleProvider).setSigner(ethersSigner)
        console.log('Signer set in provider')

        const accounts = (await this.provider.request({ method: 'eth_accounts' })) as string[]
        if (!accounts.length) throw new Error('No accounts returned')
        const chainId = (await this.provider.request({ method: 'eth_chainId' })) as number
        this.actions.update({ chainId, accounts })
      } else {
        throw new Error('No wallets available')
      }
    } catch (error) {
      console.debug('Could not connect eagerly', error)
      cancelActivation()
      this.actions.resetState()
    }
  }

  public async activate(desiredChainId?: number): Promise<void> {
    const cancelActivation = this.actions.startActivation()

    try {
      await this.isomorphicInitialize()
      if (!this.provider) throw new Error('No provider')

      if (capsuleClient.availableWallets.length === 0) {
        // Create modal container
        const modal = document.createElement('div')
        document.body.appendChild(modal)
        const root = createRoot(modal)

        // Show modal and wait for result
        await new Promise<void>((resolve) => {
          root.render(
            React.createElement(CapsuleModal, {
              capsule: capsuleClient,
              isOpen: true,
              onClose: () => {
                root.unmount()
                document.body.removeChild(modal)
                resolve()
              },
            })
          )
        })

        // Check if wallet was connected after modal closes
        if (capsuleClient.availableWallets.length === 0) {
          cancelActivation()
          throw new Error('No wallet connected')
        }
      }

      const ethersSigner = new CapsuleEthersV5Signer(capsuleClient, (this.provider as CapsuleProvider).provider)
      ;(this.provider as CapsuleProvider).setSigner(ethersSigner)

      const accounts = (await this.provider.request({ method: 'eth_requestAccounts' })) as string[]
      const chainId = (await this.provider.request({ method: 'eth_chainId' })) as number

      if (!desiredChainId || chainId === desiredChainId) {
        return this.actions.update({ chainId, accounts })
      }

      // If desired chain is different, try to switch
      const desiredChainIdHex = `0x${desiredChainId.toString(16)}`
      await this.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: desiredChainIdHex }],
      })

      return this.activate(desiredChainId)
    } catch (error) {
      cancelActivation()
      throw error
    }
  }

  public async deactivate(): Promise<void> {
    capsuleClient.logout()
  }
}
