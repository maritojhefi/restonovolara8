!function(e,t,n){var r=[],s=[],o={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){s.push({name:e,fn:t,options:n})},addAsyncTest:function(e){s.push({name:null,fn:e})}},i=function(){};function a(e,t){return typeof e===t}i.prototype=o,(i=new i).addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),i.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}),i.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(e){return!1}}),i.addTest("websqldatabase","openDatabase"in e),i.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(e){}return t});var l=t.documentElement,u="svg"===l.nodeName.toLowerCase();function d(e){var t=l.className,n=i._config.classPrefix||"";if(u&&(t=t.baseVal),i._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}i._config.enableClasses&&(t+=" "+n+e.join(" "+n),u?l.className.baseVal=t:l.className=t)}function c(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):u?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}var f=function(){var e=!("onblur"in t.documentElement);return function(t,r){var s;return!!t&&(r&&"string"!=typeof r||(r=c(r||"div")),!(s=(t="on"+t)in r)&&e&&(r.setAttribute||(r=c("div")),r.setAttribute(t,""),s="function"==typeof r[t],r[t]!==n&&(r[t]=n),r.removeAttribute(t)),s)}}();o.hasEvent=f,i.addTest("bgpositionshorthand",function(){var e=c("a").style,t="right 10px bottom 10px";return e.cssText="background-position: "+t+";",e.backgroundPosition===t}),i.addTest("multiplebgs",function(){var e=c("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),i.addTest("preserve3d",function(){var t,n,r=e.CSS,s=!1;return!!(r&&r.supports&&r.supports("(transform-style: preserve-3d)"))||(t=c("a"),n=c("a"),t.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",n.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",t.appendChild(n),l.appendChild(t),s=n.getBoundingClientRect(),l.removeChild(t),s=s.width&&s.width<4)}),i.addTest("inlinesvg",function(){var e=c("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var p=o._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];o._prefixes=p,i.addTest("csscalc",function(){var e=c("a");return e.style.cssText="width:"+p.join("calc(10px);width:"),!!e.style.length});var g="CSS"in e&&"supports"in e.CSS,m="supportsCSS"in e;i.addTest("supports",g||m);var h={}.toString;function v(e,n,r,s){var o,i,a,d,f,p="modernizr",g=c("div"),m=((f=t.body)||((f=c(u?"svg":"body")).fake=!0),f);if(parseInt(r,10))for(;r--;)(a=c("div")).id=s?s[r]:p+(r+1),g.appendChild(a);return(o=c("style")).type="text/css",o.id="s"+p,(m.fake?m:g).appendChild(o),m.appendChild(g),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),g.id=p,m.fake&&(m.style.background="",m.style.overflow="hidden",d=l.style.overflow,l.style.overflow="hidden",l.appendChild(m)),i=n(g,e),m.fake?(m.parentNode.removeChild(m),l.style.overflow=d,l.offsetHeight):g.parentNode.removeChild(g),!!i}i.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(h.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),i.addTest("svgforeignobject",function(){return!!t.createElementNS&&/SVGForeignObject/.test(h.call(t.createElementNS("http://www.w3.org/2000/svg","foreignObject")))}),i.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(h.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var y,w=(y=e.matchMedia||e.msMatchMedia)?function(e){var t=y(e);return t&&t.matches||!1}:function(t){var n=!1;return v("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n};o.mq=w;var S,T,b,C,x,_=o.testStyles=v;function E(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function R(e,t){if("object"==typeof e)for(var n in e)C(e,n)&&R(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),s=i[r[0]];if(2==r.length&&(s=s[r[1]]),void 0!==s)return i;t="function"==typeof t?t():t,1==r.length?i[r[0]]=t:(!i[r[0]]||i[r[0]]instanceof Boolean||(i[r[0]]=new Boolean(i[r[0]])),i[r[0]][r[1]]=t),d([(t&&0!=t?"":"no-")+r.join("-")]),i._trigger(e,t)}return i}i.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",p.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");_(r,function(e){n=9===e.offsetTop})}return n}),(S=navigator.userAgent,T=S.match(/w(eb)?osbrowser/gi),b=S.match(/windows phone/gi)&&S.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,T||b)?i.addTest("fontface",!1):_('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),s=r.sheet||r.styleSheet,o=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":"",a=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);i.addTest("fontface",a)}),C=a(x={}.hasOwnProperty,"undefined")||a(x.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return x.call(e,t)},o._l={},o.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),i.hasOwnProperty(e)&&setTimeout(function(){i._trigger(e,i[e])},0)},o._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},i._q.push(function(){o.addTest=R}),i.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var O="Moz O ms Webkit",P=o._config.usePrefixes?O.split(" "):[];o._cssomPrefixes=P;var k=function(t){var r,s=p.length,o=e.CSSRule;if(void 0===o)return n;if(!t)return!1;if((r=(t=t.replace(/^@/,"")).replace(/-/g,"_").toUpperCase()+"_RULE")in o)return"@"+t;for(var i=0;i<s;i++){var a=p[i];if(a.toUpperCase()+"_"+r in o)return"@-"+a.toLowerCase()+"-"+t}return!1};o.atRule=k;var A=o._config.usePrefixes?O.toLowerCase().split(" "):[];function N(e,t){return function(){return e.apply(t,arguments)}}o._domPrefixes=A;var z={elem:c("modernizr")};i._q.push(function(){delete z.elem});var j={style:z.elem.style};function M(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function V(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(M(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+M(t[s])+":"+r+")");return v("@supports ("+(o=o.join(" or "))+") { #modernizr { position: absolute; } }",function(t){return"absolute"==function(t,n,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,t,n);var o=e.console;null!==s?r&&(s=s.getPropertyValue(r)):o&&o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else s=!n&&t.currentStyle&&t.currentStyle[r];return s}(t,null,"position")})}return n}function I(e,t,r,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+P.join(i+" ")+i).split(" ");return a(t,"string")||a(t,"undefined")?function(e,t,r,s){if(s=!a(s,"undefined")&&s,!a(r,"undefined")){var o=V(e,r);if(!a(o,"undefined"))return o}for(var i,l,u,d,f,p=["modernizr","tspan","samp"];!j.style&&p.length;)i=!0,j.modElem=c(p.shift()),j.style=j.modElem.style;function g(){i&&(delete j.style,delete j.modElem)}for(u=e.length,l=0;l<u;l++)if(d=e[l],f=j.style[d],~(""+d).indexOf("-")&&(d=E(d)),j.style[d]!==n){if(s||a(r,"undefined"))return g(),"pfx"!=t||d;try{j.style[d]=r}catch(e){}if(j.style[d]!=f)return g(),"pfx"!=t||d}return g(),!1}(l,t,s,o):function(e,t,n){var r;for(var s in e)if(e[s]in t)return!1===n?e[s]:a(r=t[e[s]],"function")?N(r,n||t):r;return!1}(l=(e+" "+A.join(i+" ")+i).split(" "),t,r)}i._q.unshift(function(){delete j.style}),o.testAllProps=I;var L=o.prefixed=function(e,t,n){return 0===e.indexOf("@")?k(e):(-1!=e.indexOf("-")&&(e=E(e)),t?I(e,t,n):I(e,"pfx"))};function F(e,t,r){return I(e,n,n,t,r)}i.addTest("forcetouch",function(){return!!f(L("mouseforcewillbegin",e,!1),e)&&(MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN&&MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN)}),i.addTest("matchmedia",!!L("matchMedia",e)),o.testAllProps=F,i.addTest("cssanimations",F("animationName","a",!0)),i.addTest("bgpositionxy",function(){return F("backgroundPositionX","3px",!0)&&F("backgroundPositionY","5px",!0)}),i.addTest("bgrepeatround",F("backgroundRepeat","round")),i.addTest("bgrepeatspace",F("backgroundRepeat","space")),i.addTest("bgsizecover",F("backgroundSize","cover")),i.addTest("borderradius",F("borderRadius","0px",!0)),i.addTest("flexboxtweener",F("flexAlign","end",!0)),i.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&F("transform","scale(1)",!0)}),i.addTest("csstransforms3d",function(){return!!F("perspective","1px",!0)}),i.addTest("csstransitions",F("transition","all",!0)),function(){var e,t,n,o,l,u;for(var d in s)if(s.hasOwnProperty(d)){if(e=[],(t=s[d]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=a(t.fn,"function")?t.fn():t.fn,l=0;l<e.length;l++)1===(u=e[l].split(".")).length?i[u[0]]=o:(!i[u[0]]||i[u[0]]instanceof Boolean||(i[u[0]]=new Boolean(i[u[0]])),i[u[0]][u[1]]=o),r.push((o?"":"no-")+u.join("-"))}}(),d(r),delete o.addTest,delete o.addAsyncTest;for(var G=0;G<i._q.length;G++)i._q[G]();e.Modernizr=i}(window,document);

!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,noModule:!0};function b(e,t,n){var r,i=(t=t||E).createElement("script");if(i.text=e,n)for(r in c)n[r]&&(i[r]=n[r]);t.head.appendChild(i).parentNode.removeChild(i)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var k=function(e,t){return new k.fn.init(e,t)},f=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:"3.3.1",constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&k.isPlainObject(n)?n:{},a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e)||(t=r(e))&&("function"!=typeof(n=v.call(t,"constructor")&&t.constructor)||a.call(n)!==l))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){b(e)},each:function(e,t){var n,r=0;if(p(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(f,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ae(),x=ae(),D=ae(),N=function(e,t){return e===t&&(l=!0),0},A={}.hasOwnProperty,t=[],j=t.pop,q=t.push,L=t.push,H=t.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){T()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(t=H.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(n){L={apply:t.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function oe(e,t,n,r){var i,o,a,s,u,l,c,f=t&&t.ownerDocument,p=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==p&&9!==p&&11!==p)return n;if(!r&&((t?t.ownerDocument||t:m)!==C&&T(t),t=t||C,E)){if(11!==p&&(u=J.exec(e)))if(i=u[1]){if(9===p){if(!(a=t.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(t,a)&&a.id===i)return n.push(a),n}else{if(u[2])return L.apply(n,t.getElementsByTagName(e)),n;if((i=u[3])&&d.getElementsByClassName&&t.getElementsByClassName)return L.apply(n,t.getElementsByClassName(i)),n}if(d.qsa&&!D[e+" "]&&(!v||!v.test(e))){if(1!==p)f=t,c=e;else if("object"!==t.nodeName.toLowerCase()){for((s=t.getAttribute("id"))?s=s.replace(te,ne):t.setAttribute("id",s=k),o=(l=h(e)).length;o--;)l[o]="#"+s+" "+ye(l[o]);c=l.join(","),f=K.test(e)&&ge(t.parentNode)||t}if(c)try{return L.apply(n,f.querySelectorAll(c)),n}catch(e){}finally{s===k&&t.removeAttribute("id")}}}return g(e.replace(B,"$1"),t,n,r)}function ae(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function se(e){return e[k]=!0,e}function ue(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){for(var n=e.split("|"),r=n.length;r--;)b.attrHandle[n[r]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function fe(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function pe(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function de(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ie(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function he(a){return se(function(o){return o=+o,se(function(e,t){for(var n,r=a([],e.length,o),i=r.length;i--;)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ge(e){return e&&void 0!==e.getElementsByTagName&&e}for(e in d=oe.support={},i=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},T=oe.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",re,!1):n.attachEvent&&n.attachEvent("onunload",re)),d.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ue(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=Q.test(C.getElementsByClassName),d.getById=ue(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(Z,ee);return function(e){var t=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=Q.test(C.querySelectorAll))&&(ue(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=Q.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ue(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",W)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=Q.test(a.compareDocumentPosition),y=t||Q.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},N=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?O(u,e)-O(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?O(u,e)-O(u,t):0;if(i===o)return ce(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?ce(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),t=t.replace(z,"='$1']"),d.matchesSelector&&E&&!D[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return 0<oe(t,C,null,[e]).length},oe.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&A.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(N),l){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return u=null,e},o=oe.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=o(t);return n},(b=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=oe.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){for(;l;){for(a=e;a=a[l];)if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){for(d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];a=++s&&a&&a[l]||(d=s=0)||u.pop();)if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)for(;(a=++s&&a&&a[l]||(d=s=0)||u.pop())&&((x?a.nodeName.toLowerCase()!==f:1!==a.nodeType)||!++d||(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a!==e)););return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,t){for(var n,r=a(e,o),i=r.length;i--;)e[n=O(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:se(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?se(function(e,t,n,r){for(var i,o=s(e,null,r,[]),a=e.length;a--;)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:se(function(t){return function(e){return 0<oe(t,e).length}}),contains:se(function(t){return t=t.replace(Z,ee),function(e){return-1<(e.textContent||e.innerText||o(e)).indexOf(t)}}),lang:se(function(n){return U.test(n||"")||oe.error("unsupported lang: "+n),n=n.replace(Z,ee).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;0<=--r;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=fe(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=pe(e);function ve(){}function ye(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){for(;e=e[u];)if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){for(;e=e[u];)if((1===e.nodeType||f)&&s(e,t,n))return!0}else for(;e=e[u];)if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function xe(i){return 1<i.length?function(e,t,n){for(var r=i.length;r--;)if(!i[r](e,t,n))return!1;return!0}:i[0]}function be(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function we(d,h,g,v,y,e){return v&&!v[k]&&(v=we(v)),y&&!y[k]&&(y=we(y,e)),se(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:be(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v)for(i=be(p,u),v(i,[],n,r),o=i.length;o--;)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a));if(e){if(y||d){if(y){for(i=[],o=p.length;o--;)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}for(o=p.length;o--;)(a=p[o])&&-1<(i=y?O(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=be(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):L.apply(t,p)})}function Te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=me(function(e){return e===i},a,!0),l=me(function(e){return-1<O(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[me(xe(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r&&!b.relative[e[n].type];n++);return we(1<s&&xe(c),1<s&&ye(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Te(e.slice(s,n)),n<r&&Te(e=e.slice(n)),n<r&&ye(e))}c.push(t)}return xe(c)}return ve.prototype=b.filters=b.pseudos,b.setFilters=new ve,h=oe.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);for(a=e,s=[],u=b.preFilter;a;){for(o in n&&!(r=F.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=_.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=V[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?oe.error(e):x(e,s).slice(0)},f=oe.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=D[e+" "];if(!a){for(t||(t=h(e)),n=t.length;n--;)(a=Te(t[n]))[k]?i.push(a):o.push(a);(a=D(e,(v=o,y=i,m=0<y.length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){for(a=0,t||o.ownerDocument===C||(T(o),n=!E);s=v[a++];)if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){for(a=0;s=y[a++];)s(c,f,t,n);if(e){if(0<u)for(;l--;)c[l]||f[l]||(f[l]=j.call(r));f=be(f)}L.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&oe.uniqueSort(r)}return i&&(S=h,w=p),c},m?se(r):r))).selector=e}return a},g=oe.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(Z,ee),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=V.needsContext.test(e)?0:o.length;i--&&(a=o[i],!b.relative[s=a.type]);)if((u=b.find[s])&&(r=u(a.matches[0].replace(Z,ee),K.test(o[0].type)&&ge(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&ye(o)))return L.apply(n,r),n;break}}return(l||f(e,c))(r,t,!E,n,!t||K.test(e)&&ge(t.parentNode)||t),n},d.sortStable=k.split("").sort(N).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(C);k.find=d,k.expr=d.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=d.uniqueSort,k.text=d.getText,k.isXMLDoc=d.isXML,k.contains=d.contains,k.escapeSelector=d.escape;var h=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},S=k.expr.match.needsContext;function D(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function A(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(A(this,e||[],!1))},not:function(e){return this.pushStack(A(this,e||[],!0))},is:function(e){return!!A(this,"string"==typeof e&&S.test(e)?k(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,j=k(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!S.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return D(e,"iframe")?e.contentDocument:(D(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(H[r]||k.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function M(e){return e}function R(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(P)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1)for(t=u.shift();++l<s.length;)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1);r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){for(var n;-1<(n=k.inArray(t,s,n));)s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,R,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,R,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==R&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:R))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();for(;t--;)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var $=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return $.then(e).catch(function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||((k.isReady=!0)!==e&&0<--k.readyWait||$.resolveWith(E,[k]))}}),k.ready.then=$.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var F=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)F(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function U(e){return e.replace(_,"ms-").replace(z,X)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=k.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[U(t)]=n;else for(r in t)i[U(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][U(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(U):(t=U(t))in r?[t]:t.match(P)||[]).length;for(;n--;)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){for(t=a.length;t--;)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=U(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):F(this,function(e){var t;if(o&&void 0===e){if(void 0!==(t=Q.get(o,n)))return t;if(void 0!==(t=Z(o,n)))return t}else this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:k.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&k.contains(e.ownerDocument,e)&&"none"===k.css(e,"display")},ie=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function oe(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=(k.cssNumber[t]||"px"!==l&&+u)&&te.exec(k.css(e,t));if(c&&c[3]!==l){for(u/=2,l=l||c[3],c=+u||1;a--;)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ae={};function se(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=Y.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&re(r)&&(i[o]=(f=l=u=void 0,l=(s=r).ownerDocument,c=s.nodeName,(f=ae[c])||(u=l.body.appendChild(l.createElement(c)),f=k.css(u,"display"),u.parentNode.removeChild(u),"none"===f&&(f="block"),ae[c]=f)))):"none"!==n&&(i[o]="none",Y.set(r,"display",n)));var s,u,l,c,f;for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}k.fn.extend({show:function(){return se(this,!0)},hide:function(){return se(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){re(this)?k(this).show():k(this).hide()})}});var ue=/^(?:checkbox|radio)$/i,le=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ce=/^$|^module$|\/(?:java|ecma)script/i,fe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function pe(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&D(e,t)?k.merge([e],n):n}function de(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}fe.optgroup=fe.option,fe.tbody=fe.tfoot=fe.colgroup=fe.caption=fe.thead,fe.th=fe.td;var he,ge,ve=/<|&#?\w+;/;function ye(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(ve.test(o)){for(a=a||f.appendChild(t.createElement("div")),s=(le.exec(o)||["",""])[1].toLowerCase(),u=fe[s]||fe._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];c--;)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));for(f.textContent="",d=0;o=p[d++];)if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=k.contains(o.ownerDocument,o),a=pe(f.appendChild(o),"script"),l&&de(a),n)for(c=0;o=a[c++];)ce.test(o.type||"")&&n.push(o);return f}he=E.createDocumentFragment().appendChild(E.createElement("div")),(ge=E.createElement("input")).setAttribute("type","radio"),ge.setAttribute("checked","checked"),ge.setAttribute("name","t"),he.appendChild(ge),y.checkClone=he.cloneNode(!0).cloneNode(!0).lastChild.checked,he.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!he.cloneNode(!0).lastChild.defaultValue;var me=E.documentElement,xe=/^key/,be=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,we=/^([^.]*)(?:\.(.+)|)/;function Te(){return!0}function Ce(){return!1}function Ee(){try{return E.activeElement}catch(e){}}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ce;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(v)for(n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(me,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return void 0!==k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;l--;)d=g=(s=we.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){for(l=(t=(t||"").match(P)||[""]).length;l--;)if(d=g=(s=we.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){for(f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Y.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){for(a=k.event.handlers.call(this,s,l),t=0;(i=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Ee()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Ee()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&D(this,"input"))return this.click(),!1},_default:function(e){return D(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Te:Ce,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Ce,isPropagationStopped:Ce,isImmediatePropagationStopped:Ce,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Te,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Te,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Te,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&xe.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&be.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ce),this.each(function(){k.event.remove(this,e,n,t)})}});var Se=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,De=/<script|<style|<link/i,Ne=/checked\s*(?:[^=]|=\s*.checked.)/i,Ae=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return D(e,"table")&&D(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function qe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Le(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function He(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Y.hasData(e)&&(o=Y.access(e),a=Y.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);Q.hasData(e)&&(s=Q.access(e),u=k.extend({},s),Q.set(t,u))}}function Oe(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ne.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Oe(t,r,i,o)});if(f&&(t=(e=ye(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(pe(e,"script"),qe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,pe(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Le),c=0;c<s;c++)u=a[c],ce.test(u.type||"")&&!Y.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&k._evalUrl(u.src):b(u.textContent.replace(Ae,""),l,u))}return n}function Pe(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(pe(r)),r.parentNode&&(n&&k.contains(r.ownerDocument,r)&&de(pe(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(Se,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=k.contains(e.ownerDocument,e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=pe(c),r=0,i=(o=pe(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&ue.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||pe(e),a=a||pe(c),r=0,i=o.length;r<i;r++)He(o[r],a[r]);else He(e,c);return 0<(a=pe(c,"script")).length&&de(a,!f&&pe(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),k.fn.extend({detach:function(e){return Pe(this,e,!0)},remove:function(e){return Pe(this,e)},text:function(e){return F(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Oe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return Oe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Oe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Oe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(pe(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return F(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!De.test(e)&&!fe[(le.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(pe(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Oe(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(pe(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||k.contains(e.ownerDocument,e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",me.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=36===u.offsetWidth||"absolute",me.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Be=/^(none|table(?!-c[ea]).+)/,Fe=/^--/,_e={position:"absolute",visibility:"hidden",display:"block"},ze={letterSpacing:"0",fontWeight:"400"},Xe=["Webkit","Moz","ms"],Ue=E.createElement("div").style;function Ve(e){var t=k.cssProps[e];return t||(t=k.cssProps[e]=function(e){if(e in Ue)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=Xe.length;n--;)if((e=Xe[n]+t)in Ue)return e}(e)||e),t}function Ge(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ye(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+ne[a]+"Width",!0,i))):(u+=k.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=k.css(e,"border"+ne[a]+"Width",!0,i):s+=k.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function Qe(e,t,n){var r=Re(e),i=We(e,t,r),o="border-box"===k.css(e,"boxSizing",!1,r),a=o;if(Me.test(i)){if(!n)return i;i="auto"}return a=a&&(y.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===k.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ye(e,t,n||(o?"border":"content"),a,r,i)+"px"}function Je(e,t,n,r,i){return new Je.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=U(t),u=Fe.test(t),l=e.style;if(u||(t=Ve(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=oe(e,t,i),o="number"),null!=n&&n==n&&("number"===o&&(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=U(t);return Fe.test(t)||(t=Ve(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in ze&&(i=ze[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,s){k.cssHooks[s]={get:function(e,t,n){if(t)return!Be.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Qe(e,s,n):ie(e,_e,function(){return Qe(e,s,n)})},set:function(e,t,n){var r,i=Re(e),o="border-box"===k.css(e,"boxSizing",!1,i),a=n&&Ye(e,s,n,o,i);return o&&y.scrollboxSize()===i.position&&(a-=Math.ceil(e["offset"+s[0].toUpperCase()+s.slice(1)]-parseFloat(i[s])-Ye(e,s,"border",!1,i)-.5)),a&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[s]=t,t=k.css(e,s)),Ge(0,t,a)}}}),k.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ge)}),k.fn.extend({css:function(e,t){return F(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=Je).prototype={constructor:Je,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=Je.propHooks[this.prop];return e&&e.get?e.get(this):Je.propHooks._default.get(this)},run:function(e){var t,n=Je.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Je.propHooks._default.set(this),this}}).init.prototype=Je.prototype,(Je.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[k.cssProps[e.prop]]&&!k.cssHooks[e.prop]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Je.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=Je.prototype.init,k.fx.step={};var Ke,Ze,et,tt,nt=/^(?:toggle|show|hide)$/,rt=/queueHooks$/;function it(){Ze&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(it):C.setTimeout(it,k.fx.interval),k.fx.tick())}function ot(){return C.setTimeout(function(){Ke=void 0}),Ke=Date.now()}function at(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function st(e,t,n){for(var r,i=(ut.tweeners[t]||[]).concat(ut.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ut(o,e,t){var n,a,r=0,i=ut.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ke||ot(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ke||ot(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=U(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ut.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,st,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(ut,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return oe(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ut.tweeners[n]=ut.tweeners[n]||[],ut.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&re(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],nt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(se([e],!0),l=e.style.display||l,c=k.css(e,"display"),se([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&se([e],!0),p.done(function(){for(r in g||se([e]),Y.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=st(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ut.prefilters.unshift(e):ut.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(re).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=ut(this,k.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&rt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(at(r,!0),e,t,n)}}),k.each({slideDown:at("show"),slideUp:at("hide"),slideToggle:at("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(Ke=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),Ke=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){Ze||(Ze=!0,it())},k.fx.stop=function(){Ze=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},et=E.createElement("input"),tt=E.createElement("select").appendChild(E.createElement("option")),et.type="checkbox",y.checkOn=""!==et.value,y.optSelected=tt.selected,(et=E.createElement("input")).value="t",et.type="radio",y.radioValue="t"===et.value;var lt,ct=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return F(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?lt:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&D(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),lt={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ct[t]||k.find.attr;ct[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ct[o],ct[o]=r,r=null!=a(e,t,n)?o:null,ct[o]=i),r}});var ft=/^(?:input|select|textarea|button)$/i,pt=/^(?:a|area)$/i;function dt(e){return(e.match(P)||[]).join(" ")}function ht(e){return e.getAttribute&&e.getAttribute("class")||""}function gt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}k.fn.extend({prop:function(e,t){return F(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):ft.test(e.nodeName)||pt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,ht(this)))});if((e=gt(t)).length)for(;n=this[u++];)if(i=ht(n),r=1===n.nodeType&&" "+dt(i)+" "){for(a=0;o=e[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=dt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,ht(this)))});if(!arguments.length)return this.attr("class","");if((e=gt(t)).length)for(;n=this[u++];)if(i=ht(n),r=1===n.nodeType&&" "+dt(i)+" "){for(a=0;o=e[a++];)for(;-1<r.indexOf(" "+o+" ");)r=r.replace(" "+o+" "," ");i!==(s=dt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,ht(this),t),t)}):this.each(function(){var e,t,n,r;if(a)for(t=0,n=k(this),r=gt(i);e=r[t++];)n.hasClass(e)?n.removeClass(e):n.addClass(e);else void 0!==i&&"boolean"!==o||((e=ht(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&-1<(" "+dt(ht(n))+" ").indexOf(t))return!0;return!1}});var vt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(vt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:dt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!D(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=k.makeArray(t),a=i.length;a--;)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var yt=/^(?:focusinfocus|focusoutblur)$/,mt=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!yt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,yt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}for(i=0;(o=p[i++])&&!e.isPropagationStopped();)f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||{})[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,mt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,mt),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var xt=C.location,bt=Date.now(),wt=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Tt=/\[\]$/,Ct=/\r?\n/g,Et=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function St(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Tt.test(n)?i(n,t):St(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)St(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)St(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&kt.test(this.nodeName)&&!Et.test(e)&&(this.checked||!ue.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(Ct,"\r\n")}}):{name:t.name,value:n.replace(Ct,"\r\n")}}).get()}});var Dt=/%20/g,Nt=/#.*$/,At=/([?&])_=[^&]*/,jt=/^(.*?):[ \t]*([^\r\n]*)$/gm,qt=/^(?:GET|HEAD)$/,Lt=/^\/\//,Ht={},Ot={},Pt="*/".concat("*"),Mt=E.createElement("a");function Rt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))for(;n=i[r++];)"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function It(t,i,o,a){var s={},u=t===Ot;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Wt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Mt.href=xt.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:xt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Wt(Wt(e,k.ajaxSettings),t):Wt(k.ajaxSettings,e)},ajaxPrefilter:Rt(Ht),ajaxTransport:Rt(Ot),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n)for(n={};t=jt.exec(p);)n[t[1].toLowerCase()]=t[2];t=n[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||xt.href)+"").replace(Lt,xt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),It(Ht,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!qt.test(v.type),f=v.url.replace(Nt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Dt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(wt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(At,"$1"),o=(wt.test(f)?"&":"?")+"_="+bt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Pt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=It(Ot,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var $t={0:200,1223:204},Bt=k.ajaxSettings.xhr();y.cors=!!Bt&&"withCredentials"in Bt,y.ajax=Bt=!!Bt,k.ajaxTransport(function(i){var o,a;if(y.cors||Bt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t($t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain)return{send:function(e,t){r=k("<script>").prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ft,_t=[],zt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=_t.pop()||k.expando+"_"+bt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(zt,"$1"+r):!1!==e.jsonp&&(e.url+=(wt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,_t.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ft=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ft.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=ye([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=dt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===k.css(e,"position");)e=e.offsetParent;return e||me})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return F(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Me.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return F(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=D,k.isFunction=m,k.isWindow=x,k.camelCase=U,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Xt=C.jQuery,Ut=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Ut),e&&C.jQuery===k&&(C.jQuery=Xt),k},e||(C.jQuery=C.$=k),k});
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e(t.bootstrap={},t.jQuery)}(this,function(t,e){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},e=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.forEach(function(t){var e,n,i;e=r,i=o[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return r}for(var r,n,o,a,l,h,f,u,d,p,g,m,_,v,E,b,y,T,w,C,I,D,A,S,O,N,k,L,P,x,j,M,R,H,F,W,U,B,K,V,Q,Y,G,q,z,X,J=function(i){var e="transitionend";var l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return 0<i(document).find(e).length?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i(t).css("transition-duration");return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],o=e[i],s=o&&l.isElement(o)?"element":(a=o,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+r+'".')}var a}};return i.fn.emulateTransitionEnd=function(t){var e=this,n=!1;return i(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(e)},t),this},i.event.special[l.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},l}(e=e&&e.hasOwnProperty("default")?e.default:e),Z=(n="alert",a="."+(o="bs.alert"),l=(r=e).fn[n],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},"alert","fade","show",f=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){r.removeData(this._element,o),this._element=null},t._getRootElement=function(t){var e=J.getSelectorFromElement(t),n=!1;return e&&(n=r(e)[0]),n||(n=r(t).closest(".alert")[0]),n},t._triggerCloseEvent=function(t){var e=r.Event(h.CLOSE);return r(t).trigger(e),e},t._removeElement=function(e){var n=this;if(r(e).removeClass("show"),r(e).hasClass("fade")){var t=J.getTransitionDurationFromElement(e);r(e).one(J.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){r(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=r(this),e=t.data(o);e||(e=new i(this),t.data(o,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.1.0"}}]),i}(),r(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',f._handleDismiss(new f)),r.fn[n]=f._jQueryInterface,r.fn[n].Constructor=f,r.fn[n].noConflict=function(){return r.fn[n]=l,f._jQueryInterface},f),$=(d="button",g="."+(p="bs.button"),m=".data-api",_=(u=e).fn[d],v="active","btn",E='[data-toggle^="button"]','[data-toggle="buttons"]',"input",".active",b=".btn",y={CLICK_DATA_API:"click"+g+m,FOCUS_BLUR_DATA_API:"focus"+g+m+" blur"+g+m},T=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=u(this._element).closest('[data-toggle="buttons"]')[0];if(n){var i=u(this._element).find("input")[0];if(i){if("radio"===i.type)if(i.checked&&u(this._element).hasClass(v))t=!1;else{var r=u(n).find(".active")[0];r&&u(r).removeClass(v)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!u(this._element).hasClass(v),u(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!u(this._element).hasClass(v)),t&&u(this._element).toggleClass(v)},t.dispose=function(){u.removeData(this._element,p),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=u(this).data(p);t||(t=new n(this),u(this).data(p,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.1.0"}}]),n}(),u(document).on(y.CLICK_DATA_API,E,function(t){t.preventDefault();var e=t.target;u(e).hasClass("btn")||(e=u(e).closest(b)),T._jQueryInterface.call(u(e),"toggle")}).on(y.FOCUS_BLUR_DATA_API,E,function(t){var e=u(t.target).closest(b)[0];u(e).toggleClass("focus",/^focus(in)?$/.test(t.type))}),u.fn[d]=T._jQueryInterface,u.fn[d].Constructor=T,u.fn[d].noConflict=function(){return u.fn[d]=_,T._jQueryInterface},T),tt=(C="carousel",D="."+(I="bs.carousel"),A=".data-api",S=(w=e).fn[C],O={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},N={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},k="next",L="prev","left","right",P={SLIDE:"slide"+D,SLID:"slid"+D,KEYDOWN:"keydown"+D,MOUSEENTER:"mouseenter"+D,MOUSELEAVE:"mouseleave"+D,TOUCHEND:"touchend"+D,LOAD_DATA_API:"load"+D+A,CLICK_DATA_API:"click"+D+A},"carousel",x="active","slide","carousel-item-right","carousel-item-left","carousel-item-next","carousel-item-prev",j={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},M=function(){function o(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=w(t)[0],this._indicatorsElement=w(this._element).find(j.INDICATORS)[0],this._addEventListeners()}var t=o.prototype;return t.next=function(){this._isSliding||this._slide(k)},t.nextWhenVisible=function(){!document.hidden&&w(this._element).is(":visible")&&"hidden"!==w(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(L)},t.pause=function(t){t||(this._isPaused=!0),w(this._element).find(j.NEXT_PREV)[0]&&(J.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=w(this._element).find(j.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)w(this._element).one(P.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?k:L;this._slide(i,this._items[t])}},t.dispose=function(){w(this._element).off(D),w.removeData(this._element,I),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=c({},O,t),J.typeCheckConfig(C,t,N),t},t._addEventListeners=function(){var e=this;this._config.keyboard&&w(this._element).on(P.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(w(this._element).on(P.MOUSEENTER,function(t){return e.pause(t)}).on(P.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&w(this._element).on(P.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=w.makeArray(w(t).parent().find(j.ITEM)),this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===k,i=t===L,r=this._getItemIndex(e),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return e;var s=(r+(t===L?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(w(this._element).find(j.ACTIVE_ITEM)[0]),r=w.Event(P.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return w(this._element).trigger(r),r},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){w(this._indicatorsElement).find(j.ACTIVE).removeClass(x);var e=this._indicatorsElement.children[this._getItemIndex(t)];e&&w(e).addClass(x)}},t._slide=function(t,e){var n,i,r,o=this,s=w(this._element).find(j.ACTIVE_ITEM)[0],a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(t===k?(n="carousel-item-left",i="carousel-item-next",r="left"):(n="carousel-item-right",i="carousel-item-prev",r="right"),l&&w(l).hasClass(x))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var f=w.Event(P.SLID,{relatedTarget:l,direction:r,from:a,to:c});if(w(this._element).hasClass("slide")){w(l).addClass(i),J.reflow(l),w(s).addClass(n),w(l).addClass(n);var u=J.getTransitionDurationFromElement(s);w(s).one(J.TRANSITION_END,function(){w(l).removeClass(n+" "+i).addClass(x),w(s).removeClass(x+" "+i+" "+n),o._isSliding=!1,setTimeout(function(){return w(o._element).trigger(f)},0)}).emulateTransitionEnd(u)}else w(s).removeClass(x),w(l).addClass(x),this._isSliding=!1,w(this._element).trigger(f);h&&this.cycle()}},o._jQueryInterface=function(i){return this.each(function(){var t=w(this).data(I),e=c({},O,w(this).data());"object"==typeof i&&(e=c({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new o(this,e),w(this).data(I,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},o._dataApiClickHandler=function(t){var e=J.getSelectorFromElement(this);if(e){var n=w(e)[0];if(n&&w(n).hasClass("carousel")){var i=c({},w(n).data(),w(this).data()),r=this.getAttribute("data-slide-to");r&&(i.interval=!1),o._jQueryInterface.call(w(n),i),r&&w(n).data(I).to(r),t.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return O}}]),o}(),w(document).on(P.CLICK_DATA_API,j.DATA_SLIDE,M._dataApiClickHandler),w(window).on(P.LOAD_DATA_API,function(){w(j.DATA_RIDE).each(function(){var t=w(this);M._jQueryInterface.call(t,t.data())})}),w.fn[C]=M._jQueryInterface,w.fn[C].Constructor=M,w.fn[C].noConflict=function(){return w.fn[C]=S,M._jQueryInterface},M),et=(H="collapse",W="."+(F="bs.collapse"),U=(R=e).fn[H],B={toggle:!0,parent:""},K={toggle:"boolean",parent:"(string|element)"},V={SHOW:"show"+W,SHOWN:"shown"+W,HIDE:"hide"+W,HIDDEN:"hidden"+W,CLICK_DATA_API:"click"+W+".data-api"},Q="show",Y="collapse",G="collapsing",q="collapsed","width","height",z={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},X=function(){function a(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=R.makeArray(R('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=R(z.DATA_TOGGLE),i=0;i<n.length;i++){var r=n[i],o=J.getSelectorFromElement(r);null!==o&&0<R(o).filter(t).length&&(this._selector=o,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){R(this._element).hasClass(Q)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!(this._isTransitioning||R(this._element).hasClass(Q)||(this._parent&&0===(t=R.makeArray(R(this._parent).find(z.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(t=null),t&&(e=R(t).not(this._selector).data(F))&&e._isTransitioning))){var i=R.Event(V.SHOW);if(R(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(R(t).not(this._selector),"hide"),e||R(t).data(F,null));var r=this._getDimension();R(this._element).removeClass(Y).addClass(G),(this._element.style[r]=0)<this._triggerArray.length&&R(this._triggerArray).removeClass(q).attr("aria-expanded",!0),this.setTransitioning(!0);var o="scroll"+(r[0].toUpperCase()+r.slice(1)),s=J.getTransitionDurationFromElement(this._element);R(this._element).one(J.TRANSITION_END,function(){R(n._element).removeClass(G).addClass(Y).addClass(Q),n._element.style[r]="",n.setTransitioning(!1),R(n._element).trigger(V.SHOWN)}).emulateTransitionEnd(s),this._element.style[r]=this._element[o]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&R(this._element).hasClass(Q)){var e=R.Event(V.HIDE);if(R(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",J.reflow(this._element),R(this._element).addClass(G).removeClass(Y).removeClass(Q),0<this._triggerArray.length)for(var i=0;i<this._triggerArray.length;i++){var r=this._triggerArray[i],o=J.getSelectorFromElement(r);null!==o&&(R(o).hasClass(Q)||R(r).addClass(q).attr("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[n]="";var s=J.getTransitionDurationFromElement(this._element);R(this._element).one(J.TRANSITION_END,function(){t.setTransitioning(!1),R(t._element).removeClass(G).addClass(Y).trigger(V.HIDDEN)}).emulateTransitionEnd(s)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){R.removeData(this._element,F),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=c({},B,t)).toggle=Boolean(t.toggle),J.typeCheckConfig(H,t,K),t},t._getDimension=function(){return R(this._element).hasClass("width")?"width":"height"},t._getParent=function(){var n=this,t=null;J.isElement(this._config.parent)?(t=this._config.parent,void 0!==this._config.parent.jquery&&(t=this._config.parent[0])):t=R(this._config.parent)[0];var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return R(t).find(e).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){if(t){var n=R(t).hasClass(Q);0<e.length&&R(e).toggleClass(q,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(t){var e=J.getSelectorFromElement(t);return e?R(e)[0]:null},a._jQueryInterface=function(i){return this.each(function(){var t=R(this),e=t.data(F),n=c({},B,t.data(),"object"==typeof i&&i);if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(F,e)),"string"==typeof i){if(void 0===e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return B}}]),a}(),R(document).on(V.CLICK_DATA_API,z.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=R(this),e=J.getSelectorFromElement(this);R(e).each(function(){var t=R(this),e=t.data(F)?"toggle":n.data();X._jQueryInterface.call(t,e)})}),R.fn[H]=X._jQueryInterface,R.fn[H].Constructor=X,R.fn[H].noConflict=function(){return R.fn[H]=U,X._jQueryInterface},X),nt="undefined"!=typeof window&&"undefined"!=typeof document,it=["Edge","Trident","Firefox"],rt=0,ot=0;ot<it.length;ot+=1)if(nt&&0<=navigator.userAgent.indexOf(it[ot])){rt=1;break}var st=nt&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},rt))}};function at(t){return t&&"[object Function]"==={}.toString.call(t)}function lt(t,e){if(1!==t.nodeType)return[];var n=getComputedStyle(t,null);return e?n[e]:n}function ct(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function ht(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=lt(t),n=e.overflow,i=e.overflowX,r=e.overflowY;return/(auto|scroll|overlay)/.test(n+r+i)?t:ht(ct(t))}var ft={},ut=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"all";if(t=t.toString(),ft.hasOwnProperty(t))return ft[t];switch(t){case"11":ft[t]=-1!==navigator.userAgent.indexOf("Trident");break;case"10":ft[t]=-1!==navigator.appVersion.indexOf("MSIE 10");break;case"all":ft[t]=-1!==navigator.userAgent.indexOf("Trident")||-1!==navigator.userAgent.indexOf("MSIE")}return ft.all=ft.all||Object.keys(ft).some(function(t){return ft[t]}),ft[t]};function dt(t){if(!t)return document.documentElement;for(var e=ut(10)?document.body:null,n=t.offsetParent;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TD","TABLE"].indexOf(n.nodeName)&&"static"===lt(n,"position")?dt(n):n:t?t.ownerDocument.documentElement:document.documentElement}function pt(t){return null!==t.parentNode?pt(t.parentNode):t}function gt(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,r=n?e:t,o=document.createRange();o.setStart(i,0),o.setEnd(r,0);var s,a,l=o.commonAncestorContainer;if(t!==l&&e!==l||i.contains(r))return"BODY"===(a=(s=l).nodeName)||"HTML"!==a&&dt(s.firstElementChild)!==s?dt(l):l;var c=pt(t);return c.host?gt(c.host,e):gt(t,pt(e).host)}function mt(t){var e="top"===(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"===n||"HTML"===n){var i=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||i)[e]}return t[e]}function _t(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+i+"Width"],10)}function vt(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],ut(10)?n["offset"+t]+i["margin"+("Height"===t?"Top":"Left")]+i["margin"+("Height"===t?"Bottom":"Right")]:0)}function Et(){var t=document.body,e=document.documentElement,n=ut(10)&&getComputedStyle(e);return{height:vt("Height",t,e,n),width:vt("Width",t,e,n)}}var bt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},yt=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),Tt=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},wt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function Ct(t){return wt({},t,{right:t.left+t.width,bottom:t.top+t.height})}function It(t){var e={};try{if(ut(10)){e=t.getBoundingClientRect();var n=mt(t,"top"),i=mt(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var r={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},o="HTML"===t.nodeName?Et():{},s=o.width||t.clientWidth||r.right-r.left,a=o.height||t.clientHeight||r.bottom-r.top,l=t.offsetWidth-s,c=t.offsetHeight-a;if(l||c){var h=lt(t);l-=_t(h,"x"),c-=_t(h,"y"),r.width-=l,r.height-=c}return Ct(r)}function Dt(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=ut(10),r="HTML"===e.nodeName,o=It(t),s=It(e),a=ht(t),l=lt(e),c=parseFloat(l.borderTopWidth,10),h=parseFloat(l.borderLeftWidth,10);n&&"HTML"===e.nodeName&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var f=Ct({top:o.top-s.top-c,left:o.left-s.left-h,width:o.width,height:o.height});if(f.marginTop=0,f.marginLeft=0,!i&&r){var u=parseFloat(l.marginTop,10),d=parseFloat(l.marginLeft,10);f.top-=c-u,f.bottom-=c-u,f.left-=h-d,f.right-=h-d,f.marginTop=u,f.marginLeft=d}return(i&&!n?e.contains(a):e===a&&"BODY"!==a.nodeName)&&(f=function(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=mt(e,"top"),r=mt(e,"left"),o=n?-1:1;return t.top+=i*o,t.bottom+=i*o,t.left+=r*o,t.right+=r*o,t}(f,e)),f}function At(t){if(!t||!t.parentElement||ut())return document.documentElement;for(var e=t.parentElement;e&&"none"===lt(e,"transform");)e=e.parentElement;return e||document.documentElement}function St(t,e,n,i){var r=4<arguments.length&&void 0!==arguments[4]&&arguments[4],o={top:0,left:0},s=r?At(t):gt(t,e);if("viewport"===i)o=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=Dt(t,n),r=Math.max(n.clientWidth,window.innerWidth||0),o=Math.max(n.clientHeight,window.innerHeight||0),s=e?0:mt(n),a=e?0:mt(n,"left");return Ct({top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:r,height:o})}(s,r);else{var a=void 0;"scrollParent"===i?"BODY"===(a=ht(ct(e))).nodeName&&(a=t.ownerDocument.documentElement):a="window"===i?t.ownerDocument.documentElement:i;var l=Dt(a,s,r);if("HTML"!==a.nodeName||function t(e){var n=e.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===lt(e,"position")||t(ct(e)))}(s))o=l;else{var c=Et(),h=c.height,f=c.width;o.top+=l.top-l.marginTop,o.bottom=h+l.top,o.left+=l.left-l.marginLeft,o.right=f+l.left}}return o.left+=n,o.top+=n,o.right-=n,o.bottom-=n,o}function Ot(t,e,i,n,r){var o=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=St(i,n,o,r),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},l=Object.keys(a).map(function(t){return wt({key:t},a[t],{area:(e=a[t],e.width*e.height)});var e}).sort(function(t,e){return e.area-t.area}),c=l.filter(function(t){var e=t.width,n=t.height;return e>=i.clientWidth&&n>=i.clientHeight}),h=0<c.length?c[0].key:l[0].key,f=t.split("-")[1];return h+(f?"-"+f:"")}function Nt(t,e,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return Dt(n,i?At(e):gt(e,n),i)}function kt(t){var e=getComputedStyle(t),n=parseFloat(e.marginTop)+parseFloat(e.marginBottom),i=parseFloat(e.marginLeft)+parseFloat(e.marginRight);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function Lt(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function Pt(t,e,n){n=n.split("-")[0];var i=kt(t),r={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),s=o?"top":"left",a=o?"left":"top",l=o?"height":"width",c=o?"width":"height";return r[s]=e[s]+e[l]/2-i[l]/2,r[a]=n===a?e[a]-i[c]:e[Lt(a)],r}function xt(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function jt(t,n,e){return(void 0===e?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t.name===n});var i=xt(t,function(t){return t.name===n});return t.indexOf(i)}(t,0,e))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var e=t.function||t.fn;t.enabled&&at(e)&&(n.offsets.popper=Ct(n.offsets.popper),n.offsets.reference=Ct(n.offsets.reference),n=e(n,t))}),n}function Mt(t,n){return t.some(function(t){var e=t.name;return t.enabled&&e===n})}function Rt(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var r=e[i],o=r?""+r+n:t;if(void 0!==document.body.style[o])return o}return null}function Ht(t){var e=t.ownerDocument;return e?e.defaultView:window}function Ft(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function Wt(n,i){Object.keys(i).forEach(function(t){var e="";-1!==["width","height","top","right","bottom","left"].indexOf(t)&&Ft(i[t])&&(e="px"),n.style[t]=i[t]+e})}function Ut(t,e,n){var i=xt(t,function(t){return t.name===e}),r=!!i&&t.some(function(t){return t.name===n&&t.enabled&&t.order<i.order});if(!r){var o="`"+e+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}var Bt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Kt=Bt.slice(3);function Vt(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=Kt.indexOf(t),i=Kt.slice(n+1).concat(Kt.slice(0,n));return e?i.reverse():i}var Qt="flip",Yt="clockwise",Gt="counterclockwise";var qt={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var r=t.offsets,o=r.reference,s=r.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",h={start:Tt({},l,o[l]),end:Tt({},l,o[l]+o[c]-s[c])};t.offsets.popper=wt({},s,h[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n,i=e.offset,r=t.placement,o=t.offsets,s=o.popper,a=o.reference,l=r.split("-")[0];return n=Ft(+i)?[+i,0]:function(t,r,o,e){var s=[0,0],a=-1!==["right","left"].indexOf(e),n=t.split(/(\+|\-)/).map(function(t){return t.trim()}),i=n.indexOf(xt(n,function(t){return-1!==t.search(/,|\s/)}));n[i]&&-1===n[i].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==i?[n.slice(0,i).concat([n[i].split(l)[0]]),[n[i].split(l)[1]].concat(n.slice(i+1))]:[n];return(c=c.map(function(t,e){var n=(1===e?!a:a)?"height":"width",i=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,i=!0,t):i?(t[t.length-1]+=e,i=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,i){var r=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+r[1],s=r[2];if(!o)return t;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return Ct(a)[e]/100*o}return"vh"===s||"vw"===s?("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o:o}(t,n,r,o)})})).forEach(function(n,i){n.forEach(function(t,e){Ft(t)&&(s[i]+=t*("-"===n[e-1]?-1:1))})}),s}(i,s,a,l),"left"===l?(s.top+=n[0],s.left-=n[1]):"right"===l?(s.top+=n[0],s.left+=n[1]):"top"===l?(s.left+=n[0],s.top-=n[1]):"bottom"===l&&(s.left+=n[0],s.top+=n[1]),t.popper=s,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,i){var e=i.boundariesElement||dt(t.instance.popper);t.instance.reference===e&&(e=dt(e));var r=St(t.instance.popper,t.instance.reference,i.padding,e,t.positionFixed);i.boundaries=r;var n=i.priority,o=t.offsets.popper,s={primary:function(t){var e=o[t];return o[t]<r[t]&&!i.escapeWithReference&&(e=Math.max(o[t],r[t])),Tt({},t,e)},secondary:function(t){var e="right"===t?"left":"top",n=o[e];return o[t]>r[t]&&!i.escapeWithReference&&(n=Math.min(o[e],r[t]-("right"===t?o.width:o.height))),Tt({},e,n)}};return n.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";o=wt({},o,s[e](t))}),t.offsets.popper=o,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,r=t.placement.split("-")[0],o=Math.floor,s=-1!==["top","bottom"].indexOf(r),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return n[a]<o(i[l])&&(t.offsets.popper[l]=o(i[l])-n[c]),n[l]>o(i[a])&&(t.offsets.popper[l]=o(i[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!Ut(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var r=t.placement.split("-")[0],o=t.offsets,s=o.popper,a=o.reference,l=-1!==["left","right"].indexOf(r),c=l?"height":"width",h=l?"Top":"Left",f=h.toLowerCase(),u=l?"left":"top",d=l?"bottom":"right",p=kt(i)[c];a[d]-p<s[f]&&(t.offsets.popper[f]-=s[f]-(a[d]-p)),a[f]+p>s[d]&&(t.offsets.popper[f]+=a[f]+p-s[d]),t.offsets.popper=Ct(t.offsets.popper);var g=a[f]+a[c]/2-p/2,m=lt(t.instance.popper),_=parseFloat(m["margin"+h],10),v=parseFloat(m["border"+h+"Width"],10),E=g-t.offsets.popper[f]-_-v;return E=Math.max(Math.min(s[c]-p,E),0),t.arrowElement=i,t.offsets.arrow=(Tt(n={},f,Math.round(E)),Tt(n,u,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(p,g){if(Mt(p.instance.modifiers,"inner"))return p;if(p.flipped&&p.placement===p.originalPlacement)return p;var m=St(p.instance.popper,p.instance.reference,g.padding,g.boundariesElement,p.positionFixed),_=p.placement.split("-")[0],v=Lt(_),E=p.placement.split("-")[1]||"",b=[];switch(g.behavior){case Qt:b=[_,v];break;case Yt:b=Vt(_);break;case Gt:b=Vt(_,!0);break;default:b=g.behavior}return b.forEach(function(t,e){if(_!==t||b.length===e+1)return p;_=p.placement.split("-")[0],v=Lt(_);var n,i=p.offsets.popper,r=p.offsets.reference,o=Math.floor,s="left"===_&&o(i.right)>o(r.left)||"right"===_&&o(i.left)<o(r.right)||"top"===_&&o(i.bottom)>o(r.top)||"bottom"===_&&o(i.top)<o(r.bottom),a=o(i.left)<o(m.left),l=o(i.right)>o(m.right),c=o(i.top)<o(m.top),h=o(i.bottom)>o(m.bottom),f="left"===_&&a||"right"===_&&l||"top"===_&&c||"bottom"===_&&h,u=-1!==["top","bottom"].indexOf(_),d=!!g.flipVariations&&(u&&"start"===E&&a||u&&"end"===E&&l||!u&&"start"===E&&c||!u&&"end"===E&&h);(s||f||d)&&(p.flipped=!0,(s||f)&&(_=b[e+1]),d&&(E="end"===(n=E)?"start":"start"===n?"end":n),p.placement=_+(E?"-"+E:""),p.offsets.popper=wt({},p.offsets.popper,Pt(p.instance.popper,p.offsets.reference,p.placement)),p=jt(p.instance.modifiers,p,"flip"))}),p},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,r=i.popper,o=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return r[s?"left":"top"]=o[n]-(a?r[s?"width":"height"]:0),t.placement=Lt(e),t.offsets.popper=Ct(r),t}},hide:{order:800,enabled:!0,fn:function(t){if(!Ut(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=xt(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,r=t.offsets.popper,o=xt(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s,a,l=void 0!==o?o:e.gpuAcceleration,c=It(dt(t.instance.popper)),h={position:r.position},f={left:Math.floor(r.left),top:Math.floor(r.top),bottom:Math.floor(r.bottom),right:Math.floor(r.right)},u="bottom"===n?"top":"bottom",d="right"===i?"left":"right",p=Rt("transform");if(a="bottom"===u?-c.height+f.bottom:f.top,s="right"===d?-c.width+f.right:f.left,l&&p)h[p]="translate3d("+s+"px, "+a+"px, 0)",h[u]=0,h[d]=0,h.willChange="transform";else{var g="bottom"===u?-1:1,m="right"===d?-1:1;h[u]=a*g,h[d]=s*m,h.willChange=u+", "+d}var _={"x-placement":t.placement};return t.attributes=wt({},_,t.attributes),t.styles=wt({},h,t.styles),t.arrowStyles=wt({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return Wt(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&Wt(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,r){var o=Nt(r,e,t,n.positionFixed),s=Ot(n.placement,o,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",s),Wt(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},zt=function(){function o(t,e){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};bt(this,o),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=st(this.update.bind(this)),this.options=wt({},o.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=e&&e.jquery?e[0]:e,this.options.modifiers={},Object.keys(wt({},o.Defaults.modifiers,i.modifiers)).forEach(function(t){n.options.modifiers[t]=wt({},o.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return wt({name:t},n.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&at(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return yt(o,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=Nt(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=Ot(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=Pt(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=jt(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,Mt(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[Rt("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=function(t,e,n,i){n.updateBound=i,Ht(t).addEventListener("resize",n.updateBound,{passive:!0});var r=ht(t);return function t(e,n,i,r){var o="BODY"===e.nodeName,s=o?e.ownerDocument.defaultView:e;s.addEventListener(n,i,{passive:!0}),o||t(ht(s.parentNode),n,i,r),r.push(s)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return function(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,Ht(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}.call(this)}}]),o}();zt.Utils=("undefined"!=typeof window?window:global).PopperUtils,zt.placements=Bt,zt.Defaults=qt;var Xt,Jt,Zt,$t,te,ee,ne,ie,re,oe,se,ae,le,ce,he,fe,ue,de,pe,ge,me,_e,ve,Ee,be,ye,Te,we,Ce,Ie,De,Ae,Se,Oe,Ne,ke,Le,Pe,xe,je,Me,Re,He,Fe,We,Ue,Be,Ke,Ve,Qe,Ye,Ge,qe,ze,Xe,Je,Ze,$e,tn,en,nn,rn,on,sn,an,ln,cn,hn,fn,un,dn,pn,gn,mn,_n,vn,En,bn,yn=(Jt="dropdown",$t="."+(Zt="bs.dropdown"),te=".data-api",ee=(Xt=e).fn[Jt],ne=new RegExp("38|40|27"),ie={HIDE:"hide"+$t,HIDDEN:"hidden"+$t,SHOW:"show"+$t,SHOWN:"shown"+$t,CLICK:"click"+$t,CLICK_DATA_API:"click"+$t+te,KEYDOWN_DATA_API:"keydown"+$t+te,KEYUP_DATA_API:"keyup"+$t+te},re="disabled",oe="show","dropup","dropright","dropleft",se="dropdown-menu-right","position-static",ae='[data-toggle="dropdown"]',".dropdown form",le=".dropdown-menu",".navbar-nav",".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)","top-start","top-end","bottom-start","bottom-end","right-start","left-start",ce={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},he={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},fe=function(){function l(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=l.prototype;return t.toggle=function(){if(!this._element.disabled&&!Xt(this._element).hasClass(re)){var t=l._getParentFromElement(this._element),e=Xt(this._menu).hasClass(oe);if(l._clearMenus(),!e){var n={relatedTarget:this._element},i=Xt.Event(ie.SHOW,n);if(Xt(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if(void 0===zt)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r=this._element;"parent"===this._config.reference?r=t:J.isElement(this._config.reference)&&(r=this._config.reference,void 0!==this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&Xt(t).addClass("position-static"),this._popper=new zt(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===Xt(t).closest(".navbar-nav").length&&Xt(document.body).children().on("mouseover",null,Xt.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),Xt(this._menu).toggleClass(oe),Xt(t).toggleClass(oe).trigger(Xt.Event(ie.SHOWN,n))}}}},t.dispose=function(){Xt.removeData(this._element,Zt),Xt(this._element).off($t),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;Xt(this._element).on(ie.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=c({},this.constructor.Default,Xt(this._element).data(),t),J.typeCheckConfig(Jt,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=l._getParentFromElement(this._element);this._menu=Xt(t).find(le)[0]}return this._menu},t._getPlacement=function(){var t=Xt(this._element).parent(),e="bottom-start";return t.hasClass("dropup")?(e="top-start",Xt(this._menu).hasClass(se)&&(e="top-end")):t.hasClass("dropright")?e="right-start":t.hasClass("dropleft")?e="left-start":Xt(this._menu).hasClass(se)&&(e="bottom-end"),e},t._detectNavbar=function(){return 0<Xt(this._element).closest(".navbar").length},t._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=c({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},l._jQueryInterface=function(e){return this.each(function(){var t=Xt(this).data(Zt);if(t||(t=new l(this,"object"==typeof e?e:null),Xt(this).data(Zt,t)),"string"==typeof e){if(void 0===t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},l._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=Xt.makeArray(Xt(ae)),n=0;n<e.length;n++){var i=l._getParentFromElement(e[n]),r=Xt(e[n]).data(Zt),o={relatedTarget:e[n]};if(r){var s=r._menu;if(Xt(i).hasClass(oe)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&Xt.contains(i,t.target))){var a=Xt.Event(ie.HIDE,o);Xt(i).trigger(a),a.isDefaultPrevented()||("ontouchstart"in document.documentElement&&Xt(document.body).children().off("mouseover",null,Xt.noop),e[n].setAttribute("aria-expanded","false"),Xt(s).removeClass(oe),Xt(i).removeClass(oe).trigger(Xt.Event(ie.HIDDEN,o)))}}}},l._getParentFromElement=function(t){var e,n=J.getSelectorFromElement(t);return n&&(e=Xt(n)[0]),e||t.parentNode},l._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||Xt(t.target).closest(le).length)):ne.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!Xt(this).hasClass(re))){var e=l._getParentFromElement(this),n=Xt(e).hasClass(oe);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var i=Xt(e).find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)").get();if(0!==i.length){var r=i.indexOf(t.target);38===t.which&&0<r&&r--,40===t.which&&r<i.length-1&&r++,r<0&&(r=0),i[r].focus()}}else{if(27===t.which){var o=Xt(e).find(ae)[0];Xt(o).trigger("focus")}Xt(this).trigger("click")}}},s(l,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return ce}},{key:"DefaultType",get:function(){return he}}]),l}(),Xt(document).on(ie.KEYDOWN_DATA_API,ae,fe._dataApiKeydownHandler).on(ie.KEYDOWN_DATA_API,le,fe._dataApiKeydownHandler).on(ie.CLICK_DATA_API+" "+ie.KEYUP_DATA_API,fe._clearMenus).on(ie.CLICK_DATA_API,ae,function(t){t.preventDefault(),t.stopPropagation(),fe._jQueryInterface.call(Xt(this),"toggle")}).on(ie.CLICK_DATA_API,".dropdown form",function(t){t.stopPropagation()}),Xt.fn[Jt]=fe._jQueryInterface,Xt.fn[Jt].Constructor=fe,Xt.fn[Jt].noConflict=function(){return Xt.fn[Jt]=ee,fe._jQueryInterface},fe),Tn=(de="modal",ge="."+(pe="bs.modal"),me=(ue=e).fn[de],_e={backdrop:!0,keyboard:!0,focus:!0,show:!0},ve={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Ee={HIDE:"hide"+ge,HIDDEN:"hidden"+ge,SHOW:"show"+ge,SHOWN:"shown"+ge,FOCUSIN:"focusin"+ge,RESIZE:"resize"+ge,CLICK_DISMISS:"click.dismiss"+ge,KEYDOWN_DISMISS:"keydown.dismiss"+ge,MOUSEUP_DISMISS:"mouseup.dismiss"+ge,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ge,CLICK_DATA_API:"click"+ge+".data-api"},"modal-scrollbar-measure","modal-backdrop",be="modal-open",ye="fade",Te="show",we={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},Ce=function(){function r(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=ue(t).find(we.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var t=r.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){ue(this._element).hasClass(ye)&&(this._isTransitioning=!0);var n=ue.Event(Ee.SHOW,{relatedTarget:t});ue(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),ue(document.body).addClass(be),this._setEscapeEvent(),this._setResizeEvent(),ue(this._element).on(Ee.CLICK_DISMISS,we.DATA_DISMISS,function(t){return e.hide(t)}),ue(this._dialog).on(Ee.MOUSEDOWN_DISMISS,function(){ue(e._element).one(Ee.MOUSEUP_DISMISS,function(t){ue(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=ue.Event(Ee.HIDE);if(ue(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=ue(this._element).hasClass(ye);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),ue(document).off(Ee.FOCUSIN),ue(this._element).removeClass(Te),ue(this._element).off(Ee.CLICK_DISMISS),ue(this._dialog).off(Ee.MOUSEDOWN_DISMISS),i){var r=J.getTransitionDurationFromElement(this._element);ue(this._element).one(J.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(r)}else this._hideModal()}}},t.dispose=function(){ue.removeData(this._element,pe),ue(window,document,this._element,this._backdrop).off(ge),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=c({},_e,t),J.typeCheckConfig(de,t,ve),t},t._showElement=function(t){var e=this,n=ue(this._element).hasClass(ye);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&J.reflow(this._element),ue(this._element).addClass(Te),this._config.focus&&this._enforceFocus();var i=ue.Event(Ee.SHOWN,{relatedTarget:t}),r=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,ue(e._element).trigger(i)};if(n){var o=J.getTransitionDurationFromElement(this._element);ue(this._dialog).one(J.TRANSITION_END,r).emulateTransitionEnd(o)}else r()},t._enforceFocus=function(){var e=this;ue(document).off(Ee.FOCUSIN).on(Ee.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===ue(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?ue(this._element).on(Ee.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||ue(this._element).off(Ee.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?ue(window).on(Ee.RESIZE,function(t){return e.handleUpdate(t)}):ue(window).off(Ee.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){ue(document.body).removeClass(be),t._resetAdjustments(),t._resetScrollbar(),ue(t._element).trigger(Ee.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(ue(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=ue(this._element).hasClass(ye)?ye:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",n&&ue(this._backdrop).addClass(n),ue(this._backdrop).appendTo(document.body),ue(this._element).on(Ee.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&J.reflow(this._backdrop),ue(this._backdrop).addClass(Te),!t)return;if(!n)return void t();var i=J.getTransitionDurationFromElement(this._backdrop);ue(this._backdrop).one(J.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){ue(this._backdrop).removeClass(Te);var r=function(){e._removeBackdrop(),t&&t()};if(ue(this._element).hasClass(ye)){var o=J.getTransitionDurationFromElement(this._backdrop);ue(this._backdrop).one(J.TRANSITION_END,r).emulateTransitionEnd(o)}else r()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var r=this;if(this._isBodyOverflowing){ue(we.FIXED_CONTENT).each(function(t,e){var n=ue(e)[0].style.paddingRight,i=ue(e).css("padding-right");ue(e).data("padding-right",n).css("padding-right",parseFloat(i)+r._scrollbarWidth+"px")}),ue(we.STICKY_CONTENT).each(function(t,e){var n=ue(e)[0].style.marginRight,i=ue(e).css("margin-right");ue(e).data("margin-right",n).css("margin-right",parseFloat(i)-r._scrollbarWidth+"px")}),ue(we.NAVBAR_TOGGLER).each(function(t,e){var n=ue(e)[0].style.marginRight,i=ue(e).css("margin-right");ue(e).data("margin-right",n).css("margin-right",parseFloat(i)+r._scrollbarWidth+"px")});var t=document.body.style.paddingRight,e=ue(document.body).css("padding-right");ue(document.body).data("padding-right",t).css("padding-right",parseFloat(e)+this._scrollbarWidth+"px")}},t._resetScrollbar=function(){ue(we.FIXED_CONTENT).each(function(t,e){var n=ue(e).data("padding-right");void 0!==n&&ue(e).css("padding-right",n).removeData("padding-right")}),ue(we.STICKY_CONTENT+", "+we.NAVBAR_TOGGLER).each(function(t,e){var n=ue(e).data("margin-right");void 0!==n&&ue(e).css("margin-right",n).removeData("margin-right")});var t=ue(document.body).data("padding-right");void 0!==t&&ue(document.body).css("padding-right",t).removeData("padding-right")},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},r._jQueryInterface=function(n,i){return this.each(function(){var t=ue(this).data(pe),e=c({},r.Default,ue(this).data(),"object"==typeof n&&n);if(t||(t=new r(this,e),ue(this).data(pe,t)),"string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(r,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return _e}}]),r}(),ue(document).on(Ee.CLICK_DATA_API,we.DATA_TOGGLE,function(t){var e,n=this,i=J.getSelectorFromElement(this);i&&(e=ue(i)[0]);var r=ue(e).data(pe)?"toggle":c({},ue(e).data(),ue(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var o=ue(e).one(Ee.SHOW,function(t){t.isDefaultPrevented()||o.one(Ee.HIDDEN,function(){ue(n).is(":visible")&&n.focus()})});Ce._jQueryInterface.call(ue(e),r,this)}),ue.fn[de]=Ce._jQueryInterface,ue.fn[de].Constructor=Ce,ue.fn[de].noConflict=function(){return ue.fn[de]=me,Ce._jQueryInterface},Ce),wn=(De="tooltip",Se="."+(Ae="bs.tooltip"),Oe=(Ie=e).fn[De],Ne="bs-tooltip",ke=new RegExp("(^|\\s)"+Ne+"\\S+","g"),xe={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:(Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},!1),selector:(Le={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},!1),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},"out",Me={HIDE:"hide"+Se,HIDDEN:"hidden"+Se,SHOW:(je="show")+Se,SHOWN:"shown"+Se,INSERTED:"inserted"+Se,CLICK:"click"+Se,FOCUSIN:"focusin"+Se,FOCUSOUT:"focusout"+Se,MOUSEENTER:"mouseenter"+Se,MOUSELEAVE:"mouseleave"+Se},Re="fade",He="show",".tooltip-inner",".arrow",Fe="hover",We="focus","click","manual",Ue=function(){function i(t,e){if(void 0===zt)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=Ie(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),Ie(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(Ie(this.getTipElement()).hasClass(He))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),Ie.removeData(this.element,this.constructor.DATA_KEY),Ie(this.element).off(this.constructor.EVENT_KEY),Ie(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&Ie(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===Ie(this.element).css("display"))throw new Error("Please use show on visible elements");var t=Ie.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){Ie(this.element).trigger(t);var n=Ie.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),r=J.getUID(this.constructor.NAME);i.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&Ie(i).addClass(Re);var o="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,s=this._getAttachment(o);this.addAttachmentClass(s);var a=!1===this.config.container?document.body:Ie(this.config.container);Ie(i).data(this.constructor.DATA_KEY,this),Ie.contains(this.element.ownerDocument.documentElement,this.tip)||Ie(i).appendTo(a),Ie(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new zt(this.element,i,{placement:s,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),Ie(i).addClass(He),"ontouchstart"in document.documentElement&&Ie(document.body).children().on("mouseover",null,Ie.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,Ie(e.element).trigger(e.constructor.Event.SHOWN),"out"===t&&e._leave(null,e)};if(Ie(this.tip).hasClass(Re)){var c=J.getTransitionDurationFromElement(this.tip);Ie(this.tip).one(J.TRANSITION_END,l).emulateTransitionEnd(c)}else l()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=Ie.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==je&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),Ie(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(Ie(this.element).trigger(i),!i.isDefaultPrevented()){if(Ie(n).removeClass(He),"ontouchstart"in document.documentElement&&Ie(document.body).children().off("mouseover",null,Ie.noop),this._activeTrigger.click=!1,this._activeTrigger[We]=!1,this._activeTrigger[Fe]=!1,Ie(this.tip).hasClass(Re)){var o=J.getTransitionDurationFromElement(n);Ie(n).one(J.TRANSITION_END,r).emulateTransitionEnd(o)}else r();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){Ie(this.getTipElement()).addClass(Ne+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||Ie(this.config.template)[0],this.tip},t.setContent=function(){var t=Ie(this.getTipElement());this.setElementContent(t.find(".tooltip-inner"),this.getTitle()),t.removeClass(Re+" "+He)},t.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?Ie(e).parent().is(t)||t.empty().append(e):t.text(Ie(e).text()):t[n?"html":"text"](e)},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getAttachment=function(t){return Pe[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)Ie(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if("manual"!==t){var e=t===Fe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Fe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;Ie(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}Ie(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=c({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||Ie(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),Ie(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?We:Fe]=!0),Ie(e.getTipElement()).hasClass(He)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||Ie(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),Ie(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?We:Fe]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState="out",e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){"out"===e._hoverState&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){return"number"==typeof(t=c({},this.constructor.Default,Ie(this.element).data(),t)).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),J.typeCheckConfig(De,t,this.constructor.DefaultType),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=Ie(this.getTipElement()),e=t.attr("class").match(ke);null!==e&&0<e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(Ie(t).removeClass(Re),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=Ie(this).data(Ae),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),Ie(this).data(Ae,t)),"string"==typeof n)){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return xe}},{key:"NAME",get:function(){return De}},{key:"DATA_KEY",get:function(){return Ae}},{key:"Event",get:function(){return Me}},{key:"EVENT_KEY",get:function(){return Se}},{key:"DefaultType",get:function(){return Le}}]),i}(),Ie.fn[De]=Ue._jQueryInterface,Ie.fn[De].Constructor=Ue,Ie.fn[De].noConflict=function(){return Ie.fn[De]=Oe,Ue._jQueryInterface},Ue),Cn=(Ke="popover",Qe="."+(Ve="bs.popover"),Ye=(Be=e).fn[Ke],Ge="bs-popover",qe=new RegExp("(^|\\s)"+Ge+"\\S+","g"),ze=c({},wn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Xe=c({},wn.DefaultType,{content:"(string|element|function)"}),"fade",".popover-header",".popover-body",Je={HIDE:"hide"+Qe,HIDDEN:"hidden"+Qe,SHOW:"show"+Qe,SHOWN:"shown"+Qe,INSERTED:"inserted"+Qe,CLICK:"click"+Qe,FOCUSIN:"focusin"+Qe,FOCUSOUT:"focusout"+Qe,MOUSEENTER:"mouseenter"+Qe,MOUSELEAVE:"mouseleave"+Qe},Ze=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var r=i.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){Be(this.getTipElement()).addClass(Ge+"-"+t)},r.getTipElement=function(){return this.tip=this.tip||Be(this.config.template)[0],this.tip},r.setContent=function(){var t=Be(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(".popover-body"),e),t.removeClass("fade show")},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=Be(this.getTipElement()),e=t.attr("class").match(qe);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=Be(this).data(Ve),e="object"==typeof n?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this,e),Be(this).data(Ve,t)),"string"==typeof n)){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return ze}},{key:"NAME",get:function(){return Ke}},{key:"DATA_KEY",get:function(){return Ve}},{key:"Event",get:function(){return Je}},{key:"EVENT_KEY",get:function(){return Qe}},{key:"DefaultType",get:function(){return Xe}}]),i}(wn),Be.fn[Ke]=Ze._jQueryInterface,Be.fn[Ke].Constructor=Ze,Be.fn[Ke].noConflict=function(){return Be.fn[Ke]=Ye,Ze._jQueryInterface},Ze),In=(tn="scrollspy",nn="."+(en="bs.scrollspy"),rn=($e=e).fn[tn],on={offset:10,method:"auto",target:""},sn={offset:"number",method:"string",target:"(string|element)"},an={ACTIVATE:"activate"+nn,SCROLL:"scroll"+nn,LOAD_DATA_API:"load"+nn+".data-api"},"dropdown-item",ln="active",cn={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},"offset",hn="position",fn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+cn.NAV_LINKS+","+this._config.target+" "+cn.LIST_ITEMS+","+this._config.target+" "+cn.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,$e(this._scrollElement).on(an.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?"offset":hn,r="auto"===this._config.method?t:this._config.method,o=r===hn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),$e.makeArray($e(this._selector)).map(function(t){var e,n=J.getSelectorFromElement(t);if(n&&(e=$e(n)[0]),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[$e(e)[r]().top+o,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){$e.removeData(this._element,en),$e(this._scrollElement).off(nn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=c({},on,t)).target){var e=$e(t.target).attr("id");e||(e=J.getUID(tn),$e(t.target).attr("id",e)),t.target="#"+e}return J.typeCheckConfig(tn,t,sn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;)this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&(void 0===this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",");t=t.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=$e(t.join(","));n.hasClass("dropdown-item")?(n.closest(cn.DROPDOWN).find(cn.DROPDOWN_TOGGLE).addClass(ln),n.addClass(ln)):(n.addClass(ln),n.parents(cn.NAV_LIST_GROUP).prev(cn.NAV_LINKS+", "+cn.LIST_ITEMS).addClass(ln),n.parents(cn.NAV_LIST_GROUP).prev(cn.NAV_ITEMS).children(cn.NAV_LINKS).addClass(ln)),$e(this._scrollElement).trigger(an.ACTIVATE,{relatedTarget:e})},t._clear=function(){$e(this._selector).filter(cn.ACTIVE).removeClass(ln)},n._jQueryInterface=function(e){return this.each(function(){var t=$e(this).data(en);if(t||(t=new n(this,"object"==typeof e&&e),$e(this).data(en,t)),"string"==typeof e){if(void 0===t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.1.0"}},{key:"Default",get:function(){return on}}]),n}(),$e(window).on(an.LOAD_DATA_API,function(){for(var t=$e.makeArray($e(cn.DATA_SPY)),e=t.length;e--;){var n=$e(t[e]);fn._jQueryInterface.call(n,n.data())}}),$e.fn[tn]=fn._jQueryInterface,$e.fn[tn].Constructor=fn,$e.fn[tn].noConflict=function(){return $e.fn[tn]=rn,fn._jQueryInterface},fn),Dn=(pn="."+(dn="bs.tab"),gn=(un=e).fn.tab,mn={HIDE:"hide"+pn,HIDDEN:"hidden"+pn,SHOW:"show"+pn,SHOWN:"shown"+pn,CLICK_DATA_API:"click"+pn+".data-api"},"dropdown-menu",_n="active","disabled","fade","show",".dropdown",".nav, .list-group",vn=".active",En="> li > .active",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',".dropdown-toggle","> .dropdown-menu .active",bn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&un(this._element).hasClass(_n)||un(this._element).hasClass("disabled"))){var t,i,e=un(this._element).closest(".nav, .list-group")[0],r=J.getSelectorFromElement(this._element);if(e){var o="UL"===e.nodeName?En:vn;i=(i=un.makeArray(un(e).find(o)))[i.length-1]}var s=un.Event(mn.HIDE,{relatedTarget:this._element}),a=un.Event(mn.SHOW,{relatedTarget:i});if(i&&un(i).trigger(s),un(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(t=un(r)[0]),this._activate(this._element,e);var l=function(){var t=un.Event(mn.HIDDEN,{relatedTarget:n._element}),e=un.Event(mn.SHOWN,{relatedTarget:i});un(i).trigger(t),un(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){un.removeData(this._element,dn),this._element=null},t._activate=function(t,e,n){var i=this,r=("UL"===e.nodeName?un(e).find(En):un(e).children(vn))[0],o=n&&r&&un(r).hasClass("fade"),s=function(){return i._transitionComplete(t,r,n)};if(r&&o){var a=J.getTransitionDurationFromElement(r);un(r).one(J.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){un(e).removeClass("show "+_n);var i=un(e.parentNode).find("> .dropdown-menu .active")[0];i&&un(i).removeClass(_n),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(un(t).addClass(_n),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),J.reflow(t),un(t).addClass("show"),t.parentNode&&un(t.parentNode).hasClass("dropdown-menu")){var r=un(t).closest(".dropdown")[0];r&&un(r).find(".dropdown-toggle").addClass(_n),t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=un(this),e=t.data(dn);if(e||(e=new i(this),t.data(dn,e)),"string"==typeof n){if(void 0===e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.0"}}]),i}(),un(document).on(mn.CLICK_DATA_API,'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',function(t){t.preventDefault(),bn._jQueryInterface.call(un(this),"show")}),un.fn.tab=bn._jQueryInterface,un.fn.tab.Constructor=bn,un.fn.tab.noConflict=function(){return un.fn.tab=gn,bn._jQueryInterface},bn);!function(t){if(void 0===t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=J,t.Alert=Z,t.Button=$,t.Carousel=tt,t.Collapse=et,t.Dropdown=yn,t.Modal=Tn,t.Popover=Cn,t.Scrollspy=In,t.Tab=Dn,t.Tooltip=wn,Object.defineProperty(t,"__esModule",{value:!0})});
!function(e){var t=!1;if("function"==typeof define&&define.amd&&(define(e),t=!0),"object"==typeof exports&&(module.exports=e(),t=!0),!t){var r=window.Storages,o=window.Storages=e();o.noConflict=function(){return window.Storages=r,o}}}(function(){var e={},o=e.toString,n=e.hasOwnProperty,i=n.toString,s=i.call(Object),a=Object.getPrototypeOf,l={};function f(){var t,r,e,o,n,i=this._type,s=arguments.length,a=window[i],l=arguments,f=l[0];if(s<1)throw new Error("Minimum 1 argument must be given");if(Array.isArray(f)){for(o in r={},f)if(f.hasOwnProperty(o)){t=f[o];try{r[t]=JSON.parse(a.getItem(t))}catch(e){r[t]=a.getItem(t)}}return r}if(1!=s){try{r=JSON.parse(a.getItem(f))}catch(e){throw new ReferenceError(f+" is not defined in this storage")}for(o=1;o<s-1;o++)if(void 0===(r=r[l[o]]))throw new ReferenceError([].slice.call(l,1,o+1).join(".")+" is not defined in this storage");if(Array.isArray(l[o])){for(n in e=r,r={},l[o])l[o].hasOwnProperty(n)&&(r[l[o][n]]=e[l[o][n]]);return r}return r[l[o]]}try{return JSON.parse(a.getItem(f))}catch(e){return a.getItem(f)}}function u(){var e,t,r,o,n=this._type,i=arguments.length,s=window[n],a=arguments,l=a[0],f=a[1],u=isNaN(f)?{}:[];if(i<1||!m(l)&&i<2)throw new Error("Minimum 2 arguments must be given or first parameter must be an object");if(m(l)){for(o in l)l.hasOwnProperty(o)&&(m(e=l[o])||this.alwaysUseJson?s.setItem(o,JSON.stringify(e)):s.setItem(o,e));return l}if(2==i)return"object"==typeof f||this.alwaysUseJson?s.setItem(l,JSON.stringify(f)):s.setItem(l,f),f;try{null!=(r=s.getItem(l))&&(u=JSON.parse(r))}catch(e){}for(r=u,o=1;o<i-2;o++)e=a[o],t=isNaN(a[o+1])?"object":"array",(!r[e]||"object"==t&&!m(r[e])||"array"==t&&!Array.isArray(r[e]))&&(r[e]="array"==t?[]:{}),r=r[e];return r[a[o]]=a[o+1],s.setItem(l,JSON.stringify(u)),u}function c(){var e,t,r,o,n=this._type,i=arguments.length,s=window[n],a=arguments,l=a[0];if(i<1)throw new Error("Minimum 1 argument must be given");if(Array.isArray(l)){for(r in l)l.hasOwnProperty(r)&&s.removeItem(l[r]);return!0}if(1==i)return s.removeItem(l),!0;try{e=t=JSON.parse(s.getItem(l))}catch(e){throw new ReferenceError(l+" is not defined in this storage")}for(r=1;r<i-1;r++)if(void 0===(t=t[a[r]]))throw new ReferenceError([].slice.call(a,1,r).join(".")+" is not defined in this storage");if(Array.isArray(a[r]))for(o in a[r])a[r].hasOwnProperty(o)&&delete t[a[r][o]];else delete t[a[r]];return s.setItem(l,JSON.stringify(e)),!0}function t(e){var t,r=w.call(this);for(t in r)r.hasOwnProperty(t)&&c.call(this,r[t]);if(e)for(t in l.namespaceStorages)l.namespaceStorages.hasOwnProperty(t)&&p(t)}function h(){var e,t=arguments.length,r=arguments,o=r[0];if(0==t)return 0==w.call(this).length;if(Array.isArray(o)){for(e=0;e<o.length;e++)if(!h.call(this,o[e]))return!1;return!0}try{var n=f.apply(this,arguments);for(e in Array.isArray(r[t-1])||(n={totest:n}),n)if(n.hasOwnProperty(e)&&!(m(n[e])&&y(n[e])||Array.isArray(n[e])&&!n[e].length||"boolean"!=typeof n[e]&&!n[e]))return!1;return!0}catch(e){return!0}}function g(){var e,t=arguments.length,r=arguments,o=r[0];if(t<1)throw new Error("Minimum 1 argument must be given");if(Array.isArray(o)){for(e=0;e<o.length;e++)if(!g.call(this,o[e]))return!1;return!0}try{var n=f.apply(this,arguments);for(e in Array.isArray(r[t-1])||(n={totest:n}),n)if(n.hasOwnProperty(e)&&(void 0===n[e]||null===n[e]))return!1;return!0}catch(e){return!1}}function w(){var e=this._type,t=arguments.length,r=window[e],o=[],n={};if((n=0<t?f.apply(this,arguments):r)&&n._cookie){var i=Cookies.get();for(var s in i)i.hasOwnProperty(s)&&""!=s&&o.push(s.replace(n._prefix,""))}else for(var a in n)n.hasOwnProperty(a)&&o.push(a);return o}function p(e){if(!e||"string"!=typeof e)throw new Error("First parameter must be a string");d?(window.localStorage.getItem(e)||window.localStorage.setItem(e,"{}"),window.sessionStorage.getItem(e)||window.sessionStorage.setItem(e,"{}")):(window.localCookieStorage.getItem(e)||window.localCookieStorage.setItem(e,"{}"),window.sessionCookieStorage.getItem(e)||window.sessionCookieStorage.setItem(e,"{}"));var t={localStorage:r({},l.localStorage,{_ns:e}),sessionStorage:r({},l.sessionStorage,{_ns:e})};return S&&(window.cookieStorage.getItem(e)||window.cookieStorage.setItem(e,"{}"),t.cookieStorage=r({},l.cookieStorage,{_ns:e})),l.namespaceStorages[e]=t}function m(e){var t,r;return!(!e||"[object Object]"!==o.call(e))&&(!(t=a(e))||"function"==typeof(r=n.call(t,"constructor")&&t.constructor)&&i.call(r)===s)}function y(e){var t;for(t in e)return!1;return!0}function r(){for(var e=1,t=arguments[0];e<arguments.length;e++){var r=arguments[e];for(var o in r)r.hasOwnProperty(o)&&(t[o]=r[o])}return t}var d=function(e){var t="jsapi";try{return!!window[e]&&(window[e].setItem(t,t),window[e].removeItem(t),!0)}catch(e){return!1}}("localStorage"),S="undefined"!=typeof Cookies,_={_type:"",_ns:"",_callMethod:function(e,t){var r=[],o=(t=Array.prototype.slice.call(t))[0];return this._ns&&r.push(this._ns),"string"==typeof o&&-1!==o.indexOf(".")&&(t.shift(),[].unshift.apply(t,o.split("."))),[].push.apply(r,t),e.apply(this,r)},alwaysUseJson:!1,get:function(){return d||S?this._callMethod(f,arguments):null},set:function(){var e=arguments.length,t=arguments,r=t[0];if(e<1||!m(r)&&e<2)throw new Error("Minimum 2 arguments must be given or first parameter must be an object");if(!d&&!S)return null;if(m(r)&&this._ns){for(var o in r)r.hasOwnProperty(o)&&this._callMethod(u,[o,r[o]]);return r}var n=this._callMethod(u,t);return this._ns?n[r.split(".")[0]]:n},remove:function(){if(arguments.length<1)throw new Error("Minimum 1 argument must be given");return d||S?this._callMethod(c,arguments):null},removeAll:function(e){return d||S?this._ns?(this._callMethod(u,[{}]),!0):this._callMethod(t,[e]):null},isEmpty:function(){return d||S?this._callMethod(h,arguments):null},isSet:function(){if(arguments.length<1)throw new Error("Minimum 1 argument must be given");return d||S?this._callMethod(g,arguments):null},keys:function(){return d||S?this._callMethod(w,arguments):null}};if(S){window.name||(window.name=Math.floor(1e8*Math.random()));var v={_cookie:!0,_prefix:"",_expires:null,_path:null,_domain:null,setItem:function(e,t){Cookies.set(this._prefix+e,t,{expires:this._expires,path:this._path,domain:this._domain})},getItem:function(e){return Cookies.get(this._prefix+e)},removeItem:function(e){return Cookies.remove(this._prefix+e,{path:this._path})},clear:function(){var e=Cookies.get();for(var t in e)e.hasOwnProperty(t)&&""!=t&&(!this._prefix&&-1===t.indexOf("ls_")&&-1===t.indexOf("ss_")||this._prefix&&0===t.indexOf(this._prefix))&&Cookies.remove(t)},setExpires:function(e){return this._expires=e,this},setPath:function(e){return this._path=e,this},setDomain:function(e){return this._domain=e,this},setConf:function(e){return e.path&&(this._path=e.path),e.domain&&(this._domain=e.domain),e.expires&&(this._expires=e.expires),this},setDefaultConf:function(){this._path=this._domain=this._expires=null}};d||(window.localCookieStorage=r({},v,{_prefix:"ls_",_expires:3650}),window.sessionCookieStorage=r({},v,{_prefix:"ss_"+window.name+"_"})),window.cookieStorage=r({},v),l.cookieStorage=r({},_,{_type:"cookieStorage",setExpires:function(e){return window.cookieStorage.setExpires(e),this},setPath:function(e){return window.cookieStorage.setPath(e),this},setDomain:function(e){return window.cookieStorage.setDomain(e),this},setConf:function(e){return window.cookieStorage.setConf(e),this},setDefaultConf:function(){return window.cookieStorage.setDefaultConf(),this}})}return l.initNamespaceStorage=function(e){return p(e)},d?(l.localStorage=r({},_,{_type:"localStorage"}),l.sessionStorage=r({},_,{_type:"sessionStorage"})):(l.localStorage=r({},_,{_type:"localCookieStorage"}),l.sessionStorage=r({},_,{_type:"sessionCookieStorage"})),l.namespaceStorages={},l.removeAllStorages=function(e){l.localStorage.removeAll(e),l.sessionStorage.removeAll(e),l.cookieStorage&&l.cookieStorage.removeAll(e),e||(l.namespaceStorages={})},l.alwaysUseJsonInStorage=function(e){_.alwaysUseJson=e,l.localStorage.alwaysUseJson=e,l.sessionStorage.alwaysUseJson=e,l.cookieStorage&&(l.cookieStorage.alwaysUseJson=e)},l});
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function g(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}return function e(l){function C(e,n,o){var t;if("undefined"!=typeof document){if(1<arguments.length){if("number"==typeof(o=g({path:"/"},C.defaults,o)).expires){var r=new Date;r.setMilliseconds(r.getMilliseconds()+864e5*o.expires),o.expires=r}o.expires=o.expires?o.expires.toUTCString():"";try{t=JSON.stringify(n),/^[\{\[]/.test(t)&&(n=t)}catch(e){}n=l.write?l.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var i="";for(var c in o)o[c]&&(i+="; "+c,!0!==o[c]&&(i+="="+o[c]));return document.cookie=e+"="+n+i}e||(t={});for(var a=document.cookie?document.cookie.split("; "):[],s=/(%[0-9A-Z]{2})+/g,f=0;f<a.length;f++){var p=a[f].split("="),d=p.slice(1).join("=");this.json||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var u=p[0].replace(s,decodeURIComponent);if(d=l.read?l.read(d,u):l(d,u)||d.replace(s,decodeURIComponent),this.json)try{d=JSON.parse(d)}catch(e){}if(e===u){t=d;break}e||(t[u]=d)}catch(e){}}return t}}return(C.set=C).get=function(e){return C.call(C,e)},C.getJSON=function(){return C.apply({json:!0},[].slice.call(arguments))},C.defaults={},C.remove=function(e,n){C(e,"",g(n,{expires:-1}))},C.withConverter=e,C}(function(){})});
/*! pace 1.0.2 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X=[].slice,Y={}.hasOwnProperty,Z=function(a,b){function c(){this.constructor=a}for(var d in b)Y.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},$=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(u={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},C=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?a:+new Date},E=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==E&&(E=function(a){return setTimeout(a,50)},t=function(a){return clearTimeout(a)}),G=function(a){var b,c;return b=C(),(c=function(){var d;return d=C()-b,d>=33?(b=C(),a(d,function(){return E(c)})):setTimeout(c,33-d)})()},F=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?X.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},v=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?X.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)Y.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?v(b[a],e):b[a]=e);return b},q=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},x=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)this.bindings[a][c].handler===b?e.push(this.bindings[a].splice(c,1)):e.push(c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),f?i.push(this.bindings[c].splice(e,1)):i.push(e++);return i}},a}(),j=window.Pace||{},window.Pace=j,v(j,g.prototype),D=j.options=v({},u,window.paceOptions,x()),U=["ajax","document","eventLag","elements"],Q=0,S=U.length;S>Q;Q++)K=U[Q],D[K]===!0&&(D[K]=u[K]);i=function(a){function b(){return V=b.__super__.constructor.apply(this,arguments)}return Z(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(D.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b,c,d,e,f,g;if(null==document.querySelector(D.target))return!1;for(a=this.getElement(),d="translate3d("+this.progress+"%, 0, 0)",g=["webkitTransform","msTransform","transform"],e=0,f=g.length;f>e;e++)b=g[e],a.children[0].style[b]=d;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?c="99":(c=this.progress<10?"0":"",c+=0|this.progress),a.children[0].setAttribute("data-progress",""+c)),this.lastRenderedProgress=this.progress},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),P=window.XMLHttpRequest,O=window.XDomainRequest,N=window.WebSocket,w=function(a,b){var c,d,e;e=[];for(d in b.prototype)try{null==a[d]&&"function"!=typeof b[d]?"function"==typeof Object.defineProperty?e.push(Object.defineProperty(a,d,{get:function(){return b.prototype[d]},configurable:!0,enumerable:!0})):e.push(a[d]=b.prototype[d]):e.push(void 0)}catch(f){c=f}return e},A=[],j.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("ignore"),c=b.apply(null,a),A.shift(),c},j.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("track"),c=b.apply(null,a),A.shift(),c},J=function(a){var b;if(null==a&&(a="GET"),"track"===A[0])return"force";if(!A.length&&D.ajax){if("socket"===a&&D.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),$.call(D.ajax.trackMethods,b)>=0)return!0}return!1},k=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e,f){return J(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new P(b),a(c),c};try{w(window.XMLHttpRequest,P)}catch(d){}if(null!=O){window.XDomainRequest=function(){var b;return b=new O,a(b),b};try{w(window.XDomainRequest,O)}catch(d){}}if(null!=N&&D.ajax.trackWebSockets){window.WebSocket=function(a,b){var d;return d=null!=b?new N(a,b):new N(a),J("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d};try{w(window.WebSocket,N)}catch(d){}}}return Z(b,a),b}(h),R=null,y=function(){return null==R&&(R=new k),R},I=function(a){var b,c,d,e;for(e=D.ajax.ignoreURLs,c=0,d=e.length;d>c;c++)if(b=e[c],"string"==typeof b){if(-1!==a.indexOf(b))return!0}else if(b.test(a))return!0;return!1},y().on("request",function(b){var c,d,e,f,g;return f=b.type,e=b.request,g=b.url,I(g)?void 0:j.running||D.restartOnRequestAfter===!1&&"force"!==J(f)?void 0:(d=arguments,c=D.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,k;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(j.restart(),i=j.sources,k=[],c=0,g=i.length;g>c;c++){if(K=i[c],K instanceof a){K.watch.apply(K,d);break}k.push(void 0)}return k}},c))}),a=function(){function a(){var a=this;this.elements=[],y().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;return d=a.type,b=a.request,e=a.url,I(e)?void 0:(c="socket"===d?new n(b):new o(b),this.elements.push(c))},a}(),o=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return a.lengthComputable?h.progress=100*a.loaded/a.total:h.progress=h.progress+(100-h.progress)/2},!1),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100},!1);else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),n=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100},!1)}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},D.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=C(),b=setInterval(function(){var g;return g=C()-c-50,c=C(),e.push(g),e.length>D.eventLag.sampleCount&&e.shift(),a=q(e),++d>=D.eventLag.minSamples&&a<D.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),m=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=D.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=F(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=F(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/D.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,D.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+D.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),L=null,H=null,r=null,M=null,p=null,s=null,j.running=!1,z=function(){return D.restartOnPushState?j.restart():void 0},null!=window.history.pushState&&(T=window.history.pushState,window.history.pushState=function(){return z(),T.apply(window.history,arguments)}),null!=window.history.replaceState&&(W=window.history.replaceState,window.history.replaceState=function(){return z(),W.apply(window.history,arguments)}),l={ajax:a,elements:d,document:c,eventLag:f},(B=function(){var a,c,d,e,f,g,h,i;for(j.sources=L=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],D[a]!==!1&&L.push(new l[a](D[a]));for(i=null!=(h=D.extraSources)?h:[],d=0,f=i.length;f>d;d++)K=i[d],L.push(new K(D));return j.bar=r=new b,H=[],M=new m})(),j.stop=function(){return j.trigger("stop"),j.running=!1,r.destroy(),s=!0,null!=p&&("function"==typeof t&&t(p),p=null),B()},j.restart=function(){return j.trigger("restart"),j.stop(),j.start()},j.go=function(){var a;return j.running=!0,r.render(),a=C(),s=!1,p=G(function(b,c){var d,e,f,g,h,i,k,l,n,o,p,q,t,u,v,w;for(l=100-r.progress,e=p=0,f=!0,i=q=0,u=L.length;u>q;i=++q)for(K=L[i],o=null!=H[i]?H[i]:H[i]=[],h=null!=(w=K.elements)?w:[K],k=t=0,v=h.length;v>t;k=++t)g=h[k],n=null!=o[k]?o[k]:o[k]=new m(g),f&=n.done,n.done||(e++,p+=n.tick(b));return d=p/e,r.update(M.tick(b,d)),r.done()||f||s?(r.update(100),j.trigger("done"),setTimeout(function(){return r.finish(),j.running=!1,j.trigger("hide")},Math.max(D.ghostTime,Math.max(D.minTime-(C()-a),0)))):c()})},j.start=function(a){v(D,a),j.running=!0;try{r.render()}catch(b){i=b}return document.querySelector(".pace")?(j.trigger("start"),j.go()):setTimeout(j.start,50)},"function"==typeof define&&define.amd?define(["pace"],function(){return j}):"object"==typeof exports?module.exports=j:D.startOnPageLoad&&j.start()}).call(this);

!function(n,i){if("function"==typeof define&&define.amd)define(["jquery"],i);else if("undefined"!=typeof exports)i(require("jquery"));else{i(n.jQuery),n.metisMenu={}}}(this,function(n){"use strict";var i,e=(i=n)&&i.__esModule?i:{default:i};var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};var o,t,r,s,l,c,f,g,h=function(){function t(n,i){for(var e=0;e<i.length;e++){var t=i[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(n,i,e){return i&&t(n.prototype,i),e&&t(n,e),n}}(),u=function(t){var i=!1;function n(n){var i=this,e=!1;return t(this).one(s.TRANSITION_END,function(){e=!0}),setTimeout(function(){e||s.triggerTransitionEnd(i)},n),this}var s={TRANSITION_END:"mmTransitionEnd",triggerTransitionEnd:function(n){t(n).trigger(i.end)},supportsTransitionEnd:function(){return Boolean(i)}};return i=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},t.fn.mmEmulateTransitionEnd=n,s.supportsTransitionEnd()&&(t.event.special[s.TRANSITION_END]={bindType:i.end,delegateType:i.end,handle:function(n){if(t(n.target).is(this))return n.handleObj.handler.apply(this,arguments)}}),s}(e.default);o=e.default,s="."+(r=t="metisMenu"),l=o.fn[t],c={toggle:!0,preventDefault:!0,activeClass:"active",collapseClass:"collapse",collapseInClass:"in",collapsingClass:"collapsing",triggerElement:"a",parentTrigger:"li",subMenu:"ul"},f={SHOW:"show"+s,SHOWN:"shown"+s,HIDE:"hide"+s,HIDDEN:"hidden"+s,CLICK_DATA_API:"click"+s+".data-api"},g=function(){function s(n,i){!function(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}(this,s),this._element=n,this._config=this._getConfig(i),this._transitioning=null,this.init()}return h(s,[{key:"init",value:function(){var a=this;o(this._element).find(this._config.parentTrigger+"."+this._config.activeClass).has(this._config.subMenu).children(this._config.subMenu).attr("aria-expanded",!0).addClass(this._config.collapseClass+" "+this._config.collapseInClass),o(this._element).find(this._config.parentTrigger).not("."+this._config.activeClass).has(this._config.subMenu).children(this._config.subMenu).attr("aria-expanded",!1).addClass(this._config.collapseClass),o(this._element).find(this._config.parentTrigger).has(this._config.subMenu).children(this._config.triggerElement).on(f.CLICK_DATA_API,function(n){var i=o(this),e=i.parent(a._config.parentTrigger),t=e.siblings(a._config.parentTrigger).children(a._config.triggerElement),s=e.children(a._config.subMenu);a._config.preventDefault&&n.preventDefault(),"true"!==i.attr("aria-disabled")&&(e.hasClass(a._config.activeClass)?(i.attr("aria-expanded",!1),a._hide(s)):(a._show(s),i.attr("aria-expanded",!0),a._config.toggle&&t.attr("aria-expanded",!1)),a._config.onTransitionStart&&a._config.onTransitionStart(n))})}},{key:"_show",value:function(n){if(!this._transitioning&&!o(n).hasClass(this._config.collapsingClass)){var i=this,e=o(n),t=o.Event(f.SHOW);if(e.trigger(t),!t.isDefaultPrevented()){e.parent(this._config.parentTrigger).addClass(this._config.activeClass),this._config.toggle&&this._hide(e.parent(this._config.parentTrigger).siblings().children(this._config.subMenu+"."+this._config.collapseInClass).attr("aria-expanded",!1)),e.removeClass(this._config.collapseClass).addClass(this._config.collapsingClass).height(0),this.setTransitioning(!0);var s=function(){i._config&&i._element&&(e.removeClass(i._config.collapsingClass).addClass(i._config.collapseClass+" "+i._config.collapseInClass).height("").attr("aria-expanded",!0),i.setTransitioning(!1),e.trigger(f.SHOWN))};u.supportsTransitionEnd()?e.height(e[0].scrollHeight).one(u.TRANSITION_END,s).mmEmulateTransitionEnd(350):s()}}}},{key:"_hide",value:function(n){if(!this._transitioning&&o(n).hasClass(this._config.collapseInClass)){var i=this,e=o(n),t=o.Event(f.HIDE);if(e.trigger(t),!t.isDefaultPrevented()){e.parent(this._config.parentTrigger).removeClass(this._config.activeClass),e.height(e.height())[0].offsetHeight,e.addClass(this._config.collapsingClass).removeClass(this._config.collapseClass).removeClass(this._config.collapseInClass),this.setTransitioning(!0);var s=function(){i._config&&i._element&&(i._transitioning&&i._config.onTransitionEnd&&i._config.onTransitionEnd(),i.setTransitioning(!1),e.trigger(f.HIDDEN),e.removeClass(i._config.collapsingClass).addClass(i._config.collapseClass).attr("aria-expanded",!1))};u.supportsTransitionEnd()?0==e.height()||"none"==e.css("display")?s():e.height(0).one(u.TRANSITION_END,s).mmEmulateTransitionEnd(350):s()}}}},{key:"setTransitioning",value:function(n){this._transitioning=n}},{key:"dispose",value:function(){o.removeData(this._element,r),o(this._element).find(this._config.parentTrigger).has(this._config.subMenu).children(this._config.triggerElement).off("click"),this._transitioning=null,this._config=null,this._element=null}},{key:"_getConfig",value:function(n){return n=o.extend({},c,n)}}],[{key:"_jQueryInterface",value:function(t){return this.each(function(){var n=o(this),i=n.data(r),e=o.extend({},c,n.data(),"object"===(void 0===t?"undefined":a(t))&&t);if(!i&&/dispose/.test(t)&&this.dispose(),i||(i=new s(this,e),n.data(r,i)),"string"==typeof t){if(void 0===i[t])throw new Error('No method named "'+t+'"');i[t]()}})}}]),s}(),o.fn[t]=g._jQueryInterface,o.fn[t].Constructor=g,o.fn[t].noConflict=function(){return o.fn[t]=l,g._jQueryInterface}});
!function(){function u(t){var e=u.modules[t];if(!e)throw new Error('failed to req "'+t+'"');return"exports"in e||"function"!=typeof e.definition||(e.client=e.component=!0,e.definition.call(this,e.exports={},e),delete e.definition),e.exports}u.loader="component",(u.helper={}).semVerSort=function(t,e){for(var n=t.version.split("."),i=e.version.split("."),o=0;o<n.length;++o){var s=parseInt(n[o],10),r=parseInt(i[o],10);if(s!==r)return r<s?1:-1;var c=n[o].substr((""+s).length),a=i[o].substr((""+r).length);if(""===c&&""!==a)return 1;if(""!==c&&""===a)return-1;if(""!==c&&""!==a)return a<c?1:-1}return 0},u.latest=function(t,e){function n(t){throw new Error('failed to find latest module of "'+t+'"')}var i=/(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/;/(.*)~(.*)/.test(t)||n(t);for(var o=Object.keys(u.modules),s=[],r=[],c=0;c<o.length;c++){var a=o[c];if(new RegExp(t+"@").test(a)){var l=a.substr(t.length+1);null!=i.exec(a)?s.push({version:l,name:a}):r.push({version:l,name:a})}}if(0===s.concat(r).length&&n(t),0<s.length){var h=s.sort(u.helper.semVerSort).pop().name;return!0===e?h:u(h)}h=r.sort(function(t,e){return t.name>e.name})[0].name;return!0===e?h:u(h)},u.modules={},u.register=function(t,e){u.modules[t]={definition:e}},u.define=function(t,e){u.modules[t]={exports:e}},u.register("abpetkov~transitionize@0.0.3",function(t,e){function n(t,e){if(!(this instanceof n))return new n(t,e);this.element=t,this.props=e||{},this.init()}(e.exports=n).prototype.isSafari=function(){return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)},n.prototype.init=function(){var t=[];for(var e in this.props)t.push(e+" "+this.props[e]);this.element.style.transition=t.join(", "),this.isSafari()&&(this.element.style.webkitTransition=t.join(", "))}}),u.register("ftlabs~fastclick@v0.6.11",function(t,e){function i(o){"use strict";var e,t=this;if(this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,!(this.layer=o)||!o.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return i.prototype.onClick.apply(t,arguments)},this.onMouse=function(){return i.prototype.onMouse.apply(t,arguments)},this.onTouchStart=function(){return i.prototype.onTouchStart.apply(t,arguments)},this.onTouchMove=function(){return i.prototype.onTouchMove.apply(t,arguments)},this.onTouchEnd=function(){return i.prototype.onTouchEnd.apply(t,arguments)},this.onTouchCancel=function(){return i.prototype.onTouchCancel.apply(t,arguments)},i.notNeeded(o)||(this.deviceIsAndroid&&(o.addEventListener("mouseover",this.onMouse,!0),o.addEventListener("mousedown",this.onMouse,!0),o.addEventListener("mouseup",this.onMouse,!0)),o.addEventListener("click",this.onClick,!0),o.addEventListener("touchstart",this.onTouchStart,!1),o.addEventListener("touchmove",this.onTouchMove,!1),o.addEventListener("touchend",this.onTouchEnd,!1),o.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(o.removeEventListener=function(t,e,n){var i=Node.prototype.removeEventListener;"click"===t?i.call(o,t,e.hijacked||e,n):i.call(o,t,e,n)},o.addEventListener=function(t,e,n){var i=Node.prototype.addEventListener;"click"===t?i.call(o,t,e.hijacked||(e.hijacked=function(t){t.propagationStopped||e(t)}),n):i.call(o,t,e,n)}),"function"==typeof o.onclick&&(e=o.onclick,o.addEventListener("click",function(t){e(t)},!1),o.onclick=null))}i.prototype.deviceIsAndroid=0<navigator.userAgent.indexOf("Android"),i.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),i.prototype.deviceIsIOS4=i.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),i.prototype.deviceIsIOSWithBadTarget=i.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),i.prototype.needsClick=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(this.deviceIsIOS&&"file"===t.type||t.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(t.className)},i.prototype.needsFocus=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!this.deviceIsAndroid;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},i.prototype.sendClick=function(t,e){"use strict";var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],(n=document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},i.prototype.determineEventType=function(t){"use strict";return this.deviceIsAndroid&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},i.prototype.focus=function(t){"use strict";var e;this.deviceIsIOS&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},i.prototype.updateScrollParent=function(t){"use strict";var e,n;if(!(e=t.fastClickScrollParent)||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},i.prototype.getTargetElementFromEventTarget=function(t){"use strict";return t.nodeType===Node.TEXT_NODE?t.parentNode:t},i.prototype.onTouchStart=function(t){"use strict";var e,n,i;if(1<t.targetTouches.length)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],this.deviceIsIOS){if((i=window.getSelection()).rangeCount&&!i.isCollapsed)return!0;if(!this.deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<200&&t.preventDefault(),!0},i.prototype.touchHasMoved=function(t){"use strict";var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},i.prototype.onTouchMove=function(t){"use strict";return this.trackingClick&&(this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0},i.prototype.findControl=function(t){"use strict";return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},i.prototype.onTouchEnd=function(t){"use strict";var e,n,i,o,s,r=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<200)return this.cancelNextClick=!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(s=t.changedTouches[0],(r=document.elementFromPoint(s.pageX-window.pageXOffset,s.pageY-window.pageYOffset)||r).fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(i=r.tagName.toLowerCase())){if(e=this.findControl(r)){if(this.focus(r),this.deviceIsAndroid)return!1;r=e}}else if(this.needsFocus(r))return 100<t.timeStamp-n||this.deviceIsIOS&&window.top!==window&&"input"===i?this.targetElement=null:(this.focus(r),this.deviceIsIOS4&&"select"===i||(this.targetElement=null,t.preventDefault())),!1;return!(!this.deviceIsIOS||this.deviceIsIOS4||!(o=r.fastClickScrollParent)||o.fastClickLastScrollTop===o.scrollTop)||(this.needsClick(r)||(t.preventDefault(),this.sendClick(r,t)),!1)},i.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},i.prototype.onMouse=function(t){"use strict";return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1))))},i.prototype.onClick=function(t){"use strict";var e;return this.trackingClick?(this.targetElement=null,!(this.trackingClick=!1)):"submit"===t.target.type&&0===t.detail||((e=this.onMouse(t))||(this.targetElement=null),e)},i.prototype.destroy=function(){"use strict";var t=this.layer;this.deviceIsAndroid&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},i.notNeeded=function(t){"use strict";var e,n;if(void 0===window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!i.prototype.deviceIsAndroid)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(31<n&&window.innerWidth<=window.screen.width)return!0}}return"none"===t.style.msTouchAction},i.attach=function(t){"use strict";return new i(t)},"undefined"!=typeof define&&define.amd?define(function(){"use strict";return i}):void 0!==e&&e.exports?(e.exports=i.attach,e.exports.FastClick=i):window.FastClick=i}),u.register("component~indexof@0.0.3",function(t,e){e.exports=function(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}}),u.register("component~classes@1.2.1",function(t,e){var i=u("component~indexof@0.0.3"),n=/\s+/,o=Object.prototype.toString;function s(t){if(!t)throw new Error("A DOM element reference is reqd");this.el=t,this.list=t.classList}e.exports=function(t){return new s(t)},s.prototype.add=function(t){if(this.list)return this.list.add(t),this;var e=this.array();return~i(e,t)||e.push(t),this.el.className=e.join(" "),this},s.prototype.remove=function(t){if("[object RegExp]"==o.call(t))return this.removeMatching(t);if(this.list)return this.list.remove(t),this;var e=this.array(),n=i(e,t);return~n&&e.splice(n,1),this.el.className=e.join(" "),this},s.prototype.removeMatching=function(t){for(var e=this.array(),n=0;n<e.length;n++)t.test(e[n])&&this.remove(e[n]);return this},s.prototype.toggle=function(t,e){return this.list?void 0!==e?e!==this.list.toggle(t,e)&&this.list.toggle(t):this.list.toggle(t):void 0!==e?e?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this},s.prototype.array=function(){var t=this.el.className.replace(/^\s+|\s+$/g,"").split(n);return""===t[0]&&t.shift(),t},s.prototype.has=s.prototype.contains=function(t){return this.list?this.list.contains(t):!!~i(this.array(),t)}}),u.register("component~event@0.1.4",function(t,e){var o=window.addEventListener?"addEventListener":"attachEvent",s=window.removeEventListener?"removeEventListener":"detachEvent",r="addEventListener"!==o?"on":"";t.bind=function(t,e,n,i){return t[o](r+e,n,i||!1),n},t.unbind=function(t,e,n,i){return t[s](r+e,n,i||!1),n}}),u.register("component~query@0.0.3",function(e,t){function n(t,e){return e.querySelector(t)}(e=t.exports=function(t,e){return n(t,e=e||document)}).all=function(t,e){return(e=e||document).querySelectorAll(t)},e.engine=function(t){if(!t.one)throw new Error(".one callback reqd");if(!t.all)throw new Error(".all callback reqd");return n=t.one,e.all=t.all,e}}),u.register("component~matches-selector@0.1.5",function(t,e){var o=u("component~query@0.0.3"),n=Element.prototype,s=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector;e.exports=function(t,e){if(!t||1!==t.nodeType)return!1;if(s)return s.call(t,e);for(var n=o.all(e,t.parentNode),i=0;i<n.length;++i)if(n[i]==t)return!0;return!1}}),u.register("component~closest@0.1.4",function(t,e){var o=u("component~matches-selector@0.1.5");e.exports=function(t,e,n,i){for(t=n?{parentNode:t}:t,i=i||document;(t=t.parentNode)&&t!==document;){if(o(t,e))return t;if(t===i)return}}}),u.register("component~delegate@0.2.3",function(t,e){var s=u("component~closest@0.1.4"),r=u("component~event@0.1.4");t.bind=function(n,i,t,o,e){return r.bind(n,t,function(t){var e=t.target||t.srcElement;t.delegateTarget=s(e,i,!0,n),t.delegateTarget&&o.call(n,t)},e)},t.unbind=function(t,e,n,i){r.unbind(t,e,n,i)}}),u.register("component~events@1.0.9",function(t,e){var l=u("component~event@0.1.4"),h=u("component~delegate@0.2.3");function n(t,e){if(!(this instanceof n))return new n(t,e);if(!t)throw new Error("element reqd");if(!e)throw new Error("object reqd");this.el=t,this.obj=e,this._events={}}(e.exports=n).prototype.sub=function(t,e,n){this._events[t]=this._events[t]||{},this._events[t][e]=n},n.prototype.bind=function(t,e){var n,i={name:(n=t.split(/ +/)).shift(),selector:n.join(" ")},o=this.el,s=this.obj,r=i.name,c=(e=e||"on"+r,[].slice.call(arguments,2));function a(){var t=[].slice.call(arguments).concat(c);s[e].apply(s,t)}return i.selector?a=h.bind(o,i.selector,r,a):l.bind(o,r,a),this.sub(r,e,a),a},n.prototype.unbind=function(t,e){if(0==arguments.length)return this.unbindAll();if(1==arguments.length)return this.unbindAllOf(t);var n=this._events[t];if(n){var i=n[e];i&&l.unbind(this.el,t,i)}},n.prototype.unbindAll=function(){for(var t in this._events)this.unbindAllOf(t)},n.prototype.unbindAllOf=function(t){var e=this._events[t];if(e)for(var n in e)this.unbind(t,n)}}),u.register("switchery",function(t,e){var n=u("abpetkov~transitionize@0.0.3"),i=u("ftlabs~fastclick@v0.6.11"),o=u("component~classes@1.2.1"),s=u("component~events@1.0.9");e.exports=c;var r={color:"#64bd63",secondaryColor:"#dfdfdf",jackColor:"#fff",jackSecondaryColor:null,className:"switchery",disabled:!1,disabledOpacity:.5,speed:"0.4s",size:"default"};function c(t,e){if(!(this instanceof c))return new c(t,e);for(var n in this.element=t,this.options=e||{},r)null==this.options[n]&&(this.options[n]=r[n]);null!=this.element&&"checkbox"==this.element.type&&this.init(),!0===this.isDisabled()&&this.disable()}c.prototype.hide=function(){this.element.style.display="none"},c.prototype.show=function(){var t=this.create();this.insertAfter(this.element,t)},c.prototype.create=function(){return this.switcher=document.createElement("span"),this.jack=document.createElement("small"),this.switcher.appendChild(this.jack),this.switcher.className=this.options.className,this.events=s(this.switcher,this),this.switcher},c.prototype.insertAfter=function(t,e){t.parentNode.insertBefore(e,t.nextSibling)},c.prototype.setPosition=function(t){var e=this.isChecked(),n=this.switcher,i=this.jack;t&&e?e=!1:t&&!e&&(e=!0),!0===e?(this.element.checked=!0,window.getComputedStyle?i.style.left=parseInt(window.getComputedStyle(n).width)-parseInt(window.getComputedStyle(i).width)+"px":i.style.left=parseInt(n.currentStyle.width)-parseInt(i.currentStyle.width)+"px",this.options.color&&this.colorize()):(i.style.left=0,this.element.checked=!1,this.switcher.style.boxShadow="inset 0 0 0 0 "+this.options.secondaryColor,this.switcher.style.borderColor=this.options.secondaryColor,this.switcher.style.backgroundColor=this.options.secondaryColor!==r.secondaryColor?this.options.secondaryColor:"#fff",this.jack.style.backgroundColor=this.options.jackSecondaryColor!==this.options.jackColor?this.options.jackSecondaryColor:this.options.jackColor),this.setSpeed()},c.prototype.setSpeed=function(){var t={},e={"background-color":this.options.speed,left:this.options.speed.replace(/[a-z]/,"")/2+"s"};t=this.isChecked()?{border:this.options.speed,"box-shadow":this.options.speed,"background-color":3*this.options.speed.replace(/[a-z]/,"")+"s"}:{border:this.options.speed,"box-shadow":this.options.speed},n(this.switcher,t),n(this.jack,e)},c.prototype.setSize=function(){switch(this.options.size){case"small":o(this.switcher).add("switchery-small");break;case"large":o(this.switcher).add("switchery-large");break;default:o(this.switcher).add("switchery-default")}},c.prototype.colorize=function(){var t=this.switcher.offsetHeight/2;this.switcher.style.backgroundColor=this.options.color,this.switcher.style.borderColor=this.options.color,this.switcher.style.boxShadow="inset 0 0 0 "+t+"px "+this.options.color,this.jack.style.backgroundColor=this.options.jackColor},c.prototype.handleOnchange=function(t){if(document.dispatchEvent){var e=document.createEvent("HTMLEvents");e.initEvent("change",!0,!0),this.element.dispatchEvent(e)}else this.element.fireEvent("onchange")},c.prototype.handleChange=function(){var t=this,e=this.element;e.addEventListener?e.addEventListener("change",function(){t.setPosition()}):e.attachEvent("onchange",function(){t.setPosition()})},c.prototype.handleClick=function(){var t=this.switcher;i(t),this.events.bind("click","bindClick")},c.prototype.bindClick=function(){var t="label"!==this.element.parentNode.tagName.toLowerCase();this.setPosition(t),this.handleOnchange(this.element.checked)},c.prototype.markAsSwitched=function(){this.element.setAttribute("data-switchery",!0)},c.prototype.markedAsSwitched=function(){return this.element.getAttribute("data-switchery")},c.prototype.init=function(){this.hide(),this.show(),this.setSize(),this.setPosition(),this.markAsSwitched(),this.handleChange(),this.handleClick()},c.prototype.isChecked=function(){return this.element.checked},c.prototype.isDisabled=function(){return this.options.disabled||this.element.disabled||this.element.readOnly},c.prototype.destroy=function(){this.events.unbind()},c.prototype.enable=function(){this.options.disabled&&(this.options.disabled=!1),this.element.disabled&&(this.element.disabled=!1),this.element.readOnly&&(this.element.readOnly=!1),this.switcher.style.opacity=1,this.events.bind("click","bindClick")},c.prototype.disable=function(){this.options.disabled||(this.options.disabled=!0),this.element.disabled||(this.element.disabled=!0),this.element.readOnly||(this.element.readOnly=!0),this.switcher.style.opacity=this.options.disabledOpacity,this.destroy()}}),"object"==typeof exports?module.exports=u("switchery"):"function"==typeof define&&define.amd?define("Switchery",[],function(){return u("switchery")}):(this||window).Switchery=u("switchery")}();
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(h){function t(e){var t=e||window.event,o=v.call(arguments,1),n=0,a=0,i=0,l=0,r=0,s=0;if((e=h.event.fix(t)).type="mousewheel","detail"in t&&(i=-1*t.detail),"wheelDelta"in t&&(i=t.wheelDelta),"wheelDeltaY"in t&&(i=t.wheelDeltaY),"wheelDeltaX"in t&&(a=-1*t.wheelDeltaX),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(a=-1*i,i=0),n=0===i?a:i,"deltaY"in t&&(n=i=-1*t.deltaY),"deltaX"in t&&(a=t.deltaX,0===i&&(n=-1*a)),0!==i||0!==a){if(1===t.deltaMode){var c=h.data(this,"mousewheel-line-height");n*=c,i*=c,a*=c}else if(2===t.deltaMode){var d=h.data(this,"mousewheel-page-height");n*=d,i*=d,a*=d}if(l=Math.max(Math.abs(i),Math.abs(a)),(!g||l<g)&&(m(t,g=l)&&(g/=40)),m(t,l)&&(n/=40,a/=40,i/=40),n=Math[1<=n?"floor":"ceil"](n/g),a=Math[1<=a?"floor":"ceil"](a/g),i=Math[1<=i?"floor":"ceil"](i/g),x.settings.normalizeOffset&&this.getBoundingClientRect){var u=this.getBoundingClientRect();r=e.clientX-u.left,s=e.clientY-u.top}return e.deltaX=a,e.deltaY=i,e.deltaFactor=g,e.offsetX=r,e.offsetY=s,e.deltaMode=0,o.unshift(e,n,a,i),p&&clearTimeout(p),p=setTimeout(f,200),(h.event.dispatch||h.event.handle).apply(this,o)}}function f(){g=null}function m(e,t){return x.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}var p,g,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],o="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],v=Array.prototype.slice;if(h.event.fixHooks)for(var n=e.length;n;)h.event.fixHooks[e[--n]]=h.event.mouseHooks;var x=h.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=o.length;e;)this.addEventListener(o[--e],t,!1);else this.onmousewheel=t;h.data(this,"mousewheel-line-height",x.getLineHeight(this)),h.data(this,"mousewheel-page-height",x.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=o.length;e;)this.removeEventListener(o[--e],t,!1);else this.onmousewheel=null;h.removeData(this,"mousewheel-line-height"),h.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=h(e),o=t["offsetParent"in h.fn?"offsetParent":"parent"]();return o.length||(o=h("body")),parseInt(o.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return h(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};h.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(h){function t(e){var t=e||window.event,o=v.call(arguments,1),n=0,a=0,i=0,l=0,r=0,s=0;if((e=h.event.fix(t)).type="mousewheel","detail"in t&&(i=-1*t.detail),"wheelDelta"in t&&(i=t.wheelDelta),"wheelDeltaY"in t&&(i=t.wheelDeltaY),"wheelDeltaX"in t&&(a=-1*t.wheelDeltaX),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(a=-1*i,i=0),n=0===i?a:i,"deltaY"in t&&(n=i=-1*t.deltaY),"deltaX"in t&&(a=t.deltaX,0===i&&(n=-1*a)),0!==i||0!==a){if(1===t.deltaMode){var c=h.data(this,"mousewheel-line-height");n*=c,i*=c,a*=c}else if(2===t.deltaMode){var d=h.data(this,"mousewheel-page-height");n*=d,i*=d,a*=d}if(l=Math.max(Math.abs(i),Math.abs(a)),(!g||l<g)&&(m(t,g=l)&&(g/=40)),m(t,l)&&(n/=40,a/=40,i/=40),n=Math[1<=n?"floor":"ceil"](n/g),a=Math[1<=a?"floor":"ceil"](a/g),i=Math[1<=i?"floor":"ceil"](i/g),x.settings.normalizeOffset&&this.getBoundingClientRect){var u=this.getBoundingClientRect();r=e.clientX-u.left,s=e.clientY-u.top}return e.deltaX=a,e.deltaY=i,e.deltaFactor=g,e.offsetX=r,e.offsetY=s,e.deltaMode=0,o.unshift(e,n,a,i),p&&clearTimeout(p),p=setTimeout(f,200),(h.event.dispatch||h.event.handle).apply(this,o)}}function f(){g=null}function m(e,t){return x.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}var p,g,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],o="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],v=Array.prototype.slice;if(h.event.fixHooks)for(var n=e.length;n;)h.event.fixHooks[e[--n]]=h.event.mouseHooks;var x=h.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=o.length;e;)this.addEventListener(o[--e],t,!1);else this.onmousewheel=t;h.data(this,"mousewheel-line-height",x.getLineHeight(this)),h.data(this,"mousewheel-page-height",x.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=o.length;e;)this.removeEventListener(o[--e],t,!1);else this.onmousewheel=null;h.removeData(this,"mousewheel-line-height"),h.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=h(e),o=t["offsetParent"in h.fn?"offsetParent":"parent"]();return o.length||(o=h("body")),parseInt(o.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return h(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};h.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(z){var H,f,P,n,a,r,i,g,X,S,m,c,s,d,u,h,p,v,x,w,_,b,M,C,y,B,T,k,Y,l,D,O,I,E,j,L,R,A,W,U,F,q,N,V,Q,Z,G,J,K,$,ee,te,oe,ne,ae,ie,le,e,t,o;e="function"==typeof define&&define.amd,t="undefined"!=typeof module&&module.exports,o="https:"==document.location.protocol?"https:":"http:",e||(t?require("jquery-mousewheel")(z):z.event.special.mousewheel||z("head").append(decodeURI("%3Cscript src="+o+"//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),f="mCustomScrollbar",P="mCS",n=".mCustomScrollbar",a={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,i={},g=window.attachEvent&&!window.addEventListener?1:0,X=!1,S=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],m={init:function(l){var l=z.extend(!0,{},a,l),e=c.call(this);if(l.live){var t=l.liveSelector||this.selector||n,o=z(t);if("off"===l.live)return void d(t);i[t]=setTimeout(function(){o.mCustomScrollbar(l),"once"===l.live&&o.length&&d(t)},500)}else d(t);return l.setWidth=l.set_width?l.set_width:l.setWidth,l.setHeight=l.set_height?l.set_height:l.setHeight,l.axis=l.horizontalScroll?"x":u(l.axis),l.scrollInertia=0<l.scrollInertia&&l.scrollInertia<17?17:l.scrollInertia,"object"!=typeof l.mouseWheel&&1==l.mouseWheel&&(l.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),l.mouseWheel.scrollAmount=l.mouseWheelPixels?l.mouseWheelPixels:l.mouseWheel.scrollAmount,l.mouseWheel.normalizeDelta=l.advanced.normalizeMouseWheelDelta?l.advanced.normalizeMouseWheelDelta:l.mouseWheel.normalizeDelta,l.scrollButtons.scrollType=h(l.scrollButtons.scrollType),s(l),z(e).each(function(){var e=z(this);if(!e.data(P)){e.data(P,{idx:++r,opt:l,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:e.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var t=e.data(P),o=t.opt,n=e.data("mcs-axis"),a=e.data("mcs-scrollbar-position"),i=e.data("mcs-theme");n&&(o.axis=n),a&&(o.scrollbarPosition=a),i&&(o.theme=i,s(o)),p.call(this),t&&o.callbacks.onCreate&&"function"==typeof o.callbacks.onCreate&&o.callbacks.onCreate.call(this),z("#mCSB_"+t.idx+"_container img:not(."+S[2]+")").addClass(S[2]),m.update.call(null,e)}})},update:function(e,r){var t=e||c.call(this);return z(t).each(function(){var e=z(this);if(e.data(P)){var t=e.data(P),o=t.opt,n=z("#mCSB_"+t.idx+"_container"),a=z("#mCSB_"+t.idx),i=[z("#mCSB_"+t.idx+"_dragger_vertical"),z("#mCSB_"+t.idx+"_dragger_horizontal")];if(!n.length)return;t.tweenRunning&&G(e),r&&t&&o.callbacks.onBeforeUpdate&&"function"==typeof o.callbacks.onBeforeUpdate&&o.callbacks.onBeforeUpdate.call(this),e.hasClass(S[3])&&e.removeClass(S[3]),e.hasClass(S[4])&&e.removeClass(S[4]),a.css("max-height","none"),a.height()!==e.height()&&a.css("max-height",e.height()),x.call(this),"y"===o.axis||o.advanced.autoExpandHorizontalScroll||n.css("width",v(n)),t.overflowed=C.call(this),k.call(this),o.autoDraggerLength&&_.call(this),b.call(this),B.call(this);var l=[Math.abs(n[0].offsetTop),Math.abs(n[0].offsetLeft)];"x"!==o.axis&&(t.overflowed[0]?i[0].height()>i[0].parent().height()?y.call(this):(J(e,l[0].toString(),{dir:"y",dur:0,overwrite:"none"}),t.contentReset.y=null):(y.call(this),"y"===o.axis?T.call(this):"yx"===o.axis&&t.overflowed[1]&&J(e,l[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==o.axis&&(t.overflowed[1]?i[1].width()>i[1].parent().width()?y.call(this):(J(e,l[1].toString(),{dir:"x",dur:0,overwrite:"none"}),t.contentReset.x=null):(y.call(this),"x"===o.axis?T.call(this):"yx"===o.axis&&t.overflowed[0]&&J(e,l[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),r&&t&&(2===r&&o.callbacks.onImageLoad&&"function"==typeof o.callbacks.onImageLoad?o.callbacks.onImageLoad.call(this):3===r&&o.callbacks.onSelectorChange&&"function"==typeof o.callbacks.onSelectorChange?o.callbacks.onSelectorChange.call(this):o.callbacks.onUpdate&&"function"==typeof o.callbacks.onUpdate&&o.callbacks.onUpdate.call(this)),Z.call(this)}})},scrollTo:function(r,s){if(void 0!==r&&null!=r){var e=c.call(this);return z(e).each(function(){var e=z(this);if(e.data(P)){var t=e.data(P),o=t.opt,n={trigger:"external",scrollInertia:o.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},a=z.extend(!0,{},n,s),i=V.call(this,r),l=0<a.scrollInertia&&a.scrollInertia<17?17:a.scrollInertia;i[0]=Q.call(this,i[0],"y"),i[1]=Q.call(this,i[1],"x"),a.moveDragger&&(i[0]*=t.scrollRatio.y,i[1]*=t.scrollRatio.x),a.dur=le()?0:l,setTimeout(function(){null!==i[0]&&void 0!==i[0]&&"x"!==o.axis&&t.overflowed[0]&&(a.dir="y",a.overwrite="all",J(e,i[0].toString(),a)),null!==i[1]&&void 0!==i[1]&&"y"!==o.axis&&t.overflowed[1]&&(a.dir="x",a.overwrite="none",J(e,i[1].toString(),a))},a.timeout)}})}},stop:function(){var e=c.call(this);return z(e).each(function(){var e=z(this);e.data(P)&&G(e)})},disable:function(t){var e=c.call(this);return z(e).each(function(){var e=z(this);e.data(P)&&(e.data(P),Z.call(this,"remove"),T.call(this),t&&y.call(this),k.call(this,!0),e.addClass(S[3]))})},destroy:function(){var l=c.call(this);return z(l).each(function(){var e=z(this);if(e.data(P)){var t=e.data(P),o=t.opt,n=z("#mCSB_"+t.idx),a=z("#mCSB_"+t.idx+"_container"),i=z(".mCSB_"+t.idx+"_scrollbar");o.live&&d(o.liveSelector||z(l).selector),Z.call(this,"remove"),T.call(this),y.call(this),e.removeData(P),te(this,"mcs"),i.remove(),a.find("img."+S[2]).removeClass(S[2]),n.replaceWith(a.contents()),e.removeClass(f+" _"+P+"_"+t.idx+" "+S[6]+" "+S[7]+" "+S[5]+" "+S[3]).addClass(S[4])}})}},c=function(){return"object"!=typeof z(this)||z(this).length<1?n:this},s=function(e){e.autoDraggerLength=!(-1<z.inArray(e.theme,["rounded","rounded-dark","rounded-dots","rounded-dots-dark"]))&&e.autoDraggerLength,e.autoExpandScrollbar=!(-1<z.inArray(e.theme,["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"]))&&e.autoExpandScrollbar,e.scrollButtons.enable=!(-1<z.inArray(e.theme,["minimal","minimal-dark"]))&&e.scrollButtons.enable,e.autoHideScrollbar=-1<z.inArray(e.theme,["minimal","minimal-dark"])||e.autoHideScrollbar,e.scrollbarPosition=-1<z.inArray(e.theme,["minimal","minimal-dark"])?"outside":e.scrollbarPosition},d=function(e){i[e]&&(clearTimeout(i[e]),te(i,e))},u=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},h=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},p=function(){var e=z(this),t=e.data(P),o=t.opt,n=o.autoExpandScrollbar?" "+S[1]+"_expand":"",a=["<div id='mCSB_"+t.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+t.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_vertical"+n+"'><div class='"+S[12]+"'><div id='mCSB_"+t.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+t.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+t.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_horizontal"+n+"'><div class='"+S[12]+"'><div id='mCSB_"+t.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],i="yx"===o.axis?"mCSB_vertical_horizontal":"x"===o.axis?"mCSB_horizontal":"mCSB_vertical",l="yx"===o.axis?a[0]+a[1]:"x"===o.axis?a[1]:a[0],r="yx"===o.axis?"<div id='mCSB_"+t.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",s=o.autoHideScrollbar?" "+S[6]:"",c="x"!==o.axis&&"rtl"===t.langDir?" "+S[7]:"";o.setWidth&&e.css("width",o.setWidth),o.setHeight&&e.css("height",o.setHeight),o.setLeft="y"!==o.axis&&"rtl"===t.langDir?"989999px":o.setLeft,e.addClass(f+" _"+P+"_"+t.idx+s+c).wrapInner("<div id='mCSB_"+t.idx+"' class='mCustomScrollBox mCS-"+o.theme+" "+i+"'><div id='mCSB_"+t.idx+"_container' class='mCSB_container' style='position:relative; top:"+o.setTop+"; left:"+o.setLeft+";' dir='"+t.langDir+"' /></div>");var d=z("#mCSB_"+t.idx),u=z("#mCSB_"+t.idx+"_container");"y"===o.axis||o.advanced.autoExpandHorizontalScroll||u.css("width",v(u)),"outside"===o.scrollbarPosition?("static"===e.css("position")&&e.css("position","relative"),e.css("overflow","visible"),d.addClass("mCSB_outside").after(l)):(d.addClass("mCSB_inside").append(l),u.wrap(r)),w.call(this);var h=[z("#mCSB_"+t.idx+"_dragger_vertical"),z("#mCSB_"+t.idx+"_dragger_horizontal")];h[0].css("min-height",h[0].height()),h[1].css("min-width",h[1].width())},v=function(e){var t=[e[0].scrollWidth,Math.max.apply(Math,e.children().map(function(){return z(this).outerWidth(!0)}).get())],o=e.parent().width();return o<t[0]?t[0]:o<t[1]?t[1]:"100%"},x=function(){var e=z(this),t=e.data(P),o=t.opt,n=z("#mCSB_"+t.idx+"_container");if(o.advanced.autoExpandHorizontalScroll&&"y"!==o.axis){n.css({width:"auto","min-width":0,"overflow-x":"scroll"});var a=Math.ceil(n[0].scrollWidth);3===o.advanced.autoExpandHorizontalScroll||2!==o.advanced.autoExpandHorizontalScroll&&a>n.parent().width()?n.css({width:a,"min-width":"100%","overflow-x":"inherit"}):n.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(n[0].getBoundingClientRect().right+.4)-Math.floor(n[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var e=z(this),t=e.data(P),o=t.opt,n=z(".mCSB_"+t.idx+"_scrollbar:first"),a=ae(o.scrollButtons.tabindex)?"tabindex='"+o.scrollButtons.tabindex+"'":"",i=["<a href='#' class='"+S[13]+"' "+a+" />","<a href='#' class='"+S[14]+"' "+a+" />","<a href='#' class='"+S[15]+"' "+a+" />","<a href='#' class='"+S[16]+"' "+a+" />"],l=["x"===o.axis?i[2]:i[0],"x"===o.axis?i[3]:i[1],i[2],i[3]];o.scrollButtons.enable&&n.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])},_=function(){var e=z(this),t=e.data(P),o=z("#mCSB_"+t.idx),n=z("#mCSB_"+t.idx+"_container"),a=[z("#mCSB_"+t.idx+"_dragger_vertical"),z("#mCSB_"+t.idx+"_dragger_horizontal")],i=[o.height()/n.outerHeight(!1),o.width()/n.outerWidth(!1)],l=[parseInt(a[0].css("min-height")),Math.round(i[0]*a[0].parent().height()),parseInt(a[1].css("min-width")),Math.round(i[1]*a[1].parent().width())],r=g&&l[1]<l[0]?l[0]:l[1],s=g&&l[3]<l[2]?l[2]:l[3];a[0].css({height:r,"max-height":a[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":l[0]+"px"}),a[1].css({width:s,"max-width":a[1].parent().width()-10})},b=function(){var e=z(this),t=e.data(P),o=z("#mCSB_"+t.idx),n=z("#mCSB_"+t.idx+"_container"),a=[z("#mCSB_"+t.idx+"_dragger_vertical"),z("#mCSB_"+t.idx+"_dragger_horizontal")],i=[n.outerHeight(!1)-o.height(),n.outerWidth(!1)-o.width()],l=[i[0]/(a[0].parent().height()-a[0].height()),i[1]/(a[1].parent().width()-a[1].width())];t.scrollRatio={y:l[0],x:l[1]}},M=function(e,t,o){var n=o?S[0]+"_expanded":"",a=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(S[0]+" "+n),a.toggleClass(S[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(S[0]),a.removeClass(S[1])):(e.addClass(S[0]),a.addClass(S[1])))},C=function(){var e=z(this),t=e.data(P),o=z("#mCSB_"+t.idx),n=z("#mCSB_"+t.idx+"_container"),a=null==t.overflowed?n.height():n.outerHeight(!1),i=null==t.overflowed?n.width():n.outerWidth(!1),l=n[0].scrollHeight,r=n[0].scrollWidth;return a<l&&(a=l),i<r&&(i=r),[a>o.height(),i>o.width()]},y=function(){var e=z(this),t=e.data(P),o=t.opt,n=z("#mCSB_"+t.idx),a=z("#mCSB_"+t.idx+"_container"),i=[z("#mCSB_"+t.idx+"_dragger_vertical"),z("#mCSB_"+t.idx+"_dragger_horizontal")];if(G(e),("x"!==o.axis&&!t.overflowed[0]||"y"===o.axis&&t.overflowed[0])&&(i[0].add(a).css("top",0),J(e,"_resetY")),"y"!==o.axis&&!t.overflowed[1]||"x"===o.axis&&t.overflowed[1]){var l=dx=0;"rtl"===t.langDir&&(l=n.width()-a.outerWidth(!1),dx=Math.abs(l/t.scrollRatio.x)),a.css("left",l),i[1].css("left",dx),J(e,"_resetX")}},B=function(){var t,o=z(this),e=o.data(P),n=e.opt;e.bindEvents||(l.call(this),n.contentTouchScroll&&D.call(this),O.call(this),n.mouseWheel.enable&&function e(){t=setTimeout(function(){z.event.special.mousewheel?(clearTimeout(t),I.call(o[0])):e()},100)}(),A.call(this),U.call(this),n.advanced.autoScrollOnFocus&&W.call(this),n.scrollButtons.enable&&F.call(this),n.keyboard.enable&&q.call(this),e.bindEvents=!0)},T=function(){var e=z(this),t=e.data(P),o=t.opt,n="mCS_"+t.idx,a=".mCSB_"+t.idx+"_scrollbar",i=z("#mCSB_"+t.idx+",#mCSB_"+t.idx+"_container,#mCSB_"+t.idx+"_container_wrapper,"+a+" ."+S[12]+",#mCSB_"+t.idx+"_dragger_vertical,#mCSB_"+t.idx+"_dragger_horizontal,"+a+">a"),l=z("#mCSB_"+t.idx+"_container");o.advanced.releaseDraggableSelectors&&i.add(z(o.advanced.releaseDraggableSelectors)),o.advanced.extraDraggableSelectors&&i.add(z(o.advanced.extraDraggableSelectors)),t.bindEvents&&(z(document).add(z(!j()||top.document)).unbind("."+n),i.each(function(){z(this).unbind("."+n)}),clearTimeout(e[0]._focusTimeout),te(e[0],"_focusTimeout"),clearTimeout(t.sequential.step),te(t.sequential,"step"),clearTimeout(l[0].onCompleteTimeout),te(l[0],"onCompleteTimeout"),t.bindEvents=!1)},k=function(e){var t=z(this),o=t.data(P),n=o.opt,a=z("#mCSB_"+o.idx+"_container_wrapper"),i=a.length?a:z("#mCSB_"+o.idx+"_container"),l=[z("#mCSB_"+o.idx+"_scrollbar_vertical"),z("#mCSB_"+o.idx+"_scrollbar_horizontal")],r=[l[0].find(".mCSB_dragger"),l[1].find(".mCSB_dragger")];"x"!==n.axis&&(o.overflowed[0]&&!e?(l[0].add(r[0]).add(l[0].children("a")).css("display","block"),i.removeClass(S[8]+" "+S[10])):(n.alwaysShowScrollbar?(2!==n.alwaysShowScrollbar&&r[0].css("display","none"),i.removeClass(S[10])):(l[0].css("display","none"),i.addClass(S[10])),i.addClass(S[8]))),"y"!==n.axis&&(o.overflowed[1]&&!e?(l[1].add(r[1]).add(l[1].children("a")).css("display","block"),i.removeClass(S[9]+" "+S[11])):(n.alwaysShowScrollbar?(2!==n.alwaysShowScrollbar&&r[1].css("display","none"),i.removeClass(S[11])):(l[1].css("display","none"),i.addClass(S[11])),i.addClass(S[9]))),o.overflowed[0]||o.overflowed[1]?t.removeClass(S[5]):t.addClass(S[5])},Y=function(e){var t=e.type,o=e.target.ownerDocument!==document&&null!==frameElement?[z(frameElement).offset().top,z(frameElement).offset().left]:null,n=j()&&e.target.ownerDocument!==top.document&&null!==frameElement?[z(e.view.frameElement).offset().top,z(e.view.frameElement).offset().left]:[0,0];switch(t){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return o?[e.originalEvent.pageY-o[0]+n[0],e.originalEvent.pageX-o[1]+n[1],!1]:[e.originalEvent.pageY,e.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var a=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],i=e.originalEvent.touches.length||e.originalEvent.changedTouches.length;return e.target.ownerDocument!==document?[a.screenY,a.screenX,1<i]:[a.pageY,a.pageX,1<i];default:return o?[e.pageY-o[0]+n[0],e.pageX-o[1]+n[1],!1]:[e.pageY,e.pageX,!1]}},l=function(){function a(e,t,o,n){if(f[0].idleTimer=u.scrollInertia<233?250:0,l.attr("id")===h[1])var a="x",i=(l[0].offsetLeft-t+n)*d.scrollRatio.x;else var a="y",i=(l[0].offsetTop-e+o)*d.scrollRatio.y;J(c,i.toString(),{dir:a,drag:!0})}var l,r,s,c=z(this),d=c.data(P),u=d.opt,e="mCS_"+d.idx,h=["mCSB_"+d.idx+"_dragger_vertical","mCSB_"+d.idx+"_dragger_horizontal"],f=z("#mCSB_"+d.idx+"_container"),t=z("#"+h[0]+",#"+h[1]),o=u.advanced.releaseDraggableSelectors?t.add(z(u.advanced.releaseDraggableSelectors)):t,n=u.advanced.extraDraggableSelectors?z(!j()||top.document).add(z(u.advanced.extraDraggableSelectors)):z(!j()||top.document);t.bind("contextmenu."+e,function(e){e.preventDefault()}).bind("mousedown."+e+" touchstart."+e+" pointerdown."+e+" MSPointerDown."+e,function(e){if(e.stopImmediatePropagation(),e.preventDefault(),oe(e)){X=!0,g&&(document.onselectstart=function(){return!1}),L.call(f,!1),G(c);var t=(l=z(this)).offset(),o=Y(e)[0]-t.top,n=Y(e)[1]-t.left,a=l.height()+t.top,i=l.width()+t.left;o<a&&0<o&&n<i&&0<n&&(r=o,s=n),M(l,"active",u.autoExpandScrollbar)}}).bind("touchmove."+e,function(e){e.stopImmediatePropagation(),e.preventDefault();var t=l.offset(),o=Y(e)[0]-t.top,n=Y(e)[1]-t.left;a(r,s,o,n)}),z(document).add(n).bind("mousemove."+e+" pointermove."+e+" MSPointerMove."+e,function(e){if(l){var t=l.offset(),o=Y(e)[0]-t.top,n=Y(e)[1]-t.left;if(r===o&&s===n)return;a(r,s,o,n)}}).add(o).bind("mouseup."+e+" touchend."+e+" pointerup."+e+" MSPointerUp."+e,function(){l&&(M(l,"active",u.autoExpandScrollbar),l=null),X=!1,g&&(document.onselectstart=null),L.call(f,!0)})},D=function(){function t(e){if(!ne(e)||X||Y(e)[2])H=0;else{y=C=0,h=H=1,B.removeClass("mCS_touch_action");var t=D.offset();c=Y(e)[0]-t.top,f=Y(e)[1]-t.left,A=[Y(e)[0],Y(e)[1]]}}function o(e){if(ne(e)&&!X&&!Y(e)[2]&&(M.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!y||C)&&h)){v=$();var t=k.offset(),o=Y(e)[0]-t.top,n=Y(e)[1]-t.left,a="mcsLinearOut";if(I.push(o),E.push(n),A[2]=Math.abs(Y(e)[0]-A[0]),A[3]=Math.abs(Y(e)[1]-A[1]),T.overflowed[0])var i=O[0].parent().height()-O[0].height(),l=0<c-o&&o-c>-i*T.scrollRatio.y&&(2*A[3]<A[2]||"yx"===M.axis);if(T.overflowed[1])var r=O[1].parent().width()-O[1].width(),s=0<f-n&&n-f>-r*T.scrollRatio.x&&(2*A[2]<A[3]||"yx"===M.axis);l||s?(W||e.preventDefault(),C=1):(y=1,B.addClass("mCS_touch_action")),W&&e.preventDefault(),S="yx"===M.axis?[c-o,f-n]:"x"===M.axis?[null,f-n]:[c-o,null],D[0].idleTimer=250,T.overflowed[0]&&u(S[0],L,a,"y","all",!0),T.overflowed[1]&&u(S[1],L,a,"x",R,!0)}}function n(e){if(!ne(e)||X||Y(e)[2])H=0;else{H=1,e.stopImmediatePropagation(),G(B),g=$();var t=k.offset();m=Y(e)[0]-t.top,p=Y(e)[1]-t.left,I=[],E=[]}}function a(e){if(ne(e)&&!X&&!Y(e)[2]){h=0,e.stopImmediatePropagation(),y=C=0,x=$();var t=k.offset(),o=Y(e)[0]-t.top,n=Y(e)[1]-t.left;if(!(30<x-v)){var a="mcsEaseOut",i=(_=1e3/(x-g))<2.5,l=i?[I[I.length-2],E[E.length-2]]:[0,0];w=i?[o-l[0],n-l[1]]:[o-m,n-p];var r=[Math.abs(w[0]),Math.abs(w[1])];_=i?[Math.abs(w[0]/4),Math.abs(w[1]/4)]:[_,_];var s=[Math.abs(D[0].offsetTop)-w[0]*d(r[0]/_[0],_[0]),Math.abs(D[0].offsetLeft)-w[1]*d(r[1]/_[1],_[1])];S="yx"===M.axis?[s[0],s[1]]:"x"===M.axis?[null,s[1]]:[s[0],null],b=[4*r[0]+M.scrollInertia,4*r[1]+M.scrollInertia];var c=parseInt(M.contentTouchScroll)||0;S[0]=c<r[0]?S[0]:0,S[1]=c<r[1]?S[1]:0,T.overflowed[0]&&u(S[0],b[0],a,"y",R,!1),T.overflowed[1]&&u(S[1],b[1],a,"x",R,!1)}}}function d(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return 90<e?4<t?o[0]:o[3]:60<e?3<t?o[3]:o[2]:30<e?8<t?o[1]:6<t?o[0]:4<t?t:o[2]:8<t?t:o[3]}function u(e,t,o,n,a,i){e&&J(B,e.toString(),{dur:t,scrollEasing:o,dir:n,overwrite:a,drag:i})}var h,c,f,m,p,g,v,x,w,_,S,b,C,y,B=z(this),T=B.data(P),M=T.opt,e="mCS_"+T.idx,k=z("#mCSB_"+T.idx),D=z("#mCSB_"+T.idx+"_container"),O=[z("#mCSB_"+T.idx+"_dragger_vertical"),z("#mCSB_"+T.idx+"_dragger_horizontal")],I=[],E=[],L=0,R="yx"===M.axis?"none":"all",A=[],i=D.find("iframe"),l=["touchstart."+e+" pointerdown."+e+" MSPointerDown."+e,"touchmove."+e+" pointermove."+e+" MSPointerMove."+e,"touchend."+e+" pointerup."+e+" MSPointerUp."+e],W=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;D.bind(l[0],function(e){t(e)}).bind(l[1],function(e){o(e)}),k.bind(l[0],function(e){n(e)}).bind(l[2],function(e){a(e)}),i.length&&i.each(function(){z(this).bind("load",function(){j(this)&&z(this.contentDocument||this.contentWindow.document).bind(l[0],function(e){t(e),n(e)}).bind(l[1],function(e){o(e)}).bind(l[2],function(e){a(e)})})})},O=function(){function a(e,t,o){s.type=o&&i?"stepped":"stepless",s.scrollAmount=10,N(n,e,t,"mcsLinearOut",o?60:null)}var i,n=z(this),l=n.data(P),r=l.opt,s=l.sequential,e="mCS_"+l.idx,c=z("#mCSB_"+l.idx+"_container"),d=c.parent();c.bind("mousedown."+e,function(){H||i||(i=1,X=!0)}).add(document).bind("mousemove."+e,function(e){if(!H&&i&&(window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type&&document.selection.createRange().text)){var t=c.offset(),o=Y(e)[0]-t.top+c[0].offsetTop,n=Y(e)[1]-t.left+c[0].offsetLeft;0<o&&o<d.height()&&0<n&&n<d.width()?s.step&&a("off",null,"stepped"):("x"!==r.axis&&l.overflowed[0]&&(o<0?a("on",38):o>d.height()&&a("on",40)),"y"!==r.axis&&l.overflowed[1]&&(n<0?a("on",37):n>d.width()&&a("on",39)))}}).bind("mouseup."+e+" dragend."+e,function(){H||(i&&(i=0,a("off",null)),X=!1)})},I=function(){function o(e,t){if(G(u),!R(u,e.target)){var o="auto"!==f.mouseWheel.deltaFactor?parseInt(f.mouseWheel.deltaFactor):g&&e.deltaFactor<100?100:e.deltaFactor||100,n=f.scrollInertia;if("x"===f.axis||"x"===f.mouseWheel.axis)var a="x",i=[Math.round(o*h.scrollRatio.x),parseInt(f.mouseWheel.scrollAmount)],l="auto"!==f.mouseWheel.scrollAmount?i[1]:i[0]>=m.width()?.9*m.width():i[0],r=Math.abs(z("#mCSB_"+h.idx+"_container")[0].offsetLeft),s=p[1][0].offsetLeft,c=p[1].parent().width()-p[1].width(),d="y"===f.mouseWheel.axis?e.deltaY||t:e.deltaX;else var a="y",i=[Math.round(o*h.scrollRatio.y),parseInt(f.mouseWheel.scrollAmount)],l="auto"!==f.mouseWheel.scrollAmount?i[1]:i[0]>=m.height()?.9*m.height():i[0],r=Math.abs(z("#mCSB_"+h.idx+"_container")[0].offsetTop),s=p[0][0].offsetTop,c=p[0].parent().height()-p[0].height(),d=e.deltaY||t;"y"===a&&!h.overflowed[0]||"x"===a&&!h.overflowed[1]||((f.mouseWheel.invert||e.webkitDirectionInvertedFromDevice)&&(d=-d),f.mouseWheel.normalizeDelta&&(d=d<0?-1:1),(0<d&&0!==s||d<0&&s!==c||f.mouseWheel.preventDefault)&&(e.stopImmediatePropagation(),e.preventDefault()),e.deltaFactor<5&&!f.mouseWheel.normalizeDelta&&(l=e.deltaFactor,n=17),J(u,(r-d*l).toString(),{dir:a,dur:n}))}}if(z(this).data(P)){var u=z(this),h=u.data(P),f=h.opt,e="mCS_"+h.idx,m=z("#mCSB_"+h.idx),p=[z("#mCSB_"+h.idx+"_dragger_vertical"),z("#mCSB_"+h.idx+"_dragger_horizontal")],t=z("#mCSB_"+h.idx+"_container").find("iframe");t.length&&t.each(function(){z(this).bind("load",function(){j(this)&&z(this.contentDocument||this.contentWindow.document).bind("mousewheel."+e,function(e,t){o(e,t)})})}),m.bind("mousewheel."+e,function(e,t){o(e,t)})}},E=new Object,j=function(e){var t=!1,o=!1,n=null;if(void 0===e?o="#empty":void 0!==z(e).attr("id")&&(o=z(e).attr("id")),!1!==o&&void 0!==E[o])return E[o];if(e){try{var a=e.contentDocument||e.contentWindow.document;n=a.body.innerHTML}catch(e){}t=null!==n}else{try{var a=top.document;n=a.body.innerHTML}catch(e){}t=null!==n}return!1!==o&&(E[o]=t),t},L=function(e){var t=this.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}},R=function(e,t){var o=t.nodeName.toLowerCase(),n=e.data(P).opt.mouseWheel.disableOver;return-1<z.inArray(o,n)&&!(-1<z.inArray(o,["select","textarea"])&&!z(t).is(":focus"))},A=function(){var l,r=z(this),s=r.data(P),e="mCS_"+s.idx,c=z("#mCSB_"+s.idx+"_container"),d=c.parent(),t=z(".mCSB_"+s.idx+"_scrollbar ."+S[12]);t.bind("mousedown."+e+" touchstart."+e+" pointerdown."+e+" MSPointerDown."+e,function(e){X=!0,z(e.target).hasClass("mCSB_dragger")||(l=1)}).bind("touchend."+e+" pointerup."+e+" MSPointerUp."+e,function(){X=!1}).bind("click."+e,function(e){if(l&&(l=0,z(e.target).hasClass(S[12])||z(e.target).hasClass("mCSB_draggerRail"))){G(r);var t=z(this),o=t.find(".mCSB_dragger");if(0<t.parent(".mCSB_scrollTools_horizontal").length){if(!s.overflowed[1])return;var n="x",a=e.pageX>o.offset().left?-1:1,i=Math.abs(c[0].offsetLeft)-a*(.9*d.width())}else{if(!s.overflowed[0])return;var n="y",a=e.pageY>o.offset().top?-1:1,i=Math.abs(c[0].offsetTop)-a*(.9*d.height())}J(r,i.toString(),{dir:n,scrollEasing:"mcsEaseInOut"})}})},W=function(){var i=z(this),e=i.data(P),l=e.opt,t="mCS_"+e.idx,r=z("#mCSB_"+e.idx+"_container"),s=r.parent();r.bind("focusin."+t,function(){var a=z(document.activeElement),e=r.find(".mCustomScrollBox").length;a.is(l.advanced.autoScrollOnFocus)&&(G(i),clearTimeout(i[0]._focusTimeout),i[0]._focusTimer=e?17*e:0,i[0]._focusTimeout=setTimeout(function(){var e=[ie(a)[0],ie(a)[1]],t=[r[0].offsetTop,r[0].offsetLeft],o=[0<=t[0]+e[0]&&t[0]+e[0]<s.height()-a.outerHeight(!1),0<=t[1]+e[1]&&t[0]+e[1]<s.width()-a.outerWidth(!1)],n="yx"!==l.axis||o[0]||o[1]?"all":"none";"x"===l.axis||o[0]||J(i,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:n,dur:0}),"y"===l.axis||o[1]||J(i,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:n,dur:0})},i[0]._focusTimer))})},U=function(){var e=z(this),t=e.data(P),o="mCS_"+t.idx,n=z("#mCSB_"+t.idx+"_container").parent();n.bind("scroll."+o,function(){0===n.scrollTop()&&0===n.scrollLeft()||z(".mCSB_"+t.idx+"_scrollbar").css("visibility","hidden")})},F=function(){var n=z(this),a=n.data(P),i=a.opt,l=a.sequential,e="mCS_"+a.idx,t=".mCSB_"+a.idx+"_scrollbar",o=z(t+">a");o.bind("contextmenu."+e,function(e){e.preventDefault()}).bind("mousedown."+e+" touchstart."+e+" pointerdown."+e+" MSPointerDown."+e+" mouseup."+e+" touchend."+e+" pointerup."+e+" MSPointerUp."+e+" mouseout."+e+" pointerout."+e+" MSPointerOut."+e+" click."+e,function(e){function t(e,t){l.scrollAmount=i.scrollButtons.scrollAmount,N(n,e,t)}if(e.preventDefault(),oe(e)){var o=z(this).attr("class");switch(l.type=i.scrollButtons.scrollType,e.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===l.type)return;X=!0,a.tweenRunning=!1,t("on",o);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===l.type)return;X=!1,l.dir&&t("off",o);break;case"click":if("stepped"!==l.type||a.tweenRunning)return;t("on",o)}}})},q=function(){function t(e){function t(e,t){d.type=c.keyboard.scrollType,d.scrollAmount=c.keyboard.scrollAmount,"stepped"===d.type&&s.tweenRunning||N(r,e,t)}switch(e.type){case"blur":s.tweenRunning&&d.dir&&t("off",null);break;case"keydown":case"keyup":var o=e.keyCode?e.keyCode:e.which,n="on";if("x"!==c.axis&&(38===o||40===o)||"y"!==c.axis&&(37===o||39===o)){if((38===o||40===o)&&!s.overflowed[0]||(37===o||39===o)&&!s.overflowed[1])return;"keyup"===e.type&&(n="off"),z(document.activeElement).is(f)||(e.preventDefault(),e.stopImmediatePropagation(),t(n,o))}else if(33===o||34===o){if((s.overflowed[0]||s.overflowed[1])&&(e.preventDefault(),e.stopImmediatePropagation()),"keyup"===e.type){G(r);var a=34===o?-1:1;if("x"===c.axis||"yx"===c.axis&&s.overflowed[1]&&!s.overflowed[0])var i="x",l=Math.abs(u[0].offsetLeft)-a*(.9*h.width());else var i="y",l=Math.abs(u[0].offsetTop)-a*(.9*h.height());J(r,l.toString(),{dir:i,scrollEasing:"mcsEaseInOut"})}}else if((35===o||36===o)&&!z(document.activeElement).is(f)&&((s.overflowed[0]||s.overflowed[1])&&(e.preventDefault(),e.stopImmediatePropagation()),"keyup"===e.type)){if("x"===c.axis||"yx"===c.axis&&s.overflowed[1]&&!s.overflowed[0])var i="x",l=35===o?Math.abs(h.width()-u.outerWidth(!1)):0;else var i="y",l=35===o?Math.abs(h.height()-u.outerHeight(!1)):0;J(r,l.toString(),{dir:i,scrollEasing:"mcsEaseInOut"})}}}var r=z(this),s=r.data(P),c=s.opt,d=s.sequential,e="mCS_"+s.idx,o=z("#mCSB_"+s.idx),u=z("#mCSB_"+s.idx+"_container"),h=u.parent(),f="input,textarea,select,datalist,keygen,[contenteditable='true']",n=u.find("iframe"),a=["blur."+e+" keydown."+e+" keyup."+e];n.length&&n.each(function(){z(this).bind("load",function(){j(this)&&z(this.contentDocument||this.contentWindow.document).bind(a[0],function(e){t(e)})})}),o.attr("tabindex","0").bind(a[0],function(e){t(e)})},N=function(u,e,t,h,f){function m(e){g.snapAmount&&(v.scrollAmount=g.snapAmount instanceof Array?"x"===v.dir[0]?g.snapAmount[1]:g.snapAmount[0]:g.snapAmount);var t="stepped"!==v.type,o=f||(e?t?w/1.5:_:1e3/60),n=e?t?7.5:40:2.5,a=[Math.abs(x[0].offsetTop),Math.abs(x[0].offsetLeft)],i=[10<p.scrollRatio.y?10:p.scrollRatio.y,10<p.scrollRatio.x?10:p.scrollRatio.x],l="x"===v.dir[0]?a[1]+v.dir[1]*(i[1]*n):a[0]+v.dir[1]*(i[0]*n),r="x"===v.dir[0]?a[1]+v.dir[1]*parseInt(v.scrollAmount):a[0]+v.dir[1]*parseInt(v.scrollAmount),s="auto"!==v.scrollAmount?r:l,c=h||(e?t?"mcsLinearOut":"mcsEaseInOut":"mcsLinear"),d=!!e;return e&&o<17&&(s="x"===v.dir[0]?a[1]:a[0]),J(u,s.toString(),{dir:v.dir[0],scrollEasing:c,dur:o,onComplete:d}),e?void(v.dir=!1):(clearTimeout(v.step),void(v.step=setTimeout(function(){m()},o)))}var p=u.data(P),g=p.opt,v=p.sequential,x=z("#mCSB_"+p.idx+"_container"),o="stepped"===v.type,w=g.scrollInertia<26?26:g.scrollInertia,_=g.scrollInertia<1?17:g.scrollInertia;switch(e){case"on":if(v.dir=[t===S[16]||t===S[15]||39===t||37===t?"x":"y",t===S[13]||t===S[15]||38===t||37===t?-1:1],G(u),ae(t)&&"stepped"===v.type)return;m(o);break;case"off":clearTimeout(v.step),te(v,"step"),G(u),(o||p.tweenRunning&&v.dir)&&m(!0)}},V=function(e){var t=z(this).data(P).opt,o=[];return"function"==typeof e&&(e=e()),e instanceof Array?o=1<e.length?[e[0],e[1]]:"x"===t.axis?[null,e[0]]:[e[0],null]:(o[0]=e.y?e.y:e.x||"x"===t.axis?null:e,o[1]=e.x?e.x:e.y||"y"===t.axis?null:e),"function"==typeof o[0]&&(o[0]=o[0]()),"function"==typeof o[1]&&(o[1]=o[1]()),o},Q=function(e,t){if(null!=e&&void 0!==e){var o=z(this),n=o.data(P),a=n.opt,i=z("#mCSB_"+n.idx+"_container"),l=i.parent(),r=typeof e;t||(t="x"===a.axis?"x":"y");var s="x"===t?i.outerWidth(!1)-l.width():i.outerHeight(!1)-l.height(),c="x"===t?i[0].offsetLeft:i[0].offsetTop,d="x"===t?"left":"top";switch(r){case"function":return e();case"object":var u=e.jquery?e:z(e);if(!u.length)return;return"x"===t?ie(u)[1]:ie(u)[0];case"string":case"number":if(ae(e))return Math.abs(e);if(-1!==e.indexOf("%"))return Math.abs(s*parseInt(e)/100);if(-1!==e.indexOf("-="))return Math.abs(c-parseInt(e.split("-=")[1]));if(-1!==e.indexOf("+=")){var h=c+parseInt(e.split("+=")[1]);return 0<=h?0:Math.abs(h)}if(-1!==e.indexOf("px")&&ae(e.split("px")[0]))return Math.abs(e.split("px")[0]);if("top"===e||"left"===e)return 0;if("bottom"===e)return Math.abs(l.height()-i.outerHeight(!1));if("right"===e)return Math.abs(l.width()-i.outerWidth(!1));if("first"===e||"last"===e){var u=i.find(":"+e);return"x"===t?ie(u)[1]:ie(u)[0]}return z(e).length?"x"===t?ie(z(e))[1]:ie(z(e))[0]:(i.css(d,e),void m.update.call(null,o[0]))}}},Z=function(e){function a(e){clearTimeout(i[0].autoUpdate),m.update.call(null,t[0],e)}var t=z(this),o=t.data(P),n=o.opt,i=z("#mCSB_"+o.idx+"_container");return e?(clearTimeout(i[0].autoUpdate),void te(i[0],"autoUpdate")):void function e(){return clearTimeout(i[0].autoUpdate),0===t.parents("html").length?void(t=null):void(i[0].autoUpdate=setTimeout(function(){return n.advanced.updateOnSelectorChange&&(o.poll.change.n=function(){!0===n.advanced.updateOnSelectorChange&&(n.advanced.updateOnSelectorChange="*");var e=0,t=i.find(n.advanced.updateOnSelectorChange);return n.advanced.updateOnSelectorChange&&0<t.length&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}(),o.poll.change.n!==o.poll.change.o)?(o.poll.change.o=o.poll.change.n,void a(3)):n.advanced.updateOnContentResize&&(o.poll.size.n=t[0].scrollHeight+t[0].scrollWidth+i[0].offsetHeight+t[0].offsetHeight+t[0].offsetWidth,o.poll.size.n!==o.poll.size.o)?(o.poll.size.o=o.poll.size.n,void a(1)):!n.advanced.updateOnImageLoad||"auto"===n.advanced.updateOnImageLoad&&"y"===n.axis||(o.poll.img.n=i.find("img").length,o.poll.img.n===o.poll.img.o)?void((n.advanced.updateOnSelectorChange||n.advanced.updateOnContentResize||n.advanced.updateOnImageLoad)&&e()):(o.poll.img.o=o.poll.img.n,void i.find("img").each(function(){!function(e){if(z(e).hasClass(S[2]))return a();var t,o,n=new Image;n.onload=(t=n,o=function(){this.onload=null,z(e).addClass(S[2]),a(2)},function(){return o.apply(t,arguments)}),n.src=e.src}(this)}))},n.advanced.autoUpdateTimeout))}()},G=function(e){var t=e.data(P),o=z("#mCSB_"+t.idx+"_container,#mCSB_"+t.idx+"_container_wrapper,#mCSB_"+t.idx+"_dragger_vertical,#mCSB_"+t.idx+"_dragger_horizontal");o.each(function(){ee.call(this)})},J=function(a,e,i){function t(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function o(){var e=[f[0].offsetTop,f[0].offsetLeft],t=[x[0].offsetTop,x[0].offsetLeft],o=[f.outerHeight(!1),f.outerWidth(!1)],n=[h.height(),h.width()];a[0].mcs={content:f,top:e[0],left:e[1],draggerTop:t[0],draggerLeft:t[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(o[0])-n[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(o[1])-n[1])),direction:i.dir}}var n,l,r,s=a.data(P),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},i=z.extend(d,i),u=[i.dur,i.drag?0:i.dur],h=z("#mCSB_"+s.idx),f=z("#mCSB_"+s.idx+"_container"),m=f.parent(),p=c.callbacks.onTotalScrollOffset?V.call(a,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?V.call(a,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=i.trigger,0===m.scrollTop()&&0===m.scrollLeft()||(z(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==e||s.contentReset.y||(t("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(a[0]),s.contentReset.y=1),"_resetX"!==e||s.contentReset.x||(t("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(a[0]),s.contentReset.x=1),"_resetY"!==e&&"_resetX"!==e){if(!s.contentReset.y&&a[0].mcs||!s.overflowed[0]||(t("onOverflowY")&&c.callbacks.onOverflowY.call(a[0]),s.contentReset.x=null),!s.contentReset.x&&a[0].mcs||!s.overflowed[1]||(t("onOverflowX")&&c.callbacks.onOverflowX.call(a[0]),s.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===i.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;n=e,l=v,r=c.snapOffset,e=Math.round(n/l)*l-r}switch(i.dir){case"x":var x=z("#mCSB_"+s.idx+"_dragger_horizontal"),w="left",_=f[0].offsetLeft,S=[h.width()-f.outerWidth(!1),x.parent().width()-x.width()],b=[e,0===e?0:e/s.scrollRatio.x],C=p[1],y=g[1],B=0<C?C/s.scrollRatio.x:0,T=0<y?y/s.scrollRatio.x:0;break;case"y":var x=z("#mCSB_"+s.idx+"_dragger_vertical"),w="top",_=f[0].offsetTop,S=[h.height()-f.outerHeight(!1),x.parent().height()-x.height()],b=[e,0===e?0:e/s.scrollRatio.y],C=p[0],y=g[0],B=0<C?C/s.scrollRatio.y:0,T=0<y?y/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],a[0].mcs||(o(),t("onInit")&&c.callbacks.onInit.call(a[0])),clearTimeout(f[0].onCompleteTimeout),K(x[0],w,Math.round(b[1]),u[1],i.scrollEasing),!s.tweenRunning&&(0===_&&0<=b[0]||_===S[0]&&b[0]<=S[0])||K(f[0],w,Math.round(b[0]),u[0],i.scrollEasing,i.overwrite,{onStart:function(){i.callbacks&&i.onStart&&!s.tweenRunning&&(t("onScrollStart")&&(o(),c.callbacks.onScrollStart.call(a[0])),s.tweenRunning=!0,M(x),s.cbOffsets=[c.callbacks.alwaysTriggerOffsets||_>=S[0]+C,c.callbacks.alwaysTriggerOffsets||_<=-y])},onUpdate:function(){i.callbacks&&i.onUpdate&&t("whileScrolling")&&(o(),c.callbacks.whileScrolling.call(a[0]))},onComplete:function(){if(i.callbacks&&i.onComplete){"yx"===c.axis&&clearTimeout(f[0].onCompleteTimeout);var e=f[0].idleTimer||0;f[0].onCompleteTimeout=setTimeout(function(){t("onScroll")&&(o(),c.callbacks.onScroll.call(a[0])),t("onTotalScroll")&&b[1]>=S[1]-B&&s.cbOffsets[0]&&(o(),c.callbacks.onTotalScroll.call(a[0])),t("onTotalScrollBack")&&b[1]<=T&&s.cbOffsets[1]&&(o(),c.callbacks.onTotalScrollBack.call(a[0])),s.tweenRunning=!1,f[0].idleTimer=0,M(x,"hide")},e)}}})}},K=function(e,t,o,n,a,i,l){function r(){x.stop||(p||u.call(),p=$()-m,s(),p>=x.time&&(x.time=p>x.time?p+c-(p-x.time):p+c-1,x.time<p+1&&(x.time=p+1)),x.time<n?x.id=d(r):f.call())}function s(){0<n?(x.currVal=function(e,t,o,n,a){switch(a){case"linear":case"mcsLinear":return o*e/n+t;case"mcsLinearOut":return e/=n,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return(e/=n/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t;case"easeInOutStrong":return(e/=n/2)<1?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(2-Math.pow(2,-10*e))+t);case"easeInOut":case"mcsEaseInOut":return(e/=n/2)<1?o/2*e*e*e+t:o/2*((e-=2)*e*e+2)+t;case"easeOutSmooth":return e/=n,-o*(--e*e*e*e-1)+t;case"easeOutStrong":return o*(1-Math.pow(2,-10*e/n))+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=n)*e,l=i*e;return t+o*(.499999999999997*l*i+-2.5*i*i+5.5*l+-6.5*i+4*e)}}(x.time,g,w,n,a),v[t]=Math.round(x.currVal)+"px"):v[t]=o+"px",h.call()}e._mTween||(e._mTween={top:{},left:{}});var c,d,l=l||{},u=l.onStart||function(){},h=l.onUpdate||function(){},f=l.onComplete||function(){},m=$(),p=0,g=e.offsetTop,v=e.style,x=e._mTween[t];"left"===t&&(g=e.offsetLeft);var w=o-g;x.stop=0,"none"!==i&&null!=x.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(x.id):clearTimeout(x.id),x.id=null),c=1e3/60,x.time=p+c,d=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},x.id=d(r)},$=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},ee=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var n=t[o];e._mTween[n].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[n].id):clearTimeout(e._mTween[n].id),e._mTween[n].id=null,e._mTween[n].stop=1)}},te=function(t,o){try{delete t[o]}catch(e){t[o]=null}},oe=function(e){return!(e.which&&1!==e.which)},ne=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},ae=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ie=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},le=function(){var e=function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}();return!!e&&document[e]},z.fn[f]=function(e){return m[e]?m[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void z.error("Method "+e+" does not exist"):m.init.apply(this,arguments)},z[f]=function(e){return m[e]?m[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void z.error("Method "+e+" does not exist"):m.init.apply(this,arguments)},z[f].defaults=a,window[f]=!0,z(window).bind("load",function(){z(n)[f](),z.extend(z.expr[":"],{mcsInView:z.expr[":"].mcsInView||function(e){var t,o,n=z(e),a=n.parents(".mCSB_container");if(a.length)return t=a.parent(),0<=(o=[a[0].offsetTop,a[0].offsetLeft])[0]+ie(n)[0]&&o[0]+ie(n)[0]<t.height()-n.outerHeight(!1)&&0<=o[1]+ie(n)[1]&&o[1]+ie(n)[1]<t.width()-n.outerWidth(!1)},mcsInSight:z.expr[":"].mcsInSight||function(e,t,o){var n,a,i,l,r=z(e),s=r.parents(".mCSB_container"),c="exact"===o[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(s.length)return n=[r.outerHeight(!1),r.outerWidth(!1)],i=[s[0].offsetTop+ie(r)[0],s[0].offsetLeft+ie(r)[1]],a=[s.parent()[0].offsetHeight,s.parent()[0].offsetWidth],i[0]-a[0]*(l=[n[0]<a[0]?c[0]:c[1],n[1]<a[1]?c[0]:c[1]])[0][0]<0&&0<=i[0]+n[0]-a[0]*l[0][1]&&i[1]-a[1]*l[1][0]<0&&0<=i[1]+n[1]-a[1]*l[1][1]},mcsOverflow:z.expr[":"].mcsOverflow||function(e){var t=z(e).data(P);if(t)return t.overflowed[0]||t.overflowed[1]}})})});
!function(a,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n(require,exports,module):a.CountUp=n()}(this,function(a,n,t){return function(a,n,t,e,i,r){function o(a){return"number"==typeof a&&!isNaN(a)}var u=this;if(u.version=function(){return"1.9.3"},u.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(a,n,t,e){return t*(1-Math.pow(2,-10*a/e))*1024/1023+n},formattingFn:function(a){var n,t,e,i,r,o,s=a<0;if(a=Math.abs(a).toFixed(u.decimals),t=(n=(a+="").split("."))[0],e=1<n.length?u.options.decimal+n[1]:"",u.options.useGrouping){for(i="",r=0,o=t.length;r<o;++r)0!==r&&r%3==0&&(i=u.options.separator+i),i=t[o-r-1]+i;t=i}return u.options.numerals.length&&(t=t.replace(/[0-9]/g,function(a){return u.options.numerals[+a]}),e=e.replace(/[0-9]/g,function(a){return u.options.numerals[+a]})),(s?"-":"")+u.options.prefix+t+e+u.options.suffix},prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var s in u.options)r.hasOwnProperty(s)&&null!==r[s]&&(u.options[s]=r[s]);""===u.options.separator?u.options.useGrouping=!1:u.options.separator=""+u.options.separator;for(var l=0,m=["webkit","moz","ms","o"],d=0;d<m.length&&!window.requestAnimationFrame;++d)window.requestAnimationFrame=window[m[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[m[d]+"CancelAnimationFrame"]||window[m[d]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=(new Date).getTime(),e=Math.max(0,16-(t-l)),i=window.setTimeout(function(){a(t+e)},e);return l=t+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),u.initialize=function(){return!(!u.initialized&&(u.error="",u.d="string"==typeof a?document.getElementById(a):a,u.d?(u.startVal=Number(n),u.endVal=Number(t),o(u.startVal)&&o(u.endVal)?(u.decimals=Math.max(0,e||0),u.dec=Math.pow(10,u.decimals),u.duration=1e3*Number(i)||2e3,u.countDown=u.startVal>u.endVal,u.frameVal=u.startVal,u.initialized=!0,0):(u.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",1)):u.error="[CountUp] target is null or undefined"))},u.printValue=function(a){var n=u.options.formattingFn(a);"INPUT"===u.d.tagName?this.d.value=n:"text"===u.d.tagName||"tspan"===u.d.tagName?this.d.textContent=n:this.d.innerHTML=n},u.count=function(a){u.startTime||(u.startTime=a);var n=(u.timestamp=a)-u.startTime;u.remaining=u.duration-n,u.options.useEasing?u.countDown?u.frameVal=u.startVal-u.options.easingFn(n,0,u.startVal-u.endVal,u.duration):u.frameVal=u.options.easingFn(n,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(n/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(n/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.dec)/u.dec,u.printValue(u.frameVal),n<u.duration?u.rAF=requestAnimationFrame(u.count):u.callback&&u.callback()},u.start=function(a){u.initialize()&&(u.callback=a,u.rAF=requestAnimationFrame(u.count))},u.pauseResume=function(){u.paused?(u.paused=!1,delete u.startTime,u.duration=u.remaining,u.startVal=u.frameVal,requestAnimationFrame(u.count)):(u.paused=!0,cancelAnimationFrame(u.rAF))},u.reset=function(){u.paused=!1,delete u.startTime,u.initialized=!1,u.initialize()&&(cancelAnimationFrame(u.rAF),u.printValue(u.startVal))},u.update=function(a){if(u.initialize()){if(!o(a=Number(a)))return void(u.error="[CountUp] update() - new endVal is not a number: "+a);u.error="",a!==u.frameVal&&(cancelAnimationFrame(u.rAF),u.paused=!1,delete u.startTime,u.startVal=u.frameVal,u.endVal=a,u.countDown=u.startVal>u.endVal,u.rAF=requestAnimationFrame(u.count))}},u.initialize()&&u.printValue(u.startVal)}});
!function(t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Chart=t()}(function(){return function r(o,s,l){function u(e,t){if(!s[e]){if(!o[e]){var i="function"==typeof require&&require;if(!t&&i)return i(e,!0);if(d)return d(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var a=s[e]={exports:{}};o[e][0].call(a.exports,function(t){return u(o[e][1][t]||t)},a,a.exports,r,o,s,l)}return s[e].exports}for(var d="function"==typeof require&&require,t=0;t<l.length;t++)u(l[t]);return u}({1:[function(t,e,i){var r=t(5);function n(t){if(t){var e=[0,0,0],i=1,n=t.match(/^#([a-fA-F0-9]{3})$/i);if(n){n=n[1];for(var a=0;a<e.length;a++)e[a]=parseInt(n[a]+n[a],16)}else if(n=t.match(/^#([a-fA-F0-9]{6})$/i))for(n=n[1],a=0;a<e.length;a++)e[a]=parseInt(n.slice(2*a,2*a+2),16);else if(n=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(a=0;a<e.length;a++)e[a]=parseInt(n[a+1]);i=parseFloat(n[4])}else if(n=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(a=0;a<e.length;a++)e[a]=Math.round(2.55*parseFloat(n[a+1]));i=parseFloat(n[4])}else if(n=t.match(/(\w+)/)){if("transparent"==n[1])return[0,0,0,0];if(!(e=r[n[1]]))return}for(a=0;a<e.length;a++)e[a]=d(e[a],0,255);return i=i||0==i?d(i,0,1):1,e[3]=i,e}}function a(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[d(parseInt(e[1]),0,360),d(parseFloat(e[2]),0,100),d(parseFloat(e[3]),0,100),d(isNaN(i)?1:i,0,1)]}}}function o(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[d(parseInt(e[1]),0,360),d(parseFloat(e[2]),0,100),d(parseFloat(e[3]),0,100),d(isNaN(i)?1:i,0,1)]}}}function s(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function l(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function u(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function d(t,e,i){return Math.min(Math.max(e,t),i)}function h(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}e.exports={getRgba:n,getHsla:a,getRgb:function(t){var e=n(t);return e&&e.slice(0,3)},getHsl:function(t){var e=a(t);return e&&e.slice(0,3)},getHwb:o,getAlpha:function(t){var e=n(t);return e?e[3]:(e=a(t))?e[3]:(e=o(t))?e[3]:void 0},hexString:function(t){return"#"+h(t[0])+h(t[1])+h(t[2])},rgbString:function(t,e){return e<1||t[3]&&t[3]<1?s(t,e):"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:s,percentString:function(t,e){return e<1||t[3]&&t[3]<1?l(t,e):"rgb("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%)"},percentaString:l,hslString:function(t,e){return e<1||t[3]&&t[3]<1?u(t,e):"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:u,hwbString:function(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return c[t.slice(0,3)]}};var c={};for(var f in r)c[r[f]]=f},{5:5}],2:[function(t,e,i){var d=t(4),n=t(1),o=function(t){return t instanceof o?t:this instanceof o?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void("string"==typeof t?(e=n.getRgba(t))?this.setValues("rgb",e):(e=n.getHsla(t))?this.setValues("hsl",e):(e=n.getHwb(t))&&this.setValues("hwb",e):"object"==typeof t&&(void 0!==(e=t).r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):void 0!==e.w||void 0!==e.whiteness?this.setValues("hwb",e):void 0===e.c&&void 0===e.cyan||this.setValues("cmyk",e)))):new o(t);var e};o.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t=(t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return n.hexString(this.values.rgb)},rgbString:function(){return n.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return n.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return n.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return n.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return n.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return n.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return n.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],i=0;i<t.length;i++){var n=t[i]/255;e[i]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),i=t.luminosity();return i<e?(e+.05)/(i+.05):(i+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return 7.1<=e?"AAA":4.5<=e?"AA":""},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,i=(e[0]+t)%360;return e[0]=i<0?360+i:i,this.setValues("hsl",e),this},mix:function(t,e){var i=this,n=t,a=void 0===e?.5:e,r=2*a-1,o=i.alpha()-n.alpha(),s=((r*o==-1?r:(r+o)/(1+r*o))+1)/2,l=1-s;return this.rgb(s*i.red()+l*n.red(),s*i.green()+l*n.green(),s*i.blue()+l*n.blue()).alpha(i.alpha()*a+n.alpha()*(1-a))},toJSON:function(){return this.rgb()},clone:function(){var t,e,i=new o,n=this.values,a=i.values;for(var r in n)n.hasOwnProperty(r)&&(t=n[r],"[object Array]"===(e={}.toString.call(t))?a[r]=t.slice(0):"[object Number]"===e?a[r]=t:console.error("unexpected color value:",t));return i}},o.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},o.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},o.prototype.getValues=function(t){for(var e=this.values,i={},n=0;n<t.length;n++)i[t.charAt(n)]=e[t][n];return 1!==e.alpha&&(i.a=e.alpha),i},o.prototype.setValues=function(t,e){var i,n,a=this.values,r=this.spaces,o=this.maxes,s=1;if(this.valid=!0,"alpha"===t)s=e;else if(e.length)a[t]=e.slice(0,t.length),s=e[t.length];else if(void 0!==e[t.charAt(0)]){for(i=0;i<t.length;i++)a[t][i]=e[t.charAt(i)];s=e.a}else if(void 0!==e[r[t][0]]){var l=r[t];for(i=0;i<t.length;i++)a[t][i]=e[l[i]];s=e.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===s?a.alpha:s)),"alpha"===t)return!1;for(i=0;i<t.length;i++)n=Math.max(0,Math.min(o[t][i],a[t][i])),a[t][i]=Math.round(n);for(var u in r)u!==t&&(a[u]=d[t][u](a[t]));return!0},o.prototype.setSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i),this)},o.prototype.setChannel=function(t,e,i){var n=this.values[t];return void 0===i?n[e]:(i===n[e]||(n[e]=i,this.setValues(t,n)),this)},"undefined"!=typeof window&&(window.Color=o),e.exports=o},{1:1,4:4}],3:[function(t,e,i){function a(t){var e,i,n=t[0]/255,a=t[1]/255,r=t[2]/255,o=Math.min(n,a,r),s=Math.max(n,a,r),l=s-o;return s==o?e=0:n==s?e=(a-r)/l:a==s?e=2+(r-n)/l:r==s&&(e=4+(n-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),i=(o+s)/2,[e,100*(s==o?0:i<=.5?l/(s+o):l/(2-s-o)),100*i]}function n(t){var e,i,n=t[0],a=t[1],r=t[2],o=Math.min(n,a,r),s=Math.max(n,a,r),l=s-o;return i=0==s?0:l/s*1e3/10,s==o?e=0:n==s?e=(a-r)/l:a==s?e=2+(r-n)/l:r==s&&(e=4+(n-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),[e,i,s/255*1e3/10]}function o(t){var e=t[0],i=t[1],n=t[2];return[a(t)[0],1/255*Math.min(e,Math.min(i,n))*100,100*(n=1-1/255*Math.max(e,Math.max(i,n)))]}function s(t){var e,i=t[0]/255,n=t[1]/255,a=t[2]/255;return[100*((1-i-(e=Math.min(1-i,1-n,1-a)))/(1-e)||0),100*((1-n-e)/(1-e)||0),100*((1-a-e)/(1-e)||0),100*e]}function l(t){return S[JSON.stringify(t)]}function u(t){var e=t[0]/255,i=t[1]/255,n=t[2]/255;return[100*(.4124*(e=.04045<e?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(i=.04045<i?Math.pow((i+.055)/1.055,2.4):i/12.92)+.1805*(n=.04045<n?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*e+.7152*i+.0722*n),100*(.0193*e+.1192*i+.9505*n)]}function d(t){var e=u(t),i=e[0],n=e[1],a=e[2];return n/=100,a/=108.883,i=.008856<(i/=95.047)?Math.pow(i,1/3):7.787*i+16/116,[116*(n=.008856<n?Math.pow(n,1/3):7.787*n+16/116)-16,500*(i-n),200*(n-(a=.008856<a?Math.pow(a,1/3):7.787*a+16/116))]}function h(t){var e,i,n,a,r,o=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return[r=255*l,r,r];e=2*l-(i=l<.5?l*(1+s):l+s-l*s),a=[0,0,0];for(var u=0;u<3;u++)(n=o+1/3*-(u-1))<0&&n++,1<n&&n--,r=6*n<1?e+6*(i-e)*n:2*n<1?i:3*n<2?e+(i-e)*(2/3-n)*6:e,a[u]=255*r;return a}function c(t){var e=t[0]/60,i=t[1]/100,n=t[2]/100,a=Math.floor(e)%6,r=e-Math.floor(e),o=255*n*(1-i),s=255*n*(1-i*r),l=255*n*(1-i*(1-r));switch(n*=255,a){case 0:return[n,l,o];case 1:return[s,n,o];case 2:return[o,n,l];case 3:return[o,s,n];case 4:return[l,o,n];case 5:return[n,o,s]}}function f(t){var e,i,n,a,o=t[0]/360,s=t[1]/100,l=t[2]/100,u=s+l;switch(1<u&&(s/=u,l/=u),n=6*o-(e=Math.floor(6*o)),0!=(1&e)&&(n=1-n),a=s+n*((i=1-l)-s),e){default:case 6:case 0:r=i,g=a,b=s;break;case 1:r=a,g=i,b=s;break;case 2:r=s,g=i,b=a;break;case 3:r=s,g=a,b=i;break;case 4:r=a,g=s,b=i;break;case 5:r=i,g=s,b=a}return[255*r,255*g,255*b]}function m(t){var e=t[0]/100,i=t[1]/100,n=t[2]/100,a=t[3]/100;return[255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,i*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]}function p(t){var e,i,n,a=t[0]/100,r=t[1]/100,o=t[2]/100;return i=-.9689*a+1.8758*r+.0415*o,n=.0557*a+-.204*r+1.057*o,e=.0031308<(e=3.2406*a+-1.5372*r+-.4986*o)?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,i=.0031308<i?1.055*Math.pow(i,1/2.4)-.055:i*=12.92,n=.0031308<n?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,[255*(e=Math.min(Math.max(0,e),1)),255*(i=Math.min(Math.max(0,i),1)),255*(n=Math.min(Math.max(0,n),1))]}function v(t){var e=t[0],i=t[1],n=t[2];return i/=100,n/=108.883,e=.008856<(e/=95.047)?Math.pow(e,1/3):7.787*e+16/116,[116*(i=.008856<i?Math.pow(i,1/3):7.787*i+16/116)-16,500*(e-i),200*(i-(n=.008856<n?Math.pow(n,1/3):7.787*n+16/116))]}function y(t){var e,i,n,a,r=t[0],o=t[1],s=t[2];return r<=8?a=(i=100*r/903.3)/100*7.787+16/116:(i=100*Math.pow((r+16)/116,3),a=Math.pow(i/100,1/3)),[e=e/95.047<=.008856?e=95.047*(o/500+a-16/116)/7.787:95.047*Math.pow(o/500+a,3),i,n=n/108.883<=.008859?n=108.883*(a-s/200-16/116)/7.787:108.883*Math.pow(a-s/200,3)]}function x(t){var e,i=t[0],n=t[1],a=t[2];return(e=360*Math.atan2(a,n)/2/Math.PI)<0&&(e+=360),[i,Math.sqrt(n*n+a*a),e]}function _(t){return p(y(t))}function k(t){var e,i=t[0],n=t[1];return e=t[2]/360*2*Math.PI,[i,n*Math.cos(e),n*Math.sin(e)]}function w(t){return M[t]}e.exports={rgb2hsl:a,rgb2hsv:n,rgb2hwb:o,rgb2cmyk:s,rgb2keyword:l,rgb2xyz:u,rgb2lab:d,rgb2lch:function(t){return x(d(t))},hsl2rgb:h,hsl2hsv:function(t){var e=t[0],i=t[1]/100,n=t[2]/100;return 0===n?[0,0,0]:[e,2*(i*=(n*=2)<=1?n:2-n)/(n+i)*100,(n+i)/2*100]},hsl2hwb:function(t){return o(h(t))},hsl2cmyk:function(t){return s(h(t))},hsl2keyword:function(t){return l(h(t))},hsv2rgb:c,hsv2hsl:function(t){var e,i,n=t[0],a=t[1]/100,r=t[2]/100;return e=a*r,[n,100*(e=(e/=(i=(2-a)*r)<=1?i:2-i)||0),100*(i/=2)]},hsv2hwb:function(t){return o(c(t))},hsv2cmyk:function(t){return s(c(t))},hsv2keyword:function(t){return l(c(t))},hwb2rgb:f,hwb2hsl:function(t){return a(f(t))},hwb2hsv:function(t){return n(f(t))},hwb2cmyk:function(t){return s(f(t))},hwb2keyword:function(t){return l(f(t))},cmyk2rgb:m,cmyk2hsl:function(t){return a(m(t))},cmyk2hsv:function(t){return n(m(t))},cmyk2hwb:function(t){return o(m(t))},cmyk2keyword:function(t){return l(m(t))},keyword2rgb:w,keyword2hsl:function(t){return a(w(t))},keyword2hsv:function(t){return n(w(t))},keyword2hwb:function(t){return o(w(t))},keyword2cmyk:function(t){return s(w(t))},keyword2lab:function(t){return d(w(t))},keyword2xyz:function(t){return u(w(t))},xyz2rgb:p,xyz2lab:v,xyz2lch:function(t){return x(v(t))},lab2xyz:y,lab2rgb:_,lab2lch:x,lch2lab:k,lch2xyz:function(t){return y(k(t))},lch2rgb:function(t){return _(k(t))}};var M={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},S={};for(var D in M)S[JSON.stringify(M[D])]=D},{}],4:[function(t,e,i){var a=t(3),r=function(){return new u};for(var n in a){r[n+"Raw"]=function(e){return function(t){return"number"==typeof t&&(t=Array.prototype.slice.call(arguments)),a[e](t)}}(n);var o=/(\w+)2(\w+)/.exec(n),s=o[1],l=o[2];(r[s]=r[s]||{})[l]=r[n]=function(n){return function(t){"number"==typeof t&&(t=Array.prototype.slice.call(arguments));var e=a[n](t);if("string"==typeof e||void 0===e)return e;for(var i=0;i<e.length;i++)e[i]=Math.round(e[i]);return e}}(n)}var u=function(){this.convs={}};u.prototype.routeSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i))},u.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},u.prototype.getValues=function(t){var e=this.convs[t];if(!e){var i=this.space,n=this.convs[i];e=r[i][t](n),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(e){u.prototype[e]=function(t){return this.routeSpace(e,arguments)}}),e.exports=r},{3:3}],5:[function(t,e,i){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],6:[function(Hi,Vi,t){var e;e=function(){"use strict";var t,a;function y(){return t.apply(null,arguments)}function s(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)}function l(t){return null!=t&&"[object Object]"===Object.prototype.toString.call(t)}function u(t){return void 0===t}function d(t){return"number"==typeof t||"[object Number]"===Object.prototype.toString.call(t)}function h(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function c(t,e){var i,n=[];for(i=0;i<t.length;++i)n.push(e(t[i],i));return n}function b(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function f(t,e){for(var i in e)b(e,i)&&(t[i]=e[i]);return b(e,"toString")&&(t.toString=e.toString),b(e,"valueOf")&&(t.valueOf=e.valueOf),t}function g(t,e,i,n){return Me(t,e,i,n,!0).utc()}function x(t){return null==t._pf&&(t._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),t._pf}function m(t){if(null==t._isValid){var e=x(t),i=a.call(e.parsedDateParts,function(t){return null!=t}),n=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidMonth&&!e.invalidWeekday&&!e.weekdayMismatch&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&i);if(t._strict&&(n=n&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour),null!=Object.isFrozen&&Object.isFrozen(t))return n;t._isValid=n}return t._isValid}function p(t){var e=g(NaN);return null!=t?f(x(e),t):x(e).userInvalidated=!0,e}a=Array.prototype.some?Array.prototype.some:function(t){for(var e=Object(this),i=e.length>>>0,n=0;n<i;n++)if(n in e&&t.call(this,e[n],n,e))return!0;return!1};var r=y.momentProperties=[];function v(t,e){var i,n,a;if(u(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),u(e._i)||(t._i=e._i),u(e._f)||(t._f=e._f),u(e._l)||(t._l=e._l),u(e._strict)||(t._strict=e._strict),u(e._tzm)||(t._tzm=e._tzm),u(e._isUTC)||(t._isUTC=e._isUTC),u(e._offset)||(t._offset=e._offset),u(e._pf)||(t._pf=x(e)),u(e._locale)||(t._locale=e._locale),0<r.length)for(i=0;i<r.length;i++)u(a=e[n=r[i]])||(t[n]=a);return t}var e=!1;function _(t){v(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===e&&(e=!0,y.updateOffset(this),e=!1)}function k(t){return t instanceof _||null!=t&&null!=t._isAMomentObject}function w(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function M(t){var e=+t,i=0;return 0!==e&&isFinite(e)&&(i=w(e)),i}function o(t,e,i){var n,a=Math.min(t.length,e.length),r=Math.abs(t.length-e.length),o=0;for(n=0;n<a;n++)(i&&t[n]!==e[n]||!i&&M(t[n])!==M(e[n]))&&o++;return o+r}function S(t){!1===y.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function i(a,r){var o=!0;return f(function(){if(null!=y.deprecationHandler&&y.deprecationHandler(null,a),o){for(var t,e=[],i=0;i<arguments.length;i++){if(t="","object"==typeof arguments[i]){for(var n in t+="\n["+i+"] ",arguments[0])t+=n+": "+arguments[0][n]+", ";t=t.slice(0,-2)}else t=arguments[i];e.push(t)}S(a+"\nArguments: "+Array.prototype.slice.call(e).join("")+"\n"+(new Error).stack),o=!1}return r.apply(this,arguments)},r)}var n,D={};function C(t,e){null!=y.deprecationHandler&&y.deprecationHandler(t,e),D[t]||(S(e),D[t]=!0)}function P(t){return t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}function T(t,e){var i,n=f({},t);for(i in e)b(e,i)&&(l(t[i])&&l(e[i])?(n[i]={},f(n[i],t[i]),f(n[i],e[i])):null!=e[i]?n[i]=e[i]:delete n[i]);for(i in t)b(t,i)&&!b(e,i)&&l(t[i])&&(n[i]=f({},n[i]));return n}function O(t){null!=t&&this.set(t)}y.suppressDeprecationWarnings=!1,y.deprecationHandler=null,n=Object.keys?Object.keys:function(t){var e,i=[];for(e in t)b(t,e)&&i.push(e);return i};var I={};function A(t,e){var i=t.toLowerCase();I[i]=I[i+"s"]=I[e]=t}function F(t){return"string"==typeof t?I[t]||I[t.toLowerCase()]:void 0}function R(t){var e,i,n={};for(i in t)b(t,i)&&(e=F(i))&&(n[e]=t[i]);return n}var L={};function W(t,e){L[t]=e}function Y(t,e,i){var n=""+Math.abs(t),a=e-n.length;return(0<=t?i?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+n}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,z=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,H={},V={};function B(t,e,i,n){var a=n;"string"==typeof n&&(a=function(){return this[n]()}),t&&(V[t]=a),e&&(V[e[0]]=function(){return Y(a.apply(this,arguments),e[1],e[2])}),i&&(V[i]=function(){return this.localeData().ordinal(a.apply(this,arguments),t)})}function E(t,e){return t.isValid()?(e=j(e,t.localeData()),H[e]=H[e]||function(n){var t,a,e,r=n.match(N);for(t=0,a=r.length;t<a;t++)V[r[t]]?r[t]=V[r[t]]:r[t]=(e=r[t]).match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"");return function(t){var e,i="";for(e=0;e<a;e++)i+=P(r[e])?r[e].call(t,n):r[e];return i}}(e),H[e](t)):t.localeData().invalidDate()}function j(t,e){var i=5;function n(t){return e.longDateFormat(t)||t}for(z.lastIndex=0;0<=i&&z.test(t);)t=t.replace(z,n),z.lastIndex=0,i-=1;return t}var U=/\d/,q=/\d\d/,G=/\d{3}/,Z=/\d{4}/,X=/[+-]?\d{6}/,J=/\d\d?/,K=/\d\d\d\d?/,$=/\d\d\d\d\d\d?/,Q=/\d{1,3}/,tt=/\d{1,4}/,et=/[+-]?\d{1,6}/,it=/\d+/,nt=/[+-]?\d+/,at=/Z|[+-]\d\d:?\d\d/gi,rt=/Z|[+-]\d\d(?::?\d\d)?/gi,ot=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,st={};function lt(t,i,n){st[t]=P(i)?i:function(t,e){return t&&n?n:i}}function ut(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var dt={};function ht(t,i){var e,n=i;for("string"==typeof t&&(t=[t]),d(i)&&(n=function(t,e){e[i]=M(t)}),e=0;e<t.length;e++)dt[t[e]]=n}function ct(t,a){ht(t,function(t,e,i,n){i._w=i._w||{},a(t,i._w,i,n)})}var ft=0,gt=1,mt=2,pt=3,vt=4,yt=5,bt=6,xt=7,_t=8;function kt(t){return wt(t)?366:365}function wt(t){return t%4==0&&t%100!=0||t%400==0}B("Y",0,0,function(){var t=this.year();return t<=9999?""+t:"+"+t}),B(0,["YY",2],0,function(){return this.year()%100}),B(0,["YYYY",4],0,"year"),B(0,["YYYYY",5],0,"year"),B(0,["YYYYYY",6,!0],0,"year"),A("year","y"),W("year",1),lt("Y",nt),lt("YY",J,q),lt("YYYY",tt,Z),lt("YYYYY",et,X),lt("YYYYYY",et,X),ht(["YYYYY","YYYYYY"],ft),ht("YYYY",function(t,e){e[ft]=2===t.length?y.parseTwoDigitYear(t):M(t)}),ht("YY",function(t,e){e[ft]=y.parseTwoDigitYear(t)}),ht("Y",function(t,e){e[ft]=parseInt(t,10)}),y.parseTwoDigitYear=function(t){return M(t)+(68<M(t)?1900:2e3)};var Mt,St=Dt("FullYear",!0);function Dt(e,i){return function(t){return null!=t?(Pt(this,e,t),y.updateOffset(this,i),this):Ct(this,e)}}function Ct(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function Pt(t,e,i){t.isValid()&&!isNaN(i)&&("FullYear"===e&&wt(t.year())&&1===t.month()&&29===t.date()?t._d["set"+(t._isUTC?"UTC":"")+e](i,t.month(),Tt(i,t.month())):t._d["set"+(t._isUTC?"UTC":"")+e](i))}function Tt(t,e){if(isNaN(t)||isNaN(e))return NaN;var i=(e%12+12)%12;return t+=(e-i)/12,1===i?wt(t)?29:28:31-i%7%2}Mt=Array.prototype.indexOf?Array.prototype.indexOf:function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1},B("M",["MM",2],"Mo",function(){return this.month()+1}),B("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)}),B("MMMM",0,0,function(t){return this.localeData().months(this,t)}),A("month","M"),W("month",8),lt("M",J),lt("MM",J,q),lt("MMM",function(t,e){return e.monthsShortRegex(t)}),lt("MMMM",function(t,e){return e.monthsRegex(t)}),ht(["M","MM"],function(t,e){e[gt]=M(t)-1}),ht(["MMM","MMMM"],function(t,e,i,n){var a=i._locale.monthsParse(t,n,i._strict);null!=a?e[gt]=a:x(i).invalidMonth=t});var Ot=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,It="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),At="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Ft(t,e){var i;if(!t.isValid())return t;if("string"==typeof e)if(/^\d+$/.test(e))e=M(e);else if(!d(e=t.localeData().monthsParse(e)))return t;return i=Math.min(t.date(),Tt(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,i),t}function Rt(t){return null!=t?(Ft(this,t),y.updateOffset(this,!0),this):Ct(this,"Month")}var Lt=ot,Wt=ot;function Yt(){function t(t,e){return e.length-t.length}var e,i,n=[],a=[],r=[];for(e=0;e<12;e++)i=g([2e3,e]),n.push(this.monthsShort(i,"")),a.push(this.months(i,"")),r.push(this.months(i,"")),r.push(this.monthsShort(i,""));for(n.sort(t),a.sort(t),r.sort(t),e=0;e<12;e++)n[e]=ut(n[e]),a[e]=ut(a[e]);for(e=0;e<24;e++)r[e]=ut(r[e]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function Nt(t){var e=new Date(Date.UTC.apply(null,arguments));return t<100&&0<=t&&isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t),e}function zt(t,e,i){var n=7+e-i;return-(7+Nt(t,0,n).getUTCDay()-e)%7+n-1}function Ht(t,e,i,n,a){var r,o,s=1+7*(e-1)+(7+i-n)%7+zt(t,n,a);return s<=0?o=kt(r=t-1)+s:s>kt(t)?(r=t+1,o=s-kt(t)):(r=t,o=s),{year:r,dayOfYear:o}}function Vt(t,e,i){var n,a,r=zt(t.year(),e,i),o=Math.floor((t.dayOfYear()-r-1)/7)+1;return o<1?n=o+Bt(a=t.year()-1,e,i):o>Bt(t.year(),e,i)?(n=o-Bt(t.year(),e,i),a=t.year()+1):(a=t.year(),n=o),{week:n,year:a}}function Bt(t,e,i){var n=zt(t,e,i),a=zt(t+1,e,i);return(kt(t)-n+a)/7}B("w",["ww",2],"wo","week"),B("W",["WW",2],"Wo","isoWeek"),A("week","w"),A("isoWeek","W"),W("week",5),W("isoWeek",5),lt("w",J),lt("ww",J,q),lt("W",J),lt("WW",J,q),ct(["w","ww","W","WW"],function(t,e,i,n){e[n.substr(0,1)]=M(t)}),B("d",0,"do","day"),B("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)}),B("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)}),B("dddd",0,0,function(t){return this.localeData().weekdays(this,t)}),B("e",0,0,"weekday"),B("E",0,0,"isoWeekday"),A("day","d"),A("weekday","e"),A("isoWeekday","E"),W("day",11),W("weekday",11),W("isoWeekday",11),lt("d",J),lt("e",J),lt("E",J),lt("dd",function(t,e){return e.weekdaysMinRegex(t)}),lt("ddd",function(t,e){return e.weekdaysShortRegex(t)}),lt("dddd",function(t,e){return e.weekdaysRegex(t)}),ct(["dd","ddd","dddd"],function(t,e,i,n){var a=i._locale.weekdaysParse(t,n,i._strict);null!=a?e.d=a:x(i).invalidWeekday=t}),ct(["d","e","E"],function(t,e,i,n){e[n]=M(t)});var Et="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),jt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Ut="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),qt=ot,Gt=ot,Zt=ot;function Xt(){function t(t,e){return e.length-t.length}var e,i,n,a,r,o=[],s=[],l=[],u=[];for(e=0;e<7;e++)i=g([2e3,1]).day(e),n=this.weekdaysMin(i,""),a=this.weekdaysShort(i,""),r=this.weekdays(i,""),o.push(n),s.push(a),l.push(r),u.push(n),u.push(a),u.push(r);for(o.sort(t),s.sort(t),l.sort(t),u.sort(t),e=0;e<7;e++)s[e]=ut(s[e]),l[e]=ut(l[e]),u[e]=ut(u[e]);this._weekdaysRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}function Jt(){return this.hours()%12||12}function Kt(t,e){B(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}function $t(t,e){return e._meridiemParse}B("H",["HH",2],0,"hour"),B("h",["hh",2],0,Jt),B("k",["kk",2],0,function(){return this.hours()||24}),B("hmm",0,0,function(){return""+Jt.apply(this)+Y(this.minutes(),2)}),B("hmmss",0,0,function(){return""+Jt.apply(this)+Y(this.minutes(),2)+Y(this.seconds(),2)}),B("Hmm",0,0,function(){return""+this.hours()+Y(this.minutes(),2)}),B("Hmmss",0,0,function(){return""+this.hours()+Y(this.minutes(),2)+Y(this.seconds(),2)}),Kt("a",!0),Kt("A",!1),A("hour","h"),W("hour",13),lt("a",$t),lt("A",$t),lt("H",J),lt("h",J),lt("k",J),lt("HH",J,q),lt("hh",J,q),lt("kk",J,q),lt("hmm",K),lt("hmmss",$),lt("Hmm",K),lt("Hmmss",$),ht(["H","HH"],pt),ht(["k","kk"],function(t,e,i){var n=M(t);e[pt]=24===n?0:n}),ht(["a","A"],function(t,e,i){i._isPm=i._locale.isPM(t),i._meridiem=t}),ht(["h","hh"],function(t,e,i){e[pt]=M(t),x(i).bigHour=!0}),ht("hmm",function(t,e,i){var n=t.length-2;e[pt]=M(t.substr(0,n)),e[vt]=M(t.substr(n)),x(i).bigHour=!0}),ht("hmmss",function(t,e,i){var n=t.length-4,a=t.length-2;e[pt]=M(t.substr(0,n)),e[vt]=M(t.substr(n,2)),e[yt]=M(t.substr(a)),x(i).bigHour=!0}),ht("Hmm",function(t,e,i){var n=t.length-2;e[pt]=M(t.substr(0,n)),e[vt]=M(t.substr(n))}),ht("Hmmss",function(t,e,i){var n=t.length-4,a=t.length-2;e[pt]=M(t.substr(0,n)),e[vt]=M(t.substr(n,2)),e[yt]=M(t.substr(a))});var Qt,te=Dt("Hours",!0),ee={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:It,monthsShort:At,week:{dow:0,doy:6},weekdays:Et,weekdaysMin:Ut,weekdaysShort:jt,meridiemParse:/[ap]\.?m?\.?/i},ie={},ne={};function ae(t){return t?t.toLowerCase().replace("_","-"):t}function re(t){var e=null;if(!ie[t]&&void 0!==Vi&&Vi&&Vi.exports)try{e=Qt._abbr,Hi("./locale/"+t),oe(e)}catch(t){}return ie[t]}function oe(t,e){var i;return t&&(i=u(e)?le(t):se(t,e))&&(Qt=i),Qt._abbr}function se(t,e){if(null!==e){var i=ee;if(e.abbr=t,null!=ie[t])C("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),i=ie[t]._config;else if(null!=e.parentLocale){if(null==ie[e.parentLocale])return ne[e.parentLocale]||(ne[e.parentLocale]=[]),ne[e.parentLocale].push({name:t,config:e}),null;i=ie[e.parentLocale]._config}return ie[t]=new O(T(i,e)),ne[t]&&ne[t].forEach(function(t){se(t.name,t.config)}),oe(t),ie[t]}return delete ie[t],null}function le(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return Qt;if(!s(t)){if(e=re(t))return e;t=[t]}return function(t){for(var e,i,n,a,r=0;r<t.length;){for(e=(a=ae(t[r]).split("-")).length,i=(i=ae(t[r+1]))?i.split("-"):null;0<e;){if(n=re(a.slice(0,e).join("-")))return n;if(i&&i.length>=e&&o(a,i,!0)>=e-1)break;e--}r++}return null}(t)}function ue(t){var e,i=t._a;return i&&-2===x(t).overflow&&(e=i[gt]<0||11<i[gt]?gt:i[mt]<1||i[mt]>Tt(i[ft],i[gt])?mt:i[pt]<0||24<i[pt]||24===i[pt]&&(0!==i[vt]||0!==i[yt]||0!==i[bt])?pt:i[vt]<0||59<i[vt]?vt:i[yt]<0||59<i[yt]?yt:i[bt]<0||999<i[bt]?bt:-1,x(t)._overflowDayOfYear&&(e<ft||mt<e)&&(e=mt),x(t)._overflowWeeks&&-1===e&&(e=xt),x(t)._overflowWeekday&&-1===e&&(e=_t),x(t).overflow=e),t}function de(t,e,i){return null!=t?t:null!=e?e:i}function he(t){var e,i,n,a,r,o=[];if(!t._d){var s,l;for(s=t,l=new Date(y.now()),n=s._useUTC?[l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()]:[l.getFullYear(),l.getMonth(),l.getDate()],t._w&&null==t._a[mt]&&null==t._a[gt]&&function(t){var e,i,n,a,r,o,s,l;if(null!=(e=t._w).GG||null!=e.W||null!=e.E)r=1,o=4,i=de(e.GG,t._a[ft],Vt(Se(),1,4).year),n=de(e.W,1),((a=de(e.E,1))<1||7<a)&&(l=!0);else{r=t._locale._week.dow,o=t._locale._week.doy;var u=Vt(Se(),r,o);i=de(e.gg,t._a[ft],u.year),n=de(e.w,u.week),null!=e.d?((a=e.d)<0||6<a)&&(l=!0):null!=e.e?(a=e.e+r,(e.e<0||6<e.e)&&(l=!0)):a=r}n<1||n>Bt(i,r,o)?x(t)._overflowWeeks=!0:null!=l?x(t)._overflowWeekday=!0:(s=Ht(i,n,a,r,o),t._a[ft]=s.year,t._dayOfYear=s.dayOfYear)}(t),null!=t._dayOfYear&&(r=de(t._a[ft],n[ft]),(t._dayOfYear>kt(r)||0===t._dayOfYear)&&(x(t)._overflowDayOfYear=!0),i=Nt(r,0,t._dayOfYear),t._a[gt]=i.getUTCMonth(),t._a[mt]=i.getUTCDate()),e=0;e<3&&null==t._a[e];++e)t._a[e]=o[e]=n[e];for(;e<7;e++)t._a[e]=o[e]=null==t._a[e]?2===e?1:0:t._a[e];24===t._a[pt]&&0===t._a[vt]&&0===t._a[yt]&&0===t._a[bt]&&(t._nextDay=!0,t._a[pt]=0),t._d=(t._useUTC?Nt:function(t,e,i,n,a,r,o){var s=new Date(t,e,i,n,a,r,o);return t<100&&0<=t&&isFinite(s.getFullYear())&&s.setFullYear(t),s}).apply(null,o),a=t._useUTC?t._d.getUTCDay():t._d.getDay(),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[pt]=24),t._w&&void 0!==t._w.d&&t._w.d!==a&&(x(t).weekdayMismatch=!0)}}var ce=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,fe=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ge=/Z|[+-]\d\d(?::?\d\d)?/,me=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],pe=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],ve=/^\/?Date\((\-?\d+)/i;function ye(t){var e,i,n,a,r,o,s=t._i,l=ce.exec(s)||fe.exec(s);if(l){for(x(t).iso=!0,e=0,i=me.length;e<i;e++)if(me[e][1].exec(l[1])){a=me[e][0],n=!1!==me[e][2];break}if(null==a)return void(t._isValid=!1);if(l[3]){for(e=0,i=pe.length;e<i;e++)if(pe[e][1].exec(l[3])){r=(l[2]||" ")+pe[e][0];break}if(null==r)return void(t._isValid=!1)}if(!n&&null!=r)return void(t._isValid=!1);if(l[4]){if(!ge.exec(l[4]))return void(t._isValid=!1);o="Z"}t._f=a+(r||"")+(o||""),ke(t)}else t._isValid=!1}var be=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;var xe={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function _e(t){var e,i,n,a,r,o,s,l,u,d,h,c=be.exec(t._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim());if(c){var f=(a=c[4],r=c[3],o=c[2],s=c[5],l=c[6],u=c[7],h=[(d=parseInt(a,10),d<=49?2e3+d:d<=999?1900+d:d),At.indexOf(r),parseInt(o,10),parseInt(s,10),parseInt(l,10)],u&&h.push(parseInt(u,10)),h);if(i=f,n=t,(e=c[1])&&jt.indexOf(e)!==new Date(i[0],i[1],i[2]).getDay()&&(x(n).weekdayMismatch=!0,n._isValid=!1,1))return;t._a=f,t._tzm=function(t,e,i){if(t)return xe[t];if(e)return 0;var n=parseInt(i,10),a=n%100;return(n-a)/100*60+a}(c[8],c[9],c[10]),t._d=Nt.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),x(t).rfc2822=!0}else t._isValid=!1}function ke(t){if(t._f!==y.ISO_8601)if(t._f!==y.RFC_2822){t._a=[],x(t).empty=!0;var e,i,n,a,r,o,s,l,u=""+t._i,d=u.length,h=0;for(n=j(t._f,t._locale).match(N)||[],e=0;e<n.length;e++)a=n[e],(i=(u.match((p=a,v=t,b(st,p)?st[p](v._strict,v._locale):new RegExp(ut(p.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,i,n,a){return e||i||n||a})))))||[])[0])&&(0<(r=u.substr(0,u.indexOf(i))).length&&x(t).unusedInput.push(r),u=u.slice(u.indexOf(i)+i.length),h+=i.length),V[a]?(i?x(t).empty=!1:x(t).unusedTokens.push(a),o=a,l=t,null!=(s=i)&&b(dt,o)&&dt[o](s,l._a,l,o)):t._strict&&!i&&x(t).unusedTokens.push(a);x(t).charsLeftOver=d-h,0<u.length&&x(t).unusedInput.push(u),t._a[pt]<=12&&!0===x(t).bigHour&&0<t._a[pt]&&(x(t).bigHour=void 0),x(t).parsedDateParts=t._a.slice(0),x(t).meridiem=t._meridiem,t._a[pt]=(c=t._locale,f=t._a[pt],null==(g=t._meridiem)?f:null!=c.meridiemHour?c.meridiemHour(f,g):(null!=c.isPM&&((m=c.isPM(g))&&f<12&&(f+=12),m||12!==f||(f=0)),f)),he(t),ue(t)}else _e(t);else ye(t);var c,f,g,m,p,v}function we(t){var e,i,n,a,r=t._i,o=t._f;return t._locale=t._locale||le(t._l),null===r||void 0===o&&""===r?p({nullInput:!0}):("string"==typeof r&&(t._i=r=t._locale.preparse(r)),k(r)?new _(ue(r)):(h(r)?t._d=r:s(o)?function(t){var e,i,n,a,r;if(0===t._f.length)return x(t).invalidFormat=!0,t._d=new Date(NaN);for(a=0;a<t._f.length;a++)r=0,e=v({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[a],ke(e),m(e)&&(r+=x(e).charsLeftOver,r+=10*x(e).unusedTokens.length,x(e).score=r,(null==n||r<n)&&(n=r,i=e));f(t,i||e)}(t):o?ke(t):u(i=(e=t)._i)?e._d=new Date(y.now()):h(i)?e._d=new Date(i.valueOf()):"string"==typeof i?(n=e,null===(a=ve.exec(n._i))?(ye(n),!1===n._isValid&&(delete n._isValid,_e(n),!1===n._isValid&&(delete n._isValid,y.createFromInputFallback(n)))):n._d=new Date(+a[1])):s(i)?(e._a=c(i.slice(0),function(t){return parseInt(t,10)}),he(e)):l(i)?function(t){if(!t._d){var e=R(t._i);t._a=c([e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],function(t){return t&&parseInt(t,10)}),he(t)}}(e):d(i)?e._d=new Date(i):y.createFromInputFallback(e),m(t)||(t._d=null),t))}function Me(t,e,i,n,a){var r,o={};return!0!==i&&!1!==i||(n=i,i=void 0),(l(t)&&function(t){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(t).length;var e;for(e in t)if(t.hasOwnProperty(e))return!1;return!0}(t)||s(t)&&0===t.length)&&(t=void 0),o._isAMomentObject=!0,o._useUTC=o._isUTC=a,o._l=i,o._i=t,o._f=e,o._strict=n,(r=new _(ue(we(o))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Se(t,e,i,n){return Me(t,e,i,n,!1)}y.createFromInputFallback=i("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),y.ISO_8601=function(){},y.RFC_2822=function(){};var De=i("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=Se.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:p()}),Ce=i("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=Se.apply(null,arguments);return this.isValid()&&t.isValid()?this<t?this:t:p()});function Pe(t,e){var i,n;if(1===e.length&&s(e[0])&&(e=e[0]),!e.length)return Se();for(i=e[0],n=1;n<e.length;++n)e[n].isValid()&&!e[n][t](i)||(i=e[n]);return i}var Te=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Oe(t){var e=R(t),i=e.year||0,n=e.quarter||0,a=e.month||0,r=e.week||0,o=e.day||0,s=e.hour||0,l=e.minute||0,u=e.second||0,d=e.millisecond||0;this._isValid=function(t){for(var e in t)if(-1===Mt.call(Te,e)||null!=t[e]&&isNaN(t[e]))return!1;for(var i=!1,n=0;n<Te.length;++n)if(t[Te[n]]){if(i)return!1;parseFloat(t[Te[n]])!==M(t[Te[n]])&&(i=!0)}return!0}(e),this._milliseconds=+d+1e3*u+6e4*l+1e3*s*60*60,this._days=+o+7*r,this._months=+a+3*n+12*i,this._data={},this._locale=le(),this._bubble()}function Ie(t){return t instanceof Oe}function Ae(t){return t<0?-1*Math.round(-1*t):Math.round(t)}function Fe(t,i){B(t,0,0,function(){var t=this.utcOffset(),e="+";return t<0&&(t=-t,e="-"),e+Y(~~(t/60),2)+i+Y(~~t%60,2)})}Fe("Z",":"),Fe("ZZ",""),lt("Z",rt),lt("ZZ",rt),ht(["Z","ZZ"],function(t,e,i){i._useUTC=!0,i._tzm=Le(rt,t)});var Re=/([\+\-]|\d\d)/gi;function Le(t,e){var i=(e||"").match(t);if(null===i)return null;var n=((i[i.length-1]||[])+"").match(Re)||["-",0,0],a=60*n[1]+M(n[2]);return 0===a?0:"+"===n[0]?a:-a}function We(t,e){var i,n;return e._isUTC?(i=e.clone(),n=(k(t)||h(t)?t.valueOf():Se(t).valueOf())-i.valueOf(),i._d.setTime(i._d.valueOf()+n),y.updateOffset(i,!1),i):Se(t).local()}function Ye(t){return 15*-Math.round(t._d.getTimezoneOffset()/15)}function Ne(){return!!this.isValid()&&this._isUTC&&0===this._offset}y.updateOffset=function(){};var ze=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,He=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Ve(t,e){var i,n,a,r,o,s,l=t,u=null;return Ie(t)?l={ms:t._milliseconds,d:t._days,M:t._months}:d(t)?(l={},e?l[e]=t:l.milliseconds=t):(u=ze.exec(t))?(i="-"===u[1]?-1:1,l={y:0,d:M(u[mt])*i,h:M(u[pt])*i,m:M(u[vt])*i,s:M(u[yt])*i,ms:M(Ae(1e3*u[bt]))*i}):(u=He.exec(t))?(i="-"===u[1]?-1:(u[1],1),l={y:Be(u[2],i),M:Be(u[3],i),w:Be(u[4],i),d:Be(u[5],i),h:Be(u[6],i),m:Be(u[7],i),s:Be(u[8],i)}):null==l?l={}:"object"==typeof l&&("from"in l||"to"in l)&&(r=Se(l.from),o=Se(l.to),a=r.isValid()&&o.isValid()?(o=We(o,r),r.isBefore(o)?s=Ee(r,o):((s=Ee(o,r)).milliseconds=-s.milliseconds,s.months=-s.months),s):{milliseconds:0,months:0},(l={}).ms=a.milliseconds,l.M=a.months),n=new Oe(l),Ie(t)&&b(t,"_locale")&&(n._locale=t._locale),n}function Be(t,e){var i=t&&parseFloat(t.replace(",","."));return(isNaN(i)?0:i)*e}function Ee(t,e){var i={milliseconds:0,months:0};return i.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(i.months,"M").isAfter(e)&&--i.months,i.milliseconds=+e-+t.clone().add(i.months,"M"),i}function je(n,a){return function(t,e){var i;return null===e||isNaN(+e)||(C(a,"moment()."+a+"(period, number) is deprecated. Please use moment()."+a+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=t,t=e,e=i),Ue(this,Ve(t="string"==typeof t?+t:t,e),n),this}}function Ue(t,e,i,n){var a=e._milliseconds,r=Ae(e._days),o=Ae(e._months);t.isValid()&&(n=null==n||n,o&&Ft(t,Ct(t,"Month")+o*i),r&&Pt(t,"Date",Ct(t,"Date")+r*i),a&&t._d.setTime(t._d.valueOf()+a*i),n&&y.updateOffset(t,r||o))}Ve.fn=Oe.prototype,Ve.invalid=function(){return Ve(NaN)};var qe=je(1,"add"),Ge=je(-1,"subtract");function Ze(t,e){var i=12*(e.year()-t.year())+(e.month()-t.month()),n=t.clone().add(i,"months");return-(i+(e-n<0?(e-n)/(n-t.clone().add(i-1,"months")):(e-n)/(t.clone().add(i+1,"months")-n)))||0}function Xe(t){var e;return void 0===t?this._locale._abbr:(null!=(e=le(t))&&(this._locale=e),this)}y.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",y.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Je=i("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return void 0===t?this.localeData():this.locale(t)});function Ke(){return this._locale}function $e(t,e){B(0,[t,t.length],0,e)}function Qe(t,e,i,n,a){var r;return null==t?Vt(this,n,a).year:(e>(r=Bt(t,n,a))&&(e=r),function(t,e,i,n,a){var r=Ht(t,e,i,n,a),o=Nt(r.year,0,r.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}.call(this,t,e,i,n,a))}B(0,["gg",2],0,function(){return this.weekYear()%100}),B(0,["GG",2],0,function(){return this.isoWeekYear()%100}),$e("gggg","weekYear"),$e("ggggg","weekYear"),$e("GGGG","isoWeekYear"),$e("GGGGG","isoWeekYear"),A("weekYear","gg"),A("isoWeekYear","GG"),W("weekYear",1),W("isoWeekYear",1),lt("G",nt),lt("g",nt),lt("GG",J,q),lt("gg",J,q),lt("GGGG",tt,Z),lt("gggg",tt,Z),lt("GGGGG",et,X),lt("ggggg",et,X),ct(["gggg","ggggg","GGGG","GGGGG"],function(t,e,i,n){e[n.substr(0,2)]=M(t)}),ct(["gg","GG"],function(t,e,i,n){e[n]=y.parseTwoDigitYear(t)}),B("Q",0,"Qo","quarter"),A("quarter","Q"),W("quarter",7),lt("Q",U),ht("Q",function(t,e){e[gt]=3*(M(t)-1)}),B("D",["DD",2],"Do","date"),A("date","D"),W("date",9),lt("D",J),lt("DD",J,q),lt("Do",function(t,e){return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient}),ht(["D","DD"],mt),ht("Do",function(t,e){e[mt]=M(t.match(J)[0])});var ti=Dt("Date",!0);B("DDD",["DDDD",3],"DDDo","dayOfYear"),A("dayOfYear","DDD"),W("dayOfYear",4),lt("DDD",Q),lt("DDDD",G),ht(["DDD","DDDD"],function(t,e,i){i._dayOfYear=M(t)}),B("m",["mm",2],0,"minute"),A("minute","m"),W("minute",14),lt("m",J),lt("mm",J,q),ht(["m","mm"],vt);var ei=Dt("Minutes",!1);B("s",["ss",2],0,"second"),A("second","s"),W("second",15),lt("s",J),lt("ss",J,q),ht(["s","ss"],yt);var ii,ni=Dt("Seconds",!1);for(B("S",0,0,function(){return~~(this.millisecond()/100)}),B(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),B(0,["SSS",3],0,"millisecond"),B(0,["SSSS",4],0,function(){return 10*this.millisecond()}),B(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),B(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),B(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),B(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),B(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),A("millisecond","ms"),W("millisecond",16),lt("S",Q,U),lt("SS",Q,q),lt("SSS",Q,G),ii="SSSS";ii.length<=9;ii+="S")lt(ii,it);function ai(t,e){e[bt]=M(1e3*("0."+t))}for(ii="S";ii.length<=9;ii+="S")ht(ii,ai);var ri=Dt("Milliseconds",!1);B("z",0,0,"zoneAbbr"),B("zz",0,0,"zoneName");var oi=_.prototype;function si(t){return t}oi.add=qe,oi.calendar=function(t,e){var i=t||Se(),n=We(i,this).startOf("day"),a=y.calendarFormat(this,n)||"sameElse",r=e&&(P(e[a])?e[a].call(this,i):e[a]);return this.format(r||this.localeData().calendar(a,this,Se(i)))},oi.clone=function(){return new _(this)},oi.diff=function(t,e,i){var n,a,r;if(!this.isValid())return NaN;if(!(n=We(t,this)).isValid())return NaN;switch(a=6e4*(n.utcOffset()-this.utcOffset()),e=F(e)){case"year":r=Ze(this,n)/12;break;case"month":r=Ze(this,n);break;case"quarter":r=Ze(this,n)/3;break;case"second":r=(this-n)/1e3;break;case"minute":r=(this-n)/6e4;break;case"hour":r=(this-n)/36e5;break;case"day":r=(this-n-a)/864e5;break;case"week":r=(this-n-a)/6048e5;break;default:r=this-n}return i?r:w(r)},oi.endOf=function(t){return void 0===(t=F(t))||"millisecond"===t?this:("date"===t&&(t="day"),this.startOf(t).add(1,"isoWeek"===t?"week":t).subtract(1,"ms"))},oi.format=function(t){t||(t=this.isUtc()?y.defaultFormatUtc:y.defaultFormat);var e=E(this,t);return this.localeData().postformat(e)},oi.from=function(t,e){return this.isValid()&&(k(t)&&t.isValid()||Se(t).isValid())?Ve({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()},oi.fromNow=function(t){return this.from(Se(),t)},oi.to=function(t,e){return this.isValid()&&(k(t)&&t.isValid()||Se(t).isValid())?Ve({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()},oi.toNow=function(t){return this.to(Se(),t)},oi.get=function(t){return P(this[t=F(t)])?this[t]():this},oi.invalidAt=function(){return x(this).overflow},oi.isAfter=function(t,e){var i=k(t)?t:Se(t);return!(!this.isValid()||!i.isValid())&&("millisecond"===(e=F(u(e)?"millisecond":e))?this.valueOf()>i.valueOf():i.valueOf()<this.clone().startOf(e).valueOf())},oi.isBefore=function(t,e){var i=k(t)?t:Se(t);return!(!this.isValid()||!i.isValid())&&("millisecond"===(e=F(u(e)?"millisecond":e))?this.valueOf()<i.valueOf():this.clone().endOf(e).valueOf()<i.valueOf())},oi.isBetween=function(t,e,i,n){return("("===(n=n||"()")[0]?this.isAfter(t,i):!this.isBefore(t,i))&&(")"===n[1]?this.isBefore(e,i):!this.isAfter(e,i))},oi.isSame=function(t,e){var i,n=k(t)?t:Se(t);return!(!this.isValid()||!n.isValid())&&("millisecond"===(e=F(e||"millisecond"))?this.valueOf()===n.valueOf():(i=n.valueOf(),this.clone().startOf(e).valueOf()<=i&&i<=this.clone().endOf(e).valueOf()))},oi.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)},oi.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)},oi.isValid=function(){return m(this)},oi.lang=Je,oi.locale=Xe,oi.localeData=Ke,oi.max=Ce,oi.min=De,oi.parsingFlags=function(){return f({},x(this))},oi.set=function(t,e){if("object"==typeof t)for(var i=function(t){var e=[];for(var i in t)e.push({unit:i,priority:L[i]});return e.sort(function(t,e){return t.priority-e.priority}),e}(t=R(t)),n=0;n<i.length;n++)this[i[n].unit](t[i[n].unit]);else if(P(this[t=F(t)]))return this[t](e);return this},oi.startOf=function(t){switch(t=F(t)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),"isoWeek"===t&&this.isoWeekday(1),"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this},oi.subtract=Ge,oi.toArray=function(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]},oi.toObject=function(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}},oi.toDate=function(){return new Date(this.valueOf())},oi.toISOString=function(t){if(!this.isValid())return null;var e=!0!==t,i=e?this.clone().utc():this;return i.year()<0||9999<i.year()?E(i,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):P(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this._d.valueOf()).toISOString().replace("Z",E(i,"Z")):E(i,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},oi.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="";this.isLocal()||(t=0===this.utcOffset()?"moment.utc":"moment.parseZone",e="Z");var i="["+t+'("]',n=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a=e+'[")]';return this.format(i+n+"-MM-DD[T]HH:mm:ss.SSS"+a)},oi.toJSON=function(){return this.isValid()?this.toISOString():null},oi.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},oi.unix=function(){return Math.floor(this.valueOf()/1e3)},oi.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},oi.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},oi.year=St,oi.isLeapYear=function(){return wt(this.year())},oi.weekYear=function(t){return Qe.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},oi.isoWeekYear=function(t){return Qe.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)},oi.quarter=oi.quarters=function(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)},oi.month=Rt,oi.daysInMonth=function(){return Tt(this.year(),this.month())},oi.week=oi.weeks=function(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")},oi.isoWeek=oi.isoWeeks=function(t){var e=Vt(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")},oi.weeksInYear=function(){var t=this.localeData()._week;return Bt(this.year(),t.dow,t.doy)},oi.isoWeeksInYear=function(){return Bt(this.year(),1,4)},oi.date=ti,oi.day=oi.days=function(t){if(!this.isValid())return null!=t?this:NaN;var e,i,n=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(e=t,i=this.localeData(),t="string"!=typeof e?e:isNaN(e)?"number"==typeof(e=i.weekdaysParse(e))?e:null:parseInt(e,10),this.add(t-n,"d")):n},oi.weekday=function(t){if(!this.isValid())return null!=t?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")},oi.isoWeekday=function(t){if(!this.isValid())return null!=t?this:NaN;if(null!=t){var e=(i=t,n=this.localeData(),"string"==typeof i?n.weekdaysParse(i)%7||7:isNaN(i)?null:i);return this.day(this.day()%7?e:e-7)}return this.day()||7;var i,n},oi.dayOfYear=function(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")},oi.hour=oi.hours=te,oi.minute=oi.minutes=ei,oi.second=oi.seconds=ni,oi.millisecond=oi.milliseconds=ri,oi.utcOffset=function(t,e,i){var n,a=this._offset||0;if(!this.isValid())return null!=t?this:NaN;if(null!=t){if("string"==typeof t){if(null===(t=Le(rt,t)))return this}else Math.abs(t)<16&&!i&&(t*=60);return!this._isUTC&&e&&(n=Ye(this)),this._offset=t,this._isUTC=!0,null!=n&&this.add(n,"m"),a!==t&&(!e||this._changeInProgress?Ue(this,Ve(t-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,y.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?a:Ye(this)},oi.utc=function(t){return this.utcOffset(0,t)},oi.local=function(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Ye(this),"m")),this},oi.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var t=Le(at,this._i);null!=t?this.utcOffset(t):this.utcOffset(0,!0)}return this},oi.hasAlignedHourOffset=function(t){return!!this.isValid()&&(t=t?Se(t).utcOffset():0,(this.utcOffset()-t)%60==0)},oi.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},oi.isLocal=function(){return!!this.isValid()&&!this._isUTC},oi.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},oi.isUtc=Ne,oi.isUTC=Ne,oi.zoneAbbr=function(){return this._isUTC?"UTC":""},oi.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},oi.dates=i("dates accessor is deprecated. Use date instead.",ti),oi.months=i("months accessor is deprecated. Use month instead",Rt),oi.years=i("years accessor is deprecated. Use year instead",St),oi.zone=i("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}),oi.isDSTShifted=i("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!u(this._isDSTShifted))return this._isDSTShifted;var t={};if(v(t,this),(t=we(t))._a){var e=t._isUTC?g(t._a):Se(t._a);this._isDSTShifted=this.isValid()&&0<o(t._a,e.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var li=O.prototype;function ui(t,e,i,n){var a=le(),r=g().set(n,e);return a[i](r,t)}function di(t,e,i){if(d(t)&&(e=t,t=void 0),t=t||"",null!=e)return ui(t,e,i,"month");var n,a=[];for(n=0;n<12;n++)a[n]=ui(t,n,i,"month");return a}function hi(t,e,i,n){"boolean"==typeof t||(i=e=t,t=!1),d(e)&&(i=e,e=void 0),e=e||"";var a,r=le(),o=t?r._week.dow:0;if(null!=i)return ui(e,(i+o)%7,n,"day");var s=[];for(a=0;a<7;a++)s[a]=ui(e,(a+o)%7,n,"day");return s}li.calendar=function(t,e,i){var n=this._calendar[t]||this._calendar.sameElse;return P(n)?n.call(e,i):n},li.longDateFormat=function(t){var e=this._longDateFormat[t],i=this._longDateFormat[t.toUpperCase()];return e||!i?e:(this._longDateFormat[t]=i.replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t])},li.invalidDate=function(){return this._invalidDate},li.ordinal=function(t){return this._ordinal.replace("%d",t)},li.preparse=si,li.postformat=si,li.relativeTime=function(t,e,i,n){var a=this._relativeTime[i];return P(a)?a(t,e,i,n):a.replace(/%d/i,t)},li.pastFuture=function(t,e){var i=this._relativeTime[0<t?"future":"past"];return P(i)?i(e):i.replace(/%s/i,e)},li.set=function(t){var e,i;for(i in t)P(e=t[i])?this[i]=e:this["_"+i]=e;this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},li.months=function(t,e){return t?s(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||Ot).test(e)?"format":"standalone"][t.month()]:s(this._months)?this._months:this._months.standalone},li.monthsShort=function(t,e){return t?s(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[Ot.test(e)?"format":"standalone"][t.month()]:s(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},li.monthsParse=function(t,e,i){var n,a,r;if(this._monthsParseExact)return function(t,e,i){var n,a,r,o=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],n=0;n<12;++n)r=g([2e3,n]),this._shortMonthsParse[n]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[n]=this.months(r,"").toLocaleLowerCase();return i?"MMM"===e?-1!==(a=Mt.call(this._shortMonthsParse,o))?a:null:-1!==(a=Mt.call(this._longMonthsParse,o))?a:null:"MMM"===e?-1!==(a=Mt.call(this._shortMonthsParse,o))?a:-1!==(a=Mt.call(this._longMonthsParse,o))?a:null:-1!==(a=Mt.call(this._longMonthsParse,o))?a:-1!==(a=Mt.call(this._shortMonthsParse,o))?a:null}.call(this,t,e,i);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),n=0;n<12;n++){if(a=g([2e3,n]),i&&!this._longMonthsParse[n]&&(this._longMonthsParse[n]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[n]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),i||this._monthsParse[n]||(r="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[n]=new RegExp(r.replace(".",""),"i")),i&&"MMMM"===e&&this._longMonthsParse[n].test(t))return n;if(i&&"MMM"===e&&this._shortMonthsParse[n].test(t))return n;if(!i&&this._monthsParse[n].test(t))return n}},li.monthsRegex=function(t){return this._monthsParseExact?(b(this,"_monthsRegex")||Yt.call(this),t?this._monthsStrictRegex:this._monthsRegex):(b(this,"_monthsRegex")||(this._monthsRegex=Wt),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)},li.monthsShortRegex=function(t){return this._monthsParseExact?(b(this,"_monthsRegex")||Yt.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(b(this,"_monthsShortRegex")||(this._monthsShortRegex=Lt),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)},li.week=function(t){return Vt(t,this._week.dow,this._week.doy).week},li.firstDayOfYear=function(){return this._week.doy},li.firstDayOfWeek=function(){return this._week.dow},li.weekdays=function(t,e){return t?s(this._weekdays)?this._weekdays[t.day()]:this._weekdays[this._weekdays.isFormat.test(e)?"format":"standalone"][t.day()]:s(this._weekdays)?this._weekdays:this._weekdays.standalone},li.weekdaysMin=function(t){return t?this._weekdaysMin[t.day()]:this._weekdaysMin},li.weekdaysShort=function(t){return t?this._weekdaysShort[t.day()]:this._weekdaysShort},li.weekdaysParse=function(t,e,i){var n,a,r;if(this._weekdaysParseExact)return function(t,e,i){var n,a,r,o=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],n=0;n<7;++n)r=g([2e3,1]).day(n),this._minWeekdaysParse[n]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[n]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[n]=this.weekdays(r,"").toLocaleLowerCase();return i?"dddd"===e?-1!==(a=Mt.call(this._weekdaysParse,o))?a:null:"ddd"===e?-1!==(a=Mt.call(this._shortWeekdaysParse,o))?a:null:-1!==(a=Mt.call(this._minWeekdaysParse,o))?a:null:"dddd"===e?-1!==(a=Mt.call(this._weekdaysParse,o))?a:-1!==(a=Mt.call(this._shortWeekdaysParse,o))?a:-1!==(a=Mt.call(this._minWeekdaysParse,o))?a:null:"ddd"===e?-1!==(a=Mt.call(this._shortWeekdaysParse,o))?a:-1!==(a=Mt.call(this._weekdaysParse,o))?a:-1!==(a=Mt.call(this._minWeekdaysParse,o))?a:null:-1!==(a=Mt.call(this._minWeekdaysParse,o))?a:-1!==(a=Mt.call(this._weekdaysParse,o))?a:-1!==(a=Mt.call(this._shortWeekdaysParse,o))?a:null}.call(this,t,e,i);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),n=0;n<7;n++){if(a=g([2e3,1]).day(n),i&&!this._fullWeekdaysParse[n]&&(this._fullWeekdaysParse[n]=new RegExp("^"+this.weekdays(a,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[n]=new RegExp("^"+this.weekdaysShort(a,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[n]=new RegExp("^"+this.weekdaysMin(a,"").replace(".",".?")+"$","i")),this._weekdaysParse[n]||(r="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[n]=new RegExp(r.replace(".",""),"i")),i&&"dddd"===e&&this._fullWeekdaysParse[n].test(t))return n;if(i&&"ddd"===e&&this._shortWeekdaysParse[n].test(t))return n;if(i&&"dd"===e&&this._minWeekdaysParse[n].test(t))return n;if(!i&&this._weekdaysParse[n].test(t))return n}},li.weekdaysRegex=function(t){return this._weekdaysParseExact?(b(this,"_weekdaysRegex")||Xt.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(b(this,"_weekdaysRegex")||(this._weekdaysRegex=qt),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)},li.weekdaysShortRegex=function(t){return this._weekdaysParseExact?(b(this,"_weekdaysRegex")||Xt.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(b(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Gt),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},li.weekdaysMinRegex=function(t){return this._weekdaysParseExact?(b(this,"_weekdaysRegex")||Xt.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(b(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Zt),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},li.isPM=function(t){return"p"===(t+"").toLowerCase().charAt(0)},li.meridiem=function(t,e,i){return 11<t?i?"pm":"PM":i?"am":"AM"},oe("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10;return t+(1===M(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th")}}),y.lang=i("moment.lang is deprecated. Use moment.locale instead.",oe),y.langData=i("moment.langData is deprecated. Use moment.localeData instead.",le);var ci=Math.abs;function fi(t,e,i,n){var a=Ve(e,i);return t._milliseconds+=n*a._milliseconds,t._days+=n*a._days,t._months+=n*a._months,t._bubble()}function gi(t){return t<0?Math.floor(t):Math.ceil(t)}function mi(t){return 4800*t/146097}function pi(t){return 146097*t/4800}function vi(t){return function(){return this.as(t)}}var yi=vi("ms"),bi=vi("s"),xi=vi("m"),_i=vi("h"),ki=vi("d"),wi=vi("w"),Mi=vi("M"),Si=vi("y");function Di(t){return function(){return this.isValid()?this._data[t]:NaN}}var Ci=Di("milliseconds"),Pi=Di("seconds"),Ti=Di("minutes"),Oi=Di("hours"),Ii=Di("days"),Ai=Di("months"),Fi=Di("years"),Ri=Math.round,Li={ss:44,s:45,m:45,h:22,d:26,M:11},Wi=Math.abs;function Yi(t){return(0<t)-(t<0)||+t}function Ni(){if(!this.isValid())return this.localeData().invalidDate();var t,e,i=Wi(this._milliseconds)/1e3,n=Wi(this._days),a=Wi(this._months);e=w((t=w(i/60))/60),i%=60,t%=60;var r=w(a/12),o=a%=12,s=n,l=e,u=t,d=i?i.toFixed(3).replace(/\.?0+$/,""):"",h=this.asSeconds();if(!h)return"P0D";var c=h<0?"-":"",f=Yi(this._months)!==Yi(h)?"-":"",g=Yi(this._days)!==Yi(h)?"-":"",m=Yi(this._milliseconds)!==Yi(h)?"-":"";return c+"P"+(r?f+r+"Y":"")+(o?f+o+"M":"")+(s?g+s+"D":"")+(l||u||d?"T":"")+(l?m+l+"H":"")+(u?m+u+"M":"")+(d?m+d+"S":"")}var zi=Oe.prototype;return zi.isValid=function(){return this._isValid},zi.abs=function(){var t=this._data;return this._milliseconds=ci(this._milliseconds),this._days=ci(this._days),this._months=ci(this._months),t.milliseconds=ci(t.milliseconds),t.seconds=ci(t.seconds),t.minutes=ci(t.minutes),t.hours=ci(t.hours),t.months=ci(t.months),t.years=ci(t.years),this},zi.add=function(t,e){return fi(this,t,e,1)},zi.subtract=function(t,e){return fi(this,t,e,-1)},zi.as=function(t){if(!this.isValid())return NaN;var e,i,n=this._milliseconds;if("month"===(t=F(t))||"year"===t)return e=this._days+n/864e5,i=this._months+mi(e),"month"===t?i:i/12;switch(e=this._days+Math.round(pi(this._months)),t){case"week":return e/7+n/6048e5;case"day":return e+n/864e5;case"hour":return 24*e+n/36e5;case"minute":return 1440*e+n/6e4;case"second":return 86400*e+n/1e3;case"millisecond":return Math.floor(864e5*e)+n;default:throw new Error("Unknown unit "+t)}},zi.asMilliseconds=yi,zi.asSeconds=bi,zi.asMinutes=xi,zi.asHours=_i,zi.asDays=ki,zi.asWeeks=wi,zi.asMonths=Mi,zi.asYears=Si,zi.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*M(this._months/12):NaN},zi._bubble=function(){var t,e,i,n,a,r=this._milliseconds,o=this._days,s=this._months,l=this._data;return 0<=r&&0<=o&&0<=s||r<=0&&o<=0&&s<=0||(r+=864e5*gi(pi(s)+o),s=o=0),l.milliseconds=r%1e3,t=w(r/1e3),l.seconds=t%60,e=w(t/60),l.minutes=e%60,i=w(e/60),l.hours=i%24,s+=a=w(mi(o+=w(i/24))),o-=gi(pi(a)),n=w(s/12),s%=12,l.days=o,l.months=s,l.years=n,this},zi.clone=function(){return Ve(this)},zi.get=function(t){return t=F(t),this.isValid()?this[t+"s"]():NaN},zi.milliseconds=Ci,zi.seconds=Pi,zi.minutes=Ti,zi.hours=Oi,zi.days=Ii,zi.weeks=function(){return w(this.days()/7)},zi.months=Ai,zi.years=Fi,zi.humanize=function(t){if(!this.isValid())return this.localeData().invalidDate();var e,i,n,a,r,o,s,l,u,d,h=this.localeData(),c=(e=!t,i=h,n=Ve(this).abs(),a=Ri(n.as("s")),r=Ri(n.as("m")),o=Ri(n.as("h")),s=Ri(n.as("d")),l=Ri(n.as("M")),u=Ri(n.as("y")),(d=a<=Li.ss&&["s",a]||a<Li.s&&["ss",a]||r<=1&&["m"]||r<Li.m&&["mm",r]||o<=1&&["h"]||o<Li.h&&["hh",o]||s<=1&&["d"]||s<Li.d&&["dd",s]||l<=1&&["M"]||l<Li.M&&["MM",l]||u<=1&&["y"]||["yy",u])[2]=e,d[3]=0<+this,d[4]=i,function(t,e,i,n,a){return a.relativeTime(e||1,!!i,t,n)}.apply(null,d));return t&&(c=h.pastFuture(+this,c)),h.postformat(c)},zi.toISOString=Ni,zi.toString=Ni,zi.toJSON=Ni,zi.locale=Xe,zi.localeData=Ke,zi.toIsoString=i("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Ni),zi.lang=Je,B("X",0,0,"unix"),B("x",0,0,"valueOf"),lt("x",nt),lt("X",/[+-]?\d+(\.\d{1,3})?/),ht("X",function(t,e,i){i._d=new Date(1e3*parseFloat(t,10))}),ht("x",function(t,e,i){i._d=new Date(M(t))}),y.version="2.20.1",t=Se,y.fn=oi,y.min=function(){return Pe("isBefore",[].slice.call(arguments,0))},y.max=function(){return Pe("isAfter",[].slice.call(arguments,0))},y.now=function(){return Date.now?Date.now():+new Date},y.utc=g,y.unix=function(t){return Se(1e3*t)},y.months=function(t,e){return di(t,e,"months")},y.isDate=h,y.locale=oe,y.invalid=p,y.duration=Ve,y.isMoment=k,y.weekdays=function(t,e,i){return hi(t,e,i,"weekdays")},y.parseZone=function(){return Se.apply(null,arguments).parseZone()},y.localeData=le,y.isDuration=Ie,y.monthsShort=function(t,e){return di(t,e,"monthsShort")},y.weekdaysMin=function(t,e,i){return hi(t,e,i,"weekdaysMin")},y.defineLocale=se,y.updateLocale=function(t,e){if(null!=e){var i,n,a=ee;null!=(n=re(t))&&(a=n._config),(i=new O(e=T(a,e))).parentLocale=ie[t],ie[t]=i,oe(t)}else null!=ie[t]&&(null!=ie[t].parentLocale?ie[t]=ie[t].parentLocale:null!=ie[t]&&delete ie[t]);return ie[t]},y.locales=function(){return n(ie)},y.weekdaysShort=function(t,e,i){return hi(t,e,i,"weekdaysShort")},y.normalizeUnits=F,y.relativeTimeRounding=function(t){return void 0===t?Ri:"function"==typeof t&&(Ri=t,!0)},y.relativeTimeThreshold=function(t,e){return void 0!==Li[t]&&(void 0===e?Li[t]:(Li[t]=e,"s"===t&&(Li.ss=e-1),!0))},y.calendarFormat=function(t,e){var i=t.diff(e,"days",!0);return i<-6?"sameElse":i<-1?"lastWeek":i<0?"lastDay":i<1?"sameDay":i<2?"nextDay":i<7?"nextWeek":"sameElse"},y.prototype=oi,y.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"YYYY-[W]WW",MONTH:"YYYY-MM"},y},"object"==typeof t&&void 0!==Vi?Vi.exports=e():this.moment=e()},{}],7:[function(t,e,i){var n=t(29)();n.helpers=t(45),t(27)(n),n.defaults=t(25),n.Element=t(26),n.elements=t(40),n.Interaction=t(28),n.layouts=t(30),n.platform=t(48),n.plugins=t(31),n.Ticks=t(34),t(22)(n),t(23)(n),t(24)(n),t(33)(n),t(32)(n),t(35)(n),t(55)(n),t(53)(n),t(54)(n),t(56)(n),t(57)(n),t(58)(n),t(15)(n),t(16)(n),t(17)(n),t(18)(n),t(19)(n),t(20)(n),t(21)(n),t(8)(n),t(9)(n),t(10)(n),t(11)(n),t(12)(n),t(13)(n),t(14)(n);var a=t(49);for(var r in a)a.hasOwnProperty(r)&&n.plugins.register(a[r]);n.platform.initialize(),e.exports=n,"undefined"!=typeof window&&(window.Chart=n),n.Legend=a.legend._element,n.Title=a.title._element,n.pluginService=n.plugins,n.PluginBase=n.Element.extend({}),n.canvasHelpers=n.helpers.canvas,n.layoutService=n.layouts},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,40:40,45:45,48:48,49:49,53:53,54:54,55:55,56:56,57:57,58:58,8:8,9:9}],8:[function(t,e,i){"use strict";e.exports=function(i){i.Bar=function(t,e){return e.type="bar",new i(t,e)}}},{}],9:[function(t,e,i){"use strict";e.exports=function(i){i.Bubble=function(t,e){return e.type="bubble",new i(t,e)}}},{}],10:[function(t,e,i){"use strict";e.exports=function(i){i.Doughnut=function(t,e){return e.type="doughnut",new i(t,e)}}},{}],11:[function(t,e,i){"use strict";e.exports=function(i){i.Line=function(t,e){return e.type="line",new i(t,e)}}},{}],12:[function(t,e,i){"use strict";e.exports=function(i){i.PolarArea=function(t,e){return e.type="polarArea",new i(t,e)}}},{}],13:[function(t,e,i){"use strict";e.exports=function(i){i.Radar=function(t,e){return e.type="radar",new i(t,e)}}},{}],14:[function(t,e,i){"use strict";e.exports=function(i){i.Scatter=function(t,e){return e.type="scatter",new i(t,e)}}},{}],15:[function(t,e,i){"use strict";var n=t(25),a=t(40),S=t(45);n._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}}),n._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var i="";return 0<t.length&&(t[0].yLabel?i=t[0].yLabel:0<e.labels.length&&t[0].index<e.labels.length&&(i=e.labels[t[0].index])),i},label:function(t,e){return(e.datasets[t.datasetIndex].label||"")+": "+t.xLabel}},mode:"index",axis:"y"}}),e.exports=function(e){e.controllers.bar=e.DatasetController.extend({dataElementType:a.Rectangle,initialize:function(){var t;e.DatasetController.prototype.initialize.apply(this,arguments),(t=this.getMeta()).stack=this.getDataset().stack,t.bar=!0},update:function(t){var e,i,n=this.getMeta().data;for(this._ruler=this.getRuler(),e=0,i=n.length;e<i;++e)this.updateElement(n[e],e,t)},updateElement:function(t,e,i){var n=this,a=n.chart,r=n.getMeta(),o=n.getDataset(),s=t.custom||{},l=a.options.elements.rectangle;t._xScale=n.getScaleForId(r.xAxisID),t._yScale=n.getScaleForId(r.yAxisID),t._datasetIndex=n.index,t._index=e,t._model={datasetLabel:o.label,label:a.data.labels[e],borderSkipped:s.borderSkipped?s.borderSkipped:l.borderSkipped,backgroundColor:s.backgroundColor?s.backgroundColor:S.valueAtIndexOrDefault(o.backgroundColor,e,l.backgroundColor),borderColor:s.borderColor?s.borderColor:S.valueAtIndexOrDefault(o.borderColor,e,l.borderColor),borderWidth:s.borderWidth?s.borderWidth:S.valueAtIndexOrDefault(o.borderWidth,e,l.borderWidth)},n.updateElementGeometry(t,e,i),t.pivot()},updateElementGeometry:function(t,e,i){var n=this,a=t._model,r=n.getValueScale(),o=r.getBasePixel(),s=r.isHorizontal(),l=n._ruler||n.getRuler(),u=n.calculateBarValuePixels(n.index,e),d=n.calculateBarIndexPixels(n.index,e,l);a.horizontal=s,a.base=i?o:u.base,a.x=s?i?o:u.head:d.center,a.y=s?d.center:i?o:u.head,a.height=s?d.size:void 0,a.width=s?void 0:d.size},getValueScaleId:function(){return this.getMeta().yAxisID},getIndexScaleId:function(){return this.getMeta().xAxisID},getValueScale:function(){return this.getScaleForId(this.getValueScaleId())},getIndexScale:function(){return this.getScaleForId(this.getIndexScaleId())},_getStacks:function(t){var e,i,n=this.chart,a=this.getIndexScale().options.stacked,r=void 0===t?n.data.datasets.length:t+1,o=[];for(e=0;e<r;++e)(i=n.getDatasetMeta(e)).bar&&n.isDatasetVisible(e)&&(!1===a||!0===a&&-1===o.indexOf(i.stack)||void 0===a&&(void 0===i.stack||-1===o.indexOf(i.stack)))&&o.push(i.stack);return o},getStackCount:function(){return this._getStacks().length},getStackIndex:function(t,e){var i=this._getStacks(t),n=void 0!==e?i.indexOf(e):-1;return-1===n?i.length-1:n},getRuler:function(){var t,e,i=this.getIndexScale(),n=this.getStackCount(),a=this.index,r=i.isHorizontal(),o=r?i.left:i.top,s=o+(r?i.width:i.height),l=[];for(t=0,e=this.getMeta().data.length;t<e;++t)l.push(i.getPixelForValue(null,t,a));return{min:S.isNullOrUndef(i.options.barThickness)?function(t,e){var i,n,a,r,o=t.isHorizontal()?t.width:t.height,s=t.getTicks();for(a=1,r=e.length;a<r;++a)o=Math.min(o,e[a]-e[a-1]);for(a=0,r=s.length;a<r;++a)n=t.getPixelForTick(a),o=0<a?Math.min(o,n-i):o,i=n;return o}(i,l):-1,pixels:l,start:o,end:s,stackCount:n,scale:i}},calculateBarValuePixels:function(t,e){var i,n,a,r,o,s,l=this.chart,u=this.getMeta(),d=this.getValueScale(),h=l.data.datasets,c=d.getRightValue(h[t].data[e]),f=d.options.stacked,g=u.stack,m=0;if(f||void 0===f&&void 0!==g)for(i=0;i<t;++i)(n=l.getDatasetMeta(i)).bar&&n.stack===g&&n.controller.getValueScaleId()===d.id&&l.isDatasetVisible(i)&&(a=d.getRightValue(h[i].data[e]),(c<0&&a<0||0<=c&&0<a)&&(m+=a));return r=d.getPixelForValue(m),{size:s=((o=d.getPixelForValue(m+c))-r)/2,base:r,head:o,center:o+s/2}},calculateBarIndexPixels:function(t,e,i){var n,a,r,o,s,l,u,d,h,c,f,g,m,p,v,y,b,x=i.scale.options,_="flex"===x.barThickness?(h=e,f=x,p=(m=(c=i).pixels)[h],v=0<h?m[h-1]:null,y=h<m.length-1?m[h+1]:null,b=f.categoryPercentage,null===v&&(v=p-(null===y?c.end-p:y-p)),null===y&&(y=p+p-v),g=p-(p-v)/2*b,{chunk:(y-v)/2*b/c.stackCount,ratio:f.barPercentage,start:g}):(n=e,a=i,l=(r=x).barThickness,u=a.stackCount,d=a.pixels[n],S.isNullOrUndef(l)?(o=a.min*r.categoryPercentage,s=r.barPercentage):(o=l*u,s=1),{chunk:o/u,ratio:s,start:d-o/2}),k=this.getStackIndex(t,this.getMeta().stack),w=_.start+_.chunk*k+_.chunk/2,M=Math.min(S.valueOrDefault(x.maxBarThickness,1/0),_.chunk*_.ratio);return{base:w-M/2,head:w+M/2,center:w,size:M}},draw:function(){var t=this.chart,e=this.getValueScale(),i=this.getMeta().data,n=this.getDataset(),a=i.length,r=0;for(S.canvas.clipArea(t.ctx,t.chartArea);r<a;++r)isNaN(e.getRightValue(n.data[r]))||i[r].draw();S.canvas.unclipArea(t.ctx)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},a=t._model;a.backgroundColor=n.hoverBackgroundColor?n.hoverBackgroundColor:S.valueAtIndexOrDefault(e.hoverBackgroundColor,i,S.getHoverColor(a.backgroundColor)),a.borderColor=n.hoverBorderColor?n.hoverBorderColor:S.valueAtIndexOrDefault(e.hoverBorderColor,i,S.getHoverColor(a.borderColor)),a.borderWidth=n.hoverBorderWidth?n.hoverBorderWidth:S.valueAtIndexOrDefault(e.hoverBorderWidth,i,a.borderWidth)},removeHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},a=t._model,r=this.chart.options.elements.rectangle;a.backgroundColor=n.backgroundColor?n.backgroundColor:S.valueAtIndexOrDefault(e.backgroundColor,i,r.backgroundColor),a.borderColor=n.borderColor?n.borderColor:S.valueAtIndexOrDefault(e.borderColor,i,r.borderColor),a.borderWidth=n.borderWidth?n.borderWidth:S.valueAtIndexOrDefault(e.borderWidth,i,r.borderWidth)}}),e.controllers.horizontalBar=e.controllers.bar.extend({getValueScaleId:function(){return this.getMeta().xAxisID},getIndexScaleId:function(){return this.getMeta().yAxisID}})}},{25:25,40:40,45:45}],16:[function(t,e,i){"use strict";var n=t(25),a=t(40),g=t(45);n._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.datasets[t.datasetIndex].label||"",n=e.datasets[t.datasetIndex].data[t.index];return i+": ("+t.xLabel+", "+t.yLabel+", "+n.r+")"}}}}),e.exports=function(t){t.controllers.bubble=t.DatasetController.extend({dataElementType:a.Point,update:function(i){var n=this,t=n.getMeta().data;g.each(t,function(t,e){n.updateElement(t,e,i)})},updateElement:function(t,e,i){var n=this,a=n.getMeta(),r=t.custom||{},o=n.getScaleForId(a.xAxisID),s=n.getScaleForId(a.yAxisID),l=n._resolveElementOptions(t,e),u=n.getDataset().data[e],d=n.index,h=i?o.getPixelForDecimal(.5):o.getPixelForValue("object"==typeof u?u:NaN,e,d),c=i?s.getBasePixel():s.getPixelForValue(u,e,d);t._xScale=o,t._yScale=s,t._options=l,t._datasetIndex=d,t._index=e,t._model={backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,hitRadius:l.hitRadius,pointStyle:l.pointStyle,radius:i?0:l.radius,skip:r.skip||isNaN(h)||isNaN(c),x:h,y:c},t.pivot()},setHoverStyle:function(t){var e=t._model,i=t._options;e.backgroundColor=g.valueOrDefault(i.hoverBackgroundColor,g.getHoverColor(i.backgroundColor)),e.borderColor=g.valueOrDefault(i.hoverBorderColor,g.getHoverColor(i.borderColor)),e.borderWidth=g.valueOrDefault(i.hoverBorderWidth,i.borderWidth),e.radius=i.radius+i.hoverRadius},removeHoverStyle:function(t){var e=t._model,i=t._options;e.backgroundColor=i.backgroundColor,e.borderColor=i.borderColor,e.borderWidth=i.borderWidth,e.radius=i.radius},_resolveElementOptions:function(t,e){var i,n,a,r=this.chart,o=r.data.datasets[this.index],s=t.custom||{},l=r.options.elements.point,u=g.options.resolve,d=o.data[e],h={},c={chart:r,dataIndex:e,dataset:o,datasetIndex:this.index},f=["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle"];for(i=0,n=f.length;i<n;++i)h[a=f[i]]=u([s[a],o[a],l[a]],c,e);return h.radius=u([s.radius,d?d.r:void 0,o.radius,l.radius],c,e),h}})}},{25:25,40:40,45:45}],17:[function(t,e,i){"use strict";var n=t(25),a=t(40),O=t(45);n._set("doughnut",{animation:{animateRotate:!0,animateScale:!1},hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,n=i.datasets,a=i.labels;if(n.length)for(var r=0;r<n[0].data.length;++r)e.push('<li><span style="background-color:'+n[0].backgroundColor[r]+'"></span>'),a[r]&&e.push(a[r]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(l){var u=l.data;return u.labels.length&&u.datasets.length?u.labels.map(function(t,e){var i=l.getDatasetMeta(0),n=u.datasets[0],a=i.data[e],r=a&&a.custom||{},o=O.valueAtIndexOrDefault,s=l.options.elements.arc;return{text:t,fillStyle:r.backgroundColor?r.backgroundColor:o(n.backgroundColor,e,s.backgroundColor),strokeStyle:r.borderColor?r.borderColor:o(n.borderColor,e,s.borderColor),lineWidth:r.borderWidth?r.borderWidth:o(n.borderWidth,e,s.borderWidth),hidden:isNaN(n.data[e])||i.data[e].hidden,index:e}}):[]}},onClick:function(t,e){var i,n,a,r=e.index,o=this.chart;for(i=0,n=(o.data.datasets||[]).length;i<n;++i)(a=o.getDatasetMeta(i)).data[r]&&(a.data[r].hidden=!a.data[r].hidden);o.update()}},cutoutPercentage:50,rotation:-.5*Math.PI,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.labels[t.index],n=": "+e.datasets[t.datasetIndex].data[t.index];return O.isArray(i)?(i=i.slice())[0]+=n:i+=n,i}}}}),n._set("pie",O.clone(n.doughnut)),n._set("pie",{cutoutPercentage:0}),e.exports=function(e){e.controllers.doughnut=e.controllers.pie=e.DatasetController.extend({dataElementType:a.Arc,linkScales:O.noop,getRingIndex:function(t){for(var e=0,i=0;i<t;++i)this.chart.isDatasetVisible(i)&&++e;return e},update:function(i){var n=this,t=n.chart,e=t.chartArea,a=t.options,r=a.elements.arc,o=e.right-e.left-r.borderWidth,s=e.bottom-e.top-r.borderWidth,l=Math.min(o,s),u={x:0,y:0},d=n.getMeta(),h=a.cutoutPercentage,c=a.circumference;if(c<2*Math.PI){var f=a.rotation%(2*Math.PI),g=(f+=2*Math.PI*(f>=Math.PI?-1:f<-Math.PI?1:0))+c,m=Math.cos(f),p=Math.sin(f),v=Math.cos(g),y=Math.sin(g),b=f<=0&&0<=g||f<=2*Math.PI&&2*Math.PI<=g,x=f<=.5*Math.PI&&.5*Math.PI<=g||f<=2.5*Math.PI&&2.5*Math.PI<=g,_=f<=-Math.PI&&-Math.PI<=g||f<=Math.PI&&Math.PI<=g,k=f<=.5*-Math.PI&&.5*-Math.PI<=g||f<=1.5*Math.PI&&1.5*Math.PI<=g,w=h/100,M=_?-1:Math.min(m*(m<0?1:w),v*(v<0?1:w)),S=k?-1:Math.min(p*(p<0?1:w),y*(y<0?1:w)),D=b?1:Math.max(m*(0<m?1:w),v*(0<v?1:w)),C=x?1:Math.max(p*(0<p?1:w),y*(0<y?1:w)),P=.5*(D-M),T=.5*(C-S);l=Math.min(o/P,s/T),u={x:-.5*(D+M),y:-.5*(C+S)}}t.borderWidth=n.getMaxBorderWidth(d.data),t.outerRadius=Math.max((l-t.borderWidth)/2,0),t.innerRadius=Math.max(h?t.outerRadius/100*h:0,0),t.radiusLength=(t.outerRadius-t.innerRadius)/t.getVisibleDatasetCount(),t.offsetX=u.x*t.outerRadius,t.offsetY=u.y*t.outerRadius,d.total=n.calculateTotal(),n.outerRadius=t.outerRadius-t.radiusLength*n.getRingIndex(n.index),n.innerRadius=Math.max(n.outerRadius-t.radiusLength,0),O.each(d.data,function(t,e){n.updateElement(t,e,i)})},updateElement:function(t,e,i){var n=this,a=n.chart,r=a.chartArea,o=a.options,s=o.animation,l=(r.left+r.right)/2,u=(r.top+r.bottom)/2,d=o.rotation,h=o.rotation,c=n.getDataset(),f=i&&s.animateRotate?0:t.hidden?0:n.calculateCircumference(c.data[e])*(o.circumference/(2*Math.PI)),g=i&&s.animateScale?0:n.innerRadius,m=i&&s.animateScale?0:n.outerRadius,p=O.valueAtIndexOrDefault;O.extend(t,{_datasetIndex:n.index,_index:e,_model:{x:l+a.offsetX,y:u+a.offsetY,startAngle:d,endAngle:h,circumference:f,outerRadius:m,innerRadius:g,label:p(c.label,e,a.data.labels[e])}});var v=t._model;this.removeHoverStyle(t),i&&s.animateRotate||(v.startAngle=0===e?o.rotation:n.getMeta().data[e-1]._model.endAngle,v.endAngle=v.startAngle+v.circumference),t.pivot()},removeHoverStyle:function(t){e.DatasetController.prototype.removeHoverStyle.call(this,t,this.chart.options.elements.arc)},calculateTotal:function(){var i,n=this.getDataset(),t=this.getMeta(),a=0;return O.each(t.data,function(t,e){i=n.data[e],isNaN(i)||t.hidden||(a+=Math.abs(i))}),a},calculateCircumference:function(t){var e=this.getMeta().total;return 0<e&&!isNaN(t)?2*Math.PI*(Math.abs(t)/e):0},getMaxBorderWidth:function(t){for(var e,i,n=0,a=this.index,r=t.length,o=0;o<r;o++)e=t[o]._model?t[o]._model.borderWidth:0,n=(i=t[o]._chart?t[o]._chart.config.data.datasets[a].hoverBorderWidth:0)>(n=n<e?e:n)?i:n;return n}})}},{25:25,40:40,45:45}],18:[function(t,e,i){"use strict";var n=t(25),a=t(40),g=t(45);n._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}}),e.exports=function(t){function f(t,e){return g.valueOrDefault(t.showLine,e.showLines)}t.controllers.line=t.DatasetController.extend({datasetElementType:a.Line,dataElementType:a.Point,update:function(t){var e,i,n,a=this,r=a.getMeta(),o=r.dataset,s=r.data||[],l=a.chart.options,u=l.elements.line,d=a.getScaleForId(r.yAxisID),h=a.getDataset(),c=f(h,l);for(c&&(n=o.custom||{},void 0!==h.tension&&void 0===h.lineTension&&(h.lineTension=h.tension),o._scale=d,o._datasetIndex=a.index,o._children=s,o._model={spanGaps:h.spanGaps?h.spanGaps:l.spanGaps,tension:n.tension?n.tension:g.valueOrDefault(h.lineTension,u.tension),backgroundColor:n.backgroundColor?n.backgroundColor:h.backgroundColor||u.backgroundColor,borderWidth:n.borderWidth?n.borderWidth:h.borderWidth||u.borderWidth,borderColor:n.borderColor?n.borderColor:h.borderColor||u.borderColor,borderCapStyle:n.borderCapStyle?n.borderCapStyle:h.borderCapStyle||u.borderCapStyle,borderDash:n.borderDash?n.borderDash:h.borderDash||u.borderDash,borderDashOffset:n.borderDashOffset?n.borderDashOffset:h.borderDashOffset||u.borderDashOffset,borderJoinStyle:n.borderJoinStyle?n.borderJoinStyle:h.borderJoinStyle||u.borderJoinStyle,fill:n.fill?n.fill:void 0!==h.fill?h.fill:u.fill,steppedLine:n.steppedLine?n.steppedLine:g.valueOrDefault(h.steppedLine,u.stepped),cubicInterpolationMode:n.cubicInterpolationMode?n.cubicInterpolationMode:g.valueOrDefault(h.cubicInterpolationMode,u.cubicInterpolationMode)},o.pivot()),e=0,i=s.length;e<i;++e)a.updateElement(s[e],e,t);for(c&&0!==o._model.tension&&a.updateBezierControlPoints(),e=0,i=s.length;e<i;++e)s[e].pivot()},getPointBackgroundColor:function(t,e){var i=this.chart.options.elements.point.backgroundColor,n=this.getDataset(),a=t.custom||{};return a.backgroundColor?i=a.backgroundColor:n.pointBackgroundColor?i=g.valueAtIndexOrDefault(n.pointBackgroundColor,e,i):n.backgroundColor&&(i=n.backgroundColor),i},getPointBorderColor:function(t,e){var i=this.chart.options.elements.point.borderColor,n=this.getDataset(),a=t.custom||{};return a.borderColor?i=a.borderColor:n.pointBorderColor?i=g.valueAtIndexOrDefault(n.pointBorderColor,e,i):n.borderColor&&(i=n.borderColor),i},getPointBorderWidth:function(t,e){var i=this.chart.options.elements.point.borderWidth,n=this.getDataset(),a=t.custom||{};return isNaN(a.borderWidth)?!isNaN(n.pointBorderWidth)||g.isArray(n.pointBorderWidth)?i=g.valueAtIndexOrDefault(n.pointBorderWidth,e,i):isNaN(n.borderWidth)||(i=n.borderWidth):i=a.borderWidth,i},updateElement:function(t,e,i){var n,a,r=this,o=r.getMeta(),s=t.custom||{},l=r.getDataset(),u=r.index,d=l.data[e],h=r.getScaleForId(o.yAxisID),c=r.getScaleForId(o.xAxisID),f=r.chart.options.elements.point;void 0!==l.radius&&void 0===l.pointRadius&&(l.pointRadius=l.radius),void 0!==l.hitRadius&&void 0===l.pointHitRadius&&(l.pointHitRadius=l.hitRadius),n=c.getPixelForValue("object"==typeof d?d:NaN,e,u),a=i?h.getBasePixel():r.calculatePointY(d,e,u),t._xScale=c,t._yScale=h,t._datasetIndex=u,t._index=e,t._model={x:n,y:a,skip:s.skip||isNaN(n)||isNaN(a),radius:s.radius||g.valueAtIndexOrDefault(l.pointRadius,e,f.radius),pointStyle:s.pointStyle||g.valueAtIndexOrDefault(l.pointStyle,e,f.pointStyle),backgroundColor:r.getPointBackgroundColor(t,e),borderColor:r.getPointBorderColor(t,e),borderWidth:r.getPointBorderWidth(t,e),tension:o.dataset._model?o.dataset._model.tension:0,steppedLine:!!o.dataset._model&&o.dataset._model.steppedLine,hitRadius:s.hitRadius||g.valueAtIndexOrDefault(l.pointHitRadius,e,f.hitRadius)}},calculatePointY:function(t,e,i){var n,a,r,o=this.chart,s=this.getMeta(),l=this.getScaleForId(s.yAxisID),u=0,d=0;if(l.options.stacked){for(n=0;n<i;n++)if(a=o.data.datasets[n],"line"===(r=o.getDatasetMeta(n)).type&&r.yAxisID===l.id&&o.isDatasetVisible(n)){var h=Number(l.getRightValue(a.data[e]));h<0?d+=h||0:u+=h||0}var c=Number(l.getRightValue(t));return c<0?l.getPixelForValue(d+c):l.getPixelForValue(u+c)}return l.getPixelForValue(t)},updateBezierControlPoints:function(){var t,e,i,n,a=this.getMeta(),r=this.chart.chartArea,o=a.data||[];function s(t,e,i){return Math.max(Math.min(t,i),e)}if(a.dataset._model.spanGaps&&(o=o.filter(function(t){return!t._model.skip})),"monotone"===a.dataset._model.cubicInterpolationMode)g.splineCurveMonotone(o);else for(t=0,e=o.length;t<e;++t)i=o[t]._model,n=g.splineCurve(g.previousItem(o,t)._model,i,g.nextItem(o,t)._model,a.dataset._model.tension),i.controlPointPreviousX=n.previous.x,i.controlPointPreviousY=n.previous.y,i.controlPointNextX=n.next.x,i.controlPointNextY=n.next.y;if(this.chart.options.elements.line.capBezierPoints)for(t=0,e=o.length;t<e;++t)(i=o[t]._model).controlPointPreviousX=s(i.controlPointPreviousX,r.left,r.right),i.controlPointPreviousY=s(i.controlPointPreviousY,r.top,r.bottom),i.controlPointNextX=s(i.controlPointNextX,r.left,r.right),i.controlPointNextY=s(i.controlPointNextY,r.top,r.bottom)},draw:function(){var t=this.chart,e=this.getMeta(),i=e.data||[],n=t.chartArea,a=i.length,r=0;for(g.canvas.clipArea(t.ctx,n),f(this.getDataset(),t.options)&&e.dataset.draw(),g.canvas.unclipArea(t.ctx);r<a;++r)i[r].draw(n)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},a=t._model;a.radius=n.hoverRadius||g.valueAtIndexOrDefault(e.pointHoverRadius,i,this.chart.options.elements.point.hoverRadius),a.backgroundColor=n.hoverBackgroundColor||g.valueAtIndexOrDefault(e.pointHoverBackgroundColor,i,g.getHoverColor(a.backgroundColor)),a.borderColor=n.hoverBorderColor||g.valueAtIndexOrDefault(e.pointHoverBorderColor,i,g.getHoverColor(a.borderColor)),a.borderWidth=n.hoverBorderWidth||g.valueAtIndexOrDefault(e.pointHoverBorderWidth,i,a.borderWidth)},removeHoverStyle:function(t){var e=this,i=e.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},r=t._model;void 0!==i.radius&&void 0===i.pointRadius&&(i.pointRadius=i.radius),r.radius=a.radius||g.valueAtIndexOrDefault(i.pointRadius,n,e.chart.options.elements.point.radius),r.backgroundColor=e.getPointBackgroundColor(t,n),r.borderColor=e.getPointBorderColor(t,n),r.borderWidth=e.getPointBorderWidth(t,n)}})}},{25:25,40:40,45:45}],19:[function(t,e,i){"use strict";var n=t(25),a=t(40),_=t(45);n._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,n=i.datasets,a=i.labels;if(n.length)for(var r=0;r<n[0].data.length;++r)e.push('<li><span style="background-color:'+n[0].backgroundColor[r]+'"></span>'),a[r]&&e.push(a[r]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(s){var l=s.data;return l.labels.length&&l.datasets.length?l.labels.map(function(t,e){var i=s.getDatasetMeta(0),n=l.datasets[0],a=i.data[e].custom||{},r=_.valueAtIndexOrDefault,o=s.options.elements.arc;return{text:t,fillStyle:a.backgroundColor?a.backgroundColor:r(n.backgroundColor,e,o.backgroundColor),strokeStyle:a.borderColor?a.borderColor:r(n.borderColor,e,o.borderColor),lineWidth:a.borderWidth?a.borderWidth:r(n.borderWidth,e,o.borderWidth),hidden:isNaN(n.data[e])||i.data[e].hidden,index:e}}):[]}},onClick:function(t,e){var i,n,a,r=e.index,o=this.chart;for(i=0,n=(o.data.datasets||[]).length;i<n;++i)(a=o.getDatasetMeta(i)).data[r].hidden=!a.data[r].hidden;o.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}}),e.exports=function(e){e.controllers.polarArea=e.DatasetController.extend({dataElementType:a.Arc,linkScales:_.noop,update:function(i){var n=this,t=n.chart,e=t.chartArea,a=n.getMeta(),r=t.options,o=r.elements.arc,s=Math.min(e.right-e.left,e.bottom-e.top);t.outerRadius=Math.max((s-o.borderWidth/2)/2,0),t.innerRadius=Math.max(r.cutoutPercentage?t.outerRadius/100*r.cutoutPercentage:1,0),t.radiusLength=(t.outerRadius-t.innerRadius)/t.getVisibleDatasetCount(),n.outerRadius=t.outerRadius-t.radiusLength*n.index,n.innerRadius=n.outerRadius-t.radiusLength,a.count=n.countVisibleElements(),_.each(a.data,function(t,e){n.updateElement(t,e,i)})},updateElement:function(t,e,i){for(var n=this,a=n.chart,r=n.getDataset(),o=a.options,s=o.animation,l=a.scale,u=a.data.labels,d=n.calculateCircumference(r.data[e]),h=l.xCenter,c=l.yCenter,f=0,g=n.getMeta(),m=0;m<e;++m)isNaN(r.data[m])||g.data[m].hidden||++f;var p=o.startAngle,v=t.hidden?0:l.getDistanceFromCenterForValue(r.data[e]),y=p+d*f,b=y+(t.hidden?0:d),x=s.animateScale?0:l.getDistanceFromCenterForValue(r.data[e]);_.extend(t,{_datasetIndex:n.index,_index:e,_scale:l,_model:{x:h,y:c,innerRadius:0,outerRadius:i?x:v,startAngle:i&&s.animateRotate?p:y,endAngle:i&&s.animateRotate?p:b,label:_.valueAtIndexOrDefault(u,e,u[e])}}),n.removeHoverStyle(t),t.pivot()},removeHoverStyle:function(t){e.DatasetController.prototype.removeHoverStyle.call(this,t,this.chart.options.elements.arc)},countVisibleElements:function(){var i=this.getDataset(),t=this.getMeta(),n=0;return _.each(t.data,function(t,e){isNaN(i.data[e])||t.hidden||n++}),n},calculateCircumference:function(t){var e=this.getMeta().count;return 0<e&&!isNaN(t)?2*Math.PI/e:0}})}},{25:25,40:40,45:45}],20:[function(t,e,i){"use strict";var n=t(25),a=t(40),u=t(45);n._set("radar",{scale:{type:"radialLinear"},elements:{line:{tension:0}}}),e.exports=function(t){t.controllers.radar=t.DatasetController.extend({datasetElementType:a.Line,dataElementType:a.Point,linkScales:u.noop,update:function(i){var n=this,t=n.getMeta(),e=t.dataset,a=t.data,r=e.custom||{},o=n.getDataset(),s=n.chart.options.elements.line,l=n.chart.scale;void 0!==o.tension&&void 0===o.lineTension&&(o.lineTension=o.tension),u.extend(t.dataset,{_datasetIndex:n.index,_scale:l,_children:a,_loop:!0,_model:{tension:r.tension?r.tension:u.valueOrDefault(o.lineTension,s.tension),backgroundColor:r.backgroundColor?r.backgroundColor:o.backgroundColor||s.backgroundColor,borderWidth:r.borderWidth?r.borderWidth:o.borderWidth||s.borderWidth,borderColor:r.borderColor?r.borderColor:o.borderColor||s.borderColor,fill:r.fill?r.fill:void 0!==o.fill?o.fill:s.fill,borderCapStyle:r.borderCapStyle?r.borderCapStyle:o.borderCapStyle||s.borderCapStyle,borderDash:r.borderDash?r.borderDash:o.borderDash||s.borderDash,borderDashOffset:r.borderDashOffset?r.borderDashOffset:o.borderDashOffset||s.borderDashOffset,borderJoinStyle:r.borderJoinStyle?r.borderJoinStyle:o.borderJoinStyle||s.borderJoinStyle}}),t.dataset.pivot(),u.each(a,function(t,e){n.updateElement(t,e,i)},n),n.updateBezierControlPoints()},updateElement:function(t,e,i){var n=this,a=t.custom||{},r=n.getDataset(),o=n.chart.scale,s=n.chart.options.elements.point,l=o.getPointPositionForValue(e,r.data[e]);void 0!==r.radius&&void 0===r.pointRadius&&(r.pointRadius=r.radius),void 0!==r.hitRadius&&void 0===r.pointHitRadius&&(r.pointHitRadius=r.hitRadius),u.extend(t,{_datasetIndex:n.index,_index:e,_scale:o,_model:{x:i?o.xCenter:l.x,y:i?o.yCenter:l.y,tension:a.tension?a.tension:u.valueOrDefault(r.lineTension,n.chart.options.elements.line.tension),radius:a.radius?a.radius:u.valueAtIndexOrDefault(r.pointRadius,e,s.radius),backgroundColor:a.backgroundColor?a.backgroundColor:u.valueAtIndexOrDefault(r.pointBackgroundColor,e,s.backgroundColor),borderColor:a.borderColor?a.borderColor:u.valueAtIndexOrDefault(r.pointBorderColor,e,s.borderColor),borderWidth:a.borderWidth?a.borderWidth:u.valueAtIndexOrDefault(r.pointBorderWidth,e,s.borderWidth),pointStyle:a.pointStyle?a.pointStyle:u.valueAtIndexOrDefault(r.pointStyle,e,s.pointStyle),hitRadius:a.hitRadius?a.hitRadius:u.valueAtIndexOrDefault(r.pointHitRadius,e,s.hitRadius)}}),t._model.skip=a.skip?a.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var a=this.chart.chartArea,r=this.getMeta();u.each(r.data,function(t,e){var i=t._model,n=u.splineCurve(u.previousItem(r.data,e,!0)._model,i,u.nextItem(r.data,e,!0)._model,i.tension);i.controlPointPreviousX=Math.max(Math.min(n.previous.x,a.right),a.left),i.controlPointPreviousY=Math.max(Math.min(n.previous.y,a.bottom),a.top),i.controlPointNextX=Math.max(Math.min(n.next.x,a.right),a.left),i.controlPointNextY=Math.max(Math.min(n.next.y,a.bottom),a.top),t.pivot()})},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},n=t._index,a=t._model;a.radius=i.hoverRadius?i.hoverRadius:u.valueAtIndexOrDefault(e.pointHoverRadius,n,this.chart.options.elements.point.hoverRadius),a.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:u.valueAtIndexOrDefault(e.pointHoverBackgroundColor,n,u.getHoverColor(a.backgroundColor)),a.borderColor=i.hoverBorderColor?i.hoverBorderColor:u.valueAtIndexOrDefault(e.pointHoverBorderColor,n,u.getHoverColor(a.borderColor)),a.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:u.valueAtIndexOrDefault(e.pointHoverBorderWidth,n,a.borderWidth)},removeHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},n=t._index,a=t._model,r=this.chart.options.elements.point;a.radius=i.radius?i.radius:u.valueAtIndexOrDefault(e.pointRadius,n,r.radius),a.backgroundColor=i.backgroundColor?i.backgroundColor:u.valueAtIndexOrDefault(e.pointBackgroundColor,n,r.backgroundColor),a.borderColor=i.borderColor?i.borderColor:u.valueAtIndexOrDefault(e.pointBorderColor,n,r.borderColor),a.borderWidth=i.borderWidth?i.borderWidth:u.valueAtIndexOrDefault(e.pointBorderWidth,n,r.borderWidth)}})}},{25:25,40:40,45:45}],21:[function(t,e,i){"use strict";t(25)._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",type:"linear",position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},showLines:!1,tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}}),e.exports=function(t){t.controllers.scatter=t.controllers.line}},{25:25}],22:[function(t,e,i){"use strict";var n=t(25),a=t(26),r=t(45);n._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:r.noop,onComplete:r.noop}}),e.exports=function(t){t.Animation=a.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,i,n){var a,r,o=this.animations;for(e.chart=t,n||(t.animating=!0),a=0,r=o.length;a<r;++a)if(o[a].chart===t)return void(o[a]=e);o.push(e),1===o.length&&this.requestAnimationFrame()},cancelAnimation:function(e){var t=r.findIndex(this.animations,function(t){return t.chart===e});-1!==t&&(this.animations.splice(t,1),e.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=r.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=this,e=Date.now(),i=0;1<t.dropFrames&&(i=Math.floor(t.dropFrames),t.dropFrames=t.dropFrames%1),t.advance(1+i);var n=Date.now();t.dropFrames+=(n-e)/t.frameDuration,0<t.animations.length&&t.requestAnimationFrame()},advance:function(t){for(var e,i,n=this.animations,a=0;a<n.length;)i=(e=n[a]).chart,e.currentStep=(e.currentStep||0)+t,e.currentStep=Math.min(e.currentStep,e.numSteps),r.callback(e.render,[i,e],i),r.callback(e.onAnimationProgress,[e],i),e.currentStep>=e.numSteps?(r.callback(e.onAnimationComplete,[e],i),i.animating=!1,n.splice(a,1)):++a}},Object.defineProperty(t.Animation.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(t.Animation.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}})}},{25:25,26:26,45:45}],23:[function(t,e,i){"use strict";var h=t(25),c=t(45),a=t(28),r=t(30),f=t(48),l=t(31);e.exports=function(u){function d(t){return"top"===t||"bottom"===t}u.types={},u.instances={},u.controllers={},c.extend(u.prototype,{construct:function(t,e){var i,n,a=this;(n=(i=(i=e)||{}).data=i.data||{}).datasets=n.datasets||[],n.labels=n.labels||[],i.options=c.configMerge(h.global,h[i.type],i.options||{}),e=i;var r=f.acquireContext(t,e),o=r&&r.canvas,s=o&&o.height,l=o&&o.width;a.id=c.uid(),a.ctx=r,a.canvas=o,a.config=e,a.width=l,a.height=s,a.aspectRatio=s?l/s:null,a.options=e.options,a._bufferedRender=!1,(a.chart=a).controller=a,u.instances[a.id]=a,Object.defineProperty(a,"data",{get:function(){return a.config.data},set:function(t){a.config.data=t}}),r&&o?(a.initialize(),a.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var t=this;return l.notify(t,"beforeInit"),c.retinaScale(t,t.options.devicePixelRatio),t.bindEvents(),t.options.responsive&&t.resize(!0),t.ensureScalesHaveIDs(),t.buildOrUpdateScales(),t.initToolTip(),l.notify(t,"afterInit"),t},clear:function(){return c.canvas.clear(this),this},stop:function(){return u.animationService.cancelAnimation(this),this},resize:function(t){var e=this,i=e.options,n=e.canvas,a=i.maintainAspectRatio&&e.aspectRatio||null,r=Math.max(0,Math.floor(c.getMaximumWidth(n))),o=Math.max(0,Math.floor(a?r/a:c.getMaximumHeight(n)));if((e.width!==r||e.height!==o)&&(n.width=e.width=r,n.height=e.height=o,n.style.width=r+"px",n.style.height=o+"px",c.retinaScale(e,i.devicePixelRatio),!t)){var s={width:r,height:o};l.notify(e,"resize",[s]),e.options.onResize&&e.options.onResize(e,s),e.stop(),e.update(e.options.responsiveAnimationDuration)}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},i=t.scale;c.each(e.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),c.each(e.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),i&&(i.id=i.id||"scale")},buildOrUpdateScales:function(){var o=this,t=o.options,s=o.scales||{},e=[],l=Object.keys(s).reduce(function(t,e){return t[e]=!1,t},{});t.scales&&(e=e.concat((t.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category",dposition:"bottom"}}),(t.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear",dposition:"left"}}))),t.scale&&e.push({options:t.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),c.each(e,function(t){var e=t.options,i=e.id,n=c.valueOrDefault(e.type,t.dtype);d(e.position)!==d(t.dposition)&&(e.position=t.dposition),l[i]=!0;var a=null;if(i in s&&s[i].type===n)(a=s[i]).options=e,a.ctx=o.ctx,a.chart=o;else{var r=u.scaleService.getScaleConstructor(n);if(!r)return;a=new r({id:i,type:n,options:e,ctx:o.ctx,chart:o}),s[a.id]=a}a.mergeTicksOptions(),t.isDefault&&(o.scale=a)}),c.each(l,function(t,e){t||delete s[e]}),o.scales=s,u.scaleService.addScalesToLayout(this)},buildOrUpdateControllers:function(){var r=this,o=[],s=[];return c.each(r.data.datasets,function(t,e){var i=r.getDatasetMeta(e),n=t.type||r.config.type;if(i.type&&i.type!==n&&(r.destroyDatasetMeta(e),i=r.getDatasetMeta(e)),i.type=n,o.push(i.type),i.controller)i.controller.updateIndex(e),i.controller.linkScales();else{var a=u.controllers[i.type];if(void 0===a)throw new Error('"'+i.type+'" is not a chart type.');i.controller=new a(r,e),s.push(i.controller)}},r),s},resetElements:function(){var i=this;c.each(i.data.datasets,function(t,e){i.getDatasetMeta(e).controller.reset()},i)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t){var e,i,n=this;if(t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]}),i=(e=n).options,c.each(e.scales,function(t){r.removeBox(e,t)}),i=c.configMerge(u.defaults.global,u.defaults[e.config.type],i),e.options=e.config.options=i,e.ensureScalesHaveIDs(),e.buildOrUpdateScales(),e.tooltip._options=i.tooltips,e.tooltip.initialize(),l._invalidate(n),!1!==l.notify(n,"beforeUpdate")){n.tooltip._data=n.data;var a=n.buildOrUpdateControllers();c.each(n.data.datasets,function(t,e){n.getDatasetMeta(e).controller.buildOrUpdateElements()},n),n.updateLayout(),n.options.animation&&n.options.animation.duration&&c.each(a,function(t){t.reset()}),n.updateDatasets(),n.tooltip.initialize(),n.lastActive=[],l.notify(n,"afterUpdate"),n._bufferedRender?n._bufferedRequest={duration:t.duration,easing:t.easing,lazy:t.lazy}:n.render(t)}},updateLayout:function(){!1!==l.notify(this,"beforeLayout")&&(r.update(this,this.width,this.height),l.notify(this,"afterScaleUpdate"),l.notify(this,"afterLayout"))},updateDatasets:function(){if(!1!==l.notify(this,"beforeDatasetsUpdate")){for(var t=0,e=this.data.datasets.length;t<e;++t)this.updateDataset(t);l.notify(this,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this.getDatasetMeta(t),i={meta:e,index:t};!1!==l.notify(this,"beforeDatasetUpdate",[i])&&(e.controller.update(),l.notify(this,"afterDatasetUpdate",[i]))},render:function(t){var e=this;t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]});var i=t.duration,n=t.lazy;if(!1!==l.notify(e,"beforeRender")){var a=e.options.animation,r=function(t){l.notify(e,"afterRender"),c.callback(a&&a.onComplete,[t],e)};if(a&&(void 0!==i&&0!==i||void 0===i&&0!==a.duration)){var o=new u.Animation({numSteps:(i||a.duration)/16.66,easing:t.easing||a.easing,render:function(t,e){var i=c.easing.effects[e.easing],n=e.currentStep,a=n/e.numSteps;t.draw(i(a),a,n)},onAnimationProgress:a.onProgress,onAnimationComplete:r});u.animationService.addAnimation(e,o,i,n)}else e.draw(),r(new u.Animation({numSteps:0,chart:e}));return e}},draw:function(t){var e=this;e.clear(),c.isNullOrUndef(t)&&(t=1),e.transition(t),!1!==l.notify(e,"beforeDraw",[t])&&(c.each(e.boxes,function(t){t.draw(e.chartArea)},e),e.scale&&e.scale.draw(),e.drawDatasets(t),e._drawTooltip(t),l.notify(e,"afterDraw",[t]))},transition:function(t){for(var e=0,i=(this.data.datasets||[]).length;e<i;++e)this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.transition(t);this.tooltip.transition(t)},drawDatasets:function(t){var e=this;if(!1!==l.notify(e,"beforeDatasetsDraw",[t])){for(var i=(e.data.datasets||[]).length-1;0<=i;--i)e.isDatasetVisible(i)&&e.drawDataset(i,t);l.notify(e,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var i=this.getDatasetMeta(t),n={meta:i,index:t,easingValue:e};!1!==l.notify(this,"beforeDatasetDraw",[n])&&(i.controller.draw(e),l.notify(this,"afterDatasetDraw",[n]))},_drawTooltip:function(t){var e=this.tooltip,i={tooltip:e,easingValue:t};!1!==l.notify(this,"beforeTooltipDraw",[i])&&(e.draw(),l.notify(this,"afterTooltipDraw",[i]))},getElementAtEvent:function(t){return a.modes.single(this,t)},getElementsAtEvent:function(t){return a.modes.label(this,t,{intersect:!0})},getElementsAtXAxis:function(t){return a.modes["x-axis"](this,t,{intersect:!0})},getElementsAtEventForMode:function(t,e,i){var n=a.modes[e];return"function"==typeof n?n(this,t,i):[]},getDatasetAtEvent:function(t){return a.modes.dataset(this,t,{intersect:!0})},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var i=e._meta[this.id];return i||(i=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,i=this.data.datasets.length;e<i;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroyDatasetMeta:function(t){var e=this.id,i=this.data.datasets[t],n=i._meta&&i._meta[e];n&&(n.controller.destroy(),delete i._meta[e])},destroy:function(){var t,e,i=this,n=i.canvas;for(i.stop(),t=0,e=i.data.datasets.length;t<e;++t)i.destroyDatasetMeta(t);n&&(i.unbindEvents(),c.canvas.clear(i),f.releaseContext(i.ctx),i.canvas=null,i.ctx=null),l.notify(i,"destroy"),delete u.instances[i.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var t=this;t.tooltip=new u.Tooltip({_chart:t,_chartInstance:t,_data:t.data,_options:t.options.tooltips},t)},bindEvents:function(){var e=this,i=e._listeners={},n=function(){e.eventHandler.apply(e,arguments)};c.each(e.options.events,function(t){f.addEventListener(e,t,n),i[t]=n}),e.options.responsive&&(n=function(){e.resize()},f.addEventListener(e,"resize",n),i.resize=n)},unbindEvents:function(){var i=this,t=i._listeners;t&&(delete i._listeners,c.each(t,function(t,e){f.removeEventListener(i,e,t)}))},updateHoverStyle:function(t,e,i){var n,a,r,o=i?"setHoverStyle":"removeHoverStyle";for(a=0,r=t.length;a<r;++a)(n=t[a])&&this.getDatasetMeta(n._datasetIndex).controller[o](n)},eventHandler:function(t){var e=this,i=e.tooltip;if(!1!==l.notify(e,"beforeEvent",[t])){e._bufferedRender=!0,e._bufferedRequest=null;var n=e.handleEvent(t);i&&(n=i._start?i.handleEvent(t):n|i.handleEvent(t)),l.notify(e,"afterEvent",[t]);var a=e._bufferedRequest;return a?e.render(a):n&&!e.animating&&(e.stop(),e.render(e.options.hover.animationDuration,!0)),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e,i=this,n=i.options||{},a=n.hover;return i.lastActive=i.lastActive||[],"mouseout"===t.type?i.active=[]:i.active=i.getElementsAtEventForMode(t,a.mode,a),c.callback(n.onHover||n.hover.onHover,[t.native,i.active],i),"mouseup"!==t.type&&"click"!==t.type||n.onClick&&n.onClick.call(i,t.native,i.active),i.lastActive.length&&i.updateHoverStyle(i.lastActive,a.mode,!1),i.active.length&&a.mode&&i.updateHoverStyle(i.active,a.mode,!0),e=!c.arrayEquals(i.active,i.lastActive),i.lastActive=i.active,e}}),u.Controller=u}},{25:25,28:28,30:30,31:31,45:45,48:48}],24:[function(t,e,i){"use strict";var s=t(45);e.exports=function(t){var r=["push","pop","shift","splice","unshift"];function o(e,t){var i=e._chartjs;if(i){var n=i.listeners,a=n.indexOf(t);-1!==a&&n.splice(a,1),0<n.length||(r.forEach(function(t){delete e[t]}),delete e._chartjs)}}t.DatasetController=function(t,e){this.initialize(t,e)},s.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){this.chart=t,this.index=e,this.linkScales(),this.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),i=t.getDataset();null!==e.xAxisID&&e.xAxisID in t.chart.scales||(e.xAxisID=i.xAxisID||t.chart.options.scales.xAxes[0].id),null!==e.yAxisID&&e.yAxisID in t.chart.scales||(e.yAxisID=i.yAxisID||t.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},destroy:function(){this._data&&o(this._data,this)},createMetaDataset:function(){var t=this.datasetElementType;return t&&new t({_chart:this.chart,_datasetIndex:this.index})},createMetaData:function(t){var e=this.dataElementType;return e&&new e({_chart:this.chart,_datasetIndex:this.index,_index:t})},addElements:function(){var t,e,i=this.getMeta(),n=this.getDataset().data||[],a=i.data;for(t=0,e=n.length;t<e;++t)a[t]=a[t]||this.createMetaData(t);i.dataset=i.dataset||this.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var a,t,e=this,i=e.getDataset(),n=i.data||(i.data=[]);e._data!==n&&(e._data&&o(e._data,e),t=e,(a=n)._chartjs?a._chartjs.listeners.push(t):(Object.defineProperty(a,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),r.forEach(function(t){var i="onData"+t.charAt(0).toUpperCase()+t.slice(1),n=a[t];Object.defineProperty(a,t,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),t=n.apply(this,e);return s.each(a._chartjs.listeners,function(t){"function"==typeof t[i]&&t[i].apply(t,e)}),t}})})),e._data=n),e.resyncElements()},update:s.noop,transition:function(t){for(var e=this.getMeta(),i=e.data||[],n=i.length,a=0;a<n;++a)i[a].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],i=e.length,n=0;for(t.dataset&&t.dataset.draw();n<i;++n)e[n].draw()},removeHoverStyle:function(t,e){var i=this.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},r=s.valueAtIndexOrDefault,o=t._model;o.backgroundColor=a.backgroundColor?a.backgroundColor:r(i.backgroundColor,n,e.backgroundColor),o.borderColor=a.borderColor?a.borderColor:r(i.borderColor,n,e.borderColor),o.borderWidth=a.borderWidth?a.borderWidth:r(i.borderWidth,n,e.borderWidth)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},a=s.valueAtIndexOrDefault,r=s.getHoverColor,o=t._model;o.backgroundColor=n.hoverBackgroundColor?n.hoverBackgroundColor:a(e.hoverBackgroundColor,i,r(o.backgroundColor)),o.borderColor=n.hoverBorderColor?n.hoverBorderColor:a(e.hoverBorderColor,i,r(o.borderColor)),o.borderWidth=n.hoverBorderWidth?n.hoverBorderWidth:a(e.hoverBorderWidth,i,o.borderWidth)},resyncElements:function(){var t=this.getMeta(),e=this.getDataset().data,i=t.data.length,n=e.length;n<i?t.data.splice(n,i-n):i<n&&this.insertElements(i,n-i)},insertElements:function(t,e){for(var i=0;i<e;++i)this.addElementAndReset(t+i)},onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),t.DatasetController.extend=s.inherits}},{45:45}],25:[function(t,e,i){"use strict";var n=t(45);e.exports={_set:function(t,e){return n.merge(this[t]||(this[t]={}),e)}}},{45:45}],26:[function(t,e,i){"use strict";var g=t(2),n=t(45),a=function(t){n.extend(this,t),this.initialize.apply(this,arguments)};n.extend(a.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=n.clone(t._model)),t._start={},t},transition:function(t){var e=this,i=e._model,n=e._start,a=e._view;return i&&1!==t?(a||(a=e._view={}),n||(n=e._start={}),function(t,e,i,n){var a,r,o,s,l,u,d,h,c,f=Object.keys(i);for(a=0,r=f.length;a<r;++a)if(u=i[o=f[a]],e.hasOwnProperty(o)||(e[o]=u),(s=e[o])!==u&&"_"!==o[0]){if(t.hasOwnProperty(o)||(t[o]=s),(d=typeof u)==typeof(l=t[o]))if("string"===d){if((h=g(l)).valid&&(c=g(u)).valid){e[o]=c.mix(h,n).rgbString();continue}}else if("number"===d&&isFinite(l)&&isFinite(u)){e[o]=l+(u-l)*n;continue}e[o]=u}}(n,a,i,t)):(e._view=i,e._start=null),e},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return n.isNumber(this._model.x)&&n.isNumber(this._model.y)}}),a.extend=n.inherits,e.exports=a},{2:2,45:45}],27:[function(t,e,i){"use strict";var n=t(2),a=t(25),g=t(45);e.exports=function(l){function d(t,e,i){var n;return"string"==typeof t?(n=parseInt(t,10),-1!==t.indexOf("%")&&(n=n/100*e.parentNode[i])):n=t,n}function h(t){return null!=t&&"none"!==t}function e(t,e,i){var n=document.defaultView,a=t.parentNode,r=n.getComputedStyle(t)[e],o=n.getComputedStyle(a)[e],s=h(r),l=h(o),u=Number.POSITIVE_INFINITY;return s||l?Math.min(s?d(r,t,i):u,l?d(o,a,i):u):"none"}g.configMerge=function(){return g.merge(g.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(t,e,i,n){var a=e[t]||{},r=i[t];"scales"===t?e[t]=g.scaleMerge(a,r):"scale"===t?e[t]=g.merge(a,[l.scaleService.getScaleDefaults(r.type),r]):g._merger(t,e,i,n)}})},g.scaleMerge=function(){return g.merge(g.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(t,e,i,n){if("xAxes"===t||"yAxes"===t){var a,r,o,s=i[t].length;for(e[t]||(e[t]=[]),a=0;a<s;++a)o=i[t][a],r=g.valueOrDefault(o.type,"xAxes"===t?"category":"linear"),a>=e[t].length&&e[t].push({}),!e[t][a].type||o.type&&o.type!==e[t][a].type?g.merge(e[t][a],[l.scaleService.getScaleDefaults(r),o]):g.merge(e[t][a],o)}else g._merger(t,e,i,n)}})},g.where=function(t,e){if(g.isArray(t)&&Array.prototype.filter)return t.filter(e);var i=[];return g.each(t,function(t){e(t)&&i.push(t)}),i},g.findIndex=Array.prototype.findIndex?function(t,e,i){return t.findIndex(e,i)}:function(t,e,i){i=void 0===i?t:i;for(var n=0,a=t.length;n<a;++n)if(e.call(i,t[n],n,t))return n;return-1},g.findNextWhere=function(t,e,i){g.isNullOrUndef(i)&&(i=-1);for(var n=i+1;n<t.length;n++){var a=t[n];if(e(a))return a}},g.findPreviousWhere=function(t,e,i){g.isNullOrUndef(i)&&(i=t.length);for(var n=i-1;0<=n;n--){var a=t[n];if(e(a))return a}},g.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},g.almostEquals=function(t,e,i){return Math.abs(t-e)<i},g.almostWhole=function(t,e){var i=Math.round(t);return i-e<t&&t<i+e},g.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},g.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},g.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return 0==(t=+t)||isNaN(t)?t:0<t?1:-1},g.log10=Math.log10?function(t){return Math.log10(t)}:function(t){var e=Math.log(t)*Math.LOG10E,i=Math.round(e);return t===Math.pow(10,i)?i:e},g.toRadians=function(t){return t*(Math.PI/180)},g.toDegrees=function(t){return t*(180/Math.PI)},g.getAngleFromPoint=function(t,e){var i=e.x-t.x,n=e.y-t.y,a=Math.sqrt(i*i+n*n),r=Math.atan2(n,i);return r<-.5*Math.PI&&(r+=2*Math.PI),{angle:r,distance:a}},g.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},g.aliasPixel=function(t){return t%2==0?0:.5},g.splineCurve=function(t,e,i,n){var a=t.skip?e:t,r=e,o=i.skip?e:i,s=Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)),l=Math.sqrt(Math.pow(o.x-r.x,2)+Math.pow(o.y-r.y,2)),u=s/(s+l),d=l/(s+l),h=n*(u=isNaN(u)?0:u),c=n*(d=isNaN(d)?0:d);return{previous:{x:r.x-h*(o.x-a.x),y:r.y-h*(o.y-a.y)},next:{x:r.x+c*(o.x-a.x),y:r.y+c*(o.y-a.y)}}},g.EPSILON=Number.EPSILON||1e-14,g.splineCurveMonotone=function(t){var e,i,n,a,r,o,s,l,u,d=(t||[]).map(function(t){return{model:t._model,deltaK:0,mK:0}}),h=d.length;for(e=0;e<h;++e)if(!(n=d[e]).model.skip){if(i=0<e?d[e-1]:null,(a=e<h-1?d[e+1]:null)&&!a.model.skip){var c=a.model.x-n.model.x;n.deltaK=0!==c?(a.model.y-n.model.y)/c:0}!i||i.model.skip?n.mK=n.deltaK:!a||a.model.skip?n.mK=i.deltaK:this.sign(i.deltaK)!==this.sign(n.deltaK)?n.mK=0:n.mK=(i.deltaK+n.deltaK)/2}for(e=0;e<h-1;++e)n=d[e],a=d[e+1],n.model.skip||a.model.skip||(g.almostEquals(n.deltaK,0,this.EPSILON)?n.mK=a.mK=0:(r=n.mK/n.deltaK,o=a.mK/n.deltaK,(l=Math.pow(r,2)+Math.pow(o,2))<=9||(s=3/Math.sqrt(l),n.mK=r*s*n.deltaK,a.mK=o*s*n.deltaK)));for(e=0;e<h;++e)(n=d[e]).model.skip||(i=0<e?d[e-1]:null,a=e<h-1?d[e+1]:null,i&&!i.model.skip&&(u=(n.model.x-i.model.x)/3,n.model.controlPointPreviousX=n.model.x-u,n.model.controlPointPreviousY=n.model.y-u*n.mK),a&&!a.model.skip&&(u=(a.model.x-n.model.x)/3,n.model.controlPointNextX=n.model.x+u,n.model.controlPointNextY=n.model.y+u*n.mK))},g.nextItem=function(t,e,i){return i?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},g.previousItem=function(t,e,i){return i?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},g.niceNum=function(t,e){var i=Math.floor(g.log10(t)),n=t/Math.pow(10,i);return(e?n<1.5?1:n<3?2:n<7?5:10:n<=1?1:n<=2?2:n<=5?5:10)*Math.pow(10,i)},g.requestAnimFrame="undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},g.getRelativePosition=function(t,e){var i,n,a=t.originalEvent||t,r=t.currentTarget||t.srcElement,o=r.getBoundingClientRect(),s=a.touches;s&&0<s.length?(i=s[0].clientX,n=s[0].clientY):(i=a.clientX,n=a.clientY);var l=parseFloat(g.getStyle(r,"padding-left")),u=parseFloat(g.getStyle(r,"padding-top")),d=parseFloat(g.getStyle(r,"padding-right")),h=parseFloat(g.getStyle(r,"padding-bottom")),c=o.right-o.left-l-d,f=o.bottom-o.top-u-h;return{x:i=Math.round((i-o.left-l)/c*r.width/e.currentDevicePixelRatio),y:n=Math.round((n-o.top-u)/f*r.height/e.currentDevicePixelRatio)}},g.getConstraintWidth=function(t){return e(t,"max-width","clientWidth")},g.getConstraintHeight=function(t){return e(t,"max-height","clientHeight")},g.getMaximumWidth=function(t){var e=t.parentNode;if(!e)return t.clientWidth;var i=parseInt(g.getStyle(e,"padding-left"),10),n=parseInt(g.getStyle(e,"padding-right"),10),a=e.clientWidth-i-n,r=g.getConstraintWidth(t);return isNaN(r)?a:Math.min(a,r)},g.getMaximumHeight=function(t){var e=t.parentNode;if(!e)return t.clientHeight;var i=parseInt(g.getStyle(e,"padding-top"),10),n=parseInt(g.getStyle(e,"padding-bottom"),10),a=e.clientHeight-i-n,r=g.getConstraintHeight(t);return isNaN(r)?a:Math.min(a,r)},g.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},g.retinaScale=function(t,e){var i=t.currentDevicePixelRatio=e||window.devicePixelRatio||1;if(1!==i){var n=t.canvas,a=t.height,r=t.width;n.height=a*i,n.width=r*i,t.ctx.scale(i,i),n.style.height||n.style.width||(n.style.height=a+"px",n.style.width=r+"px")}},g.fontString=function(t,e,i){return e+" "+t+"px "+i},g.longestText=function(e,t,i,n){var a=(n=n||{}).data=n.data||{},r=n.garbageCollect=n.garbageCollect||[];n.font!==t&&(a=n.data={},r=n.garbageCollect=[],n.font=t),e.font=t;var o=0;g.each(i,function(t){null!=t&&!0!==g.isArray(t)?o=g.measureText(e,a,r,o,t):g.isArray(t)&&g.each(t,function(t){null==t||g.isArray(t)||(o=g.measureText(e,a,r,o,t))})});var s=r.length/2;if(s>i.length){for(var l=0;l<s;l++)delete a[r[l]];r.splice(0,s)}return o},g.measureText=function(t,e,i,n,a){var r=e[a];return r||(r=e[a]=t.measureText(a).width,i.push(a)),n<r&&(n=r),n},g.numberOfLabelLines=function(t){var e=1;return g.each(t,function(t){g.isArray(t)&&t.length>e&&(e=t.length)}),e},g.color=n?function(t){return t instanceof CanvasGradient&&(t=a.global.defaultColor),n(t)}:function(t){return console.error("Color.js not found!"),t},g.getHoverColor=function(t){return t instanceof CanvasPattern?t:g.color(t).saturate(.5).darken(.1).rgbString()}}},{2:2,25:25,45:45}],28:[function(t,e,i){"use strict";var n=t(45);function s(t,e){return t.native?{x:t.x,y:t.y}:n.getRelativePosition(t,e)}function l(t,e){var i,n,a,r,o;for(n=0,r=t.data.datasets.length;n<r;++n)if(t.isDatasetVisible(n))for(a=0,o=(i=t.getDatasetMeta(n)).data.length;a<o;++a){var s=i.data[a];s._view.skip||e(s)}}function u(t,e){var i=[];return l(t,function(t){t.inRange(e.x,e.y)&&i.push(t)}),i}function d(t,n,a,r){var o=Number.POSITIVE_INFINITY,s=[];return l(t,function(t){if(!a||t.inRange(n.x,n.y)){var e=t.getCenterPoint(),i=r(n,e);i<o?(s=[t],o=i):i===o&&s.push(t)}}),s}function h(t){var a=-1!==t.indexOf("x"),r=-1!==t.indexOf("y");return function(t,e){var i=a?Math.abs(t.x-e.x):0,n=r?Math.abs(t.y-e.y):0;return Math.sqrt(Math.pow(i,2)+Math.pow(n,2))}}function a(n,t,e){var i=s(t,n);e.axis=e.axis||"x";var a=h(e.axis),r=e.intersect?u(n,i):d(n,i,!1,a),o=[];return r.length?(n.data.datasets.forEach(function(t,e){if(n.isDatasetVisible(e)){var i=n.getDatasetMeta(e).data[r[0]._index];i&&!i._view.skip&&o.push(i)}}),o):[]}e.exports={modes:{single:function(t,e){var i=s(e,t),n=[];return l(t,function(t){if(t.inRange(i.x,i.y))return n.push(t),n}),n.slice(0,1)},label:a,index:a,dataset:function(t,e,i){var n=s(e,t);i.axis=i.axis||"xy";var a=h(i.axis),r=i.intersect?u(t,n):d(t,n,!1,a);return 0<r.length&&(r=t.getDatasetMeta(r[0]._datasetIndex).data),r},"x-axis":function(t,e){return a(t,e,{intersect:!1})},point:function(t,e){return u(t,s(e,t))},nearest:function(t,e,i){var n=s(e,t);i.axis=i.axis||"xy";var a=h(i.axis),r=d(t,n,i.intersect,a);return 1<r.length&&r.sort(function(t,e){var i=t.getArea()-e.getArea();return 0===i&&(i=t._datasetIndex-e._datasetIndex),i}),r.slice(0,1)},x:function(t,e,i){var n=s(e,t),a=[],r=!1;return l(t,function(t){t.inXRange(n.x)&&a.push(t),t.inRange(n.x,n.y)&&(r=!0)}),i.intersect&&!r&&(a=[]),a},y:function(t,e,i){var n=s(e,t),a=[],r=!1;return l(t,function(t){t.inYRange(n.y)&&a.push(t),t.inRange(n.x,n.y)&&(r=!0)}),i.intersect&&!r&&(a=[]),a}}}},{45:45}],29:[function(t,e,i){"use strict";t(25)._set("global",{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},layout:{padding:{top:0,right:0,bottom:0,left:0}}}),e.exports=function(){var t=function(t,e){return this.construct(t,e),this};return t.Chart=t}},{25:25}],30:[function(t,e,i){"use strict";var N=t(45);function z(t,e){return N.where(t,function(t){return t.position===e})}function H(t,a){t.forEach(function(t,e){return t._tmpIndex_=e,t}),t.sort(function(t,e){var i=a?e:t,n=a?t:e;return i.weight===n.weight?i._tmpIndex_-n._tmpIndex_:i.weight-n.weight}),t.forEach(function(t){delete t._tmpIndex_})}e.exports={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,t.boxes.push(e)},removeBox:function(t,e){var i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure:function(t,e,i){for(var n,a=["fullWidth","position","weight"],r=a.length,o=0;o<r;++o)n=a[o],i.hasOwnProperty(n)&&(e[n]=i[n])},update:function(e,i,t){if(e){var n=e.options.layout||{},a=N.options.toPadding(n.padding),r=a.left,o=a.right,s=a.top,l=a.bottom,u=z(e.boxes,"left"),d=z(e.boxes,"right"),h=z(e.boxes,"top"),c=z(e.boxes,"bottom"),f=z(e.boxes,"chartArea");H(u,!0),H(d,!1),H(h,!0),H(c,!1);var g=i-r-o,m=t-s-l,p=m/2,v=(i-g/2)/(u.length+d.length),y=(t-p)/(h.length+c.length),b=g,x=m,_=[];N.each(u.concat(d,h,c),function(t){var e,i=t.isHorizontal();i?(e=t.update(t.fullWidth?g:b,y),x-=e.height):(e=t.update(v,x),b-=e.width),_.push({horizontal:i,minSize:e,box:t})});var k=0,w=0,M=0,S=0;N.each(h.concat(c),function(t){if(t.getPadding){var e=t.getPadding();k=Math.max(k,e.left),w=Math.max(w,e.right)}}),N.each(u.concat(d),function(t){if(t.getPadding){var e=t.getPadding();M=Math.max(M,e.top),S=Math.max(S,e.bottom)}});var D=r,C=o,P=s,T=l;N.each(u.concat(d),W),N.each(u,function(t){D+=t.width}),N.each(d,function(t){C+=t.width}),N.each(h.concat(c),W),N.each(h,function(t){P+=t.height}),N.each(c,function(t){T+=t.height}),N.each(u.concat(d),function(e){var t=N.findNextWhere(_,function(t){return t.box===e}),i={left:0,right:0,top:P,bottom:T};t&&e.update(t.minSize.width,x,i)}),D=r,C=o,P=s,T=l,N.each(u,function(t){D+=t.width}),N.each(d,function(t){C+=t.width}),N.each(h,function(t){P+=t.height}),N.each(c,function(t){T+=t.height});var O=Math.max(k-D,0);D+=O,C+=Math.max(w-C,0);var I=Math.max(M-P,0);P+=I,T+=Math.max(S-T,0);var A=t-P-T,F=i-D-C;F===b&&A===x||(N.each(u,function(t){t.height=A}),N.each(d,function(t){t.height=A}),N.each(h,function(t){t.fullWidth||(t.width=F)}),N.each(c,function(t){t.fullWidth||(t.width=F)}),x=A,b=F);var R=r+O,L=s+I;N.each(u.concat(h),Y),R+=b,L+=x,N.each(d,Y),N.each(c,Y),e.chartArea={left:D,top:P,right:D+b,bottom:P+x},N.each(f,function(t){t.left=e.chartArea.left,t.top=e.chartArea.top,t.right=e.chartArea.right,t.bottom=e.chartArea.bottom,t.update(b,x)})}function W(e){var t=N.findNextWhere(_,function(t){return t.box===e});if(t)if(e.isHorizontal()){var i={left:Math.max(D,k),right:Math.max(C,w),top:0,bottom:0};e.update(e.fullWidth?g:b,m/2,i)}else e.update(t.minSize.width,x)}function Y(t){t.isHorizontal()?(t.left=t.fullWidth?r:D,t.right=t.fullWidth?i-o:D+b,t.top=L,t.bottom=L+t.height,L=t.bottom):(t.left=R,t.right=R+t.width,t.top=P,t.bottom=P+x,R=t.right)}}}},{45:45}],31:[function(t,e,i){"use strict";var o=t(25),s=t(45);o._set("global",{plugins:{}}),e.exports={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){-1===e.indexOf(t)&&e.push(t)}),this._cacheId++},unregister:function(t){var i=this._plugins;[].concat(t).forEach(function(t){var e=i.indexOf(t);-1!==e&&i.splice(e,1)}),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,i){var n,a,r,o,s,l=this.descriptors(t),u=l.length;for(n=0;n<u;++n)if("function"==typeof(s=(r=(a=l[n]).plugin)[e])&&((o=[t].concat(i||[])).push(a.options),!1===s.apply(r,o)))return!1;return!0},descriptors:function(t){var e=t.$plugins||(t.$plugins={});if(e.id===this._cacheId)return e.descriptors;var n=[],a=[],i=t&&t.config||{},r=i.options&&i.options.plugins||{};return this._plugins.concat(i.plugins||[]).forEach(function(t){if(-1===n.indexOf(t)){var e=t.id,i=r[e];!1!==i&&(!0===i&&(i=s.clone(o.global.plugins[e])),n.push(t),a.push({plugin:t,options:i||{}}))}}),e.descriptors=a,e.id=this._cacheId,a},_invalidate:function(t){delete t.$plugins}}},{25:25,45:45}],32:[function(t,e,i){"use strict";var x=t(25),n=t(26),B=t(45),a=t(34);function M(t){var e,i,n=[];for(e=0,i=t.length;e<i;++e)n.push(t[e].label);return n}function E(t,e,i){var n=t.getPixelForTick(e);return i&&(n-=0===e?(t.getPixelForTick(1)-n)/2:(n-t.getPixelForTick(e-1))/2),n}x._set("scale",{display:!0,position:"left",offset:!1,gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",lineHeight:1.2,padding:{top:4,bottom:4}},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:a.formatters.values,minor:{},major:{}}}),e.exports=function(t){function _(t,e,i){return B.isArray(e)?B.longestText(t,i,e):t.measureText(e).width}function k(t){var e=B.valueOrDefault,i=x.global,n=e(t.fontSize,i.defaultFontSize),a=e(t.fontStyle,i.defaultFontStyle),r=e(t.fontFamily,i.defaultFontFamily);return{size:n,style:a,family:r,font:B.fontString(n,a,r)}}function w(t){return B.options.toLineHeight(B.valueOrDefault(t.lineHeight,1.2),B.valueOrDefault(t.fontSize,x.global.defaultFontSize))}t.Scale=n.extend({getPadding:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}},getTicks:function(){return this._ticks},mergeTicksOptions:function(){var t=this.options.ticks;for(var e in!1===t.minor&&(t.minor={display:!1}),!1===t.major&&(t.major={display:!1}),t)"major"!==e&&"minor"!==e&&(void 0===t.minor[e]&&(t.minor[e]=t[e]),void 0===t.major[e]&&(t.major[e]=t[e]))},beforeUpdate:function(){B.callback(this.options.beforeUpdate,[this])},update:function(t,e,i){var n,a,r,o,s,l,u=this;for(u.beforeUpdate(),u.maxWidth=t,u.maxHeight=e,u.margins=B.extend({left:0,right:0,top:0,bottom:0},i),u.longestTextCache=u.longestTextCache||{},u.beforeSetDimensions(),u.setDimensions(),u.afterSetDimensions(),u.beforeDataLimits(),u.determineDataLimits(),u.afterDataLimits(),u.beforeBuildTicks(),s=u.buildTicks()||[],u.afterBuildTicks(),u.beforeTickToLabelConversion(),r=u.convertTicksToLabels(s)||u.ticks,u.afterTickToLabelConversion(),n=0,a=(u.ticks=r).length;n<a;++n)o=r[n],(l=s[n])?l.label=o:s.push(l={label:o,major:!1});return u._ticks=s,u.beforeCalculateTickRotation(),u.calculateTickRotation(),u.afterCalculateTickRotation(),u.beforeFit(),u.fit(),u.afterFit(),u.afterUpdate(),u.minSize},afterUpdate:function(){B.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){B.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){B.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){B.callback(this.options.beforeDataLimits,[this])},determineDataLimits:B.noop,afterDataLimits:function(){B.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){B.callback(this.options.beforeBuildTicks,[this])},buildTicks:B.noop,afterBuildTicks:function(){B.callback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){B.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this.options.ticks;this.ticks=this.ticks.map(t.userCallback||t.callback,this)},afterTickToLabelConversion:function(){B.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){B.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t=this,e=t.ctx,i=t.options.ticks,n=M(t._ticks),a=k(i);e.font=a.font;var r=i.minRotation||0;if(n.length&&t.options.display&&t.isHorizontal())for(var o,s=B.longestText(e,a.font,n,t.longestTextCache),l=s,u=t.getPixelForTick(1)-t.getPixelForTick(0)-6;u<l&&r<i.maxRotation;){var d=B.toRadians(r);if(o=Math.cos(d),Math.sin(d)*s>t.maxHeight){r--;break}r++,l=o*s}t.labelRotation=r},afterCalculateTickRotation:function(){B.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){B.callback(this.options.beforeFit,[this])},fit:function(){var t=this,e=t.minSize={width:0,height:0},i=M(t._ticks),n=t.options,a=n.ticks,r=n.scaleLabel,o=n.gridLines,s=n.display,l=t.isHorizontal(),u=k(a),d=n.gridLines.tickMarkLength;if(e.width=l?t.isFullWidth()?t.maxWidth-t.margins.left-t.margins.right:t.maxWidth:s&&o.drawTicks?d:0,e.height=l?s&&o.drawTicks?d:0:t.maxHeight,r.display&&s){var h=w(r)+B.options.toPadding(r.padding).height;l?e.height+=h:e.width+=h}if(a.display&&s){var c=B.longestText(t.ctx,u.font,i,t.longestTextCache),f=B.numberOfLabelLines(i),g=.5*u.size,m=t.options.ticks.padding;if(l){t.longestLabelWidth=c;var p=B.toRadians(t.labelRotation),v=Math.cos(p),y=Math.sin(p)*c+u.size*f+g*(f-1)+g;e.height=Math.min(t.maxHeight,e.height+y+m),t.ctx.font=u.font;var b=_(t.ctx,i[0],u.font),x=_(t.ctx,i[i.length-1],u.font);0!==t.labelRotation?(t.paddingLeft="bottom"===n.position?v*b+3:v*g+3,t.paddingRight="bottom"===n.position?v*g+3:v*x+3):(t.paddingLeft=b/2+3,t.paddingRight=x/2+3)}else a.mirror?c=0:c+=m+g,e.width=Math.min(t.maxWidth,e.width+c),t.paddingTop=u.size/2,t.paddingBottom=u.size/2}t.handleMargins(),t.width=e.width,t.height=e.height},handleMargins:function(){var t=this;t.margins&&(t.paddingLeft=Math.max(t.paddingLeft-t.margins.left,0),t.paddingTop=Math.max(t.paddingTop-t.margins.top,0),t.paddingRight=Math.max(t.paddingRight-t.margins.right,0),t.paddingBottom=Math.max(t.paddingBottom-t.margins.bottom,0))},afterFit:function(){B.callback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){if(B.isNullOrUndef(t))return NaN;if("number"==typeof t&&!isFinite(t))return NaN;if(t)if(this.isHorizontal()){if(void 0!==t.x)return this.getRightValue(t.x)}else if(void 0!==t.y)return this.getRightValue(t.y);return t},getLabelForIndex:B.noop,getPixelForValue:B.noop,getValueForPixel:B.noop,getPixelForTick:function(t){var e=this,i=e.options.offset;if(e.isHorizontal()){var n=(e.width-(e.paddingLeft+e.paddingRight))/Math.max(e._ticks.length-(i?0:1),1),a=n*t+e.paddingLeft;return i&&(a+=n/2),e.left+Math.round(a)+(e.isFullWidth()?e.margins.left:0)}var r=e.height-(e.paddingTop+e.paddingBottom);return e.top+t*(r/(e._ticks.length-1))},getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var i=(e.width-(e.paddingLeft+e.paddingRight))*t+e.paddingLeft;return e.left+Math.round(i)+(e.isFullWidth()?e.margins.left:0)}return e.top+t*e.height},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this.min,e=this.max;return this.beginAtZero?0:t<0&&e<0?e:0<t&&0<e?t:0},_autoSkip:function(t){var e,i,n,a,r=this,o=r.isHorizontal(),s=r.options.ticks.minor,l=t.length,u=B.toRadians(r.labelRotation),d=Math.cos(u),h=r.longestLabelWidth*d,c=[];for(s.maxTicksLimit&&(a=s.maxTicksLimit),o&&(e=!1,(h+s.autoSkipPadding)*l>r.width-(r.paddingLeft+r.paddingRight)&&(e=1+Math.floor((h+s.autoSkipPadding)*l/(r.width-(r.paddingLeft+r.paddingRight)))),a&&a<l&&(e=Math.max(e,Math.floor(l/a)))),i=0;i<l;i++)n=t[i],(1<e&&0<i%e||i%e==0&&l<=i+e)&&i!==l-1&&delete n.label,c.push(n);return c},draw:function(S){var D=this,C=D.options;if(C.display){var o=D.ctx,P=x.global,T=C.ticks.minor,t=C.ticks.major||T,O=C.gridLines,e=C.scaleLabel,I=0!==D.labelRotation,A=D.isHorizontal(),F=T.autoSkip?D._autoSkip(D.getTicks()):D.getTicks(),s=B.valueOrDefault(T.fontColor,P.defaultFontColor),l=k(T),u=B.valueOrDefault(t.fontColor,P.defaultFontColor),d=k(t),R=O.drawTicks?O.tickMarkLength:0,i=B.valueOrDefault(e.fontColor,P.defaultFontColor),n=k(e),a=B.options.toPadding(e.padding),L=B.toRadians(D.labelRotation),W=[],Y=D.options.gridLines.lineWidth,N="right"===C.position?D.right:D.right-Y-R,z="right"===C.position?D.right+R:D.right,H="bottom"===C.position?D.top+Y:D.bottom-R-Y,V="bottom"===C.position?D.top+Y+R:D.bottom+Y;if(B.each(F,function(t,e){if(!B.isNullOrUndef(t.label)){var i,n,a,r,o,s,l,u,d,h,c,f,g,m,p=t.label;e===D.zeroLineIndex&&C.offset===O.offsetGridLines?(i=O.zeroLineWidth,n=O.zeroLineColor,a=O.zeroLineBorderDash,r=O.zeroLineBorderDashOffset):(i=B.valueAtIndexOrDefault(O.lineWidth,e),n=B.valueAtIndexOrDefault(O.color,e),a=B.valueOrDefault(O.borderDash,P.borderDash),r=B.valueOrDefault(O.borderDashOffset,P.borderDashOffset));var v="middle",y="middle",b=T.padding;if(A){var x=R+b;"bottom"===C.position?(y=I?"middle":"top",v=I?"right":"center",m=D.top+x):(y=I?"middle":"bottom",v=I?"left":"center",m=D.bottom-x);var _=E(D,e,O.offsetGridLines&&1<F.length);_<D.left&&(n="rgba(0,0,0,0)"),_+=B.aliasPixel(i),g=D.getPixelForTick(e)+T.labelOffset,o=l=d=c=_,s=H,u=V,h=S.top,f=S.bottom+Y}else{var k,w="left"===C.position;T.mirror?(v=w?"left":"right",k=b):(v=w?"right":"left",k=R+b),g=w?D.right-k:D.left+k;var M=E(D,e,O.offsetGridLines&&1<F.length);M<D.top&&(n="rgba(0,0,0,0)"),M+=B.aliasPixel(i),m=D.getPixelForTick(e)+T.labelOffset,o=N,l=z,d=S.left,c=S.right+Y,s=u=h=f=M}W.push({tx1:o,ty1:s,tx2:l,ty2:u,x1:d,y1:h,x2:c,y2:f,labelX:g,labelY:m,glWidth:i,glColor:n,glBorderDash:a,glBorderDashOffset:r,rotation:-1*L,label:p,major:t.major,textBaseline:y,textAlign:v})}}),B.each(W,function(t){if(O.display&&(o.save(),o.lineWidth=t.glWidth,o.strokeStyle=t.glColor,o.setLineDash&&(o.setLineDash(t.glBorderDash),o.lineDashOffset=t.glBorderDashOffset),o.beginPath(),O.drawTicks&&(o.moveTo(t.tx1,t.ty1),o.lineTo(t.tx2,t.ty2)),O.drawOnChartArea&&(o.moveTo(t.x1,t.y1),o.lineTo(t.x2,t.y2)),o.stroke(),o.restore()),T.display){o.save(),o.translate(t.labelX,t.labelY),o.rotate(t.rotation),o.font=t.major?d.font:l.font,o.fillStyle=t.major?u:s,o.textBaseline=t.textBaseline,o.textAlign=t.textAlign;var e=t.label;if(B.isArray(e))for(var i=e.length,n=1.5*l.size,a=D.isHorizontal()?0:-n*(i-1)/2,r=0;r<i;++r)o.fillText(""+e[r],0,a),a+=n;else o.fillText(e,0,0);o.restore()}}),e.display){var r,h,c=0,f=w(e)/2;if(A)r=D.left+(D.right-D.left)/2,h="bottom"===C.position?D.bottom-f-a.bottom:D.top+f+a.top;else{var g="left"===C.position;r=g?D.left+f+a.top:D.right-f-a.top,h=D.top+(D.bottom-D.top)/2,c=g?-.5*Math.PI:.5*Math.PI}o.save(),o.translate(r,h),o.rotate(c),o.textAlign="center",o.textBaseline="middle",o.fillStyle=i,o.font=n.font,o.fillText(e.labelString,0,0),o.restore()}if(O.drawBorder){o.lineWidth=B.valueAtIndexOrDefault(O.lineWidth,0),o.strokeStyle=B.valueAtIndexOrDefault(O.color,0);var m=D.left,p=D.right+Y,v=D.top,y=D.bottom+Y,b=B.aliasPixel(o.lineWidth);A?(v=y="top"===C.position?D.bottom:D.top,v+=b,y+=b):(m=p="left"===C.position?D.right:D.left,m+=b,p+=b),o.beginPath(),o.moveTo(m,v),o.lineTo(p,y),o.stroke()}}}})}},{25:25,26:26,34:34,45:45}],33:[function(t,e,i){"use strict";var n=t(25),a=t(45),r=t(30);e.exports=function(t){t.scaleService={constructors:{},defaults:{},registerScaleType:function(t,e,i){this.constructors[t]=e,this.defaults[t]=a.clone(i)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(t){return this.defaults.hasOwnProperty(t)?a.merge({},[n.scale,this.defaults[t]]):{}},updateScaleDefaults:function(t,e){this.defaults.hasOwnProperty(t)&&(this.defaults[t]=a.extend(this.defaults[t],e))},addScalesToLayout:function(e){a.each(e.scales,function(t){t.fullWidth=t.options.fullWidth,t.position=t.options.position,t.weight=t.options.weight,r.addBox(e,t)})}}}},{25:25,30:30,45:45}],34:[function(t,e,i){"use strict";var s=t(45);e.exports={formatters:{values:function(t){return s.isArray(t)?t:""+t},linear:function(t,e,i){var n=3<i.length?i[2]-i[1]:i[1]-i[0];1<Math.abs(n)&&t!==Math.floor(t)&&(n=t-Math.floor(t));var a=s.log10(Math.abs(n)),r="";if(0!==t){var o=-1*Math.floor(a);o=Math.max(Math.min(o,20),0),r=t.toFixed(o)}else r="0";return r},logarithmic:function(t,e,i){var n=t/Math.pow(10,Math.floor(s.log10(t)));return 0===t?"0":1===n||2===n||5===n||0===e||e===i.length-1?t.toExponential():""}}}},{45:45}],35:[function(t,e,i){"use strict";var n=t(25),a=t(26),W=t(45);n._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:W.noop,title:function(t,e){var i="",n=e.labels,a=n?n.length:0;if(0<t.length){var r=t[0];r.xLabel?i=r.xLabel:0<a&&r.index<a&&(i=n[r.index])}return i},afterTitle:W.noop,beforeBody:W.noop,beforeLabel:W.noop,label:function(t,e){var i=e.datasets[t.datasetIndex].label||"";return i&&(i+=": "),i+t.yLabel},labelColor:function(t,e){var i=e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return{borderColor:i.borderColor,backgroundColor:i.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:W.noop,afterBody:W.noop,beforeFooter:W.noop,footer:W.noop,afterFooter:W.noop}}}),e.exports=function(R){function c(t,e){var i=W.color(t);return i.alpha(e*i.alpha()).rgbaString()}function o(t,e){return e&&(W.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function L(t){var e=n.global,i=W.valueOrDefault;return{xPadding:t.xPadding,yPadding:t.yPadding,xAlign:t.xAlign,yAlign:t.yAlign,bodyFontColor:t.bodyFontColor,_bodyFontFamily:i(t.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:i(t.bodyFontStyle,e.defaultFontStyle),_bodyAlign:t.bodyAlign,bodyFontSize:i(t.bodyFontSize,e.defaultFontSize),bodySpacing:t.bodySpacing,titleFontColor:t.titleFontColor,_titleFontFamily:i(t.titleFontFamily,e.defaultFontFamily),_titleFontStyle:i(t.titleFontStyle,e.defaultFontStyle),titleFontSize:i(t.titleFontSize,e.defaultFontSize),_titleAlign:t.titleAlign,titleSpacing:t.titleSpacing,titleMarginBottom:t.titleMarginBottom,footerFontColor:t.footerFontColor,_footerFontFamily:i(t.footerFontFamily,e.defaultFontFamily),_footerFontStyle:i(t.footerFontStyle,e.defaultFontStyle),footerFontSize:i(t.footerFontSize,e.defaultFontSize),_footerAlign:t.footerAlign,footerSpacing:t.footerSpacing,footerMarginTop:t.footerMarginTop,caretSize:t.caretSize,cornerRadius:t.cornerRadius,backgroundColor:t.backgroundColor,opacity:0,legendColorBackground:t.multiKeyBackground,displayColors:t.displayColors,borderColor:t.borderColor,borderWidth:t.borderWidth}}R.Tooltip=a.extend({initialize:function(){this._model=L(this._options),this._lastActive=[]},getTitle:function(){var t=this._options.callbacks,e=t.beforeTitle.apply(this,arguments),i=t.title.apply(this,arguments),n=t.afterTitle.apply(this,arguments),a=[];return o(a=o(a=o(a,e),i),n)},getBeforeBody:function(){var t=this._options.callbacks.beforeBody.apply(this,arguments);return W.isArray(t)?t:void 0!==t?[t]:[]},getBody:function(t,i){var n=this,a=n._options.callbacks,r=[];return W.each(t,function(t){var e={before:[],lines:[],after:[]};o(e.before,a.beforeLabel.call(n,t,i)),o(e.lines,a.label.call(n,t,i)),o(e.after,a.afterLabel.call(n,t,i)),r.push(e)}),r},getAfterBody:function(){var t=this._options.callbacks.afterBody.apply(this,arguments);return W.isArray(t)?t:void 0!==t?[t]:[]},getFooter:function(){var t=this._options.callbacks,e=t.beforeFooter.apply(this,arguments),i=t.footer.apply(this,arguments),n=t.afterFooter.apply(this,arguments),a=[];return o(a=o(a=o(a,e),i),n)},update:function(t){var e,i,n,a,r,o,s,l,u,d,h,c,f,g,m,p,v,y,b,x,_=this,k=_._options,w=_._model,M=_._model=L(k),S=_._active,D=_._data,C={xAlign:w.xAlign,yAlign:w.yAlign},P={x:w.x,y:w.y},T={width:w.width,height:w.height},O={x:w.caretX,y:w.caretY};if(S.length){M.opacity=1;var I=[],A=[];O=R.Tooltip.positioners[k.position].call(_,S,_._eventPosition);var F=[];for(e=0,i=S.length;e<i;++e)F.push((y=v=void 0,v=(p=S[e])._xScale,y=p._yScale||p._scale,b=p._index,x=p._datasetIndex,{xLabel:v?v.getLabelForIndex(b,x):"",yLabel:y?y.getLabelForIndex(b,x):"",index:b,datasetIndex:x,x:p._model.x,y:p._model.y}));k.filter&&(F=F.filter(function(t){return k.filter(t,D)})),k.itemSort&&(F=F.sort(function(t,e){return k.itemSort(t,e,D)})),W.each(F,function(t){I.push(k.callbacks.labelColor.call(_,t,_._chart)),A.push(k.callbacks.labelTextColor.call(_,t,_._chart))}),M.title=_.getTitle(F,D),M.beforeBody=_.getBeforeBody(F,D),M.body=_.getBody(F,D),M.afterBody=_.getAfterBody(F,D),M.footer=_.getFooter(F,D),M.x=Math.round(O.x),M.y=Math.round(O.y),M.caretPadding=k.caretPadding,M.labelColors=I,M.labelTextColors=A,M.dataPoints=F,C=function(t,e){var i,n,a,r,o,s=t._model,l=t._chart,u=t._chart.chartArea,d="center",h="center";s.y<e.height?h="top":s.y>l.height-e.height&&(h="bottom");var c=(u.left+u.right)/2,f=(u.top+u.bottom)/2;"center"===h?(i=function(t){return t<=c},n=function(t){return c<t}):(i=function(t){return t<=e.width/2},n=function(t){return t>=l.width-e.width/2}),a=function(t){return t+e.width+s.caretSize+s.caretPadding>l.width},r=function(t){return t-e.width-s.caretSize-s.caretPadding<0},o=function(t){return t<=f?"top":"bottom"},i(s.x)?(d="left",a(s.x)&&(d="center",h=o(s.y))):n(s.x)&&(d="right",r(s.x)&&(d="center",h=o(s.y)));var g=t._options;return{xAlign:g.xAlign?g.xAlign:d,yAlign:g.yAlign?g.yAlign:h}}(this,T=function(t,e){var i=t._chart.ctx,n=2*e.yPadding,a=0,r=e.body,o=r.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);o+=e.beforeBody.length+e.afterBody.length;var s=e.title.length,l=e.footer.length,u=e.titleFontSize,d=e.bodyFontSize,h=e.footerFontSize;n+=s*u,n+=s?(s-1)*e.titleSpacing:0,n+=s?e.titleMarginBottom:0,n+=o*d,n+=o?(o-1)*e.bodySpacing:0,n+=l?e.footerMarginTop:0,n+=l*h,n+=l?(l-1)*e.footerSpacing:0;var c=0,f=function(t){a=Math.max(a,i.measureText(t).width+c)};return i.font=W.fontString(u,e._titleFontStyle,e._titleFontFamily),W.each(e.title,f),i.font=W.fontString(d,e._bodyFontStyle,e._bodyFontFamily),W.each(e.beforeBody.concat(e.afterBody),f),c=e.displayColors?d+2:0,W.each(r,function(t){W.each(t.before,f),W.each(t.lines,f),W.each(t.after,f)}),c=0,i.font=W.fontString(h,e._footerFontStyle,e._footerFontFamily),W.each(e.footer,f),{width:a+=2*e.xPadding,height:n}}(this,M)),n=M,a=T,r=C,o=_._chart,s=n.x,l=n.y,u=n.caretSize,d=n.caretPadding,h=n.cornerRadius,c=r.xAlign,f=r.yAlign,g=u+d,m=h+d,"right"===c?s-=a.width:"center"===c&&((s-=a.width/2)+a.width>o.width&&(s=o.width-a.width),s<0&&(s=0)),"top"===f?l+=g:l-="bottom"===f?a.height+g:a.height/2,"center"===f?"left"===c?s+=g:"right"===c&&(s-=g):"left"===c?s-=m:"right"===c&&(s+=m),P={x:s,y:l}}else M.opacity=0;return M.xAlign=C.xAlign,M.yAlign=C.yAlign,M.x=P.x,M.y=P.y,M.width=T.width,M.height=T.height,M.caretX=O.x,M.caretY=O.y,_._model=M,t&&k.custom&&k.custom.call(_,M),_},drawCaret:function(t,e){var i=this._chart.ctx,n=this._view,a=this.getCaretPosition(t,e,n);i.lineTo(a.x1,a.y1),i.lineTo(a.x2,a.y2),i.lineTo(a.x3,a.y3)},getCaretPosition:function(t,e,i){var n,a,r,o,s,l,u=i.caretSize,d=i.cornerRadius,h=i.xAlign,c=i.yAlign,f=t.x,g=t.y,m=e.width,p=e.height;if("center"===c)s=g+p/2,"left"===h?(a=(n=f)-u,r=n,o=s+u,l=s-u):(a=(n=f+m)+u,r=n,o=s-u,l=s+u);else if(n="left"===h?(a=f+d+u)-u:"right"===h?(a=f+m-d-u)-u:(a=i.caretX)-u,r=a+u,"top"===c)s=(o=g)-u,l=o;else{s=(o=g+p)+u,l=o;var v=r;r=n,n=v}return{x1:n,x2:a,x3:r,y1:o,y2:s,y3:l}},drawTitle:function(t,e,i,n){var a=e.title;if(a.length){i.textAlign=e._titleAlign,i.textBaseline="top";var r,o,s=e.titleFontSize,l=e.titleSpacing;for(i.fillStyle=c(e.titleFontColor,n),i.font=W.fontString(s,e._titleFontStyle,e._titleFontFamily),r=0,o=a.length;r<o;++r)i.fillText(a[r],t.x,t.y),t.y+=s+l,r+1===a.length&&(t.y+=e.titleMarginBottom-l)}},drawBody:function(n,a,r,o){var s=a.bodyFontSize,e=a.bodySpacing,t=a.body;r.textAlign=a._bodyAlign,r.textBaseline="top",r.font=W.fontString(s,a._bodyFontStyle,a._bodyFontFamily);var i=0,l=function(t){r.fillText(t,n.x+i,n.y),n.y+=s+e};r.fillStyle=c(a.bodyFontColor,o),W.each(a.beforeBody,l);var u=a.displayColors;i=u?s+2:0,W.each(t,function(t,e){var i=c(a.labelTextColors[e],o);r.fillStyle=i,W.each(t.before,l),W.each(t.lines,function(t){u&&(r.fillStyle=c(a.legendColorBackground,o),r.fillRect(n.x,n.y,s,s),r.lineWidth=1,r.strokeStyle=c(a.labelColors[e].borderColor,o),r.strokeRect(n.x,n.y,s,s),r.fillStyle=c(a.labelColors[e].backgroundColor,o),r.fillRect(n.x+1,n.y+1,s-2,s-2),r.fillStyle=i),l(t)}),W.each(t.after,l)}),i=0,W.each(a.afterBody,l),n.y-=e},drawFooter:function(e,i,n,t){var a=i.footer;a.length&&(e.y+=i.footerMarginTop,n.textAlign=i._footerAlign,n.textBaseline="top",n.fillStyle=c(i.footerFontColor,t),n.font=W.fontString(i.footerFontSize,i._footerFontStyle,i._footerFontFamily),W.each(a,function(t){n.fillText(t,e.x,e.y),e.y+=i.footerFontSize+i.footerSpacing}))},drawBackground:function(t,e,i,n,a){i.fillStyle=c(e.backgroundColor,a),i.strokeStyle=c(e.borderColor,a),i.lineWidth=e.borderWidth;var r=e.xAlign,o=e.yAlign,s=t.x,l=t.y,u=n.width,d=n.height,h=e.cornerRadius;i.beginPath(),i.moveTo(s+h,l),"top"===o&&this.drawCaret(t,n),i.lineTo(s+u-h,l),i.quadraticCurveTo(s+u,l,s+u,l+h),"center"===o&&"right"===r&&this.drawCaret(t,n),i.lineTo(s+u,l+d-h),i.quadraticCurveTo(s+u,l+d,s+u-h,l+d),"bottom"===o&&this.drawCaret(t,n),i.lineTo(s+h,l+d),i.quadraticCurveTo(s,l+d,s,l+d-h),"center"===o&&"left"===r&&this.drawCaret(t,n),i.lineTo(s,l+h),i.quadraticCurveTo(s,l,s+h,l),i.closePath(),i.fill(),0<e.borderWidth&&i.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var i={width:e.width,height:e.height},n={x:e.x,y:e.y},a=Math.abs(e.opacity<.001)?0:e.opacity,r=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&r&&(this.drawBackground(n,e,t,i,a),n.x+=e.xPadding,n.y+=e.yPadding,this.drawTitle(n,e,t,a),this.drawBody(n,e,t,a),this.drawFooter(n,e,t,a))}},handleEvent:function(t){var e,i=this,n=i._options;return i._lastActive=i._lastActive||[],"mouseout"===t.type?i._active=[]:i._active=i._chart.getElementsAtEventForMode(t,n.mode,n),(e=!W.arrayEquals(i._active,i._lastActive))&&(i._lastActive=i._active,(n.enabled||n.custom)&&(i._eventPosition={x:t.x,y:t.y},i.update(!0),i.pivot())),e}}),R.Tooltip.positioners={average:function(t){if(!t.length)return!1;var e,i,n=0,a=0,r=0;for(e=0,i=t.length;e<i;++e){var o=t[e];if(o&&o.hasValue()){var s=o.tooltipPosition();n+=s.x,a+=s.y,++r}}return{x:Math.round(n/r),y:Math.round(a/r)}},nearest:function(t,e){var i,n,a,r=e.x,o=e.y,s=Number.POSITIVE_INFINITY;for(i=0,n=t.length;i<n;++i){var l=t[i];if(l&&l.hasValue()){var u=l.getCenterPoint(),d=W.distanceBetweenPoints(e,u);d<s&&(s=d,a=l)}}if(a){var h=a.tooltipPosition();r=h.x,o=h.y}return{x:r,y:o}}}}},{25:25,26:26,45:45}],36:[function(t,e,i){"use strict";var n=t(25),a=t(26),d=t(45);n._set("global",{elements:{arc:{backgroundColor:n.global.defaultColor,borderColor:"#fff",borderWidth:2}}}),e.exports=a.extend({inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,e){var i=this._view;if(i){for(var n=d.getAngleFromPoint(i,{x:t,y:e}),a=n.angle,r=n.distance,o=i.startAngle,s=i.endAngle;s<o;)s+=2*Math.PI;for(;s<a;)a-=2*Math.PI;for(;a<o;)a+=2*Math.PI;var l=o<=a&&a<=s,u=r>=i.innerRadius&&r<=i.outerRadius;return l&&u}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,i=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,i=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},draw:function(){var t=this._chart.ctx,e=this._view,i=e.startAngle,n=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,i,n),t.arc(e.x,e.y,e.innerRadius,n,i,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})},{25:25,26:26,45:45}],37:[function(t,e,i){"use strict";var n=t(25),a=t(26),d=t(45),h=n.global;n._set("global",{elements:{line:{tension:.4,backgroundColor:h.defaultColor,borderWidth:3,borderColor:h.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}}),e.exports=a.extend({draw:function(){var t,e,i,n,a=this._view,r=this._chart.ctx,o=a.spanGaps,s=this._children.slice(),l=h.elements.line,u=-1;for(this._loop&&s.length&&s.push(s[0]),r.save(),r.lineCap=a.borderCapStyle||l.borderCapStyle,r.setLineDash&&r.setLineDash(a.borderDash||l.borderDash),r.lineDashOffset=a.borderDashOffset||l.borderDashOffset,r.lineJoin=a.borderJoinStyle||l.borderJoinStyle,r.lineWidth=a.borderWidth||l.borderWidth,r.strokeStyle=a.borderColor||h.defaultColor,r.beginPath(),u=-1,t=0;t<s.length;++t)e=s[t],i=d.previousItem(s,t),n=e._view,0===t?n.skip||(r.moveTo(n.x,n.y),u=t):(i=-1===u?i:s[u],n.skip||(u!==t-1&&!o||-1===u?r.moveTo(n.x,n.y):d.canvas.lineTo(r,i._view,e._view),u=t));r.stroke(),r.restore()}})},{25:25,26:26,45:45}],38:[function(t,e,i){"use strict";var d=t(25),n=t(26),h=t(45),c=d.global.defaultColor;function a(t){var e=this._view;return!!e&&Math.abs(t-e.x)<e.radius+e.hitRadius}d._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:c,borderColor:c,borderWidth:1,hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}}),e.exports=n.extend({inRange:function(t,e){var i=this._view;return!!i&&Math.pow(t-i.x,2)+Math.pow(e-i.y,2)<Math.pow(i.hitRadius+i.radius,2)},inLabelRange:a,inXRange:a,inYRange:function(t){var e=this._view;return!!e&&Math.abs(t-e.y)<e.radius+e.hitRadius},getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(t){var e=this._view,i=this._model,n=this._chart.ctx,a=e.pointStyle,r=e.radius,o=e.x,s=e.y,l=h.color,u=0;e.skip||(n.strokeStyle=e.borderColor||c,n.lineWidth=h.valueOrDefault(e.borderWidth,d.global.elements.point.borderWidth),n.fillStyle=e.backgroundColor||c,void 0!==t&&(i.x<t.left||1.01*t.right<i.x||i.y<t.top||1.01*t.bottom<i.y)&&(i.x<t.left?u=(o-i.x)/(t.left-i.x):1.01*t.right<i.x?u=(i.x-o)/(i.x-t.right):i.y<t.top?u=(s-i.y)/(t.top-i.y):1.01*t.bottom<i.y&&(u=(i.y-s)/(i.y-t.bottom)),u=Math.round(100*u)/100,n.strokeStyle=l(n.strokeStyle).alpha(u).rgbString(),n.fillStyle=l(n.fillStyle).alpha(u).rgbString()),h.canvas.drawPoint(n,a,r,o,s))}})},{25:25,26:26,45:45}],39:[function(t,e,i){"use strict";var n=t(25),a=t(26);function l(t){return void 0!==t._view.width}function r(t){var e,i,n,a,r=t._view;if(l(t)){var o=r.width/2;e=r.x-o,i=r.x+o,n=Math.min(r.y,r.base),a=Math.max(r.y,r.base)}else{var s=r.height/2;e=Math.min(r.x,r.base),i=Math.max(r.x,r.base),n=r.y-s,a=r.y+s}return{left:e,top:n,right:i,bottom:a}}n._set("global",{elements:{rectangle:{backgroundColor:n.global.defaultColor,borderColor:n.global.defaultColor,borderSkipped:"bottom",borderWidth:0}}}),e.exports=a.extend({draw:function(){var t,e,i,n,a,r,o,s=this._chart.ctx,l=this._view,u=l.borderWidth;if(l.horizontal?(t=l.base,e=l.x,i=l.y-l.height/2,n=l.y+l.height/2,a=t<e?1:-1,r=1,o=l.borderSkipped||"left"):(t=l.x-l.width/2,e=l.x+l.width/2,i=l.y,a=1,r=(n=l.base)>i?1:-1,o=l.borderSkipped||"bottom"),u){var d=Math.min(Math.abs(t-e),Math.abs(i-n)),h=(u=d<u?d:u)/2,c=t+("left"!==o?h*a:0),f=e+("right"!==o?-h*a:0),g=i+("top"!==o?h*r:0),m=n+("bottom"!==o?-h*r:0);c!==f&&(i=g,n=m),g!==m&&(t=c,e=f)}s.beginPath(),s.fillStyle=l.backgroundColor,s.strokeStyle=l.borderColor,s.lineWidth=u;var p=[[t,n],[t,i],[e,i],[e,n]],v=["bottom","left","top","right"].indexOf(o,0);function y(t){return p[(v+t)%4]}-1===v&&(v=0);var b=y(0);s.moveTo(b[0],b[1]);for(var x=1;x<4;x++)b=y(x),s.lineTo(b[0],b[1]);s.fill(),u&&s.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var i=!1;if(this._view){var n=r(this);i=t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom}return i},inLabelRange:function(t,e){if(!this._view)return!1;var i=r(this);return l(this)?t>=i.left&&t<=i.right:e>=i.top&&e<=i.bottom},inXRange:function(t){var e=r(this);return t>=e.left&&t<=e.right},inYRange:function(t){var e=r(this);return t>=e.top&&t<=e.bottom},getCenterPoint:function(){var t,e,i=this._view;return l(this)?(t=i.x,e=(i.y+i.base)/2):(t=(i.x+i.base)/2,e=i.y),{x:t,y:e}},getArea:function(){var t=this._view;return t.width*Math.abs(t.y-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})},{25:25,26:26}],40:[function(t,e,i){"use strict";e.exports={},e.exports.Arc=t(36),e.exports.Line=t(37),e.exports.Point=t(38),e.exports.Rectangle=t(39)},{36:36,37:37,38:38,39:39}],41:[function(t,e,i){"use strict";var n=t(42);i=e.exports={clear:function(t){t.ctx.clearRect(0,0,t.width,t.height)},roundedRect:function(t,e,i,n,a,r){if(r){var o=Math.min(r,n/2),s=Math.min(r,a/2);t.moveTo(e+o,i),t.lineTo(e+n-o,i),t.quadraticCurveTo(e+n,i,e+n,i+s),t.lineTo(e+n,i+a-s),t.quadraticCurveTo(e+n,i+a,e+n-o,i+a),t.lineTo(e+o,i+a),t.quadraticCurveTo(e,i+a,e,i+a-s),t.lineTo(e,i+s),t.quadraticCurveTo(e,i,e+o,i)}else t.rect(e,i,n,a)},drawPoint:function(t,e,i,n,a){var r,o,s,l,u,d;if(!e||"object"!=typeof e||"[object HTMLImageElement]"!==(r=e.toString())&&"[object HTMLCanvasElement]"!==r){if(!(isNaN(i)||i<=0)){switch(e){default:t.beginPath(),t.arc(n,a,i,0,2*Math.PI),t.closePath(),t.fill();break;case"triangle":t.beginPath(),u=(o=3*i/Math.sqrt(3))*Math.sqrt(3)/2,t.moveTo(n-o/2,a+u/3),t.lineTo(n+o/2,a+u/3),t.lineTo(n,a-2*u/3),t.closePath(),t.fill();break;case"rect":d=1/Math.SQRT2*i,t.beginPath(),t.fillRect(n-d,a-d,2*d,2*d),t.strokeRect(n-d,a-d,2*d,2*d);break;case"rectRounded":var h=i/Math.SQRT2,c=n-h,f=a-h,g=Math.SQRT2*i;t.beginPath(),this.roundedRect(t,c,f,g,g,i/2),t.closePath(),t.fill();break;case"rectRot":d=1/Math.SQRT2*i,t.beginPath(),t.moveTo(n-d,a),t.lineTo(n,a+d),t.lineTo(n+d,a),t.lineTo(n,a-d),t.closePath(),t.fill();break;case"cross":t.beginPath(),t.moveTo(n,a+i),t.lineTo(n,a-i),t.moveTo(n-i,a),t.lineTo(n+i,a),t.closePath();break;case"crossRot":t.beginPath(),s=Math.cos(Math.PI/4)*i,l=Math.sin(Math.PI/4)*i,t.moveTo(n-s,a-l),t.lineTo(n+s,a+l),t.moveTo(n-s,a+l),t.lineTo(n+s,a-l),t.closePath();break;case"star":t.beginPath(),t.moveTo(n,a+i),t.lineTo(n,a-i),t.moveTo(n-i,a),t.lineTo(n+i,a),s=Math.cos(Math.PI/4)*i,l=Math.sin(Math.PI/4)*i,t.moveTo(n-s,a-l),t.lineTo(n+s,a+l),t.moveTo(n-s,a+l),t.lineTo(n+s,a-l),t.closePath();break;case"line":t.beginPath(),t.moveTo(n-i,a),t.lineTo(n+i,a),t.closePath();break;case"dash":t.beginPath(),t.moveTo(n,a),t.lineTo(n+i,a),t.closePath()}t.stroke()}}else t.drawImage(e,n-e.width/2,a-e.height/2,e.width,e.height)},clipArea:function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},unclipArea:function(t){t.restore()},lineTo:function(t,e,i,n){if(i.steppedLine)return"after"===i.steppedLine&&!n||"after"!==i.steppedLine&&n?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y),void t.lineTo(i.x,i.y);i.tension?t.bezierCurveTo(n?e.controlPointPreviousX:e.controlPointNextX,n?e.controlPointPreviousY:e.controlPointNextY,n?i.controlPointNextX:i.controlPointPreviousX,n?i.controlPointNextY:i.controlPointPreviousY,i.x,i.y):t.lineTo(i.x,i.y)}},n.clear=i.clear,n.drawRoundedRectangle=function(t){t.beginPath(),i.roundedRect.apply(i,arguments),t.closePath()}},{42:42}],42:[function(t,e,i){"use strict";var n,d={noop:function(){},uid:(n=0,function(){return n++}),isNullOrUndef:function(t){return null==t},isArray:Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},isObject:function(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)},valueOrDefault:function(t,e){return void 0===t?e:t},valueAtIndexOrDefault:function(t,e,i){return d.valueOrDefault(d.isArray(t)?t[e]:t,i)},callback:function(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)},each:function(t,e,i,n){var a,r,o;if(d.isArray(t))if(r=t.length,n)for(a=r-1;0<=a;a--)e.call(i,t[a],a);else for(a=0;a<r;a++)e.call(i,t[a],a);else if(d.isObject(t))for(r=(o=Object.keys(t)).length,a=0;a<r;a++)e.call(i,t[o[a]],o[a])},arrayEquals:function(t,e){var i,n,a,r;if(!t||!e||t.length!==e.length)return!1;for(i=0,n=t.length;i<n;++i)if(a=t[i],r=e[i],a instanceof Array&&r instanceof Array){if(!d.arrayEquals(a,r))return!1}else if(a!==r)return!1;return!0},clone:function(t){if(d.isArray(t))return t.map(d.clone);if(d.isObject(t)){for(var e={},i=Object.keys(t),n=i.length,a=0;a<n;++a)e[i[a]]=d.clone(t[i[a]]);return e}return t},_merger:function(t,e,i,n){var a=e[t],r=i[t];d.isObject(a)&&d.isObject(r)?d.merge(a,r,n):e[t]=d.clone(r)},_mergerIf:function(t,e,i){var n=e[t],a=i[t];d.isObject(n)&&d.isObject(a)?d.mergeIf(n,a):e.hasOwnProperty(t)||(e[t]=d.clone(a))},merge:function(t,e,i){var n,a,r,o,s,l=d.isArray(e)?e:[e],u=l.length;if(!d.isObject(t))return t;for(n=(i=i||{}).merger||d._merger,a=0;a<u;++a)if(e=l[a],d.isObject(e))for(s=0,o=(r=Object.keys(e)).length;s<o;++s)n(r[s],t,e,i);return t},mergeIf:function(t,e){return d.merge(t,e,{merger:d._mergerIf})},extend:function(i){for(var t=function(t,e){i[e]=t},e=1,n=arguments.length;e<n;++e)d.each(arguments[e],t);return i},inherits:function(t){var e=this,i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},n=function(){this.constructor=i};return n.prototype=e.prototype,i.prototype=new n,i.extend=d.inherits,t&&d.extend(i.prototype,t),i.__super__=e.prototype,i}};(e.exports=d).callCallback=d.callback,d.indexOf=function(t,e,i){return Array.prototype.indexOf.call(t,e,i)},d.getValueOrDefault=d.valueOrDefault,d.getValueAtIndexOrDefault=d.valueAtIndexOrDefault},{}],43:[function(t,e,i){"use strict";var n=t(42),a={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(t-=1)*t*t+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-((t-=1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return(t-=1)*t*t*t*t+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return 1<=t?t:-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t-=1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1===t?1:(i||(i=.3),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i))},easeOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1===t?1:(i||(i=.3),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/i)+1)},easeInOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:2==(t/=.5)?1:(i||(i=.45),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),t<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*.5+1)},easeInBack:function(t){return t*t*(2.70158*t-1.70158)},easeOutBack:function(t){return(t-=1)*t*(2.70158*t+1.70158)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-a.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*a.easeInBounce(2*t):.5*a.easeOutBounce(2*t-1)+.5}};e.exports={effects:a},n.easingEffects=a},{42:42}],44:[function(t,e,i){"use strict";var o=t(42);e.exports={toLineHeight:function(t,e){var i=(""+t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t},toPadding:function(t){var e,i,n,a;return o.isObject(t)?(e=+t.top||0,i=+t.right||0,n=+t.bottom||0,a=+t.left||0):e=i=n=a=+t||0,{top:e,right:i,bottom:n,left:a,height:e+n,width:a+i}},resolve:function(t,e,i){var n,a,r;for(n=0,a=t.length;n<a;++n)if(void 0!==(r=t[n])&&(void 0!==e&&"function"==typeof r&&(r=r(e)),void 0!==i&&o.isArray(r)&&(r=r[i]),void 0!==r))return r}}},{42:42}],45:[function(t,e,i){"use strict";e.exports=t(42),e.exports.easing=t(43),e.exports.canvas=t(41),e.exports.options=t(44)},{41:41,42:42,43:43,44:44}],46:[function(t,e,i){e.exports={acquireContext:function(t){return t&&t.canvas&&(t=t.canvas),t&&t.getContext("2d")||null}}},{}],47:[function(t,e,i){"use strict";var y=t(45),b="$chartjs",x="chartjs-",_=x+"render-monitor",k=x+"render-animation",w=["animationstart","webkitAnimationStart"],M={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};function s(t,e){var i=y.getStyle(t,e),n=i&&i.match(/^(\d+)(\.\d+)?px$/);return n?Number(n[1]):void 0}var n=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("e",null,e)}catch(t){}return t}()&&{passive:!0};function S(t,e,i){t.addEventListener(e,i,n)}function h(t,e,i){t.removeEventListener(e,i,n)}function D(t,e,i,n,a){return{type:t,chart:e,native:a||null,x:void 0!==i?i:null,y:void 0!==n?n:null}}e.exports={_enabled:"undefined"!=typeof window&&"undefined"!=typeof document,initialize:function(){var t,e,i="from{opacity:0.99}to{opacity:1}";t="@-webkit-keyframes "+k+"{"+i+"}@keyframes "+k+"{"+i+"}."+_+"{-webkit-animation:"+k+" 0.001s;animation:"+k+" 0.001s;}",e=this._style||document.createElement("style"),this._style||(t="/* Chart.js */\n"+t,(this._style=e).setAttribute("type","text/css"),document.getElementsByTagName("head")[0].appendChild(e)),e.appendChild(document.createTextNode(t))},acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){var i=t.style,n=t.getAttribute("height"),a=t.getAttribute("width");if(t[b]={initial:{height:n,width:a,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",null===a||""===a){var r=s(t,"width");void 0!==r&&(t.width=r)}if(null===n||""===n)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2);else{var o=s(t,"height");void 0!==r&&(t.height=o)}}(t,e),i):null},releaseContext:function(t){var i=t.canvas;if(i[b]){var n=i[b].initial;["height","width"].forEach(function(t){var e=n[t];y.isNullOrUndef(e)?i.removeAttribute(t):i.setAttribute(t,e)}),y.each(n.style||{},function(t,e){i.style[e]=t}),i.width=i.width,delete i[b]}},addEventListener:function(a,t,r){var e,i,n,o,s,l,u,d,h,c,f,g,m,p=a.canvas;if("resize"!==t){var v=r[b]||(r[b]={});S(p,t,(v.proxies||(v.proxies={}))[a.id+"_"+t]=function(t){var e,i,n;r((i=a,D(M[(e=t).type]||e.type,i,(n=y.getRelativePosition(e,i)).x,n.y,e)))})}else i=r,n=a,g=(e=p)[b]||(e[b]={}),m=g.resizer=function(t){var e=document.createElement("div"),i=x+"size-monitor",n="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";e.style.cssText=n,e.className=i,e.innerHTML='<div class="'+i+'-expand" style="'+n+'"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="'+i+'-shrink" style="'+n+'"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';var a=e.childNodes[0],r=e.childNodes[1];e._reset=function(){a.scrollLeft=1e6,a.scrollTop=1e6,r.scrollLeft=1e6,r.scrollTop=1e6};var o=function(){e._reset(),t()};return S(a,"scroll",o.bind(a,"expand")),S(r,"scroll",o.bind(r,"shrink")),e}((l=!(o=function(){if(g.resizer)return i(D("resize",n))}),u=[],function(){u=Array.prototype.slice.call(arguments),s=s||this,l||(l=!0,y.requestAnimFrame.call(window,function(){l=!1,o.apply(s,u)}))})),h=function(){if(g.resizer){var t=e.parentNode;t&&t!==m.parentNode&&t.insertBefore(m,t.firstChild),m._reset()}},c=(d=e)[b]||(d[b]={}),f=c.renderProxy=function(t){t.animationName===k&&h()},y.each(w,function(t){S(d,t,f)}),c.reflow=!!d.offsetParent,d.classList.add(_)},removeEventListener:function(t,e,i){var n,a,r,o,s,l,u=t.canvas;if("resize"!==e){var d=((i[b]||{}).proxies||{})[t.id+"_"+e];d&&h(u,e,d)}else s=(n=u)[b]||{},l=s.resizer,delete s.resizer,r=(a=n)[b]||{},(o=r.renderProxy)&&(y.each(w,function(t){h(a,t,o)}),delete r.renderProxy),a.classList.remove(_),l&&l.parentNode&&l.parentNode.removeChild(l)}},y.addEvent=S,y.removeEvent=h},{45:45}],48:[function(t,e,i){"use strict";var n=t(45),a=t(46),r=t(47),o=r._enabled?r:a;e.exports=n.extend({initialize:function(){},acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},o)},{45:45,46:46,47:47}],49:[function(t,e,i){"use strict";e.exports={},e.exports.filler=t(50),e.exports.legend=t(51),e.exports.title=t(52)},{50:50,51:51,52:52}],50:[function(t,e,i){"use strict";var u=t(25),c=t(40),d=t(45);u._set("global",{plugins:{filler:{propagate:!0}}});var f={dataset:function(t){var e=t.fill,i=t.chart,n=i.getDatasetMeta(e),a=n&&i.isDatasetVisible(e)&&n.dataset._children||[],r=a.length||0;return r?function(t,e){return e<r&&a[e]._view||null}:null},boundary:function(t){var e=t.boundary,i=e?e.x:null,n=e?e.y:null;return function(t){return{x:null===i?t.x:i,y:null===n?t.y:n}}}};function g(t,e,i){var n,a=t._model||{},r=a.fill;if(void 0===r&&(r=!!a.backgroundColor),!1===r||null===r)return!1;if(!0===r)return"origin";if(n=parseFloat(r,10),isFinite(n)&&Math.floor(n)===n)return"-"!==r[0]&&"+"!==r[0]||(n=e+n),!(n===e||n<0||i<=n)&&n;switch(r){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return r;default:return!1}}function m(t){var e,i=t.el._model||{},n=t.el._scale||{},a=t.fill,r=null;if(isFinite(a))return null;if("start"===a?r=void 0===i.scaleBottom?n.bottom:i.scaleBottom:"end"===a?r=void 0===i.scaleTop?n.top:i.scaleTop:void 0!==i.scaleZero?r=i.scaleZero:n.getBasePosition?r=n.getBasePosition():n.getBasePixel&&(r=n.getBasePixel()),null!=r){if(void 0!==r.x&&void 0!==r.y)return r;if("number"==typeof r&&isFinite(r))return{x:(e=n.isHorizontal())?r:null,y:e?null:r}}return null}function p(t,e,i){var n,a=t[e].fill,r=[e];if(!i)return a;for(;!1!==a&&-1===r.indexOf(a);){if(!isFinite(a))return a;if(!(n=t[a]))return!1;if(n.visible)return a;r.push(a),a=n.fill}return!1}function b(t){return t&&!t.skip}function x(t,e,i,n,a){var r;if(n&&a){for(t.moveTo(e[0].x,e[0].y),r=1;r<n;++r)d.canvas.lineTo(t,e[r-1],e[r]);for(t.lineTo(i[a-1].x,i[a-1].y),r=a-1;0<r;--r)d.canvas.lineTo(t,i[r],i[r-1],!0)}}e.exports={id:"filler",afterDatasetsUpdate:function(t,e){var i,n,a,r,o,s,l,u=(t.data.datasets||[]).length,d=e.propagate,h=[];for(n=0;n<u;++n)r=null,(a=(i=t.getDatasetMeta(n)).dataset)&&a._model&&a instanceof c.Line&&(r={visible:t.isDatasetVisible(n),fill:g(a,n,u),chart:t,el:a}),i.$filler=r,h.push(r);for(n=0;n<u;++n)(r=h[n])&&(r.fill=p(h,n,d),r.boundary=m(r),r.mapper=(l=void 0,!(l="dataset")===(s=(o=r).fill)?null:(isFinite(s)||(l="boundary"),f[l](o))))},beforeDatasetDraw:function(t,e){var i=e.meta.$filler;if(i){var n=t.ctx,a=i.el,r=a._view,o=a._children||[],s=i.mapper,l=r.backgroundColor||u.global.defaultColor;s&&l&&o.length&&(d.canvas.clipArea(n,t.chartArea),function(t,e,i,n,a,r){var o,s,l,u,d,h,c,f=e.length,g=n.spanGaps,m=[],p=[],v=0,y=0;for(t.beginPath(),o=0,s=f+!!r;o<s;++o)d=i(u=e[l=o%f]._view,l,n),h=b(u),c=b(d),h&&c?(v=m.push(u),y=p.push(d)):v&&y&&(g?(h&&m.push(u),c&&p.push(d)):(x(t,m,p,v,y),v=y=0,m=[],p=[]));x(t,m,p,v,y),t.closePath(),t.fillStyle=a,t.fill()}(n,o,s,r,l,a._loop),d.canvas.unclipArea(n))}}}},{25:25,40:40,45:45}],51:[function(t,e,i){"use strict";var D=t(25),n=t(26),C=t(45),a=t(30),r=C.noop;function P(t,e){return t.usePointStyle?e*Math.SQRT2:t.boxWidth}D._set("global",{legend:{display:!0,position:"top",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var i=e.datasetIndex,n=this.chart,a=n.getDatasetMeta(i);a.hidden=null===a.hidden?!n.data.datasets[i].hidden:null,n.update()},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(i){var t=i.data;return C.isArray(t.datasets)?t.datasets.map(function(t,e){return{text:t.label,fillStyle:C.isArray(t.backgroundColor)?t.backgroundColor[0]:t.backgroundColor,hidden:!i.isDatasetVisible(e),lineCap:t.borderCapStyle,lineDash:t.borderDash,lineDashOffset:t.borderDashOffset,lineJoin:t.borderJoinStyle,lineWidth:t.borderWidth,strokeStyle:t.borderColor,pointStyle:t.pointStyle,datasetIndex:e}},this):[]}}},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var i=0;i<t.data.datasets.length;i++)e.push('<li><span style="background-color:'+t.data.datasets[i].backgroundColor+'"></span>'),t.data.datasets[i].label&&e.push(t.data.datasets[i].label),e.push("</li>");return e.push("</ul>"),e.join("")}});var o=n.extend({initialize:function(t){C.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:r,update:function(t,e,i){var n=this;return n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n.margins=i,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeBuildLabels(),n.buildLabels(),n.afterBuildLabels(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate(),n.minSize},afterUpdate:r,beforeSetDimensions:r,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:r,beforeBuildLabels:r,buildLabels:function(){var e=this,i=e.options.labels||{},t=C.callback(i.generateLabels,[e.chart],e)||[];i.filter&&(t=t.filter(function(t){return i.filter(t,e.chart.data)})),e.options.reverse&&t.reverse(),e.legendItems=t},afterBuildLabels:r,beforeFit:r,fit:function(){var n=this,t=n.options,a=t.labels,e=t.display,r=n.ctx,i=D.global,o=C.valueOrDefault,s=o(a.fontSize,i.defaultFontSize),l=o(a.fontStyle,i.defaultFontStyle),u=o(a.fontFamily,i.defaultFontFamily),d=C.fontString(s,l,u),h=n.legendHitBoxes=[],c=n.minSize,f=n.isHorizontal();if(f?(c.width=n.maxWidth,c.height=e?10:0):(c.width=e?10:0,c.height=n.maxHeight),e)if(r.font=d,f){var g=n.lineWidths=[0],m=n.legendItems.length?s+a.padding:0;r.textAlign="left",r.textBaseline="top",C.each(n.legendItems,function(t,e){var i=P(a,s)+s/2+r.measureText(t.text).width;g[g.length-1]+i+a.padding>=n.width&&(m+=s+a.padding,g[g.length]=n.left),h[e]={left:0,top:0,width:i,height:s},g[g.length-1]+=i+a.padding}),c.height+=m}else{var p=a.padding,v=n.columnWidths=[],y=a.padding,b=0,x=0,_=s+p;C.each(n.legendItems,function(t,e){var i=P(a,s)+s/2+r.measureText(t.text).width;x+_>c.height&&(y+=b+a.padding,v.push(b),x=b=0),b=Math.max(b,i),x+=_,h[e]={left:0,top:0,width:i,height:s}}),y+=b,v.push(b),c.width+=y}n.width=c.width,n.height=c.height},afterFit:r,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var h=this,c=h.options,f=c.labels,g=D.global,m=g.elements.line,p=h.width,v=h.lineWidths;if(c.display){var y,b=h.ctx,x=C.valueOrDefault,t=x(f.fontColor,g.defaultFontColor),_=x(f.fontSize,g.defaultFontSize),e=x(f.fontStyle,g.defaultFontStyle),i=x(f.fontFamily,g.defaultFontFamily),n=C.fontString(_,e,i);b.textAlign="left",b.textBaseline="middle",b.lineWidth=.5,b.strokeStyle=t,b.fillStyle=t,b.font=n;var k=P(f,_),w=h.legendHitBoxes,M=h.isHorizontal();y=M?{x:h.left+(p-v[0])/2,y:h.top+f.padding,line:0}:{x:h.left+f.padding,y:h.top+f.padding,line:0};var S=_+f.padding;C.each(h.legendItems,function(t,e){var i,n,a,r,o,s=b.measureText(t.text).width,l=k+_/2+s,u=y.x,d=y.y;M?p<=u+l&&(d=y.y+=S,y.line++,u=y.x=h.left+(p-v[y.line])/2):d+S>h.bottom&&(u=y.x=u+h.columnWidths[y.line]+f.padding,d=y.y=h.top+f.padding,y.line++),function(t,e,i){if(!(isNaN(k)||k<=0)){b.save(),b.fillStyle=x(i.fillStyle,g.defaultColor),b.lineCap=x(i.lineCap,m.borderCapStyle),b.lineDashOffset=x(i.lineDashOffset,m.borderDashOffset),b.lineJoin=x(i.lineJoin,m.borderJoinStyle),b.lineWidth=x(i.lineWidth,m.borderWidth),b.strokeStyle=x(i.strokeStyle,g.defaultColor);var n=0===x(i.lineWidth,m.borderWidth);if(b.setLineDash&&b.setLineDash(x(i.lineDash,m.borderDash)),c.labels&&c.labels.usePointStyle){var a=_*Math.SQRT2/2,r=a/Math.SQRT2,o=t+r,s=e+r;C.canvas.drawPoint(b,i.pointStyle,a,o,s)}else n||b.strokeRect(t,e,k,_),b.fillRect(t,e,k,_);b.restore()}}(u,d,t),w[e].left=u,w[e].top=d,i=t,n=s,r=k+(a=_/2)+u,o=d+a,b.fillText(i.text,r,o),i.hidden&&(b.beginPath(),b.lineWidth=2,b.moveTo(r,o),b.lineTo(r+n,o),b.stroke()),M?y.x+=l+f.padding:y.y+=S})}},handleEvent:function(t){var e=this,i=e.options,n="mouseup"===t.type?"click":t.type,a=!1;if("mousemove"===n){if(!i.onHover)return}else{if("click"!==n)return;if(!i.onClick)return}var r=t.x,o=t.y;if(r>=e.left&&r<=e.right&&o>=e.top&&o<=e.bottom)for(var s=e.legendHitBoxes,l=0;l<s.length;++l){var u=s[l];if(r>=u.left&&r<=u.left+u.width&&o>=u.top&&o<=u.top+u.height){if("click"===n){i.onClick.call(e,t.native,e.legendItems[l]),a=!0;break}if("mousemove"===n){i.onHover.call(e,t.native,e.legendItems[l]),a=!0;break}}}return a}});function s(t,e){var i=new o({ctx:t.ctx,options:e,chart:t});a.configure(t,i,e),a.addBox(t,i),t.legend=i}e.exports={id:"legend",_element:o,beforeInit:function(t){var e=t.options.legend;e&&s(t,e)},beforeUpdate:function(t){var e=t.options.legend,i=t.legend;e?(C.mergeIf(e,D.global.legend),i?(a.configure(t,i,e),i.options=e):s(t,e)):i&&(a.removeBox(t,i),delete t.legend)},afterEvent:function(t,e){var i=t.legend;i&&i.handleEvent(e)}}},{25:25,26:26,30:30,45:45}],52:[function(t,e,i){"use strict";var _=t(25),n=t(26),k=t(45),a=t(30),r=k.noop;_._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,lineHeight:1.2,padding:10,position:"top",text:"",weight:2e3}});var o=n.extend({initialize:function(t){k.extend(this,t),this.legendHitBoxes=[]},beforeUpdate:r,update:function(t,e,i){var n=this;return n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n.margins=i,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeBuildLabels(),n.buildLabels(),n.afterBuildLabels(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate(),n.minSize},afterUpdate:r,beforeSetDimensions:r,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:r,beforeBuildLabels:r,buildLabels:r,afterBuildLabels:r,beforeFit:r,fit:function(){var t=k.valueOrDefault,e=this.options,i=e.display,n=t(e.fontSize,_.global.defaultFontSize),a=this.minSize,r=k.isArray(e.text)?e.text.length:1,o=k.options.toLineHeight(e.lineHeight,n),s=i?r*o+2*e.padding:0;this.isHorizontal()?(a.width=this.maxWidth,a.height=s):(a.width=s,a.height=this.maxHeight),this.width=a.width,this.height=a.height},afterFit:r,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var t=this.ctx,e=k.valueOrDefault,i=this.options,n=_.global;if(i.display){var a,r,o,s=e(i.fontSize,n.defaultFontSize),l=e(i.fontStyle,n.defaultFontStyle),u=e(i.fontFamily,n.defaultFontFamily),d=k.fontString(s,l,u),h=k.options.toLineHeight(i.lineHeight,s),c=h/2+i.padding,f=0,g=this.top,m=this.left,p=this.bottom,v=this.right;t.fillStyle=e(i.fontColor,n.defaultFontColor),t.font=d,this.isHorizontal()?(r=m+(v-m)/2,o=g+c,a=v-m):(r="left"===i.position?m+c:v-c,o=g+(p-g)/2,a=p-g,f=Math.PI*("left"===i.position?-.5:.5)),t.save(),t.translate(r,o),t.rotate(f),t.textAlign="center",t.textBaseline="middle";var y=i.text;if(k.isArray(y))for(var b=0,x=0;x<y.length;++x)t.fillText(y[x],0,b,a),b+=h;else t.fillText(y,0,0,a);t.restore()}}});function s(t,e){var i=new o({ctx:t.ctx,options:e,chart:t});a.configure(t,i,e),a.addBox(t,i),t.titleBlock=i}e.exports={id:"title",_element:o,beforeInit:function(t){var e=t.options.title;e&&s(t,e)},beforeUpdate:function(t){var e=t.options.title,i=t.titleBlock;e?(k.mergeIf(e,_.global.title),i?(a.configure(t,i,e),i.options=e):s(t,e)):i&&(a.removeBox(t,i),delete t.titleBlock)}}},{25:25,26:26,30:30,45:45}],53:[function(t,e,i){"use strict";e.exports=function(t){var e=t.Scale.extend({getLabels:function(){var t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t,e=this,i=e.getLabels();e.minIndex=0,e.maxIndex=i.length-1,void 0!==e.options.ticks.min&&(t=i.indexOf(e.options.ticks.min),e.minIndex=-1!==t?t:e.minIndex),void 0!==e.options.ticks.max&&(t=i.indexOf(e.options.ticks.max),e.maxIndex=-1!==t?t:e.maxIndex),e.min=i[e.minIndex],e.max=i[e.maxIndex]},buildTicks:function(){var t=this.getLabels();this.ticks=0===this.minIndex&&this.maxIndex===t.length-1?t:t.slice(this.minIndex,this.maxIndex+1)},getLabelForIndex:function(t,e){var i=this.chart.data,n=this.isHorizontal();return i.yLabels&&!n?this.getRightValue(i.datasets[e].data[t]):this.ticks[t-this.minIndex]},getPixelForValue:function(t,e){var i,n=this,a=n.options.offset,r=Math.max(n.maxIndex+1-n.minIndex-(a?0:1),1);if(null!=t&&(i=n.isHorizontal()?t.x:t.y),void 0!==i||void 0!==t&&isNaN(e)){t=i||t;var o=n.getLabels().indexOf(t);e=-1!==o?o:e}if(n.isHorizontal()){var s=n.width/r,l=s*(e-n.minIndex);return a&&(l+=s/2),n.left+Math.round(l)}var u=n.height/r,d=u*(e-n.minIndex);return a&&(d+=u/2),n.top+Math.round(d)},getPixelForTick:function(t){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null)},getValueForPixel:function(t){var e=this.options.offset,i=Math.max(this._ticks.length-(e?0:1),1),n=this.isHorizontal(),a=(n?this.width:this.height)/i;return t-=n?this.left:this.top,e&&(t-=a/2),(t<=0?0:Math.round(t/a))+this.minIndex},getBasePixel:function(){return this.bottom}});t.scaleService.registerScaleType("category",e,{position:"bottom"})}},{}],54:[function(t,e,i){"use strict";var n=t(25),h=t(45),a=t(34);e.exports=function(t){var e={position:"left",ticks:{callback:a.formatters.linear}},i=t.LinearScaleBase.extend({determineDataLimits:function(){var o=this,s=o.options,l=o.chart,t=l.data.datasets,e=o.isHorizontal();function u(t){return e?t.xAxisID===o.id:t.yAxisID===o.id}o.min=null,o.max=null;var n=s.stacked;if(void 0===n&&h.each(t,function(t,e){if(!n){var i=l.getDatasetMeta(e);l.isDatasetVisible(e)&&u(i)&&void 0!==i.stack&&(n=!0)}}),s.stacked||n){var d={};h.each(t,function(t,e){var n=l.getDatasetMeta(e),i=[n.type,void 0===s.stacked&&void 0===n.stack?e:"",n.stack].join(".");void 0===d[i]&&(d[i]={positiveValues:[],negativeValues:[]});var a=d[i].positiveValues,r=d[i].negativeValues;l.isDatasetVisible(e)&&u(n)&&h.each(t.data,function(t,e){var i=+o.getRightValue(t);isNaN(i)||n.data[e].hidden||(a[e]=a[e]||0,r[e]=r[e]||0,s.relativePoints?a[e]=100:i<0?r[e]+=i:a[e]+=i)})}),h.each(d,function(t){var e=t.positiveValues.concat(t.negativeValues),i=h.min(e),n=h.max(e);o.min=null===o.min?i:Math.min(o.min,i),o.max=null===o.max?n:Math.max(o.max,n)})}else h.each(t,function(t,e){var n=l.getDatasetMeta(e);l.isDatasetVisible(e)&&u(n)&&h.each(t.data,function(t,e){var i=+o.getRightValue(t);isNaN(i)||n.data[e].hidden||(null===o.min?o.min=i:i<o.min&&(o.min=i),null===o.max?o.max=i:i>o.max&&(o.max=i))})});o.min=isFinite(o.min)&&!isNaN(o.min)?o.min:0,o.max=isFinite(o.max)&&!isNaN(o.max)?o.max:1,this.handleTickRangeOptions()},getTickLimit:function(){var t,e=this.options.ticks;if(this.isHorizontal())t=Math.min(e.maxTicksLimit?e.maxTicksLimit:11,Math.ceil(this.width/50));else{var i=h.valueOrDefault(e.fontSize,n.global.defaultFontSize);t=Math.min(e.maxTicksLimit?e.maxTicksLimit:11,Math.ceil(this.height/(2*i)))}return t},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){var e=this.start,i=+this.getRightValue(t),n=this.end-e;return this.isHorizontal()?this.left+this.width/n*(i-e):this.bottom-this.height/n*(i-e)},getValueForPixel:function(t){var e=this.isHorizontal(),i=e?this.width:this.height,n=(e?t-this.left:this.bottom-t)/i;return this.start+(this.end-this.start)*n},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}});t.scaleService.registerScaleType("linear",i,e)}},{25:25,34:34,45:45}],55:[function(t,e,i){"use strict";var d=t(45);e.exports=function(e){var t=d.noop;e.LinearScaleBase=e.Scale.extend({getRightValue:function(t){return"string"==typeof t?+t:e.Scale.prototype.getRightValue.call(this,t)},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;if(e.beginAtZero){var i=d.sign(t.min),n=d.sign(t.max);i<0&&n<0?t.max=0:0<i&&0<n&&(t.min=0)}var a=void 0!==e.min||void 0!==e.suggestedMin,r=void 0!==e.max||void 0!==e.suggestedMax;void 0!==e.min?t.min=e.min:void 0!==e.suggestedMin&&(null===t.min?t.min=e.suggestedMin:t.min=Math.min(t.min,e.suggestedMin)),void 0!==e.max?t.max=e.max:void 0!==e.suggestedMax&&(null===t.max?t.max=e.suggestedMax:t.max=Math.max(t.max,e.suggestedMax)),a!==r&&t.min>=t.max&&(a?t.max=t.min+1:t.min=t.max-1),t.min===t.max&&(t.max++,e.beginAtZero||t.min--)},getTickLimit:t,handleDirectionalChanges:t,buildTicks:function(){var t=this,e=t.options.ticks,i=t.getTickLimit(),n={maxTicks:i=Math.max(2,i),min:e.min,max:e.max,stepSize:d.valueOrDefault(e.fixedStepSize,e.stepSize)},a=t.ticks=function(t,e){var i,n=[];if(t.stepSize&&0<t.stepSize)i=t.stepSize;else{var a=d.niceNum(e.max-e.min,!1);i=d.niceNum(a/(t.maxTicks-1),!0)}var r=Math.floor(e.min/i)*i,o=Math.ceil(e.max/i)*i;t.min&&t.max&&t.stepSize&&d.almostWhole((t.max-t.min)/t.stepSize,i/1e3)&&(r=t.min,o=t.max);var s=(o-r)/i;s=d.almostEquals(s,Math.round(s),i/1e3)?Math.round(s):Math.ceil(s);var l=1;i<1&&(l=Math.pow(10,i.toString().length-2),r=Math.round(r*l)/l,o=Math.round(o*l)/l),n.push(void 0!==t.min?t.min:r);for(var u=1;u<s;++u)n.push(Math.round((r+u*i)*l)/l);return n.push(void 0!==t.max?t.max:o),n}(n,t);t.handleDirectionalChanges(),t.max=d.max(a),t.min=d.min(a),e.reverse?(a.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){this.ticksAsNumbers=this.ticks.slice(),this.zeroLineIndex=this.ticks.indexOf(0),e.Scale.prototype.convertTicksToLabels.call(this)}})}},{45:45}],56:[function(t,e,i){"use strict";var c=t(45),n=t(34);e.exports=function(h){var t={position:"left",ticks:{callback:n.formatters.logarithmic}},e=h.Scale.extend({determineDataLimits:function(){var o=this,i=o.options,s=o.chart,t=s.data.datasets,e=o.isHorizontal();function l(t){return e?t.xAxisID===o.id:t.yAxisID===o.id}o.min=null,o.max=null,o.minNotZero=null;var n=i.stacked;if(void 0===n&&c.each(t,function(t,e){if(!n){var i=s.getDatasetMeta(e);s.isDatasetVisible(e)&&l(i)&&void 0!==i.stack&&(n=!0)}}),i.stacked||n){var u={};c.each(t,function(t,e){var a=s.getDatasetMeta(e),r=[a.type,void 0===i.stacked&&void 0===a.stack?e:"",a.stack].join(".");s.isDatasetVisible(e)&&l(a)&&(void 0===u[r]&&(u[r]=[]),c.each(t.data,function(t,e){var i=u[r],n=+o.getRightValue(t);isNaN(n)||a.data[e].hidden||n<0||(i[e]=i[e]||0,i[e]+=n)}))}),c.each(u,function(t){if(0<t.length){var e=c.min(t),i=c.max(t);o.min=null===o.min?e:Math.min(o.min,e),o.max=null===o.max?i:Math.max(o.max,i)}})}else c.each(t,function(t,e){var n=s.getDatasetMeta(e);s.isDatasetVisible(e)&&l(n)&&c.each(t.data,function(t,e){var i=+o.getRightValue(t);isNaN(i)||n.data[e].hidden||i<0||(null===o.min?o.min=i:i<o.min&&(o.min=i),null===o.max?o.max=i:i>o.max&&(o.max=i),0!==i&&(null===o.minNotZero||i<o.minNotZero)&&(o.minNotZero=i))})});this.handleTickRangeOptions()},handleTickRangeOptions:function(){var t=this,e=t.options.ticks,i=c.valueOrDefault;t.min=i(e.min,t.min),t.max=i(e.max,t.max),t.min===t.max&&(0!==t.min&&null!==t.min?(t.min=Math.pow(10,Math.floor(c.log10(t.min))-1),t.max=Math.pow(10,Math.floor(c.log10(t.max))+1)):(t.min=1,t.max=10)),null===t.min&&(t.min=Math.pow(10,Math.floor(c.log10(t.max))-1)),null===t.max&&(t.max=0!==t.min?Math.pow(10,Math.floor(c.log10(t.min))+1):10),null===t.minNotZero&&(0<t.min?t.minNotZero=t.min:t.max<1?t.minNotZero=Math.pow(10,Math.floor(c.log10(t.max))):t.minNotZero=1)},buildTicks:function(){var t=this,e=t.options.ticks,i=!t.isHorizontal(),n={min:e.min,max:e.max},a=t.ticks=function(t,e){var i,n,a=[],r=c.valueOrDefault,o=r(t.min,Math.pow(10,Math.floor(c.log10(e.min)))),s=Math.floor(c.log10(e.max)),l=Math.ceil(e.max/Math.pow(10,s));0===o?(i=Math.floor(c.log10(e.minNotZero)),n=Math.floor(e.minNotZero/Math.pow(10,i)),a.push(o),o=n*Math.pow(10,i)):(i=Math.floor(c.log10(o)),n=Math.floor(o/Math.pow(10,i)));for(var u=i<0?Math.pow(10,Math.abs(i)):1;a.push(o),10==++n&&(n=1,u=0<=++i?1:u),o=Math.round(n*Math.pow(10,i)*u)/u,i<s||i===s&&n<l;);var d=r(t.max,o);return a.push(d),a}(n,t);t.max=c.max(a),t.min=c.min(a),e.reverse?(i=!i,t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),i&&a.reverse()},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),h.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},_getFirstTickValue:function(t){var e=Math.floor(c.log10(t));return Math.floor(t/Math.pow(10,e))*Math.pow(10,e)},getPixelForValue:function(t){var e,i,n,a,r,o=this,s=o.options.ticks.reverse,l=c.log10,u=o._getFirstTickValue(o.minNotZero),d=0;return t=+o.getRightValue(t),s?(n=o.end,a=o.start,r=-1):(n=o.start,a=o.end,r=1),o.isHorizontal()?(e=o.width,i=s?o.right:o.left):(e=o.height,r*=-1,i=s?o.top:o.bottom),t!==n&&(0===n&&(e-=d=c.getValueOrDefault(o.options.ticks.fontSize,h.defaults.global.defaultFontSize),n=u),0!==t&&(d+=e/(l(a)-l(n))*(l(t)-l(n))),i+=r*d),i},getValueForPixel:function(t){var e,i,n,a,r=this,o=r.options.ticks.reverse,s=c.log10,l=r._getFirstTickValue(r.minNotZero);if(o?(i=r.end,n=r.start):(i=r.start,n=r.end),r.isHorizontal()?(e=r.width,a=o?r.right-t:t-r.left):(e=r.height,a=o?t-r.top:r.bottom-t),a!==i){if(0===i){var u=c.getValueOrDefault(r.options.ticks.fontSize,h.defaults.global.defaultFontSize);a-=u,e-=u,i=l}a*=s(n)-s(i),a/=e,a=Math.pow(10,s(i)+a)}return a}});h.scaleService.registerScaleType("logarithmic",e,t)}},{34:34,45:45}],57:[function(t,e,i){"use strict";var n=t(25),_=t(45),a=t(34);e.exports=function(t){var v=n.global,e={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:a.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}};function y(t){var e=t.options;return e.angleLines.display||e.pointLabels.display?t.chart.data.labels.length:0}function b(t){var e=t.options.pointLabels,i=_.valueOrDefault(e.fontSize,v.defaultFontSize),n=_.valueOrDefault(e.fontStyle,v.defaultFontStyle),a=_.valueOrDefault(e.fontFamily,v.defaultFontFamily);return{size:i,style:n,family:a,font:_.fontString(i,n,a)}}function p(t,e,i,n,a){return t===n||t===a?{start:e-i/2,end:e+i/2}:t<n||a<t?{start:e-i-5,end:e}:{start:e,end:e+i+5}}function x(t,e,i,n){if(_.isArray(e))for(var a=i.y,r=1.5*n,o=0;o<e.length;++o)t.fillText(e[o],i.x,a),a+=r;else t.fillText(e,i.x,i.y)}function s(t){return _.isNumber(t)?t:0}var i=t.LinearScaleBase.extend({setDimensions:function(){var t=this,e=t.options,i=e.ticks;t.width=t.maxWidth,t.height=t.maxHeight,t.xCenter=Math.round(t.width/2),t.yCenter=Math.round(t.height/2);var n=_.min([t.height,t.width]),a=_.valueOrDefault(i.fontSize,v.defaultFontSize);t.drawingArea=e.display?n/2-(a/2+i.backdropPaddingY):n/2},determineDataLimits:function(){var a=this,i=a.chart,r=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;_.each(i.data.datasets,function(t,e){if(i.isDatasetVisible(e)){var n=i.getDatasetMeta(e);_.each(t.data,function(t,e){var i=+a.getRightValue(t);isNaN(i)||n.data[e].hidden||(r=Math.min(i,r),o=Math.max(i,o))})}}),a.min=r===Number.POSITIVE_INFINITY?0:r,a.max=o===Number.NEGATIVE_INFINITY?0:o,a.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,e=_.valueOrDefault(t.fontSize,v.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*e)))},convertTicksToLabels:function(){t.LinearScaleBase.prototype.convertTicksToLabels.call(this),this.pointLabels=this.chart.data.labels.map(this.options.pointLabels.callback,this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t;this.options.pointLabels.display?function(t){var e,i,n,a=b(t),r=Math.min(t.height/2,t.width/2),o={r:t.width,l:0,t:t.height,b:0},s={};t.ctx.font=a.font,t._pointLabelSizes=[];var l,u,d,h=y(t);for(e=0;e<h;e++){n=t.getPointPosition(e,r),l=t.ctx,u=a.size,d=t.pointLabels[e]||"",i=_.isArray(d)?{w:_.longestText(l,l.font,d),h:d.length*u+1.5*(d.length-1)*u}:{w:l.measureText(d).width,h:u},t._pointLabelSizes[e]=i;var c=t.getIndexAngle(e),f=_.toDegrees(c)%360,g=p(f,n.x,i.w,0,180),m=p(f,n.y,i.h,90,270);g.start<o.l&&(o.l=g.start,s.l=c),g.end>o.r&&(o.r=g.end,s.r=c),m.start<o.t&&(o.t=m.start,s.t=c),m.end>o.b&&(o.b=m.end,s.b=c)}t.setReductions(r,o,s)}(this):(this,t=Math.min(this.height/2,this.width/2),this.drawingArea=Math.round(t),this.setCenterPoint(0,0,0,0))},setReductions:function(t,e,i){var n=e.l/Math.sin(i.l),a=Math.max(e.r-this.width,0)/Math.sin(i.r),r=-e.t/Math.cos(i.t),o=-Math.max(e.b-this.height,0)/Math.cos(i.b);n=s(n),a=s(a),r=s(r),o=s(o),this.drawingArea=Math.min(Math.round(t-(n+a)/2),Math.round(t-(r+o)/2)),this.setCenterPoint(n,a,r,o)},setCenterPoint:function(t,e,i,n){var a=this,r=a.width-e-a.drawingArea,o=t+a.drawingArea,s=i+a.drawingArea,l=a.height-n-a.drawingArea;a.xCenter=Math.round((o+r)/2+a.left),a.yCenter=Math.round((s+l)/2+a.top)},getIndexAngle:function(t){return t*(2*Math.PI/y(this))+(this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){if(null===t)return 0;var e=this.drawingArea/(this.max-this.min);return this.options.ticks.reverse?(this.max-t)*e:(t-this.min)*e},getPointPosition:function(t,e){var i=this.getIndexAngle(t)-Math.PI/2;return{x:Math.round(Math.cos(i)*e)+this.xCenter,y:Math.round(Math.sin(i)*e)+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this.min,e=this.max;return this.getPointPositionForValue(0,this.beginAtZero?0:t<0&&e<0?e:0<t&&0<e?t:0)},draw:function(){var r=this,t=r.options,o=t.gridLines,s=t.ticks,l=_.valueOrDefault;if(t.display){var u=r.ctx,d=this.getIndexAngle(0),h=l(s.fontSize,v.defaultFontSize),e=l(s.fontStyle,v.defaultFontStyle),i=l(s.fontFamily,v.defaultFontFamily),c=_.fontString(h,e,i);_.each(r.ticks,function(t,e){if(0<e||s.reverse){var i=r.getDistanceFromCenterForValue(r.ticksAsNumbers[e]);if(o.display&&0!==e&&function(t,e,i,n){var a=t.ctx;if(a.strokeStyle=_.valueAtIndexOrDefault(e.color,n-1),a.lineWidth=_.valueAtIndexOrDefault(e.lineWidth,n-1),t.options.gridLines.circular)a.beginPath(),a.arc(t.xCenter,t.yCenter,i,0,2*Math.PI),a.closePath(),a.stroke();else{var r=y(t);if(0===r)return;a.beginPath();var o=t.getPointPosition(0,i);a.moveTo(o.x,o.y);for(var s=1;s<r;s++)o=t.getPointPosition(s,i),a.lineTo(o.x,o.y);a.closePath(),a.stroke()}}(r,o,i,e),s.display){var n=l(s.fontColor,v.defaultFontColor);if(u.font=c,u.save(),u.translate(r.xCenter,r.yCenter),u.rotate(d),s.showLabelBackdrop){var a=u.measureText(t).width;u.fillStyle=s.backdropColor,u.fillRect(-a/2-s.backdropPaddingX,-i-h/2-s.backdropPaddingY,a+2*s.backdropPaddingX,h+2*s.backdropPaddingY)}u.textAlign="center",u.textBaseline="middle",u.fillStyle=n,u.fillText(t,0,-i),u.restore()}}}),(t.angleLines.display||t.pointLabels.display)&&function(t){var e=t.ctx,i=t.options,n=i.angleLines,a=i.pointLabels;e.lineWidth=n.lineWidth,e.strokeStyle=n.color;var r,o,s,l,u=t.getDistanceFromCenterForValue(i.ticks.reverse?t.min:t.max),d=b(t);e.textBaseline="top";for(var h=y(t)-1;0<=h;h--){if(n.display){var c=t.getPointPosition(h,u);e.beginPath(),e.moveTo(t.xCenter,t.yCenter),e.lineTo(c.x,c.y),e.stroke(),e.closePath()}if(a.display){var f=t.getPointPosition(h,u+5),g=_.valueAtIndexOrDefault(a.fontColor,h,v.defaultFontColor);e.font=d.font,e.fillStyle=g;var m=t.getIndexAngle(h),p=_.toDegrees(m);e.textAlign=0===(l=p)||180===l?"center":l<180?"left":"right",r=p,o=t._pointLabelSizes[h],s=f,90===r||270===r?s.y-=o.h/2:(270<r||r<90)&&(s.y-=o.h),x(e,t.pointLabels[h]||"",f,d.size)}}}(r)}}});t.scaleService.registerScaleType("radialLinear",i,e)}},{25:25,34:34,45:45}],58:[function(t,e,i){"use strict";var b=t(6);b="function"==typeof b?b:window.moment;var o=t(25),x=t(45),m=Number.MIN_SAFE_INTEGER||-9007199254740991,_=Number.MAX_SAFE_INTEGER||9007199254740991,k={millisecond:{common:!0,size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{common:!0,size:1e3,steps:[1,2,5,10,30]},minute:{common:!0,size:6e4,steps:[1,2,5,10,30]},hour:{common:!0,size:36e5,steps:[1,2,3,6,12]},day:{common:!0,size:864e5,steps:[1,2,5]},week:{common:!1,size:6048e5,steps:[1,2,3,4]},month:{common:!0,size:2628e6,steps:[1,2,3]},quarter:{common:!1,size:7884e6,steps:[1,2,3,4]},year:{common:!0,size:3154e7}},w=Object.keys(k);function p(t,e){return t-e}function v(t){var e,i,n,a={},r=[];for(e=0,i=t.length;e<i;++e)a[n=t[e]]||(a[n]=!0,r.push(n));return r}function M(t,e,i,n){var a=function(t,e,i){for(var n,a,r,o=0,s=t.length-1;0<=o&&o<=s;){if(a=t[(n=o+s>>1)-1]||null,r=t[n],!a)return{lo:null,hi:r};if(r[e]<i)o=n+1;else{if(!(a[e]>i))return{lo:a,hi:r};s=n-1}}return{lo:r,hi:null}}(t,e,i),r=a.lo?a.hi?a.lo:t[t.length-2]:t[0],o=a.lo?a.hi?a.hi:t[t.length-1]:t[1],s=o[e]-r[e],l=s?(i-r[e])/s:0,u=(o[n]-r[n])*l;return r[n]+u}function S(t,e){var i=e.parser,n=e.parser||e.format;return"function"==typeof i?i(t):"string"==typeof t&&"string"==typeof n?b(t,n):(t instanceof b||(t=b(t)),t.isValid()?t:"function"==typeof n?n(t):t)}function D(t,e){if(x.isNullOrUndef(t))return null;var i=e.options.time,n=S(e.getRightValue(t),i);return n.isValid()?(i.round&&n.startOf(i.round),n.valueOf()):null}function C(t){for(var e=w.indexOf(t)+1,i=w.length;e<i;++e)if(k[w[e]].common)return w[e]}e.exports=function(e){var t=e.Scale.extend({initialize:function(){if(!b)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");this.mergeTicksOptions(),e.Scale.prototype.initialize.call(this)},update:function(){var t=this.options;return t.time&&t.time.format&&console.warn("options.time.format is deprecated and replaced by options.time.parser."),e.Scale.prototype.update.apply(this,arguments)},getRightValue:function(t){return t&&void 0!==t.t&&(t=t.t),e.Scale.prototype.getRightValue.call(this,t)},determineDataLimits:function(){var t,e,i,n,a,r,o=this,s=o.chart,l=o.options.time,u=l.unit||"day",d=_,h=m,c=[],f=[],g=[];for(t=0,i=s.data.labels.length;t<i;++t)g.push(D(s.data.labels[t],o));for(t=0,i=(s.data.datasets||[]).length;t<i;++t)if(s.isDatasetVisible(t))if(a=s.data.datasets[t].data,x.isObject(a[0]))for(f[t]=[],e=0,n=a.length;e<n;++e)r=D(a[e],o),c.push(r),f[t][e]=r;else c.push.apply(c,g),f[t]=g.slice(0);else f[t]=[];g.length&&(g=v(g).sort(p),d=Math.min(d,g[0]),h=Math.max(h,g[g.length-1])),c.length&&(c=v(c).sort(p),d=Math.min(d,c[0]),h=Math.max(h,c[c.length-1])),d=D(l.min,o)||d,h=D(l.max,o)||h,d=d===_?+b().startOf(u):d,h=h===m?+b().endOf(u)+1:h,o.min=Math.min(d,h),o.max=Math.max(d+1,h),o._horizontal=o.isHorizontal(),o._table=[],o._timestamps={data:c,datasets:f,labels:g}},buildTicks:function(){var t,e,i,n,a,r,o,s,l,u,d,h,c=this,f=c.min,g=c.max,m=c.options,p=m.time,v=[],y=[];switch(m.ticks.source){case"data":v=c._timestamps.data;break;case"labels":v=c._timestamps.labels;break;case"auto":default:v=function(h,c,t,e){var i,n=e.time,f=n.unit||function(t,e,i,n){var a,r,o,s=w.length;for(a=w.indexOf(t);a<s-1;++a)if(o=(r=k[w[a]]).steps?r.steps[r.steps.length-1]:_,r.common&&Math.ceil((i-e)/(o*r.size))<=n)return w[a];return w[s-1]}(n.minUnit,h,c,t),a=C(f),r=x.valueOrDefault(n.stepSize,n.unitStepSize),o="week"===f&&n.isoWeekday,s=e.ticks.major.enabled,l=k[f],u=b(h),d=b(c),g=[];for(r||(r=function(t,e,i,n){var a,r,o,s=c-h,l=k[f],u=l.size,d=l.steps;if(!d)return Math.ceil(s/(n*u));for(a=0,r=d.length;a<r&&(o=d[a],!(Math.ceil(s/(u*o))<=n));++a);return o}(0,0,0,t)),o&&(u=u.isoWeekday(o),d=d.isoWeekday(o)),u=u.startOf(o?"day":f),(d=d.startOf(o?"day":f))<c&&d.add(1,f),i=b(u),s&&a&&!o&&!n.round&&(i.startOf(a),i.add(~~((u-i)/(l.size*r))*r,f));i<d;i.add(r,f))g.push(+i);return g.push(+i),g}(f,g,c.getLabelCapacity(f),m)}for("ticks"===m.bounds&&v.length&&(f=v[0],g=v[v.length-1]),f=D(p.min,c)||f,g=D(p.max,c)||g,t=0,e=v.length;t<e;++t)(i=v[t])>=f&&i<=g&&y.push(i);return c.min=f,c.max=g,c._unit=p.unit||function(t,e,i,n){var a,r,o=b.duration(b(n).diff(b(i)));for(a=w.length-1;a>=w.indexOf(e);a--)if(r=w[a],k[r].common&&o.as(r)>=t.length)return r;return w[e?w.indexOf(e):0]}(y,p.minUnit,c.min,c.max),c._majorUnit=C(c._unit),c._table=function(t,e,i,n){if("linear"===m.distribution||!t.length)return[{time:e,pos:0},{time:i,pos:1}];var a,r,o,s,l,u=[],d=[e];for(a=0,r=t.length;a<r;++a)(s=t[a])>e&&s<i&&d.push(s);for(d.push(i),a=0,r=d.length;a<r;++a)l=d[a+1],o=d[a-1],s=d[a],void 0!==o&&void 0!==l&&Math.round((l+o)/2)===s||u.push({time:s,pos:a/(r-1)});return u}(c._timestamps.data,f,g),c._offsets=(n=c._table,a=y,r=f,o=g,h=d=0,(s=m).offset&&a.length&&(s.time.min||(l=1<a.length?a[1]:o,u=a[0],d=(M(n,"time",l,"pos")-M(n,"time",u,"pos"))/2),s.time.max||(l=a[a.length-1],u=1<a.length?a[a.length-2]:r,h=(M(n,"time",l,"pos")-M(n,"time",u,"pos"))/2)),{left:d,right:h}),c._labelFormat=function(t,e){var i,n,a,r=t.length;for(i=0;i<r;i++){if(0!==(n=S(t[i],e)).millisecond())return"MMM D, YYYY h:mm:ss.SSS a";0===n.second()&&0===n.minute()&&0===n.hour()||(a=!0)}return a?"MMM D, YYYY h:mm:ss a":"MMM D, YYYY"}(c._timestamps.data,p),function(t,e){var i,n,a,r,o=[];for(i=0,n=t.length;i<n;++i)a=t[i],r=!!e&&a===+b(a).startOf(e),o.push({value:a,major:r});return o}(y,c._majorUnit)},getLabelForIndex:function(t,e){var i=this.chart.data,n=this.options.time,a=i.labels&&t<i.labels.length?i.labels[t]:"",r=i.datasets[e].data[t];return x.isObject(r)&&(a=this.getRightValue(r)),n.tooltipFormat?S(a,n).format(n.tooltipFormat):"string"==typeof a?a:S(a,n).format(this._labelFormat)},tickFormatFunction:function(t,e,i,n){var a=this.options,r=t.valueOf(),o=a.time.displayFormats,s=o[this._unit],l=this._majorUnit,u=o[l],d=t.clone().startOf(l).valueOf(),h=a.ticks.major,c=h.enabled&&l&&u&&r===d,f=t.format(n||(c?u:s)),g=c?h:a.ticks.minor,m=x.valueOrDefault(g.callback,g.userCallback);return m?m(f,e,i):f},convertTicksToLabels:function(t){var e,i,n=[];for(e=0,i=t.length;e<i;++e)n.push(this.tickFormatFunction(b(t[e].value),e,t));return n},getPixelForOffset:function(t){var e=this,i=e._horizontal?e.width:e.height,n=e._horizontal?e.left:e.top,a=M(e._table,"time",t,"pos");return n+i*(e._offsets.left+a)/(e._offsets.left+1+e._offsets.right)},getPixelForValue:function(t,e,i){var n=null;if(void 0!==e&&void 0!==i&&(n=this._timestamps.datasets[i][e]),null===n&&(n=D(t,this)),null!==n)return this.getPixelForOffset(n)},getPixelForTick:function(t){var e=this.getTicks();return 0<=t&&t<e.length?this.getPixelForOffset(e[t].value):null},getValueForPixel:function(t){var e=this,i=e._horizontal?e.width:e.height,n=e._horizontal?e.left:e.top,a=(i?(t-n)/i:0)*(e._offsets.left+1+e._offsets.left)-e._offsets.right,r=M(e._table,"pos",a,"time");return b(r)},getLabelWidth:function(t){var e=this.options.ticks,i=this.ctx.measureText(t).width,n=x.toRadians(e.maxRotation),a=Math.cos(n),r=Math.sin(n);return i*a+x.valueOrDefault(e.fontSize,o.global.defaultFontSize)*r},getLabelCapacity:function(t){var e=this.options.time.displayFormats.millisecond,i=this.tickFormatFunction(b(t),0,[],e),n=this.getLabelWidth(i),a=this.isHorizontal()?this.width:this.height,r=Math.floor(a/n);return 0<r?r:1}});e.scaleService.registerScaleType("time",t,{position:"bottom",distribution:"linear",bounds:"data",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1,source:"auto",major:{enabled:!1}}})}},{25:25,45:45,6:6}]},{},[7])(7)});
!function(a){a.color={},a.color.make=function(t,i,e,n){var o={};return o.r=t||0,o.g=i||0,o.b=e||0,o.a=null!=n?n:1,o.add=function(t,i){for(var e=0;e<t.length;++e)o[t.charAt(e)]+=i;return o.normalize()},o.scale=function(t,i){for(var e=0;e<t.length;++e)o[t.charAt(e)]*=i;return o.normalize()},o.toString=function(){return 1<=o.a?"rgb("+[o.r,o.g,o.b].join(",")+")":"rgba("+[o.r,o.g,o.b,o.a].join(",")+")"},o.normalize=function(){function t(t,i,e){return i<t?t:e<i?e:i}return o.r=t(0,parseInt(o.r),255),o.g=t(0,parseInt(o.g),255),o.b=t(0,parseInt(o.b),255),o.a=t(0,o.a,1),o},o.clone=function(){return a.color.make(o.r,o.b,o.g,o.a)},o.normalize()},a.color.extract=function(t,i){var e;do{if(""!=(e=t.css(i).toLowerCase())&&"transparent"!=e)break;t=t.parent()}while(!a.nodeName(t.get(0),"body"));return"rgba(0, 0, 0, 0)"==e&&(e="transparent"),a.color.parse(e)},a.color.parse=function(t){var i,e=a.color.make;if(i=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t))return e(parseInt(i[1],10),parseInt(i[2],10),parseInt(i[3],10));if(i=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(t))return e(parseInt(i[1],10),parseInt(i[2],10),parseInt(i[3],10),parseFloat(i[4]));if(i=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t))return e(2.55*parseFloat(i[1]),2.55*parseFloat(i[2]),2.55*parseFloat(i[3]));if(i=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(t))return e(2.55*parseFloat(i[1]),2.55*parseFloat(i[2]),2.55*parseFloat(i[3]),parseFloat(i[4]));if(i=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t))return e(parseInt(i[1],16),parseInt(i[2],16),parseInt(i[3],16));if(i=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t))return e(parseInt(i[1]+i[1],16),parseInt(i[2]+i[2],16),parseInt(i[3]+i[3],16));var n=a.trim(t).toLowerCase();return"transparent"==n?e(255,255,255,0):e((i=o[n]||[0,0,0])[0],i[1],i[2])};var o={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}}(jQuery),function(Z){function n(g,t,i,e){var S=[],C={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:!0,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:.85,sorted:null},xaxis:{show:null,position:"bottom",mode:null,timezone:null,font:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null,monthNames:null,timeformat:null,twelveHourClock:!1},yaxis:{autoscaleMargin:.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:!1,radius:3,lineWidth:2,fill:!0,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:2,fill:!1,fillColor:null,steps:!1},bars:{show:!1,lineWidth:2,barWidth:1,fill:!0,fillColor:null,align:"left",horizontal:!1,zero:!0},shadowSize:3,highlightColor:null},grid:{show:!0,aboveData:!1,color:"#545454",backgroundColor:null,borderColor:null,tickColor:null,margin:0,labelMargin:5,axisMargin:8,borderWidth:2,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:!1,hoverable:!1,autoHighlight:!0,mouseActiveRadius:10},interaction:{redrawOverlayInterval:1e3/60},hooks:{}},n=null,o=null,h=null,x=null,c=null,p=[],m=[],b={left:0,right:0,top:0,bottom:0},f=0,u=0,v=0,k=0,T={processOptions:[],processRawData:[],processDatapoints:[],processOffset:[],drawBackground:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},y=this;function W(t,i){i=[y].concat(i);for(var e=0;e<t.length;++e)t[e].apply(this,i)}function a(t){S=function(t){for(var i=[],e=0;e<t.length;++e){var n=Z.extend(!0,{},C.series);null!=t[e].data?(n.data=t[e].data,delete t[e].data,Z.extend(!0,n,t[e]),t[e].data=n.data):n.data=t[e],i.push(n)}return i}(t),function(){var t,i=S.length,e=-1;for(t=0;t<S.length;++t){var n=S[t].color;null!=n&&(i--,"number"==typeof n&&e<n&&(e=n))}i<=e&&(i=e+1);var o,a=[],r=C.colors,l=r.length,s=0;for(t=0;t<i;t++)o=Z.color.parse(r[t%l]||"#666"),t%l==0&&t&&(s=0<=s?s<.5?-s-.2:0:-s),a[t]=o.scale("rgb",1+s);var c,h=0;for(t=0;t<S.length;++t){if(null==(c=S[t]).color?(c.color=a[h].toString(),++h):"number"==typeof c.color&&(c.color=a[c.color].toString()),null==c.lines.show){var f,u=!0;for(f in c)if(c[f]&&c[f].show){u=!1;break}u&&(c.lines.show=!0)}null==c.lines.zero&&(c.lines.zero=!!c.lines.fill),c.xaxis=M(p,d(c,"x")),c.yaxis=M(m,d(c,"y"))}}(),function(){var t,i,e,n,o,a,r,l,s,c,h,f,u=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY,p=Number.MAX_VALUE;function m(t,i,e){i<t.datamin&&i!=-p&&(t.datamin=i),e>t.datamax&&e!=p&&(t.datamax=e)}for(Z.each(z(),function(t,i){i.datamin=u,i.datamax=d,i.used=!1}),t=0;t<S.length;++t)(o=S[t]).datapoints={points:[]},W(T.processRawData,[o,o.data,o.datapoints]);for(t=0;t<S.length;++t){if(o=S[t],h=o.data,!(f=o.datapoints.format)){if((f=[]).push({x:!0,number:!0,required:!0}),f.push({y:!0,number:!0,required:!0}),o.bars.show||o.lines.show&&o.lines.fill){var g=!!(o.bars.show&&o.bars.zero||o.lines.show&&o.lines.zero);f.push({y:!0,number:!0,required:!1,defaultValue:0,autoscale:g}),o.bars.horizontal&&(delete f[f.length-1].y,f[f.length-1].x=!0)}o.datapoints.format=f}if(null==o.datapoints.pointsize){o.datapoints.pointsize=f.length,r=o.datapoints.pointsize,a=o.datapoints.points;var x=o.lines.show&&o.lines.steps;for(o.xaxis.used=o.yaxis.used=!0,i=e=0;i<h.length;++i,e+=r){var b=null==(c=h[i]);if(!b)for(n=0;n<r;++n)l=c[n],(s=f[n])&&(s.number&&null!=l&&(l=+l,isNaN(l)?l=null:l==1/0?l=p:l==-1/0&&(l=-p)),null==l&&(s.required&&(b=!0),null!=s.defaultValue&&(l=s.defaultValue))),a[e+n]=l;if(b)for(n=0;n<r;++n)null!=(l=a[e+n])&&((s=f[n]).x&&m(o.xaxis,l,l),s.y&&m(o.yaxis,l,l)),a[e+n]=null;else if(x&&0<e&&null!=a[e-r]&&a[e-r]!=a[e]&&a[e-r+1]!=a[e+1]){for(n=0;n<r;++n)a[e+r+n]=a[e+n];a[e+1]=a[e-r+1],e+=r}}}}for(t=0;t<S.length;++t)o=S[t],W(T.processDatapoints,[o,o.datapoints]);for(t=0;t<S.length;++t){o=S[t],a=o.datapoints.points,r=o.datapoints.pointsize,f=o.datapoints.format;var v=u,k=u,y=d,w=d;for(i=0;i<a.length;i+=r)if(null!=a[i])for(n=0;n<r;++n)l=a[i+n],(s=f[n])&&!1!==s.autoscale&&l!=p&&l!=-p&&(s.x&&(l<v&&(v=l),y<l&&(y=l)),s.y&&(l<k&&(k=l),w<l&&(w=l)));if(o.bars.show){var M;switch(o.bars.align){case"left":M=0;break;case"right":M=-o.bars.barWidth;break;case"center":M=-o.bars.barWidth/2;break;default:throw new Error("Invalid bar alignment: "+o.bars.align)}o.bars.horizontal?(k+=M,w+=M+o.bars.barWidth):(v+=M,y+=M+o.bars.barWidth)}m(o.xaxis,v,y),m(o.yaxis,k,w)}Z.each(z(),function(t,i){i.datamin==u&&(i.datamin=null),i.datamax==d&&(i.datamax=null)})}()}function d(t,i){var e=t[i+"axis"];return"object"==typeof e&&(e=e.n),"number"!=typeof e&&(e=1),e}function z(){return Z.grep(p.concat(m),function(t){return t})}function w(t){var i,e,n={};for(i=0;i<p.length;++i)(e=p[i])&&e.used&&(n["x"+e.n]=e.c2p(t.left));for(i=0;i<m.length;++i)(e=m[i])&&e.used&&(n["y"+e.n]=e.c2p(t.top));return void 0!==n.x1&&(n.x=n.x1),void 0!==n.y1&&(n.y=n.y1),n}function M(t,i){return t[i-1]||(t[i-1]={n:i,direction:t==p?"x":"y",options:Z.extend(!0,{},t==p?C.xaxis:C.yaxis)}),t[i-1]}function r(t){return(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)}function l(t){var i=document.createElement("canvas");if(i.className=t,Z(i).css({direction:"ltr",position:"absolute",left:0,top:0}).appendTo(g),!i.getContext){if(!window.G_vmlCanvasManager)throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");i=window.G_vmlCanvasManager.initElement(i)}var e=i.getContext("2d"),n=r(e);return i.width=f*n,i.height=u*n,i.style.width=f+"px",i.style.height=u+"px",e.save(),e.scale(n,n),i}function s(){if(f=g.width(),u=g.height(),f<=0||u<=0)throw new Error("Invalid dimensions for plot, width = "+f+", height = "+u)}function I(t){var i=t.getContext("2d"),e=r(i);t.style.width!=f&&(t.width=f*e,t.style.width=f+"px"),t.style.height!=u&&(t.height=u*e,t.style.height=u+"px"),i.restore(),i.save(),i.scale(e,e)}function A(t){var i,e=t.labelWidth,n=t.labelHeight,o=t.options.position,a=t.options.tickLength,r=C.grid.axisMargin,l=C.grid.labelMargin,s="x"==t.direction?p:m,c=Z.grep(s,function(t){return t&&t.options.position==o&&t.reserveSpace});if(Z.inArray(t,c)==c.length-1&&(r=0),null==a){var h=Z.grep(s,function(t){return t&&t.reserveSpace});a=(i=0==Z.inArray(t,h))?"full":5}isNaN(+a)||(l+=+a),"x"==t.direction?(n+=l,"bottom"==o?(b.bottom+=n+r,t.box={top:u-b.bottom,height:n}):(t.box={top:b.top+r,height:n},b.top+=n+r)):(e+=l,"left"==o?(t.box={left:b.left+r,width:e},b.left+=e+r):(b.right+=e+r,t.box={left:f-b.right,width:e})),t.position=o,t.tickLength=a,t.box.padding=l,t.innermost=i}function F(){var t,i=z(),e=C.grid.show;for(var n in b){var o=C.grid.margin||0;b[n]="number"==typeof o?o:o[n]||0}for(var n in W(T.processOffset,[b]),b)"object"==typeof C.grid.borderWidth?b[n]+=e?C.grid.borderWidth[n]:0:b[n]+=e?C.grid.borderWidth:0;if(Z.each(i,function(t,i){i.show=i.options.show,null==i.show&&(i.show=i.used),i.reserveSpace=i.show||i.options.reserveSpace,function(t){var i=t.options,e=+(null!=i.min?i.min:t.datamin),n=+(null!=i.max?i.max:t.datamax),o=n-e;if(0==o){var a=0==n?1:.01;null==i.min&&(e-=a),null!=i.max&&null==i.min||(n+=a)}else{var r=i.autoscaleMargin;null!=r&&(null==i.min&&(e-=o*r)<0&&null!=t.datamin&&0<=t.datamin&&(e=0),null==i.max&&0<(n+=o*r)&&null!=t.datamax&&t.datamax<=0&&(n=0))}t.min=e,t.max=n}(i)}),e){var a={style:g.css("font-style"),size:Math.round(.8*(+g.css("font-size").replace("px","")||13)),variant:g.css("font-variant"),weight:g.css("font-weight"),family:g.css("font-family")},r=Z.grep(i,function(t){return t.reserveSpace});for(Z.each(r,function(t,i){var e,n;!function(t){var i,d=t.options;i="number"==typeof d.ticks&&0<d.ticks?d.ticks:.3*Math.sqrt("x"==t.direction?f:u);if(t.delta=(t.max-t.min)/i,"time"==d.mode&&!t.tickGenerator)throw new Error("Time mode requires the flot.time plugin.");t.tickGenerator||(t.tickGenerator=function(t){var i=d.tickDecimals,e=-Math.floor(Math.log(t.delta)/Math.LN10);null!=i&&i<e&&(e=i);var n,o,a,r,l,s=Math.pow(10,-e),c=t.delta/s,h=[],f=0,u=Number.NaN;for(c<1.5?n=1:c<3?(n=2,2.25<c&&(null==i||e+1<=i)&&(n=2.5,++e)):n=c<7.5?5:10,n*=s,null!=d.minTickSize&&n<d.minTickSize&&(n=d.minTickSize),t.tickDecimals=Math.max(0,null!=i?i:e),t.tickSize=d.tickSize||n,r=t.min,l=t.tickSize,o=l*Math.floor(r/l);a=u,u=o+f*t.tickSize,h.push(u),++f,u<t.max&&u!=a;);return h},t.tickFormatter=function(t,i){var e=i.tickDecimals?Math.pow(10,i.tickDecimals):1,n=""+Math.round(t*e)/e;if(null!=i.tickDecimals){var o=n.indexOf("."),a=-1==o?0:n.length-o-1;if(a<i.tickDecimals)return(a?n:n+".")+(""+e).substr(1,i.tickDecimals-a)}return n});Z.isFunction(d.tickFormatter)&&(t.tickFormatter=function(t,i){return""+d.tickFormatter(t,i)});if(null!=d.alignTicksWithAxis){var o=("x"==t.direction?p:m)[d.alignTicksWithAxis-1];if(o&&o.used&&o!=t){var e=t.tickGenerator(t);if(0<e.length&&(null==d.min&&(t.min=Math.min(t.min,e[0])),null==d.max&&1<e.length&&(t.max=Math.max(t.max,e[e.length-1]))),t.tickGenerator=function(t){var i,e,n=[];for(e=0;e<o.ticks.length;++e)i=(o.ticks[e].v-o.min)/(o.max-o.min),i=t.min+i*(t.max-t.min),n.push(i);return n},!t.mode&&null==d.tickDecimals){var n=Math.max(0,1-Math.floor(Math.log(t.delta)/Math.LN10)),a=t.tickGenerator(t);1<a.length&&/\..*0$/.test((a[1]-a[0]).toFixed(n))||(t.tickDecimals=n)}}}}(i),function(t){var i,e,n=t.options.ticks,o=[];null==n||"number"==typeof n&&0<n?o=t.tickGenerator(t):n&&(o=Z.isFunction(n)?n(t):n);for(t.ticks=[],i=0;i<o.length;++i){var a=null,r=o[i];"object"==typeof r?(e=+r[0],1<r.length&&(a=r[1])):e=+r,null==a&&(a=t.tickFormatter(e,t)),isNaN(e)||t.ticks.push({v:e,label:a})}}(i),n=(e=i).ticks,e.options.autoscaleMargin&&0<n.length&&(null==e.options.min&&(e.min=Math.min(e.min,n[0].v)),null==e.options.max&&1<n.length&&(e.max=Math.max(e.max,n[n.length-1].v))),i.font=Z.extend({},a,i.options.font),function(t){var i=t.options,e=t.ticks||[],n=i.labelWidth||0,o=i.labelHeight||0,a=t.font;x.save(),x.font=a.style+" "+a.variant+" "+a.weight+" "+a.size+"px '"+a.family+"'";for(var r=0;r<e.length;++r){var l=e[r];if(l.lines=[],l.width=l.height=0,l.label){for(var s=(l.label+"").replace(/<br ?\/?>|\r\n|\r/g,"\n").split("\n"),c=0;c<s.length;++c){var h={text:s[c]},f=x.measureText(h.text);h.width=f.width,h.height=null!=f.height?f.height:a.size,h.height+=Math.round(.15*a.size),l.width=Math.max(h.width,l.width),l.height+=h.height,l.lines.push(h)}null==i.labelWidth&&(n=Math.max(n,l.width)),null==i.labelHeight&&(o=Math.max(o,l.height))}}x.restore(),t.labelWidth=Math.ceil(n),t.labelHeight=Math.ceil(o)}(i)}),t=r.length-1;0<=t;--t)A(r[t]);!function(){var t,i=C.grid.minBorderMargin,n={x:0,y:0};if(null==i)for(t=i=0;t<S.length;++t)i=Math.max(i,2*(S[t].points.radius+S[t].points.lineWidth/2));n.x=n.y=Math.ceil(i),Z.each(z(),function(t,i){var e=i.direction;i.reserveSpace&&(n[e]=Math.ceil(Math.max(n[e],("x"==e?i.labelWidth:i.labelHeight)/2)))}),b.left=Math.max(n.x,b.left),b.right=Math.max(n.x,b.right),b.top=Math.max(n.y,b.top),b.bottom=Math.max(n.y,b.bottom)}(),Z.each(r,function(t,i){var e;"x"==(e=i).direction?(e.box.left=b.left-e.labelWidth/2,e.box.width=f-b.left-b.right+e.labelWidth):(e.box.top=b.top-e.labelHeight/2,e.box.height=u-b.bottom-b.top+e.labelHeight)})}v=f-b.left-b.right,k=u-b.bottom-b.top,Z.each(i,function(t,i){!function(t){function i(t){return t}var e,n,o=t.options.transform||i,a=t.options.inverseTransform;"x"==t.direction?(e=t.scale=v/Math.abs(o(t.max)-o(t.min)),n=Math.min(o(t.max),o(t.min))):(e=-(e=t.scale=k/Math.abs(o(t.max)-o(t.min))),n=Math.max(o(t.max),o(t.min))),t.p2c=o==i?function(t){return(t-n)*e}:function(t){return(o(t)-n)*e},t.c2p=a?function(t){return a(n+t/e)}:function(t){return n+t/e}}(i)}),function(){if(g.find(".legend").remove(),!C.legend.show)return;for(var t,i,e=[],n=[],o=!1,a=C.legend.labelFormatter,r=0;r<S.length;++r)(t=S[r]).label&&(i=a?a(t.label,t):t.label)&&n.push({label:i,color:t.color});if(C.legend.sorted)if(Z.isFunction(C.legend.sorted))n.sort(C.legend.sorted);else if("reverse"==C.legend.sorted)n.reverse();else{var l="descending"!=C.legend.sorted;n.sort(function(t,i){return t.label==i.label?0:t.label<i.label!=l?1:-1})}for(var r=0;r<n.length;++r){var s=n[r];r%C.legend.noColumns==0&&(o&&e.push("</tr>"),e.push("<tr>"),o=!0),e.push('<td class="legendColorBox"><div style="border:1px solid '+C.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+s.color+';overflow:hidden"></div></div></td><td class="legendLabel">'+s.label+"</td>")}o&&e.push("</tr>");if(0==e.length)return;var c='<table style="font-size:smaller;color:'+C.grid.color+'">'+e.join("")+"</table>";if(null!=C.legend.container)Z(C.legend.container).html(c);else{var h="",f=C.legend.position,u=C.legend.margin;null==u[0]&&(u=[u,u]),"n"==f.charAt(0)?h+="top:"+(u[1]+b.top)+"px;":"s"==f.charAt(0)&&(h+="bottom:"+(u[1]+b.bottom)+"px;"),"e"==f.charAt(1)?h+="right:"+(u[0]+b.right)+"px;":"w"==f.charAt(1)&&(h+="left:"+(u[0]+b.left)+"px;");var d=Z('<div class="legend">'+c.replace('style="','style="position:absolute;'+h+";")+"</div>").appendTo(g);if(0!=C.legend.backgroundOpacity){var p=C.legend.backgroundColor;null==p&&((p=(p=C.grid.backgroundColor)&&"string"==typeof p?Z.color.parse(p):Z.color.extract(d,"background-color")).a=1,p=p.toString());var m=d.children();Z('<div style="position:absolute;width:'+m.width()+"px;height:"+m.height()+"px;"+h+"background-color:"+p+';"> </div>').prependTo(d).css("opacity",C.legend.backgroundOpacity)}}}()}function P(){x.clearRect(0,0,f,u),W(T.drawBackground,[x]);var t=C.grid;t.show&&t.backgroundColor&&(x.save(),x.translate(b.left,b.top),x.fillStyle=K(C.grid.backgroundColor,k,0,"rgba(255, 255, 255, 0)"),x.fillRect(0,0,v,k),x.restore()),t.show&&!t.aboveData&&(D(),E());for(var i=0;i<S.length;++i)W(T.drawSeries,[x,S[i]]),O(S[i]);W(T.draw,[x]),t.show&&t.aboveData&&(D(),E())}function N(t,i){for(var e,n,o,a,r=z(),l=0;l<r.length;++l)if((e=r[l]).direction==i&&(t[a=i+e.n+"axis"]||1!=e.n||(a=i+"axis"),t[a])){n=t[a].from,o=t[a].to;break}if(t[a]||(e="x"==i?p[0]:m[0],n=t[i+"1"],o=t[i+"2"]),null!=n&&null!=o&&o<n){var s=n;n=o,o=s}return{from:n,to:o,axis:e}}function D(){var t,i,e,n;x.save(),x.translate(b.left,b.top);var o=C.grid.markings;if(o)for(Z.isFunction(o)&&((i=y.getAxes()).xmin=i.xaxis.min,i.xmax=i.xaxis.max,i.ymin=i.yaxis.min,i.ymax=i.yaxis.max,o=o(i)),t=0;t<o.length;++t){var a=o[t],r=N(a,"x"),l=N(a,"y");null==r.from&&(r.from=r.axis.min),null==r.to&&(r.to=r.axis.max),null==l.from&&(l.from=l.axis.min),null==l.to&&(l.to=l.axis.max),r.to<r.axis.min||r.from>r.axis.max||l.to<l.axis.min||l.from>l.axis.max||(r.from=Math.max(r.from,r.axis.min),r.to=Math.min(r.to,r.axis.max),l.from=Math.max(l.from,l.axis.min),l.to=Math.min(l.to,l.axis.max),r.from==r.to&&l.from==l.to||(r.from=r.axis.p2c(r.from),r.to=r.axis.p2c(r.to),l.from=l.axis.p2c(l.from),l.to=l.axis.p2c(l.to),r.from==r.to||l.from==l.to?(x.beginPath(),x.strokeStyle=a.color||C.grid.markingsColor,x.lineWidth=a.lineWidth||C.grid.markingsLineWidth,x.moveTo(r.from,l.from),x.lineTo(r.to,l.to),x.stroke()):(x.fillStyle=a.color||C.grid.markingsColor,x.fillRect(r.from,l.to,r.to-r.from,l.from-l.to))))}i=z(),e=C.grid.borderWidth;for(var s=0;s<i.length;++s){var c,h,f,u,d=i[s],p=d.box,m=d.tickLength;if(d.show&&0!=d.ticks.length){for(x.strokeStyle=d.options.tickColor||Z.color.parse(d.options.color).scale("a",.22).toString(),x.lineWidth=1,"x"==d.direction?(c=0,h="full"==m?"top"==d.position?0:k:p.top-b.top+("top"==d.position?p.height:0)):(h=0,c="full"==m?"left"==d.position?0:v:p.left-b.left+("left"==d.position?p.width:0)),d.innermost||(x.beginPath(),f=u=0,"x"==d.direction?f=v:u=k,1==x.lineWidth&&(c=Math.floor(c)+.5,h=Math.floor(h)+.5),x.moveTo(c,h),x.lineTo(c+f,h+u),x.stroke()),x.beginPath(),t=0;t<d.ticks.length;++t){var g=d.ticks[t].v;f=u=0,isNaN(g)||g<d.min||g>d.max||"full"==m&&("object"==typeof e&&0<e[d.position]||0<e)&&(g==d.min||g==d.max)||("x"==d.direction?(c=d.p2c(g),u="full"==m?-k:m,"top"==d.position&&(u=-u)):(h=d.p2c(g),f="full"==m?-v:m,"left"==d.position&&(f=-f)),1==x.lineWidth&&("x"==d.direction?c=Math.floor(c)+.5:h=Math.floor(h)+.5),x.moveTo(c,h),x.lineTo(c+f,h+u))}x.stroke()}}e&&(n=C.grid.borderColor,"object"==typeof e||"object"==typeof n?("object"!=typeof e&&(e={top:e,right:e,bottom:e,left:e}),"object"!=typeof n&&(n={top:n,right:n,bottom:n,left:n}),0<e.top&&(x.strokeStyle=n.top,x.lineWidth=e.top,x.beginPath(),x.moveTo(0-e.left,0-e.top/2),x.lineTo(v,0-e.top/2),x.stroke()),0<e.right&&(x.strokeStyle=n.right,x.lineWidth=e.right,x.beginPath(),x.moveTo(v+e.right/2,0-e.top),x.lineTo(v+e.right/2,k),x.stroke()),0<e.bottom&&(x.strokeStyle=n.bottom,x.lineWidth=e.bottom,x.beginPath(),x.moveTo(v+e.right,k+e.bottom/2),x.lineTo(0,k+e.bottom/2),x.stroke()),0<e.left&&(x.strokeStyle=n.left,x.lineWidth=e.left,x.beginPath(),x.moveTo(0-e.left/2,k+e.bottom),x.lineTo(0-e.left/2,0),x.stroke())):(x.lineWidth=e,x.strokeStyle=C.grid.borderColor,x.strokeRect(-e/2,-e/2,v+e,k+e))),x.restore()}function E(){x.save(),Z.each(z(),function(t,i){if(i.show&&0!=i.ticks.length){var e=i.box,n=i.font;x.fillStyle=i.options.color,x.font=n.style+" "+n.variant+" "+n.weight+" "+n.size+"px "+n.family,x.textAlign="start",x.textBaseline="middle";for(var o=0;o<i.ticks.length;++o){var a=i.ticks[o];if(!(!a.label||a.v<i.min||a.v>i.max))for(var r,l,s,c=0,h=0;h<a.lines.length;++h)s=a.lines[h],"x"==i.direction?(r=b.left+i.p2c(a.v)-s.width/2,l="bottom"==i.position?e.top+e.padding:e.top+e.height-e.padding-a.height):(l=b.top+i.p2c(a.v)-a.height/2,r="left"==i.position?e.left+e.width-e.padding-s.width:e.left+e.padding),l+=s.height/2+c,c+=s.height,window.opera&&window.opera.version().split(".")[0]<12&&(r=Math.floor(r),l=Math.ceil(l-2)),x.fillText(s.text,r,l)}}}),x.restore()}function O(t){t.lines.show&&function(t){function i(t,i,e,n,o){var a=t.points,r=t.pointsize,l=null,s=null;x.beginPath();for(var c=r;c<a.length;c+=r){var h=a[c-r],f=a[c-r+1],u=a[c],d=a[c+1];if(null!=h&&null!=u){if(f<=d&&f<o.min){if(d<o.min)continue;h=(o.min-f)/(d-f)*(u-h)+h,f=o.min}else if(d<=f&&d<o.min){if(f<o.min)continue;u=(o.min-f)/(d-f)*(u-h)+h,d=o.min}if(d<=f&&f>o.max){if(d>o.max)continue;h=(o.max-f)/(d-f)*(u-h)+h,f=o.max}else if(f<=d&&d>o.max){if(f>o.max)continue;u=(o.max-f)/(d-f)*(u-h)+h,d=o.max}if(h<=u&&h<n.min){if(u<n.min)continue;f=(n.min-h)/(u-h)*(d-f)+f,h=n.min}else if(u<=h&&u<n.min){if(h<n.min)continue;d=(n.min-h)/(u-h)*(d-f)+f,u=n.min}if(u<=h&&h>n.max){if(u>n.max)continue;f=(n.max-h)/(u-h)*(d-f)+f,h=n.max}else if(h<=u&&u>n.max){if(h>n.max)continue;d=(n.max-h)/(u-h)*(d-f)+f,u=n.max}h==l&&f==s||x.moveTo(n.p2c(h)+i,o.p2c(f)+e),l=u,s=d,x.lineTo(n.p2c(u)+i,o.p2c(d)+e)}}x.stroke()}x.save(),x.translate(b.left,b.top),x.lineJoin="round";var e=t.lines.lineWidth,n=t.shadowSize;if(0<e&&0<n){x.lineWidth=n,x.strokeStyle="rgba(0,0,0,0.1)";var o=Math.PI/18;i(t.datapoints,Math.sin(o)*(e/2+n/2),Math.cos(o)*(e/2+n/2),t.xaxis,t.yaxis),x.lineWidth=n/2,i(t.datapoints,Math.sin(o)*(e/2+n/4),Math.cos(o)*(e/2+n/4),t.xaxis,t.yaxis)}x.lineWidth=e,x.strokeStyle=t.color;var a=L(t.lines,t.color,0,k);a&&(x.fillStyle=a,function(t,i,e){var n=t.points,o=t.pointsize,a=Math.min(Math.max(0,e.min),e.max),r=0,l=!1,s=1,c=0,h=0;for(;!(0<o&&r>n.length+o);){var f=n[(r+=o)-o],u=n[r-o+s],d=n[r],p=n[r+s];if(l){if(0<o&&null!=f&&null==d){h=r,o=-o,s=2;continue}if(o<0&&r==c+o){x.fill(),l=!1,s=1,r=c=h+(o=-o);continue}}if(null!=f&&null!=d){if(f<=d&&f<i.min){if(d<i.min)continue;u=(i.min-f)/(d-f)*(p-u)+u,f=i.min}else if(d<=f&&d<i.min){if(f<i.min)continue;p=(i.min-f)/(d-f)*(p-u)+u,d=i.min}if(d<=f&&f>i.max){if(d>i.max)continue;u=(i.max-f)/(d-f)*(p-u)+u,f=i.max}else if(f<=d&&d>i.max){if(f>i.max)continue;p=(i.max-f)/(d-f)*(p-u)+u,d=i.max}if(l||(x.beginPath(),x.moveTo(i.p2c(f),e.p2c(a)),l=!0),u>=e.max&&p>=e.max)x.lineTo(i.p2c(f),e.p2c(e.max)),x.lineTo(i.p2c(d),e.p2c(e.max));else if(u<=e.min&&p<=e.min)x.lineTo(i.p2c(f),e.p2c(e.min)),x.lineTo(i.p2c(d),e.p2c(e.min));else{var m=f,g=d;u<=p&&u<e.min&&p>=e.min?(f=(e.min-u)/(p-u)*(d-f)+f,u=e.min):p<=u&&p<e.min&&u>=e.min&&(d=(e.min-u)/(p-u)*(d-f)+f,p=e.min),p<=u&&u>e.max&&p<=e.max?(f=(e.max-u)/(p-u)*(d-f)+f,u=e.max):u<=p&&p>e.max&&u<=e.max&&(d=(e.max-u)/(p-u)*(d-f)+f,p=e.max),f!=m&&x.lineTo(i.p2c(m),e.p2c(u)),x.lineTo(i.p2c(f),e.p2c(u)),x.lineTo(i.p2c(d),e.p2c(p)),d!=g&&(x.lineTo(i.p2c(d),e.p2c(p)),x.lineTo(i.p2c(g),e.p2c(p)))}}}}(t.datapoints,t.xaxis,t.yaxis));0<e&&i(t.datapoints,0,0,t.xaxis,t.yaxis);x.restore()}(t),t.bars.show&&function(h){var t;switch(x.save(),x.translate(b.left,b.top),x.lineWidth=h.bars.lineWidth,x.strokeStyle=h.color,h.bars.align){case"left":t=0;break;case"right":t=-h.bars.barWidth;break;case"center":t=-h.bars.barWidth/2;break;default:throw new Error("Invalid bar alignment: "+h.bars.align)}var i=h.bars.fill?function(t,i){return L(h.bars,h.color,t,i)}:null;(function(t,i,e,n,o,a,r){for(var l=t.points,s=t.pointsize,c=0;c<l.length;c+=s)null!=l[c]&&R(l[c],l[c+1],l[c+2],i,e,n,o,a,r,x,h.bars.horizontal,h.bars.lineWidth)})(h.datapoints,t,t+h.bars.barWidth,0,i,h.xaxis,h.yaxis),x.restore()}(t),t.points.show&&function(t){function i(t,i,e,n,o,a,r,l){for(var s=t.points,c=t.pointsize,h=0;h<s.length;h+=c){var f=s[h],u=s[h+1];null==f||f<a.min||f>a.max||u<r.min||u>r.max||(x.beginPath(),f=a.p2c(f),u=r.p2c(u)+n,"circle"==l?x.arc(f,u,i,0,o?Math.PI:2*Math.PI,!1):l(x,f,u,i,o),x.closePath(),e&&(x.fillStyle=e,x.fill()),x.stroke())}}x.save(),x.translate(b.left,b.top);var e=t.points.lineWidth,n=t.shadowSize,o=t.points.radius,a=t.points.symbol;0==e&&(e=1e-4);if(0<e&&0<n){var r=n/2;x.lineWidth=r,x.strokeStyle="rgba(0,0,0,0.1)",i(t.datapoints,o,null,r+r/2,!0,t.xaxis,t.yaxis,a),x.strokeStyle="rgba(0,0,0,0.2)",i(t.datapoints,o,null,r/2,!0,t.xaxis,t.yaxis,a)}x.lineWidth=e,x.strokeStyle=t.color,i(t.datapoints,o,L(t.points,t.color),0,!1,t.xaxis,t.yaxis,a),x.restore()}(t)}function R(t,i,e,n,o,a,r,l,s,c,h,f){var u,d,p,m,g,x,b,v,k;h?(v=x=b=!0,g=!1,m=i+n,p=i+o,(d=t)<(u=e)&&(k=d,d=u,u=k,x=!(g=!0))):(g=x=b=!0,v=!1,u=t+n,d=t+o,(m=i)<(p=e)&&(k=m,m=p,p=k,b=!(v=!0))),d<l.min||u>l.max||m<s.min||p>s.max||(u<l.min&&(u=l.min,g=!1),d>l.max&&(d=l.max,x=!1),p<s.min&&(p=s.min,v=!1),m>s.max&&(m=s.max,b=!1),u=l.p2c(u),p=s.p2c(p),d=l.p2c(d),m=s.p2c(m),r&&(c.beginPath(),c.moveTo(u,p),c.lineTo(u,m),c.lineTo(d,m),c.lineTo(d,p),c.fillStyle=r(p,m),c.fill()),0<f&&(g||x||b||v)&&(c.beginPath(),c.moveTo(u,p+a),g?c.lineTo(u,m+a):c.moveTo(u,m+a),b?c.lineTo(d,m+a):c.moveTo(d,m+a),x?c.lineTo(d,p+a):c.moveTo(d,p+a),v?c.lineTo(u,p+a):c.moveTo(u,p+a),c.stroke()))}function L(t,i,e,n){var o=t.fill;if(!o)return null;if(t.fillColor)return K(t.fillColor,e,n,i);var a=Z.color.parse(i);return a.a="number"==typeof o?o:.4,a.normalize(),a.toString()}y.setData=a,y.setupGrid=F,y.draw=P,y.getPlaceholder=function(){return g},y.getCanvas=function(){return n},y.getPlotOffset=function(){return b},y.width=function(){return v},y.height=function(){return k},y.offset=function(){var t=h.offset();return t.left+=b.left,t.top+=b.top,t},y.getData=function(){return S},y.getAxes=function(){var e={};return Z.each(p.concat(m),function(t,i){i&&(e[i.direction+(1!=i.n?i.n:"")+"axis"]=i)}),e},y.getXAxes=function(){return p},y.getYAxes=function(){return m},y.c2p=w,y.p2c=function(t){var i,e,n,o={};for(i=0;i<p.length;++i)if((e=p[i])&&e.used&&(n="x"+e.n,null==t[n]&&1==e.n&&(n="x"),null!=t[n])){o.left=e.p2c(t[n]);break}for(i=0;i<m.length;++i)if((e=m[i])&&e.used&&(n="y"+e.n,null==t[n]&&1==e.n&&(n="y"),null!=t[n])){o.top=e.p2c(t[n]);break}return o},y.getOptions=function(){return C},y.highlight=_,y.unhighlight=Q,y.triggerRedrawOverlay=Y,y.pointOffset=function(t){return{left:parseInt(p[d(t,"x")-1].p2c(+t.x)+b.left,10),top:parseInt(m[d(t,"y")-1].p2c(+t.y)+b.top,10)}},y.shutdown=function(){j&&clearTimeout(j);h.unbind("mousemove",G),h.unbind("mouseleave",H),h.unbind("click",V),W(T.shutdown,[h])},y.resize=function(){s(),I(n),I(o)},y.hooks=T,function(){for(var t=0;t<e.length;++t){var i=e[t];i.init(y),i.options&&Z.extend(!0,C,i.options)}}(),function(t){var i;Z.extend(!0,C,t),null==C.xaxis.color&&(C.xaxis.color=C.grid.color);null==C.yaxis.color&&(C.yaxis.color=C.grid.color);null==C.xaxis.tickColor&&(C.xaxis.tickColor=C.grid.tickColor);null==C.yaxis.tickColor&&(C.yaxis.tickColor=C.grid.tickColor);null==C.grid.borderColor&&(C.grid.borderColor=C.grid.color);null==C.grid.tickColor&&(C.grid.tickColor=Z.color.parse(C.grid.color).scale("a",.22).toString());for(i=0;i<Math.max(1,C.xaxes.length);++i)C.xaxes[i]=Z.extend(!0,{},C.xaxis,C.xaxes[i]);for(i=0;i<Math.max(1,C.yaxes.length);++i)C.yaxes[i]=Z.extend(!0,{},C.yaxis,C.yaxes[i]);C.xaxis.noTicks&&null==C.xaxis.ticks&&(C.xaxis.ticks=C.xaxis.noTicks);C.yaxis.noTicks&&null==C.yaxis.ticks&&(C.yaxis.ticks=C.yaxis.noTicks);C.x2axis&&(C.xaxes[1]=Z.extend(!0,{},C.xaxis,C.x2axis),C.xaxes[1].position="top");C.y2axis&&(C.yaxes[1]=Z.extend(!0,{},C.yaxis,C.y2axis),C.yaxes[1].position="right");C.grid.coloredAreas&&(C.grid.markings=C.grid.coloredAreas);C.grid.coloredAreasColor&&(C.grid.markingsColor=C.grid.coloredAreasColor);C.lines&&Z.extend(!0,C.series.lines,C.lines);C.points&&Z.extend(!0,C.series.points,C.points);C.bars&&Z.extend(!0,C.series.bars,C.bars);null!=C.shadowSize&&(C.series.shadowSize=C.shadowSize);null!=C.highlightColor&&(C.series.highlightColor=C.highlightColor);for(i=0;i<C.xaxes.length;++i)M(p,i+1).options=C.xaxes[i];for(i=0;i<C.yaxes.length;++i)M(m,i+1).options=C.yaxes[i];for(var e in T)C.hooks[e]&&C.hooks[e].length&&(T[e]=T[e].concat(C.hooks[e]));W(T.processOptions,[C])}(i),function(){var t,i=g.children("canvas.flot-base"),e=g.children("canvas.flot-overlay");0==i.length||0==e?(g.html(""),g.css({padding:0}),"static"==g.css("position")&&g.css("position","relative"),s(),n=l("flot-base"),o=l("flot-overlay"),t=!1):(n=i.get(0),o=e.get(0),t=!0);x=n.getContext("2d"),c=o.getContext("2d"),h=Z(o),t&&(g.data("plot").shutdown(),y.resize(),c.clearRect(0,0,f,u),h.unbind(),g.children().not([n,o]).remove());g.data("plot",y)}(),a(t),F(),P(),function(){C.grid.hoverable&&(h.mousemove(G),h.bind("mouseleave",H));C.grid.clickable&&h.click(V);W(T.bindEvents,[h])}();var B=[],j=null;function G(t){C.grid.hoverable&&X("plothover",t,function(t){return 0!=t.hoverable})}function H(t){C.grid.hoverable&&X("plothover",t,function(t){return!1})}function V(t){X("plotclick",t,function(t){return 0!=t.clickable})}function X(t,i,e){var n=h.offset(),o=i.pageX-n.left-b.left,a=i.pageY-n.top-b.top,r=w({left:o,top:a});r.pageX=i.pageX,r.pageY=i.pageY;var l=function(t,i,e){var n,o,a,r=C.grid.mouseActiveRadius,l=r*r+1,s=null;for(n=S.length-1;0<=n;--n)if(e(S[n])){var c=S[n],h=c.xaxis,f=c.yaxis,u=c.datapoints.points,d=h.c2p(t),p=f.c2p(i),m=r/h.scale,g=r/f.scale;if(a=c.datapoints.pointsize,h.options.inverseTransform&&(m=Number.MAX_VALUE),f.options.inverseTransform&&(g=Number.MAX_VALUE),c.lines.show||c.points.show)for(o=0;o<u.length;o+=a){var x=u[o],b=u[o+1];if(null!=x&&!(m<x-d||x-d<-m||g<b-p||b-p<-g)){var v=Math.abs(h.p2c(x)-t),k=Math.abs(f.p2c(b)-i),y=v*v+k*k;y<l&&(l=y,s=[n,o/a])}}if(c.bars.show&&!s){var w="left"==c.bars.align?0:-c.bars.barWidth/2,M=w+c.bars.barWidth;for(o=0;o<u.length;o+=a){x=u[o],b=u[o+1];var T=u[o+2];null!=x&&(S[n].bars.horizontal?d<=Math.max(T,x)&&d>=Math.min(T,x)&&b+w<=p&&p<=b+M:x+w<=d&&d<=x+M&&p>=Math.min(T,b)&&p<=Math.max(T,b))&&(s=[n,o/a])}}}return s?(n=s[0],o=s[1],a=S[n].datapoints.pointsize,{datapoint:S[n].datapoints.points.slice(o*a,(o+1)*a),dataIndex:o,series:S[n],seriesIndex:n}):null}(o,a,e);if(l&&(l.pageX=parseInt(l.series.xaxis.p2c(l.datapoint[0])+n.left+b.left,10),l.pageY=parseInt(l.series.yaxis.p2c(l.datapoint[1])+n.top+b.top,10)),C.grid.autoHighlight){for(var s=0;s<B.length;++s){var c=B[s];c.auto!=t||l&&c.series==l.series&&c.point[0]==l.datapoint[0]&&c.point[1]==l.datapoint[1]||Q(c.series,c.point)}l&&_(l.series,l.datapoint,t)}g.trigger(t,[r,l])}function Y(){var t=C.interaction.redrawOverlayInterval;-1!=t?j||(j=setTimeout(q,t)):q()}function q(){var t,i;for(j=null,c.save(),c.clearRect(0,0,f,u),c.translate(b.left,b.top),t=0;t<B.length;++t)(i=B[t]).series.bars.show?$(i.series,i.point):J(i.series,i.point);c.restore(),W(T.drawOverlay,[c])}function _(t,i,e){if("number"==typeof t&&(t=S[t]),"number"==typeof i){var n=t.datapoints.pointsize;i=t.datapoints.points.slice(n*i,n*(i+1))}var o=U(t,i);-1==o?(B.push({series:t,point:i,auto:e}),Y()):e||(B[o].auto=!1)}function Q(t,i){null==t&&null==i&&(B=[],Y()),"number"==typeof t&&(t=S[t]),"number"==typeof i&&(i=t.data[i]);var e=U(t,i);-1!=e&&(B.splice(e,1),Y())}function U(t,i){for(var e=0;e<B.length;++e){var n=B[e];if(n.series==t&&n.point[0]==i[0]&&n.point[1]==i[1])return e}return-1}function J(t,i){var e=i[0],n=i[1],o=t.xaxis,a=t.yaxis,r="string"==typeof t.highlightColor?t.highlightColor:Z.color.parse(t.color).scale("a",.5).toString();if(!(e<o.min||e>o.max||n<a.min||n>a.max)){var l=t.points.radius+t.points.lineWidth/2;c.lineWidth=l,c.strokeStyle=r;var s=1.5*l;e=o.p2c(e),n=a.p2c(n),c.beginPath(),"circle"==t.points.symbol?c.arc(e,n,s,0,2*Math.PI,!1):t.points.symbol(c,e,n,s,!1),c.closePath(),c.stroke()}}function $(t,i){var e="string"==typeof t.highlightColor?t.highlightColor:Z.color.parse(t.color).scale("a",.5).toString(),n=e,o="left"==t.bars.align?0:-t.bars.barWidth/2;c.lineWidth=t.bars.lineWidth,c.strokeStyle=e,R(i[0],i[1],i[2]||0,o,o+t.bars.barWidth,0,function(){return n},t.xaxis,t.yaxis,c,t.bars.horizontal,t.bars.lineWidth)}function K(t,i,e,n){if("string"==typeof t)return t;for(var o=x.createLinearGradient(0,e,0,i),a=0,r=t.colors.length;a<r;++a){var l=t.colors[a];if("string"!=typeof l){var s=Z.color.parse(n);null!=l.brightness&&(s=s.scale("rgb",l.brightness)),null!=l.opacity&&(s.a*=l.opacity),l=s.toString()}o.addColorStop(a/(r-1),l)}return o}}Z.plot=function(t,i,e){return new n(Z(t),i,e,Z.plot.plugins)},Z.plot.version="0.8-alpha",Z.plot.plugins=[],Z.fn.plot=function(t,i){return this.each(function(){Z.plot(this,t,i)})}}(jQuery);
!function(a){var t={tooltip:{show:!1,cssClass:"flotTip",content:"%s | X: %x | Y: %y",xDateFormat:null,yDateFormat:null,monthNames:null,dayNames:null,shifts:{x:10,y:20},defaultTheme:!0,snap:!0,lines:!1,clickTips:!1,onHover:function(t,i){},$compat:!1}};t.tooltipOpts=t.tooltip;var i=function(t){this.tipPosition={x:0,y:0},this.init(t)};i.prototype.init=function(h){function o(t){var i={};i.x=t.pageX,i.y=t.pageY,h.setTooltipPosition(i)}function e(t,i,o){m.clickmode?(a(h.getPlaceholder()).bind("plothover",s),h.hideTooltip(),m.clickmode=!1):(s(t,i,o),m.getDomElement().is(":visible")&&(a(h.getPlaceholder()).unbind("plothover",s),m.clickmode=!0))}function s(t,d,i){var u=function(t,i,o,e){return Math.sqrt((o-t)*(o-t)+(e-i)*(e-i))};if(i)h.showTooltip(i,m.tooltipOptions.snap?i:d);else if(m.plotOptions.series.lines.show&&!0===m.tooltipOptions.lines){var o=m.plotOptions.grid.mouseActiveRadius,c={distance:o+1},x=d;a.each(h.getData(),function(t,i){for(var o=0,e=-1,s=1;s<i.data.length;s++)i.data[s-1][0]<=d.x&&i.data[s][0]>=d.x&&(o=s-1,e=s);if(-1!==e){var a={x:i.data[o][0],y:i.data[o][1]},n={x:i.data[e][0],y:i.data[e][1]},p=function(r,l,d,c,x,h,t){if(!t||(t=function(t,i,o,e,s,a){if(void 0!==d)return{x:d,y:l};if(void 0!==c)return{x:r,y:c};var n,p=-1/((h-c)/(x-d));return{x:n=(x*(r*p-l+c)+d*(r*-p+l-h))/(p*(x-d)+c-h),y:p*n-p*r+l}}()).x>=Math.min(d,x)&&t.x<=Math.max(d,x)&&t.y>=Math.min(c,h)&&t.y<=Math.max(c,h)){var i=c-h,o=x-d,e=d*h-c*x;return Math.abs(i*r+o*l+e)/Math.sqrt(i*i+o*o)}var s=u(r,l,d,c),a=u(r,l,x,h);return a<s?a:s}(i.xaxis.p2c(d.x),i.yaxis.p2c(d.y),i.xaxis.p2c(a.x),i.yaxis.p2c(a.y),i.xaxis.p2c(n.x),i.yaxis.p2c(n.y),!1);if(p<c.distance){var r=u(a.x,a.y,d.x,d.y)<u(d.x,d.y,n.x,n.y)?o:e,l=(i.datapoints.pointsize,[d.x,a.y+(n.y-a.y)*((d.x-a.x)/(n.x-a.x))]);c={distance:p,item:{datapoint:l,dataIndex:r,series:i,seriesIndex:t}},m.tooltipOptions.snap&&(x={pageX:i.xaxis.p2c(l[0]),pageY:i.yaxis.p2c(l[1])})}}else h.hideTooltip()}),c.distance<o+1?h.showTooltip(c.item,x):h.hideTooltip()}else h.hideTooltip()}var m=this,t=a.plot.plugins.length;if(this.plotPlugins=[],t)for(var i=0;i<t;i++)this.plotPlugins.push(a.plot.plugins[i].name);h.hooks.bindEvents.push(function(t,i){m.plotOptions=t.getOptions(),"boolean"==typeof m.plotOptions.tooltip&&(m.plotOptions.tooltipOpts.show=m.plotOptions.tooltip,m.plotOptions.tooltip=m.plotOptions.tooltipOpts,delete m.plotOptions.tooltipOpts),!1!==m.plotOptions.tooltip.show&&void 0!==m.plotOptions.tooltip.show&&(m.tooltipOptions=m.plotOptions.tooltip,m.tooltipOptions.$compat?(m.wfunc="width",m.hfunc="height"):(m.wfunc="innerWidth",m.hfunc="innerHeight"),m.getDomElement(),a(t.getPlaceholder()).bind("plothover",s),m.tooltipOptions.clickTips&&a(t.getPlaceholder()).bind("plotclick",e),m.clickmode=!1,a(i).bind("mousemove",o))}),h.hooks.shutdown.push(function(t,i){a(t.getPlaceholder()).unbind("plothover",s),a(t.getPlaceholder()).unbind("plotclick",e),t.removeTooltip(),a(i).unbind("mousemove",o)}),h.setTooltipPosition=function(t){var i=m.getDomElement(),o=i.outerWidth()+m.tooltipOptions.shifts.x,e=i.outerHeight()+m.tooltipOptions.shifts.y;t.x-a(window).scrollLeft()>a(window)[m.wfunc]()-o&&(t.x-=o,t.x=Math.max(t.x,0)),t.y-a(window).scrollTop()>a(window)[m.hfunc]()-e&&(t.y-=e),isNaN(t.x)?m.tipPosition.x=m.tipPosition.xPrev:(m.tipPosition.x=t.x,m.tipPosition.xPrev=t.x),isNaN(t.y)?m.tipPosition.y=m.tipPosition.yPrev:(m.tipPosition.y=t.y,m.tipPosition.yPrev=t.y)},h.showTooltip=function(t,i,o){var e=m.getDomElement(),s=m.stringFormat(m.tooltipOptions.content,t);""!==s&&(e.html(s),h.setTooltipPosition({x:m.tipPosition.x,y:m.tipPosition.y}),e.css({left:m.tipPosition.x+m.tooltipOptions.shifts.x,top:m.tipPosition.y+m.tooltipOptions.shifts.y}).show(),"function"==typeof m.tooltipOptions.onHover&&m.tooltipOptions.onHover(t,e))},h.hideTooltip=function(){m.getDomElement().hide().html("")},h.removeTooltip=function(){m.getDomElement().remove()}},i.prototype.getDomElement=function(){var t=a("<div>");return this.tooltipOptions&&this.tooltipOptions.cssClass&&(0===(t=a("."+this.tooltipOptions.cssClass)).length&&((t=a("<div />").addClass(this.tooltipOptions.cssClass)).appendTo("body").hide().css({position:"absolute"}),this.tooltipOptions.defaultTheme&&t.css({background:"#fff","z-index":"1040",padding:"0.4em 0.6em","border-radius":"0.5em","font-size":"0.8em",border:"1px solid #111",display:"none","white-space":"nowrap"}))),t},i.prototype.stringFormat=function(t,i){var o,e,s,a,n,p=/%s/,r=/%c/,l=/%lx/,d=/%ly/,c=/%x\.{0,1}(\d{0,})/,x=/%y\.{0,1}(\d{0,})/;if(void 0!==i.series.threshold?(o=i.datapoint[0],e=i.datapoint[1],s=i.datapoint[2]):void 0!==i.series.curvedLines?(o=i.datapoint[0],e=i.datapoint[1]):void 0!==i.series.lines&&i.series.lines.steps?(o=i.series.datapoints.points[2*i.dataIndex],e=i.series.datapoints.points[2*i.dataIndex+1],s=""):(o=i.series.data[i.dataIndex][0],e=i.series.data[i.dataIndex][1],s=i.series.data[i.dataIndex][2]),null===i.series.label&&i.series.originSeries&&(i.series.label=i.series.originSeries.label),"function"==typeof t&&(t=t(i.series.label,o,e,i)),"boolean"==typeof t&&!t)return"";if(s&&(t=t.replace("%ct",s)),void 0!==i.series.percent?a=i.series.percent:void 0!==i.series.percents&&(a=i.series.percents[i.dataIndex]),"number"==typeof a&&(t=this.adjustValPrecision(/%p\.{0,1}(\d{0,})/,t,a)),i.series.hasOwnProperty("pie")&&void 0!==i.series.data[0][1]&&(n=i.series.data[0][1]),"number"==typeof n&&(t=t.replace("%n",n)),t=void 0!==i.series.label?t.replace(p,i.series.label):t.replace(p,""),t=void 0!==i.series.color?t.replace(r,i.series.color):t.replace(r,""),t=this.hasAxisLabel("xaxis",i)?t.replace(l,i.series.xaxis.options.axisLabel):t.replace(l,""),t=this.hasAxisLabel("yaxis",i)?t.replace(d,i.series.yaxis.options.axisLabel):t.replace(d,""),this.isTimeMode("xaxis",i)&&this.isXDateFormat(i)&&(t=t.replace(c,this.timestampToDate(o,this.tooltipOptions.xDateFormat,i.series.xaxis.options))),this.isTimeMode("yaxis",i)&&this.isYDateFormat(i)&&(t=t.replace(x,this.timestampToDate(e,this.tooltipOptions.yDateFormat,i.series.yaxis.options))),"number"==typeof o&&(t=this.adjustValPrecision(c,t,o)),"number"==typeof e&&(t=this.adjustValPrecision(x,t,e)),void 0!==i.series.xaxis.ticks){var h;h=this.hasRotatedXAxisTicks(i)?"rotatedTicks":"ticks";var u=i.dataIndex+i.seriesIndex;for(var m in i.series.xaxis[h])if(i.series.xaxis[h].hasOwnProperty(u)&&!this.isTimeMode("xaxis",i)){(this.isCategoriesMode("xaxis",i)?i.series.xaxis[h][u].label:i.series.xaxis[h][u].v)===o&&(t=t.replace(c,i.series.xaxis[h][u].label.replace(/\$/g,"$$$$")))}}if(void 0!==i.series.yaxis.ticks)for(var y in i.series.yaxis.ticks)if(i.series.yaxis.ticks.hasOwnProperty(y)){(this.isCategoriesMode("yaxis",i)?i.series.yaxis.ticks[y].label:i.series.yaxis.ticks[y].v)===e&&(t=t.replace(x,i.series.yaxis.ticks[y].label.replace(/\$/g,"$$$$")))}return void 0!==i.series.xaxis.tickFormatter&&(t=t.replace("%x",i.series.xaxis.tickFormatter(o,i.series.xaxis).replace(/\$/g,"$$"))),void 0!==i.series.yaxis.tickFormatter&&(t=t.replace("%y",i.series.yaxis.tickFormatter(e,i.series.yaxis).replace(/\$/g,"$$"))),t},i.prototype.isTimeMode=function(t,i){return void 0!==i.series[t].options.mode&&"time"===i.series[t].options.mode},i.prototype.isXDateFormat=function(t){return void 0!==this.tooltipOptions.xDateFormat&&null!==this.tooltipOptions.xDateFormat},i.prototype.isYDateFormat=function(t){return void 0!==this.tooltipOptions.yDateFormat&&null!==this.tooltipOptions.yDateFormat},i.prototype.isCategoriesMode=function(t,i){return void 0!==i.series[t].options.mode&&"categories"===i.series[t].options.mode},i.prototype.timestampToDate=function(t,i,o){var e=a.plot.dateGenerator(t,o);return a.plot.formatDate(e,i,this.tooltipOptions.monthNames,this.tooltipOptions.dayNames)},i.prototype.adjustValPrecision=function(t,i,o){var e;return null!==i.match(t)&&""!==RegExp.$1&&(e=RegExp.$1,o=o.toFixed(e),i=i.replace(t,o)),i},i.prototype.hasAxisLabel=function(t,i){return-1!==a.inArray("axisLabels",this.plotPlugins)&&void 0!==i.series[t].options.axisLabel&&0<i.series[t].options.axisLabel.length},i.prototype.hasRotatedXAxisTicks=function(t){return-1!==a.inArray("tickRotor",this.plotPlugins)&&void 0!==t.series.xaxis.rotatedTicks};a.plot.plugins.push({init:function(t){new i(t)},options:t,name:"tooltip",version:"0.8.5"})}(jQuery);
!function(s,e,o){var i,n=s([]),h=s.resize=s.extend(s.resize,{}),a="setTimeout",r="resize",u=r+"-special-event",d="delay",c="throttleWindow";h[d]=250,h[c]=!0,s.event.special[r]={setup:function(){if(!h[c]&&this[a])return!1;var t=s(this);n=n.add(t),s.data(this,u,{w:t.width(),h:t.height()}),1===n.length&&function t(){i=e[a](function(){n.each(function(){var t=s(this),e=t.width(),i=t.height(),n=s.data(this,u);e===n.w&&i===n.h||t.trigger(r,[n.w=e,n.h=i])}),t()},h[d])}()},teardown:function(){if(!h[c]&&this[a])return!1;var t=s(this);n=n.not(t),t.removeData(u),n.length||clearTimeout(i)},add:function(t){if(!h[c]&&this[a])return!1;var r;function e(t,e,i){var n=s(this),h=s.data(this,u);h.w=e!==o?e:n.width(),h.h=i!==o?i:n.height(),r.apply(this,arguments)}if(s.isFunction(t))return r=t,e;r=t.handler,t.handler=e}}}(jQuery,this),jQuery.plot.plugins.push({init:function(e){function i(){var t=e.getPlaceholder();0!=t.width()&&0!=t.height()&&(e.resize(),e.setupGrid(),e.draw())}e.hooks.bindEvents.push(function(t,e){t.getPlaceholder().resize(i)}),e.hooks.shutdown.push(function(t,e){t.getPlaceholder().unbind("resize",i)})},options:{},name:"resize",version:"1.0"});
!function(r){function S(e,t){return t*Math.floor(e/t)}function u(e,t,n,r){if("function"==typeof e.strftime)return e.strftime(t);var a,i=function(e,t){return t=""+(null==t?"0":t),1==(e=""+e).length?t+e:e},o=[],s=!1,u=e.getHours(),c=u<12;null==n&&(n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]),null==r&&(r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]),a=12<u?u-12:0==u?12:u;for(var m=0;m<t.length;++m){var h=t.charAt(m);if(s){switch(h){case"a":h=""+r[e.getDay()];break;case"b":h=""+n[e.getMonth()];break;case"d":h=i(e.getDate());break;case"e":h=i(e.getDate()," ");break;case"H":h=i(u);break;case"I":h=i(a);break;case"l":h=i(a," ");break;case"m":h=i(e.getMonth()+1);break;case"M":h=i(e.getMinutes());break;case"q":h=""+(Math.floor(e.getMonth()/3)+1);break;case"S":h=i(e.getSeconds());break;case"y":h=i(e.getFullYear()%100);break;case"Y":h=""+e.getFullYear();break;case"p":h=c?"am":"pm";break;case"P":h=c?"AM":"PM";break;case"w":h=""+e.getDay()}o.push(h),s=!1}else"%"==h?s=!0:o.push(h)}return o.join("")}function a(e){function t(e,t,n,r){e[t]=function(){return n[r].apply(n,arguments)}}var n={date:e};null!=e.strftime&&t(n,"strftime",e,"strftime"),t(n,"getTime",e,"getTime"),t(n,"setTime",e,"setTime");for(var r=["Date","Day","FullYear","Hours","Milliseconds","Minutes","Month","Seconds"],a=0;a<r.length;a++)t(n,"get"+r[a],e,"getUTC"+r[a]),t(n,"set"+r[a],e,"setUTC"+r[a]);return n}function y(e,t){if("browser"==t.timezone)return new Date(e);if(t.timezone&&"utc"!=t.timezone){if("undefined"!=typeof timezoneJS&&void 0!==timezoneJS.Date){var n=new timezoneJS.Date;return n.setTimezone(t.timezone),n.setTime(e),n}return a(new Date(e))}return a(new Date(e))}var z={second:1e3,minute:6e4,hour:36e5,day:864e5,month:2592e6,quarter:7776e6,year:525949.2*60*1e3},e=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[.25,"month"],[.5,"month"],[1,"month"],[2,"month"]],p=e.concat([[3,"month"],[6,"month"],[1,"year"]]),T=e.concat([[1,"quarter"],[2,"quarter"],[1,"year"]]);r.plot.plugins.push({init:function(e){e.hooks.processDatapoints.push(function(e,t,n){r.each(e.getAxes(),function(e,t){var d=t.options;"time"==d.mode&&(t.tickGenerator=function(e){var t=[],n=y(e.min,d),r=0,a=d.tickSize&&"quarter"===d.tickSize[1]||d.minTickSize&&"quarter"===d.minTickSize[1]?T:p;null!=d.minTickSize&&(r="number"==typeof d.tickSize?d.tickSize:d.minTickSize[0]*z[d.minTickSize[1]]);for(var i=0;i<a.length-1&&!(e.delta<(a[i][0]*z[a[i][1]]+a[i+1][0]*z[a[i+1][1]])/2&&a[i][0]*z[a[i][1]]>=r);++i);var o=a[i][0],s=a[i][1];if("year"==s){if(null!=d.minTickSize&&"year"==d.minTickSize[1])o=Math.floor(d.minTickSize[0]);else{var u=Math.pow(10,Math.floor(Math.log(e.delta/z.year)/Math.LN10)),c=e.delta/z.year/u;o=c<1.5?1:c<3?2:c<7.5?5:10,o*=u}o<1&&(o=1)}e.tickSize=d.tickSize||[o,s];var m=e.tickSize[0];s=e.tickSize[1];var h=m*z[s];"second"==s?n.setSeconds(S(n.getSeconds(),m)):"minute"==s?n.setMinutes(S(n.getMinutes(),m)):"hour"==s?n.setHours(S(n.getHours(),m)):"month"==s?n.setMonth(S(n.getMonth(),m)):"quarter"==s?n.setMonth(3*S(n.getMonth()/3,m)):"year"==s&&n.setFullYear(S(n.getFullYear(),m)),n.setMilliseconds(0),h>=z.minute?n.setSeconds(0):h>=z.hour?n.setMinutes(0):h>=z.day?n.setHours(0):h>=4*z.day?n.setDate(1):h>=2*z.month?n.setMonth(S(n.getMonth(),3)):h>=2*z.quarter?n.setMonth(S(n.getMonth(),6)):h>=z.year&&n.setMonth(0);var l,f=0,k=Number.NaN;do{if(l=k,k=n.getTime(),t.push(k),"month"==s||"quarter"==s)if(m<1){n.setDate(1);var M=n.getTime();n.setMonth(n.getMonth()+("quarter"==s?3:1));var g=n.getTime();n.setTime(k+f*z.hour+(g-M)*m),f=n.getHours(),n.setHours(0)}else n.setMonth(n.getMonth()+m*("quarter"==s?3:1));else"year"==s?n.setFullYear(n.getFullYear()+m):n.setTime(k+h)}while(k<e.max&&k!=l);return t},t.tickFormatter=function(e,t){var n=y(e,t.options);if(null!=d.timeformat)return u(n,d.timeformat,d.monthNames,d.dayNames);var r=t.options.tickSize&&"quarter"==t.options.tickSize[1]||t.options.minTickSize&&"quarter"==t.options.minTickSize[1],a=t.tickSize[0]*z[t.tickSize[1]],i=t.max-t.min,o=d.twelveHourClock?" %p":"",s=d.twelveHourClock?"%I":"%H";return u(n,a<z.minute?s+":%M:%S"+o:a<z.day?i<2*z.day?s+":%M"+o:"%b %d "+s+":%M"+o:a<z.month?"%b %d":r&&a<z.quarter||!r&&a<z.year?i<z.year?"%b":"%b %Y":r&&a<z.year?i<z.year?"Q%q":"Q%q %Y":"%Y",d.monthNames,d.dayNames)})})})},options:{},name:"time",version:"1.0"}),r.plot.formatDate=u}(jQuery);
!function(r){var n={series:{curvedLines:{active:!1,apply:!1,monotonicFit:!1,tension:.5,nrSplinePoints:20,legacyOverride:void 0}}};jQuery.plot.plugins.push({init:function(r){function e(r,n,e){var i=e.points.length/e.pointsize;if(!function(r){if(void 0!==r.fit||void 0!==r.curvePointFactor||void 0!==r.fitPointDist)throw new Error("CurvedLines detected illegal parameters. The CurvedLines API changed with version 1.0.0 please check the options object.");return!1}(n.curvedLines)&&1==n.curvedLines.apply&&void 0===n.originSeries&&1.005<i)if(n.lines.fill){var t=a(e,n.curvedLines,1),o=a(e,n.curvedLines,2);e.pointsize=3,e.points=[];for(var s=0,u=0,v=0;v<t.length||s<o.length;)t[v]==o[s]?(e.points[u]=t[v],e.points[u+1]=t[v+1],e.points[u+2]=o[s+1],s+=2,v+=2):t[v]<o[s]?(e.points[u]=t[v],e.points[u+1]=t[v+1],e.points[u+2]=0<u?e.points[u-1]:null,v+=2):(e.points[u]=o[s],e.points[u+1]=1<u?e.points[u-2]:null,e.points[u+2]=o[s+1],s+=2),u+=3}else 0<n.lines.lineWidth&&(e.points=a(e,n.curvedLines,1),e.pointsize=2)}function a(r,n,e){if(void 0!==n.legacyOverride&&0!=n.legacyOverride){var i={fit:!1,curvePointFactor:20,fitPointDist:void 0};return function(r,n,e){var i=r.points,t=r.pointsize,o=Number(n.curvePointFactor)*(i.length/t),s=new Array,u=new Array,v=-1,a=-1,p=0;if(n.fit){var h;if(void 0===n.fitPointDist){var f=i[0],l=i[i.length-t];h=(l-f)/5e4}else h=Number(n.fitPointDist);for(var c=0;c<i.length;c+=t){var d,g;a=(v=c)+e,d=i[v]-h,g=i[v]+h;for(var y=2;d==i[v]||g==i[v];)d=i[v]-h*y,g=i[v]+h*y,y++;s[p]=d,u[p]=i[a],s[++p]=i[v],u[p]=i[a],s[++p]=g,u[p]=i[a],p++}}else for(var c=0;c<i.length;c+=t)a=(v=c)+e,s[p]=i[v],u[p]=i[a],p++;var w=s.length,L=new Array,P=new Array;L[0]=0,L[w-1]=0,P[0]=0;for(var c=1;c<w-1;++c){var m=s[c+1]-s[c-1];if(0==m)return[];var A=(s[c]-s[c-1])/m,z=A*L[c-1]+2;L[c]=(A-1)/z,P[c]=(u[c+1]-u[c])/(s[c+1]-s[c])-(u[c]-u[c-1])/(s[c]-s[c-1]),P[c]=(6*P[c]/(s[c+1]-s[c-1])-A*P[c-1])/z}for(var p=w-2;0<=p;--p)L[p]=L[p]*L[p+1]+P[p];var b=(s[w-1]-s[0])/(o-1),D=new Array,F=new Array,O=new Array;for(D[0]=s[0],F[0]=u[0],O.push(D[0]),O.push(F[0]),p=1;p<o;++p){D[p]=D[0]+p*b;for(var N=w-1,j=0;1<N-j;){var k=Math.round((N+j)/2);s[k]>D[p]?N=k:j=k}var S=s[N]-s[j];if(0==S)return[];var C=(s[N]-D[p])/S,Q=(D[p]-s[j])/S;F[p]=C*u[j]+Q*u[N]+((C*C*C-C)*L[j]+(Q*Q*Q-Q)*L[N])*(S*S)/6,O.push(D[p]),O.push(F[p])}return O}(r,jQuery.extend(i,n.legacyOverride),e)}return function(r,n,e){for(var i=r.points,t=r.pointsize,o=function(r,n,e){for(var i=r.points,t=r.pointsize,o=[],s=[],u=0;u<i.length-t;u+=t){var v=u,a=u+e,p=i[v+t]-i[v],h=i[a+t]-i[a];o.push(p),s.push(h/p)}var f=[s[0]];if(n.monotonicFit)for(var u=1;u<o.length;u++){var l=s[u],c=s[u-1];if(l*c<=0)f.push(0);else{var d=o[u],g=o[u-1],y=d+g;f.push(3*y/((y+d)/c+(y+g)/l))}}else for(var u=t;u<i.length-t;u+=t){var v=u,a=u+e;f.push(Number(n.tension)*(i[a+t]-i[a-t])/(i[v+t]-i[v-t]))}f.push(s[s.length-1]);var w=[],L=[];for(u=0;u<o.length;u++){var P=f[u],m=f[u+1],l=s[u],A=1/o[u],y=P+m-l-l;w.push(y*A*A),L.push((l-y-P)*A)}for(var z=[],u=0;u<o.length;u++)z.push(function(i,t,o,s,u){return function(r){var n=r-i,e=n*n;return t*n*e+o*e+s*n+u}}(i[u*t],w[u],L[u],f[u],i[u*t+e]));return z}(r,n,e),s=[],u=0,v=0;v<i.length-t;v+=t){var a=v,p=v+e,h=i[a],f=i[a+t],l=(f-h)/Number(n.nrSplinePoints);s.push(i[a]),s.push(i[p]);for(var c=h+=l;c<f;c+=l)s.push(c),s.push(o[u](c));u++}return s.push(i[i.length-t]),s.push(i[i.length-t+e]),s}(r,n,e)}r.hooks.processOptions.push(function(r,n){n.series.curvedLines.active&&r.hooks.processDatapoints.unshift(e)})},options:n,name:"curvedLines",version:"1.1.1"})}();
!function(n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(t){return n(t,window,document)}):"object"==typeof exports?module.exports=function(t,e){return t||(t=window),e||(e="undefined"!=typeof window?require("jquery"):require("jquery")(t)),n(e,t,t.document)}:n(jQuery,window,document)}(function(U,A,S,V){"use strict";var p,m,e,t,I=function(C){this.$=function(t,e){return this.api(!0).$(t,e)},this._=function(t,e){return this.api(!0).rows(t,e).data()},this.api=function(t){return new m(t?oe(this[p.iApiIndex]):this)},this.fnAddData=function(t,e){var n=this.api(!0),a=U.isArray(t)&&(U.isArray(t[0])||U.isPlainObject(t[0]))?n.rows.add(t):n.row.add(t);return(e===V||e)&&n.draw(),a.flatten().toArray()},this.fnAdjustColumnSizing=function(t){var e=this.api(!0).columns.adjust(),n=e.settings()[0],a=n.oScroll;t===V||t?e.draw(!1):""===a.sX&&""===a.sY||Bt(n)},this.fnClearTable=function(t){var e=this.api(!0).clear();(t===V||t)&&e.draw()},this.fnClose=function(t){this.api(!0).row(t).child.hide()},this.fnDeleteRow=function(t,e,n){var a=this.api(!0),r=a.rows(t),o=r.settings()[0],i=o.aoData[r[0][0]];return r.remove(),e&&e.call(this,o,i),(n===V||n)&&a.draw(),i},this.fnDestroy=function(t){this.api(!0).destroy(t)},this.fnDraw=function(t){this.api(!0).draw(t)},this.fnFilter=function(t,e,n,a,r,o){var i=this.api(!0);null===e||e===V?i.search(t,n,a,o):i.column(e).search(t,n,a,o),i.draw()},this.fnGetData=function(t,e){var n=this.api(!0);if(t!==V){var a=t.nodeName?t.nodeName.toLowerCase():"";return e!==V||"td"==a||"th"==a?n.cell(t,e).data():n.row(t).data()||null}return n.data().toArray()},this.fnGetNodes=function(t){var e=this.api(!0);return t!==V?e.row(t).node():e.rows().nodes().flatten().toArray()},this.fnGetPosition=function(t){var e=this.api(!0),n=t.nodeName.toUpperCase();if("TR"==n)return e.row(t).index();if("TD"==n||"TH"==n){var a=e.cell(t).index();return[a.row,a.columnVisible,a.column]}return null},this.fnIsOpen=function(t){return this.api(!0).row(t).child.isShown()},this.fnOpen=function(t,e,n){return this.api(!0).row(t).child(e,n).show().child()[0]},this.fnPageChange=function(t,e){var n=this.api(!0).page(t);(e===V||e)&&n.draw(!1)},this.fnSetColumnVis=function(t,e,n){var a=this.api(!0).column(t).visible(e);(n===V||n)&&a.columns.adjust().draw()},this.fnSettings=function(){return oe(this[p.iApiIndex])},this.fnSort=function(t){this.api(!0).order(t).draw()},this.fnSortListener=function(t,e,n){this.api(!0).order.listener(t,e,n)},this.fnUpdate=function(t,e,n,a,r){var o=this.api(!0);return n===V||null===n?o.row(e).data(t):o.cell(e,n).data(t),(r===V||r)&&o.columns.adjust(),(a===V||a)&&o.draw(),0},this.fnVersionCheck=p.fnVersionCheck;var T=this,w=C===V,x=this.length;for(var t in w&&(C={}),this.oApi=this.internal=p.internal,I.ext.internal)t&&(this[t]=He(t));return this.each(function(){var o,i=1<x?se({},C,!0):C,l=0,t=this.getAttribute("id"),s=!1,e=I.defaults,u=U(this);if("table"==this.nodeName.toLowerCase()){R(e),P(e.column),F(e,e,!0),F(e.column,e.column,!0),F(e,U.extend(i,u.data()));var n=I.settings;for(l=0,o=n.length;l<o;l++){var a=n[l];if(a.nTable==this||a.nTHead.parentNode==this||a.nTFoot&&a.nTFoot.parentNode==this){var r=i.bRetrieve!==V?i.bRetrieve:e.bRetrieve,c=i.bDestroy!==V?i.bDestroy:e.bDestroy;if(w||r)return a.oInstance;if(c){a.oInstance.fnDestroy();break}return void ie(a,0,"Cannot reinitialise DataTable",3)}if(a.sTableId==this.id){n.splice(l,1);break}}null!==t&&""!==t||(t="DataTables_Table_"+I.ext._unique++,this.id=t);var f=U.extend(!0,{},I.models.oSettings,{sDestroyWidth:u[0].style.width,sInstance:t,sTableId:t});f.nTable=this,f.oApi=T.internal,f.oInit=i,n.push(f),f.oInstance=1===T.length?T:u.dataTable(),R(i),i.oLanguage&&L(i.oLanguage),i.aLengthMenu&&!i.iDisplayLength&&(i.iDisplayLength=U.isArray(i.aLengthMenu[0])?i.aLengthMenu[0][0]:i.aLengthMenu[0]),i=se(U.extend(!0,{},e),i),le(f.oFeatures,i,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]),le(f,i,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]),le(f.oScroll,i,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]),le(f.oLanguage,i,"fnInfoCallback"),ce(f,"aoDrawCallback",i.fnDrawCallback,"user"),ce(f,"aoServerParams",i.fnServerParams,"user"),ce(f,"aoStateSaveParams",i.fnStateSaveParams,"user"),ce(f,"aoStateLoadParams",i.fnStateLoadParams,"user"),ce(f,"aoStateLoaded",i.fnStateLoaded,"user"),ce(f,"aoRowCallback",i.fnRowCallback,"user"),ce(f,"aoRowCreatedCallback",i.fnCreatedRow,"user"),ce(f,"aoHeaderCallback",i.fnHeaderCallback,"user"),ce(f,"aoFooterCallback",i.fnFooterCallback,"user"),ce(f,"aoInitComplete",i.fnInitComplete,"user"),ce(f,"aoPreDrawCallback",i.fnPreDrawCallback,"user"),f.rowIdFn=Y(i.rowId),j(f);var d=f.oClasses;if(U.extend(d,I.ext.classes,i.oClasses),u.addClass(d.sTable),f.iInitDisplayStart===V&&(f.iInitDisplayStart=i.iDisplayStart,f._iDisplayStart=i.iDisplayStart),null!==i.iDeferLoading){f.bDeferLoading=!0;var h=U.isArray(i.iDeferLoading);f._iRecordsDisplay=h?i.iDeferLoading[0]:i.iDeferLoading,f._iRecordsTotal=h?i.iDeferLoading[1]:i.iDeferLoading}var p=f.oLanguage;U.extend(!0,p,i.oLanguage),p.sUrl&&(U.ajax({dataType:"json",url:p.sUrl,success:function(t){L(t),F(e.oLanguage,t),U.extend(!0,p,t),Pt(f)},error:function(){Pt(f)}}),s=!0),null===i.asStripeClasses&&(f.asStripeClasses=[d.sStripeOdd,d.sStripeEven]);var g=f.asStripeClasses,b=u.children("tbody").find("tr").eq(0);-1!==U.inArray(!0,U.map(g,function(t,e){return b.hasClass(t)}))&&(U("tbody tr",this).removeClass(g.join(" ")),f.asDestroyStripes=g.slice());var v,S=[],m=this.getElementsByTagName("thead");if(0!==m.length&&(ct(f.aoHeader,m[0]),S=ft(f)),null===i.aoColumns)for(v=[],l=0,o=S.length;l<o;l++)v.push(null);else v=i.aoColumns;for(l=0,o=v.length;l<o;l++)H(f,S?S[l]:null);if(M(f,i.aoColumnDefs,v,function(t,e){N(f,t,e)}),b.length){var D=function(t,e){return null!==t.getAttribute("data-"+e)?e:null};U(b[0]).children("th, td").each(function(t,e){var n=f.aoColumns[t];if(n.mData===t){var a=D(e,"sort")||D(e,"order"),r=D(e,"filter")||D(e,"search");null===a&&null===r||(n.mData={_:t+".display",sort:null!==a?t+".@data-"+a:V,type:null!==a?t+".@data-"+a:V,filter:null!==r?t+".@data-"+r:V},N(f,t))}})}var y=f.oFeatures,_=function(){if(i.aaSorting===V){var t=f.aaSorting;for(l=0,o=t.length;l<o;l++)t[l][1]=f.aoColumns[l].asSorting[0]}ee(f),y.bSort&&ce(f,"aoDrawCallback",function(){if(f.bSorted){var t=Yt(f),n={};U.each(t,function(t,e){n[e.src]=e.dir}),fe(f,null,"order",[f,t,n]),Kt(f)}}),ce(f,"aoDrawCallback",function(){(f.bSorted||"ssp"===pe(f)||y.bDeferRender)&&ee(f)},"sc");var e=u.children("caption").each(function(){this._captionSide=U(this).css("caption-side")}),n=u.children("thead");0===n.length&&(n=U("<thead/>").appendTo(u)),f.nTHead=n[0];var a=u.children("tbody");0===a.length&&(a=U("<tbody/>").appendTo(u)),f.nTBody=a[0];var r=u.children("tfoot");if(0===r.length&&0<e.length&&(""!==f.oScroll.sX||""!==f.oScroll.sY)&&(r=U("<tfoot/>").appendTo(u)),0===r.length||0===r.children().length?u.addClass(d.sNoFooter):0<r.length&&(f.nTFoot=r[0],ct(f.aoFooter,f.nTFoot)),i.aaData)for(l=0;l<i.aaData.length;l++)W(f,i.aaData[l]);else(f.bDeferLoading||"dom"==pe(f))&&E(f,U(f.nTBody).children("tr"));f.aiDisplay=f.aiDisplayMaster.slice(),!(f.bInitialised=!0)===s&&Pt(f)};i.bStateSave?(y.bStateSave=!0,ce(f,"aoDrawCallback",ae,"state_save"),re(f,i,_)):_()}else ie(null,0,"Non-table node initialisation ("+this.nodeName+")",2)}),T=null,this},n={},a=/[\r\n]/g,r=/<.*?>/g,o=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,i=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^","-"].join("|\\")+")","g"),l=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,s=function(t){return!t||!0===t||"-"===t},h=function(t){var e=parseInt(t,10);return!isNaN(e)&&isFinite(t)?e:null},u=function(t,e){return n[e]||(n[e]=new RegExp(Ct(e),"g")),"string"==typeof t&&"."!==e?t.replace(/\./g,"").replace(n[e],"."):t},c=function(t,e,n){var a="string"==typeof t;return!!s(t)||(e&&a&&(t=u(t,e)),n&&a&&(t=t.replace(l,"")),!isNaN(parseFloat(t))&&isFinite(t))},f=function(t,e,n){return!!s(t)||((s(a=t)||"string"==typeof a)&&!!c(d(t),e,n)||null);var a},X=function(t,e,n){var a=[],r=0,o=t.length;if(n!==V)for(;r<o;r++)t[r]&&t[r][e]&&a.push(t[r][e][n]);else for(;r<o;r++)t[r]&&a.push(t[r][e]);return a},D=function(t,e,n,a){var r=[],o=0,i=e.length;if(a!==V)for(;o<i;o++)t[e[o]][n]&&r.push(t[e[o]][n][a]);else for(;o<i;o++)r.push(t[e[o]][n]);return r},g=function(t,e){var n,a=[];e===V?(e=0,n=t):(n=e,e=t);for(var r=e;r<n;r++)a.push(r);return a},y=function(t){for(var e=[],n=0,a=t.length;n<a;n++)t[n]&&e.push(t[n]);return e},d=function(t){return t.replace(r,"")},b=function(t){if(function(t){if(t.length<2)return!0;for(var e=t.slice().sort(),n=e[0],a=1,r=e.length;a<r;a++){if(e[a]===n)return!1;n=e[a]}return!0}(t))return t.slice();var e,n,a,r=[],o=t.length,i=0;t:for(n=0;n<o;n++){for(e=t[n],a=0;a<i;a++)if(r[a]===e)continue t;r.push(e),i++}return r};function v(n){var a,r,o={};U.each(n,function(t,e){(a=t.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(a[1]+" ")&&(r=t.replace(a[0],a[2].toLowerCase()),o[r]=t,"o"===a[1]&&v(n[t]))}),n._hungarianMap=o}function F(n,a,r){var o;n._hungarianMap||v(n),U.each(a,function(t,e){(o=n._hungarianMap[t])===V||!r&&a[o]!==V||("o"===o.charAt(0)?(a[o]||(a[o]={}),U.extend(!0,a[o],a[t]),F(n[o],a[o],r)):a[o]=a[t])})}function L(t){var e=I.defaults.oLanguage,n=t.sZeroRecords;!t.sEmptyTable&&n&&"No data available in table"===e.sEmptyTable&&le(t,t,"sZeroRecords","sEmptyTable"),!t.sLoadingRecords&&n&&"Loading..."===e.sLoadingRecords&&le(t,t,"sZeroRecords","sLoadingRecords"),t.sInfoThousands&&(t.sThousands=t.sInfoThousands);var a=t.sDecimal;a&&Pe(a)}I.util={throttle:function(a,t){var r,o,i=t!==V?t:200;return function(){var t=this,e=+new Date,n=arguments;r&&e<r+i?(clearTimeout(o),o=setTimeout(function(){r=V,a.apply(t,n)},i)):(r=e,a.apply(t,n))}},escapeRegex:function(t){return t.replace(i,"\\$1")}};var _=function(t,e,n){t[e]!==V&&(t[n]=t[e])};function R(t){_(t,"ordering","bSort"),_(t,"orderMulti","bSortMulti"),_(t,"orderClasses","bSortClasses"),_(t,"orderCellsTop","bSortCellsTop"),_(t,"order","aaSorting"),_(t,"orderFixed","aaSortingFixed"),_(t,"paging","bPaginate"),_(t,"pagingType","sPaginationType"),_(t,"pageLength","iDisplayLength"),_(t,"searching","bFilter"),"boolean"==typeof t.sScrollX&&(t.sScrollX=t.sScrollX?"100%":""),"boolean"==typeof t.scrollX&&(t.scrollX=t.scrollX?"100%":"");var e=t.aoSearchCols;if(e)for(var n=0,a=e.length;n<a;n++)e[n]&&F(I.models.oSearch,e[n])}function P(t){_(t,"orderable","bSortable"),_(t,"orderData","aDataSort"),_(t,"orderSequence","asSorting"),_(t,"orderDataType","sortDataType");var e=t.aDataSort;"number"!=typeof e||U.isArray(e)||(t.aDataSort=[e])}function j(t){if(!I.__browser){var e={};I.__browser=e;var n=U("<div/>").css({position:"fixed",top:0,left:-1*U(A).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(U("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(U("<div/>").css({width:"100%",height:10}))).appendTo("body"),a=n.children(),r=a.children();e.barWidth=a[0].offsetWidth-a[0].clientWidth,e.bScrollOversize=100===r[0].offsetWidth&&100!==a[0].clientWidth,e.bScrollbarLeft=1!==Math.round(r.offset().left),e.bBounding=!!n[0].getBoundingClientRect().width,n.remove()}U.extend(t.oBrowser,I.__browser),t.oScroll.iBarWidth=I.__browser.barWidth}function C(t,e,n,a,r,o){var i,l=a,s=!1;for(n!==V&&(i=n,s=!0);l!==r;)t.hasOwnProperty(l)&&(i=s?e(i,t[l],l,t):t[l],s=!0,l+=o);return i}function H(t,e){var n=I.defaults.column,a=t.aoColumns.length,r=U.extend({},I.models.oColumn,n,{nTh:e||S.createElement("th"),sTitle:n.sTitle?n.sTitle:e?e.innerHTML:"",aDataSort:n.aDataSort?n.aDataSort:[a],mData:n.mData?n.mData:a,idx:a});t.aoColumns.push(r);var o=t.aoPreSearchCols;o[a]=U.extend({},I.models.oSearch,o[a]),N(t,a,U(e).data())}function N(t,e,n){var a=t.aoColumns[e],r=t.oClasses,o=U(a.nTh);if(!a.sWidthOrig){a.sWidthOrig=o.attr("width")||null;var i=(o.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);i&&(a.sWidthOrig=i[1])}n!==V&&null!==n&&(P(n),F(I.defaults.column,n),n.mDataProp===V||n.mData||(n.mData=n.mDataProp),n.sType&&(a._sManualType=n.sType),n.className&&!n.sClass&&(n.sClass=n.className),n.sClass&&o.addClass(n.sClass),U.extend(a,n),le(a,n,"sWidth","sWidthOrig"),n.iDataSort!==V&&(a.aDataSort=[n.iDataSort]),le(a,n,"aDataSort"));var l=a.mData,s=Y(l),u=a.mRender?Y(a.mRender):null,c=function(t){return"string"==typeof t&&-1!==t.indexOf("@")};a._bAttrSrc=U.isPlainObject(l)&&(c(l.sort)||c(l.type)||c(l.filter)),a._setter=null,a.fnGetData=function(t,e,n){var a=s(t,e,V,n);return u&&e?u(a,e,t,n):a},a.fnSetData=function(t,e,n){return Z(l)(t,e,n)},"number"!=typeof l&&(t._rowReadObject=!0),t.oFeatures.bSort||(a.bSortable=!1,o.addClass(r.sSortableNone));var f=-1!==U.inArray("asc",a.asSorting),d=-1!==U.inArray("desc",a.asSorting);a.bSortable&&(f||d)?f&&!d?(a.sSortingClass=r.sSortableAsc,a.sSortingClassJUI=r.sSortJUIAscAllowed):!f&&d?(a.sSortingClass=r.sSortableDesc,a.sSortingClassJUI=r.sSortJUIDescAllowed):(a.sSortingClass=r.sSortable,a.sSortingClassJUI=r.sSortJUI):(a.sSortingClass=r.sSortableNone,a.sSortingClassJUI="")}function J(t){if(!1!==t.oFeatures.bAutoWidth){var e=t.aoColumns;Xt(t);for(var n=0,a=e.length;n<a;n++)e[n].nTh.style.width=e[n].sWidth}var r=t.oScroll;""===r.sY&&""===r.sX||Bt(t),fe(t,null,"column-sizing",[t])}function q(t,e){var n=k(t,"bVisible");return"number"==typeof n[e]?n[e]:null}function T(t,e){var n=k(t,"bVisible"),a=U.inArray(e,n);return-1!==a?a:null}function O(t){var n=0;return U.each(t.aoColumns,function(t,e){e.bVisible&&"none"!==U(e.nTh).css("display")&&n++}),n}function k(t,n){var a=[];return U.map(t.aoColumns,function(t,e){t[n]&&a.push(e)}),a}function w(t){var e,n,a,r,o,i,l,s,u,c=t.aoColumns,f=t.aoData,d=I.ext.type.detect;for(e=0,n=c.length;e<n;e++)if(u=[],!(l=c[e]).sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){for(a=0,r=d.length;a<r;a++){for(o=0,i=f.length;o<i&&(u[o]===V&&(u[o]=x(t,o,e,"type")),(s=d[a](u[o],t))||a===d.length-1)&&"html"!==s;o++);if(s){l.sType=s;break}}l.sType||(l.sType="string")}}function M(t,e,n,a){var r,o,i,l,s,u,c,f=t.aoColumns;if(e)for(r=e.length-1;0<=r;r--){var d=(c=e[r]).targets!==V?c.targets:c.aTargets;for(U.isArray(d)||(d=[d]),i=0,l=d.length;i<l;i++)if("number"==typeof d[i]&&0<=d[i]){for(;f.length<=d[i];)H(t);a(d[i],c)}else if("number"==typeof d[i]&&d[i]<0)a(f.length+d[i],c);else if("string"==typeof d[i])for(s=0,u=f.length;s<u;s++)("_all"==d[i]||U(f[s].nTh).hasClass(d[i]))&&a(s,c)}if(n)for(r=0,o=n.length;r<o;r++)a(r,n[r])}function W(t,e,n,a){var r=t.aoData.length,o=U.extend(!0,{},I.models.oRow,{src:n?"dom":"data",idx:r});o._aData=e,t.aoData.push(o);for(var i=t.aoColumns,l=0,s=i.length;l<s;l++)i[l].sType=null;t.aiDisplayMaster.push(r);var u=t.rowIdFn(e);return u!==V&&(t.aIds[u]=o),!n&&t.oFeatures.bDeferRender||at(t,r,n,a),r}function E(n,t){var a;return t instanceof U||(t=U(t)),t.map(function(t,e){return a=nt(n,e),W(n,a.data,e,a.cells)})}function x(t,e,n,a){var r=t.iDraw,o=t.aoColumns[n],i=t.aoData[e]._aData,l=o.sDefaultContent,s=o.fnGetData(i,a,{settings:t,row:e,col:n});if(s===V)return t.iDrawError!=r&&null===l&&(ie(t,0,"Requested unknown parameter "+("function"==typeof o.mData?"{function}":"'"+o.mData+"'")+" for row "+e+", column "+n,4),t.iDrawError=r),l;if(s!==i&&null!==s||null===l||a===V){if("function"==typeof s)return s.call(i)}else s=l;return null===s&&"display"==a?"":s}function B(t,e,n,a){var r=t.aoColumns[n],o=t.aoData[e]._aData;r.fnSetData(o,a,{settings:t,row:e,col:n})}var G=/\[.*?\]$/,$=/\(\)$/;function z(t){return U.map(t.match(/(\\.|[^\.])+/g)||[""],function(t){return t.replace(/\\\./g,".")})}function Y(r){if(U.isPlainObject(r)){var o={};return U.each(r,function(t,e){e&&(o[t]=Y(e))}),function(t,e,n,a){var r=o[e]||o._;return r!==V?r(t,e,n,a):t}}if(null===r)return function(t){return t};if("function"==typeof r)return function(t,e,n,a){return r(t,e,n,a)};if("string"!=typeof r||-1===r.indexOf(".")&&-1===r.indexOf("[")&&-1===r.indexOf("("))return function(t,e){return t[r]};var h=function(t,e,n){var a,r,o,i;if(""!==n)for(var l=z(n),s=0,u=l.length;s<u;s++){if(a=l[s].match(G),r=l[s].match($),a){if(l[s]=l[s].replace(G,""),""!==l[s]&&(t=t[l[s]]),o=[],l.splice(0,s+1),i=l.join("."),U.isArray(t))for(var c=0,f=t.length;c<f;c++)o.push(h(t[c],e,i));var d=a[0].substring(1,a[0].length-1);t=""===d?o:o.join(d);break}if(r)l[s]=l[s].replace($,""),t=t[l[s]]();else{if(null===t||t[l[s]]===V)return V;t=t[l[s]]}}return t};return function(t,e){return h(t,e,r)}}function Z(a){if(U.isPlainObject(a))return Z(a._);if(null===a)return function(){};if("function"==typeof a)return function(t,e,n){a(t,"set",e,n)};if("string"!=typeof a||-1===a.indexOf(".")&&-1===a.indexOf("[")&&-1===a.indexOf("("))return function(t,e){t[a]=e};var p=function(t,e,n){for(var a,r,o,i,l,s=z(n),u=s[s.length-1],c=0,f=s.length-1;c<f;c++){if(r=s[c].match(G),o=s[c].match($),r){if(s[c]=s[c].replace(G,""),t[s[c]]=[],(a=s.slice()).splice(0,c+1),l=a.join("."),U.isArray(e))for(var d=0,h=e.length;d<h;d++)p(i={},e[d],l),t[s[c]].push(i);else t[s[c]]=e;return}o&&(s[c]=s[c].replace($,""),t=t[s[c]](e)),null!==t[s[c]]&&t[s[c]]!==V||(t[s[c]]={}),t=t[s[c]]}u.match($)?t=t[u.replace($,"")](e):t[u.replace(G,"")]=e};return function(t,e){return p(t,e,a)}}function K(t){return X(t.aoData,"_aData")}function Q(t){t.aoData.length=0,t.aiDisplayMaster.length=0,t.aiDisplay.length=0,t.aIds={}}function tt(t,e,n){for(var a=-1,r=0,o=t.length;r<o;r++)t[r]==e?a=r:t[r]>e&&t[r]--;-1!=a&&n===V&&t.splice(a,1)}function et(n,a,t,e){var r,o,i=n.aoData[a],l=function(t,e){for(;t.childNodes.length;)t.removeChild(t.firstChild);t.innerHTML=x(n,a,e,"display")};if("dom"!==t&&(t&&"auto"!==t||"dom"!==i.src)){var s=i.anCells;if(s)if(e!==V)l(s[e],e);else for(r=0,o=s.length;r<o;r++)l(s[r],r)}else i._aData=nt(n,i,e,e===V?V:i._aData).data;i._aSortData=null,i._aFilterData=null;var u=n.aoColumns;if(e!==V)u[e].sType=null;else{for(r=0,o=u.length;r<o;r++)u[r].sType=null;rt(n,i)}}function nt(t,e,n,r){var a,o,i,l=[],s=e.firstChild,u=0,c=t.aoColumns,f=t._rowReadObject;r=r!==V?r:f?{}:[];var d=function(t,e){if("string"==typeof t){var n=t.indexOf("@");if(-1!==n){var a=t.substring(n+1);Z(t)(r,e.getAttribute(a))}}},h=function(t){n!==V&&n!==u||(o=c[u],i=U.trim(t.innerHTML),o&&o._bAttrSrc?(Z(o.mData._)(r,i),d(o.mData.sort,t),d(o.mData.type,t),d(o.mData.filter,t)):f?(o._setter||(o._setter=Z(o.mData)),o._setter(r,i)):r[u]=i);u++};if(s)for(;s;)"TD"!=(a=s.nodeName.toUpperCase())&&"TH"!=a||(h(s),l.push(s)),s=s.nextSibling;else for(var p=0,g=(l=e.anCells).length;p<g;p++)h(l[p]);var b=e.firstChild?e:e.nTr;if(b){var v=b.getAttribute("id");v&&Z(t.rowId)(r,v)}return{data:r,cells:l}}function at(t,e,n,a){var r,o,i,l,s,u=t.aoData[e],c=u._aData,f=[];if(null===u.nTr){for(r=n||S.createElement("tr"),u.nTr=r,u.anCells=f,r._DT_RowIndex=e,rt(t,u),l=0,s=t.aoColumns.length;l<s;l++)i=t.aoColumns[l],(o=n?a[l]:S.createElement(i.sCellType))._DT_CellIndex={row:e,column:l},f.push(o),n&&!i.mRender&&i.mData===l||U.isPlainObject(i.mData)&&i.mData._===l+".display"||(o.innerHTML=x(t,e,l,"display")),i.sClass&&(o.className+=" "+i.sClass),i.bVisible&&!n?r.appendChild(o):!i.bVisible&&n&&o.parentNode.removeChild(o),i.fnCreatedCell&&i.fnCreatedCell.call(t.oInstance,o,x(t,e,l),c,e,l);fe(t,"aoRowCreatedCallback",null,[r,c,e])}u.nTr.setAttribute("role","row")}function rt(t,e){var n=e.nTr,a=e._aData;if(n){var r=t.rowIdFn(a);if(r&&(n.id=r),a.DT_RowClass){var o=a.DT_RowClass.split(" ");e.__rowc=e.__rowc?b(e.__rowc.concat(o)):o,U(n).removeClass(e.__rowc.join(" ")).addClass(a.DT_RowClass)}a.DT_RowAttr&&U(n).attr(a.DT_RowAttr),a.DT_RowData&&U(n).data(a.DT_RowData)}}function ot(t){var e,n,a,r,o,i=t.nTHead,l=t.nTFoot,s=0===U("th, td",i).length,u=t.oClasses,c=t.aoColumns;for(s&&(r=U("<tr/>").appendTo(i)),e=0,n=c.length;e<n;e++)o=c[e],a=U(o.nTh).addClass(o.sClass),s&&a.appendTo(r),t.oFeatures.bSort&&(a.addClass(o.sSortingClass),!1!==o.bSortable&&(a.attr("tabindex",t.iTabIndex).attr("aria-controls",t.sTableId),te(t,o.nTh,e))),o.sTitle!=a[0].innerHTML&&a.html(o.sTitle),he(t,"header")(t,a,o,u);if(s&&ct(t.aoHeader,i),U(i).find(">tr").attr("role","row"),U(i).find(">tr>th, >tr>td").addClass(u.sHeaderTH),U(l).find(">tr>th, >tr>td").addClass(u.sFooterTH),null!==l){var f=t.aoFooter[0];for(e=0,n=f.length;e<n;e++)(o=c[e]).nTf=f[e].cell,o.sClass&&U(o.nTf).addClass(o.sClass)}}function it(t,e,n){var a,r,o,i,l,s,u,c,f,d=[],h=[],p=t.aoColumns.length;if(e){for(n===V&&(n=!1),a=0,r=e.length;a<r;a++){for(d[a]=e[a].slice(),d[a].nTr=e[a].nTr,o=p-1;0<=o;o--)t.aoColumns[o].bVisible||n||d[a].splice(o,1);h.push([])}for(a=0,r=d.length;a<r;a++){if(u=d[a].nTr)for(;s=u.firstChild;)u.removeChild(s);for(o=0,i=d[a].length;o<i;o++)if(f=c=1,h[a][o]===V){for(u.appendChild(d[a][o].cell),h[a][o]=1;d[a+c]!==V&&d[a][o].cell==d[a+c][o].cell;)h[a+c][o]=1,c++;for(;d[a][o+f]!==V&&d[a][o].cell==d[a][o+f].cell;){for(l=0;l<c;l++)h[a+l][o+f]=1;f++}U(d[a][o].cell).attr("rowspan",c).attr("colspan",f)}}}}function lt(t){var e=fe(t,"aoPreDrawCallback","preDraw",[t]);if(-1===U.inArray(!1,e)){var n=[],a=0,r=t.asStripeClasses,o=r.length,i=(t.aoOpenRows.length,t.oLanguage),l=t.iInitDisplayStart,s="ssp"==pe(t),u=t.aiDisplay;t.bDrawing=!0,l!==V&&-1!==l&&(t._iDisplayStart=s?l:l>=t.fnRecordsDisplay()?0:l,t.iInitDisplayStart=-1);var c=t._iDisplayStart,f=t.fnDisplayEnd();if(t.bDeferLoading)t.bDeferLoading=!1,t.iDraw++,Wt(t,!1);else if(s){if(!t.bDestroying&&!ht(t))return}else t.iDraw++;if(0!==u.length)for(var d=s?0:c,h=s?t.aoData.length:f,p=d;p<h;p++){var g=u[p],b=t.aoData[g];null===b.nTr&&at(t,g);var v=b.nTr;if(0!==o){var S=r[a%o];b._sRowStripe!=S&&(U(v).removeClass(b._sRowStripe).addClass(S),b._sRowStripe=S)}fe(t,"aoRowCallback",null,[v,b._aData,a,p]),n.push(v),a++}else{var m=i.sZeroRecords;1==t.iDraw&&"ajax"==pe(t)?m=i.sLoadingRecords:i.sEmptyTable&&0===t.fnRecordsTotal()&&(m=i.sEmptyTable),n[0]=U("<tr/>",{class:o?r[0]:""}).append(U("<td />",{valign:"top",colSpan:O(t),class:t.oClasses.sRowEmpty}).html(m))[0]}fe(t,"aoHeaderCallback","header",[U(t.nTHead).children("tr")[0],K(t),c,f,u]),fe(t,"aoFooterCallback","footer",[U(t.nTFoot).children("tr")[0],K(t),c,f,u]);var D=U(t.nTBody);D.children().detach(),D.append(U(n)),fe(t,"aoDrawCallback","draw",[t]),t.bSorted=!1,t.bFiltered=!1,t.bDrawing=!1}else Wt(t,!1)}function st(t,e){var n=t.oFeatures,a=n.bSort,r=n.bFilter;a&&Zt(t),r?St(t,t.oPreviousSearch):t.aiDisplay=t.aiDisplayMaster.slice(),!0!==e&&(t._iDisplayStart=0),t._drawHold=e,lt(t),t._drawHold=!1}function ut(t){var e=t.oClasses,n=U(t.nTable),a=U("<div/>").insertBefore(n),r=t.oFeatures,o=U("<div/>",{id:t.sTableId+"_wrapper",class:e.sWrapper+(t.nTFoot?"":" "+e.sNoFooter)});t.nHolding=a[0],t.nTableWrapper=o[0],t.nTableReinsertBefore=t.nTable.nextSibling;for(var i,l,s,u,c,f,d=t.sDom.split(""),h=0;h<d.length;h++){if(i=null,"<"==(l=d[h])){if(s=U("<div/>")[0],"'"==(u=d[h+1])||'"'==u){for(c="",f=2;d[h+f]!=u;)c+=d[h+f],f++;if("H"==c?c=e.sJUIHeader:"F"==c&&(c=e.sJUIFooter),-1!=c.indexOf(".")){var p=c.split(".");s.id=p[0].substr(1,p[0].length-1),s.className=p[1]}else"#"==c.charAt(0)?s.id=c.substr(1,c.length-1):s.className=c;h+=f}o.append(s),o=U(s)}else if(">"==l)o=o.parent();else if("l"==l&&r.bPaginate&&r.bLengthChange)i=Nt(t);else if("f"==l&&r.bFilter)i=vt(t);else if("r"==l&&r.bProcessing)i=Mt(t);else if("t"==l)i=Et(t);else if("i"==l&&r.bInfo)i=Ft(t);else if("p"==l&&r.bPaginate)i=Ot(t);else if(0!==I.ext.feature.length)for(var g=I.ext.feature,b=0,v=g.length;b<v;b++)if(l==g[b].cFeature){i=g[b].fnInit(t);break}if(i){var S=t.aanFeatures;S[l]||(S[l]=[]),S[l].push(i),o.append(i)}}a.replaceWith(o),t.nHolding=null}function ct(t,e){var n,a,r,o,i,l,s,u,c,f,d=U(e).children("tr"),h=function(t,e,n){for(var a=t[e];a[n];)n++;return n};for(t.splice(0,t.length),r=0,l=d.length;r<l;r++)t.push([]);for(r=0,l=d.length;r<l;r++)for(0,a=(n=d[r]).firstChild;a;){if("TD"==a.nodeName.toUpperCase()||"TH"==a.nodeName.toUpperCase())for(u=(u=1*a.getAttribute("colspan"))&&0!==u&&1!==u?u:1,c=(c=1*a.getAttribute("rowspan"))&&0!==c&&1!==c?c:1,s=h(t,r,0),f=1===u,i=0;i<u;i++)for(o=0;o<c;o++)t[r+o][s+i]={cell:a,unique:f},t[r+o].nTr=n;a=a.nextSibling}}function ft(t,e,n){var a=[];n||(n=t.aoHeader,e&&ct(n=[],e));for(var r=0,o=n.length;r<o;r++)for(var i=0,l=n[r].length;i<l;i++)!n[r][i].unique||a[i]&&t.bSortCellsTop||(a[i]=n[r][i].cell);return a}function dt(r,t,e){if(fe(r,"aoServerParams","serverParams",[t]),t&&U.isArray(t)){var o={},i=/(.*?)\[\]$/;U.each(t,function(t,e){var n=e.name.match(i);if(n){var a=n[0];o[a]||(o[a]=[]),o[a].push(e.value)}else o[e.name]=e.value}),t=o}var n,a=r.ajax,l=r.oInstance,s=function(t){fe(r,null,"xhr",[r,t,r.jqXHR]),e(t)};if(U.isPlainObject(a)&&a.data){n=a.data;var u=U.isFunction(n)?n(t,r):n;t=U.isFunction(n)&&u?u:U.extend(!0,t,u),delete a.data}var c={data:t,success:function(t){var e=t.error||t.sError;e&&ie(r,0,e),r.json=t,s(t)},dataType:"json",cache:!1,type:r.sServerMethod,error:function(t,e,n){var a=fe(r,null,"xhr",[r,null,r.jqXHR]);-1===U.inArray(!0,a)&&("parsererror"==e?ie(r,0,"Invalid JSON response",1):4===t.readyState&&ie(r,0,"Ajax error",7)),Wt(r,!1)}};r.oAjaxData=t,fe(r,null,"preXhr",[r,t]),r.fnServerData?r.fnServerData.call(l,r.sAjaxSource,U.map(t,function(t,e){return{name:e,value:t}}),s,r):r.sAjaxSource||"string"==typeof a?r.jqXHR=U.ajax(U.extend(c,{url:a||r.sAjaxSource})):U.isFunction(a)?r.jqXHR=a.call(l,t,s,r):(r.jqXHR=U.ajax(U.extend(c,a)),a.data=n)}function ht(e){return!e.bAjaxDataGet||(e.iDraw++,Wt(e,!0),dt(e,pt(e),function(t){gt(e,t)}),!1)}function pt(t){var e,n,a,r,o=t.aoColumns,i=o.length,l=t.oFeatures,s=t.oPreviousSearch,u=t.aoPreSearchCols,c=[],f=Yt(t),d=t._iDisplayStart,h=!1!==l.bPaginate?t._iDisplayLength:-1,p=function(t,e){c.push({name:t,value:e})};p("sEcho",t.iDraw),p("iColumns",i),p("sColumns",X(o,"sName").join(",")),p("iDisplayStart",d),p("iDisplayLength",h);var g={draw:t.iDraw,columns:[],order:[],start:d,length:h,search:{value:s.sSearch,regex:s.bRegex}};for(e=0;e<i;e++)a=o[e],r=u[e],n="function"==typeof a.mData?"function":a.mData,g.columns.push({data:n,name:a.sName,searchable:a.bSearchable,orderable:a.bSortable,search:{value:r.sSearch,regex:r.bRegex}}),p("mDataProp_"+e,n),l.bFilter&&(p("sSearch_"+e,r.sSearch),p("bRegex_"+e,r.bRegex),p("bSearchable_"+e,a.bSearchable)),l.bSort&&p("bSortable_"+e,a.bSortable);l.bFilter&&(p("sSearch",s.sSearch),p("bRegex",s.bRegex)),l.bSort&&(U.each(f,function(t,e){g.order.push({column:e.col,dir:e.dir}),p("iSortCol_"+t,e.col),p("sSortDir_"+t,e.dir)}),p("iSortingCols",f.length));var b=I.ext.legacy.ajax;return null===b?t.sAjaxSource?c:g:b?c:g}function gt(t,n){var e=function(t,e){return n[t]!==V?n[t]:n[e]},a=bt(t,n),r=e("sEcho","draw"),o=e("iTotalRecords","recordsTotal"),i=e("iTotalDisplayRecords","recordsFiltered");if(r){if(1*r<t.iDraw)return;t.iDraw=1*r}Q(t),t._iRecordsTotal=parseInt(o,10),t._iRecordsDisplay=parseInt(i,10);for(var l=0,s=a.length;l<s;l++)W(t,a[l]);t.aiDisplay=t.aiDisplayMaster.slice(),t.bAjaxDataGet=!1,lt(t),t._bInitComplete||jt(t,n),t.bAjaxDataGet=!0,Wt(t,!1)}function bt(t,e){var n=U.isPlainObject(t.ajax)&&t.ajax.dataSrc!==V?t.ajax.dataSrc:t.sAjaxDataProp;return"data"===n?e.aaData||e[n]:""!==n?Y(n)(e):e}function vt(n){var t=n.oClasses,e=n.sTableId,a=n.oLanguage,r=n.oPreviousSearch,o=n.aanFeatures,i='<input type="search" class="'+t.sFilterInput+'"/>',l=a.sSearch;l=l.match(/_INPUT_/)?l.replace("_INPUT_",i):l+i;var s=U("<div/>",{id:o.f?null:e+"_filter",class:t.sFilter}).append(U("<label/>").append(l)),u=function(){o.f;var t=this.value?this.value:"";t!=r.sSearch&&(St(n,{sSearch:t,bRegex:r.bRegex,bSmart:r.bSmart,bCaseInsensitive:r.bCaseInsensitive}),n._iDisplayStart=0,lt(n))},c=null!==n.searchDelay?n.searchDelay:"ssp"===pe(n)?400:0,f=U("input",s).val(r.sSearch).attr("placeholder",a.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",c?Jt(u,c):u).on("keypress.DT",function(t){if(13==t.keyCode)return!1}).attr("aria-controls",e);return U(n.nTable).on("search.dt.DT",function(t,e){if(n===e)try{f[0]!==S.activeElement&&f.val(r.sSearch)}catch(t){}}),s[0]}function St(t,e,n){var a=t.oPreviousSearch,r=t.aoPreSearchCols,o=function(t){a.sSearch=t.sSearch,a.bRegex=t.bRegex,a.bSmart=t.bSmart,a.bCaseInsensitive=t.bCaseInsensitive},i=function(t){return t.bEscapeRegex!==V?!t.bEscapeRegex:t.bRegex};if(w(t),"ssp"!=pe(t)){yt(t,e.sSearch,n,i(e),e.bSmart,e.bCaseInsensitive),o(e);for(var l=0;l<r.length;l++)Dt(t,r[l].sSearch,l,i(r[l]),r[l].bSmart,r[l].bCaseInsensitive);mt(t)}else o(e);t.bFiltered=!0,fe(t,null,"search",[t])}function mt(t){for(var e,n,a=I.ext.search,r=t.aiDisplay,o=0,i=a.length;o<i;o++){for(var l=[],s=0,u=r.length;s<u;s++)n=r[s],e=t.aoData[n],a[o](t,e._aFilterData,n,e._aData,s)&&l.push(n);r.length=0,U.merge(r,l)}}function Dt(t,e,n,a,r,o){if(""!==e){for(var i,l=[],s=t.aiDisplay,u=_t(e,a,r,o),c=0;c<s.length;c++)i=t.aoData[s[c]]._aFilterData[n],u.test(i)&&l.push(s[c]);t.aiDisplay=l}}function yt(t,e,n,a,r,o){var i,l,s,u=_t(e,a,r,o),c=t.oPreviousSearch.sSearch,f=t.aiDisplayMaster,d=[];if(0!==I.ext.search.length&&(n=!0),l=xt(t),e.length<=0)t.aiDisplay=f.slice();else{for((l||n||c.length>e.length||0!==e.indexOf(c)||t.bSorted)&&(t.aiDisplay=f.slice()),i=t.aiDisplay,s=0;s<i.length;s++)u.test(t.aoData[i[s]]._sFilterRow)&&d.push(i[s]);t.aiDisplay=d}}function _t(t,e,n,a){(t=e?t:Ct(t),n)&&(t="^(?=.*?"+U.map(t.match(/"[^"]+"|[^ ]+/g)||[""],function(t){if('"'===t.charAt(0)){var e=t.match(/^"(.*)"$/);t=e?e[1]:t}return t.replace('"',"")}).join(")(?=.*?")+").*$");return new RegExp(t,a?"i":"")}var Ct=I.util.escapeRegex,Tt=U("<div>")[0],wt=Tt.textContent!==V;function xt(t){var e,n,a,r,o,i,l,s,u=t.aoColumns,c=I.ext.type.search,f=!1;for(n=0,r=t.aoData.length;n<r;n++)if(!(s=t.aoData[n])._aFilterData){for(i=[],a=0,o=u.length;a<o;a++)(e=u[a]).bSearchable?(l=x(t,n,a,"filter"),c[e.sType]&&(l=c[e.sType](l)),null===l&&(l=""),"string"!=typeof l&&l.toString&&(l=l.toString())):l="",l.indexOf&&-1!==l.indexOf("&")&&(Tt.innerHTML=l,l=wt?Tt.textContent:Tt.innerText),l.replace&&(l=l.replace(/[\r\n]/g,"")),i.push(l);s._aFilterData=i,s._sFilterRow=i.join("  "),f=!0}return f}function It(t){return{search:t.sSearch,smart:t.bSmart,regex:t.bRegex,caseInsensitive:t.bCaseInsensitive}}function At(t){return{sSearch:t.search,bSmart:t.smart,bRegex:t.regex,bCaseInsensitive:t.caseInsensitive}}function Ft(t){var e=t.sTableId,n=t.aanFeatures.i,a=U("<div/>",{class:t.oClasses.sInfo,id:n?null:e+"_info"});return n||(t.aoDrawCallback.push({fn:Lt,sName:"information"}),a.attr("role","status").attr("aria-live","polite"),U(t.nTable).attr("aria-describedby",e+"_info")),a[0]}function Lt(t){var e=t.aanFeatures.i;if(0!==e.length){var n=t.oLanguage,a=t._iDisplayStart+1,r=t.fnDisplayEnd(),o=t.fnRecordsTotal(),i=t.fnRecordsDisplay(),l=i?n.sInfo:n.sInfoEmpty;i!==o&&(l+=" "+n.sInfoFiltered),l=Rt(t,l+=n.sInfoPostFix);var s=n.fnInfoCallback;null!==s&&(l=s.call(t.oInstance,t,a,r,o,i,l)),U(e).html(l)}}function Rt(t,e){var n=t.fnFormatNumber,a=t._iDisplayStart+1,r=t._iDisplayLength,o=t.fnRecordsDisplay(),i=-1===r;return e.replace(/_START_/g,n.call(t,a)).replace(/_END_/g,n.call(t,t.fnDisplayEnd())).replace(/_MAX_/g,n.call(t,t.fnRecordsTotal())).replace(/_TOTAL_/g,n.call(t,o)).replace(/_PAGE_/g,n.call(t,i?1:Math.ceil(a/r))).replace(/_PAGES_/g,n.call(t,i?1:Math.ceil(o/r)))}function Pt(n){var a,t,e,r=n.iInitDisplayStart,o=n.aoColumns,i=n.oFeatures,l=n.bDeferLoading;if(n.bInitialised){for(ut(n),ot(n),it(n,n.aoHeader),it(n,n.aoFooter),Wt(n,!0),i.bAutoWidth&&Xt(n),a=0,t=o.length;a<t;a++)(e=o[a]).sWidth&&(e.nTh.style.width=zt(e.sWidth));fe(n,null,"preInit",[n]),st(n);var s=pe(n);("ssp"!=s||l)&&("ajax"==s?dt(n,[],function(t){var e=bt(n,t);for(a=0;a<e.length;a++)W(n,e[a]);n.iInitDisplayStart=r,st(n),Wt(n,!1),jt(n,t)}):(Wt(n,!1),jt(n)))}else setTimeout(function(){Pt(n)},200)}function jt(t,e){t._bInitComplete=!0,(e||t.oInit.aaData)&&J(t),fe(t,null,"plugin-init",[t,e]),fe(t,"aoInitComplete","init",[t,e])}function Ht(t,e){var n=parseInt(e,10);t._iDisplayLength=n,de(t),fe(t,null,"length",[t,n])}function Nt(a){for(var t=a.oClasses,e=a.sTableId,n=a.aLengthMenu,r=U.isArray(n[0]),o=r?n[0]:n,i=r?n[1]:n,l=U("<select/>",{name:e+"_length","aria-controls":e,class:t.sLengthSelect}),s=0,u=o.length;s<u;s++)l[0][s]=new Option("number"==typeof i[s]?a.fnFormatNumber(i[s]):i[s],o[s]);var c=U("<div><label/></div>").addClass(t.sLength);return a.aanFeatures.l||(c[0].id=e+"_length"),c.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",l[0].outerHTML)),U("select",c).val(a._iDisplayLength).on("change.DT",function(t){Ht(a,U(this).val()),lt(a)}),U(a.nTable).on("length.dt.DT",function(t,e,n){a===e&&U("select",c).val(n)}),c[0]}function Ot(t){var e=t.sPaginationType,c=I.ext.pager[e],f="function"==typeof c,d=function(t){lt(t)},n=U("<div/>").addClass(t.oClasses.sPaging+e)[0],h=t.aanFeatures;return f||c.fnInit(t,n,d),h.p||(n.id=t.sTableId+"_paginate",t.aoDrawCallback.push({fn:function(t){if(f){var e,n,a=t._iDisplayStart,r=t._iDisplayLength,o=t.fnRecordsDisplay(),i=-1===r,l=i?0:Math.ceil(a/r),s=i?1:Math.ceil(o/r),u=c(l,s);for(e=0,n=h.p.length;e<n;e++)he(t,"pageButton")(t,h.p[e],e,u,l,s)}else c.fnUpdate(t,d)},sName:"pagination"})),n}function kt(t,e,n){var a=t._iDisplayStart,r=t._iDisplayLength,o=t.fnRecordsDisplay();0===o||-1===r?a=0:"number"==typeof e?o<(a=e*r)&&(a=0):"first"==e?a=0:"previous"==e?(a=0<=r?a-r:0)<0&&(a=0):"next"==e?a+r<o&&(a+=r):"last"==e?a=Math.floor((o-1)/r)*r:ie(t,0,"Unknown paging action: "+e,5);var i=t._iDisplayStart!==a;return t._iDisplayStart=a,i&&(fe(t,null,"page",[t]),n&&lt(t)),i}function Mt(t){return U("<div/>",{id:t.aanFeatures.r?null:t.sTableId+"_processing",class:t.oClasses.sProcessing}).html(t.oLanguage.sProcessing).insertBefore(t.nTable)[0]}function Wt(t,e){t.oFeatures.bProcessing&&U(t.aanFeatures.r).css("display",e?"block":"none"),fe(t,null,"processing",[t,e])}function Et(t){var e=U(t.nTable);e.attr("role","grid");var n=t.oScroll;if(""===n.sX&&""===n.sY)return t.nTable;var a=n.sX,r=n.sY,o=t.oClasses,i=e.children("caption"),l=i.length?i[0]._captionSide:null,s=U(e[0].cloneNode(!1)),u=U(e[0].cloneNode(!1)),c=e.children("tfoot"),f="<div/>",d=function(t){return t?zt(t):null};c.length||(c=null);var h=U(f,{class:o.sScrollWrapper}).append(U(f,{class:o.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:a?d(a):"100%"}).append(U(f,{class:o.sScrollHeadInner}).css({"box-sizing":"content-box",width:n.sXInner||"100%"}).append(s.removeAttr("id").css("margin-left",0).append("top"===l?i:null).append(e.children("thead"))))).append(U(f,{class:o.sScrollBody}).css({position:"relative",overflow:"auto",width:d(a)}).append(e));c&&h.append(U(f,{class:o.sScrollFoot}).css({overflow:"hidden",border:0,width:a?d(a):"100%"}).append(U(f,{class:o.sScrollFootInner}).append(u.removeAttr("id").css("margin-left",0).append("bottom"===l?i:null).append(e.children("tfoot")))));var p=h.children(),g=p[0],b=p[1],v=c?p[2]:null;return a&&U(b).on("scroll.DT",function(t){var e=this.scrollLeft;g.scrollLeft=e,c&&(v.scrollLeft=e)}),U(b).css(r&&n.bCollapse?"max-height":"height",r),t.nScrollHead=g,t.nScrollBody=b,t.nScrollFoot=v,t.aoDrawCallback.push({fn:Bt,sName:"scrolling"}),h[0]}function Bt(n){var t,e,a,r,o,i,l,s,u,c=n.oScroll,f=c.sX,d=c.sXInner,h=c.sY,p=c.iBarWidth,g=U(n.nScrollHead),b=g[0].style,v=g.children("div"),S=v[0].style,m=v.children("table"),D=n.nScrollBody,y=U(D),_=D.style,C=U(n.nScrollFoot).children("div"),T=C.children("table"),w=U(n.nTHead),x=U(n.nTable),I=x[0],A=I.style,F=n.nTFoot?U(n.nTFoot):null,L=n.oBrowser,R=L.bScrollOversize,P=X(n.aoColumns,"nTh"),j=[],H=[],N=[],O=[],k=function(t){var e=t.style;e.paddingTop="0",e.paddingBottom="0",e.borderTopWidth="0",e.borderBottomWidth="0",e.height=0},M=D.scrollHeight>D.clientHeight;if(n.scrollBarVis!==M&&n.scrollBarVis!==V)return n.scrollBarVis=M,void J(n);n.scrollBarVis=M,x.children("thead, tfoot").remove(),F&&(i=F.clone().prependTo(x),e=F.find("tr"),r=i.find("tr")),o=w.clone().prependTo(x),t=w.find("tr"),a=o.find("tr"),o.find("th, td").removeAttr("tabindex"),f||(_.width="100%",g[0].style.width="100%"),U.each(ft(n,o),function(t,e){l=q(n,t),e.style.width=n.aoColumns[l].sWidth}),F&&Ut(function(t){t.style.width=""},r),u=x.outerWidth(),""===f?(A.width="100%",R&&(x.find("tbody").height()>D.offsetHeight||"scroll"==y.css("overflow-y"))&&(A.width=zt(x.outerWidth()-p)),u=x.outerWidth()):""!==d&&(A.width=zt(d),u=x.outerWidth()),Ut(k,a),Ut(function(t){N.push(t.innerHTML),j.push(zt(U(t).css("width")))},a),Ut(function(t,e){-1!==U.inArray(t,P)&&(t.style.width=j[e])},t),U(a).height(0),F&&(Ut(k,r),Ut(function(t){O.push(t.innerHTML),H.push(zt(U(t).css("width")))},r),Ut(function(t,e){t.style.width=H[e]},e),U(r).height(0)),Ut(function(t,e){t.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+N[e]+"</div>",t.style.width=j[e]},a),F&&Ut(function(t,e){t.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+O[e]+"</div>",t.style.width=H[e]},r),x.outerWidth()<u?(s=D.scrollHeight>D.offsetHeight||"scroll"==y.css("overflow-y")?u+p:u,R&&(D.scrollHeight>D.offsetHeight||"scroll"==y.css("overflow-y"))&&(A.width=zt(s-p)),""!==f&&""===d||ie(n,1,"Possible column misalignment",6)):s="100%",_.width=zt(s),b.width=zt(s),F&&(n.nScrollFoot.style.width=zt(s)),h||R&&(_.height=zt(I.offsetHeight+p));var W=x.outerWidth();m[0].style.width=zt(W),S.width=zt(W);var E=x.height()>D.clientHeight||"scroll"==y.css("overflow-y"),B="padding"+(L.bScrollbarLeft?"Left":"Right");S[B]=E?p+"px":"0px",F&&(T[0].style.width=zt(W),C[0].style.width=zt(W),C[0].style[B]=E?p+"px":"0px"),x.children("colgroup").insertBefore(x.children("thead")),y.scroll(),!n.bSorted&&!n.bFiltered||n._drawHold||(D.scrollTop=0)}function Ut(t,e,n){for(var a,r,o=0,i=0,l=e.length;i<l;){for(a=e[i].firstChild,r=n?n[i].firstChild:null;a;)1===a.nodeType&&(n?t(a,r,o):t(a,o),o++),a=a.nextSibling,r=n?r.nextSibling:null;i++}}var Vt=/<.*?>/g;function Xt(t){var e,n,a,r=t.nTable,o=t.aoColumns,i=t.oScroll,l=i.sY,s=i.sX,u=i.sXInner,c=o.length,f=k(t,"bVisible"),d=U("th",t.nTHead),h=r.getAttribute("width"),p=r.parentNode,g=!1,b=t.oBrowser,v=b.bScrollOversize,S=r.style.width;for(S&&-1!==S.indexOf("%")&&(h=S),e=0;e<f.length;e++)null!==(n=o[f[e]]).sWidth&&(n.sWidth=qt(n.sWidthOrig,p),g=!0);if(v||!g&&!s&&!l&&c==O(t)&&c==d.length)for(e=0;e<c;e++){var m=q(t,e);null!==m&&(o[m].sWidth=zt(d.eq(e).width()))}else{var D=U(r).clone().css("visibility","hidden").removeAttr("id");D.find("tbody tr").remove();var y=U("<tr/>").appendTo(D.find("tbody"));for(D.find("thead, tfoot").remove(),D.append(U(t.nTHead).clone()).append(U(t.nTFoot).clone()),D.find("tfoot th, tfoot td").css("width",""),d=ft(t,D.find("thead")[0]),e=0;e<f.length;e++)n=o[f[e]],d[e].style.width=null!==n.sWidthOrig&&""!==n.sWidthOrig?zt(n.sWidthOrig):"",n.sWidthOrig&&s&&U(d[e]).append(U("<div/>").css({width:n.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(t.aoData.length)for(e=0;e<f.length;e++)n=o[a=f[e]],U(Gt(t,a)).clone(!1).append(n.sContentPadding).appendTo(y);U("[name]",D).removeAttr("name");var _=U("<div/>").css(s||l?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(D).appendTo(p);s&&u?D.width(u):s?(D.css("width","auto"),D.removeAttr("width"),D.width()<p.clientWidth&&h&&D.width(p.clientWidth)):l?D.width(p.clientWidth):h&&D.width(h);var C=0;for(e=0;e<f.length;e++){var T=U(d[e]),w=T.outerWidth()-T.width(),x=b.bBounding?Math.ceil(d[e].getBoundingClientRect().width):T.outerWidth();C+=x,o[f[e]].sWidth=zt(x-w)}r.style.width=zt(C),_.remove()}if(h&&(r.style.width=zt(h)),(h||s)&&!t._reszEvt){var I=function(){U(A).on("resize.DT-"+t.sInstance,Jt(function(){J(t)}))};v?setTimeout(I,1e3):I(),t._reszEvt=!0}}var Jt=I.util.throttle;function qt(t,e){if(!t)return 0;var n=U("<div/>").css("width",zt(t)).appendTo(e||S.body),a=n[0].offsetWidth;return n.remove(),a}function Gt(t,e){var n=$t(t,e);if(n<0)return null;var a=t.aoData[n];return a.nTr?a.anCells[e]:U("<td/>").html(x(t,n,e,"display"))[0]}function $t(t,e){for(var n,a=-1,r=-1,o=0,i=t.aoData.length;o<i;o++)(n=(n=(n=x(t,o,e,"display")+"").replace(Vt,"")).replace(/&nbsp;/g," ")).length>a&&(a=n.length,r=o);return r}function zt(t){return null===t?"0px":"number"==typeof t?t<0?"0px":t+"px":t.match(/\d$/)?t+"px":t}function Yt(t){var e,n,a,r,o,i,l,s=[],u=t.aoColumns,c=t.aaSortingFixed,f=U.isPlainObject(c),d=[],h=function(t){t.length&&!U.isArray(t[0])?d.push(t):U.merge(d,t)};for(U.isArray(c)&&h(c),f&&c.pre&&h(c.pre),h(t.aaSorting),f&&c.post&&h(c.post),e=0;e<d.length;e++)for(n=0,a=(r=u[l=d[e][0]].aDataSort).length;n<a;n++)i=u[o=r[n]].sType||"string",d[e]._idx===V&&(d[e]._idx=U.inArray(d[e][1],u[o].asSorting)),s.push({src:l,col:o,dir:d[e][1],index:d[e]._idx,type:i,formatter:I.ext.type.order[i+"-pre"]});return s}function Zt(t){var e,n,a,r,c,f=[],d=I.ext.type.order,h=t.aoData,o=(t.aoColumns,0),i=t.aiDisplayMaster;for(w(t),e=0,n=(c=Yt(t)).length;e<n;e++)(r=c[e]).formatter&&o++,ne(t,r.col);if("ssp"!=pe(t)&&0!==c.length){for(e=0,a=i.length;e<a;e++)f[i[e]]=e;o===c.length?i.sort(function(t,e){var n,a,r,o,i,l=c.length,s=h[t]._aSortData,u=h[e]._aSortData;for(r=0;r<l;r++)if(0!==(o=(n=s[(i=c[r]).col])<(a=u[i.col])?-1:a<n?1:0))return"asc"===i.dir?o:-o;return(n=f[t])<(a=f[e])?-1:a<n?1:0}):i.sort(function(t,e){var n,a,r,o,i,l=c.length,s=h[t]._aSortData,u=h[e]._aSortData;for(r=0;r<l;r++)if(n=s[(i=c[r]).col],a=u[i.col],0!==(o=(d[i.type+"-"+i.dir]||d["string-"+i.dir])(n,a)))return o;return(n=f[t])<(a=f[e])?-1:a<n?1:0})}t.bSorted=!0}function Kt(t){for(var e,n,a=t.aoColumns,r=Yt(t),o=t.oLanguage.oAria,i=0,l=a.length;i<l;i++){var s=a[i],u=s.asSorting,c=s.sTitle.replace(/<.*?>/g,""),f=s.nTh;f.removeAttribute("aria-sort"),s.bSortable?(0<r.length&&r[0].col==i?(f.setAttribute("aria-sort","asc"==r[0].dir?"ascending":"descending"),n=u[r[0].index+1]||u[0]):n=u[0],e=c+("asc"===n?o.sSortAscending:o.sSortDescending)):e=c,f.setAttribute("aria-label",e)}}function Qt(t,e,n,a){var r,o=t.aoColumns[e],i=t.aaSorting,l=o.asSorting,s=function(t,e){var n=t._idx;return n===V&&(n=U.inArray(t[1],l)),n+1<l.length?n+1:e?null:0};if("number"==typeof i[0]&&(i=t.aaSorting=[i]),n&&t.oFeatures.bSortMulti){var u=U.inArray(e,X(i,"0"));-1!==u?(null===(r=s(i[u],!0))&&1===i.length&&(r=0),null===r?i.splice(u,1):(i[u][1]=l[r],i[u]._idx=r)):(i.push([e,l[0],0]),i[i.length-1]._idx=0)}else i.length&&i[0][0]==e?(r=s(i[0]),i.length=1,i[0][1]=l[r],i[0]._idx=r):(i.length=0,i.push([e,l[0]]),i[0]._idx=0);st(t),"function"==typeof a&&a(t)}function te(e,t,n,a){var r=e.aoColumns[n];ue(t,{},function(t){!1!==r.bSortable&&(e.oFeatures.bProcessing?(Wt(e,!0),setTimeout(function(){Qt(e,n,t.shiftKey,a),"ssp"!==pe(e)&&Wt(e,!1)},0)):Qt(e,n,t.shiftKey,a))})}function ee(t){var e,n,a,r=t.aLastSort,o=t.oClasses.sSortColumn,i=Yt(t),l=t.oFeatures;if(l.bSort&&l.bSortClasses){for(e=0,n=r.length;e<n;e++)a=r[e].src,U(X(t.aoData,"anCells",a)).removeClass(o+(e<2?e+1:3));for(e=0,n=i.length;e<n;e++)a=i[e].src,U(X(t.aoData,"anCells",a)).addClass(o+(e<2?e+1:3))}t.aLastSort=i}function ne(t,e){var n,a,r,o=t.aoColumns[e],i=I.ext.order[o.sSortDataType];i&&(n=i.call(t.oInstance,t,e,T(t,e)));for(var l=I.ext.type.order[o.sType+"-pre"],s=0,u=t.aoData.length;s<u;s++)(a=t.aoData[s])._aSortData||(a._aSortData=[]),a._aSortData[e]&&!i||(r=i?n[s]:x(t,s,e,"sort"),a._aSortData[e]=l?l(r):r)}function ae(n){if(n.oFeatures.bStateSave&&!n.bDestroying){var t={time:+new Date,start:n._iDisplayStart,length:n._iDisplayLength,order:U.extend(!0,[],n.aaSorting),search:It(n.oPreviousSearch),columns:U.map(n.aoColumns,function(t,e){return{visible:t.bVisible,search:It(n.aoPreSearchCols[e])}})};fe(n,"aoStateSaveParams","stateSaveParams",[n,t]),n.oSavedState=t,n.fnStateSaveCallback.call(n.oInstance,n,t)}}function re(r,t,o){var i,l,s=r.aoColumns,e=function(t){if(t&&t.time){var e=fe(r,"aoStateLoadParams","stateLoadParams",[r,t]);if(-1===U.inArray(!1,e)){var n=r.iStateDuration;if(0<n&&t.time<+new Date-1e3*n)o();else if(t.columns&&s.length!==t.columns.length)o();else{if(r.oLoadedState=U.extend(!0,{},t),t.start!==V&&(r._iDisplayStart=t.start,r.iInitDisplayStart=t.start),t.length!==V&&(r._iDisplayLength=t.length),t.order!==V&&(r.aaSorting=[],U.each(t.order,function(t,e){r.aaSorting.push(e[0]>=s.length?[0,e[1]]:e)})),t.search!==V&&U.extend(r.oPreviousSearch,At(t.search)),t.columns)for(i=0,l=t.columns.length;i<l;i++){var a=t.columns[i];a.visible!==V&&(s[i].bVisible=a.visible),a.search!==V&&U.extend(r.aoPreSearchCols[i],At(a.search))}fe(r,"aoStateLoaded","stateLoaded",[r,t]),o()}}else o()}else o()};if(r.oFeatures.bStateSave){var n=r.fnStateLoadCallback.call(r.oInstance,r,e);n!==V&&e(n)}else o()}function oe(t){var e=I.settings,n=U.inArray(t,X(e,"nTable"));return-1!==n?e[n]:null}function ie(t,e,n,a){if(n="DataTables warning: "+(t?"table id="+t.sTableId+" - ":"")+n,a&&(n+=". For more information about this error, please see http://datatables.net/tn/"+a),e)A.console&&console.log&&console.log(n);else{var r=I.ext,o=r.sErrMode||r.errMode;if(t&&fe(t,null,"error",[t,a,n]),"alert"==o)alert(n);else{if("throw"==o)throw new Error(n);"function"==typeof o&&o(t,a,n)}}}function le(n,a,t,e){U.isArray(t)?U.each(t,function(t,e){U.isArray(e)?le(n,a,e[0],e[1]):le(n,a,e)}):(e===V&&(e=t),a[t]!==V&&(n[e]=a[t]))}function se(t,e,n){var a;for(var r in e)e.hasOwnProperty(r)&&(a=e[r],U.isPlainObject(a)?(U.isPlainObject(t[r])||(t[r]={}),U.extend(!0,t[r],a)):n&&"data"!==r&&"aaData"!==r&&U.isArray(a)?t[r]=a.slice():t[r]=a);return t}function ue(e,t,n){U(e).on("click.DT",t,function(t){e.blur(),n(t)}).on("keypress.DT",t,function(t){13===t.which&&(t.preventDefault(),n(t))}).on("selectstart.DT",function(){return!1})}function ce(t,e,n,a){n&&t[e].push({fn:n,sName:a})}function fe(n,t,e,a){var r=[];if(t&&(r=U.map(n[t].slice().reverse(),function(t,e){return t.fn.apply(n.oInstance,a)})),null!==e){var o=U.Event(e+".dt");U(n.nTable).trigger(o,a),r.push(o.result)}return r}function de(t){var e=t._iDisplayStart,n=t.fnDisplayEnd(),a=t._iDisplayLength;n<=e&&(e=n-a),e-=e%a,(-1===a||e<0)&&(e=0),t._iDisplayStart=e}function he(t,e){var n=t.renderer,a=I.ext.renderer[e];return U.isPlainObject(n)&&n[e]?a[n[e]]||a._:"string"==typeof n&&a[n]||a._}function pe(t){return t.oFeatures.bServerSide?"ssp":t.ajax||t.sAjaxSource?"ajax":"dom"}var ge=[],be=Array.prototype;m=function(t,e){if(!(this instanceof m))return new m(t,e);var l=[],n=function(t){var e,n,a,r,o,i=(e=t,r=I.settings,o=U.map(r,function(t,e){return t.nTable}),e?e.nTable&&e.oApi?[e]:e.nodeName&&"table"===e.nodeName.toLowerCase()?-1!==(n=U.inArray(e,o))?[r[n]]:null:e&&"function"==typeof e.settings?e.settings().toArray():("string"==typeof e?a=U(e):e instanceof U&&(a=e),a?a.map(function(t){return-1!==(n=U.inArray(this,o))?r[n]:null}).toArray():void 0):[]);i&&(l=l.concat(i))};if(U.isArray(t))for(var a=0,r=t.length;a<r;a++)n(t[a]);else n(t);this.context=b(l),e&&U.merge(this,e),this.selector={rows:null,cols:null,opts:null},m.extend(this,this,ge)},I.Api=m,U.extend(m.prototype,{any:function(){return 0!==this.count()},concat:be.concat,context:[],count:function(){return this.flatten().length},each:function(t){for(var e=0,n=this.length;e<n;e++)t.call(this,this[e],e,this);return this},eq:function(t){var e=this.context;return e.length>t?new m(e[t],this[t]):null},filter:function(t){var e=[];if(be.filter)e=be.filter.call(this,t,this);else for(var n=0,a=this.length;n<a;n++)t.call(this,this[n],n,this)&&e.push(this[n]);return new m(this.context,e)},flatten:function(){var t=[];return new m(this.context,t.concat.apply(t,this.toArray()))},join:be.join,indexOf:be.indexOf||function(t,e){for(var n=e||0,a=this.length;n<a;n++)if(this[n]===t)return n;return-1},iterator:function(t,e,n,a){var r,o,i,l,s,u,c,f,d=[],h=this.context,p=this.selector;for("string"==typeof t&&(a=n,n=e,e=t,t=!1),o=0,i=h.length;o<i;o++){var g=new m(h[o]);if("table"===e)(r=n.call(g,h[o],o))!==V&&d.push(r);else if("columns"===e||"rows"===e)(r=n.call(g,h[o],this[o],o))!==V&&d.push(r);else if("column"===e||"column-rows"===e||"row"===e||"cell"===e)for(c=this[o],"column-rows"===e&&(u=ye(h[o],p.opts)),l=0,s=c.length;l<s;l++)f=c[l],(r="cell"===e?n.call(g,h[o],f.row,f.column,o,l):n.call(g,h[o],f,o,l,u))!==V&&d.push(r)}if(d.length||a){var b=new m(h,t?d.concat.apply([],d):d),v=b.selector;return v.rows=p.rows,v.cols=p.cols,v.opts=p.opts,b}return this},lastIndexOf:be.lastIndexOf||function(t,e){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(t){var e=[];if(be.map)e=be.map.call(this,t,this);else for(var n=0,a=this.length;n<a;n++)e.push(t.call(this,this[n],n));return new m(this.context,e)},pluck:function(e){return this.map(function(t){return t[e]})},pop:be.pop,push:be.push,reduce:be.reduce||function(t,e){return C(this,t,e,0,this.length,1)},reduceRight:be.reduceRight||function(t,e){return C(this,t,e,this.length-1,-1,-1)},reverse:be.reverse,selector:null,shift:be.shift,slice:function(){return new m(this.context,this)},sort:be.sort,splice:be.splice,toArray:function(){return be.slice.call(this)},to$:function(){return U(this)},toJQuery:function(){return U(this)},unique:function(){return new m(this.context,b(this))},unshift:be.unshift}),m.extend=function(t,e,n){if(n.length&&e&&(e instanceof m||e.__dt_wrapper)){var a,r,o,i=function(e,n,a){return function(){var t=n.apply(e,arguments);return m.extend(t,t,a.methodExt),t}};for(a=0,r=n.length;a<r;a++)e[(o=n[a]).name]="function"==typeof o.val?i(t,o.val,o):U.isPlainObject(o.val)?{}:o.val,e[o.name].__dt_wrapper=!0,m.extend(t,e[o.name],o.propExt)}},m.register=e=function(t,e){if(U.isArray(t))for(var n=0,a=t.length;n<a;n++)m.register(t[n],e);else{var r,o,i,l,s=t.split("."),u=ge,c=function(t,e){for(var n=0,a=t.length;n<a;n++)if(t[n].name===e)return t[n];return null};for(r=0,o=s.length;r<o;r++){var f=c(u,i=(l=-1!==s[r].indexOf("()"))?s[r].replace("()",""):s[r]);f||(f={name:i,val:{},methodExt:[],propExt:[]},u.push(f)),r===o-1?f.val=e:u=l?f.methodExt:f.propExt}}},m.registerPlural=t=function(t,e,n){m.register(t,n),m.register(e,function(){var t=n.apply(this,arguments);return t===this?this:t instanceof m?t.length?U.isArray(t[0])?new m(t.context,t[0]):t[0]:V:t})};e("tables()",function(t){return t?new m(function(t,n){if("number"==typeof t)return[n[t]];var a=U.map(n,function(t,e){return t.nTable});return U(a).filter(t).map(function(t){var e=U.inArray(this,a);return n[e]}).toArray()}(t,this.context)):this}),e("table()",function(t){var e=this.tables(t),n=e.context;return n.length?new m(n[0]):e}),t("tables().nodes()","table().node()",function(){return this.iterator("table",function(t){return t.nTable},1)}),t("tables().body()","table().body()",function(){return this.iterator("table",function(t){return t.nTBody},1)}),t("tables().header()","table().header()",function(){return this.iterator("table",function(t){return t.nTHead},1)}),t("tables().footer()","table().footer()",function(){return this.iterator("table",function(t){return t.nTFoot},1)}),t("tables().containers()","table().container()",function(){return this.iterator("table",function(t){return t.nTableWrapper},1)}),e("draw()",function(e){return this.iterator("table",function(t){"page"===e?lt(t):("string"==typeof e&&(e="full-hold"!==e),st(t,!1===e))})}),e("page()",function(e){return e===V?this.page.info().page:this.iterator("table",function(t){kt(t,e)})}),e("page.info()",function(t){if(0===this.context.length)return V;var e=this.context[0],n=e._iDisplayStart,a=e.oFeatures.bPaginate?e._iDisplayLength:-1,r=e.fnRecordsDisplay(),o=-1===a;return{page:o?0:Math.floor(n/a),pages:o?1:Math.ceil(r/a),start:n,end:e.fnDisplayEnd(),length:a,recordsTotal:e.fnRecordsTotal(),recordsDisplay:r,serverSide:"ssp"===pe(e)}}),e("page.len()",function(e){return e===V?0!==this.context.length?this.context[0]._iDisplayLength:V:this.iterator("table",function(t){Ht(t,e)})});var ve=function(r,o,t){if(t){var e=new m(r);e.one("draw",function(){t(e.ajax.json())})}if("ssp"==pe(r))st(r,o);else{Wt(r,!0);var n=r.jqXHR;n&&4!==n.readyState&&n.abort(),dt(r,[],function(t){Q(r);for(var e=bt(r,t),n=0,a=e.length;n<a;n++)W(r,e[n]);st(r,o),Wt(r,!1)})}};e("ajax.json()",function(){var t=this.context;if(0<t.length)return t[0].json}),e("ajax.params()",function(){var t=this.context;if(0<t.length)return t[0].oAjaxData}),e("ajax.reload()",function(e,n){return this.iterator("table",function(t){ve(t,!1===n,e)})}),e("ajax.url()",function(e){var t=this.context;return e===V?0===t.length?V:(t=t[0]).ajax?U.isPlainObject(t.ajax)?t.ajax.url:t.ajax:t.sAjaxSource:this.iterator("table",function(t){U.isPlainObject(t.ajax)?t.ajax.url=e:t.ajax=e})}),e("ajax.url().load()",function(e,n){return this.iterator("table",function(t){ve(t,!1===n,e)})});var Se=function(t,e,n,a,r){var o,i,l,s,u,c,f=[],d=typeof e;for(e&&"string"!==d&&"function"!==d&&e.length!==V||(e=[e]),l=0,s=e.length;l<s;l++)for(u=0,c=(i=e[l]&&e[l].split&&!e[l].match(/[\[\(:]/)?e[l].split(","):[e[l]]).length;u<c;u++)(o=n("string"==typeof i[u]?U.trim(i[u]):i[u]))&&o.length&&(f=f.concat(o));var h=p.selector[t];if(h.length)for(l=0,s=h.length;l<s;l++)f=h[l](a,r,f);return b(f)},me=function(t){return t||(t={}),t.filter&&t.search===V&&(t.search=t.filter),U.extend({search:"none",order:"current",page:"all"},t)},De=function(t){for(var e=0,n=t.length;e<n;e++)if(0<t[e].length)return t[0]=t[e],t[0].length=1,t.length=1,t.context=[t.context[e]],t;return t.length=0,t},ye=function(t,e){var n,a,r,o=[],i=t.aiDisplay,l=t.aiDisplayMaster,s=e.search,u=e.order,c=e.page;if("ssp"==pe(t))return"removed"===s?[]:g(0,l.length);if("current"==c)for(n=t._iDisplayStart,a=t.fnDisplayEnd();n<a;n++)o.push(i[n]);else if("current"==u||"applied"==u)o="none"==s?l.slice():"applied"==s?i.slice():U.map(l,function(t,e){return-1===U.inArray(t,i)?t:null});else if("index"==u||"original"==u)for(n=0,a=t.aoData.length;n<a;n++)"none"==s?o.push(n):(-1===(r=U.inArray(n,i))&&"removed"==s||0<=r&&"applied"==s)&&o.push(n);return o};e("rows()",function(e,n){e===V?e="":U.isPlainObject(e)&&(n=e,e=""),n=me(n);var t=this.iterator("table",function(t){return Se("row",e,function(n){var t=h(n);if(null!==t&&!i)return[t];if(l||(l=ye(o,i)),null!==t&&-1!==U.inArray(t,l))return[t];if(null===n||n===V||""===n)return l;if("function"==typeof n)return U.map(l,function(t){var e=o.aoData[t];return n(t,e._aData,e.nTr)?t:null});var e=y(D(o.aoData,l,"nTr"));if(n.nodeName){if(n._DT_RowIndex!==V)return[n._DT_RowIndex];if(n._DT_CellIndex)return[n._DT_CellIndex.row];var a=U(n).closest("*[data-dt-row]");return a.length?[a.data("dt-row")]:[]}if("string"==typeof n&&"#"===n.charAt(0)){var r=o.aIds[n.replace(/^#/,"")];if(r!==V)return[r.idx]}return U(e).filter(n).map(function(){return this._DT_RowIndex}).toArray()},o=t,i=n);var o,i,l},1);return t.selector.rows=e,t.selector.opts=n,t}),e("rows().nodes()",function(){return this.iterator("row",function(t,e){return t.aoData[e].nTr||V},1)}),e("rows().data()",function(){return this.iterator(!0,"rows",function(t,e){return D(t.aoData,e,"_aData")},1)}),t("rows().cache()","row().cache()",function(a){return this.iterator("row",function(t,e){var n=t.aoData[e];return"search"===a?n._aFilterData:n._aSortData},1)}),t("rows().invalidate()","row().invalidate()",function(n){return this.iterator("row",function(t,e){et(t,e,n)})}),t("rows().indexes()","row().index()",function(){return this.iterator("row",function(t,e){return e},1)}),t("rows().ids()","row().id()",function(t){for(var e=[],n=this.context,a=0,r=n.length;a<r;a++)for(var o=0,i=this[a].length;o<i;o++){var l=n[a].rowIdFn(n[a].aoData[this[a][o]]._aData);e.push((!0===t?"#":"")+l)}return new m(n,e)}),t("rows().remove()","row().remove()",function(){var d=this;return this.iterator("row",function(t,e,n){var a,r,o,i,l,s,u=t.aoData,c=u[e];for(u.splice(e,1),a=0,r=u.length;a<r;a++)if(s=(l=u[a]).anCells,null!==l.nTr&&(l.nTr._DT_RowIndex=a),null!==s)for(o=0,i=s.length;o<i;o++)s[o]._DT_CellIndex.row=a;tt(t.aiDisplayMaster,e),tt(t.aiDisplay,e),tt(d[n],e,!1),0<t._iRecordsDisplay&&t._iRecordsDisplay--,de(t);var f=t.rowIdFn(c._aData);f!==V&&delete t.aIds[f]}),this.iterator("table",function(t){for(var e=0,n=t.aoData.length;e<n;e++)t.aoData[e].idx=e}),this}),e("rows.add()",function(o){var t=this.iterator("table",function(t){var e,n,a,r=[];for(n=0,a=o.length;n<a;n++)(e=o[n]).nodeName&&"TR"===e.nodeName.toUpperCase()?r.push(E(t,e)[0]):r.push(W(t,e));return r},1),e=this.rows(-1);return e.pop(),U.merge(e,t),e}),e("row()",function(t,e){return De(this.rows(t,e))}),e("row().data()",function(t){var e=this.context;return t===V?e.length&&this.length?e[0].aoData[this[0]]._aData:V:(e[0].aoData[this[0]]._aData=t,et(e[0],this[0],"data"),this)}),e("row().node()",function(){var t=this.context;return t.length&&this.length&&t[0].aoData[this[0]].nTr||null}),e("row.add()",function(e){e instanceof U&&e.length&&(e=e[0]);var t=this.iterator("table",function(t){return e.nodeName&&"TR"===e.nodeName.toUpperCase()?E(t,e)[0]:W(t,e)});return this.row(t[0])});var _e=function(t,e){var n=t.context;if(n.length){var a=n[0].aoData[e!==V?e:t[0]];a&&a._details&&(a._details.remove(),a._detailsShow=V,a._details=V)}},Ce=function(t,e){var n=t.context;if(n.length&&t.length){var a=n[0].aoData[t[0]];a._details&&((a._detailsShow=e)?a._details.insertAfter(a.nTr):a._details.detach(),Te(n[0]))}},Te=function(s){var r=new m(s),t=".dt.DT_details",e="draw"+t,n="column-visibility"+t,a="destroy"+t,u=s.aoData;r.off(e+" "+n+" "+a),0<X(u,"_details").length&&(r.on(e,function(t,e){s===e&&r.rows({page:"current"}).eq(0).each(function(t){var e=u[t];e._detailsShow&&e._details.insertAfter(e.nTr)})}),r.on(n,function(t,e,n,a){if(s===e)for(var r,o=O(e),i=0,l=u.length;i<l;i++)(r=u[i])._details&&r._details.children("td[colspan]").attr("colspan",o)}),r.on(a,function(t,e){if(s===e)for(var n=0,a=u.length;n<a;n++)u[n]._details&&_e(r,n)}))},we="row().child",xe=we+"()";e(xe,function(t,e){var o,n,i,l,a=this.context;return t===V?a.length&&this.length?a[0].aoData[this[0]]._details:V:(!0===t?this.child.show():!1===t?_e(this):a.length&&this.length&&(o=a[0],n=a[0].aoData[this[0]],i=[],(l=function(t,e){if(U.isArray(t)||t instanceof U)for(var n=0,a=t.length;n<a;n++)l(t[n],e);else if(t.nodeName&&"tr"===t.nodeName.toLowerCase())i.push(t);else{var r=U("<tr><td/></tr>").addClass(e);U("td",r).addClass(e).html(t)[0].colSpan=O(o),i.push(r[0])}})(t,e),n._details&&n._details.detach(),n._details=U(i),n._detailsShow&&n._details.insertAfter(n.nTr)),this)}),e([we+".show()",xe+".show()"],function(t){return Ce(this,!0),this}),e([we+".hide()",xe+".hide()"],function(){return Ce(this,!1),this}),e([we+".remove()",xe+".remove()"],function(){return _e(this),this}),e(we+".isShown()",function(){var t=this.context;return t.length&&this.length&&t[0].aoData[this[0]]._detailsShow||!1});var Ie=/^([^:]+):(name|visIdx|visible)$/,Ae=function(t,e,n,a,r){for(var o=[],i=0,l=r.length;i<l;i++)o.push(x(t,r[i],e));return o};e("columns()",function(n,a){n===V?n="":U.isPlainObject(n)&&(a=n,n=""),a=me(a);var t=this.iterator("table",function(t){return e=n,u=a,c=(s=t).aoColumns,f=X(c,"sName"),d=X(c,"nTh"),Se("column",e,function(n){var t=h(n);if(""===n)return g(c.length);if(null!==t)return[0<=t?t:c.length+t];if("function"==typeof n){var a=ye(s,u);return U.map(c,function(t,e){return n(e,Ae(s,e,0,0,a),d[e])?e:null})}var r="string"==typeof n?n.match(Ie):"";if(r)switch(r[2]){case"visIdx":case"visible":var e=parseInt(r[1],10);if(e<0){var o=U.map(c,function(t,e){return t.bVisible?e:null});return[o[o.length+e]]}return[q(s,e)];case"name":return U.map(f,function(t,e){return t===r[1]?e:null});default:return[]}if(n.nodeName&&n._DT_CellIndex)return[n._DT_CellIndex.column];var i=U(d).filter(n).map(function(){return U.inArray(this,d)}).toArray();if(i.length||!n.nodeName)return i;var l=U(n).closest("*[data-dt-column]");return l.length?[l.data("dt-column")]:[]},s,u);var s,e,u,c,f,d},1);return t.selector.cols=n,t.selector.opts=a,t}),t("columns().header()","column().header()",function(t,e){return this.iterator("column",function(t,e){return t.aoColumns[e].nTh},1)}),t("columns().footer()","column().footer()",function(t,e){return this.iterator("column",function(t,e){return t.aoColumns[e].nTf},1)}),t("columns().data()","column().data()",function(){return this.iterator("column-rows",Ae,1)}),t("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(t,e){return t.aoColumns[e].mData},1)}),t("columns().cache()","column().cache()",function(o){return this.iterator("column-rows",function(t,e,n,a,r){return D(t.aoData,r,"search"===o?"_aFilterData":"_aSortData",e)},1)}),t("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(t,e,n,a,r){return D(t.aoData,r,"anCells",e)},1)}),t("columns().visible()","column().visible()",function(n,a){var t=this.iterator("column",function(t,e){if(n===V)return t.aoColumns[e].bVisible;!function(t,e,n){var a,r,o,i,l=t.aoColumns,s=l[e],u=t.aoData;if(n===V)return s.bVisible;if(s.bVisible!==n){if(n){var c=U.inArray(!0,X(l,"bVisible"),e+1);for(r=0,o=u.length;r<o;r++)i=u[r].nTr,a=u[r].anCells,i&&i.insertBefore(a[e],a[c]||null)}else U(X(t.aoData,"anCells",e)).detach();s.bVisible=n,it(t,t.aoHeader),it(t,t.aoFooter),ae(t)}}(t,e,n)});return n!==V&&(this.iterator("column",function(t,e){fe(t,null,"column-visibility",[t,e,n,a])}),(a===V||a)&&this.columns.adjust()),t}),t("columns().indexes()","column().index()",function(n){return this.iterator("column",function(t,e){return"visible"===n?T(t,e):e},1)}),e("columns.adjust()",function(){return this.iterator("table",function(t){J(t)},1)}),e("column.index()",function(t,e){if(0!==this.context.length){var n=this.context[0];if("fromVisible"===t||"toData"===t)return q(n,e);if("fromData"===t||"toVisible"===t)return T(n,e)}}),e("column()",function(t,e){return De(this.columns(t,e))});e("cells()",function(b,t,v){if(U.isPlainObject(b)&&(b.row===V?(v=b,b=null):(v=t,t=null)),U.isPlainObject(t)&&(v=t,t=null),null===t||t===V)return this.iterator("table",function(t){return a=t,e=b,n=me(v),f=a.aoData,d=ye(a,n),h=y(D(f,d,"anCells")),p=U([].concat.apply([],h)),g=a.aoColumns.length,Se("cell",e,function(t){var e="function"==typeof t;if(null===t||t===V||e){for(o=[],i=0,l=d.length;i<l;i++)for(r=d[i],s=0;s<g;s++)u={row:r,column:s},e?(c=f[r],t(u,x(a,r,s),c.anCells?c.anCells[s]:null)&&o.push(u)):o.push(u);return o}if(U.isPlainObject(t))return[t];var n=p.filter(t).map(function(t,e){return{row:e._DT_CellIndex.row,column:e._DT_CellIndex.column}}).toArray();return n.length||!t.nodeName?n:(c=U(t).closest("*[data-dt-row]")).length?[{row:c.data("dt-row"),column:c.data("dt-column")}]:[]},a,n);var a,e,n,r,o,i,l,s,u,c,f,d,h,p,g});var n,a,r,o,i,l=this.columns(t,v),s=this.rows(b,v),e=this.iterator("table",function(t,e){for(n=[],a=0,r=s[e].length;a<r;a++)for(o=0,i=l[e].length;o<i;o++)n.push({row:s[e][a],column:l[e][o]});return n},1);return U.extend(e.selector,{cols:t,rows:b,opts:v}),e}),t("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(t,e,n){var a=t.aoData[e];return a&&a.anCells?a.anCells[n]:V},1)}),e("cells().data()",function(){return this.iterator("cell",function(t,e,n){return x(t,e,n)},1)}),t("cells().cache()","cell().cache()",function(a){return a="search"===a?"_aFilterData":"_aSortData",this.iterator("cell",function(t,e,n){return t.aoData[e][a][n]},1)}),t("cells().render()","cell().render()",function(a){return this.iterator("cell",function(t,e,n){return x(t,e,n,a)},1)}),t("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(t,e,n){return{row:e,column:n,columnVisible:T(t,n)}},1)}),t("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(t,e,n){et(t,e,a,n)})}),e("cell()",function(t,e,n){return De(this.cells(t,e,n))}),e("cell().data()",function(t){var e=this.context,n=this[0];return t===V?e.length&&n.length?x(e[0],n[0].row,n[0].column):V:(B(e[0],n[0].row,n[0].column,t),et(e[0],n[0].row,"data",n[0].column),this)}),e("order()",function(e,t){var n=this.context;return e===V?0!==n.length?n[0].aaSorting:V:("number"==typeof e?e=[[e,t]]:e.length&&!U.isArray(e[0])&&(e=Array.prototype.slice.call(arguments)),this.iterator("table",function(t){t.aaSorting=e.slice()}))}),e("order.listener()",function(e,n,a){return this.iterator("table",function(t){te(t,e,n,a)})}),e("order.fixed()",function(e){if(!e){var t=this.context,n=t.length?t[0].aaSortingFixed:V;return U.isArray(n)?{pre:n}:n}return this.iterator("table",function(t){t.aaSortingFixed=U.extend(!0,{},e)})}),e(["columns().order()","column().order()"],function(a){var r=this;return this.iterator("table",function(t,e){var n=[];U.each(r[e],function(t,e){n.push([e,a])}),t.aaSorting=n})}),e("search()",function(e,n,a,r){var t=this.context;return e===V?0!==t.length?t[0].oPreviousSearch.sSearch:V:this.iterator("table",function(t){t.oFeatures.bFilter&&St(t,U.extend({},t.oPreviousSearch,{sSearch:e+"",bRegex:null!==n&&n,bSmart:null===a||a,bCaseInsensitive:null===r||r}),1)})}),t("columns().search()","column().search()",function(a,r,o,i){return this.iterator("column",function(t,e){var n=t.aoPreSearchCols;if(a===V)return n[e].sSearch;t.oFeatures.bFilter&&(U.extend(n[e],{sSearch:a+"",bRegex:null!==r&&r,bSmart:null===o||o,bCaseInsensitive:null===i||i}),St(t,t.oPreviousSearch,1))})}),e("state()",function(){return this.context.length?this.context[0].oSavedState:null}),e("state.clear()",function(){return this.iterator("table",function(t){t.fnStateSaveCallback.call(t.oInstance,t,{})})}),e("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null}),e("state.save()",function(){return this.iterator("table",function(t){ae(t)})}),I.versionCheck=I.fnVersionCheck=function(t){for(var e,n,a=I.version.split("."),r=t.split("."),o=0,i=r.length;o<i;o++)if((e=parseInt(a[o],10)||0)!==(n=parseInt(r[o],10)||0))return n<e;return!0},I.isDataTable=I.fnIsDataTable=function(t){var r=U(t).get(0),o=!1;return t instanceof I.Api||(U.each(I.settings,function(t,e){var n=e.nScrollHead?U("table",e.nScrollHead)[0]:null,a=e.nScrollFoot?U("table",e.nScrollFoot)[0]:null;e.nTable!==r&&n!==r&&a!==r||(o=!0)}),o)},I.tables=I.fnTables=function(e){var t=!1;U.isPlainObject(e)&&(t=e.api,e=e.visible);var n=U.map(I.settings,function(t){if(!e||e&&U(t.nTable).is(":visible"))return t.nTable});return t?new m(n):n},I.camelToHungarian=F,e("$()",function(t,e){var n=this.rows(e).nodes(),a=U(n);return U([].concat(a.filter(t).toArray(),a.find(t).toArray()))}),U.each(["on","one","off"],function(t,n){e(n+"()",function(){var t=Array.prototype.slice.call(arguments);t[0]=U.map(t[0].split(/\s/),function(t){return t.match(/\.dt\b/)?t:t+".dt"}).join(" ");var e=U(this.tables().nodes());return e[n].apply(e,t),this})}),e("clear()",function(){return this.iterator("table",function(t){Q(t)})}),e("settings()",function(){return new m(this.context,this.context)}),e("init()",function(){var t=this.context;return t.length?t[0].oInit:null}),e("data()",function(){return this.iterator("table",function(t){return X(t.aoData,"_aData")}).flatten()}),e("destroy()",function(p){return p=p||!1,this.iterator("table",function(e){var n,t=e.nTableWrapper.parentNode,a=e.oClasses,r=e.nTable,o=e.nTBody,i=e.nTHead,l=e.nTFoot,s=U(r),u=U(o),c=U(e.nTableWrapper),f=U.map(e.aoData,function(t){return t.nTr});e.bDestroying=!0,fe(e,"aoDestroyCallback","destroy",[e]),p||new m(e).columns().visible(!0),c.off(".DT").find(":not(tbody *)").off(".DT"),U(A).off(".DT-"+e.sInstance),r!=i.parentNode&&(s.children("thead").detach(),s.append(i)),l&&r!=l.parentNode&&(s.children("tfoot").detach(),s.append(l)),e.aaSorting=[],e.aaSortingFixed=[],ee(e),U(f).removeClass(e.asStripeClasses.join(" ")),U("th, td",i).removeClass(a.sSortable+" "+a.sSortableAsc+" "+a.sSortableDesc+" "+a.sSortableNone),u.children().detach(),u.append(f);var d=p?"remove":"detach";s[d](),c[d](),!p&&t&&(t.insertBefore(r,e.nTableReinsertBefore),s.css("width",e.sDestroyWidth).removeClass(a.sTable),(n=e.asDestroyStripes.length)&&u.children().each(function(t){U(this).addClass(e.asDestroyStripes[t%n])}));var h=U.inArray(e,I.settings);-1!==h&&I.settings.splice(h,1)})}),U.each(["column","row","cell"],function(t,s){e(s+"s().every()",function(o){var i=this.selector.opts,l=this;return this.iterator(s,function(t,e,n,a,r){o.call(l[s](e,"cell"===s?n:i,"cell"===s?i:V),e,n,a,r)})})}),e("i18n()",function(t,e,n){var a=this.context[0],r=Y(t)(a.oLanguage);return r===V&&(r=e),n!==V&&U.isPlainObject(r)&&(r=r[n]!==V?r[n]:r._),r.replace("%d",n)}),I.version="1.10.16",I.settings=[],I.models={},I.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0},I.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1},I.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null},I.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(t){try{return JSON.parse((-1===t.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+t.sInstance+"_"+location.pathname))}catch(t){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(t,e){try{(-1===t.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+t.sInstance+"_"+location.pathname,JSON.stringify(e))}catch(t){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:U.extend({},I.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"},v(I.defaults),I.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null},v(I.defaults.column),I.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:V,oAjaxData:V,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==pe(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==pe(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var t=this._iDisplayLength,e=this._iDisplayStart,n=e+t,a=this.aiDisplay.length,r=this.oFeatures,o=r.bPaginate;return r.bServerSide?!1===o||-1===t?e+a:Math.min(e+t,this._iRecordsDisplay):!o||a<n||-1===t?a:n},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null},I.ext=p={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:I.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:I.version},U.extend(p,{afnFiltering:p.search,aTypes:p.type.detect,ofnSearch:p.type.search,oSort:p.type.order,afnSortData:p.order,aoFeatures:p.feature,oApi:p.internal,oStdClasses:p.classes,oPagination:p.pager}),U.extend(I.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Fe=I.ext.pager;function Le(t,e){var n=[],a=Fe.numbers_length,r=Math.floor(a/2);return e<=a?n=g(0,e):t<=r?((n=g(0,a-2)).push("ellipsis"),n.push(e-1)):(e-1-r<=t?(n=g(e-(a-2),e)).splice(0,0,"ellipsis"):((n=g(t-r+2,t+r-1)).push("ellipsis"),n.push(e-1),n.splice(0,0,"ellipsis")),n.splice(0,0,0)),n.DT_el="span",n}U.extend(Fe,{simple:function(t,e){return["previous","next"]},full:function(t,e){return["first","previous","next","last"]},numbers:function(t,e){return[Le(t,e)]},simple_numbers:function(t,e){return["previous",Le(t,e),"next"]},full_numbers:function(t,e){return["first","previous",Le(t,e),"next","last"]},first_last_numbers:function(t,e){return["first",Le(t,e),"last"]},_numbers:Le,numbers_length:7}),U.extend(!0,I.ext.renderer,{pageButton:{_:function(l,t,s,e,u,c){var f,d,n,h=l.oClasses,p=l.oLanguage.oPaginate,g=l.oLanguage.oAria.paginate||{},b=0,v=function(t,e){var n,a,r,o=function(t){kt(l,t.data.action,!0)};for(n=0,a=e.length;n<a;n++)if(r=e[n],U.isArray(r)){var i=U("<"+(r.DT_el||"div")+"/>").appendTo(t);v(i,r)}else{switch(f=null,d="",r){case"ellipsis":t.append('<span class="ellipsis">&#x2026;</span>');break;case"first":f=p.sFirst,d=r+(0<u?"":" "+h.sPageButtonDisabled);break;case"previous":f=p.sPrevious,d=r+(0<u?"":" "+h.sPageButtonDisabled);break;case"next":f=p.sNext,d=r+(u<c-1?"":" "+h.sPageButtonDisabled);break;case"last":f=p.sLast,d=r+(u<c-1?"":" "+h.sPageButtonDisabled);break;default:f=r+1,d=u===r?h.sPageButtonActive:""}null!==f&&(ue(U("<a>",{class:h.sPageButton+" "+d,"aria-controls":l.sTableId,"aria-label":g[r],"data-dt-idx":b,tabindex:l.iTabIndex,id:0===s&&"string"==typeof r?l.sTableId+"_"+r:null}).html(f).appendTo(t),{action:r},o),b++)}};try{n=U(t).find(S.activeElement).data("dt-idx")}catch(t){}v(U(t).empty(),e),n!==V&&U(t).find("[data-dt-idx="+n+"]").focus()}}}),U.extend(I.ext.type.detect,[function(t,e){var n=e.oLanguage.sDecimal;return c(t,n)?"num"+n:null},function(t,e){if(t&&!(t instanceof Date)&&!o.test(t))return null;var n=Date.parse(t);return null!==n&&!isNaN(n)||s(t)?"date":null},function(t,e){var n=e.oLanguage.sDecimal;return c(t,n,!0)?"num-fmt"+n:null},function(t,e){var n=e.oLanguage.sDecimal;return f(t,n)?"html-num"+n:null},function(t,e){var n=e.oLanguage.sDecimal;return f(t,n,!0)?"html-num-fmt"+n:null},function(t,e){return s(t)||"string"==typeof t&&-1!==t.indexOf("<")?"html":null}]),U.extend(I.ext.type.search,{html:function(t){return s(t)?t:"string"==typeof t?t.replace(a," ").replace(r,""):""},string:function(t){return s(t)?t:"string"==typeof t?t.replace(a," "):t}});var Re=function(t,e,n,a){return 0===t||t&&"-"!==t?(e&&(t=u(t,e)),t.replace&&(n&&(t=t.replace(n,"")),a&&(t=t.replace(a,""))),1*t):-1/0};function Pe(n){U.each({num:function(t){return Re(t,n)},"num-fmt":function(t){return Re(t,n,l)},"html-num":function(t){return Re(t,n,r)},"html-num-fmt":function(t){return Re(t,n,r,l)}},function(t,e){p.type.order[t+n+"-pre"]=e,t.match(/^html\-/)&&(p.type.search[t+n]=p.type.search.html)})}U.extend(p.type.order,{"date-pre":function(t){return Date.parse(t)||-1/0},"html-pre":function(t){return s(t)?"":t.replace?t.replace(/<.*?>/g,"").toLowerCase():t+""},"string-pre":function(t){return s(t)?"":"string"==typeof t?t.toLowerCase():t.toString?t.toString():""},"string-asc":function(t,e){return t<e?-1:e<t?1:0},"string-desc":function(t,e){return t<e?1:e<t?-1:0}}),Pe(""),U.extend(!0,I.ext.renderer,{header:{_:function(o,i,l,s){U(o.nTable).on("order.dt.DT",function(t,e,n,a){if(o===e){var r=l.idx;i.removeClass(l.sSortingClass+" "+s.sSortAsc+" "+s.sSortDesc).addClass("asc"==a[r]?s.sSortAsc:"desc"==a[r]?s.sSortDesc:l.sSortingClass)}})},jqueryui:function(o,i,l,s){U("<div/>").addClass(s.sSortJUIWrapper).append(i.contents()).append(U("<span/>").addClass(s.sSortIcon+" "+l.sSortingClassJUI)).appendTo(i),U(o.nTable).on("order.dt.DT",function(t,e,n,a){if(o===e){var r=l.idx;i.removeClass(s.sSortAsc+" "+s.sSortDesc).addClass("asc"==a[r]?s.sSortAsc:"desc"==a[r]?s.sSortDesc:l.sSortingClass),i.find("span."+s.sSortIcon).removeClass(s.sSortJUIAsc+" "+s.sSortJUIDesc+" "+s.sSortJUI+" "+s.sSortJUIAscAllowed+" "+s.sSortJUIDescAllowed).addClass("asc"==a[r]?s.sSortJUIAsc:"desc"==a[r]?s.sSortJUIDesc:l.sSortingClassJUI)}})}}});var je=function(t){return"string"==typeof t?t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):t};function He(e){return function(){var t=[oe(this[I.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return I.ext.internal[e].apply(this,t)}}return I.render={number:function(o,i,l,s,u){return{display:function(t){if("number"!=typeof t&&"string"!=typeof t)return t;var e=t<0?"-":"",n=parseFloat(t);if(isNaN(n))return je(t);n=n.toFixed(l),t=Math.abs(n);var a=parseInt(t,10),r=l?i+(t-a).toFixed(l).substring(2):"";return e+(s||"")+a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,o)+r+(u||"")}}},text:function(){return{display:je}}},U.extend(I.ext.internal,{_fnExternApiFunc:He,_fnBuildAjax:dt,_fnAjaxUpdate:ht,_fnAjaxParameters:pt,_fnAjaxUpdateDraw:gt,_fnAjaxDataSrc:bt,_fnAddColumn:H,_fnColumnOptions:N,_fnAdjustColumnSizing:J,_fnVisibleToColumnIndex:q,_fnColumnIndexToVisible:T,_fnVisbleColumns:O,_fnGetColumns:k,_fnColumnTypes:w,_fnApplyColumnDefs:M,_fnHungarianMap:v,_fnCamelToHungarian:F,_fnLanguageCompat:L,_fnBrowserDetect:j,_fnAddData:W,_fnAddTr:E,_fnNodeToDataIndex:function(t,e){return e._DT_RowIndex!==V?e._DT_RowIndex:null},_fnNodeToColumnIndex:function(t,e,n){return U.inArray(n,t.aoData[e].anCells)},_fnGetCellData:x,_fnSetCellData:B,_fnSplitObjNotation:z,_fnGetObjectDataFn:Y,_fnSetObjectDataFn:Z,_fnGetDataMaster:K,_fnClearTable:Q,_fnDeleteIndex:tt,_fnInvalidate:et,_fnGetRowElements:nt,_fnCreateTr:at,_fnBuildHead:ot,_fnDrawHead:it,_fnDraw:lt,_fnReDraw:st,_fnAddOptionsHtml:ut,_fnDetectHeader:ct,_fnGetUniqueThs:ft,_fnFeatureHtmlFilter:vt,_fnFilterComplete:St,_fnFilterCustom:mt,_fnFilterColumn:Dt,_fnFilter:yt,_fnFilterCreateSearch:_t,_fnEscapeRegex:Ct,_fnFilterData:xt,_fnFeatureHtmlInfo:Ft,_fnUpdateInfo:Lt,_fnInfoMacros:Rt,_fnInitialise:Pt,_fnInitComplete:jt,_fnLengthChange:Ht,_fnFeatureHtmlLength:Nt,_fnFeatureHtmlPaginate:Ot,_fnPageChange:kt,_fnFeatureHtmlProcessing:Mt,_fnProcessingDisplay:Wt,_fnFeatureHtmlTable:Et,_fnScrollDraw:Bt,_fnApplyToChildren:Ut,_fnCalculateColumnWidths:Xt,_fnThrottle:Jt,_fnConvertToWidth:qt,_fnGetWidestNode:Gt,_fnGetMaxLenString:$t,_fnStringToCss:zt,_fnSortFlatten:Yt,_fnSort:Zt,_fnSortAria:Kt,_fnSortListener:Qt,_fnSortAttachListener:te,_fnSortingClasses:ee,_fnSortData:ne,_fnSaveState:ae,_fnLoadState:re,_fnSettingsFromNode:oe,_fnLog:ie,_fnMap:le,_fnBindAction:ue,_fnCallbackReg:ce,_fnCallbackFire:fe,_fnLengthOverflow:de,_fnRenderer:he,_fnDataSource:pe,_fnRowAttributes:rt,_fnCalculateEnd:function(){}}),((U.fn.dataTable=I).$=U).fn.dataTableSettings=I.settings,U.fn.dataTableExt=I.ext,U.fn.DataTable=function(t){return U(this).dataTable(t).api()},U.each(I,function(t,e){U.fn.DataTable[t]=e}),U.fn.dataTable});
!function(t){"function"==typeof define&&define.amd?define(["jquery","datatables.net"],function(e){return t(e,window,document)}):"object"==typeof exports?module.exports=function(e,a){return e||(e=window),a&&a.fn.dataTable||(a=require("datatables.net")(e,a).$),t(a,e,e.document)}:t(jQuery,window,document)}(function(h,e,n,o){"use strict";var s=h.fn.dataTable;return h.extend(!0,s.defaults,{dom:"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",renderer:"bootstrap"}),h.extend(s.ext.classes,{sWrapper:"dataTables_wrapper container-fluid dt-bootstrap4",sFilterInput:"form-control form-control-sm",sLengthSelect:"form-control form-control-sm",sProcessing:"dataTables_processing card",sPageButton:"paginate_button page-item"}),s.ext.renderer.pageButton.bootstrap=function(i,e,d,a,l,c){var u,p,t,f=new s.Api(i),b=i.oClasses,m=i.oLanguage.oPaginate,g=i.oLanguage.oAria.paginate||{},x=0,w=function(e,a){var t,n,o,s,r=function(e){e.preventDefault(),h(e.currentTarget).hasClass("disabled")||f.page()==e.data.action||f.page(e.data.action).draw("page")};for(t=0,n=a.length;t<n;t++)if(s=a[t],h.isArray(s))w(e,s);else{switch(p=u="",s){case"ellipsis":u="&#x2026;",p="disabled";break;case"first":u=m.sFirst,p=s+(0<l?"":" disabled");break;case"previous":u=m.sPrevious,p=s+(0<l?"":" disabled");break;case"next":u=m.sNext,p=s+(l<c-1?"":" disabled");break;case"last":u=m.sLast,p=s+(l<c-1?"":" disabled");break;default:u=s+1,p=l===s?"active":""}u&&(o=h("<li>",{class:b.sPageButton+" "+p,id:0===d&&"string"==typeof s?i.sTableId+"_"+s:null}).append(h("<a>",{href:"#","aria-controls":i.sTableId,"aria-label":g[s],"data-dt-idx":x,tabindex:i.iTabIndex,class:"page-link"}).html(u)).appendTo(e),i.oApi._fnBindAction(o,{action:s},r),x++)}};try{t=h(e).find(n.activeElement).data("dt-idx")}catch(e){}w(h(e).empty().html('<ul class="pagination"/>').children("ul"),a),t!==o&&h(e).find("[data-dt-idx="+t+"]").focus()},s});
/*
*
* QuantumPro
* Author: http://authenticgoods.co
*
*/
// -----------------------------------------------------------------------------
// 1. GLOBAL CONSTANTS
// -----------------------------------------------------------------------------
(function(window, document, $, undefined) {
  "use strict";
  var QuantumPro = window.QuantumPro || (window.QuantumPro = {});
  if (Modernizr.touchevents) {
    QuantumPro.APP_TOUCH = true;
  } else {
    QuantumPro.APP_TOUCH = false;
  }
  QuantumPro.APP_MEDIAQUERY = {
    XLARGE: "1280px",
    LARGE: "992px",
    MEDIUM: "768px",
    SMALL: "576px",
    XSMALL: "0px"
  };
  QuantumPro.APP_COLORS = {
    primary: "#7468bd",
    secondary: "#8da6c3",
    accent: "#F64A91",
    info: "#42a4f4",
    warning: "#FFCE67",
    danger: "#ff5c75",
    success: "#2fbfa0",
    grey50: "#f0f6ff",
    grey100: "#dde9f5",
    grey200: "#cbdaea",
    grey300: "#b6cade",
    grey400: "#a4bad1",
    grey500: "#93acc6",
    grey600: "#839bb3",
    grey700: "#718599",
    grey800: "#617182",
    grey900: "#4d5a68"
  };

  // Option to persist settings
  // ----------------------------------
  var persistSettings = true;
  var $html = $("html"),
  $body = $("body");
  if (persistSettings) {
    //Setup some default layout options on app start.
    //Let's check if localStorage is available and persist our settings,
    if (typeof localStorage !== "undefined") {
      //Global namespace for sessionStorage,localStorage, and cookieStorage
      window.appConfig = Storages.initNamespaceStorage("appConfig");
    }
  }
  window.app = {
    persist: persistSettings,
    config: {
      isTouch: function isTouch() {
        return $html.hasClass("touch");
      }
    }
  };

  // debounce
  // --------------------
  window.debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
      args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };



  // Switching theme color demo
  // ----------------------------------------

  $('[data-load-css]').on('click', function(e) {
    var element = $(this);
    if (element.is('a'))
    e.preventDefault();
    var uri = element.data('loadCss'),
    link;
    if (uri) {
      link = swapStyleSheet(uri);
      if (!link) {
        $.error('Error creating stylesheet link element.');
      }
    } else {
      $.error('No stylesheet location defined.');
    }
  });


  var swapStyleSheet = function(uri) {
    var linkId = 'autoloaded-stylesheet',
    oldLink = $('#' + linkId).attr('id', linkId + '-old');
    $('head').append($('<link/>').attr({
      'id': linkId,
      'rel': 'stylesheet',
      'href': uri
    }));
    if (oldLink.length) {
      oldLink.remove();
    }
    return $('#' + linkId);
  };

  // Switching layout mode demo
  // ----------------------------------------

  $('input[name=layoutMode]').on('click', function() {
    if ($('body').hasClass('layout-fixed')) {
      $('body').removeClass('layout-fixed');
    }
    let getVal = $(this).val();
    $('body').addClass(getVal);
  });



  var $openCtrl = $('#button-search'),
  $closeCtrl = $('#button-search-close'),
  $searchContainer = $('.fullpage-search-wrapper'),
  $inputSearch = $('.search__input');

  function init() {
    initEvents();
  }

  function initEvents() {

    $openCtrl.on('click', function() {
      openSearch();
    });
    $closeCtrl.on('click', function() {
      closeSearch();
    });
    $(document).on('keyup', function(ev) {
      // escape key.
      if (ev.keyCode == 27) {
        closeSearch();
      }
    });
  }

  function openSearch() {
    $searchContainer.addClass('search--open');
    $inputSearch.focus();
  }

  function closeSearch() {
    $searchContainer.removeClass('search--open');
    $inputSearch.blur();
    $inputSearch.val('');
  }

  init();

})(window, document, window.jQuery);

// -----------------------------------------------------------------------------
// 2. App Sidebars
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
  "use strict";
  $(function() {
    // init sidebars
    // --------------------
    $(".nav.metismenu").metisMenu();
    // switch sidebar state mobile/desktop based on breakpoints
    // ----------------------------------------------------------
    var switchMenuState = function() {
      var $body = $("body"),
      $menuHeaderControls = $(".header-controls");
      if ($(window).width() < 992) {
        $body.removeClass("mini-sidebar");
        $menuHeaderControls.hide();
      } else if ($(window).width() > 992) {
        $body.removeClass("aside-left-open");
        $menuHeaderControls.show();
      }
    };
    $(window).on("resize", function() {
      debounce(switchMenuState, 300, false)();
    });
    // If sidebar is set to static
    // ------------------------------------------------
    if($("body.fixed-menu")){
      $("body.fixed-menu .main-menu").mCustomScrollbar({
        theme: "minimal-dark",
        scrollInertia: 100,
        setTop: "-999999px",
        mouseWheel: {
          preventDefault: true
        }
      });
    }

    // Toggle menu states
    // ----------------------------------
    var $toggleElement = $("[data-toggle-state]");
    $("[data-toggle-state]").on("click", function(e) {
      e.stopPropagation();
      var $body = $("body"),
      element = $(this),
      className = element.data("toggleState"),
      //key = element.data('key'),
      $target = $body;
      if (className) {
        if ($target.hasClass(className)) {
          $target.removeClass(className);
        } else {
          $target.addClass(className);
        }
      }
      menuIconState(className);
      backdropState(className);
    });

    // Toggle menu icon on Default Menu open/close
    // ----------------------------------
    var menuIconState = function(className) {
      if (className === "mini-sidebar") {
        if ($("body.mini-sidebar").length > 0) {
          $('[data-toggle-state="mini-sidebar"] > i')
          .removeClass("la-dot-circle-o")
          .addClass("la-circle");
        } else {
          $('[data-toggle-state="mini-sidebar"] > i')
          .removeClass("la-circle")
          .addClass("la-dot-circle-o");
        }
      }
    };
    // Load backdrop when sidebar is open
    // ----------------------------------
    var backdropState = function(className) {
      var backDrop =
      '<div class="aside-overlay-fixed" data-aos="fade-in" data-aos-duration="300"></div>';
      if (
        $("body.aside-right-open").length > 0 ||
        $("body.aside-left-open").length > 0 ||
        $("body.mail-compose-open").length > 0
      ) {
        $("body").append(backDrop);
        $(".aside-overlay-fixed").on("click", function() {
          $(this)
          .fadeOut("fast")
          .remove();
          $("body").removeClass(
            "aside-right-open aside-left-open mail-compose-open"
          );
        });
      }
    };
  });
})(window, document, window.jQuery);

// -----------------------------------------------------------------------------
// 3. General actions
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
  "use strict";
  $(function() {
    $("[data-q-action]").on("click", function(e) {
      e.stopPropagation();
      var $this = $(this),
      action = $(this).data("q-action"),
      $card = $(this).parents(".card");

      switch (action) {
        /*-----------------------------------------------------------------------
        Site Search Open/Close
        -----------------------------------------------------------------------*/
        /**
        * Action: Open
        **/
        case "open-site-search":
        var $target = $(".top-toolbar.navbar-desktop .navbar-form");
        $target.find(".navbar-search").focus();
        $target.addClass("open");

        break;

        /**
        * Action: Close
        **/
        case "close-site-search":
        var $target = $(".top-toolbar .navbar-form");
        $target.find(".navbar-search").val("");
        $target.removeClass("open");

        break;

        /*-----------------------------------------------------------------------
        Notifications Open/Close Config
        -----------------------------------------------------------------------*/
        /**
        * Action: Open
        **/
        case "open-notifi-config":
        $this
        .children(".icon")
        .toggleClass("dripicons-gear dripicons-arrow-thin-left");
        $this.data("q-action", "close-notifi-config");
        var $target = $this
        .closest(".card")
        .find(".card-container-wrapper .card-container");

        $target.animate({
          left: "-300px"
        },
        400
      );

      break;

      /**
      * Action: Close
      **/
      case "close-notifi-config":
      $this
      .children(".icon")
      .toggleClass("dripicons-arrow-thin-left dripicons-gear");
      $this.data("q-action", "open-notifi-config");
      var $target = $this
      .closest(".card")
      .find(".card-container-wrapper .card-container");

      $target.animate({
        left: "0px"
      },
      400
    );

    break;

    /*-----------------------------------------------------------------------
    Template Page Sidebars
    -----------------------------------------------------------------------*/
    /**
    * Action: Open/Close
    **/
    case "page-aside-right-open":
    if (
      Modernizr.mq("(max-width: " + QuantumPro.APP_MEDIAQUERY.XLARGE + ")")
    ) {
      var $target = $(".aside-right"),
      $backdropTarget = $("body");

      $target.toggleClass("open");

      var addClickEvent = function() {
        $(".aside-overlay-fixed").on("touchend click", function(e) {
          $(this)
          .fadeOut("fast")
          .remove();
          $target.removeClass("open");
          return false;
        });
      };
      if ($target.hasClass("open")) {
        var backDrop =
        '<div class="aside-overlay-fixed" data-aos="fade-in" data-aos-duration="300"></div>';
        $backdropTarget.append(backDrop);
        addClickEvent();
      } else {
        $(".aside-overlay-fixed").trigger("click");
      }
    }

    break;

    /**
    * Action: Open/Close
    **/
    case "page-aside-left-open":
    if (Modernizr.mq("(max-width:992px)")) {
      var $target = $(".aside-left"),
      $backdropTarget = $("body");

      $target.toggleClass("open");

      var addClickEvent = function() {
        $(".aside-overlay-fixed").on("touchend click", function(e) {
          $(this)
          .fadeOut("fast")
          .remove();
          $target.removeClass("open");
          return false;
        });
      };

      if ($target.hasClass("open")) {
        var backDrop =
        '<div class="aside-overlay-fixed" data-aos="fade-in" data-aos-duration="300"></div>';
        $backdropTarget.append(backDrop);
        addClickEvent();
      } else {
        $(".aside-overlay-fixed").trigger("click");
      }
    }

    break;

    /*-----------------------------------------------------------------------
    Card Actions
    -----------------------------------------------------------------------*/
    /**
    * Action: Expand Fullscreen
    **/
    case "card-expand":
    $card.toggleClass(action);
    $this
    .children("i")
    .toggleClass("dripicons-expand-2 icon dripicons-contract-2");
    break;
    /**
    * Action: Remove
    **/
    case "card-remove":
    $card.fadeOut();
    break;
    /**
    * Action: Collapse
    **/
    case "card-collapsed":
    $card.toggleClass(action);
    $card.find(".card-body").slideToggle();
    $this.children("i").toggleClass("collapsedRotate");
    break;
  }
});
});
})(window, document, window.jQuery);
//----some cleanup checks
var removeBackdrop = function() {
  if ($("#3-col-wrapper").length) {
    var $targetRight = $("#3-col-wrapper .aside-right");
    ($targetLeft = $("#3-col-wrapper .aside-left")),
    ($backdropTarget = $("#3-col-wrapper"));
    if (
      $targetRight.hasClass("open") &&
      Modernizr.mq("(min-width: " + QuantumPro.APP_MEDIAQUERY.XLARGE + ")")
    ) {
      $(".aside-overlay-absolute").remove();
      $targetRight.removeClass("open");
    }
    if ($targetLeft.hasClass("open") && Modernizr.mq("(max-width: 670px)")) {
      $(".aside-overlay-absolute").remove();
      $targetLeft.removeClass("open");
    }
  }
};
$(window).on("resize", function() {
  debounce(removeBackdrop, 300, false)();
});
//----end cleanup checks
// -----------------------------------------------------------------------------
// 4. UI Blocking
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
  "use strict";
  $(function() {
    $("body").on("click", "[data-qt-block]", function(e) {
      e.stopPropagation();
      var $this = $(this),
      target = $(this).data("qt-block");

      switch (target) {
        /*-----------------------------------------------------------------------
        Element blocking
        -----------------------------------------------------------------------*/
        /**
        * Action: Open
        **/
        case ".block-el":
        var $blockTarget = $(this)
        .parents(".card")
        .find(target);
        $blockTarget.append('<div class="qt-block-ui"></div>');
        var $block = $blockTarget.find(".qt-block-ui");
        setTimeout(function() {
          $block.fadeOut("3000", function() {
            $block.remove();
          });
        }, 1700);

        break;
        /*-----------------------------------------------------------------------
        Form blocking
        -----------------------------------------------------------------------*/
        case "#block-form":
        $(target).submit(function(event) {
          event.preventDefault();
          $(target)
          .find("input")
          .attr("disabled", "disabled");
          $this.addClass("btn-block-ui").attr("disabled", "disabled");
          setTimeout(function() {
            $(target)
            .find("input")
            .attr("disabled", false)
            .val("");
            $this.removeClass("btn-block-ui").attr("disabled", false);
          }, 3000);
          return true;
        });

        break;
        /*-----------------------------------------------------------------------
        Full Page Blocking
        -----------------------------------------------------------------------*/
        case "body":
        $(target).append('<div class="qt-block-ui"></div>');
        var $block = $(".qt-block-ui");
        setTimeout(function() {
          $block.fadeOut("3000", function() {
            $block.remove();
          });
        }, 1700);

        break;
      }
    });
  });
})(window, document, window.jQuery);

// -----------------------------------------------------------------------------
// 5. GLOBAL INIT SNIPPETS
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
  "use strict";
  $(function() {
    // Smooth Scroll
    // ----------------------------------
    if ($('a.smooth-scroll[href*="#"]:not([href="#"])').length > 0) {
      $('a.smooth-scroll[href*="#"]:not([href="#"])').on('click',function() {
        if($(this).parents('ul').hasClass('doc-menu')){
          $('.doc-menu li').removeClass('active');
           $(this).parent('li').addClass('active')
        }

        if (
          location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length ?
          target :
          $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
            $("html, body").animate({
              scrollTop: target.offset().top - 75
            },500);
          return false;
        }
      }
    });
  }

  // Filter Toolbar Dropdown Menu
  // ----------------------------------
  if ($(".filter-input").length > 0) {
    var $filterInput = $(".filter-input"),
    $filterList = $("ul.filter-list li a.dropdown-item"),
    $clearList = $(".clear-filter");
    $clearList.hide();
    $filterInput.on("keyup", function() {
      var value = $(this)
      .val()
      .toLowerCase();
      $filterList.filter(function() {
        $(this).toggle(
          $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
        );
        $clearList.show();
        if (!$filterInput.val().length) {
          $clearList.hide();
        }
      });
    });

    $clearList.on("click", function() {
      $(this).hide();
      $filterInput.val("");
      $filterList.fadeIn();
    });
  }

  // Custom Scrollbar
  // ----------------------------------
  if ($("[data-scroll='minimal-dark']").length > 0 && $("[data-scroll='minimal-dark']").hasClass('scroll-bottom')) {
    $("[data-scroll='minimal-dark']").mCustomScrollbar({
      theme: "minimal-dark",
      scrollInertia: 100,
      setTop: "-999999px",
      mouseWheel: {
        preventDefault: true
      }
    });
  } else if ($("[data-scroll='minimal-dark']").length > 0) {
    $("[data-scroll='minimal-dark']").mCustomScrollbar({
      theme: "minimal-dark",
      scrollInertia: 100,
      mouseWheel: {
        preventDefault: true
      }
    });
  }
  if ($("[data-scroll='minimal']").length > 0) {
    $("[data-scroll='minimal']").mCustomScrollbar({
      theme: "minimal",
      scrollInertia: 100,
      mouseWheel: {
        preventDefault: true
      }
    });
  }
  if ($("[data-scroll='minimal-light']").length > 0) {
    $("[data-scroll='minimal-light']").mCustomScrollbar({
      theme: "minimal-light",
      scrollInertia: 100,
      mouseWheel: {
        preventDefault: true
      }
    });
  }
  // Modal Custom Scrollbar
  // ----------------------------------
  if ($('[data-modal="scroll"]').length > 0) {
    $('[data-modal="scroll"]').on("shown.bs.modal", function() {
      $(".modal-body").mCustomScrollbar({
        theme: "minimal-dark"
      });
    });
  }

  // Initialize the switchery plugin
  // ----------------------------------
  if ($(".js-switch").length > 0) {
    var elems = Array.prototype.slice.call($(".js-switch"));
    elems.forEach(function(html) {
      var switchery = new Switchery(html, {
        size: "small",
        color: QuantumPro.APP_COLORS.primary,
        secondaryColor: QuantumPro.APP_COLORS.lightergrey
      });
    });
  }

  // Keep the dropdowns open when clicking switches
  // ------------------------------------------------
  if ($(".switchery").length > 0) {
    $(".switchery").on("click", function(e) {
      e.stopPropagation();
    });
  }

  // Dropdown menu animation
  // ------------------------------------------------
  if ($(".dropdown").length > 0) {
    $(".dropdown").on("hidden.bs.dropdown", function() {
      $(this)
      .find(".dropdown-menu")
      .removeAttr("style");
    });
  }

  // Tooltip init
  // ------------------------------------------------
  if ($('[data-toggle="tooltip"]').length > 0) {
    $('[data-toggle="tooltip"]').tooltip();
  }
  // Reset Form
  // ------------------------------------------------
  $(".clear-form").on("click", function() {
    $(this)
    .closest("form")
    .find(":input")
    .val("");
    $(this)
    .closest("form")
    .find(":checkbox")
    .prop("checked", false);
    $(this)
    .closest("form")
    .find(":radio")
    .prop("checked", false);
  });
  // Popover init
  // ------------------------------------------------
  if ($('[data-toggle="popover"]').length > 0) {
    $('[data-toggle="popover"]').popover({
      container: "body",
      html: true,
      content: function() {
        return $(this)
        .next(".popper-content")
        .html();
      }
    });
  }

  // Auto Hide Menu Option for Horizontal Menu
  // ------------------------------------------------
  if ($("body.layout-horizontal.menu-auto-hide").length > 0) {
    // scroll is still position
    var scroll = $(document).scrollTop();
    var headerHeight = $('.header-bottom').outerHeight();
    //console.log(headerHeight);

    $(window).scroll(function() {
      // scrolled is new position just obtained
      var scrolled = $(document).scrollTop();

      // optionally emulate non-fixed positioning behaviour

      if (scrolled > headerHeight) {
        $('.header-bottom').addClass('off-canvas');
      } else {
        $('.header-bottom').removeClass('off-canvas');
      }

      if (scrolled > scroll) {
        // scrolling down
        $('.header-bottom').removeClass('fixed');
      } else {
        //scrolling up
        $('.header-bottom').addClass('fixed');
      }

      scroll = $(document).scrollTop();
    });
  }

  // File Upload - get file name to display
  // ------------------------------------------------
  $('.custom-file-input').on('change',function(){
       //get the file name
       var fileName = $(this).val().replace(/^.*\\/, "");
       //replace the "Choose a file" label
       $(this).next('.custom-file-label').html(fileName);
   });

});
})(window, document, window.jQuery);

(function(window, document, $, undefined) {
  "use strict";
    $(function() {
      if ($('.counter').length > 0) {
        $.each($('.counter'), function() {
          var count = $(this).data('count'),
          numAnim = new CountUp(this, 0, count);
          numAnim.start();
        });
      }
    });

})(window, document, window.jQuery);

// -----------------------------------------------------------------------------
// Titles: Active Sessions, Add to cart, Newsletter Sign Ups, Total Revenue
// Location: index.html
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
  "use strict";
  $(function() {
    $(".progress-active-sessions .progress-bar").animate({
      width: "72%"
    }, 400);
    $(".progress-add-to-cart .progress-bar").animate({
      width: "67%"
    }, 400);
    $(".progress-new-account .progress-bar").animate({
      width: "83%"
    }, 400);
    $(".progress-total-revenue .progress-bar").animate({
      width: "77%"
    }, 400);

  });

})(window, document, window.jQuery);

// -----------------------------------------------------------------------------
// Title: Recent Transactions
// ID: #recent-transaction-table
// Location: index.html
// Dependency File(s):
// assets/vendor/datatables.net/js/jquery.dataTables.js
// assets/vendor/datatables.net-bs4/js/dataTables.bootstrap4.js
// -----------------------------------------------------------------------------
(function(window, document, $, undefined) {
	  "use strict";
	$(function() {
		$('#recent-transaction-table').DataTable({
			"columnDefs": [{
				"targets": 'no-sort',
				"orderable": false,
			}],
			"columns": [
				null,
				null,
				null,
				null,
				{
					"width": "10%"
				}]
		});
	});

})(window, document, window.jQuery);

// -----------------------------------------------------------------------------
// Title: Monthly budget
// ID: #monthly-budget
// Location: index.html
// Dependency File(s):
// assets/vendor/flot/jquery.flot.js
// assets/vendor/jquery.flot.tooltip/js/jquery.flot.tooltip.min.js
// assets/vendor/flot/jquery.flot.resize.js
// assets/vendor/flot/jquery.flot.time.js
// assets/vendor/flot.curvedlines/curvedLines.js
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
	  "use strict";
	$(function() {
		var data7_1 = [
			[0, 4],
			[1, 8],
			[2, 5],
			[3, 10],
			[4, 4],
			[5, 16],
			[6, 5],
			[7, 11],
			[8, 6],
			[9, 11],
			[10, 30],
			[11, 10],
			[12, 13],
			[13, 4],
			[14, 3],
			[15, 3],
			[16, 6]
		];
		var data7_2 = [
			[0, 1],
			[1, 0],
			[2, 2],
			[3, 0],
			[4, 1],
			[5, 3],
			[6, 1],
			[7, 5],
			[8, 2],
			[9, 3],
			[10, 2],
			[11, 1],
			[12, 0],
			[13, 2],
			[14, 8],
			[15, 0],
			[16, 0]
		];

		$.plot($("#monthly-budget #monthly-budget-content"), [{
			data: data7_1,
			label: "Expenses",
			points: {
				show: false
			},
			curvedLines: {
				apply: true
			},
			lines: {
				fill: true
			}
		}, {
			data: data7_2,
			label: "Income",
			points: {
				show: false
			},
			lines: {
				show: true
			},
			yaxis: 2
		}], {
			series: {
				lines: {
					show: true,
					fill: true
				},
				curvedLines: {
					apply: true,
					monotonicFit: true,
					active: true
				},
				points: {
					show: true,
					lineWidth: 2,
					fill: true,
					fillColor: "#ffffff",
					symbol: "circle",
					radius: 5
				},
				shadowSize: 0
			},
			grid: {
				hoverable: true,
				clickable: true,
				tickColor: "#e5ebf8",
				borderWidth: 1,
				borderColor: "#e5ebf8"
			},
			colors: [QuantumPro.APP_COLORS.accent, QuantumPro.APP_COLORS.primary],
			tooltip: true,
			tooltipOpts: {
				defaultTheme: false
			},
			xaxis: {
				ticks: [
					[1, "Jan"],
					[2, "Feb"],
					[3, "Mar"],
					[4, "Apr"],
					[5, "May"],
					[6, "Jun"],
					[7, "Jul"],
					[8, "Aug"],
					[9, "Sep"],
					[10, "Oct"],
					[11, "Nov"],
					[12, "Dec"]
				]
			},
			yaxes: [{}, {
				position: "right" /* left or right */
			}]
		});
	});
})(window, document, window.jQuery);

// -----------------------------------------------------------------------------
// Title: Users
// ID: #usersChart
// Location: index.html
// Dependency File(s): assets/vendor/chart.js/dist/Chart.bundle.min.js
// -----------------------------------------------------------------------------
(function(window, document, $, undefined) {
    "use strict";
  $(function() {
    if ($('#usersChart').length == 0) {
      return;
    }
    var ctx = document.getElementById("usersChart").getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 240);
    gradient.addColorStop(0, Chart.helpers.color(QuantumPro.APP_COLORS.info).alpha(0.9).rgbString());
    gradient.addColorStop(1, Chart.helpers.color('#ffffff').alpha(0).rgbString());
    var config = {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
        datasets: [{
          label: "User Accounts",
          backgroundColor: gradient,
          borderWidth: 2,
          borderColor: QuantumPro.APP_COLORS.info,
          pointBackgroundColor: Chart.helpers.color(QuantumPro.APP_COLORS.info).alpha(1).rgbString(),
          pointBorderColor: Chart.helpers.color('#ffffff').alpha(0).rgbString(),
          pointHoverBackgroundColor: Chart.helpers.color('#ffffff').alpha(0.1).rgbString(),
          pointHoverBorderColor: Chart.helpers.color('#ffffff').alpha(0.1).rgbString(),
          data: [11, 13, 10, 14, 16, 12, 14, 18]
        }]
      },
      options: {
        title: {
          display: false,
        },
        tooltips: {
          mode: 'nearest',
          intersect: false,
          position: 'nearest',
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            display: false,
            gridLines: false,
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            display: false,
            gridLines: false,
            scaleLabel: {
              display: true,
              labelString: 'Value'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        },
        elements: {
          line: {
            tension: 0.000001
          },
          point: {
            radius: 4,
            borderWidth: 8
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 50,
            bottom: 0
          }
        }
      }
    };

    var chart = new Chart(ctx, config);

  });

})(window, document, window.jQuery);

// -----------------------------------------------------------------------------
// Title: Bounce Rate
// ID: #bounceRateChart
// Location: index.html
// Dependency File(s): assets/vendor/chart.js/dist/Chart.bundle.min.js
// -----------------------------------------------------------------------------
(function(window, document, $, undefined) {
  "use strict";
  $(function() {

    if ($('#bounceRateChart').length == 0) {
      return;
    }
    var ctx = document.getElementById("bounceRateChart").getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 240);
    gradient.addColorStop(0, Chart.helpers.color(QuantumPro.APP_COLORS.warning).alpha(0.9).rgbString());
    gradient.addColorStop(1, Chart.helpers.color('#ffffff').alpha(0).rgbString());
    var config = {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
        datasets: [{
          label: "Bounce Rate",
          backgroundColor: gradient,
          borderWidth: 2,
          borderColor: QuantumPro.APP_COLORS.warning,
          pointBackgroundColor: Chart.helpers.color(QuantumPro.APP_COLORS.warning).alpha(1).rgbString(),
          pointBorderColor: Chart.helpers.color('#ffffff').alpha(0).rgbString(),
          pointHoverBackgroundColor: Chart.helpers.color('#ffffff').alpha(0.1).rgbString(),
          pointHoverBorderColor: Chart.helpers.color('#ffffff').alpha(0.1).rgbString(),
          data: [4, 5, 4, 6, 7, 6, 4, 2]
        }]
      },
      options: {
        title: {
          display: false,
        },
        tooltips: {
          mode: 'nearest',
          intersect: false,
          position: 'nearest',
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            display: false,
            gridLines: false,
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            display: false,
            gridLines: false,
            scaleLabel: {
              display: true,
              labelString: 'Value'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        },
        elements: {
          line: {
            tension: 0.000001
          },
          point: {
            radius: 4,
            borderWidth: 8
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 50,
            bottom: 0
          }
        }
      }
    };

    var chart = new Chart(ctx, config);

  });

})(window, document, window.jQuery);

// -----------------------------------------------------------------------------
// Title: Session Duration
// ID: #sessionDuration
// Location: index.html
// Dependency File(s): assets/vendor/chart.js/dist/Chart.bundle.min.js
// -----------------------------------------------------------------------------
(function(window, document, $, undefined) {
  "use strict";
  $(function() {
    if ($('#sessionDuration').length == 0) {
      return;
    }
    var ctx = document.getElementById("sessionDuration").getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 240);
    gradient.addColorStop(0, Chart.helpers.color(QuantumPro.APP_COLORS.primary).alpha(0.9).rgbString());
    gradient.addColorStop(1, Chart.helpers.color('#ffffff').alpha(0).rgbString());
    var config = {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
        datasets: [{
          label: "Session Duration",
          backgroundColor: gradient,
          borderWidth: 2,
          borderColor: QuantumPro.APP_COLORS.primary,
          pointBackgroundColor: Chart.helpers.color(QuantumPro.APP_COLORS.primary).alpha(1).rgbString(),
          pointBorderColor: Chart.helpers.color('#ffffff').alpha(0).rgbString(),
          pointHoverBackgroundColor: Chart.helpers.color('#ffffff').alpha(0.1).rgbString(),
          pointHoverBorderColor: Chart.helpers.color('#ffffff').alpha(0.1).rgbString(),
          data: [4, 5, 4, 6, 7, 8, 10, 14]
        }]
      },
      options: {
        title: {
          display: false,
        },
        tooltips: {
          mode: 'nearest',
          intersect: false,
          position: 'nearest',
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            display: false,
            gridLines: false,
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            display: false,
            gridLines: false,
            scaleLabel: {
              display: true,
              labelString: 'Value'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        },
        elements: {
          line: {
            tension: 0.000001
          },
          point: {
            radius: 4,
            borderWidth: 8
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 50,
            bottom: 0
          }
        }
      }
    };

    var chart = new Chart(ctx, config);

  });

})(window, document, window.jQuery);

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sweetalert2=t()}(this,function(){"use strict";var q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},I=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},t="SweetAlert2:",S=function(e){console.warn(t+" "+e)},R=function(e){console.error(t+" "+e)},n=[],s=function(e){-1===n.indexOf(e)&&(n.push(e),S(e))},D=function(e){return"function"==typeof e?e():e},N=function(e){return"object"===(void 0===e?"undefined":q(e))&&"function"==typeof e.then},e=Object.freeze({cancel:"cancel",backdrop:"overlay",close:"close",esc:"esc",timer:"timer"}),u=function(e){var t={};for(var n in e)t[e[n]]="swal2-"+e[n];return t},H=u(["container","shown","iosfix","popup","modal","no-backdrop","toast","toast-shown","fade","show","hide","noanimation","close","title","header","content","actions","confirm","cancel","footer","icon","icon-text","image","input","has-input","file","range","select","radio","checkbox","textarea","inputerror","validationerror","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen"]),P=u(["success","warning","info","question","error"]),l={previousActiveElement:null,previousBodyPadding:null},c=function(e,t){return!!e.classList&&e.classList.contains(t)},M=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},d=function(e,t,n){e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(function(t){e.forEach?e.forEach(function(e){n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)}))},W=function(e,t){d(e,t,!0)},O=function(e,t){d(e,t,!1)},z=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(c(e.childNodes[n],t))return e.childNodes[n]},U=function(e){e.style.opacity="",e.style.display=e.id===H.content?"block":"flex"},K=function(e){e.style.opacity="",e.style.display="none"},F=function(e){return e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},L=function(){return document.body.querySelector("."+H.container)},p=function(e){var t=L();return t?t.querySelector("."+e):null},Z=function(){return p(H.popup)},Q=function(){return p(H.title)},Y=function(){return p(H.content)},$=function(){return p(H.image)},J=function(){return p(H.progresssteps)},X=function(){return p(H.confirm)},G=function(){return p(H.cancel)},ee=function(){return p(H.actions)},te=function(){return p(H.footer)},ne=function(){return p(H.close)},oe=function(){var e=Array.prototype.slice.call(Z().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e,t){return(e=parseInt(e.getAttribute("tabindex")))>(t=parseInt(t.getAttribute("tabindex")))?1:e<t?-1:0}),t=Array.prototype.slice.call(Z().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]'));return function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(e.concat(t))},f=function(){return!document.body.classList.contains(H["toast-shown"])},m=function(){return"undefined"==typeof window||"undefined"==typeof document},h=('\n <div aria-labelledby="'+H.title+'" aria-describedby="'+H.content+'" class="'+H.popup+'" tabindex="-1">\n   <div class="'+H.header+'">\n     <ul class="'+H.progresssteps+'"></ul>\n     <div class="'+H.icon+" "+P.error+'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="'+H.icon+" "+P.question+'">\n       <span class="'+H["icon-text"]+'">?</span>\n      </div>\n     <div class="'+H.icon+" "+P.warning+'">\n       <span class="'+H["icon-text"]+'">!</span>\n      </div>\n     <div class="'+H.icon+" "+P.info+'">\n       <span class="'+H["icon-text"]+'">i</span>\n      </div>\n     <div class="'+H.icon+" "+P.success+'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="'+H.image+'" />\n     <h2 class="'+H.title+'" id="'+H.title+'"></h2>\n     <button type="button" class="'+H.close+'">×</button>\n   </div>\n   <div class="'+H.content+'">\n     <div id="'+H.content+'"></div>\n     <input class="'+H.input+'" />\n     <input type="file" class="'+H.file+'" />\n     <div class="'+H.range+'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="'+H.select+'"></select>\n     <div class="'+H.radio+'"></div>\n     <label for="'+H.checkbox+'" class="'+H.checkbox+'">\n       <input type="checkbox" />\n     </label>\n     <textarea class="'+H.textarea+'"></textarea>\n     <div class="'+H.validationerror+'" id="'+H.validationerror+'"></div>\n   </div>\n   <div class="'+H.actions+'">\n     <button type="button" class="'+H.confirm+'">OK</button>\n     <button type="button" class="'+H.cancel+'">Cancel</button>\n   </div>\n   <div class="'+H.footer+'">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),ie=function(e){var t=L();if(t&&(t.parentNode.removeChild(t),O([document.documentElement,document.body],[H["no-backdrop"],H["has-input"],H["toast-shown"]])),!m()){var n=document.createElement("div");n.className=H.container,n.innerHTML=h,("string"==typeof e.target?document.querySelector(e.target):e.target).appendChild(n);var o=Z(),i=Y(),r=z(i,H.input),a=z(i,H.file),s=i.querySelector("."+H.range+" input"),u=i.querySelector("."+H.range+" output"),l=z(i,H.select),c=i.querySelector("."+H.checkbox+" input"),d=z(i,H.textarea);o.setAttribute("role",e.toast?"alert":"dialog"),o.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||o.setAttribute("aria-modal","true");var p=function(){le.isVisible()&&le.resetValidationError()};return r.oninput=p,a.onchange=p,l.onchange=p,c.onchange=p,d.oninput=p,s.oninput=function(){p(),u.value=s.value},s.onchange=function(){p(),s.nextSibling.value=s.value},o}R("SweetAlert2 requires document to initialize")},re=function(e,t){if(!e)return K(t);if("object"===(void 0===e?"undefined":q(e)))if(t.innerHTML="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0));else e&&(t.innerHTML=e);U(t)},v=function(){if(m())return!1;var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];return!1}(),b={title:"",titleText:"",text:"",html:"",footer:"",type:null,toast:!1,customClass:"",target:"body",backdrop:!0,animation:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:null,confirmButtonClass:null,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:null,cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:null,timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onAfterClose:null,onOpen:null,onClose:null,useRejections:!1,expectRejections:!1},g=["useRejections","expectRejections"],y=function(e){return b.hasOwnProperty(e)||"extraParams"===e},w=function(e){return-1!==g.indexOf(e)},C=function(e){for(var t in e)y(t)||S('Unknown parameter "'+t+'"'),w(t)&&s('The parameter "'+t+'" is deprecated and will be removed in the next major release.')},ae={popupParams:r({},b)},x=function(e,t){var n=L(),o=Z();if(o){null!==e&&"function"==typeof e&&e(o),O(o,H.show),W(o,H.hide),clearTimeout(o.timeout),document.body.classList.contains(H["toast-shown"])||(function(){if(l.previousActiveElement&&l.previousActiveElement.focus){var e=window.scrollX,t=window.scrollY;l.previousActiveElement.focus(),void 0!==e&&void 0!==t&&window.scrollTo(e,t)}}(),window.onkeydown=ae.previousWindowKeyDown,ae.windowOnkeydownOverridden=!1);var i=function(){n.parentNode&&n.parentNode.removeChild(n),O([document.documentElement,document.body],[H.shown,H["no-backdrop"],H["has-input"],H["toast-shown"]]),f()&&(null!==l.previousBodyPadding&&(document.body.style.paddingRight=l.previousBodyPadding,l.previousBodyPadding=null),function(){if(c(document.body,H.iosfix)){var e=parseInt(document.body.style.top,10);O(document.body,H.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}}()),null!==t&&"function"==typeof t&&setTimeout(function(){t()})};v&&!c(o,H.noanimation)?o.addEventListener(v,function e(){o.removeEventListener(v,e),c(o,H.hide)&&i()}):i()}},k=[],B=function(){var e=Z();e||le(""),e=Z();var t=ee(),n=X(),o=G();U(t),U(n),W([e,t],H.loading),n.disabled=!0,o.disabled=!0,e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},A=Object.freeze({isValidParameter:y,isDeprecatedParameter:w,argsToParams:function(n){var o={};switch(q(n[0])){case"string":["title","html","type"].forEach(function(e,t){void 0!==n[t]&&(o[e]=n[t])});break;case"object":r(o,n[0]);break;default:return R('Unexpected type of argument! Expected "string" or "object", got '+q(n[0])),!1}return o},adaptInputValidator:function(n){return function(e,t){return n.call(this,e,t).then(function(){},function(e){return e})}},close:x,closePopup:x,closeModal:x,closeToast:x,isVisible:function(){return!!Z()},clickConfirm:function(){return X().click()},clickCancel:function(){return G().click()},getTitle:Q,getContent:Y,getImage:$,getButtonsWrapper:function(){return s("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead"),p(H.actions)},getActions:ee,getConfirmButton:X,getCancelButton:G,getFooter:te,isLoading:function(){return Z().hasAttribute("data-loading")},mixin:function(n){return function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,this),i(t,[{key:"_main",value:function(e){return function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_main",this).call(this,r({},n,e))}}]),t}()},queue:function(e){var r=this;k=e;var a=function(){k=[],document.body.removeAttribute("data-swal2-queue-step")},s=[];return new Promise(function(i,e){!function t(n,o){n<k.length?(document.body.setAttribute("data-swal2-queue-step",n),r(k[n]).then(function(e){void 0!==e.value?(s.push(e.value),t(n+1,o)):(a(),i({dismiss:e.dismiss}))})):(a(),i({value:s}))}(0)})},getQueueStep:function(){return document.body.getAttribute("data-swal2-queue-step")},insertQueueStep:function(e,t){return t&&t<k.length?k.splice(t,0,e):k.push(e)},deleteQueueStep:function(e){void 0!==k[e]&&k.splice(e,1)},setDefaults:function(e){if(!e||"object"!==(void 0===e?"undefined":q(e)))return R("the argument for setDefaults() is required and has to be a object");for(var t in C(e),e)y(t)&&(ae.popupParams[t]=e[t])},resetDefaults:function(){ae.popupParams=r({},b)},showLoading:B,enableLoading:B,fire:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return new(Function.prototype.bind.apply(this,[null].concat(t)))}});function E(){var e=this._domCache;this.params.showConfirmButton||(K(e.confirmButton),this.params.showCancelButton||K(e.actions)),O([e.popup,e.actions],H.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.cancelButton.disabled=!1}var se={email:function(e){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.reject("Invalid email address")},url:function(e){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e)?Promise.resolve():Promise.reject("Invalid URL")}},ue=function(e,t,n){var o=L(),i=Z();null!==t&&"function"==typeof t&&t(i),e?(W(i,H.show),W(o,H.fade),O(i,H.hide)):O(i,H.fade),U(i),o.style.overflowY="hidden",v&&!c(i,H.noanimation)?i.addEventListener(v,function e(){i.removeEventListener(v,e),o.style.overflowY="auto"}):o.style.overflowY="auto",W([document.documentElement,document.body,o],H.shown),f()&&(null===l.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(l.previousBodyPadding=document.body.style.paddingRight,document.body.style.paddingRight=function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}()+"px"),function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!c(document.body,H.iosfix)){var e=document.body.scrollTop;document.body.style.top=-1*e+"px",W(document.body,H.iosfix)}}()),l.previousActiveElement=document.activeElement,null!==n&&"function"==typeof n&&setTimeout(function(){n(i)})},T=Object.freeze({hideLoading:E,disableLoading:E,getInput:function(e){var t=this._domCache;if(!(e=e||this.params.input))return null;switch(e){case"select":case"textarea":case"file":return z(t.content,H[e]);case"checkbox":return t.popup.querySelector("."+H.checkbox+" input");case"radio":return t.popup.querySelector("."+H.radio+" input:checked")||t.popup.querySelector("."+H.radio+" input:first-child");case"range":return t.popup.querySelector("."+H.range+" input");default:return z(t.content,H.input)}},enableButtons:function(){this._domCache.confirmButton.disabled=!1,this._domCache.cancelButton.disabled=!1},disableButtons:function(){this._domCache.confirmButton.disabled=!0,this._domCache.cancelButton.disabled=!0},enableConfirmButton:function(){this._domCache.confirmButton.disabled=!1},disableConfirmButton:function(){this._domCache.confirmButton.disabled=!0},enableInput:function(){var e=this.getInput();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!1;else e.disabled=!1},disableInput:function(){var e=this.getInput();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!0;else e.disabled=!0},showValidationError:function(e){var t=this._domCache;t.validationError.innerHTML=e;var n=window.getComputedStyle(t.popup);t.validationError.style.marginLeft="-"+n.getPropertyValue("padding-left"),t.validationError.style.marginRight="-"+n.getPropertyValue("padding-right"),U(t.validationError);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",H.validationerror),M(o),W(o,H.inputerror))},resetValidationError:function(){var e=this._domCache;e.validationError&&K(e.validationError);var t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedBy"),O(t,H.inputerror))},_main:function(e){var T=this;C(e);var j=this.params=r({},ae.popupParams,e);!function(i){i.inputValidator||Object.keys(se).forEach(function(e){i.input===e&&(i.inputValidator=i.expectRejections?se[e]:le.adaptInputValidator(se[e]))}),(!i.target||"string"==typeof i.target&&!document.querySelector(i.target)||"string"!=typeof i.target&&!i.target.appendChild)&&(S('Target parameter is not valid, defaulting to "body"'),i.target="body");var e=void 0,t=Z(),n="string"==typeof i.target?document.querySelector(i.target):i.target;e=t&&n&&t.parentNode!==n.parentNode?ie(i):t||ie(i),i.width&&(e.style.width="number"==typeof i.width?i.width+"px":i.width),i.padding&&(e.style.padding="number"==typeof i.padding?i.padding+"px":i.padding),i.background&&(e.style.background=i.background);for(var o=window.getComputedStyle(e).getPropertyValue("background-color"),r=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),a=0;a<r.length;a++)r[a].style.backgroundColor=o;var s=L(),u=Q(),l=Y().querySelector("#"+H.content),c=ee(),d=X(),p=G(),f=ne(),m=te();if(i.titleText?u.innerText=i.titleText:i.title&&(u.innerHTML=i.title.split("\n").join("<br />")),"string"==typeof i.backdrop?L().style.background=i.backdrop:i.backdrop||W([document.documentElement,document.body],H["no-backdrop"]),i.html?re(i.html,l):i.text?(l.textContent=i.text,U(l)):K(l),i.position in H?W(s,H[i.position]):(S('The "position" parameter is not valid, defaulting to "center"'),W(s,H.center)),i.grow&&"string"==typeof i.grow){var h="grow-"+i.grow;h in H&&W(s,H[h])}"function"==typeof i.animation&&(i.animation=i.animation.call()),i.showCloseButton?(f.setAttribute("aria-label",i.closeButtonAriaLabel),U(f)):K(f),e.className=H.popup,i.toast?(W([document.documentElement,document.body],H["toast-shown"]),W(e,H.toast)):W(e,H.modal),i.customClass&&W(e,i.customClass);var v=J(),b=parseInt(null===i.currentProgressStep?le.getQueueStep():i.currentProgressStep,10);i.progressSteps&&i.progressSteps.length?(U(v),function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(v),b>=i.progressSteps.length&&S("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.progressSteps.forEach(function(e,t){var n=document.createElement("li");if(W(n,H.progresscircle),n.innerHTML=e,t===b&&W(n,H.activeprogressstep),v.appendChild(n),t!==i.progressSteps.length-1){var o=document.createElement("li");W(o,H.progressline),i.progressStepsDistance&&(o.style.width=i.progressStepsDistance),v.appendChild(o)}})):K(v);for(var g=Z().querySelectorAll("."+H.icon),y=0;y<g.length;y++)K(g[y]);if(i.type){var w=!1;for(var C in P)if(i.type===C){w=!0;break}if(!w)return R("Unknown alert type: "+i.type);var x=e.querySelector("."+H.icon+"."+P[i.type]);U(x),i.animation&&W(x,"swal2-animate-"+i.type+"-icon")}var k,B,A=$();if(i.imageUrl?(A.setAttribute("src",i.imageUrl),A.setAttribute("alt",i.imageAlt),U(A),i.imageWidth?A.setAttribute("width",i.imageWidth):A.removeAttribute("width"),i.imageHeight?A.setAttribute("height",i.imageHeight):A.removeAttribute("height"),A.className=H.image,i.imageClass&&W(A,i.imageClass)):K(A),i.showCancelButton?p.style.display="inline-block":K(p),i.showConfirmButton?(B="display",(k=d).style.removeProperty?k.style.removeProperty(B):k.style.removeAttribute(B)):K(d),i.showConfirmButton||i.showCancelButton?U(c):K(c),d.innerHTML=i.confirmButtonText,p.innerHTML=i.cancelButtonText,d.setAttribute("aria-label",i.confirmButtonAriaLabel),p.setAttribute("aria-label",i.cancelButtonAriaLabel),d.className=H.confirm,W(d,i.confirmButtonClass),p.className=H.cancel,W(p,i.cancelButtonClass),i.buttonsStyling){W([d,p],H.styled),i.confirmButtonColor&&(d.style.backgroundColor=i.confirmButtonColor),i.cancelButtonColor&&(p.style.backgroundColor=i.cancelButtonColor);var E=window.getComputedStyle(d).getPropertyValue("background-color");d.style.borderLeftColor=E,d.style.borderRightColor=E}else O([d,p],H.styled),d.style.backgroundColor=d.style.borderLeftColor=d.style.borderRightColor="",p.style.backgroundColor=p.style.borderLeftColor=p.style.borderRightColor="";re(i.footer,m),!0===i.animation?O(e,H.noanimation):W(e,H.noanimation),i.showLoaderOnConfirm&&!i.preConfirm&&S("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request")}(j),Object.freeze(j);var _=this._domCache={popup:Z(),container:L(),content:Y(),actions:ee(),confirmButton:X(),cancelButton:G(),closeButton:ne(),validationError:p(H.validationerror),progressSteps:J()},V=this.constructor;return new Promise(function(t,n){var o=function(e){V.closePopup(j.onClose,j.onAfterClose),j.useRejections?t(e):t({value:e})},l=function(e){V.closePopup(j.onClose,j.onAfterClose),j.useRejections?n(e):t({dismiss:e})},c=function(e){V.closePopup(j.onClose,j.onAfterClose),n(e)};j.timer&&(_.popup.timeout=setTimeout(function(){return l("timer")},j.timer)),j.input&&setTimeout(function(){var e=T.getInput();e&&M(e)},0);for(var d=function(t){if(j.showLoaderOnConfirm&&V.showLoading(),j.preConfirm){T.resetValidationError();var e=Promise.resolve().then(function(){return j.preConfirm(t,j.extraParams)});j.expectRejections?e.then(function(e){return o(e||t)},function(e){T.hideLoading(),e&&T.showValidationError(e)}):e.then(function(e){F(_.validationError)||!1===e?T.hideLoading():o(e||t)},function(e){return c(e)})}else o(t)},e=function(e){var t=e||window.event,n=t.target||t.srcElement,o=_.confirmButton,i=_.cancelButton,r=o&&(o===n||o.contains(n)),a=i&&(i===n||i.contains(n));switch(t.type){case"click":if(r&&V.isVisible())if(T.disableButtons(),j.input){var s=function(){var e=T.getInput();if(!e)return null;switch(j.input){case"checkbox":return e.checked?1:0;case"radio":return e.checked?e.value:null;case"file":return e.files.length?e.files[0]:null;default:return j.inputAutoTrim?e.value.trim():e.value}}();if(j.inputValidator){T.disableInput();var u=Promise.resolve().then(function(){return j.inputValidator(s,j.extraParams)});j.expectRejections?u.then(function(){T.enableButtons(),T.enableInput(),d(s)},function(e){T.enableButtons(),T.enableInput(),e&&T.showValidationError(e)}):u.then(function(e){T.enableButtons(),T.enableInput(),e?T.showValidationError(e):d(s)},function(e){return c(e)})}else d(s)}else d(!0);else a&&V.isVisible()&&(T.disableButtons(),l(V.DismissReason.cancel))}},i=_.popup.querySelectorAll("button"),r=0;r<i.length;r++)i[r].onclick=e,i[r].onmouseover=e,i[r].onmouseout=e,i[r].onmousedown=e;if(_.closeButton.onclick=function(){l(V.DismissReason.close)},j.toast)_.popup.onclick=function(e){j.showConfirmButton||j.showCancelButton||j.showCloseButton||j.input||(V.closePopup(j.onClose,j.onAfterClose),l(V.DismissReason.close))};else{var a=!1;_.popup.onmousedown=function(){_.container.onmouseup=function(e){_.container.onmouseup=void 0,e.target===_.container&&(a=!0)}},_.container.onmousedown=function(){_.popup.onmouseup=function(e){_.popup.onmouseup=void 0,(e.target===_.popup||_.popup.contains(e.target))&&(a=!0)}},_.container.onclick=function(e){a?a=!1:e.target===_.container&&D(j.allowOutsideClick)&&l(V.DismissReason.backdrop)}}j.reverseButtons?_.confirmButton.parentNode.insertBefore(_.cancelButton,_.confirmButton):_.confirmButton.parentNode.insertBefore(_.confirmButton,_.cancelButton);var s=function(e,t){for(var n=oe(j.focusCancel),o=0;o<n.length;o++){(e+=t)===n.length?e=0:-1===e&&(e=n.length-1);var i=n[e];if(F(i))return i.focus()}};j.toast&&ae.windowOnkeydownOverridden&&(window.onkeydown=ae.previousWindowKeyDown,ae.windowOnkeydownOverridden=!1),j.toast||ae.windowOnkeydownOverridden||(ae.previousWindowKeyDown=window.onkeydown,ae.windowOnkeydownOverridden=!0,window.onkeydown=function(e){var t=e||window.event;if("Enter"!==t.key||t.isComposing)if("Tab"===t.key){for(var n=t.target||t.srcElement,o=oe(j.focusCancel),i=-1,r=0;r<o.length;r++)if(n===o[r]){i=r;break}t.shiftKey?s(i,-1):s(i,1),t.stopPropagation(),t.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(t.key)?document.activeElement===_.confirmButton&&F(_.cancelButton)?_.cancelButton.focus():document.activeElement===_.cancelButton&&F(_.confirmButton)&&_.confirmButton.focus():"Escape"!==t.key&&"Esc"!==t.key||!0!==D(j.allowEscapeKey)||l(V.DismissReason.esc);else if(t.target===T.getInput()){if(-1!==["textarea","file"].indexOf(j.input))return;V.clickConfirm(),t.preventDefault()}}),T.enableButtons(),T.hideLoading(),T.resetValidationError(),j.input&&W(document.body,H["has-input"]);for(var u=["input","file","range","select","radio","checkbox","textarea"],p=void 0,f=0;f<u.length;f++){var m=H[u[f]],h=z(_.content,m);if(p=T.getInput(u[f])){for(var v in p.attributes)if(p.attributes.hasOwnProperty(v)){var b=p.attributes[v].name;"type"!==b&&"value"!==b&&p.removeAttribute(b)}for(var g in j.inputAttributes)p.setAttribute(g,j.inputAttributes[g])}h.className=m,j.inputClass&&W(h,j.inputClass),K(h)}var y=void 0;switch(j.input){case"text":case"email":case"password":case"number":case"tel":case"url":(p=z(_.content,H.input)).value=j.inputValue,p.placeholder=j.inputPlaceholder,p.type=j.input,U(p);break;case"file":(p=z(_.content,H.file)).placeholder=j.inputPlaceholder,p.type=j.input,U(p);break;case"range":var w=z(_.content,H.range),C=w.querySelector("input"),x=w.querySelector("output");C.value=j.inputValue,C.type=j.input,x.value=j.inputValue,U(w);break;case"select":var k=z(_.content,H.select);if(k.innerHTML="",j.inputPlaceholder){var B=document.createElement("option");B.innerHTML=j.inputPlaceholder,B.value="",B.disabled=!0,B.selected=!0,k.appendChild(B)}y=function(e){e.forEach(function(e){var t=I(e,2),n=t[0],o=t[1],i=document.createElement("option");i.value=n,i.innerHTML=o,j.inputValue.toString()===n.toString()&&(i.selected=!0),k.appendChild(i)}),U(k),k.focus()};break;case"radio":var A=z(_.content,H.radio);A.innerHTML="",y=function(e){e.forEach(function(e){var t=I(e,2),n=t[0],o=t[1],i=document.createElement("input"),r=document.createElement("label");i.type="radio",i.name=H.radio,i.value=n,j.inputValue.toString()===n.toString()&&(i.checked=!0),r.innerHTML=o,r.insertBefore(i,r.firstChild),A.appendChild(r)}),U(A);var t=A.querySelectorAll("input");t.length&&t[0].focus()};break;case"checkbox":var E=z(_.content,H.checkbox),S=T.getInput("checkbox");S.type="checkbox",S.value=1,S.id=H.checkbox,S.checked=Boolean(j.inputValue);var P=E.getElementsByTagName("span");P.length&&E.removeChild(P[0]),(P=document.createElement("span")).innerHTML=j.inputPlaceholder,E.appendChild(P),U(E);break;case"textarea":var O=z(_.content,H.textarea);O.value=j.inputValue,O.placeholder=j.inputPlaceholder,U(O);break;case null:break;default:R('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'+j.input+'"')}if("select"===j.input||"radio"===j.input){var L=function(e){return y((n=[],(t=e)instanceof Map?t.forEach(function(e,t){n.push([t,e])}):Object.keys(t).forEach(function(e){n.push([e,t[e]])}),n));var t,n};N(j.inputOptions)?(V.showLoading(),j.inputOptions.then(function(e){T.hideLoading(),L(e)})):"object"===q(j.inputOptions)?L(j.inputOptions):R("Unexpected type of inputOptions! Expected object, Map or Promise, got "+q(j.inputOptions))}else-1!==["text","email","number","tel","textarea"].indexOf(j.input)&&N(j.inputValue)&&(V.showLoading(),K(p),j.inputValue.then(function(e){p.value="number"===j.input?parseFloat(e)||0:e+"",U(p),T.hideLoading()}).catch(function(e){R("Error in inputValue promise: "+e),p.value="",U(p),T.hideLoading()}));ue(j.animation,j.onBeforeOpen,j.onOpen),j.toast||(D(j.allowEnterKey)?j.focusCancel&&F(_.cancelButton)?_.cancelButton.focus():j.focusConfirm&&F(_.confirmButton)?_.confirmButton.focus():s(-1,1):document.activeElement&&document.activeElement.blur()),_.container.scrollTop=0})}}),j=void 0;function le(){if("undefined"!=typeof window){"undefined"==typeof Promise&&R("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===t[0])return R("SweetAlert2 expects at least 1 attribute!"),!1;if(!(this instanceof le))return new(Function.prototype.bind.apply(le,[null].concat(t)));(j=this)._promise=this._main(this.constructor.argsToParams(t))}}return le.prototype.then=function(e,t){return this._promise.then(e,t)},le.prototype.catch=function(e){return this._promise.catch(e)},le.prototype.finally=function(e){return this._promise.finally(e)},r(le.prototype,T),r(le,A),Object.keys(T).forEach(function(t){le[t]=function(){var e;if(j)return(e=j)[t].apply(e,arguments)}}),le.DismissReason=e,le.noop=function(){},le.version="7.18.0",le.default=le,"undefined"!=typeof window&&"object"===q(window._swalDefaults)&&le.setDefaults(window._swalDefaults),le}),"undefined"!=typeof window&&window.Sweetalert2&&(window.swal=window.sweetAlert=window.Swal=window.SweetAlert=window.Sweetalert2);
// -----------------------------------------------------------------------------
// Title: SweetAlert Demos
// Location: components.sweetalert2.html
// Dependency File(s): assets/vendor/sweetalert2/dist/sweetalert2.min.js
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
  "use strict";
  $(function() {

    //== SweetAlert Demo 1
    $('#sweetalert_demo_1').on('click', function(e) {
      swal('Good job!');
    });
    //== SweetAlert Demo 2
    $('#sweetalert_demo_2').on('click', function(e) {
      swal(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
    });
    //== SweetAlert Demo 3
    $('#sweetalert_demo_3').on('click', function(e) {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>',
      })
    });
    //== SweetAlert Demo 4
    $('#sweetalert_demo_4').on('click', function(e) {
      swal({
        imageUrl: '../assets/img/demos/sweetalert_demo_4.jpg',
        imageHeight: 1512,
        imageAlt: 'A tall image'
      })
    });
    //== SweetAlert Demo 5
    $('#sweetalert_demo_5').on('click', function(e) {
      swal({
        title: '<i>HTML</i> <u>example</u>',
        type: 'info',
        html: 'You can use <b>bold text</b>, ' +
          '<a href="//github.com">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="zmdi zmdi-thumb-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText: '<i class="zmdi zmdi-thumb-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down',
      })
    });
    //== SweetAlert Demo 6
    $('#sweetalert_demo_6').on('click', function(e) {
      swal({
        position: 'top-end',
        type: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    });
    //== SweetAlert Demo 7
    $('#sweetalert_demo_7').on('click', function(e) {
      swal({
        title: 'Custom animation with Animate.css',
        animation: false,
        customClass: 'animated tada'
      })
    });
    //== SweetAlert Demo 8
    $('#sweetalert_demo_8').on('click', function(e) {
      swal({
        title: 'Estas seguro?',
        text: "Se agregara 1bs a tu cuenta",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, lo quiero'
      }).then((result) => {
        if (result.value) {
          swal(
            'Agregado!',
            'Tu cancion sonara en breve.',
            'success'
          )
        }
      })
    });
    //== SweetAlert Demo 9
    $('#sweetalert_demo_9').on('click', function(e) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false,
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.cancel
        ) {
          swal(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
    });
    //== SweetAlert Demo 10
    $('#sweetalert_demo_10').on('click', function(e) {
      swal({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false
      })
    });
    //== SweetAlert Demo 11
    $('#sweetalert_demo_11').on('click', function(e) {
      swal({
        title: 'Auto close alert!',
        text: 'I will close in 5 seconds.',
        timer: 5000,
        onOpen: () => {
          swal.showLoading()
        }
      }).then((result) => {
        if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.timer
        ) {
          console.log('I was closed by the timer')
        }
      })
    });
    $('#sweetalert_ui-blocking-demo-1').on('click', function(e) {
      swal('Good job!');
    });
    $('#sweetalert_ui-blocking-demo-2').on('click', function(e) {
      swal('Good job!');
    });

  });

})(window, document, window.jQuery);


(function(window, document, $, undefined) {
  "use strict";
    $(function() {
			if ($('.switch-primary').length > 0) {
				var elems = Array.prototype.slice.call($('.switch-primary'));
				elems.forEach(function(html) {
					var switchery = new Switchery(html, {
						color: QuantumPro.APP_COLORS.primary,
						secondaryColor: QuantumPro.APP_COLORS.grey200
					});
				});
			};
			if ($('.switch-accent').length > 0) {
				var elems = Array.prototype.slice.call($('.switch-accent'));
				elems.forEach(function(html) {
					var switchery = new Switchery(html, {
						color: QuantumPro.APP_COLORS.accent,
						secondaryColor: QuantumPro.APP_COLORS.grey200
					});
				});
			};
			if ($('.switch-secondary').length > 0) {
				var elems = Array.prototype.slice.call($('.switch-secondary'));
				elems.forEach(function(html) {
					var switchery = new Switchery(html, {
						color: QuantumPro.APP_COLORS.secondary,
						secondaryColor: QuantumPro.APP_COLORS.grey200
					});
				});
			};
			if ($('.switch-success').length > 0) {
				var elems = Array.prototype.slice.call($('.switch-success'));
				elems.forEach(function(html) {
					var switchery = new Switchery(html, {
						color: QuantumPro.APP_COLORS.success,
						secondaryColor: QuantumPro.APP_COLORS.grey200
					});
				});
			};

			if ($('.switch-info').length > 0) {
				var elems = Array.prototype.slice.call($('.switch-info'));
				elems.forEach(function(html) {
					var switchery = new Switchery(html, {
						color: QuantumPro.APP_COLORS.info,
						secondaryColor: QuantumPro.APP_COLORS.grey200
					});
				});
			};
			if ($('.switch-warning').length > 0) {
				var elems = Array.prototype.slice.call($('.switch-warning'));
				elems.forEach(function(html) {
					var switchery = new Switchery(html, {
						color: QuantumPro.APP_COLORS.warning,
						secondaryColor: QuantumPro.APP_COLORS.grey200
					});
				});
			};
			if ($('.switch-danger').length > 0) {
				var elems = Array.prototype.slice.call($('.switch-danger'));
				elems.forEach(function(html) {
					var switchery = new Switchery(html, {
						color: QuantumPro.APP_COLORS.danger,
						secondaryColor: QuantumPro.APP_COLORS.grey200
					});
				});
			};
    });

})(window, document, window.jQuery);

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

// The Emitter class provides the ability to call `.on()` on Dropzone to listen
// to events.
// It is strongly based on component's emitter class, and I removed the
// functionality because of the dependency hell with different frameworks.
var Emitter = function () {
  function Emitter() {
    _classCallCheck(this, Emitter);
  }

  _createClass(Emitter, [{
    key: "on",

    // Add an event listener for given event
    value: function on(event, fn) {
      this._callbacks = this._callbacks || {};
      // Create namespace for this event
      if (!this._callbacks[event]) {
        this._callbacks[event] = [];
      }
      this._callbacks[event].push(fn);
      return this;
    }
  }, {
    key: "emit",
    value: function emit(event) {
      this._callbacks = this._callbacks || {};
      var callbacks = this._callbacks[event];

      if (callbacks) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        for (var _iterator = callbacks, _isArray = true, _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var callback = _ref;

          callback.apply(this, args);
        }
      }

      return this;
    }

    // Remove event listener for given event. If fn is not provided, all event
    // listeners for that event will be removed. If neither is provided, all
    // event listeners will be removed.

  }, {
    key: "off",
    value: function off(event, fn) {
      if (!this._callbacks || arguments.length === 0) {
        this._callbacks = {};
        return this;
      }

      // specific event
      var callbacks = this._callbacks[event];
      if (!callbacks) {
        return this;
      }

      // remove all handlers
      if (arguments.length === 1) {
        delete this._callbacks[event];
        return this;
      }

      // remove specific handler
      for (var i = 0; i < callbacks.length; i++) {
        var callback = callbacks[i];
        if (callback === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }

      return this;
    }
  }]);

  return Emitter;
}();

var Dropzone = function (_Emitter) {
  _inherits(Dropzone, _Emitter);

  _createClass(Dropzone, null, [{
    key: "initClass",
    value: function initClass() {

      // Exposing the emitter class, mainly for tests
      this.prototype.Emitter = Emitter;

      /*
       This is a list of all available events you can register on a dropzone object.
        You can register an event handler like this:
        dropzone.on("dragEnter", function() { });
        */
      this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];

      this.prototype.defaultOptions = {
        /**
         * Has to be specified on elements other than form (or when the form
         * doesn't have an `action` attribute). You can also
         * provide a function that will be called with `files` and
         * must return the url (since `v3.12.0`)
         */
        url: null,

        /**
         * Can be changed to `"put"` if necessary. You can also provide a function
         * that will be called with `files` and must return the method (since `v3.12.0`).
         */
        method: "post",

        /**
         * Will be set on the XHRequest.
         */
        withCredentials: false,

        /**
         * The timeout for the XHR requests in milliseconds (since `v4.4.0`).
         */
        timeout: 30000,

        /**
         * How many file uploads to process in parallel (See the
         * Enqueuing file uploads* documentation section for more info)
         */
        parallelUploads: 2,

        /**
         * Whether to send multiple files in one request. If
         * this it set to true, then the fallback file input element will
         * have the `multiple` attribute as well. This option will
         * also trigger additional events (like `processingmultiple`). See the events
         * documentation section for more information.
         */
        uploadMultiple: false,

        /**
         * Whether you want files to be uploaded in chunks to your server. This can't be
         * used in combination with `uploadMultiple`.
         *
         * See [chunksUploaded](#config-chunksUploaded) for the callback to finalise an upload.
         */
        chunking: false,

        /**
         * If `chunking` is enabled, this defines whether **every** file should be chunked,
         * even if the file size is below chunkSize. This means, that the additional chunk
         * form data will be submitted and the `chunksUploaded` callback will be invoked.
         */
        forceChunking: false,

        /**
         * If `chunking` is `true`, then this defines the chunk size in bytes.
         */
        chunkSize: 2000000,

        /**
         * If `true`, the individual chunks of a file are being uploaded simultaneously.
         */
        parallelChunkUploads: false,

        /**
         * Whether a chunk should be retried if it fails.
         */
        retryChunks: false,

        /**
         * If `retryChunks` is true, how many times should it be retried.
         */
        retryChunksLimit: 3,

        /**
         * If not `null` defines how many files this Dropzone handles. If it exceeds,
         * the event `maxfilesexceeded` will be called. The dropzone element gets the
         * class `dz-max-files-reached` accordingly so you can provide visual feedback.
         */
        maxFilesize: 256,

        /**
         * The name of the file param that gets transferred.
         * **NOTE**: If you have the option  `uploadMultiple` set to `true`, then
         * Dropzone will append `[]` to the name.
         */
        paramName: "file",

        /**
         * Whether thumbnails for images should be generated
         */
        createImageThumbnails: true,

        /**
         * In MB. When the filename exceeds this limit, the thumbnail will not be generated.
         */
        maxThumbnailFilesize: 10,

        /**
         * If `null`, the ratio of the image will be used to calculate it.
         */
        thumbnailWidth: 120,

        /**
         * The same as `thumbnailWidth`. If both are null, images will not be resized.
         */
        thumbnailHeight: 120,

        /**
         * How the images should be scaled down in case both, `thumbnailWidth` and `thumbnailHeight` are provided.
         * Can be either `contain` or `crop`.
         */
        thumbnailMethod: 'crop',

        /**
         * If set, images will be resized to these dimensions before being **uploaded**.
         * If only one, `resizeWidth` **or** `resizeHeight` is provided, the original aspect
         * ratio of the file will be preserved.
         *
         * The `options.transformFile` function uses these options, so if the `transformFile` function
         * is overridden, these options don't do anything.
         */
        resizeWidth: null,

        /**
         * See `resizeWidth`.
         */
        resizeHeight: null,

        /**
         * The mime type of the resized image (before it gets uploaded to the server).
         * If `null` the original mime type will be used. To force jpeg, for example, use `image/jpeg`.
         * See `resizeWidth` for more information.
         */
        resizeMimeType: null,

        /**
         * The quality of the resized images. See `resizeWidth`.
         */
        resizeQuality: 0.8,

        /**
         * How the images should be scaled down in case both, `resizeWidth` and `resizeHeight` are provided.
         * Can be either `contain` or `crop`.
         */
        resizeMethod: 'contain',

        /**
         * The base that is used to calculate the filesize. You can change this to
         * 1024 if you would rather display kibibytes, mebibytes, etc...
         * 1024 is technically incorrect, because `1024 bytes` are `1 kibibyte` not `1 kilobyte`.
         * You can change this to `1024` if you don't care about validity.
         */
        filesizeBase: 1000,

        /**
         * Can be used to limit the maximum number of files that will be handled by this Dropzone
         */
        maxFiles: null,

        /**
         * An optional object to send additional headers to the server. Eg:
         * `{ "My-Awesome-Header": "header value" }`
         */
        headers: null,

        /**
         * If `true`, the dropzone element itself will be clickable, if `false`
         * nothing will be clickable.
         *
         * You can also pass an HTML element, a CSS selector (for multiple elements)
         * or an array of those. In that case, all of those elements will trigger an
         * upload when clicked.
         */
        clickable: true,

        /**
         * Whether hidden files in directories should be ignored.
         */
        ignoreHiddenFiles: true,

        /**
         * The default implementation of `accept` checks the file's mime type or
         * extension against this list. This is a comma separated list of mime
         * types or file extensions.
         *
         * Eg.: `image/*,application/pdf,.psd`
         *
         * If the Dropzone is `clickable` this option will also be used as
         * [`accept`](https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept)
         * parameter on the hidden file input as well.
         */
        acceptedFiles: null,

        /**
         * **Deprecated!**
         * Use acceptedFiles instead.
         */
        acceptedMimeTypes: null,

        /**
         * If false, files will be added to the queue but the queue will not be
         * processed automatically.
         * This can be useful if you need some additional user input before sending
         * files (or if you want want all files sent at once).
         * If you're ready to send the file simply call `myDropzone.processQueue()`.
         *
         * See the [enqueuing file uploads](#enqueuing-file-uploads) documentation
         * section for more information.
         */
        autoProcessQueue: true,

        /**
         * If false, files added to the dropzone will not be queued by default.
         * You'll have to call `enqueueFile(file)` manually.
         */
        autoQueue: true,

        /**
         * If `true`, this will add a link to every file preview to remove or cancel (if
         * already uploading) the file. The `dictCancelUpload`, `dictCancelUploadConfirmation`
         * and `dictRemoveFile` options are used for the wording.
         */
        addRemoveLinks: false,

        /**
         * Defines where to display the file previews – if `null` the
         * Dropzone element itself is used. Can be a plain `HTMLElement` or a CSS
         * selector. The element should have the `dropzone-previews` class so
         * the previews are displayed properly.
         */
        previewsContainer: null,

        /**
         * This is the element the hidden input field (which is used when clicking on the
         * dropzone to trigger file selection) will be appended to. This might
         * be important in case you use frameworks to switch the content of your page.
         */
        hiddenInputContainer: "body",

        /**
         * If null, no capture type will be specified
         * If camera, mobile devices will skip the file selection and choose camera
         * If microphone, mobile devices will skip the file selection and choose the microphone
         * If camcorder, mobile devices will skip the file selection and choose the camera in video mode
         * On apple devices multiple must be set to false.  AcceptedFiles may need to
         * be set to an appropriate mime type (e.g. "image/*", "audio/*", or "video/*").
         */
        capture: null,

        /**
         * **Deprecated**. Use `renameFile` instead.
         */
        renameFilename: null,

        /**
         * A function that is invoked before the file is uploaded to the server and renames the file.
         * This function gets the `File` as argument and can use the `file.name`. The actual name of the
         * file that gets used during the upload can be accessed through `file.upload.filename`.
         */
        renameFile: null,

        /**
         * If `true` the fallback will be forced. This is very useful to test your server
         * implementations first and make sure that everything works as
         * expected without dropzone if you experience problems, and to test
         * how your fallbacks will look.
         */
        forceFallback: false,

        /**
         * The text used before any files are dropped.
         */
        dictDefaultMessage: "Drop files here to upload",

        /**
         * The text that replaces the default message text it the browser is not supported.
         */
        dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",

        /**
         * The text that will be added before the fallback form.
         * If you provide a  fallback element yourself, or if this option is `null` this will
         * be ignored.
         */
        dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",

        /**
         * If the filesize is too big.
         * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
         */
        dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",

        /**
         * If the file doesn't match the file type.
         */
        dictInvalidFileType: "You can't upload files of this type.",

        /**
         * If the server response was invalid.
         * `{{statusCode}}` will be replaced with the servers status code.
         */
        dictResponseError: "Server responded with {{statusCode}} code.",

        /**
         * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
         */
        dictCancelUpload: "Cancel upload",

        /**
         * The text that is displayed if an upload was manually canceled
         */
        dictUploadCanceled: "Upload canceled.",

        /**
         * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
         */
        dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",

        /**
         * If `addRemoveLinks` is true, the text to be used to remove a file.
         */
        dictRemoveFile: "Remove file",

        /**
         * If this is not null, then the user will be prompted before removing a file.
         */
        dictRemoveFileConfirmation: null,

        /**
         * Displayed if `maxFiles` is st and exceeded.
         * The string `{{maxFiles}}` will be replaced by the configuration value.
         */
        dictMaxFilesExceeded: "You can not upload any more files.",

        /**
         * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
         * `b` for bytes.
         */
        dictFileSizeUnits: { tb: "TB", gb: "GB", mb: "MB", kb: "KB", b: "b" },
        /**
         * Called when dropzone initialized
         * You can add event listeners here
         */
        init: function init() {},


        /**
         * Can be an **object** of additional parameters to transfer to the server, **or** a `Function`
         * that gets invoked with the `files`, `xhr` and, if it's a chunked upload, `chunk` arguments. In case
         * of a function, this needs to return a map.
         *
         * The default implementation does nothing for normal uploads, but adds relevant information for
         * chunked uploads.
         *
         * This is the same as adding hidden input fields in the form element.
         */
        params: function params(files, xhr, chunk) {
          if (chunk) {
            return {
              dzuuid: chunk.file.upload.uuid,
              dzchunkindex: chunk.index,
              dztotalfilesize: chunk.file.size,
              dzchunksize: this.options.chunkSize,
              dztotalchunkcount: chunk.file.upload.totalChunkCount,
              dzchunkbyteoffset: chunk.index * this.options.chunkSize
            };
          }
        },


        /**
         * A function that gets a [file](https://developer.mozilla.org/en-US/docs/DOM/File)
         * and a `done` function as parameters.
         *
         * If the done function is invoked without arguments, the file is "accepted" and will
         * be processed. If you pass an error message, the file is rejected, and the error
         * message will be displayed.
         * This function will not be called if the file is too big or doesn't match the mime types.
         */
        accept: function accept(file, done) {
          return done();
        },


        /**
         * The callback that will be invoked when all chunks have been uploaded for a file.
         * It gets the file for which the chunks have been uploaded as the first parameter,
         * and the `done` function as second. `done()` needs to be invoked when everything
         * needed to finish the upload process is done.
         */
        chunksUploaded: function chunksUploaded(file, done) {
          done();
        },

        /**
         * Gets called when the browser is not supported.
         * The default implementation shows the fallback input field and adds
         * a text.
         */
        fallback: function fallback() {
          // This code should pass in IE7... :(
          var messageElement = void 0;
          this.element.className = this.element.className + " dz-browser-not-supported";

          for (var _iterator2 = this.element.getElementsByTagName("div"), _isArray2 = true, _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref2;

            if (_isArray2) {
              if (_i2 >= _iterator2.length) break;
              _ref2 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done) break;
              _ref2 = _i2.value;
            }

            var child = _ref2;

            if (/(^| )dz-message($| )/.test(child.className)) {
              messageElement = child;
              child.className = "dz-message"; // Removes the 'dz-default' class
              break;
            }
          }
          if (!messageElement) {
            messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
            this.element.appendChild(messageElement);
          }

          var span = messageElement.getElementsByTagName("span")[0];
          if (span) {
            if (span.textContent != null) {
              span.textContent = this.options.dictFallbackMessage;
            } else if (span.innerText != null) {
              span.innerText = this.options.dictFallbackMessage;
            }
          }

          return this.element.appendChild(this.getFallbackForm());
        },


        /**
         * Gets called to calculate the thumbnail dimensions.
         *
         * It gets `file`, `width` and `height` (both may be `null`) as parameters and must return an object containing:
         *
         *  - `srcWidth` & `srcHeight` (required)
         *  - `trgWidth` & `trgHeight` (required)
         *  - `srcX` & `srcY` (optional, default `0`)
         *  - `trgX` & `trgY` (optional, default `0`)
         *
         * Those values are going to be used by `ctx.drawImage()`.
         */
        resize: function resize(file, width, height, resizeMethod) {
          var info = {
            srcX: 0,
            srcY: 0,
            srcWidth: file.width,
            srcHeight: file.height
          };

          var srcRatio = file.width / file.height;

          // Automatically calculate dimensions if not specified
          if (width == null && height == null) {
            width = info.srcWidth;
            height = info.srcHeight;
          } else if (width == null) {
            width = height * srcRatio;
          } else if (height == null) {
            height = width / srcRatio;
          }

          // Make sure images aren't upscaled
          width = Math.min(width, info.srcWidth);
          height = Math.min(height, info.srcHeight);

          var trgRatio = width / height;

          if (info.srcWidth > width || info.srcHeight > height) {
            // Image is bigger and needs rescaling
            if (resizeMethod === 'crop') {
              if (srcRatio > trgRatio) {
                info.srcHeight = file.height;
                info.srcWidth = info.srcHeight * trgRatio;
              } else {
                info.srcWidth = file.width;
                info.srcHeight = info.srcWidth / trgRatio;
              }
            } else if (resizeMethod === 'contain') {
              // Method 'contain'
              if (srcRatio > trgRatio) {
                height = width / srcRatio;
              } else {
                width = height * srcRatio;
              }
            } else {
              throw new Error("Unknown resizeMethod '" + resizeMethod + "'");
            }
          }

          info.srcX = (file.width - info.srcWidth) / 2;
          info.srcY = (file.height - info.srcHeight) / 2;

          info.trgWidth = width;
          info.trgHeight = height;

          return info;
        },


        /**
         * Can be used to transform the file (for example, resize an image if necessary).
         *
         * The default implementation uses `resizeWidth` and `resizeHeight` (if provided) and resizes
         * images according to those dimensions.
         *
         * Gets the `file` as the first parameter, and a `done()` function as the second, that needs
         * to be invoked with the file when the transformation is done.
         */
        transformFile: function transformFile(file, done) {
          if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {
            return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
          } else {
            return done(file);
          }
        },


        /**
         * A string that contains the template used for each dropped
         * file. Change it to fulfill your needs but make sure to properly
         * provide all elements.
         *
         * If you want to use an actual HTML element instead of providing a String
         * as a config option, you could create a div with the id `tpl`,
         * put the template inside it and provide the element like this:
         *
         *     document
         *       .querySelector('#tpl')
         *       .innerHTML
         *
         */
        previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>",

        // END OPTIONS
        // (Required by the dropzone documentation parser)


        /*
         Those functions register themselves to the events on init and handle all
         the user interface specific stuff. Overwriting them won't break the upload
         but can break the way it's displayed.
         You can overwrite them if you don't like the default behavior. If you just
         want to add an additional event handler, register it on the dropzone object
         and don't overwrite those options.
         */

        // Those are self explanatory and simply concern the DragnDrop.
        drop: function drop(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragstart: function dragstart(e) {},
        dragend: function dragend(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragenter: function dragenter(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragover: function dragover(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragleave: function dragleave(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        paste: function paste(e) {},


        // Called whenever there are no files left in the dropzone anymore, and the
        // dropzone should be displayed as if in the initial state.
        reset: function reset() {
          return this.element.classList.remove("dz-started");
        },


        // Called when a file is added to the queue
        // Receives `file`
        addedfile: function addedfile(file) {
          var _this2 = this;

          if (this.element === this.previewsContainer) {
            this.element.classList.add("dz-started");
          }

          if (this.previewsContainer) {
            file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
            file.previewTemplate = file.previewElement; // Backwards compatibility

            this.previewsContainer.appendChild(file.previewElement);
            for (var _iterator3 = file.previewElement.querySelectorAll("[data-dz-name]"), _isArray3 = true, _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
              var _ref3;

              if (_isArray3) {
                if (_i3 >= _iterator3.length) break;
                _ref3 = _iterator3[_i3++];
              } else {
                _i3 = _iterator3.next();
                if (_i3.done) break;
                _ref3 = _i3.value;
              }

              var node = _ref3;

              node.textContent = file.name;
            }
            for (var _iterator4 = file.previewElement.querySelectorAll("[data-dz-size]"), _isArray4 = true, _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
              if (_isArray4) {
                if (_i4 >= _iterator4.length) break;
                node = _iterator4[_i4++];
              } else {
                _i4 = _iterator4.next();
                if (_i4.done) break;
                node = _i4.value;
              }

              node.innerHTML = this.filesize(file.size);
            }

            if (this.options.addRemoveLinks) {
              file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
              file.previewElement.appendChild(file._removeLink);
            }

            var removeFileEvent = function removeFileEvent(e) {
              e.preventDefault();
              e.stopPropagation();
              if (file.status === Dropzone.UPLOADING) {
                return Dropzone.confirm(_this2.options.dictCancelUploadConfirmation, function () {
                  return _this2.removeFile(file);
                });
              } else {
                if (_this2.options.dictRemoveFileConfirmation) {
                  return Dropzone.confirm(_this2.options.dictRemoveFileConfirmation, function () {
                    return _this2.removeFile(file);
                  });
                } else {
                  return _this2.removeFile(file);
                }
              }
            };

            for (var _iterator5 = file.previewElement.querySelectorAll("[data-dz-remove]"), _isArray5 = true, _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
              var _ref4;

              if (_isArray5) {
                if (_i5 >= _iterator5.length) break;
                _ref4 = _iterator5[_i5++];
              } else {
                _i5 = _iterator5.next();
                if (_i5.done) break;
                _ref4 = _i5.value;
              }

              var removeLink = _ref4;

              removeLink.addEventListener("click", removeFileEvent);
            }
          }
        },


        // Called whenever a file is removed.
        removedfile: function removedfile(file) {
          if (file.previewElement != null && file.previewElement.parentNode != null) {
            file.previewElement.parentNode.removeChild(file.previewElement);
          }
          return this._updateMaxFilesReachedClass();
        },


        // Called when a thumbnail has been generated
        // Receives `file` and `dataUrl`
        thumbnail: function thumbnail(file, dataUrl) {
          if (file.previewElement) {
            file.previewElement.classList.remove("dz-file-preview");
            for (var _iterator6 = file.previewElement.querySelectorAll("[data-dz-thumbnail]"), _isArray6 = true, _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
              var _ref5;

              if (_isArray6) {
                if (_i6 >= _iterator6.length) break;
                _ref5 = _iterator6[_i6++];
              } else {
                _i6 = _iterator6.next();
                if (_i6.done) break;
                _ref5 = _i6.value;
              }

              var thumbnailElement = _ref5;

              thumbnailElement.alt = file.name;
              thumbnailElement.src = dataUrl;
            }

            return setTimeout(function () {
              return file.previewElement.classList.add("dz-image-preview");
            }, 1);
          }
        },


        // Called whenever an error occurs
        // Receives `file` and `message`
        error: function error(file, message) {
          if (file.previewElement) {
            file.previewElement.classList.add("dz-error");
            if (typeof message !== "String" && message.error) {
              message = message.error;
            }
            for (var _iterator7 = file.previewElement.querySelectorAll("[data-dz-errormessage]"), _isArray7 = true, _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
              var _ref6;

              if (_isArray7) {
                if (_i7 >= _iterator7.length) break;
                _ref6 = _iterator7[_i7++];
              } else {
                _i7 = _iterator7.next();
                if (_i7.done) break;
                _ref6 = _i7.value;
              }

              var node = _ref6;

              node.textContent = message;
            }
          }
        },
        errormultiple: function errormultiple() {},


        // Called when a file gets processed. Since there is a cue, not all added
        // files are processed immediately.
        // Receives `file`
        processing: function processing(file) {
          if (file.previewElement) {
            file.previewElement.classList.add("dz-processing");
            if (file._removeLink) {
              return file._removeLink.textContent = this.options.dictCancelUpload;
            }
          }
        },
        processingmultiple: function processingmultiple() {},


        // Called whenever the upload progress gets updated.
        // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
        // To get the total number of bytes of the file, use `file.size`
        uploadprogress: function uploadprogress(file, progress, bytesSent) {
          if (file.previewElement) {
            for (var _iterator8 = file.previewElement.querySelectorAll("[data-dz-uploadprogress]"), _isArray8 = true, _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
              var _ref7;

              if (_isArray8) {
                if (_i8 >= _iterator8.length) break;
                _ref7 = _iterator8[_i8++];
              } else {
                _i8 = _iterator8.next();
                if (_i8.done) break;
                _ref7 = _i8.value;
              }

              var node = _ref7;

              node.nodeName === 'PROGRESS' ? node.value = progress : node.style.width = progress + "%";
            }
          }
        },


        // Called whenever the total upload progress gets updated.
        // Called with totalUploadProgress (0-100), totalBytes and totalBytesSent
        totaluploadprogress: function totaluploadprogress() {},


        // Called just before the file is sent. Gets the `xhr` object as second
        // parameter, so you can modify it (for example to add a CSRF token) and a
        // `formData` object to add additional information.
        sending: function sending() {},
        sendingmultiple: function sendingmultiple() {},


        // When the complete upload is finished and successful
        // Receives `file`
        success: function success(file) {
          if (file.previewElement) {
            return file.previewElement.classList.add("dz-success");
          }
        },
        successmultiple: function successmultiple() {},


        // When the upload is canceled.
        canceled: function canceled(file) {
          return this.emit("error", file, this.options.dictUploadCanceled);
        },
        canceledmultiple: function canceledmultiple() {},


        // When the upload is finished, either with success or an error.
        // Receives `file`
        complete: function complete(file) {
          if (file._removeLink) {
            file._removeLink.textContent = this.options.dictRemoveFile;
          }
          if (file.previewElement) {
            return file.previewElement.classList.add("dz-complete");
          }
        },
        completemultiple: function completemultiple() {},
        maxfilesexceeded: function maxfilesexceeded() {},
        maxfilesreached: function maxfilesreached() {},
        queuecomplete: function queuecomplete() {},
        addedfiles: function addedfiles() {}
      };

      this.prototype._thumbnailQueue = [];
      this.prototype._processingThumbnail = false;
    }

    // global utility

  }, {
    key: "extend",
    value: function extend(target) {
      for (var _len2 = arguments.length, objects = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        objects[_key2 - 1] = arguments[_key2];
      }

      for (var _iterator9 = objects, _isArray9 = true, _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
        var _ref8;

        if (_isArray9) {
          if (_i9 >= _iterator9.length) break;
          _ref8 = _iterator9[_i9++];
        } else {
          _i9 = _iterator9.next();
          if (_i9.done) break;
          _ref8 = _i9.value;
        }

        var object = _ref8;

        for (var key in object) {
          var val = object[key];
          target[key] = val;
        }
      }
      return target;
    }
  }]);

  function Dropzone(el, options) {
    _classCallCheck(this, Dropzone);

    var _this = _possibleConstructorReturn(this, (Dropzone.__proto__ || Object.getPrototypeOf(Dropzone)).call(this));

    var fallback = void 0,
        left = void 0;
    _this.element = el;
    // For backwards compatibility since the version was in the prototype previously
    _this.version = Dropzone.version;

    _this.defaultOptions.previewTemplate = _this.defaultOptions.previewTemplate.replace(/\n*/g, "");

    _this.clickableElements = [];
    _this.listeners = [];
    _this.files = []; // All files

    if (typeof _this.element === "string") {
      _this.element = document.querySelector(_this.element);
    }

    // Not checking if instance of HTMLElement or Element since IE9 is extremely weird.
    if (!_this.element || _this.element.nodeType == null) {
      throw new Error("Invalid dropzone element.");
    }

    if (_this.element.dropzone) {
      throw new Error("Dropzone already attached.");
    }

    // Now add this dropzone to the instances.
    Dropzone.instances.push(_this);

    // Put the dropzone inside the element itself.
    _this.element.dropzone = _this;

    var elementOptions = (left = Dropzone.optionsForElement(_this.element)) != null ? left : {};

    _this.options = Dropzone.extend({}, _this.defaultOptions, elementOptions, options != null ? options : {});

    // If the browser failed, just call the fallback and leave
    if (_this.options.forceFallback || !Dropzone.isBrowserSupported()) {
      var _ret;

      return _ret = _this.options.fallback.call(_this), _possibleConstructorReturn(_this, _ret);
    }

    // @options.url = @element.getAttribute "action" unless @options.url?
    if (_this.options.url == null) {
      _this.options.url = _this.element.getAttribute("action");
    }

    if (!_this.options.url) {
      throw new Error("No URL provided.");
    }

    if (_this.options.acceptedFiles && _this.options.acceptedMimeTypes) {
      throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
    }

    if (_this.options.uploadMultiple && _this.options.chunking) {
      throw new Error('You cannot set both: uploadMultiple and chunking.');
    }

    // Backwards compatibility
    if (_this.options.acceptedMimeTypes) {
      _this.options.acceptedFiles = _this.options.acceptedMimeTypes;
      delete _this.options.acceptedMimeTypes;
    }

    // Backwards compatibility
    if (_this.options.renameFilename != null) {
      _this.options.renameFile = function (file) {
        return _this.options.renameFilename.call(_this, file.name, file);
      };
    }

    _this.options.method = _this.options.method.toUpperCase();

    if ((fallback = _this.getExistingFallback()) && fallback.parentNode) {
      // Remove the fallback
      fallback.parentNode.removeChild(fallback);
    }

    // Display previews in the previewsContainer element or the Dropzone element unless explicitly set to false
    if (_this.options.previewsContainer !== false) {
      if (_this.options.previewsContainer) {
        _this.previewsContainer = Dropzone.getElement(_this.options.previewsContainer, "previewsContainer");
      } else {
        _this.previewsContainer = _this.element;
      }
    }

    if (_this.options.clickable) {
      if (_this.options.clickable === true) {
        _this.clickableElements = [_this.element];
      } else {
        _this.clickableElements = Dropzone.getElements(_this.options.clickable, "clickable");
      }
    }

    _this.init();
    return _this;
  }

  // Returns all files that have been accepted


  _createClass(Dropzone, [{
    key: "getAcceptedFiles",
    value: function getAcceptedFiles() {
      return this.files.filter(function (file) {
        return file.accepted;
      }).map(function (file) {
        return file;
      });
    }

    // Returns all files that have been rejected
    // Not sure when that's going to be useful, but added for completeness.

  }, {
    key: "getRejectedFiles",
    value: function getRejectedFiles() {
      return this.files.filter(function (file) {
        return !file.accepted;
      }).map(function (file) {
        return file;
      });
    }
  }, {
    key: "getFilesWithStatus",
    value: function getFilesWithStatus(status) {
      return this.files.filter(function (file) {
        return file.status === status;
      }).map(function (file) {
        return file;
      });
    }

    // Returns all files that are in the queue

  }, {
    key: "getQueuedFiles",
    value: function getQueuedFiles() {
      return this.getFilesWithStatus(Dropzone.QUEUED);
    }
  }, {
    key: "getUploadingFiles",
    value: function getUploadingFiles() {
      return this.getFilesWithStatus(Dropzone.UPLOADING);
    }
  }, {
    key: "getAddedFiles",
    value: function getAddedFiles() {
      return this.getFilesWithStatus(Dropzone.ADDED);
    }

    // Files that are either queued or uploading

  }, {
    key: "getActiveFiles",
    value: function getActiveFiles() {
      return this.files.filter(function (file) {
        return file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED;
      }).map(function (file) {
        return file;
      });
    }

    // The function that gets called when Dropzone is initialized. You
    // can (and should) setup event listeners inside this function.

  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      // In case it isn't set already
      if (this.element.tagName === "form") {
        this.element.setAttribute("enctype", "multipart/form-data");
      }

      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
      }

      if (this.clickableElements.length) {
        var setupHiddenFileInput = function setupHiddenFileInput() {
          if (_this3.hiddenFileInput) {
            _this3.hiddenFileInput.parentNode.removeChild(_this3.hiddenFileInput);
          }
          _this3.hiddenFileInput = document.createElement("input");
          _this3.hiddenFileInput.setAttribute("type", "file");
          if (_this3.options.maxFiles === null || _this3.options.maxFiles > 1) {
            _this3.hiddenFileInput.setAttribute("multiple", "multiple");
          }
          _this3.hiddenFileInput.className = "dz-hidden-input";

          if (_this3.options.acceptedFiles !== null) {
            _this3.hiddenFileInput.setAttribute("accept", _this3.options.acceptedFiles);
          }
          if (_this3.options.capture !== null) {
            _this3.hiddenFileInput.setAttribute("capture", _this3.options.capture);
          }

          // Not setting `display="none"` because some browsers don't accept clicks
          // on elements that aren't displayed.
          _this3.hiddenFileInput.style.visibility = "hidden";
          _this3.hiddenFileInput.style.position = "absolute";
          _this3.hiddenFileInput.style.top = "0";
          _this3.hiddenFileInput.style.left = "0";
          _this3.hiddenFileInput.style.height = "0";
          _this3.hiddenFileInput.style.width = "0";
          document.querySelector(_this3.options.hiddenInputContainer).appendChild(_this3.hiddenFileInput);
          return _this3.hiddenFileInput.addEventListener("change", function () {
            var files = _this3.hiddenFileInput.files;

            if (files.length) {
              for (var _iterator10 = files, _isArray10 = true, _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
                var _ref9;

                if (_isArray10) {
                  if (_i10 >= _iterator10.length) break;
                  _ref9 = _iterator10[_i10++];
                } else {
                  _i10 = _iterator10.next();
                  if (_i10.done) break;
                  _ref9 = _i10.value;
                }

                var file = _ref9;

                _this3.addFile(file);
              }
            }
            _this3.emit("addedfiles", files);
            return setupHiddenFileInput();
          });
        };
        setupHiddenFileInput();
      }

      this.URL = window.URL !== null ? window.URL : window.webkitURL;

      // Setup all event listeners on the Dropzone object itself.
      // They're not in @setupEventListeners() because they shouldn't be removed
      // again when the dropzone gets disabled.
      for (var _iterator11 = this.events, _isArray11 = true, _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : _iterator11[Symbol.iterator]();;) {
        var _ref10;

        if (_isArray11) {
          if (_i11 >= _iterator11.length) break;
          _ref10 = _iterator11[_i11++];
        } else {
          _i11 = _iterator11.next();
          if (_i11.done) break;
          _ref10 = _i11.value;
        }

        var eventName = _ref10;

        this.on(eventName, this.options[eventName]);
      }

      this.on("uploadprogress", function () {
        return _this3.updateTotalUploadProgress();
      });

      this.on("removedfile", function () {
        return _this3.updateTotalUploadProgress();
      });

      this.on("canceled", function (file) {
        return _this3.emit("complete", file);
      });

      // Emit a `queuecomplete` event if all files finished uploading.
      this.on("complete", function (file) {
        if (_this3.getAddedFiles().length === 0 && _this3.getUploadingFiles().length === 0 && _this3.getQueuedFiles().length === 0) {
          // This needs to be deferred so that `queuecomplete` really triggers after `complete`
          return setTimeout(function () {
            return _this3.emit("queuecomplete");
          }, 0);
        }
      });

      var noPropagation = function noPropagation(e) {
        e.stopPropagation();
        if (e.preventDefault) {
          return e.preventDefault();
        } else {
          return e.returnValue = false;
        }
      };

      // Create the listeners
      this.listeners = [{
        element: this.element,
        events: {
          "dragstart": function dragstart(e) {
            return _this3.emit("dragstart", e);
          },
          "dragenter": function dragenter(e) {
            noPropagation(e);
            return _this3.emit("dragenter", e);
          },
          "dragover": function dragover(e) {
            // Makes it possible to drag files from chrome's download bar
            // http://stackoverflow.com/questions/19526430/drag-and-drop-file-uploads-from-chrome-downloads-bar
            // Try is required to prevent bug in Internet Explorer 11 (SCRIPT65535 exception)
            var efct = void 0;
            try {
              efct = e.dataTransfer.effectAllowed;
            } catch (error) {}
            e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';

            noPropagation(e);
            return _this3.emit("dragover", e);
          },
          "dragleave": function dragleave(e) {
            return _this3.emit("dragleave", e);
          },
          "drop": function drop(e) {
            noPropagation(e);
            return _this3.drop(e);
          },
          "dragend": function dragend(e) {
            return _this3.emit("dragend", e);
          }

          // This is disabled right now, because the browsers don't implement it properly.
          // "paste": (e) =>
          //   noPropagation e
          //   @paste e
        } }];

      this.clickableElements.forEach(function (clickableElement) {
        return _this3.listeners.push({
          element: clickableElement,
          events: {
            "click": function click(evt) {
              // Only the actual dropzone or the message element should trigger file selection
              if (clickableElement !== _this3.element || evt.target === _this3.element || Dropzone.elementInside(evt.target, _this3.element.querySelector(".dz-message"))) {
                _this3.hiddenFileInput.click(); // Forward the click
              }
              return true;
            }
          }
        });
      });

      this.enable();

      return this.options.init.call(this);
    }

    // Not fully tested yet

  }, {
    key: "destroy",
    value: function destroy() {
      this.disable();
      this.removeAllFiles(true);
      if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : undefined) {
        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
      }
      delete this.element.dropzone;
      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
    }
  }, {
    key: "updateTotalUploadProgress",
    value: function updateTotalUploadProgress() {
      var totalUploadProgress = void 0;
      var totalBytesSent = 0;
      var totalBytes = 0;

      var activeFiles = this.getActiveFiles();

      if (activeFiles.length) {
        for (var _iterator12 = this.getActiveFiles(), _isArray12 = true, _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : _iterator12[Symbol.iterator]();;) {
          var _ref11;

          if (_isArray12) {
            if (_i12 >= _iterator12.length) break;
            _ref11 = _iterator12[_i12++];
          } else {
            _i12 = _iterator12.next();
            if (_i12.done) break;
            _ref11 = _i12.value;
          }

          var file = _ref11;

          totalBytesSent += file.upload.bytesSent;
          totalBytes += file.upload.total;
        }
        totalUploadProgress = 100 * totalBytesSent / totalBytes;
      } else {
        totalUploadProgress = 100;
      }

      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    }

    // @options.paramName can be a function taking one parameter rather than a string.
    // A parameter name for a file is obtained simply by calling this with an index number.

  }, {
    key: "_getParamName",
    value: function _getParamName(n) {
      if (typeof this.options.paramName === "function") {
        return this.options.paramName(n);
      } else {
        return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
      }
    }

    // If @options.renameFile is a function,
    // the function will be used to rename the file.name before appending it to the formData

  }, {
    key: "_renameFile",
    value: function _renameFile(file) {
      if (typeof this.options.renameFile !== "function") {
        return file.name;
      }
      return this.options.renameFile(file);
    }

    // Returns a form that can be used as fallback if the browser does not support DragnDrop
    //
    // If the dropzone is already a form, only the input field and button are returned. Otherwise a complete form element is provided.
    // This code has to pass in IE7 :(

  }, {
    key: "getFallbackForm",
    value: function getFallbackForm() {
      var existingFallback = void 0,
          form = void 0;
      if (existingFallback = this.getExistingFallback()) {
        return existingFallback;
      }

      var fieldsString = "<div class=\"dz-fallback\">";
      if (this.options.dictFallbackText) {
        fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
      }
      fieldsString += "<input type=\"file\" name=\"" + this._getParamName(0) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : undefined) + " /><input type=\"submit\" value=\"Upload!\"></div>";

      var fields = Dropzone.createElement(fieldsString);
      if (this.element.tagName !== "FORM") {
        form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
        form.appendChild(fields);
      } else {
        // Make sure that the enctype and method attributes are set properly
        this.element.setAttribute("enctype", "multipart/form-data");
        this.element.setAttribute("method", this.options.method);
      }
      return form != null ? form : fields;
    }

    // Returns the fallback elements if they exist already
    //
    // This code has to pass in IE7 :(

  }, {
    key: "getExistingFallback",
    value: function getExistingFallback() {
      var getFallback = function getFallback(elements) {
        for (var _iterator13 = elements, _isArray13 = true, _i13 = 0, _iterator13 = _isArray13 ? _iterator13 : _iterator13[Symbol.iterator]();;) {
          var _ref12;

          if (_isArray13) {
            if (_i13 >= _iterator13.length) break;
            _ref12 = _iterator13[_i13++];
          } else {
            _i13 = _iterator13.next();
            if (_i13.done) break;
            _ref12 = _i13.value;
          }

          var el = _ref12;

          if (/(^| )fallback($| )/.test(el.className)) {
            return el;
          }
        }
      };

      var _arr = ["div", "form"];
      for (var _i14 = 0; _i14 < _arr.length; _i14++) {
        var tagName = _arr[_i14];
        var fallback;
        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
          return fallback;
        }
      }
    }

    // Activates all listeners stored in @listeners

  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      return this.listeners.map(function (elementListeners) {
        return function () {
          var result = [];
          for (var event in elementListeners.events) {
            var listener = elementListeners.events[event];
            result.push(elementListeners.element.addEventListener(event, listener, false));
          }
          return result;
        }();
      });
    }

    // Deactivates all listeners stored in @listeners

  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      return this.listeners.map(function (elementListeners) {
        return function () {
          var result = [];
          for (var event in elementListeners.events) {
            var listener = elementListeners.events[event];
            result.push(elementListeners.element.removeEventListener(event, listener, false));
          }
          return result;
        }();
      });
    }

    // Removes all event listeners and cancels all files in the queue or being processed.

  }, {
    key: "disable",
    value: function disable() {
      var _this4 = this;

      this.clickableElements.forEach(function (element) {
        return element.classList.remove("dz-clickable");
      });
      this.removeEventListeners();
      this.disabled = true;

      return this.files.map(function (file) {
        return _this4.cancelUpload(file);
      });
    }
  }, {
    key: "enable",
    value: function enable() {
      delete this.disabled;
      this.clickableElements.forEach(function (element) {
        return element.classList.add("dz-clickable");
      });
      return this.setupEventListeners();
    }

    // Returns a nicely formatted filesize

  }, {
    key: "filesize",
    value: function filesize(size) {
      var selectedSize = 0;
      var selectedUnit = "b";

      if (size > 0) {
        var units = ['tb', 'gb', 'mb', 'kb', 'b'];

        for (var i = 0; i < units.length; i++) {
          var unit = units[i];
          var cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;

          if (size >= cutoff) {
            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
            selectedUnit = unit;
            break;
          }
        }

        selectedSize = Math.round(10 * selectedSize) / 10; // Cutting of digits
      }

      return "<strong>" + selectedSize + "</strong> " + this.options.dictFileSizeUnits[selectedUnit];
    }

    // Adds or removes the `dz-max-files-reached` class from the form.

  }, {
    key: "_updateMaxFilesReachedClass",
    value: function _updateMaxFilesReachedClass() {
      if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
        if (this.getAcceptedFiles().length === this.options.maxFiles) {
          this.emit('maxfilesreached', this.files);
        }
        return this.element.classList.add("dz-max-files-reached");
      } else {
        return this.element.classList.remove("dz-max-files-reached");
      }
    }
  }, {
    key: "drop",
    value: function drop(e) {
      if (!e.dataTransfer) {
        return;
      }
      this.emit("drop", e);

      // Convert the FileList to an Array
      // This is necessary for IE11
      var files = [];
      for (var i = 0; i < e.dataTransfer.files.length; i++) {
        files[i] = e.dataTransfer.files[i];
      }

      this.emit("addedfiles", files);

      // Even if it's a folder, files.length will contain the folders.
      if (files.length) {
        var items = e.dataTransfer.items;

        if (items && items.length && items[0].webkitGetAsEntry != null) {
          // The browser supports dropping of folders, so handle items instead of files
          this._addFilesFromItems(items);
        } else {
          this.handleFiles(files);
        }
      }
    }
  }, {
    key: "paste",
    value: function paste(e) {
      if (__guard__(e != null ? e.clipboardData : undefined, function (x) {
        return x.items;
      }) == null) {
        return;
      }

      this.emit("paste", e);
      var items = e.clipboardData.items;


      if (items.length) {
        return this._addFilesFromItems(items);
      }
    }
  }, {
    key: "handleFiles",
    value: function handleFiles(files) {
      for (var _iterator14 = files, _isArray14 = true, _i15 = 0, _iterator14 = _isArray14 ? _iterator14 : _iterator14[Symbol.iterator]();;) {
        var _ref13;

        if (_isArray14) {
          if (_i15 >= _iterator14.length) break;
          _ref13 = _iterator14[_i15++];
        } else {
          _i15 = _iterator14.next();
          if (_i15.done) break;
          _ref13 = _i15.value;
        }

        var file = _ref13;

        this.addFile(file);
      }
    }

    // When a folder is dropped (or files are pasted), items must be handled
    // instead of files.

  }, {
    key: "_addFilesFromItems",
    value: function _addFilesFromItems(items) {
      var _this5 = this;

      return function () {
        var result = [];
        for (var _iterator15 = items, _isArray15 = true, _i16 = 0, _iterator15 = _isArray15 ? _iterator15 : _iterator15[Symbol.iterator]();;) {
          var _ref14;

          if (_isArray15) {
            if (_i16 >= _iterator15.length) break;
            _ref14 = _iterator15[_i16++];
          } else {
            _i16 = _iterator15.next();
            if (_i16.done) break;
            _ref14 = _i16.value;
          }

          var item = _ref14;

          var entry;
          if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
            if (entry.isFile) {
              result.push(_this5.addFile(item.getAsFile()));
            } else if (entry.isDirectory) {
              // Append all files from that directory to files
              result.push(_this5._addFilesFromDirectory(entry, entry.name));
            } else {
              result.push(undefined);
            }
          } else if (item.getAsFile != null) {
            if (item.kind == null || item.kind === "file") {
              result.push(_this5.addFile(item.getAsFile()));
            } else {
              result.push(undefined);
            }
          } else {
            result.push(undefined);
          }
        }
        return result;
      }();
    }

    // Goes through the directory, and adds each file it finds recursively

  }, {
    key: "_addFilesFromDirectory",
    value: function _addFilesFromDirectory(directory, path) {
      var _this6 = this;

      var dirReader = directory.createReader();

      var errorHandler = function errorHandler(error) {
        return __guardMethod__(console, 'log', function (o) {
          return o.log(error);
        });
      };

      var readEntries = function readEntries() {
        return dirReader.readEntries(function (entries) {
          if (entries.length > 0) {
            for (var _iterator16 = entries, _isArray16 = true, _i17 = 0, _iterator16 = _isArray16 ? _iterator16 : _iterator16[Symbol.iterator]();;) {
              var _ref15;

              if (_isArray16) {
                if (_i17 >= _iterator16.length) break;
                _ref15 = _iterator16[_i17++];
              } else {
                _i17 = _iterator16.next();
                if (_i17.done) break;
                _ref15 = _i17.value;
              }

              var entry = _ref15;

              if (entry.isFile) {
                entry.file(function (file) {
                  if (_this6.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                    return;
                  }
                  file.fullPath = path + "/" + file.name;
                  return _this6.addFile(file);
                });
              } else if (entry.isDirectory) {
                _this6._addFilesFromDirectory(entry, path + "/" + entry.name);
              }
            }

            // Recursively call readEntries() again, since browser only handle
            // the first 100 entries.
            // See: https://developer.mozilla.org/en-US/docs/Web/API/DirectoryReader#readEntries
            readEntries();
          }
          return null;
        }, errorHandler);
      };

      return readEntries();
    }

    // If `done()` is called without argument the file is accepted
    // If you call it with an error message, the file is rejected
    // (This allows for asynchronous validation)
    //
    // This function checks the filesize, and if the file.type passes the
    // `acceptedFiles` check.

  }, {
    key: "accept",
    value: function accept(file, done) {
      if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1024 * 1024) {
        return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
        return done(this.options.dictInvalidFileType);
      } else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
        return this.emit("maxfilesexceeded", file);
      } else {
        return this.options.accept.call(this, file, done);
      }
    }
  }, {
    key: "addFile",
    value: function addFile(file) {
      var _this7 = this;

      file.upload = {
        uuid: Dropzone.uuidv4(),
        progress: 0,
        // Setting the total upload size to file.size for the beginning
        // It's actual different than the size to be transmitted.
        total: file.size,
        bytesSent: 0,
        filename: this._renameFile(file),
        chunked: this.options.chunking && (this.options.forceChunking || file.size > this.options.chunkSize),
        totalChunkCount: Math.ceil(file.size / this.options.chunkSize)
      };
      this.files.push(file);

      file.status = Dropzone.ADDED;

      this.emit("addedfile", file);

      this._enqueueThumbnail(file);

      return this.accept(file, function (error) {
        if (error) {
          file.accepted = false;
          _this7._errorProcessing([file], error); // Will set the file.status
        } else {
          file.accepted = true;
          if (_this7.options.autoQueue) {
            _this7.enqueueFile(file);
          } // Will set .accepted = true
        }
        return _this7._updateMaxFilesReachedClass();
      });
    }

    // Wrapper for enqueueFile

  }, {
    key: "enqueueFiles",
    value: function enqueueFiles(files) {
      for (var _iterator17 = files, _isArray17 = true, _i18 = 0, _iterator17 = _isArray17 ? _iterator17 : _iterator17[Symbol.iterator]();;) {
        var _ref16;

        if (_isArray17) {
          if (_i18 >= _iterator17.length) break;
          _ref16 = _iterator17[_i18++];
        } else {
          _i18 = _iterator17.next();
          if (_i18.done) break;
          _ref16 = _i18.value;
        }

        var file = _ref16;

        this.enqueueFile(file);
      }
      return null;
    }
  }, {
    key: "enqueueFile",
    value: function enqueueFile(file) {
      var _this8 = this;

      if (file.status === Dropzone.ADDED && file.accepted === true) {
        file.status = Dropzone.QUEUED;
        if (this.options.autoProcessQueue) {
          return setTimeout(function () {
            return _this8.processQueue();
          }, 0); // Deferring the call
        }
      } else {
        throw new Error("This file can't be queued because it has already been processed or was rejected.");
      }
    }
  }, {
    key: "_enqueueThumbnail",
    value: function _enqueueThumbnail(file) {
      var _this9 = this;

      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
        this._thumbnailQueue.push(file);
        return setTimeout(function () {
          return _this9._processThumbnailQueue();
        }, 0); // Deferring the call
      }
    }
  }, {
    key: "_processThumbnailQueue",
    value: function _processThumbnailQueue() {
      var _this10 = this;

      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
        return;
      }

      this._processingThumbnail = true;
      var file = this._thumbnailQueue.shift();
      return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, function (dataUrl) {
        _this10.emit("thumbnail", file, dataUrl);
        _this10._processingThumbnail = false;
        return _this10._processThumbnailQueue();
      });
    }

    // Can be called by the user to remove a file

  }, {
    key: "removeFile",
    value: function removeFile(file) {
      if (file.status === Dropzone.UPLOADING) {
        this.cancelUpload(file);
      }
      this.files = without(this.files, file);

      this.emit("removedfile", file);
      if (this.files.length === 0) {
        return this.emit("reset");
      }
    }

    // Removes all files that aren't currently processed from the list

  }, {
    key: "removeAllFiles",
    value: function removeAllFiles(cancelIfNecessary) {
      // Create a copy of files since removeFile() changes the @files array.
      if (cancelIfNecessary == null) {
        cancelIfNecessary = false;
      }
      for (var _iterator18 = this.files.slice(), _isArray18 = true, _i19 = 0, _iterator18 = _isArray18 ? _iterator18 : _iterator18[Symbol.iterator]();;) {
        var _ref17;

        if (_isArray18) {
          if (_i19 >= _iterator18.length) break;
          _ref17 = _iterator18[_i19++];
        } else {
          _i19 = _iterator18.next();
          if (_i19.done) break;
          _ref17 = _i19.value;
        }

        var file = _ref17;

        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
          this.removeFile(file);
        }
      }
      return null;
    }

    // Resizes an image before it gets sent to the server. This function is the default behavior of
    // `options.transformFile` if `resizeWidth` or `resizeHeight` are set. The callback is invoked with
    // the resized blob.

  }, {
    key: "resizeImage",
    value: function resizeImage(file, width, height, resizeMethod, callback) {
      var _this11 = this;

      return this.createThumbnail(file, width, height, resizeMethod, false, function (dataUrl, canvas) {
        if (canvas == null) {
          // The image has not been resized
          return callback(file);
        } else {
          var resizeMimeType = _this11.options.resizeMimeType;

          if (resizeMimeType == null) {
            resizeMimeType = file.type;
          }
          var resizedDataURL = canvas.toDataURL(resizeMimeType, _this11.options.resizeQuality);
          if (resizeMimeType === 'image/jpeg' || resizeMimeType === 'image/jpg') {
            // Now add the original EXIF information
            resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);
          }
          return callback(Dropzone.dataURItoBlob(resizedDataURL));
        }
      });
    }
  }, {
    key: "createThumbnail",
    value: function createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
      var _this12 = this;

      var fileReader = new FileReader();

      fileReader.onload = function () {

        file.dataURL = fileReader.result;

        // Don't bother creating a thumbnail for SVG images since they're vector
        if (file.type === "image/svg+xml") {
          if (callback != null) {
            callback(fileReader.result);
          }
          return;
        }

        return _this12.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
      };

      return fileReader.readAsDataURL(file);
    }
  }, {
    key: "createThumbnailFromUrl",
    value: function createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
      var _this13 = this;

      // Not using `new Image` here because of a bug in latest Chrome versions.
      // See https://github.com/enyo/dropzone/pull/226
      var img = document.createElement("img");

      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }

      img.onload = function () {
        var loadExif = function loadExif(callback) {
          return callback(1);
        };
        if (typeof EXIF !== 'undefined' && EXIF !== null && fixOrientation) {
          loadExif = function loadExif(callback) {
            return EXIF.getData(img, function () {
              return callback(EXIF.getTag(this, 'Orientation'));
            });
          };
        }

        return loadExif(function (orientation) {
          file.width = img.width;
          file.height = img.height;

          var resizeInfo = _this13.options.resize.call(_this13, file, width, height, resizeMethod);

          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");

          canvas.width = resizeInfo.trgWidth;
          canvas.height = resizeInfo.trgHeight;

          if (orientation > 4) {
            canvas.width = resizeInfo.trgHeight;
            canvas.height = resizeInfo.trgWidth;
          }

          switch (orientation) {
            case 2:
              // horizontal flip
              ctx.translate(canvas.width, 0);
              ctx.scale(-1, 1);
              break;
            case 3:
              // 180° rotate left
              ctx.translate(canvas.width, canvas.height);
              ctx.rotate(Math.PI);
              break;
            case 4:
              // vertical flip
              ctx.translate(0, canvas.height);
              ctx.scale(1, -1);
              break;
            case 5:
              // vertical flip + 90 rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.scale(1, -1);
              break;
            case 6:
              // 90° rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.translate(0, -canvas.height);
              break;
            case 7:
              // horizontal flip + 90 rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.translate(canvas.width, -canvas.height);
              ctx.scale(-1, 1);
              break;
            case 8:
              // 90° rotate left
              ctx.rotate(-0.5 * Math.PI);
              ctx.translate(-canvas.width, 0);
              break;
          }

          // This is a bugfix for iOS' scaling bug.
          drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);

          var thumbnail = canvas.toDataURL("image/png");

          if (callback != null) {
            return callback(thumbnail, canvas);
          }
        });
      };

      if (callback != null) {
        img.onerror = callback;
      }

      return img.src = file.dataURL;
    }

    // Goes through the queue and processes files if there aren't too many already.

  }, {
    key: "processQueue",
    value: function processQueue() {
      var parallelUploads = this.options.parallelUploads;

      var processingLength = this.getUploadingFiles().length;
      var i = processingLength;

      // There are already at least as many files uploading than should be
      if (processingLength >= parallelUploads) {
        return;
      }

      var queuedFiles = this.getQueuedFiles();

      if (!(queuedFiles.length > 0)) {
        return;
      }

      if (this.options.uploadMultiple) {
        // The files should be uploaded in one request
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
      } else {
        while (i < parallelUploads) {
          if (!queuedFiles.length) {
            return;
          } // Nothing left to process
          this.processFile(queuedFiles.shift());
          i++;
        }
      }
    }

    // Wrapper for `processFiles`

  }, {
    key: "processFile",
    value: function processFile(file) {
      return this.processFiles([file]);
    }

    // Loads the file, then calls finishedLoading()

  }, {
    key: "processFiles",
    value: function processFiles(files) {
      for (var _iterator19 = files, _isArray19 = true, _i20 = 0, _iterator19 = _isArray19 ? _iterator19 : _iterator19[Symbol.iterator]();;) {
        var _ref18;

        if (_isArray19) {
          if (_i20 >= _iterator19.length) break;
          _ref18 = _iterator19[_i20++];
        } else {
          _i20 = _iterator19.next();
          if (_i20.done) break;
          _ref18 = _i20.value;
        }

        var file = _ref18;

        file.processing = true; // Backwards compatibility
        file.status = Dropzone.UPLOADING;

        this.emit("processing", file);
      }

      if (this.options.uploadMultiple) {
        this.emit("processingmultiple", files);
      }

      return this.uploadFiles(files);
    }
  }, {
    key: "_getFilesWithXhr",
    value: function _getFilesWithXhr(xhr) {
      var files = void 0;
      return files = this.files.filter(function (file) {
        return file.xhr === xhr;
      }).map(function (file) {
        return file;
      });
    }

    // Cancels the file upload and sets the status to CANCELED
    // **if** the file is actually being uploaded.
    // If it's still in the queue, the file is being removed from it and the status
    // set to CANCELED.

  }, {
    key: "cancelUpload",
    value: function cancelUpload(file) {
      if (file.status === Dropzone.UPLOADING) {
        var groupedFiles = this._getFilesWithXhr(file.xhr);
        for (var _iterator20 = groupedFiles, _isArray20 = true, _i21 = 0, _iterator20 = _isArray20 ? _iterator20 : _iterator20[Symbol.iterator]();;) {
          var _ref19;

          if (_isArray20) {
            if (_i21 >= _iterator20.length) break;
            _ref19 = _iterator20[_i21++];
          } else {
            _i21 = _iterator20.next();
            if (_i21.done) break;
            _ref19 = _i21.value;
          }

          var groupedFile = _ref19;

          groupedFile.status = Dropzone.CANCELED;
        }
        if (typeof file.xhr !== 'undefined') {
          file.xhr.abort();
        }
        for (var _iterator21 = groupedFiles, _isArray21 = true, _i22 = 0, _iterator21 = _isArray21 ? _iterator21 : _iterator21[Symbol.iterator]();;) {
          var _ref20;

          if (_isArray21) {
            if (_i22 >= _iterator21.length) break;
            _ref20 = _iterator21[_i22++];
          } else {
            _i22 = _iterator21.next();
            if (_i22.done) break;
            _ref20 = _i22.value;
          }

          var _groupedFile = _ref20;

          this.emit("canceled", _groupedFile);
        }
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", groupedFiles);
        }
      } else if (file.status === Dropzone.ADDED || file.status === Dropzone.QUEUED) {
        file.status = Dropzone.CANCELED;
        this.emit("canceled", file);
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", [file]);
        }
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    }
  }, {
    key: "resolveOption",
    value: function resolveOption(option) {
      if (typeof option === 'function') {
        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }

        return option.apply(this, args);
      }
      return option;
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(file) {
      return this.uploadFiles([file]);
    }
  }, {
    key: "uploadFiles",
    value: function uploadFiles(files) {
      var _this14 = this;

      this._transformFiles(files, function (transformedFiles) {
        if (files[0].upload.chunked) {
          // This file should be sent in chunks!

          // If the chunking option is set, we **know** that there can only be **one** file, since
          // uploadMultiple is not allowed with this option.
          var file = files[0];
          var transformedFile = transformedFiles[0];
          var startedChunkCount = 0;

          file.upload.chunks = [];

          var handleNextChunk = function handleNextChunk() {
            var chunkIndex = 0;

            // Find the next item in file.upload.chunks that is not defined yet.
            while (file.upload.chunks[chunkIndex] !== undefined) {
              chunkIndex++;
            }

            // This means, that all chunks have already been started.
            if (chunkIndex >= file.upload.totalChunkCount) return;

            startedChunkCount++;

            var start = chunkIndex * _this14.options.chunkSize;
            var end = Math.min(start + _this14.options.chunkSize, file.size);

            var dataBlock = {
              name: _this14._getParamName(0),
              data: transformedFile.webkitSlice ? transformedFile.webkitSlice(start, end) : transformedFile.slice(start, end),
              filename: file.upload.filename,
              chunkIndex: chunkIndex
            };

            file.upload.chunks[chunkIndex] = {
              file: file,
              index: chunkIndex,
              dataBlock: dataBlock, // In case we want to retry.
              status: Dropzone.UPLOADING,
              progress: 0,
              retries: 0 // The number of times this block has been retried.
            };

            _this14._uploadData(files, [dataBlock]);
          };

          file.upload.finishedChunkUpload = function (chunk) {
            var allFinished = true;
            chunk.status = Dropzone.SUCCESS;

            // Clear the data from the chunk
            chunk.dataBlock = null;

            for (var i = 0; i < file.upload.totalChunkCount; i++) {
              if (file.upload.chunks[i] === undefined) {
                return handleNextChunk();
              }
              if (file.upload.chunks[i].status !== Dropzone.SUCCESS) {
                allFinished = false;
              }
            }

            if (allFinished) {
              _this14.options.chunksUploaded(file, function () {
                _this14._finished(files, '', null);
              });
            }
          };

          if (_this14.options.parallelChunkUploads) {
            for (var i = 0; i < file.upload.totalChunkCount; i++) {
              handleNextChunk();
            }
          } else {
            handleNextChunk();
          }
        } else {
          var dataBlocks = [];
          for (var _i23 = 0; _i23 < files.length; _i23++) {
            dataBlocks[_i23] = {
              name: _this14._getParamName(_i23),
              data: transformedFiles[_i23],
              filename: files[_i23].upload.filename
            };
          }
          _this14._uploadData(files, dataBlocks);
        }
      });
    }

    /// Returns the right chunk for given file and xhr

  }, {
    key: "_getChunk",
    value: function _getChunk(file, xhr) {
      for (var i = 0; i < file.upload.totalChunkCount; i++) {
        if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].xhr === xhr) {
          return file.upload.chunks[i];
        }
      }
    }

    // This function actually uploads the file(s) to the server.
    // If dataBlocks contains the actual data to upload (meaning, that this could either be transformed
    // files, or individual chunks for chunked upload).

  }, {
    key: "_uploadData",
    value: function _uploadData(files, dataBlocks) {
      var _this15 = this;

      var xhr = new XMLHttpRequest();

      // Put the xhr object in the file objects to be able to reference it later.
      for (var _iterator22 = files, _isArray22 = true, _i24 = 0, _iterator22 = _isArray22 ? _iterator22 : _iterator22[Symbol.iterator]();;) {
        var _ref21;

        if (_isArray22) {
          if (_i24 >= _iterator22.length) break;
          _ref21 = _iterator22[_i24++];
        } else {
          _i24 = _iterator22.next();
          if (_i24.done) break;
          _ref21 = _i24.value;
        }

        var file = _ref21;

        file.xhr = xhr;
      }
      if (files[0].upload.chunked) {
        // Put the xhr object in the right chunk object, so it can be associated later, and found with _getChunk
        files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
      }

      var method = this.resolveOption(this.options.method, files);
      var url = this.resolveOption(this.options.url, files);
      xhr.open(method, url, true);

      // Setting the timeout after open because of IE11 issue: https://gitlab.com/meno/dropzone/issues/8
      xhr.timeout = this.resolveOption(this.options.timeout, files);

      // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179
      xhr.withCredentials = !!this.options.withCredentials;

      xhr.onload = function (e) {
        _this15._finishedUploading(files, xhr, e);
      };

      xhr.onerror = function () {
        _this15._handleUploadError(files, xhr);
      };

      // Some browsers do not have the .upload property
      var progressObj = xhr.upload != null ? xhr.upload : xhr;
      progressObj.onprogress = function (e) {
        return _this15._updateFilesUploadProgress(files, xhr, e);
      };

      var headers = {
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "X-Requested-With": "XMLHttpRequest"
      };

      if (this.options.headers) {
        Dropzone.extend(headers, this.options.headers);
      }

      for (var headerName in headers) {
        var headerValue = headers[headerName];
        if (headerValue) {
          xhr.setRequestHeader(headerName, headerValue);
        }
      }

      var formData = new FormData();

      // Adding all @options parameters
      if (this.options.params) {
        var additionalParams = this.options.params;
        if (typeof additionalParams === 'function') {
          additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null);
        }

        for (var key in additionalParams) {
          var value = additionalParams[key];
          formData.append(key, value);
        }
      }

      // Let the user add additional data if necessary
      for (var _iterator23 = files, _isArray23 = true, _i25 = 0, _iterator23 = _isArray23 ? _iterator23 : _iterator23[Symbol.iterator]();;) {
        var _ref22;

        if (_isArray23) {
          if (_i25 >= _iterator23.length) break;
          _ref22 = _iterator23[_i25++];
        } else {
          _i25 = _iterator23.next();
          if (_i25.done) break;
          _ref22 = _i25.value;
        }

        var _file = _ref22;

        this.emit("sending", _file, xhr, formData);
      }
      if (this.options.uploadMultiple) {
        this.emit("sendingmultiple", files, xhr, formData);
      }

      this._addFormElementData(formData);

      // Finally add the files
      // Has to be last because some servers (eg: S3) expect the file to be the last parameter
      for (var i = 0; i < dataBlocks.length; i++) {
        var dataBlock = dataBlocks[i];
        formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
      }

      this.submitRequest(xhr, formData, files);
    }

    // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.

  }, {
    key: "_transformFiles",
    value: function _transformFiles(files, done) {
      var _this16 = this;

      var transformedFiles = [];
      // Clumsy way of handling asynchronous calls, until I get to add a proper Future library.
      var doneCounter = 0;

      var _loop = function _loop(i) {
        _this16.options.transformFile.call(_this16, files[i], function (transformedFile) {
          transformedFiles[i] = transformedFile;
          if (++doneCounter === files.length) {
            done(transformedFiles);
          }
        });
      };

      for (var i = 0; i < files.length; i++) {
        _loop(i);
      }
    }

    // Takes care of adding other input elements of the form to the AJAX request

  }, {
    key: "_addFormElementData",
    value: function _addFormElementData(formData) {
      // Take care of other input elements
      if (this.element.tagName === "FORM") {
        for (var _iterator24 = this.element.querySelectorAll("input, textarea, select, button"), _isArray24 = true, _i26 = 0, _iterator24 = _isArray24 ? _iterator24 : _iterator24[Symbol.iterator]();;) {
          var _ref23;

          if (_isArray24) {
            if (_i26 >= _iterator24.length) break;
            _ref23 = _iterator24[_i26++];
          } else {
            _i26 = _iterator24.next();
            if (_i26.done) break;
            _ref23 = _i26.value;
          }

          var input = _ref23;

          var inputName = input.getAttribute("name");
          var inputType = input.getAttribute("type");
          if (inputType) inputType = inputType.toLowerCase();

          // If the input doesn't have a name, we can't use it.
          if (typeof inputName === 'undefined' || inputName === null) continue;

          if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
            // Possibly multiple values
            for (var _iterator25 = input.options, _isArray25 = true, _i27 = 0, _iterator25 = _isArray25 ? _iterator25 : _iterator25[Symbol.iterator]();;) {
              var _ref24;

              if (_isArray25) {
                if (_i27 >= _iterator25.length) break;
                _ref24 = _iterator25[_i27++];
              } else {
                _i27 = _iterator25.next();
                if (_i27.done) break;
                _ref24 = _i27.value;
              }

              var option = _ref24;

              if (option.selected) {
                formData.append(inputName, option.value);
              }
            }
          } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked) {
            formData.append(inputName, input.value);
          }
        }
      }
    }

    // Invoked when there is new progress information about given files.
    // If e is not provided, it is assumed that the upload is finished.

  }, {
    key: "_updateFilesUploadProgress",
    value: function _updateFilesUploadProgress(files, xhr, e) {
      var progress = void 0;
      if (typeof e !== 'undefined') {
        progress = 100 * e.loaded / e.total;

        if (files[0].upload.chunked) {
          var file = files[0];
          // Since this is a chunked upload, we need to update the appropriate chunk progress.
          var chunk = this._getChunk(file, xhr);
          chunk.progress = progress;
          chunk.total = e.total;
          chunk.bytesSent = e.loaded;
          var fileProgress = 0,
              fileTotal = void 0,
              fileBytesSent = void 0;
          file.upload.progress = 0;
          file.upload.total = 0;
          file.upload.bytesSent = 0;
          for (var i = 0; i < file.upload.totalChunkCount; i++) {
            if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].progress !== undefined) {
              file.upload.progress += file.upload.chunks[i].progress;
              file.upload.total += file.upload.chunks[i].total;
              file.upload.bytesSent += file.upload.chunks[i].bytesSent;
            }
          }
          file.upload.progress = file.upload.progress / file.upload.totalChunkCount;
        } else {
          for (var _iterator26 = files, _isArray26 = true, _i28 = 0, _iterator26 = _isArray26 ? _iterator26 : _iterator26[Symbol.iterator]();;) {
            var _ref25;

            if (_isArray26) {
              if (_i28 >= _iterator26.length) break;
              _ref25 = _iterator26[_i28++];
            } else {
              _i28 = _iterator26.next();
              if (_i28.done) break;
              _ref25 = _i28.value;
            }

            var _file2 = _ref25;

            _file2.upload.progress = progress;
            _file2.upload.total = e.total;
            _file2.upload.bytesSent = e.loaded;
          }
        }
        for (var _iterator27 = files, _isArray27 = true, _i29 = 0, _iterator27 = _isArray27 ? _iterator27 : _iterator27[Symbol.iterator]();;) {
          var _ref26;

          if (_isArray27) {
            if (_i29 >= _iterator27.length) break;
            _ref26 = _iterator27[_i29++];
          } else {
            _i29 = _iterator27.next();
            if (_i29.done) break;
            _ref26 = _i29.value;
          }

          var _file3 = _ref26;

          this.emit("uploadprogress", _file3, _file3.upload.progress, _file3.upload.bytesSent);
        }
      } else {
        // Called when the file finished uploading

        var allFilesFinished = true;

        progress = 100;

        for (var _iterator28 = files, _isArray28 = true, _i30 = 0, _iterator28 = _isArray28 ? _iterator28 : _iterator28[Symbol.iterator]();;) {
          var _ref27;

          if (_isArray28) {
            if (_i30 >= _iterator28.length) break;
            _ref27 = _iterator28[_i30++];
          } else {
            _i30 = _iterator28.next();
            if (_i30.done) break;
            _ref27 = _i30.value;
          }

          var _file4 = _ref27;

          if (_file4.upload.progress !== 100 || _file4.upload.bytesSent !== _file4.upload.total) {
            allFilesFinished = false;
          }
          _file4.upload.progress = progress;
          _file4.upload.bytesSent = _file4.upload.total;
        }

        // Nothing to do, all files already at 100%
        if (allFilesFinished) {
          return;
        }

        for (var _iterator29 = files, _isArray29 = true, _i31 = 0, _iterator29 = _isArray29 ? _iterator29 : _iterator29[Symbol.iterator]();;) {
          var _ref28;

          if (_isArray29) {
            if (_i31 >= _iterator29.length) break;
            _ref28 = _iterator29[_i31++];
          } else {
            _i31 = _iterator29.next();
            if (_i31.done) break;
            _ref28 = _i31.value;
          }

          var _file5 = _ref28;

          this.emit("uploadprogress", _file5, progress, _file5.upload.bytesSent);
        }
      }
    }
  }, {
    key: "_finishedUploading",
    value: function _finishedUploading(files, xhr, e) {
      var response = void 0;

      if (files[0].status === Dropzone.CANCELED) {
        return;
      }

      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.responseType !== 'arraybuffer' && xhr.responseType !== 'blob') {
        response = xhr.responseText;

        if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
          try {
            response = JSON.parse(response);
          } catch (error) {
            e = error;
            response = "Invalid JSON response from server.";
          }
        }
      }

      this._updateFilesUploadProgress(files);

      if (!(200 <= xhr.status && xhr.status < 300)) {
        this._handleUploadError(files, xhr, response);
      } else {
        if (files[0].upload.chunked) {
          files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr));
        } else {
          this._finished(files, response, e);
        }
      }
    }
  }, {
    key: "_handleUploadError",
    value: function _handleUploadError(files, xhr, response) {
      if (files[0].status === Dropzone.CANCELED) {
        return;
      }

      if (files[0].upload.chunked && this.options.retryChunks) {
        var chunk = this._getChunk(files[0], xhr);
        if (chunk.retries++ < this.options.retryChunksLimit) {
          this._uploadData(files, [chunk.dataBlock]);
          return;
        } else {
          console.warn('Retried this chunk too often. Giving up.');
        }
      }

      for (var _iterator30 = files, _isArray30 = true, _i32 = 0, _iterator30 = _isArray30 ? _iterator30 : _iterator30[Symbol.iterator]();;) {
        var _ref29;

        if (_isArray30) {
          if (_i32 >= _iterator30.length) break;
          _ref29 = _iterator30[_i32++];
        } else {
          _i32 = _iterator30.next();
          if (_i32.done) break;
          _ref29 = _i32.value;
        }

        var file = _ref29;

        this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
      }
    }
  }, {
    key: "submitRequest",
    value: function submitRequest(xhr, formData, files) {
      xhr.send(formData);
    }

    // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.

  }, {
    key: "_finished",
    value: function _finished(files, responseText, e) {
      for (var _iterator31 = files, _isArray31 = true, _i33 = 0, _iterator31 = _isArray31 ? _iterator31 : _iterator31[Symbol.iterator]();;) {
        var _ref30;

        if (_isArray31) {
          if (_i33 >= _iterator31.length) break;
          _ref30 = _iterator31[_i33++];
        } else {
          _i33 = _iterator31.next();
          if (_i33.done) break;
          _ref30 = _i33.value;
        }

        var file = _ref30;

        file.status = Dropzone.SUCCESS;
        this.emit("success", file, responseText, e);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("successmultiple", files, responseText, e);
        this.emit("completemultiple", files);
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    }

    // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.

  }, {
    key: "_errorProcessing",
    value: function _errorProcessing(files, message, xhr) {
      for (var _iterator32 = files, _isArray32 = true, _i34 = 0, _iterator32 = _isArray32 ? _iterator32 : _iterator32[Symbol.iterator]();;) {
        var _ref31;

        if (_isArray32) {
          if (_i34 >= _iterator32.length) break;
          _ref31 = _iterator32[_i34++];
        } else {
          _i34 = _iterator32.next();
          if (_i34.done) break;
          _ref31 = _i34.value;
        }

        var file = _ref31;

        file.status = Dropzone.ERROR;
        this.emit("error", file, message, xhr);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("errormultiple", files, message, xhr);
        this.emit("completemultiple", files);
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    }
  }], [{
    key: "uuidv4",
    value: function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }
  }]);

  return Dropzone;
}(Emitter);

Dropzone.initClass();

Dropzone.version = "5.4.0";

// This is a map of options for your different dropzones. Add configurations
// to this object for your different dropzone elemens.
//
// Example:
//
//     Dropzone.options.myDropzoneElementId = { maxFilesize: 1 };
//
// To disable autoDiscover for a specific element, you can set `false` as an option:
//
//     Dropzone.options.myDisabledElementId = false;
//
// And in html:
//
//     <form action="/upload" id="my-dropzone-element-id" class="dropzone"></form>
Dropzone.options = {};

// Returns the options for an element or undefined if none available.
Dropzone.optionsForElement = function (element) {
  // Get the `Dropzone.options.elementId` for this element if it exists
  if (element.getAttribute("id")) {
    return Dropzone.options[camelize(element.getAttribute("id"))];
  } else {
    return undefined;
  }
};

// Holds a list of all dropzone instances
Dropzone.instances = [];

// Returns the dropzone for given element if any
Dropzone.forElement = function (element) {
  if (typeof element === "string") {
    element = document.querySelector(element);
  }
  if ((element != null ? element.dropzone : undefined) == null) {
    throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
  }
  return element.dropzone;
};

// Set to false if you don't want Dropzone to automatically find and attach to .dropzone elements.
Dropzone.autoDiscover = true;

// Looks for all .dropzone elements and creates a dropzone for them
Dropzone.discover = function () {
  var dropzones = void 0;
  if (document.querySelectorAll) {
    dropzones = document.querySelectorAll(".dropzone");
  } else {
    dropzones = [];
    // IE :(
    var checkElements = function checkElements(elements) {
      return function () {
        var result = [];
        for (var _iterator33 = elements, _isArray33 = true, _i35 = 0, _iterator33 = _isArray33 ? _iterator33 : _iterator33[Symbol.iterator]();;) {
          var _ref32;

          if (_isArray33) {
            if (_i35 >= _iterator33.length) break;
            _ref32 = _iterator33[_i35++];
          } else {
            _i35 = _iterator33.next();
            if (_i35.done) break;
            _ref32 = _i35.value;
          }

          var el = _ref32;

          if (/(^| )dropzone($| )/.test(el.className)) {
            result.push(dropzones.push(el));
          } else {
            result.push(undefined);
          }
        }
        return result;
      }();
    };
    checkElements(document.getElementsByTagName("div"));
    checkElements(document.getElementsByTagName("form"));
  }

  return function () {
    var result = [];
    for (var _iterator34 = dropzones, _isArray34 = true, _i36 = 0, _iterator34 = _isArray34 ? _iterator34 : _iterator34[Symbol.iterator]();;) {
      var _ref33;

      if (_isArray34) {
        if (_i36 >= _iterator34.length) break;
        _ref33 = _iterator34[_i36++];
      } else {
        _i36 = _iterator34.next();
        if (_i36.done) break;
        _ref33 = _i36.value;
      }

      var dropzone = _ref33;

      // Create a dropzone unless auto discover has been disabled for specific element
      if (Dropzone.optionsForElement(dropzone) !== false) {
        result.push(new Dropzone(dropzone));
      } else {
        result.push(undefined);
      }
    }
    return result;
  }();
};

// Since the whole Drag'n'Drop API is pretty new, some browsers implement it,
// but not correctly.
// So I created a blacklist of userAgents. Yes, yes. Browser sniffing, I know.
// But what to do when browsers *theoretically* support an API, but crash
// when using it.
//
// This is a list of regular expressions tested against navigator.userAgent
//
// ** It should only be used on browser that *do* support the API, but
// incorrectly **
//
Dropzone.blacklistedBrowsers = [
// The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
/opera.*(Macintosh|Windows Phone).*version\/12/i];

// Checks if the browser is supported
Dropzone.isBrowserSupported = function () {
  var capableBrowser = true;

  if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
    if (!("classList" in document.createElement("a"))) {
      capableBrowser = false;
    } else {
      // The browser supports the API, but may be blacklisted.
      for (var _iterator35 = Dropzone.blacklistedBrowsers, _isArray35 = true, _i37 = 0, _iterator35 = _isArray35 ? _iterator35 : _iterator35[Symbol.iterator]();;) {
        var _ref34;

        if (_isArray35) {
          if (_i37 >= _iterator35.length) break;
          _ref34 = _iterator35[_i37++];
        } else {
          _i37 = _iterator35.next();
          if (_i37.done) break;
          _ref34 = _i37.value;
        }

        var regex = _ref34;

        if (regex.test(navigator.userAgent)) {
          capableBrowser = false;
          continue;
        }
      }
    }
  } else {
    capableBrowser = false;
  }

  return capableBrowser;
};

Dropzone.dataURItoBlob = function (dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob
  return new Blob([ab], { type: mimeString });
};

// Returns an array without the rejected item
var without = function without(list, rejectedItem) {
  return list.filter(function (item) {
    return item !== rejectedItem;
  }).map(function (item) {
    return item;
  });
};

// abc-def_ghi -> abcDefGhi
var camelize = function camelize(str) {
  return str.replace(/[\-_](\w)/g, function (match) {
    return match.charAt(1).toUpperCase();
  });
};

// Creates an element from string
Dropzone.createElement = function (string) {
  var div = document.createElement("div");
  div.innerHTML = string;
  return div.childNodes[0];
};

// Tests if given element is inside (or simply is) the container
Dropzone.elementInside = function (element, container) {
  if (element === container) {
    return true;
  } // Coffeescript doesn't support do/while loops
  while (element = element.parentNode) {
    if (element === container) {
      return true;
    }
  }
  return false;
};

Dropzone.getElement = function (el, name) {
  var element = void 0;
  if (typeof el === "string") {
    element = document.querySelector(el);
  } else if (el.nodeType != null) {
    element = el;
  }
  if (element == null) {
    throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
  }
  return element;
};

Dropzone.getElements = function (els, name) {
  var el = void 0,
      elements = void 0;
  if (els instanceof Array) {
    elements = [];
    try {
      for (var _iterator36 = els, _isArray36 = true, _i38 = 0, _iterator36 = _isArray36 ? _iterator36 : _iterator36[Symbol.iterator]();;) {
        if (_isArray36) {
          if (_i38 >= _iterator36.length) break;
          el = _iterator36[_i38++];
        } else {
          _i38 = _iterator36.next();
          if (_i38.done) break;
          el = _i38.value;
        }

        elements.push(this.getElement(el, name));
      }
    } catch (e) {
      elements = null;
    }
  } else if (typeof els === "string") {
    elements = [];
    for (var _iterator37 = document.querySelectorAll(els), _isArray37 = true, _i39 = 0, _iterator37 = _isArray37 ? _iterator37 : _iterator37[Symbol.iterator]();;) {
      if (_isArray37) {
        if (_i39 >= _iterator37.length) break;
        el = _iterator37[_i39++];
      } else {
        _i39 = _iterator37.next();
        if (_i39.done) break;
        el = _i39.value;
      }

      elements.push(el);
    }
  } else if (els.nodeType != null) {
    elements = [els];
  }

  if (elements == null || !elements.length) {
    throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
  }

  return elements;
};

// Asks the user the question and calls accepted or rejected accordingly
//
// The default implementation just uses `window.confirm` and then calls the
// appropriate callback.
Dropzone.confirm = function (question, accepted, rejected) {
  if (window.confirm(question)) {
    return accepted();
  } else if (rejected != null) {
    return rejected();
  }
};

// Validates the mime type like this:
//
// https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept
Dropzone.isValidFile = function (file, acceptedFiles) {
  if (!acceptedFiles) {
    return true;
  } // If there are no accepted mime types, it's OK
  acceptedFiles = acceptedFiles.split(",");

  var mimeType = file.type;
  var baseMimeType = mimeType.replace(/\/.*$/, "");

  for (var _iterator38 = acceptedFiles, _isArray38 = true, _i40 = 0, _iterator38 = _isArray38 ? _iterator38 : _iterator38[Symbol.iterator]();;) {
    var _ref35;

    if (_isArray38) {
      if (_i40 >= _iterator38.length) break;
      _ref35 = _iterator38[_i40++];
    } else {
      _i40 = _iterator38.next();
      if (_i40.done) break;
      _ref35 = _i40.value;
    }

    var validType = _ref35;

    validType = validType.trim();
    if (validType.charAt(0) === ".") {
      if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
        return true;
      }
    } else if (/\/\*$/.test(validType)) {
      // This is something like a image/* mime type
      if (baseMimeType === validType.replace(/\/.*$/, "")) {
        return true;
      }
    } else {
      if (mimeType === validType) {
        return true;
      }
    }
  }

  return false;
};

// Augment jQuery
if (typeof jQuery !== 'undefined' && jQuery !== null) {
  jQuery.fn.dropzone = function (options) {
    return this.each(function () {
      return new Dropzone(this, options);
    });
  };
}

if (typeof module !== 'undefined' && module !== null) {
  module.exports = Dropzone;
} else {
  window.Dropzone = Dropzone;
}

// Dropzone file status codes
Dropzone.ADDED = "added";

Dropzone.QUEUED = "queued";
// For backwards compatibility. Now, if a file is accepted, it's either queued
// or uploading.
Dropzone.ACCEPTED = Dropzone.QUEUED;

Dropzone.UPLOADING = "uploading";
Dropzone.PROCESSING = Dropzone.UPLOADING; // alias

Dropzone.CANCELED = "canceled";
Dropzone.ERROR = "error";
Dropzone.SUCCESS = "success";

/*

 Bugfix for iOS 6 and 7
 Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
 based on the work of https://github.com/stomita/ios-imagefile-megapixel

 */

// Detecting vertical squash in loaded image.
// Fixes a bug which squash image vertically while drawing into canvas for some images.
// This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
var detectVerticalSquash = function detectVerticalSquash(img) {
  var iw = img.naturalWidth;
  var ih = img.naturalHeight;
  var canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = ih;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var _ctx$getImageData = ctx.getImageData(1, 0, 1, ih),
      data = _ctx$getImageData.data;

  // search image edge pixel position in case it is squashed vertically.


  var sy = 0;
  var ey = ih;
  var py = ih;
  while (py > sy) {
    var alpha = data[(py - 1) * 4 + 3];

    if (alpha === 0) {
      ey = py;
    } else {
      sy = py;
    }

    py = ey + sy >> 1;
  }
  var ratio = py / ih;

  if (ratio === 0) {
    return 1;
  } else {
    return ratio;
  }
};

// A replacement for context.drawImage
// (args are for source and destination).
var drawImageIOSFix = function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
  var vertSquashRatio = detectVerticalSquash(img);
  return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
};

// Based on MinifyJpeg
// Source: http://www.perry.cz/files/ExifRestorer.js
// http://elicon.blog57.fc2.com/blog-entry-206.html

var ExifRestore = function () {
  function ExifRestore() {
    _classCallCheck(this, ExifRestore);
  }

  _createClass(ExifRestore, null, [{
    key: "initClass",
    value: function initClass() {
      this.KEY_STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    }
  }, {
    key: "encode64",
    value: function encode64(input) {
      var output = '';
      var chr1 = undefined;
      var chr2 = undefined;
      var chr3 = '';
      var enc1 = undefined;
      var enc2 = undefined;
      var enc3 = undefined;
      var enc4 = '';
      var i = 0;
      while (true) {
        chr1 = input[i++];
        chr2 = input[i++];
        chr3 = input[i++];
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';
        if (!(i < input.length)) {
          break;
        }
      }
      return output;
    }
  }, {
    key: "restore",
    value: function restore(origFileBase64, resizedFileBase64) {
      if (!origFileBase64.match('data:image/jpeg;base64,')) {
        return resizedFileBase64;
      }
      var rawImage = this.decode64(origFileBase64.replace('data:image/jpeg;base64,', ''));
      var segments = this.slice2Segments(rawImage);
      var image = this.exifManipulation(resizedFileBase64, segments);
      return "data:image/jpeg;base64," + this.encode64(image);
    }
  }, {
    key: "exifManipulation",
    value: function exifManipulation(resizedFileBase64, segments) {
      var exifArray = this.getExifArray(segments);
      var newImageArray = this.insertExif(resizedFileBase64, exifArray);
      var aBuffer = new Uint8Array(newImageArray);
      return aBuffer;
    }
  }, {
    key: "getExifArray",
    value: function getExifArray(segments) {
      var seg = undefined;
      var x = 0;
      while (x < segments.length) {
        seg = segments[x];
        if (seg[0] === 255 & seg[1] === 225) {
          return seg;
        }
        x++;
      }
      return [];
    }
  }, {
    key: "insertExif",
    value: function insertExif(resizedFileBase64, exifArray) {
      var imageData = resizedFileBase64.replace('data:image/jpeg;base64,', '');
      var buf = this.decode64(imageData);
      var separatePoint = buf.indexOf(255, 3);
      var mae = buf.slice(0, separatePoint);
      var ato = buf.slice(separatePoint);
      var array = mae;
      array = array.concat(exifArray);
      array = array.concat(ato);
      return array;
    }
  }, {
    key: "slice2Segments",
    value: function slice2Segments(rawImageArray) {
      var head = 0;
      var segments = [];
      while (true) {
        var length;
        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {
          break;
        }
        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {
          head += 2;
        } else {
          length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
          var endPoint = head + length + 2;
          var seg = rawImageArray.slice(head, endPoint);
          segments.push(seg);
          head = endPoint;
        }
        if (head > rawImageArray.length) {
          break;
        }
      }
      return segments;
    }
  }, {
    key: "decode64",
    value: function decode64(input) {
      var output = '';
      var chr1 = undefined;
      var chr2 = undefined;
      var chr3 = '';
      var enc1 = undefined;
      var enc2 = undefined;
      var enc3 = undefined;
      var enc4 = '';
      var i = 0;
      var buf = [];
      // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
      var base64test = /[^A-Za-z0-9\+\/\=]/g;
      if (base64test.exec(input)) {
        console.warn('There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, \'+\', \'/\',and \'=\'\nExpect errors in decoding.');
      }
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
      while (true) {
        enc1 = this.KEY_STR.indexOf(input.charAt(i++));
        enc2 = this.KEY_STR.indexOf(input.charAt(i++));
        enc3 = this.KEY_STR.indexOf(input.charAt(i++));
        enc4 = this.KEY_STR.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        buf.push(chr1);
        if (enc3 !== 64) {
          buf.push(chr2);
        }
        if (enc4 !== 64) {
          buf.push(chr3);
        }
        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';
        if (!(i < input.length)) {
          break;
        }
      }
      return buf;
    }
  }]);

  return ExifRestore;
}();

ExifRestore.initClass();

/*
 * contentloaded.js
 *
 * Author: Diego Perini (diego.perini at gmail.com)
 * Summary: cross-browser wrapper for DOMContentLoaded
 * Updated: 20101020
 * License: MIT
 * Version: 1.2
 *
 * URL:
 * http://javascript.nwbox.com/ContentLoaded/
 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
 */

// @win window reference
// @fn function reference
var contentLoaded = function contentLoaded(win, fn) {
  var done = false;
  var top = true;
  var doc = win.document;
  var root = doc.documentElement;
  var add = doc.addEventListener ? "addEventListener" : "attachEvent";
  var rem = doc.addEventListener ? "removeEventListener" : "detachEvent";
  var pre = doc.addEventListener ? "" : "on";
  var init = function init(e) {
    if (e.type === "readystatechange" && doc.readyState !== "complete") {
      return;
    }
    (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
    if (!done && (done = true)) {
      return fn.call(win, e.type || e);
    }
  };

  var poll = function poll() {
    try {
      root.doScroll("left");
    } catch (e) {
      setTimeout(poll, 50);
      return;
    }
    return init("poll");
  };

  if (doc.readyState !== "complete") {
    if (doc.createEventObject && root.doScroll) {
      try {
        top = !win.frameElement;
      } catch (error) {}
      if (top) {
        poll();
      }
    }
    doc[add](pre + "DOMContentLoaded", init, false);
    doc[add](pre + "readystatechange", init, false);
    return win[add](pre + "load", init, false);
  }
};

// As a single function to be able to write tests.
Dropzone._autoDiscoverFunction = function () {
  if (Dropzone.autoDiscover) {
    return Dropzone.discover();
  }
};
contentLoaded(window, Dropzone._autoDiscoverFunction);

function __guard__(value, transform) {
  return typeof value !== 'undefined' && value !== null ? transform(value) : undefined;
}
function __guardMethod__(obj, methodName, transform) {
  if (typeof obj !== 'undefined' && obj !== null && typeof obj[methodName] === 'function') {
    return transform(obj, methodName);
  } else {
    return undefined;
  }
}

(function(window, document, $, undefined) {
  "use strict";
  var DropzoneDemos = function() {

    // single file upload
    Dropzone.options.singleFileUpload = {
      paramName: "file",
      maxFiles: 1,
      maxFilesize: 5, // MB
      accept: function(file, done) {
        if (file.name == "justinbieber.jpg") {
          done("Naha, you don't.");
        } else {
          done();
        }
      }
    };

    // multi file upload
    Dropzone.options.multiFileUpload = {
      paramName: "file",
      maxFiles: 15,
      maxFilesize: 15,
      accept: function(file, done) {
        if (file.name == "justinbieber.jpg") {
          done("Naha, you don't.");
        } else {
          done();
        }
      }
    };

    // file type validation
    Dropzone.options.fileTypeValidation = {
      paramName: "file",
      maxFiles: 15,
      maxFilesize: 15,
      addRemoveLinks: true,
      acceptedFiles: ".png,.jpg,.gif,.bmp,.jpeg",
      accept: function(file, done) {
        if (file.name == "justinbieber.jpg") {
          done("Naha, you don't.");
        } else {
          done();
        }
      }

    };

  }

  DropzoneDemos();

})(window, document, window.jQuery);

// Title: Demo code Drag and Drop
// Location: components.drag-and-drop.html
// Dependency File(s):
// assets/vendor/dragula/dragula.min.css
// assets/vendor/dragula/dragula.min.js
// -----------------------------------------------------------------------------

(function(window, document, $, undefined) {
  "use strict";
    $(function() {
      if (typeof dragula == 'function') {
          dragula([document.querySelector('#column-a'), document.querySelector('#column-b')]);
      }
    });

})(window, document, window.jQuery);

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.dragula=e()}}(function(){return function e(n,t,r){function o(u,c){if(!t[u]){if(!n[u]){var a="function"==typeof require&&require;if(!c&&a)return a(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var l=t[u]={exports:{}};n[u][0].call(l.exports,function(e){var t=n[u][1][e];return o(t?t:e)},l,l.exports,e,n,t,r)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,n,t){"use strict";function r(e){var n=u[e];return n?n.lastIndex=0:u[e]=n=new RegExp(c+e+a,"g"),n}function o(e,n){var t=e.className;t.length?r(n).test(t)||(e.className+=" "+n):e.className=n}function i(e,n){e.className=e.className.replace(r(n)," ").trim()}var u={},c="(?:^|\\s)",a="(?:\\s|$)";n.exports={add:o,rm:i}},{}],2:[function(e,n,t){(function(t){"use strict";function r(e,n){function t(e){return-1!==le.containers.indexOf(e)||fe.isContainer(e)}function r(e){var n=e?"remove":"add";o(S,n,"mousedown",O),o(S,n,"mouseup",L)}function c(e){var n=e?"remove":"add";o(S,n,"mousemove",N)}function m(e){var n=e?"remove":"add";w[n](S,"selectstart",C),w[n](S,"click",C)}function h(){r(!0),L({})}function C(e){ce&&e.preventDefault()}function O(e){ne=e.clientX,te=e.clientY;var n=1!==i(e)||e.metaKey||e.ctrlKey;if(!n){var t=e.target,r=T(t);r&&(ce=r,c(),"mousedown"===e.type&&(p(t)?t.focus():e.preventDefault()))}}function N(e){if(ce){if(0===i(e))return void L({});if(void 0===e.clientX||e.clientX!==ne||void 0===e.clientY||e.clientY!==te){if(fe.ignoreInputTextSelection){var n=y("clientX",e),t=y("clientY",e),r=x.elementFromPoint(n,t);if(p(r))return}var o=ce;c(!0),m(),D(),B(o);var a=u(W);Z=y("pageX",e)-a.left,ee=y("pageY",e)-a.top,E.add(ie||W,"gu-transit"),K(),U(e)}}}function T(e){if(!(le.dragging&&J||t(e))){for(var n=e;v(e)&&t(v(e))===!1;){if(fe.invalid(e,n))return;if(e=v(e),!e)return}var r=v(e);if(r&&!fe.invalid(e,n)){var o=fe.moves(e,r,n,g(e));if(o)return{item:e,source:r}}}}function X(e){return!!T(e)}function Y(e){var n=T(e);n&&B(n)}function B(e){$(e.item,e.source)&&(ie=e.item.cloneNode(!0),le.emit("cloned",ie,e.item,"copy")),Q=e.source,W=e.item,re=oe=g(e.item),le.dragging=!0,le.emit("drag",W,Q)}function P(){return!1}function D(){if(le.dragging){var e=ie||W;M(e,v(e))}}function I(){ce=!1,c(!0),m(!0)}function L(e){if(I(),le.dragging){var n=ie||W,t=y("clientX",e),r=y("clientY",e),o=a(J,t,r),i=q(o,t,r);i&&(ie&&fe.copySortSource||!ie||i!==Q)?M(n,i):fe.removeOnSpill?R():A()}}function M(e,n){var t=v(e);ie&&fe.copySortSource&&n===Q&&t.removeChild(W),k(n)?le.emit("cancel",e,Q,Q):le.emit("drop",e,n,Q,oe),j()}function R(){if(le.dragging){var e=ie||W,n=v(e);n&&n.removeChild(e),le.emit(ie?"cancel":"remove",e,n,Q),j()}}function A(e){if(le.dragging){var n=arguments.length>0?e:fe.revertOnSpill,t=ie||W,r=v(t),o=k(r);o===!1&&n&&(ie?r&&r.removeChild(ie):Q.insertBefore(t,re)),o||n?le.emit("cancel",t,Q,Q):le.emit("drop",t,r,Q,oe),j()}}function j(){var e=ie||W;I(),z(),e&&E.rm(e,"gu-transit"),ue&&clearTimeout(ue),le.dragging=!1,ae&&le.emit("out",e,ae,Q),le.emit("dragend",e),Q=W=ie=re=oe=ue=ae=null}function k(e,n){var t;return t=void 0!==n?n:J?oe:g(ie||W),e===Q&&t===re}function q(e,n,r){function o(){var o=t(i);if(o===!1)return!1;var u=H(i,e),c=V(i,u,n,r),a=k(i,c);return a?!0:fe.accepts(W,i,Q,c)}for(var i=e;i&&!o();)i=v(i);return i}function U(e){function n(e){le.emit(e,f,ae,Q)}function t(){s&&n("over")}function r(){ae&&n("out")}if(J){e.preventDefault();var o=y("clientX",e),i=y("clientY",e),u=o-Z,c=i-ee;J.style.left=u+"px",J.style.top=c+"px";var f=ie||W,l=a(J,o,i),d=q(l,o,i),s=null!==d&&d!==ae;(s||null===d)&&(r(),ae=d,t());var p=v(f);if(d===Q&&ie&&!fe.copySortSource)return void(p&&p.removeChild(f));var m,h=H(d,l);if(null!==h)m=V(d,h,o,i);else{if(fe.revertOnSpill!==!0||ie)return void(ie&&p&&p.removeChild(f));m=re,d=Q}(null===m&&s||m!==f&&m!==g(f))&&(oe=m,d.insertBefore(f,m),le.emit("shadow",f,d,Q))}}function _(e){E.rm(e,"gu-hide")}function F(e){le.dragging&&E.add(e,"gu-hide")}function K(){if(!J){var e=W.getBoundingClientRect();J=W.cloneNode(!0),J.style.width=d(e)+"px",J.style.height=s(e)+"px",E.rm(J,"gu-transit"),E.add(J,"gu-mirror"),fe.mirrorContainer.appendChild(J),o(S,"add","mousemove",U),E.add(fe.mirrorContainer,"gu-unselectable"),le.emit("cloned",J,W,"mirror")}}function z(){J&&(E.rm(fe.mirrorContainer,"gu-unselectable"),o(S,"remove","mousemove",U),v(J).removeChild(J),J=null)}function H(e,n){for(var t=n;t!==e&&v(t)!==e;)t=v(t);return t===S?null:t}function V(e,n,t,r){function o(){var n,o,i,u=e.children.length;for(n=0;u>n;n++){if(o=e.children[n],i=o.getBoundingClientRect(),c&&i.left+i.width/2>t)return o;if(!c&&i.top+i.height/2>r)return o}return null}function i(){var e=n.getBoundingClientRect();return u(c?t>e.left+d(e)/2:r>e.top+s(e)/2)}function u(e){return e?g(n):n}var c="horizontal"===fe.direction,a=n!==e?i():o();return a}function $(e,n){return"boolean"==typeof fe.copy?fe.copy:fe.copy(e,n)}var G=arguments.length;1===G&&Array.isArray(e)===!1&&(n=e,e=[]);var J,Q,W,Z,ee,ne,te,re,oe,ie,ue,ce,ae=null,fe=n||{};void 0===fe.moves&&(fe.moves=l),void 0===fe.accepts&&(fe.accepts=l),void 0===fe.invalid&&(fe.invalid=P),void 0===fe.containers&&(fe.containers=e||[]),void 0===fe.isContainer&&(fe.isContainer=f),void 0===fe.copy&&(fe.copy=!1),void 0===fe.copySortSource&&(fe.copySortSource=!1),void 0===fe.revertOnSpill&&(fe.revertOnSpill=!1),void 0===fe.removeOnSpill&&(fe.removeOnSpill=!1),void 0===fe.direction&&(fe.direction="vertical"),void 0===fe.ignoreInputTextSelection&&(fe.ignoreInputTextSelection=!0),void 0===fe.mirrorContainer&&(fe.mirrorContainer=x.body);var le=b({containers:fe.containers,start:Y,end:D,cancel:A,remove:R,destroy:h,canMove:X,dragging:!1});return fe.removeOnSpill===!0&&le.on("over",_).on("out",F),r(),le}function o(e,n,r,o){var i={mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"},u={mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"},c={mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"};t.navigator.pointerEnabled?w[n](e,u[r],o):t.navigator.msPointerEnabled?w[n](e,c[r],o):(w[n](e,i[r],o),w[n](e,r,o))}function i(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var n=e.button;return void 0!==n?1&n?1:2&n?3:4&n?2:0:void 0}function u(e){var n=e.getBoundingClientRect();return{left:n.left+c("scrollLeft","pageXOffset"),top:n.top+c("scrollTop","pageYOffset")}}function c(e,n){return"undefined"!=typeof t[n]?t[n]:S.clientHeight?S[e]:x.body[e]}function a(e,n,t){var r,o=e||{},i=o.className;return o.className+=" gu-hide",r=x.elementFromPoint(n,t),o.className=i,r}function f(){return!1}function l(){return!0}function d(e){return e.width||e.right-e.left}function s(e){return e.height||e.bottom-e.top}function v(e){return e.parentNode===x?null:e.parentNode}function p(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||m(e)}function m(e){return e?"false"===e.contentEditable?!1:"true"===e.contentEditable?!0:m(v(e)):!1}function g(e){function n(){var n=e;do n=n.nextSibling;while(n&&1!==n.nodeType);return n}return e.nextElementSibling||n()}function h(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}function y(e,n){var t=h(n),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in t)&&r[e]in t&&(e=r[e]),t[e]}var b=e("contra/emitter"),w=e("crossvent"),E=e("./classes"),x=document,S=x.documentElement;n.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./classes":1,"contra/emitter":5,crossvent:6}],3:[function(e,n,t){n.exports=function(e,n){return Array.prototype.slice.call(e,n)}},{}],4:[function(e,n,t){"use strict";var r=e("ticky");n.exports=function(e,n,t){e&&r(function(){e.apply(t||null,n||[])})}},{ticky:9}],5:[function(e,n,t){"use strict";var r=e("atoa"),o=e("./debounce");n.exports=function(e,n){var t=n||{},i={};return void 0===e&&(e={}),e.on=function(n,t){return i[n]?i[n].push(t):i[n]=[t],e},e.once=function(n,t){return t._once=!0,e.on(n,t),e},e.off=function(n,t){var r=arguments.length;if(1===r)delete i[n];else if(0===r)i={};else{var o=i[n];if(!o)return e;o.splice(o.indexOf(t),1)}return e},e.emit=function(){var n=r(arguments);return e.emitterSnapshot(n.shift()).apply(this,n)},e.emitterSnapshot=function(n){var u=(i[n]||[]).slice(0);return function(){var i=r(arguments),c=this||e;if("error"===n&&t["throws"]!==!1&&!u.length)throw 1===i.length?i[0]:i;return u.forEach(function(r){t.async?o(r,i,c):r.apply(c,i),r._once&&e.off(n,r)}),e}},e}},{"./debounce":4,atoa:3}],6:[function(e,n,t){(function(t){"use strict";function r(e,n,t,r){return e.addEventListener(n,t,r)}function o(e,n,t){return e.attachEvent("on"+n,f(e,n,t))}function i(e,n,t,r){return e.removeEventListener(n,t,r)}function u(e,n,t){var r=l(e,n,t);return r?e.detachEvent("on"+n,r):void 0}function c(e,n,t){function r(){var e;return p.createEvent?(e=p.createEvent("Event"),e.initEvent(n,!0,!0)):p.createEventObject&&(e=p.createEventObject()),e}function o(){return new s(n,{detail:t})}var i=-1===v.indexOf(n)?o():r();e.dispatchEvent?e.dispatchEvent(i):e.fireEvent("on"+n,i)}function a(e,n,r){return function(n){var o=n||t.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,r.call(e,o)}}function f(e,n,t){var r=l(e,n,t)||a(e,n,t);return h.push({wrapper:r,element:e,type:n,fn:t}),r}function l(e,n,t){var r=d(e,n,t);if(r){var o=h[r].wrapper;return h.splice(r,1),o}}function d(e,n,t){var r,o;for(r=0;r<h.length;r++)if(o=h[r],o.element===e&&o.type===n&&o.fn===t)return r}var s=e("custom-event"),v=e("./eventmap"),p=t.document,m=r,g=i,h=[];t.addEventListener||(m=o,g=u),n.exports={add:m,remove:g,fabricate:c}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./eventmap":7,"custom-event":8}],7:[function(e,n,t){(function(e){"use strict";var t=[],r="",o=/^on/;for(r in e)o.test(r)&&t.push(r.slice(2));n.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(e,n,t){(function(e){function t(){try{var e=new r("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(n){}return!1}var r=e.CustomEvent;n.exports=t()?r:"function"==typeof document.createEvent?function(e,n){var t=document.createEvent("CustomEvent");return n?t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail):t.initCustomEvent(e,!1,!1,void 0),t}:function(e,n){var t=document.createEventObject();return t.type=e,n?(t.bubbles=Boolean(n.bubbles),t.cancelable=Boolean(n.cancelable),t.detail=n.detail):(t.bubbles=!1,t.cancelable=!1,t.detail=void 0),t}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,n,t){var r,o="function"==typeof setImmediate;r=o?function(e){setImmediate(e)}:function(e){setTimeout(e,0)},n.exports=r},{}]},{},[2])(2)});
(function (factory) {

if ( typeof define === 'function' && define.amd ) {

		// AMD. Register as an anonymous module.
		define([], factory);

} else if ( typeof exports === 'object' ) {

		// Node/CommonJS
		module.exports = factory();

} else {

		// Browser globals
		window.wNumb = factory();
}

}(function(){

'use strict';

var FormatOptions = [
'decimals',
'thousand',
'mark',
'prefix',
'suffix',
'encoder',
'decoder',
'negativeBefore',
'negative',
'edit',
'undo'
];

// General

// Reverse a string
function strReverse ( a ) {
return a.split('').reverse().join('');
}

// Check if a string starts with a specified prefix.
function strStartsWith ( input, match ) {
return input.substring(0, match.length) === match;
}

// Check is a string ends in a specified suffix.
function strEndsWith ( input, match ) {
return input.slice(-1 * match.length) === match;
}

// Throw an error if formatting options are incompatible.
function throwEqualError( F, a, b ) {
if ( (F[a] || F[b]) && (F[a] === F[b]) ) {
	throw new Error(a);
}
}

// Check if a number is finite and not NaN
function isValidNumber ( input ) {
return typeof input === 'number' && isFinite( input );
}

// Provide rounding-accurate toFixed method.
// Borrowed: http://stackoverflow.com/a/21323330/775265
function toFixed ( value, exp ) {
value = value.toString().split('e');
value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));
value = value.toString().split('e');
return (+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp))).toFixed(exp);
}


// Formatting

// Accept a number as input, output formatted string.
function formatTo ( decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input ) {

var originalInput = input, inputIsNegative, inputPieces, inputBase, inputDecimals = '', output = '';

// Apply user encoder to the input.
// Expected outcome: number.
if ( encoder ) {
	input = encoder(input);
}

// Stop if no valid number was provided, the number is infinite or NaN.
if ( !isValidNumber(input) ) {
	return false;
}

// Rounding away decimals might cause a value of -0
// when using very small ranges. Remove those cases.
if ( decimals !== false && parseFloat(input.toFixed(decimals)) === 0 ) {
	input = 0;
}

// Formatting is done on absolute numbers,
// decorated by an optional negative symbol.
if ( input < 0 ) {
	inputIsNegative = true;
	input = Math.abs(input);
}

// Reduce the number of decimals to the specified option.
if ( decimals !== false ) {
	input = toFixed( input, decimals );
}

// Transform the number into a string, so it can be split.
input = input.toString();

// Break the number on the decimal separator.
if ( input.indexOf('.') !== -1 ) {
	inputPieces = input.split('.');

	inputBase = inputPieces[0];

	if ( mark ) {
		inputDecimals = mark + inputPieces[1];
	}

} else {

// If it isn't split, the entire number will do.
	inputBase = input;
}

// Group numbers in sets of three.
if ( thousand ) {
	inputBase = strReverse(inputBase).match(/.{1,3}/g);
	inputBase = strReverse(inputBase.join( strReverse( thousand ) ));
}

// If the number is negative, prefix with negation symbol.
if ( inputIsNegative && negativeBefore ) {
	output += negativeBefore;
}

// Prefix the number
if ( prefix ) {
	output += prefix;
}

// Normal negative option comes after the prefix. Defaults to '-'.
if ( inputIsNegative && negative ) {
	output += negative;
}

// Append the actual number.
output += inputBase;
output += inputDecimals;

// Apply the suffix.
if ( suffix ) {
	output += suffix;
}

// Run the output through a user-specified post-formatter.
if ( edit ) {
	output = edit ( output, originalInput );
}

// All done.
return output;
}

// Accept a sting as input, output decoded number.
function formatFrom ( decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input ) {

var originalInput = input, inputIsNegative, output = '';

// User defined pre-decoder. Result must be a non empty string.
if ( undo ) {
	input = undo(input);
}

// Test the input. Can't be empty.
if ( !input || typeof input !== 'string' ) {
	return false;
}

// If the string starts with the negativeBefore value: remove it.
// Remember is was there, the number is negative.
if ( negativeBefore && strStartsWith(input, negativeBefore) ) {
	input = input.replace(negativeBefore, '');
	inputIsNegative = true;
}

// Repeat the same procedure for the prefix.
if ( prefix && strStartsWith(input, prefix) ) {
	input = input.replace(prefix, '');
}

// And again for negative.
if ( negative && strStartsWith(input, negative) ) {
	input = input.replace(negative, '');
	inputIsNegative = true;
}

// Remove the suffix.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
if ( suffix && strEndsWith(input, suffix) ) {
	input = input.slice(0, -1 * suffix.length);
}

// Remove the thousand grouping.
if ( thousand ) {
	input = input.split(thousand).join('');
}

// Set the decimal separator back to period.
if ( mark ) {
	input = input.replace(mark, '.');
}

// Prepend the negative symbol.
if ( inputIsNegative ) {
	output += '-';
}

// Add the number
output += input;

// Trim all non-numeric characters (allow '.' and '-');
output = output.replace(/[^0-9\.\-.]/g, '');

// The value contains no parse-able number.
if ( output === '' ) {
	return false;
}

// Covert to number.
output = Number(output);

// Run the user-specified post-decoder.
if ( decoder ) {
	output = decoder(output);
}

// Check is the output is valid, otherwise: return false.
if ( !isValidNumber(output) ) {
	return false;
}

return output;
}


// Framework

// Validate formatting options
function validate ( inputOptions ) {

var i, optionName, optionValue,
	filteredOptions = {};

if ( inputOptions['suffix'] === undefined ) {
	inputOptions['suffix'] = inputOptions['postfix'];
}

for ( i = 0; i < FormatOptions.length; i+=1 ) {

	optionName = FormatOptions[i];
	optionValue = inputOptions[optionName];

	if ( optionValue === undefined ) {

		// Only default if negativeBefore isn't set.
		if ( optionName === 'negative' && !filteredOptions.negativeBefore ) {
			filteredOptions[optionName] = '-';
		// Don't set a default for mark when 'thousand' is set.
		} else if ( optionName === 'mark' && filteredOptions.thousand !== '.' ) {
			filteredOptions[optionName] = '.';
		} else {
			filteredOptions[optionName] = false;
		}

	// Floating points in JS are stable up to 7 decimals.
	} else if ( optionName === 'decimals' ) {
		if ( optionValue >= 0 && optionValue < 8 ) {
			filteredOptions[optionName] = optionValue;
		} else {
			throw new Error(optionName);
		}

	// These options, when provided, must be functions.
	} else if ( optionName === 'encoder' || optionName === 'decoder' || optionName === 'edit' || optionName === 'undo' ) {
		if ( typeof optionValue === 'function' ) {
			filteredOptions[optionName] = optionValue;
		} else {
			throw new Error(optionName);
		}

	// Other options are strings.
	} else {

		if ( typeof optionValue === 'string' ) {
			filteredOptions[optionName] = optionValue;
		} else {
			throw new Error(optionName);
		}
	}
}

// Some values can't be extracted from a
// string if certain combinations are present.
throwEqualError(filteredOptions, 'mark', 'thousand');
throwEqualError(filteredOptions, 'prefix', 'negative');
throwEqualError(filteredOptions, 'prefix', 'negativeBefore');

return filteredOptions;
}

// Pass all options as function arguments
function passAll ( options, method, input ) {
var i, args = [];

// Add all options in order of FormatOptions
for ( i = 0; i < FormatOptions.length; i+=1 ) {
	args.push(options[FormatOptions[i]]);
}

// Append the input, then call the method, presenting all
// options as arguments.
args.push(input);
return method.apply('', args);
}

function wNumb ( options ) {

if ( !(this instanceof wNumb) ) {
	return new wNumb ( options );
}

if ( typeof options !== "object" ) {
	return;
}

options = validate(options);

// Call 'formatTo' with proper arguments.
this.to = function ( input ) {
	return passAll(options, formatTo, input);
};

// Call 'formatFrom' with proper arguments.
this.from = function ( input ) {
	return passAll(options, formatFrom, input);
};
}

return wNumb;

}));

/*! nouislider - 9.0.0 - 2016-09-29 21:44:02 */

(function (factory) {

    if ( typeof define === 'function' && define.amd ) {

        // AMD. Register as an anonymous module.
        define([], factory);

    } else if ( typeof exports === 'object' ) {

        // Node/CommonJS
        module.exports = factory();

    } else {

        // Browser globals
        window.noUiSlider = factory();
    }

}(function( ){

	'use strict';


	// Creates a node, adds it to target, returns the new node.
	function addNodeTo ( target, className ) {
		var div = document.createElement('div');
		addClass(div, className);
		target.appendChild(div);
		return div;
	}

	// Removes duplicates from an array.
	function unique ( array ) {
		return array.filter(function(a){
			return !this[a] ? this[a] = true : false;
		}, {});
	}

	// Round a value to the closest 'to'.
	function closest ( value, to ) {
		return Math.round(value / to) * to;
	}

	// Current position of an element relative to the document.
	function offset ( elem, orientation ) {

	var rect = elem.getBoundingClientRect(),
		doc = elem.ownerDocument,
		docElem = doc.documentElement,
		pageOffset = getPageOffset();

		// getBoundingClientRect contains left scroll in Chrome on Android.
		// I haven't found a feature detection that proves this. Worst case
		// scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
		if ( /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) ) {
			pageOffset.x = 0;
		}

		return orientation ? (rect.top + pageOffset.y - docElem.clientTop) : (rect.left + pageOffset.x - docElem.clientLeft);
	}

	// Checks whether a value is numerical.
	function isNumeric ( a ) {
		return typeof a === 'number' && !isNaN( a ) && isFinite( a );
	}

	// Sets a class and removes it after [duration] ms.
	function addClassFor ( element, className, duration ) {
		if (duration > 0) {
		addClass(element, className);
			setTimeout(function(){
				removeClass(element, className);
			}, duration);
		}
	}

	// Limits a value to 0 - 100
	function limit ( a ) {
		return Math.max(Math.min(a, 100), 0);
	}

	// Wraps a variable as an array, if it isn't one yet.
	// Note that an input array is returned by reference!
	function asArray ( a ) {
		return Array.isArray(a) ? a : [a];
	}

	// Counts decimals
	function countDecimals ( numStr ) {
		numStr = String(numStr);
		var pieces = numStr.split(".");
		return pieces.length > 1 ? pieces[1].length : 0;
	}

	// http://youmightnotneedjquery.com/#add_class
	function addClass ( el, className ) {
		if ( el.classList ) {
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	}

	// http://youmightnotneedjquery.com/#remove_class
	function removeClass ( el, className ) {
		if ( el.classList ) {
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
	function hasClass ( el, className ) {
		return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
	function getPageOffset ( ) {

		var supportPageOffset = window.pageXOffset !== undefined,
			isCSS1Compat = ((document.compatMode || "") === "CSS1Compat"),
			x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
			y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

		return {
			x: x,
			y: y
		};
	}

	// we provide a function to compute constants instead
	// of accessing window.* as soon as the module needs it
	// so that we do not compute anything if not needed
	function getActions ( ) {

		// Determine the events to bind. IE11 implements pointerEvents without
		// a prefix, which breaks compatibility with the IE10 implementation.
		return window.navigator.pointerEnabled ? {
			start: 'pointerdown',
			move: 'pointermove',
			end: 'pointerup'
		} : window.navigator.msPointerEnabled ? {
			start: 'MSPointerDown',
			move: 'MSPointerMove',
			end: 'MSPointerUp'
		} : {
			start: 'mousedown touchstart',
			move: 'mousemove touchmove',
			end: 'mouseup touchend'
		};
	}


// Value calculation

	// Determine the size of a sub-range in relation to a full range.
	function subRangeRatio ( pa, pb ) {
		return (100 / (pb - pa));
	}

	// (percentage) How many percent is this value of this range?
	function fromPercentage ( range, value ) {
		return (value * 100) / ( range[1] - range[0] );
	}

	// (percentage) Where is this value on this range?
	function toPercentage ( range, value ) {
		return fromPercentage( range, range[0] < 0 ?
			value + Math.abs(range[0]) :
				value - range[0] );
	}

	// (value) How much is this percentage on this range?
	function isPercentage ( range, value ) {
		return ((value * ( range[1] - range[0] )) / 100) + range[0];
	}


// Range conversion

	function getJ ( value, arr ) {

		var j = 1;

		while ( value >= arr[j] ){
			j += 1;
		}

		return j;
	}

	// (percentage) Input a value, find where, on a scale of 0-100, it applies.
	function toStepping ( xVal, xPct, value ) {

		if ( value >= xVal.slice(-1)[0] ){
			return 100;
		}

		var j = getJ( value, xVal ), va, vb, pa, pb;

		va = xVal[j-1];
		vb = xVal[j];
		pa = xPct[j-1];
		pb = xPct[j];

		return pa + (toPercentage([va, vb], value) / subRangeRatio (pa, pb));
	}

	// (value) Input a percentage, find where it is on the specified range.
	function fromStepping ( xVal, xPct, value ) {

		// There is no range group that fits 100
		if ( value >= 100 ){
			return xVal.slice(-1)[0];
		}

		var j = getJ( value, xPct ), va, vb, pa, pb;

		va = xVal[j-1];
		vb = xVal[j];
		pa = xPct[j-1];
		pb = xPct[j];

		return isPercentage([va, vb], (value - pa) * subRangeRatio (pa, pb));
	}

	// (percentage) Get the step that applies at a certain value.
	function getStep ( xPct, xSteps, snap, value ) {

		if ( value === 100 ) {
			return value;
		}

		var j = getJ( value, xPct ), a, b;

		// If 'snap' is set, steps are used as fixed points on the slider.
		if ( snap ) {

			a = xPct[j-1];
			b = xPct[j];

			// Find the closest position, a or b.
			if ((value - a) > ((b-a)/2)){
				return b;
			}

			return a;
		}

		if ( !xSteps[j-1] ){
			return value;
		}

		return xPct[j-1] + closest(
			value - xPct[j-1],
			xSteps[j-1]
		);
	}


// Entry parsing

	function handleEntryPoint ( index, value, that ) {

		var percentage;

		// Wrap numerical input in an array.
		if ( typeof value === "number" ) {
			value = [value];
		}

		// Reject any invalid input, by testing whether value is an array.
		if ( Object.prototype.toString.call( value ) !== '[object Array]' ){
			throw new Error("noUiSlider: 'range' contains invalid value.");
		}

		// Covert min/max syntax to 0 and 100.
		if ( index === 'min' ) {
			percentage = 0;
		} else if ( index === 'max' ) {
			percentage = 100;
		} else {
			percentage = parseFloat( index );
		}

		// Check for correct input.
		if ( !isNumeric( percentage ) || !isNumeric( value[0] ) ) {
			throw new Error("noUiSlider: 'range' value isn't numeric.");
		}

		// Store values.
		that.xPct.push( percentage );
		that.xVal.push( value[0] );

		// NaN will evaluate to false too, but to keep
		// logging clear, set step explicitly. Make sure
		// not to override the 'step' setting with false.
		if ( !percentage ) {
			if ( !isNaN( value[1] ) ) {
				that.xSteps[0] = value[1];
			}
		} else {
			that.xSteps.push( isNaN(value[1]) ? false : value[1] );
		}

		that.xHighestCompleteStep.push(0);
	}

	function handleStepPoint ( i, n, that ) {

		// Ignore 'false' stepping.
		if ( !n ) {
			return true;
		}

		// Factor to range ratio
		that.xSteps[i] = fromPercentage([
			 that.xVal[i]
			,that.xVal[i+1]
		], n) / subRangeRatio (
			that.xPct[i],
			that.xPct[i+1] );

		var totalSteps = (that.xVal[i+1] - that.xVal[i]) / that.xNumSteps[i];
		var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
		var step = that.xVal[i] + (that.xNumSteps[i] * highestStep);

		that.xHighestCompleteStep[i] = step;
	}


// Interface

	// The interface to Spectrum handles all direction-based
	// conversions, so the above values are unaware.

	function Spectrum ( entry, snap, direction, singleStep ) {

		this.xPct = [];
		this.xVal = [];
		this.xSteps = [ singleStep || false ];
		this.xNumSteps = [ false ];
		this.xHighestCompleteStep = [];

		this.snap = snap;
		this.direction = direction;

		var index, ordered = [ /* [0, 'min'], [1, '50%'], [2, 'max'] */ ];

		// Map the object keys to an array.
		for ( index in entry ) {
			if ( entry.hasOwnProperty(index) ) {
				ordered.push([entry[index], index]);
			}
		}

		// Sort all entries by value (numeric sort).
		if ( ordered.length && typeof ordered[0][0] === "object" ) {
			ordered.sort(function(a, b) { return a[0][0] - b[0][0]; });
		} else {
			ordered.sort(function(a, b) { return a[0] - b[0]; });
		}


		// Convert all entries to subranges.
		for ( index = 0; index < ordered.length; index++ ) {
			handleEntryPoint(ordered[index][1], ordered[index][0], this);
		}

		// Store the actual step values.
		// xSteps is sorted in the same order as xPct and xVal.
		this.xNumSteps = this.xSteps.slice(0);

		// Convert all numeric steps to the percentage of the subrange they represent.
		for ( index = 0; index < this.xNumSteps.length; index++ ) {
			handleStepPoint(index, this.xNumSteps[index], this);
		}
	}

	Spectrum.prototype.getMargin = function ( value ) {

		var step = this.xNumSteps[0];

		if ( step && (value % step) ) {
			throw new Error("noUiSlider: 'limit' and 'margin' must be divisible by step.");
		}

		return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
	};

	Spectrum.prototype.toStepping = function ( value ) {

		value = toStepping( this.xVal, this.xPct, value );

		return value;
	};

	Spectrum.prototype.fromStepping = function ( value ) {

		return fromStepping( this.xVal, this.xPct, value );
	};

	Spectrum.prototype.getStep = function ( value ) {

		value = getStep(this.xPct, this.xSteps, this.snap, value );

		return value;
	};

	Spectrum.prototype.getNearbySteps = function ( value ) {

		var j = getJ(value, this.xPct);

		return {
			stepBefore: { startValue: this.xVal[j-2], step: this.xNumSteps[j-2], highestStep: this.xHighestCompleteStep[j-2] },
			thisStep: { startValue: this.xVal[j-1], step: this.xNumSteps[j-1], highestStep: this.xHighestCompleteStep[j-1] },
			stepAfter: { startValue: this.xVal[j-0], step: this.xNumSteps[j-0], highestStep: this.xHighestCompleteStep[j-0] }
		};
	};

	Spectrum.prototype.countStepDecimals = function () {
		var stepDecimals = this.xNumSteps.map(countDecimals);
		return Math.max.apply(null, stepDecimals);
 	};

	// Outside testing
	Spectrum.prototype.convert = function ( value ) {
		return this.getStep(this.toStepping(value));
	};

/*	Every input option is tested and parsed. This'll prevent
	endless validation in internal methods. These tests are
	structured with an item for every option available. An
	option can be marked as required by setting the 'r' flag.
	The testing function is provided with three arguments:
		- The provided value for the option;
		- A reference to the options object;
		- The name for the option;

	The testing function returns false when an error is detected,
	or true when everything is OK. It can also modify the option
	object, to make sure all values can be correctly looped elsewhere. */

	var defaultFormatter = { 'to': function( value ){
		return value !== undefined && value.toFixed(2);
	}, 'from': Number };

	function testStep ( parsed, entry ) {

		if ( !isNumeric( entry ) ) {
			throw new Error("noUiSlider: 'step' is not numeric.");
		}

		// The step option can still be used to set stepping
		// for linear sliders. Overwritten if set in 'range'.
		parsed.singleStep = entry;
	}

	function testRange ( parsed, entry ) {

		// Filter incorrect input.
		if ( typeof entry !== 'object' || Array.isArray(entry) ) {
			throw new Error("noUiSlider: 'range' is not an object.");
		}

		// Catch missing start or end.
		if ( entry.min === undefined || entry.max === undefined ) {
			throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
		}

		// Catch equal start or end.
		if ( entry.min === entry.max ) {
			throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");
		}

		parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.dir, parsed.singleStep);
	}

	function testStart ( parsed, entry ) {

		entry = asArray(entry);

		// Validate input. Values aren't tested, as the public .val method
		// will always provide a valid location.
		if ( !Array.isArray( entry ) || !entry.length ) {
			throw new Error("noUiSlider: 'start' option is incorrect.");
		}

		// Store the number of handles.
		parsed.handles = entry.length;

		// When the slider is initialized, the .val method will
		// be called with the start options.
		parsed.start = entry;
	}

	function testSnap ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.snap = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider: 'snap' option must be a boolean.");
		}
	}

	function testAnimate ( parsed, entry ) {

		// Enforce 100% stepping within subranges.
		parsed.animate = entry;

		if ( typeof entry !== 'boolean' ){
			throw new Error("noUiSlider: 'animate' option must be a boolean.");
		}
	}

	function testAnimationDuration ( parsed, entry ) {

		parsed.animationDuration = entry;

		if ( typeof entry !== 'number' ){
			throw new Error("noUiSlider: 'animationDuration' option must be a number.");
		}
	}

	function testConnect ( parsed, entry ) {

		var connect = [false];
		var i;

		if ( entry === true || entry === false ) {

			for ( i = 1; i < parsed.handles; i++ ) {
				connect.push(entry);
			}

			connect.push(false);
		}

		else if ( !Array.isArray( entry ) || !entry.length || entry.length !== parsed.handles + 1 ) {
			throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
		}

		else {
			connect = entry;
		}

		parsed.connect = connect;
	}

	function testOrientation ( parsed, entry ) {

		// Set orientation to an a numerical value for easy
		// array selection.
		switch ( entry ){
		  case 'horizontal':
			parsed.ort = 0;
			break;
		  case 'vertical':
			parsed.ort = 1;
			break;
		  default:
			throw new Error("noUiSlider: 'orientation' option is invalid.");
		}
	}

	function testMargin ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider: 'margin' option must be numeric.");
		}

		// Issue #582
		if ( entry === 0 ) {
			return;
		}

		parsed.margin = parsed.spectrum.getMargin(entry);

		if ( !parsed.margin ) {
			throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.");
		}
	}

	function testLimit ( parsed, entry ) {

		if ( !isNumeric(entry) ){
			throw new Error("noUiSlider: 'limit' option must be numeric.");
		}

		parsed.limit = parsed.spectrum.getMargin(entry);

		if ( !parsed.limit || parsed.handles < 2 ) {
			throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
		}
	}

	function testDirection ( parsed, entry ) {

		// Set direction as a numerical value for easy parsing.
		// Invert connection for RTL sliders, so that the proper
		// handles get the connect/background classes.
		switch ( entry ) {
		  case 'ltr':
			parsed.dir = 0;
			break;
		  case 'rtl':
			parsed.dir = 1;
			break;
		  default:
			throw new Error("noUiSlider: 'direction' option was not recognized.");
		}
	}

	function testBehaviour ( parsed, entry ) {

		// Make sure the input is a string.
		if ( typeof entry !== 'string' ) {
			throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
		}

		// Check if the string contains any keywords.
		// None are required.
		var tap = entry.indexOf('tap') >= 0;
		var drag = entry.indexOf('drag') >= 0;
		var fixed = entry.indexOf('fixed') >= 0;
		var snap = entry.indexOf('snap') >= 0;
		var hover = entry.indexOf('hover') >= 0;

		if ( fixed ) {

			if ( parsed.handles !== 2 ) {
				throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
			}

			// Use margin to enforce fixed state
			testMargin(parsed, parsed.start[1] - parsed.start[0]);
		}

		parsed.events = {
			tap: tap || snap,
			drag: drag,
			fixed: fixed,
			snap: snap,
			hover: hover
		};
	}

	function testTooltips ( parsed, entry ) {

		if ( entry === false ) {
			return;
		}

		else if ( entry === true ) {

			parsed.tooltips = [];

			for ( var i = 0; i < parsed.handles; i++ ) {
				parsed.tooltips.push(true);
			}
		}

		else {

			parsed.tooltips = asArray(entry);

			if ( parsed.tooltips.length !== parsed.handles ) {
				throw new Error("noUiSlider: must pass a formatter for all handles.");
			}

			parsed.tooltips.forEach(function(formatter){
				if ( typeof formatter !== 'boolean' && (typeof formatter !== 'object' || typeof formatter.to !== 'function') ) {
					throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
				}
			});
		}
	}

	function testFormat ( parsed, entry ) {

		parsed.format = entry;

		// Any object with a to and from method is supported.
		if ( typeof entry.to === 'function' && typeof entry.from === 'function' ) {
			return true;
		}

		throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
	}

	function testCssPrefix ( parsed, entry ) {

		if ( entry !== undefined && typeof entry !== 'string' && entry !== false ) {
			throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
		}

		parsed.cssPrefix = entry;
	}

	function testCssClasses ( parsed, entry ) {

		if ( entry !== undefined && typeof entry !== 'object' ) {
			throw new Error("noUiSlider: 'cssClasses' must be an object.");
		}

		if ( typeof parsed.cssPrefix === 'string' ) {
			parsed.cssClasses = {};

			for ( var key in entry ) {
				if ( !entry.hasOwnProperty(key) ) { continue; }

				parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
			}
		} else {
			parsed.cssClasses = entry;
		}
	}

	function testUseRaf ( parsed, entry ) {
		if ( entry === true || entry === false ) {
			parsed.useRequestAnimationFrame = entry;
		} else {
			throw new Error("noUiSlider: 'useRequestAnimationFrame' option should be true (default) or false.");
		}
	}

	// Test all developer settings and parse to assumption-safe values.
	function testOptions ( options ) {

		// To prove a fix for #537, freeze options here.
		// If the object is modified, an error will be thrown.
		// Object.freeze(options);

		var parsed = {
			margin: 0,
			limit: 0,
			animate: true,
			animationDuration: 300,
			format: defaultFormatter
		}, tests;

		// Tests are executed in the order they are presented here.
		tests = {
			'step': { r: false, t: testStep },
			'start': { r: true, t: testStart },
			'connect': { r: true, t: testConnect },
			'direction': { r: true, t: testDirection },
			'snap': { r: false, t: testSnap },
			'animate': { r: false, t: testAnimate },
			'animationDuration': { r: false, t: testAnimationDuration },
			'range': { r: true, t: testRange },
			'orientation': { r: false, t: testOrientation },
			'margin': { r: false, t: testMargin },
			'limit': { r: false, t: testLimit },
			'behaviour': { r: true, t: testBehaviour },
			'format': { r: false, t: testFormat },
			'tooltips': { r: false, t: testTooltips },
			'cssPrefix': { r: false, t: testCssPrefix },
			'cssClasses': { r: false, t: testCssClasses },
			'useRequestAnimationFrame': { r: false, t: testUseRaf }
		};

		var defaults = {
			'connect': false,
			'direction': 'ltr',
			'behaviour': 'tap',
			'orientation': 'horizontal',
			'cssPrefix' : 'noUi-',
			'cssClasses': {
				target: 'target',
				base: 'base',
				origin: 'origin',
				handle: 'handle',
				horizontal: 'horizontal',
				vertical: 'vertical',
				background: 'background',
				connect: 'connect',
				ltr: 'ltr',
				rtl: 'rtl',
				draggable: 'draggable',
				drag: 'state-drag',
				tap: 'state-tap',
				active: 'active',
				tooltip: 'tooltip',
				pips: 'pips',
				pipsHorizontal: 'pips-horizontal',
				pipsVertical: 'pips-vertical',
				marker: 'marker',
				markerHorizontal: 'marker-horizontal',
				markerVertical: 'marker-vertical',
				markerNormal: 'marker-normal',
				markerLarge: 'marker-large',
				markerSub: 'marker-sub',
				value: 'value',
				valueHorizontal: 'value-horizontal',
				valueVertical: 'value-vertical',
				valueNormal: 'value-normal',
				valueLarge: 'value-large',
				valueSub: 'value-sub'
			},
			'useRequestAnimationFrame': true
		};

		// Run all options through a testing mechanism to ensure correct
		// input. It should be noted that options might get modified to
		// be handled properly. E.g. wrapping integers in arrays.
		Object.keys(tests).forEach(function( name ){

			// If the option isn't set, but it is required, throw an error.
			if ( options[name] === undefined && defaults[name] === undefined ) {

				if ( tests[name].r ) {
					throw new Error("noUiSlider: '" + name + "' is required.");
				}

				return true;
			}

			tests[name].t( parsed, options[name] === undefined ? defaults[name] : options[name] );
		});

		// Forward pips options
		parsed.pips = options.pips;

		var styles = [['left', 'top'], ['right', 'bottom']];

		// Pre-define the styles.
		parsed.style = styles[parsed.dir][parsed.ort];
		parsed.styleOposite = styles[parsed.dir?0:1][parsed.ort];

		return parsed;
	}


function closure ( target, options, originalOptions ){

	var actions = getActions( );

	// All variables local to 'closure' are prefixed with 'scope_'
	var scope_Target = target;
	var scope_Locations = [];
	var scope_Base;
	var scope_Handles;
	var scope_HandleNumbers = [];
	var scope_Connects;
	var scope_Spectrum = options.spectrum;
	var scope_Values = [];
	var scope_Events = {};
	var scope_Self;


	// Append a origin to the base
	function addOrigin ( base, handleNumber ) {
		var origin = addNodeTo(base, options.cssClasses.origin);
		var handle = addNodeTo(origin, options.cssClasses.handle);
		handle.setAttribute('data-handle', handleNumber);
		return origin;
	}

	// Insert nodes for connect elements
	function addConnect ( base, add ) {

		if ( !add ) {
			return false;
		}

		return addNodeTo(base, options.cssClasses.connect);
	}

	// Add handles to the slider base.
	function addElements ( connectOptions, base ) {

		scope_Handles = [];
		scope_Connects = [];

		scope_Connects.push(addConnect(base, connectOptions[0]));

		// [::::O====O====O====]
		// connectOptions = [0, 1, 1, 1]

		for ( var i = 0; i < options.handles; i++ ) {
			// Keep a list of all added handles.
			scope_Handles.push(addOrigin(base, i));
			scope_HandleNumbers[i] = i;
			scope_Connects.push(addConnect(base, connectOptions[i + 1]));
		}
	}

	// Initialize a single slider.
	function addSlider ( target ) {

		// Apply classes and data to the target.
		addClass(target, options.cssClasses.target);

		if ( options.dir === 0 ) {
			addClass(target, options.cssClasses.ltr);
		} else {
			addClass(target, options.cssClasses.rtl);
		}

		if ( options.ort === 0 ) {
			addClass(target, options.cssClasses.horizontal);
		} else {
			addClass(target, options.cssClasses.vertical);
		}

		scope_Base = addNodeTo(target, options.cssClasses.base);
	}


	function addTooltip ( handle, handleNumber ) {

		if ( !options.tooltips[handleNumber] ) {
			return false;
		}

		return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
	}

	// The tooltips option is a shorthand for using the 'update' event.
	function tooltips ( ) {

		// Tooltips are added with options.tooltips in original order.
		var tips = scope_Handles.map(addTooltip);

		bindEvent('update', function(values, handleNumber, unencoded) {

			if ( !tips[handleNumber] ) {
				return;
			}

			var formattedValue = values[handleNumber];

			if ( options.tooltips[handleNumber] !== true ) {
				formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
			}

			tips[handleNumber].innerHTML = formattedValue;
		});
	}


	function getGroup ( mode, values, stepped ) {

		// Use the range.
		if ( mode === 'range' || mode === 'steps' ) {
			return scope_Spectrum.xVal;
		}

		if ( mode === 'count' ) {

			// Divide 0 - 100 in 'count' parts.
			var spread = ( 100 / (values-1) ), v, i = 0;
			values = [];

			// List these parts and have them handled as 'positions'.
			while ((v=i++*spread) <= 100 ) {
				values.push(v);
			}

			mode = 'positions';
		}

		if ( mode === 'positions' ) {

			// Map all percentages to on-range values.
			return values.map(function( value ){
				return scope_Spectrum.fromStepping( stepped ? scope_Spectrum.getStep( value ) : value );
			});
		}

		if ( mode === 'values' ) {

			// If the value must be stepped, it needs to be converted to a percentage first.
			if ( stepped ) {

				return values.map(function( value ){

					// Convert to percentage, apply step, return to value.
					return scope_Spectrum.fromStepping( scope_Spectrum.getStep( scope_Spectrum.toStepping( value ) ) );
				});

			}

			// Otherwise, we can simply use the values.
			return values;
		}
	}

	function generateSpread ( density, mode, group ) {

		function safeIncrement(value, increment) {
			// Avoid floating point variance by dropping the smallest decimal places.
			return (value + increment).toFixed(7) / 1;
		}

		var indexes = {},
			firstInRange = scope_Spectrum.xVal[0],
			lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length-1],
			ignoreFirst = false,
			ignoreLast = false,
			prevPct = 0;

		// Create a copy of the group, sort it and filter away all duplicates.
		group = unique(group.slice().sort(function(a, b){ return a - b; }));

		// Make sure the range starts with the first element.
		if ( group[0] !== firstInRange ) {
			group.unshift(firstInRange);
			ignoreFirst = true;
		}

		// Likewise for the last one.
		if ( group[group.length - 1] !== lastInRange ) {
			group.push(lastInRange);
			ignoreLast = true;
		}

		group.forEach(function ( current, index ) {

			// Get the current step and the lower + upper positions.
			var step, i, q,
				low = current,
				high = group[index+1],
				newPct, pctDifference, pctPos, type,
				steps, realSteps, stepsize;

			// When using 'steps' mode, use the provided steps.
			// Otherwise, we'll step on to the next subrange.
			if ( mode === 'steps' ) {
				step = scope_Spectrum.xNumSteps[ index ];
			}

			// Default to a 'full' step.
			if ( !step ) {
				step = high-low;
			}

			// Low can be 0, so test for false. If high is undefined,
			// we are at the last subrange. Index 0 is already handled.
			if ( low === false || high === undefined ) {
				return;
			}

			// Make sure step isn't 0, which would cause an infinite loop (#654)
			step = Math.max(step, 0.0000001);

			// Find all steps in the subrange.
			for ( i = low; i <= high; i = safeIncrement(i, step) ) {

				// Get the percentage value for the current step,
				// calculate the size for the subrange.
				newPct = scope_Spectrum.toStepping( i );
				pctDifference = newPct - prevPct;

				steps = pctDifference / density;
				realSteps = Math.round(steps);

				// This ratio represents the ammount of percentage-space a point indicates.
				// For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-devided.
				// Round the percentage offset to an even number, then divide by two
				// to spread the offset on both sides of the range.
				stepsize = pctDifference/realSteps;

				// Divide all points evenly, adding the correct number to this subrange.
				// Run up to <= so that 100% gets a point, event if ignoreLast is set.
				for ( q = 1; q <= realSteps; q += 1 ) {

					// The ratio between the rounded value and the actual size might be ~1% off.
					// Correct the percentage offset by the number of points
					// per subrange. density = 1 will result in 100 points on the
					// full range, 2 for 50, 4 for 25, etc.
					pctPos = prevPct + ( q * stepsize );
					indexes[pctPos.toFixed(5)] = ['x', 0];
				}

				// Determine the point type.
				type = (group.indexOf(i) > -1) ? 1 : ( mode === 'steps' ? 2 : 0 );

				// Enforce the 'ignoreFirst' option by overwriting the type for 0.
				if ( !index && ignoreFirst ) {
					type = 0;
				}

				if ( !(i === high && ignoreLast)) {
					// Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
					indexes[newPct.toFixed(5)] = [i, type];
				}

				// Update the percentage count.
				prevPct = newPct;
			}
		});

		return indexes;
	}

	function addMarking ( spread, filterFunc, formatter ) {

		var element = document.createElement('div'),
			out = '',
			valueSizeClasses = [
				options.cssClasses.valueNormal,
				options.cssClasses.valueLarge,
				options.cssClasses.valueSub
			],
			markerSizeClasses = [
				options.cssClasses.markerNormal,
				options.cssClasses.markerLarge,
				options.cssClasses.markerSub
			],
			valueOrientationClasses = [
				options.cssClasses.valueHorizontal,
				options.cssClasses.valueVertical
			],
			markerOrientationClasses = [
				options.cssClasses.markerHorizontal,
				options.cssClasses.markerVertical
			];

		addClass(element, options.cssClasses.pips);
		addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

		function getClasses( type, source ){
			var a = source === options.cssClasses.value,
				orientationClasses = a ? valueOrientationClasses : markerOrientationClasses,
				sizeClasses = a ? valueSizeClasses : markerSizeClasses;

			return source + ' ' + orientationClasses[options.ort] + ' ' + sizeClasses[type];
		}

		function getTags( offset, source, values ) {
			return 'class="' + getClasses(values[1], source) + '" style="' + options.style + ': ' + offset + '%"';
		}

		function addSpread ( offset, values ){

			// Apply the filter function, if it is set.
			values[1] = (values[1] && filterFunc) ? filterFunc(values[0], values[1]) : values[1];

			// Add a marker for every point
			out += '<div ' + getTags(offset, options.cssClasses.marker, values) + '></div>';

			// Values are only appended for points marked '1' or '2'.
			if ( values[1] ) {
				out += '<div ' + getTags(offset, options.cssClasses.value, values) + '>' + formatter.to(values[0]) + '</div>';
			}
		}

		// Append all points.
		Object.keys(spread).forEach(function(a){
			addSpread(a, spread[a]);
		});

		element.innerHTML = out;

		return element;
	}

	function pips ( grid ) {

	var mode = grid.mode,
		density = grid.density || 1,
		filter = grid.filter || false,
		values = grid.values || false,
		stepped = grid.stepped || false,
		group = getGroup( mode, values, stepped ),
		spread = generateSpread( density, mode, group ),
		format = grid.format || {
			to: Math.round
		};

		return scope_Target.appendChild(addMarking(
			spread,
			filter,
			format
		));
	}


	// Shorthand for base dimensions.
	function baseSize ( ) {
		var rect = scope_Base.getBoundingClientRect(), alt = 'offset' + ['Width', 'Height'][options.ort];
		return options.ort === 0 ? (rect.width||scope_Base[alt]) : (rect.height||scope_Base[alt]);
	}

	// Handler for attaching events trough a proxy.
	function attachEvent ( events, element, callback, data ) {

		// This function can be used to 'filter' events to the slider.
		// element is a node, not a nodeList

		var method = function ( e ){

			if ( scope_Target.hasAttribute('disabled') ) {
				return false;
			}

			// Stop if an active 'tap' transition is taking place.
			if ( hasClass(scope_Target, options.cssClasses.tap) ) {
				return false;
			}

			e = fixEvent(e, data.pageOffset);

			// Ignore right or middle clicks on start #454
			if ( events === actions.start && e.buttons !== undefined && e.buttons > 1 ) {
				return false;
			}

			// Ignore right or middle clicks on start #454
			if ( data.hover && e.buttons ) {
				return false;
			}

			e.calcPoint = e.points[ options.ort ];

			// Call the event handler with the event [ and additional data ].
			callback ( e, data );
		};

		var methods = [];

		// Bind a closure on the target for every event type.
		events.split(' ').forEach(function( eventName ){
			element.addEventListener(eventName, method, false);
			methods.push([eventName, method]);
		});

		return methods;
	}

	// Provide a clean event with standardized offset values.
	function fixEvent ( e, pageOffset ) {

		// Prevent scrolling and panning on touch events, while
		// attempting to slide. The tap event also depends on this.
		e.preventDefault();

		// Filter the event to register the type, which can be
		// touch, mouse or pointer. Offset changes need to be
		// made on an event specific basis.
		var touch = e.type.indexOf('touch') === 0,
			mouse = e.type.indexOf('mouse') === 0,
			pointer = e.type.indexOf('pointer') === 0,
			x,y, event = e;

		// IE10 implemented pointer events with a prefix;
		if ( e.type.indexOf('MSPointer') === 0 ) {
			pointer = true;
		}

		if ( touch ) {

			// Fix bug when user touches with two or more fingers on mobile devices.
			// It's useful when you have two or more sliders on one page,
			// that can be touched simultaneously.
			// #649, #663, #668
			if ( event.touches.length > 1 ) {
				return false;
			}

			// noUiSlider supports one movement at a time,
			// so we can select the first 'changedTouch'.
			x = e.changedTouches[0].pageX;
			y = e.changedTouches[0].pageY;
		}

		pageOffset = pageOffset || getPageOffset();

		if ( mouse || pointer ) {
			x = e.clientX + pageOffset.x;
			y = e.clientY + pageOffset.y;
		}

		event.pageOffset = pageOffset;
		event.points = [x, y];
		event.cursor = mouse || pointer; // Fix #435

		return event;
	}

	function calcPointToPercentage ( calcPoint ) {
		var location = calcPoint - offset(scope_Base, options.ort);
		var proposal = ( location * 100 ) / baseSize();
		return options.dir ? 100 - proposal : proposal;
	}

	function getClosestHandle ( proposal ) {

		var closest = 100;
		var handleNumber = false;

		scope_Handles.forEach(function(handle, index){

			// Disabled handles are ignored
			if ( handle.hasAttribute('disabled') ) {
				return;
			}

			var pos = Math.abs(scope_Locations[index] - proposal);

			if ( pos < closest ) {
				handleNumber = index;
				closest = pos;
			}
		});

		return handleNumber;
	}

	// Moves handle(s) by a percentage
	// (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
	function moveHandles ( upward, proposal, locations, handleNumbers ) {

		var proposals = locations.slice();

		var b = [!upward, upward];
		var f = [upward, !upward];

		// Copy handleNumbers so we don't change the dataset
		handleNumbers = handleNumbers.slice();

		// Check to see which handle is 'leading'.
		// If that one can't move the second can't either.
		if ( upward ) {
			handleNumbers.reverse();
		}

		// Step 1: get the maximum percentage that any of the handles can move
		if ( handleNumbers.length > 1 ) {

			handleNumbers.forEach(function(handleNumber, o) {

				var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o]);

				// Stop if one of the handles can't move.
				if ( to === false ) {
					proposal = 0;
				} else {
					proposal = to - proposals[handleNumber];
					proposals[handleNumber] = to;
				}
			});
		}

		// If using one handle, check backward AND forward
		else {
			b = f = [true];
		}

		var state = false;

		// Step 2: Try to set the handles with the found percentage
		handleNumbers.forEach(function(handleNumber, o) {
			state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
		});

		// Step 3: If a handle moved, fire events
		if ( state ) {
			handleNumbers.forEach(function(handleNumber){
				fireEvent('update', handleNumber);
				fireEvent('slide', handleNumber);
			});
		}
	}

	// External event handling
	function fireEvent ( eventName, handleNumber, tap ) {

		Object.keys(scope_Events).forEach(function( targetEvent ) {

			var eventType = targetEvent.split('.')[0];

			if ( eventName === eventType ) {
				scope_Events[targetEvent].forEach(function( callback ) {

					callback.call(
						// Use the slider public API as the scope ('this')
						scope_Self,
						// Return values as array, so arg_1[arg_2] is always valid.
						scope_Values.map(options.format.to),
						// Handle index, 0 or 1
						handleNumber,
						// Unformatted slider values
						scope_Values.slice(),
						// Event is fired by tap, true or false
						tap || false,
						// Left offset of the handle, in relation to the slider
						scope_Locations.slice()
					);
				});
			}
		});
	}


	// Fire 'end' when a mouse or pen leaves the document.
	function documentLeave ( event, data ) {
		if ( event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null ){
			eventEnd (event, data);
		}
	}

	// Handle movement on document for handle and range drag.
	function eventMove ( event, data ) {

		// Fix #498
		// Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
		// https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
		// IE9 has .buttons and .which zero on mousemove.
		// Firefox breaks the spec MDN defines.
		if ( navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0 ) {
			return eventEnd(event, data);
		}

		// Check if we are moving up or down
		var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

		// Convert the movement into a percentage of the slider width/height
		var proposal = (movement * 100) / data.baseSize;

		moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
	}

	// Unbind move events on document, call callbacks.
	function eventEnd ( event, data ) {

		// The handle is no longer active, so remove the class.
		var active = scope_Base.querySelector( '.' + options.cssClasses.active );

		if ( active !== null ) {
			removeClass(active, options.cssClasses.active);
		}

		// Remove cursor styles and text-selection events bound to the body.
		if ( event.cursor ) {
			document.body.style.cursor = '';
			document.body.removeEventListener('selectstart', document.body.noUiListener);
		}

		// Unbind the move and end events, which are added on 'start'.
		document.documentElement.noUiListeners.forEach(function( c ) {
			document.documentElement.removeEventListener(c[0], c[1]);
		});

		// Remove dragging class.
		removeClass(scope_Target, options.cssClasses.drag);

		setZindex();

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('set', handleNumber);
			fireEvent('change', handleNumber);
			fireEvent('end', handleNumber);
		});
	}

	// Bind move events on document.
	function eventStart ( event, data ) {

		// Mark the handle as 'active' so it can be styled.
		if ( data.handleNumbers.length === 1 ) {

			var handle = scope_Handles[data.handleNumbers[0]];

			// Ignore 'disabled' handles
			if ( handle.hasAttribute('disabled') ) {
				return false;
			}

			addClass(handle.children[0], options.cssClasses.active);
		}

		// Fix #551, where a handle gets selected instead of dragged.
		event.preventDefault();

		// A drag should never propagate up to the 'tap' event.
		event.stopPropagation();

		// Attach the move and end events.
		var moveEvent = attachEvent(actions.move, document.documentElement, eventMove, {
			startCalcPoint: event.calcPoint,
			baseSize: baseSize(),
			pageOffset: event.pageOffset,
			handleNumbers: data.handleNumbers,
			buttonsProperty: event.buttons,
			locations: scope_Locations.slice()
		});

		var endEvent = attachEvent(actions.end, document.documentElement, eventEnd, {
			handleNumbers: data.handleNumbers
		});

		var outEvent = attachEvent("mouseout", document.documentElement, documentLeave, {
			handleNumbers: data.handleNumbers
		});

		document.documentElement.noUiListeners = moveEvent.concat(endEvent, outEvent);

		// Text selection isn't an issue on touch devices,
		// so adding cursor styles can be skipped.
		if ( event.cursor ) {

			// Prevent the 'I' cursor and extend the range-drag cursor.
			document.body.style.cursor = getComputedStyle(event.target).cursor;

			// Mark the target with a dragging state.
			if ( scope_Handles.length > 1 ) {
				addClass(scope_Target, options.cssClasses.drag);
			}

			var f = function(){
				return false;
			};

			document.body.noUiListener = f;

			// Prevent text selection when dragging the handles.
			document.body.addEventListener('selectstart', f, false);
		}

		data.handleNumbers.forEach(function(handleNumber){
			fireEvent('start', handleNumber);
		});
	}

	// Move closest handle to tapped location.
	function eventTap ( event ) {

		// The tap event shouldn't propagate up
		event.stopPropagation();

		var proposal = calcPointToPercentage(event.calcPoint);
		var handleNumber = getClosestHandle(proposal);

		// Tackle the case that all handles are 'disabled'.
		if ( handleNumber === false ) {
			return false;
		}

		// Flag the slider as it is now in a transitional state.
		// Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
		if ( !options.events.snap ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		setHandle(handleNumber, proposal, true, true);

		setZindex();

		fireEvent('slide', handleNumber, true);
		fireEvent('set', handleNumber, true);
		fireEvent('change', handleNumber, true);
		fireEvent('update', handleNumber, true);

		if ( options.events.snap ) {
			eventStart(event, { handleNumbers: [handleNumber] });
		}
	}

	// Fires a 'hover' event for a hovered mouse/pen position.
	function eventHover ( event ) {

		var proposal = calcPointToPercentage(event.calcPoint);

		var to = scope_Spectrum.getStep(proposal);
		var value = scope_Spectrum.fromStepping(to);

		Object.keys(scope_Events).forEach(function( targetEvent ) {
			if ( 'hover' === targetEvent.split('.')[0] ) {
				scope_Events[targetEvent].forEach(function( callback ) {
					callback.call( scope_Self, value );
				});
			}
		});
	}

	// Attach events to several slider parts.
	function bindSliderEvents ( behaviour ) {

		// Attach the standard drag event to the handles.
		if ( !behaviour.fixed ) {

			scope_Handles.forEach(function( handle, index ){

				// These events are only bound to the visual handle
				// element, not the 'real' origin element.
				attachEvent ( actions.start, handle.children[0], eventStart, {
					handleNumbers: [index]
				});
			});
		}

		// Attach the tap event to the slider base.
		if ( behaviour.tap ) {
			attachEvent (actions.start, scope_Base, eventTap, {});
		}

		// Fire hover events
		if ( behaviour.hover ) {
			attachEvent (actions.move, scope_Base, eventHover, { hover: true });
		}

		// Make the range draggable.
		if ( behaviour.drag ){

			scope_Connects.forEach(function( connect, index ){

				if ( connect === false || index === 0 || index === scope_Connects.length - 1 ) {
					return;
				}

				var handleBefore = scope_Handles[index - 1];
				var handleAfter = scope_Handles[index];
				var eventHolders = [connect];

				addClass(connect, options.cssClasses.draggable);

				// When the range is fixed, the entire range can
				// be dragged by the handles. The handle in the first
				// origin will propagate the start event upward,
				// but it needs to be bound manually on the other.
				if ( behaviour.fixed ) {
					eventHolders.push(handleBefore.children[0]);
					eventHolders.push(handleAfter.children[0]);
				}

				eventHolders.forEach(function( eventHolder ) {
					attachEvent ( actions.start, eventHolder, eventStart, {
						handles: [handleBefore, handleAfter],
						handleNumbers: [index - 1, index]
					});
				});
			});
		}
	}


	// Split out the handle positioning logic so the Move event can use it, too
	function checkHandlePosition ( reference, handleNumber, to, lookBackward, lookForward ) {

		// For sliders with multiple handles, limit movement to the other handle.
		// Apply the margin option by adding it to the handle positions.
		if ( scope_Handles.length > 1 ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.max(to, reference[handleNumber - 1] + options.margin);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.min(to, reference[handleNumber + 1] - options.margin);
			}
		}

		// The limit option has the opposite effect, limiting handles to a
		// maximum distance from another. Limit must be > 0, as otherwise
		// handles would be unmoveable.
		if ( scope_Handles.length > 1 && options.limit ) {

			if ( lookBackward && handleNumber > 0 ) {
				to = Math.min(to, reference[handleNumber - 1] + options.limit);
			}

			if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
				to = Math.max(to, reference[handleNumber + 1] - options.limit);
			}
		}

		to = scope_Spectrum.getStep(to);

		// Limit percentage to the 0 - 100 range
		to = limit(to);

		// Return false if handle can't move
		if ( to === reference[handleNumber] ) {
			return false;
		}

		return to;
	}

	function toPct ( pct ) {
		return pct + '%';
	}

	// Updates scope_Locations and scope_Values, updates visual state
	function updateHandlePosition ( handleNumber, to ) {

		// Update locations.
		scope_Locations[handleNumber] = to;

		// Convert the value to the slider stepping/range.
		scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

		// Called synchronously or on the next animationFrame
		var stateUpdate = function() {
			scope_Handles[handleNumber].style[options.style] = toPct(to);
			updateConnect(handleNumber);
			updateConnect(handleNumber + 1);
		};

		// Set the handle to the new position.
		// Use requestAnimationFrame for efficient painting.
		// No significant effect in Chrome, Edge sees dramatic performace improvements.
		// Option to disable is useful for unit tests, and single-step debugging.
		if ( window.requestAnimationFrame && options.useRequestAnimationFrame ) {
			window.requestAnimationFrame(stateUpdate);
		} else {
			stateUpdate();
		}
	}

	function setZindex ( ) {

		scope_HandleNumbers.forEach(function(handleNumber){
			// Handles before the slider middle are stacked later = higher,
			// Handles after the middle later is lower
			// [[7] [8] .......... | .......... [5] [4]
			var dir = (scope_Locations[handleNumber] > 50 ? -1 : 1);
			var zIndex = 3 + (scope_Handles.length + (dir * handleNumber));
			scope_Handles[handleNumber].childNodes[0].style.zIndex = zIndex;
		});
	}

	// Test suggested values and apply margin, step.
	function setHandle ( handleNumber, to, lookBackward, lookForward ) {

		to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward);

		if ( to === false ) {
			return false;
		}

		updateHandlePosition(handleNumber, to);

		return true;
	}

	// Updates style attribute for connect nodes
	function updateConnect ( index ) {

		// Skip connects set to false
		if ( !scope_Connects[index] ) {
			return;
		}

		var l = 0;
		var h = 100;

		if ( index !== 0 ) {
			l = scope_Locations[index - 1];
		}

		if ( index !== scope_Connects.length - 1 ) {
			h = scope_Locations[index];
		}

		scope_Connects[index].style[options.style] = toPct(l);
		scope_Connects[index].style[options.styleOposite] = toPct(100 - h);
	}

	// ...
	function setValue ( to, handleNumber ) {

		// Setting with null indicates an 'ignore'.
		// Inputting 'false' is invalid.
		if ( to === null || to === false ) {
			return;
		}

		// If a formatted number was passed, attemt to decode it.
		if ( typeof to === 'number' ) {
			to = String(to);
		}

		to = options.format.from(to);

		// Request an update for all links if the value was invalid.
		// Do so too if setting the handle fails.
		if ( to !== false && !isNaN(to) ) {
			setHandle(handleNumber, scope_Spectrum.toStepping(to), false, false);
		}
	}

	// Set the slider value.
	function valueSet ( input, fireSetEvent ) {

		var values = asArray(input);
		var isInit = scope_Locations[0] === undefined;

		// Event fires by default
		fireSetEvent = (fireSetEvent === undefined ? true : !!fireSetEvent);

		values.forEach(setValue);

		// Animation is optional.
		// Make sure the initial values were set before using animated placement.
		if ( options.animate && !isInit ) {
			addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
		}

		// Now that all base values are set, apply constraints
		scope_HandleNumbers.forEach(function(handleNumber){
			setHandle(handleNumber, scope_Locations[handleNumber], true, false);
		});

		setZindex();

		scope_HandleNumbers.forEach(function(handleNumber){

			fireEvent('update', handleNumber);

			// Fire the event only for handles that received a new value, as per #579
			if ( values[handleNumber] !== null && fireSetEvent ) {
				fireEvent('set', handleNumber);
			}
		});
	}

	function valueReset ( fireSetEvent ) {
		valueSet(options.start, fireSetEvent);
	}

	// Get the slider value.
	function valueGet ( ) {

		var values = scope_Values.map(options.format.to);

		// If only one handle is used, return a single value.
		if ( values.length === 1 ){
			return values[0];
		}

		return values;
	}

	// Removes classes from the root and empties it.
	function destroy ( ) {

		for ( var key in options.cssClasses ) {
			if ( !options.cssClasses.hasOwnProperty(key) ) { continue; }
			removeClass(scope_Target, options.cssClasses[key]);
		}

		while (scope_Target.firstChild) {
			scope_Target.removeChild(scope_Target.firstChild);
		}

		delete scope_Target.noUiSlider;
	}

	// Get the current step size for the slider.
	function getCurrentStep ( ) {

		// Check all locations, map them to their stepping point.
		// Get the step point, then find it in the input list.
		return scope_Locations.map(function( location, index ){

			var nearbySteps = scope_Spectrum.getNearbySteps( location );
			var value = scope_Values[index];
			var increment = nearbySteps.thisStep.step;
			var decrement = null;

			// If the next value in this step moves into the next step,
			// the increment is the start of the next step - the current value
			if ( increment !== false ) {
				if ( value + increment > nearbySteps.stepAfter.startValue ) {
					increment = nearbySteps.stepAfter.startValue - value;
				}
			}

			// If the value is beyond the starting point
			if ( value > nearbySteps.thisStep.startValue ) {
				decrement = nearbySteps.thisStep.step;
			}

			else if ( nearbySteps.stepBefore.step === false ) {
				decrement = false;
			}

			// If a handle is at the start of a step, it always steps back into the previous step first
			else {
				decrement = value - nearbySteps.stepBefore.highestStep;
			}

			// Now, if at the slider edges, there is not in/decrement
			if ( location === 100 ) {
				increment = null;
			}

			else if ( location === 0 ) {
				decrement = null;
			}

			// As per #391, the comparison for the decrement step can have some rounding issues.
			var stepDecimals = scope_Spectrum.countStepDecimals();

			// Round per #391
			if ( increment !== null && increment !== false ) {
				increment = Number(increment.toFixed(stepDecimals));
			}

			if ( decrement !== null && decrement !== false ) {
				decrement = Number(decrement.toFixed(stepDecimals));
			}

			return [decrement, increment];
		});
	}

	// Attach an event to this slider, possibly including a namespace
	function bindEvent ( namespacedEvent, callback ) {
		scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
		scope_Events[namespacedEvent].push(callback);

		// If the event bound is 'update,' fire it immediately for all handles.
		if ( namespacedEvent.split('.')[0] === 'update' ) {
			scope_Handles.forEach(function(a, index){
				fireEvent('update', index);
			});
		}
	}

	// Undo attachment of event
	function removeEvent ( namespacedEvent ) {

		var event = namespacedEvent && namespacedEvent.split('.')[0],
			namespace = event && namespacedEvent.substring(event.length);

		Object.keys(scope_Events).forEach(function( bind ){

			var tEvent = bind.split('.')[0],
				tNamespace = bind.substring(tEvent.length);

			if ( (!event || event === tEvent) && (!namespace || namespace === tNamespace) ) {
				delete scope_Events[bind];
			}
		});
	}

	// Updateable: margin, limit, step, range, animate, snap
	function updateOptions ( optionsToUpdate, fireSetEvent ) {

		// Spectrum is created using the range, snap, direction and step options.
		// 'snap' and 'step' can be updated, 'direction' cannot, due to event binding.
		// If 'snap' and 'step' are not passed, they should remain unchanged.
		var v = valueGet();

		var updateAble = ['margin', 'limit', 'range', 'animate', 'snap', 'step', 'format'];

		// Only change options that we're actually passed to update.
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				originalOptions[name] = optionsToUpdate[name];
			}
		});

		var newOptions = testOptions(originalOptions);

		// Load new options into the slider state
		updateAble.forEach(function(name){
			if ( optionsToUpdate[name] !== undefined ) {
				options[name] = newOptions[name];
			}
		});

		// Save current spectrum direction as testOptions in testRange call
		// doesn't rely on current direction
		newOptions.spectrum.direction = scope_Spectrum.direction;
		scope_Spectrum = newOptions.spectrum;

		// Limit and margin depend on the spectrum but are stored outside of it. (#677)
		options.margin = newOptions.margin;
		options.limit = newOptions.limit;

		// Invalidate the current positioning so valueSet forces an update.
		scope_Locations = [];
		valueSet(optionsToUpdate.start || v, fireSetEvent);
	}

	// Throw an error if the slider was already initialized.
	if ( scope_Target.noUiSlider ) {
		throw new Error('Slider was already initialized.');
	}

	// Create the base element, initialise HTML and set classes.
	// Add handles and connect elements.
	addSlider(scope_Target);
	addElements(options.connect, scope_Base);

	scope_Self = {
		destroy: destroy,
		steps: getCurrentStep,
		on: bindEvent,
		off: removeEvent,
		get: valueGet,
		set: valueSet,
		reset: valueReset,
		 // Exposed for unit testing, don't use this in your application.
		__moveHandles: function(a, b, c) { moveHandles(a, b, scope_Locations, c); },
		options: originalOptions, // Issue #600, #678
		updateOptions: updateOptions,
		target: scope_Target, // Issue #597
		pips: pips // Issue #594
	};

	// Attach user events.
	bindSliderEvents(options.events);

	// Use the public value method to set the start values.
	valueSet(options.start);

	if ( options.pips ) {
		pips(options.pips);
	}

	if ( options.tooltips ) {
		tooltips();
	}

	return scope_Self;

}


	// Run the standard initializer
	function initialize ( target, originalOptions ) {

		if ( !target.nodeName ) {
			throw new Error('noUiSlider.create requires a single element.');
		}

		// Test the options and create the slider environment;
		var options = testOptions( originalOptions, target );
		var api = closure( target, options, originalOptions );

		target.noUiSlider = api;

		return api;
	}

	// Use an object instead of a function for future expansibility;
	return {
		create: initialize
	};

}));

/*rateYo V2.3.2, A simple and flexible star rating plugin
prashanth pamidi (https://github.com/prrashi)*/
!function(a){"use strict";function b(){var a=!1;return function(b){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4)))&&(a=!0)}(navigator.userAgent||navigator.vendor||window.opera),a}function c(a,b,c){return a===b?a=b:a===c&&(a=c),a}function d(a,b,c){if(!(a>=b&&a<=c))throw Error("Invalid Rating, expected value between "+b+" and "+c);return a}function e(a){return void 0!==a}function f(a,b,c){var d=c/100*(b-a);return d=Math.round(a+d).toString(16),1===d.length&&(d="0"+d),d}function g(a,b,c){if(!a||!b)return null;c=e(c)?c:0,a=q(a),b=q(b);var d=f(a.r,b.r,c),g=f(a.b,b.b,c);return"#"+d+f(a.g,b.g,c)+g}function h(f,i){function k(a){e(a)||(a=i.rating),Z=a;var b=a/P,c=b*R;b>1&&(c+=(Math.ceil(b)-1)*T),r(i.ratedFill),c=i.rtl?100-c:c,c<0?c=0:c>100&&(c=100),X.css("width",c+"%")}function l(){U=Q*i.numStars+S*(i.numStars-1),R=Q/U*100,T=S/U*100,f.width(U),k()}function n(a){var b=i.starWidth=a;return Q=window.parseFloat(i.starWidth.replace("px","")),W.find("svg").attr({width:i.starWidth,height:b}),X.find("svg").attr({width:i.starWidth,height:b}),l(),f}function p(a){return i.spacing=a,S=parseFloat(i.spacing.replace("px","")),W.find("svg:not(:first-child)").css({"margin-left":a}),X.find("svg:not(:first-child)").css({"margin-left":a}),l(),f}function q(a){return i.normalFill=a,(i.rtl?X:W).find("svg").attr({fill:i.normalFill}),f}function r(a){if(i.multiColor){var b=Z-Y,c=b/i.maxValue*100,d=i.multiColor||{};a=g(d.startColor||o.startColor,d.endColor||o.endColor,c)}else _=a;return i.ratedFill=a,(i.rtl?W:X).find("svg").attr({fill:i.ratedFill}),f}function s(a){a=!!a,i.rtl=a,q(i.normalFill),k()}function t(a){i.multiColor=a,r(a?a:_)}function u(b){i.numStars=b,P=i.maxValue/i.numStars,W.empty(),X.empty();for(var c=0;c<i.numStars;c++)W.append(a(i.starSvg||m)),X.append(a(i.starSvg||m));return n(i.starWidth),q(i.normalFill),p(i.spacing),k(),f}function v(a){return i.maxValue=a,P=i.maxValue/i.numStars,i.rating>a&&C(a),k(),f}function w(a){return i.precision=a,C(i.rating),f}function x(a){return i.halfStar=a,f}function y(a){return i.fullStar=a,f}function z(a){var b=a%P,c=P/2,d=i.halfStar,e=i.fullStar;return e||d?(e||d&&b>c?a+=P-b:(a-=b,b>0&&(a+=c)),a):a}function A(a){var b=W.offset(),c=b.left,d=c+W.width(),e=i.maxValue,f=a.pageX,g=0;if(f<c)g=Y;else if(f>d)g=e;else{var h=(f-c)/(d-c);if(S>0){h*=100;for(var j=h;j>0;)j>R?(g+=P,j-=R+T):(g+=j/R*P,j=0)}else g=h*i.maxValue;g=z(g)}return i.rtl&&(g=e-g),parseFloat(g)}function B(a){return i.readOnly=a,f.attr("readonly",!0),N(),a||(f.removeAttr("readonly"),M()),f}function C(a){var b=a,e=i.maxValue;return"string"==typeof b&&("%"===b[b.length-1]&&(b=b.substr(0,b.length-1),e=100,v(e)),b=parseFloat(b)),d(b,Y,e),b=parseFloat(b.toFixed(i.precision)),c(parseFloat(b),Y,e),i.rating=b,k(),$&&f.trigger("rateyo.set",{rating:b}),f}function D(a){return i.onInit=a,f}function E(a){return i.onSet=a,f}function F(a){return i.onChange=a,f}function G(a){var b=A(a).toFixed(i.precision),d=i.maxValue;b=c(parseFloat(b),Y,d),k(b),f.trigger("rateyo.change",{rating:b})}function H(){b()||(k(),f.trigger("rateyo.change",{rating:i.rating}))}function I(a){var b=A(a).toFixed(i.precision);b=parseFloat(b),O.rating(b)}function J(a,b){i.onInit&&"function"==typeof i.onInit&&i.onInit.apply(this,[b.rating,O])}function K(a,b){i.onChange&&"function"==typeof i.onChange&&i.onChange.apply(this,[b.rating,O])}function L(a,b){i.onSet&&"function"==typeof i.onSet&&i.onSet.apply(this,[b.rating,O])}function M(){f.on("mousemove",G).on("mouseenter",G).on("mouseleave",H).on("click",I).on("rateyo.init",J).on("rateyo.change",K).on("rateyo.set",L)}function N(){f.off("mousemove",G).off("mouseenter",G).off("mouseleave",H).off("click",I).off("rateyo.init",J).off("rateyo.change",K).off("rateyo.set",L)}this.node=f.get(0);var O=this;f.empty().addClass("jq-ry-container");var P,Q,R,S,T,U,V=a("<div/>").addClass("jq-ry-group-wrapper").appendTo(f),W=a("<div/>").addClass("jq-ry-normal-group").addClass("jq-ry-group").appendTo(V),X=a("<div/>").addClass("jq-ry-rated-group").addClass("jq-ry-group").appendTo(V),Y=0,Z=i.rating,$=!1,_=i.ratedFill;this.rating=function(a){return e(a)?(C(a),f):i.rating},this.destroy=function(){return i.readOnly||N(),h.prototype.collection=j(f.get(0),this.collection),f.removeClass("jq-ry-container").children().remove(),f},this.method=function(a){if(!a)throw Error("Method name not specified!");if(!e(this[a]))throw Error("Method "+a+" doesn't exist!");var b=Array.prototype.slice.apply(arguments,[]),c=b.slice(1);return this[a].apply(this,c)},this.option=function(a,b){if(!e(a))return i;var c;switch(a){case"starWidth":c=n;break;case"numStars":c=u;break;case"normalFill":c=q;break;case"ratedFill":c=r;break;case"multiColor":c=t;break;case"maxValue":c=v;break;case"precision":c=w;break;case"rating":c=C;break;case"halfStar":c=x;break;case"fullStar":c=y;break;case"readOnly":c=B;break;case"spacing":c=p;break;case"rtl":c=s;break;case"onInit":c=D;break;case"onSet":c=E;break;case"onChange":c=F;break;default:throw Error("No such option as "+a)}return e(b)?c(b):i[a]},u(i.numStars),B(i.readOnly),i.rtl&&s(i.rtl),this.collection.push(this),this.rating(i.rating,!0),$=!0,f.trigger("rateyo.init",{rating:i.rating})}function i(b,c){var d;return a.each(c,function(){if(b===this.node)return d=this,!1}),d}function j(b,c){return a.each(c,function(a){if(b===this.node){var d=c.slice(0,a),e=c.slice(a+1,c.length);return c=d.concat(e),!1}}),c}function k(b){var c=h.prototype.collection,d=a(this);if(0===d.length)return d;var e=Array.prototype.slice.apply(arguments,[]);if(0===e.length)b=e[0]={};else{if(1!==e.length||"object"!=typeof e[0]){if(e.length>=1&&"string"==typeof e[0]){var f=e[0],g=e.slice(1),j=[];return a.each(d,function(a,b){var d=i(b,c);if(!d)throw Error("Trying to set options before even initialization");var e=d[f];if(!e)throw Error("Method "+f+" does not exist!");var h=e.apply(d,g);j.push(h)}),j=1===j.length?j[0]:j}throw Error("Invalid Arguments")}b=e[0]}return b=a.extend({},n,b),a.each(d,function(){var d=i(this,c);if(d)return d;var e=a(this),f={},g=a.extend({},b);return a.each(e.data(),function(a,b){if(0===a.indexOf("rateyo")){var c=a.replace(/^rateyo/,"");c=c[0].toLowerCase()+c.slice(1),f[c]=b,delete g[c]}}),new h(a(this),a.extend({},f,g))})}function l(){return k.apply(this,Array.prototype.slice.apply(arguments,[]))}var m='<?xml version="1.0" encoding="utf-8"?><svg version="1.1"xmlns="http://www.w3.org/2000/svg"viewBox="0 12.705 512 486.59"x="0px" y="0px"xml:space="preserve"><polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "/></svg>',n={starWidth:"32px",normalFill:"gray",ratedFill:"#f39c12",numStars:5,maxValue:5,precision:1,rating:0,fullStar:!1,halfStar:!1,readOnly:!1,spacing:"0px",rtl:!1,multiColor:null,onInit:null,onChange:null,onSet:null,starSvg:null},o={startColor:"#c0392b",endColor:"#f1c40f"},p=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,q=function(a){if(!p.test(a))return null;var b=p.exec(a);return{r:parseInt(b[1],16),g:parseInt(b[2],16),b:parseInt(b[3],16)}};h.prototype.collection=[],window.RateYo=h,a.fn.rateYo=l}(window.jQuery);
//# sourceMappingURL=jquery.rateyo.min.js.map

(function(window, document, $, undefined) {
	  "use strict";
	$(function() {

if ($('#slider-range').length) {
	// Initialize slider:
	var rangeSlider = document.getElementById('slider-range');
	var moneyFormat = wNumb({decimals: 0, thousand: ',', prefix: '$'});
	noUiSlider.create(rangeSlider, {
		start: [
			20, 275
		],
		step: 1,
		range: {
			'min': [0],
			'max': [400]
		},
		connect: true,
		format: moneyFormat
	});
	rangeSlider.noUiSlider.on('update', function(values, handle) {
		document.getElementById('slider-range-value1').innerHTML = values[0];
		document.getElementById('slider-range-value2').innerHTML = values[1];
		document.getElementsByName('min-value').value = moneyFormat.from(values[0]);
		document.getElementsByName('max-value').value = moneyFormat.from(values[1]);
	});
};


	});

})(window, document, window.jQuery);

(function(window, document, $, undefined) {
    "use strict";
  $(function() {
    $("#product-id_10").rateYo({
      rating: 2.5,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_25").rateYo({
      rating: 3.5,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_57").rateYo({
      rating: 4.6,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_42").rateYo({
      rating: 2.3,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });


    $("#product-id_38").rateYo({
      rating: 2.6,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });

    $("#product-id_32").rateYo({
      rating: 1.3,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_100").rateYo({
      rating: 4.5,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_101").rateYo({
      rating: 3.3,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_102").rateYo({
      rating: 4.0,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_103").rateYo({
      rating: 2.5,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_104").rateYo({
      rating: 2.0,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_11").rateYo({
      rating: 3.3,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });

    $("#product-id_65").rateYo({
      rating: 4.0,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_26").rateYo({
      rating: 4.5,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_27").rateYo({
      rating: 1.5,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_28").rateYo({
      rating: 2.8,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
    $("#product-id_180").rateYo({
      rating: 3.6,
      "starWidth": "20px",
      "normalFill":QuantumPro.APP_COLORS.grey200,
      "ratedFill": QuantumPro.APP_COLORS.primary
    });
  });
})(window, document, window.jQuery);

/*! Select2 4.0.6-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return v.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o=b&&b.split("/"),p=t.map,q=p&&p["*"]||{};if(a){for(a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),"."===a[0].charAt(0)&&o&&(n=o.slice(0,o.length-1),a=n.concat(a)),k=0;k<a.length;k++)if("."===(m=a[k]))a.splice(k,1),k-=1;else if(".."===m){if(0===k||1===k&&".."===a[2]||".."===a[k-1])continue;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}if((o||q)&&p){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),o)for(l=o.length;l>0;l-=1)if((e=p[o.slice(0,l).join("/")])&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&q&&q[d]&&(i=q[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=w.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),o.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){r[a]=b}}function j(a){if(e(s,a)){var c=s[a];delete s[a],u[a]=!0,n.apply(b,c)}if(!e(r,a)&&!e(u,a))throw new Error("No "+a);return r[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return a?k(a):[]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=k(a),e=d[0],g=b[1];return a=d[1],e&&(e=f(e,g),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(g)):f(a,g):(a=f(a,g),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return g(a)},exports:function(a){var b=r[a];return void 0!==b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(a,c,d,f){var h,k,m,n,o,t,v,w=[],x=typeof d;if(f=f||a,t=l(f),"undefined"===x||"function"===x){for(c=!c.length&&d.length?["require","exports","module"]:c,o=0;o<c.length;o+=1)if(n=p(c[o],t),"require"===(k=n.f))w[o]=q.require(a);else if("exports"===k)w[o]=q.exports(a),v=!0;else if("module"===k)h=w[o]=q.module(a);else if(e(r,k)||e(s,k)||e(u,k))w[o]=j(k);else{if(!n.p)throw new Error(a+" missing "+k);n.p.load(n.n,g(f,!0),i(k),{}),w[o]=r[k]}m=d?d.apply(r[a],w):void 0,a&&(h&&h.exports!==b&&h.exports!==r[a]?r[a]=h.exports:m===b&&v||(r[a]=m))}else a&&(r[a]=d)},a=c=o=function(a,c,d,e,f){if("string"==typeof a)return q[a]?q[a](c):j(p(a,l(c)).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?n(b,a,c,d):setTimeout(function(){n(b,a,c,d)},4),o},o.config=function(a){return o(a)},a._defined=r,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(r,a)||e(s,a)||(s[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){"function"==typeof b[d]&&("constructor"!==d&&c.push(d))}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){return Array.prototype.unshift.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;c<d;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;c<a;c++){b+=Math.floor(36*Math.random()).toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return(e!==f||"hidden"!==f&&"visible"!==f)&&("scroll"===e||"scroll"===f||(d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth))},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c.__cache={};var e=0;return c.GetUniqueElementId=function(a){var b=a.getAttribute("data-select2-id");return null==b&&(a.id?(b=a.id,a.setAttribute("data-select2-id",b)):(a.setAttribute("data-select2-id",++e),b=e.toString())),b},c.StoreData=function(a,b,d){var e=c.GetUniqueElementId(a);c.__cache[e]||(c.__cache[e]={}),c.__cache[e][b]=d},c.GetData=function(b,d){var e=c.GetUniqueElementId(b);return d?c.__cache[e]&&null!=c.__cache[e][d]?c.__cache[e][d]:a(b).data(d):c.__cache[e]},c.RemoveData=function(a){var b=c.GetUniqueElementId(a);null!=c.__cache[b]&&delete c.__cache[b]},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){b.find(".select2-results").append(a)},c.prototype.sort=function(a){return this.options.get("sorter")(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var c=this;this.data.current(function(d){var e=a.map(d,function(a){return a.id.toString()});c.$results.find(".select2-results__option[aria-selected]").each(function(){var c=a(this),d=b.GetData(this,"data"),f=""+d.id;null!=d.element&&d.element.selected||null==d.element&&a.inArray(f,e)>-1?c.attr("aria-selected","true"):c.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(c){var d=document.createElement("li");d.className="select2-results__option";var e={role:"treeitem","aria-selected":"false"};c.disabled&&(delete e["aria-selected"],e["aria-disabled"]="true"),null==c.id&&delete e["aria-selected"],null!=c._resultId&&(d.id=c._resultId),c.title&&(d.title=c.title),c.children&&(e.role="group",e["aria-label"]=c.text,delete e["aria-selected"]);for(var f in e){var g=e[f];d.setAttribute(f,g)}if(c.children){var h=a(d),i=document.createElement("strong");i.className="select2-results__group";a(i);this.template(c,i);for(var j=[],k=0;k<c.children.length;k++){var l=c.children[k],m=this.option(l);j.push(m)}var n=a("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});n.append(j),h.append(i),h.append(n)}else this.template(c,d);return b.StoreData(d,"data",c),d},c.prototype.bind=function(c,d){var e=this,f=c.id+"-results";this.$results.attr("id",f),c.on("results:all",function(a){e.clear(),e.append(a.data),c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("results:append",function(a){e.append(a.data),c.isOpen()&&e.setClasses()}),c.on("query",function(a){e.hideMessages(),e.showLoading(a)}),c.on("select",function(){c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("unselect",function(){c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("open",function(){e.$results.attr("aria-expanded","true"),e.$results.attr("aria-hidden","false"),e.setClasses(),e.ensureHighlightVisible()}),c.on("close",function(){e.$results.attr("aria-expanded","false"),e.$results.attr("aria-hidden","true"),e.$results.removeAttr("aria-activedescendant")}),c.on("results:toggle",function(){var a=e.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),c.on("results:select",function(){var a=e.getHighlightedResults();if(0!==a.length){var c=b.GetData(a[0],"data");"true"==a.attr("aria-selected")?e.trigger("close",{}):e.trigger("select",{data:c})}}),c.on("results:previous",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var d=c-1;0===a.length&&(d=0);var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top,h=f.offset().top,i=e.$results.scrollTop()+(h-g);0===d?e.$results.scrollTop(0):h-g<0&&e.$results.scrollTop(i)}}),c.on("results:next",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a),d=c+1;if(!(d>=b.length)){var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top+e.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=e.$results.scrollTop()+h-g;0===d?e.$results.scrollTop(0):h>g&&e.$results.scrollTop(i)}}),c.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),c.on("results:message",function(a){e.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=e.$results.scrollTop(),c=e.$results.get(0).scrollHeight-b+a.deltaY,d=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=e.$results.height();d?(e.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(e.$results.scrollTop(e.$results.get(0).scrollHeight-e.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(c){var d=a(this),f=b.GetData(this,"data");if("true"===d.attr("aria-selected"))return void(e.options.get("multiple")?e.trigger("unselect",{originalEvent:c,data:f}):e.trigger("close",{}));e.trigger("select",{originalEvent:c,data:f})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(c){var d=b.GetData(this,"data");e.getHighlightedResults().removeClass("select2-results__option--highlighted"),e.trigger("results:focus",{data:d,element:a(this)})})},c.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),c<=2?this.$results.scrollTop(0):(g>this.$results.outerHeight()||g<0)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var c=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=b.GetData(this.$element[0],"old-tabindex")?this._tabindex=b.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),c.attr("title",this.$element.attr("title")),c.attr("tabindex",this._tabindex),this.$selection=c,c},d.prototype.bind=function(a,b){var d=this,e=(a.id,a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(c){a(document.body).on("mousedown.select2."+c.id,function(c){var d=a(c.target),e=d.closest(".select2");a(".select2.select2-container--open").each(function(){a(this),this!=e[0]&&b.GetData(this,"element").select2("close")})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){b.find(".selection").append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()})},e.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},e.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.attr("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,e){var f=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){f.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!f.options.get("disabled")){var d=a(this),e=d.parent(),g=c.GetData(e[0],"data");f.trigger("unselect",{originalEvent:b,data:g})}})},d.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},d.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},d.prototype.selectionContainer=function(){return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.attr("title",e.title||e.text),c.StoreData(f[0],"data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id;if(b.length>1||c)return a.call(this,b);this.clear();var d=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d)},b}),b.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(a,b,c){function d(){}return d.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},d.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var d=this.$selection.find(".select2-selection__clear");if(0!==d.length){b.stopPropagation();var e=c.GetData(d[0],"data"),f=this.$element.val();this.$element.val(this.placeholder.id);var g={data:e};if(this.trigger("clear",g),g.prevented)return void this.$element.val(f);for(var h=0;h<e.length;h++)if(g={data:e[h]},this.trigger("unselect",g),g.prevented)return void this.$element.val(f);this.$element.trigger("change"),this.trigger("toggle",{})}}},d.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||c.which!=b.DELETE&&c.which!=b.BACKSPACE||this._handleClear(c)},d.prototype.update=function(b,d){if(b.call(this,d),!(this.$selection.find(".select2-selection__placeholder").length>0||0===d.length)){var e=a('<span class="select2-selection__clear">&times;</span>');c.StoreData(e[0],"data",d),this.$selection.find(".select2-selection__rendered").prepend(e)}},d}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,d,e){var f=this;a.call(this,d,e),d.on("open",function(){f.$search.trigger("focus")}),d.on("close",function(){f.$search.val(""),f.$search.removeAttr("aria-activedescendant"),f.$search.trigger("focus")}),d.on("enable",function(){f.$search.prop("disabled",!1),f._transferTabIndex()}),d.on("disable",function(){f.$search.prop("disabled",!0)}),d.on("focus",function(a){f.$search.trigger("focus")}),d.on("results:focus",function(a){f.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){f.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){f._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){if(a.stopPropagation(),f.trigger("keypress",a),f._keyUpPrevented=a.isDefaultPrevented(),a.which===c.BACKSPACE&&""===f.$search.val()){var d=f.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var e=b.GetData(d[0],"data");f.searchRemoveChoice(e),a.preventDefault()}}});var g=document.documentMode,h=g&&g<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){if(h)return void f.$selection.off("input.search input.searchcheck");f.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(h&&"input"===a.type)return void f.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&f.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{a=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],g=["opening","closing","selecting","unselecting","clearing"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"}}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),null!=c.id?d+="-"+c.id.toString():d+="-"+a.generateChars(4),d},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple")){if(a.selected=!1,c(a.element).is("option"))return a.element.selected=!1,void this.$element.trigger("change");this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})}},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){b.RemoveData(this)})},d.prototype.query=function(a,b){var d=[],e=this;this.$element.children().each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var d;a.children?(d=document.createElement("optgroup"),d.label=a.text):(d=document.createElement("option"),void 0!==d.textContent?d.textContent=a.text:d.innerText=a.text),void 0!==a.id&&(d.value=a.id),a.disabled&&(d.disabled=!0),a.selected&&(d.selected=!0),a.title&&(d.title=a.title);var e=c(d),f=this._normalizeItem(a);return f.element=d,b.StoreData(d,"data",f),e},d.prototype.item=function(a){var d={};if(null!=(d=b.GetData(a[0],"data")))return d;if(a.is("option"))d={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){d={text:a.prop("label"),children:[],title:a.prop("title")};for(var e=a.children("option"),f=[],g=0;g<e.length;g++){var h=c(e[g]),i=this.item(h);f.push(i)}d.children=f}return d=this._normalizeItem(d),d.element=a[0],b.StoreData(a[0],"data",d),d},d.prototype._normalizeItem=function(a){a!==Object(a)&&(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){return this.options.get("matcher")(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){"status"in d&&(0===d.status||"0"===d.status)||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0);if((i.text||"").toUpperCase()===(b.term||"").toUpperCase()||j)return!f&&(a.data=g,void c(a))}if(f)return!0;var k=e.createTag(b);if(null!=k){var l=e.option(k);l.attr("data-select2-tag",!0),e.addOptions([l]),e.insertTag(g,k)}a.results=g,c(a)}var e=this;if(this._removeOldTags(),null==b.term||null!=b.page)return void a.call(this,b,c);a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b);if(!g.$element.find("option").filter(function(){return a(this).val()===c.id}).length){var d=g.option(c);d.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([d])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",b.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;if(d.maximumSelectionLength>0&&f>=d.maximumSelectionLength)return void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}});a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val(""),e.$search.blur()}),c.on("focus",function(){c.isOpen()||e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){e.showSearch(a)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){e.$results.offset().top+e.$results.outerHeight(!1)+50>=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1)&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){b.StoreData(this,"select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(c){var d=b.GetData(this,"select2-scroll-position");a(this).scrollTop(d.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id;this.$container.parents().filter(b.hasScroll).off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return!(a(c.data.results)<this.minimumResultsForSearch)&&b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",["../utils"],function(a){function b(){}return b.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},b.prototype._handleSelectOnClose=function(b,c){if(c&&null!=c.originalSelect2Event){var d=c.originalSelect2Event;if("select"===d._type||"unselect"===d._type)return}var e=this.getHighlightedResults();if(!(e.length<1)){var f=a.GetData(e[0],"data");null!=f.element&&f.element.selected||null==f.element&&f.selected||this.trigger("select",{data:f})}},b}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){return"Please enter "+(a.minimum-a.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}return D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),null==l.tokenSeparators&&null==l.tokenizer||(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(a){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(a){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var O=k.loadPath(this.defaults.amdLanguageBase+"en"),P=new k(l.language);P.extend(O),l.translations=P}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){null==c(d,e.children[g])&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var h=b(e.text).toUpperCase(),i=b(d.term).toUpperCase();return h.indexOf(i)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(!0,this.defaults,f)},new D}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),d.GetData(a[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),d.StoreData(a[0],"data",d.GetData(a[0],"select2Tags")),d.StoreData(a[0],"tags",!0)),d.GetData(a[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",d.GetData(a[0],"ajaxUrl")),d.StoreData(a[0],"ajax-Url",d.GetData(a[0],"ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,d.GetData(a[0])):d.GetData(a[0]);var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,d){null!=c.GetData(a[0],"select2")&&c.GetData(a[0],"select2").destroy(),this.$element=a,this.id=this._generateId(a),d=d||{},this.options=new b(d,a),e.__super__.constructor.call(this);var f=a.attr("tabindex")||0;c.StoreData(a[0],"old-tabindex",f),a.attr("tabindex","-1");var g=this.options.get("dataAdapter");this.dataAdapter=new g(a,this.options);var h=this.render();this._placeContainer(h);var i=this.options.get("selectionAdapter");this.selection=new i(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,h);var j=this.options.get("dropdownAdapter");this.dropdown=new j(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,h);var k=this.options.get("resultsAdapter");this.results=new k(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){l.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),c.StoreData(a[0],"select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return e<=0?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;h<i;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=a&&0!==a.length||(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",c.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),c.RemoveData(this.$element[0]),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),c.StoreData(b[0],"element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(a,b,c,d,e){if(null==a.fn.select2){var f=["open","close","destroy"];a.fn.select2=function(b){if("object"==typeof(b=b||{}))return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,g=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=e.GetData(this,"select2");null==a&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=a[b].apply(a,g)}),a.inArray(b,f)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});

(function(window, document, $, undefined) {
	  "use strict";
	$(function() {

		// basic
		$("#s2_demo1").select2();

		// nested
		$('#s2_demo2').select2({
			placeholder: "Select a state"
		});

		// multi select
		$('#s2_demo3').select2({
			placeholder: "Select a state"
		});

		// placeholder
		$("#s2_demo4").select2({
			placeholder: "Select a State",
			allowClear: true
		});

		// Minimum Input
		$("#s2_demo5").select2({
			minimumInputLength: 2,
			placeholder: "Select a State",
		});


	});

})(window, document, window.jQuery);
