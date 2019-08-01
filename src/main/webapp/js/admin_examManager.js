var customArr = [];//保存自定义设置
var customPageCount = 10;//保存每页显示项数
var firstLoad = true;//是否第一次加载，第一次加载的话不保存cookie
var isShowSelect = true;//管理考试分类弹窗按钮选择是否显示

$('#examClassify').click(function () {
    //显示选择分类对话框
    selTypeModal.location.href = "/admin/tree/exam_sel_style";
    $('#typeModal').modal({
        backdrop: "static",
        keyboard: false
    });
    $('.exam-classify').text('管理考试分类')
});

//置顶考试
$('#examTop').click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    if ($("#grid-data").bootgrid("getSelectedRows").length > 3) {
        alert('最多选择三场考试进行置顶');
        return;
    } else {
        $.ajax({
            type: 'POST',
            cache: false,
            headers: {"cache-control": "no-cache"},
            dataType: 'json',
            url: '/exam/getCurrentTopExam',
            success: function (mesg) {
                $('.current_top_exam').find('span').text(mesg.bizContent.examNames);
                $('#examTopModal').modal('show');
            }
        });

    }
})
$('#setExamTop').click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    var top_exam_list = [];
    var examIds;
    $("#grid-data").find("tbody tr.active").each(function () {//遍历选中的考试，使用遍历来按照列表顺序拼接数组。使用bootgrid("getSelectedRows")则会按照用户点击顺序拼接的
        top_exam_list.push($(this).attr('data-row-id'));
    })
    examIds = top_exam_list.join(',');
    $.ajax({
        type: 'POST',
        cache: false,
        headers: {"cache-control": "no-cache"},
        dataType: 'json',
        data: 'examIds=' + examIds,
        url: '/exam/update_top_time',
        success: function () {
            $('#examTopModal').modal('hide');
        }
    })
});


$(document).ready(function () {

    //初始化日历控件
    laydate.render({
        elem: "#dateFrom"
    });
    laydate.render({
        elem: "#dateTo"
    });
    //判断是是否有cookie
    var cookieName = "admin_exam_mgr_new";
    //判断搜索条件
    if (getCookie(cookieName)) {
        customArr = getSearchCookie(cookieName, "customStr").split("+");
        //判断自定义设置
        if (customArr.length > 0 && customArr[0] != "") {
            $("#grid-data th").each(function (index, element) {
                var num = $.inArray($(this).attr("data-column-id"), customArr);
                if (num > -1) {
                    $(this).attr("data-visible", "true");
                } else {
                    $(this).attr("data-visible", "false");
                }
            });
        }
        //判断是否保存了每页显示项目数
        if (getSearchCookie(cookieName, "customPageCount")) {
            customPageCount = getSearchCookie(cookieName, "customPageCount");
        }
    }
    $("#grid-data").bootgrid({
        ajax: false,
        ajaxSettings: {
            method: "POST",
            cache: false
        },
        post: function () {
            var sortOrder = $("#grid-data").bootgrid("getSortDictionary");
            var sortKey, sortOrderValue;
            var examName = $("input[name=exam_name]").val();
            var examStatus = $("select[name=status]").val();
            var examStyle = $("input[name=exam_style]").val();
            var examStartTime = $("input[name=dateFrom]").val();
            var examEndTime = $("input[name=dateTo]").val();
            $.each(sortOrder, function (name, value) {
                sortKey = name;
                sortOrderValue = value;
            });
            return {
                "sortKey": sortKey,
                "sortOrder": sortOrderValue,
                "examName": examName,
                "examStatus": examStatus,
                "examStyle": examStyle,
                "examStartTime": examStartTime,
                "examEndTime": examEndTime
            };
        },
        url: "/admin/exam/mgr_grid/",
        selection: true,
        multiSelect: true,
        rowSelect: true,
        padding: 1,
        navigation: 2,
        formatters: {
            "link": function (column, row) {
                return "<a href='#' data-growing-title='updateExam' class='icon-a_operate_edit updateExam' examId='" + row.id + "' data-toggle=\"tooltip\" data-placement=\"top\" data-container=\"body\" title='编辑'></a>" +
                    "<a href='#' data-growing-title='linkExam' class='icon-a_operate_link linkExam' examId='" + row.id + "' data-toggle=\"tooltip\" data-placement=\"top\" data-container=\"body\" title='考试链接'></a>" +
                    // "<a href='#' data-growing-title='linkTest' class='icons8-purchase-order linkTest' data-toggle=\"tooltip\" data-container=\"body\" data-placement=\"top\" title='考一下' examId='"+row.id+"'></a>"+
                    "<a href='#' data-growing-title='linkScore' class='icon-a_operate_mark linkScore' data-toggle=\"tooltip\" data-placement=\"top\" data-container=\"body\" title='成绩查询' examId='" + row.id + "'></a>" +
                    "<a href='#' data-growing-title='linkAnalysis' class='icon-a_operate_analysis linkAnalysis' data-toggle=\"tooltip\" data-container=\"body\" data-placement=\"top\" title='统计分析' examId='" + row.id + "' examName='" + row.examName + "'></a>" +
                    "<a href='#' data-growing-title='searchState' class='icon-a_operate_dspmsg searchState' data-toggle=\"tooltip\" data-placement=\"top\" data-container=\"body\" title='考生答题状态查询' examId='" + row.id + "'></a>";
            }
        }
    }).on("loaded.rs.jquery.bootgrid", function (e) {
        if (!firstLoad) {
            //自定义设置
            customArr = [];
            $(".custom-settings input:checked").each(function (index, element) {
                customArr.push($(this).attr("name"));
            });
            //保存每页显示项目数目
            var cookieObj = {};
            cookieObj["customStr"] = customArr.join("+");
            cookieObj["customPageCount"] = $(".page-count-span").text().substring(2, 4);
            setSearchCookie(cookieName, cookieObj);
        }
        firstLoad = false;
        // initial tooltip
        $('#grid-data [data-toggle="tooltip"]').tooltip();

        $("#grid-data").colResizable({
            fixed: false,
            liveDrag: true,
            draggingClass: "dragging"
        });


        //新编辑考试
        $("#grid-data").bootgrid().find(".updateExam").on("click", function (e) {
            var examId = $(this).attr("examId");
            e.stopPropagation();
            e.preventDefault();
            //showUpdateUser(this, examId);
            examEditFn(examId);
        });

        //管理员体验一下考试
        $("#grid-data").bootgrid().find(".linkTest").on("click", function (e) {
            var examId = $(this).attr("examId");
            e.stopPropagation();
            e.preventDefault();
            $.ajax({
                url: '/admin/exam/exam_can_edit/' + examId,
                type: 'get',
                cache: false,
                dataType: 'json',
                success: function (msg) {
                    if (msg.success) {
                        //异步获取考试地址-->跳转到考试
                        $.ajax({
                            type: "GET",
                            cache: false,
                            headers: {"cache-control": "no-cache"},
                            dataType: "json",
                            url: "/admin/exam/link_info/?examId=" + examId,
                            success: function (msg) {
                                //该地址和modal框里的地址不一样
                                window.open(msg.bizContent.trialUrl);
                            }
                        });
                    } else alert("请在课程中完成相应课程后参加该考试");
                }
            })
        });

        //管理员成绩查询批改首页表格快捷入口
        $("#grid-data").bootgrid().find(".linkScore").on("click", function (e) {
            var examId = $(this).attr("examId");
            e.stopPropagation();
            e.preventDefault();
            window.open("/admin/result/mgr_new/?examInfoId=" + examId);
        });

        //考试链接
        $("#grid-data").bootgrid().find(".linkExam").on("click", function (e) {
            if ($(this).parents("td").prev().text() == '是') { //根据表格判断是否关联自定义任务
                $('#cannotLinkModal').modal("show");
            } else {
                var examName = $(this).parents("tr").children().eq(1).text();
                var examId = $(this).attr("examId");
                e.stopPropagation();
                e.preventDefault();
                //showUpdateUser(this, examId);
                getExamUrl(examId, examName);
                //此页面需要解绑复制链接的事件，否则点击一次弹出一次或多次
            }
        });

        //考生状态查询
        $("#grid-data").bootgrid().find(".searchState").on("click", function (e) {
            e.stopPropagation();
            e.preventDefault();
            $("#searchStateModal").modal("show");
            $("#searchStateModal").attr("examId", $(this).attr("examId"));
        });

        //考试统计分析
        $("#grid-data").bootgrid().find(".linkAnalysis").on("click", function (e) {
            e.stopPropagation();
            e.preventDefault();
            var _this = $(this);
            window.open(encodeURI("/ae/results/analysis/exam?examId=" + _this.attr("examId") + "&examName=" + encodeURI(_this.attr("examName"))));
        });
    });


    //选择分类
    $("body").on("click", "#selTypeLink", function (e) {
        e.stopPropagation();
        e.preventDefault();
        showSelType(this);
    });


    //删除多个考试
    $("body").on("click", "#batchDel", function (e) {
        e.stopPropagation();
        e.preventDefault();
        var ids = $("#grid-data").bootgrid("getSelectedRows").join(",");
        if (ids == "") {
            alert("请选择要删除的考试！");
            return;
        }
        examDelFn(ids, true);
    });

    //导出
    //按钮的可用与禁用（inactive deactive）

    var namesArray = [];
    $("#grid-data").bootgrid().on("selected.rs.jquery.bootgrid", function (e, rows) {

        $(".toolbar-left-operation .inactive").removeClass("inactive").addClass("deactive").removeAttr("disabled");

        for (var i = 0; i < rows.length; i++) {
            namesArray.unshift(rows[i].id);
            // return namesArray;
        }
    }).on("deselected.rs.jquery.bootgrid", function (e, rows) {
        var selectList = $("#grid-data").bootgrid("getSelectedRows");

        if (selectList.length == 0) {
            $(".toolbar-left-operation .btn.deactive, .toolbar-left-operation .dropdown-menu.deactive").removeClass("deactive").addClass("inactive").attr("disabled", "disabled");
        }

        for (var i = 0; i < namesArray.length; i++) {
            for (var j = 0; j < rows.length; j++) {
                if (rows[j].id == namesArray[i]) {
                    delete namesArray[i]
                    if (namesArray[i] == null) {
                        namesArray.splice(i, 1);
                        i = i - 1;
                    }

                    break;
                }
            }
        }
    }).on("load.rs.jquery.bootgrid", function () {
        $(".toolbar-left-operation .btn.deactive, .toolbar-left-operation .dropdown-menu.deactive").removeClass("deactive").addClass("inactive").attr("disabled", "disabled");
    });


    $("#batchExport").click(function (e) {
        var dataForm = namesArray.toString();

        if (namesArray.length <= 10 && namesArray.length > 0) {
            BootstrapDialog.show({
                title: "",
                message: "导出表格包含未参考人员吗？",
                cssClass: 'export_dialog',
                buttons: [{
                    label: "否",
                    cssClass: 'btn-default export_no',
                    action: function (dialogItself) {
                        dialogItself.close();
                        $.ajax({
                            type: 'GET',
                            cache: false,
                            headers: {"cache-control": "no-cache"},
                            dataType: "json",
                            url: '/admin/results/import/?examInfoId=' + dataForm + "&confirmExaminees=0" + "&batch=1",
                            success: function (msg) {
                                $('#exportModal').modal({
                                    backdrop: "static",
                                    keyboard: false
                                });
                            }
                        });
                    }
                }, {
                    label: "是",
                    cssClass: 'btn-primary export_yes',
                    action: function (dialogItself) {
                        dialogItself.close();
                        $.ajax({
                            type: 'GET',
                            cache: false,
                            headers: {"cache-control": "no-cache"},
                            dataType: "json",
                            url: '/admin/results/import/?examInfoId=' + dataForm + "&confirmExaminees=1" + "&batch=1",
                            success: function (msg) {
                                $('#exportModal').modal({
                                    backdrop: "static",
                                    keyboard: false
                                });

                            }
                        });

                    }
                }]
            });
        } else if (namesArray.length <= 0) {

            return;
        } else if (namesArray.length > 10) {

            alert('一次最多只能导出10组考试成绩')
        } else alert('目前最多一次可导出10组考试成绩!')

    });


    //正常考试
    $("body").on("click", ".examStatusTrueBtn", function (e) {
        e.stopPropagation();
        e.preventDefault();
        var examId = $(this).attr("examId");
        examStatusFn(examId, 0);
    });
    //禁用考试
    $("body").on("click", ".exampleStatusFalseBtn", function (e) {
        e.stopPropagation();
        e.preventDefault();
        var examId = $(this).attr("examId");
        examStatusFn(examId, 1);
    });

    //点击搜索
    $("body").on("click", "#searchIcon", function (e) {
        var srch = $('input[name=exam_name]');
        srch.val($.trim(srch.val()));
        //清空高级搜索条件
        $("#subForm")[0].reset();
        $("#subForm input").each(function (index, element) {
            $(this).val("");
        });
        $("#selTypeLink").text("选择分类");
        $("#grid-data").bootgrid("reload");
    });

    $("body").on("click", "#searchBtn", function (e) {
        e.stopPropagation();
        e.preventDefault();
        //清空一般搜索条件
        $("input[name=exam_name]").val("");
        $("#grid-data").bootgrid("reload");
        $("advSearch").hide();
    });
    //搜索回车事件
    $("body").keydown(function () {
        var e = window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == "13") {//keyCode=13是回车键
            $('#searchIcon').click();
        }
    });

    if (document.URL.match("exam_mgr_new") == "exam_mgr_new") {
        //显示选择分类对话框
        function showSelType(obj) {
            selTypeModal.location.href = "/admin/tree/exam_sel_style_multi";
            $('#typeModal').modal({
                backdrop: "static",
                keyboard: false
            });
        }
    } else {
        //显示选择分类对话框
        function showSelType(obj) {
            selTypeModal.location.href = "/admin/tree/exam_sel_style";
            $('#typeModal').modal({
                backdrop: "static",
                keyboard: false
            });
        }
    }

    //编辑考试
    function examEditFn(examId) {
        $.ajax({
            url: '/admin/exam/exam_can_edit/' + examId,
            type: 'get',
            cache: false,
            dataType: 'json',
            success: function (msg) {
                if (msg.success != false)
                    window.open("/admin/exam/update/" + examId);
                else alert('该考试与课程关联，请在课程中编辑');
            }
        })

    }

    //链接考试
    function getExamUrl(examId, examName) {
        //异步获取考试地址
        $.ajax({
            type: "GET",
            cache: false,
            headers: {"cache-control": "no-cache"},
            dataType: "json",
            url: "/admin/exam/link_info/?examId=" + examId,
            success: function (msg) {
                if (msg.success) {
                    //管理员体验地址
                    var url = msg.bizContent.trialUrl;
                    $("#trialExamBtn").html('<span class="trial-link">考一下</span>');
                    var notification = msg.bizContent.msgContent.split(',');
                    $('.notification .notificationContent').text(notification[0]);
                    $('.notification .notificationUrl').text(notification[1]);
                    showSelOk(examId, msg.bizContent.examUrl, msg.bizContent.examPwd, url, 'exam', msg.bizContent.isSkipLogin)
                } else {
                    alert('请在课程中完成相应课程后参加该考试');
                }
            }
        });
    }


    //删除考试 -本场考试关联自定义任务
    function examDelFn(examId, much) {
        BootstrapDialog.show({
            title: "确定删除选中的记录?",
            message: "删除考试会同步删除考试中的成绩和答题，是否继续？<br /> 以下两种情况将导致本场考试无法删除：<br /> -本场考试当前有人正在答题<br />-已关联自定义任务,需先取消关联 ",
            cssClass: 'delete_dialog',
            buttons: [{
                cssClass: 'btn-default delete_no',
                label: "取消",
                action: function (dialogItself) {
                    dialogItself.close();
                }
            },
                {
                    label: "确认",
                    cssClass: 'btn-default delete_yes',
                    action: function (dialogItself) {
                        dialogItself.close();
                        $.ajax({
                            type: "GET",
                            cache: false,
                            headers: {"cache-control": "no-cache"},
                            dataType: "json",
                            url: "/admin/exam/del/" + examId,
                            success: function (msg) {
                                if (msg.success != true) {
                                    if (msg.code == 33061) {
                                        createDialog("有考生正在参加该考试");
                                    } else if (msg.code == 33074) {
                                        createDialog("您选的考试中,存在已关联自定义任务的考试,请先前往自定义任务中取消关联");
                                    } else {
                                        createDialog("操作失败，请联系管理员！");
                                    }
                                } else {
                                    $("#grid-data").bootgrid("reload");
                                }
                            }
                        })
                    }
                }],
        });

        function createDialog(alertMsg) {
            BootstrapDialog.show({
                title: "无法删除考试",
                cssClass: 'cannot_delete',
                message: alertMsg,
                buttons: [{
                    label: "知道了",
                    cssClass: 'btn-default cannot_delete_yes',
                    action: function (dialogItself) {
                        dialogItself.close();
                    }
                }]
            });
        };
    }

    //检查是否是慧科教育的子公司
    function check_subsidiary(company_domain) {
        domain_split = company_domain.split(".");
        if (domain_split[1] == "gaoxiaobang" && domain_split[2] == "com") {
            return true;
        } else {
            return false;
        }
    }

    //删除考试将考试id推送给慧科
    var num = 0;
    var post_del_exam = function (exam_id) {
        var post_data = {
            "exam_id": exam_id
        };
        var status;
        $.ajax({
            type: "post",
            url: "http://restful.gaoxiaobang.com/exam/delete/api?jwt=" + jwt,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(post_data),
            success: function (msg) {
                if (msg.status == 0) {
                    // alert("推送成功");
                } else {
                    alert("推送失败，请联系管理员");
                    num = num + 1;
                    if (num < 3) {
                        post_del_exam(exam_id);
                    }
                }
            }
        })
    }

    //考试状态
    function examStatusFn(examId, type) {
        if (confirm("确定更改所选择的考试状态？")) {
            $.ajax({
                type: "GET",
                cache: false,
                headers: {"cache-control": "no-cache"},
                dataType: "json",
                url: "/admin/exam/update_status/" + examId + "/" + type,
                success: function (msg) {
                    if (msg.success == true) {
                        window.location.reload();
                    } else {
                        alert("操作失败，请联系管理员！");
                    }
                }
            });
        }
    }
});

//重新刷新页面
function reloadHtml() {
    location.reload(true);
}

if (document.URL.match("exam_mgr_new") == "exam_mgr_new") {
    //接受选择分类数据
    function selType(obj) {
        //obj = {"name": node.name , "id": node.id}
        var idStr = "";
        var nameStr = "";
        $(obj).each(function (index, element) {
            if (index != obj.length - 1) {
                idStr += element.id + ",";
                nameStr += element.name + ",";
            } else {
                idStr += element.id;
                nameStr += element.name;
            }
        });
        $("input[name=exam_style]").val(idStr);
        $("#selTypeLink").text(nameStr);
    }
} else {
    //接受选择分类数据
    function selType(id, name) {
        $("input[name=exam_style]").val(id);
        $("#selTypeLink").text(name);
    }
}

//关闭选择分类对话框
function hideSelType(obj) {

    $('#typeModal').modal('hide');

    if (isShowSelect) {
        $('.exam-classify').text('选择考试分类')
    }
}

//考生状态查询的查询按钮
$("#searchStateModal .btn-search").click(function () {
    var examId = $("#searchStateModal").attr("examId");
    var account = $("#searchStateModal .examinee-account").val();
    if (!account || $.trim(account).length < 1) {
        alert("请输入考生账号！");
        return false;
    }
    $.ajax({
        type: "POST",
        cache: false,
        headers: {"cache-control": "no-cache"},
        dataType: "json",
        url: "/admin/query_examinee_qualifier",
        data: {
            examInfoId: examId,
            account: account
        },
        success: function (msg) {
            var code = msg.code ? msg.code : "#00000",
                colorCss = "",//用以标记结果颜色和样式
                iconClass = "",//图标
                tipStr = msg.desc ? msg.desc : '查询出现问题，请稍后再试';
            switch (code) {
                case 61510:
                    colorCss = "fail";
                    iconClass = "icon-a_error";
                    break;
                case 61511:
                    colorCss = "success";
                    iconClass = "icon-a_success";
                    break;
                case 61512:
                    colorCss = "fail";
                    iconClass = "icon-a_error";
                    break;
                case 61513:
                    colorCss = "warning";
                    iconClass = "icon-a_warning";
                    break;
                case 61514:
                    colorCss = "warning";
                    iconClass = "icon-a_warning";
                    break;
                default:
                    colorCss = "warning";
                    iconClass = "icon-a_warning";
                    break;
            }
            var htmlStr = '<i class="icon ' + iconClass + '"></i>' +
                '<p>' + tipStr + '</p>';
            $("#searchStateModal .examinee-account").val(""); //清空信息
            $("#searchStateModal").modal("hide");
            $("#searchStateResultModal .ksx-tip").removeClass("fail success warning").addClass(colorCss).html(htmlStr);
            $("#searchStateResultModal").modal("show");
        }
    });
});