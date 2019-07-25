(function ($) {

    /*---------------------------
     Defaults for Reveal
    ----------------------------*/

    /*---------------------------
     Listener for data-reveal-id attributes
    ----------------------------*/

    $('a[data-reveal-id]').on('click', function (e) {
        e.preventDefault();
        var modalLocation = $(this).attr('data-reveal-id');
        $('#' + modalLocation).reveal($(this).data());
    });

    /*---------------------------
     Extend and Execute
    ----------------------------*/

    $.fn.reveal = function (options) {


        var defaults = {
            animation: 'fadeAndPop', //fade, fadeAndPop, none
            animationspeed: 300, //how fast animtions are
            closeonbackgroundclick: false, //if you click background will modal close?
            dismissmodalclass: 'close-reveal-modal' //the class of a button or element that will close an open modal
        };

        //Extend dem' options
        var options = $.extend({}, defaults, options);

        return this.each(function () {

            /*---------------------------
             Global Variables
            ----------------------------*/
            var modal = $(this),
                topMeasure = parseInt(modal.css('top')),
                topOffset = modal.height() + topMeasure,
                locked = false,
                modalBG = $('.reveal-modal-bg');

            /*---------------------------
             Create Modal BG
            ----------------------------*/
            if (modalBG.length == 0) {
                modalBG = $('<div class="reveal-modal-bg" />').insertAfter(modal);
            }

            /*---------------------------
             Open & Close Animations
            ----------------------------*/
            //Entrance Animations
            modal.bind('reveal:open', function () {
                modalBG.unbind('click.modalEvent');
                $('.' + options.dismissmodalclass).unbind('click.modalEvent');
                if (!locked) {
                    lockModal();
                    if (options.animation == "fadeAndPop") {
                        modal.css({'top': $(document).scrollTop() - topOffset, 'opacity': 0, 'visibility': 'visible'});
                        modalBG.fadeIn(options.animationspeed / 2);
                        modal.delay(options.animationspeed / 2).animate({
                            "top": 150 + 'px',
                            "opacity": 1
                        }, options.animationspeed, unlockModal());
                    }
                    if (options.animation == "fade") {
                        modal.css({'opacity': 0, 'visibility': 'visible', 'top': $(document).scrollTop() + topMeasure});
                        modalBG.fadeIn(options.animationspeed / 2);
                        modal.delay(options.animationspeed / 2).animate({
                            "opacity": 1
                        }, options.animationspeed, unlockModal());
                    }
                    if (options.animation == "none") {
                        modal.css({'visibility': 'visible', 'top': $(document).scrollTop() + topMeasure});
                        modalBG.css({"display": "block"});
                        unlockModal()
                    }
                }
                modal.unbind('reveal:open');
            });

            //Closing Animation
            modal.bind('reveal:close', function () {
                if (!locked) {
                    lockModal();
                    if (options.animation == "fadeAndPop") {
                        modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
                        modal.animate({
                            "top": $(document).scrollTop() - topOffset + 'px',
                            "opacity": 0
                        }, options.animationspeed / 2, function () {
                            modal.css({'top': 150, 'opacity': 1, 'visibility': 'hidden'});
                            unlockModal();
                        });
                    }
                    if (options.animation == "fade") {
                        modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
                        modal.animate({
                            "opacity": 0
                        }, options.animationspeed, function () {
                            modal.css({'opacity': 1, 'visibility': 'hidden', 'top': topMeasure});
                            unlockModal();
                        });
                    }
                    if (options.animation == "none") {
                        modal.css({'visibility': 'hidden', 'top': topMeasure});
                        modalBG.css({'display': 'none'});
                    }
                }
                modal.unbind('reveal:close');
            });

            /*---------------------------
             Open and add Closing Listeners
            ----------------------------*/
            //Open Modal Immediately
            //modal.trigger('reveal:open')

            //Close Modal Listeners
            var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
                modal.trigger('reveal:close')
            });

            if (options.closeonbackgroundclick) {
                modalBG.css({"cursor": "pointer"})
                modalBG.bind('click.modalEvent', function () {
                    modal.trigger('reveal:close')
                });
            }
            $('body').keyup(function (e) {
                if (e.which === 27) {
                    modal.trigger('reveal:close');
                } // 27 is the keycode for the Escape key
            });


            /*---------------------------
             Animations Locks
            ----------------------------*/
            function unlockModal() {
                locked = false;
            }

            function lockModal() {
                locked = true;
            }

        });//each call
    }//orbit plugin call
})(jQuery);

$(document).ready(function () {
    // 获取验证码等待时间
    var wait = 60;
    var exist_phone = $("#admin_phone").val();

    if (exist_phone != "") {
        checkPhone($("#admin_phone"));
    }

    // 验证手机号
    $("input[name=phone]").keyup(function () {
        checkPhone($(this));
    });
    // 验证手机号
    $("body").on("input change", "input[name=phone]", function () {
        checkPhone($(this));
    });
    // 验证手机号
    document.getElementById("admin_phone").addEventListener("paste", function () {
        var _this = this;
        setTimeout(function () {
            checkPhone(_this);
        }, 50);
    });

    // 获取图形验证码
    $("#captchaImg").click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        $.ajax({
            url: "/account/gen_captcha",
            success: function (msg) {
                $("#captchaImg").attr("src", msg + "?" + Math.random());
            }

        })
    });

    //校验图形验证码
    $("#captchaText").keyup(function () {
        checkCaptcha($(this));
    });

    document.getElementById("captchaText").addEventListener("paste", function () {
        var _this = this;
        setTimeout(function () {
            checkCaptcha(_this);
        }, 50);
    });

    //点击获取验证码事件
    function time(o) {
        if (wait == 0) {
            $(o).prop("disabled", false);
            $(o).text("获取验证码");
            wait = 60;
        } else {
            $(o).text(wait + "秒");
            $(o).prop("disabled", true);
            wait--;
            setTimeout(function () {
                time(o);
            }, 1000);
        }
    }

    // 点击获取验证码
    $(".btnVerifyCode").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        var _this = this;
        if ($(".step-tab1 .phone-filed").hasClass("ok") && ($(".step-tab1 .captcha-filed").hasClass("hidden") || $(".step-tab1 .captcha-filed").hasClass("ok"))) {
            $.ajax({
                url: "/account/r_check",
                type: "POST",
                data: {phone: $("input[name=phone]").val(), source: "companySignup"},
                dataType: 'json',
                success: function (msg) {
                    if (msg.success) {
                        if (msg.bizContent && msg.bizContent.showCaptcha == '1') {
                            $("#captchaImg").click();
                            $(".step-tab1 .captcha-filed").removeClass("hidden");
                            return false;
                        }
                        time(_this);
                    } else {
                        alert(msg.desc);
                    }
                }
            });
        } else if (!$(".step-tab1 .phone-filed").hasClass("ok")) {
            alert("请输入正确手机号！");
        } else if (!$(".step-tab1 .captcha-filed").hasClass("hidden") && !$(".step-tab1 .captcha-filed").hasClass("ok")) {
            alert("请输入正确图形验证码！");
        }
    });

    //验证验证码
    $("input[name=verifyCode]").keyup(function () {
        checkVerify($(this));
    });

    document.getElementById("verify_code").addEventListener("paste", function () {
        var _this = this;
        setTimeout(function () {
            checkVerify(_this);
        }, 50);
    });


    //验证公司
    $("input[name=companyName]").keyup(function (e) {
        checkCompany($(this));
    });

    document.getElementById("company_name").addEventListener("paste", function () {
        var _this = this;
        setTimeout(function () {
            checkCompany(_this);
        }, 50);
    });


    //验证密码
    $("input[name=password]").keyup(function (e) {
        checkPassword($(this));
    });

    document.getElementById("admin_password").addEventListener("paste", function () {
        var _this = this;
        setTimeout(function () {
            checkPassword(_this);
        }, 50);
    });

    //验证邀请码
    $("input[name=invitationCode]").keyup(function (e) {
        checkInviteCode($(this));
    });

    document.getElementById("admin_inviteCode").addEventListener("paste", function () {
        var _this = this;
        setTimeout(function () {
            checkInviteCode(_this);
        }, 50);
    });

    //点击完成注册
    $(".compl-step").click(function (e) {
        var _this = $(this);
        e.stopPropagation();
        e.preventDefault();
        checkPhone($("#subForm input[name=phone]"));
        // checkCaptcha($("#subForm input[name=captchaText]"));//图形验证码有效期为2分钟，点击注册时不做校验
        checkVerify($("input[name=verifyCode]"));
        checkCompany($("input[name=companyName]"));
        checkPassword($("input[name=password]"));
        var dataForm = $("#subForm [type!=password]").serialize();
        var password = $("#subForm [name=password]").val();
        dataForm += "&password=" + md5(password);

        if ($(".error").length == 0) {
            _this.prop("disabled", true).text("Loading...");
            $.ajax({
                type: "POST",
                cache: false,
                headers: {"cache-control": "no-cache"},
                dataType: "text",
                url: "/account/company_regist",
                data: dataForm + "&t=" + Math.random(),
                dataType: 'json',
                timeout: 25000,
                error: function (jqXHR, textStatus, errorThrown) {
                    if (textStatus == "timeout") {
                        $("#timeoutModal").reveal($(this)).trigger('reveal:open');
                    } else {
                        alert(textStatus);
                    }
                },
                success: function (msg) {
                    if (msg.success) {
                        var html = "注册成功，您的账号是： " + $("input[name=phone]").val();
                        $("#successModal .title2").html(html);
                        $("#subForm")[0].reset();
                        setTimeout(function () {
                            $("#successModal .btnBack").attr("href", msg.bizContent.url);
                            $("#successModal").reveal($(this)).trigger('reveal:open');
                        }, 100);
                        $(".ok").removeClass("ok");
                        $(".compl-step").prop("disabled", false).text("完成");

                        //注册成功，向gowing-io推送一条数据

                    } else {
                        var html = "请联系我们～<br/>服务热线：010-64465210";
                        $("#failModal .title2").html(html);
                        setTimeout(function () {
                            $("#failModal").reveal($(this)).trigger('reveal:open');
                        }, 1000);

                    }
                }
            });
        } else {
            $(".compl-step").prop("disabled", false);
        }
    });
    $("#failModal .btnBack").click(function () {
        $("#failModal").reveal($(this)).trigger('reveal:close');
        $(".compl-step").prop("disabled", false).text("完成");
    })
    $("#timeoutModal .btnBack").click(function () {
        $("#timeoutModal").reveal($(this)).trigger('reveal:close');
        $(".compl-step").prop("disabled", false).text("完成");
    })


    //注册流程优化
    $("#examer-enter").click(function (e) {
        $("#examerModal").reveal($(this)).trigger('reveal:open');
    })
    $("#examer-close").click(function () {
        $("#examerModal").reveal($(this)).trigger('reveal:close');
    })
    $("#examerModal .close").click(function () {
        $("#examerModal").reveal($(this)).trigger('reveal:close');
    })
    $("#step2-examer-enter").click(function (e) {
        $("#examerModal").reveal($(this)).trigger('reveal:open');
    })

    /*********验证密码相关方法*************/
    //首页注册密码验证方法
    function adminPwdVal(val) {
        var newPwd = val;
        if (newPwd == '') {
            return false;
        } else if (ClientWrongLongPassword(newPwd)) {
            return false;
        }
        return true;
    }

    //密码低于5位或高于20位，提示错误
    function ClientWrongLongPassword(pwd) {
        return !(IsLongEnough(pwd, "6")) || IsLongOver(pwd, "20");
    }

    function IsLongEnough(strWord, nAtLeastThisLong) {
        if ((strWord == null) || isNaN(nAtLeastThisLong)) {
            return false;
        } else if (strWord.length < nAtLeastThisLong) {
            return false;
        }
        return true;
    }

    function IsLongOver(strWord, nAtLeastThisLong) {
        if ((strWord == null) || isNaN(nAtLeastThisLong)) {
            return false;
        } else if (strWord.length <= nAtLeastThisLong) {
            return false;
        }
        return true;
    }

    /***********end***************/

    /**********各种验证方法***********/
    //验证手机号
    function checkPhone(o) {
        var length = $(o).val().length;
        var obj = $(o).next(".tip");
        var pobj = $(o).parent(".field");
        var reg = /^\d{11}$/;
        if (length == 0) {
            if ($(o).val() == "") {
                $(obj).text("请输入学号");
                $(pobj).removeClass("ok").addClass("error");
                return;
            }
        } else if (length == 11) {
            if (!reg.test($(o).val())) {
                $(obj).text("请输入正确学号");
                $(pobj).removeClass("ok").addClass("error");
                return;
            }
            $.ajax({
                type: "GET",
                cache: false,
                headers: {"cache-control": "no-cache"},
                dataType: "json",
                url: "/account/check_account_exist?account=" + $(o).val(),
                success: function (msg) {
                    if (msg.success) {
                        $(obj).html("账号已存在<a href='" + msg.bizContent.loginUrl + "' target='_blank'>点击登录</a>");
                        $(pobj).removeClass("ok").addClass("error");
                    } else {
                        $(obj).text("");
                        $(pobj).removeClass("error").addClass("ok");
                    }
                }

            });
        } else {
            $(obj).text("请输入正确学号");
            $(pobj).removeClass("ok").addClass("error");
            return;
        }
    }

    //验证图形验证码
    function checkCaptcha(o) {
        if ($(".step-tab1 .captcha-filed").hasClass("hidden")) {
            return;
        }
        var length = $(o).val().length;
        var obj = $(o).next(".tip");
        var pobj = $(o).parent(".field");
        if (length == 0) {
            $(obj).text("请填写验证码");
            $(pobj).removeClass("ok").addClass("error");
            return;
        } else if (length == 4) {
            var userCaptchaText = $(o).val();
            $.ajax({
                url: "/account/check_captcha",
                data: {userCaptchaText: userCaptchaText},
                dataType: "json",
                success: function (msg) {
                    if (msg.success) {
                        $(obj).text("");
                        $(pobj).removeClass("error").addClass("ok");
                        return;
                    } else {
                        $(obj).text("验证码错误");
                        $(pobj).removeClass("ok").addClass("error");
                        $("#captchaImg").attr('src', msg.bizContent.newUrl + "?" + Math.random());
                        return;
                    }
                }
            });
        } else {
            $(obj).text("请输入4位验证码");
            $(pobj).removeClass("ok").addClass("error");
            return;
        }

    }

    //验证验证码
    function checkVerify(o) {
        var length = $(o).val().length;
        var obj = $(o).next(".tip");
        var pobj = $(o).parent(".field");
        if (length == 0) {
            $(obj).text("请填写学号");
            $(pobj).removeClass("ok").addClass("error");
            return;
        } else if (length == 10) {
            var verify_code = $(o).val();
            var phone = $("#subForm input[name=phone]").val();
            $.ajax({
                type: "POST",
                url: "/account/check_verify_code?verifyCode=" + verify_code + "&phone=" + phone,
                dataType: "text",
                success: function (msg) {
                    if (msg == 'true') {
                        $(obj).text("");
                        $(pobj).removeClass("error").addClass("ok");
                        return;
                    } else {
                        $(obj).text("验证码错误");
                        $(pobj).removeClass("ok").addClass("error");
                        return;
                    }
                }
            });
        } else {
            $(obj).text("请输入10位学号");
            $(pobj).removeClass("ok").addClass("error");
            return;
        }
    }

    //验证公司
    function checkCompany(o) {
        var cname = $(o).val();
        $(o).val(cname.toLowerCase());
        var length = $(o).val().length;
        var obj = $(o).next(".tip");
        var pobj = $(o).parent(".field");
        if (length == 0) {
            $(obj).text("请填写学校名称");
            $(pobj).removeClass("ok").addClass("error");
            return;
        } else {
            //验证公司是否存在
            $(obj).text("");
            $(pobj).removeClass("error").addClass("ok");
            // $.ajax({
            // 	type: "GET",
            // 	cache : false,
            // 	headers: { "cache-control": "no-cache" },
            // 	dataType: "text",
            // 	url: "/account/check_cmp_exist?ctype=companyName&cname="+cname,
            // 	success: function(msg){
            // 		if(msg=='false'){
            //            $(obj).text("");
            //            $(pobj).removeClass("error").addClass("ok");
            //        }else {
            //            $(obj).text("公司已存在");
            //            $(pobj).removeClass("ok").addClass("error");
            //            return;
            // 		}
            // 	}
            // });
        }
    }

    //验证密码
    function checkPassword(o) {
        var length = $(o).val().length;
        var obj = $(o).next(".tip");
        var pobj = $(o).parent(".field");
        if (length == 0) {
            $(obj).text("请填写密码");
            $(pobj).removeClass("ok").addClass("error");
            return;
        }
        if (!adminPwdVal($(o).val())) {
            $(obj).text("密码长度6-20");
            $(pobj).removeClass("ok").addClass("error");
            return;
        }
        $(obj).text("");
        $(pobj).removeClass("error").addClass("ok");
    }

    //验证邀请码
    function checkInviteCode(o) {
        var invite_code = $(o).val();
        var obj = $(o).next(".tip");
        var pobj = $(o).parent(".field");
        $.ajax({
            type: "GET",
            cache: false,
            headers: {"cache-control": "no-cache"},
            dataType: "json",
            url: "/account/check_invitation_code?invitationCode=" + invite_code,
            success: function (msg) {
                if (msg.success) {
                    $(obj).text("");
                    $(pobj).removeClass("code_error").addClass("ok");
                } else {
                    $(obj).text("无效邀请码");
                    $(pobj).removeClass("ok").addClass("code_error");
                    return;
                }
            }
        });
    }


});
