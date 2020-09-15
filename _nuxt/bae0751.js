(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{themeName:"Light Theme"}},computed:{pageTitle:function(){return this.$store.state.pageTitle.pageTitle}},methods:{switchTheme:function(){var t=document.documentElement;"Light Theme"==this.themeName?(t.style.setProperty("--background-color-primary","white"),t.style.setProperty("--color-primary","black"),t.style.setProperty("--header-bg-color","rgba(0, 0, 0, 0)"),t.style.setProperty("--link-text-color","rgb(114, 114, 114)"),t.style.setProperty("--active-link-text-color","rgba(0,0,0,1)"),t.style.setProperty("--active-link-background-color","white"),t.style.setProperty("--particle-bg-color","white"),t.style.setProperty("--intro-card-bg","rgba(225, 225, 225, 0.5)"),t.style.setProperty("--intro-card-pic-border-color","rgba(205, 205, 205, 1)"),t.style.setProperty("--intro-card-button-holder-color","rgba(205, 205, 205, 0)"),t.style.setProperty("--intro-card-shadow","rgba(0, 0, 0, 0.2)"),t.style.setProperty("--invert-value","invert(1)"),this.$emit("changeBG","Light"),this.themeName="Dark Theme"):(t.style.setProperty("--background-color-primary","black"),t.style.setProperty("--color-primary","white"),t.style.setProperty("--header-bg-color"," rgba(0, 0, 0, 0)"),t.style.setProperty("--link-text-color","rgb(114, 114, 114)"),t.style.setProperty("--active-link-text-color","rgba(255, 255, 255, 1)"),t.style.setProperty("--active-link-background-color","white"),t.style.setProperty("--particle-bg-color","black"),t.style.setProperty("--intro-card-bg","rgba(25, 25, 25, 0.5)"),t.style.setProperty("--intro-card-pic-border-color","rgba(50, 50, 50, 1)"),t.style.setProperty("--intro-card-button-holder-color","rgba(50, 50, 50, 0)"),t.style.setProperty("--intro-card-shadow","rgba(0, 0, 0, 0.2)"),t.style.setProperty("--invert-value","invert(0)"),this.$emit("changeBG","Dark"),this.themeName="Light Theme")}}},r=(o(227),o(3)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"mainRoutes"}},[o("div",{staticClass:"routeHolder"},[o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/",exact:""}},[t._v("HOME")]),t._v(" "),o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/portfolio"}},[t._v("PORTFOLIO")]),t._v(" "),o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/blog"}},[t._v("BLOG")]),t._v(" "),o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/about"}},[t._v("ABOUT")]),t._v(" "),o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/contact"}},[t._v("CONTACT")]),t._v(" "),o("div",{staticClass:"indRoute",on:{click:t.switchTheme}},[t._v(t._s(t.themeName))])],1),t._v(" "),o("div",{staticClass:"currentRouteHolder",attrs:{id:"currentActiveRoute"}},[o("div",{staticClass:"routeCurrentText"},[t._v(t._s(t.pageTitle))])])])}),[],!1,null,"3826f57b",null);e.default=component.exports},101:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{themeName:"Light Theme"}},methods:{toggleNav:function(){document.getElementById("phoneNavID").style.bottom="-120%",document.getElementById("nav-icon").classList.toggle("open")},switchTheme:function(){var t=document.documentElement;"Light Theme"==this.themeName?(t.style.setProperty("--background-color-primary","white"),t.style.setProperty("--color-primary","black"),t.style.setProperty("--header-bg-color","rgba(0, 0, 0, 0.1)"),t.style.setProperty("--link-text-color","rgb(114, 114, 114)"),t.style.setProperty("--active-link-text-color","rgba(0,0,0,1)"),t.style.setProperty("--active-link-background-color","white"),t.style.setProperty("--particle-bg-color","white"),t.style.setProperty("--intro-card-bg","rgba(225, 225, 225, 0.5)"),t.style.setProperty("--intro-card-pic-border-color","rgba(205, 205, 205, 1)"),t.style.setProperty("--intro-card-button-holder-color","rgba(205, 205, 205, 0)"),t.style.setProperty("--intro-card-shadow","rgba(0, 0, 0, 0.2)"),t.style.setProperty("--invert-value","invert(1)"),this.$emit("changeBG","Light"),this.themeName="Dark Theme"):(t.style.setProperty("--background-color-primary","black"),t.style.setProperty("--color-primary","white"),t.style.setProperty("--header-bg-color"," rgba(0, 0, 0, 0.6)"),t.style.setProperty("--link-text-color","rgb(114, 114, 114)"),t.style.setProperty("--active-link-text-color","rgba(255, 255, 255, 1)"),t.style.setProperty("--active-link-background-color","white"),t.style.setProperty("--particle-bg-color","black"),t.style.setProperty("--intro-card-bg","rgba(25, 25, 25, 0.5)"),t.style.setProperty("--intro-card-pic-border-color","rgba(50, 50, 50, 1)"),t.style.setProperty("--intro-card-button-holder-color","rgba(50, 50, 50, 0)"),t.style.setProperty("--intro-card-shadow","rgba(0, 0, 0, 0.2)"),t.style.setProperty("--invert-value","invert(0)"),this.$emit("changeBG","Dark"),this.themeName="Light Theme")}}},r=(o(229),o(3)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"phoneNavClass",attrs:{id:"phoneNavID"},on:{click:t.toggleNav}},[o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/",exact:""}},[t._v("HOME")]),t._v(" "),o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/portfolio"}},[t._v("PORTFOLIO")]),t._v(" "),o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/blog"}},[t._v("BLOG")]),t._v(" "),o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/about"}},[t._v("ABOUT")]),t._v(" "),o("nuxt-link",{staticClass:"indRoute",attrs:{to:"/contact"}},[t._v("CONTACT")]),t._v(" "),o("div",{staticClass:"indRoute",on:{click:t.switchTheme}},[t._v(t._s(t.themeName))])],1)}),[],!1,null,"6eee6398",null);e.default=component.exports},102:function(t,e,o){"use strict";o.r(e);var n={methods:{bringUpPhoneNav:function(){document.getElementById("nav-icon").classList.toggle("open"),"0%"!=document.getElementById("phoneNavID").style.bottom?document.getElementById("phoneNavID").style.bottom="0%":document.getElementById("phoneNavID").style.bottom="-120%"}}},r=(o(231),o(3)),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"nav-icon"},on:{click:this.bringUpPhoneNav}},[e("span"),this._v(" "),e("span"),this._v(" "),e("span"),this._v(" "),e("span")])}),[],!1,null,"4801a0d4",null);e.default=component.exports},103:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{}}},r=(o(233),o(3)),component=Object(r.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"socialClass"},[e("div",{staticClass:"computerScreen"},[e("ul",[e("li",{staticStyle:{background:"#000000"}},[e("a",{attrs:{href:"https://medium.com/@aghiljv",target:"_blank",rel:"noopener noreferrer"}},[e("img",{staticStyle:{width:"100%",display:"flex"},attrs:{src:"/img/common/medium.webp",alt:"Medium"}})])]),this._v(" "),e("li",{staticStyle:{background:"#0077b7"}},[e("a",{attrs:{href:"https://www.linkedin.com/in/aghil-jose/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{staticStyle:{width:"100%",display:"flex"},attrs:{src:"/img/common/linkedin.webp",alt:"LinkedIn"}})])]),this._v(" "),e("li",{staticStyle:{background:"#2c2c2c"}},[e("a",{attrs:{href:"https://github.com/aghiljv",target:"_blank",rel:"noopener noreferrer"}},[e("img",{staticStyle:{width:"100%",display:"flex"},attrs:{src:"/img/common/github.webp",alt:"GitHub"}})])])])]),this._v(" "),e("div",{staticClass:"phoneScreen"},[e("ul",[e("li",{staticStyle:{background:"#000000"}},[e("a",{attrs:{href:"https://medium.com/@aghiljv",target:"_blank",rel:"noopener noreferrer"}},[e("img",{staticStyle:{width:"100%",display:"flex"},attrs:{src:"/img/common/mediump.webp",alt:"Medium"}})])]),this._v(" "),e("li",{staticStyle:{background:"#0077b7"}},[e("a",{attrs:{href:"https://www.linkedin.com/in/aghil-jose/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{staticStyle:{width:"100%",display:"flex"},attrs:{src:"/img/common/linkedinp.webp",alt:"LinkedIn"}})])]),this._v(" "),e("li",{staticStyle:{background:"#2c2c2c"}},[e("a",{attrs:{href:"https://github.com/aghiljv",target:"_blank",rel:"noopener noreferrer"}},[e("img",{staticStyle:{width:"100%",display:"flex"},attrs:{src:"/img/common/githubp.webp",alt:"GitHub"}})])])])])])}],!1,null,"887cf5b6",null);e.default=component.exports},104:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{particleColor:"#808080",particleBg:"#000000",darkMode:!0}},props:["themeName"],watch:{themeName:function(){"Light"==this.$props.themeName?(this.particleColor="#808080",this.particleBg="#ffffff"):"Dark"==this.$props.themeName&&(this.particleColor="#808080",this.particleBg="#000000",console.log(this.$props.themeName)),this.applyThemeChanges()}},mounted:function(){this.initParticles()},methods:{initParticles:function(){var t=this;window.onNuxtReady((function(){t.drawBG()}))},drawBG:function(){window.particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:700}},color:{value:this.particleColor},shape:{type:"circle",stroke:{width:4,color:"#fff"}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:this.particleColor,opacity:.4,width:1},move:{enable:!0,speed:5,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}),this.applyThemeChanges()},applyThemeChanges:function(){pJSDom[0].pJS.particles.color.value=this.particleColor,pJSDom[0].pJS.particles.shape.stroke.color=this.particleBg,pJSDom[0].pJS.particles.line_linked.color=this.particleColor,pJSDom[0].pJS.fn.particlesRefresh()}}},r=(o(235),o(3)),component=Object(r.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"particles"},[e("div",{attrs:{id:"particles-js"}})])}],!1,null,"23f5383b",null);e.default=component.exports},108:function(t,e,o){"use strict";var n=o(0);window.onNuxtReady((function(){var t=o(252);n.a.use(t)}))},109:function(t,e,o){"use strict";var n=o(0),r=o(157),c=o.n(r);n.a.use(c.a)},110:function(t,e,o){"use strict";e.a=function(t){var i,s,e,o,a,n,r=t.app;i=window,s=document,e="script",o="ga",i.GoogleAnalyticsObject=o,i.ga=i.ga||function(){(i.ga.q=i.ga.q||[]).push(arguments)},i.ga.l=1*new Date,a=s.createElement(e),n=s.getElementsByTagName(e)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",n.parentNode.insertBefore(a,n),ga("create","UA-177609997-1","auto"),r.router.afterEach((function(t,e){ga("set","page",t.fullPath),ga("send","pageview")}))}},159:function(t,e,o){"use strict";o(160);var n={},r=(o(223),o(3)),c=Object(r.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"homeAnimClass",attrs:{id:"introAnimComp"}},[e("img",{attrs:{id:"introLogo",src:"/img/common/homelogo.webp",alt:"Logo for Animation"}}),this._v(" "),e("div",{attrs:{id:"loadingText"}},[this._v("LOADING")])])}],!1,null,"1f59fe06",null).exports,l=o(99),d=o(100),f=o(101),h=o(102),m=o(103),v=o(104),y=(o(237),{components:{HomePageIntro:c,ProjectHeader:l.default,SocialLinks:m.default,Particle:v.default,PhoneNavigator:f.default,PhoneNavButton:h.default,Routes:d.default},data:function(){return{themeName:"Dark",navAction:!1}},methods:{sendElementDown:function(){document.getElementById("introAnimComp").style.display="none"},changeBG:function(t){this.themeName=t},mouseMoveEvent:function(t){var e=document.getElementById("mainContent").clientWidth/2,o=(document.getElementById("mainContent").clientHeight/2-t.clientY)/100,n=(e-t.clientX)/200;document.getElementById("currentActiveRoute").style.transform="translateY("+o+"%)",null!=document.getElementById("homeTitle1")&&(document.getElementById("homeTitle1").style.transform="translateX("+n+"%)",document.getElementById("homeTitle2").style.transform="translateX("+-n+"%)")}}}),w=(o(238),Object(r.a)(y,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{on:{mousemove:function(e){return t.mouseMoveEvent(e)}}},[o("Particle",{staticClass:"particleClass",attrs:{themeName:t.themeName}}),t._v(" "),o("ProjectHeader",{staticClass:"headerClassMain",on:{changeBG:function(e){return t.changeBG(e)}}}),t._v(" "),o("PhoneNavigator",{on:{changeBG:function(e){return t.changeBG(e)}}}),t._v(" "),o("SocialLinks",{attrs:{id:"socialLinks"}}),t._v(" "),o("Routes",{attrs:{id:"sideRoutes"},on:{changeBG:function(e){return t.changeBG(e)}}}),t._v(" "),o("main",[o("nuxt",{attrs:{id:"mainContent"}})],1),t._v(" "),o("PhoneNavButton",{staticClass:"navButton",attrs:{navAction:t.navAction}})],1)}),[],!1,null,null,null));e.a=w.exports;installComponents(w,{Particle:o(104).default,ProjectHeader:o(99).default,PhoneNavigator:o(101).default,SocialLinks:o(103).default,Routes:o(100).default,PhoneNavButton:o(102).default})},160:function(t,e,o){"use strict";o(52),o(20),o(22),o(41);var n=o(19),r=(o(8),o(81)),c=o(82),l=o(11),d=o.n(l);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m="https://aghiljv.herokuapp.com/api/posts/",v="https://aghiljv.herokuapp.com/api/blogs/",y=function(){function t(){Object(r.a)(this,t)}return Object(c.a)(t,null,[{key:"getPortfolios",value:function(){return new Promise((function(t,e){try{d.a.get(m).then((function(e){var data=e.data;t(data.map((function(t){return h({},t)})))}))}catch(t){e(t)}}))}},{key:"getPortfolio",value:function(t){return new Promise((function(e,o){try{d.a.get("".concat(m).concat(t)).then((function(t){var data=t.data;e(data.map((function(t){return h({},t)})))}))}catch(t){o(t)}}))}},{key:"getBlogs",value:function(){return new Promise((function(t,e){try{d.a.get(v).then((function(e){var o=e.data;o.map((function(t){return h({},t)})),t(o.reverse())}))}catch(t){e(t)}}))}},{key:"getBlog",value:function(t){return new Promise((function(e,o){try{d.a.get("".concat(v).concat(t)).then((function(t){var o=t.data;e(o.map((function(t){return h({},t)})))}))}catch(t){o(t)}}))}},{key:"insertComment",value:function(t,e,o,n,r){return d.a.post("".concat(v).concat(t),{email:e,name:o,comment:n,date:r})}},{key:"deletePost",value:function(t){return d.a.delete("".concat(m).concat(t))}}]),t}();e.a=y},166:function(t,e,o){o(167),t.exports=o(168)},223:function(t,e,o){"use strict";var n=o(72);o.n(n).a},224:function(t,e,o){(e=o(12)(!1)).push([t.i,"#introAnimComp[data-v-1f59fe06]{position:absolute;height:100%;width:100%;background:#000;opacity:1;display:flex;justify-content:center;align-items:center;flex-direction:column;transition:.5s;z-index:1000}#logoHolder[data-v-1f59fe06]{height:50%;width:50%}#introLogo[data-v-1f59fe06]{position:absolute;height:50%;-webkit-animation:logoAnim-data-v-1f59fe06 10s linear forwards;animation:logoAnim-data-v-1f59fe06 10s linear forwards}#loadingText[data-v-1f59fe06]{position:absolute;bottom:20%;color:#fff;-webkit-animation:pulse-data-v-1f59fe06 1s linear infinite;animation:pulse-data-v-1f59fe06 1s linear infinite}@-webkit-keyframes pulse-data-v-1f59fe06{0%{transform:scale(1)}10%{transform:scale(2)}20%{transform:scale(1)}30%{transform:scale(2)}40%{transform:scale(1)}to{transform:scale(1)}}@keyframes pulse-data-v-1f59fe06{0%{transform:scale(1)}10%{transform:scale(2)}20%{transform:scale(1)}30%{transform:scale(2)}40%{transform:scale(1)}to{transform:scale(1)}}@-webkit-keyframes logoAnim-data-v-1f59fe06{0%{transform:scale(0) rotate(0deg)}20%{transform:scale(1) rotate(1turn)}40%{transform:scale(1) rotate(2turn)}60%{transform:scale(1) rotate(3turn)}80%{transform:scale(1) rotate(4turn)}to{transform:scale(0) rotate(5turn)}}@keyframes logoAnim-data-v-1f59fe06{0%{transform:scale(0) rotate(0deg)}20%{transform:scale(1) rotate(1turn)}40%{transform:scale(1) rotate(2turn)}60%{transform:scale(1) rotate(3turn)}80%{transform:scale(1) rotate(4turn)}to{transform:scale(0) rotate(5turn)}}",""]),t.exports=e},225:function(t,e,o){"use strict";var n=o(73);o.n(n).a},226:function(t,e,o){(e=o(12)(!1)).push([t.i,".headerClass[data-v-0a606e51]{padding:1% 0 1% 5%;transition:.5s;display:flex;align-items:center}.title[data-v-0a606e51]{width:30%;font-size:4vw;transition:.5s;color:var(--active-link-text-color)}@media only screen and (max-width:600px){.headerClass[data-v-0a606e51]{display:flex}.title[data-v-0a606e51]{width:100%;font-size:12vw}}@media only screen and (min-width:600px){.headerClass[data-v-0a606e51],.title[data-v-0a606e51]{display:none}}",""]),t.exports=e},227:function(t,e,o){"use strict";var n=o(74);o.n(n).a},228:function(t,e,o){(e=o(12)(!1)).push([t.i,".routeHolder[data-v-3826f57b]{width:5%;right:0;flex-direction:column;border-left:2px solid var(--color-primary)}.currentRouteHolder[data-v-3826f57b],.routeHolder[data-v-3826f57b]{position:absolute;height:100%;display:flex;z-index:5;justify-content:space-evenly;align-items:center}.currentRouteHolder[data-v-3826f57b]{width:8%;right:5%;color:var(--color-primary)}.indRoute[data-v-3826f57b]{color:var(--link-text-color);text-decoration:none;margin:1%;height:100%;width:200%;font-size:1vw}.indRoute[data-v-3826f57b],.routeCurrentText[data-v-3826f57b]{transform:rotate(90deg);display:flex;justify-content:center;align-items:center}.routeCurrentText[data-v-3826f57b]{font-size:8vw;width:80vw;height:8vw;position:fixed;text-align:center}.nuxt-link-active[data-v-3826f57b]{color:var(--active-link-text-color);font-weight:bolder}",""]),t.exports=e},229:function(t,e,o){"use strict";var n=o(75);o.n(n).a},230:function(t,e,o){(e=o(12)(!1)).push([t.i,".phoneNavClass[data-v-6eee6398]{position:absolute;bottom:-120%;z-index:10;flex-direction:column;justify-content:space-evenly;background:var(--background-color-primary);transition:.5s}.indRoute[data-v-6eee6398],.phoneNavClass[data-v-6eee6398]{width:100%;height:100%;display:flex;align-items:center}.indRoute[data-v-6eee6398]{color:var(--link-text-color);text-decoration:none;margin:1%;justify-content:center}.nuxt-link-active[data-v-6eee6398]{color:var(--active-link-text-color);font-weight:bolder}@media only screen and (min-width:600px){.phoneNavClass[data-v-6eee6398]{display:none}}",""]),t.exports=e},231:function(t,e,o){"use strict";var n=o(76);o.n(n).a},232:function(t,e,o){(e=o(12)(!1)).push([t.i,"#nav-icon[data-v-4801a0d4]{width:12%;height:10vw;transform:rotate(0deg);transition:.5s ease-in-out;cursor:pointer}#nav-icon span[data-v-4801a0d4]{display:block;position:absolute;height:10%;width:100%;background:var(--color-primary);opacity:1;left:0;transform:rotate(0deg);transition:.25s ease-in-out}#nav-icon span[data-v-4801a0d4]:first-child{top:0}#nav-icon span[data-v-4801a0d4]:nth-child(2),#nav-icon span[data-v-4801a0d4]:nth-child(3){top:45%}#nav-icon span[data-v-4801a0d4]:nth-child(4){bottom:0}#nav-icon.open span[data-v-4801a0d4]:first-child{top:30%;width:0;left:50%}#nav-icon.open span[data-v-4801a0d4]:nth-child(2){transform:rotate(45deg)}#nav-icon.open span[data-v-4801a0d4]:nth-child(3){transform:rotate(-45deg)}#nav-icon.open span[data-v-4801a0d4]:nth-child(4){top:30%;width:0;left:50%}",""]),t.exports=e},233:function(t,e,o){"use strict";var n=o(77);o.n(n).a},234:function(t,e,o){(e=o(12)(!1)).push([t.i,".socialClass[data-v-887cf5b6]{position:fixed;display:flex;align-items:center;height:100%;width:3%;z-index:4}.computerScreen[data-v-887cf5b6]{position:absolute;left:-30%}.computerScreen[data-v-887cf5b6],.phoneScreen[data-v-887cf5b6]{font-size:.5vw;color:#fff;transition:.5s;width:100%}.phoneScreen[data-v-887cf5b6]{position:relative;bottom:.5%;z-index:1}ul[data-v-887cf5b6]{list-style-type:none;padding:0;text-align:left;width:100%}li[data-v-887cf5b6]{width:85%;transition:.5s}@media only screen and (max-width:600px){.computerScreen[data-v-887cf5b6]{display:none}.socialClass[data-v-887cf5b6]{align-items:flex-end;width:100%;bottom:1%;height:10vh}ul[data-v-887cf5b6]{display:flex;flex-direction:row;justify-content:center}li[data-v-887cf5b6]{width:12vw}}@media only screen and (min-width:600px){.phoneScreen[data-v-887cf5b6]{display:none}li[data-v-887cf5b6]:hover{transform:translateX(20%)}}",""]),t.exports=e},235:function(t,e,o){"use strict";var n=o(78);o.n(n).a},236:function(t,e,o){(e=o(12)(!1)).push([t.i,"#particles-js[data-v-23f5383b]{background:var(--particle-bg-color);height:100%;width:100%}",""]),t.exports=e},238:function(t,e,o){"use strict";var n=o(79);o.n(n).a},239:function(t,e,o){(e=o(12)(!1)).push([t.i,':root{--color-primary:#fff;--background-color-primary:#000;--header-bg-color:transparent;--link-text-color:#727272;--active-link-text-color:#fff;--active-link-background-color:transparent;--particle-color:#fff;--particle-bg-color:#000;--intro-card-bg:rgba(25,25,25,0.5);--intro-card-pic-border-color:#323232;--intro-card-button-holder-color:rgba(50,50,50,0);--intro-card-shadow:rgba(0,0,0,0.2);--invert-value:invert(0);--start-opacity:0}html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;transition:.5s;background:#000;background:var(--background-color-primary)}*{overflow:hidden;scrollbar-width:none;border:none}*,:after,:before{box-sizing:border-box;margin:0}hr{border:none;height:1px;opacity:.15;background-color:#fff;background-color:var(--color-primary)}a:active,a:focus{outline:0;border:none;-moz-outline-style:none}.container{position:absolute;margin:0 auto 0 5%;min-height:100%;width:80%;flex:100%;z-index:3;overflow:auto}.container,.headerClassMain{color:#fff;color:var(--color-primary)}.headerClassMain{position:fixed;top:0;height:10%;width:100%;z-index:5;text-align:left}.particleClass{position:fixed;height:100%;width:100%;z-index:2}.navButton{position:fixed;bottom:1.5%;z-index:11;right:3%}@media only screen and (max-width:600px){.container{top:10%;min-height:80%;width:90%}#sideRoutes{display:none}}@media only screen and (min-width:600px){.navButton{display:none}}.fade-enter-active{-webkit-animation:fade-in .5s;animation:fade-in .5s}.fade-leave-active{-webkit-animation:fade-out .5s;animation:fade-out .5s}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}',""]),t.exports=e},240:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return n})),o.d(e,"mutations",(function(){return r}));var n=function(){return{blogs:[{_id:"5e95ecc51c9d4400008c50bd",name:"E2E Testing Benefits",titleImage:"060420/e2e",briefdesc:"An article to inspire you to perform End to End Testing in application"}]}},r={add:function(t,data){t.blogs=data}}},241:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return n})),o.d(e,"mutations",(function(){return r}));var n=function(){return{pageTitle:""}},r={set:function(t,data){t.pageTitle=data}}},242:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return n})),o.d(e,"mutations",(function(){return r}));var n=function(){return{portfolios:[{_id:"5e9311b61c9d4400003cf285",name:"Feel",titleImage:"feel",briefdesc:"The application assists the user to determine a car model suited for them according to their lifestyle."}]}},r={add:function(t,data){t.portfolios=data}}},72:function(t,e,o){var content=o(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("33c6f75c",content,!0,{sourceMap:!1})},73:function(t,e,o){var content=o(226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("07ed90aa",content,!0,{sourceMap:!1})},74:function(t,e,o){var content=o(228);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("5f80c867",content,!0,{sourceMap:!1})},75:function(t,e,o){var content=o(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("340efc22",content,!0,{sourceMap:!1})},76:function(t,e,o){var content=o(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("044cc808",content,!0,{sourceMap:!1})},77:function(t,e,o){var content=o(234);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("020f959d",content,!0,{sourceMap:!1})},78:function(t,e,o){var content=o(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("252d8fa8",content,!0,{sourceMap:!1})},79:function(t,e,o){var content=o(239);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("71e447ac",content,!0,{sourceMap:!1})},99:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{themeName:"Light Theme"}},computed:{pageTitle:function(){return this.$store.state.pageTitle.pageTitle}}},r=(o(225),o(3)),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"headerClass"},[e("div",{staticClass:"title"},[this._v(this._s(this.pageTitle))])])}),[],!1,null,"0a606e51",null);e.default=component.exports}},[[166,9,1,10]]]);