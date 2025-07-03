"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[87],{7951:(e,t,n)=>{n.d(t,{S:()=>o});var r=n(54644),i=n(9157);function o(){const{chainId:e}=(0,r.useWeb3React)();return e&&i.vC.includes(e)}},80087:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Pe});var r,i,o,s=n(19984),d=n(54644),a=n(36794),l=n(50645),c=n(75423),p=n(54674),x=n(4126),u=n(96410),h=n(33121);function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(null,arguments)}function m({title:e,titleId:t,...n},s){return p.createElement("svg",f({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":t},n),e?p.createElement("title",{id:t},e):null,r||(r=p.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),i||(i=p.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=p.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const g=p.forwardRef(m);n.p;var j=n(55955),v=n(58938),w=n(4862),y=n(33370);let b=function(e){return e.LEFT="LEFT",e.RIGHT="RIGHT",e}({});const k=(0,u.default)(g)`
  path {
    stroke: ${({theme:e})=>e.neutral1};
  }
`,O=u.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,$=u.default.span`
  min-width: 196px;
  max-height: 350px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border: 1px solid ${({theme:e})=>e.surface1};
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 3rem;
  z-index: 100;

  ${({flyoutAlignment:e=b.RIGHT})=>e===b.RIGHT?u.css`
          right: 0rem;
        `:u.css`
          left: 0rem;
        `};
`,E=(0,u.default)(h.Gr)`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
`,z=(0,u.default)(x.N_)`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({theme:e})=>e.neutral2};
  width: max-content;
  text-decoration: none;
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`,L=(0,u.default)(E)`
  width: max-content;
  text-decoration: none;
`;var T=n(57281),C=n(24738);const P=u.default.div`
  display: none;
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${C.FI.deprecated_upToSmall}px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > div:last-child {
      text-align: right;
      margin-right: 12px;
    }
  }
`,I=u.default.div`
  font-weight: medium;
  padding: 8px;
  font-weight: 535;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${C.FI.deprecated_upToSmall}px) {
    display: none;
  }

  @media screen and (max-width: ${C.FI.deprecated_upToExtraSmall}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,R=u.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,A=u.default.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.accent1};
  font-size: 14px;
  font-weight: 485;
`;function _({positions:e,setUserHideClosedPositions:t,userHideClosedPositions:n}){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(P,{children:[(0,y.jsxs)("div",{children:[(0,y.jsx)(s.x6,{id:"LcLwJZ"}),e&&" ("+e.length+")"]}),(0,y.jsx)(A,{id:"desktop-hide-closed-positions",onClick:()=>{t(!n)},children:n?(0,y.jsx)(s.x6,{id:"GOctE4"}):(0,y.jsx)(s.x6,{id:"l+HNUa"})})]}),(0,y.jsxs)(I,{children:[(0,y.jsx)(s.x6,{id:"LcLwJZ"}),(0,y.jsx)(R,{children:(0,y.jsx)(A,{onClick:()=>{t(!n)},children:n?(0,y.jsx)(s.x6,{id:"GOctE4"}):(0,y.jsx)(s.x6,{id:"l+HNUa"})})})]}),e.map(e=>(0,y.jsx)(T.A,{...e},e.tokenId.toString()))]})}var W=n(12763),S=n(65311),H=n(9157);function Z(e){if(!e)return!1;return new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(e)}var F=n(17567),G=n(95626),M=n(96503),B=n(66295);const N=new G.KA(M);function U(e){const{chainId:t}=(0,d.useWeb3React)(),n=(0,F.VU)(t),r=(0,p.useMemo)(()=>function(e){return Array.from(new Set(e.reduce((e,t)=>e.concat(t.token0,t.token1),[])))}(e).filter(e=>!n[e]),[e,n]),i=(o=r,s="symbol",(0,B._l)(o,N,s,void 0,B.bo));var o,s;const a=(0,p.useMemo)(()=>{const e={};for(let t=0;t<r.length;t++){const n=i[t].result;if(!n)continue;e[r[t]]=n}return e},[r,i]);return(0,p.useMemo)(()=>e.filter(e=>{var t,r;let i=0;const o=n[e.token0],s=n[e.token1];if(o&&i++,s&&i++,2===i)return!0;let d=0;return Z(null!==(t=null===o||void 0===o?void 0:o.symbol)&&void 0!==t?t:a[e.token0])&&d++,Z(null!==(r=null===s||void 0===s?void 0:s.symbol)&&void 0!==r?r:a[e.token1])&&d++,1===i&&d<2||0===d}),[a,e,n])}var V=n(7951),J=n(25916),Q=n(26047),Y=n(88178),q=n.n(Y);function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function K(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var X=(0,p.forwardRef)(function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,s=K(e,["color","size"]);return p.createElement("svg",D({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),p.createElement("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),p.createElement("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}))});X.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},X.displayName="Inbox";const ee=X;var te=n(69465);function ne(){return ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ne.apply(this,arguments)}function re(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var ie=(0,p.forwardRef)(function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,s=re(e,["color","size"]);return p.createElement("svg",ne({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),p.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),p.createElement("polyline",{points:"2 17 12 22 22 17"}),p.createElement("polyline",{points:"2 12 12 17 22 12"}))});ie.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},ie.displayName="Layers";const oe=ie;function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},se.apply(this,arguments)}function de(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var ae=(0,p.forwardRef)(function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,s=de(e,["color","size"]);return p.createElement("svg",se({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),p.createElement("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),p.createElement("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}))});ae.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},ae.displayName="BookOpen";const le=ae;var ce=n(62912),pe=n(34342),xe=n(74553);const ue=u.default.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  opacity: 0.8;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `};
`;(0,u.default)(h.Gr)`
  padding: 16px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.surface3};

  * {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};

    text-decoration: none;
    * {
      text-decoration: none !important;
    }
  }
`,(0,u.default)(h.PR.DeprecatedLabel)`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 535 !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    font-size: 16px;
  `};
`,(0,u.default)(c.mm)`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    gap: 8px;
  `};
  justify-content: space-between;
`;function he(){const{chainId:e}=(0,d.useWeb3React)(),{infoLink:t}=(0,xe.Ew)(e);return(0,y.jsx)(ue,{})}var fe=n(5294);const me=(0,u.default)(c.mm)`
  padding: 68px 8px 0px;
  max-width: 870px;
  width: 100%;

  @media (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 800px;
    padding-top: 48px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    max-width: 500px;
    padding-top: 20px;
  }
`,ge=(0,u.default)(W.JA)`
  color: ${({theme:e})=>e.neutral2};
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
  }
`,je=(0,u.default)(W.Bp)`
  & > *:not(:last-child) {
    margin-left: 8px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`,ve=(0,u.default)(({flyoutAlignment:e=b.RIGHT,ToggleUI:t,menuItems:n,...r})=>{const i=(0,p.useRef)(),o=(0,v.VQ)(w.U6.POOL_OVERVIEW_OPTIONS),s=(0,v.nf)(w.U6.POOL_OVERVIEW_OPTIONS);(0,j.W)(i,o?s:void 0);const d=t||k;return(0,y.jsxs)(O,{ref:i,...r,children:[(0,y.jsx)(d,{onClick:s}),o&&(0,y.jsx)($,{flyoutAlignment:e,children:n.map(({content:e,link:t,external:n},r)=>n?(0,y.jsx)(L,{href:t,children:e},r):(0,y.jsx)(z,{to:t,children:e},r))})]})})`
  margin-left: 0;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }

  a {
    width: 100%;
  }
`,we=u.default.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 535;
`,ye=(0,u.default)(l.EA)`
  border-radius: 12px;
  flex: 1 1 auto;
  padding: 6px 8px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,be=(0,u.default)(h.PR.BodyPrimary)`
  align-items: center;
  display: flex;
`,ke=u.default.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
`,Oe=u.css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`,$e=(0,u.default)(Q.A)`
  ${Oe}
`,Ee=(0,u.default)(ee)`
  ${Oe}
`,ze=(0,u.default)(l.$$)`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  width: fit-content;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }
`,Le=u.default.main`
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;function Te(){return(0,y.jsxs)(fe.ar,{children:[(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{}),(0,y.jsx)("div",{})]})}function Ce(){const e=(0,u.useTheme)();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(me,{children:(0,y.jsx)(c.mm,{gap:"lg",justify:"center",children:(0,y.jsxs)(c.mm,{gap:"lg",style:{width:"100%"},children:[(0,y.jsx)(ge,{padding:"0",children:(0,y.jsx)(h.PR.LargeHeader,{children:(0,y.jsx)(s.x6,{id:"lQfOr9"})})}),(0,y.jsx)(Le,{children:(0,y.jsx)(ke,{children:(0,y.jsxs)(h.PR.BodyPrimary,{color:e.neutral3,textAlign:"center",children:[(0,y.jsx)($e,{strokeWidth:1.2}),(0,y.jsx)("div",{"data-testid":"pools-unsupported-err",children:(0,y.jsx)(s.x6,{id:"nFZR3H"})})]})})})]})})}),(0,y.jsx)(S.j,{})]})}function Pe(){var e;const{account:t,chainId:n}=(0,d.useWeb3React)(),r=(0,V.S)(),i=(0,a.QO)(),o=(0,u.useTheme)(),[f,m]=(0,pe.z3)(),{positions:g,loading:j}=(0,J.J)(t),[v,w]=null!==(e=null===g||void 0===g?void 0:g.reduce((e,t)=>{var n;return e[null!==(n=t.liquidity)&&void 0!==n&&n.isZero()?1:0].push(t),e},[[],[]]))&&void 0!==e?e:[[],[]],k=U((0,p.useMemo)(()=>[...v,...f?[]:w],[w,v,f]));if(!(0,H.Gv)(n))return(0,y.jsx)(Ce,{});const O=Boolean(!t),$=[{content:(0,y.jsxs)(we,{children:[(0,y.jsx)(s.x6,{id:"y5rS9U"}),(0,y.jsx)(te.A,{size:16})]}),link:"/migrate/v2",external:!1},{content:(0,y.jsxs)(we,{children:[(0,y.jsx)(s.x6,{id:"F+Ocff"}),(0,y.jsx)(oe,{size:16})]}),link:"/pools/v2",external:!1},{content:(0,y.jsxs)(we,{children:[(0,y.jsx)(s.x6,{id:"rjZpLn"}),(0,y.jsx)(le,{size:16})]}),link:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",external:!0}];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(me,{children:(0,y.jsx)(c.mm,{gap:"lg",justify:"center",children:(0,y.jsxs)(c.mm,{gap:"lg",style:{width:"100%"},children:[(0,y.jsxs)(ge,{padding:"0",children:[(0,y.jsx)(h.PR.LargeHeader,{children:(0,y.jsx)(s.x6,{id:"lQfOr9"})}),(0,y.jsxs)(je,{children:[r&&(0,y.jsx)(ve,{menuItems:$,flyoutAlignment:b.LEFT,ToggleUI:e=>(0,y.jsx)(ye,{...e,children:(0,y.jsxs)(be,{children:[(0,y.jsx)(s.x6,{id:"2FYpfJ"}),(0,y.jsx)(ce.A,{size:15})]})})}),(0,y.jsxs)(ze,{"data-cy":"join-pool-button",id:"join-pool-button",as:x.N_,to:"/add/VANA",children:["+ ",(0,y.jsx)(s.x6,{id:"1k0YWs"})]})]})]}),(0,y.jsx)(Le,{children:j?(0,y.jsx)(Te,{}):k&&w&&k.length>0?(0,y.jsx)(_,{positions:k,setUserHideClosedPositions:m,userHideClosedPositions:f}):(0,y.jsxs)(ke,{children:[(0,y.jsxs)(h.PR.BodyPrimary,{color:o.neutral3,textAlign:"center",children:[(0,y.jsx)(Ee,{strokeWidth:1,style:{marginTop:"2em"}}),(0,y.jsx)("div",{children:(0,y.jsx)(s.x6,{id:"YgSnQ0"})})]}),!O&&w.length>0&&(0,y.jsx)(l.C3,{style:{marginTop:".5rem"},onClick:()=>m(!f),children:(0,y.jsx)(s.x6,{id:"GOctE4"})}),O&&(0,y.jsx)(l.$$,{style:{marginTop:"2em",marginBottom:"2em",padding:"8px 16px"},onClick:i,children:(0,y.jsx)(s.x6,{id:"GdzYJ9"})})]})}),(0,y.jsx)(h.QZ,{children:(0,y.jsx)(he,{})})]})})}),(0,y.jsx)(S.j,{})]})}}}]);
//# sourceMappingURL=87.b28f90f1.chunk.js.map