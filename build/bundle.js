var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function u(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function p(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e){t.value=null==e?"":e}function v(t,e,n){t.classList[n?"add":"remove"](e)}let g;function b(t){g=t}function $(){const t=function(){if(!g)throw new Error("Function called outside component initialization");return g}();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach((e=>{e.call(t,o)}))}}}const w=[],x=[],T=[],k=[],M=Promise.resolve();let _=!1;function C(t){T.push(t)}let D=!1;const E=new Set;function S(){if(!D){D=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];b(e),A(e.$$)}for(b(null),w.length=0;x.length;)x.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];E.has(e)||(E.add(e),e())}T.length=0}while(w.length);for(;k.length;)k.pop()();_=!1,D=!1,E.clear()}}function A(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const P=new Set;let N;function O(){N={r:0,c:[],p:N}}function j(){N.r||r(N.c),N=N.p}function H(t,e){t&&t.i&&(P.delete(t),t.i(e))}function I(t,e,n,r){if(t&&t.o){if(P.has(t))return;P.add(t),N.c.push((()=>{P.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function q(t){t&&t.c()}function F(t,n,s,i){const{fragment:u,on_mount:c,on_destroy:a,after_update:l}=t.$$;u&&u.m(n,s),i||C((()=>{const n=c.map(e).filter(o);a?a.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(C)}function R(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function L(t,e){-1===t.$$.dirty[0]&&(w.push(t),_||(_=!0,M.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(e,o,s,i,u,c,l=[-1]){const d=g;b(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:o.context||[]),callbacks:n(),dirty:l,skip_bound:!1};let p=!1;if(f.ctx=s?s(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&u(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),p&&L(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(a)}else f.fragment&&f.fragment.c();o.intro&&H(e.$$.fragment),F(e,o.target,o.anchor,o.customElement),S()}b(d)}class U{$destroy(){R(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y=[];function J(e,n=t){let r;const o=[];function i(t){if(s(e,t)&&(e=t,r)){const t=!Y.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Y.push(n,e)}if(t){for(let t=0;t<Y.length;t+=2)Y[t][0](Y[t+1]);Y.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(s,u=t){const c=[s,u];return o.push(c),1===o.length&&(r=n(i)||t),s(e),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const z=J(""),W=J("");var Z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function B(t){var e={exports:{}};return t(e,e.exports),e.exports}var K=B((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.ResponseError=e.APIError=void 0;class n extends Error{constructor(t){super(t.error),this._code=t.code,this._status=t.status,this._error=t.error,this._context=t.context}get code(){return this._code}get status(){return this._status}get error(){return this._error}get context(){return this._context}}e.APIError=n;class r extends Error{constructor(t){super(`request failed: ${t.status}`),this._response=t}get response(){return this._response}}e.ResponseError=r})),Q=B((function(t,e){var n=Z&&Z.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{c(r.next(t))}catch(t){s(t)}}function u(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,u)}c((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.RequestClient=void 0;e.RequestClient=class{constructor(t,e){this.endpoint=t,this.options=e}request(t,e,r){return n(this,void 0,void 0,(function*(){const n=new Headers;n.set("Content-Type","application/json"),n.set("Accept","application/json"),this.options.auth&&n.set("Authorization",this.options.auth),this.options.userAgent&&n.set("User-Agent",this.options.userAgent);const o=yield window.fetch(`${this.endpoint}/${this.options.version}/${e}`,{method:t,headers:n,body:r?JSON.stringify(r):null,credentials:this.options.auth?"include":"omit"});if(204===o.status)return{};if(!o.ok){let t;try{t=yield o.json()}catch(t){throw new K.ResponseError(o)}throw new K.APIError(t)}return o.json()}))}get clientOptions(){return this.options}}})),V=B((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.Client=void 0;const n={version:"v1",userAgent:"ranna-ts",auth:null};class r extends Q.RequestClient{constructor(t,e=n){super(t,e)}spec(){return this.request("GET","spec")}exec(t,e=!1){return this.request("POST",`exec?bypass_cache=${e}`,t)}info(){return this.request("GET","info")}}e.Client=r})),X=B((function(t,e){var n=Z&&Z.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{c(r.next(t))}catch(t){s(t)}}function u(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,u)}c((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.SnippetsClient=void 0;const r={version:"v1",userAgent:"ranna-ts",auth:null};class o extends Q.RequestClient{constructor(t,e=r){super(t,e)}createAccount(t){return this.request("PUT",`users/${t}`)}exchangeAPIToken(t,e,r=!1){return n(this,void 0,void 0,(function*(){this.clientOptions.auth="bearer "+e;let n=null;try{return n=yield this.request("POST",`users/${t}/apitoken`),n}catch(t){throw t}finally{this.clientOptions.auth=r&&n?"bearer "+n.token:null}}))}deleteAccount(t,e){return n(this,void 0,void 0,(function*(){this.clientOptions.auth="bearer "+e;let n=null;try{return n=yield this.request("DELETE",`users/${t}`),n}catch(t){throw t}finally{this.clientOptions.auth=null}}))}list(){return this.request("GET","snippets")}get(t){return this.request("GET",`snippets/${t}`)}create(t){return this.request("POST","snippets",t)}delete(t){return this.request("DELETE",`snippets/${t}`)}}e.SnippetsClient=o})),tt=B((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.SnippetsClient=e.ResponseError=e.APIError=e.Client=void 0,Object.defineProperty(e,"Client",{enumerable:!0,get:function(){return V.Client}}),Object.defineProperty(e,"APIError",{enumerable:!0,get:function(){return K.APIError}}),Object.defineProperty(e,"ResponseError",{enumerable:!0,get:function(){return K.ResponseError}}),Object.defineProperty(e,"SnippetsClient",{enumerable:!0,get:function(){return X.SnippetsClient}})}));class et{static set(t,e){window.localStorage.setItem(t,JSON.stringify(e))}static get(t,e){const n=window.localStorage.getItem(t);return n?JSON.parse(n):e}static del(t){window.localStorage.removeItem(t)}}class nt extends tt.SnippetsClient{constructor(t,e){super(t,e)}logout(){W.set(""),et.del("apikey")}}const rt=new nt("https://snippets.ranna.zekro.de"),ot=et.get("apikey");function st(t){let e,n,o,s,i,h,v,g,b,$,w,x,T,k,M,_,C;return{c(){e=l("label"),e.textContent="Username",n=f(),o=l("input"),s=f(),i=l("label"),i.textContent="Master Key",h=f(),v=l("input"),g=f(),b=l("input"),$=f(),w=l("label"),w.textContent="Store Credentials",x=f(),T=l("button"),k=d("LOGIN"),m(e,"for","username"),m(e,"class","svelte-aspomc"),m(o,"id","username"),m(o,"autocomplete","off"),m(o,"class","svelte-aspomc"),m(i,"for","masterkey"),m(i,"class","svelte-aspomc"),m(v,"id","masterkey"),m(v,"type","password"),m(v,"class","svelte-aspomc"),m(b,"id","cb-save-creds"),m(b,"type","checkbox"),m(b,"class","svelte-aspomc"),m(w,"for","cb-save-creds"),m(w,"class","svelte-aspomc"),T.disabled=M=!t[1]||!t[2],m(T,"class","svelte-aspomc")},m(r,a){c(r,e,a),c(r,n,a),c(r,o,a),y(o,t[1]),c(r,s,a),c(r,i,a),c(r,h,a),c(r,v,a),y(v,t[2]),c(r,g,a),c(r,b,a),b.checked=t[3],c(r,$,a),c(r,w,a),c(r,x,a),c(r,T,a),u(T,k),_||(C=[p(o,"input",t[10]),p(v,"input",t[11]),p(b,"change",t[12]),p(T,"click",t[13])],_=!0)},p(t,e){2&e&&o.value!==t[1]&&y(o,t[1]),4&e&&v.value!==t[2]&&y(v,t[2]),8&e&&(b.checked=t[3]),6&e&&M!==(M=!t[1]||!t[2])&&(T.disabled=M)},d(t){t&&a(e),t&&a(n),t&&a(o),t&&a(s),t&&a(i),t&&a(h),t&&a(v),t&&a(g),t&&a(b),t&&a($),t&&a(w),t&&a(x),t&&a(T),_=!1,r(C)}}}function it(t){let e,n,o,s,i,h,v,g,b;return{c(){e=l("label"),e.textContent="Username",n=f(),o=l("input"),s=f(),i=l("button"),h=d("REGISTER"),m(e,"for","username"),m(e,"class","svelte-aspomc"),m(o,"id","username"),m(o,"autocomplete","off"),m(o,"class","svelte-aspomc"),i.disabled=v=!t[1],m(i,"class","svelte-aspomc")},m(r,a){c(r,e,a),c(r,n,a),c(r,o,a),y(o,t[1]),c(r,s,a),c(r,i,a),u(i,h),g||(b=[p(o,"input",t[8]),p(i,"click",t[9])],g=!0)},p(t,e){2&e&&o.value!==t[1]&&y(o,t[1]),2&e&&v!==(v=!t[1])&&(i.disabled=v)},d(t){t&&a(e),t&&a(n),t&&a(o),t&&a(s),t&&a(i),g=!1,r(b)}}}function ut(e){let n,o,s,i,d,h,y,g,b,$,w;function x(t,e){return 0===t[0]?it:st}let T=x(e),k=T(e);return{c(){n=l("main"),o=l("div"),s=l("div"),i=l("div"),d=l("span"),d.textContent="REGISTER",h=f(),y=l("span"),y.textContent="LOGIN",g=f(),b=l("div"),k.c(),m(d,"class","svelte-aspomc"),v(d,"active",0===e[0]),m(y,"class","svelte-aspomc"),v(y,"active",1===e[0]),m(i,"class","head svelte-aspomc"),m(b,"class","body svelte-aspomc"),m(s,"class","container svelte-aspomc"),m(o,"class","wrapper svelte-aspomc")},m(t,r){c(t,n,r),u(n,o),u(o,s),u(s,i),u(i,d),u(i,h),u(i,y),u(s,g),u(s,b),k.m(b,null),$||(w=[p(d,"click",e[6]),p(y,"click",e[7])],$=!0)},p(t,[e]){1&e&&v(d,"active",0===t[0]),1&e&&v(y,"active",1===t[0]),T===(T=x(t))&&k?k.p(t,e):(k.d(1),k=T(t),k&&(k.c(),k.m(b,null)))},i:t,o:t,d(t){t&&a(n),k.d(),$=!1,r(w)}}}function ct(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{c(r.next(t))}catch(t){s(t)}}function u(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,u)}c((r=r.apply(t,e||[])).next())}))};let o=0,s="",i="",u=!1;function c(){return r(this,void 0,void 0,(function*(){const t=yield rt.exchangeAPIToken(s,i);W.set(t.token),u&&et.set("apikey",t.token)}))}function a(){return r(this,void 0,void 0,(function*(){const t=yield rt.createAccount(s);n(2,i=t.masterkey),z.set(t.masterkey),yield c()}))}return[o,s,i,u,c,a,()=>n(0,o=0),()=>n(0,o=1),function(){s=this.value,n(1,s)},()=>a(),function(){s=this.value,n(1,s)},function(){i=this.value,n(2,i)},function(){u=this.checked,n(3,u)},()=>c()]}ot&&W.set(ot);class at extends U{constructor(t){super(),G(this,t,ct,ut,s,{})}}const lt={golang:"#375eab",go:"#375eab",python3:"#3572A5",python:"#3572A5",py:"#3572A5",rust:"#dea584","openjdk-11":"#b07219",java:"#b07219",node:"#f1e05a",javascript:"#f1e05a",js:"#f1e05a",deno:"#2b7489",typescript:"#2b7489",ts:"#2b7489",elixir:"#6e4a7e",ash:"#89e051",bash:"#89e051",sh:"#89e051",brainfuck:"#2F2530",cpp:"#f34b7d","c++":"#f34b7d",c:"#555555",mono:"#178600","c#":"#178600",csharp:"#178600","dotnet-script":"#178600",csx:"#178600",php:"#4F5D95",ruby:"#701516",haskell:"#29b544",dart:"#00B4AB",pascal:"#b0ce4e",fpc:"#b0ce4e"};function dt(t){var e;return null!==(e=lt[t.toLowerCase()])&&void 0!==e?e:"#ffffff"}var ft=B((function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(r){var o,s,i,u=arguments,c=(o=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,s=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,i=/[^-+\dA-Z]/g,function(t,e,n,r){if(1!==u.length||"string"!==p(t)||/\d/.test(t)||(e=t,t=void 0),(t=t||0===t?t:new Date)instanceof Date||(t=new Date(t)),isNaN(t))throw TypeError("Invalid date");var m=(e=String(c.masks[e]||e||c.masks.default)).slice(0,4);"UTC:"!==m&&"GMT:"!==m||(e=e.slice(4),n=!0,"GMT:"===m&&(r=!0));var h=function(){return n?"getUTC":"get"},y=function(){return t[h()+"Date"]()},v=function(){return t[h()+"Day"]()},g=function(){return t[h()+"Month"]()},b=function(){return t[h()+"FullYear"]()},$=function(){return t[h()+"Hours"]()},w=function(){return t[h()+"Minutes"]()},x=function(){return t[h()+"Seconds"]()},T=function(){return t[h()+"Milliseconds"]()},k=function(){return n?0:t.getTimezoneOffset()},M=function(){return d(t)},_={d:function(){return y()},dd:function(){return a(y())},ddd:function(){return c.i18n.dayNames[v()]},DDD:function(){return l({y:b(),m:g(),d:y(),_:h(),dayName:c.i18n.dayNames[v()],short:!0})},dddd:function(){return c.i18n.dayNames[v()+7]},DDDD:function(){return l({y:b(),m:g(),d:y(),_:h(),dayName:c.i18n.dayNames[v()+7]})},m:function(){return g()+1},mm:function(){return a(g()+1)},mmm:function(){return c.i18n.monthNames[g()]},mmmm:function(){return c.i18n.monthNames[g()+12]},yy:function(){return String(b()).slice(2)},yyyy:function(){return a(b(),4)},h:function(){return $()%12||12},hh:function(){return a($()%12||12)},H:function(){return $()},HH:function(){return a($())},M:function(){return w()},MM:function(){return a(w())},s:function(){return x()},ss:function(){return a(x())},l:function(){return a(T(),3)},L:function(){return a(Math.floor(T()/10))},t:function(){return $()<12?c.i18n.timeNames[0]:c.i18n.timeNames[1]},tt:function(){return $()<12?c.i18n.timeNames[2]:c.i18n.timeNames[3]},T:function(){return $()<12?c.i18n.timeNames[4]:c.i18n.timeNames[5]},TT:function(){return $()<12?c.i18n.timeNames[6]:c.i18n.timeNames[7]},Z:function(){return r?"GMT":n?"UTC":(String(t).match(s)||[""]).pop().replace(i,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(k()>0?"-":"+")+a(100*Math.floor(Math.abs(k())/60)+Math.abs(k())%60,4)},p:function(){return(k()>0?"-":"+")+a(Math.floor(Math.abs(k())/60),2)+":"+a(Math.floor(Math.abs(k())%60),2)},S:function(){return["th","st","nd","rd"][y()%10>3?0:(y()%100-y()%10!=10)*y()%10]},W:function(){return M()},WW:function(){return a(M())},N:function(){return f(t)}};return e.replace(o,(function(t){return t in _?_[t]():t.slice(1,t.length-1)}))});c.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},c.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var a=function(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t},l=function(t){var e=t.y,n=t.m,r=t.d,o=t._,s=t.dayName,i=t.short,u=void 0!==i&&i,c=new Date,a=new Date;a.setDate(a[o+"Date"]()-1);var l=new Date;l.setDate(l[o+"Date"]()+1);return c[o+"FullYear"]()===e&&c[o+"Month"]()===n&&c[o+"Date"]()===r?u?"Tdy":"Today":a[o+"FullYear"]()===e&&a[o+"Month"]()===n&&a[o+"Date"]()===r?u?"Ysd":"Yesterday":l[o+"FullYear"]()===e&&l[o+"Month"]()===n&&l[o+"Date"]()===r?u?"Tmw":"Tomorrow":s},d=function(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var n=new Date(e.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=e.getTimezoneOffset()-n.getTimezoneOffset();e.setHours(e.getHours()-r);var o=(e-n)/6048e5;return 1+Math.floor(o)},f=function(t){var e=t.getDay();return 0===e&&(e=7),e},p=function(t){return null===t?"null":void 0===t?"undefined":"object"!==n(t)?n(t):Array.isArray(t)?"array":{}.toString.call(t).slice(8,-1).toLowerCase()};"object"===n(e)?t.exports=c:r.dateFormat=c}(void 0)}));function pt(e){let n,o,s,i,y,v,g,b,$,w,x,T,k,M,_,C,D,E,S,A=e[0].ident+"",P=e[0].language+"",N=ft(e[0].timestamp)+"",O=e[0].id+"";return{c(){n=l("main"),o=l("div"),s=l("button"),s.textContent="🗑",i=f(),y=l("h3"),v=d(A),g=f(),b=l("p"),$=l("span"),x=d(P),T=f(),k=l("p"),M=d(N),_=f(),C=l("p"),D=d(O),m(s,"class","btn-delete svelte-4pp6my"),m(y,"class","svelte-4pp6my"),m($,"style",w=`background-color: ${dt(e[0].language)}`),m($,"class","svelte-4pp6my"),m(b,"class","language svelte-4pp6my"),m(k,"class","smol svelte-4pp6my"),m(C,"class","smol svelte-4pp6my"),m(o,"class","container svelte-4pp6my")},m(t,r){c(t,n,r),u(n,o),u(o,s),u(o,i),u(o,y),u(y,v),u(o,g),u(o,b),u(b,$),u(b,x),u(o,T),u(o,k),u(k,M),u(o,_),u(o,C),u(C,D),E||(S=[p(s,"click",e[1]),p(o,"click",e[2])],E=!0)},p(t,[e]){1&e&&A!==(A=t[0].ident+"")&&h(v,A),1&e&&w!==(w=`background-color: ${dt(t[0].language)}`)&&m($,"style",w),1&e&&P!==(P=t[0].language+"")&&h(x,P),1&e&&N!==(N=ft(t[0].timestamp)+"")&&h(M,N),1&e&&O!==(O=t[0].id+"")&&h(D,O)},i:t,o:t,d(t){t&&a(n),E=!1,r(S)}}}function mt(t,e,n){let{snippet:r}=e;const o=$();return t.$$set=t=>{"snippet"in t&&n(0,r=t.snippet)},[r,function(t){t.stopPropagation(),o("delete")},function(){o("click")}]}class ht extends U{constructor(t){super(),G(this,t,mt,pt,s,{snippet:0})}}function yt(t){const e=document.createElement("input");e.style.position="absolute",e.style.height="0",e.style.opacity="0",document.body.appendChild(e),e.value=t,e.select(),e.setSelectionRange(0,t.length);const n=document.execCommand("copy");return document.body.removeChild(e),n}function vt(e){let n,o,s,i,d,h,y,v,g,b,$,w,x,T,k;return{c(){n=l("main"),o=l("div"),s=l("div"),i=l("h3"),i.textContent="API Key",d=f(),h=l("button"),h.textContent="🚪",y=f(),v=l("p"),v.innerHTML="This key is used to link newly created snippets to your account and also\n      to list and delete created snippets.<br/>\n      You need to input this key in the ranna app settings to link created snippets\n      to this account.",g=f(),b=l("div"),$=l("input"),w=f(),x=l("button"),x.textContent="📋",m(i,"class","svelte-1rvlkae"),m(h,"title","Logout"),m(s,"class","header svelte-1rvlkae"),m($,"type","password"),$.readOnly=!0,$.value=e[0],m($,"class","svelte-1rvlkae"),m(x,"title","Copy to clipboard"),m(b,"class","keybox svelte-1rvlkae"),m(o,"class","apikey svelte-1rvlkae")},m(t,r){c(t,n,r),u(n,o),u(o,s),u(s,i),u(s,d),u(s,h),u(o,y),u(o,v),u(o,g),u(o,b),u(b,$),u(b,w),u(b,x),T||(k=[p(h,"click",e[1]),p(x,"click",e[2])],T=!0)},p(t,[e]){1&e&&$.value!==t[0]&&($.value=t[0])},i:t,o:t,d(t){t&&a(n),T=!1,r(k)}}}function gt(t,e,n){let r;i(t,W,(t=>n(0,r=t)));return[r,()=>rt.logout(),()=>yt(r)]}class bt extends U{constructor(t){super(),G(this,t,gt,vt,s,{})}}function $t(t){let e,n,o,s,i,d,h,y,v,g,b,$,w,x;return{c(){e=l("div"),n=l("div"),o=l("h3"),o.textContent="Master Key",s=f(),i=l("button"),i.textContent="❌",d=f(),h=l("p"),h.innerHTML="You will need this master key to login later. Please store it somewhere\n        save!<br/> \n        <strong>This token will not be shown again later!</strong>",y=f(),v=l("div"),g=l("input"),b=f(),$=l("button"),$.textContent="📋",m(o,"class","svelte-1n0nyfr"),m(i,"title","Hide"),m(n,"class","header svelte-1n0nyfr"),m(g,"type","password"),g.readOnly=!0,g.value=t[0],m(g,"class","svelte-1n0nyfr"),m($,"title","Copy to clipboard"),m(v,"class","keybox svelte-1n0nyfr"),m(e,"class","masterkey svelte-1n0nyfr")},m(r,a){c(r,e,a),u(e,n),u(n,o),u(n,s),u(n,i),u(e,d),u(e,h),u(e,y),u(e,v),u(v,g),u(v,b),u(v,$),w||(x=[p(i,"click",t[1]),p($,"click",t[2])],w=!0)},p(t,e){1&e&&g.value!==t[0]&&(g.value=t[0])},d(t){t&&a(e),w=!1,r(x)}}}function wt(e){let n,r=e[0]&&$t(e);return{c(){n=l("main"),r&&r.c()},m(t,e){c(t,n,e),r&&r.m(n,null)},p(t,[e]){t[0]?r?r.p(t,e):(r=$t(t),r.c(),r.m(n,null)):r&&(r.d(1),r=null)},i:t,o:t,d(t){t&&a(n),r&&r.d()}}}function xt(t,e,n){let r;i(t,z,(t=>n(0,r=t)));return[r,()=>z.set(""),()=>yt(r)]}class Tt extends U{constructor(t){super(),G(this,t,xt,wt,s,{})}}function kt(t,e,n){const r=t.slice();return r[8]=e[n],r}function Mt(t){let e,n,r=t[0],o=[];for(let e=0;e<r.length;e+=1)o[e]=_t(kt(t,r,e));const s=t=>I(o[t],1,1,(()=>{o[t]=null}));return{c(){e=l("div");for(let t=0;t<o.length;t+=1)o[t].c();m(e,"class","snippets-container svelte-itoa60")},m(t,r){c(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);n=!0},p(t,n){if(3&n){let i;for(r=t[0],i=0;i<r.length;i+=1){const s=kt(t,r,i);o[i]?(o[i].p(s,n),H(o[i],1)):(o[i]=_t(s),o[i].c(),H(o[i],1),o[i].m(e,null))}for(O(),i=r.length;i<o.length;i+=1)s(i);j()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)H(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)I(o[t]);n=!1},d(t){t&&a(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t)}}}function _t(t){let e,n;return e=new ht({props:{snippet:t[8]}}),e.$on("delete",(function(){return t[2](t[8])})),e.$on("click",(function(){return t[3](t[8])})),{c(){q(e.$$.fragment)},m(t,r){F(e,t,r),n=!0},p(n,r){t=n;const o={};1&r&&(o.snippet=t[8]),e.$set(o)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Ct(t){let e,n,r,o,s,i,d;r=new Tt({}),s=new bt({});let p=t[0]&&Mt(t);return{c(){e=l("main"),n=l("div"),q(r.$$.fragment),o=f(),q(s.$$.fragment),i=f(),p&&p.c(),m(n,"class","content-wrapper")},m(t,a){c(t,e,a),u(e,n),F(r,n,null),u(n,o),F(s,n,null),u(n,i),p&&p.m(n,null),d=!0},p(t,[e]){t[0]?p?(p.p(t,e),1&e&&H(p,1)):(p=Mt(t),p.c(),H(p,1),p.m(n,null)):p&&(O(),I(p,1,1,(()=>{p=null})),j())},i(t){d||(H(r.$$.fragment,t),H(s.$$.fragment,t),H(p),d=!0)},o(t){I(r.$$.fragment,t),I(s.$$.fragment,t),I(p),d=!1},d(t){t&&a(e),R(r),R(s),p&&p.d()}}}function Dt(t,e,n){let r;i(t,W,(t=>n(5,r=t)));var o=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{c(r.next(t))}catch(t){s(t)}}function u(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,u)}c((r=r.apply(t,e||[])).next())}))};let s=null;function u(){var t;return o(this,void 0,void 0,(function*(){try{rt.clientOptions.auth=`bearer ${r}`,n(0,s=yield rt.list())}catch(e){e instanceof tt.APIError&&(null!==(t=e.code)&&void 0!==t?t:401===e.status)&&rt.logout()}}))}function c(t){return o(this,void 0,void 0,(function*(){yield rt.delete(t.ident),u()}))}u();return[s,c,t=>c(t),t=>{return e=t,void window.open(`https://app.ranna.zekro.de?s=${e.ident}`);var e}]}class Et extends U{constructor(t){super(),G(this,t,Dt,Ct,s,{})}}function St(t){let e,n;return e=new Et({}),{c(){q(e.$$.fragment)},m(t,r){F(e,t,r),n=!0},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function At(t){let e,n;return e=new at({}),{c(){q(e.$$.fragment)},m(t,r){F(e,t,r),n=!0},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Pt(t){let e,n,r,o;const s=[At,St],i=[];function u(t,e){return t[0]?1:0}return n=u(t),r=i[n]=s[n](t),{c(){e=l("main"),r.c()},m(t,r){c(t,e,r),i[n].m(e,null),o=!0},p(t,[o]){let c=n;n=u(t),n!==c&&(O(),I(i[c],1,1,(()=>{i[c]=null})),j(),r=i[n],r||(r=i[n]=s[n](t),r.c()),H(r,1),r.m(e,null))},i(t){o||(H(r),o=!0)},o(t){I(r),o=!1},d(t){t&&a(e),i[n].d()}}}function Nt(t,e,n){let r;return i(t,W,(t=>n(0,r=t))),[r]}return new class extends U{constructor(t){super(),G(this,t,Nt,Pt,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map