(this.webpackJsonpshazu=this.webpackJsonpshazu||[]).push([[14],{1027:function(e,t,n){"use strict";n.d(t,"a",(function(){return U}));var i=n(5),a=n(13),c=n(12),r=n(73),s=n(0),o=n(1028),l=n.n(o),d=n(993),j=n(596),m=n(313),u=n(975),b=n(1015),h=n(1013),O=n(1017),f=n(1003),g=n(1029),x=n(1099),p=n(58),y=n(1030),v=n(136),S=n(1031),w=n(1032),N=n(1033),C=n(932),B=n(1225),D=n(1025),k=n(1),I={loop:!1,autoplay:!0,animationData:S,background:"transparent"},T={loop:!1,autoplay:!0,animationData:w,background:"transparent"},L={padding:"0.25rem",borderRadius:"10rem",width:"2.4rem",height:"2.4rem",minWidth:"unset"},A={padding:"0.4rem",borderRadius:"8px",width:"2.2rem",height:"2.2rem",minWidth:"unset"},R=Object(c.a)(d.a)({"& label.Mui-focused":{color:"white"},"& .MuiInput-underline:after":{borderBottomColor:"white"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#3B3B3B"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"white"}}});function U(e){var t=Object(C.a)().account,n=Object(B.a)(D.p,"transferFrom",{transactionName:"Transfer SHAZU NFT"}),c=n.state,o=n.send,d=Object(s.useState)(!1),S=Object(a.a)(d,2),w=S[0],U=S[1],E=Object(s.useState)(!1),W=Object(a.a)(E,2),H=W[0],P=W[1];Object(s.useEffect)((function(){"Exception"===c.status&&U(!1),"Fail"===c.status&&U(!1),c.status,"Success"===c.status&&(U(!0),P(!0))}),[c,t]);var z=Object(r.a)(),Z={borderRadius:z.shape.borderRadiusMd,backgroundColor:"#1C1C1C",border:"solid 1px",borderColor:"#3B3B3B",padding:"0.5rem 0.8rem",transition:"border-color 0.3s",maxWidth:e.big?"25rem":"17rem",marginLeft:"auto",marginRight:"auto",textAlign:"left"};function F(){return"Common"===e.collection.nft.rarity?"gradient-border-yellow":"Rare"===e.collection.nft.rarity?"gradient-border-blue":"Super Rare"===e.collection.nft.rarity?"gradient-border-green":"Ultimate Rare"===e.collection.nft.rarity?"gradient-border-purple":void 0}var _={position:"absolute",padding:"0.1rem 0.5rem",borderRadius:"4px",background:"Common"===e.collection.nft.rarity?"var(--shazu-yellow)":"Rare"===e.collection.nft.rarity?"var(--shazu-blue)":"Super Rare"===e.collection.nft.rarity?"var(--shazu-green)":"Ultimate Rare"===e.collection.nft.rarity?"linear-gradient(90deg, rgba(236,35,255,1) 0%, rgba(166,37,255,1) 34%, rgba(173,0,255,1) 100%)":void 0,color:"Ultimate Rare"!==e.collection.nft.rarity?"black":"white",fontSize:"0.8rem",top:"-3rem",left:"-0.5rem",transform:"rotate(-12deg)",width:"max-content"},M=Object(s.useState)(null),J=Object(a.a)(M,2),G=J[0],$=J[1],q=Object(g.a)(N.a),Y=Object(a.a)(q,2),K=Y[0],Q=(Y[1].stopPopDingSound,Object(s.useState)(!1)),V=Object(a.a)(Q,2),X=V[0],ee=V[1],te=Object(s.useState)(!1),ne=Object(a.a)(te,2),ie=ne[0],ae=ne[1],ce=Object(s.useState)(""),re=Object(a.a)(ce,2),se=re[0],oe=re[1],le=Object(s.useState)(""),de=Object(a.a)(le,2),je=de[0],me=de[1],ue=Object(s.useState)(!1),be=Object(a.a)(ue,2),he=be[0],Oe=be[1];Object(s.useEffect)((function(){Oe(function(){try{return Object(x.a)(je),!0}catch(e){return!1}}())}),[je]);var fe=Object(s.useState)(null),ge=Object(a.a)(fe,2),xe=ge[0],pe=ge[1],ye=Object(s.useState)({open:!1,success:!1}),ve=Object(a.a)(ye,2),Se=ve[0],we=ve[1],Ne=Object(s.useState)(""),Ce=Object(a.a)(Ne,2),Be=Ce[0],De=Ce[1],ke=Object(s.useState)(""),Ie=Object(a.a)(ke,2),Te=Ie[0],Le=Ie[1],Ae=Object(s.useState)(""),Re=Object(a.a)(Ae,2),Ue=Re[0],Ee=Re[1];return e.unknown?Object(k.jsx)("div",{style:{height:"100%"},children:Object(k.jsxs)(j.a,{className:"gradient-border p-relative ".concat(F()),style:Z,children:[Object(k.jsxs)("div",{style:{visibility:"hidden"},children:[Object(k.jsx)("div",{style:{width:"100%",borderRadius:z.shape.borderRadiusMd,marginTop:"0.5rem",marginBottom:"0.5em"},children:Object(k.jsx)("video",{className:"vid",playsInline:!0,muted:!0,autoPlay:!0,loop:!0,style:{width:"100%",borderRadius:"8px",aspectRatio:"1"},children:Object(k.jsx)("source",{src:e.collection.nft.video,type:"video/mp4"})})}),Object(k.jsx)("div",{style:{position:"relative",height:"0",width:"0"},children:Object(k.jsx)("div",{style:_,children:e.collection.nft.rarity})}),Object(k.jsx)(m.a,{variant:"h6",style:{fontWeight:"700",marginBottom:"0.8rem"},children:e.collection.nft.name}),(e.amount||0!==e.amount||null!==e.amount)&&Object(k.jsx)("div",{className:"p-relative w-100",children:Object(k.jsxs)("div",{className:"nft-card-amount",children:["x",e.amount]})})]}),Object(k.jsxs)("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",opacity:"0.2"},children:[Object(k.jsx)(m.a,{style:{fontSize:"4rem"},children:"?"}),Object(k.jsx)(m.a,{children:"Not owned yet"})]})]})}):e.sold?Object(k.jsx)("div",{children:Object(k.jsxs)(j.a,{className:"gradient-border ".concat(F()),style:Object(i.a)(Object(i.a)({},Z),{},{position:"relative"}),children:[Object(k.jsx)("div",{style:{width:"100%",borderRadius:z.shape.borderRadiusMd,marginTop:"0.5rem",marginBottom:"0.5em"},children:Object(k.jsx)("video",{className:"vid",playsInline:!0,muted:!0,autoPlay:!0,loop:!0,style:{width:"100%",borderRadius:"8px",aspectRatio:"1"},children:Object(k.jsx)("source",{src:e.collection.nft.video,type:"video/mp4"})})}),Object(k.jsx)("div",{style:{position:"relative",height:"0",width:"0"},children:Object(k.jsx)("div",{style:_,children:e.collection.nft.rarity})}),Object(k.jsxs)(u.a,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"0.8rem"},children:[Object(k.jsxs)(u.a,{children:[Object(k.jsx)(m.a,{variant:"h6",style:{fontWeight:"700",marginBottom:"0.8rem"},children:e.collection.nft.name}),"undefined"!==typeof e.collection.id&&Object(k.jsxs)(m.a,{style:{opacity:"0.5",fontSize:"0.8rem",marginTop:"-1rem"},children:["id: ",e.collection.id]})]}),"undefined"!==typeof e.collection.description&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(b.a,{variant:"container",style:L,onClick:function(e){return $(e.currentTarget)},children:Object(k.jsx)("img",{src:"/static/SHAZU/icons/info.svg",className:"pe-none",alt:"",style:{width:"100%",opacity:"0.5"}})}),Object(k.jsx)(h.a,{open:Boolean(G),anchorEl:G,onClose:function(){return $(null)},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"center"},PaperProps:{sx:{p:1,maxWidth:200}},children:e.collection.description})]})]}),"undefined"!==typeof e.amount&&Object(k.jsx)("div",{className:"p-relative w-100",children:Object(k.jsxs)("div",{className:"nft-card-amount",children:["x",e.amount]})}),Object(k.jsx)("div",{className:"sold-overlay",children:Object(k.jsx)("img",{src:"/static/SHAZU/misc/sold-tape.png",alt:""})})]})}):Object(k.jsxs)("div",{children:[Object(k.jsx)(v.b,{open:X,maxWidth:"xs",animate:v.j,scroll:"paper",onClose:function(){ee(!1),me("")},children:Object(k.jsxs)(O.a,{style:{textAlign:"center"},children:[Object(k.jsx)("div",{className:"successCheck-lottie-container",children:Object(k.jsx)(l.a,{options:I,isClickToPauseDisabled:!0})}),Object(k.jsx)(m.a,{variant:"h3",children:"Transfer Successful!"}),Object(k.jsx)("div",{className:"elevate-card",children:Object(k.jsxs)(m.a,{variant:"h6",children:["Transferred to: ",Object(k.jsx)("br",{}),Object(k.jsx)("a",{href:"https://bscscan.com/address/".concat(je),rel:"noreferrer",target:"_blank",children:se})]})})]})}),Object(k.jsx)(v.b,{open:ie,maxWidth:"xs",animate:v.j,scroll:"paper",onClose:function(){ae(!1)},children:Object(k.jsxs)(O.a,{style:{textAlign:"center"},children:[Object(k.jsx)("div",{className:"successCheck-lottie-container",children:Object(k.jsx)(l.a,{options:T,isClickToPauseDisabled:!0})}),Object(k.jsx)(m.a,{variant:"h3",children:"Transfer Failed"})]})}),Object(k.jsxs)(j.a,{className:"gradient-border ".concat(F()),style:Z,children:["undefined"!==typeof e.collection.saleData&&e.editListingAction&&Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{className:"p-relative w-100",children:Object(k.jsx)("img",{src:"/static/SHAZU/misc/sale-sticker.svg",alt:"",className:"swing-rotate-normal",style:{position:"absolute",width:"6rem",right:"-2.4rem",top:"-2.4rem"}})})}),Object(k.jsx)("div",{style:{width:"100%",borderRadius:z.shape.borderRadiusMd,marginTop:"0.5rem",marginBottom:"0.5em"},children:Object(k.jsx)("video",{className:"vid",playsInline:!0,muted:!0,autoPlay:!0,loop:!0,style:{width:"100%",borderRadius:"8px",aspectRatio:"1"},children:Object(k.jsx)("source",{src:e.collection.nft.video,type:"video/mp4"})})}),Object(k.jsx)("div",{style:{position:"relative",height:"0",width:"0"},children:Object(k.jsx)("div",{style:_,children:e.collection.nft.rarity})}),Object(k.jsxs)(u.a,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"0.8rem"},children:[Object(k.jsxs)(u.a,{children:[Object(k.jsx)(m.a,{variant:"h6",style:{fontWeight:"700",marginBottom:"0.8rem"},children:e.collection.nft.name}),"undefined"!==typeof e.collection.id&&Object(k.jsxs)(m.a,{style:{opacity:"0.5",fontSize:"0.8rem",marginTop:"-1rem"},children:["id: ",e.collection.id]})]}),"undefined"!==typeof e.collection.description&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(b.a,{variant:"container",style:L,onClick:function(e){return $(e.currentTarget)},children:Object(k.jsx)("img",{src:"/static/SHAZU/icons/info.svg",className:"pe-none",alt:"",style:{width:"100%",opacity:"0.5"}})}),Object(k.jsx)(h.a,{open:Boolean(G),anchorEl:G,onClose:function(){return $(null)},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"center"},PaperProps:{sx:{p:1,maxWidth:200}},children:e.collection.description})]})]}),e.ownedAction&&!H&&Object(k.jsx)("div",{className:"nft-owned-action shadow-sm",children:Object(k.jsx)(u.a,{direction:"row",spacing:2,justifyContent:"space-between",alignItems:"center",children:Object(k.jsxs)(u.a,{direction:"row",spacing:1,style:{width:"100%"},children:[Object(k.jsx)(b.a,{onClick:function(e){pe(e.currentTarget)},variant:"contained",color:"yellow",className:"nft-owned-action-btn",children:"Transfer"}),Object(k.jsx)(h.a,{open:Boolean(xe),anchorEl:xe,onClose:function(){pe(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(k.jsxs)(j.a,{sx:{p:2,maxWidth:"30rem",width:"90vw"},children:[Object(k.jsx)(m.a,{variant:"subtitle1",gutterBottom:!0,children:"Destination Address"}),Object(k.jsx)(R,{fullWidth:!0,type:"search",size:"small",onChange:function(e){me(e.target.value)}}),Object(k.jsxs)(m.a,{variant:"body2",sx:{color:"text.secondary",marginTop:"0.2rem"},children:[e.collection.nft.name," (",e.collection.id,")"]}),Object(k.jsx)(b.a,{disabled:!he||w,variant:"contained",color:"yellow",onClick:function(){return""===je||null===je?(alert("Fill the Destination Address first!"),!1):je===t?(alert("You cannot send token to yourself!"),!1):(o(t,je,e.collection.id),oe(Object(x.a)(je)),void U(!0))},style:{marginTop:"2rem",width:"100%"},children:w?"Transferring":"Transfer"})]})}),Object(k.jsx)(b.a,{onClick:function(t){var n=JSON.parse(t.target.value);console.info(n),e.handleOpenListingDialog(n)},value:JSON.stringify(e.collection),variant:"contained",color:"success",className:"nft-owned-action-btn",children:"List"})]})})}),"undefined"!==typeof e.amount&&Object(k.jsx)("div",{className:"p-relative w-100",children:Object(k.jsxs)("div",{className:"nft-card-amount",children:["x",e.amount]})}),"undefined"!==typeof e.collection.saleData&&e.editListingAction&&Object(k.jsx)("div",{className:"p-relative w-100",children:Object(k.jsx)("div",{className:"nft-sale-info shadow-sm",children:Object(k.jsxs)(u.a,{direction:"row",spacing:2,justifyContent:"space-between",alignItems:"center",children:[Object(k.jsxs)(u.a,{children:[Object(k.jsx)("div",{className:"nft-sale-caption",children:"Listing price"}),Object(k.jsxs)(u.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(k.jsxs)("div",{children:[e.collection.saleData.price," ",e.collection.saleData.currency]}),"BNB"===e.collection.saleData.currency&&Object(k.jsx)("img",{src:"/static/SHAZU/icons/ic_bnb.svg",alt:"",style:{width:"1rem",height:"1rem",marginLeft:"0.2rem",marginBottom:"0.2rem"}}),"SHAZU"===e.collection.saleData.currency&&Object(k.jsx)("img",{src:"/static/SHAZU/icons/ic_shazu.png",alt:"",style:{width:"1rem",height:"1rem",marginLeft:"0.2rem",marginBottom:"0.2rem"}})]})]}),Object(k.jsx)(b.a,{variant:"container",value:JSON.stringify(e.collection),style:A,onClick:function(t){var n=JSON.parse(t.target.value);e.handleOpenEditListingDialog(n)},children:Object(k.jsx)("img",{src:"/static/SHAZU/icons/edit.svg",className:"pe-none",alt:"",style:{width:"100%",opacity:"0.5"}})})]})})}),"undefined"!==typeof e.collection.marketData&&e.marketplaceListing&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"elevate-card-sm",style:{marginBottom:"1rem"},children:Object(k.jsxs)(u.a,{direction:"column",justifyContent:"space-between",children:[Object(k.jsx)("div",{style:{fontSize:"0.8rem"},children:"Price:"}),Object(k.jsxs)(u.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(k.jsxs)("div",{style:{fontSize:"1rem",fontWeight:"700"},children:[e.collection.saleData.price," ",e.collection.saleData.currency]}),"BNB"===e.collection.saleData.currency&&Object(k.jsx)("img",{src:"/static/SHAZU/icons/ic_bnb.svg",alt:"",style:{width:"1.2rem",height:"1.2rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}}),"SHAZU"===e.collection.saleData.currency&&Object(k.jsx)("img",{src:"/static/SHAZU/icons/ic_shazu.png",alt:"",style:{width:"1.2rem",height:"1.2rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}})]})]})}),Object(k.jsx)(u.a,{direction:"column",justifyContent:"space-between",style:{marginBottom:"0.8rem",marginTop:"-0.2rem"},children:Object(k.jsx)("div",{style:{fontSize:"0.8rem",textAlign:"right"},children:Object(k.jsxs)(u.a,{direction:"row",alignItems:"center",justifyContent:"end",spacing:1,children:[Object(k.jsx)("div",{children:"Floor Price:"}),Object(k.jsxs)(u.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(k.jsxs)("span",{style:{fontWeight:"700"},children:[e.collection.marketData.floorPrice," ",e.collection.marketData.currency]}),"BNB"===e.collection.marketData.currency&&Object(k.jsx)("img",{src:"/static/SHAZU/icons/ic_bnb.svg",alt:"",style:{width:"1rem",height:"1rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}}),"SHAZU"===e.collection.marketData.currency&&Object(k.jsx)("img",{src:"/static/SHAZU/icons/ic_shazu.png",alt:"",style:{width:"1rem",height:"1rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}})]})]})})}),Object(k.jsxs)(u.a,{direction:"row",spacing:1,children:[Object(k.jsx)(f.a,{style:{width:"50%"},className:"no-hover-line",component:p.c,to:"/marketplace/detail/".concat(e.collection.id),children:Object(k.jsx)(b.a,{variant:"outlined",color:"yellow",style:{width:"100%"},children:"Details"})}),Object(k.jsx)(b.a,{onClick:function(e){var t,n,i=JSON.parse(e.target.value);t="Buy NFT Successful",n="id: ".concat(i.nftId),K(),De(t),Le(n),we({open:!0,success:!0})},value:JSON.stringify(e.collection),variant:"contained",color:"success",style:{width:"50%"},children:"Buy"})]}),Object(k.jsx)(v.b,{open:Se.open,maxWidth:"xs",animate:v.j,scroll:"paper",onClose:function(){we(Object(i.a)(Object(i.a)({},Se),{},{open:!1})),De(""),Ee("")},children:Object(k.jsxs)(O.a,{style:{textAlign:"center"},children:[Se.success?Object(k.jsx)("div",{className:"successCheck-lottie-container",children:Object(k.jsx)(l.a,{options:I,isClickToPauseDisabled:!0})}):Object(k.jsx)("div",{className:"successCheck-lottie-container",children:Object(k.jsx)(l.a,{options:T,isClickToPauseDisabled:!0})}),Object(k.jsx)(m.a,{variant:"h3",children:Be}),Se.success?Object(k.jsx)("div",{className:"elevate-card",children:Object(k.jsx)(m.a,{variant:"h5",children:Te})}):Object(k.jsx)("div",{children:Ue})]})})]}),"undefined"!==typeof e.collection.topSaleData&&e.topSale&&Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{className:"elevate-card",style:{marginBottom:"0.4rem",marginTop:"-0.4rem"},children:Object(k.jsxs)(u.a,{alignItems:"center",children:[Object(k.jsxs)("div",{style:{fontSize:"1.2rem",fontWeight:"700"},children:[e.collection.topSaleData.price," ",e.collection.topSaleData.currency]}),Object(k.jsxs)("div",{children:["$",Object(y.a)(e.collection.topSaleData.inUSD)]})]})})})]})]})}},1169:function(e,t){},1215:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return re}));var i=n(1022),a=n(975),c=n(313),r=n(989),s=n(12),o=(n(181),n(403)),l=n(136),d=n(13),j=n(1001),m=n(1015),u=n(591),b=n(1205),h=n(1216),O=n(0),f=n(1051),g=n(932),x=function(e,t){var n=Object(O.useRef)(!1);Object(O.useEffect)((function(){n.current?e():n.current=!0}),t)},p=n(1017),y=n(1222),v=n(1226),S=n(993),w=n(1003),N=n(1028),C=n.n(N),B=n(1029),D=n(58),k=n(1027),I=n(1031),T=n(1032),L=n(1033),A=n(1225),R=n(1025),U=n(1),E=function(e){var t=Object(O.useState)(!0),n=Object(d.a)(t,2),i=n[0],a=n[1],c=Object(O.useState)("Remove Listing"),r=Object(d.a)(c,2),s=r[0],o=r[1],l=Object(A.a)(R.n,"cancelOffer",{transactionName:"Cancel Offer"}),j=l.state,u=l.send;Object(O.useEffect)((function(){"Exception"!==j.status&&"Fail"!==j.status||(a(!1),o("Remove Listing")),"None"===j.status&&(a(!1),o("Remove Listing")),"Success"===j.status&&o("Remove Listing"),"Mining"===j.status&&(a(!0),o("Removing..."))}),[j]);return Object(U.jsx)(m.a,{color:"error",onClick:function(){a(!0),u(e.tokenId)},variant:"contained",disabled:i,children:s})},W=n(928),H={loop:!1,autoplay:!0,animationData:I,background:"transparent"},P={loop:!1,autoplay:!0,animationData:T,background:"transparent"};function z(e){var t=e.items,n=(e.index,Object(B.a)(L.a)),s=Object(d.a)(n,2),o=(s[0],s[1].stopPopDingSound,Object(g.a)().account),u=Object(O.useState)("BNB"),b=Object(d.a)(u,2),h=b[0],f=b[1],x=Object(O.useState)(0),N=Object(d.a)(x,2),I=N[0],T=N[1],z=Object(O.useState)(""),Z=Object(d.a)(z,2),F=Z[0],_=Z[1],M=Object(O.useState)(""),J=Object(d.a)(M,2),G=J[0],$=J[1],q=function(e){T(e.target.value)},Y=function(e,t){f(t)},K=Object(O.useState)(!1),Q=Object(d.a)(K,2),V=Q[0],X=Q[1],ee=Object(O.useState)(!1),te=Object(d.a)(ee,2),ne=te[0],ie=te[1],ae=function(e){var t=e;_(t),f(t.saleData.currency),T(t.saleData.price),$(t.saleData.saleId),X(!0)},ce=Object(O.useState)(!1),re=Object(d.a)(ce,2),se=re[0],oe=re[1],le=Object(O.useState)(!1),de=Object(d.a)(le,2),je=de[0],me=de[1],ue=Object(O.useState)(!1),be=Object(d.a)(ue,2),he=be[0],Oe=be[1],fe=Object(O.useState)(!1),ge=Object(d.a)(fe,2),xe=ge[0],pe=ge[1],ye=function(e){_(e),f("BNB"),T(""),me(!0)},ve=Object(A.a)(R.n,"makeOffer",{transactionName:"Make Offer"}),Se=ve.state,we=ve.send,Ne=Object(O.useState)(!1),Ce=Object(d.a)(Ne,2),Be=Ce[0],De=Ce[1];Object(O.useEffect)((function(){"Exception"===Se.status&&De(!1),"Fail"===Se.status&&De(!1),Se.status,"Success"===Se.status&&De(!0)}),[Se,o]);return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(i.a,{maxWidth:"xl",children:Object(U.jsx)(j.a,{container:!0,spacing:4,alignItems:"stretch",direction:"row",justifyContent:"flex-start",style:{marginTop:"2rem"},children:t.map((function(e,t){return"owned"===e.status?Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(j.a,{item:!0,xs:12,sm:6,md:4,lg:3,xl:3,style:{marginBottom:"1rem"},children:Object(U.jsx)(r.a.div,{variants:l.h,children:Object(U.jsx)(k.a,{ownedAction:!0,collection:e,handleOpenListingDialog:ye})},"".concat(t))})}):"listed"===e.status?Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(j.a,{item:!0,xs:12,sm:6,md:4,lg:3,xl:3,style:{marginBottom:"1rem"},children:Object(U.jsx)(r.a.div,{variants:l.h,children:Object(U.jsx)(k.a,{editListingAction:!0,collection:e,handleOpenEditListingDialog:ae})},"".concat(t))})}):"sold"===e.status?Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(j.a,{item:!0,xs:12,sm:6,md:4,lg:3,xl:3,style:{marginBottom:"1rem"},children:Object(U.jsx)(r.a.div,{variants:l.h,children:Object(U.jsx)(k.a,{sold:!0,collection:e})},"".concat(t))})}):""}))})}),Object(U.jsx)(l.b,{fullWidth:!0,maxWidth:"md",open:V,animate:l.j,children:Object(U.jsxs)(p.a,{style:{position:"relative",zIndex:"3"},children:[Object(U.jsxs)(j.a,{spacing:3,container:!0,alignItems:"stretch",direction:"row",justifyContent:"flex-start",children:[Object(U.jsx)(j.a,{item:!0,xs:12,md:12,lg:4,xl:4,children:Object(U.jsx)(k.a,{collection:F})}),Object(U.jsx)(j.a,{item:!0,xs:12,md:12,lg:8,xl:8,children:Object(U.jsxs)(a.a,{style:{height:"100%",minHeight:"14rem"},children:[Object(U.jsx)(c.a,{variant:"h6",style:{marginBottom:"0.4rem"},children:"Listing Currency"}),Object(U.jsxs)(y.a,{value:h,exclusive:!0,onChange:Y,disabled:!0,children:[Object(U.jsx)(v.a,{className:"listing-currency-toggle listing-currency-bnb",value:"BNB",style:{minWidth:"5rem"},children:Object(U.jsxs)(a.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(U.jsx)("div",{children:"BNB"}),Object(U.jsx)("img",{src:"/static/SHAZU/icons/ic_bnb.svg",alt:"",style:{width:"1rem",height:"1rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}})]})}),Object(U.jsx)(v.a,{className:"listing-currency-toggle listing-currency-shazu",value:"SHAZU",style:{minWidth:"5rem"},children:Object(U.jsxs)(a.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(U.jsx)("div",{children:"SHAZU"}),Object(U.jsx)("img",{src:"/static/SHAZU/icons/ic_shazu.png",alt:"",style:{width:"1rem",height:"1rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}})]})})]}),Object(U.jsx)(S.a,{onChange:q,value:I,color:"yellow",variant:"standard",label:"Price (".concat(h,")"),type:"number",className:"border-field-input",style:{marginTop:"2rem",maxWidth:"14rem",marginBottom:"2rem"},disabled:!0}),Object(U.jsx)(a.a,{direction:"column",spacing:2,children:Object(U.jsx)(E,{tokenId:G})})]})})]}),Object(U.jsx)(a.a,{style:{marginTop:"2rem"},children:Object(U.jsx)(m.a,{onClick:function(){X(!1),f("BNB"),T(0)},variant:"container",style:{marginLeft:"auto"},children:"Close"})})]})}),Object(U.jsx)(l.b,{fullWidth:!0,maxWidth:"md",open:je,animate:l.j,children:Object(U.jsxs)(p.a,{style:{position:"relative",zIndex:"3"},children:[Object(U.jsxs)(j.a,{spacing:3,container:!0,alignItems:"stretch",direction:"row",justifyContent:"flex-start",children:[Object(U.jsx)(j.a,{item:!0,xs:12,md:12,lg:4,xl:4,children:Object(U.jsx)(k.a,{collection:F})}),Object(U.jsx)(j.a,{item:!0,xs:12,md:12,lg:8,xl:8,children:Object(U.jsxs)(a.a,{style:{height:"100%",minHeight:"14rem"},children:[Object(U.jsx)(c.a,{variant:"h6",style:{marginBottom:"0.4rem"},children:"Listing Currency"}),Object(U.jsxs)(y.a,{value:h,exclusive:!0,onChange:Y,children:[Object(U.jsx)(v.a,{className:"listing-currency-toggle listing-currency-bnb",value:"BNB",style:{minWidth:"5rem"},children:Object(U.jsxs)(a.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(U.jsx)("div",{children:"BNB"}),Object(U.jsx)("img",{src:"/static/SHAZU/icons/ic_bnb.svg",alt:"",style:{width:"1rem",height:"1rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}})]})}),Object(U.jsx)(v.a,{className:"listing-currency-toggle listing-currency-shazu",value:"SHAZU",style:{minWidth:"5rem"},children:Object(U.jsxs)(a.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(U.jsx)("div",{children:"SHAZU"}),Object(U.jsx)("img",{src:"/static/SHAZU/icons/ic_shazu.png",alt:"",style:{width:"1rem",height:"1rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}})]})})]}),Object(U.jsx)(S.a,{onChange:q,value:I,color:"yellow",variant:"standard",label:"Price (".concat(h,")"),type:"number",className:"border-field-input",style:{marginTop:"2rem",maxWidth:"14rem",marginBottom:"2rem"}}),Object(U.jsx)(a.a,{direction:"column",spacing:2,children:Object(U.jsx)(m.a,{onClick:function(){var e=!0;"BNB"===h&&(e=!1),we(F.id,W.b.parseEther(I),e),De(!0)},disabled:!I||Be,variant:"contained",color:"purple",children:Be?"LISTING":"LIST"})})]})})]}),Object(U.jsx)(a.a,{style:{marginTop:"2rem"},children:Object(U.jsx)(m.a,{onClick:function(){me(!1),f("BNB"),T(0)},variant:"container",style:{marginLeft:"auto"},children:"Close"})})]})}),Object(U.jsx)(l.b,{open:ne,maxWidth:"xs",animate:l.j,scroll:"paper",onClose:function(){ie(!1),X(!1),f("BNB"),T(0)},children:Object(U.jsxs)(p.a,{style:{textAlign:"center"},children:[Object(U.jsx)("div",{className:"successCheck-lottie-container",children:Object(U.jsx)(C.a,{options:H,isClickToPauseDisabled:!0})}),Object(U.jsx)(c.a,{variant:"h3",children:"Edit Listing Successful!"}),Object(U.jsx)(w.a,{className:"no-hover-line",component:D.c,to:"/marketplace/detail/".concat(F.id),children:Object(U.jsx)(m.a,{variant:"contained",color:"purple",style:{marginTop:"2rem"},children:"See Listing Page"})})]})}),Object(U.jsx)(l.b,{open:se,maxWidth:"xs",animate:l.j,scroll:"paper",onClose:function(){me(!1),oe(!1)},children:Object(U.jsxs)(p.a,{style:{textAlign:"center"},children:[Object(U.jsx)("div",{className:"successCheck-lottie-container",children:Object(U.jsx)(C.a,{options:H,isClickToPauseDisabled:!0})}),Object(U.jsx)(c.a,{variant:"h3",children:"Remove Listing Successful!"})]})}),Object(U.jsx)(l.b,{open:he,maxWidth:"xs",animate:l.j,scroll:"paper",onClose:function(){me(!1),Oe(!1),f("BNB"),T(0)},children:Object(U.jsxs)(p.a,{style:{textAlign:"center"},children:[Object(U.jsx)("div",{className:"successCheck-lottie-container",children:Object(U.jsx)(C.a,{options:H,isClickToPauseDisabled:!0})}),Object(U.jsx)(c.a,{variant:"h3",children:"Listing Successful!"}),Object(U.jsx)(w.a,{className:"no-hover-line",component:D.c,to:"/marketplace/detail/".concat(F.id),children:Object(U.jsx)(m.a,{variant:"contained",color:"purple",style:{marginTop:"2rem"},children:"See Listing Page"})})]})}),Object(U.jsx)(l.b,{open:xe,maxWidth:"xs",animate:l.j,scroll:"paper",onClose:function(){me(!1),pe(!1)},children:Object(U.jsxs)(p.a,{style:{textAlign:"center"},children:[Object(U.jsx)("div",{className:"successCheck-lottie-container",children:Object(U.jsx)(C.a,{options:P,isClickToPauseDisabled:!0})}),Object(U.jsx)(c.a,{variant:"h3",children:"Listing Failed!"})]})})]})}var Z,F,_,M,J=n(1223),G=n(231),$=n(1214),q=Object($.a)(Z||(Z=Object(G.a)(["\n  query GetNFT($account: String!) {\n    tokens(first: 1000, orderBy:id, orderDirection:desc, where: { owner: $account }) {\n        rarity\n        id\n        offer {\n          id\n          offerId\n          price\n          isShazuPrice\n          cancelled\n          fulfilled\n        }\n    }\n  }\n"]))),Y=Object($.a)(F||(F=Object(G.a)(["\n  query GetNFT($account: String!) {\n    tokens(first: 1000, orderBy:id, orderDirection:desc, where: { owner: $account,  offer_not: null}) {\n        rarity\n        id\n        offer {\n          id\n          offerId\n          price\n          isShazuPrice\n          cancelled\n          fulfilled\n        }\n    }\n  }\n"]))),K=Object($.a)(_||(_=Object(G.a)(["\nquery GetNFT($account: String!) {\n    offers(first: 1000, orderBy:id, orderDirection:desc, where:{user: $account, fulfilled: true}) {\n            id\n            offerId\n            token {\n            id\n        }\n        rarity\n        price\n        isShazuPrice\n        cancelled\n        fulfilled\n    }\n  }\n"]))),Q=(Object($.a)(M||(M=Object(G.a)(['\nquery GetNFT($account: String!) {\n    transfers(first: 1000, orderBy:id, orderDirection:desc, where:{from: $account, to: "0x0000000000000000000000000000000000000000"}) {\n      id\n      token {\n        id\n        rarity\n      }\n      \n      from {\n        id\n      }\n    }\n  }\n']))),n(413),n(1204),function(e,t){var n=Object(O.useRef)(!0),i=Object(O.useState)(void 0),a=Object(d.a)(i,2),c=a[0],r=a[1],s=Object(g.a)().account,o=Object(O.useState)(void 0),l=Object(d.a)(o,2),j=l[0],m=l[1];Object(O.useEffect)((function(){m(s?s.toLowerCase():void 0)}),[s]);var u=Object(J.a)(q,{variables:{account:j},pollInterval:3e3}).data;return Object(O.useEffect)((function(){if(u&&u.tokens&&j){var i=u.tokens.map((function(n){return{nft:1==n.rarity?e.common:2==n.rarity?e.rare:3==n.rarity?e.superrare:e.ultimaterare,status:n.offer?"listed":"owned",description:t[n.rarity],id:parseInt(n.id),saleData:{saleId:n.offer?n.offer.offerId:"",price:n.offer&&n.offer.price?n.offer.price:"",currency:n.offer&&n.offer.isShazuPrice?"SHAZU":"BNB"}}}));r(i)}return function(){n.current=!1}}),[u,n]),c}),V=function(e,t){var n=Object(O.useRef)(!0),i=Object(O.useState)(void 0),a=Object(d.a)(i,2),c=a[0],r=a[1],s=Object(g.a)().account,o=Object(O.useState)(void 0),l=Object(d.a)(o,2),j=l[0],m=l[1];Object(O.useEffect)((function(){m(s?s.toLowerCase():void 0)}),[s]);var u=Object(J.a)(Y,{variables:{account:j},pollInterval:3e3}).data;return Object(O.useEffect)((function(){if(u&&u.tokens&&j){var i=u.tokens.map((function(n){return{nft:1==n.rarity?e.common:2==n.rarity?e.rare:3==n.rarity?e.superrare:e.ultimaterare,status:"listed",description:t[n.rarity],id:parseInt(n.id),saleData:{saleId:n.offer?n.offer.offerId:"",price:n.offer&&n.offer.price?n.offer.price:"",currency:n.offer&&n.offer.isShazuPrice?"SHAZU":"BNB"}}}));r(i)}return function(){n.current=!1}}),[u,n]),c},X=function(e,t){var n=Object(O.useRef)(!0),i=Object(O.useState)(void 0),a=Object(d.a)(i,2),c=a[0],r=a[1],s=Object(g.a)().account,o=Object(O.useState)(void 0),l=Object(d.a)(o,2),j=l[0],m=l[1];Object(O.useEffect)((function(){m(s?s.toLowerCase():void 0)}),[s]);var u=Object(J.a)(K,{variables:{account:j},pollInterval:3e3}).data;return Object(O.useEffect)((function(){if(u&&u.offers&&j){var i=u.offers.map((function(n){return{nft:1==n.rarity?e.common:2==n.rarity?e.rare:3==n.rarity?e.superrare:e.ultimaterare,status:"sold",description:t[n.rarity],id:parseInt(n.token.id),saleData:{price:n.price?n.price:"",currency:n.isShazuPrice?"SHAZU":"BNB"}}}));r(i)}return function(){n.current=!1}}),[u,n]),c},ee={common:{name:"Orange Ninja",rarity:"Common",video:"/static/SHAZU/nft/ORANGE_NINJA.mp4",smallThumbnail:"/static/SHAZU/nft/thumbnail/nft_thumbnail_orange.jpg"},rare:{name:"Blue Ninja",rarity:"Rare",video:"/static/SHAZU/nft/BLUE_NINJA.mp4",smallThumbnail:"/static/SHAZU/nft/thumbnail/nft_thumbnail_blue.jpg"},superrare:{name:"Green Ninja",rarity:"Super Rare",video:"/static/SHAZU/nft/GREEN_NINJA.mp4",smallThumbnail:"/static/SHAZU/nft/thumbnail/nft_thumbnail_green.jpg"},ultimaterare:{name:"Purple Ninja",rarity:"Ultimate Rare",video:"/static/SHAZU/nft/PURPLE_NINJA.mp4",smallThumbnail:"/static/SHAZU/nft/thumbnail/nft_thumbnail_purple.jpg"}},te={1:"Though the most common, one of the most needed in your journey. This Orange Belt Ninja will allow you to have standard capabilities to punch your way through to staking.",2:"With the ability to punch, comes with the ability to kick. A common kick but a rare breed of form. The color blue signifies the peace with your inner self. You are nearly there, you are not a novice anymore.",3:"Super Rare Green Belt with Super Rare Kick Combos. Congratulations, you are now ranking up and have the ability to do combos. Every ninja must be ready to stake and earn $SHAZU.",4:"You have mastered the art of Ninja Spirit! Gravity does not matter anymore. Welcome to the Dojo. It is now time to earn and reap the rewards."},ne=[{nft:ee.common,id:"id12345",status:"owned",description:"Lorem ipsum dolor sit amet, consectetur"},{nft:ee.common,id:"id19502",status:"owned",description:"Lorem ipsum dolor sit amet, consectetur"},{nft:ee.ultimaterare,id:"id22925",status:"listed",description:"Lorem ipsum dolor sit amet, consectetur",saleData:{saleId:"ID29282637361",price:"6000",currency:"SHAZU"}},{nft:ee.rare,id:"id39172",status:"listed",description:"Lorem ipsum dolor sit amet, consectetur",saleData:{saleId:"ID24010248202",price:"2000",currency:"SHAZU"}},{nft:ee.ultimaterare,id:"id25125",status:"listed",description:"Lorem ipsum dolor sit amet, consectetur",saleData:{saleId:"ID22910492829",price:"3",currency:"BNB"}},{nft:ee.common,id:"id01920",status:"sold",description:"Lorem ipsum dolor sit amet, consectetur"},{nft:ee.common,id:"id010020",status:"owned",description:"Lorem ipsum dolor sit amet, consectetur"}],ie=[{id:"all",label:"All"},{id:"common",label:"Common"},{id:"rare",label:"Rare"},{id:"superrare",label:"Super Rare"},{id:"ultimaterare",label:"Ultimate Rare"}];function ae(){var e=Object(O.useRef)(),t=Object(O.useState)([]),n=Object(d.a)(t,2),i=n[0],s=n[1],o=Object(O.useState)({}),p=Object(d.a)(o,2),y=p[0],v=p[1],S=(Object(g.a)().account,Q(ee,te)),w=V(ee,te),N=X(ee,te),C=Object(O.useState)("OWNED"),B=Object(d.a)(C,2),D=B[0],k=B[1];Object(O.useEffect)((function(){"OWNED"==D&&s(void 0!=S?S:[]),"LISTED"==D&&s(void 0!=w?w:[]),"SOLD"==D&&s(void 0!=N?N:[])}),[S,w,D,N]);var I=function(e){"OWNED"===e.target.value?k("OWNED"):"LISTED"===e.target.value?k("LISTED"):"SOLD"===e.target.value&&k("SOLD")},T=Object(O.useState)(null),L=Object(d.a)(T,2),A=L[0],R=L[1],E=Object(O.useState)({id:"all",label:"All"}),W=Object(d.a)(E,2),H=W[0],P=W[1],Z=function(){R(null)},F=function(e){P({id:e.id,label:e.label}),"all"===e.id?v(i):"common"===e.id?v(i.filter((function(e){return"Common"===e.nft.rarity}))):"rare"===e.id?v(i.filter((function(e){return"Rare"===e.nft.rarity}))):"superrare"===e.id?v(i.filter((function(e){return"Super Rare"===e.nft.rarity}))):"ultimaterare"===e.id&&v(i.filter((function(e){return"Ultimate Rare"===e.nft.rarity}))),Z()};x((function(){console.log(H),F(H)}),[i]);var _=Object(f.a)({PageComponent:z,maxPerPage:16,data:y}),M=_.Component,J=(_.nextPage,_.prevPage,_.setPageIndex),G=_.totalPages,$=Object(O.useState)(1),q=Object(d.a)($,2),Y=q[0],K=q[1];return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(r.a.div,{ref:e,variants:l.h,children:Object(U.jsxs)(j.a,{container:!0,alignItems:"stretch",direction:"row",justifyContent:"flex-start",style:{marginBottom:"2rem"},children:[Object(U.jsxs)(j.a,{item:!0,xs:12,md:8,lg:8,xl:8,children:[Object(U.jsxs)("div",{className:"tab-container wide-rarity-tab",style:{width:"100%",maxWidth:"30rem"},children:[Object(U.jsxs)(m.a,{variant:"OWNED"===D?"contained":"",onClick:I,value:"OWNED",color:"purple",className:"tab-button",children:["Owned (",S?S.length:0,")"]}),Object(U.jsxs)(m.a,{variant:"LISTED"===D?"contained":"",onClick:I,value:"LISTED",color:"success",style:{marginInline:"0.4rem"},className:"tab-button",children:["Listed (",w?w.length:0,")"]}),Object(U.jsxs)(m.a,{variant:"SOLD"===D?"contained":"",onClick:I,value:"SOLD",color:"error",style:{marginInline:"0.4rem"},className:"tab-button",children:["Sold (",N?N.length:0,")"]})]}),Object(U.jsx)("div",{className:"small-tab-container small-rarity-tab",style:{width:"100%",marginInline:"auto"},children:Object(U.jsxs)(a.a,{style:{width:"100%"},children:[Object(U.jsx)(a.a,{direction:"row",style:{width:"100%"},children:Object(U.jsxs)(m.a,{variant:"OWNED"===D?"contained":"",onClick:I,value:"OWNED",color:"purple",className:"tab-button small-rarity-button",children:["Owned (",ne.filter((function(e){return"owned"===e.status})).length,")"]})}),Object(U.jsxs)(a.a,{direction:"row",style:{width:"100%"},children:[Object(U.jsxs)(m.a,{variant:"LISTED"===D?"contained":"",onClick:I,value:"LISTED",color:"success",style:{marginInline:"0.4rem"},className:"tab-button small-rarity-button",children:["Listed (",ne.filter((function(e){return"listed"===e.status})).length,")"]}),Object(U.jsxs)(m.a,{variant:"SOLD"===D?"contained":"",onClick:I,value:"SOLD",color:"error",style:{marginInline:"0.4rem"},className:"tab-button small-rarity-button",children:["Sold (",ne.filter((function(e){return"sold"===e.status})).length,")"]})]})]})})]}),Object(U.jsxs)(j.a,{item:!0,xs:12,md:4,lg:4,xl:4,style:{display:"flex"},children:[Object(U.jsxs)(m.a,{variant:"container",style:{border:"1px solid rgba(255, 255, 255, 0.3)",marginTop:"auto",marginBottom:"auto",marginLeft:"auto"},onClick:function(e){R(e.currentTarget)},className:"nft-rarity-button",children:["Rarity:\xa0",Object(U.jsx)(c.a,{component:"span",variant:"subtitle2",sx:{color:"text.secondary"},children:H.label})]}),Object(U.jsx)(u.a,{keepMounted:!0,anchorEl:A,open:Boolean(A),onClose:Z,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:ie.map((function(e){return Object(U.jsx)(b.a,{selected:e.id===H.id,onClick:function(){return F(e)},sx:{typography:"body2"},children:e.label},e.value)}))})]})]})}),0!==y.length?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(M,{}),Object(U.jsx)(r.a.div,{variants:l.h,children:Object(U.jsx)(a.a,{justifyContent:"center",alignItems:"center",style:{width:"100%",marginTop:"2rem"},children:Object(U.jsx)(h.a,{size:"large",count:G,page:Y,color:"yellow",onChange:function(t,n){K(n),J(n),window.scrollTo({behavior:"smooth",top:e.current.offsetTop-150})}})})})]}):Object(U.jsx)(r.a.div,{variants:l.h,style:{width:"100%",marginTop:"4rem"},children:Object(U.jsxs)(a.a,{alignItems:"center",justifyContent:"center",style:{minHeight:"30rem"},children:[Object(U.jsx)(c.a,{variant:"h4",children:"No NFT found"}),Object(U.jsx)(c.a,{variant:"h6",style:{fontWeight:"500"},children:"Try another Tab or Rarity category."})]})}),Object(U.jsx)("div",{style:{marginBottom:"5rem"}})]})}var ce=Object(s.a)(r.a.div)((function(e){e.theme;return{}}));function re(){return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(o.a,{title:"SHAZU - My NFT",style:{overflow:"hidden"},children:Object(U.jsx)(ce,{initial:"initial",animate:"animate",variants:l.i,children:Object(U.jsx)("section",{className:"gradient-before-2",children:Object(U.jsxs)(i.a,{maxWidth:"xl",children:[Object(U.jsx)(r.a.div,{variants:l.h,children:Object(U.jsxs)(a.a,{alignItems:"center",style:{marginBottom:"2rem"},children:[Object(U.jsx)("div",{className:"gradient-bar",style:{width:"15rem",height:"0.4rem"}}),Object(U.jsx)(c.a,{variant:"h1",className:"neo-font",style:{textAlign:"center"},children:"My NFT Collection"}),Object(U.jsx)(c.a,{variant:"h5",className:"neo-font yellow-color",children:"Shazu Action Cards Collection"})]})}),Object(U.jsx)(r.a.div,{variants:l.h,children:Object(U.jsx)("div",{className:"p-relative w-100 text-center",style:{display:"flex",justifyContent:"center"},children:Object(U.jsx)("img",{src:"/static/SHAZU/abstract/line-crown1.svg",alt:"",className:"home-crown1"})})}),Object(U.jsx)(ae,{})]})})})})})}}}]);