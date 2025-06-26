"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[9930],{23572:(e,t,n)=>{n.d(t,{U:()=>r});var d=n(51995),i=n(34295);function r(e){if(e.isNative)return e;const t=(0,d.g4)(e.chainId);return t&&i.Im[t]?.equals(e)?(0,i.cz)(e.chainId):e}},55359:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var d=n(9776),i=n(50277),r=n(43256),a=n(53032),s=n(62977),o=n(53055),l=n.n(o),c=n(65868),u=n(22435),x=n(81824),p=n(41197),h=n(85431),m=n(82501),j=n(27363),g=n(23257),f=n(77781),A=n(57547),k=n(34664),w=n(15285),y=n(29177),R=n(30165),v=n(18109),T=n(86206),b=n(58962),I=n(78476),_=n(63901),B=n(94293),C=n(94313),S=n(59881),M=n(3625),E=n(34295);const N=new I.KA(_.HV),W={1:[{tokens:[E.Im[C.ChainId.MAINNET],E.dM],stakingRewardAddress:"0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711"},{tokens:[E.Im[C.ChainId.MAINNET],E.pP],stakingRewardAddress:"0x7FBa4B8Dc5E7616e59622806932DBea72537A56b"},{tokens:[E.Im[C.ChainId.MAINNET],E.pI],stakingRewardAddress:"0x6C3e4cb2E96B01F4b866965A91ed4437839A121a"},{tokens:[E.Im[C.ChainId.MAINNET],E.BC],stakingRewardAddress:"0xCA35e32e7926b96A9988f61d510E038108d8068e"}]};var q=n(63885);const D=(0,h.default)(f.mm)`
  max-width: 640px;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0px 8px;
  `};
`,z=(0,h.default)(A.pL)`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  margin: 0 0 16px 0;
  overflow: hidden;
`,F=(0,h.default)(w.JA)`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
    flex-direction: column-reverse;
  `};
`,P=(0,h.default)(w.Bp)`
  gap: 8px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  `};
`,$=(0,h.default)(j.$$)`
  height: 40px;
  width: fit-content;
  border-radius: 12px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,H=(0,h.default)(j.nR)`
  height: 40px;
  width: fit-content;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,K=h.default.div`
  border: 1px solid ${({theme:e})=>e.neutral2};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function L(){const e=(0,h.useTheme)(),{account:t}=(0,r.useWeb3React)(),n=(0,s.S)();let o=(0,q.K8)();n||(o=[]);const I=(0,c.useMemo)(()=>o.map(e=>({liquidityToken:(0,q.lg)(e),tokens:e})),[o]),_=(0,c.useMemo)(()=>I.map(e=>e.liquidityToken),[I]),[L,J]=(0,b.Tz)(t??void 0,_),G=(0,c.useMemo)(()=>I.filter(({liquidityToken:e})=>L[e.address]?.greaterThan("0")),[I,L]),U=(0,T.hM)(G.map(({tokens:e})=>e)),O=J||U?.length<G.length||U?.some(e=>!e),Q=U.map(([,e])=>e).filter(e=>Boolean(e)),V=function(e){const{chainId:t,account:n}=(0,r.useWeb3React)(),d=(0,S.A)(),i=(0,c.useMemo)(()=>t?W[t]?.filter(t=>void 0===e||null!==e&&e.involvesToken(t.tokens[0])&&e.involvesToken(t.tokens[1]))??[]:[],[t,e]),a=t?E.nf[t]:void 0,s=(0,c.useMemo)(()=>i.map(({stakingRewardAddress:e})=>e),[i]),o=(0,c.useMemo)(()=>[n??void 0],[n]),u=(0,M._l)(s,N,"balanceOf",o),x=(0,M._l)(s,N,"earned",o),p=(0,M._l)(s,N,"totalSupply"),h=(0,M._l)(s,N,"rewardRate",void 0,M.bo),m=(0,M._l)(s,N,"periodFinish",void 0,M.bo);return(0,c.useMemo)(()=>t&&a?s.reduce((e,t,n)=>{const r=u[n],s=x[n],o=p[n],c=h[n],j=m[n];if(!r?.loading&&!s?.loading&&o&&!o.loading&&c&&!c.loading&&j&&!j.loading){if(r?.error||s?.error||o.error||c.error||j.error)return console.error("Failed to load staking rewards info"),e;const u=i[n].tokens,x=new B.Pair(C.CurrencyAmount.fromRawAmount(u[0],"0"),C.CurrencyAmount.fromRawAmount(u[1],"0")),p=C.CurrencyAmount.fromRawAmount(x.liquidityToken,l().BigInt(r?.result?.[0]??0)),h=C.CurrencyAmount.fromRawAmount(x.liquidityToken,l().BigInt(o.result?.[0])),m=C.CurrencyAmount.fromRawAmount(a,l().BigInt(c.result?.[0])),g=(e,t,n)=>C.CurrencyAmount.fromRawAmount(a,l().greaterThan(t.quotient,l().BigInt(0))?l().divide(l().multiply(n.quotient,e.quotient),t.quotient):l().BigInt(0)),f=g(p,h,m),A=j.result?.[0]?.toNumber(),k=1e3*A,w=!A||!d||A>d.toNumber();e.push({stakingRewardAddress:t,tokens:i[n].tokens,periodFinish:k>0?new Date(k):void 0,earnedAmount:C.CurrencyAmount.fromRawAmount(a,l().BigInt(s?.result?.[0]??0)),rewardRate:f,totalRewardRate:m,stakedAmount:p,totalStakedAmount:h,getHypotheticalRewardRate:g,active:w})}return e},[]):[],[u,t,d,x,i,m,h,s,p,a])}(),Y=V?.filter(e=>l().greaterThan(e.stakedAmount.quotient,v.CL)),Z=(0,T.hM)(Y?.map(e=>e.tokens)),X=Q.filter(e=>0===Z?.map(e=>e[1]).filter(t=>t?.liquidityToken.address===e.liquidityToken.address).length);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(D,{children:[(0,d.jsxs)(z,{children:[(0,d.jsx)(A.LR,{}),(0,d.jsx)(A.jK,{}),(0,d.jsx)(A.yj,{children:(0,d.jsxs)(f.mm,{gap:"md",children:[(0,d.jsx)(w.JA,{children:(0,d.jsx)(m.PR.DeprecatedWhite,{fontWeight:535,children:(0,d.jsx)(i.x6,{id:"Vsr1yC"})})}),(0,d.jsx)(w.JA,{children:(0,d.jsx)(m.PR.DeprecatedWhite,{fontSize:14,children:(0,d.jsx)(i.x6,{id:"vRS32S"})})}),(0,d.jsx)(m.Gr,{style:{color:e.white,textDecoration:"underline"},target:"_blank",href:"https://docs.uniswap.org/contracts/v2/concepts/core-concepts/pools",children:(0,d.jsx)(m.PR.DeprecatedWhite,{fontSize:14,children:(0,d.jsx)(i.x6,{id:"7bNFf2"})})})]})}),(0,d.jsx)(A.LR,{}),(0,d.jsx)(A.jK,{})]}),n?(0,d.jsx)(f.mm,{gap:"lg",justify:"center",children:(0,d.jsxs)(f.mm,{gap:"md",style:{width:"100%"},children:[(0,d.jsxs)(F,{style:{marginTop:"1rem"},padding:"0",children:[(0,d.jsx)(m.QZ,{children:(0,d.jsx)(m.PR.DeprecatedMediumHeader,{style:{marginTop:"0.5rem",justifySelf:"flex-start"},children:(0,d.jsx)(i.x6,{id:"MbHgIE"})})}),(0,d.jsxs)(P,{children:[(0,d.jsx)(H,{as:x.N_,padding:"6px 8px",to:"/add/v2/ETH",children:(0,d.jsx)(i.x6,{id:"ma87bD"})}),(0,d.jsx)($,{id:"find-pool-button",as:x.N_,to:"/pools/v2/find",padding:"6px 8px",children:(0,d.jsx)(p.EY,{fontWeight:535,fontSize:16,children:(0,d.jsx)(i.x6,{id:"SkceS7"})})}),(0,d.jsx)($,{id:"join-pool-button",as:x.N_,to:"/add/v2/ETH",padding:"6px 8px",children:(0,d.jsx)(p.EY,{fontWeight:535,fontSize:16,children:(0,d.jsx)(i.x6,{id:"knGjuL"})})})]})]}),t?O?(0,d.jsx)(K,{children:(0,d.jsx)(m.PR.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,d.jsx)(y.nv,{children:(0,d.jsx)(i.x6,{id:"yQE2r9"})})})}):Q?.length>0||Z?.length>0?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(j.nR,{children:(0,d.jsx)(w.JA,{children:(0,d.jsx)(i.x6,{id:"vAuUUB",components:{0:(0,d.jsx)(m.Gr,{href:"https://v2.info.uniswap.org/account/"+t}),1:(0,d.jsx)("span",{})}})})}),X.map(e=>(0,d.jsx)(k.Ay,{pair:e},e.liquidityToken.address)),Z.map((e,t)=>e[1]&&(0,d.jsx)(k.Ay,{pair:e[1],stakedBalance:Y[t].stakedAmount},Y[t].stakingRewardAddress)),(0,d.jsx)(w.Bp,{justify:"center",style:{width:"100%"},children:(0,d.jsxs)(j.fK,{as:x.N_,to:"/migrate/v2",id:"import-pool-link",style:{padding:"8px 16px",margin:"0 4px",borderRadius:"12px",width:"fit-content",fontSize:"14px"},children:[(0,d.jsx)(u.A,{size:16,style:{marginRight:"8px"}}),(0,d.jsx)(i.x6,{id:"kBAezW"})]})})]}):(0,d.jsx)(K,{children:(0,d.jsx)(m.PR.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,d.jsx)(i.x6,{id:"erwMRf"})})}):(0,d.jsx)(g.Ay,{padding:"40px",children:(0,d.jsx)(m.PR.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,d.jsx)(i.x6,{id:"jWRT4F"})})})]})}):(0,d.jsx)(a.O,{})]}),(0,d.jsx)(R.j,{})]})}}}]);
//# sourceMappingURL=9930.3890c5cd.chunk.js.map