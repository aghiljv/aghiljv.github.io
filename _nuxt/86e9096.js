(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{255:function(t,e,o){var content=o(271);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("1c31af88",content,!0,{sourceMap:!1})},256:function(t,e,o){var content=o(273);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("328c3e05",content,!0,{sourceMap:!1})},270:function(t,e,o){"use strict";var n=o(255);o.n(n).a},271:function(t,e,o){(e=o(12)(!1)).push([t.i,".blogContainer[data-v-25344d18]{position:absolute;width:100%;height:100%;overflow:auto;padding-top:5%;-ms-overflow-style:none}.blogContainer[data-v-25344d18]::-webkit-scrollbar{display:none}",""]),t.exports=e},272:function(t,e,o){"use strict";var n=o(256);o.n(n).a},273:function(t,e,o){(e=o(12)(!1)).push([t.i,".blogHolder[data-v-a07b12fa]{width:100%;height:30%;display:flex;justify-content:space-between;align-items:center;padding:1% 0;text-decoration:none;color:var(--primary-color)}#blogDisplay[data-v-a07b12fa]{opacity:1;transition:.5s}.blogImageHolder[data-v-a07b12fa]{position:relative;height:100%;width:30%;display:flex;justify-content:center;align-items:center}.blogImage[data-v-a07b12fa]{width:100%;transition:.5s}.blogItem[data-v-a07b12fa]{position:relative;height:50%;width:70%;padding:1%}.blogName[data-v-a07b12fa]{text-align:left;font-size:2vw}.blogDesc[data-v-a07b12fa]{font-size:1vw}@media only screen and (max-width:600px){.blogHolder[data-v-a07b12fa]{flex-direction:column;height:auto;padding:5% 0}.blogImageHolder[data-v-a07b12fa],.blogItem[data-v-a07b12fa]{width:100%}.blogName[data-v-a07b12fa]{font-size:5vw}.blogDesc[data-v-a07b12fa]{font-size:3vw}}@media only screen and (min-width:600px){.blogHolder:hover .blogImage[data-v-a07b12fa]{transform:scale(1.1)}}",""]),t.exports=e},310:function(t,e,o){"use strict";o.r(e);var n={props:["blogName","blogImage","blogBrief","blog"]},l=(o(272),o(3)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nuxt-link",{staticClass:"blogHolder",attrs:{id:"blogDisplay",to:"/blog/"+t.blog.slug}},[o("div",{staticClass:"blogImageHolder"},[o("img",{staticClass:"blogImage",attrs:{src:"/img/blog/"+t.blogImage+".jpg",alt:"blogImage"}})]),t._v(" "),o("div",{staticClass:"blogItem"},[o("div",{staticClass:"blogName"},[t._v(t._s(t.blogName))]),t._v(" "),o("div",{staticClass:"blogDesc"},[t._v(t._s(t.blogBrief))])])])}),[],!1,null,"a07b12fa",null);e.default=component.exports},320:function(t,e,o){"use strict";o.r(e);o(29);var n=o(2),l={transition:"fade",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,e.next=3,o("blogs").only(["name","titleImage","briefdesc","createdAt","slug"]).sortBy("createdAt","desc").fetch();case 3:return n=e.sent,e.abrupt("return",{blogs:n});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{scrollState:null,swipeState:null,scrollDirecton:0,currentIndex:0,minIndex:0,error:"",currentDeltaY:0,firstLoad:!0}},head:function(){return{title:"Blog | Aghil Jose | Full Stack Engineer",meta:[{hid:"og:image",property:"og:image",content:"/img/common/ogMain.jpg"},{hid:"og:description",name:"og:description",content:"The blog of Aghil Jose | Full Stack Engineer"},{hid:"og:type",name:"og:type",content:"blog"},{hid:"twitter:card",property:"twitter:card",content:"/img/common/ogMain.jpg"},{hid:"twitter:site",property:"twitter:site",content:"https://aghiljose.com/"}]}},created:function(){this.$store.commit("pageTitle/set","BLOG")},mounted:function(){document.getElementById("mainContent").addEventListener("wheel",this.handleScroll)},methods:{handleScroll:function(t){this.firstLoad=!1,t.deltaY<-20?this.scrollState="up":t.deltaY>20&&(this.scrollState="down"),-1!=t.deltaY&&1!=t.deltaY||(this.scrollState=null)},switchblog:function(t){document.getElementById("blogDisplay").style.opacity=t},swipeUpAction:function(){var t=this;this.scrollState="up",setTimeout((function(){t.scrollState=null}),500)},swipeDownAction:function(){var t=this;this.scrollState="down",setTimeout((function(){t.scrollState=null}),500)}},watch:{scrollState:function(){var t=this;"up"==this.scrollState?this.currentIndex>0&&setTimeout((function(){t.currentIndex--}),500):"down"==this.scrollState&&this.currentIndex<this.maxIndex-1&&setTimeout((function(){t.currentIndex++}),500)}},computed:{maxIndex:function(){return this.$store.state.blogs.blogs.length}}},r=(o(270),o(3)),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:this.swipeUpAction,expression:"swipeUpAction",arg:"swipe",modifiers:{right:!0}},{name:"touch",rawName:"v-touch:swipe.left",value:this.swipeDownAction,expression:"swipeDownAction",arg:"swipe",modifiers:{left:!0}}],staticClass:"blogContainer"},this._l(this.blogs,(function(t,o){return e("BlogMain",{key:o,attrs:{item:t,index:o,blogName:t.name,blogImage:t.titleImage,blogBrief:t.briefdesc,blog:t}})})),1)])}),[],!1,null,"25344d18",null);e.default=component.exports;installComponents(component,{BlogMain:o(310).default})}}]);