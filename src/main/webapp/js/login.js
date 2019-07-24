$(document).ready(function () {
    if (domain != "") {
        var text = "@" + domain;
        $(".domainText_user").text(text);
        $(".domainText_admin").text(text);
    }


    //登录
    $("#loginBtn").click(function (e) {
        userLogin();
    });
    //回车登录
    $('.login-wrap').keypress(function (event) {
        if (event.keyCode == '13') {
            userLogin();
            event.preventDefault();

        }
    });

    //中英文切换
    // 设置为英文
    $("#switchLang").click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        var cookieName = "language";
        var cookieValue = "en";
        var expiresTime = "86400";

        $.ajax({
            type: "POST",
            cache: "false",
            headers: {"cache-control": "no-cache"},
            url: "/account/set_cookie",
            data: "cookieName=" + cookieName + "&cookieValue=" + cookieValue + "&expiresTime=" + expiresTime,
            success: function (msg) {
                if (msg == 'true') {
                    window.location.href = window.location.href + "?" + Math.random();
                }
            }
        });
    });
});

//考生注册人数上限校验
$(".btn-examinee-reg").click(function (e) {
    e.stopPropagation();
    //e.preventDefault();

    $.ajax({
        type: "POST",
        cache: false,
        headers: {"cache-control": "no-cache"},
        dataType: "text",
        url: "/account/checkout_staff_count",
        data: "companyId=" + $("input[name=companyId]").val(),
        success: function (msg) {
            if (JSON.parse(msg).result) {
                window.location.href = "/account/register/" + $("input[name=companyId]").val();
            } else {
                $("#userOverModal").modal();
            }
        }
    });
});

//用户登录

function userLogin() {
    if (checkWM()) {
        var wm = document.form_wm;
        // filter1--***@int*
        // filter2--***@***.***
        var filter1 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var filter2 = /^([a-zA-Z0-9_\.\-])+\@([0-9])+$/;
        var filter3 = /^([a-zA-Z0-9_\.\-@])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


        var username = $.trim($('#username').val());
        $('#username').val(username);

        var dataForm, password;
        var nextUrl = getQueryString("nextUrl");

        if (domain != "") {
            //独立入口
            if (filter1.test(username) || filter2.test(username)) {
                $("#username_tran").val(username);
            } else {
                $("#username_tran").val(username + '@' + domain);
            }

            dataForm = $("#loginForm [type!=password]").serialize();
            password = $("#loginForm [name=password]").val();

            dataForm += "&password=" + md5(password) + "&nextUrl=" + nextUrl;
            $("#loginBtn").addClass("disabled");
            $.ajax({
                type: "POST",
                cache: "false",
                headers: {"cache-control": "no-cache"},
                dataType: "text",
                url: "/login/checkAccount",
                data: dataForm,
                success: function (msg) {
                    if (msg === "admin") {

                        window.location.href = "/index";

                    } else if (msg === "teacher") {

                        window.location.href = "/teacher";

                    } else if (msg === "student") {

                        window.location.href = "/student";

                    } else {
                        $("#loginBtn").removeClass("disabled");
                        $("#errormsg").text(msg);
                    }
                }
                ,
                error: function (msg) {
                    console.log(msg)
                }
            })
        } else {
            //公共入口
            $("#username_tran").val(username);
            dataForm = $("#loginForm [type!=password]").serialize();
            password = $("#loginForm [name=password]").val();

            dataForm += "&password=" + md5(password);

            if (filter2.test(username) || filter3.test(username) || (/^\d{11}$/.test(username))) {
                $("#loginBtn").addClass("disabled");
                $.ajax({
                    type: "POST",
                    cache: "false",
                    headers: {"cache-control": "no-cache"},
                    dataType: "text",
                    url: "/login/checkAccount",
                    data: dataForm,
                    success: function (msg) {
                        if (msg === "ok") {
                            window.location.href = "/index";
                        } else {
                            $("#loginBtn").removeClass("disabled");
                            $("#errormsg").text(msg);
                        }
                    },
                })
            } else {
                if (username == 'admin') {
                    $("#errormsg").text('请补全账号后缀');
                } else {
                    $("#errormsg").text('非管理员请从机构独立入口登录，独立入口请联系组织者获取');
                }
            }
        }
    }
}

//解析url中的参数
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return '';
}

//检查用户的表单信息
function checkWM() {
    if ($.trim($("#username").val()) == "") {
        alert("账号不能为空！\r\r请重新填写！");
        $("#username").focus();
        return false;
    }
    if ($("#userTypePwd").val() == "") {
        alert("用户密码不能为空！\r\r请重新填写！");
        $("#userTypePwd").focus();
        return false;
    }
    return true;
}

