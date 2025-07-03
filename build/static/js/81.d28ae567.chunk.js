"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[81],{10278:(e,t,n)=>{n.d(t,{A:()=>d});var o=n(54674),i=n(88178),r=n.n(i);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=(0,o.forwardRef)(function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,u=void 0===r?24:r,d=a(e,["color","size"]);return o.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),o.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))});u.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},u.displayName="Plus";const d=u},12991:(e,t,n)=>{n.d(t,{A:()=>a,q:()=>l});var o=n(96410),i=n(3405),r=n(33370);const l=o.default.main`
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
  z-index: ${i.M.default};
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
`;function a(e){return(0,r.jsx)(l,{...e})}},14841:(e,t,n)=>{n.d(t,{OC:()=>c,VD:()=>a,W3:()=>s,mO:()=>l,sQ:()=>d,xQ:()=>u});var o=n(75423),i=n(86724),r=n(96410);const l=r.default.div`
  position: relative;
  padding: 26px 16px;
`,a=r.default.div`
  padding: 20px 8px 0px;
  position: relative;
  display: flex;
  flex-direction: column;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    margin: 0 auto;
  `};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,u=(0,r.default)(o.mm)`
  opacity: ${({disabled:e})=>e?"0.2":"1"};
  pointer-events: ${({disabled:e})=>e?"none":"initial"};
`,d=(0,r.default)(i.p)`
  background-color: ${({theme:e})=>e.surface1};
  text-align: left;
  font-size: 18px;
  width: 100%;
`,s=r.default.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;

  border-top: 1px solid ${({theme:e})=>e.surface3};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    margin-top: 0;
  `};
`,c=r.default.div`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    display: none;
  `};
`},19933:(e,t,n)=>{n.d(t,{h:()=>d,e:()=>v});var o=n(65264),i=n(54644),r=n(94999),l=n(45416),a=n(54674),u=n(38740);let d=function(e){return e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED",e}({});function s(e,t,n){var s;const{chainId:c}=(0,i.useWeb3React)(),p=null!==e&&void 0!==e&&null!==(s=e.currency)&&void 0!==s&&s.isToken?e.currency:void 0,m=function(e,t,n){var o;const{account:r}=(0,i.useWeb3React)(),u=null!==e&&void 0!==e&&null!==(o=e.currency)&&void 0!==o&&o.isToken?e.currency:void 0,{tokenAllowance:s}=(0,l.l)(u,null!==r&&void 0!==r?r:void 0,t),c=n(u,t);return(0,a.useMemo)(()=>e&&t?e.currency.isNative?d.APPROVED:s?s.lessThan(e)?c?d.PENDING:d.NOT_APPROVED:d.APPROVED:d.UNKNOWN:d.UNKNOWN,[e,c,t,s])}(e,t,n),v=(0,r.dV)(null===p||void 0===p?void 0:p.address),f=(0,a.useCallback)(async()=>{function n(e){console.warn(`${(null===p||void 0===p?void 0:p.symbol)||"Token"} approval failed:`,e)}if(m!==d.NOT_APPROVED)return n("approve was called unnecessarily");if(!c)return n("no chainId");if(!p)return n("no token");if(!v)return n("tokenContract is null");if(!e)return n("missing amount to approve");if(!t)return n("no spender");let i=!1;const r=await v.estimateGas.approve(t,o.Is).catch(()=>(i=!0,v.estimateGas.approve(t,e.quotient.toString())));return v.approve(t,i?e.quotient.toString():o.Is,{gasLimit:(0,u.K)(r)}).then(n=>({response:n,tokenAddress:p.address,spenderAddress:t,amount:e})).catch(e=>{throw n(e),e})},[m,p,v,e,t,c]);return[m,f]}var c=n(47519),p=n(19456);function m(e){const t=(0,c.OQ)();return(0,a.useCallback)(()=>e().then(e=>{if(e){const{response:n,tokenAddress:o,spenderAddress:i,amount:r}=e;t(n,{type:p.D.APPROVAL,tokenAddress:o,spender:i,amount:r.quotient.toString()})}}),[t,e])}function v(e,t){const[n,o]=s(e,t,c.yI);return[n,m(o)]}},49132:(e,t,n)=>{n.d(t,{Uz:()=>h,wt:()=>x,iG:()=>y,UN:()=>b});var o=n(19984),i=n(65755),r=n(53847),l=n(54644),a=n(94687),u=n(67197),d=n.n(u),s=n(3368),c=n(54674),p=n(4126),m=n(26467);function v(e,t,n){if(e&&t&&"number"===typeof n)return(0,i.tickToPrice)(e,t,n)}var f=n(92627),R=n(23843),C=n(11577),g=n(43319);function P(e,t,n,o){if(!e||!t||!n||!o)return;const r=function(e,t,n){var o;if(!e||!t||!n)return;if(!n.match(/^\d*\.?\d+$/))return;const[i,r]=n.split("."),l=null!==(o=null===r||void 0===r?void 0:r.length)&&void 0!==o?o:0,a=d().BigInt((null!==i&&void 0!==i?i:"")+(null!==r&&void 0!==r?r:""));return new g.Price(e,t,d().multiply(d().BigInt(10**l),d().BigInt(10**e.decimals)),d().multiply(a,d().BigInt(10**t.decimals)))}(e,t,o);if(!r)return;let l;const a=(0,i.encodeSqrtRatioX96)(r.numerator,r.denominator);return l=d().greaterThanOrEqual(a,i.TickMath.MAX_SQRT_RATIO)?i.TickMath.MAX_TICK:d().lessThanOrEqual(a,i.TickMath.MIN_SQRT_RATIO)?i.TickMath.MIN_TICK:(0,i.priceToClosestTick)(r),(0,i.nearestUsableTick)(l,i.TICK_SPACINGS[n])}var k=n(33370);function b(){return(0,m.G)(e=>e.mintV3)}function y(e){const t=(0,m.j)(),n=(0,c.useCallback)(n=>{t((0,C.$M)({field:C.D0.CURRENCY_A,typedValue:n,noLiquidity:!0===e}))},[t,e]),o=(0,c.useCallback)(n=>{t((0,C.$M)({field:C.D0.CURRENCY_B,typedValue:n,noLiquidity:!0===e}))},[t,e]),[i,r]=(0,p.ok)();return{onFieldAInput:n,onFieldBInput:o,onLeftRangeInput:(0,c.useCallback)(e=>{t((0,C.jG)({typedValue:e}));const n=i.get("minPrice");(!n||n&&n!==e)&&(i.set("minPrice",e),r(i))},[t,i,r]),onRightRangeInput:(0,c.useCallback)(e=>{t((0,C.Im)({typedValue:e}));const n=i.get("maxPrice");(!n||n&&n!==e)&&(i.set("maxPrice",e),r(i))},[t,i,r]),onStartPriceInput:(0,c.useCallback)(e=>{t((0,C.qQ)({typedValue:e}))},[t])}}function x(e,t,n,u,p){var m,g;const{account:y}=(0,l.useWeb3React)(),{independentField:x,typedValue:h,leftRangeTypedValue:E,rightRangeTypedValue:A,startPriceTypedValue:U}=b(),N=x===C.D0.CURRENCY_A?C.D0.CURRENCY_B:C.D0.CURRENCY_A,T=(0,c.useMemo)(()=>({[C.D0.CURRENCY_A]:e,[C.D0.CURRENCY_B]:t}),[e,t]),[O,_,I]=(0,c.useMemo)(()=>[null===e||void 0===e?void 0:e.wrapped,null===t||void 0===t?void 0:t.wrapped,null===u||void 0===u?void 0:u.wrapped],[e,t,u]),[D,S]=(0,c.useMemo)(()=>O&&_?O.sortsBefore(_)?[O,_]:[_,O]:[void 0,void 0],[O,_]),w=(0,R.ed)(null!==y&&void 0!==y?y:void 0,(0,c.useMemo)(()=>[T[C.D0.CURRENCY_A],T[C.D0.CURRENCY_B]],[T])),z={[C.D0.CURRENCY_A]:w[0],[C.D0.CURRENCY_B]:w[1]},[L,j]=(0,a.Q)(T[C.D0.CURRENCY_A],T[C.D0.CURRENCY_B],n),M=L===a.S.NOT_EXISTS,B=Boolean(I&&D&&!I.equals(D)),W=(0,c.useMemo)(()=>{if(M){const t=(0,s.A)(U,B?D:S);if(t&&D&&S){var e;const n=(0,s.A)("1",B?S:D),o=n&&t?new r.Price(n.currency,t.currency,n.quotient,t.quotient):void 0;return null!==(e=B?null===o||void 0===o?void 0:o.invert():o)&&void 0!==e?e:void 0}return}return j&&D?j.priceOf(D):void 0},[M,U,B,S,D,j]),$=(0,c.useMemo)(()=>{const e=W?(0,i.encodeSqrtRatioX96)(W.numerator,W.denominator):void 0;return W&&e&&!(d().greaterThanOrEqual(e,i.TickMath.MIN_SQRT_RATIO)&&d().lessThan(e,i.TickMath.MAX_SQRT_RATIO))},[W]),q=(0,c.useMemo)(()=>{if(O&&_&&n&&W&&!$){const e=(0,i.priceToClosestTick)(W),t=i.TickMath.getSqrtRatioAtTick(e);return new i.Pool(O,_,n,t,d().BigInt(0),e,[])}},[n,$,W,O,_]),Y=null!==j&&void 0!==j?j:q,V=(0,c.useMemo)(()=>({[C.zm.LOWER]:n?(0,i.nearestUsableTick)(i.TickMath.MIN_TICK,i.TICK_SPACINGS[n]):void 0,[C.zm.UPPER]:n?(0,i.nearestUsableTick)(i.TickMath.MAX_TICK,i.TICK_SPACINGS[n]):void 0}),[n]),K=(0,c.useMemo)(()=>({[C.zm.LOWER]:"number"===typeof(null===p||void 0===p?void 0:p.tickLower)?p.tickLower:B&&"boolean"===typeof A||!B&&"boolean"===typeof E?V[C.zm.LOWER]:B?P(S,D,n,A.toString()):P(D,S,n,E.toString()),[C.zm.UPPER]:"number"===typeof(null===p||void 0===p?void 0:p.tickUpper)?p.tickUpper:!B&&"boolean"===typeof A||B&&"boolean"===typeof E?V[C.zm.UPPER]:B?P(S,D,n,E.toString()):P(D,S,n,A.toString())}),[p,n,B,E,A,D,S,V]),{[C.zm.LOWER]:G,[C.zm.UPPER]:Q}=K||{},F=(0,c.useMemo)(()=>({[C.zm.LOWER]:n&&G===V.LOWER,[C.zm.UPPER]:n&&Q===V.UPPER}),[V,G,Q,n]),X=Boolean("number"===typeof G&&"number"===typeof Q&&G>=Q),H=(0,c.useMemo)(()=>({[C.zm.LOWER]:v(D,S,V.LOWER),[C.zm.UPPER]:v(D,S,V.UPPER)}),[D,S,V.LOWER,V.UPPER]),J=(0,c.useMemo)(()=>({[C.zm.LOWER]:v(D,S,K[C.zm.LOWER]),[C.zm.UPPER]:v(D,S,K[C.zm.UPPER])}),[D,S,K]),{[C.zm.LOWER]:Z,[C.zm.UPPER]:ee}=J,te=Boolean(!X&&W&&Z&&ee&&(W.lessThan(Z)||W.greaterThan(ee))),ne=(0,s.A)(h,T[x]),oe=(0,c.useMemo)(()=>{const n=null===ne||void 0===ne?void 0:ne.wrapped,o=N===C.D0.CURRENCY_B?t:e;if(ne&&n&&"number"===typeof G&&"number"===typeof Q&&Y){if(te||X)return;const e=n.currency.equals(Y.token0)?i.Position.fromAmount0({pool:Y,tickLower:G,tickUpper:Q,amount0:ne.quotient,useFullPrecision:!0}):i.Position.fromAmount1({pool:Y,tickLower:G,tickUpper:Q,amount1:ne.quotient}),t=n.currency.equals(Y.token0)?e.amount1:e.amount0;return o&&r.CurrencyAmount.fromRawAmount(o,t.quotient)}},[ne,te,N,t,e,G,Q,Y,X]),ie=(0,c.useMemo)(()=>({[C.D0.CURRENCY_A]:x===C.D0.CURRENCY_A?ne:oe,[C.D0.CURRENCY_B]:x===C.D0.CURRENCY_A?oe:ne}),[oe,ne,x]),re=Boolean("number"===typeof Q&&Y&&Y.tickCurrent>=Q),le=Boolean("number"===typeof G&&Y&&Y.tickCurrent<=G),ae=X||Boolean(re&&Y&&O&&Y.token0.equals(O)||le&&Y&&O&&Y.token1.equals(O)),ue=X||Boolean(re&&Y&&_&&Y.token0.equals(_)||le&&Y&&_&&Y.token1.equals(_)),de=(0,c.useMemo)(()=>{var e,t;if(!Y||!O||!_||"number"!==typeof G||"number"!==typeof Q||X)return;const n=re?f.CL:null===ie||void 0===ie||null===(e=ie[O.equals(Y.token0)?C.D0.CURRENCY_A:C.D0.CURRENCY_B])||void 0===e?void 0:e.quotient,o=le?f.CL:null===ie||void 0===ie||null===(t=ie[O.equals(Y.token0)?C.D0.CURRENCY_B:C.D0.CURRENCY_A])||void 0===t?void 0:t.quotient;return void 0!==n&&void 0!==o?i.Position.fromAmounts({pool:Y,tickLower:G,tickUpper:Q,amount0:n,amount1:o,useFullPrecision:!0}):void 0},[ie,Y,O,_,re,le,X,G,Q]);let se;var ce,pe,me;(y||(se=(0,k.jsx)(o.x6,{id:"VHOVEJ"})),L===a.S.INVALID)&&(se=null!==(ce=se)&&void 0!==ce?ce:(0,k.jsx)(o.x6,{id:"R7D79P"}));$&&(se=null!==(pe=se)&&void 0!==pe?pe:(0,k.jsx)(o.x6,{id:"HXBqgG"}));(ie[C.D0.CURRENCY_A]||ae)&&(ie[C.D0.CURRENCY_B]||ue)||(se=null!==(me=se)&&void 0!==me?me:(0,k.jsx)(o.x6,{id:"iPMIoT"}));const{[C.D0.CURRENCY_A]:ve,[C.D0.CURRENCY_B]:fe}=ie;var Re,Ce;ve&&null!==z&&void 0!==z&&null!==(m=z[C.D0.CURRENCY_A])&&void 0!==m&&m.lessThan(ve)&&(se=(0,k.jsx)(o.x6,{id:"m6RmA/",values:{0:null===(Re=T[C.D0.CURRENCY_A])||void 0===Re?void 0:Re.symbol}}));fe&&null!==z&&void 0!==z&&null!==(g=z[C.D0.CURRENCY_B])&&void 0!==g&&g.lessThan(fe)&&(se=(0,k.jsx)(o.x6,{id:"m6RmA/",values:{0:null===(Ce=T[C.D0.CURRENCY_B])||void 0===Ce?void 0:Ce.symbol}}));const ge=L===a.S.INVALID;return{dependentField:N,currencies:T,pool:j,poolState:L,currencyBalances:z,parsedAmounts:ie,ticks:K,price:W,pricesAtTicks:J,pricesAtLimit:H,position:de,noLiquidity:M,errorMessage:se,invalidPool:ge,invalidRange:X,outOfRange:te,depositADisabled:ae,depositBDisabled:ue,invertPrice:B,ticksAtLimit:F}}function h(e,t,n,o,l,a){const u=(0,m.j)(),d=(0,c.useMemo)(()=>null===e||void 0===e?void 0:e.wrapped,[e]),s=(0,c.useMemo)(()=>null===t||void 0===t?void 0:t.wrapped,[t]);return{getDecrementLower:(0,c.useCallback)(()=>{if(d&&s&&"number"===typeof o&&n){return(0,i.tickToPrice)(d,s,o-i.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof o&&d&&s&&n&&a){return(0,i.tickToPrice)(d,s,a.tickCurrent-i.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""},[d,s,o,n,a]),getIncrementLower:(0,c.useCallback)(()=>{if(d&&s&&"number"===typeof o&&n){return(0,i.tickToPrice)(d,s,o+i.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof o&&d&&s&&n&&a){return(0,i.tickToPrice)(d,s,a.tickCurrent+i.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""},[d,s,o,n,a]),getDecrementUpper:(0,c.useCallback)(()=>{if(d&&s&&"number"===typeof l&&n){return(0,i.tickToPrice)(d,s,l-i.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof l&&d&&s&&n&&a){return(0,i.tickToPrice)(d,s,a.tickCurrent-i.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""},[d,s,l,n,a]),getIncrementUpper:(0,c.useCallback)(()=>{if(d&&s&&"number"===typeof l&&n){return(0,i.tickToPrice)(d,s,l+i.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof l&&d&&s&&n&&a){return(0,i.tickToPrice)(d,s,a.tickCurrent+i.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""},[d,s,l,n,a]),getSetFullRange:(0,c.useCallback)(()=>{u((0,C.jC)())},[u])}}},82685:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(54644),i=n(66295),r=n(54674),l=n(94999);function a(){var e;const{account:t}=(0,o.useWeb3React)(),n=(0,l._Q)(),a=(0,r.useMemo)(()=>[null!==t&&void 0!==t?t:void 0],[t]),u=(0,i.DD)(n,"isArgentWallet",a,i.bo);return Boolean(null===u||void 0===u||null===(e=u.result)||void 0===e?void 0:e[0])}},94872:(e,t,n)=>{n.d(t,{A:()=>T});var o=n(19984),i=n(50645),r=n(21959),l=n(75423),a=n(54674),u=n(10278),d=n(88178),s=n.n(d);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=(0,a.forwardRef)(function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,r=void 0===i?24:i,l=p(e,["color","size"]);return a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))});m.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},m.displayName="Minus";const v=m;var f=n(96410),R=n(33121),C=n(86724),g=n(33370);const P=f.default.div`
  display: flex;
`,k=(0,f.default)(i.EA)`
  border-radius: 8px;
  padding: 4px;
`,b=(0,f.default)(r.l3)`
  border-color: ${({active:e,theme:t})=>e&&t.deprecated_stateOverlayPressed};
  padding: 12px;
  animation: ${({pulsing:e,theme:t})=>{return e&&(n=t.accent1,f.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${n};
  }

  70% {
    box-shadow: 0 0 0 2px ${n};
  }

  100% {
    box-shadow: 0 0 0 0 ${n};
  }
`);var n}} 0.8s linear;
`,y=(0,f.default)(C.p)`
  background-color: transparent;
  font-weight: 535;
  text-align: left;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 16px;
  `};
`,x=(0,f.default)(l.mm)`
  width: 100%;
`,h=(0,f.default)(R.PR.DeprecatedSmall)`
  color: ${({theme:e})=>e.neutral2};
  font-size: 12px;
  font-weight: 535;
`,E=(0,f.default)(R.PR.DeprecatedWhite)`
  color: ${({theme:e,disabled:t})=>t?e.neutral2:e.neutral1} !important;
  display: flex;
`,A=({value:e,decrement:t,increment:n,decrementDisabled:i=!1,incrementDisabled:r=!1,width:d,locked:s,onUserInput:c,title:p,tokenA:m,tokenB:f})=>{const[R,C]=(0,a.useState)(!1),[A,U]=(0,a.useState)(""),[N,T]=(0,a.useState)(!1),[O,_]=(0,a.useState)(!1),I=(0,a.useCallback)(()=>{T(!1),C(!1),c(A)},[A,c]),D=(0,a.useCallback)(()=>{T(!1),c(t())},[t,c]),S=(0,a.useCallback)(()=>{T(!1),c(n())},[n,c]);return(0,a.useEffect)(()=>{A===e||N||setTimeout(()=>{U(e),_(!0),setTimeout(function(){_(!1)},1800)},0)},[A,N,e]),(0,g.jsx)(b,{pulsing:O,active:R,onFocus:()=>{T(!0),C(!0)},onBlur:I,width:d,children:(0,g.jsxs)(P,{children:[(0,g.jsxs)(x,{justify:"flex-start",children:[(0,g.jsx)(h,{fontSize:12,textAlign:"center",children:p}),(0,g.jsx)(y,{className:"rate-input-0",value:A,fontSize:"20px",disabled:s,onUserInput:e=>{U(e)}}),(0,g.jsx)(h,{fontSize:12,textAlign:"left",children:(0,g.jsx)(o.x6,{id:"1/LP4K",values:{tokenB:f,tokenA:m}})})]}),(0,g.jsxs)(l.mm,{gap:"8px",children:[!s&&(0,g.jsx)(k,{"data-testid":"increment-price-range",onClick:S,disabled:r,children:(0,g.jsx)(E,{disabled:r,fontSize:"12px",children:(0,g.jsx)(u.A,{size:18})})}),!s&&(0,g.jsx)(k,{"data-testid":"decrement-price-range",onClick:D,disabled:i,children:(0,g.jsx)(E,{disabled:i,fontSize:"12px",children:(0,g.jsx)(v,{size:18})})})]})]})})};var U=n(12763),N=n(11577);function T({priceLower:e,priceUpper:t,onLeftRangeInput:n,onRightRangeInput:i,getDecrementLower:r,getIncrementLower:l,getDecrementUpper:a,getIncrementUpper:u,currencyA:d,currencyB:s,feeAmount:c,ticksAtLimit:p}){var m,v,f,R;const C=null===(m=null!==d&&void 0!==d?d:void 0)||void 0===m?void 0:m.wrapped,P=null===(v=null!==s&&void 0!==s?s:void 0)||void 0===v?void 0:v.wrapped,k=C&&P&&C.sortsBefore(P),b=k?e:null===t||void 0===t?void 0:t.invert(),y=k?t:null===e||void 0===e?void 0:e.invert();return(0,g.jsxs)(U.eF,{gap:"md",children:[(0,g.jsx)(A,{value:p[k?N.zm.LOWER:N.zm.UPPER]?"0":null!==(f=null===b||void 0===b?void 0:b.toSignificant(8))&&void 0!==f?f:"",onUserInput:n,decrement:k?r:u,increment:k?l:a,decrementDisabled:void 0===b||p[k?N.zm.LOWER:N.zm.UPPER],incrementDisabled:void 0===b||p[k?N.zm.LOWER:N.zm.UPPER],feeAmount:c,label:b?`${null===s||void 0===s?void 0:s.symbol}`:"-",title:(0,g.jsx)(o.x6,{id:"uEoBVI"}),tokenA:null===d||void 0===d?void 0:d.symbol,tokenB:null===s||void 0===s?void 0:s.symbol}),(0,g.jsx)(A,{value:p[k?N.zm.UPPER:N.zm.LOWER]?"\u221e":null!==(R=null===y||void 0===y?void 0:y.toSignificant(8))&&void 0!==R?R:"",onUserInput:i,decrement:k?a:l,increment:k?u:r,incrementDisabled:void 0===y||p[k?N.zm.UPPER:N.zm.LOWER],decrementDisabled:void 0===y||p[k?N.zm.UPPER:N.zm.LOWER],feeAmount:c,label:y?`${null===s||void 0===s?void 0:s.symbol}`:"-",tokenA:null===d||void 0===d?void 0:d.symbol,tokenB:null===s||void 0===s?void 0:s.symbol,title:(0,g.jsx)(o.x6,{id:"kAC8rT"})})]})}}}]);
//# sourceMappingURL=81.d28ae567.chunk.js.map