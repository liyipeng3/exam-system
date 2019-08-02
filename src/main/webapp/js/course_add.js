// 是否为新增课程，默认false
var isNewCourse = false;

$(document).ready(function () {
    //点击课程名称选中全部内容
    $("input[name=courseName]").on("click", function () {
        $(this).select();
    });
    // 初始化laydate插件
    var dateFrom = {
        elem: "#dateFrom",
        format: "YYYY-MM-DD hh:mm",
        min: "2010-01-01 00:00",
        max: "2030-01-01 00:00",
        istime: true
    };
    var dateTo = {
        elem: "#dateTo",
        format: "YYYY-MM-DD hh:mm",
        min: "2010-01-01 00:00",
        max: "2030-01-01 00:00",
        istime: true
    };
    laydate(dateFrom);
    laydate(dateTo);
    //选择课件
    $("#selFile").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        showSelFile(this);
    });

    //点击添加课件
    $("#addclassBtn").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        showSelFile(this);
    });


    //选择课程分类
    $("#selCourse").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        showSelCourse(this);
    });


    //选择人员
    $("#selUserLink").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        showSelUser(this);
    });

    //点击更多显示全部部门数据
    $("body").on("click", "#moreDepInfo", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $("#moreDepInfo").hide();
        $("#partDepInfo").show();
        $(".depsName").css("height", "auto");
        $(".depsName").css("overflow", "auto");
    });
    //点击部门收起
    $("body").on("click", "#partDepInfo", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $("#moreDepInfo").show();
        $("#partDepInfo").hide();
        $(".depsName").css("height", "25px");
        $(".depsName").css("overflow", "hidden");
    });
    //点击更多显示全部人员数据
    $("body").on("click", "#moreUserInfo", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $("#moreUserInfo").hide();
        $("#partUserInfo").show();
        $(".usersName").css("height", "auto");
        $(".usersName").css("overflow", "auto");
    });
    //点击人员收起
    $("body").on("click", "#partUserInfo", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $("#moreUserInfo").show();
        $("#partUserInfo").hide();
        $(".usersName").css("height", "25px");
        $(".usersName").css("overflow", "hidden");
    });

    //批量录入人员
    $("#selUsersLink").click(function () {
        //显示模态框
        $("#inputUsersModal").modal("show");
    });

    $("#inputUsersModal textarea").bind("input propertychange", function () {
        var _this = $(this);
        var _val = _this.val().replace(/\r\n/ig, " ").replace(/\r/ig, " ").replace(/\n/ig, " ");
        _val = _val.replace(/\s+/g, " ");
        _this.val(_val);
    });

    //确定
    $("#saveUsers").click(function () {
        var _input_str = $("#inputUsersModal textarea").val();
        if (_input_str == "") {
            return false;
        } else if (_input_str.charAt(_input_str.length - 1) == " ") {//如果最后一个字符为空字符串
            _input_str = _input_str.substring(0, _input_str.length - 1);
        }
        var _account_arr = _input_str.split(" ");//数组
        var _account_str = _account_arr.join("@" + domain + ",");//账号后拼接@+公司id+","
        _account_str = _account_str + "@" + domain;//给最后一项拼接@+公司id
        $.ajax({
            type: "POST",
            cache: false,
            headers: {"cache-control": "no-cache"},
            dataType: "json",
            url: "/admin/batch_addition",
            data: {
                examinee: _account_str,
                departments: $(".hasSelectedDeptIds").val(),//input[name=deptIds]//已选部门
                existingIds: $(".hasSelectedUserIds").val()//input[name=userIds]//已选人员
            },
            success: function (msg) {
                if (msg.success) {
                    $("#inputUsersModal").modal("hide");
                    $("#inputUsersModal textarea").val("");
                    $("#inputUsersResult .success .info span").text(msg.bizContent.successCount);
                    $("#inputUsersResult .warning .info span").text(msg.bizContent.existCount);
                    $("#inputUsersResult .fail .info span").text(msg.bizContent.failureCount);
                    $("#inputUsersResult").modal("show");
                    //拼接已经选择的考生id
                    var _namesArray = [],
                        _userIds_str = $(".hasSelectedUserIds").val(),
                        _users = msg.bizContent.users;//返回的用户信息列表
                    if (_users.length > 0) {
                        for (var i = 0; i < _users.length; i++) {
                            _namesArray.unshift([_users[i].id, _users[i].surname.toString()]);
                            _userIds_str += (_users[i].id + ",");
                        }
                        $(".hasSelectedUserIds").val(_userIds_str);
                        selMuchUser(_namesArray);
                    }
                }
            }
        });
    });

    //清空可考人员
    $("#clearUsers").click(function () {
        BootstrapDialog.show({
            title: "",
            message: "是否确定清空全部可考人员？",
            buttons: [{
                label: "否",
                action: function (dialogItself) {
                    dialogItself.close();
                }
            }, {
                label: "是",
                cssClass: 'btn-primary',
                action: function (dialogItself) {
                    dialogItself.close();
                    $(".userNameLabel").html("");//清空label
                    $(".hasSelectedUserIds").val("");//清空input
                    $("#clearUsers").attr("disabled", true);
                }
            }]
        });
    });

    //remove keywords label of stuff
    $("body").on("click", ".glyphicon-remove", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).parent().remove();
        $("input[name=userIds]").val(join_user_id());
        if ($(".userNameLabel").html().replace(/\s*/g, "") == '') {
            $("#clearUsers").attr("disabled", true);
        }
    });

    // change checked status of user_pay_confirm
    $("input[name=userPayConfirm]").change(function () {
        if ($(this).val() == 1) {
            $(this).parents(".form-row").find(".input-group").hide();
            $(this).val(0);
        } else {
            $(this).parents(".form-row").find(".input-group").show();
            $(this).val(1);
        }
    });

    // change checked status of study_to_exam
    $("input[name=studyToExam]").change(function () {
        if ($(this).val() == 1) {
            $(".save").show();
            $(".next").hide();
            $(this).val(0);
        } else {
            $(".save").hide();
            $(".next").show();
            $(this).val(1);
        }
    });

    // saveCourse
    $("#saveCourse").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        if (checkForm()) {
            isNewCourse = true;
            $(this).attr("disabled", "disabled");
            $("#loading").show();
            saveCourse(false, '/html/study/course_mgr', 'course');
        }
    });

    function ajax_post(url, data) {
        $.ajax({
            url: url,
            method: "POST",
            data: JSON.stringify(data),
            dataType: 'text',
            contentType: "application/json;charset=UTF-8",
            success: function (msg) {
                console.log(msg);
            },
            error: function (msg) {
                console.log(msg);
            }
        });
    }

    // jump to relate a exam
    $("#nextStep").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        if (checkForm()) {
            isNewCourse = true;
            $(this).attr("disabled", "disabled");
            $("#loading").show();
            saveCourse(true, "/course/add_exam/");
        }
    });

    // updateCourse
    $("#updateCourse").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        if (checkForm()) {
            $(this).attr("disabled", "disabled");
            $("#loading").show();
            saveCourse(false, '', 'course');
        }
    });

    // jump to relate a exam
    $("#nextUpdateStep").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        if (checkForm()) {
            $(this).attr("disabled", "disabled");
            $("#loading").show();
            saveCourse(true, "/course/update_exam/");
        }
    });

    // after creat a course jump to course manager
    $("#okModal .btn-div .btn-default").click(function () {
        window.location.href = "/course/course_mgr/";
    });

    // 上传课件 saveFileDialog
    $('#uploadFile').click(function () {
        window.open("/admin/file/manager");
    });
});

/**********These are functions***********/

/****these are selfile****/
// 显示选择课件对话框
function showSelFile() {
    if (KSXRIGHTS.allowFileManager != 1) {
        $('#uploadFile').hide();
    }
    fileIdsFn();
    selFileModal.location.href = "/course/tree/file_sel/";
    $('#fileModal').modal({
        backdrop: "static",
        keyboard: false
    });
}

// 关闭选择课件对话框
function hideSelFile(obj) {
    $('#fileModal').modal('hide');
}


// 删除单个课件
function removeFile(_this) {
    $(_this).parent().remove();
    fileIdsFn();
    if ($(".selFilename").length == 0) {
        $('button#addclassBtn').css('display', 'none');
        $('button#selFile').css('display', 'block');
    }
}


/****end*****/

/*****these are sel_course_class******/
// 显示选择课程分类对话框
function showSelCourse() {
    selCourseModal.location.href = "/course/tree/course_classify_sel/";
    $('#courseModal').modal({
        backdrop: "static",
        keyboard: false
    });
}

// 关闭选择课程分类对话框
function hideSelCourse(obj) {
    $('#courseModal').modal('hide');
}

// accpet course class data
function selCourse(id, name) {
    $("input[name=courseClass]").val(id);
    $("#selCourse").text(name);
}

/*****end*******/


/******these are sel_dep*******/
//显示选择部门对话框
function showSelGroup(obj) {
    selGroupModal.location.href = "/admin/tree/exam_sel_dep/";
    $('#groupModal').modal({
        backdrop: "static",
        keyboard: false
    });
}

//关闭选择部门对话框
function hideSelGroup(obj) {
    $('#groupModal').modal('hide');
}

//接受选择部门数据
function selGroup(id, depsArray) {
    $("input[name=deptIds]").val(id);
    $("#depName").children().remove();
    $.each(depsArray, function (index, value) {
        $("#depName").append('<span class="label label-default" style="display:inline-block"><span class="depidItem" style="display:none">' + value[0] + '</span><span class="depnameItem">' + value[1] + '</span></span>');
    });
}

/*******end********/

/******these are sel_user**********/
//显示选择人员对话框
function showSelUser(obj) {
    var commit_ids = join_user_id();
    selUserModal.location.href = "/admin/addExam/selUser?commit_ids=" + commit_ids;
    $('#userModal').modal({
        backdrop: "static",
        keyboard: false
    });
}

//关闭选择人员对话框
function hideSelUser(obj) {
    $('#userModal').modal('hide');
}

//接受选择人员数据
function selMuchUser(namesArray) {
    $.each(namesArray, function (index, value) {
        if (namesArray[index] != undefined) {
            $("#usersName").append('<span class="label label-default" style="display:inline-block"><span class="useridItem" style="display:none">' + value[0] + '</span><span class="surnameItem">' + value[1] + '</span><span class="glyphicon glyphicon-remove"></span></span>');
        }
    });
    $("input[name=userIds]").val(join_user_id());

    if ($(".userNameLabel").html() != '') {
        $("#clearUsers").removeAttr("disabled");
    }
}

//将指定人员的id拼装成字符串
function join_user_id() {
    var usernameLabels = $("#usersName span .useridItem");
    var examUsers = '';
    for (var i = 0; i < usernameLabels.length; i++) {
        examUsers = examUsers + usernameLabels[i].textContent.trim() + ",";
    }
    ;
    examUsers = examUsers.substr(0, examUsers.length - 1);
    return examUsers;
}

/*******end********/



// check form information
function checkForm() {
    fileIdsFn();
    if ($("input[name=courseName]").val() == "") {
        alert('请填写"课程名称"！');
        return false;
    }
    var endTime = new Date($("#dateTo").val())
    var startTime = new Date($("#dateFrom").val())
    if ($("input[name=courseStartTime]").val() == "" || $("input[name=courseEndTime]").val() == "" || endTime <= startTime) {
        alert('请填写课程时间，并保证结束时间大于开始时间');
        return false;
    }
    if ($("input[name=courseFile]").val() == "") {
        alert("请选择所用课件！");
        return false;
    }
    if ($("input[name=courseClass]").val() == "") {
        alert("请选择课程分类！");
        return false;
    }
    //验证不是全员参与的情况下，是否选择了人员和部门
    var setProcess = $('input[name=setProcess]').val();
    var isSelectAll = $('input[name=joinStatus]:checked').val();
    if (setProcess == 0 && isSelectAll == 1) {

        if ($.trim($('#depName').html()) === '' && $.trim($('#usersName').html()) === '') {

            alert(' 请选择参与部门/人员！');
            return false
        }
    }
    //付费金额判断
    if ($('.pay-money-switch').hasClass('switch-on')) {

        var money = $('.pay-money-num input').val();

        if (!(money.match(/^([1-9][0-9]*)+(\.[0-9]{1,2})?$/))) {

            alert('付费金额输入有误，不得小于1元，最多支持两位小数');
            return false
        }
    }
    if ($(".isProcess").hasClass("switch-on")) {
        if (!($("input[name=learnTime]").val().match(/^[0-9][0-9]*$/))) {
            alert("最短学习时长不支持小数！");
            return false
        }
    }

    return true;
}

// save course(creat and update)
function saveCourse(nextStep, jump_url, type) {

    var dataForm = $('#courseForm').serializeArray();
    var data = {};
    $(dataForm).each(function (index, obj) {
        data[obj.name] = obj.value;
    });

    ajax_post("/study/add_course", data);
    window.location.href = jump_url;
}

$("#cannotLinkModal .btn").click(function () {
    window.location.href = "/html/course/course_mgr";
})

//计算课件id
function fileIdsFn() {
    var fileIds = "";
    for (var i = 0; i < $(".selFilename").length; i++) {
        if (i == $(".selFilename").length - 1) {
            fileIds += $(".selFilename:eq(" + i + ") .removeFile").attr("data-id");
        } else {
            fileIds += $(".selFilename:eq(" + i + ") .removeFile").attr("data-id") + ",";
        }
    }
    $(".courseFile").val(fileIds);
}

//水印预览
$(".isShowWatermark").change(function () {
    var _this = $(this);
    var _preview = $("#watermarkPreview");
    if (_this.is(":checked")) {
        _preview.removeClass("hidden");
    } else {
        _preview.addClass("hidden");
    }
});
var watermarkImg = "";
$("#watermarkPreview").click(function () {
    var _this = $(this);
    if (watermarkImg != "") {
        $("#watermarkPreviewModal").modal('show');
    } else {
        $.ajax({
            type: "GET",
            cache: false,
            headers: {"cache-control": "no-cache"},
            dataType: "json",
            url: "/course/get_watermark",
            success: function (msg) {
                if (msg.success) {
                    watermarkImg = msg.bizContent;
                    $("#watermarkPreviewModal .modal-body").css({
                        "background-image": "url(" + msg.bizContent + ")"
                    });
                    $("#watermarkPreviewModal").modal('show');
                } else {
                    alert("水印预览失败，请重试");
                }
            }
        });
    }
});