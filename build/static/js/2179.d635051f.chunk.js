"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[2179],{6990:(e,n,t)=>{t.d(n,{R:()=>x});var i=t(20033),r=t(94313),s=t(3625),d=t(90857),a=t(65868),c=t(23572),o=t(75614);const l=i.gH.from(2).pow(128).sub(1);function x(e,n,t=!1){const i=(0,o.TA)(!1),x=(0,s.DD)(n?i:null,"ownerOf",[n]).result?.[0],u=n?.toHexString(),h=(0,d.Ay)(),[p,m]=(0,a.useState)();return(0,a.useEffect)(()=>{!async function(){if(i&&u&&x)try{const e=await i.callStatic.collect({tokenId:u,recipient:x,amount0Max:l,amount1Max:l},{from:x});m([e.amount0,e.amount1])}catch{}}()},[i,u,x,h]),e&&p?[r.CurrencyAmount.fromRawAmount(t?e.token0:(0,c.U)(e.token0),p[0].toString()),r.CurrencyAmount.fromRawAmount(t?e.token1:(0,c.U)(e.token1),p[1].toString())]:[void 0,void 0]}},22179:(e,n,t)=>{t.r(n),t.d(n,{PositionPageUnsupportedContent:()=>fe,default:()=>ye});var i=t(9776),r=t(20033),s=t(50277),d=t(61361),a=t(94313),c=t(43256),o=t(99380),l=t(27363),x=t(23257),u=t(77781),h=t(67821),p=t(7533),m=t(97316),j=t(15285),g=t(29177),f=t(28887),y=t(23293),v=t(51995);const w=[a.ChainId.MAINNET,a.ChainId.OPTIMISM,a.ChainId.POLYGON,a.ChainId.ARBITRUM_ONE,a.ChainId.CELO];var R=t(71180),b=t(75614),A=t(1512),S=t(96367),D=t(13668),k=t(6990),P=t(89702),M=t(3625),$=t(69827),I=t(65868),C=t(81824),T=t(69383),L=t(31759),B=t(58009),q=t(85431),z=t(82501),F=t(7511),N=t(82702),O=t(24586),E=t(50249),U=t(23572),J=t(5058),W=t(11831),H=t(86106),_=t(30165);const G="data:application/json;base64,";var Q=t(8018),V=t(80526),X=t(10710),Y=t(83704);const Z=(0,q.default)(l.$$)`
  width: 228px;
  height: 40px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
`,K=q.default.div`
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
`,ee=q.default.div`
  font-weight: 535;
  font-size: 14px;
  color: ${({theme:e})=>e.neutral2};
`,ne=(0,q.default)(({end:e,...n})=>(0,i.jsx)(z.PR.DeprecatedLabel,{...n}))`
  display: flex;
  font-size: 16px;
  justify-content: ${({end:e})=>e?"flex-end":"flex-start"};
  align-items: center;
`,te=q.default.span`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  text-align: center;
  margin-right: 4px;
  font-weight: 535;
`,ie=(0,q.default)(z.PR.DeprecatedMain)`
  text-decoration: none;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
`,re=q.default.span`
  color: ${({theme:e})=>e.neutral3};
  margin: 0 1rem;
`,se=(0,q.default)(j.JA)`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
    width: 100%;
  }
`,de=(0,q.default)(se)`
  width: 50%;
  justify-content: flex-end;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    * {
      width: 100%;
    }
  }
`,ae=(0,q.default)(l.m$)`
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
`,ce=q.default.div`
  display: grid;
  grid-template: 'overlap';
  min-height: 400px;
`,oe=q.default.canvas`
  grid-area: overlap;
`,le=q.default.img`
  grid-area: overlap;
  height: 400px;
  /* Ensures SVG appears on top of canvas. */
  z-index: 1;
`;function xe({inverted:e,pool:n,currencyQuote:t,currencyBase:r}){const{formatPrice:d}=(0,E.kc)();return n&&t&&r?(0,i.jsx)(x.R4,{padding:"12px",children:(0,i.jsxs)(u.mm,{gap:"sm",justify:"center",children:[(0,i.jsx)(te,{children:(0,i.jsx)(s.x6,{id:"DWd30U"})}),(0,i.jsx)(z.PR.DeprecatedMediumHeader,{textAlign:"center",children:d({price:e?n.token1Price:n.token0Price,type:E.wl.TokenTx})}),(0,i.jsx)(te,{children:(0,i.jsx)(s.x6,{id:"7Z4WfS",values:{0:t?.symbol,1:r?.symbol}})})]})}):null}const ue=({children:e,chainId:n,address:t})=>{const r=v.kW[n];return(0,i.jsx)(z.b4,{to:`/tokens/${r}/${t}`,children:e})},he=({children:e,chainId:n,address:t})=>(0,i.jsx)(z.Gr,{href:(0,X.a)(n,t,X.u.TOKEN),children:e});function pe({chainId:e,currency:n}){const t=n?.address;if("number"===typeof e&&t){const r=function(e){return!!e&&w.includes(e)}(e)?ue:he;return(0,i.jsx)(r,{chainId:e,address:t,children:(0,i.jsxs)(j.Bp,{children:[(0,i.jsx)(m.A,{currency:n,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsxs)(z.PR.DeprecatedMain,{children:[n?.symbol," \u2197"]})]})})}return(0,i.jsxs)(j.Bp,{children:[(0,i.jsx)(m.A,{currency:n,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(z.PR.DeprecatedMain,{children:n?.symbol})]})}function me(e,n,t){const i=n.getContext("2d");if(i){let{width:r,height:s}=e;const d=r/s;s=t,r=Math.round(d*t),n.width=r*devicePixelRatio,n.height=s*devicePixelRatio,n.style.width=r+"px",n.style.height=s+"px",i.scale(devicePixelRatio,devicePixelRatio),i.clearRect(0,0,r,s),i.drawImage(e,0,0,r,s)}}function je({image:e,height:n}){const[t,r]=(0,I.useState)(!1),s=(0,I.useRef)(null),d=(0,I.useRef)(null);return(0,i.jsxs)(ce,{onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{d.current&&s.current&&me(d.current,s.current,n),r(!1)},children:[(0,i.jsx)(oe,{ref:s}),(0,i.jsx)(le,{ref:d,src:e,hidden:!t,onLoad:()=>{d.current&&s.current&&me(d.current,s.current,n)}})]})}const ge=({priceLower:e,priceUpper:n,quote:t,base:i,invert:r})=>({priceUpper:r?e?.invert():n,priceLower:r?n?.invert():e,quote:r?i:t,base:r?t:i});function fe(){return(0,i.jsx)(K,{children:(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,i.jsx)(z.PR.HeadlineLarge,{style:{marginBottom:"8px"},children:(0,i.jsx)(s.x6,{id:"Ij/sE3"})}),(0,i.jsx)(z.PR.BodyPrimary,{style:{marginBottom:"32px"},children:(0,i.jsx)(s.x6,{id:"Jbim1e"})}),(0,i.jsx)(Z,{as:C.N_,to:"/pools",width:"fit-content",children:(0,i.jsx)(s.x6,{id:"7IwSeQ"})})]})})}function ye(){const{chainId:e}=(0,c.useWeb3React)();return(0,v.Gv)(e)?(0,i.jsx)(we,{}):(0,i.jsx)(fe,{})}const ve=(0,q.default)(j.Bp)({flexWrap:"wrap",gap:8});function we(){const{tokenId:e}=(0,T.g)(),{chainId:n,account:t,provider:v}=(0,c.useWeb3React)(),w=(0,q.useTheme)(),{formatTickPrice:Z}=(0,E.kc)(),ce=function(e){if(e)try{return r.gH.from(e)}catch(n){return}}(e),{loading:oe,position:le}=(0,P.C)(ce),{token0:ue,token1:he,fee:me,liquidity:ye,tickLower:we,tickUpper:Re,tokenId:be}=le||{},Ae=ye?.eq(0),Se=function(e){const n=(0,b.TA)(),t=(0,I.useMemo)(()=>[e instanceof r.gH?e.toHexString():e?.toString(16)],[e]),{result:i,error:s,loading:d,valid:a}=(0,M.DD)(n,"tokenURI",t,{...M.bo,gasRequired:3e6});return(0,I.useMemo)(()=>{if(s||!a||!e)return{valid:!1,loading:!1};if(d)return{valid:!0,loading:!0};if(!i)return{valid:!1,loading:!1};const[n]=i;if(!n||!n.startsWith(G))return{valid:!1,loading:!1};try{return{valid:!0,loading:!1,result:JSON.parse(atob(n.slice(G.length)))}}catch(s){return{valid:!1,loading:!1}}},[s,d,i,e,a])}(ce),De=(0,R.rd)(ue),ke=(0,R.rd)(he),Pe=De?(0,U.U)(De):void 0,Me=ke?(0,U.U)(ke):void 0,[$e,Ie]=(0,I.useState)(!1),Ce=(0,$.A)(n).wrapped.symbol,[Te,Le]=(0,S.Q)(De??void 0,ke??void 0,me),Be=(0,I.useMemo)(()=>{if(Le&&ye&&"number"===typeof we&&"number"===typeof Re)return new d.Position({pool:Le,liquidity:ye.toString(),tickLower:we,tickUpper:Re})},[ye,Le,we,Re]),qe=(0,A.A)(me,we,Re),ze=(0,W.s)(Be),[Fe,Ne]=(0,I.useState)(!1),{priceLower:Oe,priceUpper:Ee,base:Ue}=ge({priceLower:ze.priceLower,priceUpper:ze.priceUpper,quote:ze.quote,base:ze.base,invert:Fe}),Je=ke?Ue?.equals(ke):void 0,We=Je?Pe:Me,He=Je?Me:Pe,_e=(0,I.useMemo)(()=>Oe&&Le&&Ee?function(e,n,t){try{if(!n.greaterThan(e))return 100;if(!n.lessThan(t))return 0;const i=Number.parseFloat(e.toSignificant(15)),r=Number.parseFloat(t.toSignificant(15)),s=Number.parseFloat(n.toSignificant(15)),d=Math.floor(1/((Math.sqrt(i*r)-Math.sqrt(r*s))/(s-Math.sqrt(r*s))+1)*100);if(d<0||d>100)throw Error("Out of range");return d}catch{return}}(Je?Ee.invert():Oe,Le.token0Price,Je?Oe.invert():Ee):void 0,[Je,Le,Oe,Ee]),[Ge,Qe]=(0,k.R)(Le??void 0,le?.tokenId,$e),Ve=Le?$e?Le.token0:(0,U.U)(Le.token0):void 0,Xe=Le?$e?Le.token1:(0,U.U)(Le.token1):void 0,[Ye,Ze]=(0,I.useState)(!1),[Ke,en]=(0,I.useState)(null),nn=(0,B.tp)(Ke??void 0),[tn,rn]=(0,I.useState)(!1),sn=(0,D.Ay)(De??void 0),dn=(0,D.Ay)(ke??void 0),an=(0,I.useMemo)(()=>{if(!sn||!dn||!Ge||!Qe)return null;const e=Ge?.wrapped,n=Qe?.wrapped;if(!e||!n)return null;const t=sn.quote(e),i=dn.quote(n);return t.add(i)},[sn,dn,Ge,Qe]),cn=(0,I.useMemo)(()=>{if(!sn||!dn||!Be)return null;const e=sn.quote(Be.amount0),n=dn.quote(Be.amount1);return e.add(n)},[sn,dn,Be]),on=(0,B.OQ)(),ln=(0,b.TA)(),xn=(0,I.useCallback)(async()=>{if(!Ve||!Xe||!n||!ln||!t||!be||!v)return;Ze(!0);const{calldata:e,value:i}=d.NonfungiblePositionManager.collectCallParameters({tokenId:be.toString(),expectedCurrencyOwed0:Ge??a.CurrencyAmount.fromRawAmount(Ve,0),expectedCurrencyOwed1:Qe??a.CurrencyAmount.fromRawAmount(Xe,0),recipient:t}),r={to:ln.address,data:e,value:i},s=await v.getSigner().getChainId();if(n!==s)throw new N.$c;v.getSigner().estimateGas(r).then(e=>{const n={...r,gasLimit:(0,V.K)(e)};return v.getSigner().sendTransaction(n).then(e=>{en(e.hash),Ze(!1),on(e,{type:Q.D.COLLECT_FEES,currencyId0:(0,F.V)(Ve),currencyId1:(0,F.V)(Xe),expectedCurrencyOwed0:Ge?.quotient.toString()??a.CurrencyAmount.fromRawAmount(Ve,0).toExact(),expectedCurrencyOwed1:Qe?.quotient.toString()??a.CurrencyAmount.fromRawAmount(Xe,0).toExact()})})}).catch(e=>{Ze(!1),console.error(e)})},[n,Ge,Qe,Ve,Xe,ln,t,be,on,v]),un=(0,M.DD)(be?ln:null,"ownerOf",[be]).result?.[0],hn=un===t||le?.operator===t,pn=Je?Ge:Qe,mn=Je?Qe:Ge,jn=Le&&"number"===typeof we?Le.tickCurrent<we:void 0,gn=Le&&"number"===typeof Re?Le.tickCurrent>=Re:void 0,fn="boolean"===typeof jn&&"boolean"===typeof gn&&(!jn&&!gn);function yn(){return(0,i.jsxs)(u.mm,{gap:"md",style:{marginTop:"20px"},children:[(0,i.jsx)(x.R4,{padding:"12px 16px",children:(0,i.jsxs)(u.mm,{gap:"md",children:[(0,i.jsxs)(j.JA,{children:[(0,i.jsxs)(j.Bp,{children:[(0,i.jsx)(m.A,{currency:pn?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(z.PR.DeprecatedMain,{children:pn?(0,O.N)(pn,4):"-"})]}),(0,i.jsx)(z.PR.DeprecatedMain,{children:pn?.currency?.symbol})]}),(0,i.jsxs)(j.JA,{children:[(0,i.jsxs)(j.Bp,{children:[(0,i.jsx)(m.A,{currency:mn?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(z.PR.DeprecatedMain,{children:mn?(0,O.N)(mn,4):"-"})]}),(0,i.jsx)(z.PR.DeprecatedMain,{children:mn?.currency?.symbol})]})]})}),(0,i.jsx)(z.PR.DeprecatedItalic,{children:(0,i.jsx)(s.x6,{id:"R8aNfS"})}),(0,i.jsx)(l.$$,{"data-testid":"modal-collect-fees-button",onClick:xn,children:(0,i.jsx)(s.x6,{id:"vR1m9d"})})]})}const vn=Boolean(hn&&(Ge?.greaterThan(0)||Qe?.greaterThan(0))&&Pe&&Me&&(Pe.isNative||Me.isNative)&&!Ke);return le||oe?oe||Te===S.S.LOADING||!me?(0,i.jsxs)(Y.ar,{children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(K,{children:[(0,i.jsx)(y.A,{isOpen:tn,onDismiss:()=>rn(!1),attemptingTxn:Ye,hash:Ke??"",reviewContent:()=>(0,i.jsx)(y.Y,{title:(0,i.jsx)(s.x6,{id:"tu/fxg"}),onDismiss:()=>rn(!1),topContent:yn}),pendingText:(0,i.jsx)(s.x6,{id:"SGG5Oz"})}),(0,i.jsxs)(u.mm,{gap:"md",children:[(0,i.jsxs)(u.mm,{gap:"sm",children:[(0,i.jsx)(C.N_,{"data-cy":"visit-pool",style:{textDecoration:"none",width:"fit-content",marginBottom:"0.5rem"},to:"/pools",children:(0,i.jsx)(ie,{children:(0,i.jsx)(s.x6,{id:"sYYMH3"})})}),(0,i.jsxs)(se,{children:[(0,i.jsxs)(ve,{children:[(0,i.jsx)(h.A,{currency0:He,currency1:We,size:24,margin:!0}),(0,i.jsxs)(z.PR.DeprecatedLabel,{fontSize:"24px",mr:"10px",children:["\xa0",We?.symbol,"\xa0/\xa0",He?.symbol]}),(0,i.jsx)(o.A,{style:{marginRight:"8px"},children:(0,i.jsx)(ee,{children:(0,i.jsx)(s.x6,{id:"hbO8db",values:{0:new a.Percent(me,1e6).toSignificant()}})})}),(0,i.jsx)(J.A,{removed:Ae,inRange:fn})]}),hn&&(0,i.jsxs)(de,{children:[Pe&&Me&&me&&be?(0,i.jsx)(l.EA,{as:C.N_,to:`/increase/${(0,F.V)(Pe)}/${(0,F.V)(Me)}/${me}/${be}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",style:{marginRight:"8px"},children:(0,i.jsx)(s.x6,{id:"3pgmAj"})}):null,be&&!Ae?(0,i.jsx)(l.Au,{as:C.N_,to:`/remove/${be}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",children:(0,i.jsx)(s.x6,{id:"cJtosk"})}):null]})]})]}),(0,i.jsxs)(se,{align:"flex-start",children:[(0,i.jsx)(z.QZ,{style:{height:"100%",marginRight:12},children:"result"in Se?(0,i.jsxs)(x.RR,{width:"100%",height:"100%",style:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around",minWidth:"340px"},children:[(0,i.jsx)(je,{image:Se.result.image,height:400}),"number"===typeof n&&un&&!hn?(0,i.jsx)(z.Gr,{href:(0,X.a)(n,un,X.u.ADDRESS),children:(0,i.jsx)(s.x6,{id:"LtI9AS"})}):null]}):(0,i.jsx)(x.RR,{width:"100%",height:"100%",style:{minWidth:"340px",position:"relative",overflow:"hidden"},children:(0,i.jsx)(p.qp,{})})}),(0,i.jsxs)(u.mm,{gap:"sm",style:{width:"100%",height:"100%"},children:[(0,i.jsx)(x.RR,{children:(0,i.jsxs)(u.mm,{gap:"md",style:{width:"100%"},children:[(0,i.jsxs)(u.mm,{gap:"md",children:[(0,i.jsx)(ne,{children:(0,i.jsx)(s.x6,{id:"6y2TB3"})}),cn?.greaterThan(new a.Fraction(1,100))?(0,i.jsx)(z.PR.DeprecatedLargeHeader,{fontSize:"36px",fontWeight:535,children:(0,i.jsx)(s.x6,{id:"8F8jpm",values:{0:cn.toFixed(2,{groupSeparator:","})}})}):(0,i.jsx)(z.PR.DeprecatedLargeHeader,{color:w.neutral1,fontSize:"36px",fontWeight:535,children:(0,i.jsx)(s.x6,{id:"5qs2w+"})})]}),(0,i.jsx)(x.R4,{padding:"12px 16px",children:(0,i.jsxs)(u.mm,{gap:"md",children:[(0,i.jsxs)(j.JA,{children:[(0,i.jsx)(pe,{chainId:n,currency:We}),(0,i.jsxs)(j.Bp,{children:[(0,i.jsx)(z.PR.DeprecatedMain,{children:Je?Be?.amount0.toSignificant(4):Be?.amount1.toSignificant(4)}),"number"!==typeof _e||Ae?null:(0,i.jsx)(o.A,{style:{marginLeft:"10px"},children:(0,i.jsx)(ee,{children:(0,i.jsx)(s.x6,{id:"hbO8db",values:{0:Je?_e:100-_e}})})})]})]}),(0,i.jsxs)(j.JA,{children:[(0,i.jsx)(pe,{chainId:n,currency:He}),(0,i.jsxs)(j.Bp,{children:[(0,i.jsx)(z.PR.DeprecatedMain,{children:Je?Be?.amount1.toSignificant(4):Be?.amount0.toSignificant(4)}),"number"!==typeof _e||Ae?null:(0,i.jsx)(o.A,{style:{marginLeft:"10px"},children:(0,i.jsx)(ee,{children:(0,i.jsx)(s.x6,{id:"hbO8db",values:{0:Je?100-_e:_e}})})})]})]})]})})]})}),(0,i.jsx)(x.RR,{children:(0,i.jsxs)(u.mm,{gap:"md",style:{width:"100%"},children:[(0,i.jsx)(u.mm,{gap:"md",children:(0,i.jsxs)(j.JA,{style:{alignItems:"flex-start"},children:[(0,i.jsxs)(u.mm,{gap:"md",children:[(0,i.jsx)(ne,{children:(0,i.jsx)(s.x6,{id:"XCqY8/"})}),an?.greaterThan(new a.Fraction(1,100))?(0,i.jsx)(z.PR.DeprecatedLargeHeader,{color:w.success,fontSize:"36px",fontWeight:535,children:(0,i.jsx)(s.x6,{id:"8F8jpm",values:{0:an.toFixed(2,{groupSeparator:","})}})}):(0,i.jsx)(z.PR.DeprecatedLargeHeader,{color:w.neutral1,fontSize:"36px",fontWeight:535,children:(0,i.jsx)(s.x6,{id:"5qs2w+"})})]}),hn&&(Ge?.greaterThan(0)||Qe?.greaterThan(0)||Ke)?(0,i.jsx)(ae,{"data-testid":"collect-fees-button",disabled:Ye||!!Ke,confirmed:!!Ke&&!nn,width:"fit-content",style:{borderRadius:"12px"},padding:"4px 8px",onClick:()=>rn(!0),children:Ke&&!nn?(0,i.jsx)(z.PR.DeprecatedMain,{color:w.neutral1,children:(0,i.jsx)(s.x6,{id:"Jpq3gO"})}):nn||Ye?(0,i.jsxs)(z.PR.DeprecatedMain,{color:w.neutral1,children:[" ",(0,i.jsx)(g.nv,{children:(0,i.jsx)(s.x6,{id:"1RB9kv"})})]}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(z.PR.DeprecatedMain,{color:w.white,children:(0,i.jsx)(s.x6,{id:"h5pjuM"})})})}):null]})}),(0,i.jsx)(x.R4,{padding:"12px 16px",children:(0,i.jsxs)(u.mm,{gap:"md",children:[(0,i.jsxs)(j.JA,{children:[(0,i.jsxs)(j.Bp,{children:[(0,i.jsx)(m.A,{currency:pn?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(z.PR.DeprecatedMain,{children:pn?.currency?.symbol})]}),(0,i.jsx)(j.Bp,{children:(0,i.jsx)(z.PR.DeprecatedMain,{children:pn?(0,O.N)(pn,4):"-"})})]}),(0,i.jsxs)(j.JA,{children:[(0,i.jsxs)(j.Bp,{children:[(0,i.jsx)(m.A,{currency:mn?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,i.jsx)(z.PR.DeprecatedMain,{children:mn?.currency?.symbol})]}),(0,i.jsx)(j.Bp,{children:(0,i.jsx)(z.PR.DeprecatedMain,{children:mn?(0,O.N)(mn,4):"-"})})]})]})}),vn&&(0,i.jsx)(u.mm,{gap:"md",children:(0,i.jsxs)(j.JA,{children:[(0,i.jsx)(z.PR.DeprecatedMain,{children:(0,i.jsx)(s.x6,{id:"oCijuv",values:{nativeWrappedSymbol:Ce}})}),(0,i.jsx)(f.A,{id:"receive-as-weth",isActive:$e,toggle:()=>Ie(e=>!e)})]})})]})})]})]}),(0,i.jsx)(x.RR,{children:(0,i.jsxs)(u.mm,{gap:"md",children:[(0,i.jsxs)(j.JA,{children:[(0,i.jsxs)(j.Bp,{children:[(0,i.jsx)(ne,{display:"flex",style:{marginRight:"12px"},children:(0,i.jsx)(s.x6,{id:"7Bu2+f"})}),(0,i.jsx)(z.Av,{children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(J.A,{removed:Ae,inRange:fn}),(0,i.jsx)("span",{style:{width:"8px"}})]})})]}),(0,i.jsx)(j.Bp,{children:He&&We&&(0,i.jsx)(H.A,{currencyA:He,currencyB:We,handleRateToggle:()=>Ne(!Fe)})})]}),(0,i.jsxs)(j.JA,{children:[(0,i.jsx)(x.R4,{padding:"12px",width:"100%",children:(0,i.jsxs)(u.mm,{gap:"sm",justify:"center",children:[(0,i.jsx)(te,{children:(0,i.jsx)(s.x6,{id:"EQs1sJ"})}),(0,i.jsx)(z.PR.DeprecatedMediumHeader,{textAlign:"center",children:Z({price:Oe,atLimit:qe,direction:L.zm.LOWER,numberType:E.wl.TokenTx})}),(0,i.jsxs)(te,{children:[" ",(0,i.jsx)(s.x6,{id:"7Z4WfS",values:{0:We?.symbol,1:He?.symbol}})]}),fn&&(0,i.jsx)(z.PR.DeprecatedSmall,{color:w.neutral3,children:(0,i.jsx)(s.x6,{id:"NxMldE",values:{0:He?.symbol}})})]})}),(0,i.jsx)(re,{children:"\u27f7"}),(0,i.jsx)(x.R4,{padding:"12px",width:"100%",children:(0,i.jsxs)(u.mm,{gap:"sm",justify:"center",children:[(0,i.jsx)(te,{children:(0,i.jsx)(s.x6,{id:"5etEUX"})}),(0,i.jsx)(z.PR.DeprecatedMediumHeader,{textAlign:"center",children:Z({price:Ee,atLimit:qe,direction:L.zm.UPPER,numberType:E.wl.TokenTx})}),(0,i.jsxs)(te,{children:[" ",(0,i.jsx)(s.x6,{id:"7Z4WfS",values:{0:We?.symbol,1:He?.symbol}})]}),fn&&(0,i.jsx)(z.PR.DeprecatedSmall,{color:w.neutral3,children:(0,i.jsx)(s.x6,{id:"NxMldE",values:{0:We?.symbol}})})]})})]}),(0,i.jsx)(xe,{inverted:Je,pool:Le,currencyQuote:We,currencyBase:He})]})})]})]}),(0,i.jsx)(_.j,{})]}):(0,i.jsx)(fe,{})}},24586:(e,n,t)=>{t.d(n,{N:()=>c});var i=t(94313),r=t(21542),s=t(53055),d=t.n(s);function a({number:e,locale:n,sigFigs:t,fixedDecimals:i,options:s={}}){let d,a;if(d=!n||n&&!r.dI.includes(n)?r.Xn:[n,r.Xn],s.minimumFractionDigits=s.minimumFractionDigits||i,s.maximumFractionDigits=s.maximumFractionDigits||i,s.maximumSignificantDigits=s.maximumSignificantDigits||i?void 0:t,"number"===typeof e)a=i?parseFloat(e.toFixed(i)):e;else{const n=parseFloat(e.toSignificant(t));a=i?parseFloat(n.toFixed(i)):n}return a.toLocaleString(d,s)}function c(e,n,t=r.Xn,s){return e?d().equal(e.quotient,d().BigInt(0))?"0":e.divide(e.decimalScale).lessThan(new i.Fraction(1,1e5))?`<${a({number:1e-5,locale:t})}`:a({number:e,locale:t,sigFigs:n,fixedDecimals:s}):"-"}},86106:(e,n,t)=>{t.d(n,{A:()=>c});var i=t(9776),r=t(50277),s=t(85431);const d=s.default.button`
  display: flex;
  align-items: center;
  width: ${({width:e})=>e??"100%"};
  padding: 1px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 8px;
  border: ${({theme:e})=>"1px solid "+e.surface3};
  cursor: pointer;
  outline: none;
`,a=s.default.span`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0.5rem;
  border-radius: 6px;
  justify-content: center;
  height: 100%;
  background: ${({theme:e,isActive:n})=>n?e.surface1:"none"};
  color: ${({theme:e,isActive:n})=>n?e.neutral1:e.neutral3};
  font-size: ${({fontSize:e})=>e??"1rem"};
  font-weight: 535;
  white-space: nowrap;
  :hover {
    user-select: initial;
    color: ${({theme:e,isActive:n})=>n?e.neutral2:e.neutral3};
  }
`;function c({currencyA:e,currencyB:n,handleRateToggle:t}){const s=e?.wrapped,c=n?.wrapped,o=s&&c&&s.sortsBefore(c);return s&&c?(0,i.jsx)("div",{style:{width:"fit-content",display:"flex",alignItems:"center"},onClick:t,children:(0,i.jsxs)(d,{width:"fit-content",children:[(0,i.jsx)(a,{isActive:o,fontSize:"12px",children:(0,i.jsx)(r.x6,{id:"J/hVSQ",values:{0:o?e.symbol:n.symbol}})}),(0,i.jsx)(a,{isActive:!o,fontSize:"12px",children:(0,i.jsx)(r.x6,{id:"J/hVSQ",values:{0:o?n.symbol:e.symbol}})})]})}):null}}}]);
//# sourceMappingURL=2179.d635051f.chunk.js.map