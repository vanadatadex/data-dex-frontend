"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[1e3],{1556:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(65868),i=t(52964),s=t.n(i);function d(){return d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},d.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=(0,r.forwardRef)(function(e,n){var t=e.color,i=void 0===t?"currentColor":t,s=e.size,a=void 0===s?24:s,l=o(e,["color","size"]);return r.createElement("svg",d({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))});a.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},a.displayName="Plus";const l=a},3405:(e,n,t)=>{t.r(n),t.d(n,{default:()=>T});var r,i=t(9776),s=t(50277),d=t(43256),o=t(53032),a=t(62977),l=t(53055),c=t.n(l),x=t(65868),u=t(1556),p=t(69383),h=t(41197),m=t(82501),g=t(27363),j=t(23257),f=t(77781),v=t(97316),y=t(85985),b=t(34664),E=t(15285),A=t(69574),S=t(30165),k=t(34295),w=t(86206),O=t(58962),$=t(63885),C=t(7511),I=t(47398),Y=t(83704);function T(){const e=new URLSearchParams((0,p.zy)().search),{account:n,chainId:t}=(0,d.useWeb3React)(),[r,l]=(0,x.useState)(!1),[T,z]=(0,x.useState)(1),[N,L]=(0,x.useState)(()=>t?(0,k.cz)(t):null),[R,B]=(0,x.useState)(null),[W,_]=(0,w.ek)(N??void 0,R??void 0),q=(0,$.Ep)();(0,x.useEffect)(()=>{_&&q(_)},[_,q]);const D=W===w.CN.NOT_EXISTS||Boolean(W===w.CN.EXISTS&&_&&c().equal(_.reserve0.quotient,c().BigInt(0))&&c().equal(_.reserve1.quotient,c().BigInt(0))),J=(0,O.nC)(n??void 0,_?.liquidityToken),K=Boolean(J&&c().greaterThan(J.quotient,c().BigInt(0))),P=(0,x.useCallback)(e=>{0===T?L(e):B(e)},[T]),V=(0,x.useCallback)(()=>{l(!1)},[l]),M=(0,i.jsx)(j.R4,{padding:"45px 10px",children:(0,i.jsx)(h.EY,{textAlign:"center",children:n?(0,i.jsx)(s.x6,{id:"pKO91W"}):(0,i.jsx)(s.x6,{id:"4YB3Bt"})})});return(0,a.S)()?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(I.A,{children:[(0,i.jsx)(y.U,{origin:e.get("origin")??"/pools/v2"}),(0,i.jsxs)(f.mm,{style:{padding:"1rem"},gap:"md",children:[(0,i.jsx)(j.tZ,{children:(0,i.jsx)(f.mm,{gap:"10px",children:(0,i.jsx)(m.PR.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,i.jsx)(s.x6,{id:"qtO+b3",components:{0:(0,i.jsx)("b",{})}})})})}),(0,i.jsx)(g.KM,{onClick:()=>{l(!0),z(0)},children:N?(0,i.jsxs)(E.Ay,{children:[(0,i.jsx)(v.A,{currency:N}),(0,i.jsx)(h.EY,{fontWeight:535,fontSize:20,marginLeft:"12px",children:N.symbol})]}):(0,i.jsx)(h.EY,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,i.jsx)(s.x6,{id:"T0Y2+3"})})}),(0,i.jsx)(f.YA,{children:(0,i.jsx)(u.A,{size:"16",color:"#888D9B"})}),(0,i.jsx)(g.KM,{onClick:()=>{l(!0),z(1)},children:R?(0,i.jsxs)(E.Ay,{children:[(0,i.jsx)(v.A,{currency:R}),(0,i.jsx)(h.EY,{fontWeight:535,fontSize:20,marginLeft:"12px",children:R.symbol})]}):(0,i.jsx)(h.EY,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,i.jsx)(s.x6,{id:"T0Y2+3"})})}),K&&(0,i.jsxs)(f.YA,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[(0,i.jsx)(h.EY,{textAlign:"center",fontWeight:535,children:(0,i.jsx)(s.x6,{id:"lYF0uv"})}),(0,i.jsx)(m.Bl,{to:"pools/v2",children:(0,i.jsx)(h.EY,{textAlign:"center",children:(0,i.jsx)(s.x6,{id:"/4YRTg"})})})]}),N&&R?W===w.CN.EXISTS?K&&_?(0,i.jsx)(b.tA,{pair:_,border:"1px solid #CED0D9"}):(0,i.jsx)(j.R4,{padding:"45px 10px",children:(0,i.jsxs)(f.mm,{gap:"sm",justify:"center",children:[(0,i.jsx)(h.EY,{textAlign:"center",children:(0,i.jsx)(s.x6,{id:"Lu0Uod"})}),(0,i.jsx)(m.Bl,{to:`/add/${(0,C.V)(N)}/${(0,C.V)(R)}`,children:(0,i.jsx)(h.EY,{textAlign:"center",children:(0,i.jsx)(s.x6,{id:"xJEVlK"})})})]})}):D?(0,i.jsx)(j.R4,{padding:"45px 10px",children:(0,i.jsxs)(f.mm,{gap:"sm",justify:"center",children:[(0,i.jsx)(h.EY,{textAlign:"center",children:(0,i.jsx)(s.x6,{id:"+8rnEI"})}),(0,i.jsx)(m.Bl,{to:`/add/${(0,C.V)(N)}/${(0,C.V)(R)}`,children:(0,i.jsx)(s.x6,{id:"I1gztT"})})]})}):W===w.CN.INVALID?(0,i.jsx)(j.R4,{padding:"45px 10px",children:(0,i.jsx)(f.mm,{gap:"sm",justify:"center",children:(0,i.jsx)(h.EY,{textAlign:"center",fontWeight:535,children:(0,i.jsx)(s.x6,{id:"ovVGFw"})})})}):W===w.CN.LOADING?(0,i.jsx)(j.R4,{padding:"45px 10px",children:(0,i.jsx)(f.mm,{gap:"sm",justify:"center",children:(0,i.jsxs)(h.EY,{textAlign:"center",children:[(0,i.jsx)(s.x6,{id:"yQE2r9"}),(0,i.jsx)(Y.nv,{})]})})}):null:M]}),(0,i.jsx)(A.A,{isOpen:r,onCurrencySelect:P,onDismiss:V,showCommonBases:!0,selectedCurrency:(0===T?R:N)??void 0})]}),(0,i.jsx)(S.j,{})]}):(0,i.jsx)(o.O,{})}!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(r||(r={}))},23572:(e,n,t)=>{t.d(n,{U:()=>s});var r=t(51995),i=t(34295);function s(e){if(e.isNative)return e;const n=(0,r.g4)(e.chainId);return n&&i.Im[n]?.equals(e)?(0,i.cz)(e.chainId):e}},47398:(e,n,t)=>{t.d(n,{A:()=>o,q:()=>d});var r=t(9776),i=t(85431),s=t(30159);const d=i.default.main`
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
`;function o(e){return(0,r.jsx)(d,{...e})}},83704:(e,n,t)=>{t.d(n,{LJ:()=>a,SC:()=>o,ar:()=>c,mO:()=>d,nv:()=>l});var r=t(7533),i=t(41197),s=t(85431);const d=s.default.div`
  position: relative;
  padding: 20px;
`,o=(0,s.default)(i.EY)`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,a=s.default.button`
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
`,l=s.default.span`
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
`,c=(0,s.default)(r.ar)`
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
`},85985:(e,n,t)=>{t.d(n,{U:()=>E,m:()=>S});var r=t(9776),i=t(50277),s=t(43256),d=t(55408),o=t(26681),a=t(81824),l=t(69383),c=t(41197),x=t(30005),u=t(49061),p=t(31759),h=t(85431),m=t(82501),g=t(64687),j=t(15285);const f=h.default.div`
  ${g.BI};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,v=(0,h.default)(a.N_)`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,y=(0,h.default)(m.PR.SubHeaderLarge)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,b=(0,h.default)(o.A)`
  color: ${({theme:e})=>e.neutral1};
`;function E({origin:e}){return(0,r.jsx)(f,{children:(0,r.jsxs)(j.JA,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,r.jsx)(a.N_,{to:e,children:(0,r.jsx)(b,{})}),(0,r.jsx)(y,{children:(0,r.jsx)(i.x6,{id:"LCFvJr"})})]})})}const A=(0,h.default)(m.PR.SubHeaderLarge)`
  flex: 1;
  margin: auto;
`;function S({adding:e,creating:n,autoSlippage:t,positionID:o,children:a}){const{chainId:m}=(0,s.useWeb3React)(),g=(0,h.useTheme)(),y=(0,x.j)(),E=(0,l.zy)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(o?`/${o.toString()}`:"");return(0,r.jsx)(f,{children:(0,r.jsxs)(j.JA,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,r.jsx)(v,{to:E,onClick:()=>{e&&(y((0,u.JE)()),y((0,p.JE)()))},flex:a?"1":void 0,children:(0,r.jsx)(b,{stroke:g.neutral2})}),(0,r.jsx)(A,{textAlign:a?"start":"center",children:n?(0,r.jsx)(i.x6,{id:"ma87bD"}):e?(0,r.jsx)(i.x6,{id:"E6MqGy"}):(0,r.jsx)(i.x6,{id:"cJtosk"})}),a&&(0,r.jsx)(c.az,{style:{marginRight:".5rem"},children:a}),(0,r.jsx)(d.A,{autoSlippage:t,chainId:m})]})})}}}]);
//# sourceMappingURL=1000.0ac9016d.chunk.js.map