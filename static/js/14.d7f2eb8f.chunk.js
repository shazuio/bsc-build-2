(this.webpackJsonpshazu=this.webpackJsonpshazu||[]).push([[14,15],{1011:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r=n(3),o=n.n(r),i=n(27),a=n(17),c=n(12),u=n(0),s=n(867),l=n(529),f=n(258),d=n(8);function p(t,e,n){if(t.signer)return t;if(null===e||void 0===e?void 0:e.signer)return t.connect(e.signer);if(null===n||void 0===n?void 0:n.getSigner())return t.connect(n.getSigner());throw new TypeError("No signer available in contract, options or library")}function g(t,e,n){var r=Object(s.a)(),g=r.library,b=function(t,e){var n=Object(u.useState)({status:"None"}),r=Object(c.a)(n,2),i=r[0],s=r[1],p=Object(l.b)().addTransaction,g=Object(f.b)().addNotification,b=Object(u.useCallback)((function(){s({status:"None"})}),[s]);return{promiseTransaction:Object(u.useCallback)(function(){var n=Object(a.a)(o.a.mark((function n(r){var i,a,c,u,l,f,b,h,m,y;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return b=void 0,n.prev=3,s({status:"PendingSignature",chainId:t}),n.next=7,r;case 7:return b=n.sent,s({transaction:b,status:"Mining",chainId:t}),p({transaction:Object.assign(Object.assign({},b),{chainId:t}),submittedAt:Date.now(),transactionName:null===e||void 0===e?void 0:e.transactionName}),n.next=12,b.wait();case 12:return h=n.sent,s({receipt:h,transaction:b,status:"Success",chainId:t}),n.abrupt("return",h);case 17:return n.prev=17,n.t0=n.catch(3),m=null!==(l=null!==(c=null!==(a=null===(i=n.t0.error)||void 0===i?void 0:i.message)&&void 0!==a?a:n.t0.reason)&&void 0!==c?c:null===(u=n.t0.data)||void 0===u?void 0:u.message)&&void 0!==l?l:n.t0.message,b?(null===(o=n.t0)||void 0===o?void 0:o.code)!==d.a.TRANSACTION_REPLACED||!(null===o||void 0===o?void 0:o.replacement)||"repriced"!==(null===o||void 0===o?void 0:o.reason)&&!1!==(null===o||void 0===o?void 0:o.cancelled)?s({status:"Fail",transaction:b,receipt:n.t0.receipt,errorMessage:m,chainId:t}):(y=0===n.t0.receipt.status?"Fail":"Success",g({notification:{type:"Fail"===y?"transactionFailed":"transactionSucceed",submittedAt:Date.now(),transaction:n.t0.replacement,receipt:n.t0.receipt,transactionName:null===(f=n.t0.replacement)||void 0===f?void 0:f.transactionName,originalTransaction:b},chainId:t}),s({status:y,transaction:n.t0.replacement,originalTransaction:b,receipt:n.t0.receipt,errorMessage:m,chainId:t})):s({status:"Exception",errorMessage:m,chainId:t}),n.abrupt("return",void 0);case 22:case"end":return n.stop()}var o}),n,null,[[3,17]])})));return function(t){return n.apply(this,arguments)}}(),[t,s,p,e]),state:i,resetState:b}}(r.chainId,n),h=b.promiseTransaction,m=b.state,y=b.resetState,v=Object(u.useState)(void 0),S=Object(c.a)(v,2),O=S[0],w=S[1];return{send:Object(u.useCallback)(Object(a.a)(o.a.mark((function r(){var a,c,u,s=arguments;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=p(t,n,g),r.next=3,h(a[e].apply(a,s));case 3:(null===(c=r.sent)||void 0===c?void 0:c.logs)&&(u=c.logs.reduce((function(e,n){try{return n.address.toLowerCase()===t.address.toLowerCase()?[].concat(Object(i.a)(e),[t.interface.parseLog(n)]):e}catch(r){return e}}),[]),w(u));case 5:case"end":return r.stop()}}),r)}))),[t,e,n,g]),state:m,events:O,resetState:y}}},976:function(t,e,n){var r;"undefined"!=typeof self&&self,r=function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(e,n){e.exports=t},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Background=e.Parallax=void 0;var f=l(n(0)),d=function(t){i(n,t);var e=c(n);function n(){return o(this,n),e.apply(this,arguments)}return n}(f.default.Component);e.Parallax=d;var p=function(t){i(n,t);var e=c(n);function n(){return o(this,n),e.apply(this,arguments)}return n}(f.default.Component);e.Background=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.canUseDOM=e.getNodeHeight=e.isScrolledIntoView=e.getWindowHeight=void 0,e.getWindowHeight=function(t){if(!t)return 0;var e=window,n=document,r=n.documentElement,o=n.getElementsByTagName("body")[0];return e.innerHeight||r.clientHeight||o.clientHeight},e.isScrolledIntoView=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;if(!r)return!1;var o=t.getBoundingClientRect().top-n,i=t.getBoundingClientRect().bottom+n;return o<=e.getWindowHeight(r)&&i>=0},e.getNodeHeight=function(t,n){return t?n&&"clientHeight"in n?n.clientHeight:e.getWindowHeight(t):0},e.canUseDOM=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Background=e.Parallax=void 0;var o=r(n(4));e.Parallax=o.default;var i=r(n(7));e.Background=i.default},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=u(n(0)),l=n(1),f=n(5),d=n(2),p=u(n(6)),g={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(n,t);var e=function(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}(n);function n(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(r=e.call(this,t)).onWindowResize=function(){r.parentHeight=d.getNodeHeight(r.canUseDOM,r.parent),r.updatePosition()},r.onWindowLoad=function(){r.updatePosition()},r.onScroll=function(){if(r.canUseDOM){var t=Date.now();t-r.timestamp>=10&&d.isScrolledIntoView(r.node,100,r.canUseDOM)&&(window.requestAnimationFrame(r.updatePosition),r.timestamp=t)}},r.onContentMount=function(t){r.content=t},r.updatePosition=function(){if(r.content){var t=!1;r.contentHeight=r.content.getBoundingClientRect().height,r.contentWidth=r.node.getBoundingClientRect().width,r.img&&r.img.naturalWidth/r.img.naturalHeight<r.contentWidth/r.getImageHeight()&&(t=!0);var e=f.getRelativePosition(r.node,r.canUseDOM),n=!!r.img,o=r.bg&&r.state.splitChildren.bgChildren.length>0;n&&r.setImagePosition(e,t),o&&r.setBackgroundPosition(e),n||o||r.setState({percentage:e})}},r.state={bgImage:t.bgImage,bgImageSrcSet:t.bgImageSrcSet,bgImageSizes:t.bgImageSizes,imgStyle:g,bgStyle:Object.assign(Object.assign({},g),t.bgStyle),percentage:0,splitChildren:f.getSplitChildren(t)},r.canUseDOM=d.canUseDOM(),r.node=null,r.content=null,r.bgImageLoaded=!1,r.bgImageRef=void 0,r.parent=t.parent,r.parentHeight=d.getNodeHeight(r.canUseDOM,r.parent),r.timestamp=Date.now(),r.isDynamicBlur=f.getHasDynamicBlur(t.blur),r}return function(t,e,n){e&&o(t.prototype,e),n&&o(t,n)}(n,[{key:"componentDidMount",value:function(){var t=this.props.parent,e=this.state,n=e.bgImage,r=e.bgImageSrcSet,o=e.bgImageSizes;this.parent=t||document,this.addListeners(),n?this.loadImage(n,r,o):this.updatePosition()}},{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.parent,r=e.bgImage,o=e.bgImageSrcSet,i=e.bgImageSizes,a=this.state.bgImage;t.parent!==n&&(this.removeListeners(this.parent),this.parent=n,n&&this.addListeners()),this.parentHeight=d.getNodeHeight(this.canUseDOM,this.parent),a!==r&&this.loadImage(r,o,i)}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function(t){var e=this.props,n=e.disabled,r=e.strength,o=Object.assign({},this.state.bgStyle);if(!n){var i="translate3d(-50%, ".concat((r<0?r:0)-r*t,"px, 0)");o.WebkitTransform=i,o.transform=i}this.setState({bgStyle:o,percentage:t})}},{key:"setImagePosition",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props,r=n.disabled,o=n.strength,i=n.blur,a=e?"auto":"".concat(this.getImageHeight(),"px"),c=e?"".concat(this.contentWidth,"px"):"auto",u=Object.assign(Object.assign({},this.state.imgStyle),{height:a,width:c});if(!r){var s=o<0,l=(s?o:0)-o*t,d="translate3d(-50%, ".concat(l,"px, 0)"),p="none";i&&(p="blur(".concat(f.getBlurValue(this.isDynamicBlur,i,t),"px)")),u.WebkitTransform=d,u.transform=d,u.WebkitFilter=p,u.filter=p}this.setState({imgStyle:u,percentage:t})}},{key:"getImageHeight",value:function(){var t=this.props.strength,e=(t<0?2.5:1)*Math.abs(t);return Math.floor(this.contentHeight+e)}},{key:"loadImage",value:function(t,e,n){var r=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(o){r.setState({bgImage:t,bgImageSrcSet:e,bgImageSizes:n},(function(){return r.updatePosition()})),r.props.onLoad&&r.props.onLoad(o)},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=t,this.bgImageRef.srcset=e||"",this.bgImageRef.sizes=n||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(t){this.canUseDOM&&(t&&t.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function(){var t=this,e=this.props,n=e.className,r=e.style,o=e.bgClassName,i=e.contentClassName,a=e.bgImageAlt,c=e.renderLayer,u=e.bgImageStyle,l=this.state,f=l.bgImage,d=l.bgImageSrcSet,g=l.bgImageSizes,b=l.percentage,h=l.imgStyle,m=l.bgStyle,y=l.splitChildren;return s.default.createElement("div",{className:"react-parallax ".concat(n),style:Object.assign({position:"relative",overflow:"hidden"},r),ref:function(e){t.node=e}},f?s.default.createElement("img",{className:o,src:f,srcSet:d,sizes:g,ref:function(e){t.img=e},alt:a,style:Object.assign(Object.assign({},h),u)}):null,c?c(-(b-1)):null,y.bgChildren.length>0?s.default.createElement("div",{className:"react-parallax-background-children",ref:function(e){t.bg=e},style:m},y.bgChildren):null,s.default.createElement(p.default,{onMount:this.onContentMount,className:i},y.children))}}],[{key:"getDerivedStateFromProps",value:function(t){return{splitChildren:f.getSplitChildren(t)}}}]),n}(l.Parallax);b.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},e.default=b},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.setBlur=e.getBlurValue=e.getHasDynamicBlur=e.getSplitChildren=e.getRelativePosition=e.getPercentage=void 0;var o=n(0),i=n(2);e.getPercentage=function(t,e,n){return(n-t)/(e-t)||0},e.getRelativePosition=function(t,n){if(!n)return 0;var r=t.getBoundingClientRect(),o=r.top,a=r.height,c=i.getNodeHeight(n),u=a>c?a:c,s=Math.round(o>u?u:o);return e.getPercentage(0,u,s)},e.getSplitChildren=function(t){var e=[],n=o.Children.toArray(t.children);return n.forEach((function(t,r){var o=t;o.type&&o.type.isParallaxBackground&&(e=e.concat(n.splice(r,1)))})),{bgChildren:e,children:n}},e.getHasDynamicBlur=function(t){return"object"===r(t)&&void 0!==t.min&&void 0!==t.max},e.getBlurValue=function(t,e,n){return t?e.min+(1-n)*e.max:e},e.setBlur=function(t,e){t.style.webkitFilter="blur(".concat(e,"px)"),t.style.filter="blur(".concat(e,"px)")}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(0));e.default=function(t){var e=t.children,n=t.onMount,r=t.className;return o.default.createElement("div",{ref:function(t){return n(t)},className:r||"react-parallax-content",style:{position:"relative"}},e)}},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var l=s(n(0)),f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(n,t);var e=function(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}(n);function n(){return o(this,n),e.apply(this,arguments)}return function(t,e,n){e&&i(t.prototype,e),n&&i(t,n)}(n,[{key:"render",value:function(){var t=this.props,e=t.className,n=t.children;return l.default.createElement("div",{className:"react-parallax-background ".concat(e)},n)}}]),n}(n(1).Background);f.defaultProps={className:""},f.isParallaxBackground=!0,e.default=f}])},t.exports=r(n(0))},980:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return s}));var r=n(0),o=n(528);function i(t){var e=Object(r.useContext)(o.a),n=e.dispatchCalls,i=e.chains;return Object(r.useEffect)((function(){var e=t.filter(Boolean);return n({type:"ADD_CALLS",calls:e}),function(){return n({type:"REMOVE_CALLS",calls:e})}}),[JSON.stringify(t),n]),Object(r.useMemo)((function(){return t.map((function(t){return t?function(t,e){var n,r,o,i,a=e.chainId;return void 0!==a?null===(i=null===(o=null===(r=null===(n=t[a])||void 0===n?void 0:n.value)||void 0===r?void 0:r.state)||void 0===o?void 0:o[e.address.toLowerCase()])||void 0===i?void 0:i[e.data]:void 0}(i,t):void 0}))}),[JSON.stringify(t),i])}var a=n(919),c=n(219);function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s([t],e)[0]}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(c.a)({queryParams:e}),o=Object(r.useMemo)((function(){return t.map((function(t){return void 0!==n?Object(a.b)(t,n):void 0}))}),[JSON.stringify(t.map((function(t){return t&&{address:t.contract.address.toLowerCase(),method:t.method,args:t.args}}))),n]),u=i(o);return Object(r.useMemo)((function(){return u.map((function(e,n){return Object(a.a)(t[n],e)}))}),[u])}}}]);