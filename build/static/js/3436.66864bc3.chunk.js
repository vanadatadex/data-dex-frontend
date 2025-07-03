"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[3436],{5294:(e,n,t)=>{t.d(n,{LJ:()=>l,SC:()=>o,ar:()=>c,mO:()=>s,nv:()=>a});var i=t(18223),r=t(92947),d=t(96410);const s=d.default.div`
  position: relative;
  padding: 20px;
`,o=(0,d.default)(r.EY)`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,l=d.default.button`
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
`,a=d.default.span`
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
`,c=(0,d.default)(i.ar)`
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
`},10278:(e,n,t)=>{t.d(n,{A:()=>a});var i=t(54674),r=t(88178),d=t.n(r);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},s.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},d=Object.keys(e);for(i=0;i<d.length;i++)t=d[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(i=0;i<d.length;i++)t=d[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=(0,i.forwardRef)(function(e,n){var t=e.color,r=void 0===t?"currentColor":t,d=e.size,l=void 0===d?24:d,a=o(e,["color","size"]);return i.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))});l.propTypes={color:d().string,size:d().oneOfType([d().string,d().number])},l.displayName="Plus";const a=l},12991:(e,n,t)=>{t.d(n,{A:()=>o,q:()=>s});var i=t(96410),r=t(3405),d=t(33370);const s=i.default.main`
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
  z-index: ${r.M.default};
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
`;function o(e){return(0,d.jsx)(s,{...e})}},38835:(e,n,t)=>{t.r(n),t.d(n,{default:()=>N});var i=t(19984),r=t(54644),d=t(10530),s=t(7951),o=t(67197),l=t.n(o),a=t(54674),c=t(10278),x=t(85713),u=t(92947),p=t(33121),h=t(50645),m=t(21959),g=t(75423),j=t(87014),f=t(53947),v=t(74222),y=t(12763),b=t(462),E=t(65311),O=t(93405),A=t(91128),S=t(23843),k=t(34342),T=t(97805),w=t(12991),$=t(5294),C=t(33370),I=function(e){return e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1",e}(I||{});function N(){var e,n;const t=new URLSearchParams((0,x.zy)().search),{account:o,chainId:N}=(0,r.useWeb3React)(),[Y,z]=(0,a.useState)(!1),[L,R]=(0,a.useState)(I.TOKEN1),[B,W]=(0,a.useState)(()=>N?(0,O.cz)(N):null),[K,_]=(0,a.useState)(null),[q,D]=(0,A.ek)(null!==B&&void 0!==B?B:void 0,null!==K&&void 0!==K?K:void 0),J=(0,k.Ep)();(0,a.useEffect)(()=>{D&&J(D)},[D,J]);const P=q===A.CN.NOT_EXISTS||Boolean(q===A.CN.EXISTS&&D&&l().equal(D.reserve0.quotient,l().BigInt(0))&&l().equal(D.reserve1.quotient,l().BigInt(0))),V=(0,S.nC)(null!==o&&void 0!==o?o:void 0,null===D||void 0===D?void 0:D.liquidityToken),M=Boolean(V&&l().greaterThan(V.quotient,l().BigInt(0))),U=(0,a.useCallback)(e=>{L===I.TOKEN0?W(e):_(e)},[L]),F=(0,a.useCallback)(()=>{z(!1)},[z]),X=(0,C.jsx)(m.R4,{padding:"45px 10px",children:(0,C.jsx)(u.EY,{textAlign:"center",children:o?(0,C.jsx)(i.x6,{id:"pKO91W"}):(0,C.jsx)(i.x6,{id:"4YB3Bt"})})});return(0,s.S)()?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(w.A,{children:[(0,C.jsx)(f.U,{origin:null!==(e=t.get("origin"))&&void 0!==e?e:"/pools/v2"}),(0,C.jsxs)(g.mm,{style:{padding:"1rem"},gap:"md",children:[(0,C.jsx)(m.tZ,{children:(0,C.jsx)(g.mm,{gap:"10px",children:(0,C.jsx)(p.PR.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,C.jsx)(i.x6,{id:"qtO+b3",components:{0:(0,C.jsx)("b",{})}})})})}),(0,C.jsx)(h.KM,{onClick:()=>{z(!0),R(I.TOKEN0)},children:B?(0,C.jsxs)(y.Ay,{children:[(0,C.jsx)(j.A,{currency:B}),(0,C.jsx)(u.EY,{fontWeight:535,fontSize:20,marginLeft:"12px",children:B.symbol})]}):(0,C.jsx)(u.EY,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,C.jsx)(i.x6,{id:"T0Y2+3"})})}),(0,C.jsx)(g.YA,{children:(0,C.jsx)(c.A,{size:"16",color:"#888D9B"})}),(0,C.jsx)(h.KM,{onClick:()=>{z(!0),R(I.TOKEN1)},children:K?(0,C.jsxs)(y.Ay,{children:[(0,C.jsx)(j.A,{currency:K}),(0,C.jsx)(u.EY,{fontWeight:535,fontSize:20,marginLeft:"12px",children:K.symbol})]}):(0,C.jsx)(u.EY,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,C.jsx)(i.x6,{id:"T0Y2+3"})})}),M&&(0,C.jsxs)(g.YA,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[(0,C.jsx)(u.EY,{textAlign:"center",fontWeight:535,children:(0,C.jsx)(i.x6,{id:"lYF0uv"})}),(0,C.jsx)(p.Bl,{to:"pools/v2",children:(0,C.jsx)(u.EY,{textAlign:"center",children:(0,C.jsx)(i.x6,{id:"/4YRTg"})})})]}),B&&K?q===A.CN.EXISTS?M&&D?(0,C.jsx)(v.tA,{pair:D,border:"1px solid #CED0D9"}):(0,C.jsx)(m.R4,{padding:"45px 10px",children:(0,C.jsxs)(g.mm,{gap:"sm",justify:"center",children:[(0,C.jsx)(u.EY,{textAlign:"center",children:(0,C.jsx)(i.x6,{id:"Lu0Uod"})}),(0,C.jsx)(p.Bl,{to:`/add/${(0,T.V)(B)}/${(0,T.V)(K)}`,children:(0,C.jsx)(u.EY,{textAlign:"center",children:(0,C.jsx)(i.x6,{id:"xJEVlK"})})})]})}):P?(0,C.jsx)(m.R4,{padding:"45px 10px",children:(0,C.jsxs)(g.mm,{gap:"sm",justify:"center",children:[(0,C.jsx)(u.EY,{textAlign:"center",children:(0,C.jsx)(i.x6,{id:"+8rnEI"})}),(0,C.jsx)(p.Bl,{to:`/add/${(0,T.V)(B)}/${(0,T.V)(K)}`,children:(0,C.jsx)(i.x6,{id:"I1gztT"})})]})}):q===A.CN.INVALID?(0,C.jsx)(m.R4,{padding:"45px 10px",children:(0,C.jsx)(g.mm,{gap:"sm",justify:"center",children:(0,C.jsx)(u.EY,{textAlign:"center",fontWeight:535,children:(0,C.jsx)(i.x6,{id:"ovVGFw"})})})}):q===A.CN.LOADING?(0,C.jsx)(m.R4,{padding:"45px 10px",children:(0,C.jsx)(g.mm,{gap:"sm",justify:"center",children:(0,C.jsxs)(u.EY,{textAlign:"center",children:[(0,C.jsx)(i.x6,{id:"yQE2r9"}),(0,C.jsx)($.nv,{})]})})}):null:X]}),(0,C.jsx)(b.A,{isOpen:Y,onCurrencySelect:U,onDismiss:F,showCommonBases:!0,selectedCurrency:null!==(n=L===I.TOKEN0?K:B)&&void 0!==n?n:void 0})]}),(0,C.jsx)(E.j,{})]}):(0,C.jsx)(d.O,{})}},51150:(e,n,t)=>{t.d(n,{U:()=>d});var i=t(9157),r=t(93405);function d(e){var n;if(e.isNative)return e;const t=(0,i.g4)(e.chainId);return t&&null!==(n=r.Im[t])&&void 0!==n&&n.equals(e)?(0,r.cz)(e.chainId):e}},53947:(e,n,t)=>{t.d(n,{U:()=>E,m:()=>A});var i=t(19984),r=t(54644),d=t(86642),s=t(41019),o=t(4126),l=t(85713),a=t(92947),c=t(26467),x=t(56119),u=t(11577),p=t(96410),h=t(33121),m=t(73141),g=t(12763),j=t(33370);const f=p.default.div`
  ${m.BI};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,v=(0,p.default)(o.N_)`
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
`,b=(0,p.default)(s.A)`
  color: ${({theme:e})=>e.neutral1};
`;function E({origin:e}){return(0,j.jsx)(f,{children:(0,j.jsxs)(g.JA,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,j.jsx)(o.N_,{to:e,children:(0,j.jsx)(b,{})}),(0,j.jsx)(y,{children:(0,j.jsx)(i.x6,{id:"LCFvJr"})})]})})}const O=(0,p.default)(h.PR.SubHeaderLarge)`
  flex: 1;
  margin: auto;
`;function A({adding:e,creating:n,autoSlippage:t,positionID:s,children:o}){const{chainId:h}=(0,r.useWeb3React)(),m=(0,p.useTheme)(),y=(0,c.j)(),E=(0,l.zy)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(s?`/${s.toString()}`:"");return(0,j.jsx)(f,{children:(0,j.jsxs)(g.JA,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,j.jsx)(v,{to:E,onClick:()=>{e&&(y((0,x.JE)()),y((0,u.JE)()))},flex:o?"1":void 0,children:(0,j.jsx)(b,{stroke:m.neutral2})}),(0,j.jsx)(O,{textAlign:o?"start":"center",children:n?(0,j.jsx)(i.x6,{id:"ma87bD"}):e?(0,j.jsx)(i.x6,{id:"E6MqGy"}):(0,j.jsx)(i.x6,{id:"cJtosk"})}),o&&(0,j.jsx)(a.az,{style:{marginRight:".5rem"},children:o}),(0,j.jsx)(d.A,{autoSlippage:t,chainId:h})]})})}}}]);
//# sourceMappingURL=3436.66864bc3.chunk.js.map