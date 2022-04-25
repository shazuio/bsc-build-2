(this.webpackJsonpshazu=this.webpackJsonpshazu||[]).push([[10],{1e3:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"token_","type":"address"},{"internalType":"bytes32","name":"merkleRoot_","type":"bytes32"},{"internalType":"uint256","name":"_startVesting","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"merkleRoot","type":"bytes32"}],"name":"SetMerkleRoots","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"}],"name":"SetMinSwapAmount","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Sweep","type":"event"},{"inputs":[],"name":"VESTED_PERIOD_LENGTH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VESTING_LENGTH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_amountAllowedToClaim","type":"uint256"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_amountAllowedToClaim","type":"uint256"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"getClaimableAmount","outputs":[{"internalType":"uint256","name":"claimable","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minAmountToClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"name":"setMerkleRoots","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minAmount","type":"uint256"}],"name":"setMinSwapAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startVesting","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_recepient","type":"address"}],"name":"sweep","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},1111:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Z}));var a=n(5),i=n(12),s=n(950),r=n(929),o=n(902),l=n(268),c=n(533),p=n(909),u=n(943),d=n(945),m=n(919),y=n(11),b=n(976),j=n(0),f=n(954),h=n.n(f),O=n(955),x=(n(156),n(957)),g=n(351),T=n(119),v=n(956),w=n(958),S=n(959),k=n(998),A=n(860),M=n(864),C=n(1122),N=n(1123),_=n(974),E=n(1),H=Object(y.a)(m.a.div)((function(e){e.theme;return{}})),R={loop:!1,autoplay:!0,animationData:v,background:"transparent"},U={loop:!1,autoplay:!0,animationData:w,background:"transparent"};function Z(){var e=Object(M.a)().account,t=Object(k.a)("snc"),n=Object(j.useState)("0"),y=Object(i.a)(n,2),f=y[0],v=y[1],w=Object(j.useState)("0"),Z=Object(i.a)(w,2),I=Z[0],P=Z[1],z=Object(j.useState)("0"),B=Object(i.a)(z,2),D=B[0],F=B[1],L=Object(j.useState)("0"),J=Object(i.a)(L,2),G=J[0],V=J[1],W=Object(j.useState)(!1),q=Object(i.a)(W,2),K=q[0],Q=q[1],X=Object(O.a)(S.a),Y=Object(i.a)(X,2),$=Y[0];Y[1].stopPopDingSound;Object(j.useEffect)((function(){if(t&&""!==t.amount){var e=A.a.parseEther(A.a.formatEther(t.amount.toString()));F(A.a.formatEther(e))}}),[t,e]);var ee=Object(C.a)([{contract:_.b,address:_.d,method:"getClaimableAmount",args:[t.index,e,t.amount,t.proof]},{contract:_.b,address:_.d,method:"claimed",args:[e]}]),te=Object(i.a)(ee,2),ne=te[0],ae=te[1];Object(j.useEffect)((function(){if(ne&&ne.value){var e=A.a.parseEther(A.a.formatEther(ne.value[0].toString()));P(A.a.formatEther(e))}if(ae&&ae.value){var t=A.a.parseEther(A.a.formatEther(ae.value[0].toString()));V(A.a.formatEther(t))}}),[ne,ae,e]),console.log(ne);var ie=Object(j.useState)({open:!1,success:!1}),se=Object(i.a)(ie,2),re=se[0],oe=se[1],le=Object(j.useState)(""),ce=Object(i.a)(le,2),pe=ce[0],ue=ce[1],de=Object(j.useState)(0),me=Object(i.a)(de,2),ye=me[0],be=me[1],je=Object(j.useState)(""),fe=Object(i.a)(je,2),he=fe[0],Oe=fe[1],xe=function(e,t,n){$(),ue(e),be(t),oe({open:!0,success:!1}),Oe(n)},ge=Object(N.a)(_.b,"claim",{transactionName:"Claim Aidrop SHAZU"}),Te=ge.state,ve=ge.send;Object(j.useEffect)((function(){var e,t;"Exception"===Te.status&&(Q(!1),xe("Airdrop Claim Failed",I,Te.errorMessage)),"Fail"===Te.status&&(Q(!1),xe("Airdrop Claim Failed",I,Te.errorMessage)),"None"===Te.status&&Q(!1),"Success"===Te.status&&(Q(!1),e="Airdrop Claim Success",t=f,$(),ue(e),be(t),oe({open:!0,success:!0}))}),[Te,e]);return Object(E.jsxs)(g.a,{title:"SHAZU - Token",style:{overflow:"hidden"},children:[Object(E.jsx)(H,{initial:"initial",animate:"animate",variants:T.i,children:Object(E.jsxs)("section",{children:[Object(E.jsx)(b.Parallax,{blur:{min:-10,max:40},strength:1e3,style:{position:"absolute",width:"100%",height:"100%",zIndex:"-1"},bgImage:"/static/SHAZU/background/gradient-before-2.svg",bgImageAlt:""}),Object(E.jsx)(s.a,{maxWidth:"xl",children:Object(E.jsxs)(r.a,{container:!0,spacing:2,alignItems:"stretch",direction:"row",justifyContent:"flex-start",style:{paddingTop:"4rem"},children:[Object(E.jsx)(r.a,{item:!0,xs:12,md:12,lg:6,xl:6,children:Object(E.jsx)(m.a.div,{variants:T.h,children:Object(E.jsxs)(o.a,{className:"shazu-coin-stack-container floating",style:{marginTop:"-2rem"},children:[Object(E.jsx)("img",{src:"/static/SHAZU/misc/parachute.png",alt:"",style:{width:"70%",maxWidth:"20rem",margin:"auto"}}),Object(E.jsxs)("div",{style:{position:"relative",width:"100%",display:"flex",justifyContent:"center"},children:[Object(E.jsx)("img",{className:"floating2",src:"/static/SHAZU/misc/coin1.png",alt:"",style:{width:"4rem",position:"absolute",marginTop:"-4rem",marginLeft:"-4rem"}}),Object(E.jsx)("img",{className:"floating3",src:"/static/SHAZU/misc/coin2.png",alt:"",style:{width:"4rem",position:"absolute",marginTop:"-4rem",marginRight:"-4rem"}}),Object(E.jsx)("img",{className:"floating4",src:"/static/SHAZU/misc/coin3.png",alt:"",style:{width:"4rem",position:"absolute",marginTop:"-6rem",marginLeft:"-6rem"}}),Object(E.jsx)("img",{className:"floating2",src:"/static/SHAZU/misc/coin1.png",alt:"",style:{width:"4rem",position:"absolute",marginTop:"-10rem",marginRight:"-8rem"}})]})]})})}),Object(E.jsx)(r.a,{item:!0,xs:12,md:12,lg:6,xl:6,style:{display:"flex"},children:Object(E.jsxs)(o.a,{style:{width:"100%"},children:[Object(E.jsx)(m.a.div,{variants:T.h,children:Object(E.jsx)(o.a,{children:Object(E.jsxs)("div",{className:"gradient-card left-gradient-bar",style:{width:"fit-content",padding:"1rem"},children:[Object(E.jsxs)(l.a,{className:"neo-font",style:{lineHeight:"1",marginBottom:"0.4rem",fontSize:"3rem"},children:["SHAZU ",Object(E.jsx)("span",{className:"yellow-color",children:"Airdrop"})]}),Object(E.jsx)("div",{children:"For all participants who minted SNC NFT will be able to claim their airdrop below which will be vested for 12 weeks with weekly unlocks."})]})})}),Object(E.jsx)(m.a.div,{variants:T.h,style:{marginTop:"2rem"},children:Object(E.jsx)(c.a,{className:"gradient-border gradient-border-red",style:{width:"100%",padding:"0.1rem",margin:"0.4rem",maxWidth:"45rem",marginBottom:"10rem",marginInline:"auto"},children:Object(E.jsxs)("div",{className:"shadow-sm",style:{backgroundColor:"#141416",padding:"1.4rem 1rem",borderRadius:"8px",marginBottom:"1rem",backgroundImage:"url(/static/SHAZU/snc/snc-card-bg.jpg)",backgroundPosition:"center"},children:[Object(E.jsx)(l.a,{variant:"h3",children:"Claim your SHAZU Airdrop!"}),Object(E.jsx)(p.a,{style:{marginTop:"0.4rem",marginBottom:"1rem"}}),Object(E.jsxs)("div",{className:"elevate-card-sm",style:{marginTop:"0.4rem",padding:"0.6rem"},children:[Object(E.jsx)("div",{children:"Rewards"}),Object(E.jsxs)("div",{className:"bold-yellow",style:{fontSize:"1.6rem",marginTop:"-0.4rem"},children:[Object(x.a)(D)," SHAZU"]})]}),Object(E.jsxs)("div",{className:"elevate-card-sm",style:{marginTop:"0.4rem",padding:"0.6rem"},children:[Object(E.jsx)("div",{children:"Claimed"}),Object(E.jsxs)("div",{className:"bold-yellow",style:{fontSize:"1.6rem",marginTop:"-0.4rem"},children:[Object(x.a)(G)," SHAZU"]})]}),Object(E.jsxs)("div",{className:"elevate-card-sm",style:{marginTop:"0.4rem",padding:"0.6rem"},children:[Object(E.jsx)("div",{children:"Available to claim"}),Object(E.jsxs)("div",{className:"bold-yellow",style:{fontSize:"1.6rem",marginTop:"-0.4rem"},children:[Object(x.a)(I)," SHAZU"]})]}),Object(E.jsx)(u.a,{onClick:function(){Q(!0),v(I),ve(t.index,e,t.amount,t.proof)},disabled:K||A.a.parseEther(I).eq("0"),variant:"contained",color:"yellow",size:"large",style:{width:"100%",marginTop:"2rem"},children:K?Object(E.jsx)(E.Fragment,{children:"CLAIMING ..."}):Object(E.jsx)(E.Fragment,{children:"CLAIM"})})]})})})]})})]})})]})}),Object(E.jsx)(T.b,{open:re.open,maxWidth:"xs",animate:T.j,scroll:"paper",onClose:function(){oe(Object(a.a)(Object(a.a)({},re),{},{open:!1})),ue(""),be(0)},children:Object(E.jsxs)(d.a,{style:{textAlign:"center"},children:[re.success?Object(E.jsx)("div",{className:"successCheck-lottie-container",children:Object(E.jsx)(h.a,{options:R,isClickToPauseDisabled:!0})}):Object(E.jsx)("div",{className:"successCheck-lottie-container",children:Object(E.jsx)(h.a,{options:U,isClickToPauseDisabled:!0})}),Object(E.jsx)(l.a,{variant:"h3",children:pe}),re.success?Object(E.jsx)("div",{className:"elevate-card",children:Object(E.jsxs)(l.a,{variant:"h5",children:[Object(x.a)(ye)," SHAZU"]})}):Object(E.jsx)("div",{children:he})]})})]})}},974:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"e",(function(){return m}));var a=n(860),i=n(122),s=n(999),r=n(1e3),o="0xa4Bc51d70aA75b664d0e6A3bdfDF37B483e627b8",l="0xB6508d6b1d72BfC2548261Be27d364eE99b6517c",c=new a.a.Interface(s),p=new a.a.Interface(r),u=new i.a(o,c),d=new i.a(l,p),m="https://tokens.shenzuninja.workers.dev"},998:function(e,t,n){"use strict";var a=n(3),i=n.n(a),s=n(17),r=n(12),o=n(864),l=n(0),c=n(974);t.a=function(e){var t=Object(l.useState)({index:0,amount:"",proof:[]}),n=Object(r.a)(t,2),a=n[0],p=n[1],u=Object(o.a)().account,d=Object(l.useCallback)(Object(s.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!u){t.next=14;break}return t.prev=1,t.next=4,fetch(c.e,{body:JSON.stringify({key:"".concat(e,":").concat(u)}),headers:{"Content-Type":"application/json","Referrer-Policy":"no-referrer"},method:"POST"});case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,p(a),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),p({index:0,amount:"0",proof:[]});case 14:case"end":return t.stop()}}),t,null,[[1,11]])}))),[u]);return Object(l.useEffect)((function(){d()}),[u,d]),a}},999:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"token_","type":"address"},{"internalType":"bytes32","name":"merkleRoot_","type":"bytes32"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"merkleRoot","type":"bytes32"}],"name":"SetMerkleRoots","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"}],"name":"SetMinSwapAmount","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Sweep","type":"event"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_amountAllowedToClaim","type":"uint256"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minAmountToClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"name":"setMerkleRoots","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minAmount","type":"uint256"}],"name":"setMinSwapAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_recepient","type":"address"}],"name":"sweep","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')}}]);