import { Currency } from '@vanadex/sdk-core'

export function currencyId(currency: Currency): string {
  if (currency.isNative) return 'VANA'
  if (currency.isToken) return currency.address
  throw new Error('invalid currency')
}
