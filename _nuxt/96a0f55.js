(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{385:function(t,o,e){var content=e(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(24).default)("7f9bbe48",content,!0,{sourceMap:!1})},400:function(t,o,e){"use strict";e(385)},401:function(t,o,e){var r=e(23)((function(i){return i[1]}));r.push([t.i,".portfolioNavHolder[data-v-5f34b510]{flex-direction:column;-webkit-text-decoration:none;text-decoration:none}.portImageHolder[data-v-5f34b510],.portfolioNavHolder[data-v-5f34b510]{align-items:center;display:flex;height:100%;transition:.5s;width:100%}.portImageHolder[data-v-5f34b510]{-webkit-text-stroke:1px var(--color-primary);-webkit-text-fill-color:hsla(0,0%,100%,0);filter:grayscale(1);font-size:2.5vw;justify-content:flex-end;letter-spacing:2px;margin:1%;opacity:1;position:relative;text-transform:uppercase;z-index:0}.portTechs[data-v-5f34b510]{align-self:flex-end;color:var(--color-primary);opacity:0;transition:.5s}.portImageHolder[data-v-5f34b510]:hover{-webkit-text-fill-color:var(--color-primary);filter:grayscale(0);letter-spacing:0;z-index:6}.portImageHolder:hover+.portTechs[data-v-5f34b510]{opacity:1}.portImage[data-v-5f34b510]{transition:.5s;width:100%}.portName[data-v-5f34b510]{font-size:2vw}@media only screen and (max-width:600px){.portImageHolder[data-v-5f34b510]{font-size:5.5vw}.portTechs[data-v-5f34b510]{opacity:1}.portfolioNavHolder[data-v-5f34b510]{margin-bottom:2.5vh}}",""]),r.locals={},t.exports=r},426:function(t,o,e){"use strict";e.r(o);var r={props:["portfolioName","portfolioImage","portfolioTechs","index"],methods:{activePort:function(t){this.$emit("setActiveOpacity",t)},mouseMove:function(t){this.$emit("setDetPos",t)}}},n=(e(400),e(10)),component=Object(n.a)(r,(function(){var t=this,o=t._self._c;return o("nuxt-link",{staticClass:"portfolioNavHolder",attrs:{id:"portNav"+t.index,to:"/portfolio/"+t.portfolioName}},[o("div",{staticClass:"portImageHolder",on:{mousemove:function(o){return t.mouseMove(o)},mouseover:function(o){return t.activePort(t.index)},mouseleave:function(o){return t.activePort(-1)}}},[t._v("\n    "+t._s(t.portfolioName)+"\n  ")]),t._v(" "),o("div",{staticClass:"portTechs"},[t._v(t._s(t.portfolioTechs))])])}),[],!1,null,"5f34b510",null);o.default=component.exports}}]);