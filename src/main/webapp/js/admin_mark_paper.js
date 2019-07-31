$(document).ready(function () {
    //初始化日历控件
    laydate.render({
        elem: "#dateForm"
    });
    laydate.render({
        elem: "#dateTo"
    });

    //选择部门
    $("body").on("click", "#selDepLink", function (e) {
        e.stopPropagation();
        e.preventDefault();
        showSelDep(this);
    });

    $(".navbarCustomer li").mouseover(function (e) {
        if (!$(this).hasClass("navSel")) {
            $(this).addClass("navHover");
        }
    });
    $(".navbarCustomer li").mouseout(function (e) {
        $(this).removeClass("navHover");
    });

    //选择考试
    $("body").on("click", "#selTypeLink", function (e) {
        e.stopPropagation();
        e.preventDefault();
        showSelType(this);
    });
    //判断是否已经有了考试数据，如果没有，进入页面时弹出选择弹框
    if(!document.location.href.match(/examInfoId/))
    {
        $("#selTypeLink").click();
    }

    //全选
    $(".checkAll").change(function (e) {
        if ($(this).is(":checked")) {
            $(".checkSimple").each(function (index, element) {
                $(this).attr("checked", "checked");
            });
        } else {
            $(".checkSimple").each(function (index, element) {
                $(this).removeAttr("checked");
            });
        }
    });
    //批量删除
    $("body").on("click", "#btn-remove", function (e) {
        e.stopPropagation();
        e.preventDefault();
        var ids = "";
        $(".select-box").each(function (index, element) {
            if ($(this).is(":checked")) {
                id = $(this).val();
                if (id != "all") {
                    ids += id + ",";
                }
            }
        });
        if (ids == "") {
            alert("请选择要删除的考试！");
            return;
        }
        delDate(ids);
    });

    //批量强制交卷
    $("body").on("click", "#forceSubmitBtn", function (e) {

        e.stopPropagation();
        e.preventDefault();

        var ids = $("#grid-data").bootgrid("getSelectedRows").join(",");

        if (ids === "") {

            alert("请选择要交卷的考试！");

            return false;
        }

        BootstrapDialog.show({
            cssClass: 'batch-submit',
            title: '批量交卷',
            message: '批量交卷会立即结束考生答题，并进行交卷和判分处理，是否继续?\n注：交卷结束后可进入消息中心查看交卷情况',
            buttons: [{
                label: '取消',
                cssClass: 'batch-submit-no',
                action: function(dialog) {
                    dialog.close();
                }
            }, {
                label: ' 确定',
                cssClass: 'batch-submit-yes',
                action: function(dialog) {
                    dialog.close();
                    $.ajax({
                        type: 'POST',
                        cache: false,
                        headers: { "cache-control": "no-cache" },
                        dataType: "json",
                        url: '/exam/batch/force_submit',
                        data: "examResultsIds=" + ids,
                        success: function (msg) {
                            if(msg.success){

                            }else {
                                alert("操作失败，请联系客服！");
                            }
                        }
                    });
                }
            }]
        });
    });

    // 批量更改部门
    $("body").on("click","#changeDept",function (e) {
        e.stopPropagation();
        e.preventDefault();
        var ids = usersArray.join(",");
        if (ids == "") {
            alert("请选择成绩！");
            return;
        }
        showSelDept(this, ids);
    });

    //'更多'按钮
    $('body').on('click',function(){
        var is_show=$('#moreOptList').attr('data-show');
        if(is_show=='1'){
            $('#moreOptList').hide().attr('data-show','0');
        }
    })
    $(function(){
        $('#moreOptList').hide();
    })
    $("body").on("click","#moreOpt",function(e){
        e.stopPropagation();
        e.preventDefault();
        var is_show=$('#moreOptList').attr('data-show');
        var l=$('#moreOpt').position().left;//计算更多列表显示的位置
        var t=$('#moreOpt').position().top;
        var w=parseInt($('#moreOpt').css('width'));
        var h=parseInt($('#moreOpt').css('height'));
        $('#moreOptList').css('left',String(l-0.2*w)+'px').css('top',String(t+1.2*h)+'px')
        if(is_show=='1'){
            $('#moreOptList').hide().attr('data-show','0');
        }
        else{
            $('#moreOptList').show().attr('data-show','1');
        }
    })
    $("body").on("mouseover",".el-dropdown-menu__item",function(e){
        $(this).css('background-color','rgb(232, 244, 255)').css("color","rgb(72, 164, 255)");
    })

    $("body").on("mouseout",".el-dropdown-menu__item",function(e){
        $(this).css('background-color','#fff').css("color","#606266");
    })
    //'恢复考试'按钮
    $("body").on("click","#recoverExam",function (e) {
        e.stopPropagation();
        e.preventDefault();
        var ids = "";
        $(".select-box").each(function (index, element) {
            if ($(this).is(":checked")) {
                id = $(this).val();
                if (id != "all") {
                    ids += id + ",";
                }
            }
        });
        if(ids==""){
            alert("请选择要恢复考试的考生成绩");
        }else{
            recoverExam(ids,exam_info_id);
        }
    });

    //单条删除a
    // $("#grid-data").bootgrid().on("loaded.rs.jquery.bootgrid", function () {
    //     $("#grid-data").bootgrid().find(".removeExamGrade").on("click", function (e) {
    //         e.stopPropagation();
    //         e.preventDefault();
    //         var id = $(this).attr("examResultId") + ",";
    //         delDate(id);
    //     })
    // });

    //单个试卷下载
    // $("#grid-data").bootgrid().on("loaded.rs.jquery.bootgrid", function () {
    //     $("#grid-data").bootgrid().find(".download").on("click", function (e) {
    //         e.stopPropagation();
    //         e.preventDefault();
    //         var result_id = $(this).attr("examResultId");
    //         if ($(this).parent().prev().text() == '答题中' || $(this).parent().prev().text() == '待强制交卷' ) {
    //             alert('试卷未提交');
    //         }else {
    //             window.open("/exam/result/export_pdf/?resultId="+result_id,"_blank");
    //         }
    //     })
    // });

    //初始化时间
    $('#resetTimeModal').on('shown.bs.modal', function (event) {
        var thisDate = new Date();

        // 重置交卷时间
        laydate.render({
            elem: "#endTime",
            type: 'datetime',
            format: "yyyy-MM-dd HH:mm:ss",
            min: thisDate.getTime(),
            max: thisDate.getTime()+86400000,
            position: 'fixed',
            done: function(value, date, endDate){
                date.hours = date.hours<10 ? '0'+date.hours : date.hours;
                date.minutes = date.minutes<10 ? '0'+date.minutes : date.minutes;
                date.seconds = date.seconds<10 ? '0'+date.seconds : date.seconds;

                var time = date.year+"年"+date.month+"月"+date.date+"日"+" "+date.hours+":"+date.minutes+":"+date.seconds;

            }
        });
    });

    //下一步确认时间
    $("#resetNextStepBtn").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        var new_endtime=$('#endTime').val();
        $("#resetTimeModal .confirm-time").text(new_endtime);
        $("#resetTimeModal .modal-title").addClass("hidden");
        $("#resetTimeModal .first-step").addClass("hidden");
        $("#resetTimeModal .second-step").removeClass("hidden");
    });

    //上一步返回修改
    $("#resetPrevStepBtn").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        $("#resetTimeModal .modal-title").removeClass("hidden");
        $("#resetTimeModal .first-step").removeClass("hidden");
        $("#resetTimeModal .second-step").addClass("hidden");
    });

    //确认修改交卷时间
    $("#resetSaveBtn").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        var dataForm = $("#resetTimeForm").serialize();
        $.ajax({
            type: 'POST',
            cache: false,
            headers: { "cache-control": "no-cache" },
            dataType: "json",
            url: '/admin/exam/setDelayTime',
            data: dataForm,
            success: function (msg) {
                if(msg.success){
                    $("#resetTimeModal").modal('hide');
                    //初始化为第一步
                    $("#resetTimeModal .first-step").removeClass("hidden");
                    $("#resetTimeModal .second-step").addClass("hidden");
                }else {
                    alert(msg.desc);
                }
            }
        });
    });



    //显示高级搜索
    $("body").on("click", ".advSearch", function (e) {
        $(".adv-search-box").toggle();
    });
    //隐藏高级搜索
    $("body").on("click", "#searchClose", function (e) {
        $(".adv-search-box").hide();
    });

    //点击搜索
    $("body").on("click", "#searchIcon", function (e) {
        $("input[name=name_search]").val($.trim($("input[name=user_name]").val()));
        $("input[name=dep_search]").val("");
        $("input[name=grade_search]").val("");
        $("input[name=start_time_search]").val("");
        $("input[name=end_time_search]").val("");
        $("input[name=pass_search]").val("");
        $("input[name=min_score_search]").val("");
        $("input[name=max_score_search]").val("");
        $("input[name=verify_status_search]").val("");
        $("input[name=user_name]").val("");
        $("#grid-data").bootgrid("reload");
        $("input[name=dep_id]").val("");
        $("#selDepLink span").text("选择部门");
        $("select[name=is_grade]").val("");
        $("input[name=exam_date_from]").val("");
        $("input[name=exam_date_to]").val("");
        $("select[name=is_pass]").val("");
        $("input[name=score_left]").val("");
        $("input[name=score_right]").val("");
        $("select[name=verify_status]").val("");

    });

    $("body").on("click", "#searchBtn", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $("input[name=name_search]").val("");
        $("input[name=dep_search]").val($.trim($("input[name=dep_id]").val()));
        $("input[name=grade_search]").val($("select[name=is_grade]").find("option:selected").val());
        $("input[name=start_time_search]").val($.trim($("input[name=exam_date_from]").val()));
        $("input[name=end_time_search]").val($.trim($("input[name=exam_date_to]").val()));
        $("input[name=pass_search]").val($("select[name=is_pass]").find("option:selected").val());
        $("input[name=min_score_search]").val($.trim($("input[name=score_left]").val()));
        $("input[name=max_score_search]").val($.trim($("input[name=score_right]").val()));
        $("input[name=verify_status_search]").val($.trim($("select[name=verify_status]").val()));
        $("#grid-data").bootgrid("reload");
    });
    //搜索回车事件
    $("body").keydown(function () {
        var e = window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == "13") {//keyCode=13是回车键
            $('#searchIcon').click();
        }
    });


    function resetExport(){
        $(".all-result").removeClass("export-style-active");
        $(".icon-a_export_all_text").removeClass("font-active");
        $(".all-result .export-title").removeClass("font-active");
        $(".high-score").removeClass("export-style-active");
        $(".icon-a_export_highest_text").removeClass("font-active");
        $(".high-score .export-title").removeClass("font-active");
        $(".all-result-prompt").hide();
        $(".high-score-prompt").hide();
        $(".export-prompt").hide();
        $(".export-btn").removeAttr("data-dismiss");
    }

    //导出当前考生成绩
    $(".exportBtn_results").click(function (e) {
        resetExport();
        $('#exportModal').modal({
            backdrop: "static",
            keyboard: false
        });
    });

    $(".all-result").click(function(){
        $(".export-prompt").hide();
        $(this).addClass("export-style-active");
        $(".icon-a_export_all_text").addClass("font-active");
        $(".all-result .export-title").addClass("font-active");
        $(".high-score").removeClass("export-style-active");
        $(".icon-a_export_highest_text").removeClass("font-active");
        $(".high-score .export-title").removeClass("font-active");
        $(".all-result-prompt").show();
        $(".high-score-prompt").hide();
    })
    $(".high-score").click(function(){
        $(".export-prompt").hide();
        $(this).addClass("export-style-active");
        $(".icon-a_export_highest_text").addClass("font-active");
        $(".high-score .export-title").addClass("font-active");
        $(".all-result").removeClass("export-style-active");
        $(".icon-a_export_all_text").removeClass("font-active");
        $(".all-result .export-title").removeClass("font-active");
        $(".high-score-prompt").show();
        $(".all-result-prompt").hide();
    })
    $(".export-btn").click(function(){
        var user_name = $("input[name=name_search]").val();
        var dep_id = $("input[name=dep_search]").val();
        var is_grade = $("input[name=grade_search]").val();
        var score_left = $("input[name=min_score_search]").val();
        var score_right = $("input[name=max_score_search]").val();
        var is_pass = $("input[name=pass_search]").val();
        var start_time = $("input[name=start_time_search]").val();
        var end_time = $("input[name=end_time_search]").val();
        var verify_status = $("input[name=verify_status_search]").val();
        var dataForm = "examInfoId=" + exam_info_id + "&userName=" + user_name + "&depId=" + dep_id +
            "&isGrade=" + is_grade + "&scoreLeft=" + score_left + "&scoreRight=" + score_right +
            "&isPass=" + is_pass + "&startTime=" + start_time + "&endTime=" + end_time + "&examVerifyStatus=" + verify_status;

        //获取表中是否有选中行
        var selectList = $("#grid-data").bootgrid("getSelectedRows");
        if (selectList.length != 0){
            dataForm += "&examResultIds=" + selectList.join(",");
        }
        if($(".all-result").hasClass("export-style-active")==false&&$(".high-score").hasClass("export-style-active")==false){
            $(".export-prompt").show();
        }
        if($(".all-result").hasClass("export-style-active")){
            $(".export-btn").attr("data-dismiss","modal");
            $.ajax({
                type: 'GET',
                cache: false,
                headers: { "cache-control": "no-cache" },
                dataType: "json",
                url: '/admin/results/import/',
                data: dataForm+"&downloadId=0"+ "&confirmExaminees=0",
                success: function(msg) {
                    $('#result-exportPaperModal').modal({
                        backdrop: "static",
                        keyboard: false
                    });
                }
            });
        }
        if($(".high-score").hasClass("export-style-active")){
            $(".export-btn").attr("data-dismiss","modal")
            $.ajax({
                type: 'GET',
                cache: false,
                headers: { "cache-control": "no-cache" },
                dataType: "json",
                url: '/admin/results/import/',
                data: dataForm+"&downloadId=1"+ "&confirmExaminees=0",
                success: function(msg) {
                    $('#result-exportPaperModal').modal({
                        backdrop: "static",
                        keyboard: false
                    });

                }
            });
        }
    })


    //导出当前考生答案
    $(".exportBtn_answer").click(function (e) {
        var user_name = $("input[name=name_search]").val();
        var dep_id = $("input[name=dep_search]").val();
        var is_grade = $("input[name=grade_search]").val();
        var score_left = $("input[name=min_score_search]").val();
        var score_right = $("input[name=max_score_search]").val();
        var is_pass = $("input[name=pass_search]").val();
        var start_time = $("input[name=start_time_search]").val();
        var end_time = $("input[name=end_time_search]").val();
        var verify_status = $("input[name=verify_status_search]").val();
        var dataForm = "examInfoId=" + exam_info_id + "&userName=" + user_name + "&depId=" + dep_id +
            "&isGrade=" + is_grade + "&scoreLeft=" + score_left + "&scoreRight=" + score_right +
            "&isPass=" + is_pass + "&startTime=" + start_time + "&endTime=" + end_time + "&examVerifyStatus=" +verify_status;

        if(dataForm != ""){
            var dialogTip = "";//导出提示语
            //获取表中是否有选中行
            var selectList = $("#grid-data").bootgrid("getSelectedRows").reverse();//解决导出倒序问题;
            if (selectList.length == 0){
                dialogTip = "请确认是否导出全部考生的答案？";
            }else {
                dialogTip = "请确认是否导出当前选中考生的答案？";
                dataForm += "&examResultIds=" + selectList.join(",");
            }
            BootstrapDialog.show({
                title: "导出考生答案",
                cssClass: "export-dialog",
                message: dialogTip,
                buttons: [
                    {
                        cssClass: "export-btn-no",
                        label: "取消",
                        action: function(dialogItself) {
                            dialogItself.close();
                        }
                    },
                    {
                        cssClass: "export-btn-yes",
                        label: "确定",
                        action: function(dialogItself) {
                            dialogItself.close();
                            $.ajax({
                                type: 'GET',
                                cache: false,
                                headers: { "cache-control": "no-cache" },
                                dataType: "json",
                                url: '/admin/answers/download/?' + dataForm,
                                success: function(msg) {
                                    $('#answer-exportPaperModal').modal({
                                        backdrop: "static",
                                        keyboard: false
                                    });
                                }
                            });
                        }
                    }
                ]
            });
        }

    });

    //导出当前考生答卷
    $(".exportBtn_paper").click(function (e) {
        var user_name = $("input[name=name_search]").val();
        var dep_id = $("input[name=dep_search]").val();
        var is_grade = $("input[name=grade_search]").val();
        var score_left = $("input[name=min_score_search]").val();
        var score_right = $("input[name=max_score_search]").val();
        var is_pass = $("input[name=pass_search]").val();
        var start_time = $("input[name=start_time_search]").val();
        var end_time = $("input[name=end_time_search]").val();
        var verify_status = $("input[name=verify_status_search]").val();
        var dataForm = "examInfoId=" + exam_info_id + "&userName=" + user_name + "&depId=" + dep_id +
            "&isGrade=" + is_grade + "&scoreLeft=" + score_left + "&scoreRight=" + score_right +
            "&isPass=" + is_pass + "&startTime=" + start_time + "&endTime=" + end_time
            + "&examVerifyStatus=" +verify_status;

        if(dataForm!=""){
            var dialogTip = "";//导出提示语
            //获取表中是否有选中行
            var selectList = $("#grid-data").bootgrid("getSelectedRows").reverse();//解决导出倒序问题;
            if (selectList.length == 0){
                dialogTip = "请确认是否导出全部考生的答卷？";
            }else {
                dialogTip = "请确认是否导出当前选中考生的答卷？";
                dataForm += "&examResultIds=" + selectList.join(",");
            }
            BootstrapDialog.show({
                title: "导出考生答卷",
                cssClass: "export-dialog",
                message: dialogTip,
                buttons: [
                    {
                        label: "取消",
                        cssClass: "export-btn-no",
                        action: function(dialogItself) {
                            dialogItself.close();
                        }
                    },
                    {
                        label: "确定",
                        cssClass: "export-btn-yes",
                        action: function(dialogItself) {
                            dialogItself.close();
                            $.ajax({
                                type: 'GET',
                                cache: false,
                                headers: { "cache-control": "no-cache" },
                                dataType: "json",
                                url: '/exam/result/batch_export_pdf/?' + dataForm,
                                success: function(msg) {
                                    if(!msg.success){
                                        alert(msg.desc);
                                        return false;
                                    }
                                    $('#paper-exportPaperModal').modal({
                                        backdrop: "static",
                                        keyboard: false
                                    });
                                    var time = msg.bizContent.countTimeUnConsume;
                                    $("span.export-minutes").text(time);
                                }
                            });

                        }
                    }
                ]
            });
        }
    });

    // 导出未参考人员
    $(".exportBtn_absence").click(function (e) {
        if(skip_exam=="1"){
            alert("免登录考试没有未参考人员！");
            return;
        }else if(skip_exam=="0"){
            // $("#loading").show();
                BootstrapDialog.show({
                    title: "导出未参考人员",
                    cssClass: "export-dialog",
                    message: "请确认是否需要导出本场考试全部未参考人员？",
                    buttons: [
                        {
                            label: "取消",
                            cssClass: "export-btn-no",
                            action: function(dialogItself) {
                                dialogItself.close();
                            }
                        },
                        {
                            label: "确定",
                            cssClass: "export-btn-yes",
                            action: function(dialogItself) {
                                dialogItself.close();
                                $.ajax({
                                    type: 'GET',
                                    cache: false,
                                    headers: { "cache-control": "no-cache" },
                                    dataType: "json",
                                    url: '/admin/results/export_absence/?examInfoId=' + exam_info_id,
                                    success: function(msg) {
                                        $('#people-exportPaperModal').modal({
                                            backdrop: "static",
                                            keyboard: false
                                        });

                                    }
                                });

                            }
                        }
                    ]
                });

        }

    });

    //修改考试认证状态
    $("#verifyStatusConfirm").click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        var examResultsId = $(this).attr("data-id");

        $.ajax({
            type: "get",
            cache: false,
            headers: { "cache-control": "no-cache" },
            dataType: "json",
            url: "/admin/update/exam_verify_status/",
            data: "examResultsId=" + examResultsId,
            success: function (msg) {
                if(msg.success){
                    $("#verifyStatusModal").modal('hide');
                    $("#grid-data").bootgrid("reload");
                }
            }
        })
    })

});

//显示考试对话框
function showSelType(obj) {
    //selTypeModal.location.href = "/admin/result/score_sel_exam";
    $('#typeModal').modal({
        backdrop: "static",
        keyboard: false
    });
}

//关闭考试对话框
function hideSelType(obj) {
    $('#typeModal').modal('hide');
}

//删除方法
function delDate(id) {
    BootstrapDialog.show({
        title: "",
        cssClass: 'batch-del',
        message: "确定要删除选中的成绩吗？",
        buttons: [{
            cssClass: 'batch-del-no',
            label: "取消",
            action: function (dialogItself) {
                dialogItself.close();
            }
        },{
            label: "确认",
            cssClass: 'batch-del-yes',
            action: function (dialogItself) {
                dialogItself.close();
                var dataForm = "ids=" + id;
                $.ajax({
                    type: "get",
                    cache: false,
                    headers: { "cache-control": "no-cache" },
                    dataType: "json",
                    url: "/admin/results/del/",
                    data: dataForm,
                    success: function (msg) {
                        if (msg.success == true) {
                            if (check_subsidiary(domain)) {
                                result_ids = id.substring(0, id.length - 1);
                                result_id_list = result_ids.split(",");
                                post_del_result(result_id_list);
                            };
                            window.location.href = "/admin/result/mgr_new?examInfoId=" + exam_info_id;
                            $("#grid-data").bootgrid("reload");
                        } else {
                            alert("操作失败，请联系管理员！");
                        }
                    }
                });
            }
        }]
    });
}


//补考方法
function addExit(examResultId) {
    BootstrapDialog.show({
        title: "确定设置为补考？",
        cssClass: 'add_show',
        message: "补考会为选中的考生增加一次答题次数，是否继续?" +
            "(每条成绩只可操作一次，补考后可通过最新成绩再次设置补考)",
        buttons: [{
            label: "取消",
            action: function (dialogItself) {
                dialogItself.close();
            }
        },{
            label: "确认",
            action: function (dialogItself) {
                dialogItself.close();
                var dataForm = "examResultId=" + examResultId;
                $.ajax({
                    type: "get",
                    cache: false,
                    headers: { "cache-control": "no-cache" },
                    dataType: "json",
                    url: "/admin/make_up/exam/",
                    data: dataForm,
                    success: function (msg) {
                        if (msg.success == true) {
                            alert("操作成功");
                            dialogItself.close();
                            $("#grid-data").bootgrid("reload");
                            $('#addexitBtn').addClass('disable').prop('disabled', true);
                        } else {
                            alert("操作失败，请联系管理员！");
                        }
                    }
                });
            }
        }]
    });
}

//批量补考
$("body").on("click", "#addexitBtn", function (e) {
    e.stopPropagation();
    e.preventDefault();

    if( !$("tbody tr").hasClass('active') ) {
        alert("请选择要补考的考生！");
        return;
    }else {
        var examResultId = "";
        $("tbody tr.active").each(function (index,element) {
            examResultId += element.lastChild.childNodes[1].attributes["examResultId"].value + "," ;
        })
        addExit(examResultId);
    }
});

//编辑考试认证状态
function verifyStatusEdit(id, name) {
    $("#verifyName").text(name);
    $("#verifyStatusConfirm").attr("data-id", id);
    $("#verifyStatusModal").modal();
}

//显示修改部门对话框
function showSelDept(obj,userId){
	updateDeptModal.location.href = "/admin/tree/user_sel_dep/"+userId;
	$('#deptModal').modal({
		backdrop:"static",
		keyboard:false
	});
}
//关闭修改部门对话框
function hideSelChangeDept(obj){
	$('#deptModal').modal('hide');
}

//显示选择部门对话框
function showSelDep(obj) {
    // selDepModal.location.href = "/admin/tree/user_sel_dep/00000";
    selDepModal.location.href = "/admin/tree/user_sel_dep_multi/00000";
    $('#depModal').modal({
        backdrop: "static",
        keyboard: false
    });
}
//关闭选择部门对话框
function hideSelDept(obj) {
    $('#depModal').modal('hide');
}

//接受选择部门数据
function selDept(obj){
    var idStr = "";
    var nameStr = "";
    $(obj).each(function(index , element) {
        if (index != obj.length - 1) {
            idStr += element.id + ",";
            nameStr += element.name + ",";
        } else {
            idStr += element.id;
            nameStr += element.name;
        }
    });
    $("input[name=dep_id]").val(idStr);
    $("#selDepLink span").text(nameStr);
}
// function selDept(id, name) {
//     $("input[name=dep_id]").val(id);
//     $("#selDepLink span").text(name);
// }

//恢复考试
function recoverExam(id,exam_info_id) {
    BootstrapDialog.show({
        cssClass: 'batch-submit',
        title: "恢复考试",
        message: "恢复考试能够将考生已经提交的试卷恢复到提交前的状态，考生能够接着提交前的试卷继续答题，正在考试的" +
            "考生试卷将无法被退回。请确认是否将选中的考生进行恢复考试操作。",
        buttons: [{
            cssClass: 'batch-submit-no',
            label: "取消",
            action: function (dialogItself) {
                dialogItself.close();
            }
        },{
            cssClass: 'batch-submit-yes',
            label: "确认",
            action: function (dialogItself) {
                dialogItself.close();
                var dataForm = "examResultsIds=" + id+"&examInfoId="+exam_info_id;
                $.ajax({
                    type: "post",
                    cache: false,
                    headers: { "cache-control": "no-cache" },
                    dataType: "json",
                    url: "/exam/back_exam_results/",
                    data: dataForm,
                    success: function (msg) {
                        if(msg.success) {
                            alert("操作成功！");
                            window.location.reload();
                        } else {
                            recoverExamFail(msg.bizContent);
                        }
                    }
                });
            }
        }]
    });
}

//恢复考试成功
function recoverExamSuccess(message) {
    BootstrapDialog.show({
        title: "",
        message: message,
        buttons: [{
            label: "知道了",
            action: function (dialogItself) {
                dialogItself.close();
            }
        }]
    });
}

//恢复考试失败
function recoverExamFail(message) {
    BootstrapDialog.show({
        title: "无法恢复考试",
        message: message,
        buttons: [{
            label: "知道了",
            action: function (dialogItself) {
                dialogItself.close();
            }
        }]
    });
}



//检查是否是慧科教育的子公司
function check_subsidiary(company_domain) {
    domain_split = company_domain.split(".");
    if (domain_split[1] == "gaoxiaobang" && domain_split[2] == "com") {
        return true;
    }
    else {
        return false;
    }
}

//往慧科教育推送考试信息
var num = 0;
var post_del_result = function (result_ids) {
    /*
    company_id = domain.split(".")[0];
    create_user_id = user_name.split("@")[0];
    */

    var post_data = {
        "exam_id": exam_info_id,
        "result_ids": result_ids
    };
    $.ajax({
        type: "post",
        url: "http://restful.gaoxiaobang.com/exam/student/api?jwt=" + jwt,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(post_data),
        success: function (msg) {
            if (msg.status == 0) {
                //alert("推送成功");
            }
            else {
                alert("推送失败，请联系管理员");
                num = num + 1;
                if (num < 3) {
                    post_del_result(result_ids);
                }
            }
        }
    })
}
