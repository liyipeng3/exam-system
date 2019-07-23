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
            data: "cookieName="+cookieName+"&cookieValue="+cookieValue+"&expiresTime="+expiresTime,
            success: function (msg) {
				if(msg=='true'){
                    window.location.href = window.location.href+"?"+Math.random();
				}
            }
        });
    });
});

//考生注册人数上限校验
$(".btn-examinee-reg").click(function(e){
    e.stopPropagation();
    //e.preventDefault();

    $.ajax({
        type: "POST",
        cache: false,
        headers: {"cache-control": "no-cache"},
        dataType: "text",
        url: "/account/checkout_staff_count",
        data: "companyId="+$("input[name=companyId]").val(),
        success: function (msg) {
            if(JSON.parse(msg).result){
                window.location.href = "/account/register/"+$("input[name=companyId]").val();
            }else{
                $("#userOverModal").modal();
            }
        }
    });
});

//用户登录

function userLogin() {
    if (checkWM()) {
        var wm = document.form_wm;
        var remember = "";
        if (wm.saveUsername.checked) {
            // document.cookie = "starUsername=" + $("input[name=user_name_input]").val() + ";expires=Mon, 25 Jan 2020 00:00:00 GMT;path=/;";
            // document.cookie = "starUserpassword=" + $("input[name=password]").val() + ";expires=Mon, 25 Jan 2020 00:00:00 GMT;path=/;";
            remember = true;
        } else {
            remember = false;
        }
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

            //默认为英文
            if(domain=='46561'){

                var cookieName = "language";
                var cookieValue = "en";
                var expiresTime = "86400";

                $.ajax({
                    type: "POST",
                    cache: "false",
                    headers: {"cache-control": "no-cache"},
                    async:false,
                    url: "/account/set_cookie",
                    data: "cookieName="+cookieName+"&cookieValue="+cookieValue+"&expiresTime="+expiresTime,
                    success: function (msg) {}
                })

            }
            $("#loginBtn").addClass("disabled");
            $.ajax({
                type: "POST",
                cache: "false",
                headers: {"cache-control": "no-cache"},
                dataType: "json",
                url: "/account/login",
                data: dataForm + "&remember=" + remember,
                success: function (msg) {
                    if (msg.success) {
                        //判断是否开启微信绑定且账号是否已经绑定过微信
                        if (msg.bizContent.isBindWechat != '2' && msg.bizContent.isBind == 'false') {
                            $("#loginBtn").removeClass("disabled");
                            $(".logo,.login-form").hide();
                            $(".loginWechet").show();
                            //如果是必须绑定微信，则隐藏"先不绑定，直接登录"
                            if(msg.bizContent.isBindWechat == 0){
                                $(".btn-goto-login").hide();
                            }
                            $("#loginWechet .btn-goto-bind").prop("href", msg.bizContent.redirectUrl);
                            $("#loginWechet .btn-goto-login").prop("href", msg.bizContent.url);
                        } else {
                            window.location.href = msg.bizContent.url;
                        }
                    } else {
                        $("#loginBtn").removeClass("disabled");
                        $("#errormsg").text(msg.desc);
                    }
                }
            })
        } else {
            //公共入口
            $("#username_tran").val(username);

            dataForm = $("#loginForm [type!=password]").serialize();
            password = $("#loginForm [name=password]").val();

            dataForm += "&password=" + md5(password) + "&nextUrl=" + nextUrl;

            if (filter2.test(username) || filter3.test(username) || (/^\d{11}$/.test(username))) {
                $("#loginBtn").addClass("disabled");
                $.ajax({
                    type: "POST",
                    cache: "false",
                    headers: {"cache-control": "no-cache"},
                    dataType: "json",
                    url: "/account/login",
                    data: dataForm + "&remember=" + remember,
                    success: function (msg) {
                        if (msg.success) {
                            if (msg.bizContent.isBindWechat != '2' && msg.bizContent.isBind == 'false') {
                                $("#loginBtn").removeClass("disabled");
                                $(".logo,.login-form").hide();
                                $(".loginWechet").show();
                                //如果是必须绑定微信，则隐藏"先不绑定，直接登录"
                                if(msg.bizContent.isBindWechat == 0){
                                    $(".btn-goto-login").hide();
                                }
                                $("#loginWechet .btn-goto-bind").prop("href", msg.bizContent.redirectUrl);
                                $("#loginWechet .btn-goto-login").prop("href", msg.bizContent.url);
                            } else {
                                window.location.href = msg.bizContent.url;
                            }
                        } else {
                            $("#loginBtn").removeClass("disabled");
                            $("#errormsg").text(msg.desc);
                        }
                    }
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

