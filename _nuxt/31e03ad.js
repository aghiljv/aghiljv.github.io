(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{310:function(e,t,n){var content=n(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("03a3df92",content,!0,{sourceMap:!1})},345:function(e,t,n){"use strict";n(310)},346:function(e,t,n){var r=n(15)(!1);r.push([e.i,"#cookieDesc[data-v-027e3b2c]{position:absolute;height:100%;width:100%;display:none;justify-content:center;bottom:0;z-index:100;transition:.5s;opacity:0;align-items:center}.darkOverlay[data-v-027e3b2c]{position:fixed;height:100%;width:100%;top:0;left:0;background:#000;opacity:.8}.permission[data-v-027e3b2c]{position:absolute;width:30%;height:40%;color:var(--background-color-primary);background:var(--color-primary);z-index:100;display:grid;padding:2.5%;grid-template-rows:1fr 1fr}.bannerHeader[data-v-027e3b2c]{position:absolute;padding:2.5% 0 0 5%}.rowPermission[data-v-027e3b2c]{display:grid;grid-template-columns:1fr 4fr;width:100%;align-items:center}@media only screen and (max-width:600px){.permission[data-v-027e3b2c]{height:40%;width:90%;padding:15% 10% 10%}}",""]),e.exports=r},377:function(e,t,n){"use strict";n.r(t);n(79);var r={methods:{changedGAPermission:function(){this.$emit("currentGAPermission",document.getElementById("gaPermission").checked)}}},o=(n(345),n(3)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"cookieDesc"}},[n("div",{staticClass:"darkOverlay"}),e._v(" "),n("div",{staticClass:"permission"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("div",{staticClass:"rowPermission"},[n("input",{attrs:{type:"checkbox",id:"gaPermission",name:"gaPermission",value:"gaPermission"},on:{change:e.changedGAPermission}}),e._v(" "),e._m(2),e._v(" "),n("div"),e._v(" "),n("p",[e._v("The site uses GA to understand the readers better.")])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bannerHeader"},[n("h3",[e._v("Preferences")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rowPermission"},[n("input",{attrs:{type:"checkbox",id:"necessary",name:"necessary",value:"necessary",disabled:"true",checked:""}}),e._v(" "),n("label",{attrs:{for:"necessary"}},[n("b",[e._v("Necessary")])]),e._v(" "),n("div"),e._v(" "),n("p",[e._v("\n        These can't be turned off as they are used to ensure the smooth\n        execution of this site.\n      ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{attrs:{for:"gaPermission"}},[n("b",[e._v("Google Analytics")])])}],!1,null,"027e3b2c",null);t.default=component.exports}}]);