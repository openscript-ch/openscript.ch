/*! For license information please see 8445bd7aabe2c056f3d17597c86041cc70b6bfec-417acadf050f7d423a03.js.LICENSE.txt */
"use strict";(self.webpackChunkgatsby_starter_dogmatism=self.webpackChunkgatsby_starter_dogmatism||[]).push([[253],{9120:function(e){var t=/["'&<>]/;e.exports=function(e){var r,n=""+e,a=t.exec(n);if(!a)return n;var i="",o=0,c=0;for(o=a.index;o<n.length;o++){switch(n.charCodeAt(o)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}c!==o&&(i+=n.substring(c,o)),c=o+1,i+=r}return c!==o?i+n.substring(c,o):i}},8487:function(e,t,r){r.d(t,{Lu:function(){return C}});var n=r(7294),a=r(9120),i=r.n(a);function o(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function d(e){var t=e.attributes,r=void 0===t?{}:t,a=e.className,i=e.children,o=void 0===i?null:i,c=e.selfClose,s=void 0!==c&&c,d=e.tagName;return s?n.createElement(d,l({className:a},r)):n.createElement(d,l({className:a},r),o)}var u=function(){function e(){}var t=e.prototype;return t.attribute=function(e,t){return t},t.node=function(e,t){return t},e}(),p={a:{content:9,self:!1,type:105},address:{invalid:["h1","h2","h3","h4","h5","h6","address","article","aside","section","div","header","footer"],self:!1},audio:{children:["track","source"]},br:{type:9,void:!0},body:{content:127},button:{content:8,type:105},caption:{content:1,parent:["table"]},col:{parent:["colgroup"],void:!0},colgroup:{children:["col"],parent:["table"]},details:{children:["summary"],type:97},dd:{content:1,parent:["dl"]},dl:{children:["dt","dd"],type:1},dt:{content:1,invalid:["footer","header"],parent:["dl"]},figcaption:{content:1,parent:["figure"]},footer:{invalid:["footer","header"]},header:{invalid:["footer","header"]},hr:{type:1,void:!0},img:{void:!0},li:{content:1,parent:["ul","ol","menu"]},main:{self:!1},ol:{children:["li"],type:1},picture:{children:["source","img"],type:25},rb:{parent:["ruby","rtc"]},rp:{parent:["ruby","rtc"]},rt:{content:8,parent:["ruby","rtc"]},rtc:{content:8,parent:["ruby"]},ruby:{children:["rb","rp","rt","rtc"]},source:{parent:["audio","video","picture"],void:!0},summary:{content:8,parent:["details"]},table:{children:["caption","colgroup","thead","tbody","tfoot","tr"],type:1},tbody:{parent:["table"],children:["tr"]},td:{content:1,parent:["tr"]},tfoot:{parent:["table"],children:["tr"]},th:{content:1,parent:["tr"]},thead:{parent:["table"],children:["tr"]},tr:{parent:["table","tbody","thead","tfoot"],children:["th","td"]},track:{parent:["audio","video"],void:!0},ul:{children:["li"],type:1},video:{children:["track","source"]},wbr:{type:9,void:!0}};function h(e){return function(t){p[t]=s({},e,p[t])}}["address","main","div","figure","p","pre"].forEach(h({content:1,type:65})),["abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","ruby","samp","strong","sub","sup","time","u","var"].forEach(h({content:8,type:73})),["p","pre"].forEach(h({content:8,type:65})),["s","small","span","del","ins"].forEach(h({content:8,type:9})),["article","aside","footer","header","nav","section","blockquote"].forEach(h({content:1,type:67})),["h1","h2","h3","h4","h5","h6"].forEach(h({content:8,type:69})),["audio","canvas","iframe","img","video"].forEach(h({type:89}));var f=Object.freeze(p),m=["applet","base","body","command","embed","frame","frameset","head","html","link","meta","noscript","object","script","style","title"],v=Object.keys(f).filter((function(e){return"canvas"!==e&&"iframe"!==e})),y=Object.freeze({alt:1,cite:1,class:1,colspan:3,controls:4,datetime:1,default:4,disabled:4,dir:1,height:1,href:1,id:1,kind:1,label:1,lang:1,loading:1,loop:4,media:1,muted:4,poster:1,role:1,rowspan:3,scope:1,sizes:1,span:3,start:3,style:5,src:1,srclang:1,srcset:1,target:1,title:1,type:1,width:1}),g=Object.freeze({class:"className",colspan:"colSpan",datetime:"dateTime",rowspan:"rowSpan",srclang:"srcLang",srcset:"srcSet"}),b=/(url|image|image-set)\(/i,k=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,c(t,r),n.prototype.attribute=function(e,t){return"style"===e&&Object.keys(t).forEach((function(e){String(t[e]).match(b)&&delete t[e]})),t},n}(u),w=/^<(!doctype|(html|head|body)(\s|>))/i,N=/^(aria\x2D|data\x2D|[0-9A-Z_a-z\u017F\u212A]+:)/i,x=/{{{(\w+)\/?}}}/;function E(){if("undefined"!=typeof window&&"undefined"!=typeof document)return document.implementation.createHTMLDocument("Interweave")}var A=function(){function e(e,t,r,n){void 0===t&&(t={}),void 0===r&&(r=[]),void 0===n&&(n=[]),this.allowed=void 0,this.banned=void 0,this.blocked=void 0,this.container=void 0,this.content=[],this.props=void 0,this.matchers=void 0,this.filters=void 0,this.keyIndex=void 0,this.props=t,this.matchers=r,this.filters=[].concat(n,[new k]),this.keyIndex=-1,this.container=this.createContainer(e||""),this.allowed=new Set(t.allowList||v),this.banned=new Set(m),this.blocked=new Set(t.blockList)}var t=e.prototype;return t.applyAttributeFilters=function(e,t){return this.filters.reduce((function(t,r){return null!==t&&"function"==typeof r.attribute?r.attribute(e,t):t}),t)},t.applyNodeFilters=function(e,t){return this.filters.reduce((function(t,r){return null!==t&&"function"==typeof r.node?r.node(e,t):t}),t)},t.applyMatchers=function(e,t){var r=this,n={},a=this.props,i=e,c=0,l=null;return this.matchers.forEach((function(e){var d=e.asTag().toLowerCase(),u=r.getTagConfig(d);if(!a[e.inverseName]&&r.isTagAllowed(d)&&r.canRenderChild(t,u)){for(var p="";i&&(l=e.match(i));){var h=l,f=h.index,m=h.length,v=h.match,y=h.valid,g=h.void,b=o(h,["index","length","match","valid","void"]),k=e.propName+c;f>0&&(p+=i.slice(0,f)),y?(p+=g?"{{{"+k+"/}}}":"{{{"+k+"}}}"+v+"{{{/"+k+"}}}",r.keyIndex+=1,c+=1,n[k]={children:v,matcher:e,props:s({},a,b,{key:r.keyIndex})}):p+=v,e.greedy?(i=p+i.slice(f+m),p=""):i=i.slice(f+(m||v.length))}e.greedy||(i=p+i)}})),0===c?e:this.replaceTokens(i,n)},t.canRenderChild=function(e,t){return!(!e.tagName||!t.tagName)&&(!e.void&&(e.children.length>0?e.children.includes(t.tagName):!(e.invalid.length>0&&e.invalid.includes(t.tagName))&&(t.parent.length>0?t.parent.includes(e.tagName):!(!e.self&&e.tagName===t.tagName)&&Boolean(e&&e.content&t.type))))},t.convertLineBreaks=function(e){var t=this.props,r=t.noHtml,n=t.disableLineBreaks;if(r||n||e.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))return e;var a=e.replace(/\r\n/g,"\n");return a=(a=a.replace(/\n{3,}/g,"\n\n\n")).replace(/\n/g,"<br/>")},t.createContainer=function(e){var t=(void 0!==r.g&&r.g.INTERWEAVE_SSR_POLYFILL||E)();if(t){var n=this.props.containerTagName||"body",a="body"===n||"fragment"===n?t.body:t.createElement(n);return e.match(w)||(a.innerHTML=this.convertLineBreaks(this.props.escapeHtml?i()(e):e)),a}},t.extractAttributes=function(e){var t=this,r=this.props.allowAttributes,n={},a=0;return 1===e.nodeType&&e.attributes?(Array.from(e.attributes).forEach((function(i){var o=i.name,c=i.value,s=o.toLowerCase(),l=y[s]||y[o];if(t.isSafe(e)&&(s.match(N)||(r||l&&2!==l)&&!s.startsWith("on")&&!c.replace(/(\s|\0|&#x0([9AD]);)/,"").match(/(javascript|vbscript|livescript|xss):/i))){var d="style"===s?t.extractStyleAttribute(e):c;4===l?d=!0:3===l?d=Number.parseFloat(String(d)):5!==l&&(d=String(d)),n[g[s]||s]=t.applyAttributeFilters(s,d),a+=1}})),0===a?null:n):null},t.extractStyleAttribute=function(e){var t={};return Array.from(e.style).forEach((function(r){var n=e.style[r];"string"!=typeof n&&"number"!=typeof n||(t[r.replace(/-([a-z])/g,(function(e,t){return t.toUpperCase()}))]=n)})),t},t.getTagConfig=function(e){var t={children:[],content:0,invalid:[],parent:[],self:!0,tagName:"",type:0,void:!1};return f[e]?s({},t,f[e],{tagName:e}):t},t.isSafe=function(e){if("undefined"!=typeof HTMLAnchorElement&&e instanceof HTMLAnchorElement){var t=e.getAttribute("href");if(t&&"#"===t.charAt(0))return!0;var r=e.protocol.toLowerCase();return":"===r||"http:"===r||"https:"===r||"mailto:"===r||"tel:"===r}return!0},t.isTagAllowed=function(e){return!this.banned.has(e)&&!this.blocked.has(e)&&(this.props.allowElements||this.allowed.has(e))},t.parse=function(){return this.container?this.parseNode(this.container,this.getTagConfig(this.container.nodeName.toLowerCase())):[]},t.parseNode=function(e,t){var r=this,a=this.props,i=a.noHtml,o=a.noHtmlExceptMatchers,c=a.allowElements,l=a.transform,u=a.transformOnlyAllowList,p=[],h="";return Array.from(e.childNodes).forEach((function(e){if(1===e.nodeType){var a=e.nodeName.toLowerCase(),f=r.getTagConfig(a);h&&(p.push(h),h="");var m,v=r.applyNodeFilters(a,e);if(!v)return;if(l&&(!u||r.isTagAllowed(a))){r.keyIndex+=1;var y=r.keyIndex;m=r.parseNode(v,f);var g=l(v,m,f);if(null===g)return;if(void 0!==g)return void p.push(n.cloneElement(g,{key:y}));r.keyIndex=y-1}if(r.banned.has(a))return;if(i||o&&"br"!==a||!r.isTagAllowed(a)||!c&&!r.canRenderChild(t,f))p=p.concat(r.parseNode(v,f.tagName?f:t));else{r.keyIndex+=1;var b=r.extractAttributes(v),k={tagName:a};b&&(k.attributes=b),f.void&&(k.selfClose=f.void),p.push(n.createElement(d,s({},k,{key:r.keyIndex}),m||r.parseNode(v,f)))}}else if(3===e.nodeType){var w=i&&!o?e.textContent:r.applyMatchers(e.textContent||"",t);Array.isArray(w)?p=p.concat(w):h+=w}})),h&&p.push(h),p},t.replaceTokens=function(e,t){if(!e.includes("{{{"))return e;for(var r=[],n=e,a=null;a=n.match(x);){var i=a,o=i[0],c=i[1],s=a.index,l=o.includes("/");0,s>0&&(r.push(n.slice(0,s)),n=n.slice(s));var d=t[c],u=d.children,p=d.matcher,h=d.props,f=void 0;if(l)f=o.length,r.push(p.createElement(u,h));else{var m=n.match(new RegExp("{{{/"+c+"}}}"));0,f=m.index+m[0].length,r.push(p.createElement(this.replaceTokens(n.slice(o.length,m.index),t),h))}n=n.slice(f)}return n.length>0&&r.push(n),0===r.length?"":1===r.length&&"string"==typeof r[0]?r[0]:r},e}();function C(e){var t,r=e.attributes,a=e.className,i=e.containerTagName,o=e.content,c=e.emptyContent,s=e.parsedContent,l=e.tagName,u=i||l||"span",p="fragment"===u||e.noWrap;if(s)t=s;else{var h=new A(o||"",e).parse();h.length>0&&(t=h)}return t||(t=c),p?n.createElement(n.Fragment,null,t):n.createElement(d,{attributes:r,className:a,tagName:u},t)}}}]);
//# sourceMappingURL=8445bd7aabe2c056f3d17597c86041cc70b6bfec-417acadf050f7d423a03.js.map