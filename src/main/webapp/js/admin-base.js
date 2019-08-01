$(function () {
    // initial tooltip
    $('[data-toggle="tooltip"]').tooltip();
    // initial popover
    $('[data-toggle="popover"]').popover();

    // ajaxstart with loading shown
    $(document).ajaxStart(function () {
        $("#spinnerLoading").removeClass("hidden");
    });
    // ajaxstop with loading hidden
    $(document).ajaxStop(function () {
        $("#spinnerLoading").addClass("hidden");
    });

        //生成导航
        function createSidebar(data) {
            var menuList = [
                {
                    title: '考试管理',
                    icon: 'icon-a_nav_exam',
                    id: 'Exam',
                    subMenu: [
                        {
                            title: '考试信息管理',
                            id: 'ExamMgr',
                            url: getAdminUrlPrefix + '/admin/exam_mgr_new',
                            show: data.allowExamMgr
                        },
                        {
                            title: '试题库',
                            id: 'QuestionMgr',
                            // url: getAdminUrlPrefix + '/admin/showtestqm_new',
                            url: getStaticUrlPrefix + '/html/exam/test_questions.html/#/list',
                            show: data.allowShowtestqm
                        },
                        {
                            title: '试卷库',
                            id: 'PaperMgr',
                            url: getAdminUrlPrefix + '/html/exam/paper_mgr_new.html',
                            show: data.allowPaperMgr
                        },
                        {
                            title: '成绩查询',
                            id: 'ResultMgr',
                            url: getAdminUrlPrefix + '/admin/result/mgr_new',
                            show: data.allowResultMgr
                        },
                        {
                            title: '分析考试',
                            id: 'ResultAnalysis',
                            url: getAnalysisUrlPrefix + '/ae/results/analysis/exam',
                            show: data.allowAnalysisExam
                        },
                        {
                            title: '分析考生',
                            id: 'personAnalysis',
                            url: getAnalysisUrlPrefix + '/ae/results/analysis/person',
                            show: data.allowAnalysisPerson
                        }
                    ]
                },
                {
                    title: '人员管理',
                    icon: 'icon-a_nav_personnel',
                    id: 'User',
                    subMenu: [
                        {
                            title: '考生信息',
                            id: 'UserMgr',
                            url: getStaticUrlPrefix + "/admin/user/#/list",
                            show: data.allowUserMgr
                        }
                    ]
                },
                {
                    title: '学习',
                    icon: 'icon-a_nav_study',
                    id: 'Course',
                    subMenu: [
                        {
                            title: '知识库',
                            id: 'FileMgr',
                            url: getAdminUrlPrefix + '/admin/file/manager',
                            show: data.allowFileManager
                        },
                        {
                            title: '课程管理',
                            id: 'CourseMgr',
                            url: getAdminUrlPrefix + '/course/course_mgr',
                            show: data.allowCourseManager
                        }
                    ]
                },
                {
                    title: '自定义任务',
                    icon: 'icon-a_icon_nav_process',
                    id: 'CustomProcess',
                    show: data.allowCustomProcess,
                    beta: true,
                    url: getStaticUrlPrefix + '/admin/customprocess/'
                },
                {
                    title: '认证中心',
                    icon: 'icon-p_leftnav_certification',
                    id: 'Certification',
                    show: data.allowCertificateCenter,
                    url: getAdminUrlPrefix + '/certificate/certificate_center'
                },
                {
                    title: '报名审核',
                    icon: 'icon-a_nav_sign_up',
                    id: 'Application',
                    show: data.allowSignUp,
                    url: getStaticUrlPrefix + "/admin/application/#/list"
                },
                {
                    title: '支付中心',
                    icon: 'icon-a_nav_pay',
                    id: 'Pay',
                    subMenu: [
                        {
                            title: '充值',
                            id: 'PayCenter',
                            url: getAdminUrlPrefix + '/account/admin_pay_center',
                            show: data.allowPayCenter
                        },
                        {
                            title: '支付设置',
                            id: 'PaySet',
                            url: getAdminUrlPrefix + '/admin/user_pay_set',
                            show: data.allowTransactionRecord
                        },
                        {
                            title: '消费记录',
                            id: 'ConsumeRecord',
                            url: getAdminUrlPrefix + '/account/admin_consume_record',
                            show: data.allowTransactionRecord
                        },
                        {
                            title: '充值记录',
                            id: 'OrderRecord',
                            url: getAdminUrlPrefix + '/account/admin_order_record',
                            show: data.allowAdminOrderRecord
                        },
                        {
                            title: '考生付费记录',
                            id: 'PayRecord',
                            url: getAdminUrlPrefix + '/account/examinee_pay_record',
                            show: data.allowExamineePayRecord
                        }
                    ]
                },
                {
                    title: '系统管理',
                    icon: 'icon-a_nav_system',
                    id: 'System',
                    subMenu: [
                        {
                            title: '子管理员设置',
                            id: 'SubAdminMgr',
                            url: getAdminUrlPrefix + '/admin/sub_admin_mgr',
                            show: data.allowSubAdminMgr
                        },
                        {
                            title: 'App设置',
                            id: 'AppSetting',
                            url: getAdminUrlPrefix + '/admin/app_set',
                            show: data.allowAppSet
                        },
                        {
                            title: '个性化设置',
                            id: 'Modify',
                            url: getAdminUrlPrefix + '/admin/modify',
                            show: data.allowModify
                        },
                        {
                            title: '关联公众号',
                            id: 'FollowApp',
                            url: getAdminUrlPrefix + '/admin/follow_app',
                            show: data.allowFollowApp
                        },
                        {
                            title: '开发者信息管理',
                            id: 'DevInfoMgr',
                            url: getAdminUrlPrefix + '/admin/dev_info_mgr',
                            show: data.allowDevInfoMgr
                        },
                        {
                            title: '管理员操作记录',
                            id: 'OpRecord',
                            url: getAdminUrlPrefix + '/account/admin_op_record',
                            show: data.allowAdminOpRecord
                        }
                    ]
                }
            ];


            for (var i = 0; i < menuList.length; i++) {
                createNav(menuList[i]);
            }

        }

        //创建一级导航dom
        function createNav(data) {
            var menuDom = $('<li class="nav-item ' + (data.subMenu ? 'has-sub-menu' : '') + '"  id="navItem' + data.id + '"></li>');
            var menuHtml =
                '<a href="' + (data.subMenu ? '#' : data.url) + '" class="menu-title" data-toggle="tooltip" data-placement="right" data-container="body" title="' + data.title + '">' +
                '<div class="nav-icon"><i class="icon ' + data.icon + '"></i></div>' +
                '<span class="nav-title">' + data.title + '</span>' +
                (data.beta ? '<img class="mark-beta" src="https://s6..com/ksxing_static/vue/images/icon/a_nav_beta.svg" />' : '') +
                '</a>';


            if (data.subMenu) {
                //有二级导航

                var subMenuShowList = data.subMenu;

                //管理员和超管不做过滤，所有二级导航都显示，子管理员限制权限
                if (USER_ROLE == 'sub_admin') {
                    subMenuShowList = data.subMenu.filter(function (t) {
                        return t.show;
                    });
                }

                var subMenuDom = $('<ul class="sub-menu animate"></ul>');

                for (var i = 0; i < data.subMenu.length; i++) {
                    if (data.subMenu[i].show) {
                        $(subMenuDom).append(createSubNav(data.subMenu[i]));
                    }
                }

                //若二级导航至少有一个
                if (subMenuShowList.length != 0) {
                    $(menuDom).append(menuHtml, subMenuDom);

                    $("#ksxAdminSidebar").append(menuDom);
                }
            } else {
                if (data.id == 'Application') {
                    if (data.show) {
                        $(menuDom).append(menuHtml);
                        $("#ksxAdminSidebar").append(menuDom);
                    }
                } else {
                    //无二级导航
                    //beta模块子管理员不可见
                    if (USER_ROLE == 'sub_admin') {
                        if (data.show) {
                            $(menuDom).append(menuHtml);
                            $("#ksxAdminSidebar").append(menuDom);
                        }
                    } else {
                        $(menuDom).append(menuHtml);
                        $("#ksxAdminSidebar").append(menuDom);
                    }
                }
            }
        }

        //创建二级导航dom
        function createSubNav(data) {
            var subMenuDom = $('<li class="nav-item sub-nav-item" id="subNavItem' + data.id + '"></li>');
            var subMenuHtml =
                '<a href="' + data.url + '">' +
                '<span class="nav-title">' + data.title + '</span>' +
                '</a>';

            $(subMenuDom).append(subMenuHtml);

            return subMenuDom;
        }


        //展开关闭二级导航
        $(".sidebar-trans").on('click', '.nav-item.has-sub-menu .menu-title', function (e) {
            var _this = $(this).parent('.nav-item');
            var subNav = $(_this).find(".sub-menu");
            var subNavLength = $(subNav).find(".sub-nav-item").length;

            //若导航为收起状态，先展开
            if ($("#viewFrameWork").hasClass('sidebar-min')) {
                $("#sidebar-fold").click();
            }


            if ($(_this).hasClass('open')) {
                //不做处理
                // $(_this).removeClass('open');
                // $(subNav).css('height', "0px");
            } else {
                $(".sidebar-trans .nav-item.has-sub-menu.open .sub-menu").css('height', "0px");
                $(".sidebar-trans .nav-item.has-sub-menu.open").removeClass('open');

                $(_this).addClass('open');
                $(subNav).css('height', (38 * subNavLength + 10) + "px");
            }
        });


        //标记激活导航
        function getActiveNav() {
            var activeDom = $('#' + activeNavItem);

            if (activeDom.length != 0) {
                if ($(activeDom).hasClass('has-sub-menu')) {
                    //有二级导航的一级导航，什么也不做

                } else if ($(activeDom).hasClass('sub-nav-item')) {
                    //二级导航
                    $(activeDom).parents('.has-sub-menu').find('.menu-title').click();
                    $(activeDom).addClass('nav-item-active');
                } else {
                    //孤独的一级导航
                    $(activeDom).addClass('nav-item-active');
                }

            }
        }
    });

    if ($(".sidebar-fold").hasClass("icon-unfold")) {
        $('.sidebar-nav [data-toggle="tooltip"]').tooltip('destroy');
    }

    // fold sidebar
    $("#sidebar-fold").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        if ($(this).hasClass("icon-unfold")) {
            // fold sidebar
            $(this).removeClass("icon-unfold").addClass("icon-fold").attr("title", "展开导航").attr("data-original-title", "展开导航");
            $(this).find(".icons8").removeClass("icons8-icon").addClass("icons8-icon-3");
            $(".viewFrameWork").removeClass("sidebar-full").addClass("sidebar-min");
            document.cookie = "ksxFoldState=fold; path =; domain=;";
            $('.sidebar-inner [data-toggle="tooltip"]').tooltip();

            //收起二级导航
            $(".sidebar-trans .nav-item.has-sub-menu").removeClass('open');
            $(".sidebar-trans .nav-item.has-sub-menu .sub-menu").css('height', "0px");
        } else if ($(this).hasClass("icon-fold")) {
            // unfold sidebar
            $(this).removeClass("icon-fold").addClass("icon-unfold").attr("title", "收起导航").attr("data-original-title", "收起导航");
            $(this).find(".icons8").removeClass("icons8-icon-3").addClass("icons8-icon");
            $(".viewFrameWork").removeClass("sidebar-min").addClass("sidebar-full");
            document.cookie = "ksxFoldState=unfold; path =; domain=;";
            /*$('.sidebar-inner [data-toggle="tooltip"]').tooltip();*/
            $('.sidebar-nav [data-toggle="tooltip"]').tooltip('destroy');
        }
    });


    //初始化系统消息
    var POPOVER_HTML = '';
    /*$.ajax({
        type: 'POST',
        cache: false,
        headers: {"cache-control": "no-cache"},
        dataType: "json",
        url: '/account/notification/',
        success: function (msg) {
            var tool_count = msg.bizContent.unreadCount;

            // 未读标志
            if (tool_count > 9) {
                $('#stateMessage .message-count').text('9+').removeClass('hidden');
            } else if (tool_count > 0) {
                $('#stateMessage .message-count').text(tool_count).removeClass('hidden');
            } else {
                $('#stateMessage .message-count').addClass('hidden');
            }

            // notifications是最新的消息，最多为5条，添加支消息框
            for (var i = 0; i < msg.bizContent.notifications.length; i++) {
                var content = msg.bizContent.notifications[i].content;
                if (msg.bizContent.notifications[i].isRead == 0) {//若状态为未读添加未读类
                    tool_html += '<div class="message unread" id="' + msg.bizContent.notifications[i].id + '">' +
                        '<span class="glyphicon glyphicon-volume-up" aria-hidden="true"></span>'
                        + content + '</div>';
                } else {
                    tool_html += '<span class="message read" id="' + msg.bizContent.notifications[i].id + '">' + content + '</span><br>';
                }
            }

            // 如果所有消息中未读消息的数目不为0，则显示有未读消息的标志
            if (tool_count != 0) {
                $(".hasUnread").css("display", "inline-block");
            } else {
                $(".hasUnread").hide();
            }

            POPOVER_HTML = tool_html;

        }
    });*/


    // 若点击消息内部链接，则认为消息已读
    $("body").on('click', "#stateMessageSection .unread a", function () {
        var notification_id = $(this).parent(".unread").attr("id");
        $.ajax({
            type: 'POST',
            cache: false,
            headers: {"cache-control": "no-cache"},
            dataType: "json",
            url: '/account/read_notification/',
            data: 'ids=' + notification_id,
            success: function (msg) {
            }
        })
    });


    $("#stateMessage").click(function () {
        //window.location.href = "/account/notification/";
    });


// set cookie
function setCookie(c_name, value) {
    document.cookie = c_name + "=" + escape(value);
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

//保存 search 条件
function setSearchCookie(cName, obj) {
    var expiresTime = new Date();
    expiresTime.setTime(expiresTime.getTime() + (24 * 60 * 60 * 1000));
    var cookieStr = "";
    for (var itemName in obj) {//用javascript的for/in循环遍历对象的属性
        if (obj[itemName] != "") {
            cookieStr += itemName + "=" + obj[itemName] + "&&";
        }
    }
    cookieStr = cName + "=" + escape(cookieStr) + ";" + "expires=" + expiresTime.toUTCString();
    document.cookie = cookieStr;
}

//删除 cookie
function delCookie(cName) {
    document.cookie = cName + "='';"
}

//获取 search 条件
function getSearchCookie(cName, itemName) {
    if (document.cookie.length > 0) {
        var itemValue = "";
        var cStart = document.cookie.indexOf(cName + "=");
        if (cStart != -1) {
            cStart = cStart + cName.length + 1;
            c_end = document.cookie.indexOf(";", cStart);
            if (c_end == -1) {
                c_end = document.cookie.length
            }
            itemValue = unescape(document.cookie.substring(cStart, c_end));
            var itemStart = itemValue.indexOf(itemName + "=");
            if (itemStart > -1) {
                var itemEnd = itemValue.indexOf("&&", itemStart);
                itemValue = itemValue.substring(itemStart + itemName.length + 1, itemEnd);
                return itemValue;
            } else {
                return "";
            }
        }
    }
    return "";
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


// 显示发布成功对话框
function showSelOk(id, url, password, trialExamLink, type, isSkipLogin) {
    $('#sendForm').removeClass('hidden');
    $(".guide-pwd").addClass('hidden');

    $("#exam_url").text(url);
    //isSkipLogin : 0是普通登录；1是免登录；2是微信免登录
    if (isSkipLogin != 0) {
        $('#sendForm').addClass('hidden');
    }
    if (password) {
        $("#exam_password").html(password);
        $(".guide-pwd").removeClass('hidden');
    }
    if (type == 'exam') {
        var sendUrl = '/admin/exam_notice/' + id;
    } else {
        var sendUrl = '/course/course_notice/' + id;
    }
    var jumpUrl = '';
    createQrcode(url);

    $("#confirmOkBtn").attr("data-type", type).attr("data-id", id);
    $("#trialExamBtn").prop("disabled", false).attr("data-url", trialExamLink)
        .attr("data-id", id).attr("data-type", type);

    $('#okModal').modal();

}

//okmodal点击确定
$("#confirmOkBtn").click(function () {
    var type = $(this).attr("data-type");
    var id = $(this).attr("data-id");
    var jumpUrl = '', sendUrl = '';
    var ref = document.referrer;//上一页面url
    var url = document.URL;//当前页url
    var linkToOther = true;//是否要跳转到其他页面
    var isOpenUrl = false; //是否是直接复制链接而非跳转过来
    if (url.indexOf('/admin/index') != -1 || url.indexOf('/course/course_mgr') != -1 || url.indexOf('/admin/exam_mgr_new') != -1) { //如果当前是首页、考试列表页、课程列表页，直接跳到本页面
        linkToOther = false;
    }
    if (ref == "" && url.indexOf('/admin/index') == -1 && url.indexOf('/course/course_mgr') == -1 && url.indexOf('/admin/exam_mgr_new') == -1) { //上一页面为空，且不是首页、考试列表页、课程列表页
        isOpenUrl = true;
    }
    //弹窗跳转逻辑优化  1.优先在哪点的回到哪 2.最差也是都回到列表页面
    if (type == 'exam') {
        if (url.indexOf('/html/exam/exam_add') != -1) { //创建考试的情况
            var okModalRef = window.localStorage.getItem('okModalExamRef');
            if (okModalRef == 'index') {
                jumpUrl = '/account/admin/index';
            } else {
                jumpUrl = '/html/exam/exam_mgr_new.html';
            }
        } else {
            if (isOpenUrl) { //如果是复制链接进来的，让其跳转到列表页
                jumpUrl = '/html/exam/exam_mgr_new.html';
            } else {
                if (linkToOther) {
                    if (ref.indexOf('index') != -1) {
                        jumpUrl = '/account/admin/index';
                    } else {
                        jumpUrl = '/html/exam/exam_mgr_new.html';
                    }
                } else {
                    jumpUrl = url;
                }
            }
        }
        sendUrl = '/admin/exam_notice/' + id;
    } else if (type == 'course') {
        if (isOpenUrl) { //如果是复制链接进来的，让其跳转到列表页
            jumpUrl = '/course/course_mgr';
        } else {
            if (linkToOther) {
                if (ref.indexOf('index') != -1) {
                    jumpUrl = '/account/admin/index';
                } else {
                    jumpUrl = '/course/course_mgr';
                }
            } else {
                jumpUrl = url;
            }
        }
        sendUrl = '/course/course_notice/' + id;
    }
    sendNotice(sendUrl, jumpUrl);
});

//okmodal点击考一下
$("#trialExamBtn").click(function () {
    var type = $(this).attr("data-type");
    var id = $(this).attr("data-id");
    var jumpUrl = $(this).attr("data-url"), sendUrl = '';

    if (type == 'exam') {
        sendUrl = '/admin/exam_notice/' + id;
    } else if (type == 'course') {
        sendUrl = '/course/course_notice/' + id;
    }
    sendNotice(sendUrl, jumpUrl);
});

//生成二维码
function createQrcode(examUrl) {
    //二维码生成
    $("#invite-link-qrcode").html("");
    $("#invite-link-qrcode").qrcode({
        width: 150,
        height: 150,
        text: examUrl,
        background: "#FFF"
    });
    //clear canvas before download again
    $("#small").html("");
    $("#medium").html("");
    $("#large").html("");

    $("#small").qrcode({
        width: 560,
        height: 560,
        text: examUrl,
        background: "#FFF"
    });
    var download0 = $("#small canvas")[0];
    $("a[download-size=0]").click(function () {
        if (download0.msToBlob) {//IE9+浏览器下载二维码
            var blob = download0.msToBlob();
            window.navigator.msSaveBlob(blob, $("input[name=examName]").val() + "_二维码小.png");
        } else { //其他浏览器下载二维码
            this.href = download0.toDataURL();
            this.download = $("input[name=examName]").val() + "_二维码小.png";
        }
    });

    $("#medium").qrcode({
        width: 1050,
        height: 1050,
        text: examUrl,
        background: "#FFF"
    });
    var download1 = $("#medium canvas")[0];
    $("a[download-size=1]").click(function () {
        if (download1.msToBlob) {//IE9+浏览器
            var blob = download1.msToBlob();
            window.navigator.msSaveBlob(blob, $("input[name=examName]").val() + "_二维码中.png");
        } else {
            this.href = download1.toDataURL();
            this.download = $("input[name=examName]").val() + "_二维码中.png";
        }
    });

    $("#large").qrcode({
        width: 3500,
        height: 3500,
        text: examUrl,
        background: "#FFF"
    });
    var download2 = $("#large canvas")[0];
    $("a[download-size=2]").click(function () {
        if (download2.msToBlob) {//IE9+浏览器
            var blob = download2.msToBlob();
            window.navigator.msSaveBlob(blob, $("input[name=examName]").val() + "_二维码大.png");
        } else {
            this.href = download2.toDataURL();
            this.download = $("input[name=examName]").val() + "_二维码大.png";
        }
    });
}

//发送通知
function sendNotice(url, jumpUrl) {
    // var dataForm = $('#sendForm').serialize();
    var sendWay = '';
    var isSendNotice = $("#sendForm input:checked").length;
    if (isSendNotice == 0) {
        window.location.href = jumpUrl;
    } else {
        $('#sendForm input:checked').each(function (index, ele) {
            sendWay += $(ele).prop('id') + ',';
        });
        sendWay = sendWay.substring(0, sendWay.length - 1);
        $.ajax({
            type: "POST",
            cache: false,
            headers: {"cache-control": "no-cache"},
            dataType: "json",
            url: url,
            data: 'sendWay=' + sendWay,
            success: function (msg) {
                if (msg.success == true) {
                    $(".sendAnimation").addClass("sendTips");
                    // 动画完成后的动作
                    var compAnimation = $(".sendAnimation").get(0);
                    compAnimation.addEventListener("animationend", animationEndFunction(jumpUrl));
                } else {
                    alert(msg.desc);
                }
            }
        });
    }
}

// 提示动画完成后
function animationEndFunction(jumpUrl) {
    $('#okModal .modal-content').hide();
    $("#animationLoading").removeClass("hidden");
    setTimeout(function () {
        window.location.href = jumpUrl;
    }, 1000);
}


//数组区间无交叉 //有交叉返回true；没有返回false
//demo: 如想判断[1,2],[3,4],[5,6]三个数组的数值是否有交叉，则这样调用该函数：arrCross([1,3,5],[2,4,6]);
function arrCross(minArr, maxArr) {
    //如果最小区间或最大区间有重复元素，则说明区间有交叉
    if (isRepeat(minArr) || isRepeat(maxArr)) {
        return true;
    }
    //minArr 为最小值组成的数组
    //maxArr 为最大值组成的数组
    var minSortArr = JSON.parse(JSON.stringify(minArr));
    var maxSortArr = JSON.parse(JSON.stringify(maxArr));
    minSortArr.sort(function (a, b) {
        return a - b;
    });
    maxSortArr.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < minArr.length; i++) {
        //如果排序之后相同index位置的值与原对应关系不一致
        if (minSortArr.indexOf(minArr[i]) != maxSortArr.indexOf(maxArr[i])) {
            return true;
        } else if (i > 0) {
            //如果最小值小于前一组的最大值
            if (minSortArr[i] < maxSortArr[i - 1]) {
                return true;
            }
        }
    }
    return false;
}

// 验证重复元素，有重复返回true；否则返回false
function isRepeat(arr) {
    var hash = {};
    for (var i in arr) {
        if (hash[arr[i]]) {
            return true;
        }
        // 不存在该元素，则赋值为true，可以赋任意值，相应的修改if判断条件即可
        hash[arr[i]] = true;
    }
    return false;
}

//获取url中的参数
//param 为想要获取的参数名
function getUrlsearch(param) {
    var searchUrl = window.location.search;
    var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)");
    var r = searchUrl.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}