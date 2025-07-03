"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[5883],{3327:(e,n,i)=>{i.d(n,{qC:()=>u,LR:()=>s,jK:()=>a,yj:()=>c,pL:()=>l});var r=i(96410);const t=i.p+"static/media/big_unicorn.90ddcbf00b3ff1ad4495.png",o=i.p+"static/media/noise.3c7efafc83614205bd1a.png";var d=i(75423);const l=(0,r.default)(d.mm)`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #000000 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,s=r.default.span`
  background: url(${t});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,a=r.default.span`
  background: url(${o});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,c=(0,r.default)(d.mm)`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,u=r.default.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},12991:(e,n,i)=>{i.d(n,{A:()=>l,q:()=>d});var r=i(96410),t=i(3405),o=i(33370);const d=r.default.main`
  position: relative;
  margin-top: ${({$margin:e})=>null!==e&&void 0!==e?e:"0px"};
  max-width: ${({$maxWidth:e})=>null!==e&&void 0!==e?e:"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${t.M.default};
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
`;function l(e){return(0,o.jsx)(d,{...e})}},15042:(e,n,i)=>{i.d(n,{A:()=>t});var r=i(54674);function t(e,n,i=100){const[t,o]=(0,r.useState)(()=>e),d=(0,r.useRef)(),l=(0,r.useCallback)(e=>{o(e),d.current&&clearTimeout(d.current),d.current=setTimeout(()=>{n(e),d.current=void 0},i)},[i,n]);return(0,r.useEffect)(()=>{d.current&&(clearTimeout(d.current),d.current=void 0),o(e)},[e]),[t,l]}},53947:(e,n,i)=>{i.d(n,{U:()=>A,m:()=>w});var r=i(19984),t=i(54644),o=i(86642),d=i(41019),l=i(4126),s=i(85713),a=i(92947),c=i(26467),u=i(56119),x=i(11577),p=i(96410),h=i(33121),m=i(73141),g=i(12763),v=i(33370);const f=p.default.div`
  ${m.BI};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,j=(0,p.default)(l.N_)`
  flex: ${({flex:e})=>null!==e&&void 0!==e?e:"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,y=(0,p.default)(h.PR.SubHeaderLarge)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,b=(0,p.default)(d.A)`
  color: ${({theme:e})=>e.neutral1};
`;function A({origin:e}){return(0,v.jsx)(f,{children:(0,v.jsxs)(g.JA,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,v.jsx)(l.N_,{to:e,children:(0,v.jsx)(b,{})}),(0,v.jsx)(y,{children:(0,v.jsx)(r.x6,{id:"LCFvJr"})})]})})}const k=(0,p.default)(h.PR.SubHeaderLarge)`
  flex: 1;
  margin: auto;
`;function w({adding:e,creating:n,autoSlippage:i,positionID:d,children:l}){const{chainId:h}=(0,t.useWeb3React)(),m=(0,p.useTheme)(),y=(0,c.j)(),A=(0,s.zy)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(d?`/${d.toString()}`:"");return(0,v.jsx)(f,{children:(0,v.jsxs)(g.JA,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,v.jsx)(j,{to:A,onClick:()=>{e&&(y((0,u.JE)()),y((0,x.JE)()))},flex:l?"1":void 0,children:(0,v.jsx)(b,{stroke:m.neutral2})}),(0,v.jsx)(k,{textAlign:l?"start":"center",children:n?(0,v.jsx)(r.x6,{id:"ma87bD"}):e?(0,v.jsx)(r.x6,{id:"E6MqGy"}):(0,v.jsx)(r.x6,{id:"cJtosk"})}),l&&(0,v.jsx)(a.az,{style:{marginRight:".5rem"},children:l}),(0,v.jsx)(o.A,{autoSlippage:i,chainId:h})]})})}},84962:(e,n,i)=>{i.d(n,{A:()=>l});var r=i(54674),t=i(96410),o=i(33370);const d=t.default.input`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: ${({theme:e})=>e.accent1};
    border-radius: 100%;
    border: none;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-moz-range-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    border: none;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-ms-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.accent1}, ${({theme:e})=>e.accent1});
    height: 2px;
  }

  &::-moz-range-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.surface4}, ${({theme:e})=>e.surface2});
    height: 2px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;

    background: ${({theme:e})=>e.surface4};
    height: 2px;
  }
  &::-ms-fill-lower {
    background: ${({theme:e})=>e.surface4};
  }
  &::-ms-fill-upper {
    background: ${({theme:e})=>e.surface2};
  }
`;function l({value:e,onChange:n,min:i=0,step:t=1,max:l=100,size:s=28,...a}){const c=(0,r.useCallback)(e=>{n(parseInt(e.target.value))},[n]);return(0,o.jsx)(d,{size:s,...a,type:"range",value:e,style:{padding:"15px 0"},onChange:c,"aria-labelledby":"input slider",step:t,min:i,max:l})}},90450:(e,n,i)=>{i.d(n,{A:()=>s});var r=i(53847),t=i(67197),o=i.n(t),d=i(33370);const l=new r.Fraction(o().BigInt(1),o().BigInt(1e6));function s({currencyAmount:e,significantDigits:n=4}){return(0,d.jsx)(d.Fragment,{children:e.equalTo(o().BigInt(0))?"0":e.greaterThan(l)?e.toSignificant(n):`<${l.toSignificant(1)}`})}},97650:(e,n,i)=>{i.r(n),i.d(n,{default:()=>ne});var r=i(19984),t=i(34203),o=i(65755),d=i(53847),l=i(54644),s=i(272),a=i(50645),c=i(21959),u=i(75423),x=i(20295),p=i(3327),h=i(90450),m=i(30850),g=i(87014),v=i(53947),f=i(12763),j=i(84962),y=i(34193),b=i(9157),A=i(94999),k=i(15042),w=i(265),z=i(25916),S=i(3517),$=i(42831),C=i(54674),L=i(85713),q=i(92947),I=i(17567),R=i(94687),W=i(5708),E=i(26467),J=i(51150),Y=i(70602),T=i(33370);function V(){return(0,E.G)(e=>e.burnV3)}var P=i(47519),B=i(34342),_=i(96410),D=i(33121),M=i(6612),O=i(57235),F=i(93405),U=i(19456),K=i(38740),N=i(97805),G=i(12991),H=i(5294);const Q=_.default.div`
  position: relative;
  padding: 20px;
  min-width: 460px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
    min-width: 340px;
  `};
`,X=(0,_.default)(H.LJ)`
  font-size: 12px;
`,Z=(0,_.default)(q.EY)`
  font-size: 40px;
  font-weight: 535;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
     font-size: 24px
  `};
`,ee=new d.Percent(5,100);function ne(){const{chainId:e}=(0,l.useWeb3React)(),{tokenId:n}=(0,L.g)(),i=(0,L.zy)(),r=(0,C.useMemo)(()=>{try{return t.gH.from(n)}catch{return null}},[n]),{position:o,loading:d}=(0,z.C)(null!==r&&void 0!==r?r:void 0);return null===r||r.eq(0)?(0,T.jsx)(L.C5,{to:{...i,pathname:"/pools"},replace:!0}):(0,b.Gv)(e)&&(d||o)?(0,T.jsx)(ie,{tokenId:r}):(0,T.jsx)($.PositionPageUnsupportedContent,{})}function ie({tokenId:e}){var n,i,t,b,$,L,H,ne,ie,re,te;const{position:oe}=(0,z.C)(e),de=(0,_.useTheme)(),{account:le,chainId:se,provider:ae}=(0,l.useWeb3React)(),[ce,ue]=(0,C.useState)(!1),xe=(0,S.A)(se).wrapped.symbol,{percent:pe}=V(),{position:he,liquidityPercentage:me,liquidityValue0:ge,liquidityValue1:ve,feeValue0:fe,feeValue1:je,outOfRange:ye,error:be}=function(e,n=!1){const{account:i}=(0,l.useWeb3React)(),{percent:t}=V(),s=(0,I.rd)(null===e||void 0===e?void 0:e.token0),a=(0,I.rd)(null===e||void 0===e?void 0:e.token1),[,c]=(0,R.Q)(null!==s&&void 0!==s?s:void 0,null!==a&&void 0!==a?a:void 0,null===e||void 0===e?void 0:e.fee),u=(0,C.useMemo)(()=>c&&null!==e&&void 0!==e&&e.liquidity&&"number"===typeof(null===e||void 0===e?void 0:e.tickLower)&&"number"===typeof(null===e||void 0===e?void 0:e.tickUpper)?new o.Position({pool:c,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper}):void 0,[c,e]),x=new d.Percent(t,100),p=u?x.multiply(u.amount0.quotient).quotient:void 0,h=u?x.multiply(u.amount1.quotient).quotient:void 0,m=s&&p?d.CurrencyAmount.fromRawAmount(n?s:(0,J.U)(s),p):void 0,g=a&&h?d.CurrencyAmount.fromRawAmount(n?a:(0,J.U)(a),h):void 0,[v,f]=(0,W.R)(null!==c&&void 0!==c?c:void 0,null===e||void 0===e?void 0:e.tokenId,n),j=!(!c||!e)&&(c.tickCurrent<e.tickLower||c.tickCurrent>e.tickUpper);let y;var b;return i||(y=(0,T.jsx)(r.x6,{id:"VHOVEJ"})),0===t&&(y=null!==(b=y)&&void 0!==b?b:(0,T.jsx)(r.x6,{id:"Sta9CR"})),{position:u,liquidityPercentage:x,liquidityValue0:m,liquidityValue1:g,feeValue0:v,feeValue1:f,outOfRange:j,error:y}}(oe,ce),{onPercentSelect:Ae}=function(){const e=(0,E.j)();return{onPercentSelect:(0,C.useCallback)(n=>{e((0,Y.g)({percent:n}))},[e])}}(),ke=null===oe||void 0===oe||null===(n=oe.liquidity)||void 0===n?void 0:n.eq(0),[we,ze]=(0,k.A)(pe,Ae),Se=(0,w.A)(),$e=(0,B.co)(ee),[Ce,Le]=(0,C.useState)(!1),[qe,Ie]=(0,C.useState)(!1),[Re,We]=(0,C.useState)(),Ee=(0,P.OQ)(),Je=(0,A.TA)(),Ye=(0,C.useCallback)(async()=>{if(Ie(!0),!Je||!ge||!ve||!Se||!le||!se||!he||!me||!ae)return;const{calldata:n,value:i}=o.NonfungiblePositionManager.removeCallParameters(he,{tokenId:e.toString(),liquidityPercentage:me,slippageTolerance:$e,deadline:Se.toString(),collectOptions:{expectedCurrencyOwed0:null!==fe&&void 0!==fe?fe:d.CurrencyAmount.fromRawAmount(ge.currency,0),expectedCurrencyOwed1:null!==je&&void 0!==je?je:d.CurrencyAmount.fromRawAmount(ve.currency,0),recipient:le}}),r={to:Je.address,data:n,value:i},t=await ae.getSigner().getChainId();if(se!==t)throw new M.$c;ae.getSigner().estimateGas(r).then(e=>{const n={...r,gasLimit:(0,K.K)(e)};return ae.getSigner().sendTransaction(n).then(e=>{We(e.hash),Ie(!1),Ee(e,{type:U.D.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,N.V)(ge.currency),quoteCurrencyId:(0,N.V)(ve.currency),expectedAmountBaseRaw:ge.quotient.toString(),expectedAmountQuoteRaw:ve.quotient.toString()})})}).catch(e=>{Ie(!1),console.error(e)})},[Je,ge,ve,Se,le,se,he,me,ae,e,$e,fe,je,Ee]),Te=(0,C.useCallback)(()=>{Le(!1),Re&&ze(0),Ie(!1),We("")},[ze,Re]),Ve=(0,T.jsx)(r.x6,{id:"F8SmOj",values:{0:null===ge||void 0===ge?void 0:ge.toSignificant(6),1:null===ge||void 0===ge||null===(i=ge.currency)||void 0===i?void 0:i.symbol,2:null===ve||void 0===ve?void 0:ve.toSignificant(6),3:null===ve||void 0===ve||null===(t=ve.currency)||void 0===t?void 0:t.symbol}});function Pe(){var e,n,i,t;return(0,T.jsxs)(u.mm,{gap:"sm",style:{padding:"16px"},children:[(0,T.jsxs)(f.JA,{align:"flex-end",children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,children:(0,T.jsx)(r.x6,{id:"I4bzgz",values:{0:null===ge||void 0===ge||null===(e=ge.currency)||void 0===e?void 0:e.symbol}})}),(0,T.jsxs)(f.Bp,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ge&&(0,T.jsx)(h.A,{currencyAmount:ge})}),(0,T.jsx)(g.A,{size:"20px",style:{marginLeft:"8px"},currency:null===ge||void 0===ge?void 0:ge.currency})]})]}),(0,T.jsxs)(f.JA,{align:"flex-end",children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,children:(0,T.jsx)(r.x6,{id:"I4bzgz",values:{0:null===ve||void 0===ve||null===(n=ve.currency)||void 0===n?void 0:n.symbol}})}),(0,T.jsxs)(f.Bp,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ve&&(0,T.jsx)(h.A,{currencyAmount:ve})}),(0,T.jsx)(g.A,{size:"20px",style:{marginLeft:"8px"},currency:null===ve||void 0===ve?void 0:ve.currency})]})]}),null!==fe&&void 0!==fe&&fe.greaterThan(0)||null!==je&&void 0!==je&&je.greaterThan(0)?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(D.PR.DeprecatedItalic,{fontSize:12,color:de.neutral2,textAlign:"left",padding:"8px 0 0 0",children:(0,T.jsx)(r.x6,{id:"QwTcLK"})}),(0,T.jsxs)(f.JA,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,children:(0,T.jsx)(r.x6,{id:"Vn8uJL",values:{0:null===fe||void 0===fe||null===(i=fe.currency)||void 0===i?void 0:i.symbol}})}),(0,T.jsxs)(f.Bp,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:fe&&(0,T.jsx)(h.A,{currencyAmount:fe})}),(0,T.jsx)(g.A,{size:"20px",style:{marginLeft:"8px"},currency:null===fe||void 0===fe?void 0:fe.currency})]})]}),(0,T.jsxs)(f.JA,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,children:(0,T.jsx)(r.x6,{id:"Vn8uJL",values:{0:null===je||void 0===je||null===(t=je.currency)||void 0===t?void 0:t.symbol}})}),(0,T.jsxs)(f.Bp,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:je&&(0,T.jsx)(h.A,{currencyAmount:je})}),(0,T.jsx)(g.A,{size:"20px",style:{marginLeft:"8px"},currency:null===je||void 0===je?void 0:je.currency})]})]})]}):null,(0,T.jsx)(a.$$,{mt:"16px",onClick:Ye,children:(0,T.jsx)(r.x6,{id:"t/YqKh"})})]})}const Be=Boolean((null===ge||void 0===ge?void 0:ge.currency)&&(null===ve||void 0===ve?void 0:ve.currency)&&(ge.currency.isNative||ve.currency.isNative||(null===(b=F.Im[ge.currency.chainId])||void 0===b?void 0:b.equals(ge.currency.wrapped))||(null===($=F.Im[ve.currency.chainId])||void 0===$?void 0:$.equals(ve.currency.wrapped))));return(0,T.jsxs)(u.mm,{children:[(0,T.jsx)(O.A,{isOpen:Ce,onDismiss:Te,attemptingTxn:qe,hash:null!==Re&&void 0!==Re?Re:"",reviewContent:()=>(0,T.jsx)(O.Y,{title:(0,T.jsx)(r.x6,{id:"cJtosk"}),onDismiss:Te,topContent:Pe}),pendingText:Ve}),(0,T.jsxs)(G.A,{$maxWidth:"unset",children:[(0,T.jsx)(v.m,{creating:!1,adding:!1,positionID:e.toString(),autoSlippage:ee}),(0,T.jsx)(Q,{children:oe?(0,T.jsxs)(u.mm,{gap:"lg",children:[(0,T.jsxs)(f.JA,{children:[(0,T.jsxs)(f.Bp,{children:[(0,T.jsx)(x.A,{currency0:null===ge||void 0===ge?void 0:ge.currency,currency1:null===ve||void 0===ve?void 0:ve.currency,size:20,margin:!0}),(0,T.jsx)(D.PR.DeprecatedLabel,{ml:"10px",fontSize:"20px",id:"remove-liquidity-tokens",children:`${null===ge||void 0===ge||null===(L=ge.currency)||void 0===L?void 0:L.symbol}/${null===ve||void 0===ve||null===(H=ve.currency)||void 0===H?void 0:H.symbol}`})]}),(0,T.jsx)(s.A,{removed:ke,inRange:!ye})]}),(0,T.jsx)(c.R4,{children:(0,T.jsxs)(u.mm,{gap:"md",children:[(0,T.jsx)(D.PR.DeprecatedMain,{fontWeight:485,children:(0,T.jsx)(r.x6,{id:"hehnjM"})}),(0,T.jsxs)(f.JA,{children:[(0,T.jsx)(Z,{children:(0,T.jsx)(r.x6,{id:"AGSFTV",values:{percentForSlider:we}})}),(0,T.jsxs)(f.eF,{gap:"4px",justify:"flex-end",children:[(0,T.jsx)(X,{onClick:()=>Ae(25),width:"20%",children:(0,T.jsx)(r.x6,{id:"Xeb0wM"})}),(0,T.jsx)(X,{onClick:()=>Ae(50),width:"20%",children:(0,T.jsx)(r.x6,{id:"wW+u6Y"})}),(0,T.jsx)(X,{onClick:()=>Ae(75),width:"20%",children:(0,T.jsx)(r.x6,{id:"N+aNR1"})}),(0,T.jsx)(X,{onClick:()=>Ae(100),width:"20%",children:(0,T.jsx)(r.x6,{id:"CK1KXz"})})]})]}),(0,T.jsx)(j.A,{value:we,onChange:ze})]})}),(0,T.jsx)(c.R4,{children:(0,T.jsxs)(u.mm,{gap:"md",children:[(0,T.jsxs)(f.JA,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,id:"remove-pooled-tokena-symbol",children:(0,T.jsx)(r.x6,{id:"I4bzgz",values:{0:null===ge||void 0===ge||null===(ne=ge.currency)||void 0===ne?void 0:ne.symbol}})}),(0,T.jsxs)(f.Bp,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ge&&(0,T.jsx)(h.A,{currencyAmount:ge})}),(0,T.jsx)(g.A,{size:"20px",style:{marginLeft:"8px"},currency:null===ge||void 0===ge?void 0:ge.currency})]})]}),(0,T.jsxs)(f.JA,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,id:"remove-pooled-tokenb-symbol",children:(0,T.jsx)(r.x6,{id:"I4bzgz",values:{0:null===ve||void 0===ve||null===(ie=ve.currency)||void 0===ie?void 0:ie.symbol}})}),(0,T.jsxs)(f.Bp,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ve&&(0,T.jsx)(h.A,{currencyAmount:ve})}),(0,T.jsx)(g.A,{size:"20px",style:{marginLeft:"8px"},currency:null===ve||void 0===ve?void 0:ve.currency})]})]}),null!==fe&&void 0!==fe&&fe.greaterThan(0)||null!==je&&void 0!==je&&je.greaterThan(0)?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(p.qC,{}),(0,T.jsxs)(f.JA,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,children:(0,T.jsx)(r.x6,{id:"Vn8uJL",values:{0:null===fe||void 0===fe||null===(re=fe.currency)||void 0===re?void 0:re.symbol}})}),(0,T.jsxs)(f.Bp,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:fe&&(0,T.jsx)(h.A,{currencyAmount:fe})}),(0,T.jsx)(g.A,{size:"20px",style:{marginLeft:"8px"},currency:null===fe||void 0===fe?void 0:fe.currency})]})]}),(0,T.jsxs)(f.JA,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,children:(0,T.jsx)(r.x6,{id:"Vn8uJL",values:{0:null===je||void 0===je||null===(te=je.currency)||void 0===te?void 0:te.symbol}})}),(0,T.jsxs)(f.Bp,{children:[(0,T.jsx)(q.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:je&&(0,T.jsx)(h.A,{currencyAmount:je})}),(0,T.jsx)(g.A,{size:"20px",style:{marginLeft:"8px"},currency:null===je||void 0===je?void 0:je.currency})]})]})]}):null]})}),Be&&(0,T.jsxs)(f.JA,{children:[(0,T.jsx)(D.PR.DeprecatedMain,{children:(0,T.jsx)(r.x6,{id:"oCijuv",values:{nativeWrappedSymbol:xe}})}),(0,T.jsx)(y.A,{id:"receive-as-weth",isActive:ce,toggle:()=>ue(e=>!e)})]}),(0,T.jsx)("div",{style:{display:"flex"},children:(0,T.jsx)(u.mm,{gap:"md",style:{flex:"1"},children:(0,T.jsx)(a.m$,{confirmed:!1,disabled:ke||0===pe||!ge,onClick:()=>Le(!0),children:ke?(0,T.jsx)(r.x6,{id:"D87pha"}):null!==be&&void 0!==be?be:(0,T.jsx)(r.x6,{id:"t/YqKh"})})})})]}):(0,T.jsx)(m.A,{})})]})]})}}}]);
//# sourceMappingURL=5883.fcebb485.chunk.js.map