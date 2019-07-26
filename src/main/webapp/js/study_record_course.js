$(document).ready( function() {
    // inital grid-data
    if(document.location.href.match(/courseId/)) {
        $("#grid-data").bootgrid({
            ajax: true,
            ajaxSettings: {
                method: "POST",
                cache: false
            },
            url: "/course/study_record/course_mgr_grid/",
            selection: true,
            multiSelect: true,
            padding: 1,
            navigation: 2,
            post: function () {
                var sortOrder = $("#grid-data").bootgrid("getSortDictionary");
                var sortKey, sortName;
                var surname = $("input[name=search_surname]").val();
                var dep_id = $("input[name=search_dep]").val();
                var score_left = $("input[name=search_score_left]").val();
                var score_right = $("input[name=search_score_right]").val();
                $.each(sortOrder, function (name, value) {
                    sortKey = name;
                    sortName = value;
                });
                return {
                    "sort": sortKey,
                    "sortName": sortName,
                    "courseId": course_id,
                    "surname": surname,
                    "depIds": dep_id,
                    "scoreLeft": score_left,
                    "scoreRight": score_right,
                };
            },
            formatters: {

                "link": function (column, row) {
                    return "<a href='#' data-growing-title='removeCourse' class='icons8-trash-can removeCourse' courseId='" + row.id + "' data-toggle=\"tooltip\" data-placement=\"top\" data-container=\"body\" title='删除'><em></em></a>";
                }
            }
        }).on("loaded.rs.jquery.bootgrid", function () {
            // initial tooltip
            $('#grid-data [data-toggle="tooltip"]').tooltip();
            $("#grid-data").colResizable({
                fixed: false,
                liveDrag: true,
                draggingClass: "dragging"
            });
        }).on("selected.rs.jquery.bootgrid", function (e) {

            $(".toolbar-left-operation .inactive").removeClass("inactive").addClass("deactive").removeAttr("disabled");

        }).on("deselected.rs.jquery.bootgrid", function (e) {
            var selectList = $("#grid-data").bootgrid("getSelectedRows");

            if (selectList.length == 0) {
                $(".toolbar-left-operation .btn.deactive, .toolbar-left-operation .dropdown-menu.deactive").removeClass("deactive").addClass("inactive").attr("disabled", "disabled");
            }
        }).on("load.rs.jquery.bootgrid", function () {
            $(".toolbar-left-operation .btn.deactive, .toolbar-left-operation .dropdown-menu.deactive").removeClass("deactive").addClass("inactive").attr("disabled", "disabled");
        });
    }

    // 选择课程
    $("body").on("click", "#selCourse", function(e) {
        e.stopPropagation();
        e.preventDefault();
        showSelCourse(this);
    });
    //判断是否已经有了课程数据，如果没有，进入页面时弹出选择弹框
    if(!document.location.href.match(/courseId/))
    {
        $("#selCourse").click();
    }

    //选择部门
   $("body").on("click", "#selDepLink", function(e){
       e.stopPropagation();
       e.preventDefault();
       showSelDep(this);
   });

   //选择考试
   $("body").on("click", "#selTypeLink", function(e) {
       e.stopPropagation();
       e.preventDefault();
       showSelType(this);
   });
   //全选
   $(".checkAll").change(function(e) {
       if($(this).is(":checked")){
           $(".checkSimple").each(function(index, element) {
               $(this).attr("checked" , "checked");
           });
       }else{
           $(".checkSimple").each(function(index, element) {
               $(this).removeAttr("checked");
           });
       }
   });
   // 导出所有学习记录
   $("body").on("click","#exportBtn",function(e) {
       e.stopPropagation();
       e.preventDefault();
       var dataForm = '?courseId='+course_id;
       var dialogTip = "";//导出提示语
       //获取表中是否有选中行
       var selectList = $("#grid-data").bootgrid("getSelectedRows");
       if (selectList.length == 0){
           dialogTip = "导出全部的学习记录吗？";
       }else {
           dialogTip = "导出选中的学习记录吗？";
           dataForm += "&recordIds=" + selectList.join(",");
       }
       BootstrapDialog.show({
           title: "",
           cssClass: 'course-export',
           message: dialogTip,
           buttons: [{
               label: "否",
               cssClass: 'course-export-no',
               action: function(dialogItself) {
                   dialogItself.close();
               }
           },{
               label: "是",
               cssClass: 'course-export-yes',
               action: function(dialogItself) {
                   dialogItself.close();
                   $.ajax({
                       type: 'GET',
                       cache: false,
                       headers: { "cache-control": "no-cache" },
                       dataType: "text",
                       url: '/course/study_record/export/'+dataForm,
                       success: function (msg) {
                           msg = JSON.parse(msg);
                           if(msg.success){
                               $('#exportModal').modal({
                                   backdrop: "static",
                                   keyboard: false
                               });
                           }
                       }
                   });
               }
           }]
       });
   });


   //批量删除
   $("body").on("click", "#btn-remove",function(e) {
       e.stopPropagation();
       e.preventDefault();
       var ids = "";
       $(".select-box").each(function(index, element) {
           if($(this).is(":checked")){
               id = $(this).val();
               if(id!="all"){
                   ids += id + ",";
               }
           }
       });
       if(ids==""){
           alert("请选择要删除的记录！");
           return;
       }
       delRecord(ids);
   });

   //单条删除
    if(document.location.href.match(/courseId/)) {
        $("#grid-data").bootgrid().on("loaded.rs.jquery.bootgrid", function () {
            $("#grid-data").bootgrid().find(".removeCourse").on("click", function (e) {
                e.stopPropagation();
                e.preventDefault();
                var id = $(this).attr("courseId") + ",";
                delRecord(id);
            })
        });
    }

   //显示高级搜索
   $("body").on("click", ".advSearch", function(e) {
       $(".adv-search-box").toggle();
   });
       //隐藏高级搜索
   $("body").on("click", "#searchClose", function(e) {
       $(".adv-search-box").hide();
   });
   //点击搜索
   $("body").on("click", "#searchIcon", function(e) {
       $("input[name=search_surname]").val($("input[name=surname]").val());
       $("input[name=search_dep]").val('');
       $("input[name=search_score_left]").val('');
       $("input[name=search_score_right]").val('');
       $("input[name=surname]").val('');
       $("input[name=dep_id]").val('');
       $("#selDepLink span").text('选择部门');
       $("input[name=score_left]").val('');
       $("input[name=score_right]").val('');
       $("#grid-data").bootgrid("reload");
   });

   $("body").on("click", "#searchBtn", function(e) {
       e.stopPropagation();
       e.preventDefault();
       $(".adv-search-box").hide();
       $("input[name=search_surname]").val($("input[name=surname]").val());
       $("input[name=search_dep]").val($("input[name=dep_id]").val());
       $("input[name=search_score_left]").val($("input[name=score_left]").val());
       $("input[name=search_score_right]").val($("input[name=score_right]").val());
       $("input[name=surname]").val('');
       $("input[name=dep_id]").val('');
       $("#selDepLink span").text('选择部门');
       $("input[name=score_left]").val('');
       $("input[name=score_right]").val('');
       $("#grid-data").bootgrid("reload");
   });
   //搜索回车事件
   $("body").keydown(function() {
        var e=window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == "13") {//keyCode=13是回车键
            $('#searchIcon').click();
        }
    });


});

/***********these are functions******************/
//显示考试对话框
function showSelCourse(obj){
   selCourseModal.location.href = "/course/study_record_mgr/sel_course/";
   $('#courseModal').modal({
       backdrop:"static",
       keyboard:false
   });
}
//关闭考试对话框
function hideSelCourse(obj){
   $('#courseModal').modal('hide');
}

//删除方法
function delRecord(id){
   BootstrapDialog.show({
       title: "",
       cssClass: 'course-export',
       message: "确定要删除选中的记录吗？",
       buttons: [{
               label: "取消",
               cssClass: 'course-export-no',
               action: function(dialogItself){
                   dialogItself.close();
               }
            },{
           label: "确认",
           cssClass: 'course-del-yes',
           action: function(dialogItself){
               var dataForm = "studyRecordIds="+id;
               $.ajax({
                   type: "get",
                   cache : false,
                   headers: { "cache-control": "no-cache" },
                   dataType: "text",
                   url: "/course/study_record_del/",
                   data: dataForm,
                   success: function(msg){
                       msg = JSON.parse(msg);
                       if(msg.success){
                           dialogItself.close();
                           $("#grid-data").bootgrid("reload");
                       }else {
                           alert("操作失败，请联系管理员！");
                       }
                   }
               });
           }
       }]
   });
}


//显示选择部门对话框
function showSelDep(obj){
   // selDepModal.location.href = "/admin/tree/user_sel_dep/00000";
   selDepModal.location.href = "/admin/tree/user_sel_dep_multi/00000";
   $('#depModal').modal({
       backdrop:"static",
       keyboard:false
   });
}
//关闭选择部门对话框
function hideSelDept(obj){
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

// 导出动画
function export_animate() {
    var top = $("#stateMessage").offset().top;
    console.log(top);
    var left = $("#stateMessage").offset().left;
    console.log(left);
    $("#export_msg").css("display", "block");
    $("#export_msg").animate({
        rotation: 10,
    }, {
            duration: 50,
            step: function (now, fx) {
                $(this).css({
                    "transform": "rotate(" + now + "deg)",
                    '-webkit-transform': 'rotate(' + now + 'deg)',
                    '-moz-transform': 'rotate(' + now + 'deg)',
                    '-ms-transform': 'rotate(' + now + 'deg)',
                });
            }
        });
    $("#export_msg").animate({
        rotation: -10,
    }, {
            duration: 50,
            step: function (now, fx) {
                $(this).css({
                    "transform": "rotate(" + now + "deg)",
                    '-webkit-transform': 'rotate(' + now + 'deg)',
                    '-moz-transform': 'rotate(' + now + 'deg)',
                    '-ms-transform': 'rotate(' + now + 'deg)',
                });
            }
        });

    $("#export_msg").animate({
        rotation: 0,
    }, {
            duration: 50,
            step: function (now, fx) {
                $(this).css({
                    "transform": "rotate(" + now + "deg)",
                    '-webkit-transform': 'rotate(' + now + 'deg)',
                    '-moz-transform': 'rotate(' + now + 'deg)',
                    '-ms-transform': 'rotate(' + now + 'deg)',
                });
            }
        });
    setTimeout(function () {
        $("#export_msg").animate({
            top: top-100,
            left: left-120,
            width: '10px',
            height: '10px',
        }, 1000, function () {
            $("#export_msg").css("display", "none").css("top", "50%")
                .css("left", "40%").css("width", "150px").css("height", "150px");
        });
    }, 1100)
}
