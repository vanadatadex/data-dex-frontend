# Vana Data DEx

An open source interface for Uniswap -- a protocol for decentralized exchange of Ethereum tokens.

The Data DEX frontend is a fork of [Uniswap Interface v4.266.2](https://github.com/Uniswap/interface/releases/tag/v4.266.2). The version v4.266.2 is the last version without added UI fees and that would still allow users to do local routing. Data DEX has then significantly improved the interface's censorship resistance and privacy.

Here are the significant changes:
- Changed Uniswap branding to Vana Data DEX branding
- Removed Uniswap privacy policy
- Removed all analytics queries (Uniswap interface is really noisy in reporting everything you do to their analytics system)
- Removed copyright notices for Uniswap
- Removed external routing, all routing is done using the default RPC or users wallet RPC
- Removed UniswapX (UniswapX depends on centralized servers)
- Settings have been moved to where the mini portfolio used to be
- Changed token pricing to be from a simulated swap with USDC, and it is shown to users that this is in USDC (not in dollars)
- Removed claim UNI tokens popup

You can see all the changes by [comparing Horseswap to Uniswap Interface V4.266.2](https://github.com/Uniswap/interface/compare/v4.266.2...DarkFlorist:Horswap:main)

