(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{308:function(e,t,n){var content=n(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("379eed8d",content,!0,{sourceMap:!1})},341:function(e,t,n){"use strict";n(308)},342:function(e,t,n){var r=n(15)(!1);r.push([e.i,".commentsInputHeader[data-v-376266f2]{font-size:x-large;font-weight:700}.inputElements[data-v-376266f2]{background:transparent;color:var(--color-primary)}.inputElements[data-v-376266f2],.postButton[data-v-376266f2]{width:100%;height:2.5vw;outline:none;border:1px solid var(--color-primary);padding-left:2.5%}.postButton[data-v-376266f2]{background:var(--color-primary);color:var(--background-color-primary);font-weight:700}.recaptchaHolder[data-v-376266f2]{display:flex;justify-content:center}@media only screen and (max-width:1025px){.inputElements[data-v-376266f2],.postButton[data-v-376266f2]{width:99%;height:5vw}}@media only screen and (max-width:600px){.commentsInputHeader[data-v-376266f2]{font-size:large}.inputElements[data-v-376266f2],.postButton[data-v-376266f2]{height:10vw}}",""]),e.exports=r},375:function(e,t,n){"use strict";n.r(t);var r=n(2),o=(n(22),n(46),n(79)),c={props:["blogId"],data:function(){return{commentInputText:"",nameInputText:"",emailInputText:"",recaptchaSuccess:!1,buttonDisabled:!1}},methods:{addComment:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.commentInputText.length>0&&0!=e.commentInputText.replace(/\s/g,"").length&&e.nameInputText.length>0&&0!=e.nameInputText.replace(/\s/g,"").length&&e.emailInputText.length>0&&/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.emailInputText)&&e.recaptchaSuccess)){t.next=13;break}return e.buttonDisabled=!0,t.next=4,o.a.insertComment(e.blogId,e.emailInputText,e.nameInputText,e.commentInputText,(new Date).toGMTString());case 4:e.emailInputText="",e.nameInputText="",e.commentInputText="",e.resetCaptcha(),e.$toast.show("Comment Posted!"),e.$emit("newComment"),e.buttonDisabled=!1,t.next=18;break;case 13:0==e.commentInputText.length?e.$toast.error("Enter a comment!!!"):0==e.commentInputText.replace(/\s/g,"").length&&e.$toast.error("Please enter some actual comments"),0==e.nameInputText.length?e.$toast.error("Provide Name!!!"):0==e.nameInputText.replace(/\s/g,"").length&&e.$toast.error("Please enter your name"),0==e.emailInputText.length?e.$toast.error("Provide Email!!! It will not be published."):/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.emailInputText)||e.$toast.error("Invalid E-mail"),e.recaptchaSuccess||e.commentInputText.replace(/\s/g,"").length,e.$toast.error("Check the 'I'm not a robot' box'");case 18:case"end":return t.stop()}}),t)})))()},onError:function(){console.error("minor error")},resetCaptcha:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$recaptcha.getResponse();case 3:return t.sent,t.next=6,e.$recaptcha.reset();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Error:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},onSuccess:function(e){this.recaptchaSuccess=!0},onExpired:function(){this.recaptchaSuccess=!1},validateEmail:function(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)||(alert("You have entered an invalid email address!"),!1)}}},m=(n(341),n(3)),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"commentsInputHeader"},[e._v("Leave a comment")]),e._v(" "),n("br"),e._v("All fields are mandatory. Your email id won't be published!\n  "),n("br"),e._v(" "),n("br"),e._v(" "),n("form",{attrs:{id:"commentsIn"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.commentInputText,expression:"commentInputText"}],staticClass:"inputElements",attrs:{type:"text",id:"comment",name:"comment",placeholder:"Comment"},domProps:{value:e.commentInputText},on:{input:function(t){t.target.composing||(e.commentInputText=t.target.value)}}}),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nameInputText,expression:"nameInputText"}],staticClass:"inputElements",attrs:{type:"text",id:"name",name:"name",placeholder:"Name"},domProps:{value:e.nameInputText},on:{input:function(t){t.target.composing||(e.nameInputText=t.target.value)}}}),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.emailInputText,expression:"emailInputText"}],staticClass:"inputElements",attrs:{type:"text",id:"email",name:"email",placeholder:"E-mail"},domProps:{value:e.emailInputText},on:{input:function(t){t.target.composing||(e.emailInputText=t.target.value)}}}),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"recaptchaHolder"},[n("recaptcha",{on:{error:e.onError,success:e.onSuccess,expired:e.onExpired}})],1),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"postOption"},[n("button",{staticClass:"postButton",attrs:{type:"button",disabled:e.buttonDisabled},on:{click:e.addComment}},[e._v("\n        Post Comment\n      ")]),e._v(" "),n("br"),e._v(" "),n("br")])])])}),[],!1,null,"376266f2",null);t.default=component.exports}}]);