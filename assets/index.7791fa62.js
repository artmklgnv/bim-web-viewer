var Yv=Object.defineProperty;var Kv=(i,e,t)=>e in i?Yv(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var et=(i,e,t)=>(Kv(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function jf(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Zv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jv=jf(Zv);function vg(i){return!!i||i===""}function nc(i){if(De(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=It(n)?tx(n):nc(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(It(i))return i;if(At(i))return i}}const Qv=/;(?![^(]*\))/g,ex=/:(.+)/;function tx(i){const e={};return i.split(Qv).forEach(t=>{if(t){const n=t.split(ex);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function $f(i){let e="";if(It(i))e=i;else if(De(i))for(let t=0;t<i.length;t++){const n=$f(i[t]);n&&(e+=n+" ")}else if(At(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Rn=i=>It(i)?i:i==null?"":De(i)||At(i)&&(i.toString===Mg||!Fe(i.toString))?JSON.stringify(i,xg,2):String(i),xg=(i,e)=>e&&e.__v_isRef?xg(i,e.value):Zs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r])=>(t[`${n} =>`]=r,t),{})}:yg(e)?{[`Set(${e.size})`]:[...e.values()]}:At(e)&&!De(e)&&!Sg(e)?String(e):e,lt={},Ks=[],Kn=()=>{},nx=()=>!1,ix=/^on[^a-z]/,ic=i=>ix.test(i),qf=i=>i.startsWith("onUpdate:"),Zt=Object.assign,Xf=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},rx=Object.prototype.hasOwnProperty,qe=(i,e)=>rx.call(i,e),De=Array.isArray,Zs=i=>rc(i)==="[object Map]",yg=i=>rc(i)==="[object Set]",Fe=i=>typeof i=="function",It=i=>typeof i=="string",Yf=i=>typeof i=="symbol",At=i=>i!==null&&typeof i=="object",bg=i=>At(i)&&Fe(i.then)&&Fe(i.catch),Mg=Object.prototype.toString,rc=i=>Mg.call(i),sx=i=>rc(i).slice(8,-1),Sg=i=>rc(i)==="[object Object]",Kf=i=>It(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,ml=jf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sc=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},ax=/-(\w)/g,mi=sc(i=>i.replace(ax,(e,t)=>t?t.toUpperCase():"")),ox=/\B([A-Z])/g,wa=sc(i=>i.replace(ox,"-$1").toLowerCase()),ac=sc(i=>i.charAt(0).toUpperCase()+i.slice(1)),Fc=sc(i=>i?`on${ac(i)}`:""),uo=(i,e)=>!Object.is(i,e),zc=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Rl=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},lx=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let ld;const cx=()=>ld||(ld=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ii;class wg{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&ii&&(this.parent=ii,this.index=(ii.scopes||(ii.scopes=[])).push(this)-1)}run(e){if(this.active){const t=ii;try{return ii=this,e()}finally{ii=t}}}on(){ii=this}off(){ii=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Tg(i){return new wg(i)}function ux(i,e=ii){e&&e.active&&e.effects.push(i)}const Zf=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Eg=i=>(i.w&vr)>0,Ag=i=>(i.n&vr)>0,fx=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=vr},hx=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];Eg(r)&&!Ag(r)?r.delete(i):e[t++]=r,r.w&=~vr,r.n&=~vr}e.length=t}},Fu=new WeakMap;let Ha=0,vr=1;const zu=30;let Wn;const Kr=Symbol(""),Uu=Symbol("");class Jf{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,ux(this,n)}run(){if(!this.active)return this.fn();let e=Wn,t=dr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Wn,Wn=this,dr=!0,vr=1<<++Ha,Ha<=zu?fx(this):cd(this),this.fn()}finally{Ha<=zu&&hx(this),vr=1<<--Ha,Wn=this.parent,dr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Wn===this?this.deferStop=!0:this.active&&(cd(this),this.onStop&&this.onStop(),this.active=!1)}}function cd(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let dr=!0;const Cg=[];function Ta(){Cg.push(dr),dr=!1}function Ea(){const i=Cg.pop();dr=i===void 0?!0:i}function xn(i,e,t){if(dr&&Wn){let n=Fu.get(i);n||Fu.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=Zf()),Pg(r)}}function Pg(i,e){let t=!1;Ha<=zu?Ag(i)||(i.n|=vr,t=!Eg(i)):t=!i.has(Wn),t&&(i.add(Wn),Wn.deps.push(i))}function zi(i,e,t,n,r,s){const a=Fu.get(i);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&De(i))a.forEach((l,c)=>{(c==="length"||c>=n)&&o.push(l)});else switch(t!==void 0&&o.push(a.get(t)),e){case"add":De(i)?Kf(t)&&o.push(a.get("length")):(o.push(a.get(Kr)),Zs(i)&&o.push(a.get(Uu)));break;case"delete":De(i)||(o.push(a.get(Kr)),Zs(i)&&o.push(a.get(Uu)));break;case"set":Zs(i)&&o.push(a.get(Kr));break}if(o.length===1)o[0]&&Bu(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Bu(Zf(l))}}function Bu(i,e){const t=De(i)?i:[...i];for(const n of t)n.computed&&ud(n);for(const n of t)n.computed||ud(n)}function ud(i,e){(i!==Wn||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const dx=jf("__proto__,__v_isRef,__isVue"),Rg=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Yf)),px=Qf(),mx=Qf(!1,!0),gx=Qf(!0),fd=_x();function _x(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=je(this);for(let s=0,a=this.length;s<a;s++)xn(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(je)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){Ta();const n=je(this)[e].apply(this,t);return Ea(),n}}),i}function Qf(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?Dx:Ng:e?Og:Dg).get(n))return n;const a=De(n);if(!i&&a&&qe(fd,r))return Reflect.get(fd,r,s);const o=Reflect.get(n,r,s);return(Yf(r)?Rg.has(r):dx(r))||(i||xn(n,"get",r),e)?o:ft(o)?a&&Kf(r)?o:o.value:At(o)?i?kg(o):lc(o):o}}const vx=Lg(),xx=Lg(!0);function Lg(i=!1){return function(t,n,r,s){let a=t[n];if(fo(a)&&ft(a)&&!ft(r))return!1;if(!i&&!fo(r)&&(Gu(r)||(r=je(r),a=je(a)),!De(t)&&ft(a)&&!ft(r)))return a.value=r,!0;const o=De(t)&&Kf(n)?Number(n)<t.length:qe(t,n),l=Reflect.set(t,n,r,s);return t===je(s)&&(o?uo(r,a)&&zi(t,"set",n,r):zi(t,"add",n,r)),l}}function yx(i,e){const t=qe(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&zi(i,"delete",e,void 0),n}function bx(i,e){const t=Reflect.has(i,e);return(!Yf(e)||!Rg.has(e))&&xn(i,"has",e),t}function Mx(i){return xn(i,"iterate",De(i)?"length":Kr),Reflect.ownKeys(i)}const Ig={get:px,set:vx,deleteProperty:yx,has:bx,ownKeys:Mx},Sx={get:gx,set(i,e){return!0},deleteProperty(i,e){return!0}},wx=Zt({},Ig,{get:mx,set:xx}),eh=i=>i,oc=i=>Reflect.getPrototypeOf(i);function ko(i,e,t=!1,n=!1){i=i.__v_raw;const r=je(i),s=je(e);t||(e!==s&&xn(r,"get",e),xn(r,"get",s));const{has:a}=oc(r),o=n?eh:t?ih:ho;if(a.call(r,e))return o(i.get(e));if(a.call(r,s))return o(i.get(s));i!==r&&i.get(e)}function Fo(i,e=!1){const t=this.__v_raw,n=je(t),r=je(i);return e||(i!==r&&xn(n,"has",i),xn(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function zo(i,e=!1){return i=i.__v_raw,!e&&xn(je(i),"iterate",Kr),Reflect.get(i,"size",i)}function hd(i){i=je(i);const e=je(this);return oc(e).has.call(e,i)||(e.add(i),zi(e,"add",i,i)),this}function dd(i,e){e=je(e);const t=je(this),{has:n,get:r}=oc(t);let s=n.call(t,i);s||(i=je(i),s=n.call(t,i));const a=r.call(t,i);return t.set(i,e),s?uo(e,a)&&zi(t,"set",i,e):zi(t,"add",i,e),this}function pd(i){const e=je(this),{has:t,get:n}=oc(e);let r=t.call(e,i);r||(i=je(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&zi(e,"delete",i,void 0),s}function md(){const i=je(this),e=i.size!==0,t=i.clear();return e&&zi(i,"clear",void 0,void 0),t}function Uo(i,e){return function(n,r){const s=this,a=s.__v_raw,o=je(a),l=e?eh:i?ih:ho;return!i&&xn(o,"iterate",Kr),a.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function Bo(i,e,t){return function(...n){const r=this.__v_raw,s=je(r),a=Zs(s),o=i==="entries"||i===Symbol.iterator&&a,l=i==="keys"&&a,c=r[i](...n),u=t?eh:e?ih:ho;return!e&&xn(s,"iterate",l?Uu:Kr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Ki(i){return function(...e){return i==="delete"?!1:this}}function Tx(){const i={get(s){return ko(this,s)},get size(){return zo(this)},has:Fo,add:hd,set:dd,delete:pd,clear:md,forEach:Uo(!1,!1)},e={get(s){return ko(this,s,!1,!0)},get size(){return zo(this)},has:Fo,add:hd,set:dd,delete:pd,clear:md,forEach:Uo(!1,!0)},t={get(s){return ko(this,s,!0)},get size(){return zo(this,!0)},has(s){return Fo.call(this,s,!0)},add:Ki("add"),set:Ki("set"),delete:Ki("delete"),clear:Ki("clear"),forEach:Uo(!0,!1)},n={get(s){return ko(this,s,!0,!0)},get size(){return zo(this,!0)},has(s){return Fo.call(this,s,!0)},add:Ki("add"),set:Ki("set"),delete:Ki("delete"),clear:Ki("clear"),forEach:Uo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=Bo(s,!1,!1),t[s]=Bo(s,!0,!1),e[s]=Bo(s,!1,!0),n[s]=Bo(s,!0,!0)}),[i,t,e,n]}const[Ex,Ax,Cx,Px]=Tx();function th(i,e){const t=e?i?Px:Cx:i?Ax:Ex;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(qe(t,r)&&r in n?t:n,r,s)}const Rx={get:th(!1,!1)},Lx={get:th(!1,!0)},Ix={get:th(!0,!1)},Dg=new WeakMap,Og=new WeakMap,Ng=new WeakMap,Dx=new WeakMap;function Ox(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nx(i){return i.__v_skip||!Object.isExtensible(i)?0:Ox(sx(i))}function lc(i){return fo(i)?i:nh(i,!1,Ig,Rx,Dg)}function kx(i){return nh(i,!1,wx,Lx,Og)}function kg(i){return nh(i,!0,Sx,Ix,Ng)}function nh(i,e,t,n,r){if(!At(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const a=Nx(i);if(a===0)return i;const o=new Proxy(i,a===2?n:t);return r.set(i,o),o}function ui(i){return fo(i)?ui(i.__v_raw):!!(i&&i.__v_isReactive)}function fo(i){return!!(i&&i.__v_isReadonly)}function Gu(i){return!!(i&&i.__v_isShallow)}function Fg(i){return ui(i)||fo(i)}function je(i){const e=i&&i.__v_raw;return e?je(e):i}function Hn(i){return Rl(i,"__v_skip",!0),i}const ho=i=>At(i)?lc(i):i,ih=i=>At(i)?kg(i):i;function zg(i){dr&&Wn&&(i=je(i),Pg(i.dep||(i.dep=Zf())))}function Ug(i,e){i=je(i),i.dep&&Bu(i.dep)}function ft(i){return!!(i&&i.__v_isRef===!0)}function vt(i){return Fx(i,!1)}function Fx(i,e){return ft(i)?i:new zx(i,e)}class zx{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:je(e),this._value=t?e:ho(e)}get value(){return zg(this),this._value}set value(e){e=this.__v_isShallow?e:je(e),uo(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ho(e),Ug(this))}}function Bg(i){return ft(i)?i.value:i}const Ux={get:(i,e,t)=>Bg(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return ft(r)&&!ft(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function Gg(i){return ui(i)?i:new Proxy(i,Ux)}function gd(i){const e=De(i)?new Array(i.length):{};for(const t in i)e[t]=Ka(i,t);return e}class Bx{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Ka(i,e,t){const n=i[e];return ft(n)?n:new Bx(i,e,t)}class Gx{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Jf(e,()=>{this._dirty||(this._dirty=!0,Ug(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=je(this);return zg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Vx(i,e,t=!1){let n,r;const s=Fe(i);return s?(n=i,r=Kn):(n=i.get,r=i.set),new Gx(n,r,s||!r,t)}function pr(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){cc(s,e,t)}return r}function Zn(i,e,t,n){if(Fe(i)){const s=pr(i,e,t,n);return s&&bg(s)&&s.catch(a=>{cc(a,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(Zn(i[s],e,t,n));return r}function cc(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){pr(l,null,10,[i,a,o]);return}}Hx(i,t,r,n)}function Hx(i,e,t,n=!0){console.error(i)}let Ll=!1,Vu=!1;const mn=[];let Li=0;const Za=[];let Wa=null,Bs=0;const Ja=[];let or=null,Gs=0;const Vg=Promise.resolve();let rh=null,Hu=null;function Wu(i){const e=rh||Vg;return i?e.then(this?i.bind(this):i):e}function Wx(i){let e=Li+1,t=mn.length;for(;e<t;){const n=e+t>>>1;po(mn[n])<i?e=n+1:t=n}return e}function Hg(i){(!mn.length||!mn.includes(i,Ll&&i.allowRecurse?Li+1:Li))&&i!==Hu&&(i.id==null?mn.push(i):mn.splice(Wx(i.id),0,i),Wg())}function Wg(){!Ll&&!Vu&&(Vu=!0,rh=Vg.then(qg))}function jx(i){const e=mn.indexOf(i);e>Li&&mn.splice(e,1)}function jg(i,e,t,n){De(i)?t.push(...i):(!e||!e.includes(i,i.allowRecurse?n+1:n))&&t.push(i),Wg()}function $x(i){jg(i,Wa,Za,Bs)}function qx(i){jg(i,or,Ja,Gs)}function uc(i,e=null){if(Za.length){for(Hu=e,Wa=[...new Set(Za)],Za.length=0,Bs=0;Bs<Wa.length;Bs++)Wa[Bs]();Wa=null,Bs=0,Hu=null,uc(i,e)}}function $g(i){if(uc(),Ja.length){const e=[...new Set(Ja)];if(Ja.length=0,or){or.push(...e);return}for(or=e,or.sort((t,n)=>po(t)-po(n)),Gs=0;Gs<or.length;Gs++)or[Gs]();or=null,Gs=0}}const po=i=>i.id==null?1/0:i.id;function qg(i){Vu=!1,Ll=!0,uc(i),mn.sort((t,n)=>po(t)-po(n));const e=Kn;try{for(Li=0;Li<mn.length;Li++){const t=mn[Li];t&&t.active!==!1&&pr(t,null,14)}}finally{Li=0,mn.length=0,$g(),Ll=!1,rh=null,(mn.length||Za.length||Ja.length)&&qg(i)}}function Xx(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||lt;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in n){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=n[u]||lt;h&&(r=t.map(p=>p.trim())),f&&(r=t.map(lx))}let o,l=n[o=Fc(e)]||n[o=Fc(mi(e))];!l&&s&&(l=n[o=Fc(wa(e))]),l&&Zn(l,i,6,r);const c=n[o+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[o])return;i.emitted[o]=!0,Zn(c,i,6,r)}}function Xg(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let a={},o=!1;if(!Fe(i)){const l=c=>{const u=Xg(c,e,!0);u&&(o=!0,Zt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!o?(n.set(i,null),null):(De(s)?s.forEach(l=>a[l]=null):Zt(a,s),n.set(i,a),a)}function fc(i,e){return!i||!ic(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(i,e[0].toLowerCase()+e.slice(1))||qe(i,wa(e))||qe(i,e))}let Kt=null,hc=null;function Il(i){const e=Kt;return Kt=i,hc=i&&i.type.__scopeId||null,e}function dc(i){hc=i}function pc(){hc=null}function Ot(i,e=Kt,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Ed(-1);const s=Il(e),a=i(...r);return Il(s),n._d&&Ed(1),a};return n._n=!0,n._c=!0,n._d=!0,n}function Uc(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:m}=i;let d,_;const v=Il(i);try{if(t.shapeFlag&4){const M=r||n;d=ri(u.call(M,M,f,s,p,h,g)),_=l}else{const M=e;d=ri(M.length>1?M(s,{attrs:l,slots:o,emit:c}):M(s,null)),_=e.props?l:Yx(l)}}catch(M){eo.length=0,cc(M,i,1),d=ke(xr)}let b=d;if(_&&m!==!1){const M=Object.keys(_),{shapeFlag:y}=b;M.length&&y&7&&(a&&M.some(qf)&&(_=Kx(_,a)),b=oa(b,_))}return t.dirs&&(b=oa(b),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&(b.transition=t.transition),d=b,Il(v),d}const Yx=i=>{let e;for(const t in i)(t==="class"||t==="style"||ic(t))&&((e||(e={}))[t]=i[t]);return e},Kx=(i,e)=>{const t={};for(const n in i)(!qf(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Zx(i,e,t){const{props:n,children:r,component:s}=i,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?_d(n,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==n[h]&&!fc(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?_d(n,a,c):!0:!!a;return!1}function _d(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!fc(t,s))return!0}return!1}function Jx({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const Qx=i=>i.__isSuspense;function ey(i,e){e&&e.pendingBranch?De(i)?e.effects.push(...i):e.effects.push(i):qx(i)}function ty(i,e){if(Lt){let t=Lt.provides;const n=Lt.parent&&Lt.parent.provides;n===t&&(t=Lt.provides=Object.create(n)),t[i]=e}}function gl(i,e,t=!1){const n=Lt||Kt;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Fe(e)?e.call(n.proxy):e}}const vd={};function Js(i,e,t){return Yg(i,e,t)}function Yg(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:a}=lt){const o=Lt;let l,c=!1,u=!1;if(ft(i)?(l=()=>i.value,c=Gu(i)):ui(i)?(l=()=>i,n=!0):De(i)?(u=!0,c=i.some(_=>ui(_)||Gu(_)),l=()=>i.map(_=>{if(ft(_))return _.value;if(ui(_))return Hs(_);if(Fe(_))return pr(_,o,2)})):Fe(i)?e?l=()=>pr(i,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),Zn(i,o,3,[h])}:l=Kn,e&&n){const _=l;l=()=>Hs(_())}let f,h=_=>{f=d.onStop=()=>{pr(_,o,4)}};if(go)return h=Kn,e?t&&Zn(e,o,3,[l(),u?[]:void 0,h]):l(),Kn;let p=u?[]:vd;const g=()=>{if(!!d.active)if(e){const _=d.run();(n||c||(u?_.some((v,b)=>uo(v,p[b])):uo(_,p)))&&(f&&f(),Zn(e,o,3,[_,p===vd?void 0:p,h]),p=_)}else d.run()};g.allowRecurse=!!e;let m;r==="sync"?m=g:r==="post"?m=()=>nn(g,o&&o.suspense):m=()=>$x(g);const d=new Jf(l,m);return e?t?g():p=d.run():r==="post"?nn(d.run.bind(d),o&&o.suspense):d.run(),()=>{d.stop(),o&&o.scope&&Xf(o.scope.effects,d)}}function ny(i,e,t){const n=this.proxy,r=It(i)?i.includes(".")?Kg(n,i):()=>n[i]:i.bind(n,n);let s;Fe(e)?s=e:(s=e.handler,t=e);const a=Lt;la(this);const o=Yg(r,s.bind(n),t);return a?la(a):Zr(),o}function Kg(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Hs(i,e){if(!At(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),ft(i))Hs(i.value,e);else if(De(i))for(let t=0;t<i.length;t++)Hs(i[t],e);else if(yg(i)||Zs(i))i.forEach(t=>{Hs(t,e)});else if(Sg(i))for(const t in i)Hs(i[t],e);return i}function Ut(i){return Fe(i)?{setup:i,name:i.name}:i}const Qa=i=>!!i.type.__asyncLoader,Zg=i=>i.type.__isKeepAlive;function iy(i,e){Jg(i,"a",e)}function ry(i,e){Jg(i,"da",e)}function Jg(i,e,t=Lt){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(mc(e,n,t),t){let r=t.parent;for(;r&&r.parent;)Zg(r.parent.vnode)&&sy(n,e,t,r),r=r.parent}}function sy(i,e,t,n){const r=mc(e,i,n,!0);sh(()=>{Xf(n[e],r)},t)}function mc(i,e,t=Lt,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Ta(),la(t);const o=Zn(e,t,i,a);return Zr(),Ea(),o});return n?r.unshift(s):r.push(s),s}}const $i=i=>(e,t=Lt)=>(!go||i==="sp")&&mc(i,e,t),ay=$i("bm"),oy=$i("m"),ly=$i("bu"),cy=$i("u"),uy=$i("bum"),sh=$i("um"),fy=$i("sp"),hy=$i("rtg"),dy=$i("rtc");function py(i,e=Lt){mc("ec",i,e)}function Cr(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(Ta(),Zn(l,t,8,[i.el,o,i,e]),Ea())}}const Qg="components";function xt(i,e){return gy(Qg,i,!0,e)||i}const my=Symbol();function gy(i,e,t=!0,n=!1){const r=Kt||Lt;if(r){const s=r.type;if(i===Qg){const o=$y(s,!1);if(o&&(o===e||o===mi(e)||o===ac(mi(e))))return s}const a=xd(r[i]||s[i],e)||xd(r.appContext[i],e);return!a&&n?s:a}}function xd(i,e){return i&&(i[e]||i[mi(e)]||i[ac(mi(e))])}function aa(i,e,t,n){let r;const s=t&&t[n];if(De(i)||It(i)){r=new Array(i.length);for(let a=0,o=i.length;a<o;a++)r[a]=e(i[a],a,void 0,s&&s[a])}else if(typeof i=="number"){r=new Array(i);for(let a=0;a<i;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(At(i))if(i[Symbol.iterator])r=Array.from(i,(a,o)=>e(a,o,void 0,s&&s[o]));else{const a=Object.keys(i);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];r[o]=e(i[c],c,o,s&&s[o])}}else r=[];return t&&(t[n]=r),r}function gc(i,e,t={},n,r){if(Kt.isCE||Kt.parent&&Qa(Kt.parent)&&Kt.parent.isCE)return ke("slot",e==="default"?null:{name:e},n&&n());let s=i[e];s&&s._c&&(s._d=!1),ze();const a=s&&e_(s(t)),o=Cn(Nt,{key:t.key||`_${e}`},a||(n?n():[]),a&&i._===1?64:-2);return!r&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),s&&s._c&&(s._d=!0),o}function e_(i){return i.some(e=>Nl(e)?!(e.type===xr||e.type===Nt&&!e_(e.children)):!0)?i:null}const ju=i=>i?d_(i)?ch(i)||i.proxy:ju(i.parent):null,Dl=Zt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>ju(i.parent),$root:i=>ju(i.root),$emit:i=>i.emit,$options:i=>n_(i),$forceUpdate:i=>i.f||(i.f=()=>Hg(i.update)),$nextTick:i=>i.n||(i.n=Wu.bind(i.proxy)),$watch:i=>ny.bind(i)}),_y={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:a,type:o,appContext:l}=i;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(n!==lt&&qe(n,e))return a[e]=1,n[e];if(r!==lt&&qe(r,e))return a[e]=2,r[e];if((c=i.propsOptions[0])&&qe(c,e))return a[e]=3,s[e];if(t!==lt&&qe(t,e))return a[e]=4,t[e];$u&&(a[e]=0)}}const u=Dl[e];let f,h;if(u)return e==="$attrs"&&xn(i,"get",e),u(i);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==lt&&qe(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,qe(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return r!==lt&&qe(r,e)?(r[e]=t,!0):n!==lt&&qe(n,e)?(n[e]=t,!0):qe(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},a){let o;return!!t[a]||i!==lt&&qe(i,a)||e!==lt&&qe(e,a)||(o=s[0])&&qe(o,a)||qe(n,a)||qe(Dl,a)||qe(r.config.globalProperties,a)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:qe(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let $u=!0;function vy(i){const e=n_(i),t=i.proxy,n=i.ctx;$u=!1,e.beforeCreate&&yd(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:m,deactivated:d,beforeDestroy:_,beforeUnmount:v,destroyed:b,unmounted:M,render:y,renderTracked:E,renderTriggered:A,errorCaptured:x,serverPrefetch:S,expose:L,inheritAttrs:I,components:X,directives:W,filters:k}=e;if(c&&xy(c,n,null,i.appContext.config.unwrapInjectedRef),a)for(const z in a){const B=a[z];Fe(B)&&(n[z]=B.bind(t))}if(r){const z=r.call(t,t);At(z)&&(i.data=lc(z))}if($u=!0,s)for(const z in s){const B=s[z],G=Fe(B)?B.bind(t,t):Fe(B.get)?B.get.bind(t,t):Kn,J=!Fe(B)&&Fe(B.set)?B.set.bind(t):Kn,ue=Xt({get:G,set:J});Object.defineProperty(n,z,{enumerable:!0,configurable:!0,get:()=>ue.value,set:se=>ue.value=se})}if(o)for(const z in o)t_(o[z],n,t,z);if(l){const z=Fe(l)?l.call(t):l;Reflect.ownKeys(z).forEach(B=>{ty(B,z[B])})}u&&yd(u,i,"c");function U(z,B){De(B)?B.forEach(G=>z(G.bind(t))):B&&z(B.bind(t))}if(U(ay,f),U(oy,h),U(ly,p),U(cy,g),U(iy,m),U(ry,d),U(py,x),U(dy,E),U(hy,A),U(uy,v),U(sh,M),U(fy,S),De(L))if(L.length){const z=i.exposed||(i.exposed={});L.forEach(B=>{Object.defineProperty(z,B,{get:()=>t[B],set:G=>t[B]=G})})}else i.exposed||(i.exposed={});y&&i.render===Kn&&(i.render=y),I!=null&&(i.inheritAttrs=I),X&&(i.components=X),W&&(i.directives=W)}function xy(i,e,t=Kn,n=!1){De(i)&&(i=qu(i));for(const r in i){const s=i[r];let a;At(s)?"default"in s?a=gl(s.from||r,s.default,!0):a=gl(s.from||r):a=gl(s),ft(a)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function yd(i,e,t){Zn(De(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function t_(i,e,t,n){const r=n.includes(".")?Kg(t,n):()=>t[n];if(It(i)){const s=e[i];Fe(s)&&Js(r,s)}else if(Fe(i))Js(r,i.bind(t));else if(At(i))if(De(i))i.forEach(s=>t_(s,e,t,n));else{const s=Fe(i.handler)?i.handler.bind(t):e[i.handler];Fe(s)&&Js(r,s,i)}}function n_(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=i.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>Ol(l,c,a,!0)),Ol(l,e,a)),s.set(e,l),l}function Ol(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&Ol(i,s,t,!0),r&&r.forEach(a=>Ol(i,a,t,!0));for(const a in e)if(!(n&&a==="expose")){const o=yy[a]||t&&t[a];i[a]=o?o(i[a],e[a]):e[a]}return i}const yy={data:bd,props:Nr,emits:Nr,methods:Nr,computed:Nr,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:Nr,directives:Nr,watch:My,provide:bd,inject:by};function bd(i,e){return e?i?function(){return Zt(Fe(i)?i.call(this,this):i,Fe(e)?e.call(this,this):e)}:e:i}function by(i,e){return Nr(qu(i),qu(e))}function qu(i){if(De(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function qt(i,e){return i?[...new Set([].concat(i,e))]:e}function Nr(i,e){return i?Zt(Zt(Object.create(null),i),e):e}function My(i,e){if(!i)return e;if(!e)return i;const t=Zt(Object.create(null),i);for(const n in e)t[n]=qt(i[n],e[n]);return t}function Sy(i,e,t,n=!1){const r={},s={};Rl(s,_c,1),i.propsDefaults=Object.create(null),i_(i,e,r,s);for(const a in i.propsOptions[0])a in r||(r[a]=void 0);t?i.props=n?r:kx(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function wy(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:a}}=i,o=je(r),[l]=i.propsOptions;let c=!1;if((n||a>0)&&!(a&16)){if(a&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(fc(i.emitsOptions,h))continue;const p=e[h];if(l)if(qe(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const g=mi(h);r[g]=Xu(l,o,g,p,i,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{i_(i,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!qe(e,f)&&((u=wa(f))===f||!qe(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Xu(l,o,f,void 0,i,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!qe(e,f)&&!0)&&(delete s[f],c=!0)}c&&zi(i,"set","$attrs")}function i_(i,e,t,n){const[r,s]=i.propsOptions;let a=!1,o;if(e)for(let l in e){if(ml(l))continue;const c=e[l];let u;r&&qe(r,u=mi(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:fc(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,a=!0)}if(s){const l=je(t),c=o||lt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Xu(r,l,f,c[f],i,!qe(c,f))}}return a}function Xu(i,e,t,n,r,s){const a=i[t];if(a!=null){const o=qe(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&Fe(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(la(r),n=c[t]=l.call(null,e),Zr())}else n=l}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===wa(t))&&(n=!0))}return n}function r_(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,a={},o=[];let l=!1;if(!Fe(i)){const u=f=>{l=!0;const[h,p]=r_(f,e,!0);Zt(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return n.set(i,Ks),Ks;if(De(s))for(let u=0;u<s.length;u++){const f=mi(s[u]);Md(f)&&(a[f]=lt)}else if(s)for(const u in s){const f=mi(u);if(Md(f)){const h=s[u],p=a[f]=De(h)||Fe(h)?{type:h}:h;if(p){const g=Td(Boolean,p.type),m=Td(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||qe(p,"default"))&&o.push(f)}}}const c=[a,o];return n.set(i,c),c}function Md(i){return i[0]!=="$"}function Sd(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function wd(i,e){return Sd(i)===Sd(e)}function Td(i,e){return De(e)?e.findIndex(t=>wd(t,i)):Fe(e)&&wd(e,i)?0:-1}const s_=i=>i[0]==="_"||i==="$stable",ah=i=>De(i)?i.map(ri):[ri(i)],Ty=(i,e,t)=>{if(e._n)return e;const n=Ot((...r)=>ah(e(...r)),t);return n._c=!1,n},a_=(i,e,t)=>{const n=i._ctx;for(const r in i){if(s_(r))continue;const s=i[r];if(Fe(s))e[r]=Ty(r,s,n);else if(s!=null){const a=ah(s);e[r]=()=>a}}},o_=(i,e)=>{const t=ah(e);i.slots.default=()=>t},Ey=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=je(e),Rl(e,"_",t)):a_(e,i.slots={})}else i.slots={},e&&o_(i,e);Rl(i.slots,_c,1)},Ay=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,a=lt;if(n.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(Zt(r,e),!t&&o===1&&delete r._):(s=!e.$stable,a_(e,r)),a=e}else e&&(o_(i,e),a={default:1});if(s)for(const o in r)!s_(o)&&!(o in a)&&delete r[o]};function l_(){return{app:null,config:{isNativeTag:nx,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cy=0;function Py(i,e){return function(n,r=null){Fe(n)||(n=Object.assign({},n)),r!=null&&!At(r)&&(r=null);const s=l_(),a=new Set;let o=!1;const l=s.app={_uid:Cy++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Xy,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Fe(c.install)?(a.add(c),c.install(l,...u)):Fe(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=ke(n,r);return h.appContext=s,u&&e?e(h,c):i(h,c,f),o=!0,l._container=c,c.__vue_app__=l,ch(h.component)||h.component.proxy}},unmount(){o&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Yu(i,e,t,n,r=!1){if(De(i)){i.forEach((h,p)=>Yu(h,e&&(De(e)?e[p]:e),t,n,r));return}if(Qa(n)&&!r)return;const s=n.shapeFlag&4?ch(n.component)||n.component.proxy:n.el,a=r?null:s,{i:o,r:l}=i,c=e&&e.r,u=o.refs===lt?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(It(c)?(u[c]=null,qe(f,c)&&(f[c]=null)):ft(c)&&(c.value=null)),Fe(l))pr(l,o,12,[a,u]);else{const h=It(l),p=ft(l);if(h||p){const g=()=>{if(i.f){const m=h?u[l]:l.value;r?De(m)&&Xf(m,s):De(m)?m.includes(s)||m.push(s):h?(u[l]=[s],qe(f,l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else h?(u[l]=a,qe(f,l)&&(f[l]=a)):p&&(l.value=a,i.k&&(u[i.k]=a))};a?(g.id=-1,nn(g,t)):g()}}}const nn=ey;function Ry(i){return Ly(i)}function Ly(i,e){const t=cx();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Kn,cloneNode:g,insertStaticContent:m}=i,d=(P,D,$,ee=null,te=null,ae=null,le=!1,ce=null,he=!!D.dynamicChildren)=>{if(P===D)return;P&&!Na(P,D)&&(ee=Ee(P),oe(P,te,ae,!0),P=null),D.patchFlag===-2&&(he=!1,D.dynamicChildren=null);const{type:T,ref:w,shapeFlag:F}=D;switch(T){case oh:_(P,D,$,ee);break;case xr:v(P,D,$,ee);break;case _l:P==null&&b(D,$,ee,le);break;case Nt:W(P,D,$,ee,te,ae,le,ce,he);break;default:F&1?E(P,D,$,ee,te,ae,le,ce,he):F&6?k(P,D,$,ee,te,ae,le,ce,he):(F&64||F&128)&&T.process(P,D,$,ee,te,ae,le,ce,he,xe)}w!=null&&te&&Yu(w,P&&P.ref,ae,D||P,!D)},_=(P,D,$,ee)=>{if(P==null)n(D.el=o(D.children),$,ee);else{const te=D.el=P.el;D.children!==P.children&&c(te,D.children)}},v=(P,D,$,ee)=>{P==null?n(D.el=l(D.children||""),$,ee):D.el=P.el},b=(P,D,$,ee)=>{[P.el,P.anchor]=m(P.children,D,$,ee,P.el,P.anchor)},M=({el:P,anchor:D},$,ee)=>{let te;for(;P&&P!==D;)te=h(P),n(P,$,ee),P=te;n(D,$,ee)},y=({el:P,anchor:D})=>{let $;for(;P&&P!==D;)$=h(P),r(P),P=$;r(D)},E=(P,D,$,ee,te,ae,le,ce,he)=>{le=le||D.type==="svg",P==null?A(D,$,ee,te,ae,le,ce,he):L(P,D,te,ae,le,ce,he)},A=(P,D,$,ee,te,ae,le,ce)=>{let he,T;const{type:w,props:F,shapeFlag:j,transition:Z,patchFlag:re,dirs:ve}=P;if(P.el&&g!==void 0&&re===-1)he=P.el=g(P.el);else{if(he=P.el=a(P.type,ae,F&&F.is,F),j&8?u(he,P.children):j&16&&S(P.children,he,null,ee,te,ae&&w!=="foreignObject",le,ce),ve&&Cr(P,null,ee,"created"),F){for(const Y in F)Y!=="value"&&!ml(Y)&&s(he,Y,null,F[Y],ae,P.children,ee,te,Ne);"value"in F&&s(he,"value",null,F.value),(T=F.onVnodeBeforeMount)&&ni(T,ee,P)}x(he,P,P.scopeId,le,ee)}ve&&Cr(P,null,ee,"beforeMount");const C=(!te||te&&!te.pendingBranch)&&Z&&!Z.persisted;C&&Z.beforeEnter(he),n(he,D,$),((T=F&&F.onVnodeMounted)||C||ve)&&nn(()=>{T&&ni(T,ee,P),C&&Z.enter(he),ve&&Cr(P,null,ee,"mounted")},te)},x=(P,D,$,ee,te)=>{if($&&p(P,$),ee)for(let ae=0;ae<ee.length;ae++)p(P,ee[ae]);if(te){let ae=te.subTree;if(D===ae){const le=te.vnode;x(P,le,le.scopeId,le.slotScopeIds,te.parent)}}},S=(P,D,$,ee,te,ae,le,ce,he=0)=>{for(let T=he;T<P.length;T++){const w=P[T]=ce?lr(P[T]):ri(P[T]);d(null,w,D,$,ee,te,ae,le,ce)}},L=(P,D,$,ee,te,ae,le)=>{const ce=D.el=P.el;let{patchFlag:he,dynamicChildren:T,dirs:w}=D;he|=P.patchFlag&16;const F=P.props||lt,j=D.props||lt;let Z;$&&Pr($,!1),(Z=j.onVnodeBeforeUpdate)&&ni(Z,$,D,P),w&&Cr(D,P,$,"beforeUpdate"),$&&Pr($,!0);const re=te&&D.type!=="foreignObject";if(T?I(P.dynamicChildren,T,ce,$,ee,re,ae):le||G(P,D,ce,null,$,ee,re,ae,!1),he>0){if(he&16)X(ce,D,F,j,$,ee,te);else if(he&2&&F.class!==j.class&&s(ce,"class",null,j.class,te),he&4&&s(ce,"style",F.style,j.style,te),he&8){const ve=D.dynamicProps;for(let C=0;C<ve.length;C++){const Y=ve[C],fe=F[Y],pe=j[Y];(pe!==fe||Y==="value")&&s(ce,Y,fe,pe,te,P.children,$,ee,Ne)}}he&1&&P.children!==D.children&&u(ce,D.children)}else!le&&T==null&&X(ce,D,F,j,$,ee,te);((Z=j.onVnodeUpdated)||w)&&nn(()=>{Z&&ni(Z,$,D,P),w&&Cr(D,P,$,"updated")},ee)},I=(P,D,$,ee,te,ae,le)=>{for(let ce=0;ce<D.length;ce++){const he=P[ce],T=D[ce],w=he.el&&(he.type===Nt||!Na(he,T)||he.shapeFlag&70)?f(he.el):$;d(he,T,w,null,ee,te,ae,le,!0)}},X=(P,D,$,ee,te,ae,le)=>{if($!==ee){for(const ce in ee){if(ml(ce))continue;const he=ee[ce],T=$[ce];he!==T&&ce!=="value"&&s(P,ce,T,he,le,D.children,te,ae,Ne)}if($!==lt)for(const ce in $)!ml(ce)&&!(ce in ee)&&s(P,ce,$[ce],null,le,D.children,te,ae,Ne);"value"in ee&&s(P,"value",$.value,ee.value)}},W=(P,D,$,ee,te,ae,le,ce,he)=>{const T=D.el=P?P.el:o(""),w=D.anchor=P?P.anchor:o("");let{patchFlag:F,dynamicChildren:j,slotScopeIds:Z}=D;Z&&(ce=ce?ce.concat(Z):Z),P==null?(n(T,$,ee),n(w,$,ee),S(D.children,$,w,te,ae,le,ce,he)):F>0&&F&64&&j&&P.dynamicChildren?(I(P.dynamicChildren,j,$,te,ae,le,ce),(D.key!=null||te&&D===te.subTree)&&c_(P,D,!0)):G(P,D,$,w,te,ae,le,ce,he)},k=(P,D,$,ee,te,ae,le,ce,he)=>{D.slotScopeIds=ce,P==null?D.shapeFlag&512?te.ctx.activate(D,$,ee,le,he):H(D,$,ee,te,ae,le,he):U(P,D,he)},H=(P,D,$,ee,te,ae,le)=>{const ce=P.component=Gy(P,ee,te);if(Zg(P)&&(ce.ctx.renderer=xe),Vy(ce),ce.asyncDep){if(te&&te.registerDep(ce,z),!P.el){const he=ce.subTree=ke(xr);v(null,he,D,$)}return}z(ce,P,D,$,te,ae,le)},U=(P,D,$)=>{const ee=D.component=P.component;if(Zx(P,D,$))if(ee.asyncDep&&!ee.asyncResolved){B(ee,D,$);return}else ee.next=D,jx(ee.update),ee.update();else D.el=P.el,ee.vnode=D},z=(P,D,$,ee,te,ae,le)=>{const ce=()=>{if(P.isMounted){let{next:w,bu:F,u:j,parent:Z,vnode:re}=P,ve=w,C;Pr(P,!1),w?(w.el=re.el,B(P,w,le)):w=re,F&&zc(F),(C=w.props&&w.props.onVnodeBeforeUpdate)&&ni(C,Z,w,re),Pr(P,!0);const Y=Uc(P),fe=P.subTree;P.subTree=Y,d(fe,Y,f(fe.el),Ee(fe),P,te,ae),w.el=Y.el,ve===null&&Jx(P,Y.el),j&&nn(j,te),(C=w.props&&w.props.onVnodeUpdated)&&nn(()=>ni(C,Z,w,re),te)}else{let w;const{el:F,props:j}=D,{bm:Z,m:re,parent:ve}=P,C=Qa(D);if(Pr(P,!1),Z&&zc(Z),!C&&(w=j&&j.onVnodeBeforeMount)&&ni(w,ve,D),Pr(P,!0),F&&Ie){const Y=()=>{P.subTree=Uc(P),Ie(F,P.subTree,P,te,null)};C?D.type.__asyncLoader().then(()=>!P.isUnmounted&&Y()):Y()}else{const Y=P.subTree=Uc(P);d(null,Y,$,ee,P,te,ae),D.el=Y.el}if(re&&nn(re,te),!C&&(w=j&&j.onVnodeMounted)){const Y=D;nn(()=>ni(w,ve,Y),te)}(D.shapeFlag&256||ve&&Qa(ve.vnode)&&ve.vnode.shapeFlag&256)&&P.a&&nn(P.a,te),P.isMounted=!0,D=$=ee=null}},he=P.effect=new Jf(ce,()=>Hg(T),P.scope),T=P.update=()=>he.run();T.id=P.uid,Pr(P,!0),T()},B=(P,D,$)=>{D.component=P;const ee=P.vnode.props;P.vnode=D,P.next=null,wy(P,D.props,ee,$),Ay(P,D.children,$),Ta(),uc(void 0,P.update),Ea()},G=(P,D,$,ee,te,ae,le,ce,he=!1)=>{const T=P&&P.children,w=P?P.shapeFlag:0,F=D.children,{patchFlag:j,shapeFlag:Z}=D;if(j>0){if(j&128){ue(T,F,$,ee,te,ae,le,ce,he);return}else if(j&256){J(T,F,$,ee,te,ae,le,ce,he);return}}Z&8?(w&16&&Ne(T,te,ae),F!==T&&u($,F)):w&16?Z&16?ue(T,F,$,ee,te,ae,le,ce,he):Ne(T,te,ae,!0):(w&8&&u($,""),Z&16&&S(F,$,ee,te,ae,le,ce,he))},J=(P,D,$,ee,te,ae,le,ce,he)=>{P=P||Ks,D=D||Ks;const T=P.length,w=D.length,F=Math.min(T,w);let j;for(j=0;j<F;j++){const Z=D[j]=he?lr(D[j]):ri(D[j]);d(P[j],Z,$,null,te,ae,le,ce,he)}T>w?Ne(P,te,ae,!0,!1,F):S(D,$,ee,te,ae,le,ce,he,F)},ue=(P,D,$,ee,te,ae,le,ce,he)=>{let T=0;const w=D.length;let F=P.length-1,j=w-1;for(;T<=F&&T<=j;){const Z=P[T],re=D[T]=he?lr(D[T]):ri(D[T]);if(Na(Z,re))d(Z,re,$,null,te,ae,le,ce,he);else break;T++}for(;T<=F&&T<=j;){const Z=P[F],re=D[j]=he?lr(D[j]):ri(D[j]);if(Na(Z,re))d(Z,re,$,null,te,ae,le,ce,he);else break;F--,j--}if(T>F){if(T<=j){const Z=j+1,re=Z<w?D[Z].el:ee;for(;T<=j;)d(null,D[T]=he?lr(D[T]):ri(D[T]),$,re,te,ae,le,ce,he),T++}}else if(T>j)for(;T<=F;)oe(P[T],te,ae,!0),T++;else{const Z=T,re=T,ve=new Map;for(T=re;T<=j;T++){const Ge=D[T]=he?lr(D[T]):ri(D[T]);Ge.key!=null&&ve.set(Ge.key,T)}let C,Y=0;const fe=j-re+1;let pe=!1,me=0;const Te=new Array(fe);for(T=0;T<fe;T++)Te[T]=0;for(T=Z;T<=F;T++){const Ge=P[T];if(Y>=fe){oe(Ge,te,ae,!0);continue}let O;if(Ge.key!=null)O=ve.get(Ge.key);else for(C=re;C<=j;C++)if(Te[C-re]===0&&Na(Ge,D[C])){O=C;break}O===void 0?oe(Ge,te,ae,!0):(Te[O-re]=T+1,O>=me?me=O:pe=!0,d(Ge,D[O],$,null,te,ae,le,ce,he),Y++)}const Be=pe?Iy(Te):Ks;for(C=Be.length-1,T=fe-1;T>=0;T--){const Ge=re+T,O=D[Ge],de=Ge+1<w?D[Ge+1].el:ee;Te[T]===0?d(null,O,$,de,te,ae,le,ce,he):pe&&(C<0||T!==Be[C]?se(O,$,de,2):C--)}}},se=(P,D,$,ee,te=null)=>{const{el:ae,type:le,transition:ce,children:he,shapeFlag:T}=P;if(T&6){se(P.component.subTree,D,$,ee);return}if(T&128){P.suspense.move(D,$,ee);return}if(T&64){le.move(P,D,$,xe);return}if(le===Nt){n(ae,D,$);for(let F=0;F<he.length;F++)se(he[F],D,$,ee);n(P.anchor,D,$);return}if(le===_l){M(P,D,$);return}if(ee!==2&&T&1&&ce)if(ee===0)ce.beforeEnter(ae),n(ae,D,$),nn(()=>ce.enter(ae),te);else{const{leave:F,delayLeave:j,afterLeave:Z}=ce,re=()=>n(ae,D,$),ve=()=>{F(ae,()=>{re(),Z&&Z()})};j?j(ae,re,ve):ve()}else n(ae,D,$)},oe=(P,D,$,ee=!1,te=!1)=>{const{type:ae,props:le,ref:ce,children:he,dynamicChildren:T,shapeFlag:w,patchFlag:F,dirs:j}=P;if(ce!=null&&Yu(ce,null,$,P,!0),w&256){D.ctx.deactivate(P);return}const Z=w&1&&j,re=!Qa(P);let ve;if(re&&(ve=le&&le.onVnodeBeforeUnmount)&&ni(ve,D,P),w&6)ne(P.component,$,ee);else{if(w&128){P.suspense.unmount($,ee);return}Z&&Cr(P,null,D,"beforeUnmount"),w&64?P.type.remove(P,D,$,te,xe,ee):T&&(ae!==Nt||F>0&&F&64)?Ne(T,D,$,!1,!0):(ae===Nt&&F&384||!te&&w&16)&&Ne(he,D,$),ee&&_e(P)}(re&&(ve=le&&le.onVnodeUnmounted)||Z)&&nn(()=>{ve&&ni(ve,D,P),Z&&Cr(P,null,D,"unmounted")},$)},_e=P=>{const{type:D,el:$,anchor:ee,transition:te}=P;if(D===Nt){Se($,ee);return}if(D===_l){y(P);return}const ae=()=>{r($),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(P.shapeFlag&1&&te&&!te.persisted){const{leave:le,delayLeave:ce}=te,he=()=>le($,ae);ce?ce(P.el,ae,he):he()}else ae()},Se=(P,D)=>{let $;for(;P!==D;)$=h(P),r(P),P=$;r(D)},ne=(P,D,$)=>{const{bum:ee,scope:te,update:ae,subTree:le,um:ce}=P;ee&&zc(ee),te.stop(),ae&&(ae.active=!1,oe(le,P,D,$)),ce&&nn(ce,D),nn(()=>{P.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},Ne=(P,D,$,ee=!1,te=!1,ae=0)=>{for(let le=ae;le<P.length;le++)oe(P[le],D,$,ee,te)},Ee=P=>P.shapeFlag&6?Ee(P.component.subTree):P.shapeFlag&128?P.suspense.next():h(P.anchor||P.el),Ae=(P,D,$)=>{P==null?D._vnode&&oe(D._vnode,null,null,!0):d(D._vnode||null,P,D,null,null,null,$),$g(),D._vnode=P},xe={p:d,um:oe,m:se,r:_e,mt:H,mc:S,pc:G,pbc:I,n:Ee,o:i};let Xe,Ie;return e&&([Xe,Ie]=e(xe)),{render:Ae,hydrate:Xe,createApp:Py(Ae,Xe)}}function Pr({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function c_(i,e,t=!1){const n=i.children,r=e.children;if(De(n)&&De(r))for(let s=0;s<n.length;s++){const a=n[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=lr(r[s]),o.el=a.el),t||c_(a,o))}}function Iy(i){const e=i.slice(),t=[0];let n,r,s,a,o;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,i[t[o]]<c?s=o+1:a=o;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Dy=i=>i.__isTeleport,Nt=Symbol(void 0),oh=Symbol(void 0),xr=Symbol(void 0),_l=Symbol(void 0),eo=[];let $n=null;function ze(i=!1){eo.push($n=i?null:[])}function Oy(){eo.pop(),$n=eo[eo.length-1]||null}let mo=1;function Ed(i){mo+=i}function u_(i){return i.dynamicChildren=mo>0?$n||Ks:null,Oy(),mo>0&&$n&&$n.push(i),i}function st(i,e,t,n,r,s){return u_(Ce(i,e,t,n,r,s,!0))}function Cn(i,e,t,n,r){return u_(ke(i,e,t,n,r,!0))}function Nl(i){return i?i.__v_isVNode===!0:!1}function Na(i,e){return i.type===e.type&&i.key===e.key}const _c="__vInternal",f_=({key:i})=>i!=null?i:null,vl=({ref:i,ref_key:e,ref_for:t})=>i!=null?It(i)||ft(i)||Fe(i)?{i:Kt,r:i,k:e,f:!!t}:i:null;function Ce(i,e=null,t=null,n=0,r=null,s=i===Nt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&f_(e),ref:e&&vl(e),scopeId:hc,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null};return o?(lh(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=It(t)?8:16),mo>0&&!a&&$n&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&$n.push(l),l}const ke=Ny;function Ny(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===my)&&(i=xr),Nl(i)){const o=oa(i,e,!0);return t&&lh(o,t),mo>0&&!s&&$n&&(o.shapeFlag&6?$n[$n.indexOf(i)]=o:$n.push(o)),o.patchFlag|=-2,o}if(qy(i)&&(i=i.__vccOpts),e){e=ky(e);let{class:o,style:l}=e;o&&!It(o)&&(e.class=$f(o)),At(l)&&(Fg(l)&&!De(l)&&(l=Zt({},l)),e.style=nc(l))}const a=It(i)?1:Qx(i)?128:Dy(i)?64:At(i)?4:Fe(i)?2:0;return Ce(i,e,t,n,r,a,s,!0)}function ky(i){return i?Fg(i)||_c in i?Zt({},i):i:null}function oa(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:a}=i,o=e?zy(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:o,key:o&&f_(o),ref:e&&e.ref?t&&r?De(r)?r.concat(vl(e)):[r,vl(e)]:vl(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Nt?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&oa(i.ssContent),ssFallback:i.ssFallback&&oa(i.ssFallback),el:i.el,anchor:i.anchor}}function wr(i=" ",e=0){return ke(oh,null,i,e)}function Fy(i,e){const t=ke(_l,null,i);return t.staticCount=e,t}function ai(i="",e=!1){return e?(ze(),Cn(xr,null,i)):ke(xr,null,i)}function ri(i){return i==null||typeof i=="boolean"?ke(xr):De(i)?ke(Nt,null,i.slice()):typeof i=="object"?lr(i):ke(oh,null,String(i))}function lr(i){return i.el===null||i.memo?i:oa(i)}function lh(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(De(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),lh(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(_c in e)?e._ctx=Kt:r===3&&Kt&&(Kt.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:Kt},t=32):(e=String(e),n&64?(t=16,e=[wr(e)]):t=8);i.children=e,i.shapeFlag|=t}function zy(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=$f([e.class,n.class]));else if(r==="style")e.style=nc([e.style,n.style]);else if(ic(r)){const s=e[r],a=n[r];a&&s!==a&&!(De(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=n[r])}return e}function ni(i,e,t,n=null){Zn(i,e,7,[t,n])}const Uy=l_();let By=0;function Gy(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||Uy,s={uid:By++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new wg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:r_(n,r),emitsOptions:Xg(n,r),emit:null,emitted:null,propsDefaults:lt,inheritAttrs:n.inheritAttrs,ctx:lt,data:lt,props:lt,attrs:lt,slots:lt,refs:lt,setupState:lt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Xx.bind(null,s),i.ce&&i.ce(s),s}let Lt=null;const h_=()=>Lt||Kt,la=i=>{Lt=i,i.scope.on()},Zr=()=>{Lt&&Lt.scope.off(),Lt=null};function d_(i){return i.vnode.shapeFlag&4}let go=!1;function Vy(i,e=!1){go=e;const{props:t,children:n}=i.vnode,r=d_(i);Sy(i,t,r,e),Ey(i,n);const s=r?Hy(i,e):void 0;return go=!1,s}function Hy(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=Hn(new Proxy(i.ctx,_y));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?jy(i):null;la(i),Ta();const s=pr(n,i,0,[i.props,r]);if(Ea(),Zr(),bg(s)){if(s.then(Zr,Zr),e)return s.then(a=>{Ad(i,a,e)}).catch(a=>{cc(a,i,0)});i.asyncDep=s}else Ad(i,s,e)}else p_(i,e)}function Ad(i,e,t){Fe(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:At(e)&&(i.setupState=Gg(e)),p_(i,t)}let Cd;function p_(i,e,t){const n=i.type;if(!i.render){if(!e&&Cd&&!n.render){const r=n.template;if(r){const{isCustomElement:s,compilerOptions:a}=i.appContext.config,{delimiters:o,compilerOptions:l}=n,c=Zt(Zt({isCustomElement:s,delimiters:o},a),l);n.render=Cd(r,c)}}i.render=n.render||Kn}la(i),Ta(),vy(i),Ea(),Zr()}function Wy(i){return new Proxy(i.attrs,{get(e,t){return xn(i,"get","$attrs"),e[t]}})}function jy(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=Wy(i))},slots:i.slots,emit:i.emit,expose:e}}function ch(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Gg(Hn(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Dl)return Dl[t](i)}}))}function $y(i,e=!0){return Fe(i)?i.displayName||i.name:i.name||e&&i.__name}function qy(i){return Fe(i)&&"__vccOpts"in i}const Xt=(i,e)=>Vx(i,e,go);function uh(i,e,t){const n=arguments.length;return n===2?At(e)&&!De(e)?Nl(e)?ke(i,null,[e]):ke(i,e):ke(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Nl(t)&&(t=[t]),ke(i,e,t))}const Xy="3.2.37",Yy="http://www.w3.org/2000/svg",Gr=typeof document<"u"?document:null,Pd=Gr&&Gr.createElement("template"),Ky={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?Gr.createElementNS(Yy,i):Gr.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Gr.createTextNode(i),createComment:i=>Gr.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Gr.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},cloneNode(i){const e=i.cloneNode(!0);return"_value"in i&&(e._value=i._value),e},insertStaticContent(i,e,t,n,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Pd.innerHTML=n?`<svg>${i}</svg>`:i;const o=Pd.content;if(n){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Zy(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function Jy(i,e,t){const n=i.style,r=It(t);if(t&&!r){for(const s in t)Ku(n,s,t[s]);if(e&&!It(e))for(const s in e)t[s]==null&&Ku(n,s,"")}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const Rd=/\s*!important$/;function Ku(i,e,t){if(De(t))t.forEach(n=>Ku(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=Qy(i,e);Rd.test(t)?i.setProperty(wa(n),t.replace(Rd,""),"important"):i[n]=t}}const Ld=["Webkit","Moz","ms"],Bc={};function Qy(i,e){const t=Bc[e];if(t)return t;let n=mi(e);if(n!=="filter"&&n in i)return Bc[e]=n;n=ac(n);for(let r=0;r<Ld.length;r++){const s=Ld[r]+n;if(s in i)return Bc[e]=s}return e}const Id="http://www.w3.org/1999/xlink";function eb(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Id,e.slice(6,e.length)):i.setAttributeNS(Id,e,t);else{const s=Jv(e);t==null||s&&!vg(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function tb(i,e,t,n,r,s,a){if(e==="innerHTML"||e==="textContent"){n&&a(n,r,s),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t==null?"":t;(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=vg(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(e)}const[m_,nb]=(()=>{let i=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(i=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[i,e]})();let Zu=0;const ib=Promise.resolve(),rb=()=>{Zu=0},sb=()=>Zu||(ib.then(rb),Zu=m_());function ab(i,e,t,n){i.addEventListener(e,t,n)}function ob(i,e,t,n){i.removeEventListener(e,t,n)}function lb(i,e,t,n,r=null){const s=i._vei||(i._vei={}),a=s[e];if(n&&a)a.value=n;else{const[o,l]=cb(e);if(n){const c=s[e]=ub(n,r);ab(i,o,c,l)}else a&&(ob(i,o,a,l),s[e]=void 0)}}const Dd=/(?:Once|Passive|Capture)$/;function cb(i){let e;if(Dd.test(i)){e={};let t;for(;t=i.match(Dd);)i=i.slice(0,i.length-t[0].length),e[t[0].toLowerCase()]=!0}return[wa(i.slice(2)),e]}function ub(i,e){const t=n=>{const r=n.timeStamp||m_();(nb||r>=t.attached-1)&&Zn(fb(n,t.value),e,5,[n])};return t.value=i,t.attached=sb(),t}function fb(i,e){if(De(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Od=/^on[a-z]/,hb=(i,e,t,n,r=!1,s,a,o,l)=>{e==="class"?Zy(i,n,r):e==="style"?Jy(i,t,n):ic(e)?qf(e)||lb(i,e,t,n,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):db(i,e,n,r))?tb(i,e,n,s,a,o,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),eb(i,e,n,r))};function db(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Od.test(e)&&Fe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Od.test(e)&&It(t)?!1:e in i}const pb=["ctrl","shift","alt","meta"],mb={stop:i=>i.stopPropagation(),prevent:i=>i.preventDefault(),self:i=>i.target!==i.currentTarget,ctrl:i=>!i.ctrlKey,shift:i=>!i.shiftKey,alt:i=>!i.altKey,meta:i=>!i.metaKey,left:i=>"button"in i&&i.button!==0,middle:i=>"button"in i&&i.button!==1,right:i=>"button"in i&&i.button!==2,exact:(i,e)=>pb.some(t=>i[`${t}Key`]&&!e.includes(t))},oi=(i,e)=>(t,...n)=>{for(let r=0;r<e.length;r++){const s=mb[e[r]];if(s&&s(t,e))return}return i(t,...n)},gb=Zt({patchProp:hb},Ky);let Nd;function _b(){return Nd||(Nd=Ry(gb))}const vb=(...i)=>{const e=_b().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=xb(n);if(!r)return;const s=e._component;!Fe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function xb(i){return It(i)?document.querySelector(i):i}var yb=!1;function Go(i,e,t){return Array.isArray(i)?(i.length=Math.max(i.length,e),i.splice(e,1,t),t):(i[e]=t,t)}function Gc(i,e){if(Array.isArray(i)){i.splice(e,1);return}delete i[e]}function bb(){return g_().__VUE_DEVTOOLS_GLOBAL_HOOK__}function g_(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Mb=typeof Proxy=="function",Sb="devtools-plugin:setup",wb="plugin:settings:set";let Ms,Ju;function Tb(){var i;return Ms!==void 0||(typeof window<"u"&&window.performance?(Ms=!0,Ju=window.performance):typeof global<"u"&&((i=global.perf_hooks)===null||i===void 0?void 0:i.performance)?(Ms=!0,Ju=global.perf_hooks.performance):Ms=!1),Ms}function Eb(){return Tb()?Ju.now():Date.now()}class Ab{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const a in e.settings){const o=e.settings[a];n[a]=o.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},n);try{const a=localStorage.getItem(r),o=JSON.parse(a);Object.assign(s,o)}catch{}this.fallbacks={getSettings(){return s},setSettings(a){try{localStorage.setItem(r,JSON.stringify(a))}catch{}s=a},now(){return Eb()}},t&&t.on(wb,(a,o)=>{a===this.plugin.id&&this.fallbacks.setSettings(o)}),this.proxiedOn=new Proxy({},{get:(a,o)=>this.target?this.target.on[o]:(...l)=>{this.onQueue.push({method:o,args:l})}}),this.proxiedTarget=new Proxy({},{get:(a,o)=>this.target?this.target[o]:o==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(o)?(...l)=>(this.targetQueue.push({method:o,args:l,resolve:()=>{}}),this.fallbacks[o](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:o,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function __(i,e){const t=i,n=g_(),r=bb(),s=Mb&&t.enableEarlyProxy;if(r&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))r.emit(Sb,i,e);else{const a=s?new Ab(t,r):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:a}),a&&e(a.proxiedTarget)}}/*!
  * pinia v2.0.20
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Qu;const _o=i=>Qu=i,v_=Symbol("pinia");function ss(i){return i&&typeof i=="object"&&Object.prototype.toString.call(i)==="[object Object]"&&typeof i.toJSON!="function"}var fi;(function(i){i.direct="direct",i.patchObject="patch object",i.patchFunction="patch function"})(fi||(fi={}));const Wr=typeof window<"u",kd=Wr,Fd=(()=>typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null})();function Cb(i,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(i.type)?new Blob([String.fromCharCode(65279),i],{type:i.type}):i}function fh(i,e,t){const n=new XMLHttpRequest;n.open("GET",i),n.responseType="blob",n.onload=function(){b_(n.response,e,t)},n.onerror=function(){console.error("could not download file")},n.send()}function x_(i){const e=new XMLHttpRequest;e.open("HEAD",i,!1);try{e.send()}catch{}return e.status>=200&&e.status<=299}function xl(i){try{i.dispatchEvent(new MouseEvent("click"))}catch{const t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),i.dispatchEvent(t)}}const yl=typeof navigator=="object"?navigator:{userAgent:""},y_=(()=>/Macintosh/.test(yl.userAgent)&&/AppleWebKit/.test(yl.userAgent)&&!/Safari/.test(yl.userAgent))(),b_=Wr?typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype&&!y_?Pb:"msSaveOrOpenBlob"in yl?Rb:Lb:()=>{};function Pb(i,e="download",t){const n=document.createElement("a");n.download=e,n.rel="noopener",typeof i=="string"?(n.href=i,n.origin!==location.origin?x_(n.href)?fh(i,e,t):(n.target="_blank",xl(n)):xl(n)):(n.href=URL.createObjectURL(i),setTimeout(function(){URL.revokeObjectURL(n.href)},4e4),setTimeout(function(){xl(n)},0))}function Rb(i,e="download",t){if(typeof i=="string")if(x_(i))fh(i,e,t);else{const n=document.createElement("a");n.href=i,n.target="_blank",setTimeout(function(){xl(n)})}else navigator.msSaveOrOpenBlob(Cb(i,t),e)}function Lb(i,e,t,n){if(n=n||open("","_blank"),n&&(n.document.title=n.document.body.innerText="downloading..."),typeof i=="string")return fh(i,e,t);const r=i.type==="application/octet-stream",s=/constructor/i.test(String(Fd.HTMLElement))||"safari"in Fd,a=/CriOS\/[\d]+/.test(navigator.userAgent);if((a||r&&s||y_)&&typeof FileReader<"u"){const o=new FileReader;o.onloadend=function(){let l=o.result;if(typeof l!="string")throw n=null,new Error("Wrong reader.result type");l=a?l:l.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=l:location.assign(l),n=null},o.readAsDataURL(i)}else{const o=URL.createObjectURL(i);n?n.location.assign(o):location.href=o,n=null,setTimeout(function(){URL.revokeObjectURL(o)},4e4)}}function Rt(i,e){const t="\u{1F34D} "+i;typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(t,e):e==="error"?console.error(t):e==="warn"?console.warn(t):console.log(t)}function hh(i){return"_a"in i&&"install"in i}function M_(){if(!("clipboard"in navigator))return Rt("Your browser doesn't support the Clipboard API","error"),!0}function S_(i){return i instanceof Error&&i.message.toLowerCase().includes("document is not focused")?(Rt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0):!1}async function Ib(i){if(!M_())try{await navigator.clipboard.writeText(JSON.stringify(i.state.value)),Rt("Global state copied to clipboard.")}catch(e){if(S_(e))return;Rt("Failed to serialize the state. Check the console for more details.","error"),console.error(e)}}async function Db(i){if(!M_())try{i.state.value=JSON.parse(await navigator.clipboard.readText()),Rt("Global state pasted from clipboard.")}catch(e){if(S_(e))return;Rt("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(e)}}async function Ob(i){try{b_(new Blob([JSON.stringify(i.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(e){Rt("Failed to export the state as JSON. Check the console for more details.","error"),console.error(e)}}let yi;function Nb(){yi||(yi=document.createElement("input"),yi.type="file",yi.accept=".json");function i(){return new Promise((e,t)=>{yi.onchange=async()=>{const n=yi.files;if(!n)return e(null);const r=n.item(0);return e(r?{text:await r.text(),file:r}:null)},yi.oncancel=()=>e(null),yi.onerror=t,yi.click()})}return i}async function kb(i){try{const t=await(await Nb())();if(!t)return;const{text:n,file:r}=t;i.state.value=JSON.parse(n),Rt(`Global state imported from "${r.name}".`)}catch(e){Rt("Failed to export the state as JSON. Check the console for more details.","error"),console.error(e)}}function Gn(i){return{_custom:{display:i}}}const w_="\u{1F34D} Pinia (root)",ef="_root";function Fb(i){return hh(i)?{id:ef,label:w_}:{id:i.$id,label:i.$id}}function zb(i){if(hh(i)){const t=Array.from(i._s.keys()),n=i._s;return{state:t.map(s=>({editable:!0,key:s,value:i.state.value[s]})),getters:t.filter(s=>n.get(s)._getters).map(s=>{const a=n.get(s);return{editable:!1,key:s,value:a._getters.reduce((o,l)=>(o[l]=a[l],o),{})}})}}const e={state:Object.keys(i.$state).map(t=>({editable:!0,key:t,value:i.$state[t]}))};return i._getters&&i._getters.length&&(e.getters=i._getters.map(t=>({editable:!1,key:t,value:i[t]}))),i._customProperties.size&&(e.customProperties=Array.from(i._customProperties).map(t=>({editable:!0,key:t,value:i[t]}))),e}function Ub(i){return i?Array.isArray(i)?i.reduce((e,t)=>(e.keys.push(t.key),e.operations.push(t.type),e.oldValue[t.key]=t.oldValue,e.newValue[t.key]=t.newValue,e),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:Gn(i.type),key:Gn(i.key),oldValue:i.oldValue,newValue:i.newValue}:{}}function Bb(i){switch(i){case fi.direct:return"mutation";case fi.patchFunction:return"$patch";case fi.patchObject:return"$patch";default:return"unknown"}}let Ws=!0;const bl=[],kr="pinia:mutations",Vt="pinia",kl=i=>"\u{1F34D} "+i;function Gb(i,e){__({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:bl,app:i},t=>{typeof t.now!="function"&&Rt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),t.addTimelineLayer({id:kr,label:"Pinia \u{1F34D}",color:15064968}),t.addInspector({id:Vt,label:"Pinia \u{1F34D}",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{Ib(e)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await Db(e),t.sendInspectorTree(Vt),t.sendInspectorState(Vt)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{Ob(e)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await kb(e),t.sendInspectorTree(Vt),t.sendInspectorState(Vt)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:"Reset the state (option store only)",action:n=>{const r=e._s.get(n);r?r._isOptionsAPI?(r.$reset(),Rt(`Store "${n}" reset.`)):Rt(`Cannot reset "${n}" store because it's a setup store.`,"warn"):Rt(`Cannot reset "${n}" store because it wasn't found.`,"warn")}}]}),t.on.inspectComponent((n,r)=>{const s=n.componentInstance&&n.componentInstance.proxy;if(s&&s._pStores){const a=n.componentInstance.proxy._pStores;Object.values(a).forEach(o=>{n.instanceData.state.push({type:kl(o.$id),key:"state",editable:!0,value:o._isOptionsAPI?{_custom:{value:je(o.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>o.$reset()}]}}:Object.keys(o.$state).reduce((l,c)=>(l[c]=o.$state[c],l),{})}),o._getters&&o._getters.length&&n.instanceData.state.push({type:kl(o.$id),key:"getters",editable:!1,value:o._getters.reduce((l,c)=>{try{l[c]=o[c]}catch(u){l[c]=u}return l},{})})})}}),t.on.getInspectorTree(n=>{if(n.app===i&&n.inspectorId===Vt){let r=[e];r=r.concat(Array.from(e._s.values())),n.rootNodes=(n.filter?r.filter(s=>"$id"in s?s.$id.toLowerCase().includes(n.filter.toLowerCase()):w_.toLowerCase().includes(n.filter.toLowerCase())):r).map(Fb)}}),t.on.getInspectorState(n=>{if(n.app===i&&n.inspectorId===Vt){const r=n.nodeId===ef?e:e._s.get(n.nodeId);if(!r)return;r&&(n.state=zb(r))}}),t.on.editInspectorState((n,r)=>{if(n.app===i&&n.inspectorId===Vt){const s=n.nodeId===ef?e:e._s.get(n.nodeId);if(!s)return Rt(`store "${n.nodeId}" not found`,"error");const{path:a}=n;hh(s)?a.unshift("state"):(a.length!==1||!s._customProperties.has(a[0])||a[0]in s.$state)&&a.unshift("$state"),Ws=!1,n.set(s,a,n.state.value),Ws=!0}}),t.on.editComponentState(n=>{if(n.type.startsWith("\u{1F34D}")){const r=n.type.replace(/^🍍\s*/,""),s=e._s.get(r);if(!s)return Rt(`store "${r}" not found`,"error");const{path:a}=n;if(a[0]!=="state")return Rt(`Invalid path for store "${r}":
${a}
Only state can be modified.`);a[0]="$state",Ws=!1,n.set(s,a,n.state.value),Ws=!0}})})}function Vb(i,e){bl.includes(kl(e.$id))||bl.push(kl(e.$id)),__({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:bl,app:i,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},t=>{const n=typeof t.now=="function"?t.now.bind(t):Date.now;e.$onAction(({after:a,onError:o,name:l,args:c})=>{const u=T_++;t.addTimelineEvent({layerId:kr,event:{time:n(),title:"\u{1F6EB} "+l,subtitle:"start",data:{store:Gn(e.$id),action:Gn(l),args:c},groupId:u}}),a(f=>{Vr=void 0,t.addTimelineEvent({layerId:kr,event:{time:n(),title:"\u{1F6EC} "+l,subtitle:"end",data:{store:Gn(e.$id),action:Gn(l),args:c,result:f},groupId:u}})}),o(f=>{Vr=void 0,t.addTimelineEvent({layerId:kr,event:{time:n(),logType:"error",title:"\u{1F4A5} "+l,subtitle:"end",data:{store:Gn(e.$id),action:Gn(l),args:c,error:f},groupId:u}})})},!0),e._customProperties.forEach(a=>{Js(()=>Bg(e[a]),(o,l)=>{t.notifyComponentUpdate(),t.sendInspectorState(Vt),Ws&&t.addTimelineEvent({layerId:kr,event:{time:n(),title:"Change",subtitle:a,data:{newValue:o,oldValue:l},groupId:Vr}})},{deep:!0})}),e.$subscribe(({events:a,type:o},l)=>{if(t.notifyComponentUpdate(),t.sendInspectorState(Vt),!Ws)return;const c={time:n(),title:Bb(o),data:{store:Gn(e.$id),...Ub(a)},groupId:Vr};Vr=void 0,o===fi.patchFunction?c.subtitle="\u2935\uFE0F":o===fi.patchObject?c.subtitle="\u{1F9E9}":a&&!Array.isArray(a)&&(c.subtitle=a.type),a&&(c.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:a}}),t.addTimelineEvent({layerId:kr,event:c})},{detached:!0,flush:"sync"});const r=e._hotUpdate;e._hotUpdate=Hn(a=>{r(a),t.addTimelineEvent({layerId:kr,event:{time:n(),title:"\u{1F525} "+e.$id,subtitle:"HMR update",data:{store:Gn(e.$id),info:Gn("HMR update")}}}),t.notifyComponentUpdate(),t.sendInspectorTree(Vt),t.sendInspectorState(Vt)});const{$dispose:s}=e;e.$dispose=()=>{s(),t.notifyComponentUpdate(),t.sendInspectorTree(Vt),t.sendInspectorState(Vt),t.getSettings().logStoreChanges&&Rt(`Disposed "${e.$id}" store \u{1F5D1}`)},t.notifyComponentUpdate(),t.sendInspectorTree(Vt),t.sendInspectorState(Vt),t.getSettings().logStoreChanges&&Rt(`"${e.$id}" store installed \u{1F195}`)})}let T_=0,Vr;function zd(i,e){const t=e.reduce((n,r)=>(n[r]=je(i)[r],n),{});for(const n in t)i[n]=function(){const r=T_,s=new Proxy(i,{get(...a){return Vr=r,Reflect.get(...a)},set(...a){return Vr=r,Reflect.set(...a)}});return t[n].apply(s,arguments)}}function Hb({app:i,store:e,options:t}){if(!e.$id.startsWith("__hot:")){if(t.state&&(e._isOptionsAPI=!0),typeof t.state=="function"){zd(e,Object.keys(t.actions));const n=e._hotUpdate;je(e)._hotUpdate=function(r){n.apply(this,arguments),zd(e,Object.keys(r._hmrPayload.actions))}}Vb(i,e)}}function Wb(){const i=Tg(!0),e=i.run(()=>vt({}));let t=[],n=[];const r=Hn({install(s){_o(r),r._a=s,s.provide(v_,r),s.config.globalProperties.$pinia=r,kd&&Gb(s,r),n.forEach(a=>t.push(a)),n=[]},use(s){return!this._a&&!yb?n.push(s):t.push(s),this},_p:t,_a:null,_e:i,_s:new Map,state:e});return kd&&typeof Proxy<"u"&&r.use(Hb),r}function E_(i,e){for(const t in e){const n=e[t];if(!(t in i))continue;const r=i[t];ss(r)&&ss(n)&&!ft(n)&&!ui(n)?i[t]=E_(r,n):i[t]=n}return i}const jb=()=>{};function Ud(i,e,t,n=jb){i.push(e);const r=()=>{const s=i.indexOf(e);s>-1&&(i.splice(s,1),n())};return!t&&h_()&&sh(r),r}function Ss(i,...e){i.slice().forEach(t=>{t(...e)})}function tf(i,e){for(const t in e){if(!e.hasOwnProperty(t))continue;const n=e[t],r=i[t];ss(r)&&ss(n)&&i.hasOwnProperty(t)&&!ft(n)&&!ui(n)?i[t]=tf(r,n):i[t]=n}return i}const $b=Symbol("pinia:skipHydration");function qb(i){return!ss(i)||!i.hasOwnProperty($b)}const{assign:Vn}=Object;function Bd(i){return!!(ft(i)&&i.effect)}function Gd(i,e,t,n){const{state:r,actions:s,getters:a}=e,o=t.state.value[i];let l;function c(){!o&&!n&&(t.state.value[i]=r?r():{});const u=gd(n?vt(r?r():{}).value:t.state.value[i]);return Vn(u,s,Object.keys(a||{}).reduce((f,h)=>(h in u&&console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${h}" in store "${i}".`),f[h]=Hn(Xt(()=>{_o(t);const p=t._s.get(i);return a[h].call(p,p)})),f),{}))}return l=nf(i,c,e,t,n,!0),l.$reset=function(){const f=r?r():{};this.$patch(h=>{Vn(h,f)})},l}function nf(i,e,t={},n,r,s){let a;const o=Vn({actions:{}},t);if(!n._e.active)throw new Error("Pinia destroyed");const l={deep:!0};l.onTrigger=S=>{c?p=S:c==!1&&!A._hotUpdating&&(Array.isArray(p)?p.push(S):console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."))};let c,u,f=Hn([]),h=Hn([]),p;const g=n.state.value[i];!s&&!g&&!r&&(n.state.value[i]={});const m=vt({});let d;function _(S){let L;c=u=!1,p=[],typeof S=="function"?(S(n.state.value[i]),L={type:fi.patchFunction,storeId:i,events:p}):(tf(n.state.value[i],S),L={type:fi.patchObject,payload:S,storeId:i,events:p});const I=d=Symbol();Wu().then(()=>{d===I&&(c=!0)}),u=!0,Ss(f,L,n.state.value[i])}const v=()=>{throw new Error(`\u{1F34D}: Store "${i}" is built using the setup syntax and does not implement $reset().`)};function b(){a.stop(),f=[],h=[],n._s.delete(i)}function M(S,L){return function(){_o(n);const I=Array.from(arguments),X=[],W=[];function k(z){X.push(z)}function H(z){W.push(z)}Ss(h,{args:I,name:S,store:A,after:k,onError:H});let U;try{U=L.apply(this&&this.$id===i?this:A,I)}catch(z){throw Ss(W,z),z}return U instanceof Promise?U.then(z=>(Ss(X,z),z)).catch(z=>(Ss(W,z),Promise.reject(z))):(Ss(X,U),U)}}const y=Hn({actions:{},getters:{},state:[],hotState:m}),E={_p:n,$id:i,$onAction:Ud.bind(null,h),$patch:_,$reset:v,$subscribe(S,L={}){const I=Ud(f,S,L.detached,()=>X()),X=a.run(()=>Js(()=>n.state.value[i],W=>{(L.flush==="sync"?u:c)&&S({storeId:i,type:fi.direct,events:p},W)},Vn({},l,L)));return I},$dispose:b},A=lc(Vn(Wr?{_customProperties:Hn(new Set),_hmrPayload:y}:{},E));n._s.set(i,A);const x=n._e.run(()=>(a=Tg(),a.run(()=>e())));for(const S in x){const L=x[S];if(ft(L)&&!Bd(L)||ui(L))r?Go(m.value,S,Ka(x,S)):s||(g&&qb(L)&&(ft(L)?L.value=g[S]:tf(L,g[S])),n.state.value[i][S]=L),y.state.push(S);else if(typeof L=="function"){const I=r?L:M(S,L);x[S]=I,y.actions[S]=L,o.actions[S]=L}else Bd(L)&&(y.getters[S]=s?t.getters[S]:L,Wr&&(x._getters||(x._getters=Hn([]))).push(S))}Vn(A,x),Vn(je(A),x),Object.defineProperty(A,"$state",{get:()=>r?m.value:n.state.value[i],set:S=>{if(r)throw new Error("cannot set hotState");_(L=>{Vn(L,S)})}});{A._hotUpdate=Hn(L=>{A._hotUpdating=!0,L._hmrPayload.state.forEach(I=>{if(I in A.$state){const X=L.$state[I],W=A.$state[I];typeof X=="object"&&ss(X)&&ss(W)?E_(X,W):L.$state[I]=W}Go(A,I,Ka(L.$state,I))}),Object.keys(A.$state).forEach(I=>{I in L.$state||Gc(A,I)}),c=!1,u=!1,n.state.value[i]=Ka(L._hmrPayload,"hotState"),u=!0,Wu().then(()=>{c=!0});for(const I in L._hmrPayload.actions){const X=L[I];Go(A,I,M(I,X))}for(const I in L._hmrPayload.getters){const X=L._hmrPayload.getters[I],W=s?Xt(()=>(_o(n),X.call(A,A))):X;Go(A,I,W)}Object.keys(A._hmrPayload.getters).forEach(I=>{I in L._hmrPayload.getters||Gc(A,I)}),Object.keys(A._hmrPayload.actions).forEach(I=>{I in L._hmrPayload.actions||Gc(A,I)}),A._hmrPayload=L._hmrPayload,A._getters=L._getters,A._hotUpdating=!1});const S={writable:!0,configurable:!0,enumerable:!1};Wr&&["_p","_hmrPayload","_getters","_customProperties"].forEach(L=>{Object.defineProperty(A,L,{value:A[L],...S})})}return n._p.forEach(S=>{if(Wr){const L=a.run(()=>S({store:A,app:n._a,pinia:n,options:o}));Object.keys(L||{}).forEach(I=>A._customProperties.add(I)),Vn(A,L)}else Vn(A,a.run(()=>S({store:A,app:n._a,pinia:n,options:o})))}),A.$state&&typeof A.$state=="object"&&typeof A.$state.constructor=="function"&&!A.$state.constructor.toString().includes("[native code]")&&console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${A.$id}".`),g&&s&&t.hydrate&&t.hydrate(A.$state,g),c=!0,u=!0,A}function dh(i,e,t){let n,r;const s=typeof e=="function";typeof i=="string"?(n=i,r=s?t:e):(r=i,n=i.id);function a(o,l){const c=h_();if(o=o||c&&gl(v_),o&&_o(o),!Qu)throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);o=Qu,o._s.has(n)||(s?nf(n,e,r,o):Gd(n,r,o),a._pinia=o);const u=o._s.get(n);if(l){const f="__hot:"+n,h=s?nf(f,e,r,o,!0):Gd(f,Vn({},r),o,!0);l._hotUpdate(h),delete o.state.value[f],o._s.delete(f)}if(Wr&&c&&c.proxy&&!l){const f=c.proxy,h="_pStores"in f?f._pStores:f._pStores={};h[n]=u}return u}return a.$id=n,a}function Vd(i){{i=je(i);const e={};for(const t in i){const n=i[t];(ft(n)||ui(n))&&(e[t]=Ka(i,t))}return e}}const _i=dh("data",()=>{var i=vt({}),e=vt([]),t=vt(""),n=vt({}),r=vt({}),s=vt({}),a=vt({});const o=Xt(()=>n.value.size>0?n.value.get(t.value):null);function l(){const c=o.value;c!=null&&(c.Category.IsExpanded=!0,c.Family.IsExpanded=!0,c.Type.IsExpanded=!0,setTimeout(()=>{const u=document.getElementById(t.value);u==null||u.scrollIntoView({behavior:"smooth"}),u==null||u.focus()},100))}return{getElementById:o,infoElement:i,selectedElements:e,infoElementId:t,elementsDataDict:n,categoryDataDict:r,familyDataDict:s,typeDataDict:a,expandElementInTree:l}});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ph="143",cr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xb=0,Hd=1,Yb=2,A_=1,Kb=2,ja=3,ca=0,Jn=1,as=2,Zb=1,mr=0,Qs=1,Wd=2,jd=3,$d=4,Jb=5,Vs=100,Qb=101,e1=102,qd=103,Xd=104,t1=200,n1=201,i1=202,r1=203,C_=204,P_=205,s1=206,a1=207,o1=208,l1=209,c1=210,u1=0,f1=1,h1=2,rf=3,d1=4,p1=5,m1=6,g1=7,R_=0,_1=1,v1=2,ki=0,x1=1,y1=2,b1=3,L_=4,M1=5,I_=300,ua=301,fa=302,Fl=303,sf=304,vc=306,ha=1e3,rn=1001,zl=1002,kt=1003,af=1004,of=1005,Et=1006,D_=1007,ps=1008,os=1009,S1=1010,w1=1011,O_=1012,T1=1013,jr=1014,qn=1015,Oi=1016,E1=1017,A1=1018,ea=1020,C1=1021,P1=1022,Xn=1023,R1=1024,L1=1025,Jr=1026,da=1027,I1=1028,D1=1029,O1=1030,N1=1031,k1=1033,Vc=33776,Hc=33777,Wc=33778,jc=33779,Yd=35840,Kd=35841,Zd=35842,Jd=35843,F1=36196,Qd=37492,ep=37496,tp=37808,np=37809,ip=37810,rp=37811,sp=37812,ap=37813,op=37814,lp=37815,cp=37816,up=37817,fp=37818,hp=37819,dp=37820,pp=37821,mp=36492,vo=2300,pa=2301,$c=2302,gp=2400,_p=2401,vp=2402,z1=2500,U1=1,N_=2,yr=3e3,tt=3001,B1=3200,G1=3201,mh=0,V1=1,Ci="srgb",$r="srgb-linear",qc=7680,H1=519,lf=35044,xp="300 es",cf=1035;class ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yp=1234567;const to=Math.PI/180,xo=180/Math.PI;function Qn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Ft(i,e,t){return Math.max(e,Math.min(t,i))}function gh(i,e){return(i%e+e)%e}function W1(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function j1(i,e,t){return i!==e?(t-i)/(e-i):0}function no(i,e,t){return(1-t)*i+t*e}function $1(i,e,t,n){return no(i,e,1-Math.exp(-t*n))}function q1(i,e=1){return e-Math.abs(gh(i,e*2)-e)}function X1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Y1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function K1(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Z1(i,e){return i+Math.random()*(e-i)}function J1(i){return i*(.5-Math.random())}function Q1(i){i!==void 0&&(yp=i);let e=yp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function eM(i){return i*to}function tM(i){return i*xo}function uf(i){return(i&i-1)===0&&i!==0}function k_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ul(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nM(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),h=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function iM(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rM(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var sM=Object.freeze({__proto__:null,DEG2RAD:to,RAD2DEG:xo,generateUUID:Qn,clamp:Ft,euclideanModulo:gh,mapLinear:W1,inverseLerp:j1,lerp:no,damp:$1,pingpong:q1,smoothstep:X1,smootherstep:Y1,randInt:K1,randFloat:Z1,randFloatSpread:J1,seededRandom:Q1,degToRad:eM,radToDeg:tM,isPowerOfTwo:uf,ceilPowerOfTwo:k_,floorPowerOfTwo:Ul,setQuaternionFromProperEuler:nM,normalize:rM,denormalize:iM});class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ln{constructor(){Ln.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],m=r[0],d=r[3],_=r[6],v=r[1],b=r[4],M=r[7],y=r[2],E=r[5],A=r[8];return s[0]=a*m+o*v+l*y,s[3]=a*d+o*b+l*E,s[6]=a*_+o*M+l*A,s[1]=c*m+u*v+f*y,s[4]=c*d+u*b+f*E,s[7]=c*_+u*M+f*A,s[2]=h*m+p*v+g*y,s[5]=h*d+p*b+g*E,s[8]=h*_+p*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,g=t*f+n*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(r*c-u*n)*m,e[2]=(o*n-r*a)*m,e[3]=h*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-o*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],a=r[3],o=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*a+n*c,r[6]=t*o+n*u,r[1]=-n*s+t*l,r[4]=-n*a+t*c,r[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function F_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>65535)return!0;return!1}function yo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ml(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Xc={[Ci]:{[$r]:Qr},[$r]:{[Ci]:Ml}},Fn={legacyMode:!0,get workingColorSpace(){return $r},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Xc[e]&&Xc[e][t]!==void 0){const n=Xc[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wt={r:0,g:0,b:0},zn={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function Yc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Ho(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Fn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=$r){return this.r=e,this.g=t,this.b=n,Fn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=$r){if(e=gh(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Yc(a,s,e+1/3),this.g=Yc(a,s,e),this.b=Yc(a,s,e-1/3)}return Fn.toWorkingColorSpace(this,r),this}setStyle(e,t=Ci){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Fn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Fn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Fn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Fn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Ci){const n=z_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}copyLinearToSRGB(e){return this.r=Ml(e.r),this.g=Ml(e.g),this.b=Ml(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ci){return Fn.fromWorkingColorSpace(Ho(this,wt),e),Ft(wt.r*255,0,255)<<16^Ft(wt.g*255,0,255)<<8^Ft(wt.b*255,0,255)<<0}getHexString(e=Ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$r){Fn.fromWorkingColorSpace(Ho(this,wt),t);const n=wt.r,r=wt.g,s=wt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$r){return Fn.fromWorkingColorSpace(Ho(this,wt),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Ci){return Fn.fromWorkingColorSpace(Ho(this,wt),e),e!==Ci?`color(${e} ${wt.r} ${wt.g} ${wt.b})`:`rgb(${wt.r*255|0},${wt.g*255|0},${wt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(zn),zn.h+=e,zn.s+=t,zn.l+=n,this.setHSL(zn.h,zn.s,zn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(Vo);const n=no(zn.h,Vo.h,t),r=no(zn.s,Vo.s,t),s=no(zn.l,Vo.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Pe.NAMES=z_;let Ts;class U_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ts===void 0&&(Ts=yo("canvas")),Ts.width=e.width,Ts.height=e.height;const n=Ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Qr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qr(t[n]/255)*255):t[n]=Qr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class B_{constructor(e=null){this.isSource=!0,this.uuid=Qn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Kc(r[a].image)):s.push(Kc(r[a]))}else s=Kc(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Kc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?U_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let aM=0;class Jt extends ms{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=rn,r=rn,s=Et,a=ps,o=Xn,l=os,c=1,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Qn(),this.name="",this.source=new B_(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ln,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==I_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ha:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ha:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=I_;class rt{constructor(e=0,t=0,n=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],m=l[2],d=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(p+1)/2,y=(_+1)/2,E=(u+h)/4,A=(f+m)/4,x=(g+d)/4;return b>M&&b>y?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=E/n,s=A/n):M>y?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=E/r,s=x/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=A/s,r=x/s),this.set(n,r,s,t),this}let v=Math.sqrt((d-g)*(d-g)+(f-m)*(f-m)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(d-g)/v,this.y=(f-m)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ls extends ms{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Jt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Et,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new B_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class G_ extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oM extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[a+0],p=s[a+1],g=s[a+2],m=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(f!==m||l!==h||c!==p||u!==g){let d=1-o;const _=l*h+c*p+u*g+f*m,v=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const y=Math.sqrt(b),E=Math.atan2(y,_*v);d=Math.sin(d*E)/y,o=Math.sin(o*E)/y}const M=o*v;if(l=l*d+h*M,c=c*d+p*M,u=u*d+g*M,f=f*d+m*M,d===1-o){const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-o*p,e[t+2]=c*g+u*p+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),h=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*n,u=l*n+o*t-s*r,f=l*r+s*n-a*t,h=-s*t-a*n-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zc.copy(this).projectOnVector(e),this.sub(Zc)}reflect(e){return this.sub(Zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zc=new N,bp=new Ui;class gs{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Rr.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Rr)}else n.boundingBox===null&&n.computeBoundingBox(),Jc.copy(n.boundingBox),Jc.applyMatrix4(e.matrixWorld),this.union(Jc);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rr),Rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),Wo.subVectors(this.max,ka),Es.subVectors(e.a,ka),As.subVectors(e.b,ka),Cs.subVectors(e.c,ka),Zi.subVectors(As,Es),Ji.subVectors(Cs,As),Lr.subVectors(Es,Cs);let t=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-Lr.z,Lr.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,Lr.z,0,-Lr.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-Lr.y,Lr.x,0];return!Qc(t,Es,As,Cs,Wo)||(t=[1,0,0,0,1,0,0,0,1],!Qc(t,Es,As,Cs,Wo))?!1:(jo.crossVectors(Zi,Ji),t=[jo.x,jo.y,jo.z],Qc(t,Es,As,Cs,Wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Rr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Rr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new N,new N,new N,new N,new N,new N,new N,new N],Rr=new N,Jc=new gs,Es=new N,As=new N,Cs=new N,Zi=new N,Ji=new N,Lr=new N,ka=new N,Wo=new N,jo=new N,Ir=new N;function Qc(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ir.fromArray(i,s);const o=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),l=e.dot(Ir),c=t.dot(Ir),u=n.dot(Ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const lM=new gs,Mp=new N,$o=new N,eu=new N;class Aa{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lM.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){eu.subVectors(e,this.center);const t=eu.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(eu.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?$o.set(0,0,1).multiplyScalar(e.radius):$o.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Mp.copy(e.center).add($o)),this.expandByPoint(Mp.copy(e.center).sub($o)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new N,tu=new N,qo=new N,Qi=new N,nu=new N,Xo=new N,iu=new N;class xc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.direction).multiplyScalar(t).add(this.origin),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){tu.copy(e).add(t).multiplyScalar(.5),qo.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(tu);const s=e.distanceTo(t)*.5,a=-this.direction.dot(qo),o=Qi.dot(this.direction),l=-Qi.dot(qo),c=Qi.lengthSq(),u=Math.abs(1-a*a);let f,h,p,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const m=1/u;f*=m,h*=m,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(qo).multiplyScalar(h).add(tu),p}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const n=Mi.dot(this.direction),r=Mi.dot(Mi)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||n!==n)&&(n=s),(a<r||r!==r)&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,r,s){nu.subVectors(t,e),Xo.subVectors(n,e),iu.crossVectors(nu,Xo);let a=this.direction.dot(iu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qi.subVectors(this.origin,e);const l=o*this.direction.dot(Xo.crossVectors(Qi,Xo));if(l<0)return null;const c=o*this.direction.dot(nu.cross(Qi));if(c<0||l+c>a)return null;const u=-o*Qi.dot(iu);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,a,o,l,c,u,f,h,p,g,m,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=p,_[7]=g,_[11]=m,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ps.setFromMatrixColumn(e,0).length(),s=1/Ps.setFromMatrixColumn(e,1).length(),a=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,g=o*u,m=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-m*c,t[9]=-o*l,t[2]=m-h*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,m=c*f;t[0]=h+m*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=m+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,m=c*f;t[0]=h-m*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=m-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,g=o*u,m=o*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+m,t[1]=l*f,t[5]=m*c+h,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,g=o*l,m=o*c;t[0]=l*u,t[4]=m-h*f,t[8]=g*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-m*f}else if(e.order==="XZY"){const h=a*l,p=a*c,g=o*l,m=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+m,t[5]=a*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*u,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cM,e,uM)}lookAt(e,t,n){const r=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),er.crossVectors(n,hn),er.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),er.crossVectors(n,hn)),er.normalize(),Yo.crossVectors(hn,er),r[0]=er.x,r[4]=Yo.x,r[8]=hn.x,r[1]=er.y,r[5]=Yo.y,r[9]=hn.y,r[2]=er.z,r[6]=Yo.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],m=n[6],d=n[10],_=n[14],v=n[3],b=n[7],M=n[11],y=n[15],E=r[0],A=r[4],x=r[8],S=r[12],L=r[1],I=r[5],X=r[9],W=r[13],k=r[2],H=r[6],U=r[10],z=r[14],B=r[3],G=r[7],J=r[11],ue=r[15];return s[0]=a*E+o*L+l*k+c*B,s[4]=a*A+o*I+l*H+c*G,s[8]=a*x+o*X+l*U+c*J,s[12]=a*S+o*W+l*z+c*ue,s[1]=u*E+f*L+h*k+p*B,s[5]=u*A+f*I+h*H+p*G,s[9]=u*x+f*X+h*U+p*J,s[13]=u*S+f*W+h*z+p*ue,s[2]=g*E+m*L+d*k+_*B,s[6]=g*A+m*I+d*H+_*G,s[10]=g*x+m*X+d*U+_*J,s[14]=g*S+m*W+d*z+_*ue,s[3]=v*E+b*L+M*k+y*B,s[7]=v*A+b*I+M*H+y*G,s[11]=v*x+b*X+M*U+y*J,s[15]=v*S+b*W+M*z+y*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],m=e[7],d=e[11],_=e[15];return g*(+s*l*f-r*c*f-s*o*h+n*c*h+r*o*p-n*l*p)+m*(+t*l*p-t*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+d*(+t*c*f-t*o*p-s*a*f+n*a*p+s*o*u-n*c*u)+_*(-r*o*u-t*l*f+t*o*h+r*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],m=e[13],d=e[14],_=e[15],v=f*d*c-m*h*c+m*l*p-o*d*p-f*l*_+o*h*_,b=g*h*c-u*d*c-g*l*p+a*d*p+u*l*_-a*h*_,M=u*m*c-g*f*c+g*o*p-a*m*p-u*o*_+a*f*_,y=g*f*l-u*m*l-g*o*h+a*m*h+u*o*d-a*f*d,E=t*v+n*b+r*M+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=v*A,e[1]=(m*h*s-f*d*s-m*r*p+n*d*p+f*r*_-n*h*_)*A,e[2]=(o*d*s-m*l*s+m*r*c-n*d*c-o*r*_+n*l*_)*A,e[3]=(f*l*s-o*h*s-f*r*c+n*h*c+o*r*p-n*l*p)*A,e[4]=b*A,e[5]=(u*d*s-g*h*s+g*r*p-t*d*p-u*r*_+t*h*_)*A,e[6]=(g*l*s-a*d*s-g*r*c+t*d*c+a*r*_-t*l*_)*A,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*p+t*l*p)*A,e[8]=M*A,e[9]=(g*f*s-u*m*s-g*n*p+t*m*p+u*n*_-t*f*_)*A,e[10]=(a*m*s-g*o*s+g*n*c-t*m*c-a*n*_+t*o*_)*A,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*p-t*o*p)*A,e[12]=y*A,e[13]=(u*m*r-g*f*r+g*n*h-t*m*h-u*n*d+t*f*d)*A,e[14]=(g*o*r-a*m*r-g*n*l+t*m*l+a*n*d-t*o*d)*A,e[15]=(a*f*r-u*o*r+u*n*l-t*f*l-a*n*h+t*o*h)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,g=s*f,m=a*u,d=a*f,_=o*f,v=l*c,b=l*u,M=l*f,y=n.x,E=n.y,A=n.z;return r[0]=(1-(m+_))*y,r[1]=(p+M)*y,r[2]=(g-b)*y,r[3]=0,r[4]=(p-M)*E,r[5]=(1-(h+_))*E,r[6]=(d+v)*E,r[7]=0,r[8]=(g+b)*A,r[9]=(d-v)*A,r[10]=(1-(h+m))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ps.set(r[0],r[1],r[2]).length();const a=Ps.set(r[4],r[5],r[6]).length(),o=Ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const c=1/s,u=1/a,f=1/o;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,t.setFromRotationMatrix(Un),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),h=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,s,a){const o=this.elements,l=1/(t-e),c=1/(n-r),u=1/(a-s),f=(t+e)*l,h=(n+r)*c,p=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ps=new N,Un=new Je,cM=new N(0,0,0),uM=new N(1,1,1),er=new N,Yo=new N,hn=new N,Sp=new Je,wp=new Ui;class Lo{constructor(e=0,t=0,n=0,r=Lo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wp.setFromEuler(this),this.setFromQuaternion(wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Lo.DefaultOrder="XYZ";Lo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class _h{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fM=0;const Tp=new N,Rs=new Ui,Si=new Je,Ko=new N,Fa=new N,hM=new N,dM=new Ui,Ep=new N(1,0,0),Ap=new N(0,1,0),Cp=new N(0,0,1),pM={type:"added"},Pp={type:"removed"};class St extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DefaultUp.clone();const e=new N,t=new Lo,n=new Ui,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ln}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=St.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new _h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(Ep,e)}rotateY(e){return this.rotateOnAxis(Ap,e)}rotateZ(e){return this.rotateOnAxis(Cp,e)}translateOnAxis(e,t){return Tp.copy(e).applyQuaternion(this.quaternion),this.position.add(Tp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ep,e)}translateY(e){return this.translateOnAxis(Ap,e)}translateZ(e){return this.translateOnAxis(Cp,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ko.copy(e):Ko.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Fa,Ko,this.up):Si.lookAt(Ko,Fa,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),Rs.setFromRotationMatrix(Si),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Pp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,hM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,dM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}St.DefaultUp=new N(0,1,0);St.DefaultMatrixAutoUpdate=!0;const Bn=new N,wi=new N,ru=new N,Ti=new N,Ls=new N,Is=new N,Rp=new N,su=new N,au=new N,ou=new N;class Ii{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bn.subVectors(e,t),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Bn.subVectors(r,t),wi.subVectors(n,t),ru.subVectors(e,t);const a=Bn.dot(Bn),o=Bn.dot(wi),l=Bn.dot(ru),c=wi.dot(wi),u=wi.dot(ru),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ti),Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getUV(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Ti),l.set(0,0),l.addScaledVector(s,Ti.x),l.addScaledVector(a,Ti.y),l.addScaledVector(o,Ti.z),l}static isFrontFacing(e,t,n,r){return Bn.subVectors(n,t),wi.subVectors(e,t),Bn.cross(wi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Bn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ii.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Ii.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Ls.subVectors(r,n),Is.subVectors(s,n),su.subVectors(e,n);const l=Ls.dot(su),c=Is.dot(su);if(l<=0&&c<=0)return t.copy(n);au.subVectors(e,r);const u=Ls.dot(au),f=Is.dot(au);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ls,a);ou.subVectors(e,s);const p=Ls.dot(ou),g=Is.dot(ou);if(g>=0&&p<=g)return t.copy(s);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Is,o);const d=u*g-p*f;if(d<=0&&f-u>=0&&p-g>=0)return Rp.subVectors(s,r),o=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(Rp,o);const _=1/(d+m+h);return a=m*_,o=h*_,t.copy(n).addScaledVector(Ls,a).addScaledVector(Is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let mM=0;class hi extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Qs,this.side=ca,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=C_,this.blendDst=P_,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=rf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qc,this.stencilZFail=qc,this.stencilZPass=qc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Zb;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(n.blending=this.blending),this.side!==ca&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qr extends hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=R_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new N,Zo=new Le;class an{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=lf,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),a=new Pe),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),a=new Le),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),a=new N),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),a=new rt),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zo.fromBufferAttribute(this,t),Zo.applyMatrix3(e),this.setXY(t,Zo.x,Zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class V_ extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class H_ extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Fi extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gM=0;const Tn=new Je,lu=new St,Ds=new N,dn=new gs,za=new gs,Pt=new N;class kn extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F_(e)?H_:V_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ln().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return lu.lookAt(e),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Fi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];za.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(dn.min,za.min),dn.expandByPoint(Pt),Pt.addVectors(dn.max,za.max),dn.expandByPoint(Pt)):(dn.expandByPoint(za.min),dn.expandByPoint(za.max))}dn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Pt.fromBufferAttribute(o,c),l&&(Ds.fromBufferAttribute(e,c),Pt.add(Ds)),r=Math.max(r,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<o;L++)c[L]=new N,u[L]=new N;const f=new N,h=new N,p=new N,g=new Le,m=new Le,d=new Le,_=new N,v=new N;function b(L,I,X){f.fromArray(r,L*3),h.fromArray(r,I*3),p.fromArray(r,X*3),g.fromArray(a,L*2),m.fromArray(a,I*2),d.fromArray(a,X*2),h.sub(f),p.sub(f),m.sub(g),d.sub(g);const W=1/(m.x*d.y-d.x*m.y);!isFinite(W)||(_.copy(h).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(W),v.copy(p).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(W),c[L].add(_),c[I].add(_),c[X].add(_),u[L].add(v),u[I].add(v),u[X].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let L=0,I=M.length;L<I;++L){const X=M[L],W=X.start,k=X.count;for(let H=W,U=W+k;H<U;H+=3)b(n[H+0],n[H+1],n[H+2])}const y=new N,E=new N,A=new N,x=new N;function S(L){A.fromArray(s,L*3),x.copy(A);const I=c[L];y.copy(I),y.sub(A.multiplyScalar(A.dot(I))).normalize(),E.crossVectors(x,I);const W=E.dot(u[L])<0?-1:1;l[L*4]=y.x,l[L*4+1]=y.y,l[L*4+2]=y.z,l[L*4+3]=W}for(let L=0,I=M.length;L<I;++L){const X=M[L],W=X.start,k=X.count;for(let H=W,U=W+k;H<U;H+=3)S(n[H+0]),S(n[H+1]),S(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),m=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(e.attributes[r]===void 0)continue;const a=n[r].array,o=e.attributes[r],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let f=0,h=c;f<u;f++,h++)a[h]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,d=l.length;m<d;m++){o.isInterleavedBufferAttribute?p=l[m]*o.data.stride+o.offset:p=l[m]*u;for(let _=0;_<u;_++)h[g++]=c[p++]}return new an(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lp=new Je,Os=new xc,cu=new Aa,tr=new N,nr=new N,ir=new N,uu=new N,fu=new N,hu=new N,Jo=new N,Qo=new N,el=new N,tl=new Le,nl=new Le,il=new Le,du=new N,rl=new N;class _n extends St{constructor(e=new kn,t=new qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),cu.copy(n.boundingSphere),cu.applyMatrix4(s),e.ray.intersectsSphere(cu)===!1)||(Lp.copy(s).invert(),Os.copy(e.ray).applyMatrix4(Lp),n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,p=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,d=p.length;m<d;m++){const _=p[m],v=r[_.materialIndex],b=Math.max(_.start,g.start),M=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let y=b,E=M;y<E;y+=3){const A=o.getX(y),x=o.getX(y+1),S=o.getX(y+2);a=sl(this,v,e,Os,l,c,u,f,h,A,x,S),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),d=Math.min(o.count,g.start+g.count);for(let _=m,v=d;_<v;_+=3){const b=o.getX(_),M=o.getX(_+1),y=o.getX(_+2);a=sl(this,r,e,Os,l,c,u,f,h,b,M,y),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,d=p.length;m<d;m++){const _=p[m],v=r[_.materialIndex],b=Math.max(_.start,g.start),M=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let y=b,E=M;y<E;y+=3){const A=y,x=y+1,S=y+2;a=sl(this,v,e,Os,l,c,u,f,h,A,x,S),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=m,v=d;_<v;_+=3){const b=_,M=_+1,y=_+2;a=sl(this,r,e,Os,l,c,u,f,h,b,M,y),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function _M(i,e,t,n,r,s,a,o){let l;if(e.side===Jn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side!==as,o),l===null)return null;rl.copy(o),rl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(rl);return c<t.near||c>t.far?null:{distance:c,point:rl.clone(),object:i}}function sl(i,e,t,n,r,s,a,o,l,c,u,f){tr.fromBufferAttribute(r,c),nr.fromBufferAttribute(r,u),ir.fromBufferAttribute(r,f);const h=i.morphTargetInfluences;if(s&&h){Jo.set(0,0,0),Qo.set(0,0,0),el.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const d=h[g],_=s[g];d!==0&&(uu.fromBufferAttribute(_,c),fu.fromBufferAttribute(_,u),hu.fromBufferAttribute(_,f),a?(Jo.addScaledVector(uu,d),Qo.addScaledVector(fu,d),el.addScaledVector(hu,d)):(Jo.addScaledVector(uu.sub(tr),d),Qo.addScaledVector(fu.sub(nr),d),el.addScaledVector(hu.sub(ir),d)))}tr.add(Jo),nr.add(Qo),ir.add(el)}i.isSkinnedMesh&&(i.boneTransform(c,tr),i.boneTransform(u,nr),i.boneTransform(f,ir));const p=_M(i,e,t,n,tr,nr,ir,du);if(p){o&&(tl.fromBufferAttribute(o,c),nl.fromBufferAttribute(o,u),il.fromBufferAttribute(o,f),p.uv=Ii.getUV(du,tr,nr,ir,tl,nl,il,new Le)),l&&(tl.fromBufferAttribute(l,c),nl.fromBufferAttribute(l,u),il.fromBufferAttribute(l,f),p.uv2=Ii.getUV(du,tr,nr,ir,tl,nl,il,new Le));const g={a:c,b:u,c:f,normal:new N,materialIndex:0};Ii.getNormal(tr,nr,ir,g.normal),p.face=g}return p}class Io extends kn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Fi(c,3)),this.setAttribute("normal",new Fi(u,3)),this.setAttribute("uv",new Fi(f,2));function g(m,d,_,v,b,M,y,E,A,x,S){const L=M/A,I=y/x,X=M/2,W=y/2,k=E/2,H=A+1,U=x+1;let z=0,B=0;const G=new N;for(let J=0;J<U;J++){const ue=J*I-W;for(let se=0;se<H;se++){const oe=se*L-X;G[m]=oe*v,G[d]=ue*b,G[_]=k,c.push(G.x,G.y,G.z),G[m]=0,G[d]=0,G[_]=E>0?1:-1,u.push(G.x,G.y,G.z),f.push(se/A),f.push(1-J/x),z+=1}}for(let J=0;J<x;J++)for(let ue=0;ue<A;ue++){const se=h+ue+H*J,oe=h+ue+H*(J+1),_e=h+(ue+1)+H*(J+1),Se=h+(ue+1)+H*J;l.push(se,oe,Se),l.push(oe,_e,Se),B+=6}o.addGroup(p,B,S),p+=B,h+=z}}static fromJSON(e){return new Io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ma(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=ma(i[t]);for(const r in n)e[r]=n[r]}return e}function vM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const xM={clone:ma,merge:Gt};var yM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yM,this.fragmentShader=bM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ma(e.uniforms),this.uniformsGroups=vM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class W_ extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Yt extends W_{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(to*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ns=90,ks=1;class MM extends St{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new Yt(Ns,ks,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new N(1,0,0)),this.add(r);const s=new Yt(Ns,ks,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new N(-1,0,0)),this.add(s);const a=new Yt(Ns,ks,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new N(0,1,0)),this.add(a);const o=new Yt(Ns,ks,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new N(0,-1,0)),this.add(o);const l=new Yt(Ns,ks,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new N(0,0,1)),this.add(l);const c=new Yt(Ns,ks,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new N(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=ki,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class j_ extends Jt{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ua,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SM extends ls{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new j_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Io(5,5,5),s=new cs({name:"CubemapFromEquirect",uniforms:ma(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:mr});s.uniforms.tEquirect.value=t;const a=new _n(r,s),o=t.minFilter;return t.minFilter===ps&&(t.minFilter=Et),new MM(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const pu=new N,wM=new N,TM=new Ln;class Fr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=pu.subVectors(n,t).cross(wM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(pu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||TM.getNormalMatrix(e),r=this.coplanarPoint(pu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new Aa,al=new N;class vh{constructor(e=new Fr,t=new Fr,n=new Fr,r=new Fr,s=new Fr,a=new Fr){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],p=n[9],g=n[10],m=n[11],d=n[12],_=n[13],v=n[14],b=n[15];return t[0].setComponents(o-r,f-l,m-h,b-d).normalize(),t[1].setComponents(o+r,f+l,m+h,b+d).normalize(),t[2].setComponents(o+s,f+c,m+p,b+_).normalize(),t[3].setComponents(o-s,f-c,m-p,b-_).normalize(),t[4].setComponents(o-a,f-u,m-g,b-v).normalize(),t[5].setComponents(o+a,f+u,m+g,b+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSprite(e){return Fs.center.set(0,0,0),Fs.radius=.7071067811865476,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(al.x=r.normal.x>0?e.max.x:e.min.x,al.y=r.normal.y>0?e.max.y:e.min.y,al.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $_(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function EM(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;i.bindBuffer(f,c),p.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class xh extends kn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,p=[],g=[],m=[],d=[];for(let _=0;_<u;_++){const v=_*h-a;for(let b=0;b<c;b++){const M=b*f-s;g.push(M,-v,0),m.push(0,0,1),d.push(b/o),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<o;v++){const b=v+c*_,M=v+c*(_+1),y=v+1+c*(_+1),E=v+1+c*_;p.push(b,M,E),p.push(M,y,E)}this.setIndex(p),this.setAttribute("position",new Fi(g,3)),this.setAttribute("normal",new Fi(m,3)),this.setAttribute("uv",new Fi(d,2))}static fromJSON(e){return new xh(e.width,e.height,e.widthSegments,e.heightSegments)}}var AM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,CM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,RM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DM="vec3 transformed = vec3( position );",OM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NM=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,kM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$M=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,qM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QM="gl_FragColor = linearToOutputTexel( gl_FragColor );",eS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,fS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dS=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,pS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mS=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,gS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_S=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,vS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,yS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,bS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,MS=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,TS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ES=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,CS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,PS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,FS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,US=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,BS=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,jS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,$S=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,qS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,XS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ZS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ew=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iw=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rw=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sw=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,aw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ow=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,cw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mw=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,gw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,_w=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,vw=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,xw=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,yw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,bw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Mw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Sw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ww=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tw=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Aw=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Rw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ow=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kw=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zw=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uw=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ww=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$w=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,e2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,He={alphamap_fragment:AM,alphamap_pars_fragment:CM,alphatest_fragment:PM,alphatest_pars_fragment:RM,aomap_fragment:LM,aomap_pars_fragment:IM,begin_vertex:DM,beginnormal_vertex:OM,bsdfs:NM,iridescence_fragment:kM,bumpmap_pars_fragment:FM,clipping_planes_fragment:zM,clipping_planes_pars_fragment:UM,clipping_planes_pars_vertex:BM,clipping_planes_vertex:GM,color_fragment:VM,color_pars_fragment:HM,color_pars_vertex:WM,color_vertex:jM,common:$M,cube_uv_reflection_fragment:qM,defaultnormal_vertex:XM,displacementmap_pars_vertex:YM,displacementmap_vertex:KM,emissivemap_fragment:ZM,emissivemap_pars_fragment:JM,encodings_fragment:QM,encodings_pars_fragment:eS,envmap_fragment:tS,envmap_common_pars_fragment:nS,envmap_pars_fragment:iS,envmap_pars_vertex:rS,envmap_physical_pars_fragment:mS,envmap_vertex:sS,fog_vertex:aS,fog_pars_vertex:oS,fog_fragment:lS,fog_pars_fragment:cS,gradientmap_pars_fragment:uS,lightmap_fragment:fS,lightmap_pars_fragment:hS,lights_lambert_vertex:dS,lights_pars_begin:pS,lights_toon_fragment:gS,lights_toon_pars_fragment:_S,lights_phong_fragment:vS,lights_phong_pars_fragment:xS,lights_physical_fragment:yS,lights_physical_pars_fragment:bS,lights_fragment_begin:MS,lights_fragment_maps:SS,lights_fragment_end:wS,logdepthbuf_fragment:TS,logdepthbuf_pars_fragment:ES,logdepthbuf_pars_vertex:AS,logdepthbuf_vertex:CS,map_fragment:PS,map_pars_fragment:RS,map_particle_fragment:LS,map_particle_pars_fragment:IS,metalnessmap_fragment:DS,metalnessmap_pars_fragment:OS,morphcolor_vertex:NS,morphnormal_vertex:kS,morphtarget_pars_vertex:FS,morphtarget_vertex:zS,normal_fragment_begin:US,normal_fragment_maps:BS,normal_pars_fragment:GS,normal_pars_vertex:VS,normal_vertex:HS,normalmap_pars_fragment:WS,clearcoat_normal_fragment_begin:jS,clearcoat_normal_fragment_maps:$S,clearcoat_pars_fragment:qS,iridescence_pars_fragment:XS,output_fragment:YS,packing:KS,premultiplied_alpha_fragment:ZS,project_vertex:JS,dithering_fragment:QS,dithering_pars_fragment:ew,roughnessmap_fragment:tw,roughnessmap_pars_fragment:nw,shadowmap_pars_fragment:iw,shadowmap_pars_vertex:rw,shadowmap_vertex:sw,shadowmask_pars_fragment:aw,skinbase_vertex:ow,skinning_pars_vertex:lw,skinning_vertex:cw,skinnormal_vertex:uw,specularmap_fragment:fw,specularmap_pars_fragment:hw,tonemapping_fragment:dw,tonemapping_pars_fragment:pw,transmission_fragment:mw,transmission_pars_fragment:gw,uv_pars_fragment:_w,uv_pars_vertex:vw,uv_vertex:xw,uv2_pars_fragment:yw,uv2_pars_vertex:bw,uv2_vertex:Mw,worldpos_vertex:Sw,background_vert:ww,background_frag:Tw,cube_vert:Ew,cube_frag:Aw,depth_vert:Cw,depth_frag:Pw,distanceRGBA_vert:Rw,distanceRGBA_frag:Lw,equirect_vert:Iw,equirect_frag:Dw,linedashed_vert:Ow,linedashed_frag:Nw,meshbasic_vert:kw,meshbasic_frag:Fw,meshlambert_vert:zw,meshlambert_frag:Uw,meshmatcap_vert:Bw,meshmatcap_frag:Gw,meshnormal_vert:Vw,meshnormal_frag:Hw,meshphong_vert:Ww,meshphong_frag:jw,meshphysical_vert:$w,meshphysical_frag:qw,meshtoon_vert:Xw,meshtoon_frag:Yw,points_vert:Kw,points_frag:Zw,shadow_vert:Jw,shadow_frag:Qw,sprite_vert:e2,sprite_frag:t2},ge={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ln},uv2Transform:{value:new Ln},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ln}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ln}}},si={basic:{uniforms:Gt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Gt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.fog,ge.lights,{emissive:{value:new Pe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Gt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Gt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Gt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Pe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Gt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Gt([ge.points,ge.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Gt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Gt([ge.common,ge.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Gt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Gt([ge.sprite,ge.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ln},t2D:{value:null}},vertexShader:He.background_vert,fragmentShader:He.background_frag},cube:{uniforms:Gt([ge.envmap,{opacity:{value:1}}]),vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Gt([ge.common,ge.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Gt([ge.lights,ge.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};si.physical={uniforms:Gt([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Le(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};function n2(i,e,t,n,r,s){const a=new Pe(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function p(m,d){let _=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=e.get(v));const b=i.xr,M=b.getSession&&b.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?g(a,o):v&&v.isColor&&(g(v,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===vc)?(c===void 0&&(c=new _n(new Io(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:ma(si.cube.uniforms),vertexShader:si.cube.vertexShader,fragmentShader:si.cube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||f!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new _n(new xh(2,2),new cs({name:"BackgroundMaterial",uniforms:ma(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:ca,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){t.buffers.color.setClear(m.r,m.g,m.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),o=d,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:p}}function i2(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function f(k,H,U,z,B){let G=!1;if(a){const J=m(z,U,H);c!==J&&(c=J,p(c.object)),G=_(k,z,U,B),G&&v(k,z,U,B)}else{const J=H.wireframe===!0;(c.geometry!==z.id||c.program!==U.id||c.wireframe!==J)&&(c.geometry=z.id,c.program=U.id,c.wireframe=J,G=!0)}B!==null&&t.update(B,34963),(G||u)&&(u=!1,x(k,H,U,z),B!==null&&i.bindBuffer(34963,t.get(B).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(k){return n.isWebGL2?i.bindVertexArray(k):s.bindVertexArrayOES(k)}function g(k){return n.isWebGL2?i.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function m(k,H,U){const z=U.wireframe===!0;let B=o[k.id];B===void 0&&(B={},o[k.id]=B);let G=B[H.id];G===void 0&&(G={},B[H.id]=G);let J=G[z];return J===void 0&&(J=d(h()),G[z]=J),J}function d(k){const H=[],U=[],z=[];for(let B=0;B<r;B++)H[B]=0,U[B]=0,z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:U,attributeDivisors:z,object:k,attributes:{},index:null}}function _(k,H,U,z){const B=c.attributes,G=H.attributes;let J=0;const ue=U.getAttributes();for(const se in ue)if(ue[se].location>=0){const _e=B[se];let Se=G[se];if(Se===void 0&&(se==="instanceMatrix"&&k.instanceMatrix&&(Se=k.instanceMatrix),se==="instanceColor"&&k.instanceColor&&(Se=k.instanceColor)),_e===void 0||_e.attribute!==Se||Se&&_e.data!==Se.data)return!0;J++}return c.attributesNum!==J||c.index!==z}function v(k,H,U,z){const B={},G=H.attributes;let J=0;const ue=U.getAttributes();for(const se in ue)if(ue[se].location>=0){let _e=G[se];_e===void 0&&(se==="instanceMatrix"&&k.instanceMatrix&&(_e=k.instanceMatrix),se==="instanceColor"&&k.instanceColor&&(_e=k.instanceColor));const Se={};Se.attribute=_e,_e&&_e.data&&(Se.data=_e.data),B[se]=Se,J++}c.attributes=B,c.attributesNum=J,c.index=z}function b(){const k=c.newAttributes;for(let H=0,U=k.length;H<U;H++)k[H]=0}function M(k){y(k,0)}function y(k,H){const U=c.newAttributes,z=c.enabledAttributes,B=c.attributeDivisors;U[k]=1,z[k]===0&&(i.enableVertexAttribArray(k),z[k]=1),B[k]!==H&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,H),B[k]=H)}function E(){const k=c.newAttributes,H=c.enabledAttributes;for(let U=0,z=H.length;U<z;U++)H[U]!==k[U]&&(i.disableVertexAttribArray(U),H[U]=0)}function A(k,H,U,z,B,G){n.isWebGL2===!0&&(U===5124||U===5125)?i.vertexAttribIPointer(k,H,U,B,G):i.vertexAttribPointer(k,H,U,z,B,G)}function x(k,H,U,z){if(n.isWebGL2===!1&&(k.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const B=z.attributes,G=U.getAttributes(),J=H.defaultAttributeValues;for(const ue in G){const se=G[ue];if(se.location>=0){let oe=B[ue];if(oe===void 0&&(ue==="instanceMatrix"&&k.instanceMatrix&&(oe=k.instanceMatrix),ue==="instanceColor"&&k.instanceColor&&(oe=k.instanceColor)),oe!==void 0){const _e=oe.normalized,Se=oe.itemSize,ne=t.get(oe);if(ne===void 0)continue;const Ne=ne.buffer,Ee=ne.type,Ae=ne.bytesPerElement;if(oe.isInterleavedBufferAttribute){const xe=oe.data,Xe=xe.stride,Ie=oe.offset;if(xe.isInstancedInterleavedBuffer){for(let P=0;P<se.locationSize;P++)y(se.location+P,xe.meshPerAttribute);k.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let P=0;P<se.locationSize;P++)M(se.location+P);i.bindBuffer(34962,Ne);for(let P=0;P<se.locationSize;P++)A(se.location+P,Se/se.locationSize,Ee,_e,Xe*Ae,(Ie+Se/se.locationSize*P)*Ae)}else{if(oe.isInstancedBufferAttribute){for(let xe=0;xe<se.locationSize;xe++)y(se.location+xe,oe.meshPerAttribute);k.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let xe=0;xe<se.locationSize;xe++)M(se.location+xe);i.bindBuffer(34962,Ne);for(let xe=0;xe<se.locationSize;xe++)A(se.location+xe,Se/se.locationSize,Ee,_e,Se*Ae,Se/se.locationSize*xe*Ae)}}else if(J!==void 0){const _e=J[ue];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(se.location,_e);break;case 3:i.vertexAttrib3fv(se.location,_e);break;case 4:i.vertexAttrib4fv(se.location,_e);break;default:i.vertexAttrib1fv(se.location,_e)}}}}E()}function S(){X();for(const k in o){const H=o[k];for(const U in H){const z=H[U];for(const B in z)g(z[B].object),delete z[B];delete H[U]}delete o[k]}}function L(k){if(o[k.id]===void 0)return;const H=o[k.id];for(const U in H){const z=H[U];for(const B in z)g(z[B].object),delete z[B];delete H[U]}delete o[k.id]}function I(k){for(const H in o){const U=o[H];if(U[k.id]===void 0)continue;const z=U[k.id];for(const B in z)g(z[B].object),delete z[B];delete U[k.id]}}function X(){W(),u=!0,c!==l&&(c=l,p(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:X,resetDefaultState:W,dispose:S,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:M,disableUnusedAttributes:E}}function r2(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}function o(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(r)h=i,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function s2(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),h=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),d=i.getParameter(36347),_=i.getParameter(36348),v=i.getParameter(36349),b=h>0,M=a||e.has("OES_texture_float"),y=b&&M,E=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:b,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:E}}function a2(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Fr,o=new Ln,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,p){const g=f.length!==0||h||n!==0||r;return r=h,t=u(f,p,0),n=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,p){const g=f.clippingPlanes,m=f.clipIntersection,d=f.clipShadows,_=i.get(f);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const v=s?0:n,b=v*4;let M=_.clippingState||null;l.value=M,M=u(g,h,b,p);for(let y=0;y!==b;++y)M[y]=t[y];_.clippingState=M,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,g){const m=f!==null?f.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const _=p+m*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(d===null||d.length<_)&&(d=new Float32Array(_));for(let b=0,M=p;b!==m;++b,M+=4)a.copy(f[b]).applyMatrix4(v,o),a.normal.toArray(d,M),d[M+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function o2(i){let e=new WeakMap;function t(a,o){return o===Fl?a.mapping=ua:o===sf&&(a.mapping=fa),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Fl||o===sf)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new SM(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class yh extends W_{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const js=4,Ip=[.125,.215,.35,.446,.526,.582],Hr=20,mu=new yh,Dp=new Pe;let gu=null;const zr=(1+Math.sqrt(5))/2,zs=1/zr,Op=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,zr,zs),new N(0,zr,-zs),new N(zs,0,zr),new N(-zs,0,zr),new N(zr,zs,0),new N(-zr,zs,0)];class Np{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){gu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gu),e.scissorTest=!1,ol(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ua||e.mapping===fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gu=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Oi,format:Xn,encoding:yr,depthBuffer:!1},r=kp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l2(s)),this._blurMaterial=c2(s,e,t)}return r}_compileMaterial(e){const t=new _n(this._lodPlanes[0],e);this._renderer.compile(t,mu)}_sceneToCubeUV(e,t,n,r){const o=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Dp),u.toneMapping=ki,u.autoClear=!1;const p=new qr({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),g=new _n(new Io,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(Dp),m=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):v===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const b=this._cubeSize;ol(r,v*b,_>2?b:0,b,b),u.setRenderTarget(r),m&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ua||e.mapping===fa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new _n(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ol(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,mu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Op[(r-1)%Op.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new _n(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Hr-1),m=s/g,d=isFinite(s)?1+Math.floor(u*m):Hr;d>Hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Hr}`);const _=[];let v=0;for(let A=0;A<Hr;++A){const x=A/m,S=Math.exp(-x*x/2);_.push(S),A===0?v+=S:A<d&&(v+=2*S)}for(let A=0;A<_.length;A++)_[A]=_[A]/v;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-n;const M=this._sizeLods[r],y=3*M*(r>b-js?r-b+js:0),E=4*(this._cubeSize-M);ol(t,y,E,3*M,2*M),l.setRenderTarget(t),l.render(f,mu)}}function l2(i){const e=[],t=[],n=[];let r=i;const s=i-js+1+Ip.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-js?l=Ip[a-i+js-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,m=3,d=2,_=1,v=new Float32Array(m*g*p),b=new Float32Array(d*g*p),M=new Float32Array(_*g*p);for(let E=0;E<p;E++){const A=E%3*2/3-1,x=E>2?0:-1,S=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];v.set(S,m*g*E),b.set(h,d*g*E);const L=[E,E,E,E,E,E];M.set(L,_*g*E)}const y=new kn;y.setAttribute("position",new an(v,m)),y.setAttribute("uv",new an(b,d)),y.setAttribute("faceIndex",new an(M,_)),e.push(y),r>js&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kp(i,e,t){const n=new ls(i,e,t);return n.texture.mapping=vc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ol(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function c2(i,e,t){const n=new Float32Array(Hr),r=new N(0,1,0);return new cs({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Fp(){return new cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function zp(){return new cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function bh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function u2(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fl||l===sf,u=l===ua||l===fa;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Np(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Np(i));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function f2(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function h2(i,e,t,n){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const p=f.morphAttributes;for(const g in p){const m=p[g];for(let d=0,_=m.length;d<_;d++)e.update(m[d],34962)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let m=0;if(p!==null){const v=p.array;m=p.version;for(let b=0,M=v.length;b<M;b+=3){const y=v[b+0],E=v[b+1],A=v[b+2];h.push(y,E,E,A,A,y)}}else{const v=g.array;m=g.version;for(let b=0,M=v.length/3-1;b<M;b+=3){const y=b+0,E=b+1,A=b+2;h.push(y,E,E,A,A,y)}}const d=new(F_(h)?H_:V_)(h,1);d.version=m;const _=s.get(f);_&&e.remove(_),s.set(f,d)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function d2(i,e,t,n){const r=n.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,p){i.drawElements(s,p,o,h*l),t.update(p,s,1)}function f(h,p,g){if(g===0)return;let m,d;if(r)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,p,o,h*l,g),t.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function p2(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function m2(i,e){return i[0]-e[0]}function g2(i,e){return Math.abs(e[1])-Math.abs(i[1])}function _u(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function _2(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new rt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=m!==void 0?m.length:0;let _=s.get(u);if(_===void 0||_.count!==d){let U=function(){k.dispose(),s.delete(u),u.removeEventListener("dispose",U)};var g=U;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let L=0;M===!0&&(L=1),y===!0&&(L=2),E===!0&&(L=3);let I=u.attributes.position.count*L,X=1;I>e.maxTextureSize&&(X=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const W=new Float32Array(I*X*4*d),k=new G_(W,I,X,d);k.type=qn,k.needsUpdate=!0;const H=L*4;for(let z=0;z<d;z++){const B=A[z],G=x[z],J=S[z],ue=I*X*4*z;for(let se=0;se<B.count;se++){const oe=se*H;M===!0&&(a.fromBufferAttribute(B,se),B.normalized===!0&&_u(a,B),W[ue+oe+0]=a.x,W[ue+oe+1]=a.y,W[ue+oe+2]=a.z,W[ue+oe+3]=0),y===!0&&(a.fromBufferAttribute(G,se),G.normalized===!0&&_u(a,G),W[ue+oe+4]=a.x,W[ue+oe+5]=a.y,W[ue+oe+6]=a.z,W[ue+oe+7]=0),E===!0&&(a.fromBufferAttribute(J,se),J.normalized===!0&&_u(a,J),W[ue+oe+8]=a.x,W[ue+oe+9]=a.y,W[ue+oe+10]=a.z,W[ue+oe+11]=J.itemSize===4?a.w:1)}}_={count:d,texture:k,size:new Le(I,X)},s.set(u,_),u.addEventListener("dispose",U)}let v=0;for(let M=0;M<p.length;M++)v+=p[M];const b=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",p),h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let d=n[u.id];if(d===void 0||d.length!==m){d=[];for(let y=0;y<m;y++)d[y]=[y,0];n[u.id]=d}for(let y=0;y<m;y++){const E=d[y];E[0]=y,E[1]=p[y]}d.sort(g2);for(let y=0;y<8;y++)y<m&&d[y][1]?(o[y][0]=d[y][0],o[y][1]=d[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(m2);const _=u.morphAttributes.position,v=u.morphAttributes.normal;let b=0;for(let y=0;y<8;y++){const E=o[y],A=E[0],x=E[1];A!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+y)!==_[A]&&u.setAttribute("morphTarget"+y,_[A]),v&&u.getAttribute("morphNormal"+y)!==v[A]&&u.setAttribute("morphNormal"+y,v[A]),r[y]=x,b+=x):(_&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),v&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const M=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function v2(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const q_=new Jt,X_=new G_,Y_=new oM,K_=new j_,Up=[],Bp=[],Gp=new Float32Array(16),Vp=new Float32Array(9),Hp=new Float32Array(4);function Ca(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Up[r];if(s===void 0&&(s=new Float32Array(r),Up[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yc(i,e){let t=Bp[e];t===void 0&&(t=new Int32Array(e),Bp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function x2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function y2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function b2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function M2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function S2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Hp.set(n),i.uniformMatrix2fv(this.addr,!1,Hp),en(t,n)}}function w2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Vp.set(n),i.uniformMatrix3fv(this.addr,!1,Vp),en(t,n)}}function T2(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Gp.set(n),i.uniformMatrix4fv(this.addr,!1,Gp),en(t,n)}}function E2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function A2(i,e){const t=this.cache;Qt(t,e)||(i.uniform2iv(this.addr,e),en(t,e))}function C2(i,e){const t=this.cache;Qt(t,e)||(i.uniform3iv(this.addr,e),en(t,e))}function P2(i,e){const t=this.cache;Qt(t,e)||(i.uniform4iv(this.addr,e),en(t,e))}function R2(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function L2(i,e){const t=this.cache;Qt(t,e)||(i.uniform2uiv(this.addr,e),en(t,e))}function I2(i,e){const t=this.cache;Qt(t,e)||(i.uniform3uiv(this.addr,e),en(t,e))}function D2(i,e){const t=this.cache;Qt(t,e)||(i.uniform4uiv(this.addr,e),en(t,e))}function O2(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||q_,r)}function N2(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Y_,r)}function k2(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||K_,r)}function F2(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||X_,r)}function z2(i){switch(i){case 5126:return x2;case 35664:return y2;case 35665:return b2;case 35666:return M2;case 35674:return S2;case 35675:return w2;case 35676:return T2;case 5124:case 35670:return E2;case 35667:case 35671:return A2;case 35668:case 35672:return C2;case 35669:case 35673:return P2;case 5125:return R2;case 36294:return L2;case 36295:return I2;case 36296:return D2;case 35678:case 36198:case 36298:case 36306:case 35682:return O2;case 35679:case 36299:case 36307:return N2;case 35680:case 36300:case 36308:case 36293:return k2;case 36289:case 36303:case 36311:case 36292:return F2}}function U2(i,e){i.uniform1fv(this.addr,e)}function B2(i,e){const t=Ca(e,this.size,2);i.uniform2fv(this.addr,t)}function G2(i,e){const t=Ca(e,this.size,3);i.uniform3fv(this.addr,t)}function V2(i,e){const t=Ca(e,this.size,4);i.uniform4fv(this.addr,t)}function H2(i,e){const t=Ca(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function W2(i,e){const t=Ca(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function j2(i,e){const t=Ca(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $2(i,e){i.uniform1iv(this.addr,e)}function q2(i,e){i.uniform2iv(this.addr,e)}function X2(i,e){i.uniform3iv(this.addr,e)}function Y2(i,e){i.uniform4iv(this.addr,e)}function K2(i,e){i.uniform1uiv(this.addr,e)}function Z2(i,e){i.uniform2uiv(this.addr,e)}function J2(i,e){i.uniform3uiv(this.addr,e)}function Q2(i,e){i.uniform4uiv(this.addr,e)}function eT(i,e,t){const n=e.length,r=yc(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||q_,r[s])}function tT(i,e,t){const n=e.length,r=yc(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Y_,r[s])}function nT(i,e,t){const n=e.length,r=yc(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||K_,r[s])}function iT(i,e,t){const n=e.length,r=yc(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||X_,r[s])}function rT(i){switch(i){case 5126:return U2;case 35664:return B2;case 35665:return G2;case 35666:return V2;case 35674:return H2;case 35675:return W2;case 35676:return j2;case 5124:case 35670:return $2;case 35667:case 35671:return q2;case 35668:case 35672:return X2;case 35669:case 35673:return Y2;case 5125:return K2;case 36294:return Z2;case 36295:return J2;case 36296:return Q2;case 35678:case 36198:case 36298:case 36306:case 35682:return eT;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return nT;case 36289:case 36303:case 36311:case 36292:return iT}}class sT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=z2(t.type)}}class aT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=rT(t.type)}}class oT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const vu=/(\w+)(\])?(\[|\.)?/g;function Wp(i,e){i.seq.push(e),i.map[e.id]=e}function lT(i,e,t){const n=i.name,r=n.length;for(vu.lastIndex=0;;){const s=vu.exec(n),a=vu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Wp(t,c===void 0?new sT(o,i,e):new aT(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new oT(o),Wp(t,f)),t=f}}}class Sl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);lT(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function jp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let cT=0;function uT(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function fT(i){switch(i){case yr:return["Linear","( value )"];case tt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function $p(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+uT(i.getShaderSource(e),a)}else return r}function hT(i,e){const t=fT(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function dT(i,e){let t;switch(e){case x1:t="Linear";break;case y1:t="Reinhard";break;case b1:t="OptimizedCineon";break;case L_:t="ACESFilmic";break;case M1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pT(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($a).join(`
`)}function mT(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gT(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function $a(i){return i!==""}function qp(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _T=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(i){return i.replace(_T,vT)}function vT(i,e){const t=He[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ff(t)}const xT=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,yT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yp(i){return i.replace(yT,Z_).replace(xT,bT)}function bT(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Z_(i,e,t,n)}function Z_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kp(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function MT(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===A_?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kb?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ja&&(e="SHADOWMAP_TYPE_VSM"),e}function ST(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ua:case fa:e="ENVMAP_TYPE_CUBE";break;case vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wT(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fa:e="ENVMAP_MODE_REFRACTION";break}return e}function TT(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case R_:e="ENVMAP_BLENDING_MULTIPLY";break;case _1:e="ENVMAP_BLENDING_MIX";break;case v1:e="ENVMAP_BLENDING_ADD";break}return e}function ET(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function AT(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=MT(t),c=ST(t),u=wT(t),f=TT(t),h=ET(t),p=t.isWebGL2?"":pT(t),g=mT(s),m=r.createProgram();let d,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter($a).join(`
`),d.length>0&&(d+=`
`),_=[p,g].filter($a).join(`
`),_.length>0&&(_+=`
`)):(d=[Kp(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($a).join(`
`),_=[p,Kp(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?He.tonemapping_pars_fragment:"",t.toneMapping!==ki?dT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.encodings_pars_fragment,hT("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($a).join(`
`)),a=ff(a),a=qp(a,t),a=Xp(a,t),o=ff(o),o=qp(o,t),o=Xp(o,t),a=Yp(a),o=Yp(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=v+d+a,M=v+_+o,y=jp(r,35633,b),E=jp(r,35632,M);if(r.attachShader(m,y),r.attachShader(m,E),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),i.debug.checkShaderErrors){const S=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(y).trim(),I=r.getShaderInfoLog(E).trim();let X=!0,W=!0;if(r.getProgramParameter(m,35714)===!1){X=!1;const k=$p(r,y,"vertex"),H=$p(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+S+`
`+k+`
`+H)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(L===""||I==="")&&(W=!1);W&&(this.diagnostics={runnable:X,programLog:S,vertexShader:{log:L,prefix:d},fragmentShader:{log:I,prefix:_}})}r.deleteShader(y),r.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new Sl(r,m)),A};let x;return this.getAttributes=function(){return x===void 0&&(x=gT(r,m)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=cT++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=E,this}let CT=0;class PT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new RT(e);t.set(e,n)}return t.get(e)}}class RT{constructor(e){this.id=CT++,this.code=e,this.usedTimes=0}}function LT(i,e,t,n,r,s,a){const o=new _h,l=new PT,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x,S,L,I,X){const W=I.fog,k=X.geometry,H=x.isMeshStandardMaterial?I.environment:null,U=(x.isMeshStandardMaterial?t:e).get(x.envMap||H),z=!!U&&U.mapping===vc?U.image.height:null,B=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const G=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,J=G!==void 0?G.length:0;let ue=0;k.morphAttributes.position!==void 0&&(ue=1),k.morphAttributes.normal!==void 0&&(ue=2),k.morphAttributes.color!==void 0&&(ue=3);let se,oe,_e,Se;if(B){const Xe=si[B];se=Xe.vertexShader,oe=Xe.fragmentShader}else se=x.vertexShader,oe=x.fragmentShader,l.update(x),_e=l.getVertexShaderID(x),Se=l.getFragmentShaderID(x);const ne=i.getRenderTarget(),Ne=x.alphaTest>0,Ee=x.clearcoat>0,Ae=x.iridescence>0;return{isWebGL2:u,shaderID:B,shaderName:x.type,vertexShader:se,fragmentShader:oe,defines:x.defines,customVertexShaderID:_e,customFragmentShaderID:Se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:X.isInstancedMesh===!0,instancingColor:X.isInstancedMesh===!0&&X.instanceColor!==null,supportsVertexTextures:h,outputEncoding:ne===null?i.outputEncoding:ne.isXRRenderTarget===!0?ne.texture.encoding:yr,map:!!x.map,matcap:!!x.matcap,envMap:!!U,envMapMode:U&&U.mapping,envMapCubeUVHeight:z,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===V1,tangentSpaceNormalMap:x.normalMapType===mh,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===tt,clearcoat:Ee,clearcoatMap:Ee&&!!x.clearcoatMap,clearcoatRoughnessMap:Ee&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:Ee&&!!x.clearcoatNormalMap,iridescence:Ae,iridescenceMap:Ae&&!!x.iridescenceMap,iridescenceThicknessMap:Ae&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Qs,alphaMap:!!x.alphaMap,alphaTest:Ne,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!k.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!W,useFog:x.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ue,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:ki,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===as,flipSided:x.side===Jn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)S.push(L),S.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(_(S,x),v(S,x),S.push(i.outputEncoding)),S.push(x.customProgramCacheKey),S.join()}function _(x,S){x.push(S.precision),x.push(S.outputEncoding),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.combine),x.push(S.vertexUvs),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function v(x,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.map&&o.enable(4),S.matcap&&o.enable(5),S.envMap&&o.enable(6),S.lightMap&&o.enable(7),S.aoMap&&o.enable(8),S.emissiveMap&&o.enable(9),S.bumpMap&&o.enable(10),S.normalMap&&o.enable(11),S.objectSpaceNormalMap&&o.enable(12),S.tangentSpaceNormalMap&&o.enable(13),S.clearcoat&&o.enable(14),S.clearcoatMap&&o.enable(15),S.clearcoatRoughnessMap&&o.enable(16),S.clearcoatNormalMap&&o.enable(17),S.iridescence&&o.enable(18),S.iridescenceMap&&o.enable(19),S.iridescenceThicknessMap&&o.enable(20),S.displacementMap&&o.enable(21),S.specularMap&&o.enable(22),S.roughnessMap&&o.enable(23),S.metalnessMap&&o.enable(24),S.gradientMap&&o.enable(25),S.alphaMap&&o.enable(26),S.alphaTest&&o.enable(27),S.vertexColors&&o.enable(28),S.vertexAlphas&&o.enable(29),S.vertexUvs&&o.enable(30),S.vertexTangents&&o.enable(31),S.uvsVertexOnly&&o.enable(32),S.fog&&o.enable(33),x.push(o.mask),o.disableAll(),S.useFog&&o.enable(0),S.flatShading&&o.enable(1),S.logarithmicDepthBuffer&&o.enable(2),S.skinning&&o.enable(3),S.morphTargets&&o.enable(4),S.morphNormals&&o.enable(5),S.morphColors&&o.enable(6),S.premultipliedAlpha&&o.enable(7),S.shadowMapEnabled&&o.enable(8),S.physicallyCorrectLights&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.specularIntensityMap&&o.enable(14),S.specularColorMap&&o.enable(15),S.transmission&&o.enable(16),S.transmissionMap&&o.enable(17),S.thicknessMap&&o.enable(18),S.sheen&&o.enable(19),S.sheenColorMap&&o.enable(20),S.sheenRoughnessMap&&o.enable(21),S.decodeVideoTexture&&o.enable(22),S.opaque&&o.enable(23),x.push(o.mask)}function b(x){const S=g[x.type];let L;if(S){const I=si[S];L=xM.clone(I.uniforms)}else L=x.uniforms;return L}function M(x,S){let L;for(let I=0,X=c.length;I<X;I++){const W=c[I];if(W.cacheKey===S){L=W,++L.usedTimes;break}}return L===void 0&&(L=new AT(i,S,x,s),c.push(L)),L}function y(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),x.destroy()}}function E(x){l.remove(x)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:M,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:A}}function IT(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function DT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jp(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,h,p,g,m,d){let _=i[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:m,group:d},i[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=p,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=m,_.group=d),e++,_}function o(f,h,p,g,m,d){const _=a(f,h,p,g,m,d);p.transmission>0?n.push(_):p.transparent===!0?r.push(_):t.push(_)}function l(f,h,p,g,m,d){const _=a(f,h,p,g,m,d);p.transmission>0?n.unshift(_):p.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||DT),n.length>1&&n.sort(h||Zp),r.length>1&&r.sort(h||Zp)}function u(){for(let f=e,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function OT(){let i=new WeakMap;function e(n,r){let s;return i.has(n)===!1?(s=new Jp,i.set(n,[s])):r>=i.get(n).length?(s=new Jp,i.get(n).push(s)):s=i.get(n)[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function NT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Pe};break;case"SpotLight":t={position:new N,direction:new N,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function kT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let FT=0;function zT(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function UT(i,e){const t=new NT,n=kT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new N);const s=new N,a=new Je,o=new Je;function l(u,f){let h=0,p=0,g=0;for(let S=0;S<9;S++)r.probe[S].set(0,0,0);let m=0,d=0,_=0,v=0,b=0,M=0,y=0,E=0;u.sort(zT);const A=f!==!0?Math.PI:1;for(let S=0,L=u.length;S<L;S++){const I=u[S],X=I.color,W=I.intensity,k=I.distance,H=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=X.r*W*A,p+=X.g*W*A,g+=X.b*W*A;else if(I.isLightProbe)for(let U=0;U<9;U++)r.probe[U].addScaledVector(I.sh.coefficients[U],W);else if(I.isDirectionalLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*A),I.castShadow){const z=I.shadow,B=n.get(I);B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,r.directionalShadow[m]=B,r.directionalShadowMap[m]=H,r.directionalShadowMatrix[m]=I.shadow.matrix,M++}r.directional[m]=U,m++}else if(I.isSpotLight){const U=t.get(I);if(U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(X).multiplyScalar(W*A),U.distance=k,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,I.castShadow){const z=I.shadow,B=n.get(I);B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,r.spotShadow[_]=B,r.spotShadowMap[_]=H,r.spotShadowMatrix[_]=I.shadow.matrix,E++}r.spot[_]=U,_++}else if(I.isRectAreaLight){const U=t.get(I);U.color.copy(X).multiplyScalar(W),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),r.rectArea[v]=U,v++}else if(I.isPointLight){const U=t.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*A),U.distance=I.distance,U.decay=I.decay,I.castShadow){const z=I.shadow,B=n.get(I);B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,B.shadowCameraNear=z.camera.near,B.shadowCameraFar=z.camera.far,r.pointShadow[d]=B,r.pointShadowMap[d]=H,r.pointShadowMatrix[d]=I.shadow.matrix,y++}r.point[d]=U,d++}else if(I.isHemisphereLight){const U=t.get(I);U.skyColor.copy(I.color).multiplyScalar(W*A),U.groundColor.copy(I.groundColor).multiplyScalar(W*A),r.hemi[b]=U,b++}}v>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const x=r.hash;(x.directionalLength!==m||x.pointLength!==d||x.spotLength!==_||x.rectAreaLength!==v||x.hemiLength!==b||x.numDirectionalShadows!==M||x.numPointShadows!==y||x.numSpotShadows!==E)&&(r.directional.length=m,r.spot.length=_,r.rectArea.length=v,r.point.length=d,r.hemi.length=b,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=y,r.spotShadowMatrix.length=E,x.directionalLength=m,x.pointLength=d,x.spotLength=_,x.rectAreaLength=v,x.hemiLength=b,x.numDirectionalShadows=M,x.numPointShadows=y,x.numSpotShadows=E,r.version=FT++)}function c(u,f){let h=0,p=0,g=0,m=0,d=0;const _=f.matrixWorldInverse;for(let v=0,b=u.length;v<b;v++){const M=u[v];if(M.isDirectionalLight){const y=r.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),h++}else if(M.isSpotLight){const y=r.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),g++}else if(M.isRectAreaLight){const y=r.rectArea[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),o.identity(),a.copy(M.matrixWorld),a.premultiply(_),o.extractRotation(a),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){const y=r.point[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),p++}else if(M.isHemisphereLight){const y=r.hemi[d];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:r}}function Qp(i,e){const t=new UT(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(f){n.push(f)}function o(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function BT(i,e){let t=new WeakMap;function n(s,a=0){let o;return t.has(s)===!1?(o=new Qp(i,e),t.set(s,[o])):a>=t.get(s).length?(o=new Qp(i,e),t.get(s).push(o)):o=t.get(s)[a],o}function r(){t=new WeakMap}return{get:n,dispose:r}}class GT extends hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VT extends hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const HT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jT(i,e,t){let n=new vh;const r=new Le,s=new Le,a=new rt,o=new GT({depthPacking:G1}),l=new VT,c={},u=t.maxTextureSize,f={0:Jn,1:ca,2:as},h=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:HT,fragmentShader:WT}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new kn;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new _n(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=A_,this.render=function(M,y,E){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||M.length===0)return;const A=i.getRenderTarget(),x=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),L=i.state;L.setBlending(mr),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let I=0,X=M.length;I<X;I++){const W=M[I],k=W.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const H=k.getFrameExtents();if(r.multiply(H),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,k.mapSize.y=s.y)),k.map===null){const z=this.type!==ja?{minFilter:kt,magFilter:kt}:{};k.map=new ls(r.x,r.y,z),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const U=k.getViewportCount();for(let z=0;z<U;z++){const B=k.getViewport(z);a.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),L.viewport(a),k.updateMatrices(W,z),n=k.getFrustum(),b(y,E,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===ja&&_(k,E),k.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(A,x,S)};function _(M,y){const E=e.update(m);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ls(r.x,r.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(y,null,E,h,m,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(y,null,E,p,m,null)}function v(M,y,E,A,x,S){let L=null;const I=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0?L=I:L=E.isPointLight===!0?l:o,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){const X=L.uuid,W=y.uuid;let k=c[X];k===void 0&&(k={},c[X]=k);let H=k[W];H===void 0&&(H=L.clone(),k[W]=H),L=H}return L.visible=y.visible,L.wireframe=y.wireframe,S===ja?L.side=y.shadowSide!==null?y.shadowSide:y.side:L.side=y.shadowSide!==null?y.shadowSide:f[y.side],L.alphaMap=y.alphaMap,L.alphaTest=y.alphaTest,L.clipShadows=y.clipShadows,L.clippingPlanes=y.clippingPlanes,L.clipIntersection=y.clipIntersection,L.displacementMap=y.displacementMap,L.displacementScale=y.displacementScale,L.displacementBias=y.displacementBias,L.wireframeLinewidth=y.wireframeLinewidth,L.linewidth=y.linewidth,E.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(E.matrixWorld),L.nearDistance=A,L.farDistance=x),L}function b(M,y,E,A,x){if(M.visible===!1)return;if(M.layers.test(y.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===ja)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);const I=e.update(M),X=M.material;if(Array.isArray(X)){const W=I.groups;for(let k=0,H=W.length;k<H;k++){const U=W[k],z=X[U.materialIndex];if(z&&z.visible){const B=v(M,z,A,E.near,E.far,x);i.renderBufferDirect(E,null,I,B,M,U)}}}else if(X.visible){const W=v(M,X,A,E.near,E.far,x);i.renderBufferDirect(E,null,I,W,M,null)}}const L=M.children;for(let I=0,X=L.length;I<X;I++)b(L[I],y,E,A,x)}}function $T(i,e,t){const n=t.isWebGL2;function r(){let O=!1;const de=new rt;let Q=null;const be=new rt(0,0,0,0);return{setMask:function(ye){Q!==ye&&!O&&(i.colorMask(ye,ye,ye,ye),Q=ye)},setLocked:function(ye){O=ye},setClear:function(ye,Ke,Ct,gt,Xi){Xi===!0&&(ye*=gt,Ke*=gt,Ct*=gt),de.set(ye,Ke,Ct,gt),be.equals(de)===!1&&(i.clearColor(ye,Ke,Ct,gt),be.copy(de))},reset:function(){O=!1,Q=null,be.set(-1,0,0,0)}}}function s(){let O=!1,de=null,Q=null,be=null;return{setTest:function(ye){ye?Ne(2929):Ee(2929)},setMask:function(ye){de!==ye&&!O&&(i.depthMask(ye),de=ye)},setFunc:function(ye){if(Q!==ye){if(ye)switch(ye){case u1:i.depthFunc(512);break;case f1:i.depthFunc(519);break;case h1:i.depthFunc(513);break;case rf:i.depthFunc(515);break;case d1:i.depthFunc(514);break;case p1:i.depthFunc(518);break;case m1:i.depthFunc(516);break;case g1:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);Q=ye}},setLocked:function(ye){O=ye},setClear:function(ye){be!==ye&&(i.clearDepth(ye),be=ye)},reset:function(){O=!1,de=null,Q=null,be=null}}}function a(){let O=!1,de=null,Q=null,be=null,ye=null,Ke=null,Ct=null,gt=null,Xi=null;return{setTest:function(ht){O||(ht?Ne(2960):Ee(2960))},setMask:function(ht){de!==ht&&!O&&(i.stencilMask(ht),de=ht)},setFunc:function(ht,xi,Sn){(Q!==ht||be!==xi||ye!==Sn)&&(i.stencilFunc(ht,xi,Sn),Q=ht,be=xi,ye=Sn)},setOp:function(ht,xi,Sn){(Ke!==ht||Ct!==xi||gt!==Sn)&&(i.stencilOp(ht,xi,Sn),Ke=ht,Ct=xi,gt=Sn)},setLocked:function(ht){O=ht},setClear:function(ht){Xi!==ht&&(i.clearStencil(ht),Xi=ht)},reset:function(){O=!1,de=null,Q=null,be=null,ye=null,Ke=null,Ct=null,gt=null,Xi=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,m=[],d=null,_=!1,v=null,b=null,M=null,y=null,E=null,A=null,x=null,S=!1,L=null,I=null,X=null,W=null,k=null;const H=i.getParameter(35661);let U=!1,z=0;const B=i.getParameter(7938);B.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(B)[1]),U=z>=1):B.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),U=z>=2);let G=null,J={};const ue=i.getParameter(3088),se=i.getParameter(2978),oe=new rt().fromArray(ue),_e=new rt().fromArray(se);function Se(O,de,Q){const be=new Uint8Array(4),ye=i.createTexture();i.bindTexture(O,ye),i.texParameteri(O,10241,9728),i.texParameteri(O,10240,9728);for(let Ke=0;Ke<Q;Ke++)i.texImage2D(de+Ke,0,6408,1,1,0,6408,5121,be);return ye}const ne={};ne[3553]=Se(3553,3553,1),ne[34067]=Se(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(2929),l.setFunc(rf),ee(!1),te(Hd),Ne(2884),D(mr);function Ne(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Ee(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Ae(O,de){return p[O]!==de?(i.bindFramebuffer(O,de),p[O]=de,n&&(O===36009&&(p[36160]=de),O===36160&&(p[36009]=de)),!0):!1}function xe(O,de){let Q=m,be=!1;if(O)if(Q=g.get(de),Q===void 0&&(Q=[],g.set(de,Q)),O.isWebGLMultipleRenderTargets){const ye=O.texture;if(Q.length!==ye.length||Q[0]!==36064){for(let Ke=0,Ct=ye.length;Ke<Ct;Ke++)Q[Ke]=36064+Ke;Q.length=ye.length,be=!0}}else Q[0]!==36064&&(Q[0]=36064,be=!0);else Q[0]!==1029&&(Q[0]=1029,be=!0);be&&(t.isWebGL2?i.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Xe(O){return d!==O?(i.useProgram(O),d=O,!0):!1}const Ie={[Vs]:32774,[Qb]:32778,[e1]:32779};if(n)Ie[qd]=32775,Ie[Xd]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(Ie[qd]=O.MIN_EXT,Ie[Xd]=O.MAX_EXT)}const P={[t1]:0,[n1]:1,[i1]:768,[C_]:770,[c1]:776,[o1]:774,[s1]:772,[r1]:769,[P_]:771,[l1]:775,[a1]:773};function D(O,de,Q,be,ye,Ke,Ct,gt){if(O===mr){_===!0&&(Ee(3042),_=!1);return}if(_===!1&&(Ne(3042),_=!0),O!==Jb){if(O!==v||gt!==S){if((b!==Vs||E!==Vs)&&(i.blendEquation(32774),b=Vs,E=Vs),gt)switch(O){case Qs:i.blendFuncSeparate(1,771,1,771);break;case Wd:i.blendFunc(1,1);break;case jd:i.blendFuncSeparate(0,769,0,1);break;case $d:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Qs:i.blendFuncSeparate(770,771,1,771);break;case Wd:i.blendFunc(770,1);break;case jd:i.blendFuncSeparate(0,769,0,1);break;case $d:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,y=null,A=null,x=null,v=O,S=gt}return}ye=ye||de,Ke=Ke||Q,Ct=Ct||be,(de!==b||ye!==E)&&(i.blendEquationSeparate(Ie[de],Ie[ye]),b=de,E=ye),(Q!==M||be!==y||Ke!==A||Ct!==x)&&(i.blendFuncSeparate(P[Q],P[be],P[Ke],P[Ct]),M=Q,y=be,A=Ke,x=Ct),v=O,S=null}function $(O,de){O.side===as?Ee(2884):Ne(2884);let Q=O.side===Jn;de&&(Q=!Q),ee(Q),O.blending===Qs&&O.transparent===!1?D(mr):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const be=O.stencilWrite;c.setTest(be),be&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),le(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ne(32926):Ee(32926)}function ee(O){L!==O&&(O?i.frontFace(2304):i.frontFace(2305),L=O)}function te(O){O!==Xb?(Ne(2884),O!==I&&(O===Hd?i.cullFace(1029):O===Yb?i.cullFace(1028):i.cullFace(1032))):Ee(2884),I=O}function ae(O){O!==X&&(U&&i.lineWidth(O),X=O)}function le(O,de,Q){O?(Ne(32823),(W!==de||k!==Q)&&(i.polygonOffset(de,Q),W=de,k=Q)):Ee(32823)}function ce(O){O?Ne(3089):Ee(3089)}function he(O){O===void 0&&(O=33984+H-1),G!==O&&(i.activeTexture(O),G=O)}function T(O,de){G===null&&he();let Q=J[G];Q===void 0&&(Q={type:void 0,texture:void 0},J[G]=Q),(Q.type!==O||Q.texture!==de)&&(i.bindTexture(O,de||ne[O]),Q.type=O,Q.texture=de)}function w(){const O=J[G];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function F(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function C(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(O){oe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),oe.copy(O))}function me(O){_e.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),_e.copy(O))}function Te(O,de){let Q=f.get(de);Q===void 0&&(Q=new WeakMap,f.set(de,Q));let be=Q.get(O);be===void 0&&(be=i.getUniformBlockIndex(de,O.name),Q.set(O,be))}function Be(O,de){const be=f.get(de).get(O);u.get(O)!==be&&(i.uniformBlockBinding(de,be,O.__bindingPointIndex),u.set(O,be))}function Ge(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},G=null,J={},p={},g=new WeakMap,m=[],d=null,_=!1,v=null,b=null,M=null,y=null,E=null,A=null,x=null,S=!1,L=null,I=null,X=null,W=null,k=null,oe.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ne,disable:Ee,bindFramebuffer:Ae,drawBuffers:xe,useProgram:Xe,setBlending:D,setMaterial:$,setFlipSided:ee,setCullFace:te,setLineWidth:ae,setPolygonOffset:le,setScissorTest:ce,activeTexture:he,bindTexture:T,unbindTexture:w,compressedTexImage2D:F,texImage2D:Y,texImage3D:fe,updateUBOMapping:Te,uniformBlockBinding:Be,texStorage2D:ve,texStorage3D:C,texSubImage2D:j,texSubImage3D:Z,compressedTexSubImage2D:re,scissor:pe,viewport:me,reset:Ge}}function qT(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,w){return _?new OffscreenCanvas(T,w):yo("canvas")}function b(T,w,F,j){let Z=1;if((T.width>j||T.height>j)&&(Z=j/Math.max(T.width,T.height)),Z<1||w===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const re=w?Ul:Math.floor,ve=re(Z*T.width),C=re(Z*T.height);m===void 0&&(m=v(ve,C));const Y=F?v(ve,C):m;return Y.width=ve,Y.height=C,Y.getContext("2d").drawImage(T,0,0,ve,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ve+"x"+C+")."),Y}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function M(T){return uf(T.width)&&uf(T.height)}function y(T){return o?!1:T.wrapS!==rn||T.wrapT!==rn||T.minFilter!==kt&&T.minFilter!==Et}function E(T,w){return T.generateMipmaps&&w&&T.minFilter!==kt&&T.minFilter!==Et}function A(T){i.generateMipmap(T)}function x(T,w,F,j,Z=!1){if(o===!1)return w;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let re=w;return w===6403&&(F===5126&&(re=33326),F===5131&&(re=33325),F===5121&&(re=33321)),w===33319&&(F===5126&&(re=33328),F===5131&&(re=33327),F===5121&&(re=33323)),w===6408&&(F===5126&&(re=34836),F===5131&&(re=34842),F===5121&&(re=j===tt&&Z===!1?35907:32856),F===32819&&(re=32854),F===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function S(T,w,F){return E(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==kt&&T.minFilter!==Et?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function L(T){return T===kt||T===af||T===of?9728:9729}function I(T){const w=T.target;w.removeEventListener("dispose",I),W(w),w.isVideoTexture&&g.delete(w)}function X(T){const w=T.target;w.removeEventListener("dispose",X),H(w)}function W(T){const w=n.get(T);if(w.__webglInit===void 0)return;const F=T.source,j=d.get(F);if(j){const Z=j[w.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&k(T),Object.keys(j).length===0&&d.delete(F)}n.remove(T)}function k(T){const w=n.get(T);i.deleteTexture(w.__webglTexture);const F=T.source,j=d.get(F);delete j[w.__cacheKey],a.memory.textures--}function H(T){const w=T.texture,F=n.get(T),j=n.get(w);if(j.__webglTexture!==void 0&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++)i.deleteFramebuffer(F.__webglFramebuffer[Z]),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[Z]);else{if(i.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Z=0;Z<F.__webglColorRenderbuffer.length;Z++)F.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[Z]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Z=0,re=w.length;Z<re;Z++){const ve=n.get(w[Z]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(w[Z])}n.remove(w),n.remove(T)}let U=0;function z(){U=0}function B(){const T=U;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),U+=1,T}function G(T){const w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.encoding),w.join()}function J(T,w){const F=n.get(T);if(T.isVideoTexture&&ce(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(F,T,w);return}}t.activeTexture(33984+w),t.bindTexture(3553,F.__webglTexture)}function ue(T,w){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Ee(F,T,w);return}t.activeTexture(33984+w),t.bindTexture(35866,F.__webglTexture)}function se(T,w){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Ee(F,T,w);return}t.activeTexture(33984+w),t.bindTexture(32879,F.__webglTexture)}function oe(T,w){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Ae(F,T,w);return}t.activeTexture(33984+w),t.bindTexture(34067,F.__webglTexture)}const _e={[ha]:10497,[rn]:33071,[zl]:33648},Se={[kt]:9728,[af]:9984,[of]:9986,[Et]:9729,[D_]:9985,[ps]:9987};function ne(T,w,F){if(F?(i.texParameteri(T,10242,_e[w.wrapS]),i.texParameteri(T,10243,_e[w.wrapT]),(T===32879||T===35866)&&i.texParameteri(T,32882,_e[w.wrapR]),i.texParameteri(T,10240,Se[w.magFilter]),i.texParameteri(T,10241,Se[w.minFilter])):(i.texParameteri(T,10242,33071),i.texParameteri(T,10243,33071),(T===32879||T===35866)&&i.texParameteri(T,32882,33071),(w.wrapS!==rn||w.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,10240,L(w.magFilter)),i.texParameteri(T,10241,L(w.minFilter)),w.minFilter!==kt&&w.minFilter!==Et&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(w.type===qn&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Oi&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(T,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Ne(T,w){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",I));const j=w.source;let Z=d.get(j);Z===void 0&&(Z={},d.set(j,Z));const re=G(w);if(re!==T.__cacheKey){Z[re]===void 0&&(Z[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[re].usedTimes++;const ve=Z[T.__cacheKey];ve!==void 0&&(Z[T.__cacheKey].usedTimes--,ve.usedTimes===0&&k(w)),T.__cacheKey=re,T.__webglTexture=Z[re].texture}return F}function Ee(T,w,F){let j=3553;w.isDataArrayTexture&&(j=35866),w.isData3DTexture&&(j=32879);const Z=Ne(T,w),re=w.source;if(t.activeTexture(33984+F),t.bindTexture(j,T.__webglTexture),re.version!==re.__currentVersion||Z===!0){i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);const ve=y(w)&&M(w.image)===!1;let C=b(w.image,ve,!1,u);C=he(w,C);const Y=M(C)||o,fe=s.convert(w.format,w.encoding);let pe=s.convert(w.type),me=x(w.internalFormat,fe,pe,w.encoding,w.isVideoTexture);ne(j,w,Y);let Te;const Be=w.mipmaps,Ge=o&&w.isVideoTexture!==!0,O=re.__currentVersion===void 0||Z===!0,de=S(w,C,Y);if(w.isDepthTexture)me=6402,o?w.type===qn?me=36012:w.type===jr?me=33190:w.type===ea?me=35056:me=33189:w.type===qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Jr&&me===6402&&w.type!==O_&&w.type!==jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=jr,pe=s.convert(w.type)),w.format===da&&me===6402&&(me=34041,w.type!==ea&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ea,pe=s.convert(w.type))),O&&(Ge?t.texStorage2D(3553,1,me,C.width,C.height):t.texImage2D(3553,0,me,C.width,C.height,0,fe,pe,null));else if(w.isDataTexture)if(Be.length>0&&Y){Ge&&O&&t.texStorage2D(3553,de,me,Be[0].width,Be[0].height);for(let Q=0,be=Be.length;Q<be;Q++)Te=Be[Q],Ge?t.texSubImage2D(3553,Q,0,0,Te.width,Te.height,fe,pe,Te.data):t.texImage2D(3553,Q,me,Te.width,Te.height,0,fe,pe,Te.data);w.generateMipmaps=!1}else Ge?(O&&t.texStorage2D(3553,de,me,C.width,C.height),t.texSubImage2D(3553,0,0,0,C.width,C.height,fe,pe,C.data)):t.texImage2D(3553,0,me,C.width,C.height,0,fe,pe,C.data);else if(w.isCompressedTexture){Ge&&O&&t.texStorage2D(3553,de,me,Be[0].width,Be[0].height);for(let Q=0,be=Be.length;Q<be;Q++)Te=Be[Q],w.format!==Xn?fe!==null?Ge?t.compressedTexSubImage2D(3553,Q,0,0,Te.width,Te.height,fe,Te.data):t.compressedTexImage2D(3553,Q,me,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(3553,Q,0,0,Te.width,Te.height,fe,pe,Te.data):t.texImage2D(3553,Q,me,Te.width,Te.height,0,fe,pe,Te.data)}else if(w.isDataArrayTexture)Ge?(O&&t.texStorage3D(35866,de,me,C.width,C.height,C.depth),t.texSubImage3D(35866,0,0,0,0,C.width,C.height,C.depth,fe,pe,C.data)):t.texImage3D(35866,0,me,C.width,C.height,C.depth,0,fe,pe,C.data);else if(w.isData3DTexture)Ge?(O&&t.texStorage3D(32879,de,me,C.width,C.height,C.depth),t.texSubImage3D(32879,0,0,0,0,C.width,C.height,C.depth,fe,pe,C.data)):t.texImage3D(32879,0,me,C.width,C.height,C.depth,0,fe,pe,C.data);else if(w.isFramebufferTexture){if(O)if(Ge)t.texStorage2D(3553,de,me,C.width,C.height);else{let Q=C.width,be=C.height;for(let ye=0;ye<de;ye++)t.texImage2D(3553,ye,me,Q,be,0,fe,pe,null),Q>>=1,be>>=1}}else if(Be.length>0&&Y){Ge&&O&&t.texStorage2D(3553,de,me,Be[0].width,Be[0].height);for(let Q=0,be=Be.length;Q<be;Q++)Te=Be[Q],Ge?t.texSubImage2D(3553,Q,0,0,fe,pe,Te):t.texImage2D(3553,Q,me,fe,pe,Te);w.generateMipmaps=!1}else Ge?(O&&t.texStorage2D(3553,de,me,C.width,C.height),t.texSubImage2D(3553,0,0,0,fe,pe,C)):t.texImage2D(3553,0,me,fe,pe,C);E(w,Y)&&A(j),re.__currentVersion=re.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function Ae(T,w,F){if(w.image.length!==6)return;const j=Ne(T,w),Z=w.source;if(t.activeTexture(33984+F),t.bindTexture(34067,T.__webglTexture),Z.version!==Z.__currentVersion||j===!0){i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);const re=w.isCompressedTexture||w.image[0].isCompressedTexture,ve=w.image[0]&&w.image[0].isDataTexture,C=[];for(let Q=0;Q<6;Q++)!re&&!ve?C[Q]=b(w.image[Q],!1,!0,c):C[Q]=ve?w.image[Q].image:w.image[Q],C[Q]=he(w,C[Q]);const Y=C[0],fe=M(Y)||o,pe=s.convert(w.format,w.encoding),me=s.convert(w.type),Te=x(w.internalFormat,pe,me,w.encoding),Be=o&&w.isVideoTexture!==!0,Ge=Z.__currentVersion===void 0||j===!0;let O=S(w,Y,fe);ne(34067,w,fe);let de;if(re){Be&&Ge&&t.texStorage2D(34067,O,Te,Y.width,Y.height);for(let Q=0;Q<6;Q++){de=C[Q].mipmaps;for(let be=0;be<de.length;be++){const ye=de[be];w.format!==Xn?pe!==null?Be?t.compressedTexSubImage2D(34069+Q,be,0,0,ye.width,ye.height,pe,ye.data):t.compressedTexImage2D(34069+Q,be,Te,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(34069+Q,be,0,0,ye.width,ye.height,pe,me,ye.data):t.texImage2D(34069+Q,be,Te,ye.width,ye.height,0,pe,me,ye.data)}}}else{de=w.mipmaps,Be&&Ge&&(de.length>0&&O++,t.texStorage2D(34067,O,Te,C[0].width,C[0].height));for(let Q=0;Q<6;Q++)if(ve){Be?t.texSubImage2D(34069+Q,0,0,0,C[Q].width,C[Q].height,pe,me,C[Q].data):t.texImage2D(34069+Q,0,Te,C[Q].width,C[Q].height,0,pe,me,C[Q].data);for(let be=0;be<de.length;be++){const Ke=de[be].image[Q].image;Be?t.texSubImage2D(34069+Q,be+1,0,0,Ke.width,Ke.height,pe,me,Ke.data):t.texImage2D(34069+Q,be+1,Te,Ke.width,Ke.height,0,pe,me,Ke.data)}}else{Be?t.texSubImage2D(34069+Q,0,0,0,pe,me,C[Q]):t.texImage2D(34069+Q,0,Te,pe,me,C[Q]);for(let be=0;be<de.length;be++){const ye=de[be];Be?t.texSubImage2D(34069+Q,be+1,0,0,pe,me,ye.image[Q]):t.texImage2D(34069+Q,be+1,Te,pe,me,ye.image[Q])}}}E(w,fe)&&A(34067),Z.__currentVersion=Z.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function xe(T,w,F,j,Z){const re=s.convert(F.format,F.encoding),ve=s.convert(F.type),C=x(F.internalFormat,re,ve,F.encoding);n.get(w).__hasExternalTextures||(Z===32879||Z===35866?t.texImage3D(Z,0,C,w.width,w.height,w.depth,0,re,ve,null):t.texImage2D(Z,0,C,w.width,w.height,0,re,ve,null)),t.bindFramebuffer(36160,T),le(w)?h.framebufferTexture2DMultisampleEXT(36160,j,Z,n.get(F).__webglTexture,0,ae(w)):i.framebufferTexture2D(36160,j,Z,n.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function Xe(T,w,F){if(i.bindRenderbuffer(36161,T),w.depthBuffer&&!w.stencilBuffer){let j=33189;if(F||le(w)){const Z=w.depthTexture;Z&&Z.isDepthTexture&&(Z.type===qn?j=36012:Z.type===jr&&(j=33190));const re=ae(w);le(w)?h.renderbufferStorageMultisampleEXT(36161,re,j,w.width,w.height):i.renderbufferStorageMultisample(36161,re,j,w.width,w.height)}else i.renderbufferStorage(36161,j,w.width,w.height);i.framebufferRenderbuffer(36160,36096,36161,T)}else if(w.depthBuffer&&w.stencilBuffer){const j=ae(w);F&&le(w)===!1?i.renderbufferStorageMultisample(36161,j,35056,w.width,w.height):le(w)?h.renderbufferStorageMultisampleEXT(36161,j,35056,w.width,w.height):i.renderbufferStorage(36161,34041,w.width,w.height),i.framebufferRenderbuffer(36160,33306,36161,T)}else{const j=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Z=0;Z<j.length;Z++){const re=j[Z],ve=s.convert(re.format,re.encoding),C=s.convert(re.type),Y=x(re.internalFormat,ve,C,re.encoding),fe=ae(w);F&&le(w)===!1?i.renderbufferStorageMultisample(36161,fe,Y,w.width,w.height):le(w)?h.renderbufferStorageMultisampleEXT(36161,fe,Y,w.width,w.height):i.renderbufferStorage(36161,Y,w.width,w.height)}}i.bindRenderbuffer(36161,null)}function Ie(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J(w.depthTexture,0);const j=n.get(w.depthTexture).__webglTexture,Z=ae(w);if(w.depthTexture.format===Jr)le(w)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,j,0,Z):i.framebufferTexture2D(36160,36096,3553,j,0);else if(w.depthTexture.format===da)le(w)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,j,0,Z):i.framebufferTexture2D(36160,33306,3553,j,0);else throw new Error("Unknown depthTexture format")}function P(T){const w=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ie(w.__webglFramebuffer,T)}else if(F){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(36160,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]=i.createRenderbuffer(),Xe(w.__webglDepthbuffer[j],T,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),Xe(w.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function D(T,w,F){const j=n.get(T);w!==void 0&&xe(j.__webglFramebuffer,T,T.texture,36064,3553),F!==void 0&&P(T)}function $(T){const w=T.texture,F=n.get(T),j=n.get(w);T.addEventListener("dispose",X),T.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=w.version,a.memory.textures++);const Z=T.isWebGLCubeRenderTarget===!0,re=T.isWebGLMultipleRenderTargets===!0,ve=M(T)||o;if(Z){F.__webglFramebuffer=[];for(let C=0;C<6;C++)F.__webglFramebuffer[C]=i.createFramebuffer()}else{if(F.__webglFramebuffer=i.createFramebuffer(),re)if(r.drawBuffers){const C=T.texture;for(let Y=0,fe=C.length;Y<fe;Y++){const pe=n.get(C[Y]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&le(T)===!1){const C=re?w:[w];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let Y=0;Y<C.length;Y++){const fe=C[Y];F.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(36161,F.__webglColorRenderbuffer[Y]);const pe=s.convert(fe.format,fe.encoding),me=s.convert(fe.type),Te=x(fe.internalFormat,pe,me,fe.encoding),Be=ae(T);i.renderbufferStorageMultisample(36161,Be,Te,T.width,T.height),i.framebufferRenderbuffer(36160,36064+Y,36161,F.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(36161,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(Z){t.bindTexture(34067,j.__webglTexture),ne(34067,w,ve);for(let C=0;C<6;C++)xe(F.__webglFramebuffer[C],T,w,36064,34069+C);E(w,ve)&&A(34067),t.unbindTexture()}else if(re){const C=T.texture;for(let Y=0,fe=C.length;Y<fe;Y++){const pe=C[Y],me=n.get(pe);t.bindTexture(3553,me.__webglTexture),ne(3553,pe,ve),xe(F.__webglFramebuffer,T,pe,36064+Y,3553),E(pe,ve)&&A(3553)}t.unbindTexture()}else{let C=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?C=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,j.__webglTexture),ne(C,w,ve),xe(F.__webglFramebuffer,T,w,36064,C),E(w,ve)&&A(C),t.unbindTexture()}T.depthBuffer&&P(T)}function ee(T){const w=M(T)||o,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let j=0,Z=F.length;j<Z;j++){const re=F[j];if(E(re,w)){const ve=T.isWebGLCubeRenderTarget?34067:3553,C=n.get(re).__webglTexture;t.bindTexture(ve,C),A(ve),t.unbindTexture()}}}function te(T){if(o&&T.samples>0&&le(T)===!1){const w=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,j=T.height;let Z=16384;const re=[],ve=T.stencilBuffer?33306:36096,C=n.get(T),Y=T.isWebGLMultipleRenderTargets===!0;if(Y)for(let fe=0;fe<w.length;fe++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+fe,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),i.framebufferTexture2D(36009,36064+fe,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let fe=0;fe<w.length;fe++){re.push(36064+fe),T.depthBuffer&&re.push(ve);const pe=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(pe===!1&&(T.depthBuffer&&(Z|=256),T.stencilBuffer&&(Z|=1024)),Y&&i.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[fe]),pe===!0&&(i.invalidateFramebuffer(36008,[ve]),i.invalidateFramebuffer(36009,[ve])),Y){const me=n.get(w[fe]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,me,0)}i.blitFramebuffer(0,0,F,j,0,0,F,j,Z,9728),p&&i.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let fe=0;fe<w.length;fe++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+fe,36161,C.__webglColorRenderbuffer[fe]);const pe=n.get(w[fe]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),i.framebufferTexture2D(36009,36064+fe,3553,pe,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function ae(T){return Math.min(f,T.samples)}function le(T){const w=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ce(T){const w=a.render.frame;g.get(T)!==w&&(g.set(T,w),T.update())}function he(T,w){const F=T.encoding,j=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===cf||F!==yr&&(F===tt?o===!1?e.has("EXT_sRGB")===!0&&j===Xn?(T.format=cf,T.minFilter=Et,T.generateMipmaps=!1):w=U_.sRGBToLinear(w):(j!==Xn||Z!==os)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),w}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=ue,this.setTexture3D=se,this.setTextureCube=oe,this.rebindTextures=D,this.setupRenderTarget=$,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=le}function XT(i,e,t){const n=t.isWebGL2;function r(s,a=null){let o;if(s===os)return 5121;if(s===E1)return 32819;if(s===A1)return 32820;if(s===S1)return 5120;if(s===w1)return 5122;if(s===O_)return 5123;if(s===T1)return 5124;if(s===jr)return 5125;if(s===qn)return 5126;if(s===Oi)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===C1)return 6406;if(s===Xn)return 6408;if(s===R1)return 6409;if(s===L1)return 6410;if(s===Jr)return 6402;if(s===da)return 34041;if(s===I1)return 6403;if(s===P1)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===cf)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===D1)return 36244;if(s===O1)return 33319;if(s===N1)return 33320;if(s===k1)return 36249;if(s===Vc||s===Hc||s===Wc||s===jc)if(a===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Vc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===jc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Vc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===jc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yd||s===Kd||s===Zd||s===Jd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Yd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===F1)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qd||s===ep)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Qd)return a===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ep)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===tp||s===np||s===ip||s===rp||s===sp||s===ap||s===op||s===lp||s===cp||s===up||s===fp||s===hp||s===dp||s===pp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===tp)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===np)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ip)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rp)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sp)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ap)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===op)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lp)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===cp)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===up)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fp)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===hp)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===dp)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pp)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===mp)return a===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ea?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class YT extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pn extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KT={type:"move"};class xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const v=new Pn;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[m.jointName]=v,c.add(v)}const _=c.joints[m.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(KT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class ZT extends Jt{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:Jr,u!==Jr&&u!==da)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Jr&&(n=jr),n===void 0&&u===da&&(n=ea),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1}}class JT extends ms{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,h=null,p=null;const g=t.getContextAttributes();let m=null,d=null;const _=[],v=[],b=new Yt;b.layers.enable(1),b.viewport=new rt;const M=new Yt;M.layers.enable(2),M.viewport=new rt;const y=[b,M],E=new YT;E.layers.enable(1),E.layers.enable(2);let A=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=_[G];return J===void 0&&(J=new xu,_[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=_[G];return J===void 0&&(J=new xu,_[G]=J),J.getGripSpace()},this.getHand=function(G){let J=_[G];return J===void 0&&(J=new xu,_[G]=J),J.getHandSpace()};function S(G){const J=v.indexOf(G.inputSource);if(J===-1)return;const ue=_[J];ue!==void 0&&ue.dispatchEvent({type:G.type,data:G.inputSource})}function L(){r.removeEventListener("select",S),r.removeEventListener("selectstart",S),r.removeEventListener("selectend",S),r.removeEventListener("squeeze",S),r.removeEventListener("squeezestart",S),r.removeEventListener("squeezeend",S),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",I);for(let G=0;G<_.length;G++){const J=v[G];J!==null&&(v[G]=null,_[G].disconnect(J))}A=null,x=null,e.setRenderTarget(m),h=null,f=null,u=null,r=null,d=null,B.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",S),r.addEventListener("selectstart",S),r.addEventListener("selectend",S),r.addEventListener("squeeze",S),r.addEventListener("squeezestart",S),r.addEventListener("squeezeend",S),r.addEventListener("end",L),r.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:h}),d=new ls(h.framebufferWidth,h.framebufferHeight,{format:Xn,type:os,encoding:e.outputEncoding})}else{let J=null,ue=null,se=null;g.depth&&(se=g.stencil?35056:33190,J=g.stencil?da:Jr,ue=g.stencil?ea:jr);const oe={colorFormat:32856,depthFormat:se,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(oe),r.updateRenderState({layers:[f]}),d=new ls(f.textureWidth,f.textureHeight,{format:Xn,type:os,depthTexture:new ZT(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const _e=e.properties.get(d);_e.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),B.setContext(r),B.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(G){for(let J=0;J<G.removed.length;J++){const ue=G.removed[J],se=v.indexOf(ue);se>=0&&(v[se]=null,_[se].dispatchEvent({type:"disconnected",data:ue}))}for(let J=0;J<G.added.length;J++){const ue=G.added[J];let se=v.indexOf(ue);if(se===-1){for(let _e=0;_e<_.length;_e++)if(_e>=v.length){v.push(ue),se=_e;break}else if(v[_e]===null){v[_e]=ue,se=_e;break}if(se===-1)break}const oe=_[se];oe&&oe.dispatchEvent({type:"connected",data:ue})}}const X=new N,W=new N;function k(G,J,ue){X.setFromMatrixPosition(J.matrixWorld),W.setFromMatrixPosition(ue.matrixWorld);const se=X.distanceTo(W),oe=J.projectionMatrix.elements,_e=ue.projectionMatrix.elements,Se=oe[14]/(oe[10]-1),ne=oe[14]/(oe[10]+1),Ne=(oe[9]+1)/oe[5],Ee=(oe[9]-1)/oe[5],Ae=(oe[8]-1)/oe[0],xe=(_e[8]+1)/_e[0],Xe=Se*Ae,Ie=Se*xe,P=se/(-Ae+xe),D=P*-Ae;J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(D),G.translateZ(P),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const $=Se+P,ee=ne+P,te=Xe-D,ae=Ie+(se-D),le=Ne*ne/ee*$,ce=Ee*ne/ee*$;G.projectionMatrix.makePerspective(te,ae,le,ce,$,ee)}function H(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;E.near=M.near=b.near=G.near,E.far=M.far=b.far=G.far,(A!==E.near||x!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,x=E.far);const J=G.parent,ue=E.cameras;H(E,J);for(let oe=0;oe<ue.length;oe++)H(ue[oe],J);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),G.position.copy(E.position),G.quaternion.copy(E.quaternion),G.scale.copy(E.scale),G.matrix.copy(E.matrix),G.matrixWorld.copy(E.matrixWorld);const se=G.children;for(let oe=0,_e=se.length;oe<_e;oe++)se[oe].updateMatrixWorld(!0);ue.length===2?k(E,b,M):E.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(G){f!==null&&(f.fixedFoveation=G),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=G)};let U=null;function z(G,J){if(c=J.getViewerPose(l||a),p=J,c!==null){const ue=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let se=!1;ue.length!==E.cameras.length&&(E.cameras.length=0,se=!0);for(let oe=0;oe<ue.length;oe++){const _e=ue[oe];let Se=null;if(h!==null)Se=h.getViewport(_e);else{const Ne=u.getViewSubImage(f,_e);Se=Ne.viewport,oe===0&&(e.setRenderTargetTextures(d,Ne.colorTexture,f.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(d))}let ne=y[oe];ne===void 0&&(ne=new Yt,ne.layers.enable(oe),ne.viewport=new rt,y[oe]=ne),ne.matrix.fromArray(_e.transform.matrix),ne.projectionMatrix.fromArray(_e.projectionMatrix),ne.viewport.set(Se.x,Se.y,Se.width,Se.height),oe===0&&E.matrix.copy(ne.matrix),se===!0&&E.cameras.push(ne)}}for(let ue=0;ue<_.length;ue++){const se=v[ue],oe=_[ue];se!==null&&oe!==void 0&&oe.update(se,J,l||a)}U&&U(G,J),p=null}const B=new $_;B.setAnimationLoop(z),this.setAnimationLoop=function(G){U=G},this.dispose=function(){}}}function QT(i,e){function t(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,_,v,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),c(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&h(m,d,b)):d.isMeshMatcapMaterial?(r(m,d),p(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?o(m,d,_,v):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===Jn&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===Jn&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const M=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*M}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let v;d.map?v=d.map:d.specularMap?v=d.specularMap:d.displacementMap?v=d.displacementMap:d.normalMap?v=d.normalMap:d.bumpMap?v=d.bumpMap:d.roughnessMap?v=d.roughnessMap:d.metalnessMap?v=d.metalnessMap:d.alphaMap?v=d.alphaMap:d.emissiveMap?v=d.emissiveMap:d.clearcoatMap?v=d.clearcoatMap:d.clearcoatNormalMap?v=d.clearcoatNormalMap:d.clearcoatRoughnessMap?v=d.clearcoatRoughnessMap:d.iridescenceMap?v=d.iridescenceMap:d.iridescenceThicknessMap?v=d.iridescenceThicknessMap:d.specularIntensityMap?v=d.specularIntensityMap:d.specularColorMap?v=d.specularColorMap:d.transmissionMap?v=d.transmissionMap:d.thicknessMap?v=d.thicknessMap:d.sheenColorMap?v=d.sheenColorMap:d.sheenRoughnessMap&&(v=d.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix));let b;d.aoMap?b=d.aoMap:d.lightMap&&(b=d.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uv2Transform.value.copy(b.matrix))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function o(m,d,_,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=v*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let b;d.map?b=d.map:d.alphaMap&&(b=d.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Jn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function eE(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(35375):0;function l(v,b){const M=b.program;n.uniformBlockBinding(v,M)}function c(v,b){let M=r[v.id];M===void 0&&(g(v),M=u(v),r[v.id]=M,v.addEventListener("dispose",d));const y=b.program;n.updateUBOMapping(v,y);const E=e.render.frame;s[v.id]!==E&&(h(v),s[v.id]=E)}function u(v){const b=f();v.__bindingPointIndex=b;const M=i.createBuffer(),y=v.__size,E=v.usage;return i.bindBuffer(35345,M),i.bufferData(35345,y,E),i.bindBuffer(35345,null),i.bindBufferBase(35345,b,M),M}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const b=r[v.id],M=v.uniforms,y=v.__cache;i.bindBuffer(35345,b);for(let E=0,A=M.length;E<A;E++){const x=M[E];if(p(x,E,y)===!0){const S=x.value,L=x.__offset;typeof S=="number"?(x.__data[0]=S,i.bufferSubData(35345,L,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):S.toArray(x.__data),i.bufferSubData(35345,L,x.__data))}}i.bindBuffer(35345,null)}function p(v,b,M){const y=v.value;if(M[b]===void 0)return typeof y=="number"?M[b]=y:M[b]=y.clone(),!0;if(typeof y=="number"){if(M[b]!==y)return M[b]=y,!0}else{const E=M[b];if(E.equals(y)===!1)return E.copy(y),!0}return!1}function g(v){const b=v.uniforms;let M=0;const y=16;let E=0;for(let A=0,x=b.length;A<x;A++){const S=b[A],L=m(S);if(S.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,A>0){E=M%y;const I=y-E;E!==0&&I-L.boundary<0&&(M+=y-E,S.__offset=M)}M+=L.storage}return E=M%y,E>0&&(M+=y-E),v.__size=M,v.__cache={},this}function m(v){const b=v.value,M={boundary:0,storage:0};return typeof b=="number"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function d(v){const b=v.target;b.removeEventListener("dispose",d);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function _(){for(const v in r)i.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:_}}function tE(){const i=yo("canvas");return i.style.display="block",i}function J_(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:tE(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let f=null,h=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=yr,this.physicallyCorrectLights=!1,this.toneMapping=ki,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let d=!1,_=0,v=0,b=null,M=-1,y=null;const E=new rt,A=new rt;let x=null,S=e.width,L=e.height,I=1,X=null,W=null;const k=new rt(0,0,S,L),H=new rt(0,0,S,L);let U=!1;const z=new vh;let B=!1,G=!1,J=null;const ue=new Je,se=new Le,oe=new N,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return b===null?I:1}let ne=t;function Ne(R,V){for(let K=0;K<R.length;K++){const q=R[K],ie=e.getContext(q,V);if(ie!==null)return ie}return null}try{const R={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ph}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",Be,!1),e.addEventListener("webglcontextcreationerror",Ge,!1),ne===null){const V=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&V.shift(),ne=Ne(V,R),ne===null)throw Ne(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ne.getShaderPrecisionFormat===void 0&&(ne.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ee,Ae,xe,Xe,Ie,P,D,$,ee,te,ae,le,ce,he,T,w,F,j,Z,re,ve,C,Y,fe;function pe(){Ee=new f2(ne),Ae=new s2(ne,Ee,i),Ee.init(Ae),C=new XT(ne,Ee,Ae),xe=new $T(ne,Ee,Ae),Xe=new p2,Ie=new IT,P=new qT(ne,Ee,xe,Ie,Ae,C,Xe),D=new o2(m),$=new u2(m),ee=new EM(ne,Ae),Y=new i2(ne,Ee,ee,Ae),te=new h2(ne,ee,Xe,Y),ae=new v2(ne,te,ee,Xe),Z=new _2(ne,Ae,P),w=new a2(Ie),le=new LT(m,D,$,Ee,Ae,Y,w),ce=new QT(m,Ie),he=new OT,T=new BT(Ee,Ae),j=new n2(m,D,xe,ae,u,a),F=new jT(m,ae,Ae),fe=new eE(ne,Xe,Ae,xe),re=new r2(ne,Ee,Xe,Ae),ve=new d2(ne,Ee,Xe,Ae),Xe.programs=le.programs,m.capabilities=Ae,m.extensions=Ee,m.properties=Ie,m.renderLists=he,m.shadowMap=F,m.state=xe,m.info=Xe}pe();const me=new JT(m,ne);this.xr=me,this.getContext=function(){return ne},this.getContextAttributes=function(){return ne.getContextAttributes()},this.forceContextLoss=function(){const R=Ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(R){R!==void 0&&(I=R,this.setSize(S,L,!1))},this.getSize=function(R){return R.set(S,L)},this.setSize=function(R,V,K){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=R,L=V,e.width=Math.floor(R*I),e.height=Math.floor(V*I),K!==!1&&(e.style.width=R+"px",e.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(S*I,L*I).floor()},this.setDrawingBufferSize=function(R,V,K){S=R,L=V,I=K,e.width=Math.floor(R*K),e.height=Math.floor(V*K),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(k)},this.setViewport=function(R,V,K,q){R.isVector4?k.set(R.x,R.y,R.z,R.w):k.set(R,V,K,q),xe.viewport(E.copy(k).multiplyScalar(I).floor())},this.getScissor=function(R){return R.copy(H)},this.setScissor=function(R,V,K,q){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,V,K,q),xe.scissor(A.copy(H).multiplyScalar(I).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(R){xe.setScissorTest(U=R)},this.setOpaqueSort=function(R){X=R},this.setTransparentSort=function(R){W=R},this.getClearColor=function(R){return R.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(R=!0,V=!0,K=!0){let q=0;R&&(q|=16384),V&&(q|=256),K&&(q|=1024),ne.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",Be,!1),e.removeEventListener("webglcontextcreationerror",Ge,!1),he.dispose(),T.dispose(),Ie.dispose(),D.dispose(),$.dispose(),ae.dispose(),Y.dispose(),fe.dispose(),le.dispose(),me.dispose(),me.removeEventListener("sessionstart",Ke),me.removeEventListener("sessionend",Ct),J&&(J.dispose(),J=null),gt.stop()};function Te(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const R=Xe.autoReset,V=F.enabled,K=F.autoUpdate,q=F.needsUpdate,ie=F.type;pe(),Xe.autoReset=R,F.enabled=V,F.autoUpdate=K,F.needsUpdate=q,F.type=ie}function Ge(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function O(R){const V=R.target;V.removeEventListener("dispose",O),de(V)}function de(R){Q(R),Ie.remove(R)}function Q(R){const V=Ie.get(R).programs;V!==void 0&&(V.forEach(function(K){le.releaseProgram(K)}),R.isShaderMaterial&&le.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,K,q,ie,Re){V===null&&(V=_e);const Oe=ie.isMesh&&ie.matrixWorld.determinant()<0,Ve=jv(R,V,K,q,ie);xe.setMaterial(q,Oe);let Ue=K.index;const nt=K.attributes.position;if(Ue===null){if(nt===void 0||nt.count===0)return}else if(Ue.count===0)return;let Ye=1;q.wireframe===!0&&(Ue=te.getWireframeAttribute(K),Ye=2),Y.setup(ie,q,Ve,K,Ue);let Ze,dt=re;Ue!==null&&(Ze=ee.get(Ue),dt=ve,dt.setIndex(Ze));const Ar=Ue!==null?Ue.count:nt.count,xs=K.drawRange.start*Ye,ys=K.drawRange.count*Ye,ti=Re!==null?Re.start*Ye:0,Qe=Re!==null?Re.count*Ye:1/0,bs=Math.max(xs,ti),yt=Math.min(Ar,xs+ys,ti+Qe)-1,wn=Math.max(0,yt-bs+1);if(wn!==0){if(ie.isMesh)q.wireframe===!0?(xe.setLineWidth(q.wireframeLinewidth*Se()),dt.setMode(1)):dt.setMode(4);else if(ie.isLine){let Yi=q.linewidth;Yi===void 0&&(Yi=1),xe.setLineWidth(Yi*Se()),ie.isLineSegments?dt.setMode(1):ie.isLineLoop?dt.setMode(2):dt.setMode(3)}else ie.isPoints?dt.setMode(0):ie.isSprite&&dt.setMode(4);if(ie.isInstancedMesh)dt.renderInstances(bs,wn,ie.count);else if(K.isInstancedBufferGeometry){const Yi=Math.min(K.instanceCount,K._maxInstanceCount);dt.renderInstances(bs,wn,Yi)}else dt.render(bs,wn)}},this.compile=function(R,V){h=T.get(R),h.init(),g.push(h),R.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(h.pushLight(K),K.castShadow&&h.pushShadow(K))}),h.setupLights(m.physicallyCorrectLights),R.traverse(function(K){const q=K.material;if(q)if(Array.isArray(q))for(let ie=0;ie<q.length;ie++){const Re=q[ie];Dc(Re,R,K)}else Dc(q,R,K)}),g.pop(),h=null};let be=null;function ye(R){be&&be(R)}function Ke(){gt.stop()}function Ct(){gt.start()}const gt=new $_;gt.setAnimationLoop(ye),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(R){be=R,me.setAnimationLoop(R),R===null?gt.stop():gt.start()},me.addEventListener("sessionstart",Ke),me.addEventListener("sessionend",Ct),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;R.autoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(V),V=me.getCamera()),R.isScene===!0&&R.onBeforeRender(m,R,V,b),h=T.get(R,g.length),h.init(),g.push(h),ue.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),z.setFromProjectionMatrix(ue),G=this.localClippingEnabled,B=w.init(this.clippingPlanes,G,V),f=he.get(R,p.length),f.init(),p.push(f),Xi(R,V,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(X,W),B===!0&&w.beginShadows();const K=h.state.shadowsArray;if(F.render(K,R,V),B===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(f,R),h.setupLights(m.physicallyCorrectLights),V.isArrayCamera){const q=V.cameras;for(let ie=0,Re=q.length;ie<Re;ie++){const Oe=q[ie];ht(f,R,Oe,Oe.viewport)}}else ht(f,R,V);b!==null&&(P.updateMultisampleRenderTarget(b),P.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(m,R,V),Y.resetDefaultState(),M=-1,y=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function Xi(R,V,K,q){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||z.intersectsSprite(R)){q&&oe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ue);const Oe=ae.update(R),Ve=R.material;Ve.visible&&f.push(R,Oe,Ve,K,oe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==Xe.render.frame&&(R.skeleton.update(),R.skeleton.frame=Xe.render.frame),!R.frustumCulled||z.intersectsObject(R))){q&&oe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ue);const Oe=ae.update(R),Ve=R.material;if(Array.isArray(Ve)){const Ue=Oe.groups;for(let nt=0,Ye=Ue.length;nt<Ye;nt++){const Ze=Ue[nt],dt=Ve[Ze.materialIndex];dt&&dt.visible&&f.push(R,Oe,dt,K,oe.z,Ze)}}else Ve.visible&&f.push(R,Oe,Ve,K,oe.z,null)}}const Re=R.children;for(let Oe=0,Ve=Re.length;Oe<Ve;Oe++)Xi(Re[Oe],V,K,q)}function ht(R,V,K,q){const ie=R.opaque,Re=R.transmissive,Oe=R.transparent;h.setupLightsView(K),Re.length>0&&xi(ie,V,K),q&&xe.viewport(E.copy(q)),ie.length>0&&Sn(ie,V,K),Re.length>0&&Sn(Re,V,K),Oe.length>0&&Sn(Oe,V,K),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function xi(R,V,K){const q=Ae.isWebGL2;J===null&&(J=new ls(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Oi:os,minFilter:ps,samples:q&&s===!0?4:0})),m.getDrawingBufferSize(se),q?J.setSize(se.x,se.y):J.setSize(Ul(se.x),Ul(se.y));const ie=m.getRenderTarget();m.setRenderTarget(J),m.clear();const Re=m.toneMapping;m.toneMapping=ki,Sn(R,V,K),m.toneMapping=Re,P.updateMultisampleRenderTarget(J),P.updateRenderTargetMipmap(J),m.setRenderTarget(ie)}function Sn(R,V,K){const q=V.isScene===!0?V.overrideMaterial:null;for(let ie=0,Re=R.length;ie<Re;ie++){const Oe=R[ie],Ve=Oe.object,Ue=Oe.geometry,nt=q===null?Oe.material:q,Ye=Oe.group;Ve.layers.test(K.layers)&&Wv(Ve,V,K,Ue,nt,Ye)}}function Wv(R,V,K,q,ie,Re){R.onBeforeRender(m,V,K,q,ie,Re),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(m,V,K,q,R,Re),ie.transparent===!0&&ie.side===as?(ie.side=Jn,ie.needsUpdate=!0,m.renderBufferDirect(K,V,q,ie,R,Re),ie.side=ca,ie.needsUpdate=!0,m.renderBufferDirect(K,V,q,ie,R,Re),ie.side=as):m.renderBufferDirect(K,V,q,ie,R,Re),R.onAfterRender(m,V,K,q,ie,Re)}function Dc(R,V,K){V.isScene!==!0&&(V=_e);const q=Ie.get(R),ie=h.state.lights,Re=h.state.shadowsArray,Oe=ie.state.version,Ve=le.getParameters(R,ie.state,Re,V,K),Ue=le.getProgramCacheKey(Ve);let nt=q.programs;q.environment=R.isMeshStandardMaterial?V.environment:null,q.fog=V.fog,q.envMap=(R.isMeshStandardMaterial?$:D).get(R.envMap||q.environment),nt===void 0&&(R.addEventListener("dispose",O),nt=new Map,q.programs=nt);let Ye=nt.get(Ue);if(Ye!==void 0){if(q.currentProgram===Ye&&q.lightsStateVersion===Oe)return ad(R,Ve),Ye}else Ve.uniforms=le.getUniforms(R),R.onBuild(K,Ve,m),R.onBeforeCompile(Ve,m),Ye=le.acquireProgram(Ve,Ue),nt.set(Ue,Ye),q.uniforms=Ve.uniforms;const Ze=q.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=w.uniform),ad(R,Ve),q.needsLights=qv(R),q.lightsStateVersion=Oe,q.needsLights&&(Ze.ambientLightColor.value=ie.state.ambient,Ze.lightProbe.value=ie.state.probe,Ze.directionalLights.value=ie.state.directional,Ze.directionalLightShadows.value=ie.state.directionalShadow,Ze.spotLights.value=ie.state.spot,Ze.spotLightShadows.value=ie.state.spotShadow,Ze.rectAreaLights.value=ie.state.rectArea,Ze.ltc_1.value=ie.state.rectAreaLTC1,Ze.ltc_2.value=ie.state.rectAreaLTC2,Ze.pointLights.value=ie.state.point,Ze.pointLightShadows.value=ie.state.pointShadow,Ze.hemisphereLights.value=ie.state.hemi,Ze.directionalShadowMap.value=ie.state.directionalShadowMap,Ze.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ze.spotShadowMap.value=ie.state.spotShadowMap,Ze.spotShadowMatrix.value=ie.state.spotShadowMatrix,Ze.pointShadowMap.value=ie.state.pointShadowMap,Ze.pointShadowMatrix.value=ie.state.pointShadowMatrix);const dt=Ye.getUniforms(),Ar=Sl.seqWithValue(dt.seq,Ze);return q.currentProgram=Ye,q.uniformsList=Ar,Ye}function ad(R,V){const K=Ie.get(R);K.outputEncoding=V.outputEncoding,K.instancing=V.instancing,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function jv(R,V,K,q,ie){V.isScene!==!0&&(V=_e),P.resetTextureUnits();const Re=V.fog,Oe=q.isMeshStandardMaterial?V.environment:null,Ve=b===null?m.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:yr,Ue=(q.isMeshStandardMaterial?$:D).get(q.envMap||Oe),nt=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ye=!!q.normalMap&&!!K.attributes.tangent,Ze=!!K.morphAttributes.position,dt=!!K.morphAttributes.normal,Ar=!!K.morphAttributes.color,xs=q.toneMapped?m.toneMapping:ki,ys=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ti=ys!==void 0?ys.length:0,Qe=Ie.get(q),bs=h.state.lights;if(B===!0&&(G===!0||R!==y)){const fn=R===y&&q.id===M;w.setState(q,R,fn)}let yt=!1;q.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==bs.state.version||Qe.outputEncoding!==Ve||ie.isInstancedMesh&&Qe.instancing===!1||!ie.isInstancedMesh&&Qe.instancing===!0||ie.isSkinnedMesh&&Qe.skinning===!1||!ie.isSkinnedMesh&&Qe.skinning===!0||Qe.envMap!==Ue||q.fog===!0&&Qe.fog!==Re||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==w.numPlanes||Qe.numIntersection!==w.numIntersection)||Qe.vertexAlphas!==nt||Qe.vertexTangents!==Ye||Qe.morphTargets!==Ze||Qe.morphNormals!==dt||Qe.morphColors!==Ar||Qe.toneMapping!==xs||Ae.isWebGL2===!0&&Qe.morphTargetsCount!==ti)&&(yt=!0):(yt=!0,Qe.__version=q.version);let wn=Qe.currentProgram;yt===!0&&(wn=Dc(q,V,ie));let Yi=!1,Da=!1,Oc=!1;const jt=wn.getUniforms(),Oa=Qe.uniforms;if(xe.useProgram(wn.program)&&(Yi=!0,Da=!0,Oc=!0),q.id!==M&&(M=q.id,Da=!0),Yi||y!==R){if(jt.setValue(ne,"projectionMatrix",R.projectionMatrix),Ae.logarithmicDepthBuffer&&jt.setValue(ne,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),y!==R&&(y=R,Da=!0,Oc=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const fn=jt.map.cameraPosition;fn!==void 0&&fn.setValue(ne,oe.setFromMatrixPosition(R.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&jt.setValue(ne,"isOrthographic",R.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||ie.isSkinnedMesh)&&jt.setValue(ne,"viewMatrix",R.matrixWorldInverse)}if(ie.isSkinnedMesh){jt.setOptional(ne,ie,"bindMatrix"),jt.setOptional(ne,ie,"bindMatrixInverse");const fn=ie.skeleton;fn&&(Ae.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),jt.setValue(ne,"boneTexture",fn.boneTexture,P),jt.setValue(ne,"boneTextureSize",fn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Nc=K.morphAttributes;if((Nc.position!==void 0||Nc.normal!==void 0||Nc.color!==void 0&&Ae.isWebGL2===!0)&&Z.update(ie,K,q,wn),(Da||Qe.receiveShadow!==ie.receiveShadow)&&(Qe.receiveShadow=ie.receiveShadow,jt.setValue(ne,"receiveShadow",ie.receiveShadow)),Da&&(jt.setValue(ne,"toneMappingExposure",m.toneMappingExposure),Qe.needsLights&&$v(Oa,Oc),Re&&q.fog===!0&&ce.refreshFogUniforms(Oa,Re),ce.refreshMaterialUniforms(Oa,q,I,L,J),Sl.upload(ne,Qe.uniformsList,Oa,P)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Sl.upload(ne,Qe.uniformsList,Oa,P),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&jt.setValue(ne,"center",ie.center),jt.setValue(ne,"modelViewMatrix",ie.modelViewMatrix),jt.setValue(ne,"normalMatrix",ie.normalMatrix),jt.setValue(ne,"modelMatrix",ie.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const fn=q.uniformsGroups;for(let kc=0,Xv=fn.length;kc<Xv;kc++)if(Ae.isWebGL2){const od=fn[kc];fe.update(od,wn),fe.bind(od,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function $v(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function qv(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,V,K){Ie.get(R.texture).__webglTexture=V,Ie.get(R.depthTexture).__webglTexture=K;const q=Ie.get(R);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=K===void 0,q.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,V){const K=Ie.get(R);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,K=0){b=R,_=V,v=K;let q=!0;if(R){const Ue=Ie.get(R);Ue.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),q=!1):Ue.__webglFramebuffer===void 0?P.setupRenderTarget(R):Ue.__hasExternalTextures&&P.rebindTextures(R,Ie.get(R.texture).__webglTexture,Ie.get(R.depthTexture).__webglTexture)}let ie=null,Re=!1,Oe=!1;if(R){const Ue=R.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture)&&(Oe=!0);const nt=Ie.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(ie=nt[V],Re=!0):Ae.isWebGL2&&R.samples>0&&P.useMultisampledRTT(R)===!1?ie=Ie.get(R).__webglMultisampledFramebuffer:ie=nt,E.copy(R.viewport),A.copy(R.scissor),x=R.scissorTest}else E.copy(k).multiplyScalar(I).floor(),A.copy(H).multiplyScalar(I).floor(),x=U;if(xe.bindFramebuffer(36160,ie)&&Ae.drawBuffers&&q&&xe.drawBuffers(R,ie),xe.viewport(E),xe.scissor(A),xe.setScissorTest(x),Re){const Ue=Ie.get(R.texture);ne.framebufferTexture2D(36160,36064,34069+V,Ue.__webglTexture,K)}else if(Oe){const Ue=Ie.get(R.texture),nt=V||0;ne.framebufferTextureLayer(36160,36064,Ue.__webglTexture,K||0,nt)}M=-1},this.readRenderTargetPixels=function(R,V,K,q,ie,Re,Oe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ve=Ve[Oe]),Ve){xe.bindFramebuffer(36160,Ve);try{const Ue=R.texture,nt=Ue.format,Ye=Ue.type;if(nt!==Xn&&C.convert(nt)!==ne.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=Ye===Oi&&(Ee.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ye!==os&&C.convert(Ye)!==ne.getParameter(35738)&&!(Ye===qn&&(Ae.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-q&&K>=0&&K<=R.height-ie&&ne.readPixels(V,K,q,ie,C.convert(nt),C.convert(Ye),Re)}finally{const Ue=b!==null?Ie.get(b).__webglFramebuffer:null;xe.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(R,V,K=0){const q=Math.pow(2,-K),ie=Math.floor(V.image.width*q),Re=Math.floor(V.image.height*q);P.setTexture2D(V,0),ne.copyTexSubImage2D(3553,K,0,0,R.x,R.y,ie,Re),xe.unbindTexture()},this.copyTextureToTexture=function(R,V,K,q=0){const ie=V.image.width,Re=V.image.height,Oe=C.convert(K.format),Ve=C.convert(K.type);P.setTexture2D(K,0),ne.pixelStorei(37440,K.flipY),ne.pixelStorei(37441,K.premultiplyAlpha),ne.pixelStorei(3317,K.unpackAlignment),V.isDataTexture?ne.texSubImage2D(3553,q,R.x,R.y,ie,Re,Oe,Ve,V.image.data):V.isCompressedTexture?ne.compressedTexSubImage2D(3553,q,R.x,R.y,V.mipmaps[0].width,V.mipmaps[0].height,Oe,V.mipmaps[0].data):ne.texSubImage2D(3553,q,R.x,R.y,Oe,Ve,V.image),q===0&&K.generateMipmaps&&ne.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(R,V,K,q,ie=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=R.max.x-R.min.x+1,Oe=R.max.y-R.min.y+1,Ve=R.max.z-R.min.z+1,Ue=C.convert(q.format),nt=C.convert(q.type);let Ye;if(q.isData3DTexture)P.setTexture3D(q,0),Ye=32879;else if(q.isDataArrayTexture)P.setTexture2DArray(q,0),Ye=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ne.pixelStorei(37440,q.flipY),ne.pixelStorei(37441,q.premultiplyAlpha),ne.pixelStorei(3317,q.unpackAlignment);const Ze=ne.getParameter(3314),dt=ne.getParameter(32878),Ar=ne.getParameter(3316),xs=ne.getParameter(3315),ys=ne.getParameter(32877),ti=K.isCompressedTexture?K.mipmaps[0]:K.image;ne.pixelStorei(3314,ti.width),ne.pixelStorei(32878,ti.height),ne.pixelStorei(3316,R.min.x),ne.pixelStorei(3315,R.min.y),ne.pixelStorei(32877,R.min.z),K.isDataTexture||K.isData3DTexture?ne.texSubImage3D(Ye,ie,V.x,V.y,V.z,Re,Oe,Ve,Ue,nt,ti.data):K.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ne.compressedTexSubImage3D(Ye,ie,V.x,V.y,V.z,Re,Oe,Ve,Ue,ti.data)):ne.texSubImage3D(Ye,ie,V.x,V.y,V.z,Re,Oe,Ve,Ue,nt,ti),ne.pixelStorei(3314,Ze),ne.pixelStorei(32878,dt),ne.pixelStorei(3316,Ar),ne.pixelStorei(3315,xs),ne.pixelStorei(32877,ys),ie===0&&q.generateMipmaps&&ne.generateMipmap(Ye),xe.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),xe.unbindTexture()},this.resetState=function(){_=0,v=0,b=null,xe.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class nE extends J_{}nE.prototype.isWebGL1Renderer=!0;class iE extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class rE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lf,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new N;class Mh{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const em=new N,tm=new rt,nm=new rt,sE=new N,im=new Je;class aE extends _n{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Je,this.bindMatrixInverse=new Je}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;tm.fromBufferAttribute(r.attributes.skinIndex,e),nm.fromBufferAttribute(r.attributes.skinWeight,e),em.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=nm.getComponent(s);if(a!==0){const o=tm.getComponent(s);im.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(sE.copy(em).applyMatrix4(im),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Q_ extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class e0 extends Jt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=kt,u=kt,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rm=new Je,oE=new Je;class Sh{constructor(e=[],t=[]){this.uuid=Qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:oE;rm.multiplyMatrices(o,t[s]),rm.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Sh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=k_(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new e0(t,e,e,Xn,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Q_),this.bones.push(a),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class t0 extends hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sm=new N,am=new N,om=new Je,yu=new xc,ll=new Aa;class wh extends St{constructor(e=new kn,t=new t0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)sm.fromBufferAttribute(t,r-1),am.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=sm.distanceTo(am);e.setAttribute("lineDistance",new Fi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ll.copy(n.boundingSphere),ll.applyMatrix4(r),ll.radius+=s,e.ray.intersectsSphere(ll)===!1)return;om.copy(r).invert(),yu.copy(e.ray).applyMatrix4(om);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new N,u=new N,f=new N,h=new N,p=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const _=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let b=_,M=v-1;b<M;b+=p){const y=g.getX(b),E=g.getX(b+1);if(c.fromBufferAttribute(d,y),u.fromBufferAttribute(d,E),yu.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(h);x<e.near||x>e.far||t.push({distance:x,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let b=_,M=v-1;b<M;b+=p){if(c.fromBufferAttribute(d,b),u.fromBufferAttribute(d,b+1),yu.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(h);E<e.near||E>e.far||t.push({distance:E,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const lm=new N,cm=new N;class lE extends wh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)lm.fromBufferAttribute(t,r),cm.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+lm.distanceTo(cm);e.setAttribute("lineDistance",new Fi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cE extends wh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class n0 extends hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const um=new Je,hf=new xc,cl=new Aa,ul=new N;class uE extends St{constructor(e=new kn,t=new n0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(r),cl.radius+=s,e.ray.intersectsSphere(cl)===!1)return;um.copy(r).invert(),hf.copy(e.ray).applyMatrix4(um);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=h,m=p;g<m;g++){const d=c.getX(g);ul.fromBufferAttribute(f,d),fm(ul,d,l,r,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=h,m=p;g<m;g++)ul.fromBufferAttribute(f,g),fm(ul,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function fm(i,e,t,n,r,s,a){const o=hf.distanceSqToPoint(i);if(o<t){const l=new N;hf.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class es extends hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _s extends es{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function rr(i,e,t){return i0(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function fl(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function i0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fE(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function hm(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function r0(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class Do{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hE extends Do{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gp,endingEnd:gp}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case _p:s=e,o=2*t-n;break;case vp:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _p:a=e,l=2*n-t;break;case vp:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),m=g*g,d=m*g,_=-h*d+2*h*m-h*g,v=(1+h)*d+(-1.5-2*h)*m+(-.5+h)*g+1,b=(-1-p)*d+(1.5+p)*m+.5*g,M=p*d-p*m;for(let y=0;y!==o;++y)s[y]=_*a[u+y]+v*a[c+y]+b*a[l+y]+M*a[f+y];return s}}class dE extends Do{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(r-t),f=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*f+a[l+h]*u;return s}}class pE extends Do{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class vi{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fl(t,this.TimeBufferType),this.values=fl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fl(e.times,Array),values:fl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vo:t=this.InterpolantFactoryMethodDiscrete;break;case pa:t=this.InterpolantFactoryMethodLinear;break;case $c:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vo;case this.InterpolantFactoryMethodLinear:return pa;case this.InterpolantFactoryMethodSmooth:return $c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=rr(n,s,a),this.values=rr(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&i0(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=rr(this.times),t=rr(this.values),n=this.getValueSize(),r=this.getInterpolation()===$c,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const f=o*n,h=f-n,p=f+n;for(let g=0;g!==n;++g){const m=t[f+g];if(m!==t[h+g]||m!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*n,h=a*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=rr(e,0,a),this.values=rr(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=rr(this.times,0),t=rr(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}vi.prototype.TimeBufferType=Float32Array;vi.prototype.ValueBufferType=Float32Array;vi.prototype.DefaultInterpolation=pa;class Pa extends vi{}Pa.prototype.ValueTypeName="bool";Pa.prototype.ValueBufferType=Array;Pa.prototype.DefaultInterpolation=vo;Pa.prototype.InterpolantFactoryMethodLinear=void 0;Pa.prototype.InterpolantFactoryMethodSmooth=void 0;class s0 extends vi{}s0.prototype.ValueTypeName="color";class bo extends vi{}bo.prototype.ValueTypeName="number";class mE extends Do{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Ui.slerpFlat(s,0,a,c-o,a,c,l);return s}}class us extends vi{InterpolantFactoryMethodLinear(e){return new mE(this.times,this.values,this.getValueSize(),e)}}us.prototype.ValueTypeName="quaternion";us.prototype.DefaultInterpolation=pa;us.prototype.InterpolantFactoryMethodSmooth=void 0;class Ra extends vi{}Ra.prototype.ValueTypeName="string";Ra.prototype.ValueBufferType=Array;Ra.prototype.DefaultInterpolation=vo;Ra.prototype.InterpolantFactoryMethodLinear=void 0;Ra.prototype.InterpolantFactoryMethodSmooth=void 0;class Mo extends vi{}Mo.prototype.ValueTypeName="vector";class gE{constructor(e,t=-1,n,r=z1){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Qn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(vE(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(vi.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=fE(l);l=hm(l,1,u),c=hm(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new bo(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,p,g,m){if(p.length!==0){const d=[],_=[];r0(p,d,_,g),d.length!==0&&m.push(new f(h,d,_))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let m=0;m<h[g].morphTargets.length;m++)p[h[g].morphTargets[m]]=-1;for(const m in p){const d=[],_=[];for(let v=0;v!==h[g].morphTargets.length;++v){const b=h[g];d.push(b.time),_.push(b.morphTarget===m?1:0)}r.push(new bo(".morphTargetInfluence["+m+"]",d,_))}l=p.length*a}else{const p=".bones["+t[f].name+"]";n(Mo,p+".position",h,"pos",r),n(us,p+".quaternion",h,"rot",r),n(Mo,p+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function _E(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bo;case"vector":case"vector2":case"vector3":case"vector4":return Mo;case"color":return s0;case"quaternion":return us;case"bool":case"boolean":return Pa;case"string":return Ra}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function vE(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=_E(i.type);if(i.times===void 0){const t=[],n=[];r0(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ga={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class a0{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const xE=new a0;class La{constructor(e){this.manager=e!==void 0?e:xE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Ei={};class yE extends Error{constructor(e,t){super(e),this.response=t}}class Th extends La{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ga.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:n,onError:r});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ei[e],f=c.body.getReader(),h=c.headers.get("Content-Length"),p=h?parseInt(h):0,g=p!==0;let m=0;const d=new ReadableStream({start(_){v();function v(){f.read().then(({done:b,value:M})=>{if(b)_.close();else{m+=M.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let E=0,A=u.length;E<A;E++){const x=u[E];x.onProgress&&x.onProgress(y)}_.enqueue(M),v()}})}}});return new Response(d)}else throw new yE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{ga.add(e,c);const u=Ei[e];delete Ei[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Ei[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ei[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class bE extends La{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ga.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=yo("img");function l(){u(),ga.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class ME extends La{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new e0,o=new Th(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){const c=s.parse(l);!c||(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:rn,a.wrapT=c.wrapT!==void 0?c.wrapT:rn,a.magFilter=c.magFilter!==void 0?c.magFilter:Et,a.minFilter=c.minFilter!==void 0?c.minFilter:Et,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=ps),c.mipmapCount===1&&(a.minFilter=Et),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c))},n,r),a}}class SE extends La{constructor(e){super(e)}load(e,t,n,r){const s=new Jt,a=new bE(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Eh extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const dm=new Je,pm=new N,mm=new N;class Ah{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vh,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pm.setFromMatrixPosition(e.matrixWorld),t.position.copy(pm),mm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mm),t.updateMatrixWorld(),dm.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dm),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wE extends Ah{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=xo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class TE extends Eh{constructor(e,t,n=0,r=Math.PI/3,s=0,a=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DefaultUp),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.shadow=new wE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gm=new Je,Ua=new N,bu=new N;class EE extends Ah{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ua.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ua),bu.copy(n.position),bu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(bu),n.updateMatrixWorld(),r.makeTranslation(-Ua.x,-Ua.y,-Ua.z),gm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gm)}}class AE extends Eh{constructor(e,t,n=0,r=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new EE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class CE extends Ah{constructor(){super(new yh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class PE extends Eh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DefaultUp),this.updateMatrix(),this.target=new St,this.shadow=new CE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ts{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class RE extends La{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ga.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){ga.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const Ch="\\[\\]\\.:\\/",LE=new RegExp("["+Ch+"]","g"),Ph="[^"+Ch+"]",IE="[^"+Ch.replace("\\.","")+"]",DE=/((?:WC+[\/:])*)/.source.replace("WC",Ph),OE=/(WCOD+)?/.source.replace("WCOD",IE),NE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ph),kE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ph),FE=new RegExp("^"+DE+OE+NE+kE+"$"),zE=["material","materials","bones"];class UE{constructor(e,t,n){const r=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(LE,"")}static parseTrackName(e){const t=FE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);zE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=UE;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class BE{constructor(e,t,n=0,r=1/0){this.ray=new xc(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new _h,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return df(e,this,n,t),n.sort(_m),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)df(e[r],this,n,t);return n.sort(_m),n}}function _m(i,e){return i.distance-e.distance}function df(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,a=r.length;s<a;s++)df(r[s],e,t,!0)}}class vm{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Di=GE();function GE(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function VE(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Ft(i,-65504,65504),Di.floatView[0]=i;const e=Di.uint32View[0],t=e>>23&511;return Di.baseTable[t]+((e&8388607)>>Di.shiftTable[t])}function HE(i){const e=i>>10;return Di.uint32View[0]=Di.mantissaTable[Di.offsetTable[e]+(i&1023)]+Di.exponentTable[e],Di.floatView[0]}var hl=Object.freeze({__proto__:null,toHalfFloat:VE,fromHalfFloat:HE});typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ph}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ph);const xm={type:"change"},Mu={type:"start"},ym={type:"end"};class WE extends ms{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cr.ROTATE,MIDDLE:cr.DOLLY,RIGHT:cr.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",he),this._domElementKeyEvents=C},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(xm),n.update(),s=r.NONE},this.update=function(){const C=new N,Y=new Ui().setFromUnitVectors(e.up,new N(0,1,0)),fe=Y.clone().invert(),pe=new N,me=new Ui,Te=2*Math.PI;return function(){const Ge=n.object.position;C.copy(Ge).sub(n.target),C.applyQuaternion(Y),o.setFromVector3(C),n.autoRotate&&s===r.NONE&&S(A()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let O=n.minAzimuthAngle,de=n.maxAzimuthAngle;return isFinite(O)&&isFinite(de)&&(O<-Math.PI?O+=Te:O>Math.PI&&(O-=Te),de<-Math.PI?de+=Te:de>Math.PI&&(de-=Te),O<=de?o.theta=Math.max(O,Math.min(de,o.theta)):o.theta=o.theta>(O+de)/2?Math.max(O,o.theta):Math.min(de,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),C.setFromSpherical(o),C.applyQuaternion(fe),Ge.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||pe.distanceToSquared(n.object.position)>a||8*(1-me.dot(n.object.quaternion))>a?(n.dispatchEvent(xm),pe.copy(n.object.position),me.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",F),n.domElement.removeEventListener("pointerdown",D),n.domElement.removeEventListener("pointercancel",te),n.domElement.removeEventListener("wheel",ce),n.domElement.removeEventListener("pointermove",$),n.domElement.removeEventListener("pointerup",ee),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",he)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new vm,l=new vm;let c=1;const u=new N;let f=!1;const h=new Le,p=new Le,g=new Le,m=new Le,d=new Le,_=new Le,v=new Le,b=new Le,M=new Le,y=[],E={};function A(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function S(C){l.theta-=C}function L(C){l.phi-=C}const I=function(){const C=new N;return function(fe,pe){C.setFromMatrixColumn(pe,0),C.multiplyScalar(-fe),u.add(C)}}(),X=function(){const C=new N;return function(fe,pe){n.screenSpacePanning===!0?C.setFromMatrixColumn(pe,1):(C.setFromMatrixColumn(pe,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(fe),u.add(C)}}(),W=function(){const C=new N;return function(fe,pe){const me=n.domElement;if(n.object.isPerspectiveCamera){const Te=n.object.position;C.copy(Te).sub(n.target);let Be=C.length();Be*=Math.tan(n.object.fov/2*Math.PI/180),I(2*fe*Be/me.clientHeight,n.object.matrix),X(2*pe*Be/me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(fe*(n.object.right-n.object.left)/n.object.zoom/me.clientWidth,n.object.matrix),X(pe*(n.object.top-n.object.bottom)/n.object.zoom/me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(C){n.object.isPerspectiveCamera?c/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(C){n.object.isPerspectiveCamera?c*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(C){h.set(C.clientX,C.clientY)}function z(C){v.set(C.clientX,C.clientY)}function B(C){m.set(C.clientX,C.clientY)}function G(C){p.set(C.clientX,C.clientY),g.subVectors(p,h).multiplyScalar(n.rotateSpeed);const Y=n.domElement;S(2*Math.PI*g.x/Y.clientHeight),L(2*Math.PI*g.y/Y.clientHeight),h.copy(p),n.update()}function J(C){b.set(C.clientX,C.clientY),M.subVectors(b,v),M.y>0?k(x()):M.y<0&&H(x()),v.copy(b),n.update()}function ue(C){d.set(C.clientX,C.clientY),_.subVectors(d,m).multiplyScalar(n.panSpeed),W(_.x,_.y),m.copy(d),n.update()}function se(C){C.deltaY<0?H(x()):C.deltaY>0&&k(x()),n.update()}function oe(C){let Y=!1;switch(C.code){case n.keys.UP:W(0,n.keyPanSpeed),Y=!0;break;case n.keys.BOTTOM:W(0,-n.keyPanSpeed),Y=!0;break;case n.keys.LEFT:W(n.keyPanSpeed,0),Y=!0;break;case n.keys.RIGHT:W(-n.keyPanSpeed,0),Y=!0;break}Y&&(C.preventDefault(),n.update())}function _e(){if(y.length===1)h.set(y[0].pageX,y[0].pageY);else{const C=.5*(y[0].pageX+y[1].pageX),Y=.5*(y[0].pageY+y[1].pageY);h.set(C,Y)}}function Se(){if(y.length===1)m.set(y[0].pageX,y[0].pageY);else{const C=.5*(y[0].pageX+y[1].pageX),Y=.5*(y[0].pageY+y[1].pageY);m.set(C,Y)}}function ne(){const C=y[0].pageX-y[1].pageX,Y=y[0].pageY-y[1].pageY,fe=Math.sqrt(C*C+Y*Y);v.set(0,fe)}function Ne(){n.enableZoom&&ne(),n.enablePan&&Se()}function Ee(){n.enableZoom&&ne(),n.enableRotate&&_e()}function Ae(C){if(y.length==1)p.set(C.pageX,C.pageY);else{const fe=ve(C),pe=.5*(C.pageX+fe.x),me=.5*(C.pageY+fe.y);p.set(pe,me)}g.subVectors(p,h).multiplyScalar(n.rotateSpeed);const Y=n.domElement;S(2*Math.PI*g.x/Y.clientHeight),L(2*Math.PI*g.y/Y.clientHeight),h.copy(p)}function xe(C){if(y.length===1)d.set(C.pageX,C.pageY);else{const Y=ve(C),fe=.5*(C.pageX+Y.x),pe=.5*(C.pageY+Y.y);d.set(fe,pe)}_.subVectors(d,m).multiplyScalar(n.panSpeed),W(_.x,_.y),m.copy(d)}function Xe(C){const Y=ve(C),fe=C.pageX-Y.x,pe=C.pageY-Y.y,me=Math.sqrt(fe*fe+pe*pe);b.set(0,me),M.set(0,Math.pow(b.y/v.y,n.zoomSpeed)),k(M.y),v.copy(b)}function Ie(C){n.enableZoom&&Xe(C),n.enablePan&&xe(C)}function P(C){n.enableZoom&&Xe(C),n.enableRotate&&Ae(C)}function D(C){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",$),n.domElement.addEventListener("pointerup",ee)),j(C),C.pointerType==="touch"?T(C):ae(C))}function $(C){n.enabled!==!1&&(C.pointerType==="touch"?w(C):le(C))}function ee(C){Z(C),y.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",$),n.domElement.removeEventListener("pointerup",ee)),n.dispatchEvent(ym),s=r.NONE}function te(C){Z(C)}function ae(C){let Y;switch(C.button){case 0:Y=n.mouseButtons.LEFT;break;case 1:Y=n.mouseButtons.MIDDLE;break;case 2:Y=n.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case cr.DOLLY:if(n.enableZoom===!1)return;z(C),s=r.DOLLY;break;case cr.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;B(C),s=r.PAN}else{if(n.enableRotate===!1)return;U(C),s=r.ROTATE}break;case cr.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;U(C),s=r.ROTATE}else{if(n.enablePan===!1)return;B(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Mu)}function le(C){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;G(C);break;case r.DOLLY:if(n.enableZoom===!1)return;J(C);break;case r.PAN:if(n.enablePan===!1)return;ue(C);break}}function ce(C){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(C.preventDefault(),n.dispatchEvent(Mu),se(C),n.dispatchEvent(ym))}function he(C){n.enabled===!1||n.enablePan===!1||oe(C)}function T(C){switch(re(C),y.length){case 1:switch(n.touches.ONE){case ws.ROTATE:if(n.enableRotate===!1)return;_e(),s=r.TOUCH_ROTATE;break;case ws.PAN:if(n.enablePan===!1)return;Se(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case ws.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ne(),s=r.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ee(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Mu)}function w(C){switch(re(C),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ae(C),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;xe(C),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ie(C),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;P(C),n.update();break;default:s=r.NONE}}function F(C){n.enabled!==!1&&C.preventDefault()}function j(C){y.push(C)}function Z(C){delete E[C.pointerId];for(let Y=0;Y<y.length;Y++)if(y[Y].pointerId==C.pointerId){y.splice(Y,1);return}}function re(C){let Y=E[C.pointerId];Y===void 0&&(Y=new Le,E[C.pointerId]=Y),Y.set(C.pageX,C.pageY)}function ve(C){const Y=C.pointerId===y[0].pointerId?y[1]:y[0];return E[Y.pointerId]}n.domElement.addEventListener("contextmenu",F),n.domElement.addEventListener("pointerdown",D),n.domElement.addEventListener("pointercancel",te),n.domElement.addEventListener("wheel",ce,{passive:!1}),this.update()}}var ta=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),n(++i%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function n(u){for(var f=0;f<e.children.length;f++)e.children[f].style.display=f===u?"block":"none";i=u}var r=(performance||Date).now(),s=r,a=0,o=t(new ta.Panel("FPS","#0ff","#002")),l=t(new ta.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new ta.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){r=(performance||Date).now()},end:function(){a++;var u=(performance||Date).now();if(l.update(u-r,200),u>=s+1e3&&(o.update(a*1e3/(u-s),100),s=u,a=0,c)){var f=performance.memory;c.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return u},update:function(){r=this.end()},domElement:e,setMode:n}};ta.Panel=function(i,e,t){var n=1/0,r=0,s=Math.round,a=s(window.devicePixelRatio||1),o=80*a,l=48*a,c=3*a,u=2*a,f=3*a,h=15*a,p=74*a,g=30*a,m=document.createElement("canvas");m.width=o,m.height=l,m.style.cssText="width:80px;height:48px";var d=m.getContext("2d");return d.font="bold "+9*a+"px Helvetica,Arial,sans-serif",d.textBaseline="top",d.fillStyle=t,d.fillRect(0,0,o,l),d.fillStyle=e,d.fillText(i,c,u),d.fillRect(f,h,p,g),d.fillStyle=t,d.globalAlpha=.9,d.fillRect(f,h,p,g),{dom:m,update:function(_,v){n=Math.min(n,_),r=Math.max(r,_),d.fillStyle=t,d.globalAlpha=1,d.fillRect(0,0,o,h),d.fillStyle=e,d.fillText(s(_)+" "+i+" ("+s(n)+"-"+s(r)+")",c,u),d.drawImage(m,f+a,h,p-a,g,f,h,p-a,g),d.fillRect(f+p-a,h,a,g),d.fillStyle=t,d.globalAlpha=.9,d.fillRect(f+p-a,h,a,s((1-_/v)*g))}}};class jE extends ME{constructor(e){super(e),this.type=Oi}parse(e){const o=function(b,M){switch(b){case 1:console.error("THREE.RGBELoader Read Error: "+(M||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(M||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(M||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(M||""))}return-1},f=`
`,h=function(b,M,y){M=M||1024;let A=b.pos,x=-1,S=0,L="",I=String.fromCharCode.apply(null,new Uint16Array(b.subarray(A,A+128)));for(;0>(x=I.indexOf(f))&&S<M&&A<b.byteLength;)L+=I,S+=I.length,A+=128,I+=String.fromCharCode.apply(null,new Uint16Array(b.subarray(A,A+128)));return-1<x?(y!==!1&&(b.pos+=S+x+1),L+I.slice(0,x)):!1},p=function(b){const M=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*FORMAT=(\S+)\s*$/,x=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,S={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let L,I;if(b.pos>=b.byteLength||!(L=h(b)))return o(1,"no header found");if(!(I=L.match(M)))return o(3,"bad initial token");for(S.valid|=1,S.programtype=I[1],S.string+=L+`
`;L=h(b),L!==!1;){if(S.string+=L+`
`,L.charAt(0)==="#"){S.comments+=L+`
`;continue}if((I=L.match(y))&&(S.gamma=parseFloat(I[1])),(I=L.match(E))&&(S.exposure=parseFloat(I[1])),(I=L.match(A))&&(S.valid|=2,S.format=I[1]),(I=L.match(x))&&(S.valid|=4,S.height=parseInt(I[1],10),S.width=parseInt(I[2],10)),S.valid&2&&S.valid&4)break}return S.valid&2?S.valid&4?S:o(3,"missing image size specifier"):o(3,"missing format specifier")},g=function(b,M,y){const E=M;if(E<8||E>32767||b[0]!==2||b[1]!==2||b[2]&128)return new Uint8Array(b);if(E!==(b[2]<<8|b[3]))return o(3,"wrong scanline width");const A=new Uint8Array(4*M*y);if(!A.length)return o(4,"unable to allocate buffer space");let x=0,S=0;const L=4*E,I=new Uint8Array(4),X=new Uint8Array(L);let W=y;for(;W>0&&S<b.byteLength;){if(S+4>b.byteLength)return o(1);if(I[0]=b[S++],I[1]=b[S++],I[2]=b[S++],I[3]=b[S++],I[0]!=2||I[1]!=2||(I[2]<<8|I[3])!=E)return o(3,"bad rgbe scanline format");let k=0,H;for(;k<L&&S<b.byteLength;){H=b[S++];const z=H>128;if(z&&(H-=128),H===0||k+H>L)return o(3,"bad scanline data");if(z){const B=b[S++];for(let G=0;G<H;G++)X[k++]=B}else X.set(b.subarray(S,S+H),k),k+=H,S+=H}const U=E;for(let z=0;z<U;z++){let B=0;A[x]=X[z+B],B+=E,A[x+1]=X[z+B],B+=E,A[x+2]=X[z+B],B+=E,A[x+3]=X[z+B],x+=4}W--}return A},m=function(b,M,y,E){const A=b[M+3],x=Math.pow(2,A-128)/255;y[E+0]=b[M+0]*x,y[E+1]=b[M+1]*x,y[E+2]=b[M+2]*x,y[E+3]=1},d=function(b,M,y,E){const A=b[M+3],x=Math.pow(2,A-128)/255;y[E+0]=hl.toHalfFloat(Math.min(b[M+0]*x,65504)),y[E+1]=hl.toHalfFloat(Math.min(b[M+1]*x,65504)),y[E+2]=hl.toHalfFloat(Math.min(b[M+2]*x,65504)),y[E+3]=hl.toHalfFloat(1)},_=new Uint8Array(e);_.pos=0;const v=p(_);if(v!==-1){const b=v.width,M=v.height,y=g(_.subarray(_.pos),b,M);if(y!==-1){let E,A,x;switch(this.type){case qn:x=y.length/4;const S=new Float32Array(x*4);for(let I=0;I<x;I++)m(y,I*4,S,I*4);E=S,A=qn;break;case Oi:x=y.length/4;const L=new Uint16Array(x*4);for(let I=0;I<x;I++)d(y,I*4,L,I*4);E=L,A=Oi;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:b,height:M,data:E,header:v.string,gamma:v.gamma,exposure:v.exposure,type:A}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(a,o){switch(a.type){case qn:case Oi:a.encoding=yr,a.minFilter=Et,a.magFilter=Et,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,n,r)}}function $E(i,e=!1,t){var n=[];i.forEach(g=>n.push(g.geometry));const r=n[0].index!==null,s=new Set(Object.keys(n[0].attributes)),a=new Set(Object.keys(n[0].morphAttributes)),o={},l={},c=n[0].morphTargetsRelative,u=new kn;let f=0;for(let g=0;g<n.length;++g){const m=i[g],d=n[g];let _=0;if(r!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+g+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const v in d.attributes){if(!s.has(v))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+g+'. All geometries must have compatible attributes; make sure "'+v+'" attribute exists among all geometries, or in none of them.'),null;o[v]===void 0&&(o[v]=[]),o[v].push(d.attributes[v]),_++}if(_!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+g+". Make sure all geometries have the same number of attributes."),null;if(c!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+g+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const v in d.morphAttributes){if(!a.has(v))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+g+".  .morphAttributes must be consistent throughout all geometries."),null;l[v]===void 0&&(l[v]=[]),l[v].push(d.morphAttributes[v])}if(u.userData.mergedUserData=u.userData.mergedUserData||[],u.userData.mergedUserData.push(d.userData),e){let v;if(r)v=d.index.count;else if(d.attributes.position!==void 0)v=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+g+". The geometry must have either an index or a position attribute"),null;var h=m.material.uuid;if(t.has(h)){var p=t.get(h);u.addGroup(f,v,p)}else u.addGroup(f,v,0);f+=v}}if(r){let g=0;const m=[];for(let d=0;d<n.length;++d){const _=n[d].index;for(let v=0;v<_.count;++v)m.push(_.getX(v)+g);g+=n[d].attributes.position.count}u.setIndex(m)}for(const g in o){const m=Bl(o[g]);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+g+" attribute."),null;u.setAttribute(g,m)}for(const g in l){const m=l[g][0].length;if(m===0)break;u.morphAttributes=u.morphAttributes||{},u.morphAttributes[g]=[];for(let d=0;d<m;++d){const _=[];for(let b=0;b<l[g].length;++b)_.push(l[g][b][d]);const v=Bl(_);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+g+" morphAttribute."),null;u.morphAttributes[g].push(v)}}return u}function o0(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new kn;let c=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.morphAttributes[p])}if(l.userData.mergedUserData=l.userData.mergedUserData||[],l.userData.mergedUserData.push(f.userData),e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const f=[];for(let h=0;h<i.length;++h){const p=i[h].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+u);u+=i[h].attributes.position.count}l.setIndex(f)}for(const u in s){const f=Bl(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in a){const f=a[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const p=[];for(let m=0;m<a[u].length;++m)p.push(a[u][m][h]);const g=Bl(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Bl(i){let e,t,n,r=0;for(let o=0;o<i.length;++o){const l=i[o];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;r+=l.array.length}const s=new e(r);let a=0;for(let o=0;o<i.length;++o)s.set(i[o].array,a),a+=i[o].array.length;return new an(s,t,n)}function qE(i){if(i.groups.length===0)return console.warn("THREE.BufferGeometryUtils.mergeGroups(): No groups are defined. Nothing to merge."),i;let e=i.groups;if(e=e.sort((a,o)=>a.materialIndex!==o.materialIndex?a.materialIndex-o.materialIndex:a.start-o.start),i.getIndex()===null){const a=i.getAttribute("position"),o=[];for(let l=0;l<a.count;l+=3)o.push(l,l+1,l+2);i.setIndex(o)}const t=i.getIndex(),n=[];for(let a=0;a<e.length;a++){const o=e[a],l=o.start,c=l+o.count;for(let u=l;u<c;u++)n.push(t.getX(u))}i.dispose(),i.setIndex(n);let r=0;for(let a=0;a<e.length;a++){const o=e[a];o.start=r,r+=o.count}let s=e[0];i.groups=[s];for(let a=1;a<e.length;a++){const o=e[a];s.materialIndex===o.materialIndex?s.count+=o.count:(s=o,i.groups.push(s))}return i}function Pi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function l0(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_a={duration:.5,overwrite:!1,delay:0},Rh,ei,Mt,In=1e8,ot=1/In,pf=Math.PI*2,XE=pf/4,YE=0,c0=Math.sqrt,KE=Math.cos,ZE=Math.sin,Dt=function(e){return typeof e=="string"},mt=function(e){return typeof e=="function"},Bi=function(e){return typeof e=="number"},Lh=function(e){return typeof e>"u"},gi=function(e){return typeof e=="object"},on=function(e){return e!==!1},u0=function(){return typeof window<"u"},dl=function(e){return mt(e)||Dt(e)},f0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wt=Array.isArray,mf=/(?:-?\.?\d|\.)+/gi,h0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$s=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Su=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,d0=/[+-]=-?[.\d]+/,p0=/[^,'"\[\]\s]+/gi,JE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ut,An,gf,Ih,yn={},Gl={},m0,g0=function(e){return(Gl=fs(e,yn))&&bn},Dh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Vl=function(e,t){return!t&&console.warn(e)},_0=function(e,t){return e&&(yn[e]=t)&&Gl&&(Gl[e]=t)||yn},So=function(){return 0},QE={suppressEvents:!0,isStart:!0},io={suppressEvents:!0},Oh={},gr=[],_f={},v0,pn={},wu={},bm=30,wl=[],Nh="",kh=function(e){var t=e[0],n,r;if(gi(t)||mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=wl.length;r--&&!wl[r].targetTest(t););n=wl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new B0(e[r],n)))||e.splice(r,1);return e},ns=function(e){return e._gsap||kh(Dn(e))[0]._gsap},x0=function(e,t,n){return(n=e[t])&&mt(n)?e[t]():Lh(n)&&e.getAttribute&&e.getAttribute(t)||n},ln=function(e,t){return(e=e.split(",")).forEach(t)||e},_t=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},na=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},e3=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Hl=function(){var e=gr.length,t=gr.slice(0),n,r;for(_f={},gr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},y0=function(e,t,n,r){gr.length&&Hl(),e.render(t,n,r||ei),gr.length&&Hl()},b0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(p0).length<2?t:Dt(e)?e.trim():e},M0=function(e){return e},Nn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},t3=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},fs=function(e,t){for(var n in t)e[n]=t[n];return e},Mm=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=gi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Wl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},ro=function(e){var t=e.parent||ut,n=e.keyframes?t3(Wt(e.keyframes)):Nn;if(on(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},n3=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},S0=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},bc=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Gi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},is=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},i3=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},vf=function(e,t,n,r){return e._startAt&&(ei?e._startAt.revert(io):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},r3=function i(e){return!e||e._ts&&i(e.parent)},Sm=function(e){return e._repeat?va(e._tTime,e=e.duration()+e._rDelay)*e:0},va=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},jl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Mc=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ot)||0))},Sc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Mc(e),n._dirty||is(n,e)),e},w0=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=jl(e.rawTime(),t),(!t._dur||Oo(0,t.totalDuration(),n)-t._tTime>ot)&&t.render(n,!0)),is(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ot}},li=function(e,t,n,r){return t.parent&&Gi(t),t._start=zt((Bi(n)?n:n||e!==ut?En(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),S0(e,t,"_first","_last",e._sort?"_start":0),xf(t)||(e._recent=t),r||w0(e,t),e._ts<0&&Sc(e,e._tTime),e},T0=function(e,t){return(yn.ScrollTrigger||Dh("scrollTrigger",t))&&yn.ScrollTrigger.create(t,e)},E0=function(e,t,n,r){if(zh(e,t),!e._initted)return 1;if(!n&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&v0!==gn.frame)return gr.push(e),e._lazy=[t,r],1},s3=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},xf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},a3=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&s3(e)&&!(!e._initted&&xf(e))||(e._ts<0||e._dp._ts<0)&&!xf(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Oo(0,e._tDur,t),u=va(l,o),e._yoyo&&u&1&&(a=1-a),u!==va(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||ei||r||e._zTime===ot||!t&&e._zTime){if(!e._initted&&E0(e,t,r,n))return;for(f=e._zTime,e._zTime=t||(n?ot:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&vf(e,t,n,!0),e._onUpdate&&!n&&On(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&On(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Gi(e,1),n||(On(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},o3=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},xa=function(e,t,n,r){var s=e._repeat,a=zt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:zt(a*(s+1)+e._rDelay*s):a,o>0&&!r?Sc(e,e._tTime=e._tDur*o):e.parent&&Mc(e),n||is(e.parent,e),e},wm=function(e){return e instanceof sn?is(e):xa(e,e._dur)},l3={_start:0,endTime:So,totalDuration:So},En=function i(e,t,n){var r=e.labels,s=e._recent||l3,a=e.duration()>=In?s.endTime(!1):e._dur,o,l,c;return Dt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Wt(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},so=function(e,t,n){var r=Bi(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=on(l.vars.inherit)&&l.parent;a.immediateRender=on(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Tt(t[0],a,t[s+1])},Tr=function(e,t){return e||e===0?t(e):t},Oo=function(e,t,n){return n<e?e:n>t?t:n},Ht=function(e,t){return!Dt(e)||!(t=JE.exec(e))?"":t[1]},c3=function(e,t,n){return Tr(n,function(r){return Oo(e,t,r)})},yf=[].slice,A0=function(e,t){return e&&gi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&gi(e[0]))&&!e.nodeType&&e!==An},u3=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Dt(r)&&!t||A0(r,1)?(s=n).push.apply(s,Dn(r)):n.push(r)})||n},Dn=function(e,t,n){return Mt&&!t&&Mt.selector?Mt.selector(e):Dt(e)&&!n&&(gf||!ya())?yf.call((t||Ih).querySelectorAll(e),0):Wt(e)?u3(e,n):A0(e)?yf.call(e,0):e?[e]:[]},bf=function(e){return e=Dn(e)[0]||Vl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Dn(t,n.querySelectorAll?n:n===e?Vl("Invalid scope")||Ih.createElement("div"):e)}},C0=function(e){return e.sort(function(){return .5-Math.random()})},P0=function(e){if(mt(e))return e;var t=gi(e)?e:{each:e},n=rs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,f=r;return Dt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(h,p,g){var m=(g||t).length,d=a[m],_,v,b,M,y,E,A,x,S;if(!d){if(S=t.grid==="auto"?0:(t.grid||[1,In])[1],!S){for(A=-In;A<(A=g[S++].getBoundingClientRect().left)&&S<m;);S--}for(d=a[m]=[],_=l?Math.min(S,m)*u-.5:r%S,v=S===In?0:l?m*f/S-.5:r/S|0,A=0,x=In,E=0;E<m;E++)b=E%S-_,M=v-(E/S|0),d[E]=y=c?Math.abs(c==="y"?M:b):c0(b*b+M*M),y>A&&(A=y),y<x&&(x=y);r==="random"&&C0(d),d.max=A-x,d.min=x,d.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(S>m?m-1:c?c==="y"?m/S:S:Math.max(S,m/S))||0)*(r==="edges"?-1:1),d.b=m<0?s-m:s,d.u=Ht(t.amount||t.each)||0,n=n&&m<0?F0(n):n}return m=(d[h]-d.min)/d.max||0,zt(d.b+(n?n(m):m)*d.v)+d.u}},Mf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=zt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Bi(n)?0:Ht(n))}},R0=function(e,t){var n=Wt(e),r,s;return!n&&gi(e)&&(r=n=e.radius||In,e.values?(e=Dn(e.values),(s=!Bi(e[0]))&&(r*=r)):e=Mf(e.increment)),Tr(t,n?mt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=In,u=0,f=e.length,h,p;f--;)s?(h=e[f].x-o,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:a,s||u===a||Bi(a)?u:u+Ht(a)}:Mf(e))},L0=function(e,t,n,r){return Tr(Wt(e)?!t:n===!0?!!(n=0):!r,function(){return Wt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},f3=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},h3=function(e,t){return function(n){return e(parseFloat(n))+(t||Ht(n))}},d3=function(e,t,n){return D0(e,t,0,1,n)},I0=function(e,t,n){return Tr(n,function(r){return e[~~t(r)]})},p3=function i(e,t,n){var r=t-e;return Wt(e)?I0(e,i(0,e.length),t):Tr(n,function(s){return(r+(s-e)%r)%r+e})},m3=function i(e,t,n){var r=t-e,s=r*2;return Wt(e)?I0(e,i(0,e.length-1),t):Tr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},wo=function(e){for(var t=0,n="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?p0:mf),n+=e.substr(t,r-t)+L0(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},D0=function(e,t,n,r,s){var a=t-e,o=r-n;return Tr(s,function(l){return n+((l-e)/a*o||0)})},g3=function i(e,t,n,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=Dt(e),o={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(Wt(e)&&!Wt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(g){g*=f;var m=Math.min(h,~~g);return u[m](g-m)},n=t}else r||(e=fs(Wt(e)?[]:{},e));if(!u){for(l in t)Fh.call(o,e,l,"get",t[l]);s=function(g){return Gh(g,o)||(a?e.p:e)}}}return Tr(n,s)},Tm=function(e,t,n){var r=e.labels,s=In,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},On=function(e,t,n){var r=e.vars,s=r[t],a=Mt,o=e._ctx,l,c,u;if(!!s)return l=r[t+"Params"],c=r.callbackScope||e,n&&gr.length&&Hl(),o&&(Mt=o),u=l?s.apply(c,l):s.call(c),Mt=a,u},qa=function(e){return Gi(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&On(e,"onInterrupt"),e},qs,_3=function(e){e=!e.name&&e.default||e;var t=e.name,n=mt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:So,render:Gh,add:Fh,kill:D3,modifier:I3,rawVars:0},a={targetTest:0,get:0,getSetter:Bh,aliases:{},register:0};if(ya(),e!==r){if(pn[t])return;Nn(r,Nn(Wl(e,s),a)),fs(r.prototype,fs(s,Wl(e,a))),pn[r.prop=t]=r,e.targetTest&&(wl.push(r),Oh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_0(t,r),e.register&&e.register(bn,r,cn)},at=255,Xa={aqua:[0,at,at],lime:[0,at,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,at],navy:[0,0,128],white:[at,at,at],olive:[128,128,0],yellow:[at,at,0],orange:[at,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[at,0,0],pink:[at,192,203],cyan:[0,at,at],transparent:[at,at,at,0]},Tu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*at+.5|0},O0=function(e,t,n){var r=e?Bi(e)?[e>>16,e>>8&at,e&at]:0:Xa.black,s,a,o,l,c,u,f,h,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Xa[e])r=Xa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&at,r&at,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&at,e&at]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(mf),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Tu(l+1/3,s,a),r[1]=Tu(l,s,a),r[2]=Tu(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(h0),n&&r.length<4&&(r[3]=1),r}else r=e.match(mf)||Xa.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/at,a=r[1]/at,o=r[2]/at,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(p=f-h,c=u>.5?p/(2-f-h):p/(f+h),l=f===s?(a-o)/p+(a<o?6:0):f===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},N0=function(e){var t=[],n=[],r=-1;return e.split(_r).forEach(function(s){var a=s.match($s)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},Em=function(e,t,n){var r="",s=(e+r).match(_r),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=O0(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=N0(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(_r,"1").split($s),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(_r),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},_r=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Xa)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),v3=/hsl[a]?\(/,k0=function(e){var t=e.join(" "),n;if(_r.lastIndex=0,_r.test(t))return n=v3.test(t),e[1]=Em(e[1],n),e[0]=Em(e[0],n,N0(e[1])),!0},To,gn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,f,h,p,g=function m(d){var _=i()-r,v=d===!0,b,M,y,E;if(_>e&&(n+=_-t),r+=_,y=r-n,b=y-a,(b>0||v)&&(E=++f.frame,h=y-f.time*1e3,f.time=y=y/1e3,a+=b+(b>=s?4:s-b),M=1),v||(l=c(m)),M)for(p=0;p<o.length;p++)o[p](y,h,E,d)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(d){return h/(1e3/(d||60))},wake:function(){m0&&(!gf&&u0()&&(An=gf=window,Ih=An.document||{},yn.gsap=bn,(An.gsapVersions||(An.gsapVersions=[])).push(bn.version),g0(Gl||An.GreenSockGlobals||!An.gsap&&An||{}),u=An.requestAnimationFrame),l&&f.sleep(),c=u||function(d){return setTimeout(d,a-f.time*1e3+1|0)},To=1,g(2))},sleep:function(){(u?An.cancelAnimationFrame:clearTimeout)(l),To=0,c=So},lagSmoothing:function(d,_){e=d||1/ot,t=Math.min(_,e,0)},fps:function(d){s=1e3/(d||240),a=f.time*1e3+s},add:function(d,_,v){var b=_?function(M,y,E,A){d(M,y,E,A),f.remove(b)}:d;return f.remove(d),o[v?"unshift":"push"](b),ya(),b},remove:function(d,_){~(_=o.indexOf(d))&&o.splice(_,1)&&p>=_&&p--},_listeners:o},f}(),ya=function(){return!To&&gn.wake()},$e={},x3=/^[\d.\-M][\d.\-,\s]/,y3=/["']/g,b3=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(y3,"").trim():+c,r=l.substr(o+1).trim();return t},M3=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},S3=function(e){var t=(e+"").split("("),n=$e[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[b3(t[1])]:M3(e).split(",").map(b0)):$e._CE&&x3.test(e)?$e._CE("",e):n},F0=function(e){return function(t){return 1-e(1-t)}},z0=function i(e,t){for(var n=e._first,r;n;)n instanceof sn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},rs=function(e,t){return e&&(mt(e)?e:$e[e]||S3(e))||t},vs=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return ln(e,function(o){$e[o]=yn[o]=s,$e[a=o.toLowerCase()]=n;for(var l in s)$e[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=$e[o+"."+l]=s[l]}),s},U0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Eu=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/pf*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*ZE((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:U0(o);return s=pf/s,l.config=function(c,u){return i(e,c,u)},l},Au=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:U0(n);return r.config=function(s){return i(e,s)},r};ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;vs(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});$e.Linear.easeNone=$e.none=$e.Linear.easeIn;vs("Elastic",Eu("in"),Eu("out"),Eu());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};vs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);vs("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});vs("Circ",function(i){return-(c0(1-i*i)-1)});vs("Sine",function(i){return i===1?1:-KE(i*XE)+1});vs("Back",Au("in"),Au("out"),Au());$e.SteppedEase=$e.steps=yn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-ot;return function(o){return((r*Oo(0,a,o)|0)+s)*n}}};_a.ease=$e["quad.out"];ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Nh+=i+","+i+"Params,"});var B0=function(e,t){this.id=YE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:x0,this.set=t?t.getSetter:Bh},ba=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,xa(this,+t.duration,1,1),this.data=t.data,Mt&&(this._ctx=Mt,Mt.data.push(this)),To||gn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,xa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(ya(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Sc(this,n),!s._dp||s.parent||w0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&li(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ot||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),y0(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sm(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?va(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ot?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?jl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ot?0:this._rts,this.totalTime(Oo(-this._delay,this._tDur,r),!0),Mc(this),i3(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ya(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ot&&(this._tTime-=ot)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&li(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(on(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?jl(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=io);var r=ei;return ei=n,this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents),this.data!=="nested"&&Gi(this),ei=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this.vars.immediateRender?-1:s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,wm(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(En(this,n),on(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,on(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ot,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-ot)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=mt(n)?n:M0,o=function(){var c=r.then;r.then=null,mt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){qa(this)},i}();Nn(ba.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ot,_prom:0,_ps:!1,_rts:1});var sn=function(i){l0(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=on(n.sortChildren),ut&&li(n.parent||ut,Pi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&T0(Pi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return so(0,arguments,this),this},t.from=function(r,s,a){return so(1,arguments,this),this},t.fromTo=function(r,s,a,o){return so(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,ro(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Tt(r,s,En(this,a),1),this},t.call=function(r,s,a){return li(this,Tt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Tt(r,a,En(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,ro(a).immediateRender=on(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,ro(o).immediateRender=on(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:zt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,p,g,m,d,_,v,b,M,y,E,A;if(this!==ut&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,M=this._start,b=this._ts,_=!b,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,d=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(d*100+r,s,a);if(h=zt(u%d),u===l?(m=this._repeat,h=c):(m=~~(u/d),m&&m===u/d&&(h=c,m--),h>c&&(h=c)),y=va(this._tTime,d),!o&&this._tTime&&y!==m&&(y=m),E&&m&1&&(h=c-h,A=1),m!==y&&!this._lock){var x=E&&y&1,S=x===(E&&m&1);if(m<y&&(x=!x),o=x?0:c,this._lock=1,this.render(o||(A?0:zt(m*d)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&On(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;z0(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=o3(this,zt(o),zt(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&h&&!s&&(On(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,a),h!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=-ot);break}}p=g}else{a=a||ei,p=this._last;for(var L=r<0?r:h;p;){if(g=p._prev,(p._act||L<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(L-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(L-p._start)*p._ts,s,a),h!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=L?-ot:ot);break}}p=g}}if(v&&!s&&(this.pause(),v.render(h>=o?0:-ot)._zTime=h>=o?1:-1,this._ts))return this._start=M,Mc(this),this.render(r,s,a);this._onUpdate&&!s&&On(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Gi(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(On(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Bi(s)||(s=En(this,s,r)),!(r instanceof ba)){if(Wt(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Dt(r))return this.addLabel(r,s);if(mt(r))r=Tt.delayedCall(0,r);else return this}return this!==r?li(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-In);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Tt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Dt(r)?this.removeLabel(r):mt(r)?this.killTweensOf(r):(bc(this,r),r===this._recent&&(this._recent=this._last),is(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(gn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=En(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Tt.delayedCall(0,s||So,a);return o.data="isPause",this._hasPause=1,li(this,o,En(this,r))},t.removePause=function(r){var s=this._first;for(r=En(this,r);s;)s._start===r&&s.data==="isPause"&&Gi(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)ur!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=Dn(r),l=this._first,c=Bi(s),u;l;)l instanceof Tt?e3(l._targets,o)&&(c?(!ur||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=En(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,p,g=Tt.to(a,Nn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ot,onStart:function(){if(a.pause(),!p){var d=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==d&&xa(g,d,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,Nn({startAt:{time:En(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Tm(this,En(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Tm(this,En(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ot)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return is(this)},t.invalidate=function(){var r=this._first;for(this._lock=0;r;)r.invalidate(),r=r._next;return i.prototype.invalidate.call(this)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),is(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=In,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,li(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;xa(a,a===ut&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(ut._ts&&(y0(ut,jl(r,ut)),v0=gn.frame),gn.frame>=bm){bm+=vn.autoSleep||120;var s=ut._first;if((!s||!s._ts)&&vn.autoSleep&&gn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||gn.sleep()}}},e}(ba);Nn(sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var w3=function(e,t,n,r,s,a,o){var l=new cn(this._pt,e,t,0,1,$0,null,s),c=0,u=0,f,h,p,g,m,d,_,v;for(l.b=n,l.e=r,n+="",r+="",(_=~r.indexOf("random("))&&(r=wo(r)),a&&(v=[n,r],a(v,e,t),n=v[0],r=v[1]),h=n.match(Su)||[];f=Su.exec(r);)g=f[0],m=r.substring(c,f.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),g!==h[u++]&&(d=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:d,c:g.charAt(1)==="="?na(d,g)-d:parseFloat(g)-d,m:p&&p<4?Math.round:0},c=Su.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(d0.test(r)||_)&&(l.e=0),this._pt=l,l},Fh=function(e,t,n,r,s,a,o,l,c,u){mt(r)&&(r=r(s||0,e,a));var f=e[t],h=n!=="get"?n:mt(f)?c?e[t.indexOf("set")||!mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,p=mt(f)?c?P3:W0:Uh,g;if(Dt(r)&&(~r.indexOf("random(")&&(r=wo(r)),r.charAt(1)==="="&&(g=na(h,r)+(Ht(h)||0),(g||g===0)&&(r=g))),!u||h!==r||Sf)return!isNaN(h*r)&&r!==""?(g=new cn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?L3:j0,0,p),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&Dh(t,r),w3.call(this,e,t,h,r,p,l||vn.stringFilter,c))},T3=function(e,t,n,r,s){if(mt(e)&&(e=ao(e,s,t,n,r)),!gi(e)||e.style&&e.nodeType||Wt(e)||f0(e))return Dt(e)?ao(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=ao(e[o],s,t,n,r);return a},G0=function(e,t,n,r,s,a){var o,l,c,u;if(pn[e]&&(o=new pn[e]).init(s,o.rawVars?t[e]:T3(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new cn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==qs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ur,Sf,zh=function i(e,t){var n=e.vars,r=n.ease,s=n.startAt,a=n.immediateRender,o=n.lazy,l=n.onUpdate,c=n.onUpdateParams,u=n.callbackScope,f=n.runBackwards,h=n.yoyoEase,p=n.keyframes,g=n.autoRevert,m=e._dur,d=e._startAt,_=e._targets,v=e.parent,b=v&&v.data==="nested"?v.parent._targets:_,M=e._overwrite==="auto"&&!Rh,y=e.timeline,E,A,x,S,L,I,X,W,k,H,U,z,B;if(y&&(!p||!r)&&(r="none"),e._ease=rs(r,_a.ease),e._yEase=h?F0(rs(h===!0?r:h,_a.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!n.runBackwards,!y||p&&!n.stagger){if(W=_[0]?ns(_[0]).harness:0,z=W&&n[W.prop],E=Wl(n,Oh),d&&(d.revert(f&&m?io:QE),d._lazy=0),s){if(Gi(e._startAt=Tt.set(_,Nn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:on(o),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:u,stagger:0},s))),t<0&&(ei||!a&&!g)&&e._startAt.revert(io),a&&m&&t<=0){t&&(e._zTime=t);return}}else if(f&&m&&!d){if(t&&(a=!1),x=Nn({overwrite:!1,data:"isFromStart",lazy:a&&on(o),immediateRender:a,stagger:0,parent:v},E),z&&(x[W.prop]=z),Gi(e._startAt=Tt.set(_,x)),t<0&&(ei?e._startAt.revert(io):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,ot);else if(!t)return}for(e._pt=e._ptCache=0,o=m&&on(o)||o&&!m,A=0;A<_.length;A++){if(L=_[A],X=L._gsap||kh(_)[A]._gsap,e._ptLookup[A]=H={},_f[X.id]&&gr.length&&Hl(),U=b===_?A:b.indexOf(L),W&&(k=new W).init(L,z||E,e,U,b)!==!1&&(e._pt=S=new cn(e._pt,L,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(G){H[G]=S}),k.priority&&(I=1)),!W||z)for(x in E)pn[x]&&(k=G0(x,E,e,U,L,b))?k.priority&&(I=1):H[x]=S=Fh.call(e,L,x,"get",E[x],U,b,0,n.stringFilter);e._op&&e._op[A]&&e.kill(L,e._op[A]),M&&e._pt&&(ur=e,ut.killTweensOf(L,H,e.globalTime(t)),B=!e.parent,ur=0),e._pt&&o&&(_f[X.id]=1)}I&&q0(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!B,p&&t<=0&&y.render(In,!0,!0)},E3=function(e,t,n,r,s,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Sf=1,e.vars[t]="+=0",zh(e,o),Sf=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(r||r===0)&&!s?r:c.s+(r||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=_t(n)+Ht(u.e)),u.b&&(u.b=c.s+Ht(u.b))},A3=function(e,t){var n=e[0]?ns(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=fs({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},C3=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(Wt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},ao=function(e,t,n,r,s){return mt(e)?e.call(t,n,r,s):Dt(e)&&~e.indexOf("random(")?wo(e):e},V0=Nh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",H0={};ln(V0+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return H0[i]=1});var Tt=function(i){l0(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:ro(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,m=l.defaults,d=l.scrollTrigger,_=l.yoyoEase,v=r.parent||ut,b=(Wt(n)||f0(n)?Bi(n[0]):"length"in r)?[n]:Dn(n),M,y,E,A,x,S,L,I;if(o._targets=b.length?kh(b):Vl("GSAP target "+n+" not found. https://greensock.com",!vn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||h||dl(c)||dl(u)){if(r=o.vars,M=o.timeline=new sn({data:"nested",defaults:m||{}}),M.kill(),M.parent=M._dp=Pi(o),M._start=0,h||dl(c)||dl(u)){if(A=b.length,L=h&&P0(h),gi(h))for(x in h)~V0.indexOf(x)&&(I||(I={}),I[x]=h[x]);for(y=0;y<A;y++)E=Wl(r,H0),E.stagger=0,_&&(E.yoyoEase=_),I&&fs(E,I),S=b[y],E.duration=+ao(c,Pi(o),y,S,b),E.delay=(+ao(u,Pi(o),y,S,b)||0)-o._delay,!h&&A===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),M.to(S,E,L?L(y,S,b):0),M._ease=$e.none;M.duration()?c=u=0:o.timeline=0}else if(g){ro(Nn(M.vars.defaults,{ease:"none"})),M._ease=rs(g.ease||r.ease||"none");var X=0,W,k,H;if(Wt(g))g.forEach(function(U){return M.to(b,U,">")}),M.duration();else{E={};for(x in g)x==="ease"||x==="easeEach"||C3(x,g[x],E,g.easeEach);for(x in E)for(W=E[x].sort(function(U,z){return U.t-z.t}),X=0,y=0;y<W.length;y++)k=W[y],H={ease:k.e,duration:(k.t-(y?W[y-1].t:0))/100*c},H[x]=k.v,M.to(b,H,X),X+=H.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return p===!0&&!Rh&&(ur=Pi(o),ut.killTweensOf(b),ur=0),li(v,Pi(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!g&&o._start===zt(v._time)&&on(f)&&r3(Pi(o))&&v.data!=="nested")&&(o._tTime=-ot,o.render(Math.max(0,-u))),d&&T0(Pi(o),d),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-ot&&!u?l:r<ot?0:r,h,p,g,m,d,_,v,b,M;if(!c)a3(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,b=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+r,s,a);if(h=zt(f%m),f===l?(g=this._repeat,h=c):(g=~~(f/m),g&&g===f/m&&(h=c,g--),h>c&&(h=c)),_=this._yoyo&&g&1,_&&(M=this._yEase,h=c-h),d=va(this._tTime,m),h===o&&!a&&this._initted)return this._tTime=f,this;g!==d&&(b&&this._yEase&&z0(b,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=a=1,this.render(zt(m*g),!0).invalidate()._lock=0))}if(!this._initted){if(E0(this,u?r:h,a,s))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(M||this._ease)(h/c),this._from&&(this.ratio=v=1-v),h&&!o&&!s&&(On(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;b&&b.render(r<0?r:!h&&_?-ot:b._dur*b._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&vf(this,r,s,a),On(this,"onUpdate")),this._repeat&&g!==d&&this.vars.onRepeat&&!s&&this.parent&&On(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&vf(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Gi(this,1),!s&&!(u&&!o)&&(f||o)&&(On(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),i.prototype.invalidate.call(this)},t.resetTo=function(r,s,a,o){To||gn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||zh(this,l),c=this._ease(l/this._dur),E3(this,r,s,a,o,c,l)?this.resetTo(r,s,a,o):(Sc(this,0),this.parent||S0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?qa(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ur&&ur.vars.overwrite!==!0)._first||qa(this),this.parent&&a!==this.timeline.totalDuration()&&xa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Dn(r):o,c=this._ptLookup,u=this._pt,f,h,p,g,m,d,_;if((!s||s==="all")&&n3(o,l))return s==="all"&&(this._pt=0),qa(this);for(f=this._op=this._op||[],s!=="all"&&(Dt(s)&&(m={},ln(s,function(v){return m[v]=1}),s=m),s=A3(o,s)),_=o.length;_--;)if(~l.indexOf(o[_])){h=c[_],s==="all"?(f[_]=s,g=h,p={}):(p=f[_]=f[_]||{},g=s);for(m in g)d=h&&h[m],d&&((!("kill"in d.d)||d.d.kill(m)===!0)&&bc(this,d,"_pt"),delete h[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&u&&qa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return so(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return so(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return ut.killTweensOf(r,s,a)},e}(ba);Nn(Tt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ln("staggerTo,staggerFrom,staggerFromTo",function(i){Tt[i]=function(){var e=new sn,t=yf.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Uh=function(e,t,n){return e[t]=n},W0=function(e,t,n){return e[t](n)},P3=function(e,t,n,r){return e[t](r.fp,n)},R3=function(e,t,n){return e.setAttribute(t,n)},Bh=function(e,t){return mt(e[t])?W0:Lh(e[t])&&e.setAttribute?R3:Uh},j0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},L3=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},$0=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Gh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},I3=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},D3=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?bc(this,t,"_pt"):t.dep||(n=1),t=r;return!n},O3=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},q0=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},cn=function(){function i(t,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||j0,this.d=l||this,this.set=c||Uh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=O3,this.m=n,this.mt=s,this.tween=r},i}();ln(Nh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Oh[i]=1});yn.TweenMax=yn.TweenLite=Tt;yn.TimelineLite=yn.TimelineMax=sn;ut=new sn({sortChildren:!1,defaults:_a,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});vn.stringFilter=k0;var Ma=[],Tl={},N3=[],Am=0,Cu=function(e){return(Tl[e]||N3).map(function(t){return t()})},wf=function(){var e=Date.now(),t=[];e-Am>2&&(Cu("matchMediaInit"),Ma.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=An.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Cu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Am=e,Cu("matchMedia"))},X0=function(){function i(t,n){this.selector=n&&bf(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){mt(n)&&(s=r,r=n,n=mt);var a=this,o=function(){var c=Mt,u=a.selector,f;return c&&c.data.push(a),s&&(a.selector=bf(s)),Mt=a,f=r.apply(a,arguments),mt(f)&&a._r.push(f),Mt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===mt?o(a):n?a[n]=o:o},e.ignore=function(n){var r=Mt;Mt=null,n(this),Mt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Tt&&r._targets[0]!==r.vars.onComplete&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(this.getTweens().map(function(o){return{g:o.globalTime(0),t:o}}).sort(function(o,l){return l.g-o.g||-1}).forEach(function(o){return o.t.revert(n)}),this.data.forEach(function(o){return!(o instanceof ba)&&o.revert&&o.revert(n)}),this._r.forEach(function(o){return o(n,s)}),this.isReverted=!0):this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r){var a=Ma.indexOf(this);~a&&Ma.splice(a,1)}},e.revert=function(n){this.kill(n||{})},i}(),k3=function(){function i(t){this.contexts=[],this.scope=t}var e=i.prototype;return e.add=function(n,r,s){gi(n)||(n={matches:n});var a=new X0(0,s||this.scope),o=a.conditions={},l,c,u;this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=An.matchMedia(n[c]),l&&(Ma.indexOf(a)<0&&Ma.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(wf):l.addEventListener("change",wf)));return u&&r(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),$l={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return _3(r)})},timeline:function(e){return new sn(e)},getTweensOf:function(e,t){return ut.getTweensOf(e,t)},getProperty:function(e,t,n,r){Dt(e)&&(e=Dn(e)[0]);var s=ns(e||{}).get,a=n?M0:b0;return n==="native"&&(n=""),e&&(t?a((pn[t]&&pn[t].get||s)(e,t,n,r)):function(o,l,c){return a((pn[o]&&pn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Dn(e),e.length>1){var r=e.map(function(u){return bn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var a=pn[t],o=ns(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;qs._pt=0,f.init(e,n?u+n:u,qs,0,[e]),f.render(1,f),qs._pt&&Gh(1,qs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=bn.to(e,fs((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=rs(e.ease,_a.ease)),Mm(_a,e||{})},config:function(e){return Mm(vn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!pn[o]&&!yn[o]&&Vl(t+" effect requires "+o+" plugin.")}),wu[t]=function(o,l,c){return n(Dn(o),Nn(l||{},s),c)},a&&(sn.prototype[t]=function(o,l,c){return this.add(wu[t](o,gi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){$e[e]=rs(t)},parseEase:function(e,t){return arguments.length?rs(e,t):$e},getById:function(e){return ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new sn(e),r,s;for(n.smoothChildTiming=on(e.smoothChildTiming),ut.remove(n),n._dp=0,n._time=n._tTime=ut._time,r=ut._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Tt&&r.vars.onComplete===r._targets[0]))&&li(n,r,r._start-r._delay),r=s;return li(ut,n,0),n},context:function(e,t){return e?new X0(e,t):Mt},matchMedia:function(e){return new k3(e)},matchMediaRefresh:function(){return Ma.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||wf()},addEventListener:function(e,t){var n=Tl[e]||(Tl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Tl[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:p3,wrapYoyo:m3,distribute:P0,random:L0,snap:R0,normalize:d3,getUnit:Ht,clamp:c3,splitColor:O0,toArray:Dn,selector:bf,mapRange:D0,pipe:f3,unitize:h3,interpolate:g3,shuffle:C0},install:g0,effects:wu,ticker:gn,updateRoot:sn.updateRoot,plugins:pn,globalTimeline:ut,core:{PropTween:cn,globals:_0,Tween:Tt,Timeline:sn,Animation:ba,getCache:ns,_removeLinkedListItem:bc,reverting:function(){return ei},context:function(e){return e&&Mt&&(Mt.data.push(e),e._ctx=Mt),Mt},suppressOverwrites:function(e){return Rh=e}}};ln("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return $l[i]=Tt[i]});gn.add(sn.updateRoot);qs=$l.to({},{duration:0});var F3=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},z3=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=F3(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},Pu=function(e,t){return{name:e,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Dt(s)&&(l={},ln(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}z3(o,s)}}}},bn=$l.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)ei?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Pu("roundProps",Mf),Pu("modifiers"),Pu("snap",R0))||$l;Tt.version=sn.version=bn.version="3.11.0";m0=1;u0()&&ya();$e.Power0;$e.Power1;$e.Power2;$e.Power3;$e.Power4;$e.Linear;$e.Quad;$e.Cubic;$e.Quart;$e.Quint;$e.Strong;$e.Elastic;$e.Back;$e.SteppedEase;$e.Bounce;$e.Sine;$e.Expo;$e.Circ;/*!
 * CSSPlugin 3.11.0
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Cm,fr,ia,Vh,Xr,Pm,Hh,U3=function(){return typeof window<"u"},Vi={},Ur=180/Math.PI,ra=Math.PI/180,Us=Math.atan2,Rm=1e8,Wh=/([A-Z])/g,B3=/(left|right|width|margin|padding|x)/i,G3=/[\s,\(]\S/,Ni={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Tf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},V3=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},H3=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},W3=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Y0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},K0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},j3=function(e,t,n){return e.style[t]=n},$3=function(e,t,n){return e.style.setProperty(t,n)},q3=function(e,t,n){return e._gsap[t]=n},X3=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Y3=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},K3=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},pt="transform",di=pt+"Origin",Z3=function(e){var t=this,n=this.target,r=n.style;if(e in Vi){if(this.tfm=this.tfm||{},e!=="transform"&&(e=Ni[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return t.tfm[s]=Ri(n,s)}):this.tfm[e]=n._gsap.x?n._gsap[e]:Ri(n,e)),n._gsap.svg&&(this.svg=n.getAttribute(e)||""),this.props.indexOf(pt)>=0)return;e=pt}r&&this.props.push(e,r[e])},Z0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},J3=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=2)e[s+1]?n[e[s]]=e[s+1]:n.removeProperty(e[s].replace(Wh,"-$1").toLowerCase());if(this.tfm){r.svg&&t.setAttribute("transform",this.svg||"");for(a in this.tfm)r[a]=this.tfm[a];s=Hh(),s&&!s.isStart&&!n[pt]&&(Z0(n),r.uncache=1)}},J0=function(e,t){var n={target:e,props:[],revert:J3,save:Z3};return t&&t.split(",").forEach(function(r){return n.save(r)}),n},Q0,Ef=function(e,t){var n=fr.createElementNS?fr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):fr.createElement(e);return n.style?n:fr.createElement(e)},pi=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Wh,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Sa(t)||t,1)||""},Lm="O,Moz,ms,Ms,Webkit".split(","),Sa=function(e,t,n){var r=t||Xr,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Lm[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Lm[a]:"")+e},Af=function(){U3()&&window.document&&(Cm=window,fr=Cm.document,ia=fr.documentElement,Xr=Ef("div")||{style:{}},Ef("div"),pt=Sa(pt),di=pt+"Origin",Xr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Q0=!!Sa("perspective"),Hh=bn.core.reverting,Vh=1)},Ru=function i(e){var t=Ef("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(ia.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),ia.removeChild(t),this.style.cssText=s,a},Im=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ev=function(e){var t;try{t=e.getBBox()}catch{t=Ru.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ru||(t=Ru.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Im(e,["x","cx","x1"])||0,y:+Im(e,["y","cy","y1"])||0,width:0,height:0}:t},tv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ev(e))},Eo=function(e,t){if(t){var n=e.style;t in Vi&&t!==di&&(t=pt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Wh,"-$1").toLowerCase())):n.removeAttribute(t)}},hr=function(e,t,n,r,s,a){var o=new cn(e._pt,t,n,0,1,a?K0:Y0);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},Dm={deg:1,rad:1,turn:1},Q3={grid:1,flex:1},br=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Xr.style,l=B3.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",g,m,d,_;return r===a||!s||Dm[r]||Dm[a]?s:(a!=="px"&&!h&&(s=i(e,t,n,"px")),_=e.getCTM&&tv(e),(p||a==="%")&&(Vi[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],_t(p?s/g*f:s/100*g)):(o[l?"width":"height"]=f+(h?a:r),m=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===fr||!m.appendChild)&&(m=fr.body),d=m._gsap,d&&p&&d.width&&l&&d.time===gn.time&&!d.uncache?_t(s/d.width*f):((p||a==="%")&&!Q3[pi(m,"display")]&&(o.position=pi(e,"position")),m===e&&(o.position="static"),m.appendChild(Xr),g=Xr[u],m.removeChild(Xr),o.position="absolute",l&&p&&(d=ns(m),d.time=gn.time,d.width=m[u]),_t(h?g*s/f:g&&s?f/g*s:0))))},Ri=function(e,t,n,r){var s;return Vh||Af(),t in Ni&&t!=="transform"&&(t=Ni[t],~t.indexOf(",")&&(t=t.split(",")[0])),Vi[t]&&t!=="transform"?(s=Co(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Xl(pi(e,di))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ql[t]&&ql[t](e,t,n)||pi(e,t)||x0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?br(e,t,s,n)+n:s},eA=function(e,t,n,r){if(!n||n==="none"){var s=Sa(t,e,1),a=s&&pi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=pi(e,"borderTopColor"))}var o=new cn(this._pt,e.style,t,0,1,$0),l=0,c=0,u,f,h,p,g,m,d,_,v,b,M,y;if(o.b=n,o.e=r,n+="",r+="",r==="auto"&&(e.style[t]=r,r=pi(e,t)||r,e.style[t]=n),u=[n,r],k0(u),n=u[0],r=u[1],h=n.match($s)||[],y=r.match($s)||[],y.length){for(;f=$s.exec(r);)d=f[0],v=r.substring(l,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),d!==(m=h[c++]||"")&&(p=parseFloat(m)||0,M=m.substr((p+"").length),d.charAt(1)==="="&&(d=na(p,d)+M),_=parseFloat(d),b=d.substr((_+"").length),l=$s.lastIndex-b.length,b||(b=b||vn.units[t]||M,l===r.length&&(r+=b,o.e+=b)),M!==b&&(p=br(e,t,m,b)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?K0:Y0;return d0.test(r)&&(o.e=0),this._pt=o,o},Om={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tA=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Om[n]||n,t[1]=Om[r]||r,t.join(" ")},nA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Vi[o]&&(l=1,o=o==="transformOrigin"?di:pt),Eo(n,o);l&&(Eo(n,pt),a&&(a.svg&&n.removeAttribute("transform"),Co(n,1),a.uncache=1,Z0(r)))}},ql={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new cn(e._pt,t,n,0,0,nA);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ao=[1,0,0,1,0,0],nv={},iv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Nm=function(e){var t=pi(e,pt);return iv(t)?Ao:t.substr(7).match(h0).map(_t)},jh=function(e,t){var n=e._gsap||ns(e),r=e.style,s=Nm(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ao:s):(s===Ao&&!e.offsetParent&&e!==ia&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,ia.appendChild(e)),s=Nm(e),l?r.display=l:Eo(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ia.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Cf=function(e,t,n,r,s,a){var o=e._gsap,l=s||jh(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,p=l[0],g=l[1],m=l[2],d=l[3],_=l[4],v=l[5],b=t.split(" "),M=parseFloat(b[0])||0,y=parseFloat(b[1])||0,E,A,x,S;n?l!==Ao&&(A=p*d-g*m)&&(x=M*(d/A)+y*(-m/A)+(m*v-d*_)/A,S=M*(-g/A)+y*(p/A)-(p*v-g*_)/A,M=x,y=S):(E=ev(e),M=E.x+(~b[0].indexOf("%")?M/100*E.width:M),y=E.y+(~(b[1]||b[0]).indexOf("%")?y/100*E.height:y)),r||r!==!1&&o.smooth?(_=M-c,v=y-u,o.xOffset=f+(_*p+v*m)-_,o.yOffset=h+(_*g+v*d)-v):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=y,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[di]="0px 0px",a&&(hr(a,o,"xOrigin",c,M),hr(a,o,"yOrigin",u,y),hr(a,o,"xOffset",f,o.xOffset),hr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+y)},Co=function(e,t){var n=e._gsap||new B0(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=pi(e,di)||"0",u,f,h,p,g,m,d,_,v,b,M,y,E,A,x,S,L,I,X,W,k,H,U,z,B,G,J,ue,se,oe,_e,Se;return u=f=h=m=d=_=v=b=M=0,p=g=1,n.svg=!!(e.getCTM&&tv(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+l[pt]),r.scale=r.rotate=r.translate="none"),A=jh(e,n.svg),n.svg&&(z=(!n.uncache||c==="0px 0px")&&!t&&e.getAttribute("data-svg-origin"),Cf(e,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,A)),y=n.xOrigin||0,E=n.yOrigin||0,A!==Ao&&(I=A[0],X=A[1],W=A[2],k=A[3],u=H=A[4],f=U=A[5],A.length===6?(p=Math.sqrt(I*I+X*X),g=Math.sqrt(k*k+W*W),m=I||X?Us(X,I)*Ur:0,v=W||k?Us(W,k)*Ur+m:0,v&&(g*=Math.abs(Math.cos(v*ra))),n.svg&&(u-=y-(y*I+E*W),f-=E-(y*X+E*k))):(Se=A[6],oe=A[7],J=A[8],ue=A[9],se=A[10],_e=A[11],u=A[12],f=A[13],h=A[14],x=Us(Se,se),d=x*Ur,x&&(S=Math.cos(-x),L=Math.sin(-x),z=H*S+J*L,B=U*S+ue*L,G=Se*S+se*L,J=H*-L+J*S,ue=U*-L+ue*S,se=Se*-L+se*S,_e=oe*-L+_e*S,H=z,U=B,Se=G),x=Us(-W,se),_=x*Ur,x&&(S=Math.cos(-x),L=Math.sin(-x),z=I*S-J*L,B=X*S-ue*L,G=W*S-se*L,_e=k*L+_e*S,I=z,X=B,W=G),x=Us(X,I),m=x*Ur,x&&(S=Math.cos(x),L=Math.sin(x),z=I*S+X*L,B=H*S+U*L,X=X*S-I*L,U=U*S-H*L,I=z,H=B),d&&Math.abs(d)+Math.abs(m)>359.9&&(d=m=0,_=180-_),p=_t(Math.sqrt(I*I+X*X+W*W)),g=_t(Math.sqrt(U*U+Se*Se)),x=Us(H,U),v=Math.abs(x)>2e-4?x*Ur:0,M=_e?1/(_e<0?-_e:_e):0),n.svg&&(z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!iv(pi(e,pt)),z&&e.setAttribute("transform",z))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=m<=0?180:-180,m+=m<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=_t(p),n.scaleY=_t(g),n.rotation=_t(m)+o,n.rotationX=_t(d)+o,n.rotationY=_t(_)+o,n.skewX=v+o,n.skewY=b+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[di]=Xl(c)),n.xOffset=n.yOffset=0,n.force3D=vn.force3D,n.renderTransform=n.svg?rA:Q0?rv:iA,n.uncache=0,n},Xl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Lu=function(e,t,n){var r=Ht(t);return _t(parseFloat(t)+parseFloat(br(e,"x",n+"px",r)))+r},iA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,rv(e,t)},Dr="0deg",Ba="0px",Or=") ",rv=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,p=n.skewY,g=n.scaleX,m=n.scaleY,d=n.transformPerspective,_=n.force3D,v=n.target,b=n.zOrigin,M="",y=_==="auto"&&e&&e!==1||_===!0;if(b&&(f!==Dr||u!==Dr)){var E=parseFloat(u)*ra,A=Math.sin(E),x=Math.cos(E),S;E=parseFloat(f)*ra,S=Math.cos(E),a=Lu(v,a,A*S*-b),o=Lu(v,o,-Math.sin(E)*-b),l=Lu(v,l,x*S*-b+b)}d!==Ba&&(M+="perspective("+d+Or),(r||s)&&(M+="translate("+r+"%, "+s+"%) "),(y||a!==Ba||o!==Ba||l!==Ba)&&(M+=l!==Ba||y?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Or),c!==Dr&&(M+="rotate("+c+Or),u!==Dr&&(M+="rotateY("+u+Or),f!==Dr&&(M+="rotateX("+f+Or),(h!==Dr||p!==Dr)&&(M+="skew("+h+", "+p+Or),(g!==1||m!==1)&&(M+="scale("+g+", "+m+Or),v.style[pt]=M||"translate(0, 0)"},rA=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,p=n.target,g=n.xOrigin,m=n.yOrigin,d=n.xOffset,_=n.yOffset,v=n.forceCSS,b=parseFloat(a),M=parseFloat(o),y,E,A,x,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ra,c*=ra,y=Math.cos(l)*f,E=Math.sin(l)*f,A=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=ra,S=Math.tan(c-u),S=Math.sqrt(1+S*S),A*=S,x*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),y*=S,E*=S)),y=_t(y),E=_t(E),A=_t(A),x=_t(x)):(y=f,x=h,E=A=0),(b&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(b=br(p,"x",a,"px"),M=br(p,"y",o,"px")),(g||m||d||_)&&(b=_t(b+g-(g*y+m*A)+d),M=_t(M+m-(g*E+m*x)+_)),(r||s)&&(S=p.getBBox(),b=_t(b+r/100*S.width),M=_t(M+s/100*S.height)),S="matrix("+y+","+E+","+A+","+x+","+b+","+M+")",p.setAttribute("transform",S),v&&(p.style[pt]=S)},sA=function(e,t,n,r,s){var a=360,o=Dt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ur:1),c=l-r,u=r+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Rm)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Rm)%a-~~(c/a)*a)),e._pt=h=new cn(e._pt,t,n,r,c,V3),h.e=u,h.u="deg",e._props.push(n),h},km=function(e,t){for(var n in t)e[n]=t[n];return e},aA=function(e,t,n){var r=km({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,p,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[pt]=t,o=Co(n,1),Eo(n,pt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[pt],a[pt]=t,o=Co(n,1),a[pt]=c);for(l in Vi)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=Ht(c),g=Ht(u),f=p!==g?br(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new cn(e._pt,o,l,f,h-f,Tf),e._pt.u=g||0,e._props.push(l));km(o,r)};ln("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});ql[e>1?"border"+i:i]=function(o,l,c,u,f){var h,p;if(arguments.length<4)return h=a.map(function(g){return Ri(o,g,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},a.forEach(function(g,m){return p[g]=h[m]=h[m]||h[(m-1)/2|0]}),o.init(l,p,f)}});var sv={name:"css",register:Af,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,p,g,m,d,_,v,b,M,y,E,A,x;Vh||Af(),this.styles=this.styles||J0(e),x=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(u=t[m],!(pn[m]&&G0(m,t,n,r,e,s)))){if(p=typeof u,g=ql[m],p==="function"&&(u=u.call(n,r,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=wo(u)),g)g(this,e,m,u,n)&&(A=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",_r.lastIndex=0,_r.test(c)||(d=Ht(c),_=Ht(u)),_?d!==_&&(c=br(e,m,c,_)+_):d&&(u+=d),this.add(o,"setProperty",c,u,r,s,0,0,m),a.push(m),x.push(m,o[m]);else if(p!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(n,r,e,s):l[m],Dt(c)&&~c.indexOf("random(")&&(c=wo(c)),Ht(c+"")||(c+=vn.units[m]||Ht(Ri(e,m))||""),(c+"").charAt(1)==="="&&(c=Ri(e,m))):c=Ri(e,m),h=parseFloat(c),v=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),m in Ni&&(m==="autoAlpha"&&(h===1&&Ri(e,"visibility")==="hidden"&&f&&(h=0),x.push("visibility",o.visibility),hr(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=Ni[m],~m.indexOf(",")&&(m=m.split(",")[0]))),b=m in Vi,b){if(this.styles.save(m),M||(y=e._gsap,y.renderTransform&&!t.parseTransform||Co(e,t.parseTransform),E=t.smoothOrigin!==!1&&y.smooth,M=this._pt=new cn(this._pt,o,pt,0,1,y.renderTransform,y,0,-1),M.dep=1),m==="scale")this._pt=new cn(this._pt,y,"scaleY",y.scaleY,(v?na(y.scaleY,v+f):f)-y.scaleY||0,Tf),this._pt.u=0,a.push("scaleY",m),m+="X";else if(m==="transformOrigin"){x.push(di,o[di]),u=tA(u),y.svg?Cf(e,u,0,E,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==y.zOrigin&&hr(this,y,"zOrigin",y.zOrigin,_),hr(this,o,m,Xl(c),Xl(u)));continue}else if(m==="svgOrigin"){Cf(e,u,1,E,0,this);continue}else if(m in nv){sA(this,y,m,h,v?na(h,v+u):u);continue}else if(m==="smoothOrigin"){hr(this,y,"smooth",y.smooth,u);continue}else if(m==="force3D"){y[m]=u;continue}else if(m==="transform"){aA(this,u,e);continue}}else m in o||(m=Sa(m)||m);if(b||(f||f===0)&&(h||h===0)&&!G3.test(u)&&m in o)d=(c+"").substr((h+"").length),f||(f=0),_=Ht(u)||(m in vn.units?vn.units[m]:d),d!==_&&(h=br(e,m,c,_)),this._pt=new cn(this._pt,b?y:o,m,h,(v?na(h,v+f):f)-h,!b&&(_==="px"||m==="zIndex")&&t.autoRound!==!1?W3:Tf),this._pt.u=_||0,d!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=H3);else if(m in o)eA.call(this,e,m,c,v?v+u:u);else if(m in e)this.add(e,m,c||e[m],v?v+u:u,r,s);else{Dh(m,u);continue}b||x.push(m,o[m]),a.push(m)}}A&&q0(this)},render:function(e,t){if(t.tween._time||!Hh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ri,aliases:Ni,getSetter:function(e,t,n){var r=Ni[t];return r&&r.indexOf(",")<0&&(t=r),t in Vi&&t!==di&&(e._gsap.x||Ri(e,"x"))?n&&Pm===n?t==="scale"?X3:q3:(Pm=n||{})&&(t==="scale"?Y3:K3):e.style&&!Lh(e.style[t])?j3:~t.indexOf("-")?$3:Bh(e,t)},core:{_removeProperty:Eo,_getMatrix:jh}};bn.utils.checkPrefix=Sa;bn.core.getStyleSaver=J0;(function(i,e,t,n){var r=ln(i+","+e+","+t,function(s){Vi[s]=1});ln(e,function(s){vn.units[s]="deg",nv[s]=1}),Ni[r[13]]=i+","+e,ln(n,function(s){var a=s.split(":");Ni[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){vn.units[i]="px"});bn.registerPlugin(sv);var El=bn.registerPlugin(sv)||bn;El.core.Tween;const wc=dh("viewer",()=>{var i=vt(!1),e=vt(!0),t=vt(!1),n=vt(!1),r=vt(!0);function s(a){}return{hideNonSelected:i,transparentNonSelected:e,focusOnSelected:r,switchValue:s,hideNonSelectedMode:t,transparentMode:n}});class oA{constructor(e){et(this,"nearPlane");et(this,"farPlane");et(this,"canvas");et(this,"scene");et(this,"camera");et(this,"orbitControl");et(this,"renderer");et(this,"mouse");et(this,"models");et(this,"activeModelName");et(this,"activeModel");et(this,"stats");et(this,"drowCallsPanel");et(this,"maxDrawCall");et(this,"highlightMaterial");et(this,"selectMaterial");et(this,"transparentMaterial");et(this,"raycaster");et(this,"dataStore");et(this,"viewerStore");this.canvas=e,this.nearPlane=.1,this.farPlane=1e3,this.scene=new iE,this.scene.name="MainScene",this.models=new Map,this.activeModelName="",this.activeModel=null,this.renderer=new J_({antialias:!0,alpha:!1}),this.camera=new Yt(75,this.canvas.clientWidth/this.canvas.clientHeight,this.nearPlane,this.farPlane),this.orbitControl=new WE(this.camera,this.renderer.domElement),this.orbitControl.mouseButtons={LEFT:NaN,RIGHT:cr.ROTATE,MIDDLE:cr.PAN},this.mouse=new Le(0,0),this.stats=ta(),this.drowCallsPanel=this.stats.addPanel(ta.Panel("drawcall","#ff8","#221")),this.maxDrawCall=0,this.highlightMaterial=new es,this.highlightMaterial.flatShading=!0,this.highlightMaterial.color=new Pe(.3,.3,.9),this.selectMaterial=new es,this.selectMaterial.flatShading=!0,this.selectMaterial.color=new Pe(.1,.1,.5),this.transparentMaterial=new es,this.transparentMaterial.flatShading=!0,this.transparentMaterial.color=new Pe(1,1,1),this.transparentMaterial.transparent=!0,this.transparentMaterial.opacity=.2,this.raycaster=new BE,this.dataStore=_i(),this.viewerStore=wc()}initialize(){return this.renderer.outputEncoding=tt,this.renderer.toneMapping=L_,this.renderer.toneMappingExposure=1,this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight),this.canvas.appendChild(this.renderer.domElement),this.camera.position.x=-40,this.camera.position.y=8,this.camera.position.z=-8,this.loadHDRI("sunset.hdr").then(e=>{this.scene.environment=e,this.scene.background=new Pe("rgb(245, 245, 245)")}),window.addEventListener("resize",()=>this.onWindowResize(),!1),window.addEventListener("mousemove",e=>this.onMouseMove(e),!1),window.addEventListener("mousedown",e=>this.onMouseDown(e),!1),this}activateTransparentMode(){this.activeModel!=null&&(this.activeModel.simpleGroup.traverse(e=>{if(e!=null&&e.type=="Mesh"){const t=e;t.material=this.transparentMaterial}}),this.viewerStore.transparentMode=!0)}deactivateTransparentMode(){this.activeModel!=null&&(this.activeModel.simpleGroup.traverse(e=>{var t;if(e!=null&&e.type=="Mesh"){const n=e,r=(t=this.activeModel)==null?void 0:t.simpleGroupMaterials.get(n.name);r!=null&&(n.material=r)}}),this.viewerStore.transparentMode=!1)}activateHideUnselectedMode(){this.activeModel!=null&&(this.activeModel.simpleGroup.visible=!1,this.viewerStore.hideNonSelectedMode=!0)}deactivateHideUnselectedMode(){this.activeModel!=null&&(this.activeModel.simpleGroup.visible=!0,this.viewerStore.hideNonSelectedMode=!1)}focusOnSelcted(){this.activeModel!=null&&(this.activeModel.selectedGroup.children.length>0?this.dataStore.selectedElements.length>1?this.focusCameraOnObject(this.activeModel.selectedGroup,1):this.focusCameraOnObject(this.activeModel.selectedGroup,1):this.focusCameraOnObject(this.activeModel.simpleGroup,.5))}focusCameraOnObject(e,t=1){const n=new gs().setFromObject(e);var r=n.getCenter(new N);const s=n.getSize(new N);r=new N().addVectors(r,new N(0,-s.y/2,0));const o=Math.max(s.x,s.y,s.z)*t;var l=o,c=o,u=o;this.camera.position.x<r.x&&(l=l*-1),this.camera.position.z<r.z&&(u=u*-1);const f=new N(this.orbitControl.target.x,this.orbitControl.target.y,this.orbitControl.target.z);El.to(this.camera.position,{duration:1,x:r.x+l,y:r.y+c,z:r.z+u,onUpdate:()=>{}}),El.to(f,{duration:1,x:r.x,y:r.y,z:r.z,onUpdate:()=>{this.camera.lookAt(f)}}),El.to(this.orbitControl.target,{duration:1,x:r.x,y:r.y,z:r.z,onUpdate:()=>{}})}animate(){window.requestAnimationFrame(this.animate.bind(this)),this.renderer.render(je(this.scene),this.camera)}loadHDRI(e){return new Promise(t=>{new jE().load(e,n=>{n.mapping=Fl,t(n)})})}onWindowResize(){this.camera.aspect=this.canvas.clientWidth/this.canvas.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.canvas.clientWidth,this.canvas.clientHeight)}onMouseMove(e){this.mouse.x=(e.clientX-this.canvas.offsetLeft)/this.canvas.clientWidth*2-1,this.mouse.y=-((e.clientY-this.canvas.offsetTop)/this.canvas.clientHeight)*2+1,this.viewerStore.hideNonSelectedMode||this.viewerStore.transparentMode||this.highlightElement()}onMouseDown(e){e.path[0].localName==this.canvas.id&&e.button==0&&this.selectElement()}selectElementsByIds(e){if(this.activeModel!=null){this.viewerStore.hideNonSelected&&(this.viewerStore.hideNonSelectedMode||this.activateHideUnselectedMode()),this.viewerStore.transparentNonSelected&&(this.viewerStore.transparentMode||this.activateTransparentMode()),this.activeModel.selectedGroup.clear();const r=this.activeModel.complexGroupElementsDict,s=[];if(e.length>0)for(let a of e){const o=r.get(a);if(o!==void 0){var t=o.clone();s.push(t.geometry)}}if(s.length>0){const a=o0(s,!0);if(a!=null){let o=new _n(a,this.selectMaterial);o.renderOrder=3,this.activeModel.selectedGroup.add(o)}}this.viewerStore.focusOnSelected&&this.focusOnSelcted()}}selectElement(){if(this.activeModel!=null){const e=this.addIntersectedObjectToScene(!0,this.activeModel.complexGroup,this.activeModel.selectedGroup,this.selectMaterial,3);e!=null&&(this.dataStore.infoElementId=e,this.dataStore.expandElementInTree()),this.dataStore.selectedElements=[]}}highlightElement(){this.activeModel!=null&&this.addIntersectedObjectToScene(!0,this.activeModel.complexGroup,this.activeModel.highlightedGroup,this.highlightMaterial,2)}addIntersectedObjectToScene(e,t,n,r,s){if(this.models.size==0)return null;n.clear(),this.raycaster.setFromCamera(this.mouse,this.camera);const a=this.raycaster.intersectObject(t,!0);if(a.length>0){const{face:c,object:u}=a[0];var o;e?o=this.getTopParent(u):o=u;var l=o.clone();return this.applyMaterial(l,r,s),n.add(l),l.name}else return null}applyMaterial(e,t,n){if(e.type=="Mesh"){const r=e;r.material=t,r.renderOrder=n,r.visible=!0}e.children.length>0&&e.children.forEach(r=>this.applyMaterial(r,t,n))}getTopParent(e){return e.parent==null||e.parent.name=="rootNode"?e:this.getTopParent(e.parent)}addModel(e){this.models.set(e.name,e),this.scene.add(je(e.group))}setActiveModel(e){this.activeModelName=e.name,this.activeModel=e}getActiveModel(){let e=this.models.get(this.activeModelName);return e==null?null:e}}class lA extends La{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new dA(t)}),this.register(function(t){return new yA(t)}),this.register(function(t){return new bA(t)}),this.register(function(t){return new mA(t)}),this.register(function(t){return new gA(t)}),this.register(function(t){return new _A(t)}),this.register(function(t){return new vA(t)}),this.register(function(t){return new hA(t)}),this.register(function(t){return new xA(t)}),this.register(function(t){return new pA(t)}),this.register(function(t){return new uA(t)}),this.register(function(t){return new MA(t)})}load(e,t,n,r){const s=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=ts.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Th(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const a={},o={};if(typeof e=="string")s=e;else if(ts.decodeText(new Uint8Array(e,0,4))===av){try{a[We.KHR_BINARY_GLTF]=new SA(e)}catch(f){r&&r(f);return}s=a[We.KHR_BINARY_GLTF].content}else s=ts.decodeText(new Uint8Array(e));const l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new kA(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);o[f.name]=f,a[f.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const f=l.extensionsUsed[u],h=l.extensionsRequired||[];switch(f){case We.KHR_MATERIALS_UNLIT:a[f]=new fA;break;case We.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:a[f]=new EA;break;case We.KHR_DRACO_MESH_COMPRESSION:a[f]=new wA(l,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:a[f]=new TA;break;case We.KHR_MESH_QUANTIZATION:a[f]=new AA;break;default:h.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function cA(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class uA{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Pe(16777215);l.color!==void 0&&u.fromArray(l.color);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new PE(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new AE(u),c.distance=f;break;case"spot":c=new TE(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class fA{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return qr}extendParams(e,t,n){const r=[];e.color=new Pe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,tt))}return Promise.all(r)}}class hA{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class dA{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_s}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Le(o,o)}return Promise.all(s)}}class pA{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_s}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class mA{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_s}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,tt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class gA{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_s}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class _A{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_s}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Pe(o[0],o[1],o[2]),Promise.all(s)}}class vA{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_s}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class xA{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_s}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Pe(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,tt)),Promise.all(s)}}class yA{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class bA{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class MA{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([s,a.ready]).then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,h=new ArrayBuffer(u*f),p=new Uint8Array(o[0],l,c);return a.decodeGltfBuffer(new Uint8Array(h),u,f,p,r.mode,r.filter),h})}else return null}}const av="glTF",Ga=12,Fm={JSON:1313821514,BIN:5130562};class SA{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ga);if(this.header={magic:ts.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==av)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Ga,r=new DataView(e,Ga);let s=0;for(;s<n;){const a=r.getUint32(s,!0);s+=4;const o=r.getUint32(s,!0);if(s+=4,o===Fm.JSON){const l=new Uint8Array(e,Ga+s,a);this.content=ts.decodeText(l)}else if(o===Fm.BIN){const l=Ga+s;this.body=e.slice(l,l+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class wA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const f=Rf[u]||u.toLowerCase();o[f]=a[u]}for(const u in e.attributes){const f=Rf[u]||u.toLowerCase();if(a[u]!==void 0){const h=n.accessors[e.attributes[u]],p=Po[h.componentType];c[f]=p,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f){r.decodeDracoFile(u,function(h){for(const p in h.attributes){const g=h.attributes[p],m=l[p];m!==void 0&&(g.normalized=m)}f(h)},o,c)})})}}class TA{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Pf extends es{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),r=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),a=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new Pe().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const c in o)l.uniforms[c]=o[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",r).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",a)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){o.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){o.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class EA{constructor(){this.name=We.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return Pf}extendParams(e,t,n){const r=t.extensions[this.name];e.color=new Pe(1,1,1),e.opacity=1;const s=[];if(Array.isArray(r.diffuseFactor)){const a=r.diffuseFactor;e.color.fromArray(a),e.opacity=a[3]}if(r.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",r.diffuseTexture,tt)),e.emissive=new Pe(0,0,0),e.glossiness=r.glossinessFactor!==void 0?r.glossinessFactor:1,e.specular=new Pe(1,1,1),Array.isArray(r.specularFactor)&&e.specular.fromArray(r.specularFactor),r.specularGlossinessTexture!==void 0){const a=r.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",a)),s.push(n.assignTexture(e,"specularMap",a,tt))}return Promise.all(s)}createMaterial(e){const t=new Pf(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=mh,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class AA{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class ov extends Do{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=r-t,f=(n-t)/u,h=f*f,p=h*f,g=e*c,m=g-c,d=-2*p+3*h,_=p-h,v=1-d,b=_-h+f;for(let M=0;M!==o;M++){const y=a[m+M+o],E=a[m+M+l]*u,A=a[g+M+o],x=a[g+M]*u;s[M]=v*y+b*E+d*A+_*x}return s}}const CA=new Ui;class PA extends ov{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return CA.fromArray(s).normalize().toArray(s),s}}const Ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Po={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zm={9728:kt,9729:Et,9984:af,9985:D_,9986:of,9987:ps},Um={33071:rn,33648:zl,10497:ha},Bm={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},sr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},RA={CUBICSPLINE:void 0,LINEAR:pa,STEP:vo},Iu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function LA(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new es({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ca})),i.DefaultMaterial}function Va(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Br(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function IA(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;a.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;o.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=f),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function DA(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function OA(i){const e=i.extensions&&i.extensions[We.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Gm(e.attributes):t=i.indices+":"+Gm(i.attributes)+":"+i.mode,t}function Gm(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Lf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function NA(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class kA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new cA,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new SE(this.options.manager):this.textureLoader=new RE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Th(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};Va(s,o,r),Br(o,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this.loadNode(t);break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){n.load(ts.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0)return Promise.resolve(null);const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Bm[r.type],c=Po[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let m,d;if(p&&p!==f){const _=Math.floor(h/p),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+_+":"+r.count;let b=t.cache.get(v);b||(m=new c(o,_*p,r.count*p/u),b=new rE(m,p/u),t.cache.add(v,b)),d=new Mh(b,l,h%p/u,g)}else o===null?m=new c(r.count*l):m=new c(o,h,r.count*l),d=new an(m,l,g);if(r.sparse!==void 0){const _=Bm.SCALAR,v=Po[r.sparse.indices.componentType],b=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,y=new v(a[1],b,r.sparse.count*_),E=new c(a[2],M,r.sparse.count*l);o!==null&&(d=new an(d.array.slice(),d.itemSize,d.normalized));for(let A=0,x=y.length;A<x;A++){const S=y[A];if(d.setX(S,E[A*l]),l>=2&&d.setY(S,E[A*l+1]),l>=3&&d.setZ(S,E[A*l+2]),l>=4&&d.setW(S,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return d})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,a.name&&(u.name=a.name);const h=(s.samplers||{})[a.sampler]||{};return u.magFilter=zm[h.magFilter]||Et,u.minFilter=zm[h.minFilter]||ps,u.wrapS=Um[h.wrapS]||ha,u.wrapT=Um[h.wrapT]||ha,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(m){const d=new Jt(m);d.needsUpdate=!0,h(d)}),t.load(ts.resolveURL(f,s.path),g,void 0,p)})}).then(function(f){return c===!0&&o.revokeObjectURL(l),f.userData.mimeType=a.mimeType||NA(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(a){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.encoding=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new n0,hi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new t0,hi.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(o+="specular-glossiness:"),r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return es}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[We.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const f=r[We.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];a=f.getMaterialType(),c.push(f.extendParams(o,s,t))}else if(l[We.KHR_MATERIALS_UNLIT]){const f=r[We.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),c.push(f.extendParams(o,s,t))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new Pe(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;o.color.fromArray(h),o.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",f.baseColorTexture,tt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=as);const u=s.alphaMode||Iu.OPAQUE;if(u===Iu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Iu.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==qr&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Le(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}return s.occlusionTexture!==void 0&&a!==qr&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==qr&&(o.emissive=new Pe().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==qr&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,tt)),Promise.all(c).then(function(){let f;return a===Pf?f=r[We.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):f=new a(o),s.name&&(f.name=s.name),Br(f,s),t.associations.set(f,{materials:e}),s.extensions&&Va(r,f,s),f})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");let n=t;for(let r=1;this.nodeNamesUsed[n];++r)n=t+"_"+r;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Vm(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=OA(c),f=r[u];if(f)a.push(f.promise);else{let h;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Vm(new kn,c,t),r[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?LA(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,g=u.length;p<g;p++){const m=u[p],d=a[p];let _;const v=c[p];if(d.mode===Ai.TRIANGLES||d.mode===Ai.TRIANGLE_STRIP||d.mode===Ai.TRIANGLE_FAN||d.mode===void 0)_=s.isSkinnedMesh===!0?new aE(m,v):new _n(m,v),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),d.mode===Ai.TRIANGLE_STRIP?_.geometry=Hm(_.geometry,U1):d.mode===Ai.TRIANGLE_FAN&&(_.geometry=Hm(_.geometry,N_));else if(d.mode===Ai.LINES)_=new lE(m,v);else if(d.mode===Ai.LINE_STRIP)_=new wh(m,v);else if(d.mode===Ai.LINE_LOOP)_=new cE(m,v);else if(d.mode===Ai.POINTS)_=new uE(m,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);Object.keys(_.geometry.morphAttributes).length>0&&DA(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),Br(_,s),d.extensions&&Va(r,_,d),t.assignFinalMaterial(_),f.push(_)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return f[0];const h=new Pn;t.associations.set(h,{meshes:e});for(let p=0,g=f.length;p<g;p++)h.add(f[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(sM.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new yh(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Br(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(r){return n.inverseBindMatrices=r,n})}loadAnimation(e){const n=this.json.animations[e],r=[],s=[],a=[],o=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const f=n.channels[c],h=n.samplers[f.sampler],p=f.target,g=p.node!==void 0?p.node:p.id,m=n.parameters!==void 0?n.parameters[h.input]:h.input,d=n.parameters!==void 0?n.parameters[h.output]:h.output;r.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",d)),o.push(h),l.push(p)}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2],p=c[3],g=c[4],m=[];for(let _=0,v=u.length;_<v;_++){const b=u[_],M=f[_],y=h[_],E=p[_],A=g[_];if(b===void 0)continue;b.updateMatrix();let x;switch(sr[A.path]){case sr.weights:x=bo;break;case sr.rotation:x=us;break;case sr.position:case sr.scale:default:x=Mo;break}const S=b.name?b.name:b.uuid,L=E.interpolation!==void 0?RA[E.interpolation]:pa,I=[];sr[A.path]===sr.weights?b.traverse(function(W){W.morphTargetInfluences&&I.push(W.name?W.name:W.uuid)}):I.push(S);let X=y.array;if(y.normalized){const W=Lf(X.constructor),k=new Float32Array(X.length);for(let H=0,U=X.length;H<U;H++)k[H]=X[H]*W;X=k}for(let W=0,k=I.length;W<k;W++){const H=new x(I[W]+"."+sr[A.path],M.array,X,L);E.interpolation==="CUBICSPLINE"&&(H.createInterpolant=function(z){const B=this instanceof us?PA:ov;return new B(this.times,this.values,this.getValueSize()/3,z)},H.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(H)}}const d=n.name?n.name:"animation_"+e;return new gE(d,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(!!o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,n=this.extensions,r=this,s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"";return function(){const o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),Promise.all(o)}().then(function(o){let l;if(s.isBone===!0?l=new Q_:o.length>1?l=new Pn:o.length===1?l=o[0]:l=new St,l!==o[0])for(let c=0,u=o.length;c<u;c++)l.add(o[c]);if(s.name&&(l.userData.name=s.name,l.name=a),Br(l,s),s.extensions&&Va(n,l,s),s.matrix!==void 0){const c=new Je;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return r.associations.has(l)||r.associations.set(l,{}),r.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,r=this.json.scenes[e],s=this,a=new Pn;r.name&&(a.name=s.createUniqueName(r.name)),Br(a,r),r.extensions&&Va(n,a,r);const o=r.nodes||[],l=[];for(let c=0,u=o.length;c<u;c++)l.push(lv(o[c],a,t,s));return Promise.all(l).then(function(){const c=u=>{const f=new Map;for(const[h,p]of s.associations)(h instanceof hi||h instanceof Jt)&&f.set(h,p);return u.traverse(h=>{const p=s.associations.get(h);p!=null&&f.set(h,p)}),f};return s.associations=c(a),a})}}function lv(i,e,t,n){const r=t.nodes[i];return n.getDependency("node",i).then(function(s){if(r.skin===void 0)return s;let a;return n.getDependency("skin",r.skin).then(function(o){a=o;const l=[];for(let c=0,u=a.joints.length;c<u;c++)l.push(n.getDependency("node",a.joints[c]));return Promise.all(l)}).then(function(o){return s.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let f=0,h=o.length;f<h;f++){const p=o[f];if(p){c.push(p);const g=new Je;a.inverseBindMatrices!==void 0&&g.fromArray(a.inverseBindMatrices.array,f*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',a.joints[f])}l.bind(new Sh(c,u),l.matrixWorld)}),s})}).then(function(s){e.add(s);const a=[];if(r.children){const o=r.children;for(let l=0,c=o.length;l<c;l++){const u=o[l];a.push(lv(u,s,t,n))}}return Promise.all(a)})}function FA(i,e,t){const n=e.attributes,r=new gs;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),o.normalized){const u=Lf(Po[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new N,l=new N;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const m=Lf(Po[h.componentType]);l.multiplyScalar(m)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;const a=new Aa;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function Vm(i,e,t){const n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=Rf[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return Br(i,e),FA(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?IA(i,e.targets,t):i})}function Hm(i,e){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===N_)for(let a=1;a<=n;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s}class zA{constructor(e){et(this,"name");et(this,"group");et(this,"simpleGroup");et(this,"selectedGroup");et(this,"highlightedGroup");et(this,"complexGroup");et(this,"complexGroupElementsDict");et(this,"simpleGroupMaterials");this.name=e,this.group=new Pn,this.group.name=e,this.simpleGroup=new Pn,this.simpleGroup.name="Simple",this.group.add(this.simpleGroup),this.selectedGroup=new Pn,this.selectedGroup.name="Selected",this.group.add(this.selectedGroup),this.highlightedGroup=new Pn,this.highlightedGroup.name="Highlighted",this.group.add(this.highlightedGroup),this.complexGroup=new Pn,this.complexGroup.name="Complex",this.complexGroupElementsDict=new Map,this.simpleGroupMaterials=new Map}}class UA{constructor(e){et(this,"model");this.model=new zA(e)}Load(){return new Promise(e=>{var t=[];const n=new a0;n.onProgress=function(l,c,u){},n.onError=l=>{},n.onLoad=()=>{e(this.model)};const r=new lA(n);var s=new Map,a=new Map,o=0;r.load(this.model.name,l=>{var c=l.scene.children[0].clone();this.model.complexGroup.children=c.children,this.model.complexGroup.traverse(u=>{if(u!=null){if(u.type=="Mesh"){const f=u;this.model.complexGroupElementsDict.set(f.name,f)}if(u.type=="Group"){const f=u,h=[];for(const g of f.children)if(g.type=="Mesh"){const m=g;h.push(m.geometry)}const p=o0(h,!0);if(p!=null){let g=new _n(p);this.model.complexGroupElementsDict.set(f.name,g)}}}});{l.scene.traverse(function(g){if(g!=null&&g.type=="Mesh"){var m=g,d=m.material,_;if(Array.isArray(d)){var v=d;_=v[0]}else _=d;var b=_.uuid;s.has(b)||(s.set(b,_),a.set(b,o),o++),t.push(m)}});let u=$E(t,!0,a),f=qE(u),h=[...s.values()],p=new _n(f,h);p.name="mergedMeshForSimpleGroup",this.model.simpleGroupMaterials.set(p.name,h),this.model.simpleGroup.add(p)}},void 0,l=>{console.error(l)})})}}const Er=dh("navigation",()=>{var i=vt(!1),e=vt(!1),t=vt(!0),n=vt(!1),r=vt(!1),s=vt(!0);let a=new Map([["Info",i],["Elements",e],["3DView",t]]);function o(p){var m;var g=(m=a.get(p))==null?void 0:m.value;g!=null&&(a.get(p).value=!0)}function l(p){var m;var g=(m=a.get(p))==null?void 0:m.value;g!=null&&(g?a.get(p).value=!1:a.get(p).value=!0)}function c(){a.forEach((p,g)=>{p.value=!1})}function u(){e.value?l("Info"):(o("Elements"),o("Info"))}function f(){l("Elements")}function h(){o("Elements")}return{sidePanelsStatus:a,showPanel:o,hideAllPanels:c,closeCommand:h,togglePanel:l,toggleElementInfo:u,toggleElementsList:f,isInfoVisible:i,isElementsVisible:e,is3DViewVisible:t,isViewSettingsVisible:n,isModelLoaded:r,isAboutVisible:s}}),BA=Ut({name:"Spinner"});const un=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},Tc=i=>(dc("data-v-72ae6153"),i=i(),pc(),i),GA={class:"lds-ellipsis"},VA=Tc(()=>Ce("div",null,null,-1)),HA=Tc(()=>Ce("div",null,null,-1)),WA=Tc(()=>Ce("div",null,null,-1)),jA=Tc(()=>Ce("div",null,null,-1)),$A=[VA,HA,WA,jA];function qA(i,e,t,n,r,s){return ze(),st("div",GA,$A)}const XA=un(BA,[["render",qA],["__scopeId","data-v-72ae6153"]]),YA=Ut({name:"ThreeCanvas",setup(){const i=_i(),e=Er(),t=wc();let{selectedElements:n}=Vd(i),{hideNonSelected:r,transparentNonSelected:s}=Vd(t);return{dataStore:i,viewerStore:t,selectedElements:n,navigationStore:e,hideNonSelected:r,transparentNonSelected:s}},props:{isNeedResize:Number},data(){return{canvas:"canvas",sceneInit:{}}},mounted(){const i=document.getElementById(this.canvas);i!=null&&(this.sceneInit=new oA(i).initialize(),new UA("B3.gltf").Load().then(e=>{this.sceneInit.addModel(e),this.sceneInit.setActiveModel(e),this.navigationStore.isModelLoaded=!0,this.sceneInit.focusCameraOnObject(e.simpleGroup,.4),this.sceneInit.onWindowResize()})),this.sceneInit.animate()},methods:{settingsToggle(){this.navigationStore.isViewSettingsVisible?this.navigationStore.isViewSettingsVisible=!1:this.navigationStore.isViewSettingsVisible=!0},focusOnElement(){this.sceneInit.focusOnSelcted()},showElementInfo(){this.navigationStore.toggleElementInfo()},showElementsList(){this.navigationStore.toggleElementsList()}},computed:{},watch:{isNeedResize:function(){this.sceneInit.onWindowResize()},selectedElements:function(){this.selectedElements.length>0?this.sceneInit.selectElementsByIds(this.selectedElements):(this.sceneInit.deactivateHideUnselectedMode(),this.sceneInit.deactivateTransparentMode())},hideNonSelected:function(){this.hideNonSelected&&this.selectedElements.length>0&&!this.viewerStore.hideNonSelectedMode?this.sceneInit.activateHideUnselectedMode():this.viewerStore.hideNonSelectedMode&&this.sceneInit.deactivateHideUnselectedMode()},transparentNonSelected:function(){this.transparentNonSelected&&this.selectedElements.length>0&&!this.viewerStore.transparentMode?this.sceneInit.activateTransparentMode():this.viewerStore.transparentMode&&this.sceneInit.deactivateTransparentMode()}},components:{Spinner:XA}});const Ec=i=>(dc("data-v-80396724"),i=i(),pc(),i),KA={class:"viewer"},ZA=["id"],JA={class:"viewer-gui"},QA={class:"tooltip"},eC=Ec(()=>Ce("span",{class:"tooltiptext noselect"},"Settings",-1)),tC={class:"tooltip"},nC=Ec(()=>Ce("span",{class:"tooltiptext noselect"},"Focus on selected",-1)),iC={class:"tooltip"},rC=Ec(()=>Ce("span",{class:"tooltiptext noselect"},"Element info",-1)),sC={class:"tooltip"},aC=Ec(()=>Ce("span",{class:"tooltiptext noselect"},"Elements list",-1)),oC={key:0,class:"spinner"};function lC(i,e,t,n,r,s){const a=xt("font-awesome-icon"),o=xt("Spinner");return ze(),st("div",KA,[Ce("div",{id:i.canvas,class:"viewer-canvas"},null,8,ZA),Ce("div",JA,[Ce("div",QA,[i.navigationStore.isViewSettingsVisible?(ze(),Cn(a,{key:1,icon:"fa-xmark",class:"viewer-btn",onClick:oi(i.settingsToggle,["left"])},null,8,["onClick"])):(ze(),Cn(a,{key:0,icon:"fa-gear",class:"viewer-btn",onClick:oi(i.settingsToggle,["left"])},null,8,["onClick"])),eC]),Ce("div",tC,[ke(a,{icon:"fa-solid fa-arrows-to-dot",class:"viewer-btn",onClick:oi(i.focusOnElement,["left"])},null,8,["onClick"]),nC]),Ce("div",iC,[ke(a,{icon:"fa-solid fa-circle-info",class:"viewer-btn",onClick:oi(i.showElementInfo,["left"])},null,8,["onClick"]),rC]),Ce("div",sC,[ke(a,{icon:"fa-solid fa-square-poll-horizontal",class:"viewer-btn",onClick:oi(i.showElementsList,["left"])},null,8,["onClick"]),aC])]),i.navigationStore.isModelLoaded?ai("",!0):(ze(),st("div",oC,[ke(o)]))])}const cC=un(YA,[["render",lC],["__scopeId","data-v-80396724"]]);var uC=function(){function i(){}return i.decycle=function(t){var n=[],r=i.getDecycledCopy(t,n);return r},i.getDecycledCopy=function(t,n){var r,s,a;switch(typeof t){case"object":{if(t===null||t instanceof Boolean||t instanceof Date||t instanceof Number||t instanceof RegExp||t instanceof String)return t;for(r=0;r<n.length;r+=1)if(n[r]===t)return{$ref:r.toString()};if(t.$id=n.length.toString(),n.push(t),Object.prototype.toString.apply(t)==="[object Array]")for(a=[],r=0;r<t.length;r+=1)a[r]=i.getDecycledCopy(t[r],n);else{a={};for(s in t)Object.prototype.hasOwnProperty.call(t,s)&&(a[s]=i.getDecycledCopy(t[s],n))}return a}case"number":case"string":case"boolean":return t}},i.retrocycle=function(t){var n=[];i.findReferences(t,n),i.resolveReferences(t,n)},i.findReferences=function(t,n){var r;if(t&&typeof t=="object"){var s=t.$id;if(typeof s=="string"&&(n[s]=t),Object.prototype.toString.apply(t)==="[object Array]")for(r=0;r<t.length;r+=1)i.findReferences(t[r],n);else for(var a in t)typeof t[a]=="object"&&i.findReferences(t[a],n)}},i.resolveReferences=function(t,n){var r,s,a,o;if(t&&typeof t=="object")if(Object.prototype.toString.apply(t)==="[object Array]")for(r=0;r<t.length;r+=1)s=t[r],s&&typeof s=="object"&&(o=s.$ref,typeof o=="string"?t[r]=n[o]:i.resolveReferences(s,n));else for(a in t)typeof t[a]=="object"&&(s=t[a],s&&(o=s.$ref,typeof o=="string"?t[a]=n[o]:i.resolveReferences(s,n)))},i}();const fC=Ut({setup(){return{store:Er()}},props:{showInfoBtn:Boolean,element:Object,propsId:String},mounted(){},methods:{showInfo(){this.store.showPanel("Info"),this.$emit("info")},select(){this.$emit("selectButton")},selectAndShowInfo(){this.showInfo(),this.select()}}});const hC={class:"merged-btn"},dC=["id"];function pC(i,e,t,n,r,s){const a=xt("font-awesome-icon");return ze(),st("div",hC,[Ce("button",{class:"tree__button",onClick:e[0]||(e[0]=oi(o=>i.$emit("expandButton"),["left"])),onDblclick:e[1]||(e[1]=(...o)=>i.selectAndShowInfo&&i.selectAndShowInfo(...o)),id:i.propsId},[gc(i.$slots,"default",{},void 0,!0)],40,dC),ke(a,{icon:"fa-solid fa-info",class:"tree__button select__button",onClick:oi(i.selectAndShowInfo,["left"])},null,8,["onClick"]),i.showInfoBtn?(ze(),st("button",{key:0,class:"tree__button select__button",onClick:e[2]||(e[2]=oi((...o)=>i.showInfo&&i.showInfo(...o),["left"]))},"info")):ai("",!0)])}const Ac=un(fC,[["render",pC],["__scopeId","data-v-d14f8921"]]),mC=Ut({name:"Element",setup(){return{dataStore:_i()}},data(){return{}},props:{element:{}},methods:{select(){this.dataStore.selectedElements=[this.element.Id.toString()],this.info()},info(){var i,e;this.dataStore.infoElementId=(e=(i=this.element)==null?void 0:i.Id)==null?void 0:e.toString()}},components:{TreeButton:Ac}});function gC(i,e,t,n,r,s){var o,l;const a=xt("TreeButton");return ze(),Cn(a,{"show-info-btn":!1,onSelectButton:i.select,onInfo:i.info,propsId:(l=(o=i.element)==null?void 0:o.Id)==null?void 0:l.toString()},{default:Ot(()=>[wr(Rn(i.element.Name)+" ("+Rn(i.element.Id)+") ",1)]),_:1},8,["onSelectButton","onInfo","propsId"])}const _C=un(mC,[["render",gC]]),vC=Ut({props:{type:{}},setup(){return{dataStore:_i()}},components:{Element:_C,TreeButton:Ac},methods:{expand(){this.type.IsExpanded?this.type.IsExpanded=!1:this.type.IsExpanded=!0},select(){this.dataStore.selectedElements=this.type.Elements.map(function(i){return i.Id.toString()})},info(){this.dataStore.infoElementId=""}}}),xC={class:"type"};function yC(i,e,t,n,r,s){const a=xt("TreeButton"),o=xt("Element");return ze(),st("div",xC,[ke(a,{onExpandButton:i.expand,onSelectButton:i.select,onInfo:i.info},{default:Ot(()=>[wr(Rn(i.type.IsExpanded?"-":"+")+" "+Rn(i.type.Name),1)]),_:1},8,["onExpandButton","onSelectButton","onInfo"]),i.type.IsExpanded?(ze(!0),st(Nt,{key:0},aa(i.type.Elements,l=>(ze(),st("ul",{key:l.Guid,class:"tree__ul"},[ke(o,{element:l},null,8,["element"])]))),128)):ai("",!0)])}const bC=un(vC,[["render",yC]]),MC=Ut({props:{family:{}},setup(){return{dataStore:_i()}},components:{Types:bC,TreeButton:Ac},methods:{expand(){this.family.IsExpanded?this.family.IsExpanded=!1:this.family.IsExpanded=!0},select(){var e;var i=[];for(const t of this.family.Types)for(const n of t.Elements)i.push((e=n.Id)==null?void 0:e.toString());this.dataStore.selectedElements=i},info(){this.dataStore.infoElementId=""}}}),SC={class:"family"};function wC(i,e,t,n,r,s){const a=xt("TreeButton"),o=xt("Types");return ze(),st("div",SC,[ke(a,{onExpandButton:i.expand,onSelectButton:i.select,onInfo:i.info},{default:Ot(()=>[wr(Rn(i.family.IsExpanded?"-":"+")+" "+Rn(i.family.Name),1)]),_:1},8,["onExpandButton","onSelectButton","onInfo"]),i.family.IsExpanded?(ze(!0),st(Nt,{key:0},aa(i.family.Types,l=>(ze(),st("ul",{key:l.Id,class:"tree__ul"},[ke(o,{type:l},null,8,["type"])]))),128)):ai("",!0)])}const TC=un(MC,[["render",wC]]),EC=Ut({setup(){const i=Er(),e=_i();return{navigationstore:i,dataStore:e}},props:{category:{}},components:{Family:TC,TreeButton:Ac},methods:{expand(){this.category.IsExpanded?this.category.IsExpanded=!1:this.category.IsExpanded=!0},select(){var e;var i=[];for(const t of this.category.Families)for(const n of t.Types)for(const r of n.Elements)i.push((e=r.Id)==null?void 0:e.toString());this.dataStore.selectedElements=i},info(){this.dataStore.infoElementId=""}}});function AC(i,e,t,n,r,s){const a=xt("TreeButton"),o=xt("Family");return ze(),st("div",null,[ke(a,{onExpandButton:i.expand,onSelectButton:i.select,onInfo:i.info},{default:Ot(()=>[wr(Rn(i.category.IsExpanded?"-":"+")+" "+Rn(i.category.Name),1)]),_:1},8,["onExpandButton","onSelectButton","onInfo"]),i.category.IsExpanded?(ze(!0),st(Nt,{key:0},aa(i.category.Families,l=>(ze(),st("ul",{key:l.Id,class:"tree__ul"},[ke(o,{family:l},null,8,["family"])]))),128)):ai("",!0)])}const CC=un(EC,[["render",AC],["__scopeId","data-v-b6dc5b48"]]),PC=Ut({name:"ListElements",setup(){return{dataStore:_i()}},data(){return{categories:[]}},mounted(){fetch("B3-data.json").then(i=>i.json()).then(i=>{var t;uC.retrocycle(i),this.categories=i.Categories;const e=new Map;for(const n of i.Elements){const r=(t=n==null?void 0:n.Id)==null?void 0:t.toString();r!=null&&e.set(r,n)}this.dataStore.elementsDataDict=e})},components:{Category:CC}});const RC=i=>(dc("data-v-79f54b02"),i=i(),pc(),i),LC=RC(()=>Ce("h4",{class:"title"},"List of elements",-1)),IC={class:"tree"};function DC(i,e,t,n,r,s){const a=xt("Category");return ze(),st("div",null,[LC,Ce("div",IC,[(ze(!0),st(Nt,null,aa(i.categories,o=>(ze(),st("ul",{key:o.Id,ref_for:!0,ref:"category.Id",class:"tree__ul main__tree__ul"},[ke(a,{category:o},null,8,["category"])]))),128))])])}const Wm=un(PC,[["render",DC],["__scopeId","data-v-79f54b02"]]),OC=Ut({setup(){return{dataStore:_i()}},mounted(){},props:{idOfSelectedElement:{type:String,required:!0}},methods:{},computed:{guid:function(){return new Date().getTime()+Math.floor(Math.random()*1e4).toString()}}});const cv=i=>(dc("data-v-546bc308"),i=i(),pc(),i),NC={class:"info"},kC=cv(()=>Ce("h4",{class:"title"},"Element info",-1)),FC={class:"table"},zC=cv(()=>Ce("thead",null,[Ce("tr",null,[Ce("th",null,"Parameter"),Ce("th",null,"Value")])],-1));function UC(i,e,t,n,r,s){var a,o,l;return ze(),st("div",NC,[kC,Ce("div",FC,[Ce("table",null,[zC,Ce("tbody",null,[(ze(!0),st(Nt,null,aa((a=i.dataStore.getElementById)==null?void 0:a.Parameters,(c,u)=>(ze(),st("tr",{key:i.guid},[Ce("td",null,Rn(u),1),Ce("td",null,Rn(c),1)]))),128)),(ze(!0),st(Nt,null,aa((l=(o=i.dataStore.getElementById)==null?void 0:o.Type)==null?void 0:l.Parameters,(c,u)=>(ze(),st("tr",{key:i.guid},[Ce("td",null,Rn(u),1),Ce("td",null,Rn(c),1)]))),128))])])])])}const BC=un(OC,[["render",UC],["__scopeId","data-v-546bc308"]]),GC=Ut({setup(){return{store:Er()}},methods:{hideSideBar(){this.store.closeCommand()}}});const VC={class:"sidebar"};function HC(i,e,t,n,r,s){return ze(),st("div",VC,[Ce("button",{class:"close__btn",onClick:e[0]||(e[0]=(...a)=>i.hideSideBar&&i.hideSideBar(...a))},"Close"),gc(i.$slots,"default",{},void 0,!0)])}const WC=un(GC,[["render",HC],["__scopeId","data-v-23d93dd2"]]);var jC=Object.defineProperty,$C=Object.defineProperties,qC=Object.getOwnPropertyDescriptors,Yl=Object.getOwnPropertySymbols,uv=Object.prototype.hasOwnProperty,fv=Object.prototype.propertyIsEnumerable,jm=(i,e,t)=>e in i?jC(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,XC=(i,e)=>{for(var t in e||(e={}))uv.call(e,t)&&jm(i,t,e[t]);if(Yl)for(var t of Yl(e))fv.call(e,t)&&jm(i,t,e[t]);return i},YC=(i,e)=>$C(i,qC(e)),KC=(i,e)=>{var t={};for(var n in i)uv.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&Yl)for(var n of Yl(i))e.indexOf(n)<0&&fv.call(i,n)&&(t[n]=i[n]);return t};const ZC={name:"splitpanes",emits:["ready","resize","resized","pane-click","pane-maximize","pane-add","pane-remove","splitter-click"],props:{horizontal:{type:Boolean},pushOtherPanes:{type:Boolean,default:!0},dblClickSplitter:{type:Boolean,default:!0},rtl:{type:Boolean,default:!1},firstSplitter:{type:Boolean}},provide(){return{requestUpdate:this.requestUpdate,onPaneAdd:this.onPaneAdd,onPaneRemove:this.onPaneRemove,onPaneClick:this.onPaneClick}},data:()=>({container:null,ready:!1,panes:[],touch:{mouseDown:!1,dragging:!1,activeSplitter:null},splitterTaps:{splitter:null,timeoutId:null}}),computed:{panesCount(){return this.panes.length},indexedPanes(){return this.panes.reduce((i,e)=>(i[e.id]=e)&&i,{})}},methods:{updatePaneComponents(){this.panes.forEach(i=>{i.update&&i.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[i.id].size}%`})})},bindEvents(){document.addEventListener("mousemove",this.onMouseMove,{passive:!1}),document.addEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.addEventListener("touchmove",this.onMouseMove,{passive:!1}),document.addEventListener("touchend",this.onMouseUp))},unbindEvents(){document.removeEventListener("mousemove",this.onMouseMove,{passive:!1}),document.removeEventListener("mouseup",this.onMouseUp),"ontouchstart"in window&&(document.removeEventListener("touchmove",this.onMouseMove,{passive:!1}),document.removeEventListener("touchend",this.onMouseUp))},onMouseDown(i,e){this.bindEvents(),this.touch.mouseDown=!0,this.touch.activeSplitter=e},onMouseMove(i){this.touch.mouseDown&&(i.preventDefault(),this.touch.dragging=!0,this.calculatePanesSize(this.getCurrentMouseDrag(i)),this.$emit("resize",this.panes.map(e=>({min:e.min,max:e.max,size:e.size}))))},onMouseUp(){this.touch.dragging&&this.$emit("resized",this.panes.map(i=>({min:i.min,max:i.max,size:i.size}))),this.touch.mouseDown=!1,setTimeout(()=>{this.touch.dragging=!1,this.unbindEvents()},100)},onSplitterClick(i,e){"ontouchstart"in window&&(i.preventDefault(),this.dblClickSplitter&&(this.splitterTaps.splitter===e?(clearTimeout(this.splitterTaps.timeoutId),this.splitterTaps.timeoutId=null,this.onSplitterDblClick(i,e),this.splitterTaps.splitter=null):(this.splitterTaps.splitter=e,this.splitterTaps.timeoutId=setTimeout(()=>{this.splitterTaps.splitter=null},500)))),this.touch.dragging||this.$emit("splitter-click",this.panes[e])},onSplitterDblClick(i,e){let t=0;this.panes=this.panes.map((n,r)=>(n.size=r===e?n.max:n.min,r!==e&&(t+=n.min),n)),this.panes[e].size-=t,this.$emit("pane-maximize",this.panes[e])},onPaneClick(i,e){this.$emit("pane-click",this.indexedPanes[e])},getCurrentMouseDrag(i){const e=this.container.getBoundingClientRect(),{clientX:t,clientY:n}="ontouchstart"in window&&i.touches?i.touches[0]:i;return{x:t-e.left,y:n-e.top}},getCurrentDragPercentage(i){i=i[this.horizontal?"y":"x"];const e=this.container[this.horizontal?"clientHeight":"clientWidth"];return this.rtl&&!this.horizontal&&(i=e-i),i*100/e},calculatePanesSize(i){const e=this.touch.activeSplitter;let t={prevPanesSize:this.sumPrevPanesSize(e),nextPanesSize:this.sumNextPanesSize(e),prevReachedMinPanes:0,nextReachedMinPanes:0};const n=0+(this.pushOtherPanes?0:t.prevPanesSize),r=100-(this.pushOtherPanes?0:t.nextPanesSize),s=Math.max(Math.min(this.getCurrentDragPercentage(i),r),n);let a=[e,e+1],o=this.panes[a[0]]||null,l=this.panes[a[1]]||null;const c=o.max<100&&s>=o.max+t.prevPanesSize,u=l.max<100&&s<=100-(l.max+this.sumNextPanesSize(e+1));if(c||u){c?(o.size=o.max,l.size=Math.max(100-o.max-t.prevPanesSize-t.nextPanesSize,0)):(o.size=Math.max(100-l.max-t.prevPanesSize-this.sumNextPanesSize(e+1),0),l.size=l.max);return}if(this.pushOtherPanes){const f=this.doPushOtherPanes(t,s);if(!f)return;({sums:t,panesToResize:a}=f),o=this.panes[a[0]]||null,l=this.panes[a[1]]||null}o!==null&&(o.size=Math.min(Math.max(s-t.prevPanesSize-t.prevReachedMinPanes,o.min),o.max)),l!==null&&(l.size=Math.min(Math.max(100-s-t.nextPanesSize-t.nextReachedMinPanes,l.min),l.max))},doPushOtherPanes(i,e){const t=this.touch.activeSplitter,n=[t,t+1];return e<i.prevPanesSize+this.panes[n[0]].min&&(n[0]=this.findPrevExpandedPane(t).index,i.prevReachedMinPanes=0,n[0]<t&&this.panes.forEach((r,s)=>{s>n[0]&&s<=t&&(r.size=r.min,i.prevReachedMinPanes+=r.min)}),i.prevPanesSize=this.sumPrevPanesSize(n[0]),n[0]===void 0)?(i.prevReachedMinPanes=0,this.panes[0].size=this.panes[0].min,this.panes.forEach((r,s)=>{s>0&&s<=t&&(r.size=r.min,i.prevReachedMinPanes+=r.min)}),this.panes[n[1]].size=100-i.prevReachedMinPanes-this.panes[0].min-i.prevPanesSize-i.nextPanesSize,null):e>100-i.nextPanesSize-this.panes[n[1]].min&&(n[1]=this.findNextExpandedPane(t).index,i.nextReachedMinPanes=0,n[1]>t+1&&this.panes.forEach((r,s)=>{s>t&&s<n[1]&&(r.size=r.min,i.nextReachedMinPanes+=r.min)}),i.nextPanesSize=this.sumNextPanesSize(n[1]-1),n[1]===void 0)?(i.nextReachedMinPanes=0,this.panes[this.panesCount-1].size=this.panes[this.panesCount-1].min,this.panes.forEach((r,s)=>{s<this.panesCount-1&&s>=t+1&&(r.size=r.min,i.nextReachedMinPanes+=r.min)}),this.panes[n[0]].size=100-i.prevPanesSize-i.nextReachedMinPanes-this.panes[this.panesCount-1].min-i.nextPanesSize,null):{sums:i,panesToResize:n}},sumPrevPanesSize(i){return this.panes.reduce((e,t,n)=>e+(n<i?t.size:0),0)},sumNextPanesSize(i){return this.panes.reduce((e,t,n)=>e+(n>i+1?t.size:0),0)},findPrevExpandedPane(i){return[...this.panes].reverse().find(t=>t.index<i&&t.size>t.min)||{}},findNextExpandedPane(i){return this.panes.find(t=>t.index>i+1&&t.size>t.min)||{}},checkSplitpanesNodes(){Array.from(this.container.children).forEach(e=>{const t=e.classList.contains("splitpanes__pane"),n=e.classList.contains("splitpanes__splitter");if(!t&&!n){e.parentNode.removeChild(e),console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed.");return}})},addSplitter(i,e,t=!1){const n=i-1,r=document.createElement("div");r.classList.add("splitpanes__splitter"),t||(r.onmousedown=s=>this.onMouseDown(s,n),typeof window<"u"&&"ontouchstart"in window&&(r.ontouchstart=s=>this.onMouseDown(s,n)),r.onclick=s=>this.onSplitterClick(s,n+1)),this.dblClickSplitter&&(r.ondblclick=s=>this.onSplitterDblClick(s,n+1)),e.parentNode.insertBefore(r,e)},removeSplitter(i){i.onmousedown=void 0,i.onclick=void 0,i.ondblclick=void 0,i.parentNode.removeChild(i)},redoSplitters(){const i=Array.from(this.container.children);i.forEach(t=>{t.className.includes("splitpanes__splitter")&&this.removeSplitter(t)});let e=0;i.forEach(t=>{t.className.includes("splitpanes__pane")&&(!e&&this.firstSplitter?this.addSplitter(e,t,!0):e&&this.addSplitter(e,t),e++)})},requestUpdate(i){var e=i,{target:t}=e,n=KC(e,["target"]);const r=this.indexedPanes[t._.uid];Object.entries(n).forEach(([s,a])=>r[s]=a)},onPaneAdd(i){let e=-1;Array.from(i.$el.parentNode.children).some(r=>(r.className.includes("splitpanes__pane")&&e++,r===i.$el));const t=parseFloat(i.minSize),n=parseFloat(i.maxSize);this.panes.splice(e,0,{id:i._.uid,index:e,min:isNaN(t)?0:t,max:isNaN(n)?100:n,size:i.size===null?null:parseFloat(i.size),givenSize:i.size,update:i.update}),this.panes.forEach((r,s)=>r.index=s),this.ready&&this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({addedPane:this.panes[e]}),this.$emit("pane-add",{index:e,panes:this.panes.map(r=>({min:r.min,max:r.max,size:r.size}))})})},onPaneRemove(i){const e=this.panes.findIndex(n=>n.id===i._.uid),t=this.panes.splice(e,1)[0];this.panes.forEach((n,r)=>n.index=r),this.$nextTick(()=>{this.redoSplitters(),this.resetPaneSizes({removedPane:YC(XC({},t),{index:e})}),this.$emit("pane-remove",{removed:t,panes:this.panes.map(n=>({min:n.min,max:n.max,size:n.size}))})})},resetPaneSizes(i={}){!i.addedPane&&!i.removedPane?this.initialPanesSizing():this.panes.some(e=>e.givenSize!==null||e.min||e.max<100)?this.equalizeAfterAddOrRemove(i):this.equalize(),this.ready&&this.$emit("resized",this.panes.map(e=>({min:e.min,max:e.max,size:e.size})))},equalize(){const i=100/this.panesCount;let e=0,t=[],n=[];this.panes.forEach(r=>{r.size=Math.max(Math.min(i,r.max),r.min),e-=r.size,r.size>=r.max&&t.push(r.id),r.size<=r.min&&n.push(r.id)}),e>.1&&this.readjustSizes(e,t,n)},initialPanesSizing(){100/this.panesCount;let i=100,e=[],t=[],n=0;this.panes.forEach(s=>{i-=s.size,s.size!==null&&n++,s.size>=s.max&&e.push(s.id),s.size<=s.min&&t.push(s.id)});let r=100;i>.1&&(this.panes.forEach(s=>{s.size===null&&(s.size=Math.max(Math.min(i/(this.panesCount-n),s.max),s.min)),r-=s.size}),r>.1&&this.readjustSizes(i,e,t))},equalizeAfterAddOrRemove({addedPane:i,removedPane:e}={}){let t=100/this.panesCount,n=0,r=[],s=[];i&&i.givenSize!==null&&(t=(100-i.givenSize)/(this.panesCount-1)),this.panes.forEach(a=>{n-=a.size,a.size>=a.max&&r.push(a.id),a.size<=a.min&&s.push(a.id)}),!(Math.abs(n)<.1)&&(this.panes.forEach(a=>{i&&i.givenSize!==null&&i.id===a.id||(a.size=Math.max(Math.min(t,a.max),a.min)),n-=a.size,a.size>=a.max&&r.push(a.id),a.size<=a.min&&s.push(a.id)}),n>.1&&this.readjustSizes(n,r,s))},readjustSizes(i,e,t){let n;i>0?n=i/(this.panesCount-e.length):n=i/(this.panesCount-t.length),this.panes.forEach((r,s)=>{if(i>0&&!e.includes(r.id)){const a=Math.max(Math.min(r.size+n,r.max),r.min);i-=a-r.size,r.size=a}else if(!t.includes(r.id)){const a=Math.max(Math.min(r.size+n,r.max),r.min);i-=a-r.size,r.size=a}r.update({[this.horizontal?"height":"width"]:`${this.indexedPanes[r.id].size}%`})}),Math.abs(i)>.1&&this.$nextTick(()=>{this.ready&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints.")})}},watch:{panes:{deep:!0,immediate:!1,handler(){this.updatePaneComponents()}},horizontal(){this.updatePaneComponents()},firstSplitter(){this.redoSplitters()},dblClickSplitter(i){[...this.container.querySelectorAll(".splitpanes__splitter")].forEach((t,n)=>{t.ondblclick=i?r=>this.onSplitterDblClick(r,n):void 0})}},beforeUnmount(){this.ready=!1},mounted(){this.container=this.$refs.container,this.checkSplitpanesNodes(),this.redoSplitters(),this.resetPaneSizes(),this.$emit("ready"),this.ready=!0},render(){return uh("div",{ref:"container",class:["splitpanes",`splitpanes--${this.horizontal?"horizontal":"vertical"}`,{"splitpanes--dragging":this.touch.dragging}]},this.$slots.default())}};var JC=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t};const QC={name:"pane",inject:["requestUpdate","onPaneAdd","onPaneRemove","onPaneClick"],props:{size:{type:[Number,String],default:null},minSize:{type:[Number,String],default:0},maxSize:{type:[Number,String],default:100}},data:()=>({style:{}}),mounted(){this.onPaneAdd(this)},beforeUnmount(){this.onPaneRemove(this)},methods:{update(i){this.style=i}},computed:{sizeNumber(){return this.size||this.size===0?parseFloat(this.size):null},minSizeNumber(){return parseFloat(this.minSize)},maxSizeNumber(){return parseFloat(this.maxSize)}},watch:{sizeNumber(i){this.requestUpdate({target:this,size:i})},minSizeNumber(i){this.requestUpdate({target:this,min:i})},maxSizeNumber(i){this.requestUpdate({target:this,max:i})}}};function eP(i,e,t,n,r,s){return ze(),st("div",{class:"splitpanes__pane",onClick:e[0]||(e[0]=a=>s.onPaneClick(a,i._.uid)),style:nc(i.style)},[gc(i.$slots,"default")],4)}var tP=JC(QC,[["render",eP]]);const nP=Ut({setup(){const i=Er(),e=wc();return{navigationStore:i,viewerStore:e}},props:{isChecked:{type:Boolean,required:!0}},methods:{switchCheck(){}}});const iP={for:"checkbox",class:"checkbox-lable noselect"};function rP(i,e,t,n,r,s){const a=xt("font-awesome-icon");return ze(),st("div",{class:"checkbox",onClick:e[0]||(e[0]=oi(o=>i.$emit("changed"),["left"]))},[i.isChecked?(ze(),Cn(a,{key:0,icon:"fa-regular fa-square-check",class:"checkbox-icon"})):(ze(),Cn(a,{key:1,icon:"fa-regular fa-square",class:"checkbox-icon"})),Ce("label",iP,[gc(i.$slots,"default",{},void 0,!0)])])}const sP=un(nP,[["render",rP],["__scopeId","data-v-fa1a6f95"]]),aP=Ut({setup(){const i=Er(),e=wc();return{navigationStore:i,viewerStore:e}},methods:{},components:{CheckBox:sP}});const oP={class:"viewer-settting"},lP=wr(" Hide non selected "),cP=wr(" Transparent non selected"),uP=wr(" Focus on selected");function fP(i,e,t,n,r,s){const a=xt("CheckBox");return ze(),st("div",oP,[ke(a,{isChecked:i.viewerStore.hideNonSelected,onChanged:e[0]||(e[0]=o=>i.viewerStore.hideNonSelected=!i.viewerStore.hideNonSelected)},{default:Ot(()=>[lP]),_:1},8,["isChecked"]),ke(a,{isChecked:i.viewerStore.transparentNonSelected,onChanged:e[1]||(e[1]=o=>i.viewerStore.transparentNonSelected=!i.viewerStore.transparentNonSelected)},{default:Ot(()=>[cP]),_:1},8,["isChecked"]),ke(a,{isChecked:i.viewerStore.focusOnSelected,onChanged:e[2]||(e[2]=o=>i.viewerStore.focusOnSelected=!i.viewerStore.focusOnSelected)},{default:Ot(()=>[uP]),_:1},8,["isChecked"])])}const hP=un(aP,[["render",fP],["__scopeId","data-v-79f2c89e"]]),dP=Ut({name:"About",components:{},setup(){const i=Er(),e=_i();return{navigationStore:i,dataStore:e}},methods:{closeAbout(){this.navigationStore.isAboutVisible=!1},openLinkedId(){window.open("https://www.linkedin.com/in/artmklgnv/")}}});const pP={class:"about"},mP={class:"about-grid"},gP=Fy('<div class="grid-title grid-block" data-v-fc6acc50><div class="title" data-v-fc6acc50><h1 class="title-h1" data-v-fc6acc50>BIM Web View</h1><p class="title-p" data-v-fc6acc50> Allows you to get a quick breakdown of any Revit model for further processing and visualisation (This demo contain only one model) </p></div></div><div class="grid-block1 grid-block" data-v-fc6acc50><div class="text-block" data-v-fc6acc50><h2 class="block-title" data-v-fc6acc50>Features:</h2><ul data-v-fc6acc50><li data-v-fc6acc50>3D preview of the model</li><li data-v-fc6acc50>information stored in the Revit model</li><li data-v-fc6acc50>a breakdown of elements by category</li><li data-v-fc6acc50>a detailed view of all available types/families in the model</li><li data-v-fc6acc50>a detailed elements properties info</li><li data-v-fc6acc50>complete information about nested families and elements hosts</li></ul></div></div><div class="grid-block2 grid-block" data-v-fc6acc50><div class="text-block" data-v-fc6acc50><h2 class="block-title" data-v-fc6acc50>Who is useful for:</h2><p class="block-p" data-v-fc6acc50> Developers, project managers, BIM specialists, and any other professional that needs to extract key insights of their Revit models in real time without using Autodesk Forge. </p></div></div><div class="grid-block3 grid-block" data-v-fc6acc50><div class="text-block2" data-v-fc6acc50><h2 class="block-title" data-v-fc6acc50>How it works:</h2><p class="block-p" data-v-fc6acc50> All Revit model data is exported using our plugin. Web View processes and visualizes this data. </p></div></div><div class="grid-block4 grid-block" data-v-fc6acc50><div class="text-block2" data-v-fc6acc50><h2 class="block-title" data-v-fc6acc50>What&#39;s Next:</h2><ul data-v-fc6acc50><li data-v-fc6acc50>Schedules (This is a tabular display of information, extracted from the properties of the elements in a project)</li><li data-v-fc6acc50>Project cost estimation</li></ul></div></div>',5),_P={class:"grid-block5 grid-block"},vP={class:"links"},xP={class:"grid-block6 grid-block"},yP={class:"btn-block"};function bP(i,e,t,n,r,s){const a=xt("font-awesome-icon");return ze(),st("div",pP,[Ce("div",{class:"about-background",onClick:e[0]||(e[0]=(...o)=>i.closeAbout&&i.closeAbout(...o))}),Ce("div",mP,[gP,Ce("div",_P,[Ce("div",vP,[ke(a,{icon:"fa-brands fa-linkedin",class:"links-icon",onClick:oi(i.openLinkedId,["left"])},null,8,["onClick"])])]),Ce("div",xP,[Ce("div",yP,[Ce("button",{class:"btn-start",onClick:e[1]||(e[1]=(...o)=>i.closeAbout&&i.closeAbout(...o))},"Get started")])])])])}const MP=un(dP,[["render",bP],["__scopeId","data-v-fc6acc50"]]),SP=Ut({name:"Main",components:{ThreeCanvas:cC,ListElements:Wm,ElementInfo:BC,SideBar:WC,Splitpanes:ZC,Pane:tP,ViewerSettings:hP,About:MP},setup(){const i=Er(),e=_i();return{navigationStore:i,dataStore:e}},data(){return{currentTab:Wm,isSplitPaneResized:0}},methods:{clickElementTab(){this.navigationStore.toggleElementsList()},clickInfoTab(){this.navigationStore.toggleElementInfo()},click3DViewTab(){this.navigationStore.togglePanel("3DView")},clickAboutProject(){this.navigationStore.isAboutVisible=!0},panelResize(){this.navigationStore.is3DViewVisible&&this.sleep(20).then(()=>{this.isSplitPaneResized++})},sleep(i){return new Promise(e=>setTimeout(e,i))}},computed:{}});const wP={class:"main"},TP={class:"menu"},EP={class:"tools"},AP={class:"canvas"};function CP(i,e,t,n,r,s){const a=xt("ListElements"),o=xt("pane"),l=xt("ElementInfo"),c=xt("splitpanes"),u=xt("ThreeCanvas"),f=xt("ViewerSettings"),h=xt("About");return ze(),st("div",wP,[Ce("div",TP,[Ce("button",{class:"menu-btn",onClick:e[0]||(e[0]=(...p)=>i.clickElementTab&&i.clickElementTab(...p))},"Elements list"),Ce("button",{class:"menu-btn",onClick:e[1]||(e[1]=(...p)=>i.clickInfoTab&&i.clickInfoTab(...p))},"Elements info"),Ce("button",{class:"menu-btn",onClick:e[2]||(e[2]=(...p)=>i.click3DViewTab&&i.click3DViewTab(...p))},"3D View"),Ce("button",{class:"menu-btn btn-right",onClick:e[3]||(e[3]=(...p)=>i.clickAboutProject&&i.clickAboutProject(...p))},"About project")]),Ce("div",EP,[ke(c,{class:"default-theme",onResize:i.panelResize,onResized:i.panelResize,onReady:i.panelResize},{default:Ot(()=>[i.navigationStore.isElementsVisible?(ze(),Cn(o,{key:0,size:"30"},{default:Ot(()=>[ke(c,{horizontal:""},{default:Ot(()=>[ke(o,{class:"scrollable"},{default:Ot(()=>[ke(a)]),_:1}),i.navigationStore.isInfoVisible?(ze(),Cn(o,{key:0,class:"scrollable"},{default:Ot(()=>[ke(l,{idOfSelectedElement:i.dataStore.infoElementId},null,8,["idOfSelectedElement"])]),_:1})):ai("",!0)]),_:1})]),_:1})):ai("",!0),i.navigationStore.is3DViewVisible?(ze(),Cn(o,{key:1},{default:Ot(()=>[ke(c,{horizontal:"",onResize:i.panelResize,onResized:i.panelResize,onReady:i.panelResize},{default:Ot(()=>[ke(o,null,{default:Ot(()=>[Ce("div",AP,[ke(u,{isNeedResize:i.isSplitPaneResized},null,8,["isNeedResize"])])]),_:1}),i.navigationStore.isViewSettingsVisible?(ze(),Cn(o,{key:0,size:"6"},{default:Ot(()=>[ke(f)]),_:1})):ai("",!0)]),_:1},8,["onResize","onResized","onReady"])]),_:1})):ai("",!0)]),_:1},8,["onResize","onResized","onReady"])]),i.navigationStore.isAboutVisible?(ze(),Cn(h,{key:0})):ai("",!0)])}const PP=un(SP,[["render",CP],["__scopeId","data-v-826f7398"]]);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var RP={prefix:"fas",iconName:"arrow-pointer",icon:[320,512,["mouse-pointer"],"f245","M23.19 32C28.86 32 34.34 34.08 38.59 37.86L312.6 281.4C317.3 285.6 320 291.6 320 297.9C320 310.1 310.1 320 297.9 320H179.8L236.6 433.7C244.5 449.5 238.1 468.7 222.3 476.6C206.5 484.5 187.3 478.1 179.4 462.3L121.2 346L38.58 440.5C34.4 445.3 28.36 448 22.01 448C9.855 448 0 438.1 0 425.1V55.18C0 42.38 10.38 32 23.18 32H23.19z"]},LP={prefix:"fas",iconName:"arrows-to-dot",icon:[512,512,[],"e4be","M288 82.74L297.4 73.37C309.9 60.88 330.1 60.88 342.6 73.37C355.1 85.87 355.1 106.1 342.6 118.6L278.6 182.6C266.1 195.1 245.9 195.1 233.4 182.6L169.4 118.6C156.9 106.1 156.9 85.87 169.4 73.37C181.9 60.88 202.1 60.88 214.6 73.37L223.1 82.75V32C223.1 14.33 238.3 0 255.1 0C273.7 0 288 14.33 288 32L288 82.74zM438.6 342.6C426.1 355.1 405.9 355.1 393.4 342.6L329.4 278.6C316.9 266.1 316.9 245.9 329.4 233.4L393.4 169.4C405.9 156.9 426.1 156.9 438.6 169.4C451.1 181.9 451.1 202.1 438.6 214.6L429.3 223.1H480C497.7 223.1 512 238.3 512 255.1C512 273.7 497.7 287.1 480 287.1H429.3L438.6 297.4C451.1 309.9 451.1 330.1 438.6 342.6V342.6zM288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM182.6 233.4C195.1 245.9 195.1 266.1 182.6 278.6L118.6 342.6C106.1 355.1 85.87 355.1 73.37 342.6C60.88 330.1 60.88 309.9 73.37 297.4L82.75 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H82.74L73.37 214.6C60.88 202.1 60.88 181.9 73.37 169.4C85.87 156.9 106.1 156.9 118.6 169.4L182.6 233.4zM169.4 438.6C156.9 426.1 156.9 405.9 169.4 393.4L233.4 329.4C245.9 316.9 266.1 316.9 278.6 329.4L342.6 393.4C355.1 405.9 355.1 426.1 342.6 438.6C330.1 451.1 309.9 451.1 297.4 438.6L288 429.3V480C288 497.7 273.7 512 256 512C238.3 512 224 497.7 224 480V429.3L214.6 438.6C202.1 451.1 181.9 451.1 169.4 438.6H169.4z"]},IP={prefix:"fas",iconName:"bullseye",icon:[512,512,[],"f140","M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM112 256C112 176.5 176.5 112 256 112C335.5 112 400 176.5 400 256C400 335.5 335.5 400 256 400C176.5 400 112 335.5 112 256zM256 336C300.2 336 336 300.2 336 256C336 211.8 300.2 176 256 176C211.8 176 176 211.8 176 256C176 300.2 211.8 336 256 336zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64C149.1 64 64 149.1 64 256C64 362 149.1 448 256 448C362 448 448 362 448 256C448 149.1 362 64 256 64z"]},DP={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"]},OP={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"]},NP={prefix:"fas",iconName:"info",icon:[192,512,[],"f129","M160 448h-32V224c0-17.69-14.33-32-32-32L32 192c-17.67 0-32 14.31-32 32s14.33 31.1 32 31.1h32v192H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32S177.7 448 160 448zM96 128c26.51 0 48-21.49 48-48S122.5 32.01 96 32.01s-48 21.49-48 48S69.49 128 96 128z"]},kP={prefix:"fas",iconName:"square-poll-horizontal",icon:[448,512,["poll-h"],"f682","M448 416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416zM256 160C256 142.3 241.7 128 224 128H128C110.3 128 96 142.3 96 160C96 177.7 110.3 192 128 192H224C241.7 192 256 177.7 256 160zM128 224C110.3 224 96 238.3 96 256C96 273.7 110.3 288 128 288H320C337.7 288 352 273.7 352 256C352 238.3 337.7 224 320 224H128zM192 352C192 334.3 177.7 320 160 320H128C110.3 320 96 334.3 96 352C96 369.7 110.3 384 128 384H160C177.7 384 192 369.7 192 352z"]},FP={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"]};/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var zP={prefix:"far",iconName:"square",icon:[448,512,[9723,9724,61590,9632],"f0c8","M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z"]},UP={prefix:"far",iconName:"square-check",icon:[448,512,[9989,61510,9745,"check-square"],"f14a","M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"]},BP=UP;/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var GP={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},VP={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},HP={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.3 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.6 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z"]};/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function $m(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function Me(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?$m(Object(t),!0).forEach(function(n){$P(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):$m(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function Kl(i){return Kl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Kl(i)}function WP(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function qm(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function jP(i,e,t){return e&&qm(i.prototype,e),t&&qm(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function $P(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function $h(i,e){return XP(i)||KP(i,e)||hv(i,e)||JP()}function Cc(i){return qP(i)||YP(i)||hv(i)||ZP()}function qP(i){if(Array.isArray(i))return If(i)}function XP(i){if(Array.isArray(i))return i}function YP(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function KP(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n=[],r=!0,s=!1,a,o;try{for(t=t.call(i);!(r=(a=t.next()).done)&&(n.push(a.value),!(e&&n.length===e));r=!0);}catch(l){s=!0,o=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw o}}return n}}function hv(i,e){if(!!i){if(typeof i=="string")return If(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return If(i,e)}}function If(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function ZP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xm=function(){},qh={},dv={},pv=null,mv={mark:Xm,measure:Xm};try{typeof window<"u"&&(qh=window),typeof document<"u"&&(dv=document),typeof MutationObserver<"u"&&(pv=MutationObserver),typeof performance<"u"&&(mv=performance)}catch{}var QP=qh.navigator||{},Ym=QP.userAgent,Km=Ym===void 0?"":Ym,Mr=qh,ct=dv,Zm=pv,pl=mv;Mr.document;var qi=!!ct.documentElement&&!!ct.head&&typeof ct.addEventListener=="function"&&typeof ct.createElement=="function",gv=~Km.indexOf("MSIE")||~Km.indexOf("Trident/"),Hi="___FONT_AWESOME___",Df=16,_v="fa",vv="svg-inline--fa",hs="data-fa-i2svg",Of="data-fa-pseudo-element",eR="data-fa-pseudo-element-pending",Xh="data-prefix",Yh="data-icon",Jm="fontawesome-i2svg",tR="async",nR=["HTML","HEAD","STYLE","SCRIPT"],xv=function(){try{return!0}catch{return!1}}(),Kh={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Zl={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},yv={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},iR={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},rR=/fa[srltdbk]?[\-\ ]/,bv="fa-layers-text",sR=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,aR={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Mv=[1,2,3,4,5,6,7,8,9,10],oR=Mv.concat([11,12,13,14,15,16,17,18,19,20]),lR=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},cR=[].concat(Cc(Object.keys(Zl)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Yr.GROUP,Yr.SWAP_OPACITY,Yr.PRIMARY,Yr.SECONDARY]).concat(Mv.map(function(i){return"".concat(i,"x")})).concat(oR.map(function(i){return"w-".concat(i)})),Sv=Mr.FontAwesomeConfig||{};function uR(i){var e=ct.querySelector("script["+i+"]");if(e)return e.getAttribute(i)}function fR(i){return i===""?!0:i==="false"?!1:i==="true"?!0:i}if(ct&&typeof ct.querySelector=="function"){var hR=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];hR.forEach(function(i){var e=$h(i,2),t=e[0],n=e[1],r=fR(uR(t));r!=null&&(Sv[n]=r)})}var dR={familyPrefix:_v,styleDefault:"solid",replacementClass:vv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},oo=Me(Me({},dR),Sv);oo.autoReplaceSvg||(oo.observeMutations=!1);var we={};Object.keys(oo).forEach(function(i){Object.defineProperty(we,i,{enumerable:!0,set:function(t){oo[i]=t,Al.forEach(function(n){return n(we)})},get:function(){return oo[i]}})});Mr.FontAwesomeConfig=we;var Al=[];function pR(i){return Al.push(i),function(){Al.splice(Al.indexOf(i),1)}}var ar=Df,ci={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mR(i){if(!(!i||!qi)){var e=ct.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=i;for(var t=ct.head.childNodes,n=null,r=t.length-1;r>-1;r--){var s=t[r],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(n=s)}return ct.head.insertBefore(e,n),i}}var gR="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ro(){for(var i=12,e="";i-- >0;)e+=gR[Math.random()*62|0];return e}function Ia(i){for(var e=[],t=(i||[]).length>>>0;t--;)e[t]=i[t];return e}function Zh(i){return i.classList?Ia(i.classList):(i.getAttribute("class")||"").split(" ").filter(function(e){return e})}function wv(i){return"".concat(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _R(i){return Object.keys(i||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(wv(i[t]),'" ')},"").trim()}function Pc(i){return Object.keys(i||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(i[t].trim(),";")},"")}function Jh(i){return i.size!==ci.size||i.x!==ci.x||i.y!==ci.y||i.rotate!==ci.rotate||i.flipX||i.flipY}function vR(i){var e=i.transform,t=i.containerWidth,n=i.iconWidth,r={transform:"translate(".concat(t/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:c}}function xR(i){var e=i.transform,t=i.width,n=t===void 0?Df:t,r=i.height,s=r===void 0?Df:r,a=i.startCentered,o=a===void 0?!1:a,l="";return o&&gv?l+="translate(".concat(e.x/ar-n/2,"em, ").concat(e.y/ar-s/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/ar,"em), calc(-50% + ").concat(e.y/ar,"em)) "):l+="translate(".concat(e.x/ar,"em, ").concat(e.y/ar,"em) "),l+="scale(".concat(e.size/ar*(e.flipX?-1:1),", ").concat(e.size/ar*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var yR=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Tv(){var i=_v,e=vv,t=we.familyPrefix,n=we.replacementClass,r=yR;if(t!==i||n!==e){var s=new RegExp("\\.".concat(i,"\\-"),"g"),a=new RegExp("\\--".concat(i,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(t,"-")).replace(a,"--".concat(t,"-")).replace(o,".".concat(n))}return r}var Qm=!1;function Du(){we.autoAddCss&&!Qm&&(mR(Tv()),Qm=!0)}var bR={mixout:function(){return{dom:{css:Tv,insertCss:Du}}},hooks:function(){return{beforeDOMElementCreation:function(){Du()},beforeI2svg:function(){Du()}}}},Wi=Mr||{};Wi[Hi]||(Wi[Hi]={});Wi[Hi].styles||(Wi[Hi].styles={});Wi[Hi].hooks||(Wi[Hi].hooks={});Wi[Hi].shims||(Wi[Hi].shims=[]);var Yn=Wi[Hi],Ev=[],MR=function i(){ct.removeEventListener("DOMContentLoaded",i),Jl=1,Ev.map(function(e){return e()})},Jl=!1;qi&&(Jl=(ct.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ct.readyState),Jl||ct.addEventListener("DOMContentLoaded",MR));function SR(i){!qi||(Jl?setTimeout(i,0):Ev.push(i))}function No(i){var e=i.tag,t=i.attributes,n=t===void 0?{}:t,r=i.children,s=r===void 0?[]:r;return typeof i=="string"?wv(i):"<".concat(e," ").concat(_R(n),">").concat(s.map(No).join(""),"</").concat(e,">")}function eg(i,e,t){if(i&&i[e]&&i[e][t])return{prefix:e,iconName:t,icon:i[e][t]}}var wR=function(e,t){return function(n,r,s,a){return e.call(t,n,r,s,a)}},Ou=function(e,t,n,r){var s=Object.keys(e),a=s.length,o=r!==void 0?wR(t,r):t,l,c,u;for(n===void 0?(l=1,u=e[s[0]]):(l=0,u=n);l<a;l++)c=s[l],u=o(u,e[c],c,e);return u};function TR(i){for(var e=[],t=0,n=i.length;t<n;){var r=i.charCodeAt(t++);if(r>=55296&&r<=56319&&t<n){var s=i.charCodeAt(t++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),t--)}else e.push(r)}return e}function Nf(i){var e=TR(i);return e.length===1?e[0].toString(16):null}function ER(i,e){var t=i.length,n=i.charCodeAt(e),r;return n>=55296&&n<=56319&&t>e+1&&(r=i.charCodeAt(e+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function tg(i){return Object.keys(i).reduce(function(e,t){var n=i[t],r=!!n.icon;return r?e[n.iconName]=n.icon:e[t]=n,e},{})}function kf(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t.skipHooks,r=n===void 0?!1:n,s=tg(e);typeof Yn.hooks.addPack=="function"&&!r?Yn.hooks.addPack(i,tg(e)):Yn.styles[i]=Me(Me({},Yn.styles[i]||{}),s),i==="fas"&&kf("fa",e)}var lo=Yn.styles,AR=Yn.shims,CR=Object.values(yv),Qh=null,Av={},Cv={},Pv={},Rv={},Lv={},PR=Object.keys(Kh);function RR(i){return~cR.indexOf(i)}function LR(i,e){var t=e.split("-"),n=t[0],r=t.slice(1).join("-");return n===i&&r!==""&&!RR(r)?r:null}var Iv=function(){var e=function(s){return Ou(lo,function(a,o,l){return a[l]=Ou(o,s,{}),a},{})};Av=e(function(r,s,a){if(s[3]&&(r[s[3]]=a),s[2]){var o=s[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){r[l.toString(16)]=a})}return r}),Cv=e(function(r,s,a){if(r[a]=a,s[2]){var o=s[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){r[l]=a})}return r}),Lv=e(function(r,s,a){var o=s[2];return r[a]=a,o.forEach(function(l){r[l]=a}),r});var t="far"in lo||we.autoFetchSvg,n=Ou(AR,function(r,s){var a=s[0],o=s[1],l=s[2];return o==="far"&&!t&&(o="fas"),typeof a=="string"&&(r.names[a]={prefix:o,iconName:l}),typeof a=="number"&&(r.unicodes[a.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});Pv=n.names,Rv=n.unicodes,Qh=Rc(we.styleDefault)};pR(function(i){Qh=Rc(i.styleDefault)});Iv();function ed(i,e){return(Av[i]||{})[e]}function IR(i,e){return(Cv[i]||{})[e]}function Xs(i,e){return(Lv[i]||{})[e]}function Dv(i){return Pv[i]||{prefix:null,iconName:null}}function DR(i){var e=Rv[i],t=ed("fas",i);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Sr(){return Qh}var td=function(){return{prefix:null,iconName:null,rest:[]}};function Rc(i){var e=Kh[i],t=Zl[i]||Zl[e],n=i in Yn.styles?i:null;return t||n||null}function Lc(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.skipLookups,n=t===void 0?!1:t,r=null,s=i.reduce(function(a,o){var l=LR(we.familyPrefix,o);if(lo[o]?(o=CR.includes(o)?iR[o]:o,r=o,a.prefix=o):PR.indexOf(o)>-1?(r=o,a.prefix=Rc(o)):l?a.iconName=l:o!==we.replacementClass&&a.rest.push(o),!n&&a.prefix&&a.iconName){var c=r==="fa"?Dv(a.iconName):{},u=Xs(a.prefix,a.iconName);c.prefix&&(r=null),a.iconName=c.iconName||u||a.iconName,a.prefix=c.prefix||a.prefix,a.prefix==="far"&&!lo.far&&lo.fas&&!we.autoFetchSvg&&(a.prefix="fas")}return a},td());return(s.prefix==="fa"||r==="fa")&&(s.prefix=Sr()||"fas"),s}var OR=function(){function i(){WP(this,i),this.definitions={}}return jP(i,[{key:"add",value:function(){for(var t=this,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];var a=r.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){t.definitions[o]=Me(Me({},t.definitions[o]||{}),a[o]),kf(o,a[o]);var l=yv[o];l&&kf(l,a[o]),Iv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(s){var a=r[s],o=a.prefix,l=a.iconName,c=a.icon,u=c[2];t[o]||(t[o]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(t[o][f]=c)}),t[o][l]=c}),t}}]),i}(),ng=[],Ys={},sa={},NR=Object.keys(sa);function kR(i,e){var t=e.mixoutsTo;return ng=i,Ys={},Object.keys(sa).forEach(function(n){NR.indexOf(n)===-1&&delete sa[n]}),ng.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(a){typeof r[a]=="function"&&(t[a]=r[a]),Kl(r[a])==="object"&&Object.keys(r[a]).forEach(function(o){t[a]||(t[a]={}),t[a][o]=r[a][o]})}),n.hooks){var s=n.hooks();Object.keys(s).forEach(function(a){Ys[a]||(Ys[a]=[]),Ys[a].push(s[a])})}n.provides&&n.provides(sa)}),t}function Ff(i,e){for(var t=arguments.length,n=new Array(t>2?t-2:0),r=2;r<t;r++)n[r-2]=arguments[r];var s=Ys[i]||[];return s.forEach(function(a){e=a.apply(null,[e].concat(n))}),e}function ds(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var r=Ys[i]||[];r.forEach(function(s){s.apply(null,t)})}function ji(){var i=arguments[0],e=Array.prototype.slice.call(arguments,1);return sa[i]?sa[i].apply(null,e):void 0}function zf(i){i.prefix==="fa"&&(i.prefix="fas");var e=i.iconName,t=i.prefix||Sr();if(!!e)return e=Xs(t,e)||e,eg(Ov.definitions,t,e)||eg(Yn.styles,t,e)}var Ov=new OR,FR=function(){we.autoReplaceSvg=!1,we.observeMutations=!1,ds("noAuto")},zR={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return qi?(ds("beforeI2svg",e),ji("pseudoElements2svg",e),ji("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;we.autoReplaceSvg===!1&&(we.autoReplaceSvg=!0),we.observeMutations=!0,SR(function(){BR({autoReplaceSvgRoot:t}),ds("watch",e)})}},UR={icon:function(e){if(e===null)return null;if(Kl(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Xs(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Rc(e[0]);return{prefix:n,iconName:Xs(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(we.familyPrefix,"-"))>-1||e.match(rR))){var r=Lc(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Sr(),iconName:Xs(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=Sr();return{prefix:s,iconName:Xs(s,e)||e}}}},Mn={noAuto:FR,config:we,dom:zR,parse:UR,library:Ov,findIconDefinition:zf,toHtml:No},BR=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,n=t===void 0?ct:t;(Object.keys(Yn.styles).length>0||we.autoFetchSvg)&&qi&&we.autoReplaceSvg&&Mn.dom.i2svg({node:n})};function Ic(i,e){return Object.defineProperty(i,"abstract",{get:e}),Object.defineProperty(i,"html",{get:function(){return i.abstract.map(function(n){return No(n)})}}),Object.defineProperty(i,"node",{get:function(){if(!!qi){var n=ct.createElement("div");return n.innerHTML=i.html,n.children}}}),i}function GR(i){var e=i.children,t=i.main,n=i.mask,r=i.attributes,s=i.styles,a=i.transform;if(Jh(a)&&t.found&&!n.found){var o=t.width,l=t.height,c={x:o/l/2,y:.5};r.style=Pc(Me(Me({},s),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function VR(i){var e=i.prefix,t=i.iconName,n=i.children,r=i.attributes,s=i.symbol,a=s===!0?"".concat(e,"-").concat(we.familyPrefix,"-").concat(t):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Me(Me({},r),{},{id:a}),children:n}]}]}function nd(i){var e=i.icons,t=e.main,n=e.mask,r=i.prefix,s=i.iconName,a=i.transform,o=i.symbol,l=i.title,c=i.maskId,u=i.titleId,f=i.extra,h=i.watchable,p=h===void 0?!1:h,g=n.found?n:t,m=g.width,d=g.height,_=r==="fak",v=[we.replacementClass,s?"".concat(we.familyPrefix,"-").concat(s):""].filter(function(S){return f.classes.indexOf(S)===-1}).filter(function(S){return S!==""||!!S}).concat(f.classes).join(" "),b={children:[],attributes:Me(Me({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:v,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(d)})},M=_&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/d*16*.0625,"em")}:{};p&&(b.attributes[hs]=""),l&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(u||Ro())},children:[l]}),delete b.attributes.title);var y=Me(Me({},b),{},{prefix:r,iconName:s,main:t,mask:n,maskId:c,transform:a,symbol:o,styles:Me(Me({},M),f.styles)}),E=n.found&&t.found?ji("generateAbstractMask",y)||{children:[],attributes:{}}:ji("generateAbstractIcon",y)||{children:[],attributes:{}},A=E.children,x=E.attributes;return y.children=A,y.attributes=x,o?VR(y):GR(y)}function ig(i){var e=i.content,t=i.width,n=i.height,r=i.transform,s=i.title,a=i.extra,o=i.watchable,l=o===void 0?!1:o,c=Me(Me(Me({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});l&&(c[hs]="");var u=Me({},a.styles);Jh(r)&&(u.transform=xR({transform:r,startCentered:!0,width:t,height:n}),u["-webkit-transform"]=u.transform);var f=Pc(u);f.length>0&&(c.style=f);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function HR(i){var e=i.content,t=i.title,n=i.extra,r=Me(Me(Me({},n.attributes),t?{title:t}:{}),{},{class:n.classes.join(" ")}),s=Pc(n.styles);s.length>0&&(r.style=s);var a=[];return a.push({tag:"span",attributes:r,children:[e]}),t&&a.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),a}var Nu=Yn.styles;function Uf(i){var e=i[0],t=i[1],n=i.slice(4),r=$h(n,1),s=r[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(we.familyPrefix,"-").concat(Yr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(we.familyPrefix,"-").concat(Yr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(we.familyPrefix,"-").concat(Yr.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:t,icon:a}}var WR={found:!1,width:512,height:512};function jR(i,e){!xv&&!we.showMissingIcons&&i&&console.error('Icon with name "'.concat(i,'" and prefix "').concat(e,'" is missing.'))}function Bf(i,e){var t=e;return e==="fa"&&we.styleDefault!==null&&(e=Sr()),new Promise(function(n,r){if(ji("missingIconAbstract"),t==="fa"){var s=Dv(i)||{};i=s.iconName||i,e=s.prefix||e}if(i&&e&&Nu[e]&&Nu[e][i]){var a=Nu[e][i];return n(Uf(a))}jR(i,e),n(Me(Me({},WR),{},{icon:we.showMissingIcons&&i?ji("missingIconAbstract")||{}:{}}))})}var rg=function(){},Gf=we.measurePerformance&&pl&&pl.mark&&pl.measure?pl:{mark:rg,measure:rg},Ya='FA "6.1.2"',$R=function(e){return Gf.mark("".concat(Ya," ").concat(e," begins")),function(){return Nv(e)}},Nv=function(e){Gf.mark("".concat(Ya," ").concat(e," ends")),Gf.measure("".concat(Ya," ").concat(e),"".concat(Ya," ").concat(e," begins"),"".concat(Ya," ").concat(e," ends"))},id={begin:$R,end:Nv},Cl=function(){};function sg(i){var e=i.getAttribute?i.getAttribute(hs):null;return typeof e=="string"}function qR(i){var e=i.getAttribute?i.getAttribute(Xh):null,t=i.getAttribute?i.getAttribute(Yh):null;return e&&t}function XR(i){return i&&i.classList&&i.classList.contains&&i.classList.contains(we.replacementClass)}function YR(){if(we.autoReplaceSvg===!0)return Pl.replace;var i=Pl[we.autoReplaceSvg];return i||Pl.replace}function KR(i){return ct.createElementNS("http://www.w3.org/2000/svg",i)}function ZR(i){return ct.createElement(i)}function kv(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,n=t===void 0?i.tag==="svg"?KR:ZR:t;if(typeof i=="string")return ct.createTextNode(i);var r=n(i.tag);Object.keys(i.attributes||[]).forEach(function(a){r.setAttribute(a,i.attributes[a])});var s=i.children||[];return s.forEach(function(a){r.appendChild(kv(a,{ceFn:n}))}),r}function JR(i){var e=" ".concat(i.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Pl={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(r){t.parentNode.insertBefore(kv(r),t)}),t.getAttribute(hs)===null&&we.keepOriginalSource){var n=ct.createComment(JR(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~Zh(t).indexOf(we.replacementClass))return Pl.replace(e);var r=new RegExp("".concat(we.familyPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var s=n[0].attributes.class.split(" ").reduce(function(o,l){return l===we.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}var a=n.map(function(o){return No(o)}).join(`
`);t.setAttribute(hs,""),t.innerHTML=a}};function ag(i){i()}function Fv(i,e){var t=typeof e=="function"?e:Cl;if(i.length===0)t();else{var n=ag;we.mutateApproach===tR&&(n=Mr.requestAnimationFrame||ag),n(function(){var r=YR(),s=id.begin("mutate");i.map(r),s(),t()})}}var rd=!1;function zv(){rd=!0}function Vf(){rd=!1}var Ql=null;function og(i){if(!!Zm&&!!we.observeMutations){var e=i.treeCallback,t=e===void 0?Cl:e,n=i.nodeCallback,r=n===void 0?Cl:n,s=i.pseudoElementsCallback,a=s===void 0?Cl:s,o=i.observeMutationsRoot,l=o===void 0?ct:o;Ql=new Zm(function(c){if(!rd){var u=Sr();Ia(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!sg(f.addedNodes[0])&&(we.searchPseudoElements&&a(f.target),t(f.target)),f.type==="attributes"&&f.target.parentNode&&we.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&sg(f.target)&&~lR.indexOf(f.attributeName))if(f.attributeName==="class"&&qR(f.target)){var h=Lc(Zh(f.target)),p=h.prefix,g=h.iconName;f.target.setAttribute(Xh,p||u),g&&f.target.setAttribute(Yh,g)}else XR(f.target)&&r(f.target)})}}),qi&&Ql.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function QR(){!Ql||Ql.disconnect()}function eL(i){var e=i.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(n,r){var s=r.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(n[a]=o.join(":").trim()),n},{})),t}function tL(i){var e=i.getAttribute("data-prefix"),t=i.getAttribute("data-icon"),n=i.innerText!==void 0?i.innerText.trim():"",r=Lc(Zh(i));return r.prefix||(r.prefix=Sr()),e&&t&&(r.prefix=e,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=IR(r.prefix,i.innerText)||ed(r.prefix,Nf(i.innerText))),!r.iconName&&we.autoFetchSvg&&i.firstChild&&i.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=i.firstChild.data)),r}function nL(i){var e=Ia(i.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),t=i.getAttribute("title"),n=i.getAttribute("data-fa-title-id");return we.autoA11y&&(t?e["aria-labelledby"]="".concat(we.replacementClass,"-title-").concat(n||Ro()):(e["aria-hidden"]="true",e.focusable="false")),e}function iL(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ci,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function lg(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=tL(i),n=t.iconName,r=t.prefix,s=t.rest,a=nL(i),o=Ff("parseNodeAttributes",{},i),l=e.styleParser?eL(i):[];return Me({iconName:n,title:i.getAttribute("title"),titleId:i.getAttribute("data-fa-title-id"),prefix:r,transform:ci,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:a}},o)}var rL=Yn.styles;function Uv(i){var e=we.autoReplaceSvg==="nest"?lg(i,{styleParser:!1}):lg(i);return~e.extra.classes.indexOf(bv)?ji("generateLayersText",i,e):ji("generateSvgReplacementMutation",i,e)}function cg(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!qi)return Promise.resolve();var t=ct.documentElement.classList,n=function(f){return t.add("".concat(Jm,"-").concat(f))},r=function(f){return t.remove("".concat(Jm,"-").concat(f))},s=we.autoFetchSvg?Object.keys(Kh):Object.keys(rL);s.includes("fa")||s.push("fa");var a=[".".concat(bv,":not([").concat(hs,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(hs,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=Ia(i.querySelectorAll(a))}catch{}if(o.length>0)n("pending"),r("complete");else return Promise.resolve();var l=id.begin("onTree"),c=o.reduce(function(u,f){try{var h=Uv(f);h&&u.push(h)}catch(p){xv||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(h){Fv(h,function(){n("active"),n("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(h){l(),f(h)})})}function sL(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Uv(i).then(function(t){t&&Fv([t],e)})}function aL(i){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:zf(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:zf(r||{})),i(n,Me(Me({},t),{},{mask:r}))}}var oL=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?ci:n,s=t.symbol,a=s===void 0?!1:s,o=t.mask,l=o===void 0?null:o,c=t.maskId,u=c===void 0?null:c,f=t.title,h=f===void 0?null:f,p=t.titleId,g=p===void 0?null:p,m=t.classes,d=m===void 0?[]:m,_=t.attributes,v=_===void 0?{}:_,b=t.styles,M=b===void 0?{}:b;if(!!e){var y=e.prefix,E=e.iconName,A=e.icon;return Ic(Me({type:"icon"},e),function(){return ds("beforeDOMElementCreation",{iconDefinition:e,params:t}),we.autoA11y&&(h?v["aria-labelledby"]="".concat(we.replacementClass,"-title-").concat(g||Ro()):(v["aria-hidden"]="true",v.focusable="false")),nd({icons:{main:Uf(A),mask:l?Uf(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:E,transform:Me(Me({},ci),r),symbol:a,title:h,maskId:u,titleId:g,extra:{attributes:v,styles:M,classes:d}})})}},lL={mixout:function(){return{icon:aL(oL)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=cg,t.nodeCallback=sL,t}}},provides:function(e){e.i2svg=function(t){var n=t.node,r=n===void 0?ct:n,s=t.callback,a=s===void 0?function(){}:s;return cg(r,a)},e.generateSvgReplacementMutation=function(t,n){var r=n.iconName,s=n.title,a=n.titleId,o=n.prefix,l=n.transform,c=n.symbol,u=n.mask,f=n.maskId,h=n.extra;return new Promise(function(p,g){Promise.all([Bf(r,o),u.iconName?Bf(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var d=$h(m,2),_=d[0],v=d[1];p([t,nd({icons:{main:_,mask:v},prefix:o,iconName:r,transform:l,symbol:c,maskId:f,title:s,titleId:a,extra:h,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(t){var n=t.children,r=t.attributes,s=t.main,a=t.transform,o=t.styles,l=Pc(o);l.length>0&&(r.style=l);var c;return Jh(a)&&(c=ji("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:r}}}},cL={mixout:function(){return{layer:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,s=r===void 0?[]:r;return Ic({type:"layer"},function(){ds("beforeDOMElementCreation",{assembler:t,params:n});var a=[];return t(function(o){Array.isArray(o)?o.map(function(l){a=a.concat(l.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(we.familyPrefix,"-layers")].concat(Cc(s)).join(" ")},children:a}]})}}}},uL={mixout:function(){return{counter:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,s=r===void 0?null:r,a=n.classes,o=a===void 0?[]:a,l=n.attributes,c=l===void 0?{}:l,u=n.styles,f=u===void 0?{}:u;return Ic({type:"counter",content:t},function(){return ds("beforeDOMElementCreation",{content:t,params:n}),HR({content:t.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(we.familyPrefix,"-layers-counter")].concat(Cc(o))}})})}}}},fL={mixout:function(){return{text:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?ci:r,a=n.title,o=a===void 0?null:a,l=n.classes,c=l===void 0?[]:l,u=n.attributes,f=u===void 0?{}:u,h=n.styles,p=h===void 0?{}:h;return Ic({type:"text",content:t},function(){return ds("beforeDOMElementCreation",{content:t,params:n}),ig({content:t,transform:Me(Me({},ci),s),title:o,extra:{attributes:f,styles:p,classes:["".concat(we.familyPrefix,"-layers-text")].concat(Cc(c))}})})}}},provides:function(e){e.generateLayersText=function(t,n){var r=n.title,s=n.transform,a=n.extra,o=null,l=null;if(gv){var c=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();o=u.width/c,l=u.height/c}return we.autoA11y&&!r&&(a.attributes["aria-hidden"]="true"),Promise.resolve([t,ig({content:t.innerHTML,width:o,height:l,transform:s,title:r,extra:a,watchable:!0})])}}},hL=new RegExp('"',"ug"),ug=[1105920,1112319];function dL(i){var e=i.replace(hL,""),t=ER(e,0),n=t>=ug[0]&&t<=ug[1],r=e.length===2?e[0]===e[1]:!1;return{value:Nf(r?e[0]:e),isSecondary:n||r}}function fg(i,e){var t="".concat(eR).concat(e.replace(":","-"));return new Promise(function(n,r){if(i.getAttribute(t)!==null)return n();var s=Ia(i.children),a=s.filter(function(E){return E.getAttribute(Of)===e})[0],o=Mr.getComputedStyle(i,e),l=o.getPropertyValue("font-family").match(sR),c=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(a&&!l)return i.removeChild(a),n();if(l&&u!=="none"&&u!==""){var f=o.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Zl[l[2].toLowerCase()]:aR[c],p=dL(f),g=p.value,m=p.isSecondary,d=l[0].startsWith("FontAwesome"),_=ed(h,g),v=_;if(d){var b=DR(g);b.iconName&&b.prefix&&(_=b.iconName,h=b.prefix)}if(_&&!m&&(!a||a.getAttribute(Xh)!==h||a.getAttribute(Yh)!==v)){i.setAttribute(t,v),a&&i.removeChild(a);var M=iL(),y=M.extra;y.attributes[Of]=e,Bf(_,h).then(function(E){var A=nd(Me(Me({},M),{},{icons:{main:E,mask:td()},prefix:h,iconName:v,extra:y,watchable:!0})),x=ct.createElement("svg");e==="::before"?i.insertBefore(x,i.firstChild):i.appendChild(x),x.outerHTML=A.map(function(S){return No(S)}).join(`
`),i.removeAttribute(t),n()}).catch(r)}else n()}else n()})}function pL(i){return Promise.all([fg(i,"::before"),fg(i,"::after")])}function mL(i){return i.parentNode!==document.head&&!~nR.indexOf(i.tagName.toUpperCase())&&!i.getAttribute(Of)&&(!i.parentNode||i.parentNode.tagName!=="svg")}function hg(i){if(!!qi)return new Promise(function(e,t){var n=Ia(i.querySelectorAll("*")).filter(mL).map(pL),r=id.begin("searchPseudoElements");zv(),Promise.all(n).then(function(){r(),Vf(),e()}).catch(function(){r(),Vf(),t()})})}var gL={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=hg,t}}},provides:function(e){e.pseudoElements2svg=function(t){var n=t.node,r=n===void 0?ct:n;we.searchPseudoElements&&hg(r)}}},dg=!1,_L={mixout:function(){return{dom:{unwatch:function(){zv(),dg=!0}}}},hooks:function(){return{bootstrap:function(){og(Ff("mutationObserverCallbacks",{}))},noAuto:function(){QR()},watch:function(t){var n=t.observeMutationsRoot;dg?Vf():og(Ff("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},pg=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,r){var s=r.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return n.flipX=!0,n;if(a&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(a){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)},vL={mixout:function(){return{parse:{transform:function(t){return pg(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-transform");return r&&(t.transform=pg(r)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var n=t.main,r=t.transform,s=t.containerWidth,a=t.iconWidth,o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(a/2*-1," -256)")},p={outer:o,inner:f,path:h};return{tag:"g",attributes:Me({},p.outer),children:[{tag:"g",attributes:Me({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:Me(Me({},n.icon.attributes),p.path)}]}]}}}},ku={x:0,y:0,width:"100%",height:"100%"};function mg(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return i.attributes&&(i.attributes.fill||e)&&(i.attributes.fill="black"),i}function xL(i){return i.tag==="g"?i.children:[i]}var yL={hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-mask"),s=r?Lc(r.split(" ").map(function(a){return a.trim()})):td();return s.prefix||(s.prefix=Sr()),t.mask=s,t.maskId=n.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var n=t.children,r=t.attributes,s=t.main,a=t.mask,o=t.maskId,l=t.transform,c=s.width,u=s.icon,f=a.width,h=a.icon,p=vR({transform:l,containerWidth:f,iconWidth:c}),g={tag:"rect",attributes:Me(Me({},ku),{},{fill:"white"})},m=u.children?{children:u.children.map(mg)}:{},d={tag:"g",attributes:Me({},p.inner),children:[mg(Me({tag:u.tag,attributes:Me(Me({},u.attributes),p.path)},m))]},_={tag:"g",attributes:Me({},p.outer),children:[d]},v="mask-".concat(o||Ro()),b="clip-".concat(o||Ro()),M={tag:"mask",attributes:Me(Me({},ku),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,_]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:xL(h)},M]};return n.push(y,{tag:"rect",attributes:Me({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(v,")")},ku)}),{children:n,attributes:r}}}},bL={provides:function(e){var t=!1;Mr.matchMedia&&(t=Mr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:Me(Me({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=Me(Me({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:Me(Me({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:Me(Me({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Me(Me({},a),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:Me(Me({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:Me(Me({},a),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:Me(Me({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Me(Me({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ML={hooks:function(){return{parseNodeAttributes:function(t,n){var r=n.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return t.symbol=s,t}}}},SL=[bR,lL,cL,uL,fL,gL,_L,vL,yL,bL,ML];kR(SL,{mixoutsTo:Mn});Mn.noAuto;var Bv=Mn.config,Gv=Mn.library;Mn.dom;var ec=Mn.parse;Mn.findIconDefinition;Mn.toHtml;var wL=Mn.icon;Mn.layer;var TL=Mn.text;Mn.counter;function gg(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function jn(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?gg(Object(t),!0).forEach(function(n){tn(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):gg(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function tc(i){return tc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tc(i)}function tn(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function EL(i,e){if(i==null)return{};var t={},n=Object.keys(i),r,s;for(s=0;s<n.length;s++)r=n[s],!(e.indexOf(r)>=0)&&(t[r]=i[r]);return t}function AL(i,e){if(i==null)return{};var t=EL(i,e),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);for(r=0;r<s.length;r++)n=s[r],!(e.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,n)||(t[n]=i[n]))}return t}function Hf(i){return CL(i)||PL(i)||RL(i)||LL()}function CL(i){if(Array.isArray(i))return Wf(i)}function PL(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function RL(i,e){if(!!i){if(typeof i=="string")return Wf(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Wf(i,e)}}function Wf(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function LL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var IL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vv={exports:{}};(function(i){(function(e){var t=function(_,v,b){if(!c(v)||f(v)||h(v)||p(v)||l(v))return v;var M,y=0,E=0;if(u(v))for(M=[],E=v.length;y<E;y++)M.push(t(_,v[y],b));else{M={};for(var A in v)Object.prototype.hasOwnProperty.call(v,A)&&(M[_(A,b)]=t(_,v[A],b))}return M},n=function(_,v){v=v||{};var b=v.separator||"_",M=v.split||/(?=[A-Z])/;return _.split(M).join(b)},r=function(_){return g(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(v,b){return b?b.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},s=function(_){var v=r(_);return v.substr(0,1).toUpperCase()+v.substr(1)},a=function(_,v){return n(_,v).toLowerCase()},o=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return o.call(_)=="[object Array]"},f=function(_){return o.call(_)=="[object Date]"},h=function(_){return o.call(_)=="[object RegExp]"},p=function(_){return o.call(_)=="[object Boolean]"},g=function(_){return _=_-0,_===_},m=function(_,v){var b=v&&"process"in v?v.process:v;return typeof b!="function"?_:function(M,y){return b(M,_,y)}},d={camelize:r,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(_,v){return t(m(r,v),_)},decamelizeKeys:function(_,v){return t(m(a,v),_,v)},pascalizeKeys:function(_,v){return t(m(s,v),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};i.exports?i.exports=d:e.humps=d})(IL)})(Vv);var DL=Vv.exports,OL=["class","style"];function NL(i){return i.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(":"),r=DL.camelize(t.slice(0,n)),s=t.slice(n+1).trim();return e[r]=s,e},{})}function kL(i){return i.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function sd(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof i=="string")return i;var n=(i.children||[]).map(function(l){return sd(l)}),r=Object.keys(i.attributes||{}).reduce(function(l,c){var u=i.attributes[c];switch(c){case"class":l.class=kL(u);break;case"style":l.style=NL(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});t.class;var s=t.style,a=s===void 0?{}:s,o=AL(t,OL);return uh(i.tag,jn(jn(jn({},e),{},{class:r.class,style:jn(jn({},r.style),a)},r.attrs),o),n)}var Hv=!1;try{Hv=!0}catch{}function FL(){if(!Hv&&console&&typeof console.error=="function"){var i;(i=console).error.apply(i,arguments)}}function co(i,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?tn({},i,e):{}}function zL(i){var e,t=(e={"fa-spin":i.spin,"fa-pulse":i.pulse,"fa-fw":i.fixedWidth,"fa-border":i.border,"fa-li":i.listItem,"fa-inverse":i.inverse,"fa-flip":i.flip===!0,"fa-flip-horizontal":i.flip==="horizontal"||i.flip==="both","fa-flip-vertical":i.flip==="vertical"||i.flip==="both"},tn(e,"fa-".concat(i.size),i.size!==null),tn(e,"fa-rotate-".concat(i.rotation),i.rotation!==null),tn(e,"fa-pull-".concat(i.pull),i.pull!==null),tn(e,"fa-swap-opacity",i.swapOpacity),tn(e,"fa-bounce",i.bounce),tn(e,"fa-shake",i.shake),tn(e,"fa-beat",i.beat),tn(e,"fa-fade",i.fade),tn(e,"fa-beat-fade",i.beatFade),tn(e,"fa-flash",i.flash),tn(e,"fa-spin-pulse",i.spinPulse),tn(e,"fa-spin-reverse",i.spinReverse),e);return Object.keys(t).map(function(n){return t[n]?n:null}).filter(function(n){return n})}function _g(i){if(i&&tc(i)==="object"&&i.prefix&&i.iconName&&i.icon)return i;if(ec.icon)return ec.icon(i);if(i===null)return null;if(tc(i)==="object"&&i.prefix&&i.iconName)return i;if(Array.isArray(i)&&i.length===2)return{prefix:i[0],iconName:i[1]};if(typeof i=="string")return{prefix:"fas",iconName:i}}var UL=Ut({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,r=Xt(function(){return _g(e.icon)}),s=Xt(function(){return co("classes",zL(e))}),a=Xt(function(){return co("transform",typeof e.transform=="string"?ec.transform(e.transform):e.transform)}),o=Xt(function(){return co("mask",_g(e.mask))}),l=Xt(function(){return wL(r.value,jn(jn(jn(jn({},s.value),a.value),o.value),{},{symbol:e.symbol,title:e.title}))});Js(l,function(u){if(!u)return FL("Could not find one or more icon(s)",r.value,o.value)},{immediate:!0});var c=Xt(function(){return l.value?sd(l.value.abstract[0],{},n):null});return function(){return c.value}}});Ut({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,t){var n=t.slots,r=Bv.familyPrefix,s=Xt(function(){return["".concat(r,"-layers")].concat(Hf(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return uh("div",{class:s.value},n.default?n.default():[])}}});Ut({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,t){var n=t.attrs,r=Bv.familyPrefix,s=Xt(function(){return co("classes",[].concat(Hf(e.counter?["".concat(r,"-layers-counter")]:[]),Hf(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),a=Xt(function(){return co("transform",typeof e.transform=="string"?ec.transform(e.transform):e.transform)}),o=Xt(function(){var c=TL(e.value.toString(),jn(jn({},a.value),s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Xt(function(){return sd(o.value,{},n)});return function(){return l.value}}});Gv.add(OP,FP,BP,zP,LP,DP,kP,IP,RP,NP);Gv.add(GP,HP,VP);const BL=Wb();vb(PP).use(BL).component("font-awesome-icon",UL).mount("#app");
