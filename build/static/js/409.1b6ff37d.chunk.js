"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[409],{80409:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Fe});var n=r(9776),i=r(50277),o=r(43256),a=r(15285),s=r(48598),d=r(59881),l=r(69383);var c=r(52234),p=r(65868);const u=e=>{const[t,r]=(0,p.useState)(Date.now());return(0,c.A)((0,p.useCallback)(()=>{r(Date.now())},[]),e),t};var h=r(90857),x=r(96009),f=r.n(x),m=r(85431),g=r(82501),j=r(10710),w=r(45080),b=r(94313),v=r(86897),y=r(75771);const C=m.default.div`
  color: ${({theme:e})=>e.neutral1};
  font-size: 12px;
  font-weight: 485;
  font-size: 14px;
  line-height: 20px;
`,$=(0,m.default)(v.A)`
  color: ${({theme:e})=>e.deprecated_accentWarning};
`,k=(0,m.default)(g.Gr)`
  color: ${({theme:e})=>e.black};
  text-decoration: underline;
`,z=m.default.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;
`,A=m.default.div`
  color: ${({theme:e})=>e.neutral1};
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin: 0px 12px;
`,E=m.default.div`
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.surface3};
  bottom: 60px;
  display: none;
  max-width: 348px;
  padding: 16px 20px;
  position: fixed;
  right: 16px;
  @media screen and (min-width: ${y.FI.deprecated_upToMedium}px) {
    display: block;
  }
`;function I(){const{chainId:e}=(0,o.useWeb3React)(),t=(0,s.Ew)(e),r=t?.label;return(0,n.jsxs)(E,{children:[(0,n.jsxs)(z,{children:[(0,n.jsx)($,{}),(0,n.jsx)(A,{children:(0,n.jsx)(i.x6,{id:"3xf/uJ"})})]}),(0,n.jsxs)(C,{children:[e===b.ChainId.MAINNET?(0,n.jsx)(i.x6,{id:"iXzD8t"}):(0,n.jsx)(i.x6,{id:"3Fxw1j",values:{label:r}})," ",void 0!==t.statusPage&&(0,n.jsxs)("span",{children:[(0,n.jsx)(i.x6,{id:"IHlLC8"})," ",(0,n.jsx)(k,{href:t.statusPage||"",children:(0,n.jsx)(i.x6,{id:"jqVo/k"})})]})]})]})}const M=m.default.div`
  align-items: center;
  bottom: 0;
  color: ${({theme:e})=>e.neutral3};
  display: none;
  padding: 1rem;
  position: fixed;
  right: 0;
  transition: 250ms ease color;

  a {
    color: unset;
  }
  a:hover {
    color: unset;
    text-decoration: none;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    display: flex;
  }
`,O=(0,m.default)(g.PR.DeprecatedSmall)`
  color: ${({theme:e,warning:t})=>t?e.deprecated_yellow3:e.success};
  transition: opacity 0.25s ease;
  opacity: ${({breathe:e,hovering:t})=>t?.7:e?1:.5};
  :hover {
    opacity: 1;
  }

  a {
    color: unset;
  }
  a:hover {
    text-decoration: none;
    color: unset;
  }
`,S=m.default.div`
  width: 8px;
  height: 8px;
  min-height: 8px;
  min-width: 8px;
  border-radius: 50%;
  position: relative;
  background-color: ${({theme:e,warning:t})=>t?e.deprecated_yellow3:e.success};
  transition: 250ms ease background-color;
`,_=m.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,N=m.default.div`
  animation: ${_} 1s cubic-bezier(0.83, 0, 0.17, 1) infinite;
  transform: translateZ(0);

  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: 2px solid ${({theme:e,warning:t})=>t?e.deprecated_yellow3:e.success};
  background: transparent;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: relative;
  transition: 250ms ease border-color;

  left: -3px;
  top: -3px;
`,T=f()("10m"),L=f()("10s");function H(){const{chainId:e}=(0,o.useWeb3React)(),t=(0,h.Ay)(),[r,c]=(0,p.useState)(!1),[x,f]=(0,p.useState)(!1),m=u(L),b=(0,d.A)(),v=function(){const{pathname:e}=(0,l.zy)();return e.endsWith("/")}(),y=(e?(0,s.Qr)(e)?.blockWaitMsBeforeWarning:T)??T,C=Boolean(!!b&&m-b.mul(1e3).toNumber()>y);(0,p.useEffect)(()=>{if(!t)return;c(!0);const e=setTimeout(()=>c(!1),1e3);return()=>{clearTimeout(e)}},[t]);const $=(0,p.useMemo)(()=>e&&t?(0,j.a)(e,t.toString(),j.u.BLOCK):"",[t,e]);return v?null:(0,n.jsxs)(a.Bp,{children:[(0,n.jsxs)(M,{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[(0,n.jsx)(O,{breathe:r,hovering:x,warning:C,children:(0,n.jsx)(g.Gr,{href:$,children:(0,n.jsxs)(w.PD,{text:(0,n.jsx)(i.x6,{id:"MCr7bN"}),children:[t,"\u2002"]})})}),(0,n.jsx)(S,{warning:C,children:r&&(0,n.jsx)(N,{warning:C})})," "]}),C&&(0,n.jsx)(I,{})]})}var P=r(6036),W=r(30159),R=r(10599),B=r(77781),Z=r(62636),F=r(2058);const D=r.p+"static/media/blank_token.1870729478dcddb2cac513635621d4c9.svg";var K;function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},q.apply(null,arguments)}function V({title:e,titleId:t,...r},n){return p.createElement("svg",q({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":t},r),e?p.createElement("title",{id:t},e):null,K||(K=p.createElement("path",{d:"M17 3H7C5 3 4 4 4 6V18C4 20 5 21 7 21H17C19 21 20 20 20 18V6C20 4 19 3 17 3ZM8 16.75C7.586 16.75 7.25 16.414 7.25 16C7.25 15.586 7.586 15.25 8 15.25C8.414 15.25 8.75 15.586 8.75 16C8.75 16.414 8.414 16.75 8 16.75ZM8 12.75C7.586 12.75 7.25 12.414 7.25 12C7.25 11.586 7.586 11.25 8 11.25C8.414 11.25 8.75 11.586 8.75 12C8.75 12.414 8.414 12.75 8 12.75ZM8 8.75C7.586 8.75 7.25 8.414 7.25 8C7.25 7.586 7.586 7.25 8 7.25C8.414 7.25 8.75 7.586 8.75 8C8.75 8.414 8.414 8.75 8 8.75ZM16 16.75H11C10.586 16.75 10.25 16.414 10.25 16C10.25 15.586 10.586 15.25 11 15.25H16C16.414 15.25 16.75 15.586 16.75 16C16.75 16.414 16.414 16.75 16 16.75ZM16 12.75H11C10.586 12.75 10.25 12.414 10.25 12C10.25 11.586 10.586 11.25 11 11.25H16C16.414 11.25 16.75 11.586 16.75 12C16.75 12.414 16.414 12.75 16 12.75ZM16 8.75H11C10.586 8.75 10.25 8.414 10.25 8C10.25 7.586 10.586 7.25 11 7.25H16C16.414 7.25 16.75 7.586 16.75 8C16.75 8.414 16.414 8.75 16 8.75Z",fill:"currentColor"})))}const Q=p.forwardRef(V);r.p;var U=r(90075),G=r(92655),J=r(92947),X=r(81522),Y=r(52964),ee=r.n(Y);function te(){return te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},te.apply(this,arguments)}function re(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var ne=(0,p.forwardRef)(function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,o=void 0===i?24:i,a=re(e,["color","size"]);return p.createElement("svg",te({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),p.createElement("line",{x1:"12",y1:"2",x2:"12",y2:"6"}),p.createElement("line",{x1:"12",y1:"18",x2:"12",y2:"22"}),p.createElement("line",{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"}),p.createElement("line",{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"}),p.createElement("line",{x1:"2",y1:"12",x2:"6",y2:"12"}),p.createElement("line",{x1:"18",y1:"12",x2:"22",y2:"12"}),p.createElement("line",{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"}),p.createElement("line",{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"}))});ne.propTypes={color:ee().string,size:ee().oneOfType([ee().string,ee().number])},ne.displayName="Loader";const ie=ne,oe=(0,m.default)(Q)`
  color: ${({theme:e})=>e.neutral2};
`,ae=m.default.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  position: relative;
  top: 0;
  left: 0;
  img:nth-child(n) {
    width: 19px;
    height: 40px;
    object-fit: cover;
  }
  img:nth-child(1) {
    border-radius: 20px 0 0 20px;
    object-position: 0 0;
  }
  img:nth-child(2) {
    border-radius: 0 20px 20px 0;
    object-position: 100% 0;
  }
`,se=m.default.div`
  position: relative;
  top: 0;
  left: 0;
`,de=m.default.img`
  border-radius: 8px;
  height: 40px;
  width: 40px;
`,le=m.default.img`
  height: 14px;
  width: 14px;
`,ce=m.default.img`
  height: 100%;
  width: 100%;
`,pe=m.default.img`
  width: ${({size:e})=>e};
  height: ${({size:e})=>e};
  border-radius: 50%;
`,ue=m.default.div`
  background-color: ${({theme:e,hasSquareLogo:t})=>t?e.surface2:e.neutral1};
  border-radius: 2px;
  height: 16px;
  left: 60%;
  position: absolute;
  top: 60%;
  outline: 2px solid ${({theme:e})=>e.surface1};
  width: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;function he({logo1:e,onError1:t,logo2:r,onError2:i,size:o}){return(0,n.jsxs)(ae,{children:[(0,n.jsx)(pe,{size:o,src:e??D,onError:t}),(0,n.jsx)(pe,{size:o,src:r??D,onError:i})]})}function xe({chainId:e,currencies:t,backupImages:r,size:i}){const[o,a]=(0,J.A)(t?.[0]?.wrapped.address,e,t?.[0]?.isNative,r?.[0]),[s,d]=(0,J.A)(t?.[1]?.wrapped.address,e,t?.[1]?.isNative,r?.[1]);return 1===t.length&&o?(0,n.jsx)(pe,{size:i,src:o,onError:a}):t.length>1?(0,n.jsx)(he,{logo1:o,onError1:a,logo2:s,onError2:d,size:i}):(0,n.jsx)(U.h,{size:i,children:t[0]?.symbol?.toUpperCase().replace("$","").replace(/\s+/g,"").slice(0,3)})}function fe({accountAddress:e,size:t}){const{avatar:r,loading:i}=(0,X.A)(e,!1);return i?(0,n.jsx)(ie,{size:t}):r?(0,n.jsx)(de,{src:r,alt:"avatar"}):(0,n.jsx)(G.F,{size:40,address:e})}function me({chainId:e}){if(e===b.ChainId.MAINNET)return null;const{squareLogoUrl:t,logoUrl:r}=(0,s.Qr)(e),i=t??r;return(0,n.jsx)(ue,{hasSquareLogo:!!t,children:t?(0,n.jsx)(ce,{src:i,alt:"chainLogo"}):(0,n.jsx)(le,{src:i,alt:"chainLogo"})})}function ge(e){return(0,n.jsxs)(se,{children:[je(e),(0,n.jsx)(me,{chainId:e.chainId})]})}function je({chainId:e,accountAddress:t,currencies:r,images:i,size:o="40px"}){return t?(0,n.jsx)(fe,{accountAddress:t,size:o}):r&&r.length?(0,n.jsx)(xe,{chainId:e,currencies:r,backupImages:i,size:o}):1===i?.length?(0,n.jsx)(pe,{size:o,src:i[0]??D}):i&&i?.length>=2?(0,n.jsx)(he,{logo1:i[0],logo2:i[i.length-1],size:o}):(0,n.jsx)(oe,{width:o,height:o})}const we=(0,m.default)(a.Ay)`
  gap: 12px;
  height: 68px;
  padding: 0 16px;

  transition: ${({theme:e})=>`${e.transition.duration.medium} ${e.transition.timing.ease} background-color`};

  ${({onClick:e})=>e&&"cursor: pointer"};

  &:hover {
    cursor: pointer;
  }
`,be=(0,m.default)(B.Ay)`
  align-items: flex-end;
`;function ve({"data-testid":e,left:t,title:r,descriptor:i,right:o,onClick:a}){return(0,n.jsxs)(we,{"data-testid":e,onClick:a,children:[t,(0,n.jsxs)(B.mm,{grow:!0,children:[r,i]}),o&&(0,n.jsx)(be,{children:o})]})}var ye=r(12272);var Ce=r(71180),$e=r(23096),ke=r(83970),ze=r(58009),Ae=r(55681),Ee=r(50249);const Ie=(0,m.default)(ke.A)`
  position: absolute;
  right: ${({$padding:e})=>`${e}px`};
  top: ${({$padding:e})=>`${e}px`};
  color: ${({theme:e})=>e.neutral2};

  :hover {
    cursor: pointer;
  }
`,Me=m.default.div`
  display: inline-block;
  width: 100%;
  background-color: ${({theme:e})=>e.surface1};
  position: relative;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  transition: ${({theme:e})=>`visibility ${e.transition.duration.fast} ease-in-out`};

  padding: ${({padded:e})=>e?"20px 35px 20px 20px":"2px 0px"};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
  min-width: 290px;
  &:not(:last-of-type) {
    margin-right: 20px;
  }
`}
`,Oe=(0,m.default)(a.eF)`
  flex-wrap: nowrap;
`,Se=(0,m.default)(B.mm)`
  margin: 0 12px;
`,_e=(0,m.default)(function({size:e="16px",...t}){const r=(0,m.useTheme)();return(0,n.jsx)(ye.M,{viewBox:"0 0 16 16",fill:r.deprecated_accentWarning,xmlns:"http://www.w3.org/2000/svg",size:e,...t,children:(0,n.jsx)("path",{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"})})})`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
`;function Ne({chainId:e,onClose:t}){const r=(0,s.Qr)(e);return(0,n.jsxs)(Me,{padded:!0,children:[(0,n.jsx)(Ie,{$padding:20,onClick:t}),(0,n.jsxs)(Oe,{gap:"12px",children:[(0,n.jsx)(_e,{}),(0,n.jsxs)(Se,{gap:"sm",children:[(0,n.jsx)(g.PR.SubHeader,{color:"neutral2",children:(0,n.jsx)(i.x6,{id:"HV8AwX"})}),(0,n.jsx)(g.PR.BodySmall,{color:"neutral2",children:(0,n.jsx)(i.x6,{id:"OnoKBb",values:{0:r.label}})})]})]})]})}const Te=(0,m.default)(g.PR.BodySmall)`
  ${g.rg}
`;function Le({activity:e,onClick:t,onClose:r}){const i=e.status===Ae.x8.Confirmed&&!e.cancelled,{ENSName:o}=(0,$e.A)(e?.otherAccount);return(0,n.jsxs)(Me,{children:[(0,n.jsx)(Ie,{$padding:16,onClick:r}),(0,n.jsx)(ve,{left:i?(0,n.jsx)(B.Ay,{children:(0,n.jsx)(ge,{chainId:e.chainId,currencies:e.currencies,images:e.logos,accountAddress:e.otherAccount})}):(0,n.jsx)(_e,{}),title:(0,n.jsx)(g.PR.SubHeader,{children:e.title}),descriptor:(0,n.jsxs)(Te,{color:"neutral2",children:[e.descriptor,o??e.otherAccount]}),onClick:t})]})}function He({chainId:e,hash:t,onClose:r}){const i=(0,ze.OA)(t),o=(0,Ce.hH)(),{formatNumber:a}=(0,Ee.kc)();if(!i)return null;const s=(0,F.$2)(i,e,o,a);if(!s)return null;return(0,n.jsx)(Le,{activity:s,onClose:r,onClick:()=>window.open((0,j.a)(s.chainId,s.hash,j.u.TRANSACTION),"_blank")})}function Pe({removeAfterMs:e,content:t,popKey:r}){const i=(0,P.uP)(),a=()=>i(r);(0,p.useEffect)(()=>{if(null===e)return;const t=setTimeout(()=>{i(r)},e);return()=>{clearTimeout(t)}},[r,e,i]);const{chainId:s}=(0,o.useWeb3React)();switch(t.type){case Z.nl.Transaction:return s?(0,n.jsx)(He,{hash:t.hash,chainId:s,onClose:a}):null;case Z.nl.FailedSwitchNetwork:return(0,n.jsx)(Ne,{chainId:t.failedSwitchNetwork,onClose:a})}}const We=m.default.div`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  display: none;
  padding-left: 20px;
  padding-right: 20px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: block;
    padding-top: 20px;
  `};
`,Re=m.default.div`
  height: 99%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`,Be=(0,m.default)(B.mm)`
  position: fixed;
  top: ${({drawerOpen:e})=>64+(e?-50:0)+"px"};
  right: 1rem;
  max-width: 348px !important;
  width: 100%;
  z-index: ${W.M.modal};
  transition: ${({theme:e})=>`top ${e.transition.timing.inOut} ${e.transition.duration.slow}`};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `};
`;function Ze(){const[e]=(0,R.OL)(),t=(0,P.JS)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Be,{gap:"20px",drawerOpen:e,"data-testid":"popups",children:t.map(e=>(0,n.jsx)(Pe,{content:e.content,popKey:e.key,removeAfterMs:e.removeAfterMs},e.key))}),t?.length>0&&(0,n.jsx)(We,{"data-testid":"popups",children:(0,n.jsx)(Re,{children:t.slice(0).reverse().map(e=>(0,n.jsx)(Pe,{content:e.content,popKey:e.key,removeAfterMs:e.removeAfterMs},e.key))})})]})}function Fe(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ze,{}),(0,n.jsx)(H,{})]})}}}]);
//# sourceMappingURL=409.1b6ff37d.chunk.js.map