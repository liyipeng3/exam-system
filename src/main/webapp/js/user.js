$(function () {
    //编辑用户信息
    $("#userEditBtn").click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        $("#userInfoModal .modal-user-info").addClass("edit-mode");
        $("#userInfoModal .modal-user-info .item").addClass("item-input-group");
    });

    //取消编辑
    $("#userInfoModal .close, #cancelEditBtn").click(function (e) {
        $("#userInfoModal .modal-user-info").removeClass("edit-mode");
        $("#userInfoModal .modal-user-info .item").removeClass("item-input-group");
    });

    //上传头像
    $("#characterUpload").change(function () {
        $("#spinnerLoading").removeClass("hidden");
        $('#characterForm').submit();
    });

    $("#characterIframe").load(function () {
        $('#characterForm')[0].reset();
        var msg = $(this).contents().find("body").text();

        if (msg == '') {
            return;
        } else {
            msg = JSON.parse(msg);
        }

        if (msg.success) {
            $(".character-img").attr("src", msg.bizContent);
        } else {
            alert(msg.desc);
        }
        $("#spinnerLoading").addClass("hidden");
    });

    //绑定微信
    $("body").on("click", ".modal-user-info .btn-wechat.unbind", function (e) {
        e.stopPropagation();
        e.preventDefault();

        window.location.href = weBindUrl;
    });

    //解绑微信
    $("body").on("click", ".modal-user-info .btn-wechat.binded", function (e) {
        e.stopPropagation();
        e.preventDefault();

        var _this = $(this);

        $.ajax({
            type: "POST",
            cache: false,
            headers: {"cache-control": "no-cache"},
            dataType: "json",
            url: "/account/user/unbind_wechat",
            success: function (msg) {
                if (msg.success) {
                    $(_this).removeClass("binded").addClass("unbind").text("绑定微信");
                } else {
                    alert("发生未知错误,重试或联系管理员");
                }
            }
        });
    });

    //验证邮箱
    $("#checkEmailBtn").click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        var email = $(this).parents(".item").find(".item-input").val();

        if (email == '') {
            alert("请添加邮箱");
        } else {
            $.ajax({
                type: "GET",
                cache: false,
                headers: {"cache-control": "no-cache"},
                dataType: "json",
                url: "/admin/user/verify_emails/" + userId,
                success: function (msg) {
                    if (msg.success) {
                        alert("验证邮件已发送");
                    } else {
                        alert("操作失败，请联系管理员");
                    }
                }
            });
        }
    });


    //保存编辑信息
    $("#saveEditBtn").click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        var _user = $("#userInfoForm input[name=user]");
        $("#userInfoForm").find(".item").removeClass("error");

        if ($(_user).val() == '') {
            $(_user).parent(".item").addClass("error");
            return;
        }

        var dataForm = $("#userInfoForm").serialize();
        $.ajax({
            type: "POST",
            cache: false,
            headers: {"cache-control": "no-cache"},
            url: "/account/user/update",
            data: dataForm + "&t=" + Math.random(),
            success: function (msg) {
                if (msg == 'true') {
                    $(".item-input").each(function (index, element) {
                        var value = $(this).val();

                        $(this).parents(".item").find(".item-value").text(value);
                    });
                    //性别
                    var sex = $("input[name=sex]:checked").val() == 1 ? '男' : '女';
                    $("#userSex").text(sex);
                    $("#userInfoModal .modal-user-info").removeClass("edit-mode");
                    $("#userInfoModal .modal-user-info .item").removeClass("item-input-group");
                } else {
                    alert("发生未知错误,重试或联系管理员");
                }
            }
        });
    });


    //*************************************************

    //取消保存密码
    $("#cancelSetPwdBtn").click(function (e) {
        $("#setPwdForm")[0].reset();
    });

    //保存密码
    $("#savePasswordBtn").click(function (e) {
        $("#setPasswordModal .item-input-group").removeClass("error");
        $("#errorInfoPwd").text("").addClass("hidden");

        //验证旧密码
        if (!oldPwdVal($("#oldPassword").val())) {
            $("#oldPassword").parent(".item-input-group").addClass("error");
            $("#errorInfoPwd").text("请输入原密码").removeClass("hidden");
            return;
        }
        //验证新密码
        if (newPwdVal($("#newPassword").val()) == 'same') {
            $("#newPassword").parent(".item-input-group").addClass("error");
            $("#errorInfoPwd").text("新密码不能与原密码一致").removeClass("hidden");
            return;
        } else if (!newPwdVal($("#newPassword").val())) {
            $("#newPassword").parent(".item-input-group").addClass("error");
            $("#errorInfoPwd").text("新密码为6-20位数字、字母或符号的任意组合").removeClass("hidden");
            return;
        }
        //验证重复新密码
        if (!reNewPwdVal($("#reNewPassword").val())) {
            $("#reNewPassword").parent(".item-input-group").addClass("error");
            $("#errorInfoPwd").text("两次填写的密码不一致").removeClass("hidden");
            return;
        }

        var oldPassword = $('#oldPassword').val();
        var newPassword = $('#newPassword').val();
        var reNewPassword = $('#reNewPassword').val();
        var dataForm = "oldPassword=" + md5(oldPassword) +
            "&newPassword=" + md5(newPassword) +
            "&reNewPassword=" + md5(reNewPassword);

        $.ajax({
            type: "POST",
            cache: false,
            headers: {"cache-control": "no-cache"},
            dataType: "json",
            url: "/account/user/set_pass",
            data: dataForm + "&t=" + Math.random(),
            success: function (msg) {
                if (msg.success) {
                    alert("修改成功！");
                    $("#setPasswordModal").modal('hide');
                } else {
                    alert(msg.desc);
                }
            }
        });
    });

    //验证密码
    //旧密码验证方法
    function oldPwdVal(val) {
        return (val != '');
    }

    //新密码验证方法
    function newPwdVal(val) {
        var newPwd = val;
        if (newPwd == '') {
            return false;
        } else if (newPwd == $("#oldPassword").val()) {
            return 'same';
        } else if (ClientWrongLongPassword(newPwd)) {
            return false;
        } else if (!pwdVal(newPwd)) {
            return false;
        }
        return true;
    }

    //重复新密码验证方法
    function reNewPwdVal(val) {
        var newPwd = val;
        if (newPwd == '') {
            return false;
        }
        if (newPwd != $("#newPassword").val()) {
            return false;
        }
        return true;
    }

    //密码低于6位或高于20位，提示错误
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

    //密码强度验证
    function pwdVal(pwd) {
        var hasAlpha = 0;
        var hasNum = 0;
        var hasOther = 0;
        if (/^.{6,20}$/.test(pwd)) {
            hasNum++;
        }
        return (hasNum >= 1);
    }


});