import { skipToken } from '@reduxjs/toolkit/query/react'
import { Currency, CurrencyAmount, TradeType } from '@vanadex/sdk-core'
import { useWeb3React } from '@web3-react/core'
import { AVERAGE_L1_BLOCK_TIME } from 'constants/chainInfo'
import { ZERO_PERCENT } from 'constants/misc'
import { useRoutingAPIArguments } from 'lib/hooks/routing/useRoutingAPIArguments'
import ms from 'ms'
import { useEffect, useMemo, useRef, useState } from 'react'
import { getClientSideQuote, getRouter } from 'utils/clientSideSmartOrderRouter'

import {
  GetQuoteArgs,
  INTERNAL_ROUTER_PREFERENCE_PRICE,
  QuoteMethod,
  QuoteState,
  RouterPreference,
  SubmittableTrade,
  TradeState,
} from './types'

const TRADE_LOADING = {
  state: TradeState.LOADING,
  trade: undefined,
  currentTrade: undefined,
} as const

type RoutingAPITradeReturn = {
  state: TradeState
  trade?: SubmittableTrade
  currentTrade?: SubmittableTrade
  method?: QuoteMethod
  swapQuoteLatency?: number
}

export function useRoutingAPITrade<TTradeType extends TradeType>(
  skipFetch: boolean,
  tradeType: TTradeType,
  amountSpecified: CurrencyAmount<Currency> | undefined,
  otherCurrency: Currency | undefined,
  routerPreference: RouterPreference | typeof INTERNAL_ROUTER_PREFERENCE_PRICE,
  account?: string,
  inputTax = ZERO_PERCENT,
  outputTax = ZERO_PERCENT
): RoutingAPITradeReturn {
  const [currencyIn, currencyOut] = useMemo(
    () =>
      tradeType === TradeType.EXACT_INPUT
        ? [amountSpecified?.currency, otherCurrency]
        : [otherCurrency, amountSpecified?.currency],
    [amountSpecified, otherCurrency, tradeType]
  )

  const [result, setResult] = useState<RoutingAPITradeReturn>({
    state: TradeState.INVALID,
  })
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const { provider, chainId } = useWeb3React()

  const queryArgs = useRoutingAPIArguments({
    account,
    tokenIn: currencyIn,
    tokenOut: currencyOut,
    amount: amountSpecified,
    tradeType,
    routerPreference,
    inputTax,
    outputTax,
  })

  const skip = skipFetch || queryArgs === skipToken

  useEffect(() => {
    if (skip) {
      setResult({ state: TradeState.INVALID })
      return
    }

    let active = true

    async function fetchTrade() {
      if (document.hidden || queryArgs === skipToken) return

      const validQueryArgs = queryArgs as GetQuoteArgs
      const pollingInterval = routerPreference === INTERNAL_ROUTER_PREFERENCE_PRICE ? ms('1m') : AVERAGE_L1_BLOCK_TIME

      const start = Date.now()

      try {
        const router = getRouter(chainId!, provider)
        const quote = await getClientSideQuote(validQueryArgs, router.router, {})
        const latency = Date.now() - start

        let newResult: RoutingAPITradeReturn

        if (!validQueryArgs.amount || quote.state === QuoteState.NOT_FOUND) {
          newResult = {
            state: TradeState.NO_ROUTE_FOUND,
            trade: undefined,
            currentTrade: undefined,
            method: QuoteMethod.CLIENT_SIDE,
            swapQuoteLatency: latency,
          }
        } else {
          newResult = {
            state: TradeState.VALID,
            trade: quote as unknown as SubmittableTrade,
            currentTrade: quote as unknown as SubmittableTrade,
            method: QuoteMethod.CLIENT_SIDE,
            swapQuoteLatency: latency,
          }
        }

        if (active) {
          setResult(newResult)
        }
      } catch (error) {
        console.error('SOR fetchTrade error:', error)
        setResult({
          state: TradeState.INVALID,
          trade: undefined,
          currentTrade: undefined,
          method: QuoteMethod.CLIENT_SIDE,
          swapQuoteLatency: Date.now() - start,
        })
      }
    }

    setResult({ ...TRADE_LOADING, method: QuoteMethod.CLIENT_SIDE })
    fetchTrade()

    timerRef.current = setInterval(() => {
      if (document.hidden) return
      fetchTrade()
    }, AVERAGE_L1_BLOCK_TIME)

    return () => {
      active = false
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [skip, queryArgs, provider, chainId, routerPreference])

  return result
}
