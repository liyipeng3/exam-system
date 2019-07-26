var curr_path_id = '';
var selected = [];
var folder_id = '';
$(document).ready(function () {
    // 批量操作，获取有无选择行，改变操作按钮状态
    $("#grid-data").bootgrid().on("selected.rs.jquery.bootgrid", function (e){
        $(".toolbar-left-operation .inactive").removeClass("inactive").addClass("deactive").removeAttr("disabled");
    }).on("deselected.rs.jquery.bootgrid", function (e){
        var selectList = $("#grid-data").bootgrid("getSelectedRows");

        if(selectList.length==0){
            $(".toolbar-left-operation .btn.deactive, .toolbar-left-operation .dropdown-menu.deactive").removeClass("deactive").addClass("inactive").attr("disabled","disabled");
        }
    }).on("load.rs.jquery.bootgrid", function () {
        $(".toolbar-left-operation .btn.deactive, .toolbar-left-operation .dropdown-menu.deactive").removeClass("deactive").addClass("inactive").attr("disabled","disabled");
    });

    //关键字label删除
    $("body").on("click", ".glyphicon", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).parent().remove();
    });

    //不同文件类型显示不同icon
    $("#grid-data").bootgrid().on("loaded.rs.jquery.bootgrid", function () {
        if(USER_ROLE=='sub_admin'){
            $("#grid-data").bootgrid().find("thead .select-cell").addClass("disabled");
            $("#grid-data").bootgrid().find("thead .select-box").prop("disabled", true);

            $("#grid-data").bootgrid().find(".folderName").each(function (index, element) {
                var pOnlyRead = $(element).attr('pOnlyRead');

                if(pOnlyRead==1){
                    var selectCell = $(element).parents("tr").find(".select-cell");

                    $(selectCell).addClass("disabled");
                    $(selectCell).find(".select-box").prop("disabled", true);
                }
            });
        }


        $("#grid-data").bootgrid().find(".file-icon").each(function (index, element) {
            var type = $(this).attr("fileType").toLowerCase();
            if (type == ".jpg" || type == ".jpeg" || type == ".png" || type == ".gif" || type == ".bmp") {
                $(this).attr("src", "https://s6..com/static/admin/images/file-manager/png-s.png")
            } else if (type == ".xls" || type == ".xlsx") {
                $(this).attr("src", "https://s6..com/static/admin/images/file-manager/excel-s.png")
            } else if (type == ".mp4" || type == ".avi" || type == ".mov" || type == ".wmv" || type == ".mkv" || type == ".flv" || type == ".rmvb" || type == ".mp3") {
                $(this).attr("src", "https://s6..com/static/admin/images/file-manager/mov-s.png")
            } else if (type == ".pdf") {
                $(this).attr("src", "https://s6..com/static/admin/images/file-manager/PDF-s.png")
            } else if (type == ".ppt" || type == ".pptx") {
                $(this).attr("src", "https://s6..com/static/admin/images/file-manager/ppt-s.png")
            } else if (type == ".rar" || type == ".zip") {
                $(this).attr("src", "https://s6..com/static/admin/images/file-manager/RAR-s.png")
            } else if (type == ".txt") {
                $(this).attr("src", "https://s6..com/static/admin/images/file-manager/TXT-s.png")
            } else if (type == ".doc" || type == ".docx") {
                $(this).attr("src", "https://s6..com/static/admin/images/file-manager/word-s.png")
            }
        });
    });

    //删除文件夹
    $("#grid-data").bootgrid().on("loaded.rs.jquery.bootgrid", function () {
        $("#grid-data").bootgrid().find(".rm-file").on("click", function (e) {
            e.stopPropagation();
            e.preventDefault();
            folder_id = $(this).attr("file_id");
            $('#delete-folder').modal({
                backdrop: "static",
                keyboard: false
            });
        });
    });


    $("#grid-data").bootgrid().find(".rm-file").on("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        folder_id = $(this).attr("file_id");
        $('#delete-folder').modal({
            backdrop: "static",
            keyboard: false
        });
    });



    //删除选中文件
    $("#rm_file-btn").on("click", function (e) {
        e.stopPropagation();
        e.preventDefault();

        selected = $("#grid-data").bootgrid("getSelectedRows");

        if (selected.length == 0) {
            alert("没有选中文件！");
        } else {
            $('#delete-folder').modal({
                backdrop: "static",
                keyboard: false
            });
        }
    });
    //删除选中文件
    $(".close-delete").on("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        if ($(".confirm-delet").val() == "DEL") {
            if (selected.length) {
                var file_ids = "";
                for (var i = 0; i < selected.length; i++) {
                    file_ids = file_ids + selected[i] + ',';
                }
                remove_file(file_ids);
            } else {
                remove_file(folder_id);
            }
            $('#delete-folder').modal("hide");
            $(".confirm-delet").val('');
        } else {
            alert("输入错误，请重新输入！")
        }
        $("#grid-data").bootgrid("reload");
    });
    //取消删除
    $(".rm-delete").click(function () {
        $('#delete-folder').modal("hide");
    });

    var namesArray = [];
    $("#grid-data").bootgrid().on("selected.rs.jquery.bootgrid", function (e, rows) {
        for (var i = 0; i < rows.length; i++) {
            namesArray.unshift([rows[i].id, rows[i].fileType]);
            // return namesArray;
        }
    }).on("deselected.rs.jquery.bootgrid", function (e, rows) {
        for (var i = 0; i < namesArray.length; i++) {
            for (var j = 0; j < rows.length; j++) {
                if (rows[j].id == namesArray[i][0]) {
                    delete namesArray[i]
                    if (namesArray[i] == null) {
                        namesArray.splice(i, 1);
                        i = i - 1;
                    }

                    break;
                }
            }
        }
    });

    //设置选中文件权限
    $("#right-setting-btn").on("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        var selected = [];

        var n = false;
        selected = $("#grid-data").bootgrid("getSelectedRows");
        if (selected.length == 0) {
            alert("没有选中文件！");
        } else {
            for (i = 0; i < namesArray.length; i++) {
                if (namesArray[i][1] != 'folder') {
                    n = true;
                    break;
                }

            }

            if (!n) {
                $('#folder-setting').modal({
                    backdrop: "static",
                    keyboard: false
                });
                $("#folder_set_form input[name=folderId]").val(selected.join(","));
            } else {
                $('#setting').modal({
                    backdrop: "static",
                    keyboard: false
                });
                $("#right_set_form input[name=setRightFileId]").val(selected.join(","));
            }
            $("input[name=viewDownload]").prop("checked", false);
            $("input[name=viewOnly]").prop("checked", false);
        }
    });


    //提交设置
    $("#close-setting").click(function () {
        $('#setting').modal("hide");
        var right_data = $("#right_set_form").serialize();
        $.ajax({
            type: "POST",
            cache: false,
            headers: { "cache-control": "no-cache" },
            dataType: "text",
            url: "/admin/file/update_right/",
            data: right_data,
            success: function (msg) {
                msg = JSON.parse(msg);
                $("#right_set_form input[name=viewDownload]").attr("checked", false);
                $("#right_set_form input[name=viewOnly]").attr("checked", false);
                if (msg.success) {
                    alert("设置成功");
                    $("#grid-data").bootgrid("reload");
                } else {
                    alert("设置失败，请联系管理员！");
                }
            }
        });
    });

    $("#rm-setting").click(function () {
        $('#setting').modal("hide");
    });

    //从选择课件弹窗进入 显示上传课件弹窗
    // if (sourceFrom=='saveFileDialog') {
    //     $("#uploadFileModal").modal({
    //         backdrop: "static",
    //         keyboard: false
    //     });
    // }

    // $('#uploadFileModal').on('hidden.bs.modal', function () {
    //     var url = location.search;
    //     var allUrl = location.href;
    //     if (url != '' && url == '?sourceFrom=saveFileDialog') {
    //         allUrl = allUrl.split("?")[0];
    //         window.history.pushState({}, 0, allUrl);
    //     }
    // })

});

//删除文件
function remove_file(file_ids) {
    $.ajax({
        type: "GET",
        cache: false,
        headers: { "cache-control": "no-cache" },
        dataType: "text",
        url: "/admin/file/remove/" + file_ids,
        success: function (msg) {
            msg = JSON.parse(msg);
            if (msg.success) {
                $("#grid-data").bootgrid("reload");
            } else {
                alert(msg.desc);
            }
        }
    });
}
var customPageCount = 10;//保存每页显示项数
var firstLoad = true;//是否第一次加载，第一次加载的话不保存cookie
//获取上传文件
function get_file_data() {
    //判断是是否有cookie
    var cookieName = "admin_file_manager";
    if(getCookie(cookieName)){
        //判断是否保存了每页显示项目数
        if(getSearchCookie(cookieName,"customPageCount")){
            customPageCount = getSearchCookie(cookieName,"customPageCount");
        }
    }
    $("#grid-data").bootgrid({
        ajax: true,
        ajaxSettings: {
            method: "POST",
            cache: false
        },
        post: function () {
            var sortOrder = $("#grid-data").bootgrid("getSortDictionary");
            $.each(sortOrder, function (name, value) {
                sort_key = name;
                sort_order = value;
            });
            var path_id = $(".file_active").attr("path_id");
            var file_name = $(".file_name").val();
            return {
                "sortKey": sort_key,
                "sortOrder": sort_order,
                "pathId": path_id,
                "fileName": file_name
            };
        },
        url: "/admin/file/get_data/",
        selection: true,
        multiSelect: true,
        padding: 1,
        navigation: 2,
        formatters: {
            //添加操作
            "link": function (column, row) {
                if(row.fileType == "link"){
                    return "<a href='#' data-growing-title='folder-right-setting' class='folder-right-setting icon-size icons8-settings' folder_id='" + row.id + "' data-toggle=\"tooltip\" data-placement=\"top\" data-container=\"body\" title='设置'><i class='icon-size icons8-settings'></i></a>&nbsp;&nbsp;&nbsp;" +
                        "<a class='rm-file' data-growing-title='rm-file' href='#' file_id='" + row.id + "' ><i class='icons8-trash-can'></i></a>";
                }else if(row.fileType != "folder") {
                    return "<a href='#' data-growing-title='right-setting' class='right-setting' view='" + row.view + "' download='" + row.download + "' file_id='" + row.id + "' data-toggle=\"tooltip\" data-placement=\"top\" data-container=\"body\" title='设置'><i class='icon-size icons8-settings'></i></a>" +
                        "&nbsp;&nbsp;&nbsp;" +
                        "<a data-growing-title='fileDownload' href='" + row.fileUrl + "' class='fileDownload' file_id='" + row.id + "' view='" + row.view + "' download='" + row.download + "' data-toggle=\"tooltip\" data-placement=\"top\" data-container=\"body\" title='下载' target='_blank' download><i class='icon-size icons8-2'></i></a>";
                } else {
                    if(row.onlyRead != 1){
                        return "<a data-growing-title='folder-right-setting' href='#' class='folder-right-setting' folder_id='" + row.id + "'  data-toggle=\"tooltip\" data-placement=\"top\" data-container=\"body\" title='设置'><i class='icon-size icons8-settings'></i></a>&nbsp;&nbsp;&nbsp;" +
                            "<a data-growing-title='rm-file' class='rm-file' href='#' file_id='" + row.id + "'  data-toggle=\"tooltip\" data-placement=\"top\" data-container=\"body\" title='删除'><i class='icon-size icons8-trash-can'></i></a>";
                    }
                }
            },
            //文件夹
            "file_name": function (column, row) {
                if (row.fileType == "folder") {
                    if(row.onlyRead != 1){
                        return "<div class='edit-name' >" +
                            "<a class='folderName' style='float:left;' folderId='" + row.id + "' folderName='" + row.fileName + "' pOnlyRead='"+ row.onlyRead +"' href='#'>" +
                            "<img class='folder-icon' src='https://s6..com/static/admin/images/file-manager/folder.png'>" +
                            "<span class='folder_name'>&nbsp;" + row.fileName + "</span>" +
                            "</a>" +
                            "<span class='edit_folder_name' style='display:none;'><i class='icons8-edit'></i></span>" +
                            "<form style='display:inline;'>" +
                            "<input style='display:none;height:25px;' type='text' name='editFolderName' value='" + row.fileName + "' />" +
                            "<input type='text' class='hidden' folder_id='" + row.id + "' name='folderId' value=''>" +
                            "</form>" +
                            "<div class='clear'></div>" +
                            "</div>";
                    }else {
                        return "<div class='edit-name' >" +
                            "<a class='folderName' style='float:left;' folderId='" + row.id + "' folderName='" + row.fileName + "' pOnlyRead='"+ row.onlyRead + "' href='#'>" +
                            "<img class='folder-icon' src='https://s6..com/static/admin/images/file-manager/folder.png'>" +
                            "<span class='folder_name'>&nbsp;" + row.fileName + "</span>" +
                            "</a>" +
                            "<div class='clear'></div>" +
                            "</div>";
                    }
                } else if (row.fileType == "link") {
                    return "<div class='edit-name' >" +
                        "<img class='file-icon' fileType='" + row.fileType + "' src='https://s6..com/static/admin/images/file-manager/help-s.png'>" +
                        "<span class='folder_name' fileType='" + row.fileType + "' style='float:left;'>&nbsp;" + row.fileName + "</span>" +
                        "<span class='edit_folder_name' style='display:none;'><i class='icons8-edit'></i></span>" +
                        "<form style='display:inline;'>" +
                        "<input style='display:none;height:25px;' type='text' name='editFolderName' value='" + row.fileName + "' />" +
                        "<input type='text' class='hidden' folder_id='" + row.id + "' name='folderId' value=''>" +
                        "</form>" +
                        "<div class='clear'></div>" +
                        "</div>";
                }else {
                    return "<div class='edit-name' >" +
                        "<img class='file-icon' fileType='" + row.fileType + "' src='https://s6..com/static/admin/images/file-manager/help-s.png'>" +
                        "<span class='folder_name' fileType='" + row.fileType + "' fileUrl='" + row.fileUrl + "' style='float:left;bottom: -2px;'>&nbsp;" + row.fileName + "</span>" +
                        "<span class='edit_folder_name' style='display:none;'><i class='icons8-edit'></i></span>" +
                        "<form style='display:inline;'>" +
                        "<input style='display:none;height:25px;' type='text' name='editFolderName' value='" + row.fileName + "' />" +
                        "<input type='text' class='hidden' folder_id='" + row.id + "' name='folderId' value=''>" +
                        "</form>" +
                        "<div class='clear'></div>" +
                        "</div>";
                }
            },
            //文件权限状态
            "file_status": function (column, row) {
                //暂时支持文件有该功能
                var result = "";
                var viewHTML = "";
                var downloadHTML = "";
                if (row.fileType != "folder" &&  row.fileType != "link") {
                    //有查看权限
                    if (row.view) {
                        viewDownloadHTML = '<span title_tip="查看" class="icon-status vd-checked"></span>';
                    } else {
                        viewDownloadHTML = '<span title_tip="查看" class="icon-status vd"></span>';
                    }
                    result = '<div class="file_status">' + viewDownloadHTML  + '</div>';
                    return result;
				}else{
                    result = '-';
                    return result;
                }
			}
		}
	}).on("loaded.rs.jquery.bootgrid", function (e){
        if(!firstLoad) {
            //保存每页显示项目数目
            var cookieObj = {};
            cookieObj["customPageCount"] = $(".page-count-span").text().substring(2,4);
            setSearchCookie(cookieName, cookieObj);
        }
        firstLoad = false;
        // initial tooltip
        $('#grid-data [data-toggle="tooltip"]').tooltip();
        $("#grid-data").colResizable({
            fixed:false,
            liveDrag:true,
            draggingClass:"dragging"
        });
        // 上传到百度云的文件的下载操作
        $(".fileDownload").on("click",function(e){
            var docId = $(this).attr("href");
            e.stopPropagation();
            if(flowUpLimit==1){
                $('#flowUpLimitModal').modal('show');
                return;
            }
            if($(this).attr("href").indexOf("http") == -1){
                e.preventDefault();
                $.ajax({
                    type:"POST",
                    cache: false,
                    headers: { "cache-control": "no-cache" },
                    dataType:"json",
                    url:"/admin/download_document_baiduyun/",
                    data:"documentId="+docId,
                    success:function(msg){
                        if(msg.success){
                            window.location.href=msg.bizContent.documentIdUrl;
                        }else {
                            alert(msg.desc);
                        }
                    },
                    error:function(error){
                        alert("下载失败,请稍后再试");
                    }

                })
            }
        });
    });
}
//获取上传文件
get_file_data();

$(".search").click(function () {
    $("#grid-data").bootgrid("reload");
});

$(".file_name").keypress(function (e) {
    if (e.keyCode == 13) {
        $("#grid-data").bootgrid("reload");
    }
});

//显示编辑文件夹名称icon
$("#grid-data").bootgrid().on("loaded.rs.jquery.bootgrid", function () {
    $("#grid-data").bootgrid().find(".edit-name").mouseover(function () {
        $(this).find(".edit_folder_name").show();
    });
    $("#grid-data").bootgrid().find(".edit-name").mouseout(function () {
        $(this).find(".edit_folder_name").hide();
    });
});

//修改文件夹名称
$("#grid-data").bootgrid().on("loaded.rs.jquery.bootgrid", function () {
    $("#grid-data").bootgrid().find(".edit_folder_name").on("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).prev().hide();
        $(this).next().children().show();
        $(this).next().children().select();
        $(this).next().children().keydown(function () {
            var e = window.event || arguments.callee.caller.arguments[0];
            if (e && e.keyCode == "13") {//keyCode=13是回车键
                var folder_ids = $(this).next().attr("folder_id");
                $(this).next().val(folder_ids);
                var folder_name_data = $(this).parent().serialize();
                $.ajax({
                    type: "POST",
                    cache: false,
                    headers: { "cache-control": "no-cache" },
                    dataType: "text",
                    url: "/admin/file/update_folder_name/",
                    data: folder_name_data,
                    success: function (msg) {
                        msg = JSON.parse(msg);
                        if (msg.success) {
                            $("#grid-data").bootgrid("reload");
                        } else {
                            alert("更改文件夹名称失败！");
                        }
                    }
                });
                $(this).parent().prev().prev().find("span").show();
                $(this).hide();
            }
        });
        $(this).next().children().blur(function () {
            var folder_ids = $(this).next().attr("folder_id");
            $(this).next().val(folder_ids);
            var folder_name_data = $(this).parent().serialize();
            $.ajax({
                type: "POST",
                cache: false,
                headers: { "cache-control": "no-cache" },
                dataType: "text",
                url: "/admin/file/update_folder_name/",
                data: folder_name_data,
                success: function (msg) {
                    msg = JSON.parse(msg);
                    if (msg.success) {
                        $("#grid-data").bootgrid("reload");
                    } else {
                        alert("更改文件夹名称失败！");
                    }
                }
            });
            $(this).parent().prev().prev().find("span").show();
            $(this).hide();
        });
    });
});

//点击预览
$("#grid-data").bootgrid().on("loaded.rs.jquery.bootgrid", function () {
    $("#grid-data").bootgrid().find(".edit-name").on("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        if(flowUpLimit==1){
            $('#flowUpLimitModal').modal('show');
            return;
        }
        var obj = $(this).find(".folder_name");
        var url = $(obj).attr("fileUrl");
        var type = $(obj).attr("fileType");
        if (type) {
            if (type == ".doc" || type == ".docx" || type == ".xls" || type == ".ppt" || type == ".pptx" || type == ".xlsx") {
               /* $("#wrap").css("display", "none");*/
                /*$(".close-file").css("display", "inline");*/
                if(url.indexOf("http")==-1){
                    window.open("/admin/office_view/?documentId="+ url);
                }else {
                    window.open("https://view.officeapps.live.com/op/embed.aspx?src=" + url,"_blank")
                }
            } else {
                window.open(url, "_blank");
            }
            $("iframe").css("height", $(window).height());
        }
    });
});

//点击关闭文件预览
$(".close-file").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(".close-file").css("display", "none");
    $("#wrap").css("display", "block");
    $(".file-view").css("display", "none");
});

//点击权限设置 modal显示
$("#grid-data").bootgrid().on("loaded.rs.jquery.bootgrid", function () {
    $("#grid-data").bootgrid().find(".right-setting").each(function (index, element) {
        $(this).on("click", function (e) {
            e.stopPropagation();
            e.preventDefault();
            $("input[name=setRightFileId]").val($(this).attr("file_id"));
            var view = $(this).attr("view");
            var download = $(this).attr("download");
            if (view == 1 && download == 1) {
                $("#right_set_form input[name=viewDownload]").prop("checked", true);
            } else {
                $("#right_set_form input[name=viewDownload]").prop("checked", false);
            }
            if(view == 1 && download == 0){
                $("#right_set_form input[name=viewOnly]").prop("checked", true);
            }else {
                $("#right_set_form input[name=viewOnly]").prop("checked", false);
            }
            $('#setting').modal({
                backdrop: "static",
                keyboard: false
            });
        });
    });
});

//点击文件夹权限设置
$("#grid-data").bootgrid().on("loaded.rs.jquery.bootgrid", function () {
    $("#grid-data").bootgrid().find(".folder-right-setting").each(function (index, element) {
        $(this).on("click", function (e) {
            e.stopPropagation();
            e.preventDefault();
            var folder_id = $(this).attr("folder_id");
            $("#folder_set_form input[name=folderId]").val(folder_id);
            $(".selRight .checkOrRadio").prop("checked", false);
            $("#deptsName").children().remove();
            $("#usersName").children().remove();
            $('#folder-setting').modal({
                backdrop: "static",
                keyboard: false
            });
            $.ajax({
                type: "POST",
                cache: false,
                headers: { "cache-control": "no-cache" },
                dataType: "text",
                url: "/admin/file/folder_right_json/",
                data: "folderId=" + folder_id,
                success: function (msg) {
                    msg = JSON.parse(msg);
                    if(msg.success){
                        var dep_ids = "";
                        var user_ids = "";
                        for (i in msg.bizContent.dep) {
                            $("#deptsName").append('<span class="label label-default" >' +
                                '<span class="deptIdItem" style="display:none">' + i + '</span>' +
                                '<span class="deptNameItem">' + msg.bizContent.dep[i] + '</span>' +
                                '</span>');
                            dep_ids += i + ",";
                        }
                        dep_ids = dep_ids.substring(0, dep_ids.length - 1);
                        $("input[name=deptIds]").val(dep_ids);
                        for (i in msg.bizContent.user) {
                            $("#usersName").append('<span class="label label-default" style="display:inline-block">' +
                                '<span class="userIdItem" style="display:none">' + i + '</span>' +
                                '<span class="surnameItem">' + msg.bizContent.user[i] + '</span>' +
                                '<span class="glyphicon glyphicon-remove"></span>' +
                                '</span>');
                            user_ids += i + ",";
                        }
                        user_ids = user_ids.substring(0, user_ids.length - 1);
                        $("input[name=userIds]").val(user_ids);
                        if(msg.bizContent.viewOrDownload.viewOnly==1){
                            $("input[name='viewOnly']").prop('checked','checked');
                        }
                        if(msg.bizContent.viewOrDownload.viewDownload==1){
                            $("input[name='viewDownload']").prop('checked','checked');
                        }
                    }
                }
            });
        });
    });
});
//设置文件夹权限，针对文件夹内所有文件的预览和下载权限进行设置
// $(".selRight .checkOrRadio").change(function (e) {
// 	e.stopPropagation();
// 	e.preventDefault();
// 	if ($(this).hasClass("all")) {
// 		$(this).parent().find(".none").prop("checked", false);
// 	} else {
// 		$(this).parent().find(".all").prop("checked", false);
// 	}
//
// });

//选择部门
$("#selDept").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    showSelDept(this);
});

//显示选择部门对话框
function showSelDept(obj) {
    selGroupModal.location.href = "/admin/tree/exam_sel_dep/";
    $('#deptModal').modal({
        backdrop: "static",
        keyboard: false
    });
}
//接受选择部门数据
function selGroup(id, deptsArray) {
    $("input[name=deptIds]").val(id);
    $("#deptsName").children().remove();
    $.each(deptsArray, function (index, value) {
        $("#deptsName").append('<span class="label label-default" >' +
            '<span class="deptIdItem" style="display:none">' + value[0] + '</span>' +
            '<span class="deptNameItem">' + value[1] + '</span>' +
            '</span>');
    });
}
//关闭选择部门对话框
function hideSelGroup(obj) {
    $('#deptModal').modal('hide');
}
//选择考生
$("#selUser").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    showSelUser(this);
});

//显示选择考生对话框
function showSelUser(obj) {
    var commit_ids = join_user_id();
    selUserModal.location.href = "/admin/addExam/selUser?commitIds=" + commit_ids;
    $('#userModal').modal({
        backdrop: "static",
        keyboard: false
    });
}

// 可预览可下载，可预览不可下载二选一
$("#folder_set_form .selRight input[name=viewDownload]").change(function() {
    if($(this).is(":checked")){
        $("#folder_set_form .selRight input[name=viewOnly]").prop("checked", false);
        /*$("#folder_set_form .selRight input[name=viewOnly]").val(0);
        $("#folder_set_form .selRight input[name=viewDownload]").val(1);*/
    }
});
$("#folder_set_form .selRight input[name=viewOnly]").change(function() {
    if($(this).is(":checked")){
        $("#folder_set_form .selRight input[name=viewDownload]").prop("checked", false);
        /*$("#folder_set_form .selRight input[name=viewDownload]").val(1);
        $("#folder_set_form .selRight input[name=viewOnly]").val(0);*/
    }
});

$("#right_set_form input[name=viewDownload]").change(function() {
    if($(this).is(":checked")){
        $("#right_set_form input[name=viewOnly]").prop("checked", false);
    }
});
$("#right_set_form input[name=viewOnly]").change(function() {
    if($(this).is(":checked")){
        $("#right_set_form input[name=viewDownload]").prop("checked", false);
    }
});


//接受选择用户数据
function selMuchUser(namesArray) {
    $.each(namesArray, function (index, value) {
        $("#usersName").append('<span class="label label-default" style="display:inline-block">' +
            '<span class="userIdItem" style="display:none">' + value[0] + '</span>' +
            '<span class="surnameItem">' + value[1] + '</span>' +
            '<span class="glyphicon glyphicon-remove"></span>' +
            '</span>');
    });
}

//将指定考生的id拼装成字符串
function join_user_id() {
    var usernameLabels = $("#usersName span .userIdItem");
    var examUsers = '';
    for (var i = 0; i < usernameLabels.length; i++) {
        examUsers = examUsers + usernameLabels[i].textContent.trim() + ",";
    };
    return examUsers;
}

//关闭选择考生对话框
function hideSelUser(obj) {
    $('#userModal').modal('hide');
}

//提交文件夹设置
$("#close-folder-setting").click(function () {
    $('#folder-setting').modal("hide");
    var selUsers = join_user_id();
    $("input[name=userIds]").val(selUsers.trim());
    folder_right_data = $("#folder_set_form").serialize();
    $.ajax({
        type: "POST",
        cache: false,
        headers: { "cache-control": "no-cache" },
        dataType: "text",
        url: "/admin/file/folder_update_right/",
        data: folder_right_data,
        success: function (msg) {
            msg = JSON.parse(msg);
            if (msg.success) {
                alert("权限修改成功!");
            } else {
                alert("权限修改失败!");
            }
        }
    });
});

//取消文件夹设置
$("#rm-folder-setting").click(function () {
    $('#folder-setting').modal("hide");
});


//点击打开文件夹
$("#grid-data").bootgrid().on("loaded.rs.jquery.bootgrid", function () {
    $("#grid-data").bootgrid().find(".folderName").on("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(".file_name").val("");
        var folderId = $(this).attr("folderId");
        var folderName = $(this).attr("folderName");
        var pOnlyRead = $(this).attr("pOnlyRead");

        $(".active").wrapInner("<a href='#'></a>");
        $(".active").removeClass();
        $(".breadcrumb").append("<li class='active file_active' folderName='" + folderName + "'  path_id='" + folderId + "'>" + folderName + "</li>");
        $("input[name=pId]").val($(".file_active").attr("path_id"));
        $("input[name=pOnlyRead]").val(pOnlyRead);
        curr_path_id = $("input[name=pId]").val();
        NOW_ID = curr_path_id;
        $("#grid-data").bootgrid("reload");

        //点击切换路径
        $("#bread a").click(function () {
            $(".file_name").val("");
            var path = $(this).parent();
            var path_id = path.attr("path_id");
            var path_name = path.attr("folderName");
            path.addClass("active file_active");
            path.nextAll().remove();
            path.empty();
            path.append(path_name);
            $("input[name=pId]").val($(".file_active").attr("path_id"));
            curr_path_id = $("input[name=pId]").val();
            NOW_ID = curr_path_id;
            $("#grid-data").bootgrid("reload");
        });

    });
});


//点击新建文件夹
$("#new_folder-btn").on("click", function (e) {
    e.stopPropagation();
    e.preventDefault();

    var pid = $("input[name=pId]").val();
    var pOnlyRead = $("input[name=pOnlyRead]").val();

    if(USER_ROLE=='sub_admin'){
        if(pid==ROOT_ID && ROOT_ONLY_READ=='1'){
            alert("您不具备此权限！");
            return false;
        }else if(pOnlyRead==1){
            alert("您不具备此权限！");
            return false;
        }
    }

    BootstrapDialog.confirm({
        cssClass: 'newFolder',
        title: '新建文件夹',
        message: $('<form id="new_folder"><input class="form-control" name="folderName" type="folder" placeholder="请输入文件夹名称"></form>'),
        type: BootstrapDialog.TYPE_PRIMARY, // <-- Default value is BootstrapDialog.TYPE_PRIMARY
        closable: true, // <-- Default value is false
        draggable: true, // <-- Default value is false
        btnCancelLabel: '关闭', // <-- Default value is 'Cancel',
        btnOKLabel: '确定', // <-- Default value is 'OK',
        btnOKClass: 'btn-default btn-ok',
        btnCancelClass: 'btn-no',
        callback: function (result) {
            // result will be true if button was click, while it will be false if users close the dialog directly.
            if (result) {
                if ($("input[name=folderName]").val() == "") {
                    alert("请输入文件夹名称！");
                    return false;
                } else {
                    var pathId = $(".file_active").attr("path_id");
                    var folder_data = $("#new_folder").serialize();
                    $.ajax({
                        type: "POST",
                        cache: false,
                        headers: { "cache-control": "no-cache" },
                        dataType: "text",
                        url: "/admin/file/add_folder/?pId=" + pathId,
                        data: folder_data,
                        success: function (msg) {
                            msg = JSON.parse(msg);
                            if (msg.success) {
                                $("#grid-data").bootgrid("reload");
                            } else {
                                alert("新建文件夹失败！");
                            }
                        }
                    });
                }
            }
        }
    });
});


//点击移动按钮
$("#menuBtn").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    var selected = [];
    selected = $("#grid-data").bootgrid("getSelectedRows");
    if (selected.length == 0) {
        alert("没有选中文件！");
    } else {
        showSelFolder(this);
    }
});

//显示移动文件对话框
function showSelFolder(obj) {
    selfolderModal.location.href = "/admin/file/sel_folder/";
    $('#FolderModal').modal({
        backdrop: "static",
        keyboard: false
    });
}

//关闭选择分类对话框
function hideSelFolder(obj) {
    $('#FolderModal').modal('hide');
}
//接受选择分类数据
function selFolder(id) {
    var selected = [];
    selected = $("#grid-data").bootgrid("getSelectedRows");
    $("input[name=newPath]").val(id);
    $("input[name=newPathId]").val(selected);
    var selFolder_data = $("#selFolder_form").serialize();
    $.ajax({
        type: "POST",
        cache: false,
        headers: { "cache-control": "no-cache" },
        dataType: "text",
        url: "/admin/file/update_path/",
        data: selFolder_data,
        success: function (msg) {
            msg = JSON.parse(msg);
            if (msg.success) {
                alert("移动成功！");
                $("#grid-data").bootgrid("reload");
            } else {
                alert(msg.desc);
            }
        }
    });
}
//显示上传文件弹窗
$("#showUploadFileModal").click(function(){
    $("#uploadFileModal").modal();
});




