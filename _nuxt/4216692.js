(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{474:function(t,e,r){"use strict";r.r(e);r(49),r(252);var c={beforeDestroy:function(){this.$recaptcha.destroy()},methods:{onError:function(t){return this.$emit("error",t)},onSuccess:function(t){return this.$emit("success",t)},onExpired:function(){return this.$emit("expired")}},mounted:function(){this.$recaptcha.init(),this.$recaptcha.on("recaptcha-error",this.onError),this.$recaptcha.on("recaptcha-success",this.onSuccess),this.$recaptcha.on("recaptcha-expired",this.onExpired)},props:{dataTheme:{default:"light",type:String,validator:function(t){return["dark","light"].includes(t)}},dataSize:{default:"normal",type:String,validator:function(t){return["compact","normal","invisible"].includes(t)}},dataBadge:{default:"bottomright",type:String,validator:function(t){return["bottomright","bottomleft","inline"].includes(t)}},dataTabindex:{default:0,type:Number}}},n=r(10),component=Object(n.a)(c,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"g-recaptcha",attrs:{"data-sitekey":t.$recaptcha.siteKey,"data-size":t.$recaptcha.size||t.dataSize,"data-theme":t.dataTheme,"data-badge":t.dataBadge,"data-tabindex":t.dataTabindex,"data-callback":"recaptchaSuccessCallback","data-expired-callback":"recaptchaExpiredCallback","data-error-callback":"recaptchaErrorCallback"}})}),[],!1,null,null,null);e.default=component.exports}}]);