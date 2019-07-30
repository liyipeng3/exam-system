$(function () {
    // initial tooltip
    $('[data-toggle="tooltip"]').tooltip();
    // initial popover
    $('[data-toggle="popover"]').popover();

    //页面加载完毕
    $(function () {
        $("#spinnerLoading").addClass("hidden");
    });

    // ajaxstart with loading shown
    $(document).ajaxStart(function () {
        $("#spinnerLoading").removeClass("hidden");
    });
    // ajaxstop with loading hidden
    $(document).ajaxStop(function () {
        $("#spinnerLoading").addClass("hidden");
    });



    //展开状态下不显示提示卡
    if ($(".sidebar-fold").hasClass("icon-unfold")) {
        $('.sidebar-nav [data-toggle="tooltip"]').tooltip('destroy');
    }

    // fold sidebar
    $("#sidebar-fold").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        if ($(this).hasClass("icon-unfold")) {
            // fold sidebar
            $('.show-num').css({
                'left': '28px'
            });
            $(this).removeClass("icon-unfold").addClass("icon-fold").attr("title", "展开导航").attr("data-original-title", "展开导航");
            $(this).find(".icons8").removeClass("icons8-icon").addClass("icons8-icon-3");
            $(".viewFrameWork").removeClass("sidebar-full").addClass("sidebar-min");
            document.cookie = "ksxFoldState=fold; path =; domain=;";
            $('.sidebar-inner [data-toggle="tooltip"]').tooltip();
        } else if ($(this).hasClass("icon-fold")) {
            // unfold sidebar
            $('.show-num').css({
                'left': '76px'
            });
            $(this).removeClass("icon-fold").addClass("icon-unfold").attr("title", "收起导航").attr("data-original-title", "收起导航");
            $(this).find(".icons8").removeClass("icons8-icon-3").addClass("icons8-icon");
            $(".viewFrameWork").removeClass("sidebar-min").addClass("sidebar-full");
            document.cookie = "ksxFoldState=unfold; path =; domain=;";
            /*$('.sidebar-inner [data-toggle="tooltip"]').tooltip();*/
            $('.sidebar-nav [data-toggle="tooltip"]').tooltip('destroy');
        }
    });

    //一级导航对应模块显示激活状态
    $(function () {
        //当前地址
        var current_url = window.location.href;
        //导航应当激活项(默认为首页)
        var current_item = 'exam';
        //查询状态
        var query_status = false;
        //所有带导航页面url结构列表
        var url_list = {
            "exam": ["/exam/history", "/exam/wrong_topic"],
            "course": ["course/show", "course/mine", "course/study/"],
            "certificate": ["certificate/certificate_mine"],
            "netdisk": ["/exam/file_mgr"],
        };

        for (var o in url_list) {
            var item_list = url_list[o];

            for (var i = 0; i < item_list.length; i++) {
                if (current_url.indexOf(item_list[i]) != -1) {
                    query_status = true;
                    break;
                }
            }

            if (query_status) {
                current_item = o;
                break;
            }
        }

        $(".sidebar-trans .nav-item.nav-item-" + current_item).addClass("nav-item-active");
    });

    //导航栏搜索配置
    $(function () {
        //当前地址
        var current_url = window.location.href;
        var _form = $("#searchForm");
        //默认为当前考试列表页搜索，不列入配置当中
        //url:当前路径，name:搜索name，status:要不要显示
        var search_list = [
            {
                url: 'exam/history', name: 'name', method: 'get', action: '/exam/history_search',
                status: true
            },
            {url: 'exam/wrong_topic', status: false},
            {url: 'course/show', status: false},
            {url: 'exam/file_mgr', name: 'name', method: '', action: '', status: true},
            {url: 'certificate/certificate_mine', status: false}
        ];

        for (var i = 0; i < search_list.length; i++) {
            if (current_url.indexOf(search_list[i].url) != -1) {
                if (search_list[i].status) {
                    $(".status-item.item-search").removeClass("hidden");
                    $(_form).attr("method", search_list[i].method).attr("action", search_list[i].action);
                    $(_form).find(".item-key-input").attr("name", search_list[i].name);
                } else {
                    $(".status-item.item-search").addClass("hidden");
                }
            }
        }

    });

    //搜索
    $("#searchBtn").click(function (e) {
        $("#searchForm").submit();
    });

    $("#searchForm .item-key-input").keydown(function (e) {
        if (e.keyCode == 13) {
            $("#searchForm").submit();
        }
    });


    //导航栏个人中心
    $("#userInfoBtn").click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        $("#userInfoModal").modal();
    });

    //导航栏修改密码
    $("#setPasswordBtn").click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        $("#setPasswordModal").modal();
    });

    //第三方需求，隐藏logo和退出
    $(function () {
        //获取cookie
        var thirdParty = getCookie('thirdParty');

        if (thirdParty == 'true') {
            $("#logoutBtn").addClass("hidden");
        }
    });

});

//中英文切换
function switchLang(lang) {
    //en:english
    //zh-CN:Chinese
    $.ajax({
        type: "post",
        url: "/account/set_cookie",
        dataType: "json",
        data: "cookieName=language&cookieValue=" + lang + "&expiresTime=86400",
        success: function (msg) {
            window.location.href = window.location.href + "?" + Math.random();
        }
    });

}

// set cookie
function setCookie(cookieName, cookieValue, expiresTime) {
    $("#spinnerLoading").addClass("hide");

    $.ajax({
        type: "post",
        url: "/account/set_cookie",
        dataType: "json",
        data: "cookieName=" + cookieName + "&cookieValue=" + cookieValue + "&expiresTime=" + expiresTime,
        success: function (msg) {
            $("#spinnerLoading").removeClass("hide");
            return msg;
        },
        error: function (msg) {
            $("#spinnerLoading").removeClass("hide");
        }
    });

}


// get cookie
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

// 获取url中参数
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return '';
}

//处理aliyun oss url问题，进行uri编码
function aliyunEncodeURI(url) {
    if (url.indexOf("https://.oss-cn-beijing.aliyuncs.com/") > -1) {
        url = url.replace("https://.oss-cn-beijing.aliyuncs.com/", '');
        url = "https://.oss-cn-beijing.aliyuncs.com/" + encodeURIComponent(url);
    } else if (url.indexOf("https://s6..com/") > -1) {
        url = url.replace("https://s6..com/", '');
        url = "https://s6..com/" + encodeURIComponent(url);
    } else if (url.indexOf("https://cdnoss..com/") > -1) {
        url = url.replace("https://cdnoss..com/", '');
        url = "https://cdnoss..com/" + encodeURIComponent(url);
    }
    return url;
}

// 退出登录(清空cookie,session&&sessionId)
$("#logoutBtn").click(function (e) {
    e.preventDefault();

    $("#logoutModal").modal();
});

//确认退出登录
$("#confirmLogoutBtn").click(function () {
    $.ajax({
        type: "GET",
        cache: false,
        url: "/login/logout",
        success: function (msg) {
            window.location.href = "/login";

        }
    });
});

function checkIOS() {//判断苹果手机系统，进行兼容
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        return false;
    }
    if (isIOS) {
        return true;
    }
}

