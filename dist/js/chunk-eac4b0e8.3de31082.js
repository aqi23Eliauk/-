(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eac4b0e8"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("d3b7");function n(t,e,r,n,i,o,a){try{var c=t[o](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function c(t){n(a,i,o,c,s,"next",t)}function s(t){n(a,i,o,c,s,"throw",t)}c(void 0)}))}}},"2f98":function(t,e,r){},"4cc9":function(t,e,r){"use strict";r("9570")},9570:function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,o=Object.create(i.prototype),a=new T(n||[]);return o._invoke=k(t,r,a),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",v="executing",p="completed",d={};function y(){}function g(){}function m(){}var w={};s(w,o,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(N([])));_&&_!==r&&n.call(_,o)&&(w=_);var x=m.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(i,o,a,c){var s=l(t[i],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;function o(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function k(t,e,r){var n=f;return function(i,o){if(n===v)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return G()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var c=C(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function N(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:G}}function G(){return{value:e,done:!0}}return g.prototype=m,s(x,"constructor",m),s(m,"constructor",g),g.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(E.prototype),s(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new E(u(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),s(x,c,"Generator"),s(x,o,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},"99af":function(t,e,r){"use strict";var n=r("23e7"),i=r("d039"),o=r("e8b5"),a=r("861d"),c=r("7b0b"),s=r("50c4"),u=r("8418"),l=r("65f0"),f=r("1dde"),h=r("b622"),v=r("2d00"),p=h("isConcatSpreadable"),d=9007199254740991,y="Maximum allowed index exceeded",g=v>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),m=f("concat"),w=function(t){if(!a(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},b=!g||!m;n({target:"Array",proto:!0,forced:b},{concat:function(t){var e,r,n,i,o,a=c(this),f=l(a,0),h=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?a:arguments[e],w(o)){if(i=s(o.length),h+i>d)throw TypeError(y);for(r=0;r<i;r++,h++)r in o&&u(f,h,o[r])}else{if(h>=d)throw TypeError(y);u(f,h++,o)}return f.length=h,f}})},"9e06":function(t,e,r){"use strict";r("2f98")},d088:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"newMusic"}},[r("div",{staticClass:"main"},[r("div",{staticClass:"options"},[r("div",{staticClass:"options_item",class:{avtive:0==t.tag},on:{click:function(e){t.tag=0}}},[t._v(" 全部 ")]),r("div",{staticClass:"options_item",class:{avtive:7==t.tag},on:{click:function(e){t.tag=7}}},[t._v(" 华语 ")]),r("div",{staticClass:"options_item",class:{avtive:96==t.tag},on:{click:function(e){t.tag=96}}},[t._v(" 欧美 ")]),r("div",{staticClass:"options_item",class:{avtive:16==t.tag},on:{click:function(e){t.tag=16}}},[t._v(" 韩国 ")]),r("div",{staticClass:"options_item",class:{avtive:8==t.tag},on:{click:function(e){t.tag=8}}},[t._v(" 日本 ")])]),r("ul",t._l(t.lists,(function(e,n){return r("li",{key:n},[r("div",{staticClass:"items"},[r("div",{staticClass:"index"},n+1<10?[t._v("0"+t._s(n+1))]:[t._v(t._s(n+1))]),r("div",{staticClass:"Img",on:{click:function(r){return t.playMusic(e.id)}}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.album.picUrl,expression:"item.album.picUrl"}],attrs:{alt:""}})]),r("div",{staticClass:"name"},[r("h4",{staticClass:"all"},[t._v(t._s(e.name))])]),r("div",{staticClass:"author all"},[t._v(t._s(e.album.artists[0].name))]),r("div",{staticClass:"album all"},[t._v(t._s(e.album.name))]),r("div",{staticClass:"time all"},[t._v(t._s(e.duration))])])])})),0)]),r("div",{staticClass:"backT"},[r("back-top")],1),r("div",{staticClass:"zhanwei"})])},i=[],o=r("1da1"),a=(r("96cf"),r("99af"),r("bc3a")),c=r.n(a),s=r("d658"),u={components:{backTop:s["a"]},data:function(){return{lists:[],tag:"0"}},watch:{tag:function(){this.getList()}},created:function(){this.getList()},methods:{getList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,i,o,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c()({url:"https://autumnfish.cn/top/song",method:"get",params:{type:t.tag}});case 2:if(r=e.sent,n=r.data,200===n.code)for(t.lists=n.data,i=0;i<t.lists.length;i++)o=t.lists[i].duration,a=parseInt(o/1e3/60),s=parseInt(o/1e3%60),a<10&&(a="0"+a),s<10&&(s="0"+s),t.lists[i].duration="".concat(a,":").concat(s);case 5:case"end":return e.stop()}}),e)})))()},playMusic:function(t){var e="https://music.163.com/song/media/outer/url?id=";this.$parent.musicUrl="",this.$parent.musicUrl=e+t+".mp3"}}},l=u,f=(r("9e06"),r("4cc9"),r("2877")),h=Object(f["a"])(l,n,i,!1,null,"fcf2c64c",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-eac4b0e8.3de31082.js.map