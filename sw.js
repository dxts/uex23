if(!self.define){let e,t={};const i=(i,n)=>(i=new URL(i+".js",n).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let s={};const l=e=>i(e,r),f={module:{uri:r},exports:s,require:l};t[r]=Promise.all(n.map((e=>f[e]||l(e)))).then((e=>(o(...e),s)))}}define(["./workbox-a523fd56"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"6e3f18a7.js",revision:"a59967ba270f44216abf4fd986d63a72"},{url:"index.html",revision:"94a4c890d7e55d8352ba34e486174ffe"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map