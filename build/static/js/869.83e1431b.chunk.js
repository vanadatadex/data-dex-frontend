"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[869],{475:(e,n,t)=>{t.d(n,{h:()=>r,e:()=>m});var r,i=t(73706),o=t(43256),s=t(75614),a=t(54190),l=t(65868),d=t(80526);function c(e,n,t){const{chainId:r}=(0,o.useWeb3React)(),c=e?.currency?.isToken?e.currency:void 0,u=function(e,n,t){const{account:r}=(0,o.useWeb3React)(),i=e?.currency?.isToken?e.currency:void 0,{tokenAllowance:s}=(0,a.l)(i,r??void 0,n),d=t(i,n);return(0,l.useMemo)(()=>e&&n?e.currency.isNative?"APPROVED":s?s.lessThan(e)?d?"PENDING":"NOT_APPROVED":"APPROVED":"UNKNOWN":"UNKNOWN",[e,d,n,s])}(e,n,t),p=(0,s.dV)(c?.address),h=(0,l.useCallback)(async()=>{function t(e){console.warn(`${c?.symbol||"Token"} approval failed:`,e)}if("NOT_APPROVED"!==u)return t("approve was called unnecessarily");if(!r)return t("no chainId");if(!c)return t("no token");if(!p)return t("tokenContract is null");if(!e)return t("missing amount to approve");if(!n)return t("no spender");let o=!1;const s=await p.estimateGas.approve(n,i.Is).catch(()=>(o=!0,p.estimateGas.approve(n,e.quotient.toString())));return p.approve(n,o?e.quotient.toString():i.Is,{gasLimit:(0,d.K)(s)}).then(t=>({response:t,tokenAddress:c.address,spenderAddress:n,amount:e})).catch(e=>{throw t(e),e})},[u,c,p,e,n,r]);return[u,h]}!function(e){e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED"}(r||(r={}));var u=t(58009),p=t(8018);function h(e){const n=(0,u.OQ)();return(0,l.useCallback)(()=>e().then(e=>{if(e){const{response:t,tokenAddress:r,spenderAddress:i,amount:o}=e;n(t,{type:p.D.APPROVAL,tokenAddress:r,spender:i,amount:o.quotient.toString()})}}),[n,e])}function m(e,n){const[t,r]=c(e,n,u.yI);return[t,h(r)]}},1556:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(65868),i=t(52964),o=t.n(i);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=(0,r.forwardRef)(function(e,n){var t=e.color,i=void 0===t?"currentColor":t,o=e.size,l=void 0===o?24:o,d=a(e,["color","size"]);return r.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),r.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))});l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="Plus";const d=l},37220:(e,n,t)=>{t.d(n,{A:()=>D});var r=t(9776),i=t(50277),o=t(43256),s=t(7533),a=t(51995),l=t(91399),d=t(65868),c=t(85431),u=t(82501),p=t(64687),h=t(24586),m=t(84285),x=t(58962),f=t(27363),g=t(67821),b=t(97316),y=t(17112),v=t(15285),j=t(69574),$=t(48804);const k=c.default.div`
  ${p.ZZ};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:n})=>n?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,w=c.default.div`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:n,disabled:t})=>!t&&`\n    :focus,\n    :hover {\n      border: 1px solid ${n?" transparent":e.surface2};\n    }\n  `}
`,N=(0,c.default)(f.EA)`
  align-items: center;
  background-color: ${({selected:e,theme:n})=>e?n.surface1:n.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${({hideInput:e})=>e?"2.8rem":"2.4rem"};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${({hideInput:e})=>e?"0":"12px"};
  :focus,
  :hover {
    background-color: ${({selected:e,theme:n})=>e?n.surface2:(0,l.e$)(.05,n.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,A=c.default.div`
  ${p.BI};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,I=c.default.div`
  ${p.BI};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,l.e$)(.2,e.neutral2)};
  }
`,O=(0,c.default)(I)`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,P=c.default.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,C=(0,c.default)(m.h)`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
    stroke-width: 1.5px;
  }
`,E=c.default.span`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
`,R=c.default.button`
  background-color: transparent;
  background-color: ${({theme:e})=>e.accent2};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accent1};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${({disabled:e})=>e?.4:1};
  padding: 4px 6px;
  pointer-events: ${({disabled:e})=>e?"none":"initial"};

  :hover {
    opacity: ${({disabled:e})=>e?.4:.8};
  }

  :focus {
    outline: none;
  }
`,B=(0,c.default)(y.p)`
  ${s.fp};
  text-align: left;
`;function D({value:e,onUserInput:n,onMax:t,showMaxButton:l,onCurrencySelect:p,currency:m,otherCurrency:f,id:y,showCommonBases:I,showCurrencyAmount:D,disableNonToken:S,renderBalance:T,fiatValue:z,hideBalance:V=!1,pair:_=null,hideInput:W=!1,locked:G=!1,loading:L=!1,...J}){const[U,M]=(0,d.useState)(!1),{account:q,chainId:K}=(0,o.useWeb3React)(),F=(0,x.rL)(q??void 0,m??void 0),H=(0,c.useTheme)(),Z=(0,d.useCallback)(()=>{M(!1)},[M]),Q=(0,a.Gv)(K);return(0,r.jsxs)(k,{id:y,hideInput:W,...J,children:[!G&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(w,{hideInput:W,disabled:!Q,children:[(0,r.jsxs)(A,{style:W?{padding:"0",borderRadius:"8px"}:{},selected:!p,children:[!W&&(0,r.jsx)(B,{className:"token-amount-input",value:e,onUserInput:n,disabled:!Q,$loading:L}),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(N,{disabled:!Q,visible:void 0!==m,selected:!!m,hideInput:W,className:"open-currency-select-button",onClick:()=>{p&&M(!0)},pointerEvents:p?void 0:"none",children:(0,r.jsxs)(P,{children:[(0,r.jsxs)(v.Bp,{children:[_?(0,r.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,r.jsx)(g.A,{currency0:_.token0,currency1:_.token1,size:24,margin:!0})}):m&&(0,r.jsx)(b.A,{style:{marginRight:"0.5rem"},currency:m,size:"24px"}),_?(0,r.jsxs)(E,{className:"pair-name-container",children:[_?.token0.symbol,":",_?.token1.symbol]}):(0,r.jsx)(E,{className:"token-symbol-container",active:Boolean(m&&m.symbol),children:(m&&m.symbol&&m.symbol.length>20?m.symbol.slice(0,4)+"..."+m.symbol.slice(m.symbol.length-5,m.symbol.length):m?.symbol)||(0,r.jsx)(i.x6,{id:"T0Y2+3"})})]}),p&&(0,r.jsx)(C,{selected:!!m})]})})})]}),Boolean(!W&&!V&&m)&&(0,r.jsx)(O,{children:(0,r.jsxs)(v.JA,{children:[(0,r.jsx)(s.N3,{$loading:L,children:z&&(0,r.jsx)($.s,{fiatValue:z})}),q&&(0,r.jsxs)(v.Bp,{style:{height:"17px"},children:[(0,r.jsx)(u.PR.DeprecatedBody,{onClick:t,color:H.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!V&&m&&F)&&(T?.(F)||(0,r.jsx)(i.x6,{id:"VuFd5C",values:{0:(0,h.N)(F,4)}}))}),Boolean(l&&F)&&(0,r.jsx)(R,{onClick:t,children:(0,r.jsx)(i.x6,{id:"4HtGBb"})})]})]})})]})}),p&&(0,r.jsx)(j.A,{isOpen:U,onDismiss:Z,onCurrencySelect:p,selectedCurrency:m,otherSelectedCurrency:f,showCommonBases:I,showCurrencyAmount:D,disableNonToken:S})]})}},47398:(e,n,t)=>{t.d(n,{A:()=>a,q:()=>s});var r=t(9776),i=t(85431),o=t(30159);const s=i.default.main`
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
  z-index: ${o.M.default};
  font-feature-settings: "ss01" on, "ss02" on, "cv01" on, "cv03" on;
`;function a(e){return(0,r.jsx)(s,{...e})}},85985:(e,n,t)=>{t.d(n,{U:()=>$,m:()=>w});var r=t(9776),i=t(50277),o=t(43256),s=t(55408),a=t(26681),l=t(81824),d=t(69383),c=t(41197),u=t(30005),p=t(49061),h=t(31759),m=t(85431),x=t(82501),f=t(64687),g=t(15285);const b=m.default.div`
  ${f.BI};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,y=(0,m.default)(l.N_)`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,v=(0,m.default)(x.PR.SubHeaderLarge)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,j=(0,m.default)(a.A)`
  color: ${({theme:e})=>e.neutral1};
`;function $({origin:e}){return(0,r.jsx)(b,{children:(0,r.jsxs)(g.JA,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,r.jsx)(l.N_,{to:e,children:(0,r.jsx)(j,{})}),(0,r.jsx)(v,{children:(0,r.jsx)(i.x6,{id:"LCFvJr"})})]})})}const k=(0,m.default)(x.PR.SubHeaderLarge)`
  flex: 1;
  margin: auto;
`;function w({adding:e,creating:n,autoSlippage:t,positionID:a,children:l}){const{chainId:x}=(0,o.useWeb3React)(),f=(0,m.useTheme)(),v=(0,u.j)(),$=(0,d.zy)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(a?`/${a.toString()}`:"");return(0,r.jsx)(b,{children:(0,r.jsxs)(g.JA,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,r.jsx)(y,{to:$,onClick:()=>{e&&(v((0,p.JE)()),v((0,h.JE)()))},flex:l?"1":void 0,children:(0,r.jsx)(j,{stroke:f.neutral2})}),(0,r.jsx)(k,{textAlign:l?"start":"center",children:n?(0,r.jsx)(i.x6,{id:"ma87bD"}):e?(0,r.jsx)(i.x6,{id:"E6MqGy"}):(0,r.jsx)(i.x6,{id:"cJtosk"})}),l&&(0,r.jsx)(c.az,{style:{marginRight:".5rem"},children:l}),(0,r.jsx)(s.A,{autoSlippage:t,chainId:x})]})})}}}]);
//# sourceMappingURL=869.83e1431b.chunk.js.map