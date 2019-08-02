var updateQuestionId = "";
var paper_type = $("input[name=paperType]").val();
var perTimeRestrict = $("input[name=perTimeRestrict]").val();
var selTr = "";
var ajaxUrl = ""; //保存提交URL，根据不同模板判断
var exsit_ids = "";//整个试卷中已经添加的试题的id
var selType = ""; //存储试题分类
var commit_ids = "";//存储已选试题id
function getParam(paramName) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == paramName) {
            return pair[1];
        }
    }
    return (false);
}

var typeObject = {
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": [],
    "6": [],
    "7": []
};
var typeObjectLabel = {
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": [],
    "6": [],
    "7": []
};
var _checked_this; //储存被点击'添加试题'的大题的this
$(document).ready(function () {
    //更改考试名称输入框失焦时 替换隐藏的考试名称
    $("input[name=edit_paper_name]").blur(function () {
        if ($(this).val() !== $("#asyncForm_paper input[name=paperName]").val()) {
            $("#asyncForm_paper input[name=paperName]").val($(this).val());
        }
    });
    //切换答案数量
    $("body").on("change", "select[name=tab_num]", function (e) {
        var parentDom = $(this).parents(".group_simple");
        changeNum(parentDom, $(this).val());
    });
    //默认显示4个答案
    changeNum(4);
    /******2.0新增事件 ******/
        //保存大题默认名称
    var queName = "";
    //创建新的大题
    $(".questionType_add").click(function (e) {
        // 收起选择试题类型
        $(this).parents(".btn-group").removeClass("open");
        var type = $(this).attr("num");
        var sortRandom = Math.random(); //随机数用于移动顺序
        $("#group_simple").find(".questionTypeText").text($(this).text());
        $("#group_simple").find("input[name=test_tittle]").attr("sort", sortRandom);
        $("#group_simple").find("input[name=test_peer_score]").attr("sort", sortRandom);
        $("#group_simple").find("input[name=test_peer_time]").attr("sort", sortRandom);
        $("#group_simple").find("input[name=totelNum]").attr("sort", sortRandom);
        if (type == 1 || type == 2) {
            $("#group_simple").find(".options-disorder").removeClass("hidden");
        } else {
            $("#group_simple").find(".options-disorder").addClass("hidden");
        }

        var html = '<div class="group_simple" questionType="' + type + '" sort="' + sortRandom + '">' + $("#group_simple").html() + '</div>';
        $("div.group_main").append(html);
        var $group = $(".group_main .group_simple").last();

        if (paper_type == "3") {
            $('.question-disorder').hide();
        } else {
            $('.question-disorder').show();
        }

        $(".options-disorder .tooltip-disorder").tooltip();

        //试卷大题默认名称，可修改
        switch (type) {
            case "1":
                queName = "单选题";
                break;
            case "2":
                queName = "多选题";
                break;
            case "3":
                queName = "判断题";
                break;
            case "4":
                queName = "填空题";
                break;
            case "5":
                queName = "问答题";
                break;
            case "6":
                queName = "组合题";
                break;
            case "7":
                queName = "录音题";
                break;
        }
        var inputBox = $("div[questionType=" + type + "]").find("input[name=test_tittle]");
        inputBox = inputBox.eq(inputBox.length - 1);
        inputBox.val(queName);
        //左侧添加相应大题信息
        var htmlLeft = '<div onclick="leftItemClick(this)" data-catename="' + queName + '" class="item group_simple left_group_simple animate" sort="' + sortRandom + '">' +
            '<p><h3 class="test_tittle" sort="' + sortRandom + '">' + queName + '</h3></p>' +
            ((type == '6' && paper_type == "1") ? '<p class="left_p">共<span class="test_num" sort="' + sortRandom + '">0</span>题 ，含 <span class="small_test_num" sort="' + sortRandom + '">0</span> 小题 </p><p class="left_p">共 <span class="all_fraction" sort="' + sortRandom + '">0</span> 分数</p>' : '<p class="left_p">共<span class="test_num" sort="' + sortRandom + '">0</span>题 ，共 <span class="all_fraction" sort="' + sortRandom + '">0</span> 分数</p>') +
            ((perTimeRestrict == "0") ? '' : '<p class="left_p" id="oneQTime">每题答题时长<input type="text" name="every_q_time" line-height: 15px" sort="' + sortRandom + '">秒</p>') +
            '<p class="left_p">每题分数<input type="text" name="test_peer_score" line-height: 15px" sort="' + sortRandom + '">分</p>' +
            '<p class="test_icon_a"><a href="javascript:void(0)" class="m-content-trash icon-a_operate_delete" aria-hidden="true" title="移除" sort="' + sortRandom + '" data-toggle="tooltip" data-placement="top" data-original-title="删除"></a>' +
            '<a href="javascript:void(0)" class="m-content-up glyphicon icon-a_operate_move_up" aria-hidden="true" title="上移" sort="' + sortRandom + '" data-toggle="tooltip" data-placement="top" data-original-title="上移"></a>' +
            '<a href="javascript:void(0)" class="m-content-down glyphicon icon-a_operate_move_down" aria-hidden="true" title="下移" sort="' + sortRandom + '" data-toggle="tooltip" data-placement="top" data-original-title="下移"></a></p>' +
            '<div class="q_s_line"></div>' +
            '</div>';

        $(".info-board .total").before(htmlLeft);
        //手工录入创建添加试题DOM
        if (paper_type == "1" && $("input[name=classification]").val() != "" && $("input[name=add_style]").val() == "manual") {
            createGroupSimple(sortRandom, type);
        }

        //如果是选择试题
        if ($("input[name=add_style]").val() == "select") {
            if (type == "6" && paper_type == "1") {
                $($group).find(".inline-ite").hide();
            }
            showOptionScore(sortRandom, type);
        }

        changeLeftInfoFn(inputBox, 3, queName);
        if (paper_type == 3) {
            fixMChoicesQuestionStyle();
        }

    });

    //联动左右大题信息
    $("body").on("keyup", ".info-board input[name=test_peer_score]", function (e) {
        // var num = $(this).parents().siblings().children(".test_num").text();
        changeLeftInfoFn(this, 1, queName);
    });

    $("body").on("keyup", ".group_main .group_simple input[name=test_peer_score]", function (e) {
        $(this).parents(".group_simple").find("input[name=per_score]").val($(this).val());
        changeLeftInfoFn(this, 2, queName);
    });

    $("body").on("keyup", ".group_main .group_simple input[name=test_tittle]", function (e) {
        changeLeftInfoFn(this, 3, queName);
    });

    $("body").on("keyup", ".info-board input[name=every_q_time]", function (e) {
        // var num = $(this).parents().siblings().children(".test_num").text();
        changeLeftInfoFn(this, 4, queName);
    });

    // 若每小题分数与大题设置不同，则清空左侧和大题每题分数
    $("body").on("keyup", ".group_main .group_simple input[name=per_score]", function (e) {
        var $group = $(this).parents(".group_simple");
        var type = $($group).attr("questionType");
        if (type != 6) {
            var per_obj = $($group).find("input[name=test_peer_score]");
            per_obj.val("");
            changeLeftInfoFn(per_obj, 2, queName);
        } else {
            // 组合题不对每题设置分数（本身相当于一道大题）
            var score = $(this).val();
            $(this).parents(".m-example").find(".member-score").val(score);
            totalScoreFn();
        }
    });

    $("body").on("keyup", ".group_main .group_simple input[name=per_time]", function (e) {
        var $group = $(this).parents(".group_simple");
        var type = $($group).attr("questionType");
        if (type != 6) {
            var per_obj = $($group).find("input[name=test_peer_time]");
            per_obj.val("");
            changeLeftInfoFn(per_obj, 5, queName);
        } else {
            // 组合题不对每题设置分数（本身相当于一道大题）
            var score = $(this).val();
            $(this).parents(".m-example").find(".member_second").val(score);
            totalTimeFn();
        }
    });

    // ====================================================================================

    $("body").on("keyup", ".group_main .group_simple input.member-score", function (e) {
        $(this).val($.trim($(this).val()));
        var value = $(this).val();
        if (value == '' && isNaN(value) && value % 0.5 != 0) {
            alert('分数为数字且为0.5的倍数!');
        }
        var $example = $(this).parents(".m-example");
        $($example).find("input[name=per_score]").val("");
        var Rsort = $($example).parents('.group_simple').attr('sort');
        $('.left_group_simple').each(function (index, element) {
            if ($(this).attr('sort') == Rsort) {
                $(this).find("input[name=test_peer_score]").val("");
            }
        });
        totalScoreFn();
    });


    $("body").on("keyup", ".group_main .group_simple input.member_second", function (e) {
        $(this).val($.trim($(this).val()));
        var value = $(this).val();
        var regex = /^\d+\.[1-9]+$/;  // true 小数
        if (value == '' && isNaN(value) && regex.test($(this).val())) {
            alert('时长为数字且为整数!');
        }
        var $example = $(this).parents(".m-example");
        $($example).find("input[name=per_time]").val("");
        var Rsort = $($example).parents('.group_simple').attr('sort');
        $('.left_group_simple').each(function (index, element) {
            if ($(this).attr('sort') == Rsort) {
                $(this).find("input[name=every_q_time]").val("");
            }
        });
        totalTimeFn();
    });

    //保存单个试题
    $("body").on("click", "button.saveQuestionBtn", function (e) {
        var parentDom = $(this).parents(".group_questionAdd");
        if (checkForm_question(parentDom)) {
            if (serializeForm_question(parentDom)) {
                asyncTestSub(parentDom);
            }
        }
    });

    //单选多选题添加多个
    $("body").on("click", "a.addKeyRadioOrCheck", function (e) {
        var parentDom = $(this).parents(".questionContent");
        var keyLength = parentDom.find(".q-item:visible").length;
        if (keyLength >= 20) {
            return;
        }
        parentDom.find("div.q-item").eq(keyLength).show();
        parentDom.parents(".questions-group").find("input[name=tab_num]").val(parentDom.find(".q-item:visible").length);
    });
    //单选多选题删除多个
    $("body").on("click", "a.removeKeyRadioOrCheck", function (e) {
        $(this).parents("div.questionContent").find("div.keyFillContentAdd:visible:last").hide();
        $(this).parents(".questions-group").find("input[name=tab_num]").val($(this).parents("div.questionContent").find(".q-item:visible").length);
    });

    //填空题添加多个
    $("body").on("click", "a.addKeyFill", function (e) {
        // $(".questionContent .keyFillContent_first .bootstrap-tagsinput").eq(0).hide();
        var parentDom = $(this).parents(".questionContent");
        var keyLength = parentDom.find("input[name=keyFill]").length - 1;
        if (keyLength >= 20) {
            alert("最多只能有20个填空选项。");
            return;
        }
        var html = '<div class="q-item keyFillContent keyFillContentAdd"><span>答案</span><input name="keyFill" type="text" class="q-ipt q-ipt-t" /></div>';
        parentDom.find("div.q-opra").before(html);
    });
    //填空题删除多个
    $("body").on("click", "a.removeKeyFill", function (e) {
        $(this).parents("div.questionContent").find("div.keyFillContentAdd:last").remove();
    });
    //编辑添加的试题
    $("body").on("click", ".m-example-edit", function (e) {
        $('.tooltip.fade').remove();
        updateQuestionId = $(this).attr("questionId");
        window.open('/admin/update?id=' + updateQuestionId, "_blank");
    });
    //移除添加的试题
    $("body").on("click", ".m-example-remove", function (e) {
        $('.tooltip.fade').remove();
        totalTestNumFn($(this).parents(".group_simple").attr("sort"), 2);
        if ($(this).parents(".group_simple").find(".m-example").length == 1) { //大题的小题全部删除后，显示空空如也  如果目前仅剩1个小题，移除后即0个，所以先判断为1，否则定位不到大题位置
            $(this).parents(".group_simple").find(".empty_q_tip").show();
        }
        $(this).parents(".m-example").remove();
        totalScoreFn();
        totalTimeFn();
    });

    //左侧大题移除
    $("body").on("click", ".m-content-trash", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('.tooltip.fade').remove();
        var parentDom = $("div.left_group_simple");
        var contentDom = $(".group_main .group_simple");
        var sortId = $(this).attr("sort");
        var r = confirm("确认移除已添加的大题？");
        if (r == true) {
            //左侧移除
            parentDom.each(function (index, element) {
                var objId = $(this).attr("sort");
                if (objId === sortId) {
                    $(this).remove();
                    return;
                }
            });
            //右侧移除
            contentDom.each(function (index, element) {
                var objId = $(this).attr("sort");
                if (objId === sortId) {
                    $(this).remove();
                    return;
                }
            });
            totalScoreFn();
            totalTimeFn();
        }
        // 当删除完所有题型时，恢复添加试题按钮样式以及空题型提示
        var totalLength = $(".group_main .group_simple").length;
        // 新页面设计-会影响布局，所以注释这些代码
        // if (totalLength == 0){
        //     $("#manualInput .questions-board .com-drop ").removeClass("buttonLeft");
        //     $("#manualInput .questions-board .emptyTip").show();
        // }
    });

    //左侧大题下移
    $("body").on("click", ".m-content-down", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('.tooltip.fade').remove();
        var parentDom = $("div.left_group_simple");
        var contentDom = $(".group_main .group_simple");
        var sortId = $(this).attr("sort");
        if (parentDom.length > 1) {
            //左侧移动
            parentDom.each(function (index, element) {
                var objId = $(this).attr("sort");
                if ((objId === sortId) && (index != parentDom.length - 1)) {
                    $(parentDom[index + 1]).after($(this).clone());
                    $(this).remove();
                    return;
                }
            });
            //右侧移动
            contentDom.each(function (index, element) {
                var objId = $(this).attr("sort");
                if ((objId === sortId) && (index != parentDom.length - 1)) {
                    $(contentDom[index + 1]).after($(this).clone());
                    $(this).remove();
                    return;
                }
            });

        }
    });

    //左侧大题上移
    $("body").on("click", ".m-content-up", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('.tooltip.fade').remove();
        var parentDom = $("div.left_group_simple");
        var contentDom = $(".group_main .group_simple");
        var sortId = $(this).attr("sort");
        if (parentDom.length > 1) {
            //左侧移动
            parentDom.each(function (index, element) {
                var objId = $(this).attr("sort");
                if ((objId === sortId) && (index != 0)) {
                    $(parentDom[index - 1]).before($(this).clone());
                    $(this).remove();
                    return;
                }
            });
            //右侧移动
            contentDom.each(function (index, element) {
                var objId = $(this).attr("sort");
                if ((objId === sortId) && (index != 0)) {
                    $(contentDom[index - 1]).before($(this).clone());
                    $(this).remove();
                    return;
                }
            });

        }
    });


    //试题下移
    $("body").on("click", ".m-example-down", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('.tooltip.fade').remove();
        var parentDom = $(this).parents("div.manual-cont");
        var questionId = $(this).parents("div.m-example").attr("questionId");
        if (parentDom.find("div.m-example").length > 1) {
            parentDom.find("div.m-example").each(function (index, element) {
                var objId = $(this).attr("questionId");
                if ((objId === questionId) && (parentDom.find("div.m-example").length > (index + 1))) {
                    $(parentDom.find("div.m-example")[index + 1]).after($(this).clone());
                    $(this).remove();
                    return;
                }
            });
        }
    });
    //试题上移
    $("body").on("click", ".m-example-up", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('.tooltip.fade').remove();
        var parentDom = $(this).parents("div.manual-cont");
        var questionId = $(this).parents("div.m-example").attr("questionId");
        if (parentDom.find("div.m-example").length > 1) {
            parentDom.find("div.m-example").each(function (index, element) {
                var objId = $(this).attr("questionId");
                if ((objId === questionId) && (index != 0)) {
                    $(parentDom.find("div.m-example")[index - 1]).before($(this).clone());
                    $(this).remove();
                    return;
                }
            });
        }
    });

    //保存试卷
    $("body").on("click", "button#savePaperBtn", function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (checkForm_paper()) {
            if (serializeForm_paper()) {
                asyncPaperSub();
            }
        }
    });

    //选择分类
    $("body").on("click", "#selTypeLink", function (e) {
        e.stopPropagation();
        e.preventDefault();
        showSelType(this);
    });

    // 选择标签
    $("body").on("click", "#selLabelLink", function (e) {
        showSelLabel(this);
    });

    //选题组卷选择试题
    $("body").on("click", "a.selQuestionLink", function (e) {
        e.stopPropagation();
        e.preventDefault();
        var type = $(this).parents().parents().siblings("span").text();
        //console.log(this);
        var subject = getParam('subject');
        subject = decodeURI(subject);
        showSelQuestions(this, type, subject);
    });
    //选题组卷管理试题
    $("body").on("click", ".group_simple a.modifyQuestionLink", function (e) {
        e.stopPropagation();
        e.preventDefault();
        var type = $(e.target).parents().parents().parents().siblings(".questionTypeText").text();
        var subject = getParam('subject');
        subject = decodeURI(subject);
        showSelQuestions(this, type, subject);
    });
    //抽题、随机组卷选择试题分类
    $("body").on("click", ".group_simple .selQuestionsTypeLink", function (e) {
        var diff1 = $(this).parents(".group_simple").find(".diff_div .diff1").text();
        var diff2 = $(this).parents(".group_simple").find(".diff_div .diff2").text();
        var diff3 = $(this).parents(".group_simple").find(".diff_div .diff3").text();
        if (diff1 == '') {
            diff1 = 0;
        }
        if (diff2 == '') {
            diff2 = 0;
        }
        if (diff3 == '') {
            diff3 = 0;
        }
        $('input[name=difficult1]').val(diff1);
        $('input[name=difficult2]').val(diff2);
        $('input[name=difficult3]').val(diff3);
        if (!$(this).parents(".group_simple").hasClass('click_add')) {
            difficultModalReset();
        }
        var getType = $(this).parents(".group_simple").attr("questiontype");
        getSelQuestion(getType);
        showCheckedClassLabel(this); //抽题/随机组卷勾选回显
        e.stopPropagation();
        e.preventDefault();
        selType = getType;
        selTr = $(this).parents(".group_simple");
        if ($(selTr).hasClass('click_add')) {
            getTableData($(this).parents(".extract-box-tit").find("input[name=test_classify_id]").val(), $(this).parents(".extract-box-tit").find("input[name=test_label_id]").val());
        }
        showQuestionsType(this);
        $(this).parents(".group_simple").addClass('click_add');
    });

    //抽题/随机组卷勾选回显
    function showCheckedClassLabel(_this) {
        _checked_this = _this; //这个全局变量在点击选择弹窗的'确定'按钮时、在树里显示勾选时用到
        var class_ids = $(_this).parents('.extract-box-tit').find("input[name='test_classify_id']").val();
        var label_ids = $(_this).parents('.extract-box-tit').find("input[name='test_label_id']").val();
        $(_this).parents('.extract-box-tit').find(".checked_classify_ids").val(class_ids); //试题分类的勾选项与提交项一致（提交项是最终设置，勾选项只是查询条件）
        $(_this).parents('.extract-box-tit').find(".checked_label_ids").val(label_ids); //试题标签的勾选项与提交项一致（提交项是最终设置，勾选项只是查询条件）
        if (class_ids == "") { //如果为空，文案变回请选择
            $("#selTypeLink").text('请选择');
        }
        if (label_ids == "") { //如果为空，文案变回请选择
            $("#selLabelLink").text('请选择');
        }
    }

    $('#saveTextBtn').on('click', function () {
        var difficult = "";
        var totelNum = "";
        var simple = $('input[name=difficult1]').val();
        var middle = $('input[name=difficult2]').val();
        var hard = $('input[name=difficult3]').val();
        var difficult1_num = $('#difficultModal .difficult1_num').text();
        var difficult2_num = $('#difficultModal .difficult2_num').text();
        var difficult3_num = $('#difficultModal .difficult3_num').text();
        var checked_class_ids = $(_checked_this).parents('.extract-box-tit').find(".checked_classify_ids").val();//勾选的试题分类id
        $("input[name=classification]").val(checked_class_ids); //将勾选的id赋给提交参数
        selTr.find("input[name=test_classify_id]").val(checked_class_ids);
        var checked_label_ids = $(_checked_this).parents('.extract-box-tit').find(".checked_label_ids").val();//勾选的试题标签id
        $("input[name=label]").val(checked_label_ids);
        selTr.find("input[name=test_label_id]").val(checked_label_ids);
        if (simple == '' || middle == '' || hard == '') {
            alert("数量不能为空!");
            return;
        }
        if (simple == "0" && middle == "0" && hard == "0") {
            alert("数量不能全为0！");
            return;
        }
        if (parseInt(simple) > parseInt(difficult1_num)) {
            alert("数量过大，请重新填写！");
            return;
        }
        if (parseInt(middle) > parseInt(difficult2_num)) {
            alert("数量过大，请重新填写！");
            return;
        }
        if (parseInt(hard) > parseInt(difficult3_num)) {
            alert("数量过大，请重新填写！");
            return;
        }
        difficult = simple + "," + middle + "," + hard;
        totelNum = parseInt(simple) + parseInt(middle) + parseInt(hard);
        saveDifficultFn(difficult, totelNum);
        hideDifficultModal();
    });

    //根据组卷类型显示不同默认模板及标题
    paperTypeShowTemp();

    //每题分数限制为0.5的倍数
    $("body").on("change", "input[name='option_peer_score']", function (e) {
        e.stopPropagation();
        e.preventDefault();
        var score = $(this).val();
        if (score % 0.5 != 0) {
            alert('请保证每题分数为0.5的倍数!');
        }
        ;
    });
    //漏选给分显示每个选项分数输入框
    $("body").on("change", "input[name='less_choice_confirm']", function (e) {
        if (this.checked) {
            $(this).parent().children("span[name='option_peer_score_show']").css("display", "inline");
        } else {
            $(this).parent().children("span[name='option_peer_score_show']").css("display", "none");
        }
        ;
    });

    //试卷预览
    $("#previewBtn").click(function (e) {
        if (checkForm_paper()) {
            setTimeout(function () {
                if (serializeForm_paper()) {
                    $("#asyncForm_paper").attr("action", "/admin/paper_preview/");
                    window.open("", "theWindow");
                    $("#asyncForm_paper").submit();
                }
            }, 500);
        }
    });

    //试卷下载
    $("#downloadBtn").click(function (e) {
        if (checkForm_paper()) {
            setTimeout(function () {
                if (serializeForm_paper()) {
                    $("#asyncForm_paper").attr("action", "/admin/paper_download/");
                    $("#iframe-box").html('<iframe style="display: none;" name="asyncForm_paper" src="/admin/paper_download/"></iframe>');
                    $("#asyncForm_paper").submit();
                }
            }, 500);
        }
    });

    //引导内容
    if (is_first_visit == 'True') {
        //判断有无alert
        var flag = true;//定义状态标志
        var alertFun = window.alert;
        window.alert = function (str) {
            flag = false;
            alertFun(str);
        };

        var guide = $(".guide");
        if (guide.length != 0) {
            var step = parseInt($(guide).attr("step"));
            guide = $(".guide[step=" + step + "]");
            $(guide).addClass("guide-step");

            var guide_width = $(guide).width();
            var guide_height = $(guide).height();
            var guide_top = $(guide).offset().top;
            var guide_left = $(guide).offset().left;
            guidePosition(step);
            $(".guide-layer").css("top", guide_top + guide_height + adjust_t).css("left", guide_left + guide_width + adjust_l);
            $(".guide-layer").show();
        }
        $(".guide-layer .next-step").click(function (e) {
            e.stopPropagation();
            e.preventDefault();
            if (guide.length > 0) {
                if ($(".guide").length == 1) {
                    $(".guide-btn").click();
                } else {
                    $(guide).find(".guide-btn").click();
                    if (flag == false) {
                        return false;
                    } else {
                        step = step + 1;
                        if (step > 6) return false;
                        guide = $(".guide[step=" + step + "]");
                        $(".guide-step").removeClass("guide-step");

                        $(guide).addClass("guide-step");
                        guide_width = $(guide).width();
                        guide_height = $(guide).height();
                        guide_top = $(guide).offset().top;
                        guide_left = $(guide).offset().left;
                        guidePosition(step);
                        $(".guide-layer").css("top", guide_top + guide_height + adjust_t).css("left", guide_left + guide_width + adjust_l);
                    }
                }
            }
        });
        $(".guide-layer .get").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(".guide-layer").hide();
        });

    }


});

//试题验证表单选项
function checkForm_question(parentDom) {
    var parentDom = $(parentDom);
    if (parentDom.parents(".group_simple").find("input[name=test_tittle]").val() == "") {
        alert("请输入题型名称；（例如：选择题）！");
        return false;
    }

    var type = parentDom.parents(".group_simple").attr("questionType");
    var questionEditor = parentDom.find("input[name=question]").val();

    if (questionEditor == "") {
        alert("请填写试题描述！");
        return false;
    }
    if (type == 1 || type == 2) {
        var key = parentDom.find(".radioOrCheck");
        var ifCheck = 0;
        for (var i = 0; i < key.length; i++) {
            var checked = $(key[i]).is(":checked");
            $(key[i]).parent().find(".key").remove();
            if (checked === true) {
                ifCheck++;
                $(key[i]).parent().append('<input type="hidden" class="key" name="key' + (i + 1) + '" value="1" />');
            } else {
                $(key[i]).parent().append('<input type="hidden" class="key" name="key' + (i + 1) + '" value="0" />');
            }
        }
        if (ifCheck === 0) {
            alert("请选择正确答案！");
            return false;
        }
        if (type == 2 && ifCheck < 2) {
            alert("多选题要至少有两个选项哦！");
            return false;
        }
        return true;
    }
    if (type == 4) {
        var key = parentDom.parents(".cont-r").find("input[name=keyFill]");
        var ifFill = true;
        for (var i = 0; i < key.length - 1; i++) {
            if ($(key[i]).val() == "") {
                alert("请填写试题答案！");
                ifFill = false;
                break;
            }
        }
        if (ifCheck === 0) {
            alert("请选择正确答案！");
            return false;
        }
        if (type == 2 && ifCheck < 2) {
            alert("多选题要至少有两个选项哦！");
            return false;
        }
        return true;
    }
    if (type == 4) {
        var key = parentDom.parents(".cont-r").find("input[name=keyFill]");
        var ifFill = true;
        for (var i = 0; i < key.length - 1; i++) {
            if ($(key[i]).val() == "") {
                alert("请填写试题答案！");
                ifFill = false;
                break;
            }
        }
        if (ifFill == false) {
            return false;
        }
        return true;
    }
    if (type == 5 || type == 7) {
        if (parentDom.find(".textareaDom").text() == "") {
            alert("请填写试题答案！");
            return false;
        }
    }
    return true;
}

//提交试题数据合并
function serializeForm_question(parentDom) {
    var parentDom = $(parentDom);
    var type = parentDom.parents(".group_simple").attr("questionType");

    $("#asyncForm_question div").html("&nbsp;");
    $("#asyncForm_question input[name=type]").val(type);
    $("#asyncForm_question input[name=tab_num]").val(parentDom.parents(".group_simple").find("input[name=tab_num]").val());
    $("#asyncForm_question textarea[name=question]").text(parentDom.find("input[name=question]").val());
    $("#asyncForm_question textarea[name=analysis]").text(parentDom.find("div[name=analysis]").html());
    //新添加题型标题
    $("#asyncForm_question input[name=test_tittle]").val(parentDom.parents(".group_simple").find("input[name=test_tittle]").val());
    $("#asyncForm_question input[name=test_peer_score]").val(parentDom.parents(".group_simple").find("input[name=test_peer_score]").val());
    $("#asyncForm_question input[name=test_peer_time]").val(parentDom.parents(".group_simple").find("input[name=test_peer_time]").val());

    var tab_num = parentDom.parents(".group_simple").find("input[name=tab_num]").val();
    if (type == 1 || type == 2) {
        var keyList = parentDom.find(".q-item");
        for (var i = 0; i < keyList.length; i++) {
            if (i <= (tab_num - 1)) {
                var answer = parentDom.find("input[name=answer" + (i + 1) + "]").val();
                $(keyList[i]).find(".key").clone().appendTo("#asyncForm_question div");
                $("#asyncForm_question div").append('<textarea name="answer' + (i + 1) + '"></textarea>');
                $("#asyncForm_question textarea[name=answer" + (i + 1) + "]").text(answer);
            }
        }
        return true;
    } else if (type == 3) {
        if (parentDom.find("input[has=judgeYes]").is(":checked")) {
            parentDom.find("input[name=key1]").val("1");
            parentDom.find("input[name=key2]").val("0");
            $("#asyncForm_question div").html('<input type="hidden" class="" name="key1" value="1" /><input type="hidden" class="" name="key2" value="0" /><input type="hidden" class="radioOrCheck" name="answer1" value="" /><input type="hidden" class="radioOrCheck" name="answer2" value="" />');
        } else {
            parentDom.find("input[name=key1]").val("0");
            parentDom.find("input[name=key2]").val("1");
            $("#asyncForm_question div").html('<input type="hidden" class="" name="key1" value="0" /><input type="hidden" class="" name="key2" value="1" /><input type="hidden" class="radioOrCheck" name="answer1" value="" /><input type="hidden" class="radioOrCheck" name="answer2" value="" />');
        }
        return true;
    } else if (type == 4) {
        var keyList = parentDom.find("input[name=keyFill]");
        var html = "";
        var reg = /,/g;
        keyList.each(function (index, element) {
            html = '<input type="hidden" class="" name="key' + (index + 1) + '" value="1" /><input type="hidden" class="radioOrCheck" name="answer' + (index + 1) + '" value="' + $(this).val().replace(reg, "&&") + '" />';
            $("#asyncForm_question div").append(html);
        });
        return true;

    } else if (type == 5 || type == 7) {
        $("#asyncForm_question div").append('<textarea name="answer1"></textarea>');
        $("#asyncForm_question div").append('<input type="hidden" class="" name="key1" value="1" />');
        $("#asyncForm_question div textarea[name=answer1]").text(parentDom.find(".textareaDom").html());
        return true;
    }
}

//试卷验证表单选项
function checkForm_paper() {

    if ($("input[name=paperName]").val() == "") {
        alert("请输入试卷名称");
        return false;
    } else if ($("input[name=paperName]").val().length > 50) {
        alert("试卷名称不得大于50字！");
        return false;
    }

    var reg = /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
    var regex = /^\d+\.[1-9]+$/;  // true 小数
    var test_tittle = true;
    $(".group_main input[name=test_tittle]").each(function (index, element) {
        if ($(this).val() == "") {
            test_tittle = false;
            return false;
        }
    });
    var test_peer_score = true;
    $(".group_main input[name=test_peer_score]").each(function (index, element) {
        if ($(this).val() == "") {
            test_peer_score = false;
            return false;
        }
    });
    var question_per_score = true;
    $(".group_main input[name=per_score]").each(function (index, element) {
        var type = $(this).parents(".group_simple").attr("questionType");
        $(this).css('border', 'solid 1px #D8D8D8');
        $(this).parent().find(".empty_red_tip").remove();
        if ((type != 6) && (!reg.test($(this).val()))) {
            question_per_score = false;
            $(this).css('border', 'solid 1px #FF4B50');
            $(this).parent().append('<span class="empty_red_tip">请设置每题分数</span>');
            return false;
        }
    });
    var comb_per_score = true;
    $(".group_main input.member-score").each(function (index, element) {
        if (!reg.test($(this).val())) {
            comb_per_score = false;
            return false;
        }
    });
    //检查选项分数
    var option_peer_score = true;
    $(".group_main input[name=option_peer_score]").each(function (index, element) {
        if ($(this).parent().is(':visible') && ($(this).val() == "" || $(this).val() % 0.5 != 0)) {
            option_peer_score = false;
            return false;
        }
        ;
    });
    //检查每题时长 秒
    var every_q_time = true;
    $(".group_main input[name=test_peer_time]").each(function (index, element) {
        $(this).css('border', 'solid 1px #D8D8D8');
        $(this).parent().find(".empty_red_tip").remove();
        if ($(this).val() == "") {
            every_q_time = false;
            $(this).css('border', 'solid 1px #FF4B50');
            $(this).parent().append('<span class="empty_red_tip">请设置答题时长</span>');
            return false;
        }
    });
    $(".info-board input[name=every_q_time]").each(function (index, element) {
        var _val = $(this).val();
        if (_val == "" || _val.indexOf(".") > -1 || (paper_type != "1" ? (parseInt(_val) == 0 ? true : false) : false)) {
            every_q_time = false;
            return false;
        }
    });

    var question_per_time = true;
    $(".group_main input[name=per_time]").each(function (index, element) {
        var type = $(this).parents(".group_simple").attr("questionType");
        if (regex.test($(this).val()) || $(this).val().indexOf(".") > -1) {
            question_per_time = false;
            return false;
        }
    });

    var comb_per_time = true;
    var comb_per_time_vaild = true; //组合题时长是否有值
    $(".group_main input.member_second").each(function (index, element) {
        if (regex.test($(this).val())) {
            comb_per_time = false;
            return false;
        }
        if ($(this).val() == "") {
            comb_per_time_vaild = false;
            return false;
        }
    });
    // 检查每道大题下是否有小题
    var group_test_num = true;
    $(".info-board .left_group_simple").each(function (index, element) {
        if ($($(this).find(".test_num")[0]).text() == '0') {
            group_test_num = false;
            return false;
        }
    });
    if (test_tittle === false) {
        alert("请输入题型名称；（例如：选择题）！");
        return false;
    }
    if ($("input[name=per_score]").length == 0 && test_peer_score === false) {
        alert("请填写每题分数");
        return false;
    }

    if (perTimeRestrict == 1) {
        if ($("input[name=per_time]").length == 0 && every_q_time === false) {
            alert("请填写每题答题时长");
            return false;
        }
    }

    if (question_per_score === false) {
        alert("请检查每题分数！");
        return false;
    }

    if (question_per_time === false) {
        alert("请检查每题答题时长,不能为小数！");
        return false;
    }

    if (comb_per_score === false) {
        alert("请检查组合题小题分数！");
        return false;
    }

    if (comb_per_time === false) {
        alert("请检查组合题小题答题时长,不能为小数！");
        return false;
    }

    if (comb_per_time_vaild === false) {
        alert("请检查组合题小题答题时长,不能为空！");
        return false;
    }

    if (option_peer_score === false) {
        alert("请填写单个选项分数，并保证是0.5的倍数！");
        return false;
    }
    if (group_test_num === false) {
        alert("每道大题中至少添加一道小题！");
        return false;
    }

    if ($(".total_score").text() == '0') {
        alert("请至少添加一道试题！");
        return false;
    }

    if (paper_type == "1" && $("input[name=classification]").val() == "") {
        var has = "";
        $(".group_main").each(function (index, element) {
            if ($(this).find("div.m-example").length == 0) {
                alert("请选择试题！");
                has = false;
                return false;
            }
        });
        if (has === false) {
            return false;
        }
    } else if (paper_type != "1") {
        var has = "";
        $(".group_main").find("input[name=hard]").each(function (index, element) {
            if ($(this).val() == "") {
                alert("请输入抽取数量！");
                has = false;
                return false;
            }
        });
        if (has === false) {
            return false;
        }
    }

    return true;
}

//提交试卷数据合并
function serializeForm_paper() {
    $("#asyncForm_paper div").html("&nbsp;");
    $("#asyncForm_paper input[name=paperSetNum]").val($(".group_main .group_simple").length);
    $("#asyncForm_paper input[name=totalScore]").val($(".info-board .total .total_score").text());
    $("#asyncForm_paper input[name=totalTime]").val($(".info-board .total .total_time").text());
    $(".group_main .group_simple").each(function (index, element) {
        var num = index + 1;
        var html = "", test_ids = "", question_scores = "", question_time = "", test_type = "", test_peer_score = "",
            test_peer_time = "", test_tittle = "";
        var comb_data1 = [];
        var comb_data2 = [];
        var question_disorder, options_disorder;
        test_type = $(this).attr("questionType");
        test_peer_score = $(this).find("input[name=test_peer_score]").val();
        test_tittle = $(this).find("input[name=test_tittle]").val();

        // 传每题时长 判断组卷方式
        if (perTimeRestrict == '1') {
            if (paper_type != "1") {
                test_peer_time = $(".info-board input[name=every_q_time]")[index].value
            } else {
                test_peer_time = $(this).find("input[name=every_q_time]").val();
            }
        }


        //手工录入，选题获取试题ids
        if (paper_type == "1") {
            $(this).find("div.m-example").each(function (index, element) {
                if (test_type != "6") {//非组合题
                    test_ids += $(this).attr("questionId") + ",";
                    question_scores += $(this).find("input[name=per_score]").val() + ",";
                    question_time += $(this).find("input[name=per_time]").val() + ",";
                } else {//组合题
                    var comb_id = $(this).attr("questionId");
                    comb_data1[index] = {};
                    comb_data1[index][comb_id] = {};
                    comb_data2[index] = {};
                    comb_data2[index][comb_id] = {};
                    var $index = index;
                    $(this).find(".member-question").each(function (index, element) {
                        var $member = $(this).parent("dt");
                        var s_id = $(this).attr("s_id");
                        var s_score = $($member).find(".member-score").val();
                        var s_time = $($member).find(".member_second").val();
                        comb_data1[$index][comb_id][s_id] = s_score;
                        comb_data2[$index][comb_id][s_id] = s_time;
                    });
                }
            });
        } else { //抽题，随机获取试题
            html += '<input type="hidden" name="isAvg' + num + '" value="1"  />';//平均抽题是否勾选，默认不勾选
            var test_classify_id = $(this).find("input[name=test_classify_id]").val(); //试题分类字段
            var test_label_id = $(this).find("input[name=test_label_id]").val(); //试题标签字段
            html += '<input type="hidden" name="testClassifyId' + num + '" value="' + test_classify_id + '"  />';
            html += '<input type="hidden" name="testLabelId' + num + '" value="' + test_label_id + '"  />';
            var hard = $(this).find("input[name=hard]").val(); //难度试题分类字段
            html += '<input type="hidden" name="hard' + num + '" value="' + hard + '"  />';
        }


        // 试题乱序
        if ($($(this).find("input[name=question_disorder]")[0]).is(":checked")) {
            question_disorder = '1';
        } else {
            question_disorder = '0';
        }

        // 选项乱序
        if ($($(this).find("input[name=options_disorder]")[0]).is(":checked")) {
            options_disorder = '1';
        } else {
            options_disorder = '0';
        }

        //如果漏选得分checked，则取值1
        if ($(this).find("input[name=less_choice_confirm]").is(":checked")) {
            less_choice_confirm_value = '1';
        } else {
            less_choice_confirm_value = '0';
        }

        option_peer_score = $(this).find("input[name=option_peer_score]").val();
        // 组合题和多选题，对应DOM树上没有 input[name=option_peer_score] 标签
        option_peer_score = typeof option_peer_score == "undefined" ? "" : option_peer_score;

        if (test_type == "6" && paper_type == "1") {
            html += '<input type="hidden" name="comb' + num + '" value="' + JSON.stringify(comb_data1).replace(/\"/g, "\'") + '" />' +
                '<input type="hidden" name="comb_t' + num + '"value="' + JSON.stringify(comb_data2).replace(/\"/g, "\'") + '" />';
        } else {
            html += '<input type="hidden" name="testIds' + num + '" value="' + test_ids + '" />';
            if (question_scores == "") {
                html += '<input name="testPeerScore' + num + '" value="' + test_peer_score + '"  />';
            } else {
                html += '<input type="hidden" name="questionScores' + num + '" value="' + question_scores + '" />'
            }
            if (question_time == "") {
                html += '<input name="testPeerTime' + num + '" value="' + test_peer_time + '"  />';
            } else {
                html += '<input type="hidden" name="perQuestionTime' + num + '" value="' + question_time + '" />'
            }
        }
        html += '<input type="hidden" name="testType' + num + '" value="' + test_type + '" />';
        html += '<input name="lessChoiceConfirm' + num + '" value="' + less_choice_confirm_value + '"  />';
        html += '<input name="optionPeerScore' + num + '" value="' + option_peer_score + '"  />';
        html += '<input type="hidden" name="testTittle' + num + '" value="' + test_tittle + '"  />';
        html += '<input type="hidden" name="testSeq' + num + '" value="' + num + '" />';
        html += '<input type="hidden" name="questionDisorder' + num + '" value="' + question_disorder + '" />';
        html += '<input type="hidden" name="optionsDisorder' + num + '" value="' + options_disorder + '" />';
        $("#asyncForm_paper div").append(html);
    });
    return true;
}


//异步提交表单保存试卷
function asyncPaperSub(obj) {
    var dataForm = $('#asyncForm_paper').serializeArray();
    var data = {};
    $(dataForm).each(function(index, obj){
        data[obj.name] = obj.value;
    });
    data['subject'] = decodeURI(getParam('subject'));
    console.log(data);
    $.ajax({
        type: "POST",
        dataType: "json",
        url: ajaxUrl,
        data: JSON.stringify(data),
        contentType: 'application/json;charset=UTF-8',
        success: function (msg) {
            if (msg.status == 'ok') {
                //console.log(ajaxUrl);
                if ($("#savePaperBtn").hasClass('addPaperOnly')) {
                    // 只创建试卷
                    window.location.href = '/html/exam/paper_mgr_new.html';
                } else {
                    // 继续创建考试
                    window.location.href = "/html/exam/exam_add?paper_info_id=" + msg.paper_id;
                }
            } else {
                alert("保存失败！");
            }
        }
    });
}

//提交单个试题表单
function asyncTestSub(parentDom) {
    var dataForm = $('#asyncForm_question').serialize();
    $.ajax({
        type: "POST",
        cache: false,
        headers: {"cache-control": "no-cache"},
        dataType: "json",
        url: "/admin/add_single_test",
        data: dataForm + "&t=" + Math.random(),
        success: function (msg) {
            if (msg.success == true) {
                createQuestionsViewFn(msg.bizContent, parentDom, 'manual');
                clearFormFn(parentDom);
                // alert("保存成功！");
            } else {
                alert(msg.desc);
            }
        }
    });
}

/******2.0新增方法 ******/
//根据组卷类型显示不同默认模板及标题
function paperTypeShowTemp() {
    var title = $("#tabTitleText");
    var classification = $("input[name=classification]").val();
    if (paper_type == "1") {
        if (classification != 0) {
            title.text("手动录入题目");
            ajaxUrl = "/admin/paper_manual_add";
            return;
        } else {
            title.text("选题组卷");
            $("div.questionContet_simple , div.group_questionAdd").remove();
            $("div.group_title").append($("#paperTpye1").html());
        }
    } else if (paper_type == "2") {
        title.text("抽题组卷");
        $("div.diff_div").show();
        $("div.questionContet_simple , div.group_questionShow , div.group_questionAdd").remove();
        $("div.group_title").append($("#paperTpye2").html());
    } else if (paper_type == "3") {
        title.text("随机组卷");
        $("div.diff_div").show();
        $("div.questionContet_simple , div.group_questionShow , div.group_questionAdd").remove();
        $("div.group_title").append($("#paperTpye2").html());
    }
    ajaxUrl = "/exam/add_paper";
}

//根据试题类型创建新增试题DOM
function createGroupSimple(sortRandom, questionType) {
    $("div.group_main .group_simple").each(function (index, element) {
        var sortDom = $(this).attr("sort");
        var questionContentHtml = "";
        if (sortDom == sortRandom) {

            $(this).find("input[name=test_tittle]").attr("sort", sortRandom);
            $(this).find("input[name=test_peer_score]").attr("sort", sortRandom)
            $(this).find("input[name=test_peer_time]").attr("sort", sortRandom);

            if (questionType == "1") {
                questionContentHtml = $(".questionContet_simple .questionContent_radio").html();
            } else if (questionType == "2") {
                questionContentHtml = $(".questionContet_simple .questionContent_checkbox").html();
            } else if (questionType == "3") {
                questionContentHtml = $(".questionContet_simple .questionContent_judge").html();
            } else if (questionType == "4") {
                questionContentHtml = $(".questionContet_simple .questionContent_fill").html();
            } else if (questionType == "5" || questionType == "7") {
                questionContentHtml = $(".questionContet_simple .questionContent_cloze").html();
            }
            $(this).find(".questionContent").html(questionContentHtml);

            if (questionType == "1" || questionType == "2") {
                $(this).find(".hasSelType").css("display", "inline-block");
                //默认显示4个答案
                changeNum(this, 4);
            }

            //多选题显示单项分数选项
            if (questionType == "2") {
                $(this).find("#selection_score").css("display", "inline-block");
                $(this).find("#selection_score span[name=option_peer_score_show]").remove();
                $(this).find("#selection_score span[name=vacant]").remove();
            }
        }
    });
}

//抽题组卷显示单项分数
function showOptionScore(sortRandom, questionType) {
    $("div.group_main .group_simple").each(function (index, element) {
        var sortDom = $(this).attr("sort");
        var questionContentHtml = "";
        if (sortDom == sortRandom) {

            $(this).find("input[name=test_tittle]").attr("sort", sortRandom);
            $(this).find("input[name=test_peer_score]").attr("sort", sortRandom);
            $(this).find("input[name=test_peer_time]").attr("sort", sortRandom);

            //多选题显示单项分数选项
            if (questionType == "2") {
                $(this).find("#selection_score").css("display", "inline-block");
                $(this).find("#selection_score span[name=option_peer_score_show]").remove();
                $(this).find("#selection_score span[name=vacant]").remove();
            }
        }
    });
}

//切换答案数量fn
function changeNum(dom, num) {
    $(dom).find(".q-item").each(function (index, element) {
        if (index + 1 <= num) {
            $(this).show();
            return;
        }
        $(this).hide();
    });
}

//新增试题后创建显示试题内容fn
function createQuestionsViewFn(obj, parentDom, q_type, create_type) {
    var html = "";
    var num = Number(obj.tab_num);
    var per_score;
    var per_time;

    if (create_type == 'update') {
        per_score = $(".m-example[questionId=" + obj.id + "]").parents(".group_simple").find("input[name=test_peer_score]").val();
        per_time = $(".m-example[questionId=" + obj.id + "]").parents(".group_simple").find("input[name=test_peer_time]").val();
    } else {
        per_score = $(parentDom).parents(".group_simple").find("input[name=test_peer_score]").val();
        per_time = $(parentDom).parents(".group_simple").find("input[name=test_peer_time]").val();
    }
    if (obj.type == "1" || obj.type == "2") {
        //console.log('单选或者');
        //内容填充
        try {
            if (obj.answer1 != undefined) {
                if (obj.test_ans_right.indexOf("A") == -1) {
                    html += '<dd class="a"><em class="icon">A</em>' + obj.answer1 + '</dd>';
                } else {
                    html += '<dd class="a correctAnswer"><em class="icon">A</em>' + obj.answer1 + '</dd>';
                }
            }
        } catch (e) {
        }
        try {

            if (obj.answer2 != undefined) {
                if (obj.test_ans_right.indexOf("B") == -1) {
                    html += '<dd class="b"><em class="icon">B</em>' + obj.answer2 + '</dd>';
                } else {
                    html += '<dd class="b correctAnswer"><em class="icon">B</em>' + obj.answer2 + '</dd>';
                }
            }
        } catch (e) {
        }
        try {
            if (obj.answer3 != undefined) {
                if (obj.test_ans_right.indexOf("C") == -1) {
                    html += '<dd class="c"><em class="icon">C</em>' + obj.answer3 + '</dd>';
                } else {
                    html += '<dd class="c correctAnswer"><em class="icon">C</em>' + obj.answer3 + '</dd>';
                }
            }
        } catch (e) {
        }
        try {
            if (obj.answer4 != undefined) {
                if (obj.test_ans_right.indexOf("D") == -1) {
                    html += '<dd class="d"><em class="icon">D</em>' + obj.answer4 + '</dd>';
                } else {
                    html += '<dd class="d correctAnswer"><em class="icon">D</em>' + obj.answer4 + '</dd>';
                }
            }
        } catch (e) {
        }
        try {
            if (obj.answer5 != undefined) {
                if (obj.test_ans_right.indexOf("E") == -1) {
                    html += '<dd class="e"><em class="icon">E</em>' + obj.answer5 + '</dd>';
                } else {
                    html += '<dd class="e correctAnswer"><em class="icon">E</em>' + obj.answer5 + '</dd>';
                }
            }
        } catch (e) {
        }
        try {
            if (obj.answer6 != undefined) {
                if (obj.test_ans_right.indexOf("F") == -1) {
                    html += '<dd class="f"><em class="icon">F</em>' + obj.answer6 + '</dd>';
                } else {
                    html += '<dd class="f correctAnswer"><em class="icon">F</em>' + obj.answer6 + '</dd>';
                }
            }
        } catch (e) {
        }
        try {
            if (obj.answer7 != undefined) {
                if (obj.test_ans_right.indexOf("G") == -1) {
                    html += '<dd class="g"><em class="icon">G</em>' + obj.answer7 + '</dd>';
                } else {
                    html += '<dd class="g correctAnswer"><em class="icon">G</em>' + obj.answer7 + '</dd>';
                }
            }
        } catch (e) {
        }
        try {
            if (obj.answer8 != undefined) {
                if (obj.test_ans_right.indexOf("H") == -1) {
                    html += '<dd class="h"><em class="icon">H</em>' + obj.answer8 + '</dd>';
                } else {
                    html += '<dd class="h correctAnswer"><em class="icon">H</em>' + obj.answer8 + '</dd>';
                }
            }
        } catch (e) {
        }
        try {
            if (obj.answer9 != undefined) {
                if (obj.test_ans_right.indexOf("I") == -1) {
                    html += '<dd class="i"><em class="icon">I</em>' + obj.answer9 + '</dd>';
                } else {
                    html += '<dd class="i correctAnswer"><em class="icon">I</em>' + obj.answer9 + '</dd>';
                }
            }
        } catch (e) {
        }
        try {
            if (obj.answer10 != undefined) {
                if (obj.test_ans_right.indexOf("J") == -1) {
                    html += '<dd class="j"><em class="icon">J</em>' + obj.answer10 + '</dd>';
                } else {
                    html += '<dd class="j correctAnswer"><em class="icon">J</em>' + obj.answer10 + '</dd>';
                }
            }
        } catch (e) {
        }
        try {
            if (obj.answer11 != undefined) {
                if (obj.test_ans_right.indexOf("K") == -1) {
                    html += '<dd class="k"><em class="icon">K</em>' + obj.answer11 + '</dd>';
                } else {
                    html += '<dd class="k correctAnswer"><em class="icon">K</em>' + obj.answer11 + '</dd>';
                }
            }
        } catch (e) {
        }
        try {
            if (obj.answer12 != undefined) {
                if (obj.test_ans_right.indexOf("L") == -1) {
                    html += '<dd class="l"><em class="icon">L</em>' + obj.answer12 + '</dd>';
                } else {
                    html += '<dd class="l correctAnswer"><em class="icon">L</em>' + obj.answer12 + '</dd>';
                }
            }
        } catch (e) {
        }
        try {
            if (obj.answer13 != undefined) {
                if (obj.test_ans_right.indexOf("M") == -1) {
                    html += '<dd class="m"><em class="icon">M</em>' + obj.answer13 + '</dd>';
                } else {
                    html += '<dd class="m correctAnswer"><em class="icon">M</em>' + obj.answer13 + '</dd>';
                }
            }
        } catch (e) {
        }
        try {
            if (obj.answer14 != undefined) {
                if (obj.test_ans_right.indexOf("N") == -1) {
                    html += '<dd class="n"><em class="icon">N</em>' + obj.answer14 + '</dd>';
                } else {
                    html += '<dd class="n correctAnswer"><em class="icon">N</em>' + obj.answer14 + '</dd>';
                }
            }
        } catch (e) {
        }
        try {
            if (obj.answer15 != undefined) {
                if (obj.test_ans_right.indexOf("O") == -1) {
                    html += '<dd class="o"><em class="icon">O</em>' + obj.answer15 + '</dd>';
                } else {
                    html += '<dd class="o correctAnswer"><em class="icon">O</em>' + obj.answer15 + '</dd>';
                }
            }
        } catch (e) {
        }
        try {
            if (obj.answer16 != undefined) {
                if (obj.test_ans_right.indexOf("P") == -1) {
                    html += '<dd class="p"><em class="icon">P</em>' + obj.answer16 + '</dd>';
                } else {
                    html += '<dd class="p correctAnswer"><em class="icon">P</em>' + obj.answer16 + '</dd>';
                }
            }
        } catch (e) {
        }
        try {
            if (obj.answer17 != undefined) {
                if (obj.test_ans_right.indexOf("Q") == -1) {
                    html += '<dd class="q"><em class="icon">Q</em>' + obj.answer17 + '</dd>';
                } else {
                    html += '<dd class="q correctAnswer"><em class="icon">Q</em>' + obj.answer17 + '</dd>';
                }
            }
        } catch (e) {
        }
        try {
            if (obj.answer18 != undefined) {
                if (obj.test_ans_right.indexOf("R") == -1) {
                    html += '<dd class="r"><em class="icon">R</em>' + obj.answer18 + '</dd>';
                } else {
                    html += '<dd class="r correctAnswer"><em class="icon">R</em>' + obj.answer18 + '</dd>';
                }
            }
        } catch (e) {
        }
        try {
            if (obj.answer19 != undefined) {
                if (obj.test_ans_right.indexOf("S") == -1) {
                    html += '<dd class="s"><em class="icon">S</em>' + obj.answer19 + '</dd>';
                } else {
                    html += '<dd class="s correctAnswer"><em class="icon">S</em>' + obj.answer19 + '</dd>';
                }
            }
        } catch (e) {
        }
        try {
            if (obj.answer20 != undefined) {
                if (obj.test_ans_right.indexOf("T") == -1) {
                    html += '<dd class="t"><em class="icon">T</em>' + obj.answer20 + '</dd>';
                } else {
                    html += '<dd class="t correctAnswer"><em class="icon">T</em>' + obj.answer20 + '</dd>';
                }
            }
        } catch (e) {
        }
    } else if (obj.type == 3) {
        if (obj.test_ans_right.indexOf("正确") == -1) {
            html += '<dd class="rt"><em class="icon"><span class="icon-a_check"></span></em>正确</dd><dd class="wg correctAnswer"><em class="icon"><span class="icon-a_close"></span></em>错误</dd>';
        } else {
            html += '<dd class="rt correctAnswer"><em class="icon"><span class="icon-a_check"></span></em>正确</dd><dd class="wg"><em class="icon"><span class="icon-a_close"></span></em>错误</dd>';
        }
    } else if (obj.type == 5) {
        if (obj.normal_words != undefined) {
            html += '<p>普通关键词：' + obj.normal_words.join("或") + '</p>';
        }
        if (obj.key_words != undefined) {
            html += '<p>核心关键词：' + obj.key_words.join("或") + '</p>';
        }
    }
    if (obj.type != 6) {
        var allHtml = '<div class="m-example questions" questionId="' + obj.id + '"><dl>' +
            '<dt>' + obj.question + '</dt>' + html + '</dl>' +
            '<p class="answer">答案：' + ((obj.test_ans_right == '' || obj.test_ans_right == 'None') ? '无' : obj.test_ans_right) + '</p>' +
            '<div class="analysis">解析：' + obj.analysis + '</div>' +
            ((perTimeRestrict == '0') ? '' : '<span class="m-example-time">时长<input name="per_time" value="' + per_time + '">秒</span>') +
            '<span class="m-example-score">分数<input name="per_score" value="' + per_score + '">分</span>' +
            '<a href="javascript:void(0)" class="m-example-edit" questionId="' + obj.id + '"><i class="icon-a_operate_edit" data-toggle="tooltip" data-placement="top" data-original-title="编辑"></i></a>' +
            '<a href="javascript:void(0)" class="m-example-remove"  questionId="' + obj.id + '"><i class="icon-a_operate_delete" data-toggle="tooltip" data-placement="top" data-original-title="删除"></i></a>' +
            '<a href="javascript:void(0)" class="m-example-up" aria-hidden="true" title="上移" questionId="' + obj.id + '"><i class="glyphicon icon-a_operate_move_up" data-toggle="tooltip" data-placement="top" data-original-title="上移"></i></a>' +
            '<a href="javascript:void(0)" class="m-example-down" aria-hidden="true" title="下移" questionId="' + obj.id + '"><i class="glyphicon icon-a_operate_move_down" data-toggle="tooltip" data-placement="top" data-original-title="下移"></i></a>' +
            '</div>';
    } else {
        var allHtml = '<div class="m-example questions com-questions" questionId="' + obj.id + '"><dl>' +
            '<dt>' + obj.question + '</dt><div class="com_q_gray">';
        for (var i = 0; i < obj.insert_data.length; i++) {
            allHtml += '<dt style="overflow: hidden">' +
                '<div class="col-md-9 member-question" s_id="' + obj.insert_data[i].testId + '">' + (i + 1) + ' . ' + obj.insert_data[i].question + '</div>' +
                ((perTimeRestrict == "0") ? '' : '<div class="col-md-3 col-md-offset-1 time-center">时长<input type="text" name="member_second_' + (i + 1) + '" class="member_second">秒</div>') +
                '<div class="col-md-3 col-md-offset-1 text-center">分数<input type="text" name="member_score_' + (i + 1) + '" class="member-score">分</div>' +
                '</dt>';
        }
        allHtml += '</div><span class="m-example-score comb-m-example-score" hidden>每题<input name="per_score" value="' + per_score + '">分</span>' +
            '<span class="m-example-time comb-m-example-time" hidden>时长<input name="per_time" value="' + per_time + '">秒</span>' +
            '<a href="javascript:void(0)" class="m-example-edit" questionId="' + obj.id + '"><i class="icon-a_operate_edit" data-toggle="tooltip" data-placement="top" data-original-title="编辑"></i></a>' +
            '<a href="javascript:void(0)" class="m-example-remove"  questionId="' + obj.id + '"><i class="icon-a_operate_delete" data-toggle="tooltip" data-placement="top" data-original-title="删除"></i></a>' +
            '<a href="javascript:void(0)" class="m-example-up" aria-hidden="true" title="上移" questionId="' + obj.id + '"><i class="glyphicon icon-a_operate_move_up" data-toggle="tooltip" data-placement="top" data-original-title="上移"></i></a>' +
            '<a href="javascript:void(0)" class="m-example-down" aria-hidden="true" title="下移" questionId="' + obj.id + '"><i class="glyphicon icon-a_operate_move_down" data-toggle="tooltip" data-placement="top" data-original-title="下移"></i></a>' +
            '</div>';
    }
    //判断是新增还是编辑 create_type为"update"，则是编辑
    if (create_type != "update") {
        $(parentDom).parents(".group_simple").find(".manual-cont").append(allHtml);
        totalTestNumFn($(parentDom).parents(".group_simple").attr("sort"), 1);
        totalScoreFn();
        totalTimeFn();
    } else {
        $("div.m-example").each(function (index, element) {
            var id = $(this).attr("questionId");
            if (id == obj.id) {
                $(this).before(allHtml);
                $(this).remove();
                hideUpdateQuestion();
            }
        });
    }

}

//保存试题后清空表单数据
function clearFormFn(parentDom) {
    var parentDom = $(parentDom);
    parentDom.find(".q-ipt-t , .q-ipt-i").val("");
    parentDom.find("div.textareaDom").html("");
}

//联动左右大题信息 type：1左侧分数，2右侧分数，3右侧标题，4左侧答题时长，5右侧时长
function changeLeftInfoFn(obj, type, queName) {
    var sortNum = $(obj).attr("sort");
    if (type == 1) {
        $(".group_main input[name=test_peer_score]").each(function (index, element) {
            if ($(this).attr("sort") == sortNum) {
                $(this).val($(obj).val());
                $(this).parents(".group_simple").find("input[name=per_score]").val($(obj).val());
                $(this).parents('.group_simple').find('.m-example').each(function (index, element) {
                    var num = $(this).find('.member-question').length;
                    $(this).find("input.member-score").val(Number($(obj).val() / num).toFixed(1));
                });
            }
        });
        totalScoreFn();
    } else if (type == 2) {
        $(".info-board input[name=test_peer_score]").each(function (index, element) {
            if ($(this).attr("sort") == sortNum) {
                $(this).val($(obj).val());
            }
        });
        totalScoreFn();
    } else if (type == 3) {
        $(".info-board h3.test_tittle").each(function (index, element) {
            if ($(this).attr("sort") == sortNum) {
                if ($(obj).val() == queName) {
                    $(this).text(queName);
                } else {
                    $(this).text($(obj).val());
                }
            }
        });
    } else if (type == 4) {
        $(".group_main input[name=test_peer_time]").each(function (index, element) {
            if ($(this).attr("sort") == sortNum) {
                $(this).val($(obj).val());
                $(this).parents(".group_simple").find("input[name=per_time]").val($(obj).val());
                $(this).parents('.group_simple').find('.m-example').each(function (index, element) {
                    var num = $(this).find('.member-question').length;
                    $(this).find("input.member_second").val(Number($(obj).val() / num).toFixed(1));
                });
            }
        });
        totalTimeFn();
    } else if (type == 5) {
        $(".info-board input[name=every_q_time]").each(function (index, element) {
            if ($(this).attr("sort") == sortNum) {
                $(this).val($(obj).val());
            }
        });
        totalTimeFn();
    }
}

//计算试题数量
function totalTestNumFn(sortNum, addOrDel, selNum) {
    $(".info-board .test_num").each(function (index, element) {
        if ($(this).attr("sort") == sortNum) {
            var num = Number($(this).text());
            if (addOrDel == 1) { //增加
                $(this).text(num + 1);
            } else if (addOrDel == 2) { //移除
                $(this).text(num - 1);
            } else if (addOrDel == 3) { //选题，抽题，随机模式
                $(this).text(selNum);
            }
        }
    });
}

// 计算组合题中含小题数
$("#selQuestionFrame").on("load", function (event) {//判断 iframe是否加载完成
    $("#selQuestionFrame").contents().find("#saveBtn").on('click', function () {
        $('.group_simple').each(function () {
            var rightSort = $(this).attr('sort');
            var question_count = $(this).find('.com-questions .member-question').length;
            $('.left_group_simple').each(function () {
                if ($(this).attr('sort') == rightSort) {
                    $(this).find('.small_test_num').text(question_count);
                }
            });
        });
    })
});


// 计算每个题型总分
//  根据左侧每小题分数 计算组合题总分
$("body").on("keyup", ".left_group_simple input[name=test_peer_score]", function () {
    var all_fraction = 0;
    var score_type = $(this).val();
    var testNum = $(this).parents().siblings().children(".test_num").text();
    var parentSort = $(this).parents('.group_simple').attr('sort');
    if ($(this).attr("sort") == parentSort) {
        all_fraction = score_type * testNum;
        $(this).parents().siblings().children(".all_fraction").text(all_fraction.toFixed(1));
    }
});

// 分数显示函数封装,除组合外
function showScore(thatJq, thisSort, type) {
    var inputs = thatJq.parents('.group_simple').find('input[name=per_score]');
    var inputsCombine = thatJq.parents('.group_simple').find('input.member-score');
    var tmpScore = 0;
    if (type != '组合题') {
        inputs.each(function (index) {
            tmpScore += ($(this).val() == '' ? 0 : $(this).val() - 0)
        });
    } else {
        inputsCombine.each(function (index) {
            tmpScore += ($(this).val() == '' ? 0 : $(this).val() - 0)
        })
    }

    $('.left_group_simple').each(function (index) {
        if ($(this).attr('sort') == thisSort) {
            $(this).find('.all_fraction').text(tmpScore.toFixed(1))
        }
    });
}

$("body").on("keyup", ".m-example input", function () {
    var score_type = $(this).parents('.group_simple').find('.questionTypeText').text();
    var thisSort = $(this).parents('.group_simple').attr('sort');
    var that = $(this);
    showScore(that, thisSort, score_type);
});


//计算试卷总分
function totalScoreFn() {
    var totalScore = 0;
    var totalTestNum = 0;
    if ($("input[name=per_score]").length > 0) {
        $(".questions-board .group_simple").each(function (index, element) {
            var type = $(this).attr("questionType");
            if (type == "6") {
                $(this).find(".member-score").each(function (index, element) {
                    totalScore += Number($(this).val());
                });
            } else {
                $(this).find("input[name=per_score]").each(function (index, element) {
                    totalScore += Number($(this).val());
                });
            }
        });
        $(".info-board .group_simple").each(function (index, element) {
            totalTestNum += Number($(this).find(".test_num").text());
        });
    } else {
        $(".info-board .group_simple").each(function (index, element) {
            totalScore += Number($(this).find(".test_num").text()) * Number($(this).find("input[name=test_peer_score]").val());
            totalTestNum += Number($(this).find(".test_num").text());
        });
    }
    $(".info-board .total .total_score").text(totalScore.toFixed(1));
    $(".info-board .total .test_total").text(totalTestNum);
}


// 计算总时长
function totalTimeFn() {
    var totalTime = 0;
    var totalTestNum = 0;
    if ($("input[name=per_time]").length > 0) {
        $(".questions-board .group_simple").each(function (index, element) {
            var type = $(this).attr("questionType");
            var sort = $(this).attr("sort");
            var tests = $(this).find('.member_second');
            if (type == "6") {
                $(this).find(".member_second").each(function (index, element) {
                    totalTime += Number($(this).val());
                });
            } else {
                $(this).find("input[name=per_time]").each(function (index, element) {
                    totalTime += Number($(this).val());
                });
            }
        });
        $(".info-board .group_simple").each(function (index, element) {
            totalTestNum += Number($(this).find(".test_num").text());
        });
    } else {
        $(".info-board .group_simple").each(function (index, element) {
            totalTime += Number($(this).find(".test_num").text()) * Number($(this).find("input[name=every_q_time]").val());
            totalTestNum += Number($(this).find(".test_num").text());
        });
    }
    $(".info-board .total .total_time").text(Math.ceil(totalTime));
    $(".info-board .total .test_total").text(totalTestNum);
}

//显示选择试题分类对话框选择多个
function showQuestionsType(obj) {
    $('#difficultModal').modal({
        backdrop: "static",
        keyboard: false
    });
}

//关闭难度对话框
function hideDifficultModal(obj) {
    $('#difficultModal').modal('hide');
    selTr = "";
}

//保存难度fn
function saveDifficultFn(difficult, totelNum) {
    var tr = selTr;
    $(tr).find("input[name=hard]").val(difficult); //隐含难度字段
    $(tr).find("input[name=totelNum]").val(totelNum); //显示总题数
    var list = difficult.split(",");
    var text = "简单：" + "<span class='diff1'>" + list[0] + "</span>" + "；普通：" + "<span class='diff2'>" + list[1] + "</span>" + "；困难：" + "<span class='diff3'>" + list[2] + "</span>";

    $(tr).find(".empty_q_tip").hide(); //隐藏空空如也
    $(tr).find(".selDifficultLink_text").html(text);
    $(tr).find(".selDifficultLink_text").show();

    //计算总分
    totalTestNumFn($(tr).attr("sort"), 3, totelNum);
    totalScoreFn();
    totalTimeFn();
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

//选题组卷，显示选择试题对话框
function showSelQuestions(obj, type, subject) {
    selType = $(obj).parents(".group_simple").attr("questiontype");
    //不显示已选择的试题
    $(obj).parents(".group_main").find(".group_simple").each(function (index, element) {
        var commit_divs = $(this).find(".m-example");
        for (var i = 0; i < commit_divs.length; i++) {
            commit_ids = commit_ids + commit_divs[i].getAttribute("questionid") + ',';
        }
    });
    var url = "/html/exam/get_items_select?type=" + type + "&subject=" + subject;
    selQuestionFrame.location.href = url;
    $('#questionsModal').modal({
        backdrop: "static",
        keyboard: false
    });
    selTr = $(obj).parents(".group_simple");
}

//选题组卷，关闭选择试题对话框
function hideSelQuestions(obj) {
    $('#questionsModal').modal('hide');
    selTr = "";
}

//选题组卷，选择试题对话框点击确定之后执行此函数
//ids是选择试题对话框返回的试题的ids字符串
function selQuestion(ids, num, type) {

    var tr = selTr; //当前大题区域div
    list = ids.split(',');

    //后台读取选中试题信息并显示
    $.each(list, function (index, value) {
        if (value != "") {
            //异步读取试题数据
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "/exam/load_data",
                data: "id=" + value,
                async: false,
                success: function (msg) {
                    var jsonData = msg;
                    //创建添加试题DOM
                    $(tr).find('.empty_q_tip').hide(); //隐藏空空如也
                    createQuestionsViewFn(jsonData, $(tr).find(".group_title"), 'select');
                }
            });
        }
    });
}

//引导内容
function guidePosition(n) {
    switch (n) {
        case 1:
            adjust_t = 10;
            adjust_l = 10;
            $(".into").html("<span>第一步：创建试卷</span>");
            break;
        case 2:
            adjust_t = -141;
            adjust_l = -285;
            $(".into").html("<span>第二步：</span><br/><span>填写试卷名称，并选择试卷分类</span>");
            break;
        case 3:
            adjust_t = -131;
            adjust_l = -285;
            $(".into").html("<span>第三步：选取组卷方式</span>");
            break;
        case 4:
            adjust_t = -40;
            adjust_l = -1190;
            $(".into").html("<span>第四步：创建题目</span><br />" +
                "<span>1.创建新的大题，选取题型</span><br />" +
                "<span>2.填写大题名称和每题分数</span><br />" +
                "<span>3.选择试题</span><br />" +
                "<span>4.重复以上步骤，保存并发布</span>");
            break;
        case 5:
            adjust_t = -900;
            adjust_l = 300;
            $(".into").html("<span>第五步：</span><br/><span>设置（可选）并发布试卷</span>");
            $(".cont-r").animate({scrollTop: $("#saveBtn").offset().top}, 200);
            break;
        case 6:
            adjust_t = 200;
            adjust_l = 800;
            $(".into").html("<span>恭喜你完成新手引导！</span>");
            $(".guide-layer").css("z-index", 9999);
            $(".guide-layer .next-step").html('赶紧考一次');
            $(".guide-layer .get").html('不了，谢谢');
            break;
        default:
    }
}

// 获取同一类型题目下所有所选试题
function getSelQuestion(type) {
    typeObject[type] = [];
    typeObjectLabel[type] = [];
    $("div[questiontype=" + type + "] input[name=test_classify_id]").each(function (index, el) {
        var toArry = el.value.split(",");
        var concatArry = typeObject[type].concat(toArry);
        var repeatArry = Array.from(new Set(concatArry));  // 数组去重
        var cleanArry = repeatArry.filter(function (n) {
            return n;
        }); // 将数组去除空
        typeObject[type] = cleanArry;
    });

    $("div[questiontype=" + type + "] input[name=test_label_id]").each(function (index, el) {
        var toArry = el.value.split(",");
        var concatArry = typeObjectLabel[type].concat(toArry);
        var repeatArry = Array.from(new Set(concatArry));  // 数组去重
        var cleanArry = repeatArry.filter(function (n) {
            return n;
        }); // 将数组去除空
        typeObjectLabel[type] = cleanArry;
    });

    // 将用户选取的试题存入本地存储
    localStorage.setItem("selArry" + user_id, typeObject[type].toString());
    localStorage.setItem("selArryLabel" + user_id, typeObjectLabel[type].toString());
}

//显示选择分类对话框
function showSelType(obj) {
    $("input[name=classification]").val('');
    selQuestionsTypeModal.location.href = "/admin/tree/tests_multi_class";
    $("#questionsTypeModal").modal({
        backdrop: "static",
        keyboard: false
    });
}

//关闭选择试题分类对话框
function hideQuestionsSelType(obj) {
    $('#questionsTypeModal').modal('hide');
}

//接受选择试题分类数据多个
function selQuestionsType(id, name) {
    selTr.find(".checked_classify_ids").val(id);
    var labelIds = selTr.find("input[name=test_label_id]").val();
    $("#selTypeLink").text('已选择');
    getTableData(id, labelIds);
}

function getTableData(classIds, labelIds) {
    classIds = classIds.slice(0, classIds.length - 1);
    var data = {
        type: selType,
        classification: classIds,
        label: labelIds
    };
    $.ajax({
        type: "Post",
        cache: false,
        headers: {"cache-control": "no-cache"},
        dataType: "json",
        url: "/admin/test/showcount",
        data: data,
        async: false,
        success: function (msg) {
            var jsonData = msg.bizContent;//difficultCount困难    middleCount普通    simpleCount简单
            $('#difficultModal .difficult1_num').text(jsonData.simpleCount);
            $('#difficultModal .difficult2_num').text(jsonData.middleCount);
            $('#difficultModal .difficult3_num').text(jsonData.difficultCount);
        }
    });
}

//显示选择标签对话框
function showSelLabel(obj) {
    $("input[name=label]").val('');
    selLabelModal.location.href = "/admin/tree/tests_multi_label";
    $("#labelModal").modal({
        backdrop: "static",
        keyboard: false
    });
}

//关闭选择标签对话框
function hideSelLabel(obj) {
    $('#labelModal').modal('hide');
}

// 接受选择标签数据
function selLabel(data) {
    var ids = '';
    for (var i = 0; i < data.length; i++) {
        ids += data[i].id + ',';
    }
    ids = ids.slice(0, ids.length - 1);
    selTr.find(".checked_label_ids").val(ids);
    var classIds = selTr.find("input[name=test_classify_id]").val();
    $("#selLabelLink").text('已选择');
    getTableData(classIds, ids);
}

function difficultModalReset() {
    $("#selLabelLink").text('请选择');
    $("#selTypeLink").text('请选择');
    $("input[name=label]").val('');
    $("input[name=classification]").val('');
    $('input[name=difficult1]').val(0);
    $('input[name=difficult2]').val(0);
    $('input[name=difficult3]').val(0);
    $('#difficultModal .difficult1_num').text('0');
    $('#difficultModal .difficult2_num').text('0');
    $('#difficultModal .difficult3_num').text('0');
}

/*新设计页面控制*/
$('body').on('mouseenter', '.default_create_q_model', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).css('display', 'none');
    $('.type_create_q_model').css('display', 'inline-block');
});

$('body').on('mouseleave', '.type_create_q_model', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).css('display', 'none');
    $('.default_create_q_model').css('display', 'inline-block');
});

$('body').on('mouseenter', '.test_icon_a a', function () { //新增的左侧删除等按钮浮动提示
    $(this).tooltip('show');
});

$('body').on('mouseenter', '.questions a', function () { //新增的删除等按钮浮动提示
    $(this).tooltip('show');
});

function fixMChoicesQuestionStyle() { //调整随机组卷多选'漏选给分'样式，因为随机组卷没有试题乱序
    $(".group_main .group_simple[questiontype=2]").find("#selection_score").css('right', '130px');
}
