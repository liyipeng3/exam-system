//选择试卷分类弹窗是多选还是单选 single multi
var selPaperStyleType;
var isShowSelect;//管理考试分类弹窗按钮选择是否显示 true不显示 false显示
$(document).ready(function () {
    //日历多语言
    var datePikadayLang = {
        previousMonth: '上一月',
        nextMonth: '下一月',
        months: ['一月', '二月', '三月', '四月',
            '五月', '六月', '七月', '八月',
            '九月', '十月', '十一月', '十二月'],
        weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        weekdaysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    };

    //初始化日历控件
    var $dateForm = $('#dateForm').pikaday({
        firstDay: 1,
        format: 'YYYY-MM-DD',
        minDate: new Date('2000-01-01'),
        maxDate: new Date('2020-12-31'),
        yearRange: [2000, 2030],
        i18n: datePikadayLang
    });
    var $dateTo = $('#dateTo').pikaday({
        firstDay: 1,
        format: 'YYYY-MM-DD',
        minDate: new Date('2000-01-01'),
        maxDate: new Date('2020-12-31'),
        yearRange: [2000, 2030],
        i18n: datePikadayLang
    });


    $('#examClassify').click(function () {
        isShowSelect = true;
        //显示选择分类对话框
        selTypeModal.location.href = "/admin/tree/paper_style";
        $('#typeModal').modal({
            backdrop: "static",
            keyboard: false
        });
        $('.model-exam-classify').text('管理试卷分类')
    });

    //新建试卷
    $("body").on("click", ".createPaper", function () {
        $("#createPaperForm")[0].reset();
        $("#selTypeLink span").text("选择分类");
        $("#createPaperForm .paper-type-group .btn").addClass("not-selected");
        $("#createPaperForm .paper-type-group .btn[data-value=1]").removeClass("not-selected");
        $("#createPaperModal").modal();
    });


    //选择分类
    $("body").on("click", "#selTypeLink", function (e) {
        e.stopPropagation();
        e.preventDefault();

        selPaperStyleType = 'single';
        isShowSelect = false;
        showSelType(this);
    });

    //组卷方式
    $("#createPaperForm .paper-type-group .btn").click(function () {
        if ($(this).hasClass("not-selected")) {
            $(this).siblings(".btn").addClass("not-selected");
            $(this).removeClass("not-selected");
            $("#createPaperForm input[name=paper_type]").val($(this).attr("data-value"));
        }
    });


    //确认新建试卷
    $("body").on("click", "#confirmCreatePaper", function () {
        if (checkPaperForm()) {
            var paperName = encodeURIComponent($("#createPaperForm input[name=paper_name]").val());
            var paperStyle = $("#createPaperForm input[name=paper_style]").val();
            var paperType = $("#createPaperForm input[name=paper_type]").val();
            var perTimeRestrict = $("#createPaperForm input[name=perTimeRestrict]")[0].checked ? '1' : '0';

            window.location.href = "/admin/paper_manual_add?paper_name=" + escapeHTML(paperName) +
                "&paper_style=" + paperStyle + "&paper_type=" + paperType + "&add_style=select&perTimeRestrict=" + perTimeRestrict + "&addPaper=1";
        }
    });


    //转义
    function escapeHTML(text) {
        return text.replace(/\%/g, "%25")
            .replace(/\+/g, "%2B");
    }


    // 检查创建试卷表单
    function checkPaperForm() {
        if ($("#createPaperForm input[name=paper_name]").val() == "") {
            alert("请输入试卷名称");
            return false;
        } else if ($("#createPaperForm input[name=paper_name]").val().length > 50) {
            alert("试卷名称不得大于50字！");
            return false;
        }

        if ($("#createPaperForm input[name=paper_style]").val() == '') {
            alert("请选择试卷分类");
            return false;
        }

        return true
    }

    //选择分类
    $("body").on("click", "#selTypeLinkMulti", function (e) {
        e.stopPropagation();
        e.preventDefault();

        selPaperStyleType = 'multi';
        showSelType(this);
    });
    //单个试卷编辑
    $("#grid-data").bootgrid().on("loaded.rs.jquery.bootgrid", function () {
        $("#grid-data").bootgrid().find(".updatePaper").on("click", function (e) {
            var paperId = $(this).attr("paperId");
            e.stopPropagation();
            e.preventDefault();
            paperEditFn(paperId);
        })
    });

    //删除单个考试
    $("#grid-data").bootgrid().on("loaded.rs.jquery.bootgrid", function () {
        $("#grid-data").bootgrid().find(".removePaper").on("click", function (e) {
            e.stopPropagation();
            e.preventDefault();
            var paperId = $(this).attr("paperId") + ",";
            if ($(this).attr("examUsing") == "true") {
                //如果考生正在考试
                if ($(this).attr("paperIsUsing") == "true") {
                    BootstrapDialog.show({
                        cssClass: "exam-not-del",
                        title: "无法删除试卷",
                        message: "该试卷有考生正在进行考试",
                        buttons: [{
                            cssClass: "exam-del-btn",
                            label: "知道了",
                            action: function (dialogItself) {
                                dialogItself.close();
                            }
                        }]
                    });
                } else {
                    //有正在进行中的考试使用该试卷，但是没有考生在考试
                    BootstrapDialog.show({
                        cssClass: "exam-del",
                        title: "确定删除选中的试卷?",
                        message: "您所选中的试卷正被用于考试，是否确定删除？",
                        buttons: [{
                            cssClass: "del-test-no",
                            label: "取消",
                            action: function (dialogItself) {
                                dialogItself.close();
                            }
                        }, {
                            cssClass: "del-test-yes",
                            label: "确认",
                            action: function (dialogItself) {
                                dialogItself.close();
                                paperDelFn(paperId, false)
                            }
                        }]
                    });
                }
            } else {
                //直接删除
                paperDelFn(paperId, false);
            }
        })
    });

    //复制试卷
    $("#grid-data").bootgrid().on("loaded.rs.jquery.bootgrid", function () {
        $("#grid-data").bootgrid().find(".copyPaper").on("click", function (e) {
            var paperId = $(this).attr("paperId");
            e.stopPropagation();
            e.preventDefault();
            paperCopyFn(paperId);
        })
    });

    //创建考试
    $("#grid-data").bootgrid().on("loaded.rs.jquery.bootgrid", function () {
        $("#grid-data").bootgrid().find(".create_exam").on("click", function (e) {
            var paperId = $(this).attr("paperId");
            sessionStorage.setItem('ksxSaveData', 0);
            e.stopPropagation();
            e.preventDefault();
            window.open('/admin/exam_add?paper_info_id=' + paperId);
        })
    });

    //删除多个试卷
    $("body").on("click", "#batchDel", function (e) {
        e.stopPropagation();
        e.preventDefault();
        var ids = $("#grid-data").bootgrid("getSelectedRows").join(",");
        if (ids == "") {
            alert("请选择试卷");
            return;
        }
        paperDelFn(ids, true);
    });
    //点击搜索
    $("body").on("click", "#searchIcon", function (e) {
        var srch = $('input[name=paper_name]');
        srch.val($.trim(srch.val()));
        $("#grid-data").bootgrid("reload");
    });

    $("body").on("click", "#searchBtn", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $("#grid-data").bootgrid("reload");
        $(".adv-search-box").hide();
    });
    //搜索回车事件
    $("body").keydown(function () {
        var e = window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 13) {//keyCode=13是回车键
            $('#searchIcon').click();
        }
    });


    //正常试卷
    $("body").on("click", ".paperStatusTrueBtn", function (e) {
        e.stopPropagation();
        e.preventDefault();
        var paperId = $(this).attr("paperId");
        paperStatusFn(paperId, 0);
    });
    //禁用试卷
    $("body").on("click", ".paperStatusFalseBtn", function (e) {
        e.stopPropagation();
        e.preventDefault();
        var paperId = $(this).attr("paperId");
        paperStatusFn(paperId, 1);
    });
});

//显示选择分类对话框
function showSelType(type) {
    if (selPaperStyleType == 'single') {
        selTypeModal.location.href = "/admin/tree/paper_style";
    } else if (selPaperStyleType == 'multi') {
        selTypeModal.location.href = "/admin/tree/paper_style_multi";
    }
    $('#typeModal').modal({
        backdrop: "static",
        keyboard: false
    });
}

//关闭选择分类对话框
function hideSelType(obj) {
    $('#typeModal').modal('hide');
}

//接受选择分类数据
function selType(obj, name) {
    if (selPaperStyleType == "single") {
        //obj = id

        $("#createPaperForm input[name=paper_style]").val(obj);
        $("#selTypeLink span").text(name);
    } else if (selPaperStyleType == "multi") {
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
        $("input[name=paper_style]").val(idStr);
        $("#selTypeLinkMulti").text(nameStr);
    }
}

//编辑试卷
function paperEditFn(examId) {
    //判断是否使用中
    var tempwindow = window.open();
    $.ajax({
        type: "GET",
        cache: false,
        headers: {"cache-control": "no-cache"},
        dataType: "json",
        url: "/admin/paper/is_using/" + examId,
        success: function (msg) {
            if (msg.success == true) {
                tempwindow.location = "/admin/paper/update/" + examId;
            } else if (msg.code == 31032) {
                alert("有考试正在使用该试卷，不能编辑！");
            } else {
                alert("操作失败，请联系管理员！");
            }
        }
    });
}

//删除试卷
function paperDelFn(paperId, much) {
    if (much == true) {
        BootstrapDialog.show({
            title: "",
            message: "确定删除选中的试卷？",
            cssClass: 'del-test',
            buttons: [{
                label: "取消",
                cssClass: 'del-test-no',
                action: function (dialogItself) {
                    dialogItself.close();
                }
            }, {
                label: "确认",
                cssClass: 'del-test-yes',
                action: function (dialogItself) {
                    dialogItself.close();
                    $.ajax({
                        type: "GET",
                        cache: false,
                        headers: {"cache-control": "no-cache"},
                        dataType: "json",
                        url: "/admin/paper/del/" + paperId,
                        success: function (msg) {
                            if (msg.success == true) {
                                alert("如果有在使用中的考试，将无法删除！");
                                $("#grid-data").bootgrid("reload");
                                $(".tooltip.fade").remove();
                            } else if (msg.code == 31032) {
                                alert("有考试正在使用该试卷，不能删除！");
                            } else {
                                alert("操作失败，请联系管理员！");
                            }
                        }
                    });
                }
            }]
        });
    } else {
        $.ajax({
            type: "GET",
            cache: false,
            headers: {"cache-control": "no-cache"},
            dataType: "json",
            url: "/admin/paper/del/" + paperId,
            success: function (msg) {
                if (msg.success == true) {
                    // window.location.reload();
                    $("#grid-data").bootgrid("reload");
                    $(".tooltip.fade").remove();
                } else if (msg.code == 31032) {
                    alert("有考试正在使用该试卷，不能删除！");
                } else {
                    alert("操作失败，请联系管理员！");
                }
            }
        });
    }
}

//复制试卷
function paperCopyFn(paperId) {
    $.ajax({
        type: "post",
        cache: false,
        url: "/admin/paper_copy",
        headers: {"cache-control": "no-cache"},
        dataType: "json",
        data: {
            paperInfoId: paperId
        },
        success: function (msg) {
            if (msg.success) {
                // window.location.reload();
                $("#grid-data").bootgrid("reload");
            } else {
                alert("复制失败，" + msg.desc);
            }
        }
    });
}

