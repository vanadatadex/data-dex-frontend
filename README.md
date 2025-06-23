# Vana DataDex – Swap & Liquidity UI

This is the official frontend for the **Vana DataDex**, a decentralized interface for swapping tokens and managing liquidity on the VANA network.

It is a fork of [Uniswap Interface v4.266.2](https://github.com/Uniswap/interface) — the last version that:
- Does **not include UI fee logic**
- Supports **fully local routing**

---

## 🚀 Features

- ✅ **Uniswap V3 core functionality**: swap, pool creation, liquidity management
- 🎯 **VANA network integration** (RPC, token pricing, custom chain config)
- 🧠 **Privacy-first**: all analytics tracking and external API calls removed
- 💡 **Local routing**: no external relayers or UniswapX dependency
- 🧼 Cleaned up: removed Uniswap-specific branding, popups, and external UX
- 🛠 Settings moved to a cleaner location (formerly mini portfolio)

---

## 🔧 Getting Started

> You must have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed.

```bash
# Install dependencies
yarn

# Start local development server
yarn start
