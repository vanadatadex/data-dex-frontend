import '@usecapsule/react-sdk/styles.css'

import { CapsuleModal } from '@usecapsule/react-sdk'
import { useWeb3React } from '@web3-react/core'
import CAPSULE_ICON from 'assets/images/capsule-icon.svg'
import { AutoColumn } from 'components/Column'
import { AutoRow } from 'components/Row'
import { connections, networkConnection } from 'connection'
import { ActivationStatus, useActivationState } from 'connection/activate'
import capsuleClient from 'connection/Capsule'
import { isSupportedChain } from 'constants/chains'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ThemedText } from 'theme/components'
import { flexColumnNoWrap } from 'theme/styles'

import ConnectionErrorView from './ConnectionErrorView'
import Option from './Option'

const Wrapper = styled.div`
  ${flexColumnNoWrap};
  background-color: ${({ theme }) => theme.surface1};
  width: 100%;
  padding: 14px 16px 16px;
  flex: 1;
`

const OptionGrid = styled.div`
  display: grid;
  grid-gap: 2px;
  border-radius: 12px;
  overflow: hidden;
  ${({ theme }) => theme.deprecated_mediaWidth.deprecated_upToMedium`
    grid-template-columns: 1fr;
  `};
`

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  font-weight: 535;
  background-color: ${({ theme }) => theme.surface2};
  color: ${({ theme }) => theme.neutral1};
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.surface3};
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`

export default function WalletModal() {
  const { connector, chainId } = useWeb3React()

  const { activationState } = useActivationState()
  const [isCapsuleOpen, setIsCapsuleOpen] = useState(false)
  // Keep the network connector in sync with any active user connector to prevent chain-switching on wallet disconnection.
  useEffect(() => {
    if (chainId && isSupportedChain(chainId) && connector !== networkConnection.connector) {
      networkConnection.connector.activate(chainId)
    }
  }, [chainId, connector])

  return (
    <Wrapper data-testid="wallet-modal">
      <AutoRow justify="space-between" width="100%" marginBottom="16px">
        <ThemedText.SubHeader>Connect a wallet</ThemedText.SubHeader>
      </AutoRow>
      {activationState.status === ActivationStatus.ERROR ? (
        <ConnectionErrorView />
      ) : (
        <AutoColumn gap="16px">
          <OptionGrid data-testid="option-grid">
            {connections
              .filter((connection) => connection.shouldDisplay())
              .map((connection) => (
                <Option key={connection.getName()} connection={connection} />
              ))}
          </OptionGrid>
          <StyledButton onClick={() => setIsCapsuleOpen(true)}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconWrapper>
                <img src={CAPSULE_ICON} alt="Capsule" width="24px" height="24px" />
              </IconWrapper>
              <span style={{ marginLeft: '12px' }}>Connect with Capsule</span>
            </div>
          </StyledButton>
        </AutoColumn>
      )}
      <CapsuleModal capsule={capsuleClient} isOpen={isCapsuleOpen} onClose={() => setIsCapsuleOpen(false)} />
    </Wrapper>
  )
}
