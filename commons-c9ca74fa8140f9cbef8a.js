/*! For license information please see commons-c9ca74fa8140f9cbef8a.js.LICENSE.txt */
"use strict";(self.webpackChunkgatsby_starter_dogmatism=self.webpackChunkgatsby_starter_dogmatism||[]).push([[351],{4643:function(e){var t=/["'&<>]/;e.exports=function(e){var r,n=""+e,a=t.exec(n);if(!a)return n;var o="",i=0,l=0;for(i=a.index;i<n.length;i++){switch(n.charCodeAt(i)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}l!==i&&(o+=n.substring(l,i)),l=i+1,o+=r}return l!==i?o+n.substring(l,i):o}},928:function(e,t,r){r.d(t,{Lu:function(){return E}});var n=r(7294),a=r(4643),o=r.n(a);function i(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function c(e){var t=e.attributes,r=void 0===t?{}:t,a=e.className,o=e.children,i=void 0===o?null:o,l=e.selfClose,s=void 0!==l&&l,c=e.tagName;return s?n.createElement(c,f({className:a},r)):n.createElement(c,f({className:a},r),i)}var u=function(){function e(){}var t=e.prototype;return t.attribute=function(e,t){return t},t.node=function(e,t){return t},e}(),d={a:{content:9,self:!1,type:105},address:{invalid:["h1","h2","h3","h4","h5","h6","address","article","aside","section","div","header","footer"],self:!1},audio:{children:["track","source"]},br:{type:9,void:!0},body:{content:127},button:{content:8,type:105},caption:{content:1,parent:["table"]},col:{parent:["colgroup"],void:!0},colgroup:{children:["col"],parent:["table"]},details:{children:["summary"],type:97},dd:{content:1,parent:["dl"]},dl:{children:["dt","dd"],type:1},dt:{content:1,invalid:["footer","header"],parent:["dl"]},figcaption:{content:1,parent:["figure"]},footer:{invalid:["footer","header"]},header:{invalid:["footer","header"]},hr:{type:1,void:!0},img:{void:!0},li:{content:1,parent:["ul","ol","menu"]},main:{self:!1},ol:{children:["li"],type:1},picture:{children:["source","img"],type:25},rb:{parent:["ruby","rtc"]},rp:{parent:["ruby","rtc"]},rt:{content:8,parent:["ruby","rtc"]},rtc:{content:8,parent:["ruby"]},ruby:{children:["rb","rp","rt","rtc"]},source:{parent:["audio","video","picture"],void:!0},summary:{content:8,parent:["details"]},table:{children:["caption","colgroup","thead","tbody","tfoot","tr"],type:1},tbody:{parent:["table"],children:["tr"]},td:{content:1,parent:["tr"]},tfoot:{parent:["table"],children:["tr"]},th:{content:1,parent:["tr"]},thead:{parent:["table"],children:["tr"]},tr:{parent:["table","tbody","thead","tfoot"],children:["th","td"]},track:{parent:["audio","video"],void:!0},ul:{children:["li"],type:1},video:{children:["track","source"]},wbr:{type:9,void:!0}};function p(e){return function(t){d[t]=s({},e,d[t])}}["address","main","div","figure","p","pre"].forEach(p({content:1,type:65})),["abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","ruby","samp","strong","sub","sup","time","u","var"].forEach(p({content:8,type:73})),["p","pre"].forEach(p({content:8,type:65})),["s","small","span","del","ins"].forEach(p({content:8,type:9})),["article","aside","footer","header","nav","section","blockquote"].forEach(p({content:1,type:67})),["h1","h2","h3","h4","h5","h6"].forEach(p({content:8,type:69})),["audio","canvas","iframe","img","video"].forEach(p({type:89}));var h=Object.freeze(d),m=["applet","base","body","command","embed","frame","frameset","head","html","link","meta","noscript","object","script","style","title"],g=Object.keys(h).filter((function(e){return"canvas"!==e&&"iframe"!==e})),b=Object.freeze({alt:1,cite:1,class:1,colspan:3,controls:4,datetime:1,default:4,disabled:4,dir:1,height:1,href:1,id:1,kind:1,label:1,lang:1,loading:1,loop:4,media:1,muted:4,poster:1,role:1,rowspan:3,scope:1,sizes:1,span:3,start:3,style:5,src:1,srclang:1,srcset:1,target:1,title:1,type:1,width:1}),v=Object.freeze({class:"className",colspan:"colSpan",datetime:"dateTime",rowspan:"rowSpan",srclang:"srcLang",srcset:"srcSet"}),y=/(url|image|image-set)\(/i,w=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,l(t,r),n.prototype.attribute=function(e,t){return"style"===e&&Object.keys(t).forEach((function(e){String(t[e]).match(y)&&delete t[e]})),t},n}(u),k=/^<(!doctype|(html|head|body)(\s|>))/i,x=/^(aria\x2D|data\x2D|[0-9A-Z_a-z\u017F\u212A]+:)/i,Z=/{{{(\w+)\/?}}}/;function C(){if("undefined"!=typeof window&&"undefined"!=typeof document)return document.implementation.createHTMLDocument("Interweave")}var N=function(){function e(e,t,r,n){void 0===t&&(t={}),void 0===r&&(r=[]),void 0===n&&(n=[]),this.allowed=void 0,this.banned=void 0,this.blocked=void 0,this.container=void 0,this.content=[],this.props=void 0,this.matchers=void 0,this.filters=void 0,this.keyIndex=void 0,this.props=t,this.matchers=r,this.filters=[].concat(n,[new w]),this.keyIndex=-1,this.container=this.createContainer(e||""),this.allowed=new Set(t.allowList||g),this.banned=new Set(m),this.blocked=new Set(t.blockList)}var t=e.prototype;return t.applyAttributeFilters=function(e,t){return this.filters.reduce((function(t,r){return null!==t&&"function"==typeof r.attribute?r.attribute(e,t):t}),t)},t.applyNodeFilters=function(e,t){return this.filters.reduce((function(t,r){return null!==t&&"function"==typeof r.node?r.node(e,t):t}),t)},t.applyMatchers=function(e,t){var r=this,n={},a=this.props,o=e,l=0,f=null;return this.matchers.forEach((function(e){var c=e.asTag().toLowerCase(),u=r.getTagConfig(c);if(!a[e.inverseName]&&r.isTagAllowed(c)&&r.canRenderChild(t,u)){for(var d="";o&&(f=e.match(o));){var p=f,h=p.index,m=p.length,g=p.match,b=p.valid,v=p.void,y=i(p,["index","length","match","valid","void"]),w=e.propName+l;h>0&&(d+=o.slice(0,h)),b?(d+=v?"{{{"+w+"/}}}":"{{{"+w+"}}}"+g+"{{{/"+w+"}}}",r.keyIndex+=1,l+=1,n[w]={children:g,matcher:e,props:s({},a,y,{key:r.keyIndex})}):d+=g,e.greedy?(o=d+o.slice(h+m),d=""):o=o.slice(h+(m||g.length))}e.greedy||(o=d+o)}})),0===l?e:this.replaceTokens(o,n)},t.canRenderChild=function(e,t){return!(!e.tagName||!t.tagName)&&(!e.void&&(e.children.length>0?e.children.includes(t.tagName):!(e.invalid.length>0&&e.invalid.includes(t.tagName))&&(t.parent.length>0?t.parent.includes(e.tagName):!(!e.self&&e.tagName===t.tagName)&&Boolean(e&&e.content&t.type))))},t.convertLineBreaks=function(e){var t=this.props,r=t.noHtml,n=t.disableLineBreaks;if(r||n||e.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))return e;var a=e.replace(/\r\n/g,"\n");return a=(a=a.replace(/\n{3,}/g,"\n\n\n")).replace(/\n/g,"<br/>")},t.createContainer=function(e){var t=(void 0!==r.g&&r.g.INTERWEAVE_SSR_POLYFILL||C)();if(t){var n=this.props.containerTagName||"body",a="body"===n||"fragment"===n?t.body:t.createElement(n);return e.match(k)||(a.innerHTML=this.convertLineBreaks(this.props.escapeHtml?o()(e):e)),a}},t.extractAttributes=function(e){var t=this,r=this.props.allowAttributes,n={},a=0;return 1===e.nodeType&&e.attributes?(Array.from(e.attributes).forEach((function(o){var i=o.name,l=o.value,s=i.toLowerCase(),f=b[s]||b[i];if(t.isSafe(e)&&(s.match(x)||(r||f&&2!==f)&&!s.startsWith("on")&&!l.replace(/(\s|\0|&#x0([9AD]);)/,"").match(/(javascript|vbscript|livescript|xss):/i))){var c="style"===s?t.extractStyleAttribute(e):l;4===f?c=!0:3===f?c=Number.parseFloat(String(c)):5!==f&&(c=String(c)),n[v[s]||s]=t.applyAttributeFilters(s,c),a+=1}})),0===a?null:n):null},t.extractStyleAttribute=function(e){var t={};return Array.from(e.style).forEach((function(r){var n=e.style[r];"string"!=typeof n&&"number"!=typeof n||(t[r.replace(/-([a-z])/g,(function(e,t){return t.toUpperCase()}))]=n)})),t},t.getTagConfig=function(e){var t={children:[],content:0,invalid:[],parent:[],self:!0,tagName:"",type:0,void:!1};return h[e]?s({},t,h[e],{tagName:e}):t},t.isSafe=function(e){if("undefined"!=typeof HTMLAnchorElement&&e instanceof HTMLAnchorElement){var t=e.getAttribute("href");if(t&&"#"===t.charAt(0))return!0;var r=e.protocol.toLowerCase();return":"===r||"http:"===r||"https:"===r||"mailto:"===r||"tel:"===r}return!0},t.isTagAllowed=function(e){return!this.banned.has(e)&&!this.blocked.has(e)&&(this.props.allowElements||this.allowed.has(e))},t.parse=function(){return this.container?this.parseNode(this.container,this.getTagConfig(this.container.nodeName.toLowerCase())):[]},t.parseNode=function(e,t){var r=this,a=this.props,o=a.noHtml,i=a.noHtmlExceptMatchers,l=a.allowElements,f=a.transform,u=a.transformOnlyAllowList,d=[],p="";return Array.from(e.childNodes).forEach((function(e){if(1===e.nodeType){var a=e.nodeName.toLowerCase(),h=r.getTagConfig(a);p&&(d.push(p),p="");var m,g=r.applyNodeFilters(a,e);if(!g)return;if(f&&(!u||r.isTagAllowed(a))){r.keyIndex+=1;var b=r.keyIndex;m=r.parseNode(g,h);var v=f(g,m,h);if(null===v)return;if(void 0!==v)return void d.push(n.cloneElement(v,{key:b}));r.keyIndex=b-1}if(r.banned.has(a))return;if(o||i&&"br"!==a||!r.isTagAllowed(a)||!l&&!r.canRenderChild(t,h))d=d.concat(r.parseNode(g,h.tagName?h:t));else{r.keyIndex+=1;var y=r.extractAttributes(g),w={tagName:a};y&&(w.attributes=y),h.void&&(w.selfClose=h.void),d.push(n.createElement(c,s({},w,{key:r.keyIndex}),m||r.parseNode(g,h)))}}else if(3===e.nodeType){var k=o&&!i?e.textContent:r.applyMatchers(e.textContent||"",t);Array.isArray(k)?d=d.concat(k):p+=k}})),p&&d.push(p),d},t.replaceTokens=function(e,t){if(!e.includes("{{{"))return e;for(var r=[],n=e,a=null;a=n.match(Z);){var o=a,i=o[0],l=o[1],s=a.index,f=i.includes("/");0,s>0&&(r.push(n.slice(0,s)),n=n.slice(s));var c=t[l],u=c.children,d=c.matcher,p=c.props,h=void 0;if(f)h=i.length,r.push(d.createElement(u,p));else{var m=n.match(new RegExp("{{{/"+l+"}}}"));0,h=m.index+m[0].length,r.push(d.createElement(this.replaceTokens(n.slice(i.length,m.index),t),p))}n=n.slice(h)}return n.length>0&&r.push(n),0===r.length?"":1===r.length&&"string"==typeof r[0]?r[0]:r},e}();function E(e){var t,r=e.attributes,a=e.className,o=e.containerTagName,i=e.content,l=e.emptyContent,s=e.parsedContent,f=e.tagName,u=o||f||"span",d="fragment"===u||e.noWrap;if(s)t=s;else{var p=new N(i||"",e).parse();p.length>0&&(t=p)}return t||(t=l),d?n.createElement(n.Fragment,null,t):n.createElement(c,{attributes:r,className:a,tagName:u},t)}},1709:function(e,t,r){var n=r(9900),a=r(7294),o=r(9785),i=r(5861);function l(e){var t=(0,o.Z)(),r=t.formatMessage,n=t.textComponent,i=void 0===n?a.Fragment:n,l=e.id,s=e.description,f=e.defaultMessage,c=e.values,u=e.children,d=e.tagName,p=void 0===d?i:d,h=r({id:l,description:s,defaultMessage:f},c,{ignoreTag:e.ignoreTag});return"function"==typeof u?u(Array.isArray(h)?h:[h]):p?a.createElement(p,null,a.Children.toArray(h)):a.createElement(a.Fragment,null,h)}l.displayName="FormattedMessage";var s=a.memo(l,(function(e,t){var r=e.values,a=(0,n._T)(e,["values"]),o=t.values,l=(0,n._T)(t,["values"]);return(0,i.wU)(o,r)&&(0,i.wU)(a,l)}));s.displayName="MemoizedFormattedMessage",t.Z=s},9785:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(7294),a=r(5333),o=r(5861);function i(){var e=n.useContext(a._y);return(0,o.lq)(e),e}},5125:function(e,t,r){r.d(t,{U:function(){return u}});var n=r(5444),a=r(4070),o=r.n(a),i=r(7294),l=r(9785),s=function(e){return"/"===e?e:e.replace(/\/$/,"")},f=r(7568),c=r(3431);function u(e){var t,r=e.to,a=e.children,u=e.className,d=null!==(t=(0,i.useContext)(f.z).prefix)&&void 0!==t?t:"",p=(0,l.Z)(),h="/"!==r?p.messages[r]?p.formatMessage({id:r}):r:"/",m=p.defaultLocale===p.locale?h:s(o().join("/",d,h));return(0,c.tZ)(n.Link,{to:m,className:u,activeClassName:"active",partiallyActive:!0},a)}},1925:function(e,t,r){r.d(t,{H:function(){return $e}});var n=r(3431),a=r(5811),o=r(5444),i=r.p+"static/2MASSJ1808-Heavy-8f52e8eb205c5ac5b516f020531b841e.ttf",l=r.p+"static/2MASSJ1808-Heavy-16683b2cd11eaa09f2c19361505b1143.woff",s=r.p+"static/2MASSJ1808-Heavy-7daceea13cc363001c25e710df85422c.woff2",f=r.p+"static/2MASSJ1808-Normal-7431d6672082da9c282a359f11e32631.ttf",c=r.p+"static/2MASSJ1808-Normal-5f480603309a9a7c69748c54d39d3f94.woff",u=r.p+"static/2MASSJ1808-Normal-ddeda5a9e34f44e5df36dd2aa19eca36.woff2",d=r.p+"static/pt-sans-v12-latin-ext_latin-700-e7877f489f6e34f8db67f52eeaa29c25.ttf",p=r.p+"static/pt-sans-v12-latin-ext_latin-700-c053332e53924f51cead7d032a14f788.woff",h=r.p+"static/pt-sans-v12-latin-ext_latin-700-85d7f7038c64c137cd0183dea51cb38f.woff2",m=r.p+"static/pt-sans-v12-latin-ext_latin-700italic-f95922feec68d276c94a9a1146bdc9d1.ttf",g=r.p+"static/pt-sans-v12-latin-ext_latin-700italic-c90e56e74a22d8ed56fa47852b3f9ab1.woff",b=r.p+"static/pt-sans-v12-latin-ext_latin-700italic-01233203ed880a75c3d473f0a6cde867.woff2",v=r.p+"static/pt-sans-v12-latin-ext_latin-italic-36fe8ee1d8daa38518e0200ded5c5f77.ttf",y=r.p+"static/pt-sans-v12-latin-ext_latin-italic-b078893b173f5684b54d64425b488153.woff",w=r.p+"static/pt-sans-v12-latin-ext_latin-italic-4aa05b0c8ababbfca06213f228e4387c.woff2",k=r.p+"static/pt-sans-v12-latin-ext_latin-regular-0152e934d63cf13180eac17668350d05.ttf",x=r.p+"static/pt-sans-v12-latin-ext_latin-regular-3d88a54dc9a90179179bdd096309880c.woff",Z=r.p+"static/pt-sans-v12-latin-ext_latin-regular-15c61cd31ace539d0883c0a02facc68f.woff2",C=function(e){return(0,n.iv)("@font-face{font-family:'2MASS J1808';src:url(",u,") format('woff2'),url(",c,") format('woff'),url(",f,") format('truetype');font-weight:normal;font-style:normal;font-display:swap;}@font-face{font-family:'2MASS J1808';src:url(",s,") format('woff2'),url(",l,") format('woff'),url(",i,") format('truetype');font-weight:900;font-style:normal;font-display:swap;}@font-face{font-family:'PT Sans';src:url(",Z,") format('woff2'),url(",x,") format('woff'),url(",k,") format('truetype');font-style:normal;font-weight:400;font-display:swap;}@font-face{font-family:'PT Sans';src:url(",w,") format('woff2'),url(",y,") format('woff'),url(",v,") format('truetype');font-style:italic;font-weight:400;font-display:swap;}@font-face{font-family:'PT Sans';src:url(",h,") format('woff2'),url(",p,") format('woff'),url(",d,") format('truetype');font-style:normal;font-weight:700;font-display:swap;}@font-face{font-family:'PT Sans';src:url(",b,") format('woff2'),url(",g,") format('woff'),url(",m,") format('truetype');font-style:italic;font-weight:700;font-display:swap;}*{box-sizing:border-box;margin:0;padding:0;}html{height:100%;}body,#___gatsby,#gatsby-focus-wrapper,main{margin:0;font-size:14px;display:flex;flex-direction:column;flex-grow:1;min-height:100%;font-family:",e.fonts.general,";background-color:",e.backgroundColor,";}main{hyphens:auto;}main section,footer{padding:0 20%;@media (max-width: ",e.breakpoints.huge,"){padding:0 10%;}@media (max-width: ",e.breakpoints.medium,"){padding:0 1rem;}}main section{padding-top:5rem;padding-bottom:5rem;min-height:30rem;}h1{font-family:",e.fonts.headings,";}h2,h3,h4,h5,h6{font-family:",e.fonts.headings,";margin-bottom:1rem;}p{margin-bottom:0.5rem;}a{text-decoration:none;color:",e.blackColor,";font-weight:700;&:hover{color:",e.secondaryColor,";}}","")},N={primaryColor:"#539350",secondaryColor:"#fa5100",backgroundColor:"#ede9df",blackColor:"#231f20",whiteColor:"#ffffff",darkerSibling:"10%",brighterSibling:"10%",fonts:{general:'"PT Sans", sans-serif',headings:'"2MASS J1808", sans-serif'},breakpoints:{tiny:"400px",small:"600px",medium:"1000px",big:"1920px",huge:"2560px"}},E=r(5414);function S(e){var t=e.title;return(0,n.tZ)(E.q,null,(0,n.tZ)("title",null,t))}var A=r(928),M=r(478),I=function(e){return(0,n.iv)("display:flex;align-items:center;min-height:10rem;background-color:",e.primaryColor,";color:",e.backgroundColor,";overflow:hidden;div{display:flex;flex-direction:column;ul{list-style:none;padding:0;margin:0;margin-bottom:1rem;}}a{color:",e.backgroundColor,";&:hover{color:",e.secondaryColor,";}}svg{width:4rem;height:auto;margin-right:1rem;margin-bottom:1.2rem;align-self:flex-end;}","")};function j(e){var t=e.address,r=e.phone,a=e.email;return(0,n.tZ)("footer",{css:I},(0,n.tZ)(M.E,{rotation:300}),(0,n.tZ)("div",null,(0,n.tZ)(A.Lu,{content:t}),(0,n.tZ)(A.Lu,{content:r}),(0,n.tZ)(A.Lu,{content:a})))}var O=r(7294),_=r(5125),L=function(e){return(0,n.iv)("width:2.5rem;border:none;outline:none;background:none;padding:0;cursor:pointer;position:relative;height:2rem;width:3rem;z-index:30;display:none;@media screen and (max-width: ",e.breakpoints.small,"){display:block;}div,&::after,&::before{width:100%;height:0.3rem;border-radius:0.1rem;background-color:",e.backgroundColor,";transition:top 0.05s 0.1s,bottom 0.05s 0.1s,transform 0.1s;content:'';display:block;position:absolute;left:0;}&:hover{div,&::after,&::before{background-color:",e.secondaryColor,";}}div{top:50%;transform:translateY(-50%);}&::before{top:0;}&::after{bottom:0;}&.open{div{display:none;}&::before,&::after{top:40%;bottom:40%;background-color:",e.secondaryColor,";transition:transform 0.1s 0.05s,top 0.05s,bottom 0.05s;}&::before{transform:rotate(-45deg);}&::after{transform:rotate(45deg);}}","")};function T(e){var t=e.isOpen,r=e.onClick;return(0,n.tZ)("button",{css:L,className:t?"open":"",onClick:r},(0,n.tZ)("div",null))}var F=r(1709),z=r(1681);var P={name:"pwkb2j",styles:"display:flex;align-items:center;ul{display:inline-flex;margin:0;padding:0;list-style:none;li{display:inline;margin-left:0.8rem;}}"},q=function(e){return P};function R(){var e,t=(0,O.useContext)(z.z);return(0,n.tZ)("nav",{css:q},(0,n.tZ)("ul",null,null===(e=t.translations)||void 0===e?void 0:e.map((function(e){return(0,n.tZ)("li",{key:e.locale},(0,n.tZ)(o.Link,{to:e.path},(0,n.tZ)(F.Z,{id:"languages."+e.locale})))}))))}var H,J=function(e){return(0,n.iv)("@media screen and (max-width: ",e.breakpoints.small,"){display:none;}ul{list-style:none;padding:0;margin:0;font-size:1.4rem;display:flex;gap:1rem;a{color:",e.backgroundColor,";&:hover{color:",e.secondaryColor,"!important;}}}.bottom-section{display:none;}&.open{position:fixed;top:0;left:0;z-index:20;width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;background-color:",e.backgroundColor,";ul{display:block;}>ul{margin-top:10rem;li{width:100%;display:flex;align-items:center;justify-content:flex-end;background-color:white;margin-bottom:0.1rem;a{display:block;width:100%;padding:1rem;color:",e.blackColor,";}}}.bottom-section{display:flex;justify-content:space-between;align-items:flex-end;padding:1rem;svg{height:auto;width:4rem;}li{margin:0;a{font-size:1.2rem;color:",e.blackColor,";}}}}","")};function B(e){var t=e.phone,r=e.email,a=O.useState(!1),o=a[0],i=a[1];return(0,n.tZ)(O.Fragment,null,(0,n.tZ)(T,{isOpen:o,onClick:function(){return i(!o)}}),(0,n.tZ)("nav",{css:J,className:o?"open":""},(0,n.tZ)("ul",null,(0,n.tZ)("li",null,(0,n.tZ)(_.U,{to:"/pages"},"Joho")),(0,n.tZ)("li",null,(0,n.tZ)(_.U,{to:"/pages"},"Joho")),(0,n.tZ)("li",null,(0,n.tZ)(_.U,{to:"/pages"},"Joho"))),(0,n.tZ)("div",{className:"bottom-section"},(0,n.tZ)(M.E,{rotation:300}),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,(0,n.tZ)(R,null)),(0,n.tZ)("li",null,(0,n.tZ)(A.Lu,{content:t})),(0,n.tZ)("li",null,(0,n.tZ)(A.Lu,{content:r}))))))}function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U.apply(this,arguments)}var $=function(e){return O.createElement("svg",U({width:52.089,height:35.334,viewBox:"0 0 13.782 9.349",xmlns:"http://www.w3.org/2000/svg"},e),H||(H=O.createElement("path",{className:"brand_svg__cls-1",d:"M7.912.28C4.15-.593.647.674.078 3.098c-.57 2.423 2.03 5.106 5.791 5.98.21.047.416.087.62.124l-2.31-4.048.595-.339 2.167 3.797V3.175h.685V8.63l1.752-3.106.598.336-1.969 3.49c2.874.069 5.242-1.13 5.697-3.088.566-2.429-2.027-5.106-5.792-5.982z"})))},V=function(e){return(0,n.iv)("display:flex;align-items:center;justify-content:space-between;height:6rem;font-size:2rem;font-weight:bold;background-color:",e.primaryColor,";padding:0 10%;@media (max-width: ",e.breakpoints.medium,"){padding:0 1rem;}>*>svg{fill:",e.backgroundColor,";width:auto;height:3rem;}","")},D=function(e){return(0,n.iv)("display:inline-flex;margin-left:2.5rem;svg:hover{fill:",e.secondaryColor,";}","")};function W(e){var t=e.phone,r=e.email;return(0,n.tZ)("div",{css:V},(0,n.tZ)(_.U,{to:"/",css:D},(0,n.tZ)($,null)),(0,n.tZ)(B,{phone:t,email:r}))}var Y=r(7462);var Q=r(4578);function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}var K=r(9611);function X(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function ee(e,t,r){return ee=X()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&(0,K.Z)(a,r.prototype),a},ee.apply(null,arguments)}function te(e){var t="function"==typeof Map?new Map:void 0;return te=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return ee(e,arguments,G(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),(0,K.Z)(n,e)},te(e)}var re=function(e){function t(t){return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this)}return(0,Q.Z)(t,e),t}(te(Error));function ne(e){return Math.round(255*e)}function ae(e,t,r){return ne(e)+","+ne(t)+","+ne(r)}function oe(e,t,r,n){if(void 0===n&&(n=ae),0===t)return n(r,r,r);var a=(e%360+360)%360/60,o=(1-Math.abs(2*r-1))*t,i=o*(1-Math.abs(a%2-1)),l=0,s=0,f=0;a>=0&&a<1?(l=o,s=i):a>=1&&a<2?(l=i,s=o):a>=2&&a<3?(s=o,f=i):a>=3&&a<4?(s=i,f=o):a>=4&&a<5?(l=i,f=o):a>=5&&a<6&&(l=o,f=i);var c=r-o/2;return n(l+c,s+c,f+c)}var ie={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var le=/^#[a-fA-F0-9]{6}$/,se=/^#[a-fA-F0-9]{8}$/,fe=/^#[a-fA-F0-9]{3}$/,ce=/^#[a-fA-F0-9]{4}$/,ue=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,de=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,pe=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,he=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;function me(e){if("string"!=typeof e)throw new re(3);var t=function(e){if("string"!=typeof e)return e;var t=e.toLowerCase();return ie[t]?"#"+ie[t]:e}(e);if(t.match(le))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(se)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(fe))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(ce)){var n=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:n}}var a=ue.exec(t);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var o=de.exec(t.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])};var i=pe.exec(t);if(i){var l="rgb("+oe(parseInt(""+i[1],10),parseInt(""+i[2],10)/100,parseInt(""+i[3],10)/100)+")",s=ue.exec(l);if(!s)throw new re(4,t,l);return{red:parseInt(""+s[1],10),green:parseInt(""+s[2],10),blue:parseInt(""+s[3],10)}}var f=he.exec(t.substring(0,50));if(f){var c="rgb("+oe(parseInt(""+f[1],10),parseInt(""+f[2],10)/100,parseInt(""+f[3],10)/100)+")",u=ue.exec(c);if(!u)throw new re(4,t,c);return{red:parseInt(""+u[1],10),green:parseInt(""+u[2],10),blue:parseInt(""+u[3],10),alpha:parseFloat(""+f[4])}}throw new re(5)}function ge(e){return function(e){var t,r=e.red/255,n=e.green/255,a=e.blue/255,o=Math.max(r,n,a),i=Math.min(r,n,a),l=(o+i)/2;if(o===i)return void 0!==e.alpha?{hue:0,saturation:0,lightness:l,alpha:e.alpha}:{hue:0,saturation:0,lightness:l};var s=o-i,f=l>.5?s/(2-o-i):s/(o+i);switch(o){case r:t=(n-a)/s+(n<a?6:0);break;case n:t=(a-r)/s+2;break;default:t=(r-n)/s+4}return t*=60,void 0!==e.alpha?{hue:t,saturation:f,lightness:l,alpha:e.alpha}:{hue:t,saturation:f,lightness:l}}(me(e))}var be=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};function ve(e){var t=e.toString(16);return 1===t.length?"0"+t:t}function ye(e){return ve(Math.round(255*e))}function we(e,t,r){return be("#"+ye(e)+ye(t)+ye(r))}function ke(e,t,r){return oe(e,t,r,we)}function xe(e,t,r){if("number"==typeof e&&"number"==typeof t&&"number"==typeof r)return ke(e,t,r);if("object"==typeof e&&void 0===t&&void 0===r)return ke(e.hue,e.saturation,e.lightness);throw new re(1)}function Ze(e,t,r,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof r&&"number"==typeof n)return n>=1?ke(e,t,r):"rgba("+oe(e,t,r)+","+n+")";if("object"==typeof e&&void 0===t&&void 0===r&&void 0===n)return e.alpha>=1?ke(e.hue,e.saturation,e.lightness):"rgba("+oe(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new re(2)}function Ce(e,t,r){if("number"==typeof e&&"number"==typeof t&&"number"==typeof r)return be("#"+ve(e)+ve(t)+ve(r));if("object"==typeof e&&void 0===t&&void 0===r)return be("#"+ve(e.red)+ve(e.green)+ve(e.blue));throw new re(6)}function Ne(e,t,r,n){if("string"==typeof e&&"number"==typeof t){var a=me(e);return"rgba("+a.red+","+a.green+","+a.blue+","+t+")"}if("number"==typeof e&&"number"==typeof t&&"number"==typeof r&&"number"==typeof n)return n>=1?Ce(e,t,r):"rgba("+e+","+t+","+r+","+n+")";if("object"==typeof e&&void 0===t&&void 0===r&&void 0===n)return e.alpha>=1?Ce(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new re(7)}function Ee(e){if("object"!=typeof e)throw new re(8);if(function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&"number"==typeof e.alpha}(e))return Ne(e);if(function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&("number"!=typeof e.alpha||void 0===e.alpha)}(e))return Ce(e);if(function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&"number"==typeof e.alpha}(e))return Ze(e);if(function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&("number"!=typeof e.alpha||void 0===e.alpha)}(e))return xe(e);throw new re(8)}function Se(e,t,r){return function(){var n=r.concat(Array.prototype.slice.call(arguments));return n.length>=t?e.apply(this,n):Se(e,t,n)}}function Ae(e){return Se(e,e.length,[])}function Me(e,t,r){return Math.max(e,Math.min(t,r))}function Ie(e,t){if("transparent"===t)return t;var r=ge(t);return Ee((0,Y.Z)({},r,{lightness:Me(0,1,r.lightness-parseFloat(e))}))}var je=Ae(Ie);function Oe(e,t){if("transparent"===t)return t;var r=ge(t);return Ee((0,Y.Z)({},r,{lightness:Me(0,1,r.lightness+parseFloat(e))}))}var _e=Ae(Oe);var Le=function(e){return(0,n.iv)("position:sticky;z-index:20;top:0;display:flex;align-items:center;justify-content:space-between;height:2rem;background-color:",je(.05,e.primaryColor),";padding:0 10%;font-weight:bold;color:",e.backgroundColor,";@media (max-width: ",e.breakpoints.medium,"){padding:0 1rem;}a{color:",e.backgroundColor,";&:hover{color:",e.secondaryColor,";}}h1{font-size:0.8rem;}&>nav{display:flex;align-items:center;@media screen and (max-width: ",e.breakpoints.small,"){display:none;}}&>nav>nav{border-left:2px solid ",e.backgroundColor,";margin-left:0.8rem;}svg{margin:0 0.8rem;height:0.8rem;width:auto;&:last-child{margin-right:0;}}","")};function Te(e){var t=e.title,r=e.phone,a=e.email;return(0,n.tZ)("div",{css:Le},(0,n.tZ)(_.U,{to:"/"},(0,n.tZ)("h1",null,t)),(0,n.tZ)("nav",null,(0,n.tZ)(M.E,{rotation:270}),(0,n.tZ)(A.Lu,{content:r}),(0,n.tZ)(M.E,{rotation:310}),(0,n.tZ)(A.Lu,{content:a}),(0,n.tZ)(R,null),(0,n.tZ)(M.E,null)))}function Fe(e){var t=e.title,r=e.phone,a=e.email;return(0,n.tZ)(O.Fragment,null,(0,n.tZ)(Te,{title:t,phone:r,email:a}),(0,n.tZ)("header",null,(0,n.tZ)(W,{phone:r,email:a})))}var ze,Pe,qe={name:"x01ejq",styles:"padding-top:1rem;padding-bottom:1rem"};function Re(e){var t=e.children;return(0,n.tZ)("main",{css:qe},t)}function He(){return He=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},He.apply(this,arguments)}var Je=function(e){return O.createElement("svg",He({viewBox:"0 0 1600 46",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2}},e),ze||(ze=O.createElement("path",{d:"M264 0 0 40V0h264Z"})),Pe||(Pe=O.createElement("path",{d:"M1600.004 46 264 6 0 46v-6L264 0h1336.004v46Z"})))};var Be={name:"zlw20a",styles:"transform:scaleY(-1)"};function Ue(e){var t=e.flipVertical;return(0,n.tZ)(Je,{css:function(e){return(0,n.iv)("width:100%;height:auto;z-index:10;margin-bottom:-1px;",t&&Be," path:nth-of-type(1){fill:",e.primaryColor,";}path:nth-of-type(2){fill:",_e(.05,e.primaryColor),";}","")}})}function $e(e){var t,r,i,l,s,f,c,u,d,p,h,m,g,b,v=e.children,y=e.theme,w=(0,o.useStaticQuery)("1256713454");return(0,n.tZ)(a.a,{theme:y||N},(0,n.tZ)(S,{title:(null===(t=w.site)||void 0===t||null===(r=t.siteMetadata)||void 0===r?void 0:r.title)||""}),(0,n.tZ)(n.xB,{styles:C}),(0,n.tZ)(Fe,{title:(null===(i=w.site)||void 0===i||null===(l=i.siteMetadata)||void 0===l?void 0:l.title)||"",phone:(null===(s=w.site)||void 0===s||null===(f=s.siteMetadata)||void 0===f?void 0:f.phone)||"",email:(null===(c=w.site)||void 0===c||null===(u=c.siteMetadata)||void 0===u?void 0:u.email)||""}),(0,n.tZ)(Ue,null),(0,n.tZ)(Re,null,v),(0,n.tZ)(Ue,{flipVertical:!0}),(0,n.tZ)(j,{address:(null===(d=w.site)||void 0===d||null===(p=d.siteMetadata)||void 0===p?void 0:p.address)||"",phone:(null===(h=w.site)||void 0===h||null===(m=h.siteMetadata)||void 0===m?void 0:m.phone)||"",email:(null===(g=w.site)||void 0===g||null===(b=g.siteMetadata)||void 0===b?void 0:b.email)||""}))}},478:function(e,t,r){r.d(t,{E:function(){return s}});var n,a=r(3431),o=r(7294);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var l=function(e){return o.createElement("svg",i({width:9.387,height:10,viewBox:"0 0 2.484 2.646",xmlns:"http://www.w3.org/2000/svg"},e),n||(n=o.createElement("path",{d:"M1.026 2.65h.614l.843-1.495-.256-.144-.75 1.33V.005h-.294v2.33L.255.707 0 .852z"})))};function s(e){var t=e.rotation,r=void 0===t?0:t;return(0,a.tZ)(l,{css:function(e){return(0,a.iv)("fill:",e.secondaryColor,";transform:rotate(",r+"deg",");","")}})}}}]);
//# sourceMappingURL=commons-c9ca74fa8140f9cbef8a.js.map