var customArr = [];//保存自定义设置
var customPageCount = 10;//保存每页显示项数
var firstLoad = true;//是否第一次加载，第一次加载的话不保存cookie
$(document).ready(function() {
    //日历多语言
    var datePikadayLang =  {
    previousMonth : '上一月',
    nextMonth     : '下一月',
    months        : ['一月','二月','三月','四月',
                         '五月','六月','七月','八月',
                         '九月','十月','十一月','十二月'],
    weekdays      : ['周日','周一','周二','周三','周四','周五','周六'],
    weekdaysShort : ['周日','周一','周二','周三','周四','周五','周六']
    };

    //初始化日历控件
    var $dateForm = $('#dateFrom').pikaday({
        firstDay: 1,
        format: 'YYYY-MM-DD',
        minDate: new Date('2000-01-01'),
        maxDate: new Date('2020-12-31'),
        yearRange: [2000,2030],
        i18n: datePikadayLang
    });
    var $dateTo = $('#dateTo').pikaday({
        firstDay: 1,
        format: 'YYYY-MM-DD',
        minDate: new Date('2000-01-01'),
        maxDate: new Date('2020-12-31'),
        yearRange: [2000,2030],
        i18n: datePikadayLang
       });

    //判断是是否有cookie
    var cookieName = "admin_course_mgr";
    //判断搜索条件
    if(getCookie(cookieName)){
        customArr = getSearchCookie(cookieName,"customStr").split("+");
        //判断自定义设置
        if(customArr.length > 0 && customArr[0] != ""){
            $("#grid-data th").each(function(index, element){
                var num = $.inArray($(this).attr("data-column-id"), customArr);
                if(num > -1){
                    $(this).attr("data-visible", "true");
                }else {
                    $(this).attr("data-visible", "false");
                }
            });
        }
        //判断是否保存了每页显示项目数
        if(getSearchCookie(cookieName,"customPageCount")){
            customPageCount = getSearchCookie(cookieName,"customPageCount");
        }
    }
    // inital grid-data
    $("#grid-data").bootgrid({
        ajax: true,
        ajaxSettings: {
            method:"POST",
            cache: false
        },
        url: "/course/course_mgr_grid/",
        selection: true,
        multiSelect: true,
        padding:1,
        navigation: 2,
        post: function(){
                    var sortOrder = $("#grid-data").bootgrid("getSortDictionary");
                    var sortKey,sortOrder;
                    var course_name = $("input[name=course_name]").val();
                    var course_status = $("select[name=status]").val();
                    var course_class = $("input[name=course_class]").val();
                    var course_start_time = $("input[name=dateFrom]").val();
                    var course_end_time = $("input[name=dateTo]").val();
                    $.each(sortOrder, function (name, value) {
                        sortKey = name;
                        sortOrder = value;
                    });
                    return {
                        "sortKey": sortKey,
                        "sortOrder": sortOrder,
                        "courseName": course_name,
                        "courseStatus": course_status,
                        "courseClass": course_class,
                        "courseStartTime": course_start_time,
                        "courseEndTime": course_end_time
                    };
                },
        formatters: {
                        "relate":function(column,row) {
                            var icon='';
                            if(row.relateExam=="是"){
                                icon='<button data-growing-title="seeDetail" class="btn btn-default btn-size btn-function" courseId="'+row.id+'">查看</button>';
                            }else {
                                icon='-';
                            }
                            return icon;s
                        },
                        "link": function(column, row)
                        {
                            return "<a href='#' data-growing-title='updateCourse' class='icons8-edit table-oper-edit updateCourse' courseId='"+row.id+"' data-toggle=\"tooltip\" data-placement=\"top\" data-container=\"body\" title='编辑'></a>"+
                                "<a href='#' data-growing-title='linkCourse' class='icons8-attach linkCourse' courseId='"+row.id+"' data-toggle=\"tooltip\" data-placement=\"top\" data-container=\"body\" title='课程链接'></a>"+
                                "<a href='#' data-growing-title='removeCourse' class='icons8-trash-can table-oper-del removeCourse' courseId='"+row.id+"'data-toggle=\"tooltip\" data-placement=\"top\" data-container=\"body\" title='删除' ></a>";

                        }
                    }
    }).on("loaded.rs.jquery.bootgrid", function (e){
        if(!firstLoad) {
            //自定义设置
            customArr = [];
            $(".custom-settings input:checked").each(function (index, element) {
                customArr.push($(this).attr("name"));
            });
            //保存每页显示项目数目
            var cookieObj = {};
            cookieObj["customStr"] = customArr.join("+");
            cookieObj["customPageCount"] = $(".page-count-span").text().substring(2,4);
            setSearchCookie(cookieName, cookieObj);
        }
        firstLoad = false;
        // initial tooltip
        $('#grid-data [data-toggle="tooltip"]').tooltip({trigger:'hover'});
        $("#grid-data").colResizable({
            fixed:false,
            liveDrag:true,
            draggingClass:"dragging"
        });
    }).on("selected.rs.jquery.bootgrid", function (e){

        $(".toolbar-left-operation .inactive").removeClass("inactive").addClass("deactive").removeAttr("disabled");

    }).on("deselected.rs.jquery.bootgrid", function (e){
        var selectList = $("#grid-data").bootgrid("getSelectedRows");

        if(selectList.length==0){
            $(".toolbar-left-operation .deactive").removeClass("deactive").addClass("inactive").attr("disabled","disabled");
        }
    }).on("load.rs.jquery.bootgrid", function () {
        $(".toolbar-left-operation .deactive").removeClass("deactive").addClass("inactive").attr("disabled","disabled");
    });
    /*****高级搜索部分*****/
    //显示高级搜索
    $("body").on("click", ".advSearch", function(e) {
        $(".adv-search-box").toggle();
    });
    //隐藏高级搜索
    $("body").on("click", "#searchClose", function(e){
        $(".adv-search-box").hide();
    });
    //选择分类
    $("body").on("click", "#selCourse", function(e) {
        e.stopPropagation();
        e.preventDefault();
        showSelType(this);
    });


    //点击搜索
    $("body").on("click", "#searchIcon", function(e) {
        $("#grid-data").bootgrid("reload");
    });
    //点击搜索
    $("body").on("click", "#searchBtn", function(e) {
        e.stopPropagation();
        e.preventDefault();
        $("#grid-data").bootgrid("reload");
        $(".adv-search-box").hide();
    });
     //搜索回车事件
     $("body").keydown(function() {
         var e = window.event || arguments.callee.caller.arguments[0];
         if (e && e.keyCode == 13) {//keyCode=13是回车键
             $('#searchIcon').click();
         }
     });
    /****高级搜索部分结束******/

    /*****bootgrid related events********/
    //删除单个课程
    $("#grid-data").bootgrid().on("loaded.rs.jquery.bootgrid", function(){
    	$("#grid-data").bootgrid().find(".removeCourse").on("click", function(e){
            e.stopPropagation();
            e.preventDefault();
            var courseId = $(this).attr("courseId")+",";
            deleteCourse(courseId);
    	})
    });
    // 批量删除课程
    $("#delCourse").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        var select_rows=$("#grid-data").bootgrid("getSelectedRows");
        if(select_rows.length==0){
            alert("请选择要删除的课程！");
            return false;
        }
        var select_ids='';
        for (var i = 0; i < select_rows.length; i++) {
            select_ids+=select_rows[i]+',';
        }
        deleteCourse(select_ids);
    });

    // 打开课程链接
    $("#grid-data").bootgrid().on("loaded.rs.jquery.bootgrid", function(){
        $("#grid-data").bootgrid().find(".linkCourse").on("click", function(e){
            e.stopPropagation();
            e.preventDefault();
            if($(this).parents("td").prev().text()=='是'){ //根据表格判断是否关联自定义任务
                $('#cannotLinkModal').modal("show");
            } else{
                var courseId = $(this).attr("courseId");
                $.ajax({
                    type: 'POST',
                    cache: false,
                    headers: {"cache-control": "no-cache"},
                    dataType: "json",
                    url: "/course/link_info",
                    data: "courseId=" + courseId,
                    success: function (msg) {
                        if (msg.success) {
                            $("#trialExamBtn").html('<span class="try-exam">学一下</span>');
                            var notification = msg.bizContent.msgContent.split(',');
                            $('.notification .notificationContent').text(notification[0]);
                            $('.notification .notificationUrl').text(notification[1]);
                            showSelOk(courseId, msg.bizContent.courseLink, '', msg.bizContent.courseLink, 'course', 0);
                        } else {
                            alert(msg.desc);
                        }
                    },
                    error: function (error) {
                        alert('获取链接失败，请重试');
                    }
                })
            }
        })
    });

    //编辑课程
    $("#grid-data").bootgrid().on("loaded.rs.jquery.bootgrid", function(){
        $("#grid-data").bootgrid().find(".updateCourse").on("click", function(e){
            e.stopPropagation();
            e.preventDefault();
            var courseId = $(this).attr("courseId");
            window.open("/course/course_update/"+courseId);
        })
    });

    //编辑课程(关联考试的查看)
    $("#grid-data").bootgrid().on("loaded.rs.jquery.bootgrid", function(){
        $("#grid-data").bootgrid().find(".btn-function").on("click", function(e){
            e.stopPropagation();
            e.preventDefault();
            var courseId = $(this).attr("courseId");
            window.open("/course/update_exam/"+courseId);
        })
    });

});

/*******these are functions*********/
function deleteCourse(id) {
    BootstrapDialog.show({
        title: "确定删除所选择的课程",
        cssClass: "del-dialog",
        message: '若课程已关联自定义任务，无法取消关联！请前往任务页面移除该课程后，再取消关联。',
        buttons: [
            {
                cssClass: "del-btn-no",
                label: "取消",
                action: function(dialogItself) {
                    dialogItself.close();
                }
            },
            {
                cssClass: "del-btn-yes",
                label: "确定",
                action: function(dialogItself) {
                    dialogItself.close();
                    $.ajax({
                        type: "GET",
                        cache : false,
                        headers: { "cache-control": "no-cache" },
                        dataType: "text",
                        url: "/course/course_del/"+id,
                        success: function(msg){
                            msg = JSON.parse(msg);
                            if(msg.success){
                                $("#grid-data").bootgrid("reload");
                            }else if(msg.code == 33075) {
                                alert('该课程已关联自定义任务，无法删除！');
                            } else {
                                alert(msg.desc);
                            }
                            $("#loading").hide();
                        }
                    });
                }
            }
        ]
    });




    // if(confirm("确定删除所选择的课程？\u000d若课程已关联自定义任务，无法取消关联！请前往任务页面移除该课程后，再取消关联。")){
    //     $("#loading").show();
    //     $.ajax({
    //         type: "GET",
    //         cache : false,
    //         headers: { "cache-control": "no-cache" },
    //         dataType: "text",
    //         url: "/course/course_del/"+id,
    //         success: function(msg){
    //             msg = JSON.parse(msg);
    //             if(msg.success){
    //                 $("#grid-data").bootgrid("reload");
    //             }else if(msg.code == 33075) {
    //                 alert('该课程已关联自定义任务，无法删除！');
    //             } else {
    //                 alert(msg.desc);
    //             }
    //             $("#loading").hide();
    //         }
    //     });
    // }
}
// 选择课程分类
function showSelType(obj) {
    selTypeModal.location.href = "/course/tree/course_classify_sel/";
    $('#selTypeModal').modal({
        backdrop: "static",
        keyboard: false
    });
}

//管理课程分类
$('#courseClassify').click(function(){
    //显示选择分类对话框
    manageTypeFrame.location.href = "/course/tree/course_classify_sel_manage/";
    $('#manageTypeModal').modal({
        backdrop: "static",
        keyboard: false
    });
});

// 接收课程分类数据
function selCourse(id, name) {
    $("#selCourse").text(name);
    $("input[name=course_class]").val(id);
}

// 关闭课程分类modal
function hideSelCourse(){
    $('#selTypeModal').modal("hide");
}

// 关闭管理课程分类modal
function hideSelCourseManage(){
    $('#manageTypeModal').modal("hide");
}

// 复制考试链接
var clipboard = new Clipboard('.btn-copy');
clipboard.on('success', function(e) {
    alert("复制成功!");
});
clipboard.on('error', function(e) {
    alert("复制失败,请重试");
});

