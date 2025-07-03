"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[604],{3327:(e,i,n)=>{n.d(i,{qC:()=>u,LR:()=>l,jK:()=>a,yj:()=>c,pL:()=>s});var t=n(96410);const d=n.p+"static/media/big_unicorn.90ddcbf00b3ff1ad4495.png",o=n.p+"static/media/noise.3c7efafc83614205bd1a.png";var r=n(75423);const s=(0,t.default)(r.mm)`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #000000 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,l=t.default.span`
  background: url(${d});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,a=t.default.span`
  background: url(${o});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,c=(0,t.default)(r.mm)`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,u=t.default.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},40909:(e,i,n)=>{n.r(i),n.d(i,{default:()=>De});var t=n(19984),d=n(34203),o=n(65755),r=n(53847),s=n(54644),l=n(36794),a=n(26047),c=n(96410),u=n(33121),p=n(33370);const x=c.default.div`
  color: ${({theme:e})=>e.neutral2};
`,h=c.default.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  color: ${({theme:e})=>e.deprecated_accentWarning};
  margin-bottom: 8px;
`,m=c.default.div`
  background-color: ${({theme:e})=>e.deprecated_accentWarningSoft};
  border-radius: 16px;
  margin-top: 12px;
  max-width: 480px;
  padding: 12px 20px;
  width: 100%;
`,v=({ownerAddress:e})=>(0,p.jsxs)(m,{children:[(0,p.jsxs)(h,{children:[(0,p.jsx)(a.A,{style:{marginRight:"8px"}}),(0,p.jsx)(u.PR.SubHeader,{color:"deprecated_accentWarning",children:(0,p.jsx)(t.x6,{id:"r6y+jM"})})]}),(0,p.jsx)(x,{children:(0,p.jsx)(t.x6,{id:"7o/WJ5",values:{ownerAddress:e}})})]});var g=n(42789),j=n(9157),R=n(31688),f=n(66295),y=n(12991),b=n(42831),C=n(54674),A=n(85713),D=n(4126),E=n(92947),N=n(49132);function P(e,i){return!(!e||!i)&&(e===i||e.toLowerCase()===i.toLowerCase())}var S=n(6612),k=n(50645),w=n(21959),_=n(75423),U=n(70694),B=n(33083),$=n(53947),I=n(272),Y=n(20295),L=n(3327),O=n(87014),z=n(63520),M=n(12763),T=n(67197),W=n.n(T),F=n(11577),G=n(85177),J=n(51150);const V=({position:e,title:i,inRange:n,baseCurrencyDefault:d,ticksAtLimit:o})=>{var r;const s=(0,c.useTheme)(),{formatTickPrice:l}=(0,G.kc)(),a=(0,J.U)(e.pool.token0),x=(0,J.U)(e.pool.token1),[h,m]=(0,C.useState)(d?d===a?a:d===x?x:a:a),v=h===a,g=v?x:a,j=v?e.pool.priceOf(e.pool.token0):e.pool.priceOf(e.pool.token1),R=v?e.token0PriceLower:e.token0PriceUpper.invert(),f=v?e.token0PriceUpper:e.token0PriceLower.invert(),y=(0,C.useCallback)(()=>{m(g)},[g]),b=(null===e||void 0===e?void 0:e.liquidity)&&W().equal(null===e||void 0===e?void 0:e.liquidity,W().BigInt(0));return(0,p.jsxs)(_.mm,{gap:"md",style:{marginTop:"0.5rem"},children:[(0,p.jsxs)(M.JA,{style:{marginBottom:"0.5rem"},children:[(0,p.jsxs)(M.Bp,{children:[(0,p.jsx)(Y.A,{currency0:null!==a&&void 0!==a?a:void 0,currency1:null!==x&&void 0!==x?x:void 0,size:24,margin:!0}),(0,p.jsxs)(u.PR.DeprecatedLabel,{ml:"10px",fontSize:"24px",children:[null===a||void 0===a?void 0:a.symbol," / ",null===x||void 0===x?void 0:x.symbol]})]}),(0,p.jsx)(I.A,{removed:b,inRange:n})]}),(0,p.jsx)(w.R4,{children:(0,p.jsxs)(_.mm,{gap:"md",children:[(0,p.jsxs)(M.JA,{children:[(0,p.jsxs)(M.Bp,{children:[(0,p.jsx)(O.A,{currency:a}),(0,p.jsx)(u.PR.DeprecatedLabel,{ml:"8px",children:null===a||void 0===a?void 0:a.symbol})]}),(0,p.jsx)(M.Bp,{children:(0,p.jsx)(u.PR.DeprecatedLabel,{mr:"8px",children:e.amount0.toSignificant(4)})})]}),(0,p.jsxs)(M.JA,{children:[(0,p.jsxs)(M.Bp,{children:[(0,p.jsx)(O.A,{currency:x}),(0,p.jsx)(u.PR.DeprecatedLabel,{ml:"8px",children:null===x||void 0===x?void 0:x.symbol})]}),(0,p.jsx)(M.Bp,{children:(0,p.jsx)(u.PR.DeprecatedLabel,{mr:"8px",children:e.amount1.toSignificant(4)})})]}),(0,p.jsx)(L.qC,{}),(0,p.jsxs)(M.JA,{children:[(0,p.jsx)(u.PR.DeprecatedLabel,{children:(0,p.jsx)(t.x6,{id:"EU3wU4"})}),(0,p.jsx)(u.PR.DeprecatedLabel,{children:(0,p.jsx)(t.x6,{id:"hbO8db",values:{0:(null===e||void 0===e||null===(r=e.pool)||void 0===r?void 0:r.fee)/1e4}})})]})]})}),(0,p.jsxs)(_.mm,{gap:"md",children:[(0,p.jsxs)(M.JA,{children:[i?(0,p.jsx)(u.PR.DeprecatedMain,{children:i}):(0,p.jsx)("div",{}),(0,p.jsx)(z.A,{currencyA:v?a:x,currencyB:v?x:a,handleRateToggle:y})]}),(0,p.jsxs)(M.JA,{children:[(0,p.jsx)(w.R4,{width:"48%",padding:"8px",children:(0,p.jsxs)(_.mm,{gap:"4px",justify:"center",children:[(0,p.jsx)(u.PR.DeprecatedMain,{fontSize:"12px",children:(0,p.jsx)(t.x6,{id:"EQs1sJ"})}),(0,p.jsx)(u.PR.DeprecatedMediumHeader,{textAlign:"center",children:l({price:R,atLimit:o,direction:F.zm.LOWER})}),(0,p.jsx)(u.PR.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,p.jsx)(t.x6,{id:"7Z4WfS",values:{0:g.symbol,1:h.symbol}})}),(0,p.jsx)(u.PR.DeprecatedSmall,{textAlign:"center",color:s.neutral3,style:{marginTop:"4px"},children:(0,p.jsx)(t.x6,{id:"WgTuci",values:{0:null===h||void 0===h?void 0:h.symbol}})})]})}),(0,p.jsx)(w.R4,{width:"48%",padding:"8px",children:(0,p.jsxs)(_.mm,{gap:"4px",justify:"center",children:[(0,p.jsx)(u.PR.DeprecatedMain,{fontSize:"12px",children:(0,p.jsx)(t.x6,{id:"5etEUX"})}),(0,p.jsx)(u.PR.DeprecatedMediumHeader,{textAlign:"center",children:l({price:f,atLimit:o,direction:F.zm.UPPER})}),(0,p.jsx)(u.PR.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,p.jsx)(t.x6,{id:"7Z4WfS",values:{0:g.symbol,1:h.symbol}})}),(0,p.jsx)(u.PR.DeprecatedSmall,{textAlign:"center",color:s.neutral3,style:{marginTop:"4px"},children:(0,p.jsx)(t.x6,{id:"WgTuci",values:{0:null===g||void 0===g?void 0:g.symbol}})})]})})]}),(0,p.jsx)(w.R4,{padding:"12px ",children:(0,p.jsxs)(_.mm,{gap:"4px",justify:"center",children:[(0,p.jsx)(u.PR.DeprecatedMain,{fontSize:"12px",children:(0,p.jsx)(t.x6,{id:"DWd30U"})}),(0,p.jsx)(u.PR.DeprecatedMediumHeader,{children:`${j.toSignificant(5)} `}),(0,p.jsx)(u.PR.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,p.jsx)(t.x6,{id:"7Z4WfS",values:{0:g.symbol,1:h.symbol}})})]})})]})]})};var q=n(94872);const H=(0,c.default)(k.fK).attrs(()=>({padding:"6px",$borderRadius:"8px"}))`
  color: ${({theme:e})=>e.neutral1};
  flex: 1;
`;function Q({onSetFullRange:e}){return(0,p.jsx)(M.eF,{gap:"4px",width:"auto",children:(0,p.jsx)(H,{"data-testid":"set-full-range",onClick:e,children:(0,p.jsx)(u.PR.DeprecatedBody,{fontSize:12,children:(0,p.jsx)(t.x6,{id:"5IHTSS"})})})})}var Z=n(65311),K=n(57235),X=n(92627),ee=n(93405),ie=n(17567),ne=n(19933);const te=JSON.parse('[{"inputs":[{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"_transactions","type":"tuple[]"}],"name":"wc_multiCall","outputs":[{"internalType":"bytes[]","name":"","type":"bytes[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_msgHash","type":"bytes32"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"isValidSignature","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"}]');var de=n(94999),oe=n(82685);var re=n(94687);var se=n(90495),le=n(33778),ae=n(265),ce=n(25916),ue=n(47519),pe=n(19456),xe=n(34342);const he=new(n(95626).KA)([{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}]);function me(e,i){if(!e.currency.isToken)throw new Error("Must call with an amount of token");const n=he.encodeFunctionData("approve",[i,(0,o.toHex)(e.quotient)]);return{to:e.currency.address,data:n,value:"0x0"}}var ve=n(38740),ge=n(97805),je=n(16649),Re=n(5294);const fe=c.default.div`
  padding-top: 12px;
`;function ye({position:e,outOfRange:i,ticksAtLimit:n}){return(0,p.jsx)(fe,{children:(0,p.jsx)(_.mm,{gap:"lg",children:e?(0,p.jsx)(V,{position:e,inRange:!i,ticksAtLimit:n,title:"Selected Range"}):null})})}var be=n(14841);const Ce=new r.Percent(50,1e4),Ae=(0,c.default)(y.q)`
  padding: ${({$hasExistingPosition:e})=>e?"10px":0};
  max-width: 640px;
`;function De(){const{chainId:e}=(0,s.useWeb3React)();return(0,j.Gv)(e)?(0,p.jsx)(Ee,{}):(0,p.jsx)(b.PositionPageUnsupportedContent,{})}function Ee(){var e,i,n,x,h,m,j,y,b,I,Y,L;const O=(0,A.Zp)(),{currencyIdA:T,currencyIdB:W,feeAmount:G,tokenId:J}=(0,A.g)(),{account:H,chainId:he,provider:fe}=(0,s.useWeb3React)(),De=(0,c.useTheme)(),Ee=(0,l.QO)(),Ne=(0,ue.OQ)(),Pe=(0,de.TA)(),{position:Se,loading:ke}=(0,ce.C)(J?d.gH.from(J):void 0),we=!!Se&&!ke,{position:_e}=function(e){const i=(0,ie.H2)(null===e||void 0===e?void 0:e.token0),n=(0,ie.H2)(null===e||void 0===e?void 0:e.token1),[,t]=(0,re.Q)(null!==i&&void 0!==i?i:void 0,null!==n&&void 0!==n?n:void 0,null===e||void 0===e?void 0:e.fee);let d;return t&&e&&(d=new o.Position({pool:t,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper})),{position:d,pool:null!==t&&void 0!==t?t:void 0}}(Se),Ue=G&&Object.values(o.FeeAmount).includes(parseFloat(G))?parseFloat(G):void 0,Be=(0,ie.H2)(T),$e=(0,ie.H2)(W),Ie=Be&&$e&&Be.wrapped.equals($e.wrapped)?void 0:$e,{independentField:Ye,typedValue:Le,startPriceTypedValue:Oe}=(0,N.UN)(),{pool:ze,ticks:Me,dependentField:Te,price:We,pricesAtTicks:Fe,pricesAtLimit:Ge,parsedAmounts:Je,currencyBalances:Ve,position:qe,noLiquidity:He,currencies:Qe,errorMessage:Ze,invalidPool:Ke,invalidRange:Xe,outOfRange:ei,depositADisabled:ii,depositBDisabled:ni,invertPrice:ti,ticksAtLimit:di}=(0,N.wt)(null!==Be&&void 0!==Be?Be:void 0,null!==Ie&&void 0!==Ie?Ie:void 0,Ue,null!==Be&&void 0!==Be?Be:void 0,_e),{onFieldAInput:oi,onFieldBInput:ri,onLeftRangeInput:si,onRightRangeInput:li,onStartPriceInput:ai}=(0,N.iG)(He),ci=!Ze&&!Xe,[ui,pi]=(0,C.useState)(!1),[xi,hi]=(0,C.useState)(!1),mi=(0,ae.A)(),[vi,gi]=(0,C.useState)(""),ji={[Ye]:Le,[Te]:null!==(e=null===(i=Je[Te])||void 0===i?void 0:i.toSignificant(6))&&void 0!==e?e:""},Ri={[F.D0.CURRENCY_A]:(0,le.z8)(Je[F.D0.CURRENCY_A]),[F.D0.CURRENCY_B]:(0,le.z8)(Je[F.D0.CURRENCY_B])},fi=[F.D0.CURRENCY_A,F.D0.CURRENCY_B].reduce((e,i)=>({...e,[i]:(0,je.r)(Ve[i])}),{}),yi=[F.D0.CURRENCY_A,F.D0.CURRENCY_B].reduce((e,i)=>{var n,t;return{...e,[i]:null===(n=fi[i])||void 0===n?void 0:n.equalTo(null!==(t=Je[i])&&void 0!==t?t:"0")}},{}),bi=function(){const{account:e}=(0,s.useWeb3React)(),i=(0,oe.A)();return(0,de.ku)(i&&null!==e&&void 0!==e?e:void 0,te,!0)}(),[Ci,Ai]=(0,ne.e)(bi?void 0:Je[F.D0.CURRENCY_A],he?r.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[he]:void 0),[Di,Ei]=(0,ne.e)(bi?void 0:Je[F.D0.CURRENCY_B],he?r.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[he]:void 0),Ni=(0,xe.co)(ei?X.dU:Ce);async function Pi(){if(he&&fe&&H&&Pe&&Be&&Ie&&qe&&H&&mi){const e=Be.isNative?Be:Ie.isNative?Ie:void 0,{calldata:i,value:n}=we&&J?o.NonfungiblePositionManager.addCallParameters(qe,{tokenId:J,slippageTolerance:Ni,deadline:mi.toString(),useNative:e}):o.NonfungiblePositionManager.addCallParameters(qe,{slippageTolerance:Ni,recipient:H,deadline:mi.toString(),useNative:e,createPool:He});let t={to:r.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[he],data:i,value:n};if(bi){const e=Je[F.D0.CURRENCY_A],i=Je[F.D0.CURRENCY_B],n=[...e&&e.currency.isToken?[me(e,r.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[he])]:[],...i&&i.currency.isToken?[me(i,r.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[he])]:[],{to:t.to,data:t.data,value:t.value}],d=bi.interface.encodeFunctionData("wc_multiCall",[n]);t={to:bi.address,data:d,value:"0x0"}}const d=await fe.getSigner().getChainId();if(he!==d)throw new S.$c;hi(!0),fe.getSigner().estimateGas(t).then(e=>{const i={...t,gasLimit:(0,ve.K)(e)};return fe.getSigner().sendTransaction(i).then(e=>{var i,n,t,d,o,r;hi(!1);const s={type:pe.D.ADD_LIQUIDITY_V3_POOL,baseCurrencyId:(0,ge.V)(Be),quoteCurrencyId:(0,ge.V)(Ie),createPool:Boolean(He),expectedAmountBaseRaw:null!==(i=null===(n=Je[F.D0.CURRENCY_A])||void 0===n||null===(t=n.quotient)||void 0===t?void 0:t.toString())&&void 0!==i?i:"0",expectedAmountQuoteRaw:null!==(d=null===(o=Je[F.D0.CURRENCY_B])||void 0===o||null===(r=o.quotient)||void 0===r?void 0:r.toString())&&void 0!==d?d:"0",feeAmount:qe.pool.fee};Ne(e,s),gi(e.hash)})}).catch(e=>{console.error("Failed to send transaction",e),hi(!1),4001!==(null===e||void 0===e?void 0:e.code)&&console.error(e)})}}const Si=(0,C.useCallback)((e,i)=>{const n=(0,ge.V)(e);if(n===i)return[n,void 0];{var t,d;const e="ETH"===n||void 0!==he&&n===(null===(t=ee.Im[he])||void 0===t?void 0:t.address),o=void 0!==i&&("ETH"===i||void 0!==he&&i===(null===(d=ee.Im[he])||void 0===d?void 0:d.address));return e&&o?[n,void 0]:[n,i]}},[he]),ki=(0,C.useCallback)(e=>{const[i,n]=Si(e,W);O(void 0===n?`/add/${i}`:`/add/${i}/${n}/3000`)},[Si,W,O]),wi=(0,C.useCallback)(e=>{const[i,n]=Si(e,T);O(void 0===n?`/add/${i}`:`/add/${n}/${i}/3000`)},[Si,T,O]),_i=(0,C.useCallback)(()=>{pi(!1),vi&&(oi(""),O("/pools")),gi("")},[O,oi,vi]),Ui=(0,se.C)(null===Qe||void 0===Qe?void 0:Qe.CURRENCY_A,null===Qe||void 0===Qe?void 0:Qe.CURRENCY_B),Bi=(0,C.useCallback)(()=>{oi(""),ri(""),si(""),li(""),O("/add")},[O,oi,ri,si,li]),{[F.zm.LOWER]:$i,[F.zm.UPPER]:Ii}=Me,{[F.zm.LOWER]:Yi,[F.zm.UPPER]:Li}=Fe,{getDecrementLower:Oi,getIncrementLower:zi,getDecrementUpper:Mi,getIncrementUpper:Ti,getSetFullRange:Wi}=(0,N.Uz)(null!==Be&&void 0!==Be?Be:void 0,null!==Ie&&void 0!==Ie?Ie:void 0,Ue,$i,Ii,ze),Fi=!bi&&Ci!==ne.h.APPROVED&&!!Je[F.D0.CURRENCY_A],Gi=!bi&&Di!==ne.h.APPROVED&&!!Je[F.D0.CURRENCY_B],Ji=`Supplying ${ii?"":null===(n=Je[F.D0.CURRENCY_A])||void 0===n?void 0:n.toSignificant(6)} ${ii?"":null===(x=Qe[F.D0.CURRENCY_A])||void 0===x?void 0:x.symbol} ${ei?"":"and"} ${ni?"":null===(h=Je[F.D0.CURRENCY_B])||void 0===h?void 0:h.toSignificant(6)} ${ni?"":null===(m=Qe[F.D0.CURRENCY_B])||void 0===m?void 0:m.symbol}`,[Vi,qi]=(0,D.ok)(),Hi=(0,C.useCallback)(()=>{Wi();const e=Ge[F.zm.LOWER];e&&Vi.set("minPrice",e.toSignificant(5));const i=Ge[F.zm.UPPER];i&&Vi.set("maxPrice",i.toSignificant(5)),qi(Vi)},[Wi,Ge,Vi,qi]),Qi=(0,R.A)(Vi);(0,C.useEffect)(()=>{const e=Vi.get("minPrice"),i=null===Qi||void 0===Qi?void 0:Qi.get("minPrice");!e||"string"!==typeof e||isNaN(e)||i&&i===e||si(e)},[Vi]),(0,C.useEffect)(()=>{const e=Vi.get("maxPrice"),i=null===Qi||void 0===Qi?void 0:Qi.get("maxPrice");!e||"string"!==typeof e||isNaN(e)||i&&i===e||li(e)},[Vi]);const Zi=()=>{var e,i,n,d;return Ui?(0,p.jsx)(k.$$,{disabled:!0,$borderRadius:"12px",padding:"12px",children:(0,p.jsx)(u.PR.DeprecatedMain,{mb:"4px",children:(0,p.jsx)(t.x6,{id:"Iac4Ia"})})}):H?(0,p.jsxs)(_.mm,{gap:"md",children:[(Ci===ne.h.NOT_APPROVED||Ci===ne.h.PENDING||Di===ne.h.NOT_APPROVED||Di===ne.h.PENDING)&&ci&&(0,p.jsxs)(M.JA,{children:[Fi&&(0,p.jsx)(k.$$,{onClick:Ai,disabled:Ci===ne.h.PENDING,width:Gi?"48%":"100%",children:Ci===ne.h.PENDING?(0,p.jsx)(Re.nv,{children:(0,p.jsx)(t.x6,{id:"MfyhMG",values:{0:null===(e=Qe[F.D0.CURRENCY_A])||void 0===e?void 0:e.symbol}})}):(0,p.jsx)(t.x6,{id:"fgGids",values:{0:null===(i=Qe[F.D0.CURRENCY_A])||void 0===i?void 0:i.symbol}})}),Gi&&(0,p.jsx)(k.$$,{onClick:Ei,disabled:Di===ne.h.PENDING,width:Fi?"48%":"100%",children:Di===ne.h.PENDING?(0,p.jsx)(Re.nv,{children:(0,p.jsx)(t.x6,{id:"MfyhMG",values:{0:null===(n=Qe[F.D0.CURRENCY_B])||void 0===n?void 0:n.symbol}})}):(0,p.jsx)(t.x6,{id:"fgGids",values:{0:null===(d=Qe[F.D0.CURRENCY_B])||void 0===d?void 0:d.symbol}})})]}),(0,p.jsx)(k.Jk,{onClick:()=>{pi(!0)},disabled:!ci||!bi&&Ci!==ne.h.APPROVED&&!ii||!bi&&Di!==ne.h.APPROVED&&!ni||void 0===Yi||void 0===Li,error:!ci&&!!Je[F.D0.CURRENCY_A]&&!!Je[F.D0.CURRENCY_B],children:(0,p.jsx)(E.EY,{fontWeight:535,children:Ze||(0,p.jsx)(t.x6,{id:"rdUucN"})})})]}):(0,p.jsx)(k.N$,{onClick:Ee,$borderRadius:"12px",padding:"12px",children:(0,p.jsx)(t.x6,{id:"VHOVEJ"})})},Ki=Ri[F.D0.CURRENCY_A],Xi=Ri[F.D0.CURRENCY_B],en=(0,C.useMemo)(()=>({data:Ki?parseFloat(Ki.toSignificant()):void 0,isLoading:!1}),[Ki]),nn=(0,C.useMemo)(()=>({data:Xi?parseFloat(Xi.toSignificant()):void 0,isLoading:!1}),[Xi]),tn=null===(j=(0,f.DD)(J?Pe:null,"ownerOf",[J]).result)||void 0===j?void 0:j[0],dn=P(tn,H)||P(null===Se||void 0===Se?void 0:Se.operator,H),on=Boolean(we&&H&&!dn);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(be.VD,{children:[(0,p.jsx)(K.A,{isOpen:ui,onDismiss:_i,attemptingTxn:xi,hash:vi,reviewContent:()=>(0,p.jsx)(K.Y,{title:(0,p.jsx)(t.x6,{id:"OBdohg"}),onDismiss:_i,topContent:()=>(0,p.jsx)(ye,{parsedAmounts:Je,position:qe,existingPosition:_e,priceLower:Yi,priceUpper:Li,outOfRange:ei,ticksAtLimit:di}),bottomContent:()=>(0,p.jsx)(k.$$,{style:{marginTop:"1rem"},onClick:Pi,children:(0,p.jsx)(E.EY,{fontWeight:535,fontSize:20,children:(0,p.jsx)(t.x6,{id:"m16xKo"})})})}),pendingText:Ji}),(0,p.jsxs)(Ae,{$hasExistingPosition:we,children:[(0,p.jsx)($.m,{creating:!1,adding:!0,positionID:J,autoSlippage:Ce,showBackLink:!we,children:!we&&(0,p.jsx)(M.Ay,{justifyContent:"flex-end",style:{width:"fit-content",minWidth:"fit-content"},children:(0,p.jsx)(be.OC,{children:(0,p.jsx)(k.C3,{onClick:Bi,children:(0,p.jsx)(u.PR.DeprecatedBlue,{fontSize:"12px",children:(0,p.jsx)(t.x6,{id:"yYxB17"})})})})})}),(0,p.jsx)(be.mO,{children:(0,p.jsxs)(be.W3,{wide:!we,children:[(0,p.jsxs)(_.mm,{gap:"lg",children:[!we&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(_.mm,{gap:"md",children:[(0,p.jsx)(M.JA,{paddingBottom:"20px",children:(0,p.jsx)(u.PR.DeprecatedLabel,{children:(0,p.jsx)(t.x6,{id:"nxRg31"})})}),(0,p.jsxs)(M.JA,{gap:"md",children:[(0,p.jsx)(U.A,{value:ji[F.D0.CURRENCY_A],onUserInput:oi,hideInput:!0,onMax:()=>{var e,i;oi(null!==(e=null===(i=fi[F.D0.CURRENCY_A])||void 0===i?void 0:i.toExact())&&void 0!==e?e:"")},onCurrencySelect:ki,showMaxButton:!yi[F.D0.CURRENCY_A],currency:null!==(y=Qe[F.D0.CURRENCY_A])&&void 0!==y?y:null,id:"add-liquidity-input-tokena",showCommonBases:!0}),(0,p.jsx)(U.A,{value:ji[F.D0.CURRENCY_B],hideInput:!0,onUserInput:ri,onCurrencySelect:wi,onMax:()=>{var e,i;ri(null!==(e=null===(i=fi[F.D0.CURRENCY_B])||void 0===i?void 0:i.toExact())&&void 0!==e?e:"")},showMaxButton:!yi[F.D0.CURRENCY_B],currency:null!==(b=Qe[F.D0.CURRENCY_B])&&void 0!==b?b:null,id:"add-liquidity-input-tokenb",showCommonBases:!0})]})]})," "]}),we&&_e&&(0,p.jsx)(V,{position:_e,title:(0,p.jsx)(t.x6,{id:"dWPDm3"}),inRange:!ei,ticksAtLimit:di})]}),!we&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(be.xQ,{gap:"md",disabled:!Ue||Ke,children:[(0,p.jsxs)(M.JA,{children:[(0,p.jsx)(u.PR.DeprecatedLabel,{children:(0,p.jsx)(t.x6,{id:"5CZbyC"})}),Boolean(Be&&Ie)&&(0,p.jsxs)(M.Bp,{gap:"8px",children:[(0,p.jsx)(Q,{onSetFullRange:Hi}),(0,p.jsx)(z.A,{currencyA:Be,currencyB:Ie,handleRateToggle:()=>{var e,i,n,t,d;di[F.zm.LOWER]||di[F.zm.UPPER]||(si(null!==(e=null===(i=ti?Yi:null===Li||void 0===Li?void 0:Li.invert())||void 0===i?void 0:i.toSignificant(6))&&void 0!==e?e:""),li(null!==(n=null===(t=ti?Li:null===Yi||void 0===Yi?void 0:Yi.invert())||void 0===t?void 0:t.toSignificant(6))&&void 0!==n?n:""),oi(null!==(d=ji[F.D0.CURRENCY_B])&&void 0!==d?d:""));O(`/add/${W}/${T}${Ue?"/"+Ue:""}`)}})]})]}),(0,p.jsx)(q.A,{priceLower:Yi,priceUpper:Li,getDecrementLower:Oi,getIncrementLower:zi,getDecrementUpper:Mi,getIncrementUpper:Ti,onLeftRangeInput:si,onRightRangeInput:li,currencyA:Be,currencyB:Ie,feeAmount:Ue,ticksAtLimit:di}),ei&&(0,p.jsx)(w.tL,{padding:"8px 12px",$borderRadius:"12px",children:(0,p.jsxs)(M.JA,{children:[(0,p.jsx)(a.A,{stroke:De.deprecated_yellow3,size:"16px"}),(0,p.jsx)(u.PR.DeprecatedYellow,{ml:"12px",fontSize:"12px",children:(0,p.jsx)(t.x6,{id:"b+KjnH"})})]})}),Xe&&(0,p.jsx)(w.tL,{padding:"8px 12px",$borderRadius:"12px",children:(0,p.jsxs)(M.JA,{children:[(0,p.jsx)(a.A,{stroke:De.deprecated_yellow3,size:"16px"}),(0,p.jsx)(u.PR.DeprecatedYellow,{ml:"12px",fontSize:"12px",children:(0,p.jsx)(t.x6,{id:"Jh223O"})})]})})]}),(0,p.jsx)(be.xQ,{gap:"md",disabled:!Ue||Ke,children:He?(0,p.jsxs)(_.mm,{gap:"md",children:[He&&(0,p.jsx)(w.tZ,{style:{display:"flex",flexDirection:"row",alignItems:"center",padding:"1rem 1rem"},children:(0,p.jsx)(u.PR.DeprecatedBody,{fontSize:14,style:{fontWeight:535},textAlign:"left",color:De.accent1,children:(0,p.jsx)(t.x6,{id:"X6T02b"})})}),(0,p.jsx)(w.l3,{padding:"12px",children:(0,p.jsx)(be.sQ,{className:"start-price-input",value:Oe,onUserInput:ai})}),(0,p.jsxs)(M.JA,{style:{backgroundColor:De.surface1,padding:"12px",borderRadius:"12px"},children:[(0,p.jsx)(u.PR.DeprecatedMain,{children:(0,p.jsx)(t.x6,{id:"Ay/EYV",values:{0:null===Be||void 0===Be?void 0:Be.symbol}})}),(0,p.jsx)(u.PR.DeprecatedMain,{children:We?(0,p.jsx)(u.PR.DeprecatedMain,{children:(0,p.jsxs)(M.Bp,{children:[(0,p.jsx)(B.A,{maxCharacters:20,text:ti?null===We||void 0===We||null===(I=We.invert())||void 0===I?void 0:I.toSignificant(8):null===We||void 0===We?void 0:We.toSignificant(8)})," ",(0,p.jsxs)("span",{style:{marginLeft:"4px"},children:[null===Ie||void 0===Ie?void 0:Ie.symbol," per ",null===Be||void 0===Be?void 0:Be.symbol]})]})}):"-"})]})]}):(0,p.jsx)(p.Fragment,{children:Boolean(We&&Be&&Ie&&!He)&&(0,p.jsx)(_.mm,{gap:"2px",style:{marginTop:"0.5rem"},children:(0,p.jsx)(t.x6,{id:"7k623k",values:{0:We&&(0,p.jsx)(B.A,{maxCharacters:20,text:ti?We.invert().toSignificant(6):We.toSignificant(6)}),1:Be&&(0,p.jsxs)(u.PR.DeprecatedBody,{color:"text2",fontSize:12,children:[null===Ie||void 0===Ie?void 0:Ie.symbol," per ",Be.symbol]})},components:{0:(0,p.jsx)(u.PR.DeprecatedMain,{fontWeight:535,fontSize:12,color:"text1"}),1:(0,p.jsx)(u.PR.DeprecatedBody,{fontWeight:535,fontSize:20,color:"text1"})}})})})})]}),(0,p.jsx)("div",{children:(0,p.jsx)(be.xQ,{disabled:Ke||Xe||He&&!Oe,children:(0,p.jsxs)(_.mm,{gap:"md",children:[(0,p.jsx)(u.PR.DeprecatedLabel,{children:we?(0,p.jsx)(t.x6,{id:"BRi+RY"}):(0,p.jsx)(t.x6,{id:"MU9s7M"})}),(0,p.jsx)(U.A,{value:ji[F.D0.CURRENCY_A],onUserInput:oi,onMax:()=>{var e,i;oi(null!==(e=null===(i=fi[F.D0.CURRENCY_A])||void 0===i?void 0:i.toExact())&&void 0!==e?e:"")},showMaxButton:!yi[F.D0.CURRENCY_A],currency:null!==(Y=Qe[F.D0.CURRENCY_A])&&void 0!==Y?Y:null,id:"add-liquidity-input-tokena",fiatValue:en,showCommonBases:!0,locked:ii}),(0,p.jsx)(U.A,{value:ji[F.D0.CURRENCY_B],onUserInput:ri,onMax:()=>{var e,i;ri(null!==(e=null===(i=fi[F.D0.CURRENCY_B])||void 0===i?void 0:i.toExact())&&void 0!==e?e:"")},showMaxButton:!yi[F.D0.CURRENCY_B],fiatValue:nn,currency:null!==(L=Qe[F.D0.CURRENCY_B])&&void 0!==L?L:null,id:"add-liquidity-input-tokenb",showCommonBases:!0,locked:ni})]})})}),(0,p.jsx)(Zi,{})]})})]}),on&&(0,p.jsx)(v,{ownerAddress:tn}),Ui&&(0,p.jsx)(g.A,{show:Ui,currencies:[Qe.CURRENCY_A,Qe.CURRENCY_B]})]}),(0,p.jsx)(Z.j,{})]})}},42789:(e,i,n)=>{n.d(i,{A:()=>y});var t=n(19984),d=n(54644),o=n(50645),r=n(21959),s=n(75423),l=n(87014),a=n(70464),c=n(12763),u=n(54674),p=n(96410),x=n(33121),h=n(3405),m=n(17567),v=n(17516),g=n(33370);const j=p.default.div`
  padding-top: calc(16px + 2rem);
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -2rem;
  width: 100%;
  max-width: 400px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${({theme:e})=>e.neutral2};
  background-color: ${({theme:e})=>e.surface2};
  z-index: ${h.M.deprecated_zero};

  transform: ${({show:e})=>e?"translateY(0%)":"translateY(-100%)"};
  transition: transform 300ms ease-in-out;
  text-align: center;
`,R=(0,p.default)(o.Wv)`
  text-decoration: none;
`,f=(0,p.default)(x.PR.DeprecatedBlue)`
  font-size: 12px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 10px;
`}
`;function y({show:e,currencies:i}){const{chainId:n}=(0,d.useWeb3React)(),[o,p]=(0,u.useState)(!1),h=n&&i?i.map(e=>null===e||void 0===e?void 0:e.wrapped):[],y=(0,m.rN)();return(0,g.jsxs)(j,{show:e,children:[(0,g.jsx)(a.A,{isOpen:o,onDismiss:()=>p(!1),children:(0,g.jsx)(r.Ay,{padding:"2rem",children:(0,g.jsxs)(s.mm,{gap:"lg",children:[(0,g.jsxs)(c.JA,{children:[(0,g.jsx)(x.PR.DeprecatedMediumHeader,{children:(0,g.jsx)(t.x6,{id:"7Osz32"})}),(0,g.jsx)(x.US,{onClick:()=>p(!1),"data-testid":"close-icon"})]}),h.map(e=>{var i;return e&&y&&Object.keys(y).includes(e.address)&&(0,g.jsx)(r.l3,{"data-testid":"unsupported-token-card",children:(0,g.jsxs)(s.mm,{gap:"10px",children:[(0,g.jsxs)(c.eF,{gap:"5px",align:"center",children:[(0,g.jsx)(l.A,{currency:e,size:"24px"}),(0,g.jsx)(x.PR.DeprecatedBody,{fontWeight:535,children:e.symbol})]}),n&&(0,g.jsx)(x.Gr,{href:(0,v.a)(n,e.address,v.u.ADDRESS),children:(0,g.jsx)(f,{children:e.address})})]})},null===(i=e.address)||void 0===i?void 0:i.concat("not-supported"))}),(0,g.jsx)(s.mm,{gap:"lg",children:(0,g.jsx)(x.PR.DeprecatedBody,{fontWeight:535,children:(0,g.jsx)(t.x6,{id:"l7X7DE"})})})]})})}),(0,g.jsx)(R,{padding:"0",onClick:()=>p(!0),"data-testid":"read-more-button",children:(0,g.jsx)(x.PR.DeprecatedBlue,{children:(0,g.jsx)(t.x6,{id:"bIjYSY"})})})]})}},53947:(e,i,n)=>{n.d(i,{U:()=>b,m:()=>A});var t=n(19984),d=n(54644),o=n(86642),r=n(41019),s=n(4126),l=n(85713),a=n(92947),c=n(26467),u=n(56119),p=n(11577),x=n(96410),h=n(33121),m=n(73141),v=n(12763),g=n(33370);const j=x.default.div`
  ${m.BI};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,R=(0,x.default)(s.N_)`
  flex: ${({flex:e})=>null!==e&&void 0!==e?e:"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,f=(0,x.default)(h.PR.SubHeaderLarge)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,y=(0,x.default)(r.A)`
  color: ${({theme:e})=>e.neutral1};
`;function b({origin:e}){return(0,g.jsx)(j,{children:(0,g.jsxs)(v.JA,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,g.jsx)(s.N_,{to:e,children:(0,g.jsx)(y,{})}),(0,g.jsx)(f,{children:(0,g.jsx)(t.x6,{id:"LCFvJr"})})]})})}const C=(0,x.default)(h.PR.SubHeaderLarge)`
  flex: 1;
  margin: auto;
`;function A({adding:e,creating:i,autoSlippage:n,positionID:r,children:s}){const{chainId:h}=(0,d.useWeb3React)(),m=(0,x.useTheme)(),f=(0,c.j)(),b=(0,l.zy)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(r?`/${r.toString()}`:"");return(0,g.jsx)(j,{children:(0,g.jsxs)(v.JA,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,g.jsx)(R,{to:b,onClick:()=>{e&&(f((0,u.JE)()),f((0,p.JE)()))},flex:s?"1":void 0,children:(0,g.jsx)(y,{stroke:m.neutral2})}),(0,g.jsx)(C,{textAlign:s?"start":"center",children:i?(0,g.jsx)(t.x6,{id:"ma87bD"}):e?(0,g.jsx)(t.x6,{id:"E6MqGy"}):(0,g.jsx)(t.x6,{id:"cJtosk"})}),s&&(0,g.jsx)(a.az,{style:{marginRight:".5rem"},children:s}),(0,g.jsx)(o.A,{autoSlippage:n,chainId:h})]})})}},70694:(e,i,n)=>{n.d(i,{A:()=>B});var t=n(19984),d=n(54644),o=n(18223),r=n(9157),s=n(24523),l=n(54674),a=n(96410),c=n(33121),u=n(73141),p=n(80672),x=n(49225),h=n(23843),m=n(50645),v=n(20295),g=n(87014),j=n(86724),R=n(12763),f=n(462),y=n(17176),b=n(33370);const C=a.default.div`
  ${u.ZZ};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:i})=>i?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,A=a.default.div`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:i,disabled:n})=>!n&&`\n    :focus,\n    :hover {\n      border: 1px solid ${i?" transparent":e.surface2};\n    }\n  `}
`,D=(0,a.default)(m.EA)`
  align-items: center;
  background-color: ${({selected:e,theme:i})=>e?i.surface1:i.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:i})=>e?i.neutral1:i.white};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${({hideInput:e})=>e?"2.8rem":"2.4rem"};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${({hideInput:e})=>e?"0":"12px"};
  :focus,
  :hover {
    background-color: ${({selected:e,theme:i})=>e?i.surface2:(0,s.e$)(.05,i.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,E=a.default.div`
  ${u.BI};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,N=a.default.div`
  ${u.BI};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,s.e$)(.2,e.neutral2)};
  }
`,P=(0,a.default)(N)`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,S=a.default.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,k=(0,a.default)(x.h)`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:i})=>e?i.neutral1:i.white};
    stroke-width: 1.5px;
  }
`,w=a.default.span`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
`,_=a.default.button`
  background-color: transparent;
  background-color: ${({theme:e})=>e.accent2};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accent1};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${({disabled:e})=>e?.4:1};
  padding: 4px 6px;
  pointer-events: ${({disabled:e})=>e?"none":"initial"};

  :hover {
    opacity: ${({disabled:e})=>e?.4:.8};
  }

  :focus {
    outline: none;
  }
`,U=(0,a.default)(j.p)`
  ${o.fp};
  text-align: left;
`;function B({value:e,onUserInput:i,onMax:n,showMaxButton:s,onCurrencySelect:u,currency:x,otherCurrency:m,id:j,showCommonBases:N,showCurrencyAmount:B,disableNonToken:$,renderBalance:I,fiatValue:Y,hideBalance:L=!1,pair:O=null,hideInput:z=!1,locked:M=!1,loading:T=!1,...W}){const[F,G]=(0,l.useState)(!1),{account:J,chainId:V}=(0,d.useWeb3React)(),q=(0,h.rL)(null!==J&&void 0!==J?J:void 0,null!==x&&void 0!==x?x:void 0),H=(0,a.useTheme)(),Q=(0,l.useCallback)(()=>{G(!1)},[G]),Z=(0,r.Gv)(V);return(0,b.jsxs)(C,{id:j,hideInput:z,...W,children:[!M&&(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(A,{hideInput:z,disabled:!Z,children:[(0,b.jsxs)(E,{style:z?{padding:"0",borderRadius:"8px"}:{},selected:!u,children:[!z&&(0,b.jsx)(U,{className:"token-amount-input",value:e,onUserInput:i,disabled:!Z,$loading:T}),(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(D,{disabled:!Z,visible:void 0!==x,selected:!!x,hideInput:z,className:"open-currency-select-button",onClick:()=>{u&&G(!0)},pointerEvents:u?void 0:"none",children:(0,b.jsxs)(S,{children:[(0,b.jsxs)(R.Bp,{children:[O?(0,b.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,b.jsx)(v.A,{currency0:O.token0,currency1:O.token1,size:24,margin:!0})}):x&&(0,b.jsx)(g.A,{style:{marginRight:"0.5rem"},currency:x,size:"24px"}),O?(0,b.jsxs)(w,{className:"pair-name-container",children:[null===O||void 0===O?void 0:O.token0.symbol,":",null===O||void 0===O?void 0:O.token1.symbol]}):(0,b.jsx)(w,{className:"token-symbol-container",active:Boolean(x&&x.symbol),children:(x&&x.symbol&&x.symbol.length>20?x.symbol.slice(0,4)+"..."+x.symbol.slice(x.symbol.length-5,x.symbol.length):null===x||void 0===x?void 0:x.symbol)||(0,b.jsx)(t.x6,{id:"T0Y2+3"})})]}),u&&(0,b.jsx)(k,{selected:!!x})]})})})]}),Boolean(!z&&!L&&x)&&(0,b.jsx)(P,{children:(0,b.jsxs)(R.JA,{children:[(0,b.jsx)(o.N3,{$loading:T,children:Y&&(0,b.jsx)(y.s,{fiatValue:Y})}),J&&(0,b.jsxs)(R.Bp,{style:{height:"17px"},children:[(0,b.jsx)(c.PR.DeprecatedBody,{onClick:n,color:H.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!L&&x&&q)&&((null===I||void 0===I?void 0:I(q))||(0,b.jsx)(t.x6,{id:"VuFd5C",values:{0:(0,p.N)(q,4)}}))}),Boolean(s&&q)&&(0,b.jsx)(_,{onClick:n,children:(0,b.jsx)(t.x6,{id:"4HtGBb"})})]})]})})]})}),u&&(0,b.jsx)(f.A,{isOpen:F,onDismiss:Q,onCurrencySelect:u,selectedCurrency:x,otherSelectedCurrency:m,showCommonBases:N,showCurrencyAmount:B,disableNonToken:$})]})}}}]);
//# sourceMappingURL=604.8814a64d.chunk.js.map