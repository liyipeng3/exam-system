var TINGYUN=function(t,e,n){function r(t){return JSON.parse(t)}function i(t){return JSON.stringify(t)}function o(t){var e=!!t&&"length"in t&&t.length,n=typeof t;return"function"!==n&&("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function a(t,e,n){var r,i=0;if(t)if(o(t))for(r=t.length;i<r&&e.call(t[i],t[i],i)!==!1;i++);else for(i in t)if((n||Object.prototype.hasOwnProperty.call(t,i))&&e.call(t[i],t[i],i)===!1)break;return t}function u(t){return function(e){return"Array"===t&&Array.isArray?Array.isArray(e):Object.prototype.toString.call(e)==="[object "+t+"]"}}function s(t){return new Function("return "+t)()}function c(t){switch(typeof t){case"object":if(!t)return null;if(t instanceof Array){var e=re.call(t);return a(e,function(t,n){e[n]=c(t)}),"["+e.join(",")+"]"}if(t instanceof Date)return t.getTime().toString();var n="";return a(t,function(t,e){te(t)||(n+=c(e)+":"+c(t)+",")}),n&&(n=n.substr(0,n.length-1)),"{"+n+"}";case"string":return ie+t.replace(oe,"\\$1").replace(ae,"\\n")+ie;case"number":return isNaN(t)?null:t;case"boolean":return t;case"function":return c(t.toString());case"undefined":default:return'"undefined"'}}function f(t){return t&&Vt(t)?Kt(t):t}function l(t,e,n,r){return t.addEventListener(e,n,r)}function d(t,e,n){return t.removeEventListener(e,n)}function h(t,e,n){return t.attachEvent("on"+e,n)}function v(t,e,n){return t.detachEvent("on"+e,n)}function p(t,e,n,r){var i=function(){return ce(t,e,i),n.apply(this,arguments)};return se(t,e,i,r)}function g(t,e){return Function.prototype.apply.apply(t,e)}function m(t,e){return function(){t.apply(e,arguments)}}function y(t){return fe?fe(t):t}function b(t){var e=arguments.length;if(e<2||!t)return t;var n=re.call(arguments,1);return a(n,function(e){a(e,function(e,n){t[n]=e})}),t}function S(t,e){for(var n=-1,r=0,i=null==t?0:t.length,o=[];++n<i;){var a=t[n];e(a,n,t)&&(o[r++]=a)}return o}function x(t,e){return t?e?t.replace(/\{(\w+.?\w+)\}/g,function(t,n){return e[n]||""}).replace(/\{(\d+)\}/g,function(t,n){return e[n]||""}):t:""}function _(t,e,n){var r;if(null==t)return-1;var i=Object(t),o=i.length>>>0;if(0===o)return-1;var a=+n||0;if(Math.abs(a)===1/0&&(a=0),a>=o)return-1;for(r=Math.max(a>=0?a:o-Math.abs(a),0);r<o;){if(r in i&&i[r]===e)return r;r++}return-1}function E(t,e){var n=null==t?0:t.length;if(!n)return-1;for(var r=n;r--;)if(t[r]===e)return r;return r}function w(t){return setTimeout(t,0)}function T(){}function k(){return+new Date}function C(t){return function(){if(null!==t){var e=t;t=null,e.apply(this,arguments)}}}function R(t){return t?Vt(t)?t.length:e.ArrayBuffer&&t instanceof ArrayBuffer?t.byteLength:e.Blob&&t instanceof Blob?t.size:t.length?t.length:0:0}function I(t){return de!==he&&/^https/i.test(t&&t.protocol||de)?"https:":he}function q(t,e,n,r){var i=null;return t&&e&&(i=I(r)+"//"+t+e,n&&(i+="?",a(n,function(t,e){var n=[y(e),"=",y(t),"&"];i+=n.join("")}),i+="__r="+k())),i}function N(){this.events={}}function O(t){return!(t in be)||be[t]}function A(t){var e=ge.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?e[3]:null}function L(t,e,n){var r=t+"="+e;if(n){var i=new Date;i.setTime(i.getTime()+1e3*n),r+=";expires="+i.toGMTString()}ge.cookie=r}function H(t,e){e=e||T;var n=new Image;se(n,Me,function(){"loaded"!=n.readyState&&4!=n.readyState||e(null)},!1),se(n,Oe,function(){e(null)},!1),se(n,Ne,function(){e(Ne)},!1),n.src=t}function M(t,e,n,r){te(n)&&(r=n);var i=new XDomainRequest;i.open(Je,t),i.onload=function(){r(null,i.responseText)},i.onerror=function(t){r(t)},i.send(Qt(e))}function j(t,e,n){var r=ge.createElement(t);try{for(var i in e)r[i]=e[i]}catch(o){var a="<"+t;for(var i in e)a+=" "+i+'="'+e[i]+'"';a+=">",n||(a+="</"+t+">"),r=ge.createElement(a)}return r}function B(t,e,n,r){te(n)&&(r=n);var i=j("div",{style:We}),o=j("iframe",{name:"ty_form",width:0,height:0,style:We}),a=j("form",{style:We,action:t,enctype:"application/x-www-form-urlencoded",method:"post",target:"ty_form"}),u=j("input",{name:"data",type:"hidden"},!0);u.value=Qt(e),a.appendChild(u),i.appendChild(o),i.appendChild(a),ge.body.appendChild(i),a.submit(),o.onreadystatechange=function(){o.readyState!==je&&4!==o.readyState||(r(null,o.innerHTML),ge.body.removeChild(i))}}function z(t,e,n,r){te(n)&&(r=n,n=null);var i=C(r),o=new me;o[Ye]=!0,o.overrideMimeType&&o.overrideMimeType("text/html"),o.onreadystatechange=function(){4==o.readyState&&200==o.status&&i(null,o.responseText)},o.onerror=i,e=Qt(e);try{o.open(Je,t,!0)}catch(a){return B(t,e,i)}for(var u in n)o.setRequestHeader(u,n[u]);o.send(e)}function D(t,e,n){if(t&&n&&te(n)){var r=t[e];if(!r||!r._wrapped){var i=n(r);return i&&(i._wrapped=!0),t[e]=i,i}}}function F(t){Ke&&t()}function P(t){return function(){Ke&&t.apply(this,arguments)}}function U(){Ke=!1}function X(){tn.on(Oe,C(function(){t();var e=k();F(function(){Qe.load=e}),on.loadEventEnd=e})),a([Oe,Ae,Le,He],function(t){se(e,t,function(e){F(function(){(Qe.e[t]||(Qe.e[t]=[])).push(k())}),tn.emit(t,e)})});var t=C(function(){var t=k();F(function(){Qe.end=t}),on.domContentLoadedEventStart=t,ge.querySelectorAll&&(Ze.resources=Ze.resources||[],a(ge.querySelectorAll("head>link,head>script"),function(t){var e;"LINK"==t.tagName?e=t.href:"SCRIPT"!=t.tagName||t.defer||t.async||(e=t.src),e&&Ze.resources.push(e)}))});se(ge,"DOMContentLoaded",t),se(ge,Me,function(e){ge.readyState===je&&t()});var n=C(function(){on.touch=k()});a(["scroll","click","keypress"],function(t){p(ge,t,n)});var r=e.requestAnimationFrame;!r||r.toString().indexOf("[native code]")<0||D(e,"requestAnimationFrame",function(t){return function(){if(!on.firstPaint){var n=k();F(function(){Qe.an.count++,Qe.an.t=n}),on.firstPaint=n,e.requestAnimationFrame=t}return t.apply(this,arguments)}})}function Y(t){W(t,en)}function G(t){W(t,nn)}function W(t,e){var n="ok";return t?void e.push(t):n=e.length?e.join("\n"):n}function J(){var t=this;t.xhrs={},t.errs=[],N.call(t)}function $(){var t=Re(ze);return t?t:Ie(ze,ve(),Fe)}function K(){var t=A(De);return t||(t=ve(),L(De,t)),t}function Q(t){function e(t,e,r){var i=r||"log",o=n[t]||(n[t]={});o[i]=o[i]||"",o[i]+=e}var n={},r=Y();if(e("Status",r,"ok"!==r),e("Debug",G()),a(fn,function(t,n){e("Timeline",n+": "+t.toString())}),!t&&ln)console.log("[TingYun Agent Diagnosis]\n"),a(n,function(t,e){var n=console[e];a(n,function(t,e){console[e](t)})});else{if(t!==Xe)return Qt(n);Ee.href=Ee.href+"#"+Qt(n)}}function V(t,e){this.flags=0,te(t.create)&&(this.create=t.create,this.flags|=dn),te(t.before)&&(this.before=t.before,this.flags|=hn),te(t.after)&&(this.after=t.after,this.flags|=vn),te(t.error)&&(this.error=t.error,this.flags|=pn),this.data=e}function Z(t,e){if(!mn){if(!ee(t)||!t)throw new TypeError("callbacks arguments must be an object");return mn=new V(t,e)}}function tt(t){var e=mn.data;if(0!==(mn.flags&dn)){var n=mn.create(mn.data);void 0!==n&&(e=n)}return function r(){0!==(mn.flags&hn)&&mn.before(this,e);var n=r;n._&&(n._=1);try{var i=t.apply(this,arguments)}catch(o){throw 0!==(mn.flags&pn)&&mn.error(e,o),o}return 0!==(mn.flags&vn)&&mn.after(this,e),i}}function et(t){return!mn||mn.flags<=0?t:tt(t)}function nt(){function t(t){return function(e){var n=re.call(arguments,0);te(e)&&(n[0]=et(e));var r=this;try{return t.apply(r,n)}catch(i){}return g(t,[r,n])}}D(e,"setTimeout",t),D(e,"setInterval",t)}function rt(){this.id=null,this.active=null,this._set=[]}function it(){nt();var t=new rt;return t.id=Z({create:function(){return t.active},before:function(e,n){n&&t.enter(n)},after:function(e,n){n&&t.exit(n)},error:function(e,n){if(e){try{var r="moduleId";n[r]=e[r]}catch(i){}t.exit(e)}}}),t}function ot(){return bn||(yn=it(),bn=!0),yn}function at(t){ln&&console.warn(t||"Event key required!")}function ut(t){t=t||{},this.key=t.key;var e=t.timeout||6e5;this.i=e?setTimeout(m(this.fail,this),e):null,this.status=1,this.remain=0,this.xhrs=[],this.s=k(),this.e=null,this.called=this.sent=!1}function st(t){t=t||{};var e=t.key;if(!e)return new at;if(_n[e])return new at("event "+e+" is executing");_n[e]=!0;var n=yn.createContext();yn.enter(n);var r=new ut(t);return yn.set("event",r),r._end=function(){var t=this;!t.sent&&0===t.remain&&t.called&&t.finish().send(n)},r.end=function(t){var e=this;return e.called?void(ln&&console.warn("Event "+this.key+"has ended or failed!")):(e.called=!0,yn.exit(n),e.status=arguments.length?t:1,void e._end())},r.finish=function(t){var e=this;return e.e=k(),e.i&&clearTimeout(e.i),delete _n[e.key],e},r.fail=function(){this.end(0)},r}function ct(t,e){var n;if(ee(t))n=t;else{if(!Vt(t)||void 0===e)throw new pe(cn);n={},n[t]=e}return a(n,function(t,e){e in Tn?Ve[Tn[e]]=t:Ve[e]=t}),this}function ft(t){if(t){var e=Ve.firstScreenResources=Ve.firstScreenResources||[];Zt(t)||(t=[t]),a(t,function(t){if(Vt(t))e.push(t);else if(un(t)){var n=t.src||t.href;n&&e.push(n)}})}}function lt(t){Zt(t)||(t=[t]),a(t,function(t){if(t){if(!(t instanceof RegExp))throw new pe("parameter's type requires RegExp");(ye.domains||(ye.domains=[])).push(t)}})}function dt(){if(Object.defineProperty){var t=e[Pe];Object.defineProperty(e,Pe,{get:function(){return Cn++>0&&e.console&&console.warn("window.%s is deprecated, use window.%s instead.",Pe,Ue),t}})}}function ht(t){try{return f(t)}catch(e){Y(e&&e.message)}return null}function vt(){return on[On]||on._end}function pt(){return on.loadEventEnd||on._end}function gt(t){function r(e){return t[e]>0?t[e]-o:0}var i={},o=n;if(t){F(function(){var e=Qe.t={};a(t,function(t,n){te(t)||(e[n]=t)},!0)}),o=t.navigationStart,i={f:r(Rn),qs:r(In),rs:r(qn),re:r(Nn),os:r(On),oe:r(An),oi:r(Ln),oc:r(Hn),ls:r(Mn),le:r(jn),tus:r(Bn),tue:r(zn)};var u=r(Dn),s=r(Fn),c=r(Pn),f=r(Un),l=r(Xn),d=r(Yn);if(d-l>0&&(i.cs=l,i.ce=d),s-u>0&&(i.ds=u,i.de=s),(f-c>0||f>0)&&(i.es=c,i.ee=f),0==i.le){var h=pt();i.ue=h-o}on._le=i.ue||i.le;var v,p;if(t.msFirstPaint)v=t.msFirstPaint,F(function(){Qe.fp="m_"+v});else if((p=e.chrome)&&p.loadTimes){var g=p.loadTimes();g&&g.firstPaintTime&&(v=1e3*g.firstPaintTime),F(function(){Qe.fp="c_"+g.firstPaintTime})}else on.firstPaint&&(v=on.firstPaint,F(function(){Qe.fp=v}));v&&(i.fp=Math.round(v-o),on.fp=i.fp),t[Gn]&&(i.sl=r(Gn))}else i={t:o,os:vt()-o,ls:pt()-o};return i.je=on.errs&&on.errs.length||0,on.ct&&(i.ct=on.ct-o),on.touch&&(i.fi=on.touch-o),i}function mt(t,e){var r={tr:!1,tt:y(ge.title),charset:ge.characterSet};Ve.resources&&b(r,Ve.resources),F(function(){r.debug=Qe}),U();var i=on.errs;a(i,function(t,r){var o=t.toObject();o.o=o.o-e&&e.navigationStart||n,i[r]=o}),r.err=i;var o,u="getEntriesByType";return t[u]?o=t[u]("resource"):G(x(sn,[u])),o&&(r.tr=!0,r.res=[],a(o,function(t){function e(e){var n=t[e];return n>0?n:0}var n=t.initiatorType,i=t.name,o={o:e("startTime"),rt:n,n:i,f:e(Rn),ds:e(Dn),de:e(Fn),cs:e(Xn),ce:e(Yn),sl:e(Gn),qs:e(In),rs:e(qn),re:e(Nn),ts:t.transferSize||0,es:t.encodedBodySize||0};if("xmlhttprequest"===n){var a=yt(i);a&&(o.aid=a.s_id,o.atd=a.t_id,o.an=a.s_name,o.aq=a.s_qu,o.as=a.s_du)}r.res.push(o)})),r}function yt(t){var e;return a(on.xhrs,function(n,r){if(r&&t.indexOf(r)>-1)return e=n,!1}),e}function bt(t){var e={};return t&&(e.id=t.id,e.a=t.a,e.q=t.q,e.tid=t.tid,e.n=t.n),e}function St(t){if(!t.agent){var n=e._ty_rum;if(n&&n.agent)t.agent=n.agent;else{var r="TINGYUN_DATA",i=A(r);if(i){try{t.agent=ht(decodeURIComponent(i))}catch(o){Y(o&&o.message)}L(r,"",-1e3)}}}return t.agent}function xt(t){var e=0,n=t.timing;return n?t.getEntriesByName&&(e=n.domLoading,a(Ze.resources,function(r){var i=t.getEntriesByName(r);if(1==i.length){var o=i[0].responseEnd+n.navigationStart;o>e&&(e=o)}}),e-=n.navigationStart):G("fp=0"),F(function(){Qe._fp=e}),Math.round(e)}function _t(t,n,r,i){var o=r||0,u=Ve.firstScreenResources;if(u&&u.length&&t.getEntriesByName)return a(u,function(e){var n=t.getEntriesByName(e);if(n.length){var r=n[0],i=r.responseEnd;i>o&&(o=i)}}),i.fs_s=1,Math.round(o);var s=ge.createElement("img");if(!s.getBoundingClientRect)return F(function(){Qe.fs=o}),o;if(t.getEntriesByName){var c=e.innerHeight,f=e.innerWidth,l=[];a(ge.querySelectorAll("img"),function(t){t.src&&Et(wt(t),c,f)&&!Tt(t)&&l.push(t.src)});var d=(n.loadEventEnd||on.loadEventEnd)-n.navigationStart;a(l,function(e){var n=t.getEntriesByName(e);if(n.length){var r=n[0],i=r.responseEnd;r.fetchStart<=d&&i>o&&(o=i)}})}return Math.round(o)}function Et(t,n,r){if(t){var i=e.pageYOffset,o=t.top+(0===i?0:i||ge.scrollTop||0)-(ge.clientTop||0);if(o>=n)return!1;var a=t.left;return a>=0&&a<r}return!1}function wt(t){return te(t.getBoundingClientRect)?t.getBoundingClientRect():void 0}function Tt(t){return Ce.reliableHiddenOffsets()?t.offsetWidth<=0&&t.offsetHeight<=0&&!t.getClientRects().length:kt(t)}function kt(t){for(;t&&1===t.nodeType;){if("none"===Ct(t)||"hidden"===t.type)return!0;t=t.parentNode}return!1}function Ct(t){return t.style&&t.style.display}function Rt(t){var e=n,r=0;return t&&(e=t.navigationStart||e,r=t[On]||t.domInteractive||t.domLoading||r),r=on[On]||r||on._end,r-e}function It(t){if(t){var e=t.fetchStart;if(e)return e-t.navigationStart}}function qt(t){return function e(n,r){var i=this,o=e;if(o._&&(o._=1),!i[Ye]){var a=i[Pe]={};a.method=n,a.url=r,a.id=Zn++;var u=yn.get("event");u&&(a.key=u.key,u.remain++)}try{return t.apply(i,arguments)}catch(s){}return g(t,[i,arguments])}}function Nt(t){return function e(n){var r=this,i=e;if(i._&&(i._=1),!r[Ye]){var o=r[Pe];o&&(o.start=k(),o.reqSize=R(n)),Ot(r),r.setRequestHeader&&be.id&&o&&nr(o.url)&&(o.r=k()%1e9,r.setRequestHeader("X-Tingyun-Id",be.id+";r="+o.r))}try{return t.apply(r,arguments)}catch(a){}return g(t,[r,arguments])}}function Ot(t){function e(e){return et(function n(){var r=n;r._&&(r._=1),At(t);var i;if(te(e)){var o=t[Pe];if(o&&4==t.readyState)var a=k();i=e.apply(this,arguments),o&&4==t.readyState&&(o.cbTime=k()-a,t[Pe]=null)}return i})}function n(e){t[Pe]&&(t[Pe].errorCode=e)}var r=t[er];if(r)D(t,er,e);else try{se(t,Me,et(function o(){var e=o;e._&&(e._=1),At(t)})),a(tr,function(e,r){se(t,r,function(){n(e)})})}catch(i){return void w(function(){a(tr,function(e,r){var i="on"+r;t[i]?D(t,i,function(t){if(n(e),te(t))return t.apply(this,arguments)}):t[i]=function(){n(e)}}),D(t,er,e)})}w(function(){D(t,er,e)})}function At(t){var e=t[Pe];if(e&&(e.end=k(),e.readyState=t.readyState,4==t.readyState)){e.status=t.status,e.resSize=Lt(t);var n=yn.get("event");w(function(){var r=!1;if(a(Vn,function(t){if(t.id===e.id)return r=!0,!1}),!r){var i=Ht(e,t);n&&n.key==e.key&&(n.xhrs.push(i),0===--n.remain&&n._end()),on.xhrs&&(Qn(e),on.xhrs[e.url]=i),Vn.push(i)}})}}function Lt(t){var e=0;if(""==t.responseType||"text"==t.responseType)e=R(t.responseText);else if(t.response)e=R(t.response);else try{e=R(t.responseText)}catch(n){}return e}function Ht(t,e){if(t){var n=t.status,r={id:t.id,req:t.method+" "+t.url,start:t.start,du:n>0?t.end-t.start:0,cb:t.cbTime||0,status:n,err:t.errorCode?t.errorCode:0,rec:t.resSize,send:t.reqSize};if(t.r){var i=jt(e,t);i&&(r.s_id=i.id,r.s_name=i.action,i.time&&(r.s_du=i.time.duration,r.s_qu=i.time.qu),r.t_id=i.trId)}return r}}function Mt(t,e){if(t&&t.getResponseHeader)return t.getResponseHeader(e)}function jt(t,e){var n=ht(Mt(t,"X-Tingyun-Tx-Data"));return n&&n.r&&Bt(n.r)===Bt(e.r)?n:null}function Bt(t){return t+""}function zt(){return setInterval(function(){if(Vn&&Vn.length){var t=[];a(Vn,function(e){t.push(e)});var n=null;Ve.ulabel&&(n={ulabel:Ve.ulabel}),on.emit("send","/xhr1",n,{xhr:t},function(){Vn=S(Vn,function(e){return(t.indexOf?t.indexOf(e):_(t,e))<0})}),le()&&!e.XDomainRequest&&(Vn=[])}},$n)}function Dt(){var t=me&&me.prototype;return t?(D(t,"open",qt),D(t,"send",Nt)):me&&(e.XMLHttpRequest=function(){var t=new me;return D(t,"open",qt),D(t,"send",Nt),t}),zt()}function Ft(t){this.limit=t,this.reset()}function Pt(t,e,n,r){return String(t)+String(e)+String(n)+String(r)}function Ut(t,e,n,r,i,o,a){var u=this;u.id=t,u.time=k(),u.msg=e,u.lineno=r,u.colno=i,u.filename=n,u.count=1,u.stack=o&&o.stack||"",u.module=a,u.fix();var s=ar[t];u.ep=s?0:1,ar[t]=!0}function Xt(t){var e=function(t){var e=[];return a(t,function(t){e.push(t.toObject())}),e}(or.c);if(!e||!e.length)return null;var r={fu:ir?ir:ir++,os:parseInt((k()-(Ze.pfStart||n))/1e3)};Ve.ulabel&&(r.ulabel=Ve.ulabel),on.emit("send","/err1",r,{datas:e},m(or.reset,or))}function Yt(t,e,n,r,i){if(e||!xe){var o=!1;if(a(ye.domains,function(t){if(o=t.test(e))return!1}),!o){var u=i&&i.moduleId,s=Pt(t,n,r,u),c=or.get(s);c?c.increase():(c=new Ut(s,t,e,n,r,i,u),or.add(s,c),on.errs&&on.errs.push(c))}}}function Gt(){var t=e.onerror;e.onerror=function(e,n,r,i,o){if(Yt(e,n,r,i,o),te(t))return t.apply(this,arguments)},e.onerror._ty=!0}function Wt(){var t=e.onerror;t&&t._ty||Gt()}function Jt(){var t=le();return t?Gt():se(e,Ne,function(t){var n,r,i,o,a;(t instanceof e.Event||e.ErrorEvent&&t instanceof e.ErrorEvent)&&(n=t.message||t.error&&(t.error.message||t.error.constructor.name)||"",r=t.lineno||0,i=t.colno||0,o=t.filename||t.error&&t.error.filename||t.target&&t.target.baseURI||"",o==ge.URL&&(o="#"),a=t.error),Yt(n,o,r,i,a)}),tn.on([Oe,Ae,Le,He],function(t){Xt()}).on(Oe,function(){t&&w(Wt)}),setInterval(Xt,rr)}function $t(){return on.start()&&(Jn(),Dt(),Jt()),on._end=k(),F(function(){Qe._end=on._end}),dt(),kn}var Kt,Qt,Vt=u("String"),Zt=u("Array"),te=u("Function"),ee=u("Object"),ne=u("Undefined"),re=[].slice,ie='"',oe=/([\"\\])/g,ae=/\n/g,ue=e.JSON;ue&&ue.parse&&ue.stringify?(Kt=r,Qt=i):(Kt=s,Qt=c);var se,ce;e.addEventListener?(se=l,ce=d):(se=h,ce=v);var fe=e.encodeURIComponent,le=new Function("return!+[1,]"),de=e.location.protocol,he="http:",ve=function(){function t(t){return t<0?NaN:t<=30?0|Math.random()*(1<<t):t<=53?(0|Math.random()*(1<<30))+(0|Math.random()*(1<<t-30))*(1<<30):NaN}function e(t,e){for(var n=t.toString(16),r=e-n.length,i="0";r>0;r>>>=1,i+=i)1&r&&(n=i+n);return n}return function(){return e(t(32),8)+"-"+e(t(16),4)+"-"+e(16384|t(12),4)+"-"+e(32768|t(14),4)+"-"+e(t(48),12)}}();N.prototype={on:function(t,e){var n=this;return Vt(t)?(n.events[t]||(n.events[t]=[])).push(e):Zt(t)&&a(t,function(t){n.on(t,e)}),n},off:function(t,e){var n=arguments.length,r=this;if(0===n)return r.events={},r;var i=r.events[t];if(!i)return r;if(1===n)return r.events[t]=null,r;for(var o,a=i.length;a--;)if(o=i[a],o===e){i.splice(a,1);break}return r},emit:function(t){var e=[].slice.call(arguments,1),n=this.events[t];return n&&a(n,function(t){return t.apply(this,e)}),this},unshift:function(t,e){var n=this;return(n.events[t]||(n.events[t]=[])).unshift(e),n}};var pe=e.Error,ge=e.document,me=e.XMLHttpRequest,ye={};t(ye);var be=ye.server||{},Se={fp_threshold:2e3,fs_threshold:4e3,dr_threshold:4e3};be=b(Se,be);var xe=O("ignore_err"),_e=O("debug"),Ee=e.location,we=e.navigator,Te=e.HTMLElement,ke=function(){try{var t=ve();return e.localStorage.setItem(t,t),e.localStorage.removeItem(t),!0}catch(n){return!1}}(),Ce={};Ce.localStorage=ke,function(){function t(){var t,f,l=ge.documentElement;l.appendChild(s),c.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",n=i=u=!1,r=a=!0,e.getComputedStyle&&(f=e.getComputedStyle(c),n="1%"!==(f||{}).top,u="2px"===(f||{}).marginLeft,i="4px"===(f||{width:"4px"}).width,c.style.marginRight="50%",r="4px"===(f||{marginRight:"4px"}).marginRight,t=c.appendChild(ge.createElement("div")),t.style.cssText=c.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",t.style.marginRight=t.style.width="0",c.style.width="1px",a=!parseFloat((e.getComputedStyle(t)||{}).marginRight),c.removeChild(t)),c.style.display="none",o=0===c.getClientRects().length,o&&(c.style.display="",c.innerHTML="<table><tr><td></td><td>t</td></tr></table>",t=c.getElementsByTagName("td"),t[0].style.cssText="margin:0;border:0;padding:0;display:none",o=0===t[0].offsetHeight,o&&(t[0].style.display="",t[1].style.display="none",o=0===t[0].offsetHeight)),l.removeChild(s)}var n,r,i,o,a,u,s=(ge.documentElement,ge.createElement("div")),c=ge.createElement("div");c.style&&(c.style.cssText="float:left;opacity:.5",Ce.opacity="0.5"===c.style.opacity,Ce.cssFloat=!!c.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",Ce.clearCloneStyle="content-box"===c.style.backgroundClip,s=ge.createElement("div"),s.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",c.innerHTML="",s.appendChild(c),Ce.boxSizing=""===c.style.boxSizing||""===c.style.MozBoxSizing||""===c.style.WebkitBoxSizing,Ce.reliableHiddenOffsets=function(){return null==n&&t(),o})}();var Re,Ie;Ce.localStorage?(Re=function(t){return e.localStorage.getItem(t)},Ie=function(t,n){return e.localStorage.setItem(t,n),n}):(Re=A,Ie=L);var qe,Ne="error",Oe="load",Ae="unload",Le="beforeunload",He="pagehide",Me="readystatechange",je="complete",Be="on",ze="TY_DISTINCT_ID",De="TY_SESSION_ID",Fe=86400,Pe="_ty_rum",Ue="TINGYUN",Xe=2,Ye="__ign",Ge="__ty_aysncWrap__",We="display:none",Je="POST",$e=H;e.XDomainRequest?qe=M:le()?qe=B:we.sendBeacon?$e=qe=function(t,e,n,r){te(n)&&(r=n,n=null);var i=we.sendBeacon(t,Qt(e));i&&r&&r()}:qe=z;var Ke=_e,Qe={start:n,e:{},an:{count:0},visible:[]},Ve={},Ze={};!function(){if(_e){var t,e,n="visibilitychange";ne(ge.hidden)?ne(ge.msHidden)?ne(ge.webkitHidden)||(t="webkitHidden",e="webkit"+n):(t="msHidden",e="ms"+n):(t="hidden",e=n),ne(ge.addEventListener)||ne(ge[t])||se(ge,e,P(function(){Qe.visible.push([ge[t],k()])}))}}();var tn=new N,en=[],nn=[],rn=J.prototype;rn.start=function(){if(!be.key)return Y("missing config, agent disabled!"),!1;var t=e[Pe]||e[Ue];return t&&t.server?(Y("already loaded!"),!1):(X(),this)},b(rn,N.prototype);var on=new J;on.on("send",function(t,e,n,r){var i=q(be.beacon,t,b({},an,e||{}));switch(r=r||T,t){case"/pf":n?qe(i,n,function(){on.xhrs=on.errs=null,r()}):$e(i,r);break;default:qe(i,n,r)}});var an={pvid:ve(),ref:ge.URL,referrer:ge.referrer,key:be.key,v:"1.7.7",av:"1.7.7",did:$(),sid:K()},un=Te?function(t){return t instanceof Te}:function(t){t&&"object"==typeof t&&1===t.nodeType&&Vt(t.nodeName)},sn="{0} not support",cn="illegal argument",fn={},ln="undefined"!=typeof e.console,dn=1,hn=2,vn=4,pn=8,gn=V.prototype;gn.create=gn.before=gn.after=gn.error=null;var mn;rt.prototype={createContext:function(){return Object.create?Object.create(this.active):it(this.active)},get:function(t){if(this.active)return this.active[t]},set:function(t,e){if(this.active)return this.active[t]=e},enter:function(t){if(!t)throw new pe("context required!");this._set.push(this.active),this.active=t},exit:function(t){if(!t)throw new pe("context required!");if(t===this.active)return void(this.active=this._set.pop());var e=this._set.lastIndexOf?this._set.lastIndexOf(t):E(this._set,t);if(e<0)throw new pe("context not currently entered!");this._set.splice(e,1)},bind:function(t,e){e||(e=this.active?this.active:this.createContext());var n=this;return function(){n.enter(e);try{return t.apply(this,arguments)}catch(r){try{var i="moduleId";r[i]=e[i]}catch(o){}throw r}finally{n.exit(e)}}}};var yn,bn=!1,yn=ot(),Sn=at.prototype;Sn.fail=Sn.end=T;var xn=ut.prototype;xn.end=xn.finish=xn.fail=null,xn.send=function(t){var e=this;e.sent=!0;var n=t.event&&t.event.xhrs||[];a(n,function(t){t.start=t.start-e.s});var r={key:e.key,duration:e.e-e.s,status:e.status,xhrs:n};on.emit("send","/spe",null,r,T)};var _n={},En={},wn=e.screen;wn&&(En.sh=wn.height,En.sw=wn.width);var Tn={host:"cshst",url:"csurl"},kn={version:"1.7.7",config:ct,DIAGNOSE_HREF:Xe,diagnose:Q,createEvent:st,logFirstScreen:ft,addExcludedDomain:lt};e[Pe]=e[Ue]=kn;var Cn=0,Rn="fetchStart",In="requestStart",qn="responseStart",Nn="responseEnd",On="domContentLoadedEventStart",An="domContentLoadedEventEnd",Ln="domInteractive",Hn="domComplete",Mn="loadEventStart",jn="loadEventEnd",Bn="unloadEventStart",zn="unloadEventEnd",Dn="domainLookupStart",Fn="domainLookupEnd",Pn="redirectStart",Un="redirectEnd",Xn="connectStart",Yn="connectEnd",Gn="secureConnectionStart",Wn=St(ye);Wn&&Wn.ulabel&&(Ve.ulabel=Wn.ulabel);var Jn=function(){var t=C(function(){function t(t){return t?"1":"0"}var r=e.performance,i=!!r;i||G(x(sn,["pf"]));var o=bt(Wn),u=r&&r.timing,s=b(gt(u),o,Ve),c=b({},En);c.ressize=!!u,on.fp?(c.fp=on.fp,i&&on.fp>on._le&&(G("fp>le"),c.fp=xt(r),c.__fp=2)):i?(c.fp=xt(r),c.__fp=1):c.fp=c.__fp=0,c.dr=Rt(u),i?c.fs=_t(r,u,c.fp,c):c.__fs=0;var f,l="";if(i){var d="trace",h=Math.max(s.ls,0);h||(h=pt()-u.navigationStart||n),c[d]=h;var v=It(u);a(["fp","fs","dr",d],function(e){l+=t((v?c[e]-v:c[e])>=be[e+"_threshold"])}),delete c[d],l.indexOf("1")>-1&&(f=mt(r,u))}c.trflag=l||"0000",Ze.pfStart=k(),delete s.firstScreenResources,delete s.resources,on.emit("send","/pf",b(s,c),f,function(){G("pf sent!"),on.xhrs=on.errs=null})});return tn.on(Oe,function(){w(t)}).on([Ae,Le,He],t)},$n=2e3,Kn=function(t){var e=[];return a(t,function(t){try{e.push(new RegExp(t))}catch(n){Y(n&&n.message)}}),e}(be.custom_urls),Qn=Kn.length?function(t){var e=t.url;!on.ct&&e&&a(Kn,function(n){if(e.match(n))return on.ct=t.end+t.cbTime,!1})}:T,Vn=[],Zn=0,tr={error:990,abort:905,timeout:903},er=Be+Me,nr=function(){function t(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}var e=/(msie|trident)/i.test(we.userAgent),n=ge.createElement("a"),r=t(Ee.href);return function(e){var n=t(e);return n.protocol===r.protocol&&n.host===r.host}}(),rr=1e4,ir=0;Ft.prototype={add:function(t,e){this.len>this.limit||this.get(t)||(this.c[t]=e,this.len++)},get:function(t){return this.c[t]},reset:function(){this.c={},this.len=0}};var or=new Ft(100),ar={};Ut.prototype={increase:function(){this.count++},fix:function(){var t=this,e=t.stack;if(e&&Vt(e)){e=e.split(/\n/);var n=[];a(e,function(t,e){t.indexOf(Ge)==-1&&n.push(t)}),t.stack=n.join("\n")}},toObject:function(){var t=this;return{o:t.time,e:t.msg,l:t.lineno,c:t.colno,r:t.filename,ec:t.count,s:t.stack,m:t.module,ep:t.ep}}};var ur=$t();return ur}(function(ty_rum){ty_rum.server = {id:'YfNlX9ebdkc',ignore_err : true,beacon:'beacon.tingyun.com',beacon_err:'beacon-err.tingyun.com',key:'Qwaw1b5G_bE',trace_threshold:7000,fp_threshold:2000,fs_threshold:4000,dr_threshold:4000,custom_urls:[],sr:1.0};},window,+new Date);