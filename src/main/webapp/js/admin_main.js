$(document).ready(function () {

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
