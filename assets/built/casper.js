function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}!function(i){"use strict";i.fn.fitVids=function(e){var t,r,o={customSelector:null,ignore:null};return document.getElementById("fit-vids-style")||(t=document.head||document.getElementsByTagName("head")[0],(r=document.createElement("div")).innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',t.appendChild(r.childNodes[1])),e&&i.extend(o,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];o.customSelector&&e.push(o.customSelector);var n=".fitvidsignore";o.ignore&&(n=n+", "+o.ignore);e=i(this).find(e.join(","));(e=(e=e.not("object object")).not(n)).each(function(){var e,t,r=i(this);0<r.parents(n).length||"embed"===this.tagName.toLowerCase()&&r.parent("object").length||r.parent(".fluid-width-video-wrapper").length||(r.css("height")||r.css("width")||!isNaN(r.attr("height"))&&!isNaN(r.attr("width"))||(r.attr("height",9),r.attr("width",16)),e=("object"===this.tagName.toLowerCase()||r.attr("height")&&!isNaN(parseInt(r.attr("height"),10))?parseInt(r.attr("height"),10):r.height())/(isNaN(parseInt(r.attr("width"),10))?r.width():parseInt(r.attr("width"),10)),r.attr("name")||(t="fitvid"+i.fn.fitVids._count,r.attr("name",t),i.fn.fitVids._count++),r.wrap('<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),r.removeAttr("height").removeAttr("width"))})})},i.fn.fitVids._count=0}(window.jQuery||window.Zepto),window.onload=function(){for(var e=document.querySelectorAll(".js-allowed"),t=document.querySelectorAll(".js-deny"),r=0;r<t.length;r++)t[r].style.display="none";for(r=0;r<e.length;r++)e[r].style.display="block";for(var n=document.querySelectorAll(".lazy-img"),r=0;r<n.length;r++)n[r].setAttribute("src",n[r].getAttribute("data-src"));for(var o,i=document.querySelectorAll(".post-card-image"),r=0;r<i.length;r++)i[r].style.display="block";!(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./))||(o=document.querySelectorAll(".site-nav-right"))&&(o[0].style.display="none")},function(e){e.addEventListener("DOMContentLoaded",function(){e.querySelectorAll(".kg-gallery-image img").forEach(function(e){var t=e.closest(".kg-gallery-image"),e=e.attributes.width.value/e.attributes.height.value;t.style.flex=e+" 1 0%"})})}((window,document)),function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&module.exports?module.exports=t():e.fuzzysort=t()}(this,function(){var j="undefined"!=typeof require&&"undefined"==typeof window,r=new Map,n=new Map,E=[];E.total=0;var b=[],k=[];function t(){r.clear(),n.clear(),b=[],k=[]}function q(e){for(var t=-9007199254740991,r=e.length-1;0<=r;--r){var n=e[r];null!==n&&(t<(n=n.score)&&(t=n))}return-9007199254740991===t?null:t}function P(e,t){var r=e[t];if(void 0!==r)return r;var n=t;Array.isArray(t)||(n=t.split("."));for(var o=n.length,i=-1;e&&++i<o;)e=e[n[i]];return e}function N(e){return"object"==typeof e}var o=function(){var i=[],l=0,e={};function t(){for(var e=i[n=0],t=1;t<l;){var r=t+1,n=t;r<l&&i[r].score<i[t].score&&(n=r),i[n-1>>1]=i[n],t=1+(n<<1)}for(var o=n-1>>1;0<n&&e.score<i[o].score;o=(n=o)-1>>1)i[n]=i[o];i[n]=e}return e.add=function(e){var t=l;i[l++]=e;for(var r=t-1>>1;0<t&&e.score<i[r].score;r=(t=r)-1>>1)i[t]=i[r];i[t]=e},e.poll=function(){if(0!==l){var e=i[0];return i[0]=i[--l],t(),e}},e.peek=function(e){if(0!==l)return i[0]},e.replaceTop=function(e){i[0]=e,t()},e},A=o();return function e(_){var I={single:function(e,t,r){return e?(N(e)||(e=I.getPreparedSearch(e)),t?(N(t)||(t=I.getPrepared(t)),((r&&void 0!==r.allowTypo?r.allowTypo:!_||void 0===_.allowTypo||_.allowTypo)?I.algorithm:I.algorithmNoTypo)(e,t,e[0])):null):null},go:function(e,t,r){if(!e)return E;var n=(e=I.prepareSearch(e))[0],o=r&&r.threshold||_&&_.threshold||-9007199254740991,i=r&&r.limit||_&&_.limit||9007199254740991,l=(r&&void 0!==r.allowTypo?r.allowTypo:!_||void 0===_.allowTypo||_.allowTypo)?I.algorithm:I.algorithmNoTypo,a=0,s=0,u=t.length;if(r&&r.keys)for(var c=r.scoreFn||q,d=r.keys,f=d.length,h=u-1;0<=h;--h){for(var p=t[h],g=new Array(f),y=f-1;0<=y;--y)(w=P(p,m=d[y]))?(N(w)||(w=I.getPrepared(w)),g[y]=l(e,w,n)):g[y]=null;g.obj=p;var v=c(g);null!==v&&(v<o||(g.score=v,a<i?(A.add(g),++a):(++s,v>A.peek().score&&A.replaceTop(g))))}else if(r&&r.key)for(var m=r.key,h=u-1;0<=h;--h)(w=P(p=t[h],m))&&(N(w)||(w=I.getPrepared(w)),null!==(b=l(e,w,n))&&(b.score<o||(b={target:b.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:b.score,indexes:b.indexes,obj:p},a<i?(A.add(b),++a):(++s,b.score>A.peek().score&&A.replaceTop(b)))));else for(var w,b,h=u-1;0<=h;--h)(w=t[h])&&(N(w)||(w=I.getPrepared(w)),null!==(b=l(e,w,n))&&(b.score<o||(a<i?(A.add(b),++a):(++s,b.score>A.peek().score&&A.replaceTop(b)))));if(0===a)return E;for(var k=new Array(a),h=a-1;0<=h;--h)k[h]=A.poll();return k.total=a+s,k},goAsync:function(S,T,C){var L=!1,e=new Promise(function(h,p){if(!S)return h(E);var g=(S=I.prepareSearch(S))[0],y=o(),v=T.length-1,m=C&&C.threshold||_&&_.threshold||-9007199254740991,w=C&&C.limit||_&&_.limit||9007199254740991,b=(C&&void 0!==C.allowTypo?C.allowTypo:!_||void 0===_.allowTypo||_.allowTypo)?I.algorithm:I.algorithmNoTypo,k=0,A=0;function x(){if(L)return p("canceled");var e=Date.now();if(C&&C.keys)for(var t=C.scoreFn||q,r=C.keys,n=r.length;0<=v;--v){for(var o=T[v],i=new Array(n),l=n-1;0<=l;--l)(s=P(o,c=r[l]))?(N(s)||(s=I.getPrepared(s)),i[l]=b(S,s,g)):i[l]=null;i.obj=o;var a=t(i);if(null!==a&&!(a<m)&&(i.score=a,k<w?(y.add(i),++k):(++A,a>y.peek().score&&y.replaceTop(i)),v%1e3==0&&10<=Date.now()-e))return void(j?setImmediate:setTimeout)(x)}else if(C&&C.key){for(var s,u,c=C.key;0<=v;--v)if((s=P(o=T[v],c))&&(N(s)||(s=I.getPrepared(s)),null!==(u=b(S,s,g))&&!(u.score<m)&&(u={target:u.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:u.score,indexes:u.indexes,obj:o},k<w?(y.add(u),++k):(++A,u.score>y.peek().score&&y.replaceTop(u)),v%1e3==0&&10<=Date.now()-e)))return void(j?setImmediate:setTimeout)(x)}else for(;0<=v;--v)if((s=T[v])&&(N(s)||(s=I.getPrepared(s)),null!==(u=b(S,s,g))&&!(u.score<m)&&(k<w?(y.add(u),++k):(++A,u.score>y.peek().score&&y.replaceTop(u)),v%1e3==0&&10<=Date.now()-e)))return void(j?setImmediate:setTimeout)(x);if(0===k)return h(E);for(var d=new Array(k),f=k-1;0<=f;--f)d[f]=y.poll();d.total=k+A,h(d)}j?setImmediate(x):x()});return e.cancel=function(){L=!0},e},highlight:function(e,t,r){if(null===e)return null;void 0===t&&(t="<b>"),void 0===r&&(r="</b>");for(var n="",o=0,i=!1,l=e.target,a=l.length,s=e.indexes,u=0;u<a;++u){var c=l[u];if(s[o]===u){if(i||(i=!0,n+=t),++o===s.length){n+=c+r+l.substr(u+1);break}}else i&&(i=!1,n+=r);n+=c}return n},prepare:function(e){if(e)return{target:e,_targetLowerCodes:I.prepareLowerCodes(e),_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSlow:function(e){if(e)return{target:e,_targetLowerCodes:I.prepareLowerCodes(e),_nextBeginningIndexes:I.prepareNextBeginningIndexes(e),score:null,indexes:null,obj:null}},prepareSearch:function(e){if(e)return I.prepareLowerCodes(e)},getPrepared:function(e){if(999<e.length)return I.prepare(e);var t=r.get(e);return void 0!==t||(t=I.prepare(e),r.set(e,t)),t},getPreparedSearch:function(e){if(999<e.length)return I.prepareSearch(e);var t=n.get(e);return void 0!==t||(t=I.prepareSearch(e),n.set(e,t)),t},algorithm:function(e,t,r){for(var n=t._targetLowerCodes,o=e.length,i=n.length,l=0,a=0,s=0,u=0;;){if(r===n[a]){if(b[u++]=a,++l===o)break;r=e[0===s?l:s===l?l+1:s===l-1?l-1:l]}if(i<=++a)for(;;){if(l<=1)return null;if(0===s){if(r===e[--l])continue;s=l}else{if(1===s)return null;if((r=e[1+(l=--s)])===e[l])continue}a=b[(u=l)-1]+1;break}}var l=0,c=0,d=!1,f=0,h=t._nextBeginningIndexes;null===h&&(h=t._nextBeginningIndexes=I.prepareNextBeginningIndexes(t.target));var p,g,y=a=0===b[0]?0:h[b[0]-1];if(a!==i)for(;;)if(i<=a)if(l<=0){if(o-2<++c)break;e[c]!==e[c+1]&&(a=y)}else--l,a=h[k[--f]];else if(e[0===c?l:c===l?l+1:c===l-1?l-1:l]===n[a]){if(k[f++]=a,++l===o){d=!0;break}++a}else a=h[a];g=d?(p=k,f):(p=b,u);for(var v=0,m=-1,w=0;w<o;++w)m!==(a=p[w])-1&&(v-=a),m=a;for(d?0!==c&&(v+=-20):(v*=1e3,0!==s&&(v+=-20)),v-=i-o,t.score=v,t.indexes=new Array(g),w=g-1;0<=w;--w)t.indexes[w]=p[w];return t},algorithmNoTypo:function(e,t,r){for(var n=t._targetLowerCodes,o=e.length,i=n.length,l=0,a=0,s=0;;){if(r===n[a]){if(b[s++]=a,++l===o)break;r=e[l]}if(i<=++a)return null}var u,c,l=0,d=!1,f=0,h=t._nextBeginningIndexes;if(null===h&&(h=t._nextBeginningIndexes=I.prepareNextBeginningIndexes(t.target)),(a=0===b[0]?0:h[b[0]-1])!==i)for(;;)if(i<=a){if(l<=0)break;--l,a=h[k[--f]]}else if(e[l]===n[a]){if(k[f++]=a,++l===o){d=!0;break}++a}else a=h[a];c=d?(u=k,f):(u=b,s);for(var p=0,g=-1,y=0;y<o;++y)g!==(a=u[y])-1&&(p-=a),g=a;for(d||(p*=1e3),p-=i-o,t.score=p,t.indexes=new Array(c),y=c-1;0<=y;--y)t.indexes[y]=u[y];return t},prepareLowerCodes:function(e){for(var t=e.length,r=[],n=e.toLowerCase(),o=0;o<t;++o)r[o]=n.charCodeAt(o);return r},prepareBeginningIndexes:function(e){for(var t=e.length,r=[],n=0,o=!1,i=!1,l=0;l<t;++l){var a=e.charCodeAt(l),s=65<=a&&a<=90,u=s||97<=a&&a<=122||48<=a&&a<=57,a=s&&!o||!i||!u,o=s,i=u;a&&(r[n++]=l)}return r},prepareNextBeginningIndexes:function(e){for(var t=e.length,r=I.prepareBeginningIndexes(e),n=[],o=r[0],i=0,l=0;l<t;++l)l<o?n[l]=o:(o=r[++i],n[l]=void 0===o?t:o);return n},cleanup:t,new:e};return I}()});var GhostSearch=function(){function r(e){_classCallCheck(this,r);var t={url:"",key:"",version:"v3",input:"#ghost-search-field",results:"#ghost-search-results",button:"",defaultValue:"",template:function(e){return'<a href="'+[location.protocol,"//",window.location.host].join("")+"/"+e.slug+'/">'+e.title+"</a>"},trigger:"focus",options:{keys:["title"],limit:10,threshold:-3500,allowTypo:this.check=!1},api:{resource:"posts",parameters:{limit:"all",fields:["title","slug"],filter:"",include:"",order:"",formats:"",page:""}},on:{beforeDisplay:function(){},afterDisplay:function(){},beforeFetch:function(){},afterFetch:function(){}}},e=this.mergeDeep(t,e);Object.assign(this,e),this.init()}return _createClass(r,[{key:"mergeDeep",value:function(t,r){var n=this;return t&&"object"===_typeof(t)&&!Array.isArray(t)&&null!==t&&r&&"object"===_typeof(r)&&!Array.isArray(r)&&null!==r&&Object.keys(r).forEach(function(e){r[e]&&"object"===_typeof(r[e])&&!Array.isArray(r[e])&&null!==r[e]?(t[e]||Object.assign(t,_defineProperty({},e,{})),n.mergeDeep(t[e],r[e])):Object.assign(t,_defineProperty({},e,r[e]))}),t}},{key:"fetch",value:function(){var t=this;this.on.beforeFetch();var e,r=new GhostContentAPI({url:this.url,key:this.key,version:this.version}),n={},o=this.api.parameters;for(e in o)""!=o[e]&&(n[e]=o[e]);r[this.api.resource].browse(n).then(function(e){t.search(e)}).catch(function(e){console.error(e)})}},{key:"createElementFromHTML",value:function(e){var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild}},{key:"displayResults",value:function(e){if(null!==document.querySelectorAll(this.results)[0].firstChild&&""!==document.querySelectorAll(this.results)[0].firstChild)for(;document.querySelectorAll(this.results)[0].firstChild;)document.querySelectorAll(this.results)[0].removeChild(document.querySelectorAll(this.results)[0].firstChild);var t=document.querySelectorAll(this.input)[0].value;""!=this.defaultValue&&(t=this.defaultValue);var r,n=fuzzysort.go(t,e,{keys:this.options.keys,limit:this.options.limit,allowTypo:this.options.allowTypo,threshold:this.options.threshold});for(r in n)r<n.length&&document.querySelectorAll(this.results)[0].appendChild(this.createElementFromHTML(this.template(n[r].obj)));this.on.afterDisplay(n),this.defaultValue=""}},{key:"search",value:function(t){var e,r=this;this.on.afterFetch(t),this.check=!0,""!=this.defaultValue&&(this.on.beforeDisplay(),this.displayResults(t)),""!=this.button?(e=document.getElementById("search-btn"),document.getElementById("search-form").addEventListener("submit",function(e){e.preventDefault()}),e.addEventListener("click",function(e){e.preventDefault(),r.on.beforeDisplay(),r.displayResults(t)})):document.querySelectorAll(this.input)[0].addEventListener("keyup",function(e){r.on.beforeDisplay(),r.displayResults(t)})}},{key:"checkArgs",value:function(){return document.querySelectorAll(this.input).length?document.querySelectorAll(this.results).length?""==this.button||document.querySelectorAll(this.button).length?""==this.url?(console.log("Content API Client Library host missing. Please set the host. Must not end in a trailing slash."),!1):""!=this.key||(console.log('Content API Client Library key missing. Please set the key. Hex string copied from the "Integrations" screen in Ghost Admin.'),!1):(console.log("Button not found."),!1):(console.log("Results not found."),!1):(console.log("Input not found."),!1)}},{key:"validate",value:function(){return!!this.checkArgs()}},{key:"init",value:function(){var t=this;this.validate()&&(""!=this.defaultValue&&(document.querySelectorAll(this.input)[0].value=this.defaultValue,window.onload=function(){t.check||t.fetch()}),"focus"==this.trigger?document.querySelectorAll(this.input)[0].addEventListener("focus",function(e){t.check||t.fetch()}):"load"==this.trigger&&(window.onload=function(){t.check||t.fetch()}))}}]),r}();!function(t,r){var n,o,i,l,a,s,u,c=r.querySelector("link[rel=next]");function d(){if(404===this.status)return t.removeEventListener("scroll",h),void t.removeEventListener("resize",p);this.response.querySelectorAll(".post-card").forEach(function(e){n.appendChild(r.importNode(e,!0))});var e=this.response.querySelector("link[rel=next]");e?c.href=e.href:(t.removeEventListener("scroll",h),t.removeEventListener("resize",p)),u=r.documentElement.scrollHeight,l=i=!1}function e(){var e;l||(a+s<=u-o?i=!1:(l=!0,(e=new t.XMLHttpRequest).responseType="document",e.addEventListener("load",d),e.open("GET",c.href),e.send(null)))}function f(){i||t.requestAnimationFrame(e),i=!0}function h(){a=t.scrollY,f()}function p(){s=t.innerHeight,u=r.documentElement.scrollHeight,f()}!c||(n=r.querySelector(".post-feed"))&&(l=i=!(o=300),a=t.scrollY,s=t.innerHeight,u=r.documentElement.scrollHeight,t.addEventListener("scroll",h,{passive:!0}),t.addEventListener("resize",p),f())}(window,document);
//# sourceMappingURL=casper.js.map