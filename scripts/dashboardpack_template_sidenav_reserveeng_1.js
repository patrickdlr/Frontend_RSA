(function (e) {
  function t(t) {
    for (
      var a, o, i = t[0], c = t[1], l = t[2], d = 0, u = [];
      d < i.length;
      d++
    )
      (o = i[d]), s[o] && u.push(s[o][0]), (s[o] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
    h && h(t);
    while (u.length) u.shift()();
    return r.push.apply(r, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], a = !0, o = 1; o < n.length; o++) {
        var i = n[o];
        0 !== s[i] && (a = !1);
      }
      a && (r.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var a = {},
    o = { app: 0 },
    s = { app: 0 },
    r = [];
  function i(e) {
    return (
      c.p +
      "js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-03cb127c": "d876015d",
        "chunk-03e133b6": "3a5b1947",
        "chunk-051bdaa3": "f443b0ed",
        "chunk-05d0a737": "3d4af44a",
        "chunk-184b9536": "2bb138d9",
        "chunk-26b0bb08": "291a433d",
        "chunk-28ec8ce6": "5dac6854",
        "chunk-2d0a4d60": "374efd87",
        "chunk-2d0e28a9": "f8498513",
        "chunk-2d213f26": "b6e434d2",
        "chunk-3349ebea": "7a202c2f",
        "chunk-3b7267b3": "0108a504",
        "chunk-432a7420": "1e572646",
        "chunk-4c2a4c50": "a15914fe",
        "chunk-4e33ea80": "47d676f8",
        "chunk-5b09fbac": "b696f3f7",
        "chunk-63082e8a": "0a13ca8d",
        "chunk-2d0e93a6": "80f24fd8",
        "chunk-2d222d1a": "54e61d75",
        "chunk-6a52c407": "46b53bbe",
        "chunk-7895e7a7": "2e090533",
        "chunk-7f609936": "8f2f8cb8",
        "chunk-8dead446": "920e8d6b",
        "chunk-b599e804": "394e1c37",
        "chunk-fc1f75c4": "cb3c50dd",
        "chunk-ffa65332": "d8b2dc4e",
      }[e] +
      ".js"
    );
  }
  function c(t) {
    if (a[t]) return a[t].exports;
    var n = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.e = function (e) {
    var t = [],
      n = { "chunk-05d0a737": 1 };
    o[e]
      ? t.push(o[e])
      : 0 !== o[e] &&
        n[e] &&
        t.push(
          (o[e] = new Promise(function (t, n) {
            for (
              var a =
                  "css/" +
                  ({}[e] || e) +
                  "." +
                  {
                    "chunk-03cb127c": "31d6cfe0",
                    "chunk-03e133b6": "31d6cfe0",
                    "chunk-051bdaa3": "31d6cfe0",
                    "chunk-05d0a737": "188e04d6",
                    "chunk-184b9536": "31d6cfe0",
                    "chunk-26b0bb08": "31d6cfe0",
                    "chunk-28ec8ce6": "31d6cfe0",
                    "chunk-2d0a4d60": "31d6cfe0",
                    "chunk-2d0e28a9": "31d6cfe0",
                    "chunk-2d213f26": "31d6cfe0",
                    "chunk-3349ebea": "31d6cfe0",
                    "chunk-3b7267b3": "31d6cfe0",
                    "chunk-432a7420": "31d6cfe0",
                    "chunk-4c2a4c50": "31d6cfe0",
                    "chunk-4e33ea80": "31d6cfe0",
                    "chunk-5b09fbac": "31d6cfe0",
                    "chunk-63082e8a": "31d6cfe0",
                    "chunk-2d0e93a6": "31d6cfe0",
                    "chunk-2d222d1a": "31d6cfe0",
                    "chunk-6a52c407": "31d6cfe0",
                    "chunk-7895e7a7": "31d6cfe0",
                    "chunk-7f609936": "31d6cfe0",
                    "chunk-8dead446": "31d6cfe0",
                    "chunk-b599e804": "31d6cfe0",
                    "chunk-fc1f75c4": "31d6cfe0",
                    "chunk-ffa65332": "31d6cfe0",
                  }[e] +
                  ".css",
                s = c.p + a,
                r = document.getElementsByTagName("link"),
                i = 0;
              i < r.length;
              i++
            ) {
              var l = r[i],
                d = l.getAttribute("data-href") || l.getAttribute("href");
              if ("stylesheet" === l.rel && (d === a || d === s)) return t();
            }
            var u = document.getElementsByTagName("style");
            for (i = 0; i < u.length; i++) {
              (l = u[i]), (d = l.getAttribute("data-href"));
              if (d === a || d === s) return t();
            }
            var h = document.createElement("link");
            (h.rel = "stylesheet"),
              (h.type = "text/css"),
              (h.onload = t),
              (h.onerror = function (t) {
                var a = (t && t.target && t.target.src) || s,
                  r = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + a + ")"
                  );
                (r.code = "CSS_CHUNK_LOAD_FAILED"),
                  (r.request = a),
                  delete o[e],
                  h.parentNode.removeChild(h),
                  n(r);
              }),
              (h.href = s);
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(h);
          }).then(function () {
            o[e] = 0;
          }))
        );
    var a = s[e];
    if (0 !== a)
      if (a) t.push(a[2]);
      else {
        var r = new Promise(function (t, n) {
          a = s[e] = [t, n];
        });
        t.push((a[2] = r));
        var l,
          d = document.createElement("script");
        (d.charset = "utf-8"),
          (d.timeout = 120),
          c.nc && d.setAttribute("nonce", c.nc),
          (d.src = i(e)),
          (l = function (t) {
            (d.onerror = d.onload = null), clearTimeout(u);
            var n = s[e];
            if (0 !== n) {
              if (n) {
                var a = t && ("load" === t.type ? "missing" : t.type),
                  o = t && t.target && t.target.src,
                  r = new Error(
                    "Loading chunk " + e + " failed.\n(" + a + ": " + o + ")"
                  );
                (r.type = a), (r.request = o), n[1](r);
              }
              s[e] = void 0;
            }
          });
        var u = setTimeout(function () {
          l({ type: "timeout", target: d });
        }, 12e4);
        (d.onerror = d.onload = l), document.head.appendChild(d);
      }
    return Promise.all(t);
  }),
    (c.m = e),
    (c.c = a),
    (c.d = function (e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (c.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function (e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          c.d(
            n,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (c.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = ""),
    (c.oe = function (e) {
      throw (console.error(e), e);
    });
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    d = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var u = 0; u < l.length; u++) t(l[u]);
  var h = d;
  r.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("56d7");
  },
  "3c88": function (e, t) {
    e.exports =
      "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ3MDQwMTFBRUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3MDQwMTE5RUNGMDExRThBNjRDQzQyMTE5Mjk5QTQ0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI0RjBENjMzNUYyM0RFMUYwNjM4MTY4RTUyODFERkI3QSIgc3RSZWY6ZG9jdW1lbnRJRD0iNEYwRDYzMzVGMjNERTFGMDYzODE2OEU1MjgxREZCN0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwM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";
  },
  "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    n("14c6"), n("08c1"), n("4842"), n("d9fc");
    var a = n("a026"),
      o = n("8c4f");
    a["default"].use(o["a"]);
    var s = new o["a"]({
        scrollBehavior: function () {
          return window.scrollTo({ top: 0, behavior: "smooth" });
        },
        routes: [
          {
            path: "/",
            name: "analytics",
            component: function () {
              return Promise.all([
                n.e("chunk-63082e8a"),
                n.e("chunk-2d0e93a6"),
              ]).then(n.bind(null, "8d48"));
            },
          },
          {
            path: "/pages/login-boxed",
            name: "login-boxed",
            meta: { layout: "userpages" },
            component: function () {
              return n.e("chunk-2d0e28a9").then(n.bind(null, "7eaf"));
            },
          },
          {
            path: "/pages/register-boxed",
            name: "register-boxed",
            meta: { layout: "userpages" },
            component: function () {
              return n.e("chunk-2d0a4d60").then(n.bind(null, "07ad"));
            },
          },
          {
            path: "/pages/forgot-password-boxed",
            name: "forgot-password-boxed",
            meta: { layout: "userpages" },
            component: function () {
              return n.e("chunk-2d213f26").then(n.bind(null, "af9d"));
            },
          },
          {
            path: "/elements/buttons-standard",
            name: "buttons-standard",
            component: function () {
              return n.e("chunk-7f609936").then(n.bind(null, "99ae"));
            },
          },
          {
            path: "/elements/dropdowns",
            name: "dropdowns",
            component: function () {
              return n.e("chunk-4c2a4c50").then(n.bind(null, "f4d8"));
            },
          },
          {
            path: "/elements/icons",
            name: "icons",
            component: function () {
              return n.e("chunk-26b0bb08").then(n.bind(null, "b213"));
            },
          },
          {
            path: "/elements/badges-labels",
            name: "badges",
            component: function () {
              return n.e("chunk-fc1f75c4").then(n.bind(null, "6255"));
            },
          },
          {
            path: "/elements/cards",
            name: "cards",
            component: function () {
              return n.e("chunk-03e133b6").then(n.bind(null, "b832"));
            },
          },
          {
            path: "/elements/list-group",
            name: "list-group",
            component: function () {
              return n.e("chunk-4e33ea80").then(n.bind(null, "4e86"));
            },
          },
          {
            path: "/elements/timelines",
            name: "timeline",
            component: function () {
              return n.e("chunk-b599e804").then(n.bind(null, "c03b"));
            },
          },
          {
            path: "/elements/utilities",
            name: "utilities",
            component: function () {
              return n.e("chunk-432a7420").then(n.bind(null, "8651"));
            },
          },
          {
            path: "/components/tabs",
            name: "tabs",
            component: function () {
              return n.e("chunk-6a52c407").then(n.bind(null, "9af1"));
            },
          },
          {
            path: "/components/accordions",
            name: "accordions",
            component: function () {
              return n.e("chunk-5b09fbac").then(n.bind(null, "f884"));
            },
          },
          {
            path: "/components/modals",
            name: "modals",
            component: function () {
              return n.e("chunk-28ec8ce6").then(n.bind(null, "015a"));
            },
          },
          {
            path: "/components/progress-bar",
            name: "progress-bar",
            component: function () {
              return n.e("chunk-8dead446").then(n.bind(null, "9c6f4"));
            },
          },
          {
            path: "/components/tooltips-popovers",
            name: "tooltips-popovers",
            component: function () {
              return n.e("chunk-03cb127c").then(n.bind(null, "f0c7"));
            },
          },
          {
            path: "/components/carousel",
            name: "carousel",
            component: function () {
              return n.e("chunk-7895e7a7").then(n.bind(null, "46c4"));
            },
          },
          {
            path: "/components/pagination",
            name: "pagination",
            component: function () {
              return n.e("chunk-3349ebea").then(n.bind(null, "ace3"));
            },
          },
          {
            path: "/components/maps",
            name: "maps",
            component: function () {
              return n.e("chunk-05d0a737").then(n.bind(null, "424d"));
            },
          },
          {
            path: "/tables/regular-tables",
            name: "regular-tables",
            component: function () {
              return n.e("chunk-184b9536").then(n.bind(null, "be0b"));
            },
          },
          {
            path: "/widgets/chart-boxes-3",
            name: "chart-boxes-3",
            component: function () {
              return n.e("chunk-051bdaa3").then(n.bind(null, "ae3f"));
            },
          },
          {
            path: "/forms/controls",
            name: "controls",
            component: function () {
              return n.e("chunk-3b7267b3").then(n.bind(null, "1943"));
            },
          },
          {
            path: "/forms/layouts",
            name: "layouts",
            component: function () {
              return n.e("chunk-ffa65332").then(n.bind(null, "0e42"));
            },
          },
          {
            path: "/charts/chartjs",
            name: "chartjs",
            component: function () {
              return Promise.all([
                n.e("chunk-63082e8a"),
                n.e("chunk-2d222d1a"),
              ]).then(n.bind(null, "cfde"));
            },
          },
        ],
      }),
      r = n("9f7b"),
      i = n.n(r),
      c = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            n(
              e.layout,
              { tag: "component" },
              [
                n(
                  "transition",
                  { attrs: { name: "fade", mode: "out-in" } },
                  [n("router-view")],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      l = [],
      d = "default",
      u = {
        computed: {
          layout: function () {
            return (this.$route.meta.layout || d) + "-layout";
          },
        },
      },
      h = u,
      p = (n("5c0b"), n("2877")),
      f = Object(p["a"])(h, c, l, !1, null, null, null),
      b = f.exports,
      m = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "app-container app-theme-white" },
          [
            n(
              "transition",
              { attrs: { name: "fade", mode: "out-in", appear: "" } },
              [n("Header")],
              1
            ),
            n(
              "transition",
              { attrs: { name: "fade", mode: "out-in", appear: "" } },
              [n("Sidebar")],
              1
            ),
            n(
              "div",
              { staticClass: "app-main__outer" },
              [
                n(
                  "div",
                  { staticClass: "app-main__inner" },
                  [e._t("default")],
                  2
                ),
                n(
                  "transition",
                  { attrs: { name: "fade", mode: "out-in", appear: "" } },
                  [n("Footer")],
                  1
                ),
              ],
              1
            ),
            n("b-modal", { attrs: { id: "modal1", title: "Bootstrap-Vue" } }, [
              n("p", { staticClass: "my-4" }, [e._v("Hello from modal!")]),
            ]),
            n(
              "b-modal",
              { attrs: { id: "modallg", size: "lg", title: "Large Modal" } },
              [e._v("\n        Hello Modal!\n    ")]
            ),
            n(
              "b-modal",
              { attrs: { id: "modalsm", size: "sm", title: "Small Modal" } },
              [e._v("\n        Hello Modal!\n    ")]
            ),
          ],
          1
        );
      },
      v = [],
      A = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "app-header header-shadow" }, [
          n("div", { staticClass: "logo-src" }),
          n("div", { staticClass: "app-header__content" }, [
            n("div", { staticClass: "app-header-left" }, [n("SearchBox")], 1),
            n("div", { staticClass: "app-header-right" }, [n("UserArea")], 1),
          ]),
          n("div", { staticClass: "app-header__mobile-menu" }, [
            n("div", [
              n(
                "button",
                {
                  staticClass: "hamburger close-sidebar-btn hamburger--elastic",
                  class: { "is-active": e.isOpen },
                  attrs: { type: "button" },
                  on: {
                    click: function (t) {
                      return e.toggleMobile("closed-sidebar-open");
                    },
                  },
                },
                [e._m(0)]
              ),
            ]),
          ]),
          n("div", { staticClass: "app-header__menu" }, [
            n(
              "span",
              [
                n(
                  "b-button",
                  {
                    staticClass: "btn-icon btn-icon-only",
                    class: { active: e.isOpenMobileMenu },
                    attrs: { variant: "primary", size: "sm" },
                    on: {
                      click: function (t) {
                        return e.toggleMobile2("header-menu-open");
                      },
                    },
                  },
                  [
                    n(
                      "div",
                      { staticClass: "btn-icon-wrapper" },
                      [
                        n("font-awesome-icon", {
                          attrs: { icon: "ellipsis-v" },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
              ],
              1
            ),
          ]),
        ]);
      },
      g = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("span", { staticClass: "hamburger-box" }, [
            n("span", { staticClass: "hamburger-inner" }),
          ]);
        },
      ],
      k = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", [
          n(
            "div",
            { staticClass: "search-wrapper", class: { active: e.searchOpen } },
            [
              n("div", { staticClass: "input-holder" }, [
                n("input", {
                  staticClass: "search-input",
                  attrs: { type: "text", placeholder: "Type to search" },
                }),
                n(
                  "button",
                  {
                    staticClass: "search-icon",
                    on: {
                      click: function (t) {
                        e.searchOpen = !e.searchOpen;
                      },
                    },
                  },
                  [n("span")]
                ),
              ]),
              n("button", {
                staticClass: "close",
                on: {
                  click: function (t) {
                    e.searchOpen = !e.searchOpen;
                  },
                },
              }),
            ]
          ),
        ]);
      },
      C = [],
      w = {
        data: function () {
          return { searchOpen: !1 };
        },
      },
      M = w,
      x = Object(p["a"])(M, k, C, !1, null, null, null),
      y = x.exports,
      E = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a("div", { staticClass: "d-flex" }, [
          a("div", { staticClass: "header-btn-lg pr-0" }, [
            a("div", { staticClass: "widget-content p-0" }, [
              a("div", { staticClass: "widget-content-wrapper" }, [
                a(
                  "div",
                  { staticClass: "widget-content-left" },
                  [
                    a(
                      "b-dropdown",
                      {
                        attrs: {
                          "toggle-class": "p-0 mr-2",
                          "menu-class": "dropdown-menu-lg",
                          variant: "link",
                          right: "",
                        },
                      },
                      [
                        a(
                          "span",
                          {
                            attrs: { slot: "button-content" },
                            slot: "button-content",
                          },
                          [
                            a(
                              "div",
                              {
                                staticClass:
                                  "icon-wrapper icon-wrapper-alt rounded-circle",
                              },
                              [
                                a("img", {
                                  staticClass: "rounded-circle",
                                  attrs: {
                                    width: "42",
                                    src: n("3c88"),
                                    alt: "",
                                  },
                                }),
                              ]
                            ),
                          ]
                        ),
                        a(
                          "button",
                          {
                            staticClass: "dropdown-item",
                            attrs: { type: "button", tabindex: "0" },
                          },
                          [e._v("Menus")]
                        ),
                        a(
                          "button",
                          {
                            staticClass: "dropdown-item",
                            attrs: { type: "button", tabindex: "0" },
                          },
                          [e._v("Settings")]
                        ),
                        a(
                          "h6",
                          {
                            staticClass: "dropdown-header",
                            attrs: { tabindex: "-1" },
                          },
                          [e._v("Header")]
                        ),
                        a(
                          "button",
                          {
                            staticClass: "dropdown-item",
                            attrs: { type: "button", tabindex: "0" },
                          },
                          [e._v("Actions")]
                        ),
                        a("div", {
                          staticClass: "dropdown-divider",
                          attrs: { tabindex: "-1" },
                        }),
                        a(
                          "button",
                          {
                            staticClass: "dropdown-item",
                            attrs: { type: "button", tabindex: "0" },
                          },
                          [e._v("Dividers")]
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                e._m(0),
                a(
                  "div",
                  { staticClass: "widget-content-right header-user-info ml-3" },
                  [
                    a(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover",
                            modifiers: { hover: !0 },
                          },
                        ],
                        staticClass: "btn-shadow p-1",
                        attrs: {
                          title: "Tooltip Example",
                          size: "sm",
                          variant: "info",
                        },
                      },
                      [
                        a("font-awesome-icon", {
                          staticClass: "mr-1 ml-1",
                          attrs: { icon: "calendar-alt" },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]),
            ]),
          ]),
        ]);
      },
      O = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "widget-content-left  ml-3 header-user-info" },
            [
              n("div", { staticClass: "widget-heading" }, [
                e._v("Alina Mclourd"),
              ]),
              n("div", { staticClass: "widget-subheading" }, [
                e._v("VP People Manager"),
              ]),
            ]
          );
        },
      ],
      H = n("9d63"),
      B = n.n(H),
      S = n("ecee"),
      Q = n("c074"),
      W = n("ad3d");
    S["c"].add(
      Q["a"],
      Q["t"],
      Q["L"],
      Q["u"],
      Q["B"],
      Q["w"],
      Q["D"],
      Q["E"],
      Q["C"],
      Q["z"]
    );
    var j = {
        components: { VuePerfectScrollbar: B.a, "font-awesome-icon": W["a"] },
        data: function () {
          return {};
        },
        methods: {},
      },
      I = j,
      D = Object(p["a"])(I, E, O, !1, null, null, null),
      N = D.exports;
    S["c"].add(Q["A"]);
    var P = {
        name: "Header",
        components: { SearchBox: y, UserArea: N, "font-awesome-icon": W["a"] },
        data: function () {
          return { isOpen: !1, isOpenMobileMenu: !1 };
        },
        props: {},
        methods: {
          toggleMobile: function (e) {
            var t = document.body;
            (this.isOpen = !this.isOpen),
              this.isOpen ? t.classList.add(e) : t.classList.remove(e);
          },
          toggleMobile2: function (e) {
            var t = document.body;
            (this.isOpenMobileMenu = !this.isOpenMobileMenu),
              this.isOpenMobileMenu
                ? t.classList.add(e)
                : t.classList.remove(e);
          },
        },
      },
      L = P,
      R = Object(p["a"])(L, A, g, !1, null, null, null),
      T = R.exports,
      G = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            staticClass: "app-sidebar sidebar-shadow",
            on: {
              mouseover: function (t) {
                return e.toggleSidebarHover("add", "closed-sidebar-open");
              },
              mouseleave: function (t) {
                return e.toggleSidebarHover("remove", "closed-sidebar-open");
              },
            },
          },
          [
            n("div", { staticClass: "app-header__logo" }, [
              n("div", { staticClass: "logo-src" }),
              n("div", { staticClass: "header__pane ml-auto" }, [
                n(
                  "button",
                  {
                    staticClass:
                      "hamburger close-sidebar-btn hamburger--elastic",
                    class: { "is-active": e.isOpen },
                    attrs: { type: "button" },
                    on: {
                      click: function (t) {
                        return e.toggleBodyClass("closed-sidebar");
                      },
                    },
                  },
                  [e._m(0)]
                ),
              ]),
            ]),
            n("div", { staticClass: "app-sidebar-content" }, [e._m(1)], 1),
          ]
        );
      },
      Y = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("span", { staticClass: "hamburger-box" }, [
            n("span", { staticClass: "hamburger-inner" }),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "VuePerfectScrollbar",
            { staticClass: "app-sidebar-scroll" },
            [n("sidebar-menu", { attrs: { showOneChild: "", menu: e.menu } })],
            1
          );
        },
      ],
      z = n("4776"),
      F = {
        components: { SidebarMenu: z["SidebarMenu"], VuePerfectScrollbar: B.a },
        data: function () {
          return {
            isOpen: !1,
            sidebarActive: !1,
            menu: [
              { header: !0, title: "Main Navigation" },
              {
                title: "Dashboards",
                icon: "pe-7s-rocket",
                child: [{ href: "/", title: "Analytics" }],
              },
              {
                title: "Pages",
                icon: "pe-7s-browser",
                child: [
                  { href: "/pages/login-boxed", title: "Login Boxed" },
                  { href: "/pages/register-boxed", title: "Register Boxed" },
                  {
                    href: "/pages/forgot-password-boxed",
                    title: "Forgot Password Boxed",
                  },
                ],
              },
              { header: !0, title: "UI Components" },
              {
                icon: "pe-7s-diamond",
                title: "Elements",
                child: [
                  {
                    title: "Buttons",
                    child: [
                      { title: "Standard", href: "/elements/buttons-standard" },
                    ],
                  },
                  { title: "Dropdowns", href: "/elements/dropdowns" },
                  { title: "Icons", href: "/elements/icons" },
                  { title: "Badges", href: "/elements/badges-labels" },
                  { title: "Cards", href: "/elements/cards" },
                  { title: "List Groups", href: "/elements/list-group" },
                  { title: "Timeline", href: "/elements/timelines" },
                  { title: "Utilities", href: "/elements/utilities" },
                ],
              },
              {
                icon: "pe-7s-car",
                title: "Components",
                child: [
                  { title: "Tabs", href: "/components/tabs" },
                  { title: "Accordions", href: "/components/accordions" },
                  { title: "Modals", href: "/components/modals" },
                  { title: "Progress Bar", href: "/components/progress-bar" },
                  {
                    title: "Tooltips & Popovers",
                    href: "/components/tooltips-popovers",
                  },
                  { title: "Carousel", href: "/components/carousel" },
                  { title: "Pagination", href: "/components/pagination" },
                  { title: "Maps", href: "/components/maps" },
                ],
              },
              {
                icon: "pe-7s-display2",
                title: "Tables",
                child: [
                  { title: "Regular Tables", href: "/tables/regular-tables" },
                ],
              },
              { header: !0, title: "Dashboard Boxes" },
              {
                icon: "pe-7s-graph2",
                title: "Chart Boxes",
                href: "/widgets/chart-boxes-3",
              },
              { header: !0, title: "Forms" },
              {
                icon: "pe-7s-light",
                title: "Elements",
                child: [
                  { title: "Controls", href: "/forms/controls" },
                  { title: "Layouts", href: "/forms/layouts" },
                ],
              },
              { header: !0, title: "Charts" },
              {
                icon: "pe-7s-graph2",
                title: "ChartJS",
                href: "/charts/chartjs",
              },
            ],
            collapsed: !0,
            windowWidth: 0,
          };
        },
        props: { sidebarbg: String },
        methods: {
          toggleBodyClass: function (e) {
            var t = document.body;
            (this.isOpen = !this.isOpen),
              this.isOpen ? t.classList.add(e) : t.classList.remove(e);
          },
          toggleSidebarHover: function (e, t) {
            var n = document.body;
            (this.sidebarActive = !this.sidebarActive),
              (this.windowWidth = document.documentElement.clientWidth),
              this.windowWidth > "992" &&
                ("add" === e ? n.classList.add(t) : n.classList.remove(t));
          },
          getWindowWidth: function () {
            var e = document.body;
            (this.windowWidth = document.documentElement.clientWidth),
              this.windowWidth < "1350"
                ? e.classList.add("closed-sidebar", "closed-sidebar-md")
                : e.classList.remove("closed-sidebar", "closed-sidebar-md");
          },
        },
        mounted: function () {
          this.$nextTick(function () {
            window.addEventListener("resize", this.getWindowWidth),
              this.getWindowWidth();
          });
        },
        beforeDestroy: function () {
          window.removeEventListener("resize", this.getWindowWidth);
        },
      },
      _ = F,
      J = Object(p["a"])(_, G, Y, !1, null, null, null),
      U = J.exports,
      X = function () {
        var e = this,
          t = e.$createElement;
        e._self._c;
        return e._m(0);
      },
      Z = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "app-footer" }, [
            n("div", { staticClass: "app-footer__inner text-center" }, [
              e._v("\n        Copyright 2022 DashboardPack.com\n    "),
            ]),
          ]);
        },
      ];
    S["c"].add(Q["A"]);
    var V = { name: "Footer", components: {} },
      K = V,
      q = Object(p["a"])(K, X, Z, !1, null, null, null),
      $ = q.exports;
    S["c"].add(Q["y"]);
    var ee = {
        name: "app",
        components: {
          Header: T,
          Sidebar: U,
          Footer: $,
          VuePerfectScrollbar: B.a,
          "font-awesome-icon": W["a"],
        },
        methods: {},
      },
      te = ee,
      ne = Object(p["a"])(te, m, v, !1, null, null, null),
      ae = ne.exports,
      oe = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "app-container app-theme-white" },
          [e._t("default")],
          2
        );
      },
      se = [],
      re = { name: "app", components: {}, methods: {} },
      ie = re,
      ce = Object(p["a"])(ie, oe, se, !1, null, null, null),
      le = ce.exports;
    (a["default"].config.productionTip = !1),
      a["default"].use(i.a),
      a["default"].component("default-layout", ae),
      a["default"].component("userpages-layout", le),
      new a["default"]({
        el: "#app",
        router: s,
        template: "<App/>",
        components: { App: b },
      });
  },
  "5c0b": function (e, t, n) {
    "use strict";
    var a = n("5e27"),
      o = n.n(a);
    o.a;
  },
  "5e27": function (e, t, n) {},
});
