(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    154: function (t, e, o) {
      "use strict";
      var n = o(0);
      window.onNuxtReady(function () {
        var t = o(372);
        n.a.use(t);
      });
    },
    155: function (t, e, o) {
      "use strict";
      var n = o(0),
        r = o(245),
        c = o.n(r);
      n.a.use(c.a);
    },
    156: function (t, e, o) {
      "use strict";
      e.a = function (t, e) {
        var o,
          i,
          s,
          n,
          r,
          a,
          c,
          l = t.app,
          d = !1;
        e("gaPermissions", function (t, e) {
          return (
            (d = e),
            ga("create", t, "auto"),
            ga("set", "anonymizeIp", !0),
            ga("set", "page", o.fullPath),
            void ga("send", "pageview")
          );
        }),
          (i = window),
          (s = document),
          (n = "script"),
          (r = "ga"),
          (i.GoogleAnalyticsObject = r),
          (i[r] =
            i[r] ||
            function () {
              (i[r].q = i[r].q || []).push(arguments);
            }),
          (i[r].l = 1 * new Date()),
          (a = s.createElement(n)),
          (c = s.getElementsByTagName(n)[0]),
          (a.async = 1),
          (a.src = "https://www.google-analytics.com/analytics.js"),
          c.parentNode.insertBefore(a, c),
          l.router.afterEach(function (t, e) {
            (o = t),
              d && (ga("set", "page", t.fullPath), ga("send", "pageview"));
          });
      };
    },
    215: function (t, e, o) {
      var content = o(341);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(24).default)("2cd77cfb", content, !0, { sourceMap: !1 });
    },
    216: function (t, e, o) {
      var content = o(343);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(24).default)("6f124cbf", content, !0, { sourceMap: !1 });
    },
    217: function (t, e, o) {
      var content = o(345);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(24).default)("2fd1aebc", content, !0, { sourceMap: !1 });
    },
    218: function (t, e, o) {
      var content = o(347);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(24).default)("1635fb69", content, !0, { sourceMap: !1 });
    },
    219: function (t, e, o) {
      var content = o(349);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(24).default)("8adfc754", content, !0, { sourceMap: !1 });
    },
    220: function (t, e, o) {
      var content = o(351);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(24).default)("68f1916a", content, !0, { sourceMap: !1 });
    },
    221: function (t, e, o) {
      var content = o(353);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(24).default)("adfdf322", content, !0, { sourceMap: !1 });
    },
    222: function (t, e, o) {
      var content = o(355);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(24).default)("0c385715", content, !0, { sourceMap: !1 });
    },
    223: function (t, e, o) {
      var content = o(357);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, o(24).default)("ef5c9db4", content, !0, { sourceMap: !1 });
    },
    248: function (t, e, o) {
      "use strict";
      o(97), o(339);
      var n = {
          data: function () {
            return { themeName: "Dark", navAction: !1 };
          },
          methods: {
            sendElementDown: function () {
              document.getElementById("introAnimComp").style.display = "none";
            },
            changeBG: function (t) {
              this.themeName = t;
            },
            mouseMoveEvent: function (t) {
              var e = document.getElementById("mainContent").clientWidth / 2,
                o =
                  (document.getElementById("mainContent").clientHeight / 2 -
                    t.clientY) /
                  100,
                n = (e - t.clientX) / 200;
              (document.getElementById("currentActiveRoute").style.transform =
                "translateY(" + o + "%)"),
                null != document.getElementById("homeTitle1") &&
                  ((document.getElementById("homeTitle1").style.transform =
                    "translateX(" + n + "%)"),
                  (document.getElementById("homeTitle2").style.transform =
                    "translateX(" + -n + "%)"));
            },
          },
          mounted: function () {},
        },
        r = (o(340), o(10)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                on: {
                  mousemove: function (e) {
                    return t.mouseMoveEvent(e);
                  },
                },
              },
              [
                e("Particle", {
                  staticClass: "particleClass",
                  attrs: { themeName: t.themeName },
                }),
                t._v(" "),
                e("ProjectHeader", {
                  staticClass: "headerClassMain",
                  on: {
                    changeBG: function (e) {
                      return t.changeBG(e);
                    },
                  },
                }),
                t._v(" "),
                e("PhoneNavigator", {
                  on: {
                    changeBG: function (e) {
                      return t.changeBG(e);
                    },
                  },
                }),
                t._v(" "),
                e("SocialLinks", { attrs: { id: "socialLinks" } }),
                t._v(" "),
                e("Routes", {
                  attrs: { id: "sideRoutes" },
                  on: {
                    changeBG: function (e) {
                      return t.changeBG(e);
                    },
                  },
                }),
                t._v(" "),
                e("main", [e("nuxt", { attrs: { id: "mainContent" } })], 1),
                t._v(" "),
                e("PhoneNavButton", {
                  staticClass: "navButton",
                  attrs: { navAction: t.navAction },
                }),
                t._v(" "),
                e("UserAnalytics"),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = component.exports;
      installComponents(component, {
        Particle: o(373).default,
        ProjectHeader: o(374).default,
        PhoneNavigator: o(375).default,
        SocialLinks: o(376).default,
        Routes: o(377).default,
        PhoneNavButton: o(378).default,
        UserAnalytics: o(379).default,
      });
    },
    249: function (t, e, o) {
      "use strict";
      o.r(e);
      o(97);
      var n = {
          methods: {
            changedGAPermission: function () {
              this.$emit(
                "currentGAPermission",
                document.getElementById("gaPermission").checked
              );
            },
          },
        },
        r = (o(354), o(10)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { attrs: { id: "cookieDesc" } }, [
              e("div", { staticClass: "darkOverlay" }),
              t._v(" "),
              e("div", { staticClass: "permission" }, [
                t._m(0),
                t._v(" "),
                t._m(1),
                t._v(" "),
                e("div", { staticClass: "rowPermission" }, [
                  e("input", {
                    attrs: {
                      type: "checkbox",
                      id: "gaPermission",
                      name: "gaPermission",
                      value: "gaPermission",
                    },
                    on: { change: t.changedGAPermission },
                  }),
                  t._v(" "),
                  t._m(2),
                  t._v(" "),
                  e("div"),
                  t._v(" "),
                  e("p", [
                    t._v("The site uses GA to understand the readers better."),
                  ]),
                ]),
              ]),
            ]);
          },
          [
            function () {
              var t = this._self._c;
              return t("div", { staticClass: "bannerHeader" }, [
                t("h3", [this._v("Preferences")]),
              ]);
            },
            function () {
              var t = this,
                e = t._self._c;
              return e("div", { staticClass: "rowPermission" }, [
                e("input", {
                  attrs: {
                    type: "checkbox",
                    id: "necessary",
                    name: "necessary",
                    value: "necessary",
                    disabled: "true",
                    checked: "",
                  },
                }),
                t._v(" "),
                e("label", { attrs: { for: "necessary" } }, [
                  e("b", [t._v("Necessary")]),
                ]),
                t._v(" "),
                e("div"),
                t._v(" "),
                e("p", [
                  t._v(
                    "\n        These can't be turned off as they are used to ensure the smooth\n        execution of this site.\n      "
                  ),
                ]),
              ]);
            },
            function () {
              var t = this._self._c;
              return t("label", { attrs: { for: "gaPermission" } }, [
                t("b", [this._v("Google Analytics")]),
              ]);
            },
          ],
          !1,
          null,
          "027e3b2c",
          null
        );
      e.default = component.exports;
    },
    254: function (t, e, o) {
      o(255), (t.exports = o(256));
    },
    340: function (t, e, o) {
      "use strict";
      o(215);
    },
    341: function (t, e, o) {
      var n = o(23)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ':root{--color-primary:#fff;--background-color-primary:#000;--background-color-primary-code:rgba(30,30,30,.5);--header-bg-color:transparent;--link-text-color:#727272;--active-link-text-color:#c8c8c8;--active-link-background-color:transparent;--particle-color:#fff;--particle-bg-color:#000;--intro-card-bg:rgba(25,25,25,.5);--intro-card-pic-border-color:#323232;--intro-card-button-holder-color:rgba(50,50,50,0);--intro-card-shadow:rgba(0,0,0,.2);--invert-value:invert(0);--start-opacity:0;--logo-url:url(/img/common/aghiljvLogoDark.webp)}html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;background:#000;background:var(--background-color-primary);box-sizing:border-box;font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;transition:.5s;word-spacing:1px}*{border:none;overflow:hidden;scrollbar-width:none}*,:after,:before{box-sizing:border-box;margin:0}hr{background-color:#fff;background-color:var(--color-primary);border:none;height:1px;opacity:.15}a:active,a:focus{border:none;outline:0;-moz-outline-style:none}.container{flex:100%;margin:0 auto 0 5%;min-height:100%;overflow:auto;position:absolute;width:80%;z-index:3}.container,.headerClassMain{color:#fff;color:var(--color-primary)}.headerClassMain{height:10%;position:fixed;text-align:left;top:0;width:100%;z-index:5}.particleClass{height:100%;position:fixed;width:100%;z-index:2}.navButton{bottom:1.5%;position:fixed;right:3%;z-index:11}@media only screen and (max-width:1025px){.container{min-height:80%;top:10%;width:80%}}@media only screen and (max-width:600px){.container{width:90%}#sideRoutes{display:none}}@media only screen and (min-width:600px){.navButton{display:none}}.fade-enter-active{animation:fade-in .5s}.fade-leave-active{animation:fade-out .5s}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}',
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    342: function (t, e, o) {
      "use strict";
      o(216);
    },
    343: function (t, e, o) {
      var n = o(23)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        "#particles-js[data-v-012eff03]{background:var(--particle-bg-color);height:100%;width:100%}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    344: function (t, e, o) {
      "use strict";
      o(217);
    },
    345: function (t, e, o) {
      var n = o(23)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".headerClass[data-v-31da8fd7]{align-items:center;display:flex;padding:1% 0 1% 5%;transition:.5s}.title[data-v-31da8fd7]{color:var(--active-link-text-color);font-size:4vw;transition:.5s;width:30%}@media only screen and (max-width:1025px){.headerClass[data-v-31da8fd7]{display:flex}.title[data-v-31da8fd7]{font-size:12vw;width:100%}}@media only screen and (min-width:1025px){.headerClass[data-v-31da8fd7],.title[data-v-31da8fd7]{display:none}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    346: function (t, e, o) {
      "use strict";
      o(218);
    },
    347: function (t, e, o) {
      var n = o(23)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".phoneNavClass[data-v-53d81bb2]{background:var(--background-color-primary);bottom:-120%;flex-direction:column;justify-content:space-evenly;position:absolute;transition:.5s;z-index:10}.indRoute[data-v-53d81bb2],.phoneNavClass[data-v-53d81bb2]{align-items:center;display:flex;height:100%;width:100%}.indRoute[data-v-53d81bb2]{color:var(--link-text-color);justify-content:center;margin:1%;-webkit-text-decoration:none;text-decoration:none}.nuxt-link-active[data-v-53d81bb2]{color:var(--active-link-text-color);font-weight:bolder}@media only screen and (min-width:600px){.phoneNavClass[data-v-53d81bb2]{display:none}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    348: function (t, e, o) {
      "use strict";
      o(219);
    },
    349: function (t, e, o) {
      var n = o(23)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".socialClass[data-v-07c0be43]{align-items:center;display:flex;height:100%;position:fixed;width:5%;z-index:4}.computerScreen[data-v-07c0be43]{left:-30%;position:absolute}.computerScreen[data-v-07c0be43],.phoneScreen[data-v-07c0be43]{color:#fff;font-size:.5vw;transition:.5s;width:100%}.phoneScreen[data-v-07c0be43]{bottom:.5%;position:relative;z-index:1}ul[data-v-07c0be43]{list-style-type:none;padding:0;text-align:left;width:100%}li[data-v-07c0be43]{padding:0 5% 0 15%;transition:.25s;width:75%}.socialLinkImg[data-v-07c0be43]{display:flex;height:100%;width:100%}@media only screen and (max-width:600px){.computerScreen[data-v-07c0be43]{display:none}.socialClass[data-v-07c0be43]{align-items:flex-end;bottom:1%;height:10vh;width:100%}ul[data-v-07c0be43]{display:flex;height:10vw;justify-content:center}li[data-v-07c0be43]{padding:0;width:10vw}.socialLinkImg[data-v-07c0be43]{height:10vw;width:10vw}}@media only screen and (min-width:600px){.phoneScreen[data-v-07c0be43]{display:none}li[data-v-07c0be43]:hover{transform:translateX(25%)}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    350: function (t, e, o) {
      "use strict";
      o(220);
    },
    351: function (t, e, o) {
      var n = o(23)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".routeHolder[data-v-9e6ec408]{border-left:2px solid var(--color-primary);flex-direction:column;right:0;width:5%}.currentRouteHolder[data-v-9e6ec408],.routeHolder[data-v-9e6ec408]{align-items:center;display:flex;height:100%;justify-content:space-evenly;position:absolute;z-index:5}.currentRouteHolder[data-v-9e6ec408]{color:var(--color-primary);right:5%;width:8%}.indRoute[data-v-9e6ec408]{color:var(--link-text-color);font-size:1vw;height:100%;margin:1%;-webkit-text-decoration:none;text-decoration:none;width:200%}.indRoute[data-v-9e6ec408],.routeCurrentText[data-v-9e6ec408]{align-items:center;display:flex;justify-content:center;transform:rotate(90deg)}.routeCurrentText[data-v-9e6ec408]{font-size:8vw;height:8vw;position:fixed;text-align:center;width:80vw}.nuxt-link-active[data-v-9e6ec408]{color:var(--active-link-text-color);font-weight:bolder}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    352: function (t, e, o) {
      "use strict";
      o(221);
    },
    353: function (t, e, o) {
      var n = o(23)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        "#nav-icon[data-v-060be974]{cursor:pointer;height:10vw;transform:rotate(0deg);transition:.5s ease-in-out;width:12%}#nav-icon span[data-v-060be974]{background:var(--color-primary);display:block;height:10%;left:0;opacity:1;position:absolute;transform:rotate(0deg);transition:.25s ease-in-out;width:100%}#nav-icon span[data-v-060be974]:first-child{top:0}#nav-icon span[data-v-060be974]:nth-child(2),#nav-icon span[data-v-060be974]:nth-child(3){top:45%}#nav-icon span[data-v-060be974]:nth-child(4){bottom:0}#nav-icon.open span[data-v-060be974]:first-child{left:50%;top:30%;width:0}#nav-icon.open span[data-v-060be974]:nth-child(2){transform:rotate(45deg)}#nav-icon.open span[data-v-060be974]:nth-child(3){transform:rotate(-45deg)}#nav-icon.open span[data-v-060be974]:nth-child(4){left:50%;top:30%;width:0}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    354: function (t, e, o) {
      "use strict";
      o(222);
    },
    355: function (t, e, o) {
      var n = o(23)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        "#cookieDesc[data-v-027e3b2c]{align-items:center;bottom:0;display:none;height:100%;justify-content:center;opacity:0;position:absolute;transition:.5s;width:100%;z-index:100}.darkOverlay[data-v-027e3b2c]{background:#000;height:100%;left:0;opacity:.8;position:fixed;top:0;width:100%}.permission[data-v-027e3b2c]{background:var(--color-primary);color:var(--background-color-primary);display:grid;grid-template-rows:1fr 1fr;height:40%;padding:2.5%;position:absolute;width:30%;z-index:100}.bannerHeader[data-v-027e3b2c]{padding:2.5% 0 0 5%;position:absolute}.rowPermission[data-v-027e3b2c]{align-items:center;display:grid;grid-template-columns:1fr 4fr;width:100%}@media only screen and (max-width:600px){.permission[data-v-027e3b2c]{height:40%;padding:15% 10% 10%;width:90%}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    356: function (t, e, o) {
      "use strict";
      o(223);
    },
    357: function (t, e, o) {
      var n = o(23)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        "#permissionModule[data-v-24402490]{bottom:0;display:flex;height:15%;opacity:0;position:absolute;transition:.5s}#permissionModule[data-v-24402490],.permission[data-v-24402490]{justify-content:center;width:100%;z-index:100}.permission[data-v-24402490]{background:var(--color-primary);color:var(--background-color-primary);display:grid;grid-template-columns:2fr 1fr;height:100%;padding:0 1%}.bannerHeader[data-v-24402490]{padding:.5% 1% 0;position:absolute}.allowButton[data-v-24402490],.disAllowButton[data-v-24402490]{align-items:center;cursor:pointer;display:flex;font-size:1vw;justify-content:center;text-align:center;width:30%}.allowButton[data-v-24402490]{background:var(--background-color-primary);color:var(--color-primary);font-weight:700;height:30%;outline:none}.disAllowButton[data-v-24402490]{background:var(--color-primary);color:var(--link-text-color);font-size:.7vw;height:20%;outline:none;-webkit-text-decoration:underline;text-decoration:underline}.permText[data-v-24402490]{text-align:center}.permButtons[data-v-24402490],.permText[data-v-24402490]{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.permButtons[data-v-24402490]{flex-direction:column}.indRoute[data-v-24402490]{color:var(--link-text-color);-webkit-text-decoration:none;text-decoration:none}.bannerInvoker[data-v-24402490]{bottom:.5vw;display:flex;filter:var(--invert-value);height:1.75vw;left:.5vw;position:fixed;width:1.75vw;z-index:10}.cookieImage[data-v-24402490]{height:1.75vw;-o-object-fit:contain;object-fit:contain;width:1.75vw}@media only screen and (max-width:600px){#permissionModule[data-v-24402490]{height:25%}.permission[data-v-24402490]{grid-template-columns:auto;grid-template-rows:1fr 2fr 2fr;width:100%}.bannerHeader[data-v-24402490]{position:relative}.allowButton[data-v-24402490]{font-size:3.5vw;height:85%}.disAllowButton[data-v-24402490]{font-size:3vw;height:55%}.allowButton[data-v-24402490]:after,.disAllowButton[data-v-24402490]:after{right:-10vw}.bannerInvoker[data-v-24402490]{bottom:3vw;left:2vw}.bannerInvoker[data-v-24402490],.cookieImage[data-v-24402490]{height:8vw;width:8vw}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    358: function (t, e, o) {
      "use strict";
      o.r(e),
        o.d(e, "state", function () {
          return n;
        }),
        o.d(e, "mutations", function () {
          return r;
        });
      var n = function () {
          return {
            blogs: [
              {
                _id: "5e95ecc51c9d4400008c50bd",
                name: "E2E Testing Benefits",
                titleImage: "060420/e2e",
                briefdesc:
                  "An article to inspire you to perform End to End Testing in application",
              },
            ],
          };
        },
        r = {
          add: function (t, data) {
            t.blogs = data;
          },
        };
    },
    359: function (t, e, o) {
      "use strict";
      o.r(e),
        o.d(e, "state", function () {
          return n;
        }),
        o.d(e, "mutations", function () {
          return r;
        });
      var n = function () {
          return { pageTitle: "" };
        },
        r = {
          set: function (t, data) {
            t.pageTitle = data;
          },
        };
    },
    360: function (t, e, o) {
      "use strict";
      o.r(e),
        o.d(e, "state", function () {
          return n;
        }),
        o.d(e, "mutations", function () {
          return r;
        });
      var n = function () {
          return {
            portfolios: [
              {
                _id: "5e9311b61c9d4400003cf285",
                name: "Feel",
                titleImage: "feel",
                briefdesc:
                  "The application assists the user to determine a car model suited for them according to their lifestyle.",
              },
            ],
          };
        },
        r = {
          add: function (t, data) {
            t.portfolios = data;
          },
        };
    },
    373: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = {
          data: function () {
            return {
              particleColor: "#808080",
              particleBg: "#000000",
              darkMode: !0,
            };
          },
          props: ["themeName"],
          watch: {
            themeName: function () {
              "Light" == this.$props.themeName
                ? ((this.particleColor = "#808080"),
                  (this.particleBg = "#ffffff"))
                : "Dark" == this.$props.themeName &&
                  ((this.particleColor = "#808080"),
                  (this.particleBg = "#000000")),
                this.applyThemeChanges();
            },
          },
          mounted: function () {
            this.initParticles();
          },
          methods: {
            initParticles: function () {
              var t = this;
              window.onNuxtReady(function () {
                t.drawBG();
              });
            },
            drawBG: function () {
              window.particlesJS("particles-js", {
                particles: {
                  number: {
                    value: 80,
                    density: { enable: !0, value_area: 700 },
                  },
                  color: { value: this.particleColor },
                  shape: {
                    type: "circle",
                    stroke: { width: 4, color: "#fff" },
                  },
                  opacity: {
                    value: 0.5,
                    random: !1,
                    anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
                  },
                  size: {
                    value: 2,
                    random: !0,
                    anim: { enable: !1, speed: 40, size_min: 0.1, sync: !1 },
                  },
                  line_linked: {
                    enable: !0,
                    distance: 150,
                    color: this.particleColor,
                    opacity: 0.4,
                    width: 1,
                  },
                  move: {
                    enable: !0,
                    speed: 5,
                    direction: "none",
                    random: !1,
                    straight: !1,
                    out_mode: "out",
                    bounce: !1,
                    attract: { enable: !1, rotateX: 600, rotateY: 1200 },
                  },
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: { enable: !0, mode: "grab" },
                    onclick: { enable: !0, mode: "push" },
                    resize: !0,
                  },
                  modes: {
                    grab: { distance: 140, line_linked: { opacity: 1 } },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 8,
                      speed: 3,
                    },
                    repulse: { distance: 200, duration: 0.4 },
                    push: { particles_nb: 4 },
                    remove: { particles_nb: 2 },
                  },
                },
                retina_detect: !0,
              }),
                this.applyThemeChanges();
            },
            applyThemeChanges: function () {
              (pJSDom[0].pJS.particles.color.value = this.particleColor),
                (pJSDom[0].pJS.particles.shape.stroke.color = this.particleBg),
                (pJSDom[0].pJS.particles.line_linked.color =
                  this.particleColor),
                pJSDom[0].pJS.fn.particlesRefresh();
            },
          },
        },
        r = (o(342), o(10)),
        component = Object(r.a)(
          n,
          function () {
            this._self._c;
            return this._m(0);
          },
          [
            function () {
              var t = this._self._c;
              return t("div", { staticClass: "particles" }, [
                t("div", { attrs: { id: "particles-js" } }),
              ]);
            },
          ],
          !1,
          null,
          "012eff03",
          null
        );
      e.default = component.exports;
    },
    374: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = {
          data: function () {
            return { themeName: "Light Theme" };
          },
          computed: {
            pageTitle: function () {
              return this.$store.state.pageTitle.pageTitle;
            },
          },
        },
        r = (o(344), o(10)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "headerClass" }, [
              e("div", { staticClass: "title" }, [t._v(t._s(t.pageTitle))]),
            ]);
          },
          [],
          !1,
          null,
          "31da8fd7",
          null
        );
      e.default = component.exports;
    },
    375: function (t, e, o) {
      "use strict";
      o.r(e);
      o(46);
      var n = {
          data: function () {
            return { themeName: "Light Theme" };
          },
          methods: {
            toggleNav: function () {
              (document.getElementById("phoneNavID").style.bottom = "-120%"),
                document.getElementById("nav-icon").classList.toggle("open");
            },
            switchTheme: function () {
              var t = document.documentElement;
              "Light Theme" == this.themeName
                ? (t.style.setProperty("--background-color-primary", "white"),
                  t.style.setProperty("--color-primary", "black"),
                  t.style.setProperty(
                    "--header-bg-color",
                    "rgba(0, 0, 0, 0.1)"
                  ),
                  t.style.setProperty(
                    "--link-text-color",
                    "rgb(114, 114, 114)"
                  ),
                  t.style.setProperty(
                    "--active-link-text-color",
                    "rgba(0,0,0,1)"
                  ),
                  t.style.setProperty(
                    "--active-link-background-color",
                    "white"
                  ),
                  t.style.setProperty("--particle-bg-color", "white"),
                  t.style.setProperty(
                    "--intro-card-bg",
                    "rgba(225, 225, 225, 0.5)"
                  ),
                  t.style.setProperty(
                    "--intro-card-pic-border-color",
                    "rgba(205, 205, 205, 1)"
                  ),
                  t.style.setProperty(
                    "--intro-card-button-holder-color",
                    "rgba(205, 205, 205, 0)"
                  ),
                  t.style.setProperty(
                    "--intro-card-shadow",
                    "rgba(0, 0, 0, 0.2)"
                  ),
                  t.style.setProperty("--invert-value", "invert(1)"),
                  t.style.setProperty(
                    "--logo-url",
                    "url(/img/common/aghiljvLogoLight.webp)"
                  ),
                  this.$emit("changeBG", "Light"),
                  (this.themeName = "Dark Theme"),
                  this.saveCookies("aghiljose_com_selected_theme", "light"))
                : (t.style.setProperty("--background-color-primary", "black"),
                  t.style.setProperty("--color-primary", "white"),
                  t.style.setProperty(
                    "--header-bg-color",
                    " rgba(0, 0, 0, 0.6)"
                  ),
                  t.style.setProperty(
                    "--link-text-color",
                    "rgb(114, 114, 114)"
                  ),
                  t.style.setProperty(
                    "--active-link-text-color",
                    "rgba(255, 255, 255, 1)"
                  ),
                  t.style.setProperty(
                    "--active-link-background-color",
                    "white"
                  ),
                  t.style.setProperty("--particle-bg-color", "black"),
                  t.style.setProperty(
                    "--intro-card-bg",
                    "rgba(25, 25, 25, 0.5)"
                  ),
                  t.style.setProperty(
                    "--intro-card-pic-border-color",
                    "rgba(50, 50, 50, 1)"
                  ),
                  t.style.setProperty(
                    "--intro-card-button-holder-color",
                    "rgba(50, 50, 50, 0)"
                  ),
                  t.style.setProperty(
                    "--intro-card-shadow",
                    "rgba(0, 0, 0, 0.2)"
                  ),
                  t.style.setProperty("--invert-value", "invert(0)"),
                  t.style.setProperty(
                    "--logo-url",
                    "url(/img/common/aghiljvLogoDark.webp)"
                  ),
                  this.$emit("changeBG", "Dark"),
                  (this.themeName = "Light Theme"),
                  this.saveCookies("aghiljose_com_selected_theme", "dark"));
            },
            saveCookies: function (t, e) {
              this.$cookies.set(t, e, { path: "/", maxAge: 604800 });
            },
            loadSavedTheme: function () {
              var t = this,
                e = this.$cookies.get("aghiljose_com_selected_theme");
              "light" == e
                ? (this.themeName = "Light Theme")
                : "dark" == e && (this.themeName = "Dark Theme"),
                null != e &&
                  setTimeout(function () {
                    t.switchTheme();
                  }, 0);
            },
          },
          beforeMount: function () {
            this.loadSavedTheme();
          },
        },
        r = (o(346), o(10)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "phoneNavClass",
                attrs: { id: "phoneNavID" },
                on: { click: t.toggleNav },
              },
              [
                e(
                  "nuxt-link",
                  { staticClass: "indRoute", attrs: { to: "/", exact: "" } },
                  [t._v("HOME")]
                ),
                t._v(" "),
                e(
                  "nuxt-link",
                  { staticClass: "indRoute", attrs: { to: "/portfolio" } },
                  [t._v("PORTFOLIO")]
                ),
                t._v(" "),
                e(
                  "nuxt-link",
                  { staticClass: "indRoute", attrs: { to: "/blog" } },
                  [t._v("BLOG")]
                ),
                t._v(" "),
                e(
                  "nuxt-link",
                  { staticClass: "indRoute", attrs: { to: "/about" } },
                  [t._v("ABOUT")]
                ),
                t._v(" "),
                e(
                  "nuxt-link",
                  { staticClass: "indRoute", attrs: { to: "/contact" } },
                  [t._v("CONTACT")]
                ),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "indRoute", on: { click: t.switchTheme } },
                  [t._v(t._s(t.themeName))]
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "53d81bb2",
          null
        );
      e.default = component.exports;
    },
    376: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = {
          data: function () {
            return { sets: [{ format: "png" }, { format: "webp" }] };
          },
        },
        r = (o(348), o(10)),
        component = Object(r.a)(
          n,
          function () {
            this._self._c;
            return this._m(0);
          },
          [
            function () {
              var t = this,
                e = t._self._c;
              return e("div", { staticClass: "socialClass" }, [
                e("div", { staticClass: "computerScreen" }, [
                  e("ul", [
                    e("li", { staticStyle: { background: "#000000" } }, [
                      e(
                        "a",
                        {
                          attrs: {
                            href: "https://medium.com/@aghiljv",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                        },
                        [
                          e("picture", [
                            e("source", {
                              attrs: {
                                srcset: "/img/common/medium.webp",
                                type: "image/webp",
                              },
                            }),
                            t._v(" "),
                            e("img", {
                              staticClass: "socialLinkImg",
                              attrs: {
                                src: "/img/common/medium.png",
                                alt: "Medium",
                              },
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    t._v(" "),
                    e("li", { staticStyle: { background: "#0077b7" } }, [
                      e(
                        "a",
                        {
                          attrs: {
                            href: "https://www.linkedin.com/in/aghil-jose/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                        },
                        [
                          e("picture", [
                            e("source", {
                              attrs: {
                                srcset: "/img/common/linkedin.webp",
                                type: "image/webp",
                              },
                            }),
                            t._v(" "),
                            e("img", {
                              staticClass: "socialLinkImg",
                              attrs: {
                                src: "/img/common/linkedin.png",
                                alt: "LinkedIn",
                              },
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    t._v(" "),
                    e("li", { staticStyle: { background: "#2c2c2c" } }, [
                      e(
                        "a",
                        {
                          attrs: {
                            href: "https://github.com/aghiljv",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                        },
                        [
                          e("picture", [
                            e("source", {
                              attrs: {
                                srcset: "/img/common/github.webp",
                                type: "image/webp",
                              },
                            }),
                            t._v(" "),
                            e("img", {
                              staticClass: "socialLinkImg",
                              attrs: {
                                src: "/img/common/github.png",
                                alt: "GitHub",
                              },
                            }),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("div", { staticClass: "phoneScreen" }, [
                  e("ul", [
                    e("li", { staticStyle: { background: "#000000" } }, [
                      e(
                        "a",
                        {
                          attrs: {
                            href: "https://medium.com/@aghiljv",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                        },
                        [
                          e("picture", [
                            e("source", {
                              attrs: {
                                srcset: "/img/common/mediump.webp",
                                type: "image/webp",
                              },
                            }),
                            t._v(" "),
                            e("img", {
                              staticClass: "socialLinkImg",
                              attrs: {
                                src: "/img/common/mediump.png",
                                alt: "Medium",
                              },
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    t._v(" "),
                    e("li", { staticStyle: { background: "#0077b7" } }, [
                      e(
                        "a",
                        {
                          attrs: {
                            href: "https://www.linkedin.com/in/aghil-jose/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                        },
                        [
                          e("picture", [
                            e("source", {
                              attrs: {
                                srcset: "/img/common/linkedinp.webp",
                                type: "image/webp",
                              },
                            }),
                            t._v(" "),
                            e("img", {
                              staticClass: "socialLinkImg",
                              attrs: {
                                src: "/img/common/linkedinp.png",
                                alt: "LinkedIn",
                              },
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    t._v(" "),
                    e("li", { staticStyle: { background: "#2c2c2c" } }, [
                      e(
                        "a",
                        {
                          attrs: {
                            href: "https://github.com/aghiljv",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                        },
                        [
                          e("picture", [
                            e("source", {
                              attrs: {
                                srcset: "/img/common/githubp.webp",
                                type: "image/webp",
                              },
                            }),
                            t._v(" "),
                            e("img", {
                              staticClass: "socialLinkImg",
                              attrs: {
                                src: "/img/common/githubp.png",
                                alt: "GitHub",
                              },
                            }),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]);
            },
          ],
          !1,
          null,
          "07c0be43",
          null
        );
      e.default = component.exports;
    },
    377: function (t, e, o) {
      "use strict";
      o.r(e);
      o(46);
      var n = {
          data: function () {
            return { themeName: "Light Theme" };
          },
          computed: {
            pageTitle: function () {
              return this.$store.state.pageTitle.pageTitle;
            },
          },
          methods: {
            switchTheme: function () {
              var t = document.documentElement;
              "Light Theme" == this.themeName
                ? (t.style.setProperty("--background-color-primary", "white"),
                  t.style.setProperty("--color-primary", "black"),
                  t.style.setProperty("--header-bg-color", "rgba(0, 0, 0, 0)"),
                  t.style.setProperty(
                    "--link-text-color",
                    "rgb(114, 114, 114)"
                  ),
                  t.style.setProperty(
                    "--active-link-text-color",
                    "rgba(0,0,0,1)"
                  ),
                  t.style.setProperty(
                    "--active-link-background-color",
                    "white"
                  ),
                  t.style.setProperty("--particle-bg-color", "white"),
                  t.style.setProperty(
                    "--intro-card-bg",
                    "rgba(225, 225, 225, 0.5)"
                  ),
                  t.style.setProperty(
                    "--intro-card-pic-border-color",
                    "rgba(205, 205, 205, 1)"
                  ),
                  t.style.setProperty(
                    "--intro-card-button-holder-color",
                    "rgba(205, 205, 205, 0)"
                  ),
                  t.style.setProperty(
                    "--intro-card-shadow",
                    "rgba(0, 0, 0, 0.2)"
                  ),
                  t.style.setProperty("--invert-value", "invert(1)"),
                  t.style.setProperty(
                    "--logo-url",
                    "url(/img/common/aghiljvLogoLight.webp)"
                  ),
                  this.$emit("changeBG", "Light"),
                  (this.themeName = "Dark Theme"),
                  this.saveCookies("aghiljose_com_selected_theme", "light"))
                : (t.style.setProperty("--background-color-primary", "black"),
                  t.style.setProperty("--color-primary", "white"),
                  t.style.setProperty("--header-bg-color", " rgba(0, 0, 0, 0)"),
                  t.style.setProperty(
                    "--link-text-color",
                    "rgb(114, 114, 114)"
                  ),
                  t.style.setProperty(
                    "--active-link-text-color",
                    "rgba(255, 255, 255, 1)"
                  ),
                  t.style.setProperty(
                    "--active-link-background-color",
                    "white"
                  ),
                  t.style.setProperty("--particle-bg-color", "black"),
                  t.style.setProperty(
                    "--intro-card-bg",
                    "rgba(25, 25, 25, 0.5)"
                  ),
                  t.style.setProperty(
                    "--intro-card-pic-border-color",
                    "rgba(50, 50, 50, 1)"
                  ),
                  t.style.setProperty(
                    "--intro-card-button-holder-color",
                    "rgba(50, 50, 50, 0)"
                  ),
                  t.style.setProperty(
                    "--intro-card-shadow",
                    "rgba(0, 0, 0, 0.2)"
                  ),
                  t.style.setProperty("--invert-value", "invert(0)"),
                  t.style.setProperty(
                    "--logo-url",
                    "url(/img/common/aghiljvLogoDark.webp)"
                  ),
                  this.$emit("changeBG", "Dark"),
                  (this.themeName = "Light Theme"),
                  this.saveCookies("aghiljose_com_selected_theme", "dark"));
            },
            saveCookies: function (t, e) {
              this.$cookies.set(t, e, { path: "/", maxAge: 604800 });
            },
            loadSavedTheme: function () {
              var t = this,
                e = this.$cookies.get("aghiljose_com_selected_theme");
              "light" == e
                ? (this.themeName = "Light Theme")
                : "dark" == e && (this.themeName = "Dark Theme"),
                null != e &&
                  setTimeout(function () {
                    t.switchTheme();
                  }, 0);
            },
          },
          beforeMount: function () {
            this.loadSavedTheme();
          },
        },
        r = (o(350), o(10)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { attrs: { id: "mainRoutes" } }, [
              e(
                "div",
                { staticClass: "routeHolder" },
                [
                  e(
                    "nuxt-link",
                    { staticClass: "indRoute", attrs: { to: "/", exact: "" } },
                    [t._v("HOME")]
                  ),
                  t._v(" "),
                  e(
                    "nuxt-link",
                    { staticClass: "indRoute", attrs: { to: "/portfolio" } },
                    [t._v("PORTFOLIO")]
                  ),
                  t._v(" "),
                  e(
                    "nuxt-link",
                    { staticClass: "indRoute", attrs: { to: "/blog" } },
                    [t._v("BLOG")]
                  ),
                  t._v(" "),
                  e(
                    "nuxt-link",
                    { staticClass: "indRoute", attrs: { to: "/about" } },
                    [t._v("ABOUT")]
                  ),
                  t._v(" "),
                  e(
                    "nuxt-link",
                    { staticClass: "indRoute", attrs: { to: "/contact" } },
                    [t._v("CONTACT")]
                  ),
                  t._v(" "),
                  e(
                    "div",
                    { staticClass: "indRoute", on: { click: t.switchTheme } },
                    [t._v(t._s(t.themeName))]
                  ),
                ],
                1
              ),
              t._v(" "),
              e(
                "div",
                {
                  staticClass: "currentRouteHolder",
                  attrs: { id: "currentActiveRoute" },
                },
                [
                  e("div", { staticClass: "routeCurrentText" }, [
                    t._v(t._s(t.pageTitle)),
                  ]),
                ]
              ),
            ]);
          },
          [],
          !1,
          null,
          "9e6ec408",
          null
        );
      e.default = component.exports;
    },
    378: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = {
          methods: {
            bringUpPhoneNav: function () {
              document.getElementById("nav-icon").classList.toggle("open"),
                "0%" != document.getElementById("phoneNavID").style.bottom
                  ? (document.getElementById("phoneNavID").style.bottom = "0%")
                  : (document.getElementById("phoneNavID").style.bottom =
                      "-120%");
            },
          },
        },
        r = (o(352), o(10)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { attrs: { id: "nav-icon" }, on: { click: t.bringUpPhoneNav } },
              [
                e("span"),
                t._v(" "),
                e("span"),
                t._v(" "),
                e("span"),
                t._v(" "),
                e("span"),
              ]
            );
          },
          [],
          !1,
          null,
          "060be974",
          null
        );
      e.default = component.exports;
    },
    379: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = o(7),
        r = (o(46), o(37), o(97)),
        c = {
          data: function () {
            return { gAPermissionState: null };
          },
          components: { CookieBanner: o(249).default },
          methods: {
            allowGAPermission: function (t) {
              var e = this;
              return Object(n.a)(
                regeneratorRuntime.mark(function o() {
                  return regeneratorRuntime.wrap(function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          if (
                            (e.saveCookies(
                              "aghiljose_com_previous_loaded_domain_071023",
                              "loaded"
                            ),
                            !document.getElementById("gaPermission").checked &&
                              !t)
                          ) {
                            o.next = 12;
                            break;
                          }
                          return (
                            (document.getElementById("gaPermission").checked =
                              !0),
                            e.saveCookies(
                              "aghiljose_com_previous_loaded_ga",
                              "loaded"
                            ),
                            e.closeBanner(),
                            (o.t0 = e),
                            (o.next = 8),
                            r.a.getId()
                          );
                        case 8:
                          (o.t1 = o.sent),
                            o.t0.$gaPermissions.call(o.t0, o.t1, !0),
                            (o.next = 15);
                          break;
                        case 12:
                          "unloaded" !=
                            e.$cookies.get(
                              "aghiljose_com_previous_loaded_ga"
                            ) &&
                            e.saveCookies(
                              "aghiljose_com_previous_loaded_ga",
                              "unloaded"
                            ),
                            e.closeBanner(),
                            e.$gaPermissions("", !1);
                        case 15:
                        case "end":
                          return o.stop();
                      }
                  }, o);
                })
              )();
            },
            closeBanner: function () {
              var t = this;
              (document.getElementById("permissionModule").style.opacity = "0"),
                (document.getElementById("cookieDesc").style.opacity = "0"),
                setTimeout(function () {
                  return t.closeAssist();
                }, 1e3);
            },
            closeAssist: function () {
              (document.getElementById("permissionModule").style.display =
                "none"),
                (document.getElementById("cookieDesc").style.display = "none");
            },
            saveCookies: function (t, e) {
              this.$cookies.set(t, e, { path: "/", maxAge: 604800 });
            },
            showBanner: function () {
              var t = this;
              (document.getElementById("permissionModule").style.display =
                "flex"),
                setTimeout(function () {
                  return t.showBannerAssist();
                }, 1);
            },
            showBannerAssist: function () {
              document.getElementById("permissionModule").style.opacity = "1";
            },
            togglePreferences: function () {
              var t = this;
              0 == document.getElementById("cookieDesc").style.opacity
                ? ((document.getElementById("cookieDesc").style.display =
                    "flex"),
                  setTimeout(function () {
                    return t.showPermissionNotifications();
                  }, 1))
                : ((document.getElementById("cookieDesc").style.opacity = 0),
                  setTimeout(function () {
                    return t.hidePermissionNotifications();
                  }, 500));
            },
            showPermissionNotifications: function () {
              document.getElementById("cookieDesc").style.opacity = 1;
            },
            hidePermissionNotifications: function () {
              document.getElementById("cookieDesc").style.display = "none";
            },
            changeGAState: function (t) {
              this.gAPermissionState = t;
            },
          },
          computed: {
            checkPermissionText: function () {
              return 0 == this.gAPermissionState ? "Allow" : "Allow All";
            },
          },
          mounted: function () {
            "loaded" ==
            this.$cookies.get("aghiljose_com_previous_loaded_domain_071023")
              ? "loaded" ==
                this.$cookies.get("aghiljose_com_previous_loaded_ga")
                ? ((document.getElementById("gaPermission").checked = !0),
                  this.allowGAPermission(!0))
                : this.allowGAPermission(!1)
              : (document.getElementById("permissionModule").style.opacity =
                  "1");
          },
        },
        l = (o(356), o(10)),
        component = Object(l.a)(
          c,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              [
                e("CookieBanner", {
                  on: {
                    currentGAPermission: function (e) {
                      return t.changeGAState(e);
                    },
                  },
                }),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "bannerInvoker", on: { click: t.showBanner } },
                  [t._m(0)]
                ),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass: "permissionContainer",
                    attrs: { id: "permissionModule" },
                  },
                  [
                    e("div", { staticClass: "permission" }, [
                      t._m(1),
                      t._v(" "),
                      e("div", { staticClass: "permText" }, [
                        e(
                          "div",
                          [
                            t._v(
                              "\n          Allow this site to use google-analytics for user analysis and\n          on-page improvements. Please review the\n          "
                            ),
                            e(
                              "nuxt-link",
                              {
                                staticClass: "indRoute",
                                attrs: { to: "/privacy-policy" },
                              },
                              [t._v("Privacy Policy")]
                            ),
                            t._v("\n          and\n          "),
                            e(
                              "nuxt-link",
                              {
                                staticClass: "indRoute",
                                attrs: { to: "/terms-and-conditions" },
                              },
                              [t._v("Terms & Conditions")]
                            ),
                          ],
                          1
                        ),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "permButtons" }, [
                        e(
                          "div",
                          {
                            staticClass: "allowButton",
                            on: {
                              click: function (e) {
                                return t.allowGAPermission(
                                  "Allow" != t.checkPermissionText
                                );
                              },
                            },
                          },
                          [
                            t._v(
                              "\n          " +
                                t._s(t.checkPermissionText) +
                                "\n        "
                            ),
                          ]
                        ),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass: "disAllowButton",
                            on: { click: t.togglePreferences },
                          },
                          [t._v("\n          Preferences\n        ")]
                        ),
                      ]),
                    ]),
                  ]
                ),
              ],
              1
            );
          },
          [
            function () {
              var t = this._self._c;
              return t("picture", [
                t("source", {
                  attrs: {
                    srcset: "/img/common/cookie.webp",
                    type: "image/webp",
                  },
                }),
                this._v(" "),
                t("img", {
                  staticClass: "cookieImage",
                  attrs: { src: "/img/common/cookie.png", alt: "Cookies" },
                }),
              ]);
            },
            function () {
              var t = this._self._c;
              return t("div", { staticClass: "bannerHeader" }, [
                t("h3", [this._v("This site uses cookies")]),
              ]);
            },
          ],
          !1,
          null,
          "24402490",
          null
        );
      e.default = component.exports;
    },
    97: function (t, e, o) {
      "use strict";
      var n = o(22),
        r = o(76),
        c = o(77),
        l = (o(11), o(52), o(41), o(34), o(40), o(61), o(35), o(62), o(31)),
        d = o.n(l);
      function m(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            o.push.apply(o, n);
        }
        return o;
      }
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? m(Object(o), !0).forEach(function (e) {
                Object(n.a)(t, e, o[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
            : m(Object(o)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(o, e)
                );
              });
        }
        return t;
      }
      var v = "https://aghiljose.vercel.app/api/posts/",
        f = "https://aghiljose.vercel.app/api/blogs/",
        y = (function () {
          function t() {
            Object(r.a)(this, t);
          }
          return (
            Object(c.a)(t, null, [
              {
                key: "getId",
                value: function () {
                  return new Promise(function (t, e) {
                    try {
                      d.a
                        .get("https://aghiljose.vercel.app/ga_id")
                        .then(function (e) {
                          var data = e.data;
                          t(data);
                        });
                    } catch (t) {
                      e(t);
                    }
                  });
                },
              },
              {
                key: "getPortfolios",
                value: function () {
                  return new Promise(function (t, e) {
                    try {
                      d.a.get(v).then(function (e) {
                        var data = e.data;
                        t(
                          data.map(function (t) {
                            return h({}, t);
                          })
                        );
                      });
                    } catch (t) {
                      e(t);
                    }
                  });
                },
              },
              {
                key: "getPortfolio",
                value: function (t) {
                  return new Promise(function (e, o) {
                    try {
                      d.a.get("".concat(v).concat(t)).then(function (t) {
                        var data = t.data;
                        e(
                          data.map(function (t) {
                            return h({}, t);
                          })
                        );
                      });
                    } catch (t) {
                      o(t);
                    }
                  });
                },
              },
              {
                key: "getBlogs",
                value: function () {
                  return new Promise(function (t, e) {
                    try {
                      d.a.get(f).then(function (e) {
                        var o = e.data;
                        o.map(function (t) {
                          return h({}, t);
                        }),
                          t(o.reverse());
                      });
                    } catch (t) {
                      e(t);
                    }
                  });
                },
              },
              {
                key: "getBlog",
                value: function (t) {
                  return new Promise(function (e, o) {
                    try {
                      d.a.get("".concat(f).concat(t)).then(function (t) {
                        var o = t.data;
                        e(
                          o.map(function (t) {
                            return h({}, t);
                          })
                        );
                      });
                    } catch (t) {
                      o(t);
                    }
                  });
                },
              },
              {
                key: "insertComment",
                value: function (t, e, o, n, r) {
                  return d.a.post("".concat(f).concat(t), {
                    email: e,
                    name: o,
                    comment: n,
                    date: r,
                  });
                },
              },
              {
                key: "deletePost",
                value: function (t) {
                  return d.a.delete("".concat(v).concat(t));
                },
              },
            ]),
            t
          );
        })();
      e.a = y;
    },
  },
  [[254, 24, 1, 25]],
]);
