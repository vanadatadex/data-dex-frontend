"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[7034],{5294:(e,n,i)=>{i.d(n,{LJ:()=>s,SC:()=>l,ar:()=>c,mO:()=>d,nv:()=>a});var t=i(18223),o=i(92947),r=i(96410);const d=r.default.div`
  position: relative;
  padding: 20px;
`,l=(0,r.default)(o.EY)`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,s=r.default.button`
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.accent2};
  border: 1px solid ${({theme:e})=>e.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:e})=>e.accent1};
  :hover {
    border: 1px solid ${({theme:e})=>e.accent1};
  }
  :focus {
    border: 1px solid ${({theme:e})=>e.accent1};
    outline: none;
  }
`,a=r.default.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,c=(0,r.default)(t.ar)`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`},10278:(e,n,i)=>{i.d(n,{A:()=>a});var t=i(54674),o=i(88178),r=i.n(o);function d(){return d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},d.apply(this,arguments)}function l(e,n){if(null==e)return{};var i,t,o=function(e,n){if(null==e)return{};var i,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=(0,t.forwardRef)(function(e,n){var i=e.color,o=void 0===i?"currentColor":i,r=e.size,s=void 0===r?24:r,a=l(e,["color","size"]);return t.createElement("svg",d({ref:n,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),t.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),t.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))});s.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},s.displayName="Plus";const a=s},12991:(e,n,i)=>{i.d(n,{A:()=>l,q:()=>d});var t=i(96410),o=i(3405),r=i(33370);const d=t.default.main`
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
  z-index: ${o.M.default};
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
`;function l(e){return(0,r.jsx)(d,{...e})}},19933:(e,n,i)=>{i.d(n,{h:()=>a,e:()=>h});var t=i(65264),o=i(54644),r=i(94999),d=i(45416),l=i(54674),s=i(38740);let a=function(e){return e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED",e}({});function c(e,n,i){var c;const{chainId:u}=(0,o.useWeb3React)(),p=null!==e&&void 0!==e&&null!==(c=e.currency)&&void 0!==c&&c.isToken?e.currency:void 0,x=function(e,n,i){var t;const{account:r}=(0,o.useWeb3React)(),s=null!==e&&void 0!==e&&null!==(t=e.currency)&&void 0!==t&&t.isToken?e.currency:void 0,{tokenAllowance:c}=(0,d.l)(s,null!==r&&void 0!==r?r:void 0,n),u=i(s,n);return(0,l.useMemo)(()=>e&&n?e.currency.isNative?a.APPROVED:c?c.lessThan(e)?u?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN:a.UNKNOWN,[e,u,n,c])}(e,n,i),h=(0,r.dV)(null===p||void 0===p?void 0:p.address),v=(0,l.useCallback)(async()=>{function i(e){console.warn(`${(null===p||void 0===p?void 0:p.symbol)||"Token"} approval failed:`,e)}if(x!==a.NOT_APPROVED)return i("approve was called unnecessarily");if(!u)return i("no chainId");if(!p)return i("no token");if(!h)return i("tokenContract is null");if(!e)return i("missing amount to approve");if(!n)return i("no spender");let o=!1;const r=await h.estimateGas.approve(n,t.Is).catch(()=>(o=!0,h.estimateGas.approve(n,e.quotient.toString())));return h.approve(n,o?e.quotient.toString():t.Is,{gasLimit:(0,s.K)(r)}).then(i=>({response:i,tokenAddress:p.address,spenderAddress:n,amount:e})).catch(e=>{throw i(e),e})},[x,p,h,e,n,u]);return[x,v]}var u=i(47519),p=i(19456);function x(e){const n=(0,u.OQ)();return(0,l.useCallback)(()=>e().then(e=>{if(e){const{response:i,tokenAddress:t,spenderAddress:o,amount:r}=e;n(i,{type:p.D.APPROVAL,tokenAddress:t,spender:o,amount:r.quotient.toString()})}}),[n,e])}function h(e,n){const[i,t]=c(e,n,u.yI);return[i,x(t)]}},42789:(e,n,i)=>{i.d(n,{A:()=>j});var t=i(19984),o=i(54644),r=i(50645),d=i(21959),l=i(75423),s=i(87014),a=i(70464),c=i(12763),u=i(54674),p=i(96410),x=i(33121),h=i(3405),v=i(17567),m=i(17516),R=i(33370);const C=p.default.div`
  padding-top: calc(16px + 2rem);
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -2rem;
  width: 100%;
  max-width: 400px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${({theme:e})=>e.neutral2};
  background-color: ${({theme:e})=>e.surface2};
  z-index: ${h.M.deprecated_zero};

  transform: ${({show:e})=>e?"translateY(0%)":"translateY(-100%)"};
  transition: transform 300ms ease-in-out;
  text-align: center;
`,g=(0,p.default)(r.Wv)`
  text-decoration: none;
`,f=(0,p.default)(x.PR.DeprecatedBlue)`
  font-size: 12px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 10px;
`}
`;function j({show:e,currencies:n}){const{chainId:i}=(0,o.useWeb3React)(),[r,p]=(0,u.useState)(!1),h=i&&n?n.map(e=>null===e||void 0===e?void 0:e.wrapped):[],j=(0,v.rN)();return(0,R.jsxs)(C,{show:e,children:[(0,R.jsx)(a.A,{isOpen:r,onDismiss:()=>p(!1),children:(0,R.jsx)(d.Ay,{padding:"2rem",children:(0,R.jsxs)(l.mm,{gap:"lg",children:[(0,R.jsxs)(c.JA,{children:[(0,R.jsx)(x.PR.DeprecatedMediumHeader,{children:(0,R.jsx)(t.x6,{id:"7Osz32"})}),(0,R.jsx)(x.US,{onClick:()=>p(!1),"data-testid":"close-icon"})]}),h.map(e=>{var n;return e&&j&&Object.keys(j).includes(e.address)&&(0,R.jsx)(d.l3,{"data-testid":"unsupported-token-card",children:(0,R.jsxs)(l.mm,{gap:"10px",children:[(0,R.jsxs)(c.eF,{gap:"5px",align:"center",children:[(0,R.jsx)(s.A,{currency:e,size:"24px"}),(0,R.jsx)(x.PR.DeprecatedBody,{fontWeight:535,children:e.symbol})]}),i&&(0,R.jsx)(x.Gr,{href:(0,m.a)(i,e.address,m.u.ADDRESS),children:(0,R.jsx)(f,{children:e.address})})]})},null===(n=e.address)||void 0===n?void 0:n.concat("not-supported"))}),(0,R.jsx)(l.mm,{gap:"lg",children:(0,R.jsx)(x.PR.DeprecatedBody,{fontWeight:535,children:(0,R.jsx)(t.x6,{id:"l7X7DE"})})})]})})}),(0,R.jsx)(g,{padding:"0",onClick:()=>p(!0),"data-testid":"read-more-button",children:(0,R.jsx)(x.PR.DeprecatedBlue,{children:(0,R.jsx)(t.x6,{id:"bIjYSY"})})})]})}},51150:(e,n,i)=>{i.d(n,{U:()=>r});var t=i(9157),o=i(93405);function r(e){var n;if(e.isNative)return e;const i=(0,t.g4)(e.chainId);return i&&null!==(n=o.Im[i])&&void 0!==n&&n.equals(e)?(0,o.cz)(e.chainId):e}},53947:(e,n,i)=>{i.d(n,{U:()=>y,m:()=>N});var t=i(19984),o=i(54644),r=i(86642),d=i(41019),l=i(4126),s=i(85713),a=i(92947),c=i(26467),u=i(56119),p=i(11577),x=i(96410),h=i(33121),v=i(73141),m=i(12763),R=i(33370);const C=x.default.div`
  ${v.BI};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,g=(0,x.default)(l.N_)`
  flex: ${({flex:e})=>null!==e&&void 0!==e?e:"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,f=(0,x.default)(h.PR.SubHeaderLarge)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,j=(0,x.default)(d.A)`
  color: ${({theme:e})=>e.neutral1};
`;function y({origin:e}){return(0,R.jsx)(C,{children:(0,R.jsxs)(m.JA,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,R.jsx)(l.N_,{to:e,children:(0,R.jsx)(j,{})}),(0,R.jsx)(f,{children:(0,R.jsx)(t.x6,{id:"LCFvJr"})})]})})}const D=(0,x.default)(h.PR.SubHeaderLarge)`
  flex: 1;
  margin: auto;
`;function N({adding:e,creating:n,autoSlippage:i,positionID:d,children:l}){const{chainId:h}=(0,o.useWeb3React)(),v=(0,x.useTheme)(),f=(0,c.j)(),y=(0,s.zy)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(d?`/${d.toString()}`:"");return(0,R.jsx)(C,{children:(0,R.jsxs)(m.JA,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,R.jsx)(g,{to:y,onClick:()=>{e&&(f((0,u.JE)()),f((0,p.JE)()))},flex:l?"1":void 0,children:(0,R.jsx)(j,{stroke:v.neutral2})}),(0,R.jsx)(D,{textAlign:l?"start":"center",children:n?(0,R.jsx)(t.x6,{id:"ma87bD"}):e?(0,R.jsx)(t.x6,{id:"E6MqGy"}):(0,R.jsx)(t.x6,{id:"cJtosk"})}),l&&(0,R.jsx)(a.az,{style:{marginRight:".5rem"},children:l}),(0,R.jsx)(r.A,{autoSlippage:i,chainId:h})]})})}},70694:(e,n,i)=>{i.d(n,{A:()=>P});var t=i(19984),o=i(54644),r=i(18223),d=i(9157),l=i(24523),s=i(54674),a=i(96410),c=i(33121),u=i(73141),p=i(80672),x=i(49225),h=i(23843),v=i(50645),m=i(20295),R=i(87014),C=i(86724),g=i(12763),f=i(462),j=i(17176),y=i(33370);const D=a.default.div`
  ${u.ZZ};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:n})=>n?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,N=a.default.div`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:n,disabled:i})=>!i&&`\n    :focus,\n    :hover {\n      border: 1px solid ${n?" transparent":e.surface2};\n    }\n  `}
`,E=(0,a.default)(v.EA)`
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
`,b=a.default.div`
  ${u.BI};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,A=a.default.div`
  ${u.BI};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,l.e$)(.2,e.neutral2)};
  }
`,_=(0,a.default)(A)`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,Y=a.default.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,U=(0,a.default)(x.h)`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
    stroke-width: 1.5px;
  }
`,B=a.default.span`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
`,$=a.default.button`
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
`,w=(0,a.default)(C.p)`
  ${r.fp};
  text-align: left;
`;function P({value:e,onUserInput:n,onMax:i,showMaxButton:l,onCurrencySelect:u,currency:x,otherCurrency:v,id:C,showCommonBases:A,showCurrencyAmount:P,disableNonToken:k,renderBalance:S,fiatValue:I,hideBalance:O=!1,pair:T=null,hideInput:q=!1,locked:V=!1,loading:z=!1,...L}){const[W,F]=(0,s.useState)(!1),{account:M,chainId:G}=(0,o.useWeb3React)(),J=(0,h.rL)(null!==M&&void 0!==M?M:void 0,null!==x&&void 0!==x?x:void 0),H=(0,a.useTheme)(),Z=(0,s.useCallback)(()=>{F(!1)},[F]),X=(0,d.Gv)(G);return(0,y.jsxs)(D,{id:C,hideInput:q,...L,children:[!V&&(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(N,{hideInput:q,disabled:!X,children:[(0,y.jsxs)(b,{style:q?{padding:"0",borderRadius:"8px"}:{},selected:!u,children:[!q&&(0,y.jsx)(w,{className:"token-amount-input",value:e,onUserInput:n,disabled:!X,$loading:z}),(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(E,{disabled:!X,visible:void 0!==x,selected:!!x,hideInput:q,className:"open-currency-select-button",onClick:()=>{u&&F(!0)},pointerEvents:u?void 0:"none",children:(0,y.jsxs)(Y,{children:[(0,y.jsxs)(g.Bp,{children:[T?(0,y.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,y.jsx)(m.A,{currency0:T.token0,currency1:T.token1,size:24,margin:!0})}):x&&(0,y.jsx)(R.A,{style:{marginRight:"0.5rem"},currency:x,size:"24px"}),T?(0,y.jsxs)(B,{className:"pair-name-container",children:[null===T||void 0===T?void 0:T.token0.symbol,":",null===T||void 0===T?void 0:T.token1.symbol]}):(0,y.jsx)(B,{className:"token-symbol-container",active:Boolean(x&&x.symbol),children:(x&&x.symbol&&x.symbol.length>20?x.symbol.slice(0,4)+"..."+x.symbol.slice(x.symbol.length-5,x.symbol.length):null===x||void 0===x?void 0:x.symbol)||(0,y.jsx)(t.x6,{id:"T0Y2+3"})})]}),u&&(0,y.jsx)(U,{selected:!!x})]})})})]}),Boolean(!q&&!O&&x)&&(0,y.jsx)(_,{children:(0,y.jsxs)(g.JA,{children:[(0,y.jsx)(r.N3,{$loading:z,children:I&&(0,y.jsx)(j.s,{fiatValue:I})}),M&&(0,y.jsxs)(g.Bp,{style:{height:"17px"},children:[(0,y.jsx)(c.PR.DeprecatedBody,{onClick:i,color:H.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!O&&x&&J)&&((null===S||void 0===S?void 0:S(J))||(0,y.jsx)(t.x6,{id:"VuFd5C",values:{0:(0,p.N)(J,4)}}))}),Boolean(l&&J)&&(0,y.jsx)($,{onClick:i,children:(0,y.jsx)(t.x6,{id:"4HtGBb"})})]})]})})]})}),u&&(0,y.jsx)(f.A,{isOpen:W,onDismiss:Z,onCurrencySelect:u,selectedCurrency:x,otherSelectedCurrency:v,showCommonBases:A,showCurrencyAmount:P,disableNonToken:k})]})}},80672:(e,n,i)=>{i.d(n,{N:()=>s});var t=i(53847),o=i(99900),r=i(67197),d=i.n(r);function l({number:e,locale:n,sigFigs:i,fixedDecimals:t,options:r={}}){let d,l;if(d=!n||n&&!o.dI.includes(n)?o.Xn:[n,o.Xn],r.minimumFractionDigits=r.minimumFractionDigits||t,r.maximumFractionDigits=r.maximumFractionDigits||t,r.maximumSignificantDigits=r.maximumSignificantDigits||t?void 0:i,"number"===typeof e)l=t?parseFloat(e.toFixed(t)):e;else{const n=parseFloat(e.toSignificant(i));l=t?parseFloat(n.toFixed(t)):n}return l.toLocaleString(d,r)}function s(e,n,i=o.Xn,r){return e?d().equal(e.quotient,d().BigInt(0))?"0":e.divide(e.decimalScale).lessThan(new t.Fraction(1,1e5))?`<${l({number:1e-5,locale:i})}`:l({number:e,locale:i,sigFigs:n,fixedDecimals:r}):"-"}},87314:(e,n,i)=>{i.d(n,{w:()=>o});const t=new(i(53847).Fraction)(1,1);function o(e,n){if(n.lessThan(0)||n.greaterThan(t))throw new Error("Unexpected slippage");return[e.multiply(t.subtract(n)).quotient,e.multiply(t.add(n)).quotient]}},97709:(e,n,i)=>{i.r(n),i.d(n,{default:()=>de});var t=i(85713),o=i(19984),r=i(34203),d=i(53847),l=i(54644),s=i(36794),a=i(42789),c=i(65311),u=i(10530),p=i(7951),x=i(54674),h=i(10278),v=i(92947),m=i(96410),R=i(33121),C=i(50645),g=i(21959),f=i(75423),j=i(70694),y=i(20295),D=i(53947),N=i(74222),E=i(12763),b=i(57235),A=i(92627),_=i(93405),Y=i(17567),U=i(19933),B=i(94999),$=i(90495),w=i(265),P=i(91128),k=i(56119),S=i(67197),I=i.n(S),O=i(3368),T=i(26467),q=i(41580),V=i(23843),z=i(33370);const L=I().BigInt(0);function W(){return(0,T.G)(e=>e.mint)}var F=i(47519),M=i(19456),G=i(34342),J=i(38740),H=i(87314),Z=i(97805),X=i(16649),Q=i(12991),K=i(5294),ee=i(87014);function ne({noLiquidity:e,price:n,currencies:i,parsedAmounts:t,poolTokenPercentage:r,onAdd:d}){var l,s,a,c,u,p,x,h;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(E.JA,{children:[(0,z.jsx)(R.PR.DeprecatedBody,{children:(0,z.jsx)(o.x6,{id:"C7f3au",values:{0:null===(l=i[k.D0.CURRENCY_A])||void 0===l?void 0:l.symbol}})}),(0,z.jsxs)(E.Bp,{children:[(0,z.jsx)(ee.A,{currency:i[k.D0.CURRENCY_A],style:{marginRight:"8px"}}),(0,z.jsx)(R.PR.DeprecatedBody,{children:null===(s=t[k.D0.CURRENCY_A])||void 0===s?void 0:s.toSignificant(6)})]})]}),(0,z.jsxs)(E.JA,{children:[(0,z.jsx)(R.PR.DeprecatedBody,{children:(0,z.jsx)(o.x6,{id:"C7f3au",values:{0:null===(a=i[k.D0.CURRENCY_B])||void 0===a?void 0:a.symbol}})}),(0,z.jsxs)(E.Bp,{children:[(0,z.jsx)(ee.A,{currency:i[k.D0.CURRENCY_B],style:{marginRight:"8px"}}),(0,z.jsx)(R.PR.DeprecatedBody,{children:null===(c=t[k.D0.CURRENCY_B])||void 0===c?void 0:c.toSignificant(6)})]})]}),(0,z.jsxs)(E.JA,{children:[(0,z.jsx)(R.PR.DeprecatedBody,{children:(0,z.jsx)(o.x6,{id:"3XOwjg"})}),(0,z.jsx)(R.PR.DeprecatedBody,{children:`1 ${null===(u=i[k.D0.CURRENCY_A])||void 0===u?void 0:u.symbol} = ${null===n||void 0===n?void 0:n.toSignificant(4)} ${null===(p=i[k.D0.CURRENCY_B])||void 0===p?void 0:p.symbol}`})]}),(0,z.jsx)(E.JA,{style:{justifyContent:"flex-end"},children:(0,z.jsx)(R.PR.DeprecatedBody,{children:`1 ${null===(x=i[k.D0.CURRENCY_B])||void 0===x?void 0:x.symbol} = ${null===n||void 0===n?void 0:n.invert().toSignificant(4)} ${null===(h=i[k.D0.CURRENCY_A])||void 0===h?void 0:h.symbol}`})}),(0,z.jsxs)(E.JA,{children:[(0,z.jsx)(R.PR.DeprecatedBody,{children:(0,z.jsx)(o.x6,{id:"6MJHcQ"})}),(0,z.jsx)(R.PR.DeprecatedBody,{children:(0,z.jsx)(o.x6,{id:"hbO8db",values:{0:e?"100":null===r||void 0===r?void 0:r.toSignificant(4)}})})]}),(0,z.jsx)(C.$$,{style:{margin:"20px 0 0 0"},onClick:d,children:(0,z.jsx)(v.EY,{fontWeight:535,fontSize:20,children:e?(0,z.jsx)(o.x6,{id:"ELJdCv"}):(0,z.jsx)(o.x6,{id:"xqNrBs"})})})]})}function ie({currencies:e,noLiquidity:n,poolTokenPercentage:i,price:t}){var r,d,l,s,a,c,u;const p=(0,m.useTheme)();let x;try{var h;x=null===t||void 0===t||null===(h=t.invert())||void 0===h?void 0:h.toSignificant(6)}catch(C){x=void 0}return(0,z.jsx)(f.mm,{gap:"md",children:(0,z.jsxs)(E.eF,{justify:"space-around",gap:"4px",children:[(0,z.jsxs)(f.mm,{justify:"center",children:[(0,z.jsx)(R.PR.DeprecatedBlack,{"data-testid":"currency-b-price",children:null!==(r=null===t||void 0===t?void 0:t.toSignificant(6))&&void 0!==r?r:"-"}),(0,z.jsx)(v.EY,{fontWeight:535,fontSize:14,color:p.neutral2,pt:1,children:(0,z.jsx)(o.x6,{id:"7Z4WfS",values:{0:null===(d=e[k.D0.CURRENCY_B])||void 0===d?void 0:d.symbol,1:null===(l=e[k.D0.CURRENCY_A])||void 0===l?void 0:l.symbol}})})]}),(0,z.jsxs)(f.mm,{justify:"center",children:[(0,z.jsx)(R.PR.DeprecatedBlack,{"data-testid":"currency-a-price",children:null!==(s=x)&&void 0!==s?s:"-"}),(0,z.jsx)(v.EY,{fontWeight:535,fontSize:14,color:p.neutral2,pt:1,children:(0,z.jsx)(o.x6,{id:"7Z4WfS",values:{0:null===(a=e[k.D0.CURRENCY_A])||void 0===a?void 0:a.symbol,1:null===(c=e[k.D0.CURRENCY_B])||void 0===c?void 0:c.symbol}})})]}),(0,z.jsxs)(f.mm,{justify:"center",children:[(0,z.jsxs)(R.PR.DeprecatedBlack,{children:[n&&t?"100":null!==(u=null!==i&&void 0!==i&&i.lessThan(A.u4)?"<0.01":null===i||void 0===i?void 0:i.toFixed(2))&&void 0!==u?u:"0","%"]}),(0,z.jsx)(v.EY,{fontWeight:535,fontSize:14,color:p.neutral2,pt:1,children:(0,z.jsx)(o.x6,{id:"SbBMxj"})})]})]})})}const te=new d.Percent(50,1e4),oe=(0,m.default)(f.mm)`
  gap: 20px;
  margin-bottom: 16px;
`;function re(){var e,n,i,S,ee,re,de,le,se,ae,ce,ue;const{currencyIdA:pe,currencyIdB:xe}=(0,t.g)(),he=(0,t.Zp)(),{account:ve,chainId:me,provider:Re}=(0,l.useWeb3React)(),Ce=(0,m.useTheme)(),ge=(0,Y.H2)(pe),fe=(0,Y.H2)(xe),je=me?_.Im[me]:void 0,ye=Boolean(me&&je&&(ge&&ge.equals(je)||fe&&fe.equals(je))),De=(0,s.QO)(),{independentField:Ne,typedValue:Ee,otherTypedValue:be}=W(),{dependentField:Ae,currencies:_e,pair:Ye,pairState:Ue,currencyBalances:Be,parsedAmounts:$e,price:we,noLiquidity:Pe,liquidityMinted:ke,poolTokenPercentage:Se,error:Ie}=function(e,n){var i,t;const{account:r}=(0,l.useWeb3React)(),{independentField:s,typedValue:a,otherTypedValue:c}=W(),u=s===k.D0.CURRENCY_A?k.D0.CURRENCY_B:k.D0.CURRENCY_A,p=(0,x.useMemo)(()=>({[k.D0.CURRENCY_A]:null!==e&&void 0!==e?e:void 0,[k.D0.CURRENCY_B]:null!==n&&void 0!==n?n:void 0}),[e,n]),[h,v]=(0,P.ek)(p[k.D0.CURRENCY_A],p[k.D0.CURRENCY_B]),m=(0,q.P)(null===v||void 0===v?void 0:v.liquidityToken),R=h===P.CN.NOT_EXISTS||Boolean(m&&I().equal(m.quotient,L))||Boolean(h===P.CN.EXISTS&&v&&I().equal(v.reserve0.quotient,L)&&I().equal(v.reserve1.quotient,L)),C=(0,V.ed)(null!==r&&void 0!==r?r:void 0,(0,x.useMemo)(()=>[p[k.D0.CURRENCY_A],p[k.D0.CURRENCY_B]],[p])),g={[k.D0.CURRENCY_A]:C[0],[k.D0.CURRENCY_B]:C[1]},f=(0,O.A)(a,p[s]),j=(0,x.useMemo)(()=>{if(R)return c&&p[u]?(0,O.A)(c,p[u]):void 0;if(f){const i=null===f||void 0===f?void 0:f.wrapped,[t,o]=[null===e||void 0===e?void 0:e.wrapped,null===n||void 0===n?void 0:n.wrapped];if(t&&o&&i&&v){const r=u===k.D0.CURRENCY_B?n:e,l=u===k.D0.CURRENCY_B?v.priceOf(t).quote(i):v.priceOf(o).quote(i);return null!==r&&void 0!==r&&r.isNative?d.CurrencyAmount.fromRawAmount(r,l.quotient):l}return}},[R,c,p,u,f,e,n,v]),y=(0,x.useMemo)(()=>({[k.D0.CURRENCY_A]:s===k.D0.CURRENCY_A?f:j,[k.D0.CURRENCY_B]:s===k.D0.CURRENCY_A?j:f}),[j,f,s]),D=(0,x.useMemo)(()=>{if(R){const{[k.D0.CURRENCY_A]:e,[k.D0.CURRENCY_B]:n}=y;if(null!==e&&void 0!==e&&e.greaterThan(0)&&null!==n&&void 0!==n&&n.greaterThan(0)){const i=n.divide(e);return new d.Price(e.currency,n.currency,i.denominator,i.numerator)}return}{const n=null===e||void 0===e?void 0:e.wrapped;return v&&n?v.priceOf(n):void 0}},[e,R,v,y]),N=(0,x.useMemo)(()=>{const{[k.D0.CURRENCY_A]:e,[k.D0.CURRENCY_B]:n}=y,[i,t]=[null===e||void 0===e?void 0:e.wrapped,null===n||void 0===n?void 0:n.wrapped];if(v&&m&&i&&t)try{return v.getLiquidityMinted(m,i,t)}catch(b){return void console.error(b)}},[y,v,m]),E=(0,x.useMemo)(()=>N&&m?new d.Percent(N.quotient,m.add(N).quotient):void 0,[N,m]);let b;var A,_;r||(b=(0,z.jsx)(o.x6,{id:"VHOVEJ"})),h===P.CN.INVALID&&(b=null!==(A=b)&&void 0!==A?A:(0,z.jsx)(o.x6,{id:"R7D79P"})),y[k.D0.CURRENCY_A]&&y[k.D0.CURRENCY_B]||(b=null!==(_=b)&&void 0!==_?_:(0,z.jsx)(o.x6,{id:"iPMIoT"}));const{[k.D0.CURRENCY_A]:Y,[k.D0.CURRENCY_B]:U}=y;var B,$;return Y&&null!==g&&void 0!==g&&null!==(i=g[k.D0.CURRENCY_A])&&void 0!==i&&i.lessThan(Y)&&(b=(0,z.jsx)(o.x6,{id:"m6RmA/",values:{0:null===(B=p[k.D0.CURRENCY_A])||void 0===B?void 0:B.symbol}})),U&&null!==g&&void 0!==g&&null!==(t=g[k.D0.CURRENCY_B])&&void 0!==t&&t.lessThan(U)&&(b=(0,z.jsx)(o.x6,{id:"m6RmA/",values:{0:null===($=p[k.D0.CURRENCY_B])||void 0===$?void 0:$.symbol}})),{dependentField:u,currencies:p,pair:v,pairState:h,currencyBalances:g,parsedAmounts:y,price:D,noLiquidity:R,liquidityMinted:N,poolTokenPercentage:E,error:b}}(null!==ge&&void 0!==ge?ge:void 0,null!==fe&&void 0!==fe?fe:void 0),{onFieldAInput:Oe,onFieldBInput:Te}=function(e){const n=(0,T.j)();return{onFieldAInput:(0,x.useCallback)(i=>{n((0,k.$M)({field:k.D0.CURRENCY_A,typedValue:i,noLiquidity:!0===e}))},[n,e]),onFieldBInput:(0,x.useCallback)(i=>{n((0,k.$M)({field:k.D0.CURRENCY_B,typedValue:i,noLiquidity:!0===e}))},[n,e])}}(Pe),qe=!Ie,[Ve,ze]=(0,x.useState)(!1),[Le,We]=(0,x.useState)(!1),Fe=(0,w.A)(),Me=(0,G.co)(te),[Ge,Je]=(0,x.useState)(""),He={[Ne]:Ee,[Ae]:Pe?be:null!==(e=null===(n=$e[Ae])||void 0===n?void 0:n.toSignificant(6))&&void 0!==e?e:""},Ze=[k.D0.CURRENCY_A,k.D0.CURRENCY_B].reduce((e,n)=>({...e,[n]:(0,X.r)(Be[n])}),{}),Xe=[k.D0.CURRENCY_A,k.D0.CURRENCY_B].reduce((e,n)=>{var i,t;return{...e,[n]:null===(i=Ze[n])||void 0===i?void 0:i.equalTo(null!==(t=$e[n])&&void 0!==t?t:"0")}},{}),Qe=(0,B.Ps)(),[Ke,en]=(0,U.e)($e[k.D0.CURRENCY_A],null===Qe||void 0===Qe?void 0:Qe.address),[nn,tn]=(0,U.e)($e[k.D0.CURRENCY_B],null===Qe||void 0===Qe?void 0:Qe.address),on=(0,F.OQ)(),rn=(0,p.S)();async function dn(){if(!me||!Re||!ve||!Qe||!rn)return;const{[k.D0.CURRENCY_A]:e,[k.D0.CURRENCY_B]:n}=$e;if(!e||!n||!ge||!fe||!Fe)return;const i={[k.D0.CURRENCY_A]:(0,H.w)(e,Pe?A.dU:Me)[0],[k.D0.CURRENCY_B]:(0,H.w)(n,Pe?A.dU:Me)[0]};let t,o,d,l;if(ge.isNative||fe.isNative){var s,a,c;const u=fe.isNative;t=Qe.estimateGas.addLiquidityETH,o=Qe.addLiquidityETH,d=[null!==(s=null===(a=u?ge:fe)||void 0===a||null===(c=a.wrapped)||void 0===c?void 0:c.address)&&void 0!==s?s:"",(u?e:n).quotient.toString(),i[u?k.D0.CURRENCY_A:k.D0.CURRENCY_B].toString(),i[u?k.D0.CURRENCY_B:k.D0.CURRENCY_A].toString(),ve,Fe.toHexString()],l=r.gH.from((u?n:e).quotient.toString())}else{var u,p,x,h;t=Qe.estimateGas.addLiquidity,o=Qe.addLiquidity,d=[null!==(u=null===ge||void 0===ge||null===(p=ge.wrapped)||void 0===p?void 0:p.address)&&void 0!==u?u:"",null!==(x=null===fe||void 0===fe||null===(h=fe.wrapped)||void 0===h?void 0:h.address)&&void 0!==x?x:"",e.quotient.toString(),n.quotient.toString(),i[k.D0.CURRENCY_A].toString(),i[k.D0.CURRENCY_B].toString(),ve,Fe.toHexString()],l=null}We(!0),await t(...d,l?{value:l}:{}).then(e=>o(...d,{...l?{value:l}:{},gasLimit:(0,J.K)(e)}).then(e=>{var n,i,t,o;We(!1);const r={type:M.D.ADD_LIQUIDITY_V2_POOL,baseCurrencyId:(0,Z.V)(ge),expectedAmountBaseRaw:null!==(n=null===(i=$e[k.D0.CURRENCY_A])||void 0===i?void 0:i.quotient.toString())&&void 0!==n?n:"0",quoteCurrencyId:(0,Z.V)(fe),expectedAmountQuoteRaw:null!==(t=null===(o=$e[k.D0.CURRENCY_B])||void 0===o?void 0:o.quotient.toString())&&void 0!==t?t:"0"};on(e,r),Je(e.hash)})).catch(e=>{We(!1),4001!==(null===e||void 0===e?void 0:e.code)&&console.error(e)})}const ln=()=>{var e,n,i,t;return(0,z.jsx)(oe,{children:Pe?(0,z.jsx)(g.R4,{mt:"20px",$borderRadius:"20px",children:(0,z.jsxs)(E.eF,{justify:"space-between",children:[(0,z.jsx)(v.EY,{fontSize:"24px",fontWeight:535,lineHeight:"42px",marginRight:10,children:(null===(e=_e[k.D0.CURRENCY_A])||void 0===e?void 0:e.symbol)+"/"+(null===(n=_e[k.D0.CURRENCY_B])||void 0===n?void 0:n.symbol)}),(0,z.jsx)(y.A,{currency0:_e[k.D0.CURRENCY_A],currency1:_e[k.D0.CURRENCY_B],size:30})]})}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(E.sZ,{style:{marginTop:"20px"},children:[(0,z.jsx)(v.EY,{fontSize:"48px",fontWeight:535,lineHeight:"42px",marginRight:10,children:null===ke||void 0===ke?void 0:ke.toSignificant(6)}),(0,z.jsx)(y.A,{currency0:_e[k.D0.CURRENCY_A],currency1:_e[k.D0.CURRENCY_B],size:30})]}),(0,z.jsx)(E.Ay,{children:(0,z.jsx)(v.EY,{fontSize:"24px",children:(null===(i=_e[k.D0.CURRENCY_A])||void 0===i?void 0:i.symbol)+"/"+(null===(t=_e[k.D0.CURRENCY_B])||void 0===t?void 0:t.symbol)+" Pool Tokens"})}),(0,z.jsx)(R.PR.DeprecatedItalic,{fontSize:12,textAlign:"left",padding:"8px 0 0 0 ",children:(0,z.jsx)(o.x6,{id:"4nBvG6",values:{0:Me.toSignificant(4)}})})]})})},sn=()=>(0,z.jsx)(ne,{price:we,currencies:_e,parsedAmounts:$e,noLiquidity:Pe,onAdd:dn,poolTokenPercentage:Se}),an=(0,z.jsx)(o.x6,{id:"+U2TkE",values:{0:null===(i=$e[k.D0.CURRENCY_A])||void 0===i?void 0:i.toSignificant(6),1:null===(S=_e[k.D0.CURRENCY_A])||void 0===S?void 0:S.symbol,2:null===(ee=$e[k.D0.CURRENCY_B])||void 0===ee?void 0:ee.toSignificant(6),3:null===(re=_e[k.D0.CURRENCY_B])||void 0===re?void 0:re.symbol}}),cn=(0,x.useCallback)(e=>{const n=(0,Z.V)(e);he(n===xe?`/add/v2/${xe}/${pe}`:`/add/v2/${n}/${xe}`)},[xe,he,pe]),un=(0,x.useCallback)(e=>{const n=(0,Z.V)(e);he(pe===n?xe?`/add/v2/${xe}/${n}`:`/add/v2/${n}`:`/add/v2/${pe||"ETH"}/${n}`)},[pe,he,xe]),pn=(0,x.useCallback)(()=>{ze(!1),Ge&&Oe(""),Je("")},[Oe,Ge]),{pathname:xn}=(0,t.zy)(),hn=xn.includes("/create"),vn=(0,$.C)(null===_e||void 0===_e?void 0:_e.CURRENCY_A,null===_e||void 0===_e?void 0:_e.CURRENCY_B);return rn?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(Q.A,{children:[(0,z.jsx)(D.m,{creating:hn,adding:!0,autoSlippage:te}),(0,z.jsxs)(K.mO,{children:[(0,z.jsx)(b.A,{isOpen:Ve,onDismiss:pn,attemptingTxn:Le,hash:Ge,reviewContent:()=>(0,z.jsx)(b.Y,{title:Pe?(0,z.jsx)(o.x6,{id:"aM1tos"}):(0,z.jsx)(o.x6,{id:"AeZIvT"}),onDismiss:pn,topContent:ln,bottomContent:sn}),pendingText:an,currencyToAdd:null===Ye||void 0===Ye?void 0:Ye.liquidityToken}),(0,z.jsxs)(f.mm,{gap:"20px",children:[Pe||(hn?(0,z.jsx)(f.YA,{children:(0,z.jsx)(g.tZ,{children:(0,z.jsxs)(f.mm,{gap:"10px",children:[(0,z.jsx)(R.PR.DeprecatedLink,{fontWeight:535,color:"accent1",children:(0,z.jsx)(o.x6,{id:"thdBpY"})}),(0,z.jsx)(R.PR.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,z.jsx)(o.x6,{id:"TscS1q"})}),(0,z.jsx)(R.PR.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,z.jsx)(o.x6,{id:"UEmvHF"})})]})})}):(0,z.jsx)(f.YA,{children:(0,z.jsx)(g.tZ,{children:(0,z.jsx)(f.mm,{gap:"10px",children:(0,z.jsxs)(R.PR.DeprecatedLink,{fontWeight:485,color:"accent1",children:[(0,z.jsx)("b",{children:(0,z.jsx)(o.x6,{id:"0l56BI"})})," ",(0,z.jsx)(o.x6,{id:"NqgbmN"})]})})})})),(0,z.jsx)(j.A,{value:He[k.D0.CURRENCY_A],onUserInput:Oe,onMax:()=>{var e,n;Oe(null!==(e=null===(n=Ze[k.D0.CURRENCY_A])||void 0===n?void 0:n.toExact())&&void 0!==e?e:"")},onCurrencySelect:cn,showMaxButton:!Xe[k.D0.CURRENCY_A],currency:null!==(de=_e[k.D0.CURRENCY_A])&&void 0!==de?de:null,id:"add-liquidity-input-tokena",showCommonBases:!0}),(0,z.jsx)(f.YA,{children:(0,z.jsx)(h.A,{size:"16",color:Ce.neutral2})}),(0,z.jsx)(j.A,{value:He[k.D0.CURRENCY_B],onUserInput:Te,onCurrencySelect:un,onMax:()=>{var e,n;Te(null!==(e=null===(n=Ze[k.D0.CURRENCY_B])||void 0===n?void 0:n.toExact())&&void 0!==e?e:"")},showMaxButton:!Xe[k.D0.CURRENCY_B],currency:null!==(le=_e[k.D0.CURRENCY_B])&&void 0!==le?le:null,id:"add-liquidity-input-tokenb",showCommonBases:!0}),_e[k.D0.CURRENCY_A]&&_e[k.D0.CURRENCY_B]&&Ue!==P.CN.INVALID&&(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)(g.R4,{padding:"0px",$borderRadius:"20px",children:[(0,z.jsx)(E.JA,{padding:"1rem",children:(0,z.jsx)(R.PR.DeprecatedSubHeader,{fontWeight:535,fontSize:14,children:Pe?(0,z.jsx)(o.x6,{id:"D52j9u"}):(0,z.jsx)(o.x6,{id:"vmTbpu"})})})," ",(0,z.jsx)(g.R4,{padding:"1rem",$borderRadius:"20px",children:(0,z.jsx)(ie,{currencies:_e,poolTokenPercentage:Se,noLiquidity:Pe,price:we})})]})}),vn?(0,z.jsx)(C.$$,{disabled:!0,children:(0,z.jsx)(R.PR.DeprecatedMain,{mb:"4px",children:(0,z.jsx)(o.x6,{id:"Z941Tw"})})}):ve?(0,z.jsxs)(f.mm,{gap:"md",children:[(Ke===U.h.NOT_APPROVED||Ke===U.h.PENDING||nn===U.h.NOT_APPROVED||nn===U.h.PENDING)&&qe&&(0,z.jsxs)(E.JA,{children:[Ke!==U.h.APPROVED&&(0,z.jsx)(C.$$,{onClick:en,disabled:Ke===U.h.PENDING,width:nn!==U.h.APPROVED?"48%":"100%",children:Ke===U.h.PENDING?(0,z.jsx)(K.nv,{children:(0,z.jsx)(o.x6,{id:"MfyhMG",values:{0:null===(se=_e[k.D0.CURRENCY_A])||void 0===se?void 0:se.symbol}})}):(0,z.jsx)(o.x6,{id:"fgGids",values:{0:null===(ae=_e[k.D0.CURRENCY_A])||void 0===ae?void 0:ae.symbol}})}),nn!==U.h.APPROVED&&(0,z.jsx)(C.$$,{onClick:tn,disabled:nn===U.h.PENDING,width:Ke!==U.h.APPROVED?"48%":"100%",children:nn===U.h.PENDING?(0,z.jsx)(K.nv,{children:(0,z.jsx)(o.x6,{id:"MfyhMG",values:{0:null===(ce=_e[k.D0.CURRENCY_B])||void 0===ce?void 0:ce.symbol}})}):(0,z.jsx)(o.x6,{id:"fgGids",values:{0:null===(ue=_e[k.D0.CURRENCY_B])||void 0===ue?void 0:ue.symbol}})})]}),(0,z.jsx)(C.Jk,{onClick:()=>{ze(!0)},disabled:!qe||Ke!==U.h.APPROVED||nn!==U.h.APPROVED,error:!qe&&!!$e[k.D0.CURRENCY_A]&&!!$e[k.D0.CURRENCY_B],children:(0,z.jsx)(v.EY,{fontSize:20,fontWeight:535,children:null!==Ie&&void 0!==Ie?Ie:(0,z.jsx)(o.x6,{id:"bwSQI0"})})})]}):(0,z.jsx)(C.N$,{onClick:De,children:(0,z.jsx)(o.x6,{id:"VHOVEJ"})})]})]})]}),(0,z.jsx)(c.j,{}),vn?(0,z.jsx)(a.A,{show:vn,currencies:[_e.CURRENCY_A,_e.CURRENCY_B]}):Ye&&!Pe&&Ue!==P.CN.INVALID?(0,z.jsx)(f.mm,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:(0,z.jsx)(N.tA,{showUnwrapped:ye,pair:Ye})}):null]}):(0,z.jsx)(u.O,{})}function de(){const{currencyIdA:e,currencyIdB:n}=(0,t.g)();return e&&n&&e.toLowerCase()===n.toLowerCase()?(0,z.jsx)(t.C5,{to:`/add/v2/${e}`,replace:!0}):(0,z.jsx)(re,{})}}}]);
//# sourceMappingURL=7034.03b00a19.chunk.js.map