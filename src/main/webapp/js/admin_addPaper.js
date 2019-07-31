$(document).ready(function () {
    //选择试题类型
    $("body").on("click", "#selQuestionType", function (e) {
        e.stopPropagation();
        e.preventDefault();
        //showQuestionsType(this);
        showQuestionType(this);
    });
    //选择分类
    $("body").on("click", "#selTypeLink", function (e) {
        e.stopPropagation();
        e.preventDefault();
        showSelType(this);
    });

    //选择试卷
    $("body").on("click", "#selPaperLink", function (e) {
        e.stopPropagation();
        e.preventDefault();
        showSelPaper(this);
    });
    //隐藏表格
    $(".tab2 , .tab3").hide();
    //帮助提示
    $("#helpIcon").tooltip();
    $("#createTest .create-test-area .guide span").tooltip();
    //切换组卷方式
    $("#paper_type_select").change(function (e) {
        changeGroup($(this).val());
    });
    $("span[name=paper_type_sel]").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        var v = $(this).text();
        if (v == "选题组卷") {
            type = "0";
        } else if (v == "随机组卷") {
            type = "1";
        }
        $("#paper_type_select").val(type).change();
    });
    //添加类型
    $(".addIconUl li").click(function (e) {
        //试题分类
        var type = $("#paper_type_select").val();
        addType(this, type);
    });
    //删除类型
    $("body").on("click", ".customerTab .typeTabBody .glyphicon-minus-sign", function (e) {
        $(this).parents("tr").remove();
    });
    //下移
    $("body").on("click", ".customerTab .typeTabBody .glyphicon-arrow-down", function (e) {
        e.stopPropagation();
        e.preventDefault();
        //试题分类
        var group = $("#paper_type_select").val();
        var obj = $(this).parent("td").attr("sort");
        if ($(".tab" + group + " .typeTabBody tr").length > 1) {
            $(".tab" + group + " .typeTabBody tr").each(function (index, element) {
                var sortRandom = $(this).attr("sort");
                if ((sortRandom === obj) && ($(".tab" + group + " .typeTabBody tr").length > (index + 1))) {
                    $($(".tab" + group + " .typeTabBody tr")[index + 1]).after($(this).clone());
                    $(this).remove();
                    return;
                }
            });
        }
    });
    //上移
    $("body").on("click", ".customerTab .typeTabBody .glyphicon-arrow-up", function (e) {
        e.stopPropagation();
        e.preventDefault();
        //试题分类
        var group = $("#paper_type_select").val();
        var obj = $(this).parent("td").attr("sort");
        if ($(".tab" + group + " .typeTabBody tr").length > 1) {
            $(".tab" + group + " .typeTabBody tr").each(function (index, element) {
                var sortRandom = $(this).attr("sort");
                if ((sortRandom === obj) && (index != 0)) {
                    $($(".tab" + group + " .typeTabBody tr")[index - 1]).before($(this).clone());
                    $(this).remove();
                    return;
                }
            });
        }
    });
    //选择试题
    $("body").on("click", ".customerTab .typeTabBody a.selQuestionLink", function (e) {
        e.stopPropagation();
        e.preventDefault();
        showSelQuestions(this);
    });
    //管理试题
    $("body").on("click", ".customerTab .typeTabBody a.modifyQuestionLink", function (e) {
        e.stopPropagation();
        e.preventDefault();
        showModifyQuestions(this);
    });
    //选择试题分类
    $("body").on("click", ".customerTab .typeTabBody .selQuestionsTypeLink", function (e) {
        e.stopPropagation();
        e.preventDefault();
        showQuestionsType(this);
    });
    //选择难度
    $("body").on("click", ".customerTab .typeTabBody td[name=difficult]", function (e) {
        e.stopPropagation();
        e.preventDefault();
        showDifficult(this);
    });
    //试卷总分根据每题分数求和
    $("body").on("change", "input[name=test_peer_score]", function (e) {
        mathTotalScore();
    });
    //新建保存
    $("#saveBtn").click(function (e) {
        if (checkForm()) {
            serializeForm();
            setTimeout(function () {
                savePaperFn("/admin/paper_add_new", "create");
            }, 500);
        }
    });


    //预览
    $("#previewBtn").click(function (e) {
        if (checkForm()) {
            serializeForm();
            setTimeout(function () {
                var dataForm = $('#subForm').serialize();
                window.open("/admin/paper_preview?" + dataForm);
            }, 500);
        }
    });

    $("#downloadBtn").click(function (e) {
        if (checkForm()) {
            serializeForm();
            setTimeout(function () {
                var dataForm = $('#subForm').serialize();
                window.open("/admin/paper_download?" + dataForm, "", "");
            }, 500);
        }
    });

    $("#paper_type_select").change(function () {
        var p1 = $(this).val();
        if (p1 == 2) {
            $("#previewBtn").hide();
            $("#downloadBtn").hide();
        } else {
            $("#previewBtn").show();
            $("#downloadBtn").show();
        }
    });

    var p1 = $("#paper_type_select").val();
    if (p1 == 2) {
        $("#previewBtn").hide();
        $("#downloadBtn").hide();
    }

    //编辑保存
    $("#updateBtn").click(function (e) {
        if (checkForm()) {
            serializeForm();
            setTimeout(function () {
                savePaperFn("/admin/paper/update_post", "update");
            }, 500);
        }
    });
    //立即发布
    $("#jumpToExam").click(function (e) {
        var id = $("input[name=paper_info_id]").val();
        if (id == "") {
            alert("请选择试卷");
        } else {
            window.location.href = "/html/exam/exam_add?paper_info_id=" + id;
        }
    });
    //到第三步发布考试
    $("#jumpToExamPublish").click(function (e) {
        var id = $(this).attr("paper_info_id");
        window.location.href = "/html/exam/exam_add?paper_info_id=" + id;
    });

    //空白试卷手工写入题目
    // $("#").click(function(e) {
    //    window.location.href = "/admin/paper_manual_add";
    // });

    //留在这里
    $("#jumpToUpdate").click(function (e) {
        var id = $(this).attr("paper_id");
        window.location.href = "/admin/paper/update/" + id;
    });


});

//计算总分
function mathTotalScore() {
    var total_score = 0;
    $("input[name=test_peer_score]").each(function (index, element) {
        if ($(this).val() != "") {
            var num = parseInt($(this).parents("tr").find("td[name=num]").text());
            total_score += parseInt($(this).val()) * num;
        }
    });
    $("input[name=total_score]").val(total_score);
}

//显示选择试卷对话框
function showSelPaper(obj) {
    selPaperModal.location.href = "./paper_select.html";
    $('#paperModal').modal({
        backdrop: "static",
        keyboard: false
    });
}

//关闭选择试卷对话框
function hideSelPaper(obj) {
    $('#paperModal').modal('hide');
}

//接受选择试卷数据
function selPaper(id, name) {
    $("input[name=paper_info_id]").val(id);
    $("#selPaperLink span").text(name);
}

/***********************************************************/

//显示选择分类对话框
function showSelType(obj) {
    selTypeModal.location.href = "/admin/tree/paper_style";
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
function selType(id, name) {
    $("input[name=paper_style]").val(id);
    $("#selTypeLink span").text(name);
}

/***********************************************************/

var defaultType = $("#paper_type_select").val(); //当前选中的组卷方式
//切换组卷方式fn
function changeGroup(type) {
    var questionTypeTr = $(".questionTypeTr").length;
    if (questionTypeTr > 0) {
        if (confirm("选择新的组卷方式会清空您已选的试题内容，是否选择？")) {
            $(".customerTab").hide();
            defaultType = type;
            $(".questionTypeTr").remove();
            if (type == 1) { //选题组卷
                $(".tab1").show();
                return;
            }
            if (type == 2) { //抽题组卷
                $(".tab2").show();
                return;
            }
            if (type == 3) { //随机组卷
                $(".tab3").show();
                return;
            }
        } else {
            $("#paper_type_select").val(defaultType);
        }
    } else {
        $(".customerTab").hide();
        defaultType = type;
        $(".questionTypeTr").remove();
        if (type == 1) { //选题组卷
            $(".tab1").show();
            return;
        }
        if (type == 2) { //抽题组卷
            $(".tab2").show();
            return;
        }
        if (type == 3) { //随机组卷
            $(".tab3").show();
            return;
        }
    }
}

//显示选择试题对话框
var selTr = "";

function showSelQuestions(obj) {
    var selType = $(obj).attr("type");
    var commit_ids = $(obj).parent("td").find("input[name=test_ids]").val();
    selQuestionFrame.location.href = "/admin/select_type?type=" + selType + "&commit_ids=" + commit_ids;
    $('#questionsModal').modal({
        backdrop: "static",
        keyboard: false
    });
    selTr = $(obj).parents("tr"); //选择的题型
}

//关闭选择试题对话框
function hideSelQuestions(obj) {
    $('#questionsModal').modal('hide');
    selTr = "";
}

//显示管理试题对话框
function showModifyQuestions(obj) {
    var ids = $(obj).parents("tr").find("input[name=test_ids]").val();
    modifyQuestionFrame.location.href = "/admin/select_id?id=" + ids;
    $('#questionsModifyModal').modal({
        backdrop: "static",
        keyboard: false
    });
    selTr = $(obj).parents("tr"); //选择的题型
}

//关闭管理试题对话框
function hideModifyQuestions(obj) {
    $('#questionsModifyModal').modal('hide');
    selTr = "";
}

//显示选择试题分类对话框选择单个
function showQuestionType(obj) {
    selQuestionsTypeModal.location.href = "/admin/tree/tests_class2";
    $("#questionsTypeModal").modal({
        backdrop: "static",
        keyboard: false
    });
}

//显示选择试题分类对话框选择多个
function showQuestionsType(obj) {
    selQuestionsTypeModal.location.href = "/admin/tree/tests_multi_class";
    $("#questionsTypeModal").modal({
        backdrop: "static",
        keyboard: false
    });
    selTr = $(obj).parents("tr"); //选择的题型
}

//关闭选择试题分类对话框
function hideQuestionsSelType(obj) {
    $('#questionsTypeModal').modal('hide');
}

//接受选择试题分类数据单个
function selQuestionsTypeSingle(id, name) {
    $("input[name=classification]").val(id);
    $("#selQuestionType span").text(name);
}

//接受选择试题分类数据多个
function selQuestionsType(id, name) {
    var tr = selTr;
    $(tr).find("input[name=test_classify_id]").val(id);
    $(tr).find(".selQuestionsTypeLink span").text(name);
}

//显示选择难度对话框
function showDifficult(obj) {
    var type = $(obj).parents("tr").find("input[name=test_classify_id]").val();
    var questionsType = $(obj).parents("tr").attr("name");
    if (type == "") {
        alert("请选择试题分类后再选择试题难度！");
        return;
    }
    difficultFrame.location.href = "/admin/test/showcount?type=" + questionsType + "&classification=" + type;
    $('#difficultModal').modal({
        backdrop: "static",
        keyboard: false
    });
    selTr = $(obj).parents("tr"); //选择的题型
}

//关闭难度对话框
function hideDifficult(obj) {
    $('#difficultModal').modal('hide');
    selTr = "";
}

//保存难度fn
function saveDifficultFn(difficult, totelNum) {
    var tr = selTr;
    $(tr).find("input[name=hard]").val(difficult); //隐含难度字段
    $(tr).find("td[name=num]").text(totelNum); //显示总题数
    selTr = "";
    mathTotalScore(); //计算总分
}

//编辑难度时填充数字fn
function updateFillDifficultFn() {
    var tr = selTr;
    var list = $(tr).find("input[name=hard]").val();
    if (list == "") {
        list = [0, 0, 0]
        return list;
    }
    list = list.split(",");
    return list;
}

//添加类型
function addType(obj, group) {
    var type = $(obj).attr("name");
    var title = $(obj).attr("title");
    var tabBody = $(".tab" + group + " .typeTabBody");

    //判断是否已经添加过此类型
    function hasType() {
        //允许添加多个，判断暂时取消
        /*var hasType = $(".tab"+group+" .typeTabBody tr");
        if(hasType.length==0){
            return true;
        }
        for(var i=0;i<hasType.length;i++){
            var has = $(hasType[i]).attr("name");
            if(has==type){
                return false;
            }
        }*/
        return true;
    }

    if (hasType()) {
        var html = "";
        //var hiddenDate = '<input type="hidden" class="difficult1" name="difficult1" value="0" /><input type="hidden" class="difficult2" name="difficult2" value="0" /><input type="hidden" class="difficult3" name="difficult3" value="0" />'; //隐藏的难度数量
        var selQuestions = '<input type="hidden" class="questions" name="test_ids" value="" />'; //隐藏的已选试题
        var sortRandom = Math.random(); //随机数用于移动顺序

        if (group == 1) {
            html = '<tr name="' + type + '" sort="' + sortRandom + '" class="questionTypeTr">' +
                '<td name="' + type + '" sort="' + sortRandom + '"><i class="glyphicon glyphicon-arrow-down"></i><i class="glyphicon glyphicon-arrow-up"></i><i class="glyphicon glyphicon-minus-sign"></i><input type="hidden" name="test_seq" style="width:200px" value=""><input type="hidden" name="test_type" style="width:200px" value="' + type + '"></td>' +
                '<td name="type">' + title + '</td>' +
                '<td name="num">0</td>' +
                '<td name="title"><input type="text" name="test_tittle" style="width:200px"></td>' +
                '<td name="score"><input type="text" name="test_peer_score" style="width:50px"></td>' +
                '<td name="questions"><a href="#" class="selQuestionLink" type="' + type + '">选择试题</a>&nbsp;<a href="#" class="modifyQuestionLink">管理试题</a>' + selQuestions + '</td>' +
                '</tr>';
        } else {
            html = '<tr name="' + type + '" sort="' + sortRandom + '" class="questionTypeTr">' +
                '<td name="' + type + '" sort="' + sortRandom + '"><i class="glyphicon glyphicon-arrow-down"></i><i class="glyphicon glyphicon-arrow-up"></i><i class="glyphicon glyphicon-minus-sign"></i><input type="hidden" name="test_seq" style="width:200px" value=""><input type="hidden" name="test_type" style="width:200px" value="' + type + '"></td>' +
                '<td name="type">' + title + '</td>' +
                '<td name="num">0</td>' +
                '<td name="title"><input type="text" name="test_tittle" style="width:200px"></td>' +
                '<td name="score"><input type="text" name="test_peer_score" style="width:50px"></td>' +
                '<td name="group"><a href="#" class="selQuestionsTypeLink"><span>试题分类</span> <img src="/static/admin/images/icon6.gif" /></a><input type="hidden"  name="test_classify_id" value="" />  <input type="hidden" class="" name="is_avgChk" value="" /><input type="hidden"  name="is_avg" value="" /><!--平均抽取 <span class="helpIcon" data-toggle="tooltip" data-html="true" data-html="true" data-original-title="同一难度的题平均从所选分类中抽取，若不勾选则随机抽取" data-placement="right"><img src="/admin/static/img/icon_help.gif" /></span>--></td>' +
                '<td name="difficult"><a href="#">抽取数量</a><input type="hidden" class="" name="hard" value="" /></td>' +
                '</tr>';
        }
        tabBody.append(html);
        //帮助提示
        $(".helpIcon").tooltip();
    }
}

//选择试题fn
function selQuestion(ids, num, type) {
    var tr = selTr;
    var selectedIds = $(tr).find("input[name=test_ids]").val();
    var selectedNum = $(tr).find("td[name=num]").text();
    if (type == "modify") {
        $(tr).find("input[name=test_ids]").val(ids);
        $(tr).find("td[name=num]").text(num); //显示数量
    } else {
        if (selectedIds != "") {
            $(tr).find("input[name=test_ids]").val(selectedIds + "," + ids);
        } else {
            $(tr).find("input[name=test_ids]").val(ids);
        }
        $(tr).find("td[name=num]").text(parseInt(selectedNum) + parseInt(num)); //显示数量
    }
    selTr = "";
    mathTotalScore(); //计算总分
}

//验证表单
function checkForm() {
    if ($("input[name=paper_name]").val() == "") {
        alert("请填写试卷名称");
        return false;
    } else if ($("input[name=paper_name]").val().length > 50) {
        alert("试卷名称不得大于50字！");
        return false;
    }
    if ($("input[name=paper_style]").val() == "") {
        alert("请选择试卷分类");
        return false;
    }
    if ($("input[name=total_score]").val() == "") {
        alert("请填写试卷总分");
        return false;
    }
    if ($(".questionTypeTr").length < 1) {
        alert("请选择题型");
        return false;
    }
    if ($("#paper_type_select").val() == "1") {
        var has = "";
        $("input[name=test_ids]").each(function (index, element) {
            if ($(this).val() == "") {
                alert("请选择试题");
                has = false;
                return false;
            }
        });
        if (has === false) {
            return false;
        }
    } else {
        var has = "";
        $("input[name=hard]").each(function (index, element) {
            if ($(this).val() == "") {
                alert("请输入抽取数量");
                has = false;
                return false;
            }
        });
        if (has === false) {
            return false;
        }
    }
    var hasSub = true;
    $("input[name=test_peer_score]").each(function (index, element) {
        if ($(this).val() == "") {
            hasSub = false;
            return;
        }
    });
    if (hasSub === false) {
        alert("请填写每题分数！");
        return false;
    }
    return true;
}

//提交数据合并
function serializeForm() {
    $("#subForm input[name=paper_set_num]").val($(".questionTypeTr").length); //题型数量
    changeDataInputName();
}

//根据tr顺序改变tr中input名字，并添加顺序号
function changeDataInputName() {
    if (defaultType == "1") {
        $(".questionTypeTr").each(function (index, element) {
            var sortTr = index + 1;
            var test_seq = $(this).find("input[name=test_seq]"); //排序字段
            var test_type = $(this).find("input[name=test_type]"); //题型字段
            var test_tittle = $(this).find("input[name=test_tittle]"); //标题字段
            var test_peer_score = $(this).find("input[name=test_peer_score]"); //每题分数字段
            var test_ids = $(this).find("input[name=test_ids]"); //已选试题ID字段

            test_seq.val(sortTr);

            test_seq.removeAttr("name").attr("name", "test_seq_" + sortTr);
            test_type.removeAttr("name").attr("name", "test_type_" + sortTr);
            test_tittle.removeAttr("name").attr("name", "test_tittle_" + sortTr);
            test_peer_score.removeAttr("name").attr("name", "test_peer_score_" + sortTr);
            test_ids.removeAttr("name").attr("name", "test_ids_" + sortTr);
        });
    } else {
        $(".questionTypeTr").each(function (index, element) {
            var is_avgChk = $(this).find("input[name=is_avgChk]"); //平均抽题是否勾选

            var sortTr = index + 1;
            var test_seq = $(this).find("input[name=test_seq]"); //排序字段
            var test_type = $(this).find("input[name=test_type]"); //题型字段
            var test_tittle = $(this).find("input[name=test_tittle]"); //标题字段
            var test_peer_score = $(this).find("input[name=test_peer_score]"); //每题分数字段
            var test_classify_id = $(this).find("input[name=test_classify_id]"); //试题分类字段
            var is_avg = $(this).find("input[name=is_avg]"); //平均抽题字段
            if (is_avgChk.is(":checked")) {
                is_avg.val(0);
            } else {
                is_avg.val(1);
            }
            var hard = $(this).find("input[name=hard]"); //难度试题分类字段

            test_seq.val(sortTr);

            test_seq.removeAttr("name").attr("name", "test_seq_" + sortTr);
            test_type.removeAttr("name").attr("name", "test_type_" + sortTr);
            test_tittle.removeAttr("name").attr("name", "test_tittle_" + sortTr);
            test_peer_score.removeAttr("name").attr("name", "test_peer_score_" + sortTr);
            test_classify_id.removeAttr("name").attr("name", "test_classify_id_" + sortTr);
            is_avg.removeAttr("name").attr("name", "is_avg_" + sortTr);
            hard.removeAttr("name").attr("name", "hard_" + sortTr);
        });
    }

}

//编辑试卷页默认显示哪种体型列表
function hasShowTypeList() {
    $(".customerTab").hide();
    var type = $("#paper_type_select").val();
    if (type == 1) { //选题组卷
        $(".tab1").show();
        return;
    }
    if (type == 2) { //抽题组卷
        $(".tab2").show();
        return;
    }
    if (type == 3) { //随机组卷
        $(".tab3").show();
        return;
    }
};

//异步保存fn
function savePaperFn(url, type) {
    var dataForm = $('#subForm').serialize();
    $.ajax({
        type: "POST",
        cache: false,
        headers: {"cache-control": "no-cache"},
        dataType: "json",
        url: url,
        data: dataForm,
        success: function (msg) {
            if (msg.msg == "True") {
                if (type == "create") {
                    $("#jumpToExamPublish").attr("paper_info_id", msg.id);
                    $("#jumpToUpdate").attr("paper_id", msg.id);
                    showJumpDialog();
                } else {
                    $("#jumpToExam").attr("paper_id", $("input[name=paper_info_id]").val());
                    $("#jumpToUpdate").attr("paper_id", $("input[name=paper_info_id]").val());
                    showJumpDialog();
                }
            } else {
                alert("操作失败，请联系管理员！");
            }
        }
    });
}

//显示选择分类对话框
function showJumpDialog() {
    $('#jumpDialog').modal({
        backdrop: "static",
        keyboard: false
    });
}

//跳转组卷方式页面
function manualInputTest(url, type) {
    var classification = $("input[name=classification]").val();
    var paper_name = $("input[name=paper_name]").val();
    paper_name = encodeURIComponent(paper_name);
    // paper_name = encodeURIComponent(paper_name);
    // .replace(/%/g,"%25")//百分号(%)制定特殊字符
    // .replace(/#/g,"%23")//#号指定书签
    // .replace(/&/g,"%26")//&号分隔参数
    // .replace(/@/g,"%40")
    // .replace(/\?/g,"%3F")//问号(?)分隔URL和查询
    // .replace(/\//g,"%2F")//正斜杠(/)分隔目录和子目录
    // .replace(/\+/g,"%2B");//替换URL中有特殊含义的字符
    var paper_style = $("input[name=paper_style]").val();
    var add_style = $("input[name=add_style]").val();
    window.location.href = "/admin/paper_manual_add?" +
        "&paper_name=" + escapeHTML(paper_name) + "&paper_style=" + paper_style + "&paper_type=" + type + "&add_style=" + add_style + "&perTimeRestrict=" + limit_q_time;
}

function escapeHTML(text) {
    return text.replace(/\%/g, "%25")
        .replace(/\+/g, "%2B");
}
