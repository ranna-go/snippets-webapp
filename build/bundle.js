var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function u(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function p(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e){t.value=null==e?"":e}function g(t,e,n){t.classList[n?"add":"remove"](e)}let v;function b(t){v=t}function $(){const t=function(){if(!v)throw new Error("Function called outside component initialization");return v}();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach((e=>{e.call(t,o)}))}}}const w=[],T=[],x=[],k=[],M=Promise.resolve();let _=!1;function C(t){x.push(t)}let D=!1;const E=new Set;function S(){if(!D){D=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];b(e),P(e.$$)}for(b(null),w.length=0;T.length;)T.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];E.has(e)||(E.add(e),e())}x.length=0}while(w.length);for(;k.length;)k.pop()();_=!1,D=!1,E.clear()}}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const A=new Set;let N;function O(){N={r:0,c:[],p:N}}function H(){N.r||r(N.c),N=N.p}function I(t,e){t&&t.i&&(A.delete(t),t.i(e))}function j(t,e,n,r){if(t&&t.o){if(A.has(t))return;A.add(t),N.c.push((()=>{A.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function q(t){t&&t.c()}function L(t,n,s,i){const{fragment:u,on_mount:c,on_destroy:a,after_update:l}=t.$$;u&&u.m(n,s),i||C((()=>{const n=c.map(e).filter(o);a?a.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(C)}function R(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(w.push(t),_||(_=!0,M.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(e,o,s,i,u,c,l=[-1]){const d=v;b(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:o.context||[]),callbacks:n(),dirty:l,skip_bound:!1};let p=!1;if(f.ctx=s?s(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&u(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),p&&F(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(a)}else f.fragment&&f.fragment.c();o.intro&&I(e.$$.fragment),L(e,o.target,o.anchor,o.customElement),S()}b(d)}class U{$destroy(){R(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y=[];function J(e,n=t){let r;const o=[];function i(t){if(s(e,t)&&(e=t,r)){const t=!Y.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Y.push(n,e)}if(t){for(let t=0;t<Y.length;t+=2)Y[t][0](Y[t+1]);Y.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(s,u=t){const c=[s,u];return o.push(c),1===o.length&&(r=n(i)||t),s(e),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const z=J(""),W=J("");var Z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function K(t){var e={exports:{}};return t(e,e.exports),e.exports}var B=K((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.ResponseError=e.APIError=void 0;class n extends Error{constructor(t){super(t.error),this._code=t.code,this._status=t.status,this._error=t.error,this._context=t.context}get code(){return this._code}get status(){return this._status}get error(){return this._error}get context(){return this._context}}e.APIError=n;class r extends Error{constructor(t){super(`request failed: ${t.status}`),this._response=t}get response(){return this._response}}e.ResponseError=r})),Q=K((function(t,e){var n=Z&&Z.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{c(r.next(t))}catch(t){s(t)}}function u(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,u)}c((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.RequestClient=void 0;e.RequestClient=class{constructor(t,e){this.endpoint=t,this.options=e}request(t,e,r){return n(this,void 0,void 0,(function*(){const n=new Headers;n.set("Content-Type","application/json"),n.set("Accept","application/json"),this.options.auth&&n.set("Authorization",this.options.auth),this.options.userAgent&&n.set("User-Agent",this.options.userAgent);const o=yield window.fetch(`${this.endpoint}/${this.options.version}/${e}`,{method:t,headers:n,body:r?JSON.stringify(r):null,credentials:this.options.auth?"include":"omit"});if(204===o.status)return{};if(!o.ok){let t;try{t=yield o.json()}catch(t){throw new B.ResponseError(o)}throw new B.APIError(t)}return o.json()}))}get clientOptions(){return this.options}}})),V=K((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.Client=void 0;const n={version:"v1",userAgent:"ranna-ts",auth:null};class r extends Q.RequestClient{constructor(t,e=n){super(t,e)}spec(){return this.request("GET","spec")}exec(t,e=!1){return this.request("POST",`exec?bypass_cache=${e}`,t)}info(){return this.request("GET","info")}}e.Client=r})),X=K((function(t,e){var n=Z&&Z.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{c(r.next(t))}catch(t){s(t)}}function u(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,u)}c((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.SnippetsClient=void 0;const r={version:"v1",userAgent:"ranna-ts",auth:null};class o extends Q.RequestClient{constructor(t,e=r){super(t,e)}createAccount(t){return this.request("PUT",`users/${t}`)}exchangeAPIToken(t,e,r=!1){return n(this,void 0,void 0,(function*(){this.clientOptions.auth="bearer "+e;let n=null;try{return n=yield this.request("POST",`users/${t}/apitoken`),n}catch(t){throw t}finally{this.clientOptions.auth=r&&n?"bearer "+n.token:null}}))}deleteAccount(t,e){return n(this,void 0,void 0,(function*(){this.clientOptions.auth="bearer "+e;let n=null;try{return n=yield this.request("DELETE",`users/${t}`),n}catch(t){throw t}finally{this.clientOptions.auth=null}}))}list(){return this.request("GET","snippets")}get(t){return this.request("GET",`snippets/${t}`)}create(t){return this.request("POST","snippets",t)}delete(t){return this.request("DELETE",`snippets/${t}`)}}e.SnippetsClient=o})),tt=K((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.SnippetsClient=e.ResponseError=e.APIError=e.Client=void 0,Object.defineProperty(e,"Client",{enumerable:!0,get:function(){return V.Client}}),Object.defineProperty(e,"APIError",{enumerable:!0,get:function(){return B.APIError}}),Object.defineProperty(e,"ResponseError",{enumerable:!0,get:function(){return B.ResponseError}}),Object.defineProperty(e,"SnippetsClient",{enumerable:!0,get:function(){return X.SnippetsClient}})}));class et{static set(t,e){window.localStorage.setItem(t,JSON.stringify(e))}static get(t,e){const n=window.localStorage.getItem(t);return n?JSON.parse(n):e}static del(t){window.localStorage.removeItem(t)}}class nt extends tt.SnippetsClient{constructor(t,e){const n=et.get("apikey");n&&W.set(n),super(t,e)}async login(t,e,n=!1){const r=await rt.exchangeAPIToken(t,e);W.set(r.token),n&&et.set("apikey",r.token)}logout(){W.set(""),et.del("apikey")}}const rt=new nt("https://snippets.ranna.zekro.de"),ot=J({show:!1});let st;function it(t,e,n=5e3){ot.set({show:!0,message:t,type:e}),st&&clearTimeout(st),st=setTimeout((()=>ot.set({show:!1,message:t,type:e})),n)}function ut(t){let e,n,o,s,i,h,g,v,b,$,w,T,x,k,M,_,C;return{c(){e=l("label"),e.textContent="Username",n=f(),o=l("input"),s=f(),i=l("label"),i.textContent="Master Key",h=f(),g=l("input"),v=f(),b=l("input"),$=f(),w=l("label"),w.textContent="Store Credentials",T=f(),x=l("button"),k=d("LOGIN"),m(e,"for","username"),m(e,"class","svelte-aspomc"),m(o,"id","username"),m(o,"autocomplete","off"),m(o,"class","svelte-aspomc"),m(i,"for","masterkey"),m(i,"class","svelte-aspomc"),m(g,"id","masterkey"),m(g,"type","password"),m(g,"class","svelte-aspomc"),m(b,"id","cb-save-creds"),m(b,"type","checkbox"),m(b,"class","svelte-aspomc"),m(w,"for","cb-save-creds"),m(w,"class","svelte-aspomc"),x.disabled=M=!t[1]||!t[2],m(x,"class","svelte-aspomc")},m(r,a){c(r,e,a),c(r,n,a),c(r,o,a),y(o,t[1]),c(r,s,a),c(r,i,a),c(r,h,a),c(r,g,a),y(g,t[2]),c(r,v,a),c(r,b,a),b.checked=t[3],c(r,$,a),c(r,w,a),c(r,T,a),c(r,x,a),u(x,k),_||(C=[p(o,"input",t[10]),p(g,"input",t[11]),p(b,"change",t[12]),p(x,"click",t[13])],_=!0)},p(t,e){2&e&&o.value!==t[1]&&y(o,t[1]),4&e&&g.value!==t[2]&&y(g,t[2]),8&e&&(b.checked=t[3]),6&e&&M!==(M=!t[1]||!t[2])&&(x.disabled=M)},d(t){t&&a(e),t&&a(n),t&&a(o),t&&a(s),t&&a(i),t&&a(h),t&&a(g),t&&a(v),t&&a(b),t&&a($),t&&a(w),t&&a(T),t&&a(x),_=!1,r(C)}}}function ct(t){let e,n,o,s,i,h,g,v,b;return{c(){e=l("label"),e.textContent="Username",n=f(),o=l("input"),s=f(),i=l("button"),h=d("REGISTER"),m(e,"for","username"),m(e,"class","svelte-aspomc"),m(o,"id","username"),m(o,"autocomplete","off"),m(o,"class","svelte-aspomc"),i.disabled=g=!t[1],m(i,"class","svelte-aspomc")},m(r,a){c(r,e,a),c(r,n,a),c(r,o,a),y(o,t[1]),c(r,s,a),c(r,i,a),u(i,h),v||(b=[p(o,"input",t[8]),p(i,"click",t[9])],v=!0)},p(t,e){2&e&&o.value!==t[1]&&y(o,t[1]),2&e&&g!==(g=!t[1])&&(i.disabled=g)},d(t){t&&a(e),t&&a(n),t&&a(o),t&&a(s),t&&a(i),v=!1,r(b)}}}function at(e){let n,o,s,i,d,h,y,v,b,$,w;function T(t,e){return 0===t[0]?ct:ut}let x=T(e),k=x(e);return{c(){n=l("main"),o=l("div"),s=l("div"),i=l("div"),d=l("span"),d.textContent="REGISTER",h=f(),y=l("span"),y.textContent="LOGIN",v=f(),b=l("div"),k.c(),m(d,"class","svelte-aspomc"),g(d,"active",0===e[0]),m(y,"class","svelte-aspomc"),g(y,"active",1===e[0]),m(i,"class","head svelte-aspomc"),m(b,"class","body svelte-aspomc"),m(s,"class","container svelte-aspomc"),m(o,"class","wrapper svelte-aspomc")},m(t,r){c(t,n,r),u(n,o),u(o,s),u(s,i),u(i,d),u(i,h),u(i,y),u(s,v),u(s,b),k.m(b,null),$||(w=[p(d,"click",e[6]),p(y,"click",e[7])],$=!0)},p(t,[e]){1&e&&g(d,"active",0===t[0]),1&e&&g(y,"active",1===t[0]),x===(x=T(t))&&k?k.p(t,e):(k.d(1),k=x(t),k&&(k.c(),k.m(b,null)))},i:t,o:t,d(t){t&&a(n),k.d(),$=!1,r(w)}}}function lt(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{c(r.next(t))}catch(t){s(t)}}function u(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,u)}c((r=r.apply(t,e||[])).next())}))};let o=0,s="",i="",u=!1;function c(){var t;return r(this,void 0,void 0,(function*(){try{yield rt.login(s,i,u)}catch(e){let n="Login failed.";e instanceof tt.APIError&&(null!==(t=e.code)&&void 0!==t?t:401===e.status)&&(n="Invalid username or master key."),it(n,"error")}}))}function a(){return r(this,void 0,void 0,(function*(){try{const t=yield rt.createAccount(s);n(2,i=t.masterkey),z.set(t.masterkey),yield c()}catch(t){it("Invalid username or username already exists.","error")}}))}return[o,s,i,u,c,a,()=>n(0,o=0),()=>n(0,o=1),function(){s=this.value,n(1,s)},()=>a(),function(){s=this.value,n(1,s)},function(){i=this.value,n(2,i)},function(){u=this.checked,n(3,u)},()=>c()]}class dt extends U{constructor(t){super(),G(this,t,lt,at,s,{})}}let ft={};function pt(t){var e,n;return null!==(n=null===(e=ft[t.toLowerCase()])||void 0===e?void 0:e.color)&&void 0!==n?n:"#ffffff"}(async()=>{const t=await window.fetch("https://languages.ranna.zekro.de/languages.minified.json");ft=await t.json()})();var mt=K((function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(r){var o,s,i,u=arguments,c=(o=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,s=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,i=/[^-+\dA-Z]/g,function(t,e,n,r){if(1!==u.length||"string"!==p(t)||/\d/.test(t)||(e=t,t=void 0),(t=t||0===t?t:new Date)instanceof Date||(t=new Date(t)),isNaN(t))throw TypeError("Invalid date");var m=(e=String(c.masks[e]||e||c.masks.default)).slice(0,4);"UTC:"!==m&&"GMT:"!==m||(e=e.slice(4),n=!0,"GMT:"===m&&(r=!0));var h=function(){return n?"getUTC":"get"},y=function(){return t[h()+"Date"]()},g=function(){return t[h()+"Day"]()},v=function(){return t[h()+"Month"]()},b=function(){return t[h()+"FullYear"]()},$=function(){return t[h()+"Hours"]()},w=function(){return t[h()+"Minutes"]()},T=function(){return t[h()+"Seconds"]()},x=function(){return t[h()+"Milliseconds"]()},k=function(){return n?0:t.getTimezoneOffset()},M=function(){return d(t)},_={d:function(){return y()},dd:function(){return a(y())},ddd:function(){return c.i18n.dayNames[g()]},DDD:function(){return l({y:b(),m:v(),d:y(),_:h(),dayName:c.i18n.dayNames[g()],short:!0})},dddd:function(){return c.i18n.dayNames[g()+7]},DDDD:function(){return l({y:b(),m:v(),d:y(),_:h(),dayName:c.i18n.dayNames[g()+7]})},m:function(){return v()+1},mm:function(){return a(v()+1)},mmm:function(){return c.i18n.monthNames[v()]},mmmm:function(){return c.i18n.monthNames[v()+12]},yy:function(){return String(b()).slice(2)},yyyy:function(){return a(b(),4)},h:function(){return $()%12||12},hh:function(){return a($()%12||12)},H:function(){return $()},HH:function(){return a($())},M:function(){return w()},MM:function(){return a(w())},s:function(){return T()},ss:function(){return a(T())},l:function(){return a(x(),3)},L:function(){return a(Math.floor(x()/10))},t:function(){return $()<12?c.i18n.timeNames[0]:c.i18n.timeNames[1]},tt:function(){return $()<12?c.i18n.timeNames[2]:c.i18n.timeNames[3]},T:function(){return $()<12?c.i18n.timeNames[4]:c.i18n.timeNames[5]},TT:function(){return $()<12?c.i18n.timeNames[6]:c.i18n.timeNames[7]},Z:function(){return r?"GMT":n?"UTC":(String(t).match(s)||[""]).pop().replace(i,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(k()>0?"-":"+")+a(100*Math.floor(Math.abs(k())/60)+Math.abs(k())%60,4)},p:function(){return(k()>0?"-":"+")+a(Math.floor(Math.abs(k())/60),2)+":"+a(Math.floor(Math.abs(k())%60),2)},S:function(){return["th","st","nd","rd"][y()%10>3?0:(y()%100-y()%10!=10)*y()%10]},W:function(){return M()},WW:function(){return a(M())},N:function(){return f(t)}};return e.replace(o,(function(t){return t in _?_[t]():t.slice(1,t.length-1)}))});c.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},c.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var a=function(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t},l=function(t){var e=t.y,n=t.m,r=t.d,o=t._,s=t.dayName,i=t.short,u=void 0!==i&&i,c=new Date,a=new Date;a.setDate(a[o+"Date"]()-1);var l=new Date;l.setDate(l[o+"Date"]()+1);return c[o+"FullYear"]()===e&&c[o+"Month"]()===n&&c[o+"Date"]()===r?u?"Tdy":"Today":a[o+"FullYear"]()===e&&a[o+"Month"]()===n&&a[o+"Date"]()===r?u?"Ysd":"Yesterday":l[o+"FullYear"]()===e&&l[o+"Month"]()===n&&l[o+"Date"]()===r?u?"Tmw":"Tomorrow":s},d=function(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var n=new Date(e.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=e.getTimezoneOffset()-n.getTimezoneOffset();e.setHours(e.getHours()-r);var o=(e-n)/6048e5;return 1+Math.floor(o)},f=function(t){var e=t.getDay();return 0===e&&(e=7),e},p=function(t){return null===t?"null":void 0===t?"undefined":"object"!==n(t)?n(t):Array.isArray(t)?"array":{}.toString.call(t).slice(8,-1).toLowerCase()};"object"===n(e)?t.exports=c:r.dateFormat=c}(void 0)}));function ht(e){let n,o,s,i,y,g,v,b,$,w,T,x,k,M,_,C,D,E,S,P=e[0].ident+"",A=e[0].language+"",N=mt(e[0].timestamp)+"",O=e[0].id+"";return{c(){n=l("main"),o=l("div"),s=l("button"),s.textContent="🗑",i=f(),y=l("h3"),g=d(P),v=f(),b=l("p"),$=l("span"),T=d(A),x=f(),k=l("p"),M=d(N),_=f(),C=l("p"),D=d(O),m(s,"class","btn-delete svelte-4pp6my"),m(y,"class","svelte-4pp6my"),m($,"style",w=`background-color: ${pt(e[0].language)}`),m($,"class","svelte-4pp6my"),m(b,"class","language svelte-4pp6my"),m(k,"class","smol svelte-4pp6my"),m(C,"class","smol svelte-4pp6my"),m(o,"class","container svelte-4pp6my")},m(t,r){c(t,n,r),u(n,o),u(o,s),u(o,i),u(o,y),u(y,g),u(o,v),u(o,b),u(b,$),u(b,T),u(o,x),u(o,k),u(k,M),u(o,_),u(o,C),u(C,D),E||(S=[p(s,"click",e[1]),p(o,"click",e[2])],E=!0)},p(t,[e]){1&e&&P!==(P=t[0].ident+"")&&h(g,P),1&e&&w!==(w=`background-color: ${pt(t[0].language)}`)&&m($,"style",w),1&e&&A!==(A=t[0].language+"")&&h(T,A),1&e&&N!==(N=mt(t[0].timestamp)+"")&&h(M,N),1&e&&O!==(O=t[0].id+"")&&h(D,O)},i:t,o:t,d(t){t&&a(n),E=!1,r(S)}}}function yt(t,e,n){let{snippet:r}=e;const o=$();return t.$$set=t=>{"snippet"in t&&n(0,r=t.snippet)},[r,function(t){t.stopPropagation(),o("delete")},function(){o("click")}]}class gt extends U{constructor(t){super(),G(this,t,yt,ht,s,{snippet:0})}}function vt(t){const e=document.createElement("input");e.style.position="absolute",e.style.height="0",e.style.opacity="0",document.body.appendChild(e),e.value=t,e.select(),e.setSelectionRange(0,t.length);const n=document.execCommand("copy");return document.body.removeChild(e),n}function bt(e){let n,o,s,i,d,h,y,g,v,b,$,w,T,x,k;return{c(){n=l("main"),o=l("div"),s=l("div"),i=l("h3"),i.textContent="API Key",d=f(),h=l("button"),h.textContent="🚪",y=f(),g=l("p"),g.innerHTML="This key is used to link newly created snippets to your account and also\n      to list and delete created snippets.<br/>\n      You need to input this key in the ranna app settings to link created snippets\n      to this account.",v=f(),b=l("div"),$=l("input"),w=f(),T=l("button"),T.textContent="📋",m(i,"class","svelte-1rvlkae"),m(h,"title","Logout"),m(s,"class","header svelte-1rvlkae"),m($,"type","password"),$.readOnly=!0,$.value=e[0],m($,"class","svelte-1rvlkae"),m(T,"title","Copy to clipboard"),m(b,"class","keybox svelte-1rvlkae"),m(o,"class","apikey svelte-1rvlkae")},m(t,r){c(t,n,r),u(n,o),u(o,s),u(s,i),u(s,d),u(s,h),u(o,y),u(o,g),u(o,v),u(o,b),u(b,$),u(b,w),u(b,T),x||(k=[p(h,"click",e[1]),p(T,"click",e[2])],x=!0)},p(t,[e]){1&e&&$.value!==t[0]&&($.value=t[0])},i:t,o:t,d(t){t&&a(n),x=!1,r(k)}}}function $t(t,e,n){let r;i(t,W,(t=>n(0,r=t)));return[r,()=>rt.logout(),()=>vt(r)]}class wt extends U{constructor(t){super(),G(this,t,$t,bt,s,{})}}function Tt(t){let e,n,o,s,i,d,h,y,g,v,b,$,w,T;return{c(){e=l("div"),n=l("div"),o=l("h3"),o.textContent="Master Key",s=f(),i=l("button"),i.textContent="❌",d=f(),h=l("p"),h.innerHTML="You will need this master key to login later. Please store it somewhere\n        save!<br/> \n        <strong>This token will not be shown again later!</strong>",y=f(),g=l("div"),v=l("input"),b=f(),$=l("button"),$.textContent="📋",m(o,"class","svelte-1n0nyfr"),m(i,"title","Hide"),m(n,"class","header svelte-1n0nyfr"),m(v,"type","password"),v.readOnly=!0,v.value=t[0],m(v,"class","svelte-1n0nyfr"),m($,"title","Copy to clipboard"),m(g,"class","keybox svelte-1n0nyfr"),m(e,"class","masterkey svelte-1n0nyfr")},m(r,a){c(r,e,a),u(e,n),u(n,o),u(n,s),u(n,i),u(e,d),u(e,h),u(e,y),u(e,g),u(g,v),u(g,b),u(g,$),w||(T=[p(i,"click",t[1]),p($,"click",t[2])],w=!0)},p(t,e){1&e&&v.value!==t[0]&&(v.value=t[0])},d(t){t&&a(e),w=!1,r(T)}}}function xt(e){let n,r=e[0]&&Tt(e);return{c(){n=l("main"),r&&r.c()},m(t,e){c(t,n,e),r&&r.m(n,null)},p(t,[e]){t[0]?r?r.p(t,e):(r=Tt(t),r.c(),r.m(n,null)):r&&(r.d(1),r=null)},i:t,o:t,d(t){t&&a(n),r&&r.d()}}}function kt(t,e,n){let r;i(t,z,(t=>n(0,r=t)));return[r,()=>z.set(""),()=>vt(r)]}class Mt extends U{constructor(t){super(),G(this,t,kt,xt,s,{})}}function _t(t,e,n){const r=t.slice();return r[8]=e[n],r}function Ct(t){let e,n,r=t[0],o=[];for(let e=0;e<r.length;e+=1)o[e]=Dt(_t(t,r,e));const s=t=>j(o[t],1,1,(()=>{o[t]=null}));return{c(){e=l("div");for(let t=0;t<o.length;t+=1)o[t].c();m(e,"class","snippets-container svelte-itoa60")},m(t,r){c(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);n=!0},p(t,n){if(3&n){let i;for(r=t[0],i=0;i<r.length;i+=1){const s=_t(t,r,i);o[i]?(o[i].p(s,n),I(o[i],1)):(o[i]=Dt(s),o[i].c(),I(o[i],1),o[i].m(e,null))}for(O(),i=r.length;i<o.length;i+=1)s(i);H()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)I(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)j(o[t]);n=!1},d(t){t&&a(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t)}}}function Dt(t){let e,n;return e=new gt({props:{snippet:t[8]}}),e.$on("delete",(function(){return t[2](t[8])})),e.$on("click",(function(){return t[3](t[8])})),{c(){q(e.$$.fragment)},m(t,r){L(e,t,r),n=!0},p(n,r){t=n;const o={};1&r&&(o.snippet=t[8]),e.$set(o)},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function Et(t){let e,n,r,o,s,i,d;r=new Mt({}),s=new wt({});let p=t[0]&&Ct(t);return{c(){e=l("main"),n=l("div"),q(r.$$.fragment),o=f(),q(s.$$.fragment),i=f(),p&&p.c(),m(n,"class","content-wrapper")},m(t,a){c(t,e,a),u(e,n),L(r,n,null),u(n,o),L(s,n,null),u(n,i),p&&p.m(n,null),d=!0},p(t,[e]){t[0]?p?(p.p(t,e),1&e&&I(p,1)):(p=Ct(t),p.c(),I(p,1),p.m(n,null)):p&&(O(),j(p,1,1,(()=>{p=null})),H())},i(t){d||(I(r.$$.fragment,t),I(s.$$.fragment,t),I(p),d=!0)},o(t){j(r.$$.fragment,t),j(s.$$.fragment,t),j(p),d=!1},d(t){t&&a(e),R(r),R(s),p&&p.d()}}}function St(t,e,n){let r;i(t,W,(t=>n(5,r=t)));var o=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{c(r.next(t))}catch(t){s(t)}}function u(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,u)}c((r=r.apply(t,e||[])).next())}))};let s=null;function u(t){return o(this,void 0,void 0,(function*(){yield rt.delete(t.ident),n(0,s=s.filter((e=>e!==t))),it(`Snippet '${t.ident}' was deleted.`,"success",3500)}))}!function(){var t;o(this,void 0,void 0,(function*(){try{rt.clientOptions.auth=`bearer ${r}`,n(0,s=yield rt.list())}catch(e){e instanceof tt.APIError&&(null!==(t=e.code)&&void 0!==t?t:401===e.status)&&rt.logout()}}))}();return[s,u,t=>u(t),t=>{return e=t,void window.open(`https://app.ranna.zekro.de?s=${e.ident}`);var e}]}class Pt extends U{constructor(t){super(),G(this,t,St,Et,s,{})}}function At(e){let n,r,o,s,i,p,y,g,v,b,$=Nt(e[0]?.type)+"",w=e[0]?.message+"";return{c(){n=l("main"),r=l("div"),o=l("div"),s=l("span"),i=d($),p=f(),y=l("span"),g=d(w),m(s,"class","svelte-1gwegiu"),m(y,"class","svelte-1gwegiu"),m(o,"class",v="snackbar "+e[0]?.type+" svelte-1gwegiu"),m(r,"class",b="container "+(e[0].show?"show":"")+" svelte-1gwegiu")},m(t,e){c(t,n,e),u(n,r),u(r,o),u(o,s),u(s,i),u(o,p),u(o,y),u(y,g)},p(t,[e]){1&e&&$!==($=Nt(t[0]?.type)+"")&&h(i,$),1&e&&w!==(w=t[0]?.message+"")&&h(g,w),1&e&&v!==(v="snackbar "+t[0]?.type+" svelte-1gwegiu")&&m(o,"class",v),1&e&&b!==(b="container "+(t[0].show?"show":"")+" svelte-1gwegiu")&&m(r,"class",b)},i:t,o:t,d(t){t&&a(n)}}}function Nt(t){switch(t){case"info":return"ℹ";case"success":return"✔";case"error":return"❌";default:return""}}function Ot(t,e,n){let r;return i(t,ot,(t=>n(0,r=t))),[r]}class Ht extends U{constructor(t){super(),G(this,t,Ot,At,s,{})}}function It(t){let e,n;return e=new Pt({}),{c(){q(e.$$.fragment)},m(t,r){L(e,t,r),n=!0},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function jt(t){let e,n;return e=new dt({}),{c(){q(e.$$.fragment)},m(t,r){L(e,t,r),n=!0},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function qt(t){let e,n,r,o,s,i;n=new Ht({});const d=[jt,It],p=[];function m(t,e){return t[0]?1:0}return o=m(t),s=p[o]=d[o](t),{c(){e=l("main"),q(n.$$.fragment),r=f(),s.c()},m(t,s){c(t,e,s),L(n,e,null),u(e,r),p[o].m(e,null),i=!0},p(t,[n]){let r=o;o=m(t),o!==r&&(O(),j(p[r],1,1,(()=>{p[r]=null})),H(),s=p[o],s||(s=p[o]=d[o](t),s.c()),I(s,1),s.m(e,null))},i(t){i||(I(n.$$.fragment,t),I(s),i=!0)},o(t){j(n.$$.fragment,t),j(s),i=!1},d(t){t&&a(e),R(n),p[o].d()}}}function Lt(t,e,n){let r;return i(t,W,(t=>n(0,r=t))),[r]}return new class extends U{constructor(t){super(),G(this,t,Lt,qt,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
