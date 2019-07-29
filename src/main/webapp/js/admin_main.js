$(document).ready(function () {
    //读取用户自定义LOGO
    if ($("#logo").length > 0) {
        $.ajax({
            type: "GET",
            cache: false,
            //headers: { "cache-control": "no-cache" },
            dataType: "json",
            url: "/admin/modify_get_logo",
            success: function (msg) {
                if (msg.success == true) {
                    var logoUrl = msg.bizContent.logoUrl;
                    var img = '<img src="' + logoUrl + '" style="height:47px;" />';
                    $("#logo a").css("background-image", "none").html(img);
                    $("#logo").show();
                } else {
                    //alert("操作失败，请稍候再试！");
                }
            }
        });
    }

    // 退出登录(清空cookie,session&&sessionId)
    $("#logoutBtn").click(function (e) {

        $.ajax({
            type: "GET",
            cache: false,
            url: "/login/logout",
            success: function (msg) {
                window.location.href = "/login";
            }
        });

    })


});
