"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[7075],{62977:(e,t,n)=>{n.d(t,{S:()=>o});var r=n(43256),i=n(51995);function o(){const{chainId:e}=(0,r.useWeb3React)();return e&&i.vC.includes(e)}},87075:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Pe});var r,i,o,s=n(9776),a=n(50277),d=n(43256),l=n(10599),c=n(27363),p=n(77781),x=n(65868),u=n(81824),h=n(85431),f=n(82501);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(null,arguments)}function g({title:e,titleId:t,...n},s){return x.createElement("svg",m({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":t},n),e?x.createElement("title",{id:t},e):null,r||(r=x.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),i||(i=x.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=x.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const j=x.forwardRef(g);n.p;var v,w=n(76409),y=n(6036),b=n(62636);!function(e){e.LEFT="LEFT",e.RIGHT="RIGHT"}(v||(v={}));const k=(0,h.default)(j)`
  path {
    stroke: ${({theme:e})=>e.neutral1};
  }
`,O=h.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,$=h.default.span`
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

  ${({flyoutAlignment:e="RIGHT"})=>"RIGHT"===e?h.css`
          right: 0rem;
        `:h.css`
          left: 0rem;
        `};
`,E=(0,h.default)(f.Gr)`
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
`,z=(0,h.default)(u.N_)`
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
`,L=(0,h.default)(E)`
  width: max-content;
  text-decoration: none;
`;var T=n(11831),C=n(75771);const P=h.default.div`
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
`,I=h.default.div`
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
`,R=h.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,A=h.default.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.accent1};
  font-size: 14px;
  font-weight: 485;
`;function _({positions:e,setUserHideClosedPositions:t,userHideClosedPositions:n}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(P,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(a.x6,{id:"LcLwJZ"}),e&&" ("+e.length+")"]}),(0,s.jsx)(A,{id:"desktop-hide-closed-positions",onClick:()=>{t(!n)},children:n?(0,s.jsx)(a.x6,{id:"GOctE4"}):(0,s.jsx)(a.x6,{id:"l+HNUa"})})]}),(0,s.jsxs)(I,{children:[(0,s.jsx)(a.x6,{id:"LcLwJZ"}),(0,s.jsx)(R,{children:(0,s.jsx)(A,{onClick:()=>{t(!n)},children:n?(0,s.jsx)(a.x6,{id:"GOctE4"}):(0,s.jsx)(a.x6,{id:"l+HNUa"})})})]}),e.map(e=>(0,s.jsx)(T.A,{...e},e.tokenId.toString()))]})}var W=n(15285),S=n(30165),H=n(51995);function Z(e){if(!e)return!1;return new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(e)}var F=n(71180),G=n(78476),M=n(96503),B=n(3625);const N=new G.KA(M);function U(e){const{chainId:t}=(0,d.useWeb3React)(),n=(0,F.VU)(t),r=(0,x.useMemo)(()=>function(e){return Array.from(new Set(e.reduce((e,t)=>e.concat(t.token0,t.token1),[])))}(e).filter(e=>!n[e]),[e,n]),i=(o=r,s="symbol",(0,B._l)(o,N,s,void 0,B.bo));var o,s;const a=(0,x.useMemo)(()=>{const e={};for(let t=0;t<r.length;t++){const n=i[t].result;if(!n)continue;e[r[t]]=n}return e},[r,i]);return(0,x.useMemo)(()=>e.filter(e=>{let t=0;const r=n[e.token0],i=n[e.token1];if(r&&t++,i&&t++,2===t)return!0;let o=0;return Z(r?.symbol??a[e.token0])&&o++,Z(i?.symbol??a[e.token1])&&o++,1===t&&o<2||0===o}),[a,e,n])}var V=n(62977),J=n(89702),Q=n(86897),Y=n(52964),q=n.n(Y);function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function K(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var X=(0,x.forwardRef)(function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,s=K(e,["color","size"]);return x.createElement("svg",D({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),x.createElement("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),x.createElement("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}))});X.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},X.displayName="Inbox";const ee=X;var te=n(22435);function ne(){return ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ne.apply(this,arguments)}function re(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var ie=(0,x.forwardRef)(function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,s=re(e,["color","size"]);return x.createElement("svg",ne({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),x.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),x.createElement("polyline",{points:"2 17 12 22 22 17"}),x.createElement("polyline",{points:"2 12 12 17 22 12"}))});ie.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},ie.displayName="Layers";const oe=ie;function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},se.apply(this,arguments)}function ae(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var de=(0,x.forwardRef)(function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,o=void 0===i?24:i,s=ae(e,["color","size"]);return x.createElement("svg",se({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),x.createElement("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),x.createElement("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}))});de.propTypes={color:q().string,size:q().oneOfType([q().string,q().number])},de.displayName="BookOpen";const le=de;var ce=n(31818),pe=n(63885),xe=n(48598);const ue=h.default.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  opacity: 0.8;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `};
`;(0,h.default)(f.Gr)`
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
`,(0,h.default)(f.PR.DeprecatedLabel)`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 535 !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    font-size: 16px;
  `};
`,(0,h.default)(p.mm)`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    gap: 8px;
  `};
  justify-content: space-between;
`;function he(){const{chainId:e}=(0,d.useWeb3React)(),{infoLink:t}=(0,xe.Ew)(e);return(0,s.jsx)(ue,{})}var fe=n(83704);const me=(0,h.default)(p.mm)`
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
`,ge=(0,h.default)(W.JA)`
  color: ${({theme:e})=>e.neutral2};
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
  }
`,je=(0,h.default)(W.Bp)`
  & > *:not(:last-child) {
    margin-left: 8px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`,ve=(0,h.default)(({flyoutAlignment:e="RIGHT",ToggleUI:t,menuItems:n,...r})=>{const i=(0,x.useRef)(),o=(0,y.VQ)(b.U6.POOL_OVERVIEW_OPTIONS),a=(0,y.nf)(b.U6.POOL_OVERVIEW_OPTIONS);(0,w.W)(i,o?a:void 0);const d=t||k;return(0,s.jsxs)(O,{ref:i,...r,children:[(0,s.jsx)(d,{onClick:a}),o&&(0,s.jsx)($,{flyoutAlignment:e,children:n.map(({content:e,link:t,external:n},r)=>n?(0,s.jsx)(L,{href:t,children:e},r):(0,s.jsx)(z,{to:t,children:e},r))})]})})`
  margin-left: 0;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }

  a {
    width: 100%;
  }
`,we=h.default.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 535;
`,ye=(0,h.default)(c.EA)`
  border-radius: 12px;
  flex: 1 1 auto;
  padding: 6px 8px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,be=(0,h.default)(f.PR.BodyPrimary)`
  align-items: center;
  display: flex;
`,ke=h.default.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
`,Oe=h.css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`,$e=(0,h.default)(Q.A)`
  ${Oe}
`,Ee=(0,h.default)(ee)`
  ${Oe}
`,ze=(0,h.default)(c.$$)`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  width: fit-content;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }
`,Le=h.default.main`
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;function Te(){return(0,s.jsxs)(fe.ar,{children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})}function Ce(){const e=(0,h.useTheme)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(me,{children:(0,s.jsx)(p.mm,{gap:"lg",justify:"center",children:(0,s.jsxs)(p.mm,{gap:"lg",style:{width:"100%"},children:[(0,s.jsx)(ge,{padding:"0",children:(0,s.jsx)(f.PR.LargeHeader,{children:(0,s.jsx)(a.x6,{id:"lQfOr9"})})}),(0,s.jsx)(Le,{children:(0,s.jsx)(ke,{children:(0,s.jsxs)(f.PR.BodyPrimary,{color:e.neutral3,textAlign:"center",children:[(0,s.jsx)($e,{strokeWidth:1.2}),(0,s.jsx)("div",{"data-testid":"pools-unsupported-err",children:(0,s.jsx)(a.x6,{id:"nFZR3H"})})]})})})]})})}),(0,s.jsx)(S.j,{})]})}function Pe(){const{account:e,chainId:t}=(0,d.useWeb3React)(),n=(0,V.S)(),r=(0,l.QO)(),i=(0,h.useTheme)(),[o,m]=(0,pe.z3)(),{positions:g,loading:j}=(0,J.J)(e),[w,y]=g?.reduce((e,t)=>(e[t.liquidity?.isZero()?1:0].push(t),e),[[],[]])??[[],[]],b=U((0,x.useMemo)(()=>[...w,...o?[]:y],[y,w,o]));if(!(0,H.Gv)(t))return(0,s.jsx)(Ce,{});const k=Boolean(!e),O=[{content:(0,s.jsxs)(we,{children:[(0,s.jsx)(a.x6,{id:"y5rS9U"}),(0,s.jsx)(te.A,{size:16})]}),link:"/migrate/v2",external:!1},{content:(0,s.jsxs)(we,{children:[(0,s.jsx)(a.x6,{id:"F+Ocff"}),(0,s.jsx)(oe,{size:16})]}),link:"/pools/v2",external:!1},{content:(0,s.jsxs)(we,{children:[(0,s.jsx)(a.x6,{id:"rjZpLn"}),(0,s.jsx)(le,{size:16})]}),link:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",external:!0}];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(me,{children:(0,s.jsx)(p.mm,{gap:"lg",justify:"center",children:(0,s.jsxs)(p.mm,{gap:"lg",style:{width:"100%"},children:[(0,s.jsxs)(ge,{padding:"0",children:[(0,s.jsx)(f.PR.LargeHeader,{children:(0,s.jsx)(a.x6,{id:"lQfOr9"})}),(0,s.jsxs)(je,{children:[n&&(0,s.jsx)(ve,{menuItems:O,flyoutAlignment:v.LEFT,ToggleUI:e=>(0,s.jsx)(ye,{...e,children:(0,s.jsxs)(be,{children:[(0,s.jsx)(a.x6,{id:"2FYpfJ"}),(0,s.jsx)(ce.A,{size:15})]})})}),(0,s.jsxs)(ze,{"data-cy":"join-pool-button",id:"join-pool-button",as:u.N_,to:"/add/VANA",children:["+ ",(0,s.jsx)(a.x6,{id:"1k0YWs"})]})]})]}),(0,s.jsx)(Le,{children:j?(0,s.jsx)(Te,{}):b&&y&&b.length>0?(0,s.jsx)(_,{positions:b,setUserHideClosedPositions:m,userHideClosedPositions:o}):(0,s.jsxs)(ke,{children:[(0,s.jsxs)(f.PR.BodyPrimary,{color:i.neutral3,textAlign:"center",children:[(0,s.jsx)(Ee,{strokeWidth:1,style:{marginTop:"2em"}}),(0,s.jsx)("div",{children:(0,s.jsx)(a.x6,{id:"YgSnQ0"})})]}),!k&&y.length>0&&(0,s.jsx)(c.C3,{style:{marginTop:".5rem"},onClick:()=>m(!o),children:(0,s.jsx)(a.x6,{id:"GOctE4"})}),k&&(0,s.jsx)(c.$$,{style:{marginTop:"2em",marginBottom:"2em",padding:"8px 16px"},onClick:r,children:(0,s.jsx)(a.x6,{id:"GdzYJ9"})})]})}),(0,s.jsx)(f.QZ,{children:(0,s.jsx)(he,{})})]})})}),(0,s.jsx)(S.j,{})]})}}}]);
//# sourceMappingURL=7075.b944547e.chunk.js.map