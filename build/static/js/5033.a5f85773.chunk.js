"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[5033],{9299:(e,t,n)=>{n.d(t,{A:()=>u});var i=n(43256),o=n(3625),r=n(65868),a=n(75614);function u(){const{account:e}=(0,i.useWeb3React)(),t=(0,a._Q)(),n=(0,r.useMemo)(()=>[e??void 0],[e]),u=(0,o.DD)(t,"isArgentWallet",n,o.bo);return Boolean(u?.result?.[0])}},28968:(e,t,n)=>{n.d(t,{Uz:()=>E,wt:()=>y,iG:()=>U,UN:()=>x});var i=n(9776),o=n(50277),r=n(61361),a=n(94313),u=n(43256),s=n(96367),c=n(53055),d=n.n(c),l=n(19430),p=n(65868),m=n(81824),R=n(30005);function f(e,t,n){if(e&&t&&"number"===typeof n)return(0,r.tickToPrice)(e,t,n)}var C=n(18109),g=n(58962),k=n(31759),b=n(89493);function P(e,t,n,i){if(!e||!t||!n||!i)return;const o=function(e,t,n){if(!e||!t||!n)return;if(!n.match(/^\d*\.?\d+$/))return;const[i,o]=n.split("."),r=o?.length??0,a=d().BigInt((i??"")+(o??""));return new b.Price(e,t,d().multiply(d().BigInt(10**r),d().BigInt(10**e.decimals)),d().multiply(a,d().BigInt(10**t.decimals)))}(e,t,i);if(!o)return;let a;const u=(0,r.encodeSqrtRatioX96)(o.numerator,o.denominator);return a=d().greaterThanOrEqual(u,r.TickMath.MAX_SQRT_RATIO)?r.TickMath.MAX_TICK:d().lessThanOrEqual(u,r.TickMath.MIN_SQRT_RATIO)?r.TickMath.MIN_TICK:(0,r.priceToClosestTick)(o),(0,r.nearestUsableTick)(a,r.TICK_SPACINGS[n])}function x(){return(0,R.G)(e=>e.mintV3)}function U(e){const t=(0,R.j)(),n=(0,p.useCallback)(n=>{t((0,k.$M)({field:k.D0.CURRENCY_A,typedValue:n,noLiquidity:!0===e}))},[t,e]),i=(0,p.useCallback)(n=>{t((0,k.$M)({field:k.D0.CURRENCY_B,typedValue:n,noLiquidity:!0===e}))},[t,e]),[o,r]=(0,m.ok)();return{onFieldAInput:n,onFieldBInput:i,onLeftRangeInput:(0,p.useCallback)(e=>{t((0,k.jG)({typedValue:e}));const n=o.get("minPrice");(!n||n&&n!==e)&&(o.set("minPrice",e),r(o))},[t,o,r]),onRightRangeInput:(0,p.useCallback)(e=>{t((0,k.Im)({typedValue:e}));const n=o.get("maxPrice");(!n||n&&n!==e)&&(o.set("maxPrice",e),r(o))},[t,o,r]),onStartPriceInput:(0,p.useCallback)(e=>{t((0,k.qQ)({typedValue:e}))},[t])}}function y(e,t,n,c,m){const{account:R}=(0,u.useWeb3React)(),{independentField:b,typedValue:U,leftRangeTypedValue:y,rightRangeTypedValue:E,startPriceTypedValue:_}=x(),h=b===k.D0.CURRENCY_A?k.D0.CURRENCY_B:k.D0.CURRENCY_A,v=(0,p.useMemo)(()=>({[k.D0.CURRENCY_A]:e,[k.D0.CURRENCY_B]:t}),[e,t]),[T,A,S]=(0,p.useMemo)(()=>[e?.wrapped,t?.wrapped,c?.wrapped],[e,t,c]),[I,N]=(0,p.useMemo)(()=>T&&A?T.sortsBefore(A)?[T,A]:[A,T]:[void 0,void 0],[T,A]),D=(0,g.ed)(R??void 0,(0,p.useMemo)(()=>[v[k.D0.CURRENCY_A],v[k.D0.CURRENCY_B]],[v])),O={[k.D0.CURRENCY_A]:D[0],[k.D0.CURRENCY_B]:D[1]},[w,z]=(0,s.Q)(v[k.D0.CURRENCY_A],v[k.D0.CURRENCY_B],n),L=w===s.S.NOT_EXISTS,M=Boolean(S&&I&&!S.equals(I)),B=(0,p.useMemo)(()=>{if(L){const e=(0,l.A)(_,M?I:N);if(e&&I&&N){const t=(0,l.A)("1",M?N:I),n=t&&e?new a.Price(t.currency,e.currency,t.quotient,e.quotient):void 0;return(M?n?.invert():n)??void 0}return}return z&&I?z.priceOf(I):void 0},[L,_,M,N,I,z]),j=(0,p.useMemo)(()=>{const e=B?(0,r.encodeSqrtRatioX96)(B.numerator,B.denominator):void 0;return B&&e&&!(d().greaterThanOrEqual(e,r.TickMath.MIN_SQRT_RATIO)&&d().lessThan(e,r.TickMath.MAX_SQRT_RATIO))},[B]),Y=(0,p.useMemo)(()=>{if(T&&A&&n&&B&&!j){const e=(0,r.priceToClosestTick)(B),t=r.TickMath.getSqrtRatioAtTick(e);return new r.Pool(T,A,n,t,d().BigInt(0),e,[])}},[n,j,B,T,A]),W=z??Y,q=(0,p.useMemo)(()=>({[k.zm.LOWER]:n?(0,r.nearestUsableTick)(r.TickMath.MIN_TICK,r.TICK_SPACINGS[n]):void 0,[k.zm.UPPER]:n?(0,r.nearestUsableTick)(r.TickMath.MAX_TICK,r.TICK_SPACINGS[n]):void 0}),[n]),$=(0,p.useMemo)(()=>({[k.zm.LOWER]:"number"===typeof m?.tickLower?m.tickLower:M&&"boolean"===typeof E||!M&&"boolean"===typeof y?q[k.zm.LOWER]:M?P(N,I,n,E.toString()):P(I,N,n,y.toString()),[k.zm.UPPER]:"number"===typeof m?.tickUpper?m.tickUpper:!M&&"boolean"===typeof E||M&&"boolean"===typeof y?q[k.zm.UPPER]:M?P(N,I,n,y.toString()):P(I,N,n,E.toString())}),[m,n,M,y,E,I,N,q]),{[k.zm.LOWER]:K,[k.zm.UPPER]:V}=$||{},G=(0,p.useMemo)(()=>({[k.zm.LOWER]:n&&K===q.LOWER,[k.zm.UPPER]:n&&V===q.UPPER}),[q,K,V,n]),F=Boolean("number"===typeof K&&"number"===typeof V&&K>=V),Q=(0,p.useMemo)(()=>({[k.zm.LOWER]:f(I,N,q.LOWER),[k.zm.UPPER]:f(I,N,q.UPPER)}),[I,N,q.LOWER,q.UPPER]),X=(0,p.useMemo)(()=>({[k.zm.LOWER]:f(I,N,$[k.zm.LOWER]),[k.zm.UPPER]:f(I,N,$[k.zm.UPPER])}),[I,N,$]),{[k.zm.LOWER]:H,[k.zm.UPPER]:J}=X,Z=Boolean(!F&&B&&H&&J&&(B.lessThan(H)||B.greaterThan(J))),ee=(0,l.A)(U,v[b]),te=(0,p.useMemo)(()=>{const n=ee?.wrapped,i=h===k.D0.CURRENCY_B?t:e;if(ee&&n&&"number"===typeof K&&"number"===typeof V&&W){if(Z||F)return;const e=n.currency.equals(W.token0)?r.Position.fromAmount0({pool:W,tickLower:K,tickUpper:V,amount0:ee.quotient,useFullPrecision:!0}):r.Position.fromAmount1({pool:W,tickLower:K,tickUpper:V,amount1:ee.quotient}),t=n.currency.equals(W.token0)?e.amount1:e.amount0;return i&&a.CurrencyAmount.fromRawAmount(i,t.quotient)}},[ee,Z,h,t,e,K,V,W,F]),ne=(0,p.useMemo)(()=>({[k.D0.CURRENCY_A]:b===k.D0.CURRENCY_A?ee:te,[k.D0.CURRENCY_B]:b===k.D0.CURRENCY_A?te:ee}),[te,ee,b]),ie=Boolean("number"===typeof V&&W&&W.tickCurrent>=V),oe=Boolean("number"===typeof K&&W&&W.tickCurrent<=K),re=F||Boolean(ie&&W&&T&&W.token0.equals(T)||oe&&W&&T&&W.token1.equals(T)),ae=F||Boolean(ie&&W&&A&&W.token0.equals(A)||oe&&W&&A&&W.token1.equals(A)),ue=(0,p.useMemo)(()=>{if(!W||!T||!A||"number"!==typeof K||"number"!==typeof V||F)return;const e=ie?C.CL:ne?.[T.equals(W.token0)?k.D0.CURRENCY_A:k.D0.CURRENCY_B]?.quotient,t=oe?C.CL:ne?.[T.equals(W.token0)?k.D0.CURRENCY_B:k.D0.CURRENCY_A]?.quotient;return void 0!==e&&void 0!==t?r.Position.fromAmounts({pool:W,tickLower:K,tickUpper:V,amount0:e,amount1:t,useFullPrecision:!0}):void 0},[ne,W,T,A,ie,oe,F,K,V]);let se;R||(se=(0,i.jsx)(o.x6,{id:"VHOVEJ"})),w===s.S.INVALID&&(se=se??(0,i.jsx)(o.x6,{id:"R7D79P"})),j&&(se=se??(0,i.jsx)(o.x6,{id:"HXBqgG"})),(ne[k.D0.CURRENCY_A]||re)&&(ne[k.D0.CURRENCY_B]||ae)||(se=se??(0,i.jsx)(o.x6,{id:"iPMIoT"}));const{[k.D0.CURRENCY_A]:ce,[k.D0.CURRENCY_B]:de}=ne;ce&&O?.[k.D0.CURRENCY_A]?.lessThan(ce)&&(se=(0,i.jsx)(o.x6,{id:"m6RmA/",values:{0:v[k.D0.CURRENCY_A]?.symbol}})),de&&O?.[k.D0.CURRENCY_B]?.lessThan(de)&&(se=(0,i.jsx)(o.x6,{id:"m6RmA/",values:{0:v[k.D0.CURRENCY_B]?.symbol}}));const le=w===s.S.INVALID;return{dependentField:h,currencies:v,pool:z,poolState:w,currencyBalances:O,parsedAmounts:ne,ticks:$,price:B,pricesAtTicks:X,pricesAtLimit:Q,position:ue,noLiquidity:L,errorMessage:se,invalidPool:le,invalidRange:F,outOfRange:Z,depositADisabled:re,depositBDisabled:ae,invertPrice:M,ticksAtLimit:G}}function E(e,t,n,i,o,u){const s=(0,R.j)(),c=(0,p.useMemo)(()=>e?.wrapped,[e]),d=(0,p.useMemo)(()=>t?.wrapped,[t]);return{getDecrementLower:(0,p.useCallback)(()=>{if(c&&d&&"number"===typeof i&&n){return(0,r.tickToPrice)(c,d,i-r.TICK_SPACINGS[n]).toSignificant(5,void 0,a.Rounding.ROUND_UP)}if("number"!==typeof i&&c&&d&&n&&u){return(0,r.tickToPrice)(c,d,u.tickCurrent-r.TICK_SPACINGS[n]).toSignificant(5,void 0,a.Rounding.ROUND_UP)}return""},[c,d,i,n,u]),getIncrementLower:(0,p.useCallback)(()=>{if(c&&d&&"number"===typeof i&&n){return(0,r.tickToPrice)(c,d,i+r.TICK_SPACINGS[n]).toSignificant(5,void 0,a.Rounding.ROUND_UP)}if("number"!==typeof i&&c&&d&&n&&u){return(0,r.tickToPrice)(c,d,u.tickCurrent+r.TICK_SPACINGS[n]).toSignificant(5,void 0,a.Rounding.ROUND_UP)}return""},[c,d,i,n,u]),getDecrementUpper:(0,p.useCallback)(()=>{if(c&&d&&"number"===typeof o&&n){return(0,r.tickToPrice)(c,d,o-r.TICK_SPACINGS[n]).toSignificant(5,void 0,a.Rounding.ROUND_UP)}if("number"!==typeof o&&c&&d&&n&&u){return(0,r.tickToPrice)(c,d,u.tickCurrent-r.TICK_SPACINGS[n]).toSignificant(5,void 0,a.Rounding.ROUND_UP)}return""},[c,d,o,n,u]),getIncrementUpper:(0,p.useCallback)(()=>{if(c&&d&&"number"===typeof o&&n){return(0,r.tickToPrice)(c,d,o+r.TICK_SPACINGS[n]).toSignificant(5,void 0,a.Rounding.ROUND_UP)}if("number"!==typeof o&&c&&d&&n&&u){return(0,r.tickToPrice)(c,d,u.tickCurrent+r.TICK_SPACINGS[n]).toSignificant(5,void 0,a.Rounding.ROUND_UP)}return""},[c,d,o,n,u]),getSetFullRange:(0,p.useCallback)(()=>{s((0,k.jC)())},[s])}}},72811:(e,t,n)=>{n.d(t,{OC:()=>l,VD:()=>u,W3:()=>d,mO:()=>a,sQ:()=>c,xQ:()=>s});var i=n(77781),o=n(17112),r=n(85431);const a=r.default.div`
  position: relative;
  padding: 26px 16px;
`,u=r.default.div`
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
`,s=(0,r.default)(i.mm)`
  opacity: ${({disabled:e})=>e?"0.2":"1"};
  pointer-events: ${({disabled:e})=>e?"none":"initial"};
`,c=(0,r.default)(o.p)`
  background-color: ${({theme:e})=>e.surface1};
  text-align: left;
  font-size: 18px;
  width: 100%;
`,d=r.default.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;

  border-top: 1px solid ${({theme:e})=>e.surface3};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    margin-top: 0;
  `};
`,l=r.default.div`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    display: none;
  `};
`},73824:(e,t,n)=>{n.d(t,{A:()=>A});var i=n(9776),o=n(50277),r=n(27363),a=n(23257),u=n(77781),s=n(65868),c=n(1556),d=n(52964),l=n.n(d);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var R=(0,s.forwardRef)(function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,a=m(e,["color","size"]);return s.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),s.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))});R.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},R.displayName="Minus";const f=R;var C=n(85431),g=n(82501),k=n(17112);const b=C.default.div`
  display: flex;
`,P=(0,C.default)(r.EA)`
  border-radius: 8px;
  padding: 4px;
`,x=(0,C.default)(a.l3)`
  border-color: ${({active:e,theme:t})=>e&&t.deprecated_stateOverlayPressed};
  padding: 12px;
  animation: ${({pulsing:e,theme:t})=>{return e&&(n=t.accent1,C.keyframes`
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
`,U=(0,C.default)(k.p)`
  background-color: transparent;
  font-weight: 535;
  text-align: left;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 16px;
  `};
`,y=(0,C.default)(u.mm)`
  width: 100%;
`,E=(0,C.default)(g.PR.DeprecatedSmall)`
  color: ${({theme:e})=>e.neutral2};
  font-size: 12px;
  font-weight: 535;
`,_=(0,C.default)(g.PR.DeprecatedWhite)`
  color: ${({theme:e,disabled:t})=>t?e.neutral2:e.neutral1} !important;
  display: flex;
`,h=({value:e,decrement:t,increment:n,decrementDisabled:r=!1,incrementDisabled:a=!1,width:d,locked:l,onUserInput:p,title:m,tokenA:R,tokenB:C})=>{const[g,k]=(0,s.useState)(!1),[h,v]=(0,s.useState)(""),[T,A]=(0,s.useState)(!1),[S,I]=(0,s.useState)(!1),N=(0,s.useCallback)(()=>{A(!1),k(!1),p(h)},[h,p]),D=(0,s.useCallback)(()=>{A(!1),p(t())},[t,p]),O=(0,s.useCallback)(()=>{A(!1),p(n())},[n,p]);return(0,s.useEffect)(()=>{h===e||T||setTimeout(()=>{v(e),I(!0),setTimeout(function(){I(!1)},1800)},0)},[h,T,e]),(0,i.jsx)(x,{pulsing:S,active:g,onFocus:()=>{A(!0),k(!0)},onBlur:N,width:d,children:(0,i.jsxs)(b,{children:[(0,i.jsxs)(y,{justify:"flex-start",children:[(0,i.jsx)(E,{fontSize:12,textAlign:"center",children:m}),(0,i.jsx)(U,{className:"rate-input-0",value:h,fontSize:"20px",disabled:l,onUserInput:e=>{v(e)}}),(0,i.jsx)(E,{fontSize:12,textAlign:"left",children:(0,i.jsx)(o.x6,{id:"1/LP4K",values:{tokenB:C,tokenA:R}})})]}),(0,i.jsxs)(u.mm,{gap:"8px",children:[!l&&(0,i.jsx)(P,{"data-testid":"increment-price-range",onClick:O,disabled:a,children:(0,i.jsx)(_,{disabled:a,fontSize:"12px",children:(0,i.jsx)(c.A,{size:18})})}),!l&&(0,i.jsx)(P,{"data-testid":"decrement-price-range",onClick:D,disabled:r,children:(0,i.jsx)(_,{disabled:r,fontSize:"12px",children:(0,i.jsx)(f,{size:18})})})]})]})})};var v=n(15285),T=n(31759);function A({priceLower:e,priceUpper:t,onLeftRangeInput:n,onRightRangeInput:r,getDecrementLower:a,getIncrementLower:u,getDecrementUpper:s,getIncrementUpper:c,currencyA:d,currencyB:l,feeAmount:p,ticksAtLimit:m}){const R=(d??void 0)?.wrapped,f=(l??void 0)?.wrapped,C=R&&f&&R.sortsBefore(f),g=C?e:t?.invert(),k=C?t:e?.invert();return(0,i.jsxs)(v.eF,{gap:"md",children:[(0,i.jsx)(h,{value:m[C?T.zm.LOWER:T.zm.UPPER]?"0":g?.toSignificant(8)??"",onUserInput:n,decrement:C?a:c,increment:C?u:s,decrementDisabled:void 0===g||m[C?T.zm.LOWER:T.zm.UPPER],incrementDisabled:void 0===g||m[C?T.zm.LOWER:T.zm.UPPER],feeAmount:p,label:g?`${l?.symbol}`:"-",title:(0,i.jsx)(o.x6,{id:"uEoBVI"}),tokenA:d?.symbol,tokenB:l?.symbol}),(0,i.jsx)(h,{value:m[C?T.zm.UPPER:T.zm.LOWER]?"\u221e":k?.toSignificant(8)??"",onUserInput:r,decrement:C?s:u,increment:C?c:a,incrementDisabled:void 0===k||m[C?T.zm.UPPER:T.zm.LOWER],decrementDisabled:void 0===k||m[C?T.zm.UPPER:T.zm.LOWER],feeAmount:p,label:k?`${l?.symbol}`:"-",tokenA:d?.symbol,tokenB:l?.symbol,title:(0,i.jsx)(o.x6,{id:"kAC8rT"})})]})}}}]);
//# sourceMappingURL=5033.a5f85773.chunk.js.map