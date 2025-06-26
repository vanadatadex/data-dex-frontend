"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[9382],{1428:(e,n,r)=>{r.d(n,{A:()=>a});var t=r(9776),i=r(65868);const s=r(85431).default.input`
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
`;function a({value:e,onChange:n,min:r=0,step:a=1,max:c=100,size:o=28,...d}){const u=(0,i.useCallback)(e=>{n(parseInt(e.target.value))},[n]);return(0,t.jsx)(s,{size:o,...d,type:"range",value:e,style:{padding:"15px 0"},onChange:u,"aria-labelledby":"input slider",step:a,min:r,max:c})}},40923:(e,n,r)=>{r.r(n),r.d(n,{default:()=>ne});var t=r(9776),i=r(20033),s=r(50277),a=r(61361),c=r(94313),o=r(43256),d=r(5058),u=r(27363),l=r(23257),x=r(77781),p=r(67821),h=r(57547),m=r(83336),g=r(40092),f=r(97316),j=r(85985),y=r(15285),b=r(1428),v=r(28887),A=r(51995),k=r(75614),w=r(82188),z=r(70499),S=r(89702),$=r(69827),C=r(22179),L=r(65868),q=r(69383),I=r(41197),R=r(71180),W=r(96367),E=r(6990),J=r(30005),Y=r(23572),T=r(69872);function V(){return(0,J.G)(e=>e.burnV3)}var P=r(58009),B=r(63885),_=r(85431),D=r(82501),M=r(82702),O=r(23293),F=r(34295),U=r(8018),K=r(80526),N=r(7511),G=r(47398),H=r(83704);const Q=_.default.div`
  position: relative;
  padding: 20px;
  min-width: 460px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
    min-width: 340px;
  `};
`,X=(0,_.default)(H.LJ)`
  font-size: 12px;
`,Z=(0,_.default)(I.EY)`
  font-size: 40px;
  font-weight: 535;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
     font-size: 24px
  `};
`,ee=new c.Percent(5,100);function ne(){const{chainId:e}=(0,o.useWeb3React)(),{tokenId:n}=(0,q.g)(),r=(0,q.zy)(),s=(0,L.useMemo)(()=>{try{return i.gH.from(n)}catch{return null}},[n]),{position:a,loading:c}=(0,S.C)(s??void 0);return null===s||s.eq(0)?(0,t.jsx)(q.C5,{to:{...r,pathname:"/pools"},replace:!0}):(0,A.Gv)(e)&&(c||a)?(0,t.jsx)(re,{tokenId:s}):(0,t.jsx)(C.PositionPageUnsupportedContent,{})}function re({tokenId:e}){const{position:n}=(0,S.C)(e),r=(0,_.useTheme)(),{account:i,chainId:A,provider:C}=(0,o.useWeb3React)(),[q,H]=(0,L.useState)(!1),ne=(0,$.A)(A).wrapped.symbol,{percent:re}=V(),{position:te,liquidityPercentage:ie,liquidityValue0:se,liquidityValue1:ae,feeValue0:ce,feeValue1:oe,outOfRange:de,error:ue}=function(e,n=!1){const{account:r}=(0,o.useWeb3React)(),{percent:i}=V(),d=(0,R.rd)(e?.token0),u=(0,R.rd)(e?.token1),[,l]=(0,W.Q)(d??void 0,u??void 0,e?.fee),x=(0,L.useMemo)(()=>l&&e?.liquidity&&"number"===typeof e?.tickLower&&"number"===typeof e?.tickUpper?new a.Position({pool:l,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper}):void 0,[l,e]),p=new c.Percent(i,100),h=x?p.multiply(x.amount0.quotient).quotient:void 0,m=x?p.multiply(x.amount1.quotient).quotient:void 0,g=d&&h?c.CurrencyAmount.fromRawAmount(n?d:(0,Y.U)(d),h):void 0,f=u&&m?c.CurrencyAmount.fromRawAmount(n?u:(0,Y.U)(u),m):void 0,[j,y]=(0,E.R)(l??void 0,e?.tokenId,n),b=!(!l||!e)&&(l.tickCurrent<e.tickLower||l.tickCurrent>e.tickUpper);let v;return r||(v=(0,t.jsx)(s.x6,{id:"VHOVEJ"})),0===i&&(v=v??(0,t.jsx)(s.x6,{id:"Sta9CR"})),{position:x,liquidityPercentage:p,liquidityValue0:g,liquidityValue1:f,feeValue0:j,feeValue1:y,outOfRange:b,error:v}}(n,q),{onPercentSelect:le}=function(){const e=(0,J.j)();return{onPercentSelect:(0,L.useCallback)(n=>{e((0,T.g)({percent:n}))},[e])}}(),xe=n?.liquidity?.eq(0),[pe,he]=(0,w.A)(re,le),me=(0,z.A)(),ge=(0,B.co)(ee),[fe,je]=(0,L.useState)(!1),[ye,be]=(0,L.useState)(!1),[ve,Ae]=(0,L.useState)(),ke=(0,P.OQ)(),we=(0,k.TA)(),ze=(0,L.useCallback)(async()=>{if(be(!0),!we||!se||!ae||!me||!i||!A||!te||!ie||!C)return;const{calldata:n,value:r}=a.NonfungiblePositionManager.removeCallParameters(te,{tokenId:e.toString(),liquidityPercentage:ie,slippageTolerance:ge,deadline:me.toString(),collectOptions:{expectedCurrencyOwed0:ce??c.CurrencyAmount.fromRawAmount(se.currency,0),expectedCurrencyOwed1:oe??c.CurrencyAmount.fromRawAmount(ae.currency,0),recipient:i}}),t={to:we.address,data:n,value:r},s=await C.getSigner().getChainId();if(A!==s)throw new M.$c;C.getSigner().estimateGas(t).then(e=>{const n={...t,gasLimit:(0,K.K)(e)};return C.getSigner().sendTransaction(n).then(e=>{Ae(e.hash),be(!1),ke(e,{type:U.D.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,N.V)(se.currency),quoteCurrencyId:(0,N.V)(ae.currency),expectedAmountBaseRaw:se.quotient.toString(),expectedAmountQuoteRaw:ae.quotient.toString()})})}).catch(e=>{be(!1),console.error(e)})},[we,se,ae,me,i,A,te,ie,C,e,ge,ce,oe,ke]),Se=(0,L.useCallback)(()=>{je(!1),ve&&he(0),be(!1),Ae("")},[he,ve]),$e=(0,t.jsx)(s.x6,{id:"F8SmOj",values:{0:se?.toSignificant(6),1:se?.currency?.symbol,2:ae?.toSignificant(6),3:ae?.currency?.symbol}});function Ce(){return(0,t.jsxs)(x.mm,{gap:"sm",style:{padding:"16px"},children:[(0,t.jsxs)(y.JA,{align:"flex-end",children:[(0,t.jsx)(I.EY,{fontSize:16,fontWeight:535,children:(0,t.jsx)(s.x6,{id:"I4bzgz",values:{0:se?.currency?.symbol}})}),(0,t.jsxs)(y.Bp,{children:[(0,t.jsx)(I.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:se&&(0,t.jsx)(m.A,{currencyAmount:se})}),(0,t.jsx)(f.A,{size:"20px",style:{marginLeft:"8px"},currency:se?.currency})]})]}),(0,t.jsxs)(y.JA,{align:"flex-end",children:[(0,t.jsx)(I.EY,{fontSize:16,fontWeight:535,children:(0,t.jsx)(s.x6,{id:"I4bzgz",values:{0:ae?.currency?.symbol}})}),(0,t.jsxs)(y.Bp,{children:[(0,t.jsx)(I.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ae&&(0,t.jsx)(m.A,{currencyAmount:ae})}),(0,t.jsx)(f.A,{size:"20px",style:{marginLeft:"8px"},currency:ae?.currency})]})]}),ce?.greaterThan(0)||oe?.greaterThan(0)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(D.PR.DeprecatedItalic,{fontSize:12,color:r.neutral2,textAlign:"left",padding:"8px 0 0 0",children:(0,t.jsx)(s.x6,{id:"QwTcLK"})}),(0,t.jsxs)(y.JA,{children:[(0,t.jsx)(I.EY,{fontSize:16,fontWeight:535,children:(0,t.jsx)(s.x6,{id:"Vn8uJL",values:{0:ce?.currency?.symbol}})}),(0,t.jsxs)(y.Bp,{children:[(0,t.jsx)(I.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ce&&(0,t.jsx)(m.A,{currencyAmount:ce})}),(0,t.jsx)(f.A,{size:"20px",style:{marginLeft:"8px"},currency:ce?.currency})]})]}),(0,t.jsxs)(y.JA,{children:[(0,t.jsx)(I.EY,{fontSize:16,fontWeight:535,children:(0,t.jsx)(s.x6,{id:"Vn8uJL",values:{0:oe?.currency?.symbol}})}),(0,t.jsxs)(y.Bp,{children:[(0,t.jsx)(I.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:oe&&(0,t.jsx)(m.A,{currencyAmount:oe})}),(0,t.jsx)(f.A,{size:"20px",style:{marginLeft:"8px"},currency:oe?.currency})]})]})]}):null,(0,t.jsx)(u.$$,{mt:"16px",onClick:ze,children:(0,t.jsx)(s.x6,{id:"t/YqKh"})})]})}const Le=Boolean(se?.currency&&ae?.currency&&(se.currency.isNative||ae.currency.isNative||F.Im[se.currency.chainId]?.equals(se.currency.wrapped)||F.Im[ae.currency.chainId]?.equals(ae.currency.wrapped)));return(0,t.jsxs)(x.mm,{children:[(0,t.jsx)(O.A,{isOpen:fe,onDismiss:Se,attemptingTxn:ye,hash:ve??"",reviewContent:()=>(0,t.jsx)(O.Y,{title:(0,t.jsx)(s.x6,{id:"cJtosk"}),onDismiss:Se,topContent:Ce}),pendingText:$e}),(0,t.jsxs)(G.A,{$maxWidth:"unset",children:[(0,t.jsx)(j.m,{creating:!1,adding:!1,positionID:e.toString(),autoSlippage:ee}),(0,t.jsx)(Q,{children:n?(0,t.jsxs)(x.mm,{gap:"lg",children:[(0,t.jsxs)(y.JA,{children:[(0,t.jsxs)(y.Bp,{children:[(0,t.jsx)(p.A,{currency0:se?.currency,currency1:ae?.currency,size:20,margin:!0}),(0,t.jsx)(D.PR.DeprecatedLabel,{ml:"10px",fontSize:"20px",id:"remove-liquidity-tokens",children:`${se?.currency?.symbol}/${ae?.currency?.symbol}`})]}),(0,t.jsx)(d.A,{removed:xe,inRange:!de})]}),(0,t.jsx)(l.R4,{children:(0,t.jsxs)(x.mm,{gap:"md",children:[(0,t.jsx)(D.PR.DeprecatedMain,{fontWeight:485,children:(0,t.jsx)(s.x6,{id:"hehnjM"})}),(0,t.jsxs)(y.JA,{children:[(0,t.jsx)(Z,{children:(0,t.jsx)(s.x6,{id:"AGSFTV",values:{percentForSlider:pe}})}),(0,t.jsxs)(y.eF,{gap:"4px",justify:"flex-end",children:[(0,t.jsx)(X,{onClick:()=>le(25),width:"20%",children:(0,t.jsx)(s.x6,{id:"Xeb0wM"})}),(0,t.jsx)(X,{onClick:()=>le(50),width:"20%",children:(0,t.jsx)(s.x6,{id:"wW+u6Y"})}),(0,t.jsx)(X,{onClick:()=>le(75),width:"20%",children:(0,t.jsx)(s.x6,{id:"N+aNR1"})}),(0,t.jsx)(X,{onClick:()=>le(100),width:"20%",children:(0,t.jsx)(s.x6,{id:"CK1KXz"})})]})]}),(0,t.jsx)(b.A,{value:pe,onChange:he})]})}),(0,t.jsx)(l.R4,{children:(0,t.jsxs)(x.mm,{gap:"md",children:[(0,t.jsxs)(y.JA,{children:[(0,t.jsx)(I.EY,{fontSize:16,fontWeight:535,id:"remove-pooled-tokena-symbol",children:(0,t.jsx)(s.x6,{id:"I4bzgz",values:{0:se?.currency?.symbol}})}),(0,t.jsxs)(y.Bp,{children:[(0,t.jsx)(I.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:se&&(0,t.jsx)(m.A,{currencyAmount:se})}),(0,t.jsx)(f.A,{size:"20px",style:{marginLeft:"8px"},currency:se?.currency})]})]}),(0,t.jsxs)(y.JA,{children:[(0,t.jsx)(I.EY,{fontSize:16,fontWeight:535,id:"remove-pooled-tokenb-symbol",children:(0,t.jsx)(s.x6,{id:"I4bzgz",values:{0:ae?.currency?.symbol}})}),(0,t.jsxs)(y.Bp,{children:[(0,t.jsx)(I.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ae&&(0,t.jsx)(m.A,{currencyAmount:ae})}),(0,t.jsx)(f.A,{size:"20px",style:{marginLeft:"8px"},currency:ae?.currency})]})]}),ce?.greaterThan(0)||oe?.greaterThan(0)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.qC,{}),(0,t.jsxs)(y.JA,{children:[(0,t.jsx)(I.EY,{fontSize:16,fontWeight:535,children:(0,t.jsx)(s.x6,{id:"Vn8uJL",values:{0:ce?.currency?.symbol}})}),(0,t.jsxs)(y.Bp,{children:[(0,t.jsx)(I.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ce&&(0,t.jsx)(m.A,{currencyAmount:ce})}),(0,t.jsx)(f.A,{size:"20px",style:{marginLeft:"8px"},currency:ce?.currency})]})]}),(0,t.jsxs)(y.JA,{children:[(0,t.jsx)(I.EY,{fontSize:16,fontWeight:535,children:(0,t.jsx)(s.x6,{id:"Vn8uJL",values:{0:oe?.currency?.symbol}})}),(0,t.jsxs)(y.Bp,{children:[(0,t.jsx)(I.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:oe&&(0,t.jsx)(m.A,{currencyAmount:oe})}),(0,t.jsx)(f.A,{size:"20px",style:{marginLeft:"8px"},currency:oe?.currency})]})]})]}):null]})}),Le&&(0,t.jsxs)(y.JA,{children:[(0,t.jsx)(D.PR.DeprecatedMain,{children:(0,t.jsx)(s.x6,{id:"oCijuv",values:{nativeWrappedSymbol:ne}})}),(0,t.jsx)(v.A,{id:"receive-as-weth",isActive:q,toggle:()=>H(e=>!e)})]}),(0,t.jsx)("div",{style:{display:"flex"},children:(0,t.jsx)(x.mm,{gap:"md",style:{flex:"1"},children:(0,t.jsx)(u.m$,{confirmed:!1,disabled:xe||0===re||!se,onClick:()=>je(!0),children:xe?(0,t.jsx)(s.x6,{id:"D87pha"}):ue??(0,t.jsx)(s.x6,{id:"t/YqKh"})})})})]}):(0,t.jsx)(g.A,{})})]})]})}},47398:(e,n,r)=>{r.d(n,{A:()=>c,q:()=>a});var t=r(9776),i=r(85431),s=r(30159);const a=i.default.main`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${s.M.default};
  font-feature-settings: "ss01" on, "ss02" on, "cv01" on, "cv03" on;
`;function c(e){return(0,t.jsx)(a,{...e})}},57547:(e,n,r)=>{r.d(n,{qC:()=>l,LR:()=>o,jK:()=>d,yj:()=>u,pL:()=>c});var t=r(85431);const i=r.p+"static/media/big_unicorn.90ddcbf00b3ff1ad4495.png",s=r.p+"static/media/noise.3c7efafc83614205bd1a.png";var a=r(77781);const c=(0,t.default)(a.mm)`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #000000 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,o=t.default.span`
  background: url(${i});
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
`,d=t.default.span`
  background: url(${s});
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
`,u=(0,t.default)(a.mm)`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,l=t.default.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},82188:(e,n,r)=>{r.d(n,{A:()=>i});var t=r(65868);function i(e,n,r=100){const[i,s]=(0,t.useState)(()=>e),a=(0,t.useRef)(),c=(0,t.useCallback)(e=>{s(e),a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{n(e),a.current=void 0},r)},[r,n]);return(0,t.useEffect)(()=>{a.current&&(clearTimeout(a.current),a.current=void 0),s(e)},[e]),[i,c]}},83336:(e,n,r)=>{r.d(n,{A:()=>o});var t=r(9776),i=r(94313),s=r(53055),a=r.n(s);const c=new i.Fraction(a().BigInt(1),a().BigInt(1e6));function o({currencyAmount:e,significantDigits:n=4}){return(0,t.jsx)(t.Fragment,{children:e.equalTo(a().BigInt(0))?"0":e.greaterThan(c)?e.toSignificant(n):`<${c.toSignificant(1)}`})}},85985:(e,n,r)=>{r.d(n,{U:()=>A,m:()=>w});var t=r(9776),i=r(50277),s=r(43256),a=r(55408),c=r(26681),o=r(81824),d=r(69383),u=r(41197),l=r(30005),x=r(49061),p=r(31759),h=r(85431),m=r(82501),g=r(64687),f=r(15285);const j=h.default.div`
  ${g.BI};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,y=(0,h.default)(o.N_)`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,b=(0,h.default)(m.PR.SubHeaderLarge)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,v=(0,h.default)(c.A)`
  color: ${({theme:e})=>e.neutral1};
`;function A({origin:e}){return(0,t.jsx)(j,{children:(0,t.jsxs)(f.JA,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,t.jsx)(o.N_,{to:e,children:(0,t.jsx)(v,{})}),(0,t.jsx)(b,{children:(0,t.jsx)(i.x6,{id:"LCFvJr"})})]})})}const k=(0,h.default)(m.PR.SubHeaderLarge)`
  flex: 1;
  margin: auto;
`;function w({adding:e,creating:n,autoSlippage:r,positionID:c,children:o}){const{chainId:m}=(0,s.useWeb3React)(),g=(0,h.useTheme)(),b=(0,l.j)(),A=(0,d.zy)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(c?`/${c.toString()}`:"");return(0,t.jsx)(j,{children:(0,t.jsxs)(f.JA,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,t.jsx)(y,{to:A,onClick:()=>{e&&(b((0,x.JE)()),b((0,p.JE)()))},flex:o?"1":void 0,children:(0,t.jsx)(v,{stroke:g.neutral2})}),(0,t.jsx)(k,{textAlign:o?"start":"center",children:n?(0,t.jsx)(i.x6,{id:"ma87bD"}):e?(0,t.jsx)(i.x6,{id:"E6MqGy"}):(0,t.jsx)(i.x6,{id:"cJtosk"})}),o&&(0,t.jsx)(u.az,{style:{marginRight:".5rem"},children:o}),(0,t.jsx)(a.A,{autoSlippage:r,chainId:m})]})})}}}]);
//# sourceMappingURL=9382.1c51a083.chunk.js.map