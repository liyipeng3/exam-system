var Ksxing = (function (window) {
    var Ksxing = function () {
        return new Ksxing.fn.init();
    }

    Ksxing.fn = Ksxing.prototype = {
        constructor: Ksxing,
        init: function () {
            // 正则规则
            this.rules = {
                // 用户账号
                userName: {
                    reg: /^([A-Za-z0-9.]|\-|\_)+$/,
                    tip: '账号只能包含数字、字母、连字符和下划线',
                },
                // 用户密码
                userPassword: {
                    reg: /^.{6,20}$/,
                    tip: '密码大于6位小于20位'
                },
                // 邮箱
                email: {
                    reg: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]{2,})*\.[a-zA-Z0-9]{2,6}$/,
                    tip: '请输入正确邮箱格式'
                },
                // 手机号
                phone: {
                    reg: /^\d+$/,
                    tip: '请输入正确手机号'
                },
                //报名付费金额
                amountOfMoney: {
                    reg: /^(([0-9][0-9]*)|(([0]\.\d{1,2}|[0-9][0-9]*\.\d{1,2})))$/,
                    tip: '付费金额输入有误，不得小于1元，最多支持两位小数'
                }
            },
                // 校验当前一个输入
                this.validateOne = function (event) {
                    var validateEls = document.getElementsByClassName('validate');
                    var validateEl = '', validateObj, validateStatus, validateTip, params, errors;

                    // 查找需验证dom
                    for (var index = 0; index < validateEls.length; index++) {
                        var element = validateEls[index];

                        if (element.contains(event.target)) {
                            validateEl = element;
                            break;
                        }
                    }

                    params = {
                        content: validateEl.getAttribute("data-validate-content"),
                        required: validateEl.getAttribute("data-validate-required"),
                        rule: validateEl.getAttribute("data-validate-rule"),
                        tip: validateEl.getAttribute("data-validate-tip"),
                    };

                    validateObj = this.validateHandler(params);

                    validateStatus = validateObj.status;
                    validateTip = validateObj.tip ? validateObj.tip : params.tip;

                    if (validateStatus) {
                        validateEl.classList.remove('is-error');
                        return true;
                    } else {
                        errors = validateEl.getElementsByClassName('error');
                        for (var index = 0; index < errors.length; index++) {
                            errors[index].innerHTML = validateTip;
                        }
                        validateEl.classList.add('is-error');
                        return false;
                    }
                },

                //校验当前所有输入
                this.validateAll = function (element) {
                    var validatePr = element ? element : document;
                    var validateEls = validatePr.getElementsByClassName('validate');
                    var validateEl, validateObj, validateStatus, validateTip, params, errors, errorLength;

                    //  遍历验证所有需验证内容
                    for (var index = 0; index < validateEls.length; index++) {
                        validateEl = validateEls[index];
                        params = {
                            content: validateEl.getAttribute("data-validate-content"),
                            required: validateEl.getAttribute("data-validate-required"),
                            rule: validateEl.getAttribute("data-validate-rule"),
                        };

                        validateObj = this.validateHandler(params);

                        validateStatus = validateObj.status;
                        //如果是校验金额
                        if (params.rule == "amountOfMoney") {
                            if (params.content < 1) {
                                validateStatus = false;
                            }
                        }

                        if (validateStatus) {
                            validateEl.classList.remove('is-error');
                        } else {
                            validateEl.classList.add('is-error');
                        }
                    }
                    errorLength = validatePr.getElementsByClassName('is-error').length + validatePr.getElementsByClassName('is-v-error').length;

                    return errorLength == 0;
                }
            // 取消校验状态
            this.validateCancel = function (element) {
                var validatePr = element ? element : document;
                var errorEls = validatePr.getElementsByClassName('is-error');
                var errorArray = [];

                for (var index = 0; index < errorEls.length; index++) {
                    errorArray.push(errorEls[index]);
                }

                for (var index = 0; index < errorArray.length; index++) {
                    errorArray[index].classList.remove('is-error');
                }
            },
                // 获取url中的参数
                this.getQueryString = function (url, name) {
                    var queryUrl = url.match(/\?.+/)[0];
                    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
                    var r = queryUrl.substr(1).match(reg);

                    if (r != null) {
                        return unescape(r[2]);
                    }
                    return null;
                },
                // 获取platform(含浏览器模拟)
                this.getPlatform = function (userAgent) {
                    if (userAgent.indexOf('android') != -1 || userAgent.indexOf("iphone") != -1 ||
                        userAgent.indexOf("ipad") != -1) {
                        return 'mobile';
                    } else {
                        return 'pc'
                    }
                },
                // 设置cookie
                this.setCookie = function (cname, cvalue, exdays) {
                    var d = new Date();
                    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                    var expires = "expires=" + d.toUTCString();

                    document.cookie = cname + "=" + encodeURIComponent(cvalue) + "; " + expires + "; path=/; domain=..com";
                },
                // 获取cookie
                this.getCookie = function (cname) {
                    var name = cname + "=";
                    var ca = document.cookie.split(';');

                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i].trim();
                        if (c.indexOf(name) == 0) {
                            var value = c.substring(name.length, c.length);
                            value = decodeURIComponent(value)
                            return value;
                        }
                    }

                    return "";
                },
                // 清除cookie
                this.clearCookie = function (cname) {
                    this.setCookie(cname, "", -1);
                }
            // 删除cookie
            this.deleteCookie = function (cname) {
                var date = new Date();
                date.setTime(date.getTime() - 10000);
                document.cookie = cname + "=v; expire=" + date.toGMTString() + "; path=/; domain=..com";
            }
        },

        // 校验方法
        validateHandler: function (params) {
            var trimContent = params.content == null ? '' : params.content.trim();
            var content = params.content;

            // 必填内容
            if (params.required) {
                if (trimContent == '') {
                    return {
                        status: false,
                        tip: ''
                    };
                } else {
                    // 包含输入规则
                    if (params.rule) {
                        if (!this.rules[params.rule].reg.test(content)) {
                            return {
                                status: false,
                                tip: this.rules[params.rule].tip
                            };
                        }
                    }
                }
            } else {
                // 包含输入规则
                if (params.rule) {
                    if (content != '' && content != null && !this.rules[params.rule].reg.test(content)) {
                        return {
                            status: false,
                            tip: this.rules[params.rule].tip
                        };
                    }
                }
            }

            return {
                status: true,
                tip: ''
            };
        }
    }

    Ksxing.fn.init.prototype = Ksxing.fn;

    return Ksxing;
})();

// 创建一个全局ksxing实例
var KSX = new Ksxing();

