(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{267:function(t,e,o){var content=o(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("901c3424",content,!0,{sourceMap:!1})},268:function(t,e,o){var content=o(290);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("cac37bb6",content,!0,{sourceMap:!1})},269:function(t,e,o){var content=o(292);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("7c22a04f",content,!0,{sourceMap:!1})},287:function(t,e,o){"use strict";var n=o(267);o.n(n).a},288:function(t,e,o){(e=o(11)(!1)).push([t.i,".portfolioContainer[data-v-3a468735]{position:absolute;width:100%;height:100%;overflow:auto;bottom:0;justify-content:space-around;align-items:center}.portfolioContainer[data-v-3a468735]::-webkit-scrollbar{display:none}.portContentContainer[data-v-3a468735]{position:fixed;height:100%;width:100%;left:0}.portNavContainer[data-v-3a468735]{position:absolute;width:50%;right:0;top:10%;margin:1%;overflow:auto;-ms-overflow-style:none}@media only screen and (max-width:600px){.portNavContainer[data-v-3a468735]{width:100%}.portContentContainer[data-v-3a468735]{display:none}}",""]),t.exports=e},289:function(t,e,o){"use strict";var n=o(268);o.n(n).a},290:function(t,e,o){(e=o(11)(!1)).push([t.i,".portfolioHolder[data-v-52255476]{height:100%;display:inline-flex}.portfolioHolder[data-v-52255476],.portImageHolder[data-v-52255476]{align-items:center;justify-content:center;width:100%}.portImageHolder[data-v-52255476]{height:60%;display:flex;font-size:2.5vw;opacity:1;transition:.5s}.portImage[data-v-52255476]{width:100%;height:100%;transition:.5s;-o-object-fit:contain;object-fit:contain}.portfolioItem[data-v-52255476]{position:absolute;top:10%;left:5%;height:80%;width:50%;padding:1%;text-align:center;display:flex;flex-direction:column;justify-content:space-around;align-items:center;z-index:-1}.portName[data-v-52255476]{text-align:left;font-size:5vw;width:100%;justify-content:center;display:flex}.portfolioDesc[data-v-52255476],.portName[data-v-52255476],.portNumber[data-v-52255476]{transition:.5s}.portNumber[data-v-52255476]{font-size:1vw;width:100%;display:flex;justify-content:center;align-items:center}@media only screen and (max-width:600px){.portfolioHolder[data-v-52255476]{flex-direction:column;height:60%;padding:5% 0}.portImageHolder[data-v-52255476]{width:100%;font-size:5.5vw}.portfolioItem[data-v-52255476]{width:100%}}",""]),t.exports=e},291:function(t,e,o){"use strict";var n=o(269);o.n(n).a},292:function(t,e,o){(e=o(11)(!1)).push([t.i,".portfolioNavHolder[data-v-3ed3fe3c]{text-decoration:none;flex-direction:column}.portfolioNavHolder[data-v-3ed3fe3c],.portImageHolder[data-v-3ed3fe3c]{height:100%;display:flex;align-items:center;width:100%;transition:.5s}.portImageHolder[data-v-3ed3fe3c]{position:relative;justify-content:flex-end;opacity:1;margin:1%;filter:grayscale(1);letter-spacing:2px;font-size:2.5vw;text-transform:uppercase;-webkit-text-stroke:1px var(--color-primary);-webkit-text-fill-color:hsla(0,0%,100%,0);z-index:0}.portTechs[data-v-3ed3fe3c]{color:var(--color-primary);align-self:flex-end;opacity:0;transition:.5s}.portImageHolder[data-v-3ed3fe3c]:hover{filter:grayscale(0);-webkit-text-fill-color:var(--color-primary);letter-spacing:0;z-index:6}.portImageHolder:hover+.portTechs[data-v-3ed3fe3c]{opacity:1}.portImage[data-v-3ed3fe3c]{width:100%;transition:.5s}.portName[data-v-3ed3fe3c]{font-size:2vw}@media only screen and (max-width:600px){.portImageHolder[data-v-3ed3fe3c]{font-size:5.5vw}.portTechs[data-v-3ed3fe3c]{opacity:1}}",""]),t.exports=e},325:function(t,e,o){"use strict";o.r(e);var n={props:["portfolioName","portfolioImage","portfolioBrief","index","activePortIndex"]},r=(o(289),o(3)),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"portfolioHolder",attrs:{id:"portfolioDisplay"}},[e("div",{staticClass:"portfolioItem",style:[this.index==this.activePortIndex?{opacity:"1","z-index":"10"}:{opacity:"0"}],attrs:{id:"portfolioItem"+this.index}},[e("div",{staticClass:"portImageHolder"},[e("img",{staticClass:"portImage",attrs:{src:"/img/portfolio/"+this.portfolioImage+"hover.jpg",alt:"portfolioImage"}})])])])}),[],!1,null,"52255476",null);e.default=component.exports},326:function(t,e,o){"use strict";o.r(e);var n={props:["portfolioName","portfolioImage","portfolioTechs","index"],methods:{activePort:function(t){this.$emit("setActiveOpacity",t)},mouseMove:function(t){this.$emit("setDetPos",t)}}},r=(o(291),o(3)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nuxt-link",{staticClass:"portfolioNavHolder",attrs:{id:"portNav"+t.index,to:"/portfolio/"+t.portfolioName}},[o("div",{staticClass:"portImageHolder",on:{mousemove:function(e){return t.mouseMove(e)},mouseover:function(e){return t.activePort(t.index)},mouseleave:function(e){return t.activePort(-1)}}},[t._v("\n    "+t._s(t.portfolioName)+"\n  ")]),t._v(" "),o("div",{staticClass:"portTechs"},[t._v(t._s(t.portfolioTechs))])])}),[],!1,null,"3ed3fe3c",null);e.default=component.exports},336:function(t,e,o){"use strict";o.r(e);o(14);var n=o(2),r={transition:"fade",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,e.next=3,o("portfolios").only(["name","titleImage","technologies","createdAt","slug"]).sortBy("createdAt","asc").fetch();case 3:return n=e.sent,e.abrupt("return",{portfolios:n});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{scrollState:null,swipeState:null,scrollDirecton:0,currentIndex:0,minIndex:0,error:"",currentDeltaY:0,firstLoad:!0,activePortIndex:-1}},head:function(){return{title:"Portfolio | Aghil Jose | Full Stack Engineer",meta:[{hid:"og:image",property:"og:image",content:"/img/common/ogMain.jpg"},{hid:"og:description",name:"og:description",content:"The portfolio of Aghil Jose | Full Stack Engineer"},{hid:"og:type",name:"og:type",content:"portfolio"},{hid:"twitter:card",property:"twitter:card",content:"/img/common/ogMain.jpg"},{hid:"twitter:site",property:"twitter:site",content:"https://aghiljose.com/"}]}},created:function(){this.$store.commit("pageTitle/set","PORTFOLIO")},mounted:function(){document.getElementById("mainContent").addEventListener("wheel",this.handleScroll)},methods:{handleScroll:function(t){this.firstLoad=!1,t.deltaY<-20?this.scrollState="up":t.deltaY>20&&(this.scrollState="down"),-1!=t.deltaY&&1!=t.deltaY||(this.scrollState=null)},switchPortfolio:function(t){document.getElementById("portfolioDisplay").style.opacity=t},swipeUpAction:function(){var t=this;this.scrollState="up",setTimeout((function(){t.scrollState=null}),500)},swipeDownAction:function(){var t=this;this.scrollState="down",setTimeout((function(){t.scrollState=null}),500)},setActiveOpacity:function(t){this.activePortIndex=t},setDetPos:function(t){var e="portNav"+this.activePortIndex,o="portfolioItem"+this.activePortIndex,n=document.getElementById(e).clientWidth/2,r=(document.getElementById(e).clientHeight/2-t.offsetY)/-50,l=(n-t.offsetX)/-20;document.getElementById(o).style.transform="translate("+l+"%, "+r+"%)"}},watch:{scrollState:function(){var t=this;"up"==this.scrollState?this.currentIndex>0&&setTimeout((function(){t.currentIndex--}),500):"down"==this.scrollState&&this.currentIndex<this.maxIndex-1&&setTimeout((function(){t.currentIndex++}),500)}},computed:{maxIndex:function(){return this.$store.state.portfolios.portfolios.length}}},l=(o(287),o(3)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:t.swipeUpAction,expression:"swipeUpAction",arg:"swipe",modifiers:{right:!0}},{name:"touch",rawName:"v-touch:swipe.left",value:t.swipeDownAction,expression:"swipeDownAction",arg:"swipe",modifiers:{left:!0}}],staticClass:"portfolioContainer"},[o("div",{staticClass:"portContentContainer"},t._l(t.portfolios,(function(e,n){return o("PortfolioMain",{key:e._id,attrs:{item:e,index:n,portfolioName:e.name,portfolioImage:e.titleImage,activePortIndex:t.activePortIndex}})})),1),t._v(" "),o("div",{staticClass:"portNavContainer"},t._l(t.portfolios,(function(e,n){return o("PortfolioNav",{key:n,attrs:{index:n,portfolioName:e.name,portfolioImage:e.titleImage,portfolioTechs:e.technologies},on:{setActiveOpacity:function(e){return t.setActiveOpacity(e)},setDetPos:function(e){return t.setDetPos(e)}}})})),1)])])}),[],!1,null,"3a468735",null);e.default=component.exports;installComponents(component,{PortfolioMain:o(325).default,PortfolioNav:o(326).default})}}]);