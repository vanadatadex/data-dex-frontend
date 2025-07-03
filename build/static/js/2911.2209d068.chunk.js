"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[2911],{51150:(e,d,t)=>{t.d(d,{U:()=>r});var i=t(9157),n=t(93405);function r(e){var d;if(e.isNative)return e;const t=(0,i.g4)(e.chainId);return t&&null!==(d=n.Im[t])&&void 0!==d&&d.equals(e)?(0,n.cz)(e.chainId):e}},88296:(e,d,t)=>{t.r(d),t.d(d,{default:()=>L});var i=t(19984),n=t(54644),r=t(10530),o=t(7951),a=t(67197),l=t.n(a),s=t(54674),u=t(69465),c=t(4126),x=t(92947),p=t(96410),h=t(33121),m=t(50645),v=t(21959),j=t(75423),g=t(3327),f=t(74222),A=t(12763),k=t(66451),w=t(65311),y=t(92627),R=t(91128),T=t(23843),b=t(95626),I=t(63901),_=t(1151),B=t(53847),C=t(70623),S=t(66295),M=t(93405);const E=new b.KA(I.HV),N={1:[{tokens:[M.Im[B.ChainId.MAINNET],M.dM],stakingRewardAddress:"0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711"},{tokens:[M.Im[B.ChainId.MAINNET],M.pP],stakingRewardAddress:"0x7FBa4B8Dc5E7616e59622806932DBea72537A56b"},{tokens:[M.Im[B.ChainId.MAINNET],M.pI],stakingRewardAddress:"0x6C3e4cb2E96B01F4b866965A91ed4437839A121a"},{tokens:[M.Im[B.ChainId.MAINNET],M.BC],stakingRewardAddress:"0xCA35e32e7926b96A9988f61d510E038108d8068e"}]};var W=t(34342),q=t(33370);const D=(0,p.default)(j.mm)`
  max-width: 640px;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0px 8px;
  `};
`,z=(0,p.default)(g.pL)`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  margin: 0 0 16px 0;
  overflow: hidden;
`,F=(0,p.default)(A.JA)`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
    flex-direction: column-reverse;
  `};
`,P=(0,p.default)(A.Bp)`
  gap: 8px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  `};
`,$=(0,p.default)(m.$$)`
  height: 40px;
  width: fit-content;
  border-radius: 12px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,H=(0,p.default)(m.nR)`
  height: 40px;
  width: fit-content;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,K=p.default.div`
  border: 1px solid ${({theme:e})=>e.neutral2};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function L(){const e=(0,p.useTheme)(),{account:d}=(0,n.useWeb3React)(),t=(0,o.S)();let a=(0,W.K8)();t||(a=[]);const b=(0,s.useMemo)(()=>a.map(e=>({liquidityToken:(0,W.lg)(e),tokens:e})),[a]),I=(0,s.useMemo)(()=>b.map(e=>e.liquidityToken),[b]),[L,J]=(0,T.Tz)(null!==d&&void 0!==d?d:void 0,I),G=(0,s.useMemo)(()=>b.filter(({liquidityToken:e})=>{var d;return null===(d=L[e.address])||void 0===d?void 0:d.greaterThan("0")}),[b,L]),U=(0,R.hM)(G.map(({tokens:e})=>e)),O=J||(null===U||void 0===U?void 0:U.length)<G.length||(null===U||void 0===U?void 0:U.some(e=>!e)),Q=U.map(([,e])=>e).filter(e=>Boolean(e)),V=function(e){const{chainId:d,account:t}=(0,n.useWeb3React)(),i=(0,C.A)(),r=(0,s.useMemo)(()=>{var t,i;return d&&null!==(t=null===(i=N[d])||void 0===i?void 0:i.filter(d=>void 0===e||null!==e&&e.involvesToken(d.tokens[0])&&e.involvesToken(d.tokens[1])))&&void 0!==t?t:[]},[d,e]),o=d?M.nf[d]:void 0,a=(0,s.useMemo)(()=>r.map(({stakingRewardAddress:e})=>e),[r]),u=(0,s.useMemo)(()=>[null!==t&&void 0!==t?t:void 0],[t]),c=(0,S._l)(a,E,"balanceOf",u),x=(0,S._l)(a,E,"earned",u),p=(0,S._l)(a,E,"totalSupply"),h=(0,S._l)(a,E,"rewardRate",void 0,S.bo),m=(0,S._l)(a,E,"periodFinish",void 0,S.bo);return(0,s.useMemo)(()=>d&&o?a.reduce((e,d,t)=>{const n=c[t],a=x[t],s=p[t],u=h[t],v=m[t];if((null===n||void 0===n||!n.loading)&&(null===a||void 0===a||!a.loading)&&s&&!s.loading&&u&&!u.loading&&v&&!v.loading){var j,g,f,A,k,w,y,R;if(null!==n&&void 0!==n&&n.error||null!==a&&void 0!==a&&a.error||s.error||u.error||v.error)return console.error("Failed to load staking rewards info"),e;const c=r[t].tokens,x=new _.Pair(B.CurrencyAmount.fromRawAmount(c[0],"0"),B.CurrencyAmount.fromRawAmount(c[1],"0")),p=B.CurrencyAmount.fromRawAmount(x.liquidityToken,l().BigInt(null!==(j=null===n||void 0===n||null===(g=n.result)||void 0===g?void 0:g[0])&&void 0!==j?j:0)),h=B.CurrencyAmount.fromRawAmount(x.liquidityToken,l().BigInt(null===(f=s.result)||void 0===f?void 0:f[0])),m=B.CurrencyAmount.fromRawAmount(o,l().BigInt(null===(A=u.result)||void 0===A?void 0:A[0])),T=(e,d,t)=>B.CurrencyAmount.fromRawAmount(o,l().greaterThan(d.quotient,l().BigInt(0))?l().divide(l().multiply(t.quotient,e.quotient),d.quotient):l().BigInt(0)),b=T(p,h,m),I=null===(k=v.result)||void 0===k||null===(w=k[0])||void 0===w?void 0:w.toNumber(),C=1e3*I,S=!I||!i||I>i.toNumber();e.push({stakingRewardAddress:d,tokens:r[t].tokens,periodFinish:C>0?new Date(C):void 0,earnedAmount:B.CurrencyAmount.fromRawAmount(o,l().BigInt(null!==(y=null===a||void 0===a||null===(R=a.result)||void 0===R?void 0:R[0])&&void 0!==y?y:0)),rewardRate:b,totalRewardRate:m,stakedAmount:p,totalStakedAmount:h,getHypotheticalRewardRate:T,active:S})}return e},[]):[],[c,d,i,x,r,m,h,a,p,o])}(),Y=null===V||void 0===V?void 0:V.filter(e=>l().greaterThan(e.stakedAmount.quotient,y.CL)),Z=(0,R.hM)(null===Y||void 0===Y?void 0:Y.map(e=>e.tokens)),X=Q.filter(e=>0===(null===Z||void 0===Z?void 0:Z.map(e=>e[1]).filter(d=>(null===d||void 0===d?void 0:d.liquidityToken.address)===e.liquidityToken.address).length));return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(D,{children:[(0,q.jsxs)(z,{children:[(0,q.jsx)(g.LR,{}),(0,q.jsx)(g.jK,{}),(0,q.jsx)(g.yj,{children:(0,q.jsxs)(j.mm,{gap:"md",children:[(0,q.jsx)(A.JA,{children:(0,q.jsx)(h.PR.DeprecatedWhite,{fontWeight:535,children:(0,q.jsx)(i.x6,{id:"Vsr1yC"})})}),(0,q.jsx)(A.JA,{children:(0,q.jsx)(h.PR.DeprecatedWhite,{fontSize:14,children:(0,q.jsx)(i.x6,{id:"vRS32S"})})}),(0,q.jsx)(h.Gr,{style:{color:e.white,textDecoration:"underline"},target:"_blank",href:"https://docs.uniswap.org/contracts/v2/concepts/core-concepts/pools",children:(0,q.jsx)(h.PR.DeprecatedWhite,{fontSize:14,children:(0,q.jsx)(i.x6,{id:"7bNFf2"})})})]})}),(0,q.jsx)(g.LR,{}),(0,q.jsx)(g.jK,{})]}),t?(0,q.jsx)(j.mm,{gap:"lg",justify:"center",children:(0,q.jsxs)(j.mm,{gap:"md",style:{width:"100%"},children:[(0,q.jsxs)(F,{style:{marginTop:"1rem"},padding:"0",children:[(0,q.jsx)(h.QZ,{children:(0,q.jsx)(h.PR.DeprecatedMediumHeader,{style:{marginTop:"0.5rem",justifySelf:"flex-start"},children:(0,q.jsx)(i.x6,{id:"MbHgIE"})})}),(0,q.jsxs)(P,{children:[(0,q.jsx)(H,{as:c.N_,padding:"6px 8px",to:"/add/v2/ETH",children:(0,q.jsx)(i.x6,{id:"ma87bD"})}),(0,q.jsx)($,{id:"find-pool-button",as:c.N_,to:"/pools/v2/find",padding:"6px 8px",children:(0,q.jsx)(x.EY,{fontWeight:535,fontSize:16,children:(0,q.jsx)(i.x6,{id:"SkceS7"})})}),(0,q.jsx)($,{id:"join-pool-button",as:c.N_,to:"/add/v2/ETH",padding:"6px 8px",children:(0,q.jsx)(x.EY,{fontWeight:535,fontSize:16,children:(0,q.jsx)(i.x6,{id:"knGjuL"})})})]})]}),d?O?(0,q.jsx)(K,{children:(0,q.jsx)(h.PR.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,q.jsx)(k.nv,{children:(0,q.jsx)(i.x6,{id:"yQE2r9"})})})}):(null===Q||void 0===Q?void 0:Q.length)>0||(null===Z||void 0===Z?void 0:Z.length)>0?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(m.nR,{children:(0,q.jsx)(A.JA,{children:(0,q.jsx)(i.x6,{id:"vAuUUB",components:{0:(0,q.jsx)(h.Gr,{href:"https://v2.info.uniswap.org/account/"+d}),1:(0,q.jsx)("span",{})}})})}),X.map(e=>(0,q.jsx)(f.Ay,{pair:e},e.liquidityToken.address)),Z.map((e,d)=>e[1]&&(0,q.jsx)(f.Ay,{pair:e[1],stakedBalance:Y[d].stakedAmount},Y[d].stakingRewardAddress)),(0,q.jsx)(A.Bp,{justify:"center",style:{width:"100%"},children:(0,q.jsxs)(m.fK,{as:c.N_,to:"/migrate/v2",id:"import-pool-link",style:{padding:"8px 16px",margin:"0 4px",borderRadius:"12px",width:"fit-content",fontSize:"14px"},children:[(0,q.jsx)(u.A,{size:16,style:{marginRight:"8px"}}),(0,q.jsx)(i.x6,{id:"kBAezW"})]})})]}):(0,q.jsx)(K,{children:(0,q.jsx)(h.PR.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,q.jsx)(i.x6,{id:"erwMRf"})})}):(0,q.jsx)(v.Ay,{padding:"40px",children:(0,q.jsx)(h.PR.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,q.jsx)(i.x6,{id:"jWRT4F"})})})]})}):(0,q.jsx)(r.O,{})]}),(0,q.jsx)(w.j,{})]})}}}]);
//# sourceMappingURL=2911.2209d068.chunk.js.map