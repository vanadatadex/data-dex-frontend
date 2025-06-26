// Remove unused imports and fix formatting
import type { Web3Provider } from '@ethersproject/providers'

import { ClassicTrade, GetQuoteArgs, QuoteResult, TradeResult } from './types'

type RoutingAPITradeQuoteReturn = {
  isError: boolean
  data?: {
    trade?: ClassicTrade
    state?: QuoteResult
  }
  currentData?: TradeResult
  error?: { status: string; error: any }
}

type QueryState = { returnValue: Promise<RoutingAPITradeQuoteReturn>; lastPolled: number }

const CACHE_SIZE = 1000
class QuoteCache {
  private data = new Map<string, QueryState>()
  public get = (key: string) => this.data.get(key)?.returnValue
  public set = (dataReturn: QueryState, key: string) => {
    if (this.data.size > CACHE_SIZE) {
      const keysIter = this.data.keys()
      const firstKey = keysIter.next().value
      if (firstKey !== undefined) {
        this.data.delete(firstKey)
      }
    }
    this.data.set(key, dataReturn)
    return dataReturn.returnValue
  }
  public clearIfNeeded = (key: string, pollingInterval: number) => {
    const time = Date.now()
    const value = this.data.get(key)
    if (time - (value?.lastPolled ?? 0) > pollingInterval) this.data.delete(key)
  }
}

const cache = new QuoteCache()

export async function getRoutingApiQuote(
  args: GetQuoteArgs,
  provider?: Web3Provider,
): Promise<RoutingAPITradeQuoteReturn> {
  try {
    return {
      isError: true,
      error: { status: 'NOT_IMPLEMENTED', error: 'Routing API not yet implemented' },
    }
  } catch (error) {
    return {
      isError: true,
      error: { status: 'UNKNOWN_ERROR', error },
    }
  }
}
