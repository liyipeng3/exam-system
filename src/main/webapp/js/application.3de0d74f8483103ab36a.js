webpackJsonp([1], {
    0: function (e, t, a) {
        a("j1ja"), e.exports = a("yRVU")
    }, 1: function (e, t) {
    }, 2: function (e, t) {
    }, OMN4: function (e, t) {
        e.exports = axios
    }, PAGp: function (e, t) {
    }, Rcy9: function (e, t) {
    }, SJI6: function (e, t) {
        e.exports = Vuex
    }, kaMK: function (e, t) {
    }, pRNm: function (e, t) {
        e.exports = VueRouter
    }, xLFN: function (e, t) {
    }, yQYP: function (e, t) {
    }, yRVU: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var s = {};
        a.d(s, "loading", function () {
            return Ke
        }), a.d(s, "url", function () {
            return Ge
        }), a.d(s, "api", function () {
            return je
        }), a.d(s, "token", function () {
            return Ve
        }), a.d(s, "user", function () {
            return ze
        }), a.d(s, "company", function () {
            return Fe
        }), a.d(s, "companyRights", function () {
            return He
        }), a.d(s, "advancedSetRights", function () {
            return qe
        }), a.d(s, "currentNavItem", function () {
            return We
        }), a.d(s, "adminNavs", function () {
            return Ye
        }), a.d(s, "examPcNavs", function () {
            return Je
        }), a.d(s, "examMNavs", function () {
            return Qe
        }), a.d(s, "dialogs", function () {
            return Xe
        });
        var n = {
                render: function () {
                    var e = this.$createElement, t = this._self._c || e;
                    return t("div", {attrs: {id: "app"}}, [t("router-view")], 1)
                }, staticRenderFns: []
            }, o = a("VU/8")({name: "App"}, n, !1, null, null, null).exports, i = (a("yQYP"), a("mvHQ")), r = a.n(i),
            l = a("pRNm"), d = a.n(l), c = a("hKoQ"), u = a.n(c), p = a("OMN4"), m = a.n(p), h = "admin",
            f = "/admin/user", g = {
                apiBase: function (e) {
                    return v(e)
                }, apiPublic: function () {
                    return {
                        base: e = v() + "/public",
                        normal: e + "/excute",
                        upload: e + "/upload",
                        uploadSecret: e + "/secret_upload",
                        download: e + "/download",
                        loginCheck: e + "/login_check",
                        logout: e + "/logout"
                    };
                    var e
                }, apiProject: function () {
                    return function () {
                        var e = void 0;
                        switch (f) {
                            case"/admin/testQuestions":
                                e = v() + "/admin/excute";
                                break;
                            case"/admin/application":
                            case"/exam/m/application":
                            case"/exam/pc/application":
                                e = v() + "/api_sign_up/excute";
                                break;
                            case"/admin/customprocess":
                            case"/exam/m/customprocess":
                            case"/exam/pc/customprocess":
                                e = v() + "/custom_process/excute";
                                break;
                            case"/admin/user":
                                e = v() + "/admin_user/excute"
                        }
                        return e
                    }()
                }
            };

        function v(e) {
            var t = void 0;
            switch (h) {
                case"localhost":
                    t = "http://localhost:8080";
                    break;
                case"test":
                    t = "https://test..com";
                    break;
                case"label":
                    t = "https://label..com";
                    break;
                case"stag":
                    t = "https://stag..com";
                    break;
                case"preview":
                    t = "https://preview..com";
                    break;
                default:
                    t = void 0 == e ? "https://" + h + "..com" : "https://" + e + "..com"
            }
            return t
        }

        u.a.polyfill();
        var _ = m.a.create({baseURL: g.apiPublic().normal, timeout: 15e3, withCredentials: !0});
        _.interceptors.response.use(function (e) {
            return e.data
        }, function (e) {
        });
        var I = _, b = "admin", y = "/admin/user", C = {
            urlBase: function () {
                return S()
            }, urlProject: function (e) {
                return function (e) {
                    return void 0 == e ? S() + y + "/#" : S() + e + "/#"
                }(e)
            }
        };

        function S() {
            var e = void 0;
            switch (b) {
                case"localhost":
                    e = "http://localhost:8082";
                    break;
                case"test":
                    e = "http://test..com:8082";
                    break;
                case"stag":
                    e = "http://stag..com:8082";
                    break;
                case"label":
                    e = "http://label..com:8082";
                    break;
                case"preview":
                    e = "http://preview..com:8082";
                    break;
                default:
                    e = "https://v..com"
            }
            return e
        }

        var k = g.apiBase("www"), w = g.apiPublic(), x = C.urlProject(), N = C.urlBase(), E = a("Dd8w"), T = a.n(E),
            U = a("SJI6"), P = {
                computed: T()({}, Object(U.mapGetters)({api: "api"})), methods: {
                    goBack: function () {
                        this.$router.go(-1)
                    }, goOriginal: function () {
                        window.location.href = this.api.apiBase("admin") + "/account/admin/index"
                    }
                }
            }, D = {
                render: function () {
                    var e = this, t = e.$createElement, a = e._self._c || t;
                    return a("el-container", {staticClass: "viewFrameWork public responsive"}, [a("el-main", {staticClass: "viewFrameWork-main"}, [a("div", {staticClass: "info-area"}, [a("div", {staticClass: "status-img"}, [a("img", {
                        attrs: {
                            src: "https://cdnoss..com/ksxing_static/vue/images/public/404.png",
                            alt: ""
                        }
                    })]), e._v(" "), a("div", {staticClass: "desc"}, [e._v("\n        你访问的页面不存在 \n      ")]), e._v(" "), a("div", {staticClass: "jump hidden-xs"}, [a("el-button", {
                        attrs: {type: "text"},
                        on: {click: e.goOriginal}
                    }, [e._v("回到首页")])], 1), e._v(" "), a("div", {staticClass: "jump visible-xs"}, [a("el-button", {
                        attrs: {
                            type: "primary",
                            round: ""
                        }, on: {click: e.goOriginal}
                    }, [e._v("回到首页")])], 1)])])], 1)
                }, staticRenderFns: []
            }, A = a("VU/8")(P, D, !1, null, null, null).exports, $ = {
                computed: T()({}, Object(U.mapGetters)({api: "api"})), methods: {
                    goBack: function () {
                        this.$router.go(-1)
                    }, goOriginal: function () {
                        window.location.href = this.api.apiBase("admin") + "/account/admin/index"
                    }
                }
            }, R = {
                render: function () {
                    var e = this, t = e.$createElement, a = e._self._c || t;
                    return a("el-container", {staticClass: "viewFrameWork public"}, [a("el-main", {staticClass: "viewFrameWork-main"}, [a("div", {staticClass: "info-area"}, [a("div", {staticClass: "status-img"}, [a("img", {
                        attrs: {
                            src: "https://cdnoss..com/ksxing_static/vue/images/public/500.png",
                            alt: ""
                        }
                    })]), e._v(" "), a("div", {staticClass: "desc"}, [e._v("\n        系统发生故障，请联系管理员\n      ")]), e._v(" "), a("div", {staticClass: "jump hidden-xs"}, [a("el-button", {
                        attrs: {type: "text"},
                        on: {click: e.goBack}
                    }, [e._v("重试")]), e._v(" "), a("el-button", {
                        attrs: {type: "text"},
                        on: {click: e.goOriginal}
                    }, [e._v("回到首页")])], 1), e._v(" "), a("div", {staticClass: "jump visible-xs"}, [a("el-button", {
                        attrs: {
                            type: "primary",
                            plain: "",
                            round: ""
                        }
                    }, [e._v("重试")]), e._v(" "), a("el-button", {
                        attrs: {type: "primary", round: ""},
                        on: {click: e.goOriginal}
                    }, [e._v("回到首页")])], 1)])])], 1)
                }, staticRenderFns: []
            }, L = a("VU/8")($, R, !1, null, null, null).exports, O = {
                computed: T()({}, Object(U.mapGetters)({api: "api"}), {
                    message: function () {
                        return this.$route.query.message
                    }
                }), methods: {
                    goBack: function () {
                        this.$router.go(-1)
                    }, goOriginal: function () {
                        window.location.href = this.api.apiBase("admin") + "/account/admin/index"
                    }
                }
            }, M = {
                render: function () {
                    var e = this, t = e.$createElement, a = e._self._c || t;
                    return a("el-container", {staticClass: "viewFrameWork public"}, [a("el-header", {
                        staticClass: "viewFrameWork-header hidden-xs",
                        attrs: {height: "70px"}
                    }, [a("div", {staticClass: "header"}, [a("div", {staticClass: "header-left"}, [a("img", {
                        staticClass: "item item-logo",
                        attrs: {
                            src: "https://cdnoss..com/ksxing_static/vue/images/base/logo-transparent-header.svg",
                            alt: ""
                        }
                    })]), e._v(" "), a("div", {staticClass: "header-right"}, [a("div", {staticClass: "item service"}, [a("i", {staticClass: "icon icon-a_help_service"}), e._v("\n          400-800-1477\n        ")])])])]), e._v(" "), a("el-main", {staticClass: "viewFrameWork-main"}, [a("div", {staticClass: "info-area"}, [a("div", {staticClass: "status-img"}, [a("img", {
                        attrs: {
                            src: "https://cdnoss..com/ksxing_static/vue/images/public/info.png",
                            alt: ""
                        }
                    })]), e._v(" "), a("div", {staticClass: "desc"}, [e._v("\n        " + e._s(e.message) + "\n      ")]), e._v(" "), a("div", {staticClass: "jump hidden-xs"}, [a("el-button", {
                        attrs: {type: "text"},
                        on: {click: e.goBack}
                    }, [e._v("重试")]), e._v(" "), a("el-button", {
                        attrs: {type: "text"},
                        on: {click: e.goOriginal}
                    }, [e._v("回到首页")])], 1), e._v(" "), a("div", {staticClass: "jump visible-xs"}, [a("el-button", {
                        attrs: {
                            type: "primary",
                            plain: "",
                            round: ""
                        }
                    }, [e._v("重试")]), e._v(" "), a("el-button", {
                        attrs: {type: "primary", round: ""},
                        on: {click: e.goOriginal}
                    }, [e._v("回到首页")])], 1)])])], 1)
                }, staticRenderFns: []
            }, B = a("VU/8")(O, M, !1, null, null, null).exports, K = {
                computed: T()({}, Object(U.mapGetters)({api: "api"}), {
                    message: function () {
                        return this.$route.query.message
                    }
                }), methods: {
                    goBack: function () {
                        this.$router.go(-1)
                    }, goOriginal: function () {
                        window.location.href = this.api.apiBase("admin") + "/account/admin/index"
                    }
                }
            }, G = {
                render: function () {
                    var e = this, t = e.$createElement, a = e._self._c || t;
                    return a("el-container", {staticClass: "viewFrameWork public"}, [a("el-header", {
                        staticClass: "viewFrameWork-header hidden-xs",
                        attrs: {height: "70px"}
                    }, [a("div", {staticClass: "header"}, [a("div", {staticClass: "header-left"}, [a("img", {
                        staticClass: "item item-logo",
                        attrs: {
                            src: "https://cdnoss..com/ksxing_static/vue/images/base/logo-transparent-header.svg",
                            alt: ""
                        }
                    })]), e._v(" "), a("div", {staticClass: "header-right"}, [a("div", {staticClass: "item service"}, [a("i", {staticClass: "icon icon-a_help_service"}), e._v("\n          400-800-1477\n        ")])])])]), e._v(" "), a("el-main", {staticClass: "viewFrameWork-main"}, [a("div", {staticClass: "info-area"}, [a("div", {staticClass: "status-img"}, [a("img", {
                        attrs: {
                            src: "https://cdnoss..com/ksxing_static/vue/images/public/info.png",
                            alt: ""
                        }
                    })]), e._v(" "), a("div", {staticClass: "desc"}, [e._v("\n        您没有权限，请联系管理员\n      ")]), e._v(" "), a("div", {staticClass: "jump hidden-xs"}, [a("el-button", {
                        attrs: {type: "text"},
                        on: {click: e.goBack}
                    }, [e._v("重试")]), e._v(" "), a("el-button", {
                        attrs: {type: "text"},
                        on: {click: e.goOriginal}
                    }, [e._v("回到首页")])], 1), e._v(" "), a("div", {staticClass: "jump visible-xs"}, [a("el-button", {
                        attrs: {
                            type: "primary",
                            plain: "",
                            round: ""
                        }
                    }, [e._v("重试")]), e._v(" "), a("el-button", {
                        attrs: {type: "primary", round: ""},
                        on: {click: e.goOriginal}
                    }, [e._v("回到首页")])], 1)])])], 1)
                }, staticRenderFns: []
            }, j = a("VU/8")(K, G, !1, null, null, null).exports, V = a("bOdI"), z = a.n(V),
            F = {computed: T()({}, Object(U.mapGetters)({api: "api"}))}, H = {
                render: function () {
                    var e = this.$createElement, t = this._self._c || e;
                    return t("el-badge", {staticClass: "item item-notification"}, [t("a", {attrs: {href: this.api.apiBase("admin") + "/account/notification/1"}}, [t("i", {staticClass: "icon-p_top_message icon item-icon"})])])
                }, staticRenderFns: []
            };
        var q, W = {
            name: "adminApp",
            components: {
                Notification: a("VU/8")(F, H, !1, function (e) {
                    a("PAGp")
                }, "data-v-ce850100", null).exports
            },
            data: function () {
                return {
                    isCollapse: !1,
                    currentMenu: "",
                    defaultPic: "https://cdnoss..com/ksxing_static/vue/images/user/default-pic.png",
                    zhiManager: {}
                }
            },
            computed: T()({}, Object(U.mapGetters)((q = {
                user: "user",
                url: "url",
                api: "api",
                loading: "loading",
                company: "company"
            }, z()(q, "user", "user"), z()(q, "navs", "adminNavs"), z()(q, "currentNavItem", "currentNavItem"), q))),
            methods: T()({}, Object(U.mapActions)({
                logout: "logout",
                getAdminBaseInfo: "getAdminBaseInfo",
                getAllRight: "getAllRights",
                checkAdvancedSet: "checkAdvancedSet"
            }), {
                navCollapse: function (e) {
                    this.isCollapse = !this.isCollapse
                }, handleOpen: function (e, t) {
                    this.currentMenu = e
                }, handleClose: function (e, t) {
                    this.$refs.menu.open(this.currentMenu)
                }, toExam: function () {
                    window.location.href = this.api.apiBase("exam") + "/exam"
                }, toChangeInfo: function () {
                    window.location.href = this.api.apiBase("admin") + "/admin/admin_information"
                }, onLogout: function () {
                    var e = this;
                    this.$confirm("您是否要退出登录？", "", {
                        customClass: "operation-warning",
                        confirmButtonClass: "confirm",
                        cancelButtonClass: "cancel",
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning",
                        center: !0
                    }).then(function () {
                        e.logout()
                    }).catch(function () {
                    })
                }, initZhichi: function () {
                    this.zhiManager = getzhiSDKInstance(), this.zhiManager.on("load", function () {
                        this.zhiManager.initBtnDOM()
                    }), this.zhiManager.set("location", 1), this.zhiManager.set("customBtn", "true"), this.zhiManager.set("customMargin", 30), this.zhiManager.set("manTrace", !0)
                }, showZhichi: function () {
                    this.zhiManager.expand(), ksxProbe.gioTrack("onlineInquire", 1, {
                        inquireFromPage_var: window.location.href,
                        inquireFromPageName_var: "vue项目内",
                        inquireFromPosition_var: "管理端帮助在线咨询"
                    })
                }
            }),
            beforeCreate: function () {
                this.$store.commit("START_LOADING"), this.$store.dispatch("getAdminBaseInfo"), this.$store.dispatch("getAllRights"), this.$store.dispatch("checkAdvancedSet")
            },
            mounted: function () {
                this.$store.commit("END_LOADING"), this.initZhichi()
            }
        }, Y = {
            render: function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("el-container", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.loading,
                        expression: "loading"
                    }],
                    staticClass: "viewFrameWork admin",
                    attrs: {"element-loading-text": "拼命加载中", "element-loading-background": "rgba(0, 0, 0, 0.8)"}
                }, [a("el-header", {
                    staticClass: "viewFrameWork-header",
                    attrs: {height: "70px"}
                }, [a("div", {staticClass: "header"}, [a("div", {staticClass: "header-left"}, [a("a", {attrs: {href: "https://admin..com/account/admin/index"}}, [a("img", {
                    staticClass: "item item-logo",
                    attrs: {src: e.company.logoUrl, alt: ""}
                })])]), e._v(" "), a("div", {staticClass: "header-middle"}, [a("router-view", {attrs: {name: "subNav"}})], 1), e._v(" "), a("div", {staticClass: "header-right"}, [a("notification")], 1)])]), e._v(" "), a("el-container", [a("el-aside", {class: ["viewFrameWork-sidebar", e.isCollapse ? "mini" : "full"]}, [a("el-menu", {
                    ref: "menu",
                    staticClass: "el-menu-vertical",
                    attrs: {"default-active": e.currentNavItem, "unique-opened": !0},
                    on: {open: e.handleOpen, close: e.handleClose}
                }, [a("el-tooltip", {
                    staticClass: "item",
                    attrs: {effect: "dark", content: e.isCollapse ? "展开导航" : "收起导航", placement: "right"}
                }, [a("li", {
                    staticClass: "el-menu-item item-collapse",
                    on: {click: e.navCollapse}
                }, [a("i", {class: [e.isCollapse ? "el-icon-d-arrow-right" : "el-icon-d-arrow-left"]})])]), e._v(" "), e._l(e.navs, function (t) {
                    return a("a", {
                        key: t.id,
                        attrs: {href: t.url ? t.url : "#"}
                    }, [a("el-tooltip", {
                        attrs: {
                            effect: "dark",
                            content: t.title,
                            placement: "right",
                            disabled: !e.isCollapse
                        }
                    }, [t.subMenu && 0 != t.subMenu.length ? a("el-submenu", {attrs: {index: t.id}}, [a("template", {slot: "title"}, [a("i", {class: ["icon", t.icon]}), e._v(" "), a("span", [e._v(e._s(t.title))])]), e._v(" "), e._l(t.subMenu, function (t) {
                        return t.show ? a("a", {
                            key: t.id,
                            attrs: {href: t.url}
                        }, [a("el-menu-item", {attrs: {index: t.id}}, [a("span", {
                            staticClass: "title",
                            attrs: {slot: "title"},
                            slot: "title"
                        }, [e._v(e._s(t.title))])])], 1) : e._e()
                    })], 2) : "sub_admin" != e.user.role || t.show ? a("el-menu-item", {attrs: {index: t.id}}, [a("i", {class: ["icon", t.icon]}), e._v(" "), a("span", {
                        staticClass: "title",
                        attrs: {slot: "title"},
                        slot: "title"
                    }, [e._v(e._s(t.title))]), e._v(" "), t.beta ? a("img", {
                        staticClass: "mark-beta",
                        attrs: {src: "https://cdnoss..com/ksxing_static/vue/images/icon/a_nav_beta.svg"}
                    }) : e._e()]) : e._e()], 1)], 1)
                }), e._v(" "), a("div", {staticClass: "fixed-bottom"}, [a("el-tooltip", {
                    attrs: {
                        effect: "dark",
                        content: "帮助",
                        placement: "right",
                        disabled: !e.isCollapse
                    }
                }, [a("el-popover", {
                    attrs: {
                        "popper-class": "ksx-popver el-global-help",
                        placement: "right",
                        width: "300",
                        trigger: "click"
                    }
                }, [a("el-row", [a("i", {staticClass: "icon icon-a_help_document"}), e._v(" "), a("a", {
                    staticClass: "content jump",
                    attrs: {href: "#", target: "_blank"}
                }, [e._v("帮助文档")])]), e._v(" "), a("el-row", [a("i", {staticClass: "icon icon-a_help_service"}), e._v(" "), a("div", {staticClass: "content"}, [e._v("\n                  人工客服\n                  "), a("div", [e._v("可"), a("a", {
                    staticClass: "link",
                    attrs: {href: "javascript:;", "data-gio-position": "管理端帮助在线咨询", target: "_blank"},
                    on: {click: e.showZhichi}
                }, [e._v("在线咨询")]), e._v("或拨打电话"), a("span", {staticClass: "phone"}, [e._v("400-870-1477")])])])]), e._v(" "), a("el-menu-item", {
                    attrs: {
                        slot: "reference",
                        index: "9"
                    }, slot: "reference"
                }, [a("i", {staticClass: "icon icon-a_nav_help"}), e._v(" "), a("img", {
                    staticClass: "mark-help",
                    attrs: {src: "https://cdnoss..com/ksxing_static/vue/images/icon/a_nav_new.svg"}
                }), e._v(" "), a("span", {
                    staticClass: "title",
                    attrs: {slot: "title"},
                    slot: "title"
                }, [e._v("帮助")])])], 1)], 1), e._v(" "), a("el-tooltip", {
                    attrs: {
                        effect: "dark",
                        content: e.user.surname,
                        placement: "right",
                        disabled: !e.isCollapse
                    }
                }, [a("el-popover", {
                    attrs: {
                        "popper-class": "ksx-popver el-global-company-info",
                        placement: "right",
                        width: "285",
                        trigger: "click"
                    }
                }, [a("el-row", {staticClass: "user"}, [a("div", {staticClass: "user-character"}, [a("img", {
                    attrs: {
                        src: e.user.picture ? e.user.picture : e.defaultPic,
                        alt: ""
                    }
                })]), e._v(" "), a("div", {staticClass: "user-info"}, [a("div", {staticClass: "user-surname"}, [a("div", {staticClass: "name ellipse"}, [e._v("\n                        " + e._s(e.user.surname) + "\n                      ")])]), e._v(" "), a("div", {staticClass: "company-name ellipse"}, [e._v(e._s(e.company.companyName))])])]), e._v(" "), a("ul", {staticClass: "operate-group"}, [a("li", {
                    staticClass: "operate-item",
                    on: {click: e.toExam}
                }, [a("i", {staticClass: "operate-icon icon-a_personal_switch"}), e._v("\n                  切换至考生端"), a("i", {staticClass: "operate-right-icon icon-a_enter"})]), e._v(" "), a("li", {
                    staticClass: "operate-item",
                    on: {click: e.toChangeInfo}
                }, [a("i", {staticClass: "operate-icon icon-a_personal_edit"}), e._v("\n                  修改个人信息"), a("i", {staticClass: "operate-right-icon icon-a_enter"})]), e._v(" "), a("li", {
                    staticClass: "operate-item",
                    on: {click: e.onLogout}
                }, [a("i", {staticClass: "operate-icon icon-a_personal_exit"}), e._v("退出\n                ")])]), e._v(" "), a("el-menu-item", {
                    staticClass: "ellipse",
                    attrs: {slot: "reference", index: "10"},
                    slot: "reference"
                }, [a("i", {staticClass: "icon icon-a_nav_my"}), e._v(" "), a("span", {
                    staticClass: "title",
                    attrs: {slot: "title"},
                    slot: "title"
                }, [e._v(e._s(e.user.surname))])])], 1)], 1)], 1), e._v(" "), a("div", {staticClass: "nav-color-padding"})], 2)], 1), e._v(" "), a("el-container", {staticClass: "viewFrameWork-body"}, [a("el-main", {staticClass: "body-wrapper"}, [a("div", {staticClass: "body-content"}, [a("router-view", {attrs: {name: "main"}})], 1)])], 1)], 1)], 1)
            }, staticRenderFns: []
        };
        var J = a("VU/8")(W, Y, !1, function (e) {
            a("Rcy9")
        }, null, null).exports, Q = a("NC6I"), X = a.n(Q), Z = {
            data: function () {
                return {
                    popupVisible: !1,
                    elId: Math.random(),
                    dialogImageUrl: "",
                    dialogImageId: "",
                    dialogImageName: ""
                }
            },
            props: ["currentDep"],
            computed: T()({}, Object(U.mapGetters)({
                userInfo: "userList/userInfo",
                dialogs: "userList/dialogs",
                userInfoKeyName: "userList/userInfoKeyName",
                token: "token",
                user: "user",
                api: "api"
            }), {
                fileList: function () {
                    if ("" != this.userInfo.identityImg) return [{
                        name: this.userInfo.identityImgName,
                        url: this.api.apiPublic().download + "?userId=" + this.user.id + "&token=" + this.token + "&imageId=" + this.userInfo.identityImg
                    }];
                    return []
                }
            }),
            methods: T()({}, Object(U.mapMutations)({
                resetUserForm: "userList/RESET_USER_INFO_FORM",
                updateUserDep: "userList/UPDATE_USER_INFO_FORM_DEP",
                encryptPassword: "userList/ENCRYPT_PASSWORD",
                uploadImg: "userList/QUESTION_IMG_UPLOAD",
                deleteImg: "userList/QUESTION_IMG_DELETE"
            }), Object(U.mapActions)({addUser: "userList/addUser", checkUnameExist: "userList/checkUnameExist"}), {
                onExceed: function (e) {
                    this.$message.error("只能上传一张照片！")
                }, beforeAvatarUpload: function (e) {
                    var t = "image/jpeg" === e.type, a = "image/png" === e.type, s = e.size / 1024 < 500;
                    return t || a || this.$message.error("上传图片只能是 JPG/PNG 格式!"), s || this.$message.error("上传图片大小不能超过 500kb!"), (t || a) && s
                }, handleSuccess: function (e, t) {
                    var a = e.data;
                    a.success && (this.dialogImageId = a.bizContent.imageId, this.dialogImageName = t.name)
                }, handlePreview: function (e) {
                    this.dialogImageUrl = e.url, this.popupVisible = !0
                }, handleRemove: function (e, t) {
                    this.deleteImg({dialogImageId: this.dialogImageId, dialogImageName: this.dialogImageName})
                }, handleTreeOpen: function () {
                    this.dialogs.depTree.showState = !0, this.dialogs.depTree.sureMethod = "handleTreeChoose"
                }, saveUserInfo: function () {
                    if (this.uploadImg({
                        imageId: this.dialogImageId,
                        fileName: this.dialogImageName
                    }), "" == this.userInfo.departmentId) return this.$message({
                        type: "warning",
                        message: "请选择部门！"
                    }), !1;
                    0 == document.getElementById("dialogAddUser").getElementsByClassName("is-error").length && this.onValidateAll() && (this.encryptPassword({
                        key: "passwordTmp",
                        value: X()(this.userInfo.passwordTmp)
                    }), this.encryptPassword({
                        key: "password",
                        value: X()(this.userInfo.password)
                    }), this.addUser({$message: this.$message}))
                }, endUserInfo: function () {
                    this.dialogs.userInfoAdd = !1, this.dialogImageUrl = "", this.handleRemove(), document.getElementsByClassName("el-upload-list el-upload-list--picture")[0].innerHTML = ""
                }, onValidatePassword: function (e) {
                    for (var t = document.getElementsByClassName("validate"), a = "", s = 0; s < t.length; s++) {
                        var n = t[s];
                        if (n.contains(e.target)) {
                            a = n;
                            break
                        }
                    }
                    this.userInfo.passwordTmp == this.userInfo.password ? (a.classList.remove("is-error"), a.getElementsByClassName("error")[0].innerHTML = "", this.onValidate(e)) : (a.classList.add("is-error"), a.getElementsByClassName("error")[0].innerHTML = "两次输入不一致")
                }, onValidateUserName: function (e) {
                    this.onValidate(e) && this.checkUnameExist()
                }, handleUserNameFocus: function () {
                    this.userInfo.isReduplicated = !1
                }, onValidate: function (e) {
                    return KSX.validateOne(e)
                }, onValidateAll: function () {
                    return KSX.validateAll(document.getElementById("dialogAddUser"))
                }, handleOpen: function () {
                    this.resetUserForm(), KSX.validateCancel(), this.updateUserDep({
                        name: this.currentDep.name,
                        id: this.currentDep.id
                    })
                }
            })
        }, ee = {
            render: function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("el-dialog", {
                    staticClass: "dialog-dep-user-info fixed",
                    attrs: {
                        title: "添加人员",
                        visible: e.dialogs.userInfoAdd,
                        width: "440px",
                        center: !0,
                        id: "dialogAddUser"
                    },
                    on: {
                        "update:visible": function (t) {
                            e.$set(e.dialogs, "userInfoAdd", t)
                        }, open: e.handleOpen, click: function (t) {
                            e.dialogs.userInfoAdd = !1
                        }
                    }
                }, [a("el-form", {
                    ref: "form",
                    attrs: {model: e.userInfo, "label-width": "80px", size: "mini"}
                }, [a("el-form-item", {
                    class: ["validate", e.userInfo.isReduplicated ? "is-v-error" : ""],
                    attrs: {
                        label: "* 账号",
                        "data-validate-content": e.userInfo.userName,
                        "data-validate-required": !0,
                        "data-validate-rule": "userName"
                    }
                }, [a("el-input", {
                    attrs: {placeholder: "账号只能包含数字、字母、连字符和下划线", maxlength: "60"},
                    on: {blur: e.onValidateUserName, focus: e.handleUserNameFocus},
                    model: {
                        value: e.userInfo.userName, callback: function (t) {
                            e.$set(e.userInfo, "userName", t)
                        }, expression: "userInfo.userName"
                    }
                }), e._v(" "), e.userInfo.isReduplicated ? a("div", {staticClass: "v-error"}, [e._v("账号已存在")]) : e._e(), e._v(" "), a("div", {staticClass: "error"})], 1), e._v(" "), a("el-form-item", {
                    staticClass: "validate",
                    attrs: {label: "* 姓名", "data-validate-content": e.userInfo.surname, "data-validate-required": !0}
                }, [a("el-input", {
                    attrs: {placeholder: "请输入姓名", maxlength: "60"},
                    on: {blur: e.onValidate},
                    model: {
                        value: e.userInfo.surname, callback: function (t) {
                            e.$set(e.userInfo, "surname", t)
                        }, expression: "userInfo.surname"
                    }
                })], 1), e._v(" "), a("el-form-item", {
                    staticClass: "validate",
                    attrs: {
                        label: "* 密码",
                        "data-validate-content": e.userInfo.passwordTmp,
                        "data-validate-required": !0,
                        "data-validate-rule": "userPassword"
                    }
                }, [a("el-input", {
                    attrs: {type: "password", placeholder: "密码大于等于6位小于等于20位"},
                    on: {blur: e.onValidate},
                    model: {
                        value: e.userInfo.passwordTmp, callback: function (t) {
                            e.$set(e.userInfo, "passwordTmp", t)
                        }, expression: "userInfo.passwordTmp"
                    }
                }), e._v(" "), a("div", {staticClass: "error"})], 1), e._v(" "), a("el-form-item", {
                    staticClass: "validate",
                    attrs: {
                        label: "* 确认",
                        "data-validate-content": e.userInfo.password,
                        "data-validate-required": !0,
                        "data-validate-rule": "userPassword"
                    }
                }, [a("el-input", {
                    attrs: {type: "password", placeholder: "再次输入密码"},
                    on: {blur: e.onValidatePassword},
                    model: {
                        value: e.userInfo.password, callback: function (t) {
                            e.$set(e.userInfo, "password", t)
                        }, expression: "userInfo.password"
                    }
                }), e._v(" "), a("div", {staticClass: "error"})], 1), e._v(" "), a("el-form-item", {attrs: {label: "部门"}}, [a("div", {
                    staticClass: "el-form-choose",
                    on: {click: e.handleTreeOpen}
                }, [e._v(e._s(e.userInfo.departmentName ? e.userInfo.departmentName : "请选择"))])]), e._v(" "), a("el-form-item", {attrs: {label: "性别"}}, [a("el-radio-group", {
                    model: {
                        value: e.userInfo.sex,
                        callback: function (t) {
                            e.$set(e.userInfo, "sex", t)
                        },
                        expression: "userInfo.sex"
                    }
                }, [a("el-radio", {attrs: {label: 1}}, [e._v("男")]), e._v(" "), a("el-radio", {attrs: {label: 0}}, [e._v("女")])], 1)], 1), e._v(" "), a("el-form-item", {
                    staticClass: "validate",
                    attrs: {label: "手机", "data-validate-content": e.userInfo.phone, "data-validate-rule": "phone"}
                }, [a("el-input", {
                    attrs: {placeholder: "请输入手机号", maxlength: "60"},
                    on: {blur: e.onValidate},
                    model: {
                        value: e.userInfo.phone, callback: function (t) {
                            e.$set(e.userInfo, "phone", t)
                        }, expression: "userInfo.phone"
                    }
                }), e._v(" "), a("div", {staticClass: "error"})], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.identityCard}}, [a("el-input", {
                    attrs: {
                        maxlength: "60",
                        placeholder: "请输入" + e.userInfoKeyName.identityCard
                    }, model: {
                        value: e.userInfo.identityCard, callback: function (t) {
                            e.$set(e.userInfo, "identityCard", t)
                        }, expression: "userInfo.identityCard"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.position}}, [a("el-input", {
                    attrs: {
                        maxlength: "60",
                        placeholder: "请输入" + e.userInfoKeyName.position
                    }, model: {
                        value: e.userInfo.position, callback: function (t) {
                            e.$set(e.userInfo, "position", t)
                        }, expression: "userInfo.position"
                    }
                })], 1), e._v(" "), a("el-form-item", {
                    staticClass: "validate",
                    attrs: {label: "邮箱", "data-validate-content": e.userInfo.email, "data-validate-rule": "email"}
                }, [a("el-input", {
                    attrs: {placeholder: "请输入邮箱", maxlength: "60"},
                    on: {blur: e.onValidate},
                    model: {
                        value: e.userInfo.email, callback: function (t) {
                            e.$set(e.userInfo, "email", t)
                        }, expression: "userInfo.email"
                    }
                }), e._v(" "), a("div", {staticClass: "error"})], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.notice}}, [a("el-input", {
                    attrs: {
                        maxlength: "60",
                        placeholder: "请输入" + e.userInfoKeyName.notice
                    }, model: {
                        value: e.userInfo.notice, callback: function (t) {
                            e.$set(e.userInfo, "notice", t)
                        }, expression: "userInfo.notice"
                    }
                })], 1), e._v(" "), a("el-form-item", {
                    staticClass: "add-identity-img",
                    attrs: {label: e.userInfoKeyName.identityImg}
                }, [a("el-upload", {
                    staticClass: "upload",
                    attrs: {
                        action: e.api.apiPublic().uploadSecret,
                        name: "uploadFile",
                        data: {userId: e.user.id, token: e.token},
                        "before-upload": e.beforeAvatarUpload,
                        "on-success": e.handleSuccess,
                        "on-preview": e.handlePreview,
                        "on-remove": e.handleRemove,
                        limit: 1,
                        "on-exceed": e.onExceed,
                        "list-type": "picture",
                        "data-validate-required": !0
                    }
                }, [a("el-button", {
                    attrs: {
                        size: "small",
                        type: "primary",
                        id: "upload" + e.elId
                    }
                }, [e._v("点击上传")]), e._v(" "), a("div", {
                    staticClass: "el-upload__tip",
                    attrs: {slot: "tip"},
                    slot: "tip"
                }, [e._v("只能上传jpg/png文件，且不超过500kb")])], 1), e._v(" "), a("mt-popup", {
                    attrs: {"popup-transition": "popup-fade"},
                    model: {
                        value: e.popupVisible, callback: function (t) {
                            e.popupVisible = t
                        }, expression: "popupVisible"
                    }
                }, [a("img", {
                    attrs: {slot: "", width: "100%", src: e.dialogImageUrl, alt: ""},
                    slot: "default"
                })])], 1), e._v(" "), a("el-collapse", [a("el-collapse-item", {attrs: {title: "自定义字段"}}, [a("el-form-item", {attrs: {label: e.userInfoKeyName.field1}}, [a("el-input", {
                    attrs: {maxlength: "60"},
                    model: {
                        value: e.userInfo.field1, callback: function (t) {
                            e.$set(e.userInfo, "field1", t)
                        }, expression: "userInfo.field1"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.field2}}, [a("el-input", {
                    attrs: {maxlength: "60"},
                    model: {
                        value: e.userInfo.field2, callback: function (t) {
                            e.$set(e.userInfo, "field2", t)
                        }, expression: "userInfo.field2"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.field3}}, [a("el-input", {
                    attrs: {maxlength: "60"},
                    model: {
                        value: e.userInfo.field3, callback: function (t) {
                            e.$set(e.userInfo, "field3", t)
                        }, expression: "userInfo.field3"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.field4}}, [a("el-input", {
                    attrs: {maxlength: "60"},
                    model: {
                        value: e.userInfo.field4, callback: function (t) {
                            e.$set(e.userInfo, "field4", t)
                        }, expression: "userInfo.field4"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.field5}}, [a("el-input", {
                    attrs: {maxlength: "60"},
                    model: {
                        value: e.userInfo.field5, callback: function (t) {
                            e.$set(e.userInfo, "field5", t)
                        }, expression: "userInfo.field5"
                    }
                })], 1)], 1)], 1)], 1), e._v(" "), a("span", {
                    staticClass: "dialog-footer",
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    attrs: {type: "primary", plain: ""},
                    on: {click: e.endUserInfo}
                }, [e._v("取消")]), e._v(" "), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.saveUserInfo}
                }, [e._v("确 定")])], 1)], 1)
            }, staticRenderFns: []
        }, te = a("VU/8")(Z, ee, !1, null, null, null).exports, ae = {
            data: function () {
                return {
                    passwordModify: !1,
                    popupVisible: !1,
                    elId: Math.random(),
                    dialogImageUrl: "",
                    dialogImageId: "",
                    dialogImageName: ""
                }
            },
            computed: T()({}, Object(U.mapGetters)({
                token: "token",
                user: "user",
                api: "api",
                userInfo: "userList/userInfo",
                dialogs: "userList/dialogs",
                userInfoKeyName: "userList/userInfoKeyName"
            }), {
                fileList: function () {
                    if ("" != this.userInfo.identityImg) return [{
                        name: this.userInfo.identityImgName,
                        url: this.api.apiPublic().download + "?userId=" + this.user.id + "&token=" + this.token + "&imageId=" + this.userInfo.identityImg
                    }];
                    return []
                }
            }),
            methods: T()({}, Object(U.mapMutations)({
                resetUserForm: "userList/RESET_USER_INFO_FORM",
                encryptPassword: "userList/ENCRYPT_PASSWORD",
                uploadImg: "userList/QUESTION_IMG_UPLOAD",
                deleteImg: "userList/QUESTION_IMG_DELETE"
            }), Object(U.mapActions)({editUser: "userList/editUser"}), {
                beforeAvatarUpload: function (e) {
                    var t = "image/jpeg" === e.type, a = "image/png" === e.type, s = e.size / 1024 < 500;
                    return t || a || this.$message.error("上传图片只能是 JPG/PNG 格式!"), s || this.$message.error("上传图片大小不能超过 500kb!"), (t || a) && s
                }, handleSuccess: function (e, t, a) {
                    var s = e.data;
                    s.success && (this.dialogImageId = s.bizContent.imageId, this.dialogImageName = t.name)
                }, onExceed: function (e) {
                    this.$message.error("只能上传一张照片！")
                }, handlePreview: function (e) {
                    this.dialogImageUrl = e.url, this.popupVisible = !0
                }, handleRemove: function (e, t) {
                    this.deleteImg({dialogImageId: this.dialogImageId, dialogImageName: this.dialogImageName})
                }, handleTreeOpen: function () {
                    this.dialogs.depTree.showState = !0, this.dialogs.depTree.sureMethod = "handleTreeChoose"
                }, saveUserInfo: function () {
                    this.uploadImg({
                        imageId: this.dialogImageId,
                        fileName: this.dialogImageName
                    }), 0 == document.getElementById("dialogEditUser").getElementsByClassName("is-error").length && this.onValidateAll() && (this.encryptPassword({
                        key: "passwordTmp",
                        value: X()(this.userInfo.passwordTmp)
                    }), this.encryptPassword({
                        key: "password",
                        value: X()(this.userInfo.password)
                    }), this.editUser({isEditPass: this.passwordModify ? "1" : "0", $message: this.$message}))
                }, endUserInfo: function () {
                    this.dialogs.userInfoEdit = !1, this.dialogImageUrl = "", this.handleRemove()
                }, onValidatePassword: function (e) {
                    for (var t = document.getElementsByClassName("validate"), a = "", s = 0; s < t.length; s++) {
                        var n = t[s];
                        if (n.contains(e.target)) {
                            a = n;
                            break
                        }
                    }
                    this.userInfo.passwordTmp == this.userInfo.password ? (a.classList.remove("is-error"), a.getElementsByClassName("error")[0].innerHTML = "", this.onValidate(e)) : (a.classList.add("is-error"), a.getElementsByClassName("error")[0].innerHTML = "两次输入不一致")
                }, onValidate: function (e) {
                    return KSX.validateOne(e)
                }, onValidateAll: function () {
                    return KSX.validateAll(document.getElementById("dialogEditUser"))
                }, handleOpen: function () {
                    this.passwordModify = !1
                }
            }),
            mounted: function () {
            }
        }, se = {
            render: function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("el-dialog", {
                    staticClass: "dialog-dep-user-info fixed",
                    attrs: {
                        title: "编辑人员",
                        visible: e.dialogs.userInfoEdit,
                        "close-on-click-modal": !1,
                        width: "440px",
                        center: !0,
                        id: "dialogEditUser"
                    },
                    on: {
                        "update:visible": function (t) {
                            e.$set(e.dialogs, "userInfoEdit", t)
                        }, open: e.handleOpen, click: function (t) {
                            e.dialogs.userInfoEdit = !1
                        }
                    }
                }, [a("el-form", {
                    ref: "form",
                    attrs: {model: e.userInfo, "label-width": "80px", size: "mini"}
                }, [a("el-form-item", {
                    staticClass: "validate",
                    attrs: {label: "* 账号", "data-validate-content": e.userInfo.userName, "data-validate-required": !0}
                }, [a("el-input", {
                    attrs: {disabled: !0},
                    on: {blur: e.onValidate},
                    model: {
                        value: e.userInfo.userName, callback: function (t) {
                            e.$set(e.userInfo, "userName", t)
                        }, expression: "userInfo.userName"
                    }
                })], 1), e._v(" "), a("el-form-item", {
                    staticClass: "validate",
                    attrs: {label: "* 姓名", "data-validate-content": e.userInfo.surname, "data-validate-required": !0}
                }, [a("el-input", {
                    attrs: {placeholder: "请输入姓名", maxlength: "60"},
                    on: {blur: e.onValidate},
                    model: {
                        value: e.userInfo.surname, callback: function (t) {
                            e.$set(e.userInfo, "surname", t)
                        }, expression: "userInfo.surname"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: "用户状态"}}, [a("el-radio-group", {
                    attrs: {disabled: e.user.id == e.userInfo.id},
                    model: {
                        value: e.userInfo.status, callback: function (t) {
                            e.$set(e.userInfo, "status", t)
                        }, expression: "userInfo.status"
                    }
                }, [a("el-radio", {attrs: {label: "0"}}, [e._v("正常")]), e._v(" "), a("el-radio", {attrs: {label: "1"}}, [e._v("禁用")])], 1)], 1), e._v(" "), a("el-form-item", {attrs: {label: "修改密码"}}, [a("el-switch", {
                    model: {
                        value: e.passwordModify,
                        callback: function (t) {
                            e.passwordModify = t
                        },
                        expression: "passwordModify"
                    }
                })], 1), e._v(" "), e.passwordModify ? a("el-form-item", {
                    staticClass: "validate",
                    attrs: {
                        label: "* 密码",
                        "data-validate-content": e.userInfo.passwordTmp,
                        "data-validate-required": !0,
                        "data-validate-rule": "userPassword"
                    }
                }, [a("el-input", {
                    attrs: {type: "password", placeholder: "密码大于等于6位小于等于20位"},
                    on: {blur: e.onValidate},
                    model: {
                        value: e.userInfo.passwordTmp, callback: function (t) {
                            e.$set(e.userInfo, "passwordTmp", t)
                        }, expression: "userInfo.passwordTmp"
                    }
                }), e._v(" "), a("div", {staticClass: "error"})], 1) : e._e(), e._v(" "), e.passwordModify ? a("el-form-item", {
                    staticClass: "validate",
                    attrs: {
                        label: "* 确认",
                        "data-validate-content": e.userInfo.password,
                        "data-validate-required": !0,
                        "data-validate-rule": "userPassword"
                    }
                }, [a("el-input", {
                    attrs: {type: "password", placeholder: "再次输入密码"},
                    on: {blur: e.onValidatePassword},
                    model: {
                        value: e.userInfo.password, callback: function (t) {
                            e.$set(e.userInfo, "password", t)
                        }, expression: "userInfo.password"
                    }
                }), e._v(" "), a("div", {staticClass: "error"})], 1) : e._e(), e._v(" "), a("el-form-item", {attrs: {label: "部门"}}, [a("div", {
                    staticClass: "el-form-choose",
                    on: {click: e.handleTreeOpen}
                }, [e._v(e._s(e.userInfo.departmentName))])]), e._v(" "), a("el-form-item", {attrs: {label: "性别"}}, [a("el-radio-group", {
                    model: {
                        value: e.userInfo.sex,
                        callback: function (t) {
                            e.$set(e.userInfo, "sex", t)
                        },
                        expression: "userInfo.sex"
                    }
                }, [a("el-radio", {attrs: {label: 1}}, [e._v("男")]), e._v(" "), a("el-radio", {attrs: {label: 0}}, [e._v("女")])], 1)], 1), e._v(" "), a("el-form-item", {
                    staticClass: "validate",
                    attrs: {label: "手机", "data-validate-content": e.userInfo.phone, "data-validate-rule": "phone"}
                }, [a("el-input", {
                    attrs: {
                        disabled: "admin" == e.user.role && e.user.id == e.userInfo.id,
                        placeholder: "请输入手机号",
                        maxlength: "60"
                    }, on: {blur: e.onValidate}, model: {
                        value: e.userInfo.phone, callback: function (t) {
                            e.$set(e.userInfo, "phone", t)
                        }, expression: "userInfo.phone"
                    }
                }), e._v(" "), a("div", {staticClass: "error"})], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.identityCard}}, [a("el-input", {
                    attrs: {
                        maxlength: "60",
                        placeholder: "请输入" + e.userInfoKeyName.identityCard
                    }, model: {
                        value: e.userInfo.identityCard, callback: function (t) {
                            e.$set(e.userInfo, "identityCard", t)
                        }, expression: "userInfo.identityCard"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.position}}, [a("el-input", {
                    attrs: {
                        maxlength: "60",
                        placeholder: "请输入" + e.userInfoKeyName.position
                    }, model: {
                        value: e.userInfo.position, callback: function (t) {
                            e.$set(e.userInfo, "position", t)
                        }, expression: "userInfo.position"
                    }
                })], 1), e._v(" "), a("el-form-item", {
                    staticClass: "validate",
                    attrs: {label: "邮箱", "data-validate-content": e.userInfo.email, "data-validate-rule": "email"}
                }, [a("el-input", {
                    attrs: {placeholder: "请输入邮箱", maxlength: "60"},
                    on: {blur: e.onValidate},
                    model: {
                        value: e.userInfo.email, callback: function (t) {
                            e.$set(e.userInfo, "email", t)
                        }, expression: "userInfo.email"
                    }
                }), e._v(" "), a("div", {staticClass: "error"})], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.notice}}, [a("el-input", {
                    attrs: {
                        maxlength: "60",
                        placeholder: "请输入" + e.userInfoKeyName.notice
                    }, model: {
                        value: e.userInfo.notice, callback: function (t) {
                            e.$set(e.userInfo, "notice", t)
                        }, expression: "userInfo.notice"
                    }
                })], 1), e._v(" "), a("el-form-item", {
                    staticClass: "edit-identity-img",
                    attrs: {label: e.userInfoKeyName.identityImg}
                }, [a("el-upload", {
                    staticClass: "upload",
                    attrs: {
                        action: e.api.apiPublic().uploadSecret,
                        name: "uploadFile",
                        data: {userId: e.user.id, token: e.token},
                        "before-upload": e.beforeAvatarUpload,
                        "on-success": e.handleSuccess,
                        "on-preview": e.handlePreview,
                        "on-remove": e.handleRemove,
                        limit: 1,
                        "on-exceed": e.onExceed,
                        "list-type": "picture",
                        "file-list": e.fileList,
                        "data-validate-required": !0
                    }
                }, [a("el-button", {
                    attrs: {
                        size: "small",
                        type: "primary",
                        id: "upload" + e.elId
                    }
                }, [e._v("点击上传")]), e._v(" "), a("div", {
                    staticClass: "el-upload__tip",
                    attrs: {slot: "tip"},
                    slot: "tip"
                }, [e._v("只能上传jpg/png文件，且不超过500kb")])], 1), e._v(" "), a("mt-popup", {
                    attrs: {"popup-transition": "popup-fade"},
                    model: {
                        value: e.popupVisible, callback: function (t) {
                            e.popupVisible = t
                        }, expression: "popupVisible"
                    }
                }, [a("img", {
                    attrs: {slot: "", width: "100%", src: e.dialogImageUrl, alt: ""},
                    slot: "default"
                })])], 1), e._v(" "), a("el-collapse", [a("el-collapse-item", {attrs: {title: "自定义字段"}}, [a("el-form-item", {attrs: {label: e.userInfoKeyName.field1}}, [a("el-input", {
                    attrs: {maxlength: "60"},
                    model: {
                        value: e.userInfo.field1, callback: function (t) {
                            e.$set(e.userInfo, "field1", t)
                        }, expression: "userInfo.field1"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.field2}}, [a("el-input", {
                    attrs: {maxlength: "60"},
                    model: {
                        value: e.userInfo.field2, callback: function (t) {
                            e.$set(e.userInfo, "field2", t)
                        }, expression: "userInfo.field2"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.field3}}, [a("el-input", {
                    attrs: {maxlength: "60"},
                    model: {
                        value: e.userInfo.field3, callback: function (t) {
                            e.$set(e.userInfo, "field3", t)
                        }, expression: "userInfo.field3"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.field4}}, [a("el-input", {
                    attrs: {maxlength: "60"},
                    model: {
                        value: e.userInfo.field4, callback: function (t) {
                            e.$set(e.userInfo, "field4", t)
                        }, expression: "userInfo.field4"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.field5}}, [a("el-input", {
                    attrs: {maxlength: "60"},
                    model: {
                        value: e.userInfo.field5, callback: function (t) {
                            e.$set(e.userInfo, "field5", t)
                        }, expression: "userInfo.field5"
                    }
                })], 1)], 1)], 1)], 1), e._v(" "), a("span", {
                    staticClass: "dialog-footer",
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    attrs: {type: "primary", plain: ""},
                    on: {click: e.endUserInfo}
                }, [e._v("取消")]), e._v(" "), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.saveUserInfo}
                }, [e._v("确 定")])], 1)], 1)
            }, staticRenderFns: []
        }, ne = a("VU/8")(ae, se, !1, null, null, null).exports, oe = a("162o"), ie = {
            data: function () {
                return {identityImgUrl: "", currentDep: {name: "", id: ""}}
            },
            components: {UserInfoAdd: te, UserInfoEdit: ne},
            computed: T()({}, Object(U.mapGetters)({
                token: "token",
                user: "user",
                api: "api",
                company: "company",
                companyRights: "companyRights",
                departmentTree: "userList/departmentTree",
                searchInfo: "userList/searchInfo",
                isSearching: "userList/isSearching",
                tableConfig: "userList/tableConfig",
                tableInfo: "userList/tableInfo",
                columns: "userList/columns",
                tableAttributes: "userList/tableAttributes",
                dialogs: "userList/dialogs",
                userInfoKeyName: "userList/userInfoKeyName",
                currentDepId: "userList/currentDepId"
            })),
            methods: T()({}, Object(U.mapMutations)({
                updateCurrentDepId: "userList/UPDATE_CURRENT_DEP_ID",
                resetCurrentPage: "userList/RESET_CURRENT_PAGE",
                updateTableSelection: "userList/UPDATE_TABLE_SELECTION",
                updateTableSort: "userList/UPDATE_TABLE_SORT"
            }), Object(U.mapActions)({
                getDepUnderUserAndSubdep: "userList/getDepUnderUserAndSubdep",
                getSelfName: "userList/getSelfName",
                getUser: "userList/getUser",
                delUser: "userList/delUser",
                search: "userList/search",
                seniorSearch: "userList/seniorSearch",
                tableReload: "userList/tableReload",
                editUserPermission: "userList/editUserPermission"
            }), {
                handleUserAdd: function (e, t) {
                    this.dialogs.userInfoAdd = !0, this.currentDep.id = t.id, this.currentDep.name = t.name
                }, handleUserDelete: function (e, t) {
                    var a = this;
                    "admin" == t.role ? this.$message({
                        type: "warning",
                        message: "该用户为管理员，无法删除！"
                    }) : "sub_admin" == t.role ? this.$message({
                        type: "warning",
                        message: "该用户被设置为子管理员，无法删除！"
                    }) : this.$confirm("此操作将永久删除该人员, 是否继续?", "删除人员", {
                        customClass: "operation-warning",
                        confirmButtonClass: "confirm",
                        cancelButtonClass: "cancel",
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning",
                        center: !0
                    }).then(function () {
                        a.delUser({userIds: t.id, $message: a.$message})
                    }).catch(function () {
                    })
                }, handleUserEdit: function (e, t) {
                    this.getUser({id: t.id, open: this.openModal})
                }, openModal: function () {
                    this.dialogs.userInfoEdit = !0
                }, handleCurrentChange: function () {
                    this.searchInfo.current = this.searchInfo.current + 1, this.searchInfo.simpleSearch ? this.search({isLoadMore: !0}) : this.searchInfo.advancedSearch ? this.seniorSearch({isLoadMore: !0}) : this.getDepUnderUserAndSubdep({isLoadMore: !0})
                }, handleSelectionChange: function (e) {
                    this.updateTableSelection({selection: e})
                }, handleSelect: function (e, t) {
                    this.isSearching || (t.id == this.currentDepId ? this.tableAttributes.headerSelectionStatus ? (this.$refs.ksxTable.clearSelection(), this.tableAttributes.headerSelectionStatus = !1) : (this.$refs.ksxTable.toggleRowSelection(t, !1), this.$refs.ksxTable.toggleAllSelection(), this.tableAttributes.headerSelectionStatus = !0) : e.length != this.tableConfig.tableInfo.length && (this.tableAttributes.headerSelectionStatus = !1, this.$refs.ksxTable.toggleRowSelection(this.tableConfig.tableInfo[0], !1)))
                }, handleSortChange: function (e) {
                    this.updateTableSort({prop: e.prop, order: e.order}), this.tableReload({reloadTree: !1})
                }, handleRowClick: function (e) {
                    this.resetCurrentPage(), this.updateCurrentDepId(e.id), this.getDepUnderUserAndSubdep({isLoadMore: !1})
                }, handleShowIdentityImg: function (e) {
                    var t = e.identityImg,
                        a = this.api.apiPublic().download + "?userId=" + this.user.id + "&token=" + this.token + "&imageId=" + t;
                    this.$alert('<strong><img id="showImgLoaded" src= "' + a + '" style="width:400px;" > </strong>', "", {
                        dangerouslyUseHTMLString: !0,
                        showClose: !0,
                        customClass: "showIdentityImg"
                    }).then(function () {
                    }).catch(function () {
                    })
                }, editPermission: function (e, t) {
                    var a = void 0;
                    a = 0 == e ? 0 != t.permission && 2 != t.permission ? 1 : 0 : 1 != t.permission && 2 != t.permission ? 1 : 0, this.editUserPermission({
                        platform: e,
                        permission: a,
                        $message: this.$message,
                        type: 1,
                        userId: t.id
                    })
                }
            }),
            mounted: function () {
                this.getSelfName()
            }
        }, re = {
            render: function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.tableAttributes.loading,
                        expression: "tableAttributes.loading"
                    }], staticClass: "detail-list el-table-area"
                }, [a("el-table", {
                    ref: "ksxTable",
                    class: [e.isSearching ? "is-searching" : ""],
                    staticStyle: {width: "100%"},
                    attrs: {data: e.tableConfig.tableInfo, "tooltip-effect": "dark", height: "100%", border: !0},
                    on: {
                        select: e.handleSelect,
                        "selection-change": e.handleSelectionChange,
                        "sort-change": e.handleSortChange
                    }
                }, [a("el-table-column", {
                    attrs: {
                        type: "selection",
                        width: "33"
                    }
                }), e._v(" "), a("el-table-column", {
                    attrs: {
                        prop: "name",
                        label: "名称",
                        width: "250",
                        "show-overflow-tooltip": !0
                    }, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [1 == t.row.type ? a("div", {
                                class: ["el-row-folder", 0 == t.$index || e.isSearching ? "" : "el-sub-row"],
                                on: {
                                    click: function (a) {
                                        e.handleRowClick(t.row)
                                    }
                                }
                            }, [a("img", {
                                staticClass: "icon",
                                attrs: {src: "https://cdnoss..com/ksxing_static/vue/images/icon/folder.svg"}
                            }), e._v(" "), a("span", {staticStyle: {"margin-left": "7px"}}, [e._v(e._s(t.row.name) + " " + e._s(-1 == t.row.count ? "" : "(" + t.row.count + ")") + " ")])]) : a("div", {staticClass: "el-row-user el-sub-row"}, ["女" == t.row.sex ? a("i", {staticClass: "el-icon icon-female icon-a_woman"}) : a("i", {staticClass: "el-icon icon-male icon-a_man"}), e._v(" "), a("span", {staticStyle: {"margin-left": "7px"}}, [e._v(e._s(t.row.name))])])]
                        }
                    }])
                }), e._v(" "), e.isSearching ? a("el-table-column", {
                    attrs: {
                        prop: "departmentName",
                        label: "部门",
                        width: "180",
                        "show-overflow-tooltip": !0
                    }
                }) : e._e(), e._v(" "), a("el-table-column", {
                    attrs: {
                        prop: "userName",
                        label: "账号",
                        width: "180",
                        "show-overflow-tooltip": !0
                    }
                }), e._v(" "), e.columns.phone ? a("el-table-column", {
                    attrs: {
                        prop: "phone",
                        label: "手机",
                        width: "120",
                        "show-overflow-tooltip": !0
                    }
                }) : e._e(), e._v(" "), e.columns.identityCard ? a("el-table-column", {
                    attrs: {
                        prop: "identityCard",
                        label: e.userInfoKeyName.identityCard,
                        width: "180",
                        "show-overflow-tooltip": !0
                    }
                }) : e._e(), e._v(" "), a("el-table-column", {
                    attrs: {
                        prop: "identityImg",
                        label: e.userInfoKeyName.identityImg,
                        width: "100",
                        "show-overflow-tooltip": !0
                    }, scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [t.row.identityImg ? a("div", {
                                on: {
                                    click: function (a) {
                                        e.handleShowIdentityImg(t.row)
                                    }
                                }
                            }, [a("span", {
                                staticStyle: {
                                    color: "#1a8dff",
                                    "text-decoration": "underline",
                                    cursor: "pointer"
                                }
                            }, [e._v("查看")])]) : a("div", [a("span", [e._v("-")])])]
                        }
                    }])
                }), e._v(" "), e.columns.email ? a("el-table-column", {
                    attrs: {
                        prop: "email",
                        label: "邮箱",
                        width: "180",
                        "show-overflow-tooltip": !0
                    }
                }) : e._e(), e._v(" "), e.columns.isBindWechat ? a("el-table-column", {
                    attrs: {
                        prop: "isBindWechatDesc",
                        label: "是否绑定微信",
                        width: "120",
                        "show-overflow-tooltip": !0
                    }
                }) : e._e(), e._v(" "), e.columns.notice ? a("el-table-column", {
                    attrs: {
                        prop: "notice",
                        label: e.userInfoKeyName.notice,
                        width: "180",
                        "show-overflow-tooltip": !0
                    }
                }) : e._e(), e._v(" "), e.columns.photo ? a("el-table-column", {
                    attrs: {
                        prop: "photo",
                        label: e.userInfoKeyName.photo,
                        width: "180",
                        "show-overflow-tooltip": !0
                    }
                }) : e._e(), e._v(" "), e.columns.field1 ? a("el-table-column", {
                    attrs: {
                        prop: "field1",
                        label: e.userInfoKeyName.field1,
                        width: "180",
                        "show-overflow-tooltip": !0
                    }
                }) : e._e(), e._v(" "), e.columns.field2 ? a("el-table-column", {
                    attrs: {
                        prop: "field2",
                        label: e.userInfoKeyName.field2,
                        width: "180",
                        "show-overflow-tooltip": !0
                    }
                }) : e._e(), e._v(" "), e.columns.field3 ? a("el-table-column", {
                    attrs: {
                        prop: "field3",
                        label: e.userInfoKeyName.field3,
                        width: "180",
                        "show-overflow-tooltip": !0
                    }
                }) : e._e(), e._v(" "), e.columns.field4 ? a("el-table-column", {
                    attrs: {
                        prop: "field4",
                        label: e.userInfoKeyName.field4,
                        width: "180",
                        "show-overflow-tooltip": !0
                    }
                }) : e._e(), e._v(" "), e.columns.field5 ? a("el-table-column", {
                    attrs: {
                        prop: "field5",
                        label: e.userInfoKeyName.field5,
                        width: "180",
                        "show-overflow-tooltip": !0
                    }
                }) : e._e(), e._v(" "), a("el-table-column", {
                    attrs: {
                        prop: "createTime",
                        label: "创建时间",
                        width: "180",
                        sortable: "custom",
                        "show-overflow-tooltip": !0
                    }
                }), e._v(" "), a("el-table-column", {
                    attrs: {label: "操作", width: "166", fixed: "right"},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            return [1 != e.companyRights.allowUserAdd || 0 != t.$index || 1 != t.row.type || e.isSearching ? e._e() : a("el-button", {
                                attrs: {
                                    type: "primary",
                                    size: "mini"
                                }, on: {
                                    click: function (a) {
                                        e.handleUserAdd(t.$index, t.row)
                                    }
                                }
                            }, [e._v("添加人员")]), e._v(" "), 1 != t.row.type ? a("el-tooltip", {
                                staticClass: "item",
                                attrs: {effect: "dark", content: "编辑", placement: "top"}
                            }, [a("i", {
                                staticClass: "el-icon icon-a_operate_edit", on: {
                                    click: function (a) {
                                        e.handleUserEdit(t.$index, t.row)
                                    }
                                }
                            })]) : e._e(), e._v(" "), 1 != t.row.type ? a("el-tooltip", {
                                staticClass: "item",
                                attrs: {effect: "dark", content: "删除", placement: "top"}
                            }, [a("i", {
                                staticClass: "el-icon icon-a_operate_delete", on: {
                                    click: function (a) {
                                        e.handleUserDelete(t.$index, t.row)
                                    }
                                }
                            })]) : e._e()]
                        }
                    }])
                }), e._v(" "), a("template", {slot: "append"}, [e.tableAttributes.canLoadMore ? a("div", {
                    staticClass: "table-load",
                    on: {click: e.handleCurrentChange}
                }, [e._v("\n        点击加载更多\n      ")]) : e._e()])], 2), e._v(" "), a("user-info-add", {attrs: {"current-dep": e.currentDep}}), e._v(" "), a("user-info-edit")], 1)
            }, staticRenderFns: []
        }, le = a("VU/8")(ie, re, !1, null, null, null).exports, de = {
            data: function () {
                return {nodeEdit: {isEdit: !1, name: "", id: ""}, dropNode: ""}
            },
            computed: T()({}, Object(U.mapGetters)({
                departmentTree: "userList/departmentTree",
                defaultExpandedKeys: "userList/defaultExpandedKeys",
                treeLoading: "userList/treeLoading",
                currentDepId: "userList/currentDepId"
            })),
            methods: T()({}, Object(U.mapMutations)({
                updateCurrentDepId: "userList/UPDATE_CURRENT_DEP_ID",
                resetCurrentPage: "userList/RESET_CURRENT_PAGE"
            }), Object(U.mapActions)({
                getDepartmentsJson: "userList/getDepartmentsJson",
                isNodeEdit: "userList/isNodeEdit",
                addDep: "userList/addDep",
                updateDep: "userList/updateDep",
                deleteDep: "userList/deleteDep",
                getDepUnderUserAndSubdep: "userList/getDepUnderUserAndSubdep",
                moveDep: "userList/moveDep",
                userMove: "userList/userMove"
            }), {
                handleNodeAdd: function (e, t) {
                    this.addDep({name: "新部门", data: e})
                }, handleNodeEdit: function (e, t) {
                    this.nodeEdit.isEdit = !0, this.nodeEdit.name = e.name, this.nodeEdit.id = e.id
                }, handleNodeEditComplete: function (e, t, a) {
                    if (this.nodeEdit.isEdit) {
                        if ("" == this.nodeEdit.name) return void this.$message({type: "error", message: "部门名称不能为空!"});
                        this.updateDep({name: this.nodeEdit.name, data: e}), this.nodeEdit.isEdit = !1
                    }
                }, handleNodeEditCancel: function (e, t) {
                    this.nodeEdit.isEdit = !1, this.nodeEdit.name = "", this.nodeEdit.id = ""
                }, handleNodeDelete: function (e, t) {
                    this.deleteDep({node: t, data: e, del: !1, $prompt: this.$prompt, $message: this.$message})
                }, handleNodeClick: function (e) {
                    e.onlyRead ? this.$message({
                        type: "warning",
                        message: "您没有部门权限"
                    }) : (this.resetCurrentPage(), this.updateCurrentDepId(e.id), this.getDepUnderUserAndSubdep({isLoadMore: !1}))
                }, handleDrop: function (e, t, a, s, n) {
                    if ("user" == n) {
                        if (t.data.onlyRead) return this.$message({type: "warning", message: "您没有部门权限"}), !1;
                        this.userMove({userId: e.data.id, departmentId: t.data.id})
                    } else this.moveDep({
                        dropType: a,
                        sourceNodeData: e.data,
                        targetNodeData: t.data,
                        $message: this.$message
                    })
                }, allowDrop: function (e, t, a) {
                    return t.data.onlyRead ? (this.$message({
                        type: "warning",
                        message: "您没有部门权限"
                    }), !1) : t.data.id !== this.departmentTree[0].id || "prev" != a && "next" != a
                }, allowDrag: function (e) {
                    return !e.data.onlyRead && e.data.id != this.departmentTree[0].id && !this.nodeEdit.isEdit
                }, getNode: function (e) {
                    this.dropNode = this.$refs.tree.getNode(e)
                }
            }),
            mounted: function () {
                this.getDepartmentsJson({loadType: "init"})
            }
        }, ce = {
            render: function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {
                    staticClass: "department-tree",
                    attrs: {id: "departmentTree"}
                }, [a("div", {staticClass: "title"}, [e._v("\n    部门名称\n  ")]), e._v(" "), a("div", {
                    directives: [{
                        name: "loading",
                        rawName: "v-loading",
                        value: e.treeLoading,
                        expression: "treeLoading"
                    }], staticClass: "tree-wrapper ksx-tree ksx-tree-node"
                }, [a("el-tree", {
                    ref: "tree",
                    attrs: {
                        data: e.departmentTree,
                        "node-key": "id",
                        "default-expanded-keys": e.defaultExpandedKeys,
                        "auto-expand-parent": !0,
                        draggable: "",
                        "allow-drop": e.allowDrop,
                        "allow-drag": e.allowDrag
                    },
                    on: {"node-drop": e.handleDrop},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            var s = t.node, n = t.data;
                            return a("span", {
                                class: ["el-tree-node__label", e.currentDepId == n.id ? "selected" : "", e.nodeEdit.isEdit && e.nodeEdit.id == n.id ? "isEdit" : ""],
                                attrs: {"data-id": n.id}
                            }, [a("span", {staticClass: "el-tree-node-icon"}, [a("i", {staticClass: "icon icon-a_square_plus_outline icon-expand"}), e._v(" "), a("i", {staticClass: "icon icon-a_square_remove_outline icon-collapse"}), e._v(" "), a("img", {
                                staticClass: "icon icon-leaf",
                                attrs: {src: "https://cdnoss..com/ksxing_static/vue/images/icon/department_symbol.svg"}
                            })]), e._v(" "), e.nodeEdit.isEdit && e.nodeEdit.id == n.id ? a("span", {staticClass: "el-node-edit"}, [a("el-input", {
                                staticClass: "edit-input",
                                attrs: {size: "mini", placeholder: "请输入内容"},
                                on: {
                                    blur: function (t) {
                                        e.handleNodeEditComplete(n, s)
                                    }
                                },
                                model: {
                                    value: e.nodeEdit.name, callback: function (t) {
                                        e.$set(e.nodeEdit, "name", t)
                                    }, expression: "nodeEdit.name"
                                }
                            }), e._v(" "), a("span", {staticClass: "edit-operation"}, [a("span", {
                                staticClass: "operation",
                                on: {
                                    click: function (t) {
                                        t.stopPropagation(), e.handleNodeEditComplete(n, s)
                                    }
                                }
                            }, [e._v("确定")]), e._v(" "), a("span", {
                                staticClass: "operation", on: {
                                    click: function (t) {
                                        t.stopPropagation(), e.handleNodeEditCancel(n, s)
                                    }
                                }
                            }, [e._v("取消")])])], 1) : a("span", {
                                staticClass: "el-tree-node-label",
                                on: {
                                    click: function (t) {
                                        t.stopPropagation(), e.handleNodeClick(n)
                                    }
                                }
                            }, [e._v("\n          " + e._s(n.name) + " " + e._s(-1 == n.count ? "" : "(" + n.count + ")") + "\n        ")]), e._v(" "), n.onlyRead ? e._e() : a("span", {staticClass: "el-tree-node-operation"}, [a("i", {
                                staticClass: "icon icon-a_circle_plus_outline",
                                on: {
                                    click: function (t) {
                                        t.stopPropagation(), e.handleNodeAdd(n, s)
                                    }
                                }
                            }), e._v(" "), a("i", {
                                staticClass: "icon icon-a_operate_edit", on: {
                                    click: function (t) {
                                        t.stopPropagation(), e.handleNodeEdit(n, s)
                                    }
                                }
                            }), e._v(" "), n.id != e.departmentTree[0].id ? a("i", {
                                staticClass: "icon icon-a_operate_delete",
                                on: {
                                    click: function (t) {
                                        t.stopPropagation(), e.handleNodeDelete(n, s)
                                    }
                                }
                            }) : e._e()])])
                        }
                    }])
                })], 1)])
            }, staticRenderFns: []
        }, ue = a("VU/8")(de, ce, !1, null, null, null).exports, pe = {
            data: function () {
                return {processMode: "jump", progressPercantage: 0, progressStatus: "init"}
            },
            computed: T()({}, Object(U.mapGetters)({
                api: "api",
                token: "token",
                user: "user",
                dialogs: "userList/dialogs"
            })),
            methods: {
                getDepTemplate: function () {
                    window.open("https://.oss-cn-beijing.aliyuncs.com/template-for-dep-add.xlsx", "_blank")
                }, handleAvatarSuccess: function (e, t) {
                    var a = e.data;
                    a.success ? (this.progressStatus = "success", window.location.reload()) : (this.progressStatus = "error", this.$message.error(a.desc))
                }, handleAvatarError: function (e, t, a) {
                    this.progressStatus = "error"
                }, beforeAvatarUpload: function (e) {
                    var t = ".xlsx" === e.name.substring(e.name.length - 5), a = e.size / 1024 < 1024;
                    return t ? a ? (this.dialogs.importUser.showState = !1, this.progressStatus = "ongoing", this.progressPercantage = 0, !0) : (this.$message.error("上传文件大小不能超过 1MB!"), !1) : (this.$message.error("上传文件只能是 xlsx 格式!"), !1)
                }, handleUploadProgress: function (e, t, a) {
                    this.progressPercantage = e.percent
                }, handleOpen: function () {
                    this.progressPercantage = 0, this.progressStatus = "init"
                }
            }
        }, me = {
            render: function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("el-dialog", {
                    staticClass: "dialog-import-dep",
                    attrs: {title: "批量导入部门", visible: e.dialogs.importDep, width: "440px", center: !0},
                    on: {
                        "update:visible": function (t) {
                            e.$set(e.dialogs, "importDep", t)
                        }, open: e.handleOpen, click: function (t) {
                            e.dialogs.importDep = !1
                        }
                    }
                }, [a("div", {
                    staticClass: "avatar-download",
                    on: {click: e.getDepTemplate}
                }, [a("div", {staticClass: "avatar-title"}, [a("i", {staticClass: "icon-w_icon_upload avatar-icon"}), e._v("\n      下载模版\n    ")])]), e._v(" "), a("el-upload", {
                    staticClass: "avatar-uploader",
                    attrs: {
                        action: e.api.apiBase("admin") + "/admin_user/dep_add_batch",
                        name: "uploadFile",
                        data: {userId: e.user.id, token: e.token, processMode: e.processMode},
                        "show-file-list": !1,
                        "on-progress": e.handleUploadProgress,
                        "on-success": e.handleAvatarSuccess,
                        "on-error": e.handleAvatarError,
                        "before-upload": e.beforeAvatarUpload
                    }
                }, [a("div", {staticClass: "avatar-title"}, [a("i", {staticClass: "icon-w_icon_upload avatar-icon"}), e._v("\n      上传excel\n    ")])]), e._v(" "), "init" != e.progressStatus ? a("div", {staticClass: "progress-wrapper"}, [a("el-progress", {
                    attrs: {
                        "stroke-width": 4,
                        "show-text": !1,
                        percentage: e.progressPercantage
                    }
                }), e._v(" "), a("div", {staticClass: "progress-tip"}, [e._v("\n      " + e._s("ongoing" == e.progressStatus ? "上传中" : "error" == e.progressStatus ? "上传失败" : "上传成功") + "\n    ")])], 1) : e._e()], 1)
            }, staticRenderFns: []
        }, he = a("VU/8")(pe, me, !1, null, null, null).exports, fe = {
            data: function () {
                return {processMode: "jump", progressPercantage: 0, progressStatus: "init"}
            },
            computed: T()({}, Object(U.mapGetters)({
                api: "api",
                token: "token",
                user: "user",
                dialogs: "userList/dialogs"
            })),
            methods: T()({}, Object(U.mapMutations)({updateImportUserCallback: "userList/updateImportUserCallback"}), {
                getUserTemplate: function () {
                    window.open(this.api.apiBase("admin") + "/admin_user/download_add_user_template?userId=" + this.user.id + "&token=" + this.token, "_blank")
                }, handleAvatarSuccess: function (e, t) {
                    var a = e.data;
                    a.success ? (this.progressStatus = "success", "" == a.bizContent.msg ? (this.updateImportUserCallback({
                        succNum: a.bizContent.succNum,
                        warning: a.bizContent.warning,
                        fail: a.bizContent.fail
                    }), this.dialogs.importCallback = !0, ksxProbe.gioTrack("enterPeopleSuccess", 1, {
                        enterPeopleMethod_var: "批量导入",
                        enterPeopleCount_var: a.bizContent.succNum
                    })) : this.$message({
                        type: "warning",
                        message: a.bizContent.msg
                    }), this.dialogs.importUser.inProgress = !1, this.$store.commit("END_LOADING")) : (this.progressStatus = "error", this.dialogs.importUser.inProgress = !1, this.$store.commit("END_LOADING"))
                }, handleAvatarError: function (e, t, a) {
                    this.progressStatus = "error", this.dialogs.importUser.inProgress = !1, this.$store.commit("END_LOADING")
                }, beforeAvatarUpload: function (e) {
                    var t = this, a = ".xlsx" === e.name.substring(e.name.length - 5), s = e.size / 1024 < 1024;
                    return a ? s ? (this.dialogs.importUser.showState = !1, this.$confirm("账号重复如何处理？", "", {
                        customClass: "operation-select",
                        confirmButtonClass: "primary",
                        cancelButtonClass: "cancel",
                        confirmButtonText: "覆盖",
                        cancelButtonText: "跳过",
                        type: "info",
                        center: !0
                    }).then(function () {
                        t.processMode = "cover", t.progressStatus = "ongoing", t.progressPercantage = 0
                    }).catch(function () {
                        t.processMode = "jump", t.progressStatus = "ongoing", t.progressPercantage = 0
                    })) : (this.$message.error("上传文件大小不能超过 1MB!"), !1) : (this.$message.error("上传文件只能是 xlsx 格式!"), !1)
                }, handleUploadProgress: function (e, t, a) {
                    this.progressPercantage = e.percent, this.dialogs.importUser.inProgress = !0, this.$store.commit("START_LOADING")
                }, handleOpen: function () {
                    this.progressPercantage = 0, this.progressStatus = "init"
                }
            })
        }, ge = {
            render: function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("el-dialog", {
                    staticClass: "dialog-import-dep",
                    attrs: {title: "批量导入人员", visible: e.dialogs.importUser.showState, width: "440px", center: !0},
                    on: {
                        "update:visible": function (t) {
                            e.$set(e.dialogs.importUser, "showState", t)
                        }, open: e.handleOpen, click: function (t) {
                            e.dialogs.importUser.showState = !1
                        }
                    }
                }, [a("div", {
                    staticClass: "avatar-download",
                    on: {click: e.getUserTemplate}
                }, [a("div", {staticClass: "avatar-title"}, [a("i", {staticClass: "icon-w_icon_upload avatar-icon"}), e._v("\n      下载模版\n    ")])]), e._v(" "), a("el-upload", {
                    staticClass: "avatar-uploader",
                    attrs: {
                        action: e.api.apiBase("admin") + "/admin_user/user_add_batch",
                        name: "uploadFile",
                        data: {userId: e.user.id, token: e.token, processMode: e.processMode},
                        "show-file-list": !1,
                        "on-progress": e.handleUploadProgress,
                        "on-success": e.handleAvatarSuccess,
                        "on-error": e.handleAvatarError,
                        "before-upload": e.beforeAvatarUpload
                    }
                }, [a("div", {staticClass: "avatar-title"}, [a("i", {staticClass: "icon-w_icon_upload avatar-icon"}), e._v("\n      上传excel\n    ")])]), e._v(" "), "init" != e.progressStatus ? a("div", {staticClass: "progress-wrapper"}, [a("el-progress", {
                    attrs: {
                        "stroke-width": 4,
                        "show-text": !1,
                        percentage: e.progressPercantage
                    }
                }), e._v(" "), a("div", {staticClass: "progress-tip"}, [e._v("\n      " + e._s("ongoing" == e.progressStatus ? "上传中" : "error" == e.progressStatus ? "上传失败" : "上传成功") + "\n    ")])], 1) : e._e()], 1)
            }, staticRenderFns: []
        };
        var ve = a("VU/8")(fe, ge, !1, function (e) {
            a("xLFN")
        }, null, null).exports, _e = {
            data: function () {
                return {}
            },
            computed: T()({}, Object(U.mapGetters)({
                dialogs: "userList/dialogs",
                importUserCallback: "userList/importUserCallback"
            })),
            methods: {
                importReload: function () {
                    this.dialogs.importCallback = !1, setTimeout("window.location.href=window.location.href.replace('?userAdd=1','');window.location.reload();", 1e3)
                }
            }
        }, Ie = {
            render: function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("el-dialog", {
                    staticClass: "dialog-import-callback fixed",
                    attrs: {title: "导入结果", visible: e.dialogs.importCallback, width: "440px", center: !0},
                    on: {
                        "update:visible": function (t) {
                            e.$set(e.dialogs, "importCallback", t)
                        }, click: e.importReload, close: e.importReload
                    }
                }, [a("div", {staticClass: "ksx-callback callback-success"}, [a("i", {staticClass: "el-icon-success callback-icon"}), e._v(" "), a("div", {staticClass: "callback-items"}, [a("div", {staticClass: "callback-item"}, [e._v("成功导入" + e._s(e.importUserCallback.succNum) + "个考生")])])]), e._v(" "), 0 != e.importUserCallback.warning.length ? a("div", {staticClass: "ksx-callback callback-warning"}, [a("i", {staticClass: "el-icon-warning callback-icon"}), e._v(" "), a("div", {staticClass: "callback-items"}, e._l(e.importUserCallback.warning, function (t, s) {
                    return a("div", {key: s, staticClass: "callback-item"}, [e._v(e._s(t))])
                }))]) : e._e(), e._v(" "), 0 != e.importUserCallback.fail.length ? a("div", {staticClass: "ksx-callback callback-error"}, [a("i", {staticClass: "el-icon-error callback-icon"}), e._v(" "), a("div", {staticClass: "callback-items"}, e._l(e.importUserCallback.fail, function (t, s) {
                    return a("div", {key: s, staticClass: "callback-item"}, [e._v(e._s(t))])
                }))]) : e._e(), e._v(" "), a("span", {
                    staticClass: "dialog-footer",
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {attrs: {type: "primary"}, on: {click: e.importReload}}, [e._v("确 定")])], 1)])
            }, staticRenderFns: []
        }, be = a("VU/8")(_e, Ie, !1, null, null, null).exports, ye = {
            render: function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "tree-wrapper ksx-tree"}, [a("el-tree", {
                    ref: "ksxTree",
                    attrs: {
                        data: e.treeData,
                        "node-key": "id",
                        "show-checkbox": e.multiSelect,
                        "check-on-click-node": e.multiSelect,
                        "expand-on-click-node": !1,
                        "default-expand-all": !0,
                        "default-expanded-keys": e.defaultExpandedKeys,
                        props: e.defaultProps
                    },
                    on: {"node-click": e.handleNodeClick, "check-change": e.handleCheckChange},
                    scopedSlots: e._u([{
                        key: "default", fn: function (t) {
                            var s = t.node, n = t.data;
                            return a("span", {
                                class: ["el-tree-node__label", e.selectedData.id == n.id ? "selected" : ""],
                                attrs: {"data-id": s.id}
                            }, [a("span", {staticClass: "el-tree-node-label"}, [e._v("\n        " + e._s(n.name) + "\n      ")])])
                        }
                    }])
                })], 1)
            }, staticRenderFns: []
        }, Ce = a("VU/8")({
            data: function () {
                return {
                    selectedData: "", checkedNodes: [], defaultProps: {
                        disabled: function (e, t) {
                            return t.onlyRead
                        }
                    }
                }
            }, props: ["treeData", "multiSelect"], computed: {
                defaultExpandedKeys: function () {
                    return void 0 === this.treeData[0] || void 0 === this.treeData[0] ? [] : this.treeData[0].id ? [this.treeData[0].id] : this.treeData[0].id ? [this.treeData[0].id] : void 0
                }
            }, methods: {
                handleNodeClick: function (e) {
                    this.multiSelect || (this.selectedData = e, this.$emit("node-select", this.selectedData))
                }, handleCheckChange: function (e) {
                    this.multiSelect && (this.checkedNodes = this.$refs.ksxTree.getCheckedNodes(), this.$emit("node-select", this.checkedNodes))
                }
            }
        }, ye, !1, null, null, null).exports, Se = (a("/2yO"), {
            data: function () {
                return {selectedData: {}}
            },
            components: {depTree: Ce},
            computed: T()({}, Object(U.mapGetters)({
                dialogs: "userList/dialogs",
                departmentTree: "userList/departmentTree"
            })),
            methods: T()({}, Object(U.mapMutations)({updateDep: "userList/UPDATE_USER_INFO_FORM_DEP"}), Object(U.mapActions)({batchMoveDepAndUser: "userList/batchMoveDepAndUser"}), {
                handleNodeSelect: function (e) {
                    this.selectedData = e
                }, handleTreeChoose: function () {
                    this.updateDep({
                        id: this.selectedData.id,
                        name: this.selectedData.name
                    }), this.dialogs.depTree.showState = !1
                }, handelMoveDepAndUser: function () {
                    this.batchMoveDepAndUser({
                        targetDep: this.selectedData.id,
                        $message: this.$message
                    }), this.dialogs.depTree.showState = !1
                }, selDepSureClickFn: function () {
                    this[this.dialogs.depTree.sureMethod]()
                }
            }),
            mounted: function () {
                this.selectedData = {}
            }
        }), ke = {
            render: function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("el-dialog", {
                    staticClass: "dialog-tree fixed",
                    attrs: {title: "选择部门", visible: e.dialogs.depTree.showState, width: "440px", center: !0},
                    on: {
                        "update:visible": function (t) {
                            e.$set(e.dialogs.depTree, "showState", t)
                        }, click: function (t) {
                            e.dialogs.depTree = !1
                        }
                    }
                }, [a("dep-tree", {
                    attrs: {"tree-data": e.departmentTree, "multi-select": !1},
                    on: {"node-select": e.handleNodeSelect}
                }), e._v(" "), a("span", {
                    staticClass: "dialog-footer",
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    attrs: {type: "primary", plain: ""}, on: {
                        click: function (t) {
                            e.dialogs.depTree.showState = !1
                        }
                    }
                }, [e._v("取消")]), e._v(" "), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.selDepSureClickFn}
                }, [e._v("确 定")])], 1)], 1)
            }, staticRenderFns: []
        }, we = a("VU/8")(Se, ke, !1, null, null, null).exports, xe = {
            data: function () {
                return {selectedData: []}
            },
            components: {depTree: Ce},
            computed: T()({}, Object(U.mapGetters)({
                dialogs: "userList/dialogs",
                departmentTree: "userList/departmentTree"
            })),
            methods: T()({}, Object(U.mapMutations)({updateSearchDep: "userList/UPDATE_SEARCH_DEP"}), {
                handleNodeSelect: function (e) {
                    this.selectedData = e
                }, handleTreeChoose: function () {
                    this.updateSearchDep({department: this.selectedData}), this.dialogs.multiDepTree = !1;
                    var e = this;
                    Object(oe.setTimeout)(function () {
                        e.dialogs.advancedSearch = !0
                    }, 30)
                }
            }),
            mounted: function () {
                this.selectedData = []
            }
        }, Ne = {
            render: function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("el-dialog", {
                    staticClass: "dialog-tree fixed",
                    attrs: {title: "选择部门", visible: e.dialogs.multiDepTree, width: "440px", center: !0},
                    on: {
                        "update:visible": function (t) {
                            e.$set(e.dialogs, "multiDepTree", t)
                        }, click: function (t) {
                            e.dialogs.multiDepTree = !1
                        }
                    }
                }, [a("dep-tree", {
                    attrs: {"tree-data": e.departmentTree, "multi-select": !0},
                    on: {"node-select": e.handleNodeSelect}
                }), e._v(" "), a("span", {
                    staticClass: "dialog-footer",
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, [a("el-button", {
                    attrs: {type: "primary", plain: ""}, on: {
                        click: function (t) {
                            e.dialogs.multiDepTree = !1
                        }
                    }
                }, [e._v("取消")]), e._v(" "), a("el-button", {
                    attrs: {type: "primary"},
                    on: {click: e.handleTreeChoose}
                }, [e._v("确 定")])], 1)], 1)
            }, staticRenderFns: []
        }, Ee = a("VU/8")(xe, Ne, !1, null, null, null).exports, Te = {
            data: function () {
                return {dropEl: "", dropNode: "", dragedRow: ""}
            },
            computed: T()({}, Object(U.mapGetters)({dialogs: "userList/dialogs", tableInfo: "userList/tableInfo"})),
            watch: {
                tableInfo: function () {
                    var e = this;
                    this.dropEl = "", document.removeEventListener("dragstart", this.dragstartHandler), document.removeEventListener("dragenter", this.dragenterHandler), document.removeEventListener("dragend", this.dragendHandler), Object(oe.setTimeout)(function () {
                        e.handleTableReload()
                    }, 500)
                }
            },
            components: {
                detail: le,
                depTree: ue,
                importDep: he,
                importUser: ve,
                importCallback: be,
                dialogTree: we,
                dialogMultiTree: Ee
            },
            methods: T()({}, Object(U.mapMutations)({updateCurrentNav: "UPDATE_CURRENT_NAV"}), {
                handleDragStart: function (e, t) {
                }, handleDragEnter: function (e, t, a) {
                }, handleDragLeave: function (e, t, a) {
                }, handleDragOver: function (e, t, a) {
                }, handleDragEnd: function (e, t, a, s) {
                }, handleDrop: function (e, t, a, s, n) {
                    this.$refs.deptree.handleDrop({data: e}, t, a, s, n)
                }, getNode: function (e) {
                    this.$refs.deptree.getNode(e)
                }, handleTableReload: function () {
                    for (var e = this, t = document.getElementsByClassName("el-table__body-wrapper")[0].getElementsByClassName("el-table__row"), a = this, s = function (s) {
                        var n = t[s], o = e.tableInfo[s];
                        2 == o.type && n.setAttribute("draggable", !0), n.addEventListener("dragstart", function (e) {
                            a.dragstartHandler(e, o)
                        }, !1)
                    }, n = 0; n < t.length; n++) s(n);
                    document.addEventListener("dragenter", this.dragenterHandler, !1), document.addEventListener("dragover", this.dragPreventHandler, !1), document.addEventListener("dragend", this.dragendHandler, !1), document.addEventListener("drop", this.dragPreventHandler, !1)
                }, dragstartHandler: function (e, t) {
                    this.dragedRow = t, e.target.style.opacity = .5, e.dataTransfer.setData("Text", t.id)
                }, dragenterHandler: function (e) {
                    var t = e.target.parentNode, a = t.parentNode;
                    "el-tree-node__label" == e.target.className ? (this.dropEl = e.target, this.dropEl.style.background = "#1a8dff", this.dropEl.style.color = "#fff", this.dropNode = this.getNode(this.dropEl.getAttribute("data-id")), this.handleDragEnter(this.dragedRow, this.$refs.deptree.dropNode, e)) : "el-tree-node__label" == t.className ? (this.dropEl = t, this.dropEl.style.background = "#1a8dff", this.dropEl.style.color = "#fff", this.dropNode = this.getNode(this.dropEl.getAttribute("data-id")), this.handleDragEnter(this.dragedRow, this.$refs.deptree.dropNode, e)) : "el-tree-node__label" == a.className ? (this.dropEl = a, this.dropEl.style.background = "#1a8dff", this.dropEl.style.color = "#fff", this.dropNode = this.getNode(this.dropEl.getAttribute("data-id")), this.handleDragEnter(this.dragedRow, this.$refs.deptree.dropNode, e)) : ("" != this.dropEl && (this.dropEl.style.background = "inherit", this.dropEl.style.color = "inherit"), this.dropEl = "")
                }, dragendHandler: function (e, t) {
                    e.target.style.opacity = 1, "" != this.dropEl && (this.dropEl.style.background = "inherit", this.dropEl.style.color = "inherit"), "el-tree-node__label" == this.dropEl.className && (this.getNode(this.dropEl.getAttribute("data-id")), this.handleDrop(this.dragedRow, this.$refs.deptree.dropNode, "inner", e, "user")), this.dropEl = "";
                    for (var a = document.getElementById("departmentTree").getElementsByClassName("el-tree-node__label"), s = void 0, n = 0; n < a.length; n++) (s = a[n]).style.background = "inherit", s.style.color = "inherit"
                }, dragleaveHandler: function (e) {
                    "el-tree-node__label" == e.target.className && (this.dropEl.style.background = "inherit", this.dropEl.style.color = "inherit", this.dropEl = "")
                }, dragPreventHandler: function (e) {
                    e.preventDefault()
                }
            }),
            mounted: function () {
                1 == this.$route.query.userAdd && (this.dialogs.userInfoAdd = !0), this.updateCurrentNav("UserMgr")
            }
        }, Ue = {
            render: function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", {staticClass: "user-manager-wrapper"}, [t("div", {staticClass: "content user-manager"}, [t("div", {staticClass: "content-left"}, [t("dep-tree", {ref: "deptree"})], 1), this._v(" "), t("div", {staticClass: "content-right"}, [t("detail")], 1)]), this._v(" "), t("import-dep"), this._v(" "), t("import-user"), this._v(" "), t("import-callback"), this._v(" "), t("dialog-tree"), this._v(" "), t("dialog-multi-tree")], 1)
            }, staticRenderFns: []
        }, Pe = a("VU/8")(Te, Ue, !1, null, null, null).exports, De = {
            data: function () {
                return {
                    nameInputVisible: !1,
                    nameInputValue: "",
                    userNameInputVisible: !1,
                    userNameInputValue: "",
                    phoneInputVisible: !1,
                    phoneInputValue: ""
                }
            },
            computed: T()({}, Object(U.mapGetters)({
                user: "user",
                company: "company",
                companyRights: "companyRights",
                columns: "userList/columns",
                searchInfo: "userList/searchInfo",
                isSearching: "userList/isSearching",
                nameTags: "userList/nameTags",
                userNameTags: "userList/userNameTags",
                phoneTags: "userList/phoneTags",
                getSelection: "userList/getSelection",
                getSelectedIds: "userList/getSelectedIds",
                dialogs: "userList/dialogs",
                userInfoKeyName: "userList/userInfoKeyName"
            })),
            watch: {
                nameTags: function (e, t) {
                    this.updateSearchTags({key: "name", value: e})
                }, userNameTags: function (e, t) {
                    this.updateSearchTags({key: "userName", value: e})
                }, phoneTags: function (e, t) {
                    this.updateSearchTags({key: "phone", value: e})
                }
            },
            methods: T()({}, Object(U.mapMutations)({
                resetCurrentPage: "userList/RESET_CURRENT_PAGE",
                updateTableColumns: "userList/UPDATE_TABLE_COLUMNS",
                updateSearchStatus: "userList/UPDATE_SEARCH_STATUS",
                resetSearchKey: "userList/RESET_SEARCH_KEY",
                resetAdvancedSearchKey: "userList/RESET_ADVANCED_SEARCH_KEY",
                updateSearchTags: "userList/UPDATE_SEARCH_TAGS"
            }), Object(U.mapActions)({
                exportUserByDepNode: "userList/exportUserByDepNode",
                exportUserBySearch: "userList/exportUserBySearch",
                exportUserBySeniorSearch: "userList/exportUserBySeniorSearch",
                exportUserBySelect: "userList/exportUserBySelect",
                batchDelUser: "userList/batchDelUser",
                verifyEmails: "userList/verifyEmails",
                updatePassword: "userList/updatePassword",
                search: "userList/search",
                seniorSearch: "userList/seniorSearch",
                editUserPermission: "userList/editUserPermission"
            }), {
                handleClickSimpleSearch: function () {
                    this.searchInfo.simpleSearch ? (this.resetCurrentPage(), this.search({isLoadMore: !1})) : (this.updateSearchStatus({
                        simpleSearch: !0,
                        advancedSearch: !1
                    }), this.$refs.simpleSearch.focus(), this.resetAdvancedSearchKey())
                }, handleEnterSimpleSearch: function () {
                    if ("" == this.searchInfo.searchKey) return this.$message({
                        type: "warning",
                        message: "请输入搜索内容！"
                    }), !1;
                    this.resetCurrentPage(), this.search({isLoadMore: !1})
                }, handleBlurSimpleSearch: function () {
                    "" == this.searchInfo.searchKey && this.updateSearchStatus({
                        simpleSearch: !1,
                        advancedSearch: "keep"
                    })
                }, handleShowAdvancedSearch: function () {
                    this.updateSearchStatus({simpleSearch: !1, advancedSearch: !0}), this.resetSearchKey()
                }, handleAdvancedSearch: function () {
                    this.resetCurrentPage(), this.seniorSearch({isLoadMore: !1})
                }, handleNameClose: function (e) {
                    this.nameTags.splice(this.nameTags.indexOf(e), 1)
                }, showNameInput: function () {
                    var e = this;
                    this.nameInputVisible = !0, this.$nextTick(function (t) {
                        e.$refs.saveNameTagInput.$refs.input.focus()
                    })
                }, handleNameInputConfirm: function () {
                    var e = this.nameInputValue;
                    e && this.nameTags.push(e), this.nameInputVisible = !1, this.nameInputValue = ""
                }, handleUserNameClose: function (e) {
                    this.userNameTags.splice(this.userNameTags.indexOf(e), 1)
                }, showUserNameInput: function () {
                    var e = this;
                    this.userNameInputVisible = !0, this.$nextTick(function (t) {
                        e.$refs.saveUserNameTagInput.$refs.input.focus()
                    })
                }, handleUserNameInputConfirm: function () {
                    var e = this.userNameInputValue;
                    e && this.userNameTags.push(e), this.userNameInputVisible = !1, this.userNameInputValue = ""
                }, handlePhoneClose: function (e) {
                    this.phoneTags.splice(this.phoneTags.indexOf(e), 1)
                }, showPhoneInput: function () {
                    var e = this;
                    this.phoneInputVisible = !0, this.$nextTick(function (t) {
                        e.$refs.savePhoneTagInput.$refs.input.focus()
                    })
                }, handlePhoneInputConfirm: function () {
                    var e = this.phoneInputValue;
                    e && this.phoneTags.push(e), this.phoneInputVisible = !1, this.phoneInputValue = ""
                }, handleTreeOpen: function () {
                    this.dialogs.multiDepTree = !0
                }, handleShowImportDep: function () {
                    this.dialogs.importDep = !0
                }, handleShowImportUser: function () {
                    this.dialogs.importUser.showState = !0
                }, handleExport: function () {
                    var e = this;
                    0 != this.getSelection.length ? this.$confirm("请确认是否导出当前选中的部门和人员的考生信息？", "导出考生信息", {
                        customClass: "operation-warning",
                        confirmButtonClass: "success",
                        cancelButtonClass: "cancel",
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning",
                        center: !0
                    }).then(function () {
                        e.exportUserBySelect({$message: e.$message})
                    }).catch(function () {
                    }) : this.searchInfo.isSearching ? this.$confirm("请确认是否导出搜索结果的部门和人员？", "导出考生信息", {
                        customClass: "operation-warning",
                        confirmButtonClass: "success",
                        cancelButtonClass: "cancel",
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning",
                        center: !0
                    }).then(function () {
                        e.searchInfo.simpleSearch ? e.exportUserBySearch({$message: e.$message}) : e.searchInfo.advancedSearch && e.exportUserBySeniorSearch({$message: e.$message})
                    }).catch(function () {
                    }) : this.$confirm("请确认是否导出全部考生的信息？", "导出考生信息", {
                        customClass: "operation-warning",
                        confirmButtonClass: "success",
                        cancelButtonClass: "cancel",
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning",
                        center: !0
                    }).then(function () {
                        e.exportUserByDepNode({$message: e.$message})
                    }).catch(function () {
                    })
                }, handleMove: function () {
                    0 == this.getSelection.length ? this.$message({
                        type: "warning",
                        message: "当前没有选中的部门或人员！"
                    }) : (this.dialogs.depTree.showState = !0, this.dialogs.depTree.sureMethod = "handelMoveDepAndUser")
                }, handleDelete: function () {
                    var e = this;
                    0 == this.getSelection.length ? this.$message({
                        type: "warning",
                        message: "当前没有选中的部门或人员！"
                    }) : this.$prompt("此操作将永久删除所选部门或人员, 是否继续?", "确认删除选中的部门或人员?", {
                        customClass: "operation-warning",
                        confirmButtonClass: "confirm",
                        cancelButtonClass: "cancel",
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        inputPattern: /^DEL$/,
                        inputPlaceholder: "输入DEL确认删除",
                        inputErrorMessage: "输入DEL确认删除",
                        type: "warning",
                        center: !0
                    }).then(function () {
                        e.batchDelUser({$message: e.$message})
                    }).catch(function () {
                    })
                }, getColumns: function () {
                    var e = localStorage.getItem("userList" + this.user.id);
                    e && this.updateTableColumns({columns: JSON.parse(e)})
                }, setColumns: function (e) {
                    this.updateTableColumns({col: e}), localStorage.setItem("userList" + this.user.id, r()(this.columns))
                }, handleUpdatePassword: function () {
                    var e = this;
                    0 == this.getSelection.length ? this.$message({
                        type: "warning",
                        message: "当前没有选中的部门或人员！"
                    }) : this.$prompt("是否将所选部门人员密码改为", "修改密码", {
                        customClass: "operation-warning exit-password",
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        confirmButtonClass: "success",
                        cancelButtonClass: "cancel",
                        inputPattern: /^.+$/,
                        inputErrorMessage: "请输入密码",
                        inputType: "password",
                        type: "warning",
                        center: !0
                    }).then(function (t) {
                        var a = t.value;
                        e.updatePassword({password: a, $message: e.$message})
                    }).catch(function () {
                    })
                }, handleVerifyEmails: function () {
                    var e = this;
                    0 == this.getSelection.length ? this.$message({
                        type: "warning",
                        message: "当前没有选中的部门或人员！"
                    }) : this.$confirm("此操作将验证选中部门和人员的邮箱, 是否继续?", "邮箱验证", {
                        customClass: "operation-warning",
                        confirmButtonClass: "success",
                        cancelButtonClass: "cancel",
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning",
                        center: !0
                    }).then(function () {
                        e.verifyEmails({$message: e.$message})
                    }).catch(function () {
                    })
                }, moreHandle: function (e) {
                    this[e]()
                }, editPermission: function (e) {
                    var t = this, a = "", s = "";
                    0 == e ? (a = "权限批量管理能够批量开通/关闭考生的系统权限，权限将会直接影响用户是否能够被用于创建考试、课程、自定义任务，请谨慎操作。", s = "权限批量管理") : 1 == e && (a = "会否权限批量管理能够批量开通/关闭学员的会否系统权限，会否系统权限将会直接影响用户是否能够被用于创建会否练习，请谨慎操作。", s = "会否权限批量管理"), this.$confirm(a, s, {
                        confirmButtonClass: "success",
                        cancelButtonClass: "cancel",
                        confirmButtonText: "全部开通",
                        cancelButtonText: "全部关闭",
                        center: !0
                    }).then(function () {
                        t.editUserPermission({platform: e, permission: 1, $message: t.$message, type: 0})
                    }).catch(function () {
                        t.editUserPermission({platform: e, permission: 0, $message: t.$message, type: 0})
                    })
                }
            }),
            mounted: function () {
                this.getColumns()
            }
        }, Ae = {
            render: function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "body-toolbar clearfix"}, [a("div", {staticClass: "toolbar-left fl"}, [1 == e.companyRights.allowUserAdd ? a("el-dropdown", {attrs: {trigger: "click"}}, [a("el-button", {
                    attrs: {
                        type: "primary",
                        plain: "",
                        icon: "icon-a_btn_import",
                        size: "small"
                    }
                }, [e._v("导入")]), e._v(" "), a("el-dropdown-menu", {
                    attrs: {slot: "dropdown"},
                    slot: "dropdown"
                }, [a("el-dropdown-item", {
                    nativeOn: {
                        click: function (t) {
                            return e.handleShowImportDep(t)
                        }
                    }
                }, [e._v("导入部门")]), e._v(" "), a("el-dropdown-item", {
                    nativeOn: {
                        click: function (t) {
                            return e.handleShowImportUser(t)
                        }
                    }
                }, [e._v("导入人员")])], 1)], 1) : e._e(), e._v(" "), a("el-button", {
                    attrs: {
                        type: "primary",
                        plain: "",
                        icon: "icon-a_btn_derivation",
                        size: "small"
                    }, on: {click: e.handleExport}
                }, [e._v("导出")]), e._v(" "), a("el-button", {
                    attrs: {
                        type: "primary",
                        plain: "",
                        icon: "icon-a_btn_locomotion",
                        size: "small"
                    }, on: {click: e.handleMove}
                }, [e._v("移动")]), e._v(" "), a("el-button", {
                    attrs: {
                        type: "primary",
                        plain: "",
                        icon: "icon-a_btn_delete",
                        size: "small"
                    }, on: {click: e.handleDelete}
                }, [e._v("删除")]), e._v(" "), a("el-dropdown", {
                    attrs: {trigger: "click", "hide-on-click": !1},
                    on: {command: e.setColumns}
                }, [a("el-button", {
                    attrs: {
                        type: "primary",
                        plain: "",
                        icon: "icon-a_btn_custom_column",
                        size: "small"
                    }
                }, [e._v("自定义列")]), e._v(" "), a("el-dropdown-menu", {
                    staticClass: "ksx-dropdown check",
                    attrs: {slot: "dropdown"},
                    slot: "dropdown"
                }, [a("el-dropdown-item", {attrs: {command: "phone"}}, [e.columns.phone ? a("i", {staticClass: "el-icon-check icon-check"}) : e._e(), e._v("\n          手机\n        ")]), e._v(" "), a("el-dropdown-item", {attrs: {command: "identityCard"}}, [e.columns.identityCard ? a("i", {staticClass: "el-icon-check icon-check"}) : e._e(), e._v("\n          " + e._s(e.userInfoKeyName.identityCard) + "\n        ")]), e._v(" "), a("el-dropdown-item", {attrs: {command: "position"}}, [e.columns.position ? a("i", {staticClass: "el-icon-check icon-check"}) : e._e(), e._v("\n          " + e._s(e.userInfoKeyName.position) + "\n        ")]), e._v(" "), a("el-dropdown-item", {attrs: {command: "email"}}, [e.columns.email ? a("i", {staticClass: "el-icon-check icon-check"}) : e._e(), e._v("\n          邮箱\n        ")]), e._v(" "), a("el-dropdown-item", {attrs: {command: "isBindWechat"}}, [e.columns.isBindWechat ? a("i", {staticClass: "el-icon-check icon-check"}) : e._e(), e._v("\n          是否绑定微信\n        ")]), e._v(" "), a("el-dropdown-item", {attrs: {command: "notice"}}, [e.columns.notice ? a("i", {staticClass: "el-icon-check icon-check"}) : e._e(), e._v("\n          " + e._s(e.userInfoKeyName.notice) + "\n        ")]), e._v(" "), a("el-dropdown-item", {attrs: {command: "field1"}}, [e.columns.field1 ? a("i", {staticClass: "el-icon-check icon-check"}) : e._e(), e._v("\n          " + e._s(e.userInfoKeyName.field1) + "\n        ")]), e._v(" "), a("el-dropdown-item", {attrs: {command: "field2"}}, [e.columns.field2 ? a("i", {staticClass: "el-icon-check icon-check"}) : e._e(), e._v("\n          " + e._s(e.userInfoKeyName.field2) + "\n        ")]), e._v(" "), a("el-dropdown-item", {attrs: {command: "field3"}}, [e.columns.field3 ? a("i", {staticClass: "el-icon-check icon-check"}) : e._e(), e._v("\n          " + e._s(e.userInfoKeyName.field3) + "\n        ")]), e._v(" "), a("el-dropdown-item", {attrs: {command: "field4"}}, [e.columns.field4 ? a("i", {staticClass: "el-icon-check icon-check"}) : e._e(), e._v("\n          " + e._s(e.userInfoKeyName.field4) + "\n        ")]), e._v(" "), a("el-dropdown-item", {attrs: {command: "field5"}}, [e.columns.field5 ? a("i", {staticClass: "el-icon-check icon-check"}) : e._e(), e._v("\n          " + e._s(e.userInfoKeyName.field5) + "\n        ")]), e._v(" "), a("el-dropdown-item", {attrs: {command: "identityImg"}}, [e.columns.identityImg ? a("i", {staticClass: "el-icon-check icon-check"}) : e._e(), e._v("\n          " + e._s(e.userInfoKeyName.identityImg) + "\n        ")])], 1)], 1), e._v(" "), a("el-button", {
                    attrs: {
                        type: "primary",
                        plain: "",
                        icon: "icon-a_operate_edit",
                        size: "small"
                    }, on: {click: e.handleUpdatePassword}
                }, [e._v("修改密码")]), e._v(" "), a("el-button", {
                    attrs: {
                        type: "primary",
                        plain: "",
                        icon: "icon-a_export_add_people",
                        size: "small"
                    }, on: {click: e.handleVerifyEmails}
                }, [e._v("邮箱验证")])], 1), e._v(" "), a("div", {staticClass: "toolbar-right fr"}, [a("div", {staticClass: "ksx-search-group"}, [a("el-input", {
                    ref: "simpleSearch",
                    class: ["ksx-simple-search", "animate", e.searchInfo.simpleSearch ? "is-search" : ""],
                    attrs: {placeholder: "请输入姓名、账号或部门", clearable: !0},
                    on: {blur: e.handleBlurSimpleSearch},
                    nativeOn: {
                        keyup: function (t) {
                            return "button" in t || !e._k(t.keyCode, "enter", 13, t.key, "Enter") ? e.handleEnterSimpleSearch(t) : null
                        }
                    },
                    model: {
                        value: e.searchInfo.searchKey, callback: function (t) {
                            e.$set(e.searchInfo, "searchKey", t)
                        }, expression: "searchInfo.searchKey"
                    }
                }, [a("i", {
                    staticClass: "el-icon-search",
                    attrs: {slot: "prefix"},
                    slot: "prefix"
                }), e._v(" "), a("span", {
                    attrs: {slot: "append"},
                    on: {click: e.handleClickSimpleSearch},
                    slot: "append"
                }, [e._v("搜索")])]), e._v(" "), a("el-popover", {
                    attrs: {
                        placement: "bottom",
                        width: "423",
                        trigger: "click",
                        "popper-class": "ksx-advanced-search"
                    },
                    on: {show: e.handleShowAdvancedSearch},
                    model: {
                        value: e.dialogs.advancedSearch, callback: function (t) {
                            e.$set(e.dialogs, "advancedSearch", t)
                        }, expression: "dialogs.advancedSearch"
                    }
                }, [a("el-form", {
                    ref: "form",
                    attrs: {"label-width": "70px", size: "mini", "label-position": "left"}
                }, [a("div", {staticClass: "form-body-wrapper"}, [a("div", {staticClass: "form-body"}, [a("el-form-item", {attrs: {label: "姓名"}}, [a("div", {staticClass: "el-input-tag"}, [e._l(e.nameTags, function (t) {
                    return a("el-tag", {
                        key: t,
                        attrs: {closable: "", size: "small", "disable-transitions": !1},
                        on: {
                            close: function (a) {
                                e.handleNameClose(t)
                            }
                        }
                    }, [e._v("\n                    " + e._s(t) + "\n                  ")])
                }), e._v(" "), e.nameInputVisible ? a("el-input", {
                    ref: "saveNameTagInput",
                    staticClass: "input-new-tag",
                    attrs: {size: "mini"},
                    on: {blur: e.handleNameInputConfirm},
                    nativeOn: {
                        keyup: function (t) {
                            return "button" in t || !e._k(t.keyCode, "enter", 13, t.key, "Enter") ? e.handleNameInputConfirm(t) : null
                        }
                    },
                    model: {
                        value: e.nameInputValue, callback: function (t) {
                            e.nameInputValue = t
                        }, expression: "nameInputValue"
                    }
                }) : a("el-button", {
                    staticClass: "button-new-tag",
                    attrs: {size: "small"},
                    on: {click: e.showNameInput}
                }, [e._v("+ 添加")])], 2)]), e._v(" "), a("el-form-item", {attrs: {label: "账号"}}, [a("div", {staticClass: "el-input-tag"}, [e._l(e.userNameTags, function (t) {
                    return a("el-tag", {
                        key: t,
                        attrs: {closable: "", size: "small", "disable-transitions": !1},
                        on: {
                            close: function (a) {
                                e.handleUserNameClose(t)
                            }
                        }
                    }, [e._v("\n                    " + e._s(t) + "\n                  ")])
                }), e._v(" "), e.userNameInputVisible ? a("el-input", {
                    ref: "saveUserNameTagInput",
                    staticClass: "input-new-tag",
                    attrs: {size: "mini"},
                    on: {blur: e.handleUserNameInputConfirm},
                    nativeOn: {
                        keyup: function (t) {
                            return "button" in t || !e._k(t.keyCode, "enter", 13, t.key, "Enter") ? e.handleUserNameInputConfirm(t) : null
                        }
                    },
                    model: {
                        value: e.userNameInputValue, callback: function (t) {
                            e.userNameInputValue = t
                        }, expression: "userNameInputValue"
                    }
                }) : a("el-button", {
                    staticClass: "button-new-tag",
                    attrs: {size: "small"},
                    on: {click: e.showUserNameInput}
                }, [e._v("+ 添加")])], 2)]), e._v(" "), a("el-form-item", {attrs: {label: "手机号"}}, [a("div", {staticClass: "el-input-tag"}, [e._l(e.phoneTags, function (t) {
                    return a("el-tag", {
                        key: t,
                        attrs: {closable: "", size: "small", "disable-transitions": !1},
                        on: {
                            close: function (a) {
                                e.handlePhoneNameClose(t)
                            }
                        }
                    }, [e._v("\n                    " + e._s(t) + "\n                  ")])
                }), e._v(" "), e.phoneInputVisible ? a("el-input", {
                    ref: "savePhoneTagInput",
                    staticClass: "input-new-tag",
                    attrs: {size: "mini"},
                    on: {blur: e.handlePhoneInputConfirm},
                    nativeOn: {
                        keyup: function (t) {
                            return "button" in t || !e._k(t.keyCode, "enter", 13, t.key, "Enter") ? e.handlePhoneInputConfirm(t) : null
                        }
                    },
                    model: {
                        value: e.phoneInputValue, callback: function (t) {
                            e.phoneInputValue = t
                        }, expression: "phoneInputValue"
                    }
                }) : a("el-button", {
                    staticClass: "button-new-tag",
                    attrs: {size: "small"},
                    on: {click: e.showPhoneInput}
                }, [e._v("+ 添加")])], 2)]), e._v(" "), a("el-form-item", {attrs: {label: "性别"}}, [a("el-radio-group", {
                    model: {
                        value: e.searchInfo.advancedSearchKey.sex,
                        callback: function (t) {
                            e.$set(e.searchInfo.advancedSearchKey, "sex", t)
                        },
                        expression: "searchInfo.advancedSearchKey.sex"
                    }
                }, [a("el-radio", {attrs: {label: 1}}, [e._v("男")]), e._v(" "), a("el-radio", {attrs: {label: 0}}, [e._v("女")])], 1)], 1), e._v(" "), a("el-form-item", {attrs: {label: "状态"}}, [a("el-radio-group", {
                    model: {
                        value: e.searchInfo.advancedSearchKey.status,
                        callback: function (t) {
                            e.$set(e.searchInfo.advancedSearchKey, "status", t)
                        },
                        expression: "searchInfo.advancedSearchKey.status"
                    }
                }, [a("el-radio", {attrs: {label: "0"}}, [e._v("正常")]), e._v(" "), a("el-radio", {attrs: {label: "1"}}, [e._v("禁用")])], 1)], 1), e._v(" "), a("el-form-item", {attrs: {label: "部门"}}, [a("div", {
                    staticClass: "el-form-choose tc",
                    on: {click: e.handleTreeOpen}
                }, [e._v("\n                  " + e._s("" == e.searchInfo.advancedSearchKey.departmentNames ? "选择部门" : e.searchInfo.advancedSearchKey.departmentNames) + "\n                ")])]), e._v(" "), a("el-form-item", {attrs: {label: "部门关键词"}}, [a("el-input", {
                    model: {
                        value: e.searchInfo.advancedSearchKey.departmentKey,
                        callback: function (t) {
                            e.$set(e.searchInfo.advancedSearchKey, "departmentKey", t)
                        },
                        expression: "searchInfo.advancedSearchKey.departmentKey"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: "邮箱"}}, [a("el-input", {
                    model: {
                        value: e.searchInfo.advancedSearchKey.email,
                        callback: function (t) {
                            e.$set(e.searchInfo.advancedSearchKey, "email", t)
                        },
                        expression: "searchInfo.advancedSearchKey.email"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.position}}, [a("el-input", {
                    model: {
                        value: e.searchInfo.advancedSearchKey.position,
                        callback: function (t) {
                            e.$set(e.searchInfo.advancedSearchKey, "position", t)
                        },
                        expression: "searchInfo.advancedSearchKey.position"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.identityCard}}, [a("el-input", {
                    model: {
                        value: e.searchInfo.advancedSearchKey.identityCard,
                        callback: function (t) {
                            e.$set(e.searchInfo.advancedSearchKey, "identityCard", t)
                        },
                        expression: "searchInfo.advancedSearchKey.identityCard"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.notice}}, [a("el-input", {
                    model: {
                        value: e.searchInfo.advancedSearchKey.notice,
                        callback: function (t) {
                            e.$set(e.searchInfo.advancedSearchKey, "notice", t)
                        },
                        expression: "searchInfo.advancedSearchKey.notice"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.field1}}, [a("el-input", {
                    model: {
                        value: e.searchInfo.advancedSearchKey.field1,
                        callback: function (t) {
                            e.$set(e.searchInfo.advancedSearchKey, "field1", t)
                        },
                        expression: "searchInfo.advancedSearchKey.field1"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.field2}}, [a("el-input", {
                    model: {
                        value: e.searchInfo.advancedSearchKey.field2,
                        callback: function (t) {
                            e.$set(e.searchInfo.advancedSearchKey, "field2", t)
                        },
                        expression: "searchInfo.advancedSearchKey.field2"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.field3}}, [a("el-input", {
                    model: {
                        value: e.searchInfo.advancedSearchKey.field3,
                        callback: function (t) {
                            e.$set(e.searchInfo.advancedSearchKey, "field3", t)
                        },
                        expression: "searchInfo.advancedSearchKey.field3"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.field4}}, [a("el-input", {
                    model: {
                        value: e.searchInfo.advancedSearchKey.field4,
                        callback: function (t) {
                            e.$set(e.searchInfo.advancedSearchKey, "field4", t)
                        },
                        expression: "searchInfo.advancedSearchKey.field4"
                    }
                })], 1), e._v(" "), a("el-form-item", {attrs: {label: e.userInfoKeyName.field5}}, [a("el-input", {
                    model: {
                        value: e.searchInfo.advancedSearchKey.field5,
                        callback: function (t) {
                            e.$set(e.searchInfo.advancedSearchKey, "field5", t)
                        },
                        expression: "searchInfo.advancedSearchKey.field5"
                    }
                })], 1)], 1)]), e._v(" "), a("el-form-item", {staticClass: "tc fixed-bottom"}, [a("el-button", {
                    staticClass: "el-btn-search",
                    attrs: {type: "primary"},
                    on: {click: e.handleAdvancedSearch}
                }, [e._v("搜索")])], 1)], 1), e._v(" "), a("el-button", {
                    staticClass: "el-btn-advance",
                    attrs: {slot: "reference", type: "text", size: "medium"},
                    slot: "reference"
                }, [e._v("\n          高级搜索"), a("i", {staticClass: "el-icon-arrow-down el-icon--right"})])], 1)], 1)])])
            }, staticRenderFns: []
        };
        var $e = a("VU/8")(De, Ae, !1, function (e) {
            a("kaMK")
        }, "data-v-7c895045", null).exports;
        Vue.use(d.a);
        var Re, Le = new d.a({
            routes: [{
                path: "/",
                redirect: "/list",
                name: "adminApp",
                component: J,
                children: [{
                    path: "list", name: "list", beforeEnter: function (e, t, a) {
                        !function (e) {
                            var t = {
                                methodName: "getAllRights",
                                token: Le.app.$store.getters.token,
                                userId: Le.app.$store.getters.user.id,
                                jsonParam: {companyId: Le.app.$store.getters.company.id}
                            };
                            I({method: "POST", data: r()(t)}).then(function (t) {
                                var a = t.data.bizContent.allowUserMgr;
                                a ? e() : e("/Limit")
                            })
                        }(a)
                    }, components: {subNav: $e, main: Pe}
                }]
            }, {path: "/error", component: L}, {path: "/info", component: B}, {
                path: "*",
                component: A
            }, {path: "/Limit", component: j}]
        });
        (Re = Le).beforeEach(function (e, t, a) {
            var s = KSX.getCookie("sessionId"), n = e.query.companyId ? "/" + e.query.companyId : "",
                o = "/html/user/user_list#";
            if ("mRedPack" == e.name || "redPackAjax" == e.name || "redPackStatus" == e.name || "endStatus" == e.name) a();
            else if ("" == s) ;//window.open(o, "_self");
            else {
                var i = {sessionId: s};
                I({url: w.loginCheck, method: "POST", data: r()(i)}).then(function (t) {
                    var s = t.data;
                    if (s.success) {
                        if (Re.app.$store.commit("END_LOADING"), Re.app.$store.commit("SET_TOKEN", s.bizContent.token), Re.app.$store.commit("SET_USER", s.bizContent.user), Re.app.$store.commit("SET_COMPANY", s.bizContent.company), Re.app.$store.commit("SET_COMPANY_ATTR", {
                            versionName: s.bizContent.versionName,
                            userCounts: s.bizContent.userCounts,
                            countLimit: s.bizContent.countLimit,
                            logoUrl: s.bizContent.logoUrl,
                            spaceLimit: s.bizContent.spaceLimit,
                            spaceSize: s.bizContent.spaceSize,
                            followStatus: s.bizContent.followStatus
                        }), "applicationSheet" != e.name) {
                            ksxProbe.gioInit({
                                userId: s.bizContent.user.id,
                                companyId: s.bizContent.company.id,
                                companyName: s.bizContent.company.companyName,
                                rightsGrade: s.bizContent.company.rightsGrade
                            });
                            var n = window.navigator.userAgent.toLowerCase(), i = KSX.getPlatform(n);
                            if ("pc" == i && /exam\/m\//.test("/admin/user")) {
                                var r = Re.resolve({path: e.path, params: e.params, query: e.query});
                                window.location.href = N + "/admin/user".replace(/exam\/m\//, "exam/pc/") + r.href
                            }
                            if ("mobile" == i && /exam\/pc\//.test("/admin/user")) {
                                var l = Re.resolve({path: e.path, params: e.params, query: e.query});
                                window.location.href = N + "/admin/user".replace(/exam\/pc\//, "exam/m/") + l.href
                            }
                        }
                        a()
                    } else window.open(o, "_self")
                }).catch(function (e) {
                    console.log(e)
                })
            }
        });
        var Oe, Me = Le, Be = {
            url: C,
            api: g,
            token: "",
            user: {},
            company: {},
            companyRights: {},
            cmodify: {},
            currentNavItem: "",
            loading: !1,
            dialogs: {userInfo: !1, setPassword: !1},
            signUpRights: {},
            processRights: {},
            number: {},
            advancedSetRights: {labelOpen: ""}
        }, Ke = function (e) {
            return e.loading
        }, Ge = function (e) {
            return e.url
        }, je = function (e) {
            return e.api
        }, Ve = function (e) {
            return e.token
        }, ze = function (e) {
            return e.user
        }, Fe = function (e) {
            return e.company
        }, He = function (e) {
            return e.companyRights
        }, qe = function (e) {
            return e.advancedSetRights
        }, We = function (e) {
            return e.currentNavItem
        }, Ye = function (e, t) {
            var a = t.api, s = t.url, n = t.companyRights, o = t.user.role, i = [{
                title: "首页",
                icon: "icon-a_nav_home",
                id: "Index",
                url: a.apiBase("admin") + "/account/admin/index",
                show: !0
            }, {
                title: "考试管理",
                icon: "icon-a_nav_exam",
                id: "Exam",
                subMenu: [{
                    title: "考试信息管理",
                    id: "ExamMgr",
                    url: a.apiBase("admin") + "/admin/exam_mgr_new",
                    show: n.allowExamMgr
                }, {
                    title: "试题库",
                    id: "QuestionMgr",
                    url: s.urlProject("/admin/testQuestions") + "/list",
                    show: n.allowShowtestqm
                }, {
                    title: "试卷库",
                    id: "PaperMgr",
                    url: a.apiBase("admin") + "/admin/paper_mgr_new",
                    show: n.allowPaperMgr
                }, {
                    title: "成绩查询",
                    id: "ResultMgr",
                    url: a.apiBase("admin") + "/admin/result/mgr_new",
                    show: n.allowResultMgr
                }, {
                    title: "分析考试",
                    id: "ResultAnalysis",
                    url: a.apiBase("new") + "/ae/results/analysis/exam",
                    show: n.allowAnalysisExam
                }, {
                    title: "分析考生",
                    id: "personAnalysis",
                    url: a.apiBase("new") + "/ae/results/analysis/person",
                    show: n.allowAnalysisPerson
                }]
            }, {
                title: "人员管理",
                icon: "icon-a_nav_personnel",
                id: "User",
                subMenu: [{
                    title: "考生信息",
                    id: "UserMgr",
                    url: s.urlProject("/admin/user") + "/list",
                    show: n.allowUserMgr
                }, {title: "注册设置", id: "UserReg", url: a.apiBase("admin") + "/admin/user_reg", show: n.allowUserReg}]
            }, {
                title: "学习",
                icon: "icon-a_nav_study",
                id: "Course",
                subMenu: [{
                    title: "知识库",
                    id: "FileMgr",
                    url: a.apiBase("admin") + "/admin/file/manager",
                    show: n.allowFileManager
                }, {
                    title: "课程管理",
                    id: "CourseMgr",
                    url: a.apiBase("admin") + "/course/course_mgr",
                    show: n.allowCourseManager
                }]
            }, {
                title: "自定义任务",
                icon: "icon-a_icon_nav_process",
                id: "CustomProcess",
                show: n.allowCustomProcess,
                beta: !0,
                url: s.urlProject("/admin/customprocess") + "/list"
            }, {
                title: "认证中心",
                icon: "icon-p_leftnav_certification",
                id: "Certification",
                show: n.allowCertificateCenter,
                url: a.apiBase("admin") + "/certificate/certificate_center"
            }, {
                title: "报名审核",
                icon: "icon-a_nav_sign_up",
                id: "Application",
                show: n.allowSignUp,
                url: s.urlProject("/admin/application") + "/list"
            }, {
                title: "支付中心",
                icon: "icon-a_nav_pay",
                id: "Pay",
                subMenu: [{
                    title: "充值",
                    id: "PayCenter",
                    url: a.apiBase("admin") + "/account/admin_pay_center",
                    show: n.allowPayCenter
                }, {
                    title: "支付设置",
                    id: "PaySet",
                    url: a.apiBase("admin") + "/admin/user_pay_set",
                    show: n.allowTransactionRecord
                }, {
                    title: "消费记录",
                    id: "ConsumeRecord",
                    url: a.apiBase("admin") + "/account/admin_consume_record",
                    show: n.allowTransactionRecord
                }, {
                    title: "充值记录",
                    id: "OrderRecord",
                    url: a.apiBase("admin") + "/account/admin_order_record",
                    show: n.allowAdminOrderRecord
                }, {
                    title: "考生付费记录",
                    id: "PayRecord",
                    url: a.apiBase("admin") + "/account/examinee_pay_record",
                    show: n.allowExamineePayRecord
                }]
            }, {
                title: "系统管理",
                icon: "icon-a_nav_system",
                id: "System",
                subMenu: [{
                    title: "子管理员设置",
                    id: "SubAdminMgr",
                    url: a.apiBase("admin") + "/admin/sub_admin_mgr",
                    show: n.allowSubAdminMgr
                }, {
                    title: "高级功能设置",
                    id: "AdvancedSetMgr",
                    url: a.apiBase("admin") + "/admin_info/advanced_setting",
                    show: n.allowAdvancedSet
                }, {
                    title: "App设置",
                    id: "AppSetting",
                    url: a.apiBase("admin") + "/admin/app_set",
                    show: n.allowAppSet
                }, {
                    title: "LOGO设置",
                    id: "LogoSetting",
                    url: a.apiBase("admin") + "/admin/logo_setting",
                    show: n.allowLogoSetting
                }, {
                    title: "个性化设置",
                    id: "Modify",
                    url: a.apiBase("admin") + "/admin/modify",
                    show: n.allowModify
                }, {
                    title: "关联公众号",
                    id: "FollowApp",
                    url: a.apiBase("admin") + "/admin/follow_app",
                    show: n.allowFollowApp
                }, {
                    title: "开发者信息管理",
                    id: "DevInfoMgr",
                    url: a.apiBase("admin") + "/admin/dev_info_mgr",
                    show: n.allowDevInfoMgr
                }, {
                    title: "管理员操作记录",
                    id: "OpRecord",
                    url: a.apiBase("admin") + "/account/admin_op_record",
                    show: n.allowAdminOpRecord
                }]
            }];
            if ("sub_admin" == o) for (var r = 0; r < i.length; r++) i[r].subMenu && (i[r].subMenu = i[r].subMenu.filter(function (e) {
                return e.show
            }));
            return i
        }, Je = function (e, t) {
            var a = t.api, s = t.url, n = t.companyRights, o = 1 == t.user.isSkipLogin, i = e.number;
            return [{
                title: n.examName,
                show: !o && n.canExam,
                icon: "icon-p_leftnav_exam",
                url: a.apiBase("exam") + "/exam",
                id: "Exam",
                isShowNum: i.exam > 9 ? "9+" : i.exam
            }, {
                title: n.courseName,
                show: !o && n.canCourse,
                icon: "icon-p_icon_leftnav_course",
                url: a.apiBase("exam") + "/course/show",
                id: "Course",
                isShowNum: i.course > 9 ? "9+" : i.course
            }, {
                title: n.processName,
                show: !o && n.canProcess,
                icon: "icon-a_icon_nav_process",
                url: s.urlProject("/exam/pc/customprocess") + "/list",
                id: "CustomProcess",
                isShowNum: i.process > 9 ? "9+" : i.process
            }, {
                title: n.fileManagerName,
                show: !o && n.canFileManager,
                icon: "icon-p_icon_leftnav_repository",
                url: a.apiBase("exam") + "/exam/file_mgr",
                id: "Netdisk"
            }, {
                title: n.certificateName,
                show: !o && n.canCertificate,
                icon: "icon-p_leftnav_certification",
                url: a.apiBase("exam") + "/certificate/certificate_mine",
                id: "Certificate",
                isStaffShow: n.canCertificate
            }, {
                title: n.signupName,
                show: !o && n.canSignup,
                icon: "icon-a_nav_sign_up",
                url: s.urlProject("/exam/pc/application") + "/list",
                id: "Application",
                isStaffShow: n.canSignup
            }]
        }, Qe = function (e, t) {
            var a = t.api, s = (t.url, t.companyRights), n = 1 == t.user.isSkipLogin;
            return [{
                title: "首页",
                show: !0,
                icon: "icon-p_leftnav_exam",
                url: a.apiBase("exam") + "/exam",
                id: "Exam"
            }, {
                title: "历史",
                show: !0,
                icon: "icon-p_leftnav_history",
                url: a.apiBase("exam") + "/exam/history",
                id: "History"
            }, {
                title: "知识库",
                show: !n && s.canFileManager,
                icon: "icon-p_leftnav_learn",
                url: a.apiBase("exam") + "/exam/m_file_mgr",
                id: "Course"
            }, {
                title: "我的",
                show: !0,
                icon: "icon-m_nav_my",
                url: a.apiBase("exam") + "/account/m_user_info",
                id: "Mine"
            }]
        }, Xe = function (e) {
            return e.dialogs
        }, Ze = (Oe = {}, z()(Oe, "SET_TOKEN", function (e, t) {
            e.token = t
        }), z()(Oe, "SET_USER", function (e, t) {
            e.user = t
        }), z()(Oe, "SET_COMPANY", function (e, t) {
            e.company = t
        }), z()(Oe, "SET_COMPANY_ATTR", function (e, t) {
            for (var a in t) t.hasOwnProperty(a) && (e.company[a] = t[a])
        }), z()(Oe, "GET_NUMBER", function (e, t) {
            e.number = t
        }), z()(Oe, "SET_COMPANY_RIGHTS", function (e, t) {
            e.companyRights = t
        }), z()(Oe, "UPDATE_CURRENT_NAV", function (e, t) {
            e.currentNavItem = t
        }), z()(Oe, "START_LOADING", function (e) {
            e.loading = !0
        }), z()(Oe, "END_LOADING", function (e) {
            e.loading = !1
        }), z()(Oe, "RESPONSE_HANDLE", function (e, t) {
            var a = this.getters.url;
            500 == t.code ? window.location.href = a.urlBase() + "/error" : window.location.href = a.urlBase() + "/info?message=" + t.desc
        }), Oe), et = {
            logout: function (e) {
                I({url: e.getters.api.apiPublic().logout, method: "POST"}).then(function (e) {
                    var t = e.data;
                    t.success && (window.location.href = t.bizContent.url)
                })
            }, getAdminBaseInfo: function (e) {
                var t = {
                    methodName: "getAdminBaseInfo",
                    token: e.rootGetters.token,
                    userId: e.rootGetters.user.id,
                    jsonParam: {}
                };
                I({method: "POST", data: r()(t)}).then(function (e) {
                    e.data.success
                })
            }, getAllRights: function (e) {
                var t = {
                    methodName: "getAllRights",
                    token: e.rootGetters.token,
                    userId: e.rootGetters.user.id,
                    jsonParam: {}
                };
                I({method: "POST", data: r()(t)}).then(function (t) {
                    var a = t.data;
                    a.success && e.commit("SET_COMPANY_RIGHTS", a.bizContent)
                })
            }, getExamBaseInfo: function (e, t) {
                var a = {
                    methodName: "getExamBaseInfo",
                    token: e.rootGetters.token,
                    userId: e.rootGetters.user.id,
                    tokenFlag: t.ignoreLoginCheck ? 1 : 0,
                    jsonParam: {companyId: t.companyId}
                };
                I({method: "POST", data: r()(a)}).then(function (a) {
                    var s = a.data;
                    t.callback && t.callback(), s.success && (e.commit("SET_COMPANY", s.bizContent.company), e.commit("SET_COMPANY_RIGHTS", s.bizContent.companyRights), e.state.company.adminUrl = s.bizContent.adminUrl, e.state.user.weBindUrl = s.bizContent.weBindUrl, e.state.company.logoUrl = s.bizContent.logoUrl)
                })
            }, userUpdate: function (e, t) {
                var a = {
                    methodName: "userUpdate",
                    token: e.rootGetters.token,
                    userId: e.rootGetters.user.id,
                    jsonParam: {picture: t.picture, surname: t.surname, email: t.email, phone: t.phone, sex: t.sex}
                };
                I({method: "POST", data: r()(a)}).then(function (a) {
                    a.data.success && (e.state.user.picture = t.picture, e.state.user.surname = t.surname, e.state.user.email = t.email, e.state.user.phone = t.phone, e.state.user.sex = t.sex, e.state.dialogs.userInfo = !1)
                })
            }, modifyGetLogo: function (e) {
                var t = {
                    methodName: "modifyGetLogo",
                    token: e.rootGetters.token,
                    userId: e.rootGetters.user.id,
                    jsonParam: {}
                };
                I({method: "POST", data: r()(t)}).then(function (t) {
                    var a = t.data;
                    a.success && (e.state.company.logoUrl = a.bizContent.logoUrl)
                })
            }, unbindWeChat: function (e) {
                var t = {
                    methodName: "unbindWeChat",
                    token: e.rootGetters.token,
                    userId: e.rootGetters.user.id,
                    jsonParam: {}
                };
                I({method: "POST", data: r()(t)}).then(function (t) {
                    t.data.success && (e.state.user.wechatId = null)
                })
            }, verifyEmails: function (e, t) {
                var a = t.$message, s = {
                    methodName: "verifyEmails",
                    token: e.rootGetters.token,
                    userId: e.rootGetters.user.id,
                    jsonParam: {}
                };
                I({method: "POST", data: r()(s)}).then(function (e) {
                    e.data.success && a({message: "验证邮件已发送，请注意查收", type: "info"})
                })
            }, userSetPass: function (e, t) {
                var a = t.$message, s = {
                    methodName: "userSetPass",
                    token: e.rootGetters.token,
                    userId: e.rootGetters.user.id,
                    jsonParam: {newPassword: t.newPassword, oldPassword: t.oldPassword}
                };
                I({method: "POST", data: r()(s)}).then(function (t) {
                    var s = t.data;
                    s.success ? e.state.dialogs.setPassword = !1 : a({type: "error", message: s.desc})
                })
            }, getFollowAppStatus: function (e, t) {
                e.state.loading = !0;
                var a = t.callback, s = {
                    methodName: "getFollowAppStatus",
                    token: e.rootGetters.token,
                    userId: e.rootGetters.user.id,
                    jsonParam: {}
                };
                I({method: "POST", data: r()(s)}).then(function (t) {
                    var s = t.data;
                    s.success && (e.state.company.followApp = s.bizContent.allowFollow, a && a(e.state.company.followApp)), e.state.loading = !1
                }).catch(function () {
                    e.state.loading = !1
                })
            }, checkSignUpRight: function (e, t) {
                var a = {
                    methodName: "checkSignUpRight",
                    token: e.rootGetters.token,
                    userId: e.rootGetters.user.id,
                    tokenFlag: t.ignoreLoginCheck ? 1 : 0,
                    jsonParam: {companyId: e.state.company.id ? e.state.company.id : t.companyId}
                };
                I({method: "POST", data: r()(a)}).then(function (t) {
                    var a = t.data;
                    a.success && (e.state.signUpRights = a.bizContent)
                })
            }, checkProcessRight: function (e, t) {
                var a = {
                    methodName: "checkProcessRight",
                    token: e.rootGetters.token,
                    userId: e.rootGetters.user.id,
                    tokenFlag: t.ignoreLoginCheck ? 1 : 0,
                    jsonParam: {companyId: e.state.company.id ? e.state.company.id : t.companyId}
                };
                I({method: "POST", data: r()(a)}).then(function (t) {
                    var a = t.data;
                    a.success && (e.state.processRights = a.bizContent)
                })
            }, checkAdvancedSet: function (e, t) {
                var a = {
                    methodName: "checkAdvancedSet",
                    token: e.rootGetters.token,
                    userId: e.rootGetters.user.id,
                    jsonParam: {}
                };
                I({method: "POST", data: r()(a)}).then(function (t) {
                    var a = t.data;
                    a.success && (e.state.advancedSetRights.labelOpen = a.bizContent.labelOpen)
                })
            }
        };
        a("sax8");
        u.a.polyfill();
        var tt = m.a.create({baseURL: g.apiProject(), timeout: 45e3, withCredentials: !0});
        tt.interceptors.response.use(function (e) {
            return e.data
        }, function (e) {
        });
        var at, st = tt, nt = {
            namespaced: !0, state: {
                departmentTree: [],
                defaultExpandedKeys: [],
                treeLoading: !1,
                currentDepId: "",
                searchInfo: {
                    simpleSearch: !1,
                    advancedSearch: !1,
                    isSearching: !1,
                    rowCount: 10,
                    current: 1,
                    searchKey: "",
                    advancedSearchKey: {
                        name: [],
                        userName: [],
                        sex: "",
                        status: "",
                        departmentIds: "",
                        departmentNames: "",
                        departmentKey: "",
                        phone: [],
                        identityCard: "",
                        position: "",
                        email: "",
                        isBindWechatDesc: "",
                        notice: "",
                        field1: "",
                        field2: "",
                        field3: "",
                        field4: "",
                        field5: ""
                    },
                    sort: {prop: "name", order: "desc"}
                },
                tableConfig: {
                    tableInfo: [],
                    columns: {
                        sex: !0,
                        phone: !1,
                        identityCard: !1,
                        position: !0,
                        email: !0,
                        isBindWechat: !0,
                        permission: !1,
                        notice: !1,
                        identityImg: !0,
                        field1: !1,
                        field2: !1,
                        field3: !1,
                        field4: !1,
                        field5: !1
                    }
                },
                tableAttributes: {
                    headerSelectionStatus: !1,
                    selection: [],
                    noSelection: [],
                    canLoadMore: !0,
                    loading: !1
                },
                userInfo: {
                    userName: "",
                    isReduplicated: !1,
                    surname: "",
                    passwordTmp: "",
                    password: "",
                    departmentId: "",
                    departmentName: "总部",
                    sex: 1,
                    phone: "",
                    identityCard: "",
                    position: "",
                    email: "",
                    notice: "",
                    identityImg: "",
                    identityImgName: "",
                    field1: "",
                    field2: "",
                    field3: "",
                    field4: "",
                    field5: ""
                },
                userInfoKeyName: {
                    position: "",
                    notice: "",
                    identityImg: "",
                    identityCard: "",
                    field1: "",
                    field2: "",
                    field3: "",
                    field4: "",
                    field5: ""
                },
                registConfig: [],
                importUserCallback: {succNum: "", warning: [], fail: []},
                dialogs: {
                    userInfoAdd: !1,
                    userInfoEdit: !1,
                    importUser: {showState: !1, inProgress: !1},
                    importDep: !1,
                    depTree: {showState: !1, sureMethod: ""},
                    multiDepTree: !1,
                    importCallback: !1,
                    advancedSearch: !1
                }
            }, getters: {
                departmentTree: function (e) {
                    return e.departmentTree
                }, defaultExpandedKeys: function (e) {
                    return e.defaultExpandedKeys
                }, treeLoading: function (e) {
                    return e.treeLoading
                }, currentDepId: function (e, t) {
                    return e.currentDepId
                }, searchInfo: function (e) {
                    return e.searchInfo
                }, isSearching: function (e) {
                    return e.searchInfo.isSearching
                }, nameTags: function (e) {
                    return e.searchInfo.advancedSearchKey.name
                }, userNameTags: function (e) {
                    return e.searchInfo.advancedSearchKey.userName
                }, phoneTags: function (e) {
                    return e.searchInfo.advancedSearchKey.phone
                }, tableConfig: function (e) {
                    return e.tableConfig
                }, columns: function (e) {
                    return e.tableConfig.columns
                }, tableInfo: function (e) {
                    return e.tableConfig.tableInfo
                }, tableAttributes: function (e) {
                    return e.tableAttributes
                }, getSelection: function (e) {
                    return e.tableAttributes.selection
                }, getSelectedIds: function (e) {
                    var t = e.tableAttributes.selection, a = e.tableAttributes.noSelection, s = [], n = [], o = [],
                        i = [], r = [], l = "";
                    if (e.searchInfo.isSearching) for (var d = 0; d < t.length; d++) {
                        var c = t[d];
                        1 == c.type ? (s.push(c.id), r.push(c.id)) : n.push(c.id)
                    } else {
                        for (var u = 0; u < t.length; u++) {
                            var p = t[u];
                            1 == p.type ? (p.id == e.currentDepId ? l = p.id : s.push(p.id), r.push(p.id)) : n.push(p.id)
                        }
                        for (var m = 0; m < a.length; m++) {
                            var h = a[m];
                            1 == h.type ? o.push(h.id) : i.push(h.id)
                        }
                    }
                    return {
                        rootId: l,
                        selectDepIds: s.join(","),
                        selectUserIds: n.join(","),
                        noSelectDepIds: o.join(","),
                        noSelectUserIds: i.join(","),
                        selectMoveDepIds: r.join(",")
                    }
                }, userInfo: function (e) {
                    return e.userInfo
                }, userInfoKeyName: function (e) {
                    return e.userInfoKeyName
                }, registConfig: function (e) {
                    return e.registConfig
                }, importUserCallback: function (e) {
                    return e.importUserCallback
                }, dialogs: function (e) {
                    return e.dialogs
                }
            }, mutations: (at = {}, z()(at, "UPDATE_CURRENT_DEP_ID", function (e, t) {
                e.currentDepId = t, e.defaultExpandedKeys = "" == t ? [] : [t]
            }), z()(at, "RESET_CURRENT_PAGE", function (e) {
                e.searchInfo.current = 1
            }), z()(at, "RESET_USER_INFO_FORM", function (e) {
                e.userInfo = {
                    userName: "",
                    isReduplicated: !1,
                    surname: "",
                    passwordTmp: "",
                    password: "",
                    departmentId: "",
                    departmentName: "总部",
                    sex: 1,
                    phone: "",
                    identityCard: "",
                    position: "",
                    email: "",
                    notice: "",
                    identityImg: "",
                    field1: "",
                    field2: "",
                    field3: "",
                    field4: "",
                    field5: ""
                }
            }), z()(at, "UPDATE_USER_INFO_FORM_DEP", function (e, t) {
                e.userInfo.departmentId = t.id, e.userInfo.departmentName = t.name
            }), z()(at, "ENCRYPT_PASSWORD", function (e, t) {
                e.userInfo[t.key] = t.value
            }), z()(at, "UPDATE_TABLE_COLUMNS", function (e, t) {
                t.columns ? e.tableConfig.columns = t.columns : e.tableConfig.columns[t.col] = !e.tableConfig.columns[t.col]
            }), z()(at, "UPDATE_TABLE_SELECTION", function (e, t) {
                var a = t.selection;
                if (e.isSearching) e.tableAttributes.selection = a, e.tableAttributes.noSelection = []; else if (a.length > 0 && a[0].id == e.currentDepId) {
                    for (var s = e.tableConfig.tableInfo, n = [], o = 0; o < s.length; o++) {
                        for (var i = s[o], r = !1, l = 0; l < a.length; l++) {
                            a[l].id == i.id && (r = !0)
                        }
                        0 == r && n.push(i)
                    }
                    e.tableAttributes.noSelection = n, e.tableAttributes.selection = a
                } else e.tableAttributes.noSelection = [], e.tableAttributes.selection = a
            }), z()(at, "UPDATE_TABLE_SORT", function (e, t) {
                e.searchInfo.sort.prop = t.prop, e.searchInfo.sort.order = t.order
            }), z()(at, "UPDATE_SEARCH_STATUS", function (e, t) {
                "keep" != t.simpleSearch && (e.searchInfo.simpleSearch = t.simpleSearch), "keep" != t.advancedSearch && (e.searchInfo.advancedSearch = t.advancedSearch)
            }), z()(at, "RESET_SEARCH_KEY", function (e, t) {
                e.searchInfo.searchKey = ""
            }), z()(at, "RESET_ADVANCED_SEARCH_KEY", function (e, t) {
                e.searchInfo.advancedSearchKey = {
                    name: [],
                    userName: [],
                    sex: "",
                    status: "",
                    departmentIds: "",
                    departmentNames: "",
                    departmentKey: "",
                    phone: [],
                    identityCard: "",
                    position: "",
                    email: "",
                    isBindWechatDesc: "",
                    notice: "",
                    field1: "",
                    field2: "",
                    field3: "",
                    field4: "",
                    field5: ""
                }
            }), z()(at, "UPDATE_SEARCH_TAGS", function (e, t) {
                e.searchInfo.advancedSearchKey[t.key] = t.value
            }), z()(at, "UPDATE_SEARCH_DEP", function (e, t) {
                for (var a = [], s = [], n = 0; n < t.department.length; n++) {
                    var o = t.department[n];
                    a.push(o.id), s.push(o.name)
                }
                e.searchInfo.advancedSearchKey.departmentIds = a.join(","), e.searchInfo.advancedSearchKey.departmentNames = s.join(",")
            }), z()(at, "updateImportUserCallback", function (e, t) {
                e.importUserCallback = t
            }), z()(at, "QUESTION_IMG_UPLOAD", function (e, t) {
                e.userInfo.identityImg = t.imageId, e.userInfo.identityImgName = t.fileName
            }), z()(at, "QUESTION_IMG_DELETE", function (e, t) {
                e.userInfo.identityImg = "", e.userInfo.identityImgName = "", t.dialogImageId = "", t.dialogImageName = ""
            }), at), actions: {
                getDepartmentsJson: function (e, t) {
                    e.state.treeLoading = !0;
                    var a = {
                        methodName: "getDepartmentsJson",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {}
                    };
                    st({method: "POST", data: r()(a)}).then(function (a) {
                        var s = a.data;
                        s.success && (e.state.departmentTree = s.bizContent.data, "init" == t.loadType ? (e.commit("UPDATE_CURRENT_DEP_ID", e.getters.departmentTree[0].id), "sub_admin" != e.rootGetters.user.role && e.dispatch("getDepUnderUserAndSubdep", {isLoadMore: !1})) : e.dispatch("getDepUnderUserAndSubdep", {isLoadMore: !1})), e.state.treeLoading = !1
                    })
                }, getDepUnderUserAndSubdep: function (e, t) {
                    e.state.tableAttributes.loading = !0, e.commit("UPDATE_SEARCH_STATUS", {
                        simpleSearch: !1,
                        advancedSearch: !1
                    }), e.commit("RESET_SEARCH_KEY"), e.commit("RESET_ADVANCED_SEARCH_KEY"), t.isLoadMore || e.commit("RESET_CURRENT_PAGE"), e.state.searchInfo.isSearching = !1, e.state.tableAttributes.headerSelectionStatus = !1;
                    var a = {
                        methodName: "getDepUnderUserAndSubdep",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {
                            depId: e.getters.currentDepId,
                            pages: e.getters.searchInfo.current,
                            order: e.getters.searchInfo.sort.order,
                            orderColumn: e.getters.searchInfo.sort.prop
                        }
                    };
                    st({method: "POST", data: r()(a)}).then(function (a) {
                        var s = a.data;
                        if (s.success) {
                            if (t.isLoadMore) for (var n = 0; n < s.bizContent.length; n++) e.state.tableConfig.tableInfo.push(s.bizContent[n]); else e.state.tableConfig.tableInfo = s.bizContent;
                            e.state.tableAttributes.canLoadMore = !(s.bizContent.length < 20)
                        }
                        e.state.tableAttributes.loading = !1
                    })
                }, addDep: function (e, t) {
                    var a = t.data, s = {
                        methodName: "addDep",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {name: t.name, pId: a.id}
                    };
                    st({method: "POST", data: r()(s)}).then(function (t) {
                        var s = t.data;
                        s.success && (a.children || (s.children = []), a.children.push(s.bizContent), e.dispatch("getDepartmentsJson", {loadType: "update"}), e.dispatch("getDepUnderUserAndSubdep", {isLoadMore: !1}))
                    })
                }, updateDep: function (e, t) {
                    var a = t.data, s = {
                        methodName: "updateDep",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {name: t.name, pId: a.pid, id: a.id}
                    };
                    st({method: "POST", data: r()(s)}).then(function (s) {
                        s.data.success && (a.name = t.name, e.dispatch("getDepUnderUserAndSubdep", {isLoadMore: !1}))
                    })
                }, deleteDep: function (e, t) {
                    var a = t.node, s = t.data, n = {
                        methodName: "deleteDep",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {id: s.id, del: t.del}
                    };
                    st({method: "POST", data: r()(n)}).then(function (n) {
                        var o = n.data;
                        if (o.success) {
                            var i = a.parent, r = i.data.children || i.data, l = r.findIndex(function (e) {
                                return e.id === s.id
                            });
                            r.splice(l, 1), s.id == e.state.currentDepId && e.commit("UPDATE_CURRENT_DEP_ID", e.getters.departmentTree[0].id), e.dispatch("tableReload", {reloadTree: !0})
                        } else {
                            var d = t.$prompt, c = t.$message;
                            31025 == o.code ? d("此部门下包含人员或部门，确认删除？", "", {
                                customClass: "operation-warning",
                                confirmButtonClass: "confirm",
                                cancelButtonClass: "cancel",
                                confirmButtonText: "确定",
                                cancelButtonText: "取消",
                                inputPattern: /^DEL$/,
                                inputPlaceholder: "输入DEL确认删除",
                                inputErrorMessage: "输入DEL确认删除",
                                type: "warning",
                                center: !0
                            }).then(function (t) {
                                t.value;
                                e.dispatch("deleteDep", {node: a, data: s, del: !0})
                            }).catch(function () {
                            }) : 35006 == o.code && c({type: "error", message: o.desc})
                        }
                    })
                }, moveDep: function (e, t) {
                    var a = t.targetNodeData, s = t.sourceNodeData, n = t.$message, o = {
                        methodName: "moveDep",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {move: t.dropType, sourceNodeId: s.id, targetNodeId: a.id, targetNodePid: a.pid}
                    };
                    st({method: "POST", data: r()(o)}).then(function (t) {
                        t.data.success || n({
                            showClose: !0,
                            message: "拖动失败，请重试",
                            type: "error"
                        }), e.dispatch("tableReload", {reloadTree: !0})
                    })
                }, getSelfConfig: function (e, t) {
                    var a = {
                        methodName: "getSelfConfig",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {}
                    };
                    st({method: "POST", data: r()(a)}).then(function (e) {
                        e.data.success
                    })
                }, getSelfName: function (e, t) {
                    var a = {
                        methodName: "getSelfName",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {}
                    };
                    st({method: "POST", data: r()(a)}).then(function (t) {
                        var a = t.data;
                        a.success && (e.state.userInfoKeyName = a.bizContent)
                    })
                }, addUser: function (e, t) {
                    var a = {
                        methodName: "addUser",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: e.getters.userInfo
                    };
                    st({method: "POST", data: r()(a)}).then(function (a) {
                        var s = a.data, n = t.$message;
                        s.success ? (n({
                            type: "success",
                            message: "添加成功！"
                        }), e.state.dialogs.userInfoAdd = !1, ksxProbe.gioTrack("enterPeopleSuccess", 1, {
                            enterPeopleMethod_var: "手动添加",
                            enterPeopleCount_var: 1
                        }), setTimeout("window.location.href=window.location.href.replace('?userAdd=1','');window.location.reload();", 1e3)) : 33003 == s.code ? e.state.userInfo.isReduplicated = !0 : n({
                            type: "error",
                            message: s.desc
                        })
                    }).catch(function () {
                        t.$message({type: "error", message: "操作失败，请重试！"})
                    })
                }, checkUnameExist: function (e, t) {
                    var a = {
                        methodName: "checkUnameExist",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {userName: e.getters.userInfo.userName}
                    };
                    st({method: "POST", data: r()(a)}).then(function (t) {
                        t.data.success ? e.state.userInfo.isReduplicated = !0 : e.state.userInfo.isReduplicated = !1
                    })
                }, getUser: function (e, t) {
                    var a = {
                        methodName: "getUser",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {id: t.id}
                    };
                    st({method: "POST", data: r()(a)}).then(function (a) {
                        var s = a.data;
                        if (s.success) {
                            var n = s.bizContent.user;
                            n.passwordTmp = "", n.password = "", e.state.userInfo = n, t.open()
                        }
                    })
                }, editUser: function (e, t) {
                    var a = {
                        methodName: "editUser",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: e.getters.userInfo
                    };
                    a.jsonParam.isEditPass = t.isEditPass, st({method: "POST", data: r()(a)}).then(function (a) {
                        var s = a.data, n = t.$message;
                        s.success ? (n({
                            type: "success",
                            message: "修改成功！"
                        }), e.state.dialogs.userInfoEdit = !1, e.dispatch("tableReload", {reloadTree: !0})) : n({
                            type: "error",
                            message: "操作失败，请重试！"
                        })
                    }).catch(function () {
                        $message({type: "error", message: "操作失败，请重试！"})
                    })
                }, userMove: function (e, t) {
                    var a = {
                        methodName: "userMove",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {userId: t.userId, departmentId: t.departmentId}
                    };
                    a.jsonParam.isEditPass = t.isEditPass, st({method: "POST", data: r()(a)}).then(function (t) {
                        t.data.success && e.dispatch("tableReload", {reloadTree: !0})
                    })
                }, delUser: function (e, t) {
                    var a = {
                        methodName: "delUser",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {userIds: t.userIds}
                    };
                    st({method: "POST", data: r()(a)}).then(function (a) {
                        var s = a.data, n = t.$message;
                        s.success ? (n({
                            type: "success",
                            message: "删除成功！"
                        }), e.dispatch("tableReload", {reloadTree: !0})) : n({type: "error", message: "操作失败，请重试！"})
                    }).catch(function () {
                        $message({type: "error", message: "操作失败，请重试！"})
                    })
                }, search: function (e, t) {
                    e.state.tableAttributes.loading = !0, e.commit("UPDATE_CURRENT_DEP_ID", ""), e.state.searchInfo.isSearching = !0;
                    var a = {
                        methodName: "search",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {
                            pages: e.getters.searchInfo.current,
                            searchKey: e.getters.searchInfo.searchKey,
                            orderColumn: e.getters.searchInfo.sort.prop,
                            order: e.getters.searchInfo.sort.order
                        }
                    };
                    st({method: "POST", data: r()(a)}).then(function (a) {
                        var s = a.data;
                        if (s.success) {
                            if (t.isLoadMore) for (var n = 0; n < s.bizContent.length; n++) e.state.tableConfig.tableInfo.push(s.bizContent[n]); else e.state.tableConfig.tableInfo = s.bizContent;
                            e.state.tableAttributes.canLoadMore = !(s.bizContent.length < 20)
                        }
                        e.state.tableAttributes.loading = !1
                    })
                }, seniorSearch: function (e, t) {
                    e.state.tableAttributes.loading = !0, e.state.searchInfo.isSearching = !0, e.commit("UPDATE_CURRENT_DEP_ID", "");
                    var a = {
                        methodName: "seniorSearch",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {
                            pages: e.getters.searchInfo.current,
                            orderColumn: e.getters.searchInfo.sort.prop,
                            order: e.getters.searchInfo.sort.order
                        }
                    }, s = e.getters.searchInfo.advancedSearchKey;
                    for (var n in s) s.hasOwnProperty(n) && (a.jsonParam[n] = s[n]);
                    st({method: "POST", data: r()(a)}).then(function (a) {
                        var s = a.data;
                        if (s.success) {
                            if (t.isLoadMore) for (var n = 0; n < s.bizContent.length; n++) e.state.tableConfig.tableInfo.push(s.bizContent[n]); else e.state.tableConfig.tableInfo = s.bizContent;
                            e.state.tableAttributes.canLoadMore = !(s.bizContent.length < 20)
                        }
                        e.state.tableAttributes.loading = !1
                    })
                }, tableReload: function (e, t) {
                    var a = e.getters.searchInfo;
                    a.simpleSearch ? (e.commit("RESET_CURRENT_PAGE"), e.dispatch("search", {isLoadMore: !1})) : a.advancedSearch ? (e.commit("RESET_CURRENT_PAGE"), e.dispatch("seniorSearch", {isLoadMore: !1})) : t.reloadTree ? e.dispatch("getDepartmentsJson", {loadType: "update"}) : e.dispatch("getDepUnderUserAndSubdep", {isLoadMore: !1})
                }, exportUserByDepNode: function (e, t) {
                    var a = {
                        methodName: "exportUserByDepNode",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {rootId: e.getters.currentDepId}
                    };
                    st({method: "POST", data: r()(a)}).then(function (e) {
                        var a = e.data, s = t.$message;
                        a.success ? s({type: "success", message: "导出成功，请到消息中心查看！"}) : s({
                            type: "error",
                            message: "操作失败，请重试！"
                        })
                    }).catch(function () {
                        $message({type: "error", message: "操作失败，请重试！"})
                    })
                }, exportUserBySearch: function (e, t) {
                    var a = {
                        methodName: "exportUserBySearch",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {searchKey: e.getters.searchInfo.searchKey}
                    };
                    st({method: "POST", data: r()(a)}).then(function (e) {
                        var a = e.data, s = t.$message;
                        a.success ? s({type: "success", message: "导出成功，请到消息中心查看！"}) : s({
                            type: "error",
                            message: "操作失败，请重试！"
                        })
                    }).catch(function () {
                        $message({type: "error", message: "操作失败，请重试！"})
                    })
                }, exportUserBySeniorSearch: function (e, t) {
                    var a = {
                        methodName: "exportUserBySeniorSearch",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {}
                    }, s = e.getters.searchInfo.advancedSearchKey;
                    for (var n in s) s.hasOwnProperty(n) && (a.jsonParam[n] = s[n]);
                    st({method: "POST", data: r()(a)}).then(function (e) {
                        var a = e.data, s = t.$message;
                        a.success ? s({type: "success", message: "导出成功，请到消息中心查看！"}) : s({
                            type: "error",
                            message: "操作失败，请重试！"
                        })
                    }).catch(function () {
                        $message({type: "error", message: "操作失败，请重试！"})
                    })
                }, exportUserBySelect: function (e, t) {
                    var a = {
                        methodName: "exportUserBySelect",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {
                            rootId: e.getters.getSelectedIds.rootId,
                            selectDepIds: e.getters.getSelectedIds.selectDepIds,
                            selectUserIds: e.getters.getSelectedIds.selectUserIds,
                            noSelectDepIds: e.getters.getSelectedIds.noSelectDepIds,
                            noSelectUserIds: e.getters.getSelectedIds.noSelectUserIds
                        }
                    };
                    st({method: "POST", data: r()(a)}).then(function (e) {
                        var a = e.data, s = t.$message;
                        a.success ? s({type: "success", message: "导出成功，请到消息中心查看！"}) : s({
                            type: "error",
                            message: "操作失败，请重试！"
                        })
                    }).catch(function () {
                        $message({type: "error", message: "操作失败，请重试！"})
                    })
                }, batchMoveDepAndUser: function (e, t) {
                    var a = {
                        methodName: "batchMoveDepAndUser",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {
                            depIds: e.getters.getSelectedIds.selectMoveDepIds,
                            userIds: e.getters.getSelectedIds.selectUserIds,
                            targetDep: t.targetDep,
                            rootId: e.getters.currentDepId
                        }
                    };
                    st({method: "POST", data: r()(a)}).then(function (a) {
                        var s = a.data, n = t.$message;
                        s.success ? (e.dispatch("getDepartmentsJson", {loadType: "update"}), n({
                            type: "success",
                            message: "部门更新成功！成功移动 " + s.bizContent.moveStaffNum + " 名人员"
                        })) : n({type: "error", message: s.desc})
                    })
                }, batchDelUser: function (e, t) {
                    var a = {
                        methodName: "batchDelUser",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {
                            rootId: e.getters.getSelectedIds.rootId,
                            selectDepIds: e.getters.getSelectedIds.selectMoveDepIds,
                            selectUserIds: e.getters.getSelectedIds.selectUserIds,
                            noSelectDepIds: e.getters.getSelectedIds.noSelectDepIds,
                            noSelectUserIds: e.getters.getSelectedIds.noSelectUserIds
                        }
                    }, s = t.$message;
                    st({method: "POST", data: r()(a)}).then(function (t) {
                        var a = t.data;
                        a.success ? (s({
                            type: "success",
                            message: "删除成功！"
                        }), e.dispatch("getDepartmentsJson", {loadType: "update"})) : 35006 == a.code ? s({
                            type: "error",
                            message: a.desc
                        }) : s({type: "error", message: "操作失败，请重试！"})
                    }).catch(function () {
                        s({type: "error", message: "操作失败，请重试！"})
                    })
                }, verifyEmails: function (e, t) {
                    var a = {
                        methodName: "verifyEmails",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {
                            rootId: e.getters.getSelectedIds.rootId,
                            selectDepIds: e.getters.getSelectedIds.selectDepIds,
                            selectUserIds: e.getters.getSelectedIds.selectUserIds,
                            noSelectDepIds: e.getters.getSelectedIds.noSelectDepIds,
                            noSelectUserIds: e.getters.getSelectedIds.noSelectUserIds
                        }
                    };
                    st({method: "POST", data: r()(a)}).then(function (e) {
                        var a = e.data, s = t.$message;
                        a.success ? s({type: "success", message: "验证邮件已发送，请注意查收！"}) : s({
                            type: "error",
                            message: "操作失败，请重试！"
                        })
                    }).catch(function () {
                        $message({type: "error", message: "操作失败，请重试！"})
                    })
                }, updatePassword: function (e, t) {
                    var a = {
                        methodName: "updatePassword",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {
                            rootId: e.getters.getSelectedIds.rootId,
                            selectDepIds: e.getters.getSelectedIds.selectDepIds,
                            selectUserIds: e.getters.getSelectedIds.selectUserIds,
                            noSelectDepIds: e.getters.getSelectedIds.noSelectDepIds,
                            noSelectUserIds: e.getters.getSelectedIds.noSelectUserIds,
                            password: t.password
                        }
                    };
                    st({method: "POST", data: r()(a)}).then(function (e) {
                        var a = e.data, s = t.$message;
                        a.success ? s({type: "success", message: "修改成功！"}) : s({type: "error", message: "操作失败，请重试！"})
                    }).catch(function () {
                        $message({type: "error", message: "操作失败，请重试！"})
                    })
                }, editUserPermission: function (e, t) {
                    var a = {
                        methodName: "editUserPermission",
                        token: e.rootGetters.token,
                        userId: e.rootGetters.user.id,
                        jsonParam: {
                            userId: t.userId ? t.userId : "",
                            rootId: e.getters.getSelectedIds.rootId,
                            selectDepIds: e.getters.getSelectedIds.selectDepIds,
                            selectUserIds: e.getters.getSelectedIds.selectUserIds,
                            noSelectDepIds: e.getters.getSelectedIds.noSelectDepIds,
                            noSelectUserIds: e.getters.getSelectedIds.noSelectUserIds,
                            platform: t.platform,
                            permission: t.permission,
                            type: t.type
                        }
                    }, s = t.$message;
                    st({method: "POST", data: r()(a)}).then(function (t) {
                        t.data.success ? (s({
                            type: "success",
                            message: "修改成功！"
                        }), e.dispatch("getDepartmentsJson", {loadType: "update"})) : s({
                            type: "error",
                            message: "操作失败，请重试！"
                        })
                    }).catch(function () {
                        s({type: "error", message: "操作失败，请重试！"})
                    })
                }
            }
        };
        Vue.use(Vuex);
        var ot = new Vuex.Store({
            state: Be,
            getters: s,
            mutations: Ze,
            actions: et,
            modules: {userList: nt},
            plugins: []
        });
        Vue.config.productionTip = !1, new Vue({
            el: "#app",
            router: Me,
            store: ot,
            components: {App: o},
            template: "<App/>"
        })
    }
}, [0]);