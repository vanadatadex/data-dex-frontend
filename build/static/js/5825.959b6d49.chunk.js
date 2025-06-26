"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[5825],{1512:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(61361),r=n(65868),o=n(31759);function s(e,t,n){return(0,r.useMemo)(()=>({[o.zm.LOWER]:e&&t?t===(0,i.nearestUsableTick)(i.TickMath.MIN_TICK,i.TICK_SPACINGS[e]):void 0,[o.zm.UPPER]:e&&n?n===(0,i.nearestUsableTick)(i.TickMath.MAX_TICK,i.TICK_SPACINGS[e]):void 0}),[e,t,n])}},5058:(e,t,n)=>{n.d(t,{A:()=>m});var i=n(9776),r=n(50277),o=n(83163),s=n(86897),a=n(85431),l=n(45080);const d=a.default.div`
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
`,u=a.default.div`
  font-weight: 535;
  font-size: 12px;
  line-height: 14px;
  margin-right: 8px;
`,p=a.default.span`
  background-color: ${({theme:e})=>e.success};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`,c=a.default.div`
  align-items: center;
  color: ${({color:e})=>e};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;function m({removed:e,inRange:t}){const n=(0,a.useTheme)();return(0,i.jsx)(d,{children:e?(0,i.jsx)(l.PD,{text:(0,i.jsx)(r.x6,{id:"MZPP7t"}),children:(0,i.jsxs)(c,{color:n.neutral2,children:[(0,i.jsx)(u,{children:(0,i.jsx)(r.x6,{id:"D87pha"})}),(0,i.jsx)(o.A,{width:12,height:12})]})}):t?(0,i.jsx)(l.PD,{text:(0,i.jsx)(r.x6,{id:"aIvv/z"}),children:(0,i.jsxs)(c,{color:n.success,children:[(0,i.jsx)(u,{children:(0,i.jsx)(r.x6,{id:"vOyUlD"})}),(0,i.jsx)(p,{})]})}):(0,i.jsx)(l.PD,{text:(0,i.jsx)(r.x6,{id:"IwiTcw"}),children:(0,i.jsxs)(c,{color:n.deprecated_accentWarning,children:[(0,i.jsx)(u,{children:(0,i.jsx)(r.x6,{id:"i3Z+/Z"})}),(0,i.jsx)(s.A,{width:12,height:12})]})})})}},11831:(e,t,n)=>{n.d(t,{A:()=>O,s:()=>L});var i=n(9776),r=n(50277),o=n(61361),s=n(94313),a=n(5058),l=n(67821),d=n(75629),u=n(40092),p=n(15285),c=n(71180),m=n(1512),y=n(96367),f=n(65868),x=n(81824),h=n(31759),g=n(85431),w=n(75771),k=n(82501),v=n(50249),T=n(23572),b=n(34295);const j=(0,g.default)(x.N_)`
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

  @media screen and (min-width: ${w.FI.deprecated_upToSmall}px) {
    /* flex-direction: row; */
  }

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-direction: column;
    row-gap: 8px;
  `};
`,S=g.default.div`
  font-size: 14px;
`,A=(0,g.default)(S)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  width: 100%;
`,I=g.default.span`
  font-size: 12px;
  margin: 0 2px;
  color: ${({theme:e})=>e.neutral1};
`,P=(0,g.default)(k.PR.BodySmall)`
  font-size: 14px !important;
  word-break: break-word;
  padding: 0.25rem 0.25rem;
  border-radius: 8px;
`,M=(0,g.default)(k.PR.UtilityBadge)`
  font-size: 16px !important;
  margin-left: 8px !important;
  color: ${({theme:e})=>e.neutral3};
`,_=(0,g.default)(k.PR.BodySmall)`
  color: ${({theme:e})=>e.neutral2};
  display: inline-block;
  line-height: 16px;
  margin-right: 4px !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `};
`,z=g.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-right: 8px;
  }
`;function L(e){if(!e)return{};const t=e.amount0.currency,n=e.amount1.currency;if([b.dM,b.pP,b.pI].some(e=>e.equals(t)))return{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n};return[...Object.values(b.Im),b.BC].some(e=>e&&e.equals(n))||e.token0PriceUpper.lessThan(1)?{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n}:{priceLower:e.token0PriceLower,priceUpper:e.token0PriceUpper,quote:n,base:t}}function O({token0:e,token1:t,tokenId:n,fee:x,liquidity:g,tickLower:w,tickUpper:b}){const{formatTickPrice:S}=(0,v.kc)(),O=(0,c.rd)(e),q=(0,c.rd)(t),X=O?(0,T.U)(O):void 0,C=q?(0,T.U)(q):void 0,[,E]=(0,y.Q)(X??void 0,C??void 0,x),U=(0,f.useMemo)(()=>{if(E)return new o.Position({pool:E,liquidity:g.toString(),tickLower:w,tickUpper:b})},[g,E,w,b]),$=(0,m.A)(x,w,b),{priceLower:N,priceUpper:R,quote:G,base:D}=L(U),B=G&&(0,T.U)(G),Y=D&&(0,T.U)(D),W=!!E&&(E.tickCurrent<w||E.tickCurrent>=b),K="/pools/"+n,H=g?.eq(0);return(0,i.jsxs)(j,{to:K,children:[(0,i.jsxs)(p.JA,{children:[(0,i.jsxs)(z,{children:[(0,i.jsx)(l.A,{currency0:Y,currency1:B,size:18,margin:!0}),(0,i.jsxs)(k.PR.SubHeader,{children:["\xa0",B?.symbol,"\xa0/\xa0",Y?.symbol]}),(0,i.jsx)(M,{children:(0,i.jsx)(r.x6,{id:"hbO8db",values:{0:new s.Percent(x,1e6).toSignificant()}})})]}),(0,i.jsx)(a.A,{removed:H,inRange:!W})]}),N&&R?(0,i.jsxs)(A,{children:[(0,i.jsxs)(P,{children:[(0,i.jsx)(_,{children:(0,i.jsx)(r.x6,{id:"0uYsLP"})}),(0,i.jsx)(r.x6,{id:"YAzUzD",values:{0:S({price:N,atLimit:$,direction:h.zm.LOWER})},components:{0:(0,i.jsx)("span",{}),1:(0,i.jsx)(d.A,{text:B?.symbol}),2:(0,i.jsx)(d.A,{text:Y?.symbol??""})}})]})," ",(0,i.jsxs)(k.QZ,{children:[(0,i.jsx)(I,{children:"\u2194"})," "]}),(0,i.jsxs)(k.KT,{children:[(0,i.jsx)(I,{children:"\u2194"})," "]}),(0,i.jsxs)(P,{children:[(0,i.jsx)(_,{children:(0,i.jsx)(r.x6,{id:"BniuBY"})}),(0,i.jsx)(r.x6,{id:"YAzUzD",values:{0:S({price:R,atLimit:$,direction:h.zm.UPPER})},components:{0:(0,i.jsx)("span",{}),1:(0,i.jsx)(d.A,{text:B?.symbol}),2:(0,i.jsx)(d.A,{maxCharacters:10,text:Y?.symbol})}})]})]}):(0,i.jsx)(u.A,{})]})}},23572:(e,t,n)=>{n.d(t,{U:()=>o});var i=n(51995),r=n(34295);function o(e){if(e.isNative)return e;const t=(0,i.g4)(e.chainId);return t&&r.Im[t]?.equals(e)?(0,r.cz)(e.chainId):e}},75629:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(9776),r=n(45080),o=n(65868);const s=n(85431).default.span`
  margin-left: ${({margin:e})=>e&&"4px"};
  font-size: ${({fontSize:e})=>e??"inherit"};

  @media screen and (max-width: 600px) {
    font-size: ${({adjustSize:e})=>e&&"12px"};
  }
`,a=({text:e,maxCharacters:t=20,margin:n=!1,adjustSize:a=!1,fontSize:l,textColor:d,link:u,...p})=>{const[c,m]=(0,o.useState)(!1);return e?e.length>t?(0,i.jsx)(r.Ay,{text:e,show:c,children:(0,i.jsx)(s,{onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),margin:n,adjustSize:a,textColor:d,link:u,fontSize:l,...p,children:" "+e.slice(0,t-1)+"..."})}):(0,i.jsx)(s,{margin:n,adjustSize:a,link:u,fontSize:l,textColor:d,...p,children:e}):(0,i.jsx)("span",{})}},83704:(e,t,n)=>{n.d(t,{LJ:()=>l,SC:()=>a,ar:()=>u,mO:()=>s,nv:()=>d});var i=n(7533),r=n(41197),o=n(85431);const s=o.default.div`
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
`},89702:(e,t,n)=>{n.d(t,{C:()=>l,J:()=>d});var i=n(20033),r=n(3625),o=n(65868),s=n(75614);function a(e){const t=(0,s.TA)(),n=(0,o.useMemo)(()=>e?e.map(e=>[i.gH.from(e)]):[],[e]),a=(0,r.YS)(t,"positions",n),l=(0,o.useMemo)(()=>a.some(({loading:e})=>e),[a]),d=(0,o.useMemo)(()=>a.some(({error:e})=>e),[a]),u=(0,o.useMemo)(()=>{if(!l&&!d&&e)return a.map((t,n)=>{const i=e[n],r=t.result;return{tokenId:i,fee:r.fee,feeGrowthInside0LastX128:r.feeGrowthInside0LastX128,feeGrowthInside1LastX128:r.feeGrowthInside1LastX128,liquidity:r.liquidity,nonce:r.nonce,operator:r.operator,tickLower:r.tickLower,tickUpper:r.tickUpper,token0:r.token0,token1:r.token1,tokensOwed0:r.tokensOwed0,tokensOwed1:r.tokensOwed1}})},[l,d,a,e]);return{loading:l,positions:u?.map((e,t)=>({...e,tokenId:n[t][0]}))}}function l(e){const t=a(e?[e]:void 0);return{loading:t.loading,position:t.positions?.[0]}}function d(e){const t=(0,s.TA)(),{loading:n,result:l}=(0,r.DD)(t,"balanceOf",[e??void 0]),d=l?.[0]?.toNumber(),u=(0,o.useMemo)(()=>{if(d&&e){const t=[];for(let n=0;n<d;n++)t.push([e,n]);return t}return[]},[e,d]),p=(0,r.YS)(t,"tokenOfOwnerByIndex",u),c=(0,o.useMemo)(()=>p.some(({loading:e})=>e),[p]),m=(0,o.useMemo)(()=>e?p.map(({result:e})=>e).filter(e=>!!e).map(e=>i.gH.from(e[0])):[],[e,p]),{positions:y,loading:f}=a(m);return{loading:c||n||f,positions:y}}},96367:(e,t,n)=>{n.d(t,{S:()=>f,Q:()=>x});var i=n(78476);const r=JSON.parse('{"HV":[{"inputs":[],"name":"feeGrowthGlobal0X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeGrowthGlobal1X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidity","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"observations","outputs":[{"internalType":"uint32","name":"blockTimestamp","type":"uint32"},{"internalType":"int56","name":"tickCumulative","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityCumulativeX128","type":"uint160"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"positions","outputs":[{"internalType":"uint128","name":"_liquidity","type":"uint128"},{"internalType":"uint256","name":"feeGrowthInside0LastX128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInside1LastX128","type":"uint256"},{"internalType":"uint128","name":"tokensOwed0","type":"uint128"},{"internalType":"uint128","name":"tokensOwed1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"protocolFees","outputs":[{"internalType":"uint128","name":"token0","type":"uint128"},{"internalType":"uint128","name":"token1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"slot0","outputs":[{"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"uint16","name":"observationIndex","type":"uint16"},{"internalType":"uint16","name":"observationCardinality","type":"uint16"},{"internalType":"uint16","name":"observationCardinalityNext","type":"uint16"},{"internalType":"uint8","name":"feeProtocol","type":"uint8"},{"internalType":"bool","name":"unlocked","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int16","name":"wordPosition","type":"int16"}],"name":"tickBitmap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tick","type":"int24"}],"name":"ticks","outputs":[{"internalType":"uint128","name":"liquidityGross","type":"uint128"},{"internalType":"int128","name":"liquidityNet","type":"int128"},{"internalType":"uint256","name":"feeGrowthOutside0X128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthOutside1X128","type":"uint256"},{"internalType":"int56","name":"tickCumulativeOutside","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityOutsideX128","type":"uint160"},{"internalType":"uint32","name":"secondsOutside","type":"uint32"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"}]}');var o=n(61361),s=n(94313),a=n(43256),l=n(53055),d=n.n(l),u=n(3625),p=n(65868);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const m=new i.KA(r.HV);let y=class{static getPoolAddress(e,t,n,i){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:r}=t,{address:s}=n,a=`${e}:${r}:${s}:${i.toString()}`,l=this.addresses.find(e=>e.key===a);if(l)return l.address;const d={key:a,address:(0,o.computePoolAddress)({factoryAddress:e,tokenA:t,tokenB:n,fee:i})};return this.addresses.unshift(d),d.address}static getPool(e,t,n,i,r,s){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const a=this.pools.find(o=>o.token0===e&&o.token1===t&&o.fee===n&&d().EQ(o.sqrtRatioX96,i)&&d().EQ(o.liquidity,r)&&o.tickCurrent===s);if(a)return a;const l=new o.Pool(e,t,n,i,r,s);return this.pools.unshift(l),l}};var f;function x(e,t,n){return function(e){const{chainId:t}=(0,a.useWeb3React)(),n=(0,p.useMemo)(()=>t?e.map(([e,t,n])=>{if(e&&t&&n){const i=e.wrapped,r=t.wrapped;if(i.equals(r))return;return i.sortsBefore(r)?[i,r,n]:[r,i,n]}}):new Array(e.length),[t,e]),i=(0,p.useMemo)(()=>{const e=t&&s.V3_CORE_FACTORY_ADDRESSES[t];return e?n.map(t=>t&&y.getPoolAddress(e,...t)):new Array(n.length)},[t,n]),r=(0,u._l)(i,m,"slot0"),o=(0,u._l)(i,m,"liquidity");return(0,p.useMemo)(()=>e.map((e,t)=>{const i=n[t];if(!i)return[3,null];const[s,a,l]=i;if(!r[t])return[3,null];const{result:d,loading:u,valid:p}=r[t];if(!o[t])return[3,null];const{result:c,loading:m,valid:f}=o[t];if(!i||!p||!f)return[3,null];if(u||m)return[0,null];if(!d||!c)return[1,null];if(!d.sqrtPriceX96||d.sqrtPriceX96.eq(0))return[1,null];try{return[2,y.getPool(s,a,l,d.sqrtPriceX96,c[0],d.tick)]}catch(x){return console.error("Error when constructing the pool",x),[1,null]}}),[o,e,r,n])}((0,p.useMemo)(()=>[[e,t,n]],[e,t,n]))[0]}c(y,"MAX_ENTRIES",128),c(y,"pools",[]),c(y,"addresses",[]),function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(f||(f={}))}}]);
//# sourceMappingURL=5825.959b6d49.chunk.js.map