import { TransactionType } from 'state/transactions/types'
import { TransactionStatus } from 'types/types-and-hooks'

const TransactionTitleTable: { [key in TransactionType]: { [state in TransactionStatus]: string } } = {
  [TransactionType.SWAP]: {
    [TransactionStatus.Pending]: 'Swapping',
    [TransactionStatus.Confirmed]: 'Swapped',
    [TransactionStatus.Failed]: 'Swap failed',
  },
  [TransactionType.WRAP]: {
    [TransactionStatus.Pending]: 'Wrapping',
    [TransactionStatus.Confirmed]: 'Wrapped',
    [TransactionStatus.Failed]: 'Wrap failed',
  },
  [TransactionType.ADD_LIQUIDITY_V3_POOL]: {
    [TransactionStatus.Pending]: 'Adding liquidity',
    [TransactionStatus.Confirmed]: 'Added liquidity',
    [TransactionStatus.Failed]: 'Add liquidity failed',
  },
  [TransactionType.REMOVE_LIQUIDITY_V3]: {
    [TransactionStatus.Pending]: 'Removing liquidity',
    [TransactionStatus.Confirmed]: 'Removed liquidity',
    [TransactionStatus.Failed]: 'Remove liquidity failed',
  },
  [TransactionType.CREATE_V3_POOL]: {
    [TransactionStatus.Pending]: 'Creating pool',
    [TransactionStatus.Confirmed]: 'Created pool',
    [TransactionStatus.Failed]: 'Create pool failed',
  },
  [TransactionType.COLLECT_FEES]: {
    [TransactionStatus.Pending]: 'Collecting fees',
    [TransactionStatus.Confirmed]: 'Collected fees',
    [TransactionStatus.Failed]: 'Collect fees failed',
  },
  [TransactionType.APPROVAL]: {
    [TransactionStatus.Pending]: 'Approving',
    [TransactionStatus.Confirmed]: 'Approved',
    [TransactionStatus.Failed]: 'Approval failed',
  },
  [TransactionType.CLAIM]: {
    [TransactionStatus.Pending]: 'Claiming',
    [TransactionStatus.Confirmed]: 'Claimed',
    [TransactionStatus.Failed]: 'Claim failed',
  },
  [TransactionType.BUY]: {
    [TransactionStatus.Pending]: 'Buying',
    [TransactionStatus.Confirmed]: 'Bought',
    [TransactionStatus.Failed]: 'Buy failed',
  },
  [TransactionType.SEND]: {
    [TransactionStatus.Pending]: 'Sending',
    [TransactionStatus.Confirmed]: 'Sent',
    [TransactionStatus.Failed]: 'Send failed',
  },
  [TransactionType.RECEIVE]: {
    [TransactionStatus.Pending]: 'Receiving',
    [TransactionStatus.Confirmed]: 'Received',
    [TransactionStatus.Failed]: 'Receive failed',
  },
  [TransactionType.MINT]: {
    [TransactionStatus.Pending]: 'Minting',
    [TransactionStatus.Confirmed]: 'Minted',
    [TransactionStatus.Failed]: 'Mint failed',
  },
  [TransactionType.BURN]: {
    [TransactionStatus.Pending]: 'Burning',
    [TransactionStatus.Confirmed]: 'Burned',
    [TransactionStatus.Failed]: 'Burn failed',
  },
  [TransactionType.BORROW]: {
    [TransactionStatus.Pending]: 'Borrowing',
    [TransactionStatus.Confirmed]: 'Borrowed',
    [TransactionStatus.Failed]: 'Borrow failed',
  },
  [TransactionType.REPAY]: {
    [TransactionStatus.Pending]: 'Repaying',
    [TransactionStatus.Confirmed]: 'Repaid',
    [TransactionStatus.Failed]: 'Repay failed',
  },
  [TransactionType.DEPLOY]: {
    [TransactionStatus.Pending]: 'Deploying',
    [TransactionStatus.Confirmed]: 'Deployed',
    [TransactionStatus.Failed]: 'Deploy failed',
  },
  [TransactionType.CANCEL]: {
    [TransactionStatus.Pending]: 'Cancelling',
    [TransactionStatus.Confirmed]: 'Cancelled',
    [TransactionStatus.Failed]: 'Cancel failed',
  },
  [TransactionType.DEPOSIT_LIQUIDITY_STAKING]: {
    [TransactionStatus.Pending]: 'Depositing',
    [TransactionStatus.Confirmed]: 'Deposited',
    [TransactionStatus.Failed]: 'Deposit failed',
  },
  [TransactionType.WITHDRAW_LIQUIDITY_STAKING]: {
    [TransactionStatus.Pending]: 'Withdrawing',
    [TransactionStatus.Confirmed]: 'Withdrew',
    [TransactionStatus.Failed]: 'Withdraw failed',
  },
  [TransactionType.ADD_LIQUIDITY_V2_POOL]: {
    [TransactionStatus.Pending]: 'Adding V2 liquidity',
    [TransactionStatus.Confirmed]: 'Added V2 liquidity',
    [TransactionStatus.Failed]: 'Add V2 liquidity failed',
  },
  [TransactionType.MIGRATE_LIQUIDITY_V3]: {
    [TransactionStatus.Pending]: 'Migrating liquidity',
    [TransactionStatus.Confirmed]: 'Migrated liquidity',
    [TransactionStatus.Failed]: 'Migrate liquidity failed',
  },
}

export const CancelledTransactionTitleTable: { [key in TransactionType]: string } = {
  [TransactionType.SWAP]: 'Swap cancelled',
  [TransactionType.WRAP]: 'Wrap cancelled',
  [TransactionType.ADD_LIQUIDITY_V3_POOL]: 'Add liquidity cancelled',
  [TransactionType.REMOVE_LIQUIDITY_V3]: 'Remove liquidity cancelled',
  [TransactionType.CREATE_V3_POOL]: 'Create pool cancelled',
  [TransactionType.COLLECT_FEES]: 'Collect fees cancelled',
  [TransactionType.APPROVAL]: 'Approval cancelled',
  [TransactionType.CLAIM]: 'Claim cancelled',
  [TransactionType.BUY]: 'Buy cancelled',
  [TransactionType.SEND]: 'Send cancelled',
  [TransactionType.RECEIVE]: 'Receive cancelled',
  [TransactionType.MINT]: 'Mint cancelled',
  [TransactionType.BURN]: 'Burn cancelled',
  [TransactionType.BORROW]: 'Borrow cancelled',
  [TransactionType.REPAY]: 'Repay cancelled',
  [TransactionType.DEPLOY]: 'Deploy cancelled',
  [TransactionType.CANCEL]: 'Cancellation cancelled',
  [TransactionType.DEPOSIT_LIQUIDITY_STAKING]: 'Deposit cancelled',
  [TransactionType.WITHDRAW_LIQUIDITY_STAKING]: 'Withdrawal cancelled',
  [TransactionType.ADD_LIQUIDITY_V2_POOL]: 'Add V2 liquidity cancelled',
  [TransactionType.MIGRATE_LIQUIDITY_V3]: 'Migrate liquidity cancelled',
}

const AlternateTransactionTitleTable: { [key in TransactionType]?: { [state in TransactionStatus]: string } } = {
  [TransactionType.WRAP]: {
    [TransactionStatus.Pending]: 'Unwrapping',
    [TransactionStatus.Confirmed]: 'Unwrapped',
    [TransactionStatus.Failed]: 'Unwrap failed',
  },
  [TransactionType.APPROVAL]: {
    [TransactionStatus.Pending]: 'Revoking approval',
    [TransactionStatus.Confirmed]: 'Revoked approval',
    [TransactionStatus.Failed]: 'Revoke approval failed',
  },
}

export function getActivityTitle(type: TransactionType, status: TransactionStatus, alternate?: boolean) {
  if (alternate) {
    const alternateTitle = AlternateTransactionTitleTable[type]
    if (alternateTitle !== undefined) return alternateTitle[status]
  }
  return TransactionTitleTable[type][status]
}
