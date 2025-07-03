"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[2831],{5708:(e,i,n)=>{n.d(i,{R:()=>x});var t=n(34203),r=n(53847),d=n(66295),o=n(67531),s=n(54674),l=n(51150),a=n(94999);const c=t.gH.from(2).pow(128).sub(1);function x(e,i,n=!1){var t;const x=(0,a.TA)(!1),u=null===(t=(0,d.DD)(i?x:null,"ownerOf",[i]).result)||void 0===t?void 0:t[0],h=null===i||void 0===i?void 0:i.toHexString(),p=(0,o.Ay)(),[m,v]=(0,s.useState)();return(0,s.useEffect)(()=>{!async function(){if(x&&h&&u)try{const e=await x.callStatic.collect({tokenId:h,recipient:u,amount0Max:c,amount1Max:c},{from:u});v([e.amount0,e.amount1])}catch{}}()},[x,h,u,p]),e&&m?[r.CurrencyAmount.fromRawAmount(n?e.token0:(0,l.U)(e.token0),m[0].toString()),r.CurrencyAmount.fromRawAmount(n?e.token1:(0,l.U)(e.token1),m[1].toString())]:[void 0,void 0]}},42831:(e,i,n)=>{n.r(i),n.d(i,{PositionPageUnsupportedContent:()=>ge,default:()=>fe});var t=n(19984),r=n(34203),d=n(65755),o=n(53847),s=n(54644),l=n(27830),a=n(50645),c=n(21959),x=n(75423),u=n(20295),h=n(18223),p=n(87014),m=n(12763),v=n(66451),j=n(34193),g=n(57235),f=n(9157);const y=[o.ChainId.MAINNET,o.ChainId.OPTIMISM,o.ChainId.POLYGON,o.ChainId.ARBITRUM_ONE,o.ChainId.CELO];var w=n(17567),R=n(94999),b=n(38814),A=n(94687),S=n(33778),D=n(5708),k=n(25916),P=n(66295),M=n(3517),$=n(54674),I=n(4126),C=n(85713),T=n(11577),L=n(47519),B=n(96410),q=n(33121),z=n(97805),F=n(6612),N=n(80672),O=n(85177),E=n(51150),U=n(272),J=n(57281),W=n(63520),H=n(65311);const _="data:application/json;base64,";var G=n(19456),Q=n(38740),V=n(17516),X=n(5294),Y=n(33370);const Z=(0,B.default)(a.$$)`
  width: 228px;
  height: 40px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
`,K=B.default.div`
  padding: 68px 16px 16px 16px;

  min-width: 800px;
  max-width: 960px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    min-width: 100%;
    padding: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    min-width: 100%;
    padding: 16px;
  }
`,ee=B.default.div`
  font-weight: 535;
  font-size: 14px;
  color: ${({theme:e})=>e.neutral2};
`,ie=(0,B.default)(({end:e,...i})=>(0,Y.jsx)(q.PR.DeprecatedLabel,{...i}))`
  display: flex;
  font-size: 16px;
  justify-content: ${({end:e})=>e?"flex-end":"flex-start"};
  align-items: center;
`,ne=B.default.span`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  text-align: center;
  margin-right: 4px;
  font-weight: 535;
`,te=(0,B.default)(q.PR.DeprecatedMain)`
  text-decoration: none;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
`,re=B.default.span`
  color: ${({theme:e})=>e.neutral3};
  margin: 0 1rem;
`,de=(0,B.default)(m.JA)`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
    width: 100%;
  }
`,oe=(0,B.default)(de)`
  width: 50%;
  justify-content: flex-end;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    * {
      width: 100%;
    }
  }
`,se=(0,B.default)(a.m$)`
  border-radius: 12px;
  padding: 6px 8px;
  width: fit-content;
  font-size: 16px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: fit-content;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: fit-content;
  }
`,le=B.default.div`
  display: grid;
  grid-template: 'overlap';
  min-height: 400px;
`,ae=B.default.canvas`
  grid-area: overlap;
`,ce=B.default.img`
  grid-area: overlap;
  height: 400px;
  /* Ensures SVG appears on top of canvas. */
  z-index: 1;
`;function xe({inverted:e,pool:i,currencyQuote:n,currencyBase:r}){const{formatPrice:d}=(0,O.kc)();return i&&n&&r?(0,Y.jsx)(c.R4,{padding:"12px",children:(0,Y.jsxs)(x.mm,{gap:"sm",justify:"center",children:[(0,Y.jsx)(ne,{children:(0,Y.jsx)(t.x6,{id:"DWd30U"})}),(0,Y.jsx)(q.PR.DeprecatedMediumHeader,{textAlign:"center",children:d({price:e?i.token1Price:i.token0Price,type:O.wl.TokenTx})}),(0,Y.jsx)(ne,{children:(0,Y.jsx)(t.x6,{id:"7Z4WfS",values:{0:null===n||void 0===n?void 0:n.symbol,1:null===r||void 0===r?void 0:r.symbol}})})]})}):null}const ue=({children:e,chainId:i,address:n})=>{const t=f.kW[i];return(0,Y.jsx)(q.b4,{to:`/tokens/${t}/${n}`,children:e})},he=({children:e,chainId:i,address:n})=>(0,Y.jsx)(q.Gr,{href:(0,V.a)(i,n,V.u.TOKEN),children:e});function pe({chainId:e,currency:i}){const n=null===i||void 0===i?void 0:i.address;if("number"===typeof e&&n){const t=function(e){return!!e&&y.includes(e)}(e)?ue:he;return(0,Y.jsx)(t,{chainId:e,address:n,children:(0,Y.jsxs)(m.Bp,{children:[(0,Y.jsx)(p.A,{currency:i,size:"20px",style:{marginRight:"0.5rem"}}),(0,Y.jsxs)(q.PR.DeprecatedMain,{children:[null===i||void 0===i?void 0:i.symbol," \u2197"]})]})})}return(0,Y.jsxs)(m.Bp,{children:[(0,Y.jsx)(p.A,{currency:i,size:"20px",style:{marginRight:"0.5rem"}}),(0,Y.jsx)(q.PR.DeprecatedMain,{children:null===i||void 0===i?void 0:i.symbol})]})}function me(e,i,n){const t=i.getContext("2d");if(t){let{width:r,height:d}=e;const o=r/d;d=n,r=Math.round(o*n),i.width=r*devicePixelRatio,i.height=d*devicePixelRatio,i.style.width=r+"px",i.style.height=d+"px",t.scale(devicePixelRatio,devicePixelRatio),t.clearRect(0,0,r,d),t.drawImage(e,0,0,r,d)}}function ve({image:e,height:i}){const[n,t]=(0,$.useState)(!1),r=(0,$.useRef)(null),d=(0,$.useRef)(null);return(0,Y.jsxs)(le,{onMouseEnter:()=>{t(!0)},onMouseLeave:()=>{d.current&&r.current&&me(d.current,r.current,i),t(!1)},children:[(0,Y.jsx)(ae,{ref:r}),(0,Y.jsx)(ce,{ref:d,src:e,hidden:!n,onLoad:()=>{d.current&&r.current&&me(d.current,r.current,i)}})]})}const je=({priceLower:e,priceUpper:i,quote:n,base:t,invert:r})=>({priceUpper:r?null===e||void 0===e?void 0:e.invert():i,priceLower:r?null===i||void 0===i?void 0:i.invert():e,quote:r?t:n,base:r?n:t});function ge(){return(0,Y.jsx)(K,{children:(0,Y.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,Y.jsx)(q.PR.HeadlineLarge,{style:{marginBottom:"8px"},children:(0,Y.jsx)(t.x6,{id:"Ij/sE3"})}),(0,Y.jsx)(q.PR.BodyPrimary,{style:{marginBottom:"32px"},children:(0,Y.jsx)(t.x6,{id:"Jbim1e"})}),(0,Y.jsx)(Z,{as:I.N_,to:"/pools",width:"fit-content",children:(0,Y.jsx)(t.x6,{id:"7IwSeQ"})})]})})}function fe(){const{chainId:e}=(0,s.useWeb3React)();return(0,f.Gv)(e)?(0,Y.jsx)(we,{}):(0,Y.jsx)(ge,{})}const ye=(0,B.default)(m.Bp)({flexWrap:"wrap",gap:8});function we(){var e,i,n;const{tokenId:f}=(0,C.g)(),{chainId:y,account:Z,provider:le}=(0,s.useWeb3React)(),ae=(0,B.useTheme)(),{formatTickPrice:ce}=(0,O.kc)(),ue=function(e){if(e)try{return r.gH.from(e)}catch(i){return}}(f),{loading:he,position:me}=(0,k.C)(ue),{token0:fe,token1:we,fee:Re,liquidity:be,tickLower:Ae,tickUpper:Se,tokenId:De}=me||{},ke=null===be||void 0===be?void 0:be.eq(0),Pe=function(e){const i=(0,R.TA)(),n=(0,$.useMemo)(()=>[e instanceof r.gH?e.toHexString():null===e||void 0===e?void 0:e.toString(16)],[e]),{result:t,error:d,loading:o,valid:s}=(0,P.DD)(i,"tokenURI",n,{...P.bo,gasRequired:3e6});return(0,$.useMemo)(()=>{if(d||!s||!e)return{valid:!1,loading:!1};if(o)return{valid:!0,loading:!0};if(!t)return{valid:!1,loading:!1};const[i]=t;if(!i||!i.startsWith(_))return{valid:!1,loading:!1};try{return{valid:!0,loading:!1,result:JSON.parse(atob(i.slice(_.length)))}}catch(d){return{valid:!1,loading:!1}}},[d,o,t,e,s])}(ue),Me=(0,w.rd)(fe),$e=(0,w.rd)(we),Ie=Me?(0,E.U)(Me):void 0,Ce=$e?(0,E.U)($e):void 0,[Te,Le]=(0,$.useState)(!1),Be=(0,M.A)(y).wrapped.symbol,[qe,ze]=(0,A.Q)(null!==Me&&void 0!==Me?Me:void 0,null!==$e&&void 0!==$e?$e:void 0,Re),Fe=(0,$.useMemo)(()=>{if(ze&&be&&"number"===typeof Ae&&"number"===typeof Se)return new d.Position({pool:ze,liquidity:be.toString(),tickLower:Ae,tickUpper:Se})},[be,ze,Ae,Se]),Ne=(0,b.A)(Re,Ae,Se),Oe=(0,J.s)(Fe),[Ee,Ue]=(0,$.useState)(!1),{priceLower:Je,priceUpper:We,base:He}=je({priceLower:Oe.priceLower,priceUpper:Oe.priceUpper,quote:Oe.quote,base:Oe.base,invert:Ee}),_e=$e?null===He||void 0===He?void 0:He.equals($e):void 0,Ge=_e?Ie:Ce,Qe=_e?Ce:Ie,Ve=(0,$.useMemo)(()=>Je&&ze&&We?function(e,i,n){try{if(!i.greaterThan(e))return 100;if(!i.lessThan(n))return 0;const t=Number.parseFloat(e.toSignificant(15)),r=Number.parseFloat(n.toSignificant(15)),d=Number.parseFloat(i.toSignificant(15)),o=Math.floor(1/((Math.sqrt(t*r)-Math.sqrt(r*d))/(d-Math.sqrt(r*d))+1)*100);if(o<0||o>100)throw Error("Out of range");return o}catch{return}}(_e?We.invert():Je,ze.token0Price,_e?Je.invert():We):void 0,[_e,ze,Je,We]),[Xe,Ye]=(0,D.R)(null!==ze&&void 0!==ze?ze:void 0,null===me||void 0===me?void 0:me.tokenId,Te),Ze=ze?Te?ze.token0:(0,E.U)(ze.token0):void 0,Ke=ze?Te?ze.token1:(0,E.U)(ze.token1):void 0,[ei,ii]=(0,$.useState)(!1),[ni,ti]=(0,$.useState)(null),ri=(0,L.tp)(null!==ni&&void 0!==ni?ni:void 0),[di,oi]=(0,$.useState)(!1),si=(0,S.Ay)(null!==Me&&void 0!==Me?Me:void 0),li=(0,S.Ay)(null!==$e&&void 0!==$e?$e:void 0),ai=(0,$.useMemo)(()=>{if(!si||!li||!Xe||!Ye)return null;const e=null===Xe||void 0===Xe?void 0:Xe.wrapped,i=null===Ye||void 0===Ye?void 0:Ye.wrapped;if(!e||!i)return null;const n=si.quote(e),t=li.quote(i);return n.add(t)},[si,li,Xe,Ye]),ci=(0,$.useMemo)(()=>{if(!si||!li||!Fe)return null;const e=si.quote(Fe.amount0),i=li.quote(Fe.amount1);return e.add(i)},[si,li,Fe]),xi=(0,L.OQ)(),ui=(0,R.TA)(),hi=(0,$.useCallback)(async()=>{if(!Ze||!Ke||!y||!ui||!Z||!De||!le)return;ii(!0);const{calldata:e,value:i}=d.NonfungiblePositionManager.collectCallParameters({tokenId:De.toString(),expectedCurrencyOwed0:null!==Xe&&void 0!==Xe?Xe:o.CurrencyAmount.fromRawAmount(Ze,0),expectedCurrencyOwed1:null!==Ye&&void 0!==Ye?Ye:o.CurrencyAmount.fromRawAmount(Ke,0),recipient:Z}),n={to:ui.address,data:e,value:i},t=await le.getSigner().getChainId();if(y!==t)throw new F.$c;le.getSigner().estimateGas(n).then(e=>{const i={...n,gasLimit:(0,Q.K)(e)};return le.getSigner().sendTransaction(i).then(e=>{var i,n;ti(e.hash),ii(!1),xi(e,{type:G.D.COLLECT_FEES,currencyId0:(0,z.V)(Ze),currencyId1:(0,z.V)(Ke),expectedCurrencyOwed0:null!==(i=null===Xe||void 0===Xe?void 0:Xe.quotient.toString())&&void 0!==i?i:o.CurrencyAmount.fromRawAmount(Ze,0).toExact(),expectedCurrencyOwed1:null!==(n=null===Ye||void 0===Ye?void 0:Ye.quotient.toString())&&void 0!==n?n:o.CurrencyAmount.fromRawAmount(Ke,0).toExact()})})}).catch(e=>{ii(!1),console.error(e)})},[y,Xe,Ye,Ze,Ke,ui,Z,De,xi,le]),pi=null===(e=(0,P.DD)(De?ui:null,"ownerOf",[De]).result)||void 0===e?void 0:e[0],mi=pi===Z||(null===me||void 0===me?void 0:me.operator)===Z,vi=_e?Xe:Ye,ji=_e?Ye:Xe,gi=ze&&"number"===typeof Ae?ze.tickCurrent<Ae:void 0,fi=ze&&"number"===typeof Se?ze.tickCurrent>=Se:void 0,yi="boolean"===typeof gi&&"boolean"===typeof fi&&(!gi&&!fi);function wi(){var e,i;return(0,Y.jsxs)(x.mm,{gap:"md",style:{marginTop:"20px"},children:[(0,Y.jsx)(c.R4,{padding:"12px 16px",children:(0,Y.jsxs)(x.mm,{gap:"md",children:[(0,Y.jsxs)(m.JA,{children:[(0,Y.jsxs)(m.Bp,{children:[(0,Y.jsx)(p.A,{currency:null===vi||void 0===vi?void 0:vi.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,Y.jsx)(q.PR.DeprecatedMain,{children:vi?(0,N.N)(vi,4):"-"})]}),(0,Y.jsx)(q.PR.DeprecatedMain,{children:null===vi||void 0===vi||null===(e=vi.currency)||void 0===e?void 0:e.symbol})]}),(0,Y.jsxs)(m.JA,{children:[(0,Y.jsxs)(m.Bp,{children:[(0,Y.jsx)(p.A,{currency:null===ji||void 0===ji?void 0:ji.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,Y.jsx)(q.PR.DeprecatedMain,{children:ji?(0,N.N)(ji,4):"-"})]}),(0,Y.jsx)(q.PR.DeprecatedMain,{children:null===ji||void 0===ji||null===(i=ji.currency)||void 0===i?void 0:i.symbol})]})]})}),(0,Y.jsx)(q.PR.DeprecatedItalic,{children:(0,Y.jsx)(t.x6,{id:"R8aNfS"})}),(0,Y.jsx)(a.$$,{"data-testid":"modal-collect-fees-button",onClick:hi,children:(0,Y.jsx)(t.x6,{id:"vR1m9d"})})]})}const Ri=Boolean(mi&&((null===Xe||void 0===Xe?void 0:Xe.greaterThan(0))||(null===Ye||void 0===Ye?void 0:Ye.greaterThan(0)))&&Ie&&Ce&&(Ie.isNative||Ce.isNative)&&!ni);return me||he?he||qe===A.S.LOADING||!Re?(0,Y.jsxs)(X.ar,{children:[(0,Y.jsx)("div",{}),(0,Y.jsx)("div",{}),(0,Y.jsx)("div",{}),(0,Y.jsx)("div",{}),(0,Y.jsx)("div",{}),(0,Y.jsx)("div",{}),(0,Y.jsx)("div",{}),(0,Y.jsx)("div",{}),(0,Y.jsx)("div",{}),(0,Y.jsx)("div",{}),(0,Y.jsx)("div",{}),(0,Y.jsx)("div",{})]}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(K,{children:[(0,Y.jsx)(g.A,{isOpen:di,onDismiss:()=>oi(!1),attemptingTxn:ei,hash:null!==ni&&void 0!==ni?ni:"",reviewContent:()=>(0,Y.jsx)(g.Y,{title:(0,Y.jsx)(t.x6,{id:"tu/fxg"}),onDismiss:()=>oi(!1),topContent:wi}),pendingText:(0,Y.jsx)(t.x6,{id:"SGG5Oz"})}),(0,Y.jsxs)(x.mm,{gap:"md",children:[(0,Y.jsxs)(x.mm,{gap:"sm",children:[(0,Y.jsx)(I.N_,{"data-cy":"visit-pool",style:{textDecoration:"none",width:"fit-content",marginBottom:"0.5rem"},to:"/pools",children:(0,Y.jsx)(te,{children:(0,Y.jsx)(t.x6,{id:"sYYMH3"})})}),(0,Y.jsxs)(de,{children:[(0,Y.jsxs)(ye,{children:[(0,Y.jsx)(u.A,{currency0:Qe,currency1:Ge,size:24,margin:!0}),(0,Y.jsxs)(q.PR.DeprecatedLabel,{fontSize:"24px",mr:"10px",children:["\xa0",null===Ge||void 0===Ge?void 0:Ge.symbol,"\xa0/\xa0",null===Qe||void 0===Qe?void 0:Qe.symbol]}),(0,Y.jsx)(l.A,{style:{marginRight:"8px"},children:(0,Y.jsx)(ee,{children:(0,Y.jsx)(t.x6,{id:"hbO8db",values:{0:new o.Percent(Re,1e6).toSignificant()}})})}),(0,Y.jsx)(U.A,{removed:ke,inRange:yi})]}),mi&&(0,Y.jsxs)(oe,{children:[Ie&&Ce&&Re&&De?(0,Y.jsx)(a.EA,{as:I.N_,to:`/increase/${(0,z.V)(Ie)}/${(0,z.V)(Ce)}/${Re}/${De}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",style:{marginRight:"8px"},children:(0,Y.jsx)(t.x6,{id:"3pgmAj"})}):null,De&&!ke?(0,Y.jsx)(a.Au,{as:I.N_,to:`/remove/${De}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",children:(0,Y.jsx)(t.x6,{id:"cJtosk"})}):null]})]})]}),(0,Y.jsxs)(de,{align:"flex-start",children:[(0,Y.jsx)(q.QZ,{style:{height:"100%",marginRight:12},children:"result"in Pe?(0,Y.jsxs)(c.RR,{width:"100%",height:"100%",style:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around",minWidth:"340px"},children:[(0,Y.jsx)(ve,{image:Pe.result.image,height:400}),"number"===typeof y&&pi&&!mi?(0,Y.jsx)(q.Gr,{href:(0,V.a)(y,pi,V.u.ADDRESS),children:(0,Y.jsx)(t.x6,{id:"LtI9AS"})}):null]}):(0,Y.jsx)(c.RR,{width:"100%",height:"100%",style:{minWidth:"340px",position:"relative",overflow:"hidden"},children:(0,Y.jsx)(h.qp,{})})}),(0,Y.jsxs)(x.mm,{gap:"sm",style:{width:"100%",height:"100%"},children:[(0,Y.jsx)(c.RR,{children:(0,Y.jsxs)(x.mm,{gap:"md",style:{width:"100%"},children:[(0,Y.jsxs)(x.mm,{gap:"md",children:[(0,Y.jsx)(ie,{children:(0,Y.jsx)(t.x6,{id:"6y2TB3"})}),null!==ci&&void 0!==ci&&ci.greaterThan(new o.Fraction(1,100))?(0,Y.jsx)(q.PR.DeprecatedLargeHeader,{fontSize:"36px",fontWeight:535,children:(0,Y.jsx)(t.x6,{id:"8F8jpm",values:{0:ci.toFixed(2,{groupSeparator:","})}})}):(0,Y.jsx)(q.PR.DeprecatedLargeHeader,{color:ae.neutral1,fontSize:"36px",fontWeight:535,children:(0,Y.jsx)(t.x6,{id:"5qs2w+"})})]}),(0,Y.jsx)(c.R4,{padding:"12px 16px",children:(0,Y.jsxs)(x.mm,{gap:"md",children:[(0,Y.jsxs)(m.JA,{children:[(0,Y.jsx)(pe,{chainId:y,currency:Ge}),(0,Y.jsxs)(m.Bp,{children:[(0,Y.jsx)(q.PR.DeprecatedMain,{children:_e?null===Fe||void 0===Fe?void 0:Fe.amount0.toSignificant(4):null===Fe||void 0===Fe?void 0:Fe.amount1.toSignificant(4)}),"number"!==typeof Ve||ke?null:(0,Y.jsx)(l.A,{style:{marginLeft:"10px"},children:(0,Y.jsx)(ee,{children:(0,Y.jsx)(t.x6,{id:"hbO8db",values:{0:_e?Ve:100-Ve}})})})]})]}),(0,Y.jsxs)(m.JA,{children:[(0,Y.jsx)(pe,{chainId:y,currency:Qe}),(0,Y.jsxs)(m.Bp,{children:[(0,Y.jsx)(q.PR.DeprecatedMain,{children:_e?null===Fe||void 0===Fe?void 0:Fe.amount1.toSignificant(4):null===Fe||void 0===Fe?void 0:Fe.amount0.toSignificant(4)}),"number"!==typeof Ve||ke?null:(0,Y.jsx)(l.A,{style:{marginLeft:"10px"},children:(0,Y.jsx)(ee,{children:(0,Y.jsx)(t.x6,{id:"hbO8db",values:{0:_e?100-Ve:Ve}})})})]})]})]})})]})}),(0,Y.jsx)(c.RR,{children:(0,Y.jsxs)(x.mm,{gap:"md",style:{width:"100%"},children:[(0,Y.jsx)(x.mm,{gap:"md",children:(0,Y.jsxs)(m.JA,{style:{alignItems:"flex-start"},children:[(0,Y.jsxs)(x.mm,{gap:"md",children:[(0,Y.jsx)(ie,{children:(0,Y.jsx)(t.x6,{id:"XCqY8/"})}),null!==ai&&void 0!==ai&&ai.greaterThan(new o.Fraction(1,100))?(0,Y.jsx)(q.PR.DeprecatedLargeHeader,{color:ae.success,fontSize:"36px",fontWeight:535,children:(0,Y.jsx)(t.x6,{id:"8F8jpm",values:{0:ai.toFixed(2,{groupSeparator:","})}})}):(0,Y.jsx)(q.PR.DeprecatedLargeHeader,{color:ae.neutral1,fontSize:"36px",fontWeight:535,children:(0,Y.jsx)(t.x6,{id:"5qs2w+"})})]}),mi&&(null!==Xe&&void 0!==Xe&&Xe.greaterThan(0)||null!==Ye&&void 0!==Ye&&Ye.greaterThan(0)||ni)?(0,Y.jsx)(se,{"data-testid":"collect-fees-button",disabled:ei||!!ni,confirmed:!!ni&&!ri,width:"fit-content",style:{borderRadius:"12px"},padding:"4px 8px",onClick:()=>oi(!0),children:ni&&!ri?(0,Y.jsx)(q.PR.DeprecatedMain,{color:ae.neutral1,children:(0,Y.jsx)(t.x6,{id:"Jpq3gO"})}):ri||ei?(0,Y.jsxs)(q.PR.DeprecatedMain,{color:ae.neutral1,children:[" ",(0,Y.jsx)(v.nv,{children:(0,Y.jsx)(t.x6,{id:"1RB9kv"})})]}):(0,Y.jsx)(Y.Fragment,{children:(0,Y.jsx)(q.PR.DeprecatedMain,{color:ae.white,children:(0,Y.jsx)(t.x6,{id:"h5pjuM"})})})}):null]})}),(0,Y.jsx)(c.R4,{padding:"12px 16px",children:(0,Y.jsxs)(x.mm,{gap:"md",children:[(0,Y.jsxs)(m.JA,{children:[(0,Y.jsxs)(m.Bp,{children:[(0,Y.jsx)(p.A,{currency:null===vi||void 0===vi?void 0:vi.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,Y.jsx)(q.PR.DeprecatedMain,{children:null===vi||void 0===vi||null===(i=vi.currency)||void 0===i?void 0:i.symbol})]}),(0,Y.jsx)(m.Bp,{children:(0,Y.jsx)(q.PR.DeprecatedMain,{children:vi?(0,N.N)(vi,4):"-"})})]}),(0,Y.jsxs)(m.JA,{children:[(0,Y.jsxs)(m.Bp,{children:[(0,Y.jsx)(p.A,{currency:null===ji||void 0===ji?void 0:ji.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,Y.jsx)(q.PR.DeprecatedMain,{children:null===ji||void 0===ji||null===(n=ji.currency)||void 0===n?void 0:n.symbol})]}),(0,Y.jsx)(m.Bp,{children:(0,Y.jsx)(q.PR.DeprecatedMain,{children:ji?(0,N.N)(ji,4):"-"})})]})]})}),Ri&&(0,Y.jsx)(x.mm,{gap:"md",children:(0,Y.jsxs)(m.JA,{children:[(0,Y.jsx)(q.PR.DeprecatedMain,{children:(0,Y.jsx)(t.x6,{id:"oCijuv",values:{nativeWrappedSymbol:Be}})}),(0,Y.jsx)(j.A,{id:"receive-as-weth",isActive:Te,toggle:()=>Le(e=>!e)})]})})]})})]})]}),(0,Y.jsx)(c.RR,{children:(0,Y.jsxs)(x.mm,{gap:"md",children:[(0,Y.jsxs)(m.JA,{children:[(0,Y.jsxs)(m.Bp,{children:[(0,Y.jsx)(ie,{display:"flex",style:{marginRight:"12px"},children:(0,Y.jsx)(t.x6,{id:"7Bu2+f"})}),(0,Y.jsx)(q.Av,{children:(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(U.A,{removed:ke,inRange:yi}),(0,Y.jsx)("span",{style:{width:"8px"}})]})})]}),(0,Y.jsx)(m.Bp,{children:Qe&&Ge&&(0,Y.jsx)(W.A,{currencyA:Qe,currencyB:Ge,handleRateToggle:()=>Ue(!Ee)})})]}),(0,Y.jsxs)(m.JA,{children:[(0,Y.jsx)(c.R4,{padding:"12px",width:"100%",children:(0,Y.jsxs)(x.mm,{gap:"sm",justify:"center",children:[(0,Y.jsx)(ne,{children:(0,Y.jsx)(t.x6,{id:"EQs1sJ"})}),(0,Y.jsx)(q.PR.DeprecatedMediumHeader,{textAlign:"center",children:ce({price:Je,atLimit:Ne,direction:T.zm.LOWER,numberType:O.wl.TokenTx})}),(0,Y.jsxs)(ne,{children:[" ",(0,Y.jsx)(t.x6,{id:"7Z4WfS",values:{0:null===Ge||void 0===Ge?void 0:Ge.symbol,1:null===Qe||void 0===Qe?void 0:Qe.symbol}})]}),yi&&(0,Y.jsx)(q.PR.DeprecatedSmall,{color:ae.neutral3,children:(0,Y.jsx)(t.x6,{id:"NxMldE",values:{0:null===Qe||void 0===Qe?void 0:Qe.symbol}})})]})}),(0,Y.jsx)(re,{children:"\u27f7"}),(0,Y.jsx)(c.R4,{padding:"12px",width:"100%",children:(0,Y.jsxs)(x.mm,{gap:"sm",justify:"center",children:[(0,Y.jsx)(ne,{children:(0,Y.jsx)(t.x6,{id:"5etEUX"})}),(0,Y.jsx)(q.PR.DeprecatedMediumHeader,{textAlign:"center",children:ce({price:We,atLimit:Ne,direction:T.zm.UPPER,numberType:O.wl.TokenTx})}),(0,Y.jsxs)(ne,{children:[" ",(0,Y.jsx)(t.x6,{id:"7Z4WfS",values:{0:null===Ge||void 0===Ge?void 0:Ge.symbol,1:null===Qe||void 0===Qe?void 0:Qe.symbol}})]}),yi&&(0,Y.jsx)(q.PR.DeprecatedSmall,{color:ae.neutral3,children:(0,Y.jsx)(t.x6,{id:"NxMldE",values:{0:null===Ge||void 0===Ge?void 0:Ge.symbol}})})]})})]}),(0,Y.jsx)(xe,{inverted:_e,pool:ze,currencyQuote:Ge,currencyBase:Qe})]})})]})]}),(0,Y.jsx)(H.j,{})]}):(0,Y.jsx)(ge,{})}},63520:(e,i,n)=>{n.d(i,{A:()=>l});var t=n(19984),r=n(96410);const d=r.default.button`
  display: flex;
  align-items: center;
  width: ${({width:e})=>null!==e&&void 0!==e?e:"100%"};
  padding: 1px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 8px;
  border: ${({theme:e})=>"1px solid "+e.surface3};
  cursor: pointer;
  outline: none;
`,o=r.default.span`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0.5rem;
  border-radius: 6px;
  justify-content: center;
  height: 100%;
  background: ${({theme:e,isActive:i})=>i?e.surface1:"none"};
  color: ${({theme:e,isActive:i})=>i?e.neutral1:e.neutral3};
  font-size: ${({fontSize:e})=>null!==e&&void 0!==e?e:"1rem"};
  font-weight: 535;
  white-space: nowrap;
  :hover {
    user-select: initial;
    color: ${({theme:e,isActive:i})=>i?e.neutral2:e.neutral3};
  }
`;var s=n(33370);function l({currencyA:e,currencyB:i,handleRateToggle:n}){const r=null===e||void 0===e?void 0:e.wrapped,l=null===i||void 0===i?void 0:i.wrapped,a=r&&l&&r.sortsBefore(l);return r&&l?(0,s.jsx)("div",{style:{width:"fit-content",display:"flex",alignItems:"center"},onClick:n,children:(0,s.jsxs)(d,{width:"fit-content",children:[(0,s.jsx)(o,{isActive:a,fontSize:"12px",children:(0,s.jsx)(t.x6,{id:"J/hVSQ",values:{0:a?e.symbol:i.symbol}})}),(0,s.jsx)(o,{isActive:!a,fontSize:"12px",children:(0,s.jsx)(t.x6,{id:"J/hVSQ",values:{0:a?i.symbol:e.symbol}})})]})}):null}},80672:(e,i,n)=>{n.d(i,{N:()=>l});var t=n(53847),r=n(99900),d=n(67197),o=n.n(d);function s({number:e,locale:i,sigFigs:n,fixedDecimals:t,options:d={}}){let o,s;if(o=!i||i&&!r.dI.includes(i)?r.Xn:[i,r.Xn],d.minimumFractionDigits=d.minimumFractionDigits||t,d.maximumFractionDigits=d.maximumFractionDigits||t,d.maximumSignificantDigits=d.maximumSignificantDigits||t?void 0:n,"number"===typeof e)s=t?parseFloat(e.toFixed(t)):e;else{const i=parseFloat(e.toSignificant(n));s=t?parseFloat(i.toFixed(t)):i}return s.toLocaleString(o,d)}function l(e,i,n=r.Xn,d){return e?o().equal(e.quotient,o().BigInt(0))?"0":e.divide(e.decimalScale).lessThan(new t.Fraction(1,1e5))?`<${s({number:1e-5,locale:n})}`:s({number:e,locale:n,sigFigs:i,fixedDecimals:d}):"-"}}}]);
//# sourceMappingURL=2831.9e074bbb.chunk.js.map