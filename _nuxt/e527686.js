(window.webpackJsonp=window.webpackJsonp||[]).push([[17,5],{383:function(t,e,o){var content=o(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("7e273b58",content,!0,{sourceMap:!1})},396:function(t,e,o){"use strict";o(383)},397:function(t,e,o){var n=o(23)((function(i){return i[1]}));n.push([t.i,".blogHolder[data-v-6aaec318]{align-items:center;color:var(--primary-color);display:flex;height:30%;justify-content:space-between;padding:1% 0;-webkit-text-decoration:none;text-decoration:none;width:100%}#blogDisplay[data-v-6aaec318]{opacity:1;transition:.5s}.blogImageHolder[data-v-6aaec318]{align-items:center;display:flex;justify-content:center;position:relative;width:30%}.blogImage[data-v-6aaec318]{transition:.5s;width:100%}.blogItem[data-v-6aaec318]{height:50%;padding:1%;position:relative;width:70%}.blogName[data-v-6aaec318]{font-size:2vw;text-align:left}.blogDesc[data-v-6aaec318]{font-size:1vw}@media only screen and (max-width:1025px){.blogHolder[data-v-6aaec318]{height:auto;justify-content:space-evenly;padding:5% 0}.blogItem[data-v-6aaec318]{width:50%}}@media only screen and (max-width:600px){.blogHolder[data-v-6aaec318]{flex-direction:column;height:auto;padding:5% 0}.blogImageHolder[data-v-6aaec318],.blogItem[data-v-6aaec318]{width:100%}.blogName[data-v-6aaec318]{font-size:x-large}.blogDesc[data-v-6aaec318]{font-size:medium}}@media only screen and (min-width:600px){.blogHolder:hover .blogImage[data-v-6aaec318]{transform:scale(1.1)}}",""]),n.locals={},t.exports=n},412:function(t,e,o){var content=o(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("1fe1d91d",content,!0,{sourceMap:!1})},424:function(t,e,o){"use strict";o.r(e);var n={props:["blogName","blogImage","blogBrief","blog"]},l=(o(396),o(10)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("nuxt-link",{staticClass:"blogHolder",attrs:{id:"blogDisplay",to:"/blog/".concat(t.blog.slug)}},[e("div",{staticClass:"blogImageHolder"},[e("picture",[e("source",{attrs:{srcset:"/img/blog/".concat(t.blogImage,".webp"),type:"image/webp"}}),t._v(" "),e("img",{staticClass:"blogImage",attrs:{src:"/img/blog/".concat(t.blogImage,".jpg"),alt:"Blog image"}})])]),t._v(" "),e("div",{staticClass:"blogItem"},[e("div",{staticClass:"blogName"},[t._v(t._s(t.blogName))]),t._v(" "),e("div",{staticClass:"blogDesc"},[t._v(t._s(t.blogBrief))])])])}),[],!1,null,"6aaec318",null);e.default=component.exports},432:function(t,e,o){"use strict";o(412)},433:function(t,e,o){var n=o(23)((function(i){return i[1]}));n.push([t.i,".blogContainer[data-v-3d6eb68e]{-ms-overflow-style:none;height:100%;overflow:auto;padding-top:5%;position:absolute;width:100%}.blogContainer[data-v-3d6eb68e]::-webkit-scrollbar{display:none}",""]),n.locals={},t.exports=n},466:function(t,e,o){"use strict";o.r(e);o(18);var n=o(7),l=(o(46),o(37),{transition:"fade",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,e.next=3,o("blogs").only(["name","titleImage","briefdesc","createdAt","slug","blogNumber"]).sortBy("blogNumber","desc").fetch();case 3:return n=e.sent,e.abrupt("return",{blogs:n});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{scrollState:null,swipeState:null,scrollDirecton:0,currentIndex:0,minIndex:0,error:"",currentDeltaY:0,firstLoad:!0}},head:function(){return{title:"Blog | Aghil Jose | Full Stack Engineer",meta:[{hid:"og:title",property:"og:title",content:"Blog | Aghil Jose | Full Stack Engineer"},{hid:"og:image",property:"og:image",content:"/img/common/ogMain.jpg"},{hid:"og:description",name:"og:description",content:"The blog of Aghil Jose | Full Stack Engineer"},{hid:"og:type",name:"og:type",content:"blog"},{hid:"twitter:card",property:"twitter:card",content:"/img/common/ogMain.jpg"},{hid:"twitter:site",property:"twitter:site",content:"https://aghiljose.com/"}]}},created:function(){this.$store.commit("pageTitle/set","BLOG")},mounted:function(){document.getElementById("mainContent").addEventListener("wheel",this.handleScroll)},methods:{handleScroll:function(t){this.firstLoad=!1,t.deltaY<-20?this.scrollState="up":t.deltaY>20&&(this.scrollState="down"),-1!=t.deltaY&&1!=t.deltaY||(this.scrollState=null)},switchblog:function(t){document.getElementById("blogDisplay").style.opacity=t},swipeUpAction:function(){var t=this;this.scrollState="up",setTimeout((function(){t.scrollState=null}),500)},swipeDownAction:function(){var t=this;this.scrollState="down",setTimeout((function(){t.scrollState=null}),500)}},watch:{scrollState:function(){var t=this;"up"==this.scrollState?this.currentIndex>0&&setTimeout((function(){t.currentIndex--}),500):"down"==this.scrollState&&this.currentIndex<this.maxIndex-1&&setTimeout((function(){t.currentIndex++}),500)}},computed:{maxIndex:function(){return this.$store.state.blogs.blogs.length}}}),r=(o(432),o(10)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:t.swipeUpAction,expression:"swipeUpAction",arg:"swipe",modifiers:{right:!0}},{name:"touch",rawName:"v-touch:swipe.left",value:t.swipeDownAction,expression:"swipeDownAction",arg:"swipe",modifiers:{left:!0}}],staticClass:"blogContainer"},t._l(t.blogs,(function(t,o){return e("BlogMain",{key:o,attrs:{item:t,index:o,blogName:t.name,blogImage:t.titleImage,blogBrief:t.briefdesc,blog:t}})})),1)])}),[],!1,null,"3d6eb68e",null);e.default=component.exports;installComponents(component,{BlogMain:o(424).default})}}]);