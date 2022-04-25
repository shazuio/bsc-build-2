(this.webpackJsonpshazu=this.webpackJsonpshazu||[]).push([[8],{1021:function(e,t,a){"use strict";var i=a(9),r=a(2),n=a(10),c=a(0),o=(a(13),a(15)),s=a(266),l=a(84),d=a(952),j=a(18),b=a(11),m=a(215),u=a(267);function h(e){return Object(m.a)("MuiTableRow",e)}var p=Object(u.a)("MuiTableRow",["root","selected","hover","head","footer"]),O=a(1),g=["className","component","hover","selected"],f=Object(b.a)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},Object(i.a)(t,"&.".concat(p.hover,":hover"),{backgroundColor:a.palette.action.hover}),Object(i.a)(t,"&.".concat(p.selected),{backgroundColor:Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),x=c.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiTableRow"}),i=a.className,l=a.component,b=void 0===l?"tr":l,m=a.hover,u=void 0!==m&&m,p=a.selected,x=void 0!==p&&p,v=Object(n.a)(a,g),y=c.useContext(d.a),w=Object(r.a)({},a,{component:b,hover:u,selected:x,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),S=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return Object(s.a)(a,h,t)}(w);return Object(O.jsx)(f,Object(r.a)({as:b,ref:t,className:Object(o.a)(S.root,i),role:"tr"===b?null:"row",ownerState:w},v))}));t.a=x},1022:function(e,t,a){"use strict";var i=a(9),r=a(10),n=a(2),c=a(0),o=(a(13),a(15)),s=a(266),l=a(84),d=a(20),j=a(963),b=a(952),m=a(18),u=a(11),h=a(215),p=a(267);function O(e){return Object(h.a)("MuiTableCell",e)}var g=Object(p.a)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),f=a(1),x=["align","className","component","padding","scope","size","sortDirection","variant"],v=Object(u.a)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat(Object(d.a)(a.size))],"normal"!==a.padding&&t["padding".concat(Object(d.a)(a.padding))],"inherit"!==a.align&&t["align".concat(Object(d.a)(a.align))],a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(n.a)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.mode?Object(l.e)(Object(l.a)(t.palette.divider,1),.88):Object(l.b)(Object(l.a)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:t.palette.text.primary},"footer"===a.variant&&{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&Object(i.a)({padding:"6px 16px"},"&.".concat(g.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:t.palette.background.default})})),y=c.forwardRef((function(e,t){var a,i=Object(m.a)({props:e,name:"MuiTableCell"}),l=i.align,u=void 0===l?"inherit":l,h=i.className,p=i.component,g=i.padding,y=i.scope,w=i.size,S=i.sortDirection,N=i.variant,C=Object(r.a)(i,x),D=c.useContext(j.a),k=c.useContext(b.a),B=k&&"head"===k.variant;a=p||(B?"th":"td");var A=y;!A&&B&&(A="col");var T=N||k&&k.variant,R=Object(n.a)({},i,{align:u,component:a,padding:g||(D&&D.padding?D.padding:"normal"),size:w||(D&&D.size?D.size:"medium"),sortDirection:S,stickyHeader:"head"===T&&D&&D.stickyHeader,variant:T}),H=function(e){var t=e.classes,a=e.variant,i=e.align,r=e.padding,n=e.size,c={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==i&&"align".concat(Object(d.a)(i)),"normal"!==r&&"padding".concat(Object(d.a)(r)),"size".concat(Object(d.a)(n))]};return Object(s.a)(c,O,t)}(R),I=null;return S&&(I="asc"===S?"ascending":"descending"),Object(f.jsx)(v,Object(n.a)({as:a,ref:t,className:Object(o.a)(H.root,h),"aria-sort":I,scope:A,ownerState:R},C))}));t.a=y},1023:function(e,t,a){"use strict";var i=a(2),r=a(10),n=a(0),c=(a(13),a(15)),o=a(266),s=a(18),l=a(11),d=a(215),j=a(267);function b(e){return Object(d.a)("MuiTableContainer",e)}Object(j.a)("MuiTableContainer",["root"]);var m=a(1),u=["className","component"],h=Object(l.a)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,t){return t.root}})({width:"100%",overflowX:"auto"}),p=n.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTableContainer"}),n=a.className,l=a.component,d=void 0===l?"div":l,j=Object(r.a)(a,u),p=Object(i.a)({},a,{component:d}),O=function(e){var t=e.classes;return Object(o.a)({root:["root"]},b,t)}(p);return Object(m.jsx)(h,Object(i.a)({ref:t,as:d,className:Object(c.a)(O.root,n),ownerState:p},j))}));t.a=p},1024:function(e,t,a){"use strict";var i=a(10),r=a(2),n=a(0),c=(a(13),a(15)),o=a(266),s=a(963),l=a(18),d=a(11),j=a(215),b=a(267);function m(e){return Object(j.a)("MuiTable",e)}Object(b.a)("MuiTable",["root","stickyHeader"]);var u=a(1),h=["className","component","padding","size","stickyHeader"],p=Object(d.a)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return Object(r.a)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},t.typography.body2,{padding:t.spacing(2),color:t.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),O="table",g=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTable"}),d=a.className,j=a.component,b=void 0===j?O:j,g=a.padding,f=void 0===g?"normal":g,x=a.size,v=void 0===x?"medium":x,y=a.stickyHeader,w=void 0!==y&&y,S=Object(i.a)(a,h),N=Object(r.a)({},a,{component:b,padding:f,size:v,stickyHeader:w}),C=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return Object(o.a)(a,m,t)}(N),D=n.useMemo((function(){return{padding:f,size:v,stickyHeader:w}}),[f,v,w]);return Object(u.jsx)(s.a.Provider,{value:D,children:Object(u.jsx)(p,Object(r.a)({as:b,role:b===O?null:"table",ref:t,className:Object(c.a)(C.root,d),ownerState:N},S))})}));t.a=g},1025:function(e,t,a){"use strict";var i=a(2),r=a(10),n=a(0),c=(a(13),a(15)),o=a(266),s=a(952),l=a(18),d=a(11),j=a(215),b=a(267);function m(e){return Object(j.a)("MuiTableHead",e)}Object(b.a)("MuiTableHead",["root"]);var u=a(1),h=["className","component"],p=Object(d.a)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),O={variant:"head"},g="thead",f=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableHead"}),n=a.className,d=a.component,j=void 0===d?g:d,b=Object(r.a)(a,h),f=Object(i.a)({},a,{component:j}),x=function(e){var t=e.classes;return Object(o.a)({root:["root"]},m,t)}(f);return Object(u.jsx)(s.a.Provider,{value:O,children:Object(u.jsx)(p,Object(i.a)({as:j,className:Object(c.a)(x.root,n),ref:t,role:j===g?null:"rowgroup",ownerState:f},b))})}));t.a=f},1026:function(e,t,a){"use strict";var i=a(2),r=a(10),n=a(0),c=(a(13),a(15)),o=a(266),s=a(952),l=a(18),d=a(11),j=a(215),b=a(267);function m(e){return Object(j.a)("MuiTableBody",e)}Object(b.a)("MuiTableBody",["root"]);var u=a(1),h=["className","component"],p=Object(d.a)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),O={variant:"body"},g="tbody",f=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableBody"}),n=a.className,d=a.component,j=void 0===d?g:d,b=Object(r.a)(a,h),f=Object(i.a)({},a,{component:j}),x=function(e){var t=e.classes;return Object(o.a)({root:["root"]},m,t)}(f);return Object(u.jsx)(s.a.Provider,{value:O,children:Object(u.jsx)(p,Object(i.a)({className:Object(c.a)(x.root,n),as:j,ref:t,role:j===g?null:"rowgroup",ownerState:f},b))})}));t.a=f},1119:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return G}));var i=a(5),r=a(12),n=a(33),c=a(50),o=a(0),s=a(950),l=a(931),d=a(943),j=a(268),b=a(902),m=a(929),u=a(945),h=a(1020),p=a(954),O=a.n(p),g=a(955),f=a(119),x=a(953),v=a(1023),y=a(1024),w=a(1025),S=a(1021),N=a(1022),C=a(1026),D=a(1115),k=a(975),B=a(957),A=a(956),T=a(958),R=a(959),H=a(1),I={loop:!1,autoplay:!0,animationData:A,background:"transparent"},z={loop:!1,autoplay:!0,animationData:T,background:"transparent"},U=[{id:"nft",label:"NFT",minWidth:150,width:"20%"},{id:"seller",label:"Seller",minWidth:80,width:"15%"},{id:"price",label:"Price",minWidth:100,align:"right",width:"10%"},{id:"buy",label:" ",minWidth:150,align:"right",width:"22%"}];function F(e){var t=e.items,a=(e.index,Object(g.a)(R.a)),n=Object(r.a)(a,2),c=n[0],s=(n[1].stopPopDingSound,Object(o.useState)({open:!1,success:!1})),l=Object(r.a)(s,2),m=l[0],p=l[1],x=Object(o.useState)(""),v=Object(r.a)(x,2),y=v[0],w=v[1],C=Object(o.useState)(""),D=Object(r.a)(C,2),k=D[0],A=D[1],T=Object(o.useState)(""),F=Object(r.a)(T,2),P=F[0],Z=F[1],M=function(e){var t,a,i=JSON.parse(e.target.value);t="Buy NFT Successful",a="id: ".concat(i.nftId),c(),w(t),A(a),p({open:!0,success:!0})};return Object(H.jsxs)(H.Fragment,{children:[t.map((function(e,t){return Object(H.jsx)(S.a,{hover:!0,role:"checkbox",tabIndex:-1,children:U.map((function(t,a){var i=e[t.id];if("nft"===t.id){var r="";return"Common"===i.rarity?r="2px solid var(--shazu-yellow)":"Rare"===i.rarity?r="2px solid var(--shazu-blue)":"Super Rare"===i.rarity?r="2px solid var(--shazu-green)":"Ultimate Rare"===i.rarity&&(r="2px solid var(--shazu-purple)"),Object(H.jsx)(N.a,{align:t.align,style:{fontSize:"1rem"},children:Object(H.jsxs)(b.a,{direction:"row",spacing:1,alignItems:"center",style:{justifyContent:t.align},children:[Object(H.jsx)("img",{src:i.smallThumbnail,alt:"",style:{width:"2rem",height:"2rem",borderRadius:"0.3rem",marginRight:"0.4rem",border:r}}),Object(H.jsx)("div",{className:"bold",children:e.nftId})]})},"".concat(a))}return"seller"===t.id?Object(H.jsx)(N.a,{align:t.align,style:{fontWeight:"500"},children:Object(H.jsx)("a",{href:"https://bscscan.com/address/".concat(i),target:"_blank",rel:"noreferrer",style:{color:"white",fontSize:"0.9rem"},children:Object(h.a)(i)})},"".concat(a)):"price"===t.id?Object(H.jsx)(N.a,{align:t.align,style:{fontWeight:"500",fontSize:"0.9rem"},children:Object(H.jsxs)(b.a,{direction:"row",alignItem:"center",justifyContent:"end",children:[Object(H.jsxs)("div",{children:[Object(B.a)(e.saleData.price)," ",e.saleData.currency]}),"BNB"===e.saleData.currency&&Object(H.jsx)("img",{src:"/static/SHAZU/icons/ic_bnb.svg",alt:"",style:{width:"1.2rem",height:"1.2rem",marginLeft:"0.2rem",marginTop:"0.1rem"}}),"SHAZU"===e.saleData.currency&&Object(H.jsx)("img",{src:"/static/SHAZU/icons/ic_shazu.png",alt:"",style:{width:"1.2rem",height:"1.2rem",marginLeft:"0.2rem",marginTop:"0.1rem"}})]})},"".concat(a)):"buy"===t.id&&Object(H.jsx)(N.a,{align:t.align,style:{fontWeight:"500",fontSize:"0.9rem"},children:Object(H.jsx)(d.a,{value:JSON.stringify(e),variant:"contained",color:"success",onClick:M,children:"Buy"})},"".concat(a))}))},"".concat(t))})),Object(H.jsx)(f.b,{open:m.open,maxWidth:"xs",animate:f.j,scroll:"paper",onClose:function(){p(Object(i.a)(Object(i.a)({},m),{},{open:!1})),w(""),Z("")},children:Object(H.jsxs)(u.a,{style:{textAlign:"center"},children:[m.success?Object(H.jsx)("div",{className:"successCheck-lottie-container",children:Object(H.jsx)(O.a,{options:I,isClickToPauseDisabled:!0})}):Object(H.jsx)("div",{className:"successCheck-lottie-container",children:Object(H.jsx)(O.a,{options:z,isClickToPauseDisabled:!0})}),Object(H.jsx)(j.a,{variant:"h3",children:y}),m.success?Object(H.jsx)("div",{className:"elevate-card",children:Object(H.jsx)(j.a,{variant:"h5",children:k})}):Object(H.jsx)("div",{children:P})]})})]})}var P=a(352),Z=[{id:"nft",label:"NFT",minWidth:150,width:"20%"},{id:"seller",label:"Seller",minWidth:80,width:"15%"},{id:"price",label:"Price",minWidth:100,align:"right",width:"10%"},{id:"buy",label:" ",minWidth:150,align:"right",width:"22%"}],M={common:{name:"Orange Ninja",rarity:"Common",video:"/static/SHAZU/nft/ORANGE_NINJA.mp4",smallThumbnail:"/static/SHAZU/nft/thumbnail/nft_thumbnail_orange.jpg"},rare:{name:"Blue Ninja",rarity:"Rare",video:"/static/SHAZU/nft/BLUE_NINJA.mp4",smallThumbnail:"/static/SHAZU/nft/thumbnail/nft_thumbnail_blue.jpg"},superrare:{name:"Green Ninja",rarity:"Super Rare",video:"/static/SHAZU/nft/GREEN_NINJA.mp4",smallThumbnail:"/static/SHAZU/nft/thumbnail/nft_thumbnail_green.jpg"},ultimaterare:{name:"Purple Ninja",rarity:"Ultimate Rare",video:"/static/SHAZU/nft/PURPLE_NINJA.mp4",smallThumbnail:"/static/SHAZU/nft/thumbnail/nft_thumbnail_purple.jpg"}},W=[{nft:M.ultimaterare,nftId:"id25125",seller:"0xEF0274E31810C9Df02F98FAFDe0f841F4E66a1Cd",saleData:{saleId:"ID22910492829",price:"3",currency:"BNB"},marketData:{floorPrice:"1500",currency:"SHAZU"}},{nft:M.ultimaterare,nftId:"id25125",seller:"0xEF0274E31810C9Df02F98FAFDe0f841F4E66a1Cd",saleData:{saleId:"ID22910492829",price:"3",currency:"BNB"},marketData:{floorPrice:"1500",currency:"SHAZU"}},{nft:M.ultimaterare,nftId:"id25125",seller:"0xEF0274E31810C9Df02F98FAFDe0f841F4E66a1Cd",saleData:{saleId:"ID22910492829",price:"3",currency:"BNB"},marketData:{floorPrice:"1500",currency:"SHAZU"}},{nft:M.ultimaterare,nftId:"id25125",seller:"0xEF0274E31810C9Df02F98FAFDe0f841F4E66a1Cd",saleData:{saleId:"ID22910492829",price:"3",currency:"BNB"},marketData:{floorPrice:"1500",currency:"SHAZU"}},{nft:M.ultimaterare,nftId:"id25125",seller:"0xEF0274E31810C9Df02F98FAFDe0f841F4E66a1Cd",saleData:{saleId:"ID22910492829",price:"3",currency:"BNB"},marketData:{floorPrice:"1500",currency:"SHAZU"}},{nft:M.ultimaterare,nftId:"id25125",seller:"0xEF0274E31810C9Df02F98FAFDe0f841F4E66a1Cd",saleData:{saleId:"ID22910492829",price:"3",currency:"BNB"},marketData:{floorPrice:"1500",currency:"SHAZU"}}];function E(){var e=Object(k.a)({PageComponent:F,maxPerPage:4,data:W}),t=e.Component,a=(e.nextPage,e.prevPage,e.setPageIndex),i=e.totalPages,n=Object(o.useState)(1),c=Object(r.a)(n,2),s=c[0],l=c[1];return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(P.a,{children:Object(H.jsxs)(v.a,{sx:{minWidth:"700px",width:"100%",backgroundColor:"#1C1C1C",border:"solid 1px #3B3B3B",borderRadius:"8px",padding:"1rem",marginTop:"1rem"},style:{marginLeft:"auto",marginRight:"auto"},children:[Object(H.jsx)(j.a,{variant:"h5",style:{marginBottom:"0.4rem"},children:"Listings"}),Object(H.jsxs)(y.a,{children:[Object(H.jsx)(w.a,{sx:{backgroundColor:"#1C1C1C",borderRadius:"12px"},children:Object(H.jsx)(S.a,{children:Z.map((function(e){return Object(H.jsx)(N.a,{align:e.align,style:{minWidth:e.minWidth,width:e.width,boxShadow:"none"},sx:{background:"#272727",fontSize:"1rem",color:"white"},children:e.label},e.id)}))})}),Object(H.jsx)(C.a,{children:Object(H.jsx)(t,{})})]})]})}),Object(H.jsx)(b.a,{style:{width:"100%",marginTop:"1rem"},alignItems:"center",children:Object(H.jsx)(D.a,{color:"yellow",count:i,page:s,onChange:function(e,t){l(t),a(t)}})})]})}var _={loop:!1,autoplay:!0,animationData:A,background:"transparent"},L={loop:!1,autoplay:!0,animationData:T,background:"transparent"},J={nft:{name:"Purple Ninja",rarity:"Ultimate Rare",video:"/static/SHAZU/nft/PURPLE_NINJA.mp4",smallThumbnail:"/static/SHAZU/nft/thumbnail/nft_thumbnail_purple.jpg"},nftId:"id22925",status:"listed",description:"Lorem ipsum dolor sit amet, consectetur",owner:"0x29a97C6EfFB8A411DABc6aDEEfaa84f5067C8bbe",saleData:{saleId:"ID29282637361",price:"6000",currency:"SHAZU"},marketData:{floorPrice:"1500",currency:"SHAZU"}};function G(){var e=Object(n.i)().nftId,t=Object(o.useState)(!1),a=Object(r.a)(t,2),p=a[0],v=(a[1],Object(o.useState)(!1)),y=Object(r.a)(v,2),w=y[0],S=y[1],N=Object(o.useState)(""),C=Object(r.a)(N,2),D=C[0],k=C[1];Object(o.useEffect)((function(){var t;t=e,console.info("nftId: ".concat(t)),k(J),S(!0)}),[]);var B=Object(g.a)(R.a),A=Object(r.a)(B,2),T=A[0],I=(A[1].stopPopDingSound,Object(o.useState)({open:!1,success:!1})),z=Object(r.a)(I,2),U=z[0],F=z[1],P=Object(o.useState)(""),Z=Object(r.a)(P,2),M=Z[0],W=Z[1],G=Object(o.useState)(""),X=Object(r.a)(G,2),$=X[0],q=X[1],K=Object(o.useState)(""),Q=Object(r.a)(K,2),V=Q[0],Y=Q[1];return Object(H.jsx)(H.Fragment,{children:Object(H.jsxs)(s.a,{maxWidth:"xl",children:[Object(H.jsxs)(f.d,{variants:f.h,children:[Object(H.jsx)(l.a,{className:"no-hover-line",to:"/marketplace",component:c.c,children:Object(H.jsx)(d.a,{variant:"contained",color:"purple",children:"Back to Marketplace"})}),Object(H.jsx)(j.a,{variant:"h3",style:{marginTop:"2rem"},children:"Listing Detail"})]}),Object(H.jsxs)(b.a,{children:[w&&Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(f.d,{variants:f.h,children:Object(H.jsxs)(m.a,{container:!0,spacing:4,alignItems:"stretch",direction:"row",justifyContent:"flex-start",style:{paddingTop:"2rem",paddingBottom:"2rem"},children:[Object(H.jsx)(m.a,{item:!0,xs:12,md:12,lg:4,xl:4,children:Object(H.jsx)(x.a,{collection:D,big:!0})}),Object(H.jsx)(m.a,{item:!0,xs:12,md:12,lg:8,xl:8,children:Object(H.jsxs)(b.a,{spacing:3,children:[Object(H.jsxs)("div",{className:"elevate-card-sm",style:{padding:"1rem"},children:["Owner: "," ",Object(H.jsx)("a",{href:"https://bscscan.com/address/".concat(D.owner),target:"_blank",rel:"noreferrer",className:"bold",children:Object(h.a)(D.owner)})]}),Object(H.jsx)("div",{className:"elevate-card-sm",style:{padding:"1rem"},children:Object(H.jsxs)(b.a,{children:[Object(H.jsx)("div",{children:"Listed Price:"}),Object(H.jsxs)(b.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(H.jsxs)(j.a,{variant:"h4",children:[D.saleData.price," ",D.saleData.currency]}),"BNB"===D.saleData.currency&&Object(H.jsx)("img",{src:"/static/SHAZU/icons/ic_bnb.svg",alt:"",style:{width:"1.5rem",height:"1.5rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}}),"SHAZU"===D.saleData.currency&&Object(H.jsx)("img",{src:"/static/SHAZU/icons/ic_shazu.png",alt:"",style:{width:"1.5rem",height:"1.5rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}})]}),Object(H.jsx)(b.a,{direction:"column",justifyContent:"space-between",style:{marginBottom:"0.8rem",marginTop:"0.4rem"},children:Object(H.jsxs)("div",{className:"elevate-card-sm",style:{fontSize:"1rem",width:"fit-content"},children:["Floor Price: "," ",Object(H.jsxs)(b.a,{direction:"row",alignItems:"center",children:[Object(H.jsxs)("span",{style:{fontWeight:"700"},children:[D.marketData.floorPrice," ",D.marketData.currency]}),"BNB"===D.marketData.currency&&Object(H.jsx)("img",{src:"/static/SHAZU/icons/ic_bnb.svg",alt:"",style:{width:"1.2rem",height:"1.2rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}}),"SHAZU"===D.marketData.currency&&Object(H.jsx)("img",{src:"/static/SHAZU/icons/ic_shazu.png",alt:"",style:{width:"1.2rem",height:"1.2rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}})]})]})}),Object(H.jsx)(b.a,{direction:"row",spacing:2,style:{marginTop:"0.4rem",marginBottom:"1rem"},children:Object(H.jsx)(d.a,{value:JSON.stringify(D),onClick:function(e){var t,a,i=JSON.parse(e.target.value);t="Buy NFT Successful",a="id: ".concat(i.nftId),T(),W(t),q(a),F({open:!0,success:!0})},size:"large",variant:"contained",color:"success",children:"Buy Now"})}),Object(H.jsx)(E,{})]})})]})})]})}),Object(H.jsx)(f.b,{open:U.open,maxWidth:"xs",animate:f.j,scroll:"paper",onClose:function(){F(Object(i.a)(Object(i.a)({},U),{},{open:!1})),W(""),Y("")},children:Object(H.jsxs)(u.a,{style:{textAlign:"center"},children:[U.success?Object(H.jsx)("div",{className:"successCheck-lottie-container",children:Object(H.jsx)(O.a,{options:_,isClickToPauseDisabled:!0})}):Object(H.jsx)("div",{className:"successCheck-lottie-container",children:Object(H.jsx)(O.a,{options:L,isClickToPauseDisabled:!0})}),Object(H.jsx)(j.a,{variant:"h3",children:M}),U.success?Object(H.jsx)("div",{className:"elevate-card",children:Object(H.jsx)(j.a,{variant:"h5",children:$})}):Object(H.jsx)("div",{children:V})]})})]}),p&&Object(H.jsx)(f.d,{variants:f.h,children:Object(H.jsx)(j.a,{variant:"h5",style:{fontWeight:"500"},children:"The NFT with this ID isn't listed."})})]})]})})}},952:function(e,t,a){"use strict";var i=a(0),r=i.createContext();t.a=r},953:function(e,t,a){"use strict";a.d(t,"a",(function(){return R}));var i=a(5),r=a(12),n=a(11),c=a(63),o=a(0),s=a(954),l=a.n(s),d=a(922),j=a(533),b=a(268),m=a(902),u=a(943),h=a(941),p=a(945),O=a(931),g=a(955),f=a(1020),x=a(50),v=a(957),y=a(119),w=a(956),S=a(958),N=a(959),C=a(1),D={loop:!1,autoplay:!0,animationData:w,background:"transparent"},k={loop:!1,autoplay:!0,animationData:S,background:"transparent"},B={padding:"0.25rem",borderRadius:"10rem",width:"2.4rem",height:"2.4rem",minWidth:"unset"},A={padding:"0.4rem",borderRadius:"8px",width:"2.2rem",height:"2.2rem",minWidth:"unset"},T=Object(n.a)(d.a)({"& label.Mui-focused":{color:"white"},"& .MuiInput-underline:after":{borderBottomColor:"white"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#3B3B3B"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"white"}}});function R(e){var t=Object(c.a)(),a={borderRadius:t.shape.borderRadiusMd,backgroundColor:"#1C1C1C",border:"solid 1px",borderColor:"#3B3B3B",padding:"0.5rem 0.8rem",transition:"border-color 0.3s",maxWidth:e.big?"25rem":"17rem",marginLeft:"auto",marginRight:"auto",textAlign:"left"};function n(){return"Common"===e.collection.nft.rarity?"gradient-border-yellow":"Rare"===e.collection.nft.rarity?"gradient-border-blue":"Super Rare"===e.collection.nft.rarity?"gradient-border-green":"Ultimate Rare"===e.collection.nft.rarity?"gradient-border-purple":void 0}var s={position:"absolute",padding:"0.1rem 0.5rem",borderRadius:"4px",background:"Common"===e.collection.nft.rarity?"var(--shazu-yellow)":"Rare"===e.collection.nft.rarity?"var(--shazu-blue)":"Super Rare"===e.collection.nft.rarity?"var(--shazu-green)":"Ultimate Rare"===e.collection.nft.rarity?"linear-gradient(90deg, rgba(236,35,255,1) 0%, rgba(166,37,255,1) 34%, rgba(173,0,255,1) 100%)":void 0,color:"Ultimate Rare"!==e.collection.nft.rarity?"black":"white",fontSize:"0.8rem",top:"-3rem",left:"-0.5rem",transform:"rotate(-12deg)",width:"max-content"},d=Object(o.useState)(null),w=Object(r.a)(d,2),S=w[0],R=w[1],H=Object(g.a)(N.a),I=Object(r.a)(H,2),z=I[0],U=(I[1].stopPopDingSound,Object(o.useState)(!1)),F=Object(r.a)(U,2),P=F[0],Z=F[1],M=Object(o.useState)(""),W=Object(r.a)(M,2),E=W[0],_=W[1],L=Object(o.useState)(""),J=Object(r.a)(L,2),G=J[0],X=J[1],$=Object(o.useState)(!1),q=Object(r.a)($,2),K=q[0],Q=q[1];Object(o.useEffect)((function(){Q(function(){try{return Object(f.a)(G),!0}catch(e){return!1}}())}),[G]);var V=Object(o.useState)(null),Y=Object(r.a)(V,2),ee=Y[0],te=Y[1],ae=function(){te(null)},ie=Object(o.useState)({open:!1,success:!1}),re=Object(r.a)(ie,2),ne=re[0],ce=re[1],oe=Object(o.useState)(""),se=Object(r.a)(oe,2),le=se[0],de=se[1],je=Object(o.useState)(""),be=Object(r.a)(je,2),me=be[0],ue=be[1],he=Object(o.useState)(""),pe=Object(r.a)(he,2),Oe=pe[0],ge=pe[1];return e.unknown?Object(C.jsx)("div",{style:{height:"100%"},children:Object(C.jsxs)(j.a,{className:"gradient-border p-relative ".concat(n()),style:a,children:[Object(C.jsxs)("div",{style:{visibility:"hidden"},children:[Object(C.jsx)("div",{style:{width:"100%",borderRadius:t.shape.borderRadiusMd,marginTop:"0.5rem",marginBottom:"0.5em"},children:Object(C.jsx)("video",{className:"vid",playsInline:!0,muted:!0,autoPlay:!0,loop:!0,style:{width:"100%",borderRadius:"8px",aspectRatio:"1"},children:Object(C.jsx)("source",{src:e.collection.nft.video,type:"video/mp4"})})}),Object(C.jsx)("div",{style:{position:"relative",height:"0",width:"0"},children:Object(C.jsx)("div",{style:s,children:e.collection.nft.rarity})}),Object(C.jsx)(b.a,{variant:"h6",style:{fontWeight:"700",marginBottom:"0.8rem"},children:e.collection.nft.name}),(e.amount||0!==e.amount||null!==e.amount)&&Object(C.jsx)("div",{className:"p-relative w-100",children:Object(C.jsxs)("div",{className:"nft-card-amount",children:["x",e.amount]})})]}),Object(C.jsxs)("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",opacity:"0.2"},children:[Object(C.jsx)(b.a,{style:{fontSize:"4rem"},children:"?"}),Object(C.jsx)(b.a,{children:"Not owned yet"})]})]})}):e.sold?Object(C.jsx)("div",{children:Object(C.jsxs)(j.a,{className:"gradient-border ".concat(n()),style:Object(i.a)(Object(i.a)({},a),{},{position:"relative"}),children:[Object(C.jsx)("div",{style:{width:"100%",borderRadius:t.shape.borderRadiusMd,marginTop:"0.5rem",marginBottom:"0.5em"},children:Object(C.jsx)("video",{className:"vid",playsInline:!0,muted:!0,autoPlay:!0,loop:!0,style:{width:"100%",borderRadius:"8px",aspectRatio:"1"},children:Object(C.jsx)("source",{src:e.collection.nft.video,type:"video/mp4"})})}),Object(C.jsx)("div",{style:{position:"relative",height:"0",width:"0"},children:Object(C.jsx)("div",{style:s,children:e.collection.nft.rarity})}),Object(C.jsxs)(m.a,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"0.8rem"},children:[Object(C.jsxs)(m.a,{children:[Object(C.jsx)(b.a,{variant:"h6",style:{fontWeight:"700",marginBottom:"0.8rem"},children:e.collection.nft.name}),"undefined"!==typeof e.collection.id&&Object(C.jsxs)(b.a,{style:{opacity:"0.5",fontSize:"0.8rem",marginTop:"-1rem"},children:["id: ",e.collection.id]})]}),"undefined"!==typeof e.collection.description&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(u.a,{variant:"container",style:B,onClick:function(e){return R(e.currentTarget)},children:Object(C.jsx)("img",{src:"/static/SHAZU/icons/info.svg",className:"pe-none",alt:"",style:{width:"100%",opacity:"0.5"}})}),Object(C.jsx)(h.a,{open:Boolean(S),anchorEl:S,onClose:function(){return R(null)},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"center"},PaperProps:{sx:{p:1,maxWidth:200}},children:e.collection.description})]})]}),"undefined"!==typeof e.amount&&Object(C.jsx)("div",{className:"p-relative w-100",children:Object(C.jsxs)("div",{className:"nft-card-amount",children:["x",e.amount]})}),Object(C.jsx)("div",{className:"sold-overlay",children:Object(C.jsx)("img",{src:"/static/SHAZU/misc/sold-tape.png",alt:""})})]})}):Object(C.jsxs)("div",{children:[Object(C.jsx)(y.b,{open:P,maxWidth:"xs",animate:y.j,scroll:"paper",onClose:function(){Z(!1),X("")},children:Object(C.jsxs)(p.a,{style:{textAlign:"center"},children:[Object(C.jsx)("div",{className:"successCheck-lottie-container",children:Object(C.jsx)(l.a,{options:D,isClickToPauseDisabled:!0})}),Object(C.jsx)(b.a,{variant:"h3",children:"Transfer Successful!"}),Object(C.jsx)("div",{className:"elevate-card",children:Object(C.jsxs)(b.a,{variant:"h6",children:["Transferred to: ",Object(C.jsx)("br",{}),Object(C.jsx)("a",{href:"https://bscscan.com/address/".concat(G),rel:"noreferrer",target:"_blank",children:E})]})})]})}),Object(C.jsxs)(j.a,{className:"gradient-border ".concat(n()),style:a,children:["undefined"!==typeof e.collection.saleData&&e.editListingAction&&Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:"p-relative w-100",children:Object(C.jsx)("img",{src:"/static/SHAZU/misc/sale-sticker.svg",alt:"",className:"swing-rotate-normal",style:{position:"absolute",width:"6rem",right:"-2.4rem",top:"-2.4rem"}})})}),Object(C.jsx)("div",{style:{width:"100%",borderRadius:t.shape.borderRadiusMd,marginTop:"0.5rem",marginBottom:"0.5em"},children:Object(C.jsx)("video",{className:"vid",playsInline:!0,muted:!0,autoPlay:!0,loop:!0,style:{width:"100%",borderRadius:"8px",aspectRatio:"1"},children:Object(C.jsx)("source",{src:e.collection.nft.video,type:"video/mp4"})})}),Object(C.jsx)("div",{style:{position:"relative",height:"0",width:"0"},children:Object(C.jsx)("div",{style:s,children:e.collection.nft.rarity})}),Object(C.jsxs)(m.a,{direction:"row",justifyContent:"space-between",alignItems:"center",style:{marginBottom:"0.8rem"},children:[Object(C.jsxs)(m.a,{children:[Object(C.jsx)(b.a,{variant:"h6",style:{fontWeight:"700",marginBottom:"0.8rem"},children:e.collection.nft.name}),"undefined"!==typeof e.collection.id&&Object(C.jsxs)(b.a,{style:{opacity:"0.5",fontSize:"0.8rem",marginTop:"-1rem"},children:["id: ",e.collection.id]})]}),"undefined"!==typeof e.collection.description&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(u.a,{variant:"container",style:B,onClick:function(e){return R(e.currentTarget)},children:Object(C.jsx)("img",{src:"/static/SHAZU/icons/info.svg",className:"pe-none",alt:"",style:{width:"100%",opacity:"0.5"}})}),Object(C.jsx)(h.a,{open:Boolean(S),anchorEl:S,onClose:function(){return R(null)},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"center"},PaperProps:{sx:{p:1,maxWidth:200}},children:e.collection.description})]})]}),e.ownedAction&&Object(C.jsx)("div",{className:"nft-owned-action shadow-sm",children:Object(C.jsx)(m.a,{direction:"row",spacing:2,justifyContent:"space-between",alignItems:"center",children:Object(C.jsxs)(m.a,{direction:"row",spacing:1,style:{width:"100%"},children:[Object(C.jsx)(u.a,{onClick:function(e){te(e.currentTarget)},variant:"contained",color:"yellow",className:"nft-owned-action-btn",children:"Transfer"}),Object(C.jsx)(h.a,{open:Boolean(ee),anchorEl:ee,onClose:ae,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(C.jsxs)(j.a,{sx:{p:2,maxWidth:"30rem",width:"90vw"},children:[Object(C.jsx)(b.a,{variant:"subtitle1",gutterBottom:!0,children:"Destination Address"}),Object(C.jsx)(T,{fullWidth:!0,type:"search",size:"small",onChange:function(e){X(e.target.value)}}),Object(C.jsxs)(b.a,{variant:"body2",sx:{color:"text.secondary",marginTop:"0.2rem"},children:[e.collection.nft.name," (",e.collection.id,")"]}),Object(C.jsx)(u.a,{disabled:!K,variant:"contained",color:"yellow",onClick:function(){if(""===G||null===G)return alert("Fill the Destination Address first!"),!1;try{_(Object(f.a)(G)),z(),Z(!0),ae()}catch(e){return alert("Invalid Destination Address!"),!1}},style:{marginTop:"2rem",width:"100%"},children:"Transfer"})]})}),Object(C.jsx)(u.a,{onClick:function(t){var a=JSON.parse(t.target.value);console.info(a),e.handleOpenListingDialog(a)},value:JSON.stringify(e.collection),variant:"contained",color:"success",className:"nft-owned-action-btn",children:"List"})]})})}),"undefined"!==typeof e.amount&&Object(C.jsx)("div",{className:"p-relative w-100",children:Object(C.jsxs)("div",{className:"nft-card-amount",children:["x",e.amount]})}),"undefined"!==typeof e.collection.saleData&&e.editListingAction&&Object(C.jsx)("div",{className:"p-relative w-100",children:Object(C.jsx)("div",{className:"nft-sale-info shadow-sm",children:Object(C.jsxs)(m.a,{direction:"row",spacing:2,justifyContent:"space-between",alignItems:"center",children:[Object(C.jsxs)(m.a,{children:[Object(C.jsx)("div",{className:"nft-sale-caption",children:"Listing price"}),Object(C.jsxs)(m.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(C.jsxs)("div",{children:[Object(v.a)(e.collection.saleData.price)," ",e.collection.saleData.currency]}),"BNB"===e.collection.saleData.currency&&Object(C.jsx)("img",{src:"/static/SHAZU/icons/ic_bnb.svg",alt:"",style:{width:"1rem",height:"1rem",marginLeft:"0.2rem",marginBottom:"0.2rem"}}),"SHAZU"===e.collection.saleData.currency&&Object(C.jsx)("img",{src:"/static/SHAZU/icons/ic_shazu.png",alt:"",style:{width:"1rem",height:"1rem",marginLeft:"0.2rem",marginBottom:"0.2rem"}})]})]}),Object(C.jsx)(u.a,{variant:"container",value:JSON.stringify(e.collection),style:A,onClick:function(t){var a=JSON.parse(t.target.value);e.handleOpenEditListingDialog(a)},children:Object(C.jsx)("img",{src:"/static/SHAZU/icons/edit.svg",className:"pe-none",alt:"",style:{width:"100%",opacity:"0.5"}})})]})})}),"undefined"!==typeof e.collection.marketData&&e.marketplaceListing&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"elevate-card-sm",style:{marginBottom:"1rem"},children:Object(C.jsxs)(m.a,{direction:"column",justifyContent:"space-between",children:[Object(C.jsx)("div",{style:{fontSize:"0.8rem"},children:"Price:"}),Object(C.jsxs)(m.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(C.jsxs)("div",{style:{fontSize:"1rem",fontWeight:"700"},children:[e.collection.saleData.price," ",e.collection.saleData.currency]}),"BNB"===e.collection.saleData.currency&&Object(C.jsx)("img",{src:"/static/SHAZU/icons/ic_bnb.svg",alt:"",style:{width:"1.2rem",height:"1.2rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}}),"SHAZU"===e.collection.saleData.currency&&Object(C.jsx)("img",{src:"/static/SHAZU/icons/ic_shazu.png",alt:"",style:{width:"1.2rem",height:"1.2rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}})]})]})}),Object(C.jsx)(m.a,{direction:"column",justifyContent:"space-between",style:{marginBottom:"0.8rem",marginTop:"-0.2rem"},children:Object(C.jsx)("div",{style:{fontSize:"0.8rem",textAlign:"right"},children:Object(C.jsxs)(m.a,{direction:"row",alignItems:"center",justifyContent:"end",spacing:1,children:[Object(C.jsx)("div",{children:"Floor Price:"}),Object(C.jsxs)(m.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(C.jsxs)("span",{style:{fontWeight:"700"},children:[e.collection.marketData.floorPrice," ",e.collection.marketData.currency]}),"BNB"===e.collection.marketData.currency&&Object(C.jsx)("img",{src:"/static/SHAZU/icons/ic_bnb.svg",alt:"",style:{width:"1rem",height:"1rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}}),"SHAZU"===e.collection.marketData.currency&&Object(C.jsx)("img",{src:"/static/SHAZU/icons/ic_shazu.png",alt:"",style:{width:"1rem",height:"1rem",marginLeft:"0.2rem",marginBottom:"0.1rem"}})]})]})})}),Object(C.jsxs)(m.a,{direction:"row",spacing:1,children:[Object(C.jsx)(O.a,{style:{width:"50%"},className:"no-hover-line",component:x.c,to:"/marketplace/detail/".concat(e.collection.id),children:Object(C.jsx)(u.a,{variant:"outlined",color:"yellow",style:{width:"100%"},children:"Details"})}),Object(C.jsx)(u.a,{onClick:function(e){var t,a,i=JSON.parse(e.target.value);t="Buy NFT Successful",a="id: ".concat(i.nftId),z(),de(t),ue(a),ce({open:!0,success:!0})},value:JSON.stringify(e.collection),variant:"contained",color:"success",style:{width:"50%"},children:"Buy"})]}),Object(C.jsx)(y.b,{open:ne.open,maxWidth:"xs",animate:y.j,scroll:"paper",onClose:function(){ce(Object(i.a)(Object(i.a)({},ne),{},{open:!1})),de(""),ge("")},children:Object(C.jsxs)(p.a,{style:{textAlign:"center"},children:[ne.success?Object(C.jsx)("div",{className:"successCheck-lottie-container",children:Object(C.jsx)(l.a,{options:D,isClickToPauseDisabled:!0})}):Object(C.jsx)("div",{className:"successCheck-lottie-container",children:Object(C.jsx)(l.a,{options:k,isClickToPauseDisabled:!0})}),Object(C.jsx)(b.a,{variant:"h3",children:le}),ne.success?Object(C.jsx)("div",{className:"elevate-card",children:Object(C.jsx)(b.a,{variant:"h5",children:me})}):Object(C.jsx)("div",{children:Oe})]})})]}),"undefined"!==typeof e.collection.topSaleData&&e.topSale&&Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:"elevate-card",style:{marginBottom:"0.4rem",marginTop:"-0.4rem"},children:Object(C.jsxs)(m.a,{alignItems:"center",children:[Object(C.jsxs)("div",{style:{fontSize:"1.2rem",fontWeight:"700"},children:[e.collection.topSaleData.price," ",e.collection.topSaleData.currency]}),Object(C.jsxs)("div",{children:["$",Object(v.a)(e.collection.topSaleData.inUSD)]})]})})})]})]})}},963:function(e,t,a){"use strict";var i=a(0),r=i.createContext();t.a=r}}]);