(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{277:function(t,e,o){var content=o(308);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("4fd09948",content,!0,{sourceMap:!1})},278:function(t,e,o){var content=o(310);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("0bd3431b",content,!0,{sourceMap:!1})},307:function(t,e,o){"use strict";var n=o(277);o.n(n).a},308:function(t,e,o){(e=o(11)(!1)).push([t.i,".contentContainer[data-v-94ee6300]{position:absolute;overflow:auto;height:100vh;width:100%;display:grid;grid-template-rows:5fr 4fr}.homeTitle[data-v-94ee6300]{position:relative;font-size:10vw;padding:0 0 0 5%}.newLogo[data-v-94ee6300]{position:absolute;height:20vw;width:20vw;top:10%;right:0;display:flex}.skillAndLogo[data-v-94ee6300]{position:relative;display:grid;grid-template-columns:6fr 0fr}.logoImg[data-v-94ee6300]{-o-object-fit:contain;object-fit:contain;filter:var(--invert-value)}.logoHolder[data-v-94ee6300]{display:flex;justify-content:center}.skillHolder[data-v-94ee6300]{display:grid;grid-template-columns:repeat(9,auto);justify-content:space-evenly;align-content:space-evenly;padding:2%}.skillClass[data-v-94ee6300]{padding:2%;display:inline-block;transition:.5s}.skillImageHolder[data-v-94ee6300]{height:4vw;width:3vw;display:grid;grid-template-rows:3fr 1fr}.skillImageHolder span[data-v-94ee6300]{font-size:70%;text-align:center;transition:.5s;opacity:0}.skillImageHolder[data-v-94ee6300] :hover,.skillImageHolder :hover+span[data-v-94ee6300]{opacity:1}.skillLogo[data-v-94ee6300]{width:inherit}.latestPostsHeader[data-v-94ee6300]{font-weight:700}.latestPostList[data-v-94ee6300]{height:100%;display:grid;grid-template-columns:repeat(4,auto);align-items:center}@media only screen and (max-width:600px){.contentContainer[data-v-94ee6300]{height:72vh;grid-template-rows:2.5fr 5.5fr}.homeTitle[data-v-94ee6300]{font-size:14vw;padding:0;margin:0}.skillAndLogo[data-v-94ee6300]{top:0;grid-template-rows:1fr 1fr;grid-template-columns:auto}.skillHolder[data-v-94ee6300]{padding:0;grid-template-columns:repeat(6,auto)}.skillImageHolder[data-v-94ee6300]{height:10vw;width:8vw;align-self:center}.skillImageHolder span[data-v-94ee6300]{font-size:55%}.newLogo[data-v-94ee6300]{display:none}}@media only screen and (min-width:600px){.logoHolder[data-v-94ee6300]{display:none}}",""]),t.exports=e},309:function(t,e,o){"use strict";var n=o(278);o.n(n).a},310:function(t,e,o){(e=o(11)(!1)).push([t.i,".blogHolder[data-v-81778d3e]{width:100%;height:85%;display:grid;padding:5%;text-decoration:none;color:var(--primary-color);grid-auto-rows:4fr 3fr;opacity:1;transition:.5s}.blogImageHolder[data-v-81778d3e]{position:relative;height:100%;width:100%;display:flex;justify-content:center;align-items:center}.blogImage[data-v-81778d3e]{width:100%;transition:.5s}.blogItem[data-v-81778d3e]{position:relative;height:100%;width:100%;padding:1%}.blogName[data-v-81778d3e]{text-align:left;font-size:1vw;font-weight:700}.blogDesc[data-v-81778d3e]{font-size:.8vw}@media only screen and (max-width:600px){.blogHolder[data-v-81778d3e]{grid-auto-rows:5fr 10fr}.blogImageHolder[data-v-81778d3e],.blogItem[data-v-81778d3e]{width:100%}.blogName[data-v-81778d3e]{font-size:3vw}.blogDesc[data-v-81778d3e]{font-size:2vw}}@media only screen and (min-width:600px){.blogHolder:hover .blogImage[data-v-81778d3e]{transform:scale(1.1)}}",""]),t.exports=e},329:function(t,e,o){"use strict";o.r(e);var n={props:["blogs"]},l=(o(307),o(3)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contentContainer"},[t._m(0),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"skillAndLogo"},[o("div",{staticClass:"latestPosts"},[o("div",{staticClass:"latestPostsHeader"},[t._v("Latest Posts")]),t._v(" "),o("div",{staticClass:"latestPostList"},t._l(t.blogs,(function(t,e){return o("BlogNotify",{key:e,attrs:{item:t,blogName:t.name,blogImage:t.titleImage,blogBrief:t.briefdesc,blog:t}})})),1)]),t._v(" "),t._m(2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"homeTitle"},[e("p",{attrs:{id:"homeTitle1"}},[this._v("FULL STACK")]),this._v(" "),e("p",{attrs:{id:"homeTitle2"}},[this._v("ENGINEER")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"newLogo"},[e("img",{staticClass:"logoImg",attrs:{id:"homeLogoID1",src:"/img/common/aghiljvnewlogo.png",alt:"Aghil Jose Logo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logoHolder"},[e("img",{staticClass:"logoImg",attrs:{id:"homeLogoID2",src:"/img/common/aghiljvnewlogo.png",alt:"Aghil Jose Logo"}})])}],!1,null,"94ee6300",null);e.default=component.exports;installComponents(component,{BlogNotify:o(331).default})},331:function(t,e,o){"use strict";o.r(e);var n={props:["blogName","blogImage","blogBrief","blog"]},l=(o(309),o(3)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nuxt-link",{staticClass:"blogHolder",attrs:{to:"/blog/"+t.blog.slug}},[o("div",{staticClass:"blogImageHolder"},[o("img",{staticClass:"blogImage",attrs:{src:"/img/blog/"+t.blogImage+".jpg",alt:"blogImage"}})]),t._v(" "),o("div",{staticClass:"blogItem"},[o("div",{staticClass:"blogName"},[t._v(t._s(t.blogName))]),t._v(" "),o("div",{staticClass:"blogDesc"},[t._v(t._s(t.blogBrief))])])])}),[],!1,null,"81778d3e",null);e.default=component.exports},341:function(t,e,o){"use strict";o.r(e);o(14);var n=o(2),l={transition:"fade",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,e.next=3,o("blogs").only(["name","titleImage","briefdesc","createdAt","slug"]).sortBy("createdAt","desc").limit(4).fetch();case 3:return n=e.sent,e.abrupt("return",{blogs:n});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{title:"Aghil Jose | Full Stack Engineer"}},head:function(){return{title:"Aghil Jose | Full Stack Engineer",meta:[{hid:"og:title",property:"og:title",content:"Aghil Jose | Full Stack Engineer"},{hid:"description",name:"description",content:"The blog and portfolio of Aghil Jose | Full Stack Engineer"},{hid:"og:image",property:"og:image",content:"/img/common/ogMain.jpg"},{hid:"og:description",name:"og:description",content:"The blog and portfolio of Aghil Jose | Full Stack Engineer"},{hid:"twitter:card",property:"twitter:card",content:"/img/common/ogMain.jpg"},{hid:"twitter:site",property:"twitter:site",content:"https://aghiljose.com/"}]}},created:function(){this.$store.commit("pageTitle/set","HOME")},mounted:function(){},methods:{introAnimRemove:function(){document.getElementById("introAnimComp").style.opacity=0,setTimeout(this.sendElementDown,1e3)},sendElementDown:function(){document.getElementById("introAnimComp").style.display="none"}}},r=o(3),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("HomePage",{attrs:{blogs:this.blogs}})],1)}),[],!1,null,"46c18fdf",null);e.default=component.exports;installComponents(component,{HomePage:o(329).default})}}]);