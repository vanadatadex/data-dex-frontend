"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[8031],{272:(e,t,n)=>{n.d(t,{A:()=>m});var i=n(19984),r=n(85389),o=n(26047),s=n(96410),a=n(84522),l=n(33370);const d=s.default.div`
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
`,u=s.default.div`
  font-weight: 535;
  font-size: 12px;
  line-height: 14px;
  margin-right: 8px;
`,p=s.default.span`
  background-color: ${({theme:e})=>e.success};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`,c=s.default.div`
  align-items: center;
  color: ${({color:e})=>e};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;function m({removed:e,inRange:t}){const n=(0,s.useTheme)();return(0,l.jsx)(d,{children:e?(0,l.jsx)(a.PD,{text:(0,l.jsx)(i.x6,{id:"MZPP7t"}),children:(0,l.jsxs)(c,{color:n.neutral2,children:[(0,l.jsx)(u,{children:(0,l.jsx)(i.x6,{id:"D87pha"})}),(0,l.jsx)(r.A,{width:12,height:12})]})}):t?(0,l.jsx)(a.PD,{text:(0,l.jsx)(i.x6,{id:"aIvv/z"}),children:(0,l.jsxs)(c,{color:n.success,children:[(0,l.jsx)(u,{children:(0,l.jsx)(i.x6,{id:"vOyUlD"})}),(0,l.jsx)(p,{})]})}):(0,l.jsx)(a.PD,{text:(0,l.jsx)(i.x6,{id:"IwiTcw"}),children:(0,l.jsxs)(c,{color:n.deprecated_accentWarning,children:[(0,l.jsx)(u,{children:(0,l.jsx)(i.x6,{id:"i3Z+/Z"})}),(0,l.jsx)(o.A,{width:12,height:12})]})})})}},5294:(e,t,n)=>{n.d(t,{LJ:()=>l,SC:()=>a,ar:()=>u,mO:()=>s,nv:()=>d});var i=n(18223),r=n(92947),o=n(96410);const s=o.default.div`
  position: relative;
  padding: 20px;
`,a=(0,o.default)(r.EY)`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,l=o.default.button`
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
`,d=o.default.span`
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
`,u=(0,o.default)(i.ar)`
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
`},25916:(e,t,n)=>{n.d(t,{C:()=>l,J:()=>d});var i=n(34203),r=n(66295),o=n(54674),s=n(94999);function a(e){const t=(0,s.TA)(),n=(0,o.useMemo)(()=>e?e.map(e=>[i.gH.from(e)]):[],[e]),a=(0,r.YS)(t,"positions",n),l=(0,o.useMemo)(()=>a.some(({loading:e})=>e),[a]),d=(0,o.useMemo)(()=>a.some(({error:e})=>e),[a]),u=(0,o.useMemo)(()=>{if(!l&&!d&&e)return a.map((t,n)=>{const i=e[n],r=t.result;return{tokenId:i,fee:r.fee,feeGrowthInside0LastX128:r.feeGrowthInside0LastX128,feeGrowthInside1LastX128:r.feeGrowthInside1LastX128,liquidity:r.liquidity,nonce:r.nonce,operator:r.operator,tickLower:r.tickLower,tickUpper:r.tickUpper,token0:r.token0,token1:r.token1,tokensOwed0:r.tokensOwed0,tokensOwed1:r.tokensOwed1}})},[l,d,a,e]);return{loading:l,positions:null===u||void 0===u?void 0:u.map((e,t)=>({...e,tokenId:n[t][0]}))}}function l(e){var t;const n=a(e?[e]:void 0);return{loading:n.loading,position:null===(t=n.positions)||void 0===t?void 0:t[0]}}function d(e){var t;const n=(0,s.TA)(),{loading:l,result:d}=(0,r.DD)(n,"balanceOf",[null!==e&&void 0!==e?e:void 0]),u=null===d||void 0===d||null===(t=d[0])||void 0===t?void 0:t.toNumber(),p=(0,o.useMemo)(()=>{if(u&&e){const t=[];for(let n=0;n<u;n++)t.push([e,n]);return t}return[]},[e,u]),c=(0,r.YS)(n,"tokenOfOwnerByIndex",p),m=(0,o.useMemo)(()=>c.some(({loading:e})=>e),[c]),y=(0,o.useMemo)(()=>e?c.map(({result:e})=>e).filter(e=>!!e).map(e=>i.gH.from(e[0])):[],[e,c]),{positions:x,loading:f}=a(y);return{loading:m||l||f,positions:x}}},33083:(e,t,n)=>{n.d(t,{A:()=>l});var i=n(84522),r=n(54674),o=n(96410),s=n(33370);const a=o.default.span`
  margin-left: ${({margin:e})=>e&&"4px"};
  font-size: ${({fontSize:e})=>null!==e&&void 0!==e?e:"inherit"};

  @media screen and (max-width: 600px) {
    font-size: ${({adjustSize:e})=>e&&"12px"};
  }
`,l=({text:e,maxCharacters:t=20,margin:n=!1,adjustSize:o=!1,fontSize:l,textColor:d,link:u,...p})=>{const[c,m]=(0,r.useState)(!1);return e?e.length>t?(0,s.jsx)(i.Ay,{text:e,show:c,children:(0,s.jsx)(a,{onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),margin:n,adjustSize:o,textColor:d,link:u,fontSize:l,...p,children:" "+e.slice(0,t-1)+"..."})}):(0,s.jsx)(a,{margin:n,adjustSize:o,link:u,fontSize:l,textColor:d,...p,children:e}):(0,s.jsx)("span",{})}},38814:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(65755),r=n(54674),o=n(11577);function s(e,t,n){return(0,r.useMemo)(()=>({[o.zm.LOWER]:e&&t?t===(0,i.nearestUsableTick)(i.TickMath.MIN_TICK,i.TICK_SPACINGS[e]):void 0,[o.zm.UPPER]:e&&n?n===(0,i.nearestUsableTick)(i.TickMath.MAX_TICK,i.TICK_SPACINGS[e]):void 0}),[e,t,n])}},51150:(e,t,n)=>{n.d(t,{U:()=>o});var i=n(9157),r=n(93405);function o(e){var t;if(e.isNative)return e;const n=(0,i.g4)(e.chainId);return n&&null!==(t=r.Im[n])&&void 0!==t&&t.equals(e)?(0,r.cz)(e.chainId):e}},57281:(e,t,n)=>{n.d(t,{A:()=>X,s:()=>O});var i=n(19984),r=n(65755),o=n(53847),s=n(272),a=n(20295),l=n(33083),d=n(30850),u=n(12763),p=n(17567),c=n(38814),m=n(94687),y=n(54674),x=n(4126),f=n(11577),h=n(96410),v=n(24738),g=n(33121),w=n(85177),k=n(51150),T=n(93405),b=n(33370);const j=(0,h.default)(x.N_)`
  align-items: center;
  display: flex;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral1};
  padding: 16px;
  text-decoration: none;
  font-weight: 535;

  & > div:not(:first-child) {
    text-align: center;
  }
  :hover {
    background-color: ${({theme:e})=>e.deprecated_hoverDefault};
  }

  @media screen and (min-width: ${v.FI.deprecated_upToSmall}px) {
    /* flex-direction: row; */
  }

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-direction: column;
    row-gap: 8px;
  `};
`,I=h.default.div`
  font-size: 14px;
`,S=(0,h.default)(I)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  width: 100%;
`,A=h.default.span`
  font-size: 12px;
  margin: 0 2px;
  color: ${({theme:e})=>e.neutral1};
`,P=(0,h.default)(g.PR.BodySmall)`
  font-size: 14px !important;
  word-break: break-word;
  padding: 0.25rem 0.25rem;
  border-radius: 8px;
`,L=(0,h.default)(g.PR.UtilityBadge)`
  font-size: 16px !important;
  margin-left: 8px !important;
  color: ${({theme:e})=>e.neutral3};
`,M=(0,h.default)(g.PR.BodySmall)`
  color: ${({theme:e})=>e.neutral2};
  display: inline-block;
  line-height: 16px;
  margin-right: 4px !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `};
`,_=h.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-right: 8px;
  }
`;function O(e){if(!e)return{};const t=e.amount0.currency,n=e.amount1.currency;if([T.dM,T.pP,T.pI].some(e=>e.equals(t)))return{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n};return[...Object.values(T.Im),T.BC].some(e=>e&&e.equals(n))||e.token0PriceUpper.lessThan(1)?{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n}:{priceLower:e.token0PriceLower,priceUpper:e.token0PriceUpper,quote:n,base:t}}function X({token0:e,token1:t,tokenId:n,fee:x,liquidity:h,tickLower:v,tickUpper:T}){var I;const{formatTickPrice:X}=(0,w.kc)(),z=(0,p.rd)(e),E=(0,p.rd)(t),N=z?(0,k.U)(z):void 0,q=E?(0,k.U)(E):void 0,[,C]=(0,m.Q)(null!==N&&void 0!==N?N:void 0,null!==q&&void 0!==q?q:void 0,x),U=(0,y.useMemo)(()=>{if(C)return new r.Position({pool:C,liquidity:h.toString(),tickLower:v,tickUpper:T})},[h,C,v,T]),$=(0,c.A)(x,v,T),{priceLower:D,priceUpper:R,quote:G,base:B}=O(U),V=G&&(0,k.U)(G),Y=B&&(0,k.U)(B),W=!!C&&(C.tickCurrent<v||C.tickCurrent>=T),K="/pools/"+n,H=null===h||void 0===h?void 0:h.eq(0);return(0,b.jsxs)(j,{to:K,children:[(0,b.jsxs)(u.JA,{children:[(0,b.jsxs)(_,{children:[(0,b.jsx)(a.A,{currency0:Y,currency1:V,size:18,margin:!0}),(0,b.jsxs)(g.PR.SubHeader,{children:["\xa0",null===V||void 0===V?void 0:V.symbol,"\xa0/\xa0",null===Y||void 0===Y?void 0:Y.symbol]}),(0,b.jsx)(L,{children:(0,b.jsx)(i.x6,{id:"hbO8db",values:{0:new o.Percent(x,1e6).toSignificant()}})})]}),(0,b.jsx)(s.A,{removed:H,inRange:!W})]}),D&&R?(0,b.jsxs)(S,{children:[(0,b.jsxs)(P,{children:[(0,b.jsx)(M,{children:(0,b.jsx)(i.x6,{id:"0uYsLP"})}),(0,b.jsx)(i.x6,{id:"YAzUzD",values:{0:X({price:D,atLimit:$,direction:f.zm.LOWER})},components:{0:(0,b.jsx)("span",{}),1:(0,b.jsx)(l.A,{text:null===V||void 0===V?void 0:V.symbol}),2:(0,b.jsx)(l.A,{text:null!==(I=null===Y||void 0===Y?void 0:Y.symbol)&&void 0!==I?I:""})}})]})," ",(0,b.jsxs)(g.QZ,{children:[(0,b.jsx)(A,{children:"\u2194"})," "]}),(0,b.jsxs)(g.KT,{children:[(0,b.jsx)(A,{children:"\u2194"})," "]}),(0,b.jsxs)(P,{children:[(0,b.jsx)(M,{children:(0,b.jsx)(i.x6,{id:"BniuBY"})}),(0,b.jsx)(i.x6,{id:"YAzUzD",values:{0:X({price:R,atLimit:$,direction:f.zm.UPPER})},components:{0:(0,b.jsx)("span",{}),1:(0,b.jsx)(l.A,{text:null===V||void 0===V?void 0:V.symbol}),2:(0,b.jsx)(l.A,{maxCharacters:10,text:null===Y||void 0===Y?void 0:Y.symbol})}})]})]}):(0,b.jsx)(d.A,{})]})}},94687:(e,t,n)=>{n.d(t,{S:()=>y,Q:()=>x});var i=n(95626);const r=JSON.parse('{"HV":[{"inputs":[],"name":"feeGrowthGlobal0X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeGrowthGlobal1X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidity","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"observations","outputs":[{"internalType":"uint32","name":"blockTimestamp","type":"uint32"},{"internalType":"int56","name":"tickCumulative","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityCumulativeX128","type":"uint160"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"positions","outputs":[{"internalType":"uint128","name":"_liquidity","type":"uint128"},{"internalType":"uint256","name":"feeGrowthInside0LastX128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInside1LastX128","type":"uint256"},{"internalType":"uint128","name":"tokensOwed0","type":"uint128"},{"internalType":"uint128","name":"tokensOwed1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"protocolFees","outputs":[{"internalType":"uint128","name":"token0","type":"uint128"},{"internalType":"uint128","name":"token1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"slot0","outputs":[{"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"uint16","name":"observationIndex","type":"uint16"},{"internalType":"uint16","name":"observationCardinality","type":"uint16"},{"internalType":"uint16","name":"observationCardinalityNext","type":"uint16"},{"internalType":"uint8","name":"feeProtocol","type":"uint8"},{"internalType":"bool","name":"unlocked","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int16","name":"wordPosition","type":"int16"}],"name":"tickBitmap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tick","type":"int24"}],"name":"ticks","outputs":[{"internalType":"uint128","name":"liquidityGross","type":"uint128"},{"internalType":"int128","name":"liquidityNet","type":"int128"},{"internalType":"uint256","name":"feeGrowthOutside0X128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthOutside1X128","type":"uint256"},{"internalType":"int56","name":"tickCumulativeOutside","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityOutsideX128","type":"uint160"},{"internalType":"uint32","name":"secondsOutside","type":"uint32"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"}]}');var o=n(65755),s=n(53847),a=n(54644),l=n(67197),d=n.n(l),u=n(66295),p=n(54674);const c=new i.KA(r.HV);class m{static getPoolAddress(e,t,n,i){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:r}=t,{address:s}=n,a=`${e}:${r}:${s}:${i.toString()}`,l=this.addresses.find(e=>e.key===a);if(l)return l.address;const d={key:a,address:(0,o.computePoolAddress)({factoryAddress:e,tokenA:t,tokenB:n,fee:i})};return this.addresses.unshift(d),d.address}static getPool(e,t,n,i,r,s){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const a=this.pools.find(o=>o.token0===e&&o.token1===t&&o.fee===n&&d().EQ(o.sqrtRatioX96,i)&&d().EQ(o.liquidity,r)&&o.tickCurrent===s);if(a)return a;const l=new o.Pool(e,t,n,i,r,s);return this.pools.unshift(l),l}}m.MAX_ENTRIES=128,m.pools=[],m.addresses=[];let y=function(e){return e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID",e}({});function x(e,t,n){return function(e){const{chainId:t}=(0,a.useWeb3React)(),n=(0,p.useMemo)(()=>t?e.map(([e,t,n])=>{if(e&&t&&n){const i=e.wrapped,r=t.wrapped;if(i.equals(r))return;return i.sortsBefore(r)?[i,r,n]:[r,i,n]}}):new Array(e.length),[t,e]),i=(0,p.useMemo)(()=>{const e=t&&s.V3_CORE_FACTORY_ADDRESSES[t];return e?n.map(t=>t&&m.getPoolAddress(e,...t)):new Array(n.length)},[t,n]),r=(0,u._l)(i,c,"slot0"),o=(0,u._l)(i,c,"liquidity");return(0,p.useMemo)(()=>e.map((e,t)=>{const i=n[t];if(!i)return[y.INVALID,null];const[s,a,l]=i;if(!r[t])return[y.INVALID,null];const{result:d,loading:u,valid:p}=r[t];if(!o[t])return[y.INVALID,null];const{result:c,loading:x,valid:f}=o[t];if(!i||!p||!f)return[y.INVALID,null];if(u||x)return[y.LOADING,null];if(!d||!c)return[y.NOT_EXISTS,null];if(!d.sqrtPriceX96||d.sqrtPriceX96.eq(0))return[y.NOT_EXISTS,null];try{const e=m.getPool(s,a,l,d.sqrtPriceX96,c[0],d.tick);return[y.EXISTS,e]}catch(h){return console.error("Error when constructing the pool",h),[y.NOT_EXISTS,null]}}),[o,e,r,n])}((0,p.useMemo)(()=>[[e,t,n]],[e,t,n]))[0]}}}]);
//# sourceMappingURL=8031.b31a95de.chunk.js.map