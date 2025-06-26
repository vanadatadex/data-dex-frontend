"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[5841],{55841:(e,n,t)=>{t.r(n),t.d(n,{default:()=>w});var a=t(9776),s=t(50277),i=t(27363),o=t(77781),r=t(48612),d=t(21907),l=t.n(d),c=t(81824),p=t(85431),h=t(82501);const u=p.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,f=(0,p.default)(u)`
  gap: 30px;
`,m=(0,p.default)(u)`
  flex: 1;
  justify-content: center;
  gap: 50px;
  padding: 10px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    justify-content: space-between;
    padding-top: 64px;
  }
`,g=p.default.div`
  max-width: 1024px;
  overflow: hidden;
`;function w(){const e=(0,r.a)()?h.PR.LargeHeader:h.PR.Hero;return(0,a.jsxs)(m,{children:[(0,a.jsx)(f,{children:(0,a.jsx)(u,{children:(0,a.jsx)(e,{children:"What is Horswap?"})})}),(0,a.jsx)(o.mm,{gap:"md",children:(0,a.jsx)(g,{children:(0,a.jsx)(l(),{source:"# Horswap is an improved Uniswap Interface\nHorswap is a fork of [Uniswap Interface v4.266.2](https://github.com/Uniswap/interface/releases/tag/v4.266.2). The version v4.266.2 is the last version without added UI fees and that would still allow users to do local routing. Horswap has then significantly improved the interface's censorship resistance and privacy.\n\nHere are the significant changes:\n- Changed Uniswap branding to Horswap branding\n- Removed Uniswap privacy policy\n- Removed all analytics queries (Uniswap interface is really noisy in reporting everything you do to their analytics system)\n- Removed support for wallet connect wallets (Unfortunately these require centralized server to function)\n- Changed socials to point to dark.florist equivalents\n- Removed copyright notices for Uniswap\n- Removed blacklisted tokens and user addresses\n- Replaced the default RPC (Infura, which censors) with Keydonix (does not censor)\n- Removed Moonpay (a centralized fiat payment processsor)\n- Removed NFT related features (unfortunately these only function by using centralized services)\n- Removed Subgraph (unfortunately this is also a centralized service)\n- Removed pages that require subgraph (mini portfolio, portfolio, NFTs, token pages, pool details, search bar etc)\n- Removed fiat currency selector (requires subgraph)\n- Removed external routing, all routing is done using the default RPC or users wallet RPC\n- Removed UniswapX (UniswapX depends on centralized servers)\n- Settings have been moved to where the mini portfolio used to be\n- Changed token pricing to be from a simulated swap with USDC, and it is shown to users that this is in USDC (not in dollars)\n- Removed claim UNI tokens popup\n- Added docker building and deployment to IPFS\n\nYou can see all the changes by [comparing Horswap to Uniswap Interface V4.266.2](https://github.com/Uniswap/interface/compare/v4.266.2...DarkFlorist:Horswap:main). You can also find the whole codebase in [GitHub](https://github.com/DarkFlorist/Horswap/).\n\t\t\t\t\t".replace(/[\n\r]/g,"\n")})})}),(0,a.jsx)(i.Au,{as:c.N_,to:"/",children:(0,a.jsx)(s.x6,{id:"3LK7dH"})})]})}}}]);
//# sourceMappingURL=5841.b9e51238.chunk.js.map