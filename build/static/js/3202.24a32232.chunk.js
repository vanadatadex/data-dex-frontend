"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[3202],{3202:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Fe});var i=n(19984),r=n(54644),o=n(12763),a=n(74553),s=n(70623),l=n(85713);var d=n(20308),c=n(54674);const u=e=>{const[t,n]=(0,c.useState)(Date.now());return(0,d.A)((0,c.useCallback)(()=>{n(Date.now())},[]),e),t};var p=n(67531),h=n(55815),x=n.n(h),f=n(96410),m=n(33121),g=n(17516),v=n(84522),j=n(53847),w=n(26047),b=n(24738),y=n(33370);const C=f.default.div`
  color: ${({theme:e})=>e.neutral1};
  font-size: 12px;
  font-weight: 485;
  font-size: 14px;
  line-height: 20px;
`,$=(0,f.default)(w.A)`
  color: ${({theme:e})=>e.deprecated_accentWarning};
`,k=(0,f.default)(m.Gr)`
  color: ${({theme:e})=>e.black};
  text-decoration: underline;
`,z=f.default.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;
`,A=f.default.div`
  color: ${({theme:e})=>e.neutral1};
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin: 0px 12px;
`,E=f.default.div`
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.surface3};
  bottom: 60px;
  display: none;
  max-width: 348px;
  padding: 16px 20px;
  position: fixed;
  right: 16px;
  @media screen and (min-width: ${b.FI.deprecated_upToMedium}px) {
    display: block;
  }
`;function I(){const{chainId:e}=(0,r.useWeb3React)(),t=(0,a.Ew)(e),n=null===t||void 0===t?void 0:t.label;return(0,y.jsxs)(E,{children:[(0,y.jsxs)(z,{children:[(0,y.jsx)($,{}),(0,y.jsx)(A,{children:(0,y.jsx)(i.x6,{id:"3xf/uJ"})})]}),(0,y.jsxs)(C,{children:[e===j.ChainId.MAINNET?(0,y.jsx)(i.x6,{id:"iXzD8t"}):(0,y.jsx)(i.x6,{id:"3Fxw1j",values:{label:n}})," ",void 0!==t.statusPage&&(0,y.jsxs)("span",{children:[(0,y.jsx)(i.x6,{id:"IHlLC8"})," ",(0,y.jsx)(k,{href:t.statusPage||"",children:(0,y.jsx)(i.x6,{id:"jqVo/k"})})]})]})]})}const M=f.default.div`
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
`,O=(0,f.default)(m.PR.DeprecatedSmall)`
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
`,S=f.default.div`
  width: 8px;
  height: 8px;
  min-height: 8px;
  min-width: 8px;
  border-radius: 50%;
  position: relative;
  background-color: ${({theme:e,warning:t})=>t?e.deprecated_yellow3:e.success};
  transition: 250ms ease background-color;
`,_=f.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,N=f.default.div`
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
`,T=x()("10m"),L=x()("10s");function H(){var e,t;const{chainId:n}=(0,r.useWeb3React)(),d=(0,p.Ay)(),[h,x]=(0,c.useState)(!1),[f,j]=(0,c.useState)(!1),w=u(L),b=(0,s.A)(),C=function(){const{pathname:e}=(0,l.zy)();return e.endsWith("/")}(),$=null!==(e=n?null===(t=(0,a.Qr)(n))||void 0===t?void 0:t.blockWaitMsBeforeWarning:T)&&void 0!==e?e:T,k=Boolean(!!b&&w-b.mul(1e3).toNumber()>$);(0,c.useEffect)(()=>{if(!d)return;x(!0);const e=setTimeout(()=>x(!1),1e3);return()=>{clearTimeout(e)}},[d]);const z=(0,c.useMemo)(()=>n&&d?(0,g.a)(n,d.toString(),g.u.BLOCK):"",[d,n]);return C?null:(0,y.jsxs)(o.Bp,{children:[(0,y.jsxs)(M,{onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),children:[(0,y.jsx)(O,{breathe:h,hovering:f,warning:k,children:(0,y.jsx)(m.Gr,{href:z,children:(0,y.jsxs)(v.PD,{text:(0,y.jsx)(i.x6,{id:"MCr7bN"}),children:[d,"\u2002"]})})}),(0,y.jsx)(S,{warning:k,children:h&&(0,y.jsx)(N,{warning:k})})," "]}),k&&(0,y.jsx)(I,{})]})}var P=n(58938),W=n(3405),R=n(36794),B=n(75423),Z=n(4862),F=n(91168);const D=n.p+"static/media/blank_token.1870729478dcddb2cac513635621d4c9.svg";var K;function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},q.apply(null,arguments)}function V({title:e,titleId:t,...n},i){return c.createElement("svg",q({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:i,"aria-labelledby":t},n),e?c.createElement("title",{id:t},e):null,K||(K=c.createElement("path",{d:"M17 3H7C5 3 4 4 4 6V18C4 20 5 21 7 21H17C19 21 20 20 20 18V6C20 4 19 3 17 3ZM8 16.75C7.586 16.75 7.25 16.414 7.25 16C7.25 15.586 7.586 15.25 8 15.25C8.414 15.25 8.75 15.586 8.75 16C8.75 16.414 8.414 16.75 8 16.75ZM8 12.75C7.586 12.75 7.25 12.414 7.25 12C7.25 11.586 7.586 11.25 8 11.25C8.414 11.25 8.75 11.586 8.75 12C8.75 12.414 8.414 12.75 8 12.75ZM8 8.75C7.586 8.75 7.25 8.414 7.25 8C7.25 7.586 7.586 7.25 8 7.25C8.414 7.25 8.75 7.586 8.75 8C8.75 8.414 8.414 8.75 8 8.75ZM16 16.75H11C10.586 16.75 10.25 16.414 10.25 16C10.25 15.586 10.586 15.25 11 15.25H16C16.414 15.25 16.75 15.586 16.75 16C16.75 16.414 16.414 16.75 16 16.75ZM16 12.75H11C10.586 12.75 10.25 12.414 10.25 12C10.25 11.586 10.586 11.25 11 11.25H16C16.414 11.25 16.75 11.586 16.75 12C16.75 12.414 16.414 12.75 16 12.75ZM16 8.75H11C10.586 8.75 10.25 8.414 10.25 8C10.25 7.586 10.586 7.25 11 7.25H16C16.414 7.25 16.75 7.586 16.75 8C16.75 8.414 16.414 8.75 16 8.75Z",fill:"currentColor"})))}const Q=c.forwardRef(V);n.p;var U=n(24357),G=n(9836),J=n(52481),X=n(9844),Y=n(88178),ee=n.n(Y);function te(){return te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},te.apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ie=(0,c.forwardRef)(function(e,t){var n=e.color,i=void 0===n?"currentColor":n,r=e.size,o=void 0===r?24:r,a=ne(e,["color","size"]);return c.createElement("svg",te({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),c.createElement("line",{x1:"12",y1:"2",x2:"12",y2:"6"}),c.createElement("line",{x1:"12",y1:"18",x2:"12",y2:"22"}),c.createElement("line",{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"}),c.createElement("line",{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"}),c.createElement("line",{x1:"2",y1:"12",x2:"6",y2:"12"}),c.createElement("line",{x1:"18",y1:"12",x2:"22",y2:"12"}),c.createElement("line",{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"}),c.createElement("line",{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"}))});ie.propTypes={color:ee().string,size:ee().oneOfType([ee().string,ee().number])},ie.displayName="Loader";const re=ie,oe=(0,f.default)(Q)`
  color: ${({theme:e})=>e.neutral2};
`,ae=f.default.div`
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
`,se=f.default.div`
  position: relative;
  top: 0;
  left: 0;
`,le=f.default.img`
  border-radius: 8px;
  height: 40px;
  width: 40px;
`,de=f.default.img`
  height: 14px;
  width: 14px;
`,ce=f.default.img`
  height: 100%;
  width: 100%;
`,ue=f.default.img`
  width: ${({size:e})=>e};
  height: ${({size:e})=>e};
  border-radius: 50%;
`,pe=f.default.div`
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
`;function he({logo1:e,onError1:t,logo2:n,onError2:i,size:r}){return(0,y.jsxs)(ae,{children:[(0,y.jsx)(ue,{size:r,src:null!==e&&void 0!==e?e:D,onError:t}),(0,y.jsx)(ue,{size:r,src:null!==n&&void 0!==n?n:D,onError:i})]})}function xe({chainId:e,currencies:t,backupImages:n,size:i}){var r,o,a,s,l,d;const[c,u]=(0,J.A)(null===t||void 0===t||null===(r=t[0])||void 0===r?void 0:r.wrapped.address,e,null===t||void 0===t||null===(o=t[0])||void 0===o?void 0:o.isNative,null===n||void 0===n?void 0:n[0]),[p,h]=(0,J.A)(null===t||void 0===t||null===(a=t[1])||void 0===a?void 0:a.wrapped.address,e,null===t||void 0===t||null===(s=t[1])||void 0===s?void 0:s.isNative,null===n||void 0===n?void 0:n[1]);return 1===t.length&&c?(0,y.jsx)(ue,{size:i,src:c,onError:u}):t.length>1?(0,y.jsx)(he,{logo1:c,onError1:u,logo2:p,onError2:h,size:i}):(0,y.jsx)(U.h,{size:i,children:null===(l=t[0])||void 0===l||null===(d=l.symbol)||void 0===d?void 0:d.toUpperCase().replace("$","").replace(/\s+/g,"").slice(0,3)})}function fe({accountAddress:e,size:t}){const{avatar:n,loading:i}=(0,X.A)(e,!1);return i?(0,y.jsx)(re,{size:t}):n?(0,y.jsx)(le,{src:n,alt:"avatar"}):(0,y.jsx)(G.F,{size:40,address:e})}function me({chainId:e}){if(e===j.ChainId.MAINNET)return null;const{squareLogoUrl:t,logoUrl:n}=(0,a.Qr)(e),i=null!==t&&void 0!==t?t:n;return(0,y.jsx)(pe,{hasSquareLogo:!!t,children:t?(0,y.jsx)(ce,{src:i,alt:"chainLogo"}):(0,y.jsx)(de,{src:i,alt:"chainLogo"})})}function ge(e){return(0,y.jsxs)(se,{children:[ve(e),(0,y.jsx)(me,{chainId:e.chainId})]})}function ve({chainId:e,accountAddress:t,currencies:n,images:i,size:r="40px"}){return t?(0,y.jsx)(fe,{accountAddress:t,size:r}):n&&n.length?(0,y.jsx)(xe,{chainId:e,currencies:n,backupImages:i,size:r}):1===(null===i||void 0===i?void 0:i.length)?(0,y.jsx)(ue,{size:r,src:null!==(o=i[0])&&void 0!==o?o:D}):i&&(null===i||void 0===i?void 0:i.length)>=2?(0,y.jsx)(he,{logo1:i[0],logo2:i[i.length-1],size:r}):(0,y.jsx)(oe,{width:r,height:r});var o}const je=(0,f.default)(o.Ay)`
  gap: 12px;
  height: 68px;
  padding: 0 16px;

  transition: ${({theme:e})=>`${e.transition.duration.medium} ${e.transition.timing.ease} background-color`};

  ${({onClick:e})=>e&&"cursor: pointer"};

  &:hover {
    cursor: pointer;
  }
`,we=(0,f.default)(B.Ay)`
  align-items: flex-end;
`;function be({"data-testid":e,left:t,title:n,descriptor:i,right:r,onClick:o}){return(0,y.jsxs)(je,{"data-testid":e,onClick:o,children:[t,(0,y.jsxs)(B.mm,{grow:!0,children:[n,i]}),r&&(0,y.jsx)(we,{children:r})]})}var ye=n(4362);var Ce=n(17567),$e=n(98438),ke=n(99756),ze=n(47519),Ae=n(18655),Ee=n(85177);const Ie=(0,f.default)(ke.A)`
  position: absolute;
  right: ${({$padding:e})=>`${e}px`};
  top: ${({$padding:e})=>`${e}px`};
  color: ${({theme:e})=>e.neutral2};

  :hover {
    cursor: pointer;
  }
`,Me=f.default.div`
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
`,Oe=(0,f.default)(o.eF)`
  flex-wrap: nowrap;
`,Se=(0,f.default)(B.mm)`
  margin: 0 12px;
`,_e=(0,f.default)(function({size:e="16px",...t}){const n=(0,f.useTheme)();return(0,y.jsx)(ye.M,{viewBox:"0 0 16 16",fill:n.deprecated_accentWarning,xmlns:"http://www.w3.org/2000/svg",size:e,...t,children:(0,y.jsx)("path",{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"})})})`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
`;function Ne({chainId:e,onClose:t}){const n=(0,a.Qr)(e);return(0,y.jsxs)(Me,{padded:!0,children:[(0,y.jsx)(Ie,{$padding:20,onClick:t}),(0,y.jsxs)(Oe,{gap:"12px",children:[(0,y.jsx)(_e,{}),(0,y.jsxs)(Se,{gap:"sm",children:[(0,y.jsx)(m.PR.SubHeader,{color:"neutral2",children:(0,y.jsx)(i.x6,{id:"HV8AwX"})}),(0,y.jsx)(m.PR.BodySmall,{color:"neutral2",children:(0,y.jsx)(i.x6,{id:"OnoKBb",values:{0:n.label}})})]})]})]})}const Te=(0,f.default)(m.PR.BodySmall)`
  ${m.rg}
`;function Le({activity:e,onClick:t,onClose:n}){const i=e.status===Ae.x8.Confirmed&&!e.cancelled,{ENSName:r}=(0,$e.A)(null===e||void 0===e?void 0:e.otherAccount);return(0,y.jsxs)(Me,{children:[(0,y.jsx)(Ie,{$padding:16,onClick:n}),(0,y.jsx)(be,{left:i?(0,y.jsx)(B.Ay,{children:(0,y.jsx)(ge,{chainId:e.chainId,currencies:e.currencies,images:e.logos,accountAddress:e.otherAccount})}):(0,y.jsx)(_e,{}),title:(0,y.jsx)(m.PR.SubHeader,{children:e.title}),descriptor:(0,y.jsxs)(Te,{color:"neutral2",children:[e.descriptor,null!==r&&void 0!==r?r:e.otherAccount]}),onClick:t})]})}function He({chainId:e,hash:t,onClose:n}){const i=(0,ze.OA)(t),r=(0,Ce.hH)(),{formatNumber:o}=(0,Ee.kc)();if(!i)return null;const a=(0,F.$2)(i,e,r,o);if(!a)return null;return(0,y.jsx)(Le,{activity:a,onClose:n,onClick:()=>window.open((0,g.a)(a.chainId,a.hash,g.u.TRANSACTION),"_blank")})}function Pe({removeAfterMs:e,content:t,popKey:n}){const i=(0,P.uP)(),o=()=>i(n);(0,c.useEffect)(()=>{if(null===e)return;const t=setTimeout(()=>{i(n)},e);return()=>{clearTimeout(t)}},[n,e,i]);const{chainId:a}=(0,r.useWeb3React)();switch(t.type){case Z.nl.Transaction:return a?(0,y.jsx)(He,{hash:t.hash,chainId:a,onClose:o}):null;case Z.nl.FailedSwitchNetwork:return(0,y.jsx)(Ne,{chainId:t.failedSwitchNetwork,onClose:o})}}const We=f.default.div`
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
`,Re=f.default.div`
  height: 99%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`,Be=(0,f.default)(B.mm)`
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
`;function Ze(){const[e]=(0,R.OL)(),t=(0,P.JS)();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Be,{gap:"20px",drawerOpen:e,"data-testid":"popups",children:t.map(e=>(0,y.jsx)(Pe,{content:e.content,popKey:e.key,removeAfterMs:e.removeAfterMs},e.key))}),(null===t||void 0===t?void 0:t.length)>0&&(0,y.jsx)(We,{"data-testid":"popups",children:(0,y.jsx)(Re,{children:t.slice(0).reverse().map(e=>(0,y.jsx)(Pe,{content:e.content,popKey:e.key,removeAfterMs:e.removeAfterMs},e.key))})})]})}function Fe(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Ze,{}),(0,y.jsx)(H,{})]})}}}]);
//# sourceMappingURL=3202.24a32232.chunk.js.map