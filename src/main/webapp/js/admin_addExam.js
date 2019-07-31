$(document).ready(function () {

	// 付费功能提示
	$(".readonly").click(function(e) {
		e.stopPropagation();
		e.preventDefault();
		alert("此功能为付费功能，如有需要请联系客服");
	});

	//点击考试名称选中全部内容
	$("input[name=examName]").on("click", function () {
		$(this).select();
	});

    //选择考试分类
    $("#selTypeLink").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        //showSelType(this);
    });


    //初始化日历
    getDateFrom();
    getDateTo();

    //展开和收起
    $(".toolbar-setting .btn-href-collapse").on("click",function(e){
        // e.stopPropagation();
        // e.preventDefault();
        var _this = $(this);
        if($("#superSetting").hasClass("in")){
            _this.text("展开更多设置");
            _this.append("<span href='#superSetting' class='glyphicon icon-a_pull_down' aria-hidden='true' data-toggle='collapse' aria-expanded='false' aria-controls='superSetting'></span>");
        }else{
            _this.text("收起更多设置");
            _this.append("<span href='#superSetting' class='glyphicon icon-a_pack_up' aria-hidden='true'  data-toggle='collapse' aria-expanded='true' aria-controls='superSetting'></span>");
        }
        $(".toolbar-setting a,.toolbar-setting span").css('color','#1A8CFE');
    });
    $(".toolbar-setting .btn-href-collapse").on("mouseover",function(e){
        $(".toolbar-setting a,.toolbar-setting span").css('color','#1A8CFE');
    });
    $(".toolbar-setting .btn-href-collapse").on("mouseout",function(e){
        $(".toolbar-setting a").css('color','#3A3E51');
        $(".toolbar-setting span").css('color','#B4B6BD');
    });


    //选择部门
    $("#selGroupLink").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        showSelGroup(this);
    });
    //选择人员
    $("#selUserLink").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        showSelUser(this);
    });

    //展开和收起部门／人员
	$(".collapse-label").click(function (e) {
		e.stopPropagation();
		e.preventDefault();
		var label_wrap = $(this).parents(".label-wrap");

		if($(label_wrap).hasClass("open")){
            $(label_wrap).removeClass("open");
            $(this).find(".glyphicon-title").text("展开");
            $(this).find(".glyphicon").removeClass("glyphicon-triangle-top").addClass("glyphicon-triangle-bottom");
        }else {
            $(label_wrap).addClass("open");
            $(this).find(".glyphicon-title").text("收起");
            $(this).find(".glyphicon").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-top")

        }
    });

    //部门／人员关键字label删除
	$("body").on("click", ".label-wrap .glyphicon-remove", function (e) {
        e.stopPropagation();
        e.preventDefault();
        var _this = $(this);
        //重新拼接input中的val
        if(_this.parents(".label-wrap").hasClass("usersName")){
            _this.parent().remove();
            var str = "";
            for(var i=0;i<$(".userNameLabel label").length;i++){
                str += $(".userNameLabel .useridItem").text() + ",";
            }
            $(".hasSelectedUserIds").val(str);
            if($(".userNameLabel").html().replace(/\s*/g,"") == ''){
                $("#clearUsers").attr("disabled",true);
            }
        }else {
            _this.parent().remove();
        }
    });

    //选择是否限制考试次数
	$("select[name=examTimesRestrict]").change(function (e) {
		if ($(this).val() == 0) {
			$("input[name=examTimes]").show();
		} else {
			$("input[name=examTimes]").hide();
		}
	});

	//选择免登录信息
	$("#loginAnswerLink").click(function (e) {
		e.stopPropagation();
		e.preventDefault();
		showSelLogin(this);
	});

	// 实现作弊功能模块的展开折叠功能
	$(".main-cheat").click(function () {
		$(".sub-cheat").slideToggle();
		if ($(this).children(".glyphicon").hasClass("glyphicon-triangle-right")) {
			$(this).children(".glyphicon").removeClass("glyphicon-triangle-right").addClass("glyphicon-triangle-bottom");
		} else {
			$(this).children(".glyphicon").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-right");
		}
	});
	//页面初时加载或刷新检测临时会话
    var ksxSaveData = sessionStorage.getItem('ksxSaveData');

    if(ksxSaveData == '1'){
        //$('#saveBtn').attr('disabled',true)
    }
	//提交表单
	$("#saveBtn").click(function (e) {
		e.preventDefault();
		e.stopPropagation();

        var reg=/^[1-9]\d*$|^0$/;
        var mark_value=$("input[name=passMark]").val();
        if(reg.test(mark_value)==false){
        	alert("请检查及格分数！");
        	return false;
		}

		if (checkForm()) {
			$(this).attr("disabled", "disabled");
			$("#loading").show();
			//表单数据拼装
			formDataFormat();
			setTimeout(function () {
				savePaperFn("/exam/add_exam");
			}, 500);
		}
	});
	//新增一行
	$("body").on("click", "a.addKeyRadioOrCheck", function (e) {
		e.stopPropagation();
		e.preventDefault();
		var prevDom = $(this).prev();
		var on_state_count = $(this).parents(".onShow_state").find(".on_state").length;
		if (on_state_count > 4) {
			return;
		}
		$(this).parents(".onShow_state").find(".on_state").each(function (index, element) {
			$(this).children(".min_score").attr("name", "minScore" + index);
			$(this).children(".max_score").attr("name", "maxScore" + index);
			$(this).children(".marked_words").attr("name", "markedWords" + index);
			$(this).children(".url_address").attr("name", "urlAddress" + index);
		});
		var html = '<div class="on_state on_stateAdd" style="margin-left:0">' +
			'<input type="text" name="minScore' + on_state_count + '" class="score min_score" placeholder="最小值"> ' +
			'<div class="state-sign">' +
			'<span class="less-sign less-than-equal-to"></span>分数' +
			'<span class="less-sign"></span></div> ' +
			'<input type="text" name="maxScore' + on_state_count + '" class="score max_score" placeholder="最大值"> ' +
			'<input type="text" name="markedWords' + on_state_count + '" class="marked_words" maxlength="100" placeholder="提示语"> ' +
			'<input type="text" name="urlAddress' + on_state_count + '" class="url_address" placeholder="跳转链接">' +
			'<a class="q-opra-reduce removeKeyRadioOrCheck" href="javascript:void(0)"><i class="icons8-trash-can"></i></a>' +
			'</div>'
		prevDom.after(html);
	});

	//删除一行
	$("body").on("click", "a.removeKeyRadioOrCheck", function (e) {
		e.stopPropagation();
		e.preventDefault();
		$(this).parent().remove();
		//如果删除的是微信红包行，显示微信红包的"增加选项"
		if($(this).parent().hasClass("grade-item")){
            $(".addGradeItem").show();
		}
	});

	//微信红包新增一行
    $("body").on("click", "a.addGradeItem", function (e) {
        e.stopPropagation();
        e.preventDefault();
        var item_count = $(this).parents(".showRedPackage").find(".grade-item").length;
        if (item_count > 3) {
            $(this).parents(".showRedPackage").find(".addGradeItem").hide();
        }
        if (item_count > 4) {
            return;
        }
        $(this).parents(".showRedPackage").find(".grade-item").each(function (index, element) {
            $(this).children(".red-packet-min-score").attr("name", "redPackMinScore" + index);
            $(this).children(".red-packet-max-score").attr("name", "redPackMaxScore" + index);
            $(this).children(".min-money").attr("name", "minMoney" + index);
            $(this).children(".max-money").attr("name", "maxMoney" + index);
            $(this).children(".red-packet-tip").attr("name", "redPackTip" + index);
        });
        var html = '<div class="grade-item">' +
						'<input type="text" name="redPackMinScore'+item_count+'" class="red-packet-min-score score" placeholder="最小值"> ' +
						'<div class="state-sign">' +
							'<span class="less-sign less-than-equal-to"></span>分数<span class="less-sign"></span> ' +
						'</div> ' +
						'<input type="text" name="redPackMaxScore'+item_count+'" class="red-packet-max-score score" placeholder="最大值"> ' +
						'<input type="text" name="minMoney'+item_count+'" class="min-money" placeholder="最小金额"> ' +
						'<div class="state-sign"> ' +
						'<span class="less-sign less-than-equal-to"></span>金额<span class="less-sign"></span> ' +
						'</div> ' +
						'<input type="text" name="maxMoney'+item_count+'" class="max-money" placeholder="最大金额"> ' +
						'<a class="q-opra-reduce removeKeyRadioOrCheck" href="javascript:void(0)"><i class="icons8-trash-can"></i></a>' +
            		'</div>';
        $(html).appendTo($(this).parents(".showRedPackage"));
    });


	//切屏次数输入框提示信息
	$(".tabCount").blur(function (e) {
		e.stopPropagation();
		e.preventDefault();
		var reg = /^[1-9]\d*|0$/;
		var num = $(this).val();
		if ($("input[name=set_full_screen]").is(":checked")) {
			if ($(this).val() == "") {
				alert('请填写"限制切换次数"！');
			} else if (!reg.test(num)) {
				alert("请输入大于等于0的整数");
			}
		}
	});
	//手机端pc端防作弊倒计时提示信息
	$("input[name=restTime]").blur(function (e) {
		e.stopPropagation();
		e.preventDefault();
		var reg = /^[1-9]\d*|0$/;
		var num = $(this).val();
		if ($("input[name=setTimeLimitChk]").is(":checked")) {
			if ($(this).val() == "") {
				// alert('请填写"无操作时长"！');
			} else if (!reg.test(num)) {
				alert("请输入大于等于0的整数");
				$("input[name=restTime]").val("");
				$("input[name=restTime]").focus();
			} else if (num < 3) {
				alert("时长至少3秒！");
				$("input[name=restTime]").val("");
				$("input[name=restTime]").focus();
			} else if (num > 127) {
				alert("时长不能超过127秒！");
				$("input[name=restTime]").val("");
				$("input[name=restTime]").focus();
			}
		}
	});

	// 考前分钟开始身份认证
    $("input[name=setVerifyBeforeMin]").blur(function (e) {
        e.stopPropagation();
        e.preventDefault();
        var reg = /^(([^0][0-9]+|0)$)|^(([1-9]+)$)/;
        var num = $(this).val();
        if ($("input[name=verifyCount]").is(":checked")) {
            if ($(this).val() == "") {
            } else if (!reg.test(num)) {
                alert("请输入整数");
                $("input[name=setVerifyBeforeMin]").val("");
                $("input[name=setVerifyBeforeMin]").focus();
            } else if (num > 30) {
                alert("考前身份验证最多提前30分钟开始！");
                $("input[name=setVerifyBeforeMin]").val("");
                $("input[name=setVerifyBeforeMin]").focus();
            }
        }
    });

    //允许查看试卷
    $("#allow_p_a_days").blur(function (e) {
        e.stopPropagation();
        e.preventDefault();
        var reg = /^(([^0][0-9]+|0)$)|^(([1-9]+)$)/;
        var num = $(this).val();
        if($("input[name='is_paper_forever']:checked").val()==1){
            if ($(this).val() == "") {
            } else if (!reg.test(num)) {
                alert("请输入整数");
                $("#allow_p_a_days").val("");
                $("#allow_p_a_days").focus();
            } else if (num <=0) {
                alert("天数必须大于0！");
                $("#allow_p_a_days").val("");
                $("#allow_p_a_days").focus();
            }
        }
    });



    $("input[name=verifyCount]").change(function () {
        if ($("input[name=verifyCount]").is(":checked")) {
            $("input[name=setVerifyBeforeMin]").val('0');
        }else {
            $("input[name=setVerifyBeforeMin]").val('');
        }
    });


    //提示防作弊次数
    $("input[name=blurCount]").blur(function(e){
        e.stopPropagation();
        e.preventDefault();
        var reg = /^[1-9]\d*|0$/;
        var number = $(this).val();
        if ($("input[name=setFullScreen]").is(":checked")) {
            if ($(this).val() == "") {
            } else if (!reg.test(number)) {
                alert("请输入大于等于0的整数");
                $("input[name=blurCount]").val("");
                $("input[name=blurCount]").focus();
            }else if (number > 127) {
                alert("次数不能超过127次！");
                $("input[name=blurCount]").val("");
                $("input[name=blurCount]").focus();
            }
        }
    });

	//考生是否需要支付显示支付金额输入框
	$("body").on("change", "input[name='userPayConfirm']", function (e) {
		if ($(this).is(":checked")) {
			$(this).parents(".radio").next().css("display", "inline-table");
		}
		else {
			$(this).parents(".radio").next().css("display", "none");
		};
	});

	//闯关模式  显示答错次数
    $("body").on("change", "input[name='passMode']", function (e) {
        if ($(this).is(":checked")) {
            $("input[name='errorTimes']").val(0);
            $(this).parents(".radio").next().css("display", "inline-table");
        }
        else {
            $(this).parents(".radio").next().css("display", "none");
        };
    });

    $(".popover").hover(function(){
        $("i[data-toggle=popover]").trigger('hover')
    })

    var beatTitle = $("textarea[name=beat_title]").val();
    $("#beat_content").click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('#beatModal').modal({
            backdrop: "static",
            keyboard: false
        });
    });

	//击败百分比开启关闭
    $(".switch-Beatratio").on("click",function(e){
        e.stopPropagation();
        e.preventDefault();

        if($(this).hasClass("switch-on")){
            $("input[name=showBeatratioTitle]").val("");
        }else{
            $("input[name=showBeatratioTitle]").val(beatTitle);
        }
    })

	//点击显示默认内容
    $(".btn-default-content").click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $(".show-beat").val("已击败的挑战者");
        $("#beat_title").text("已击败的挑战者");
    });

	//效果展示
    $("textarea[name=beat_title]").keyup(function() {
        var beat_title = $(this).val();
        $("#beat_title").text(beat_title);
    });


    $("#saveBeat").click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        var beatratio_title=$(".show-beat").val();
        if(beatratio_title.length>14){
            alert("不超过14个字符！");
            return false;
        }
        $("input[name=showBeatratioTitle]").val(beatratio_title);
        beatTitle=beatratio_title;
        $('#beatModal').modal('hide');
    });

	//当点击取消时恢复内容
    $("#cancelBeat").click(function(){
        $(".show-beat").val(beatTitle);
    });

		//设置评语
    $(".set_remark input").change(function (e) {
        if ($(this).is(":checked")) {
            $(".onShow_state").show();
        } else {
            $(".onShow_state").hide();
        }
    });
	//设置微信红包
    $(".setWechatRedPack input").change(function (e) {
        if ($(this).is(":checked")) {
            $(".showRedPackage").show();
        } else {
            $(".showRedPackage").hide();
        }
    });

	//设置微信分享
    $(".we_chat input").change(function () {
        if ($(this).is(":checked")) {
            $("#weChatLink").show();
            $("input[name=weChatTitle]").val("我参加了[考试名称]，得了[得分]分，你也来测测");
            $("input[name=weChatPic]").val("http://file.kaoshixing.com/wx-logo.png");
        }
        else {
            $("#weChatLink").hide();
            $("input[name=weChatTitle]").val("");
            $("input[name=weChatPic]").val("");
        }
    });
    $(".we_chat input").change(function () {
        if ($(this).is(":checked")) {
            $("#weChatLink").show();
            $("input[name=weChatTitle]").val("我参加了[考试名称]，得了[得分]分，你也来测测");
            $("input[name=weChatPic]").val("http://file.kaoshixing.com/wx-logo.png");
        }
        else {
            $("#weChatLink").hide();
            $("input[name=weChatTitle]").val("");
            $("input[name=weChatPic]").val("");
        }
    });
	//click分享设置
    $("#weChatLink").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        showWeChat();
    });

});


//显示选择考试分类对话框
function showSelType(obj) {
    selTypeModal.location.href = "/admin/tree/exam_sel_style";
    $('#typeModal').modal({
        backdrop: "static",
        keyboard: false
    });
}
//关闭选择考试分类对话框
function hideSelType(obj) {
    $('#typeModal').modal('hide');
}
//接受选择考试分类数据
function selType(id, name) {
    $("input[name=examStyle]").val(id);
    $("#selTypeLink span").text(name);
}

//初始化日历
function getDateFrom() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var output = date.getFullYear() + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day + ' ' + (hour < 10 ? '0' : '') + hour + ':' + (minute < 10 ? '0' : '') + minute;
    $("#dateFrom").val(output);
}
function getDateTo() {
    var date = new Date();
    date.setDate(date.getDate() + 3);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var output = date.getFullYear() + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day + ' ' + (hour < 10 ? '0' : '') + hour + ':' + (minute < 10 ? '0' : '') + minute;
    $("#dateTo").val(output);
}

//关闭选择试卷对话框
function hideSelPaper(obj){
	$('#paperModal').modal('hide');
}

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
        $("#depName").append('<span class="label label-default"><span class="depidItem hidden">' + value[0] + '</span><span class="depnameItem">' + value[1] + '</span></span>');
    });
}

//显示选择人员对话框
function showSelUser(obj) {
    var commit_ids = join_user_id();
    selUserModal.location.href = "/admin/addExam/selUser";
    $('#userModal').modal({
        backdrop: "static",
        keyboard: false
    });
}
//关闭选择人员对话框
function hideSelUser(obj) {
    $('#userModal').modal('hide');
    selUserModal.document.body.innerHTML = "";
}
//接受选择人员数据
function selMuchUser(namesArray) {
    $.each(namesArray, function (index, value) {
        if (namesArray[index] != undefined) {
            $("#usersName").append('<span class="label label-default"><span class="useridItem hidden">' + value[0] + '</span><span class="surnameItem">' + value[1] + '</span><span class="glyphicon glyphicon-remove"></span></span>');
        }
    });
    if($(".userNameLabel").html() != ''){
        $("#clearUsers").removeAttr("disabled");
    }
}


//显示分享设置对话框
function showWeChat() {
	weChatModal.location.href = "/admin/wechat_setting/";
	$('#weChatModal').modal({
		backdrop: "static",
		keyboard: false
	});
}
//关闭分享设置对话框
function hideWeChat(obj) {
	$('#weChatModal').modal('hide');
}
function weChatSet(title, pic) {
	$("input[name=weChatTitle]").val(title);
	$("input[name=weChatPic]").val(pic);
}

//显示选择部门对话框
function showDeptType(obj) {
	selDeptModal.location.href = "/admin/tree/user_sel_dep/00000";
	$('#deptModal').modal({
		backdrop: "static",
		keyboard: false
	});
}

//关闭选择部门对话框
function hideSelDept(obj) {
	$('#deptModal').modal('hide');
}

//接受选择部门数据
function selDept(id, name) {
	$(window.frames["selLoginModal"].document).find("input[name=depId]").val(id);
	$(window.frames["selLoginModal"].document).find("#selTypeLink span").text(name);
}


//选择试卷方法
function selPaperFn(id) {
	$("input[name=paperInfoId]").val(id);
}

//表单数据拼装
function formDataFormat() {
	if ($("input[name=setDisablePasteChk]").is(":checked")) {
		$("input[name=setDisablePaste]").val(0);
	} else {
		$("input[name=setDisablePaste]").val(1);
	}
	if ($("input[name=setTimeLimitChk]").is(":checked")) {
		$("input[name=setTimeLimitChk]").val(0);
	} else {
		$("input[name=setTimeLimitChk]").val(1);
	}
    if ($("input[name=verifyCount]").is(":checked")) {
        $("input[name=verifyCount]").val(1);
    } else {
        $('input[name=setVerifyBeforeMin]').val(0);
        $("input[name=verifyCount]").val(0);
    }

	if ($("input[name=setRandomOrderTestChk]").is(":checked")) {
		$("input[name=setRandomOrderTest]").val(0);
	} else {
		$("input[name=setRandomOrderTest]").val(1);
	}

	if ($("input[name=setAllowPaper]").is(":checked")) {
		$("input[name=setAllowPaper]").val(0);
	} else {
		$("input[name=setAllowPaper]").val(1);
	}
    if($('.switch-exam').hasClass('switch-off')){ //关闭了显示成绩，允许查看试卷也不开启、默认开查看解析
        $("input[name=setAllowPaper]").val(1);
        $("input[name='setAllowsPaperAnswer']").eq(0).prop('checked','checked'); //默认勾选显示解析
    }
	if ($("input[name=weChat]").is(":checked")) {
		$("input[name=weChat]").val(0);
	} else {
		$("input[name=weChat]").val(1);
	}

	if ($('#switch-passSetting').hasClass('switch-on')) {
        $("input[name=setExamPwd]").val(1);
    }else {
        $("input[name=setExamPwd]").val(0);
        $("input[name=examPwd]").val('');
    }
}

//显示免登录信息对话框
function showSelLogin(obj) {
	selLoginModal.location.href = "/admin/skip_login_config";
	$('#loginModal').modal({
		backdrop: "static",
		keyboard: false
	});
}

//关闭免登录信息对话框
function hideSelLogin(obj) {
	$('#loginModal').modal('hide');
}

//验证表单
function checkForm() {
	function moveHtml(id) {
		var scroll_offset = $(id).offset().top + 500 + 'px';
		$(".cont-r").animate({
			scrollTop: scroll_offset
			//让body的scrollTop等于pos的top，就实现了滚动
		}, 300);
	}

	if ($("input[name=examName]").val() == "") {
		alert('请填写"考试名称"！');
		moveHtml($("input[name=examName]"));
		$("input[name=examName]").focus();
		$("input[name=examName]").select();
		return false;
	}else if($("input[name=examName]").val().length> 50){
        alert('考试名称不得大于50字！');
        moveHtml($("input[name=examName]"));
        $("input[name=examName]").focus();
        $("input[name=examName]").select();
        return false;
	}

	if ($("input[name=examStyle]").val() == "") {
		alert('请选择"考试分类"！');
		return false;
	}

	if ($("input[name=setFullScreen]").is(":checked")) {
		if ($("input[name=blurCount]").val() == "") {
			alert('请填写"限制切换次数"！');
			return false;
		}
	}
	if ($("input[name=setTimeLimitChk]").is(":checked")) {
		if ($("input[name=restTime]").val() == "") {
			alert('请填写"无操作时长"！');
			return false;
		}
	}
    if ($("input[name=verifyCount]").is(":checked")) {
        if ($("input[name=setVerifyBeforeMin]").val() == "") {
            alert('请填写"考前身份验证时间"！');
            return false;
        }
    }
    //验证不是全员参与的情况下，是否选择了人员和部门
    var isSelectAll = $('input[name=joinStatus]:checked').val();
	var isSetProcess = $('input[name=setProcess]').val();
	var isSkipLogin = $('input[name=skipLogin]:checked').val();

        if(isSetProcess == 0 && isSkipLogin== 0 && isSelectAll == 1){

            if($.trim($('#depName').html()) === '' && $.trim($('#usersName').html()) === ''){

                alert(' 请选择参与部门/人员！');
                return false
            }
        }

    if ($("input[name=passMark]").val() == "") {
		alert('请填写"及格分数"！');
		moveHtml($("input[name=passMark]"))
		$("input[name=passMark]").focus();
		$("input[name=passMark]").select();
		return false;
	} else if (parseFloat($("input[name=passMark]").val()) >= parseFloat($(".paper_total_score").text())) {
		alert("请保证及格分数小于试卷总分！");
		moveHtml($("input[name=passMark]"))
		$("input[name=passMark]").focus();
		$("input[name=passMark]").select();
		return false;
	}

	var endTime = new Date($("#dateTo").val())
	var startTime = new Date($("#dateFrom").val())
	if ($("input[name=examStartTime]").val() == "" || $("input[name=examEndTime]").val() == "" || endTime <= startTime) {
		alert('请填写考试时间，并保证结束时间大于开始时间');
		return false;
	}
	// 当没限制每题答题时长，才有总时长
    var perTimeRestrict = $("input[name=perTimeRestrict]").val();
	if (perTimeRestrict == '0'){
        //如果选择的是有限时长
        if ($("input[name=examTimeRestrict]:checked").val()==1 && $("input[name=examTime]").val() == "") {
            alert('请填写"答卷时长"！');
            moveHtml($("input[name=examTime]"))
            $("input[name=examTime]").focus();
            $("input[name=examTime]").select()
            return false;
        }
        if(parseFloat($("input[name=examTime]").val()) < 0 || $("input[name=examTime]").val().indexOf('.') != -1){
            alert('"答卷时长"请填写一个非0的正整数！');
            moveHtml($("input[name=examTime]"));
            $("input[name=examTime]").focus();
            $("input[name=examTime]").select();
            return false;
        }
	}

	if ($("input[name=examTimes]").val() == "") {
		alert('请填写"参考次数"！');
		return false;
	}
	if ($("input[name=setBanAfterMin]").val() == "") {
		alert('请填写"禁止考生参加考试时间"！');
		return false;
	}
	if ($("input[name=setBanWthinMin]").val() == "") {
		alert('请填写"禁止交卷时间"！');
		return false;
	}
    //如果开启考前校验密码
    if($('input[name=setExamPwd]').val() == "1" && $(".change-pwd-box .pwd-input-tips").hasClass("error")){
        alert('考前校验'+$(".change-pwd-box .pwd-input-tips").html());
        return false;
    }

    //如果开启考试迟到限时
    if($("input[name=lateCheck]").val() == "1" && !/^\d{1,}$/.test($("input[name=lateTime]").val())){
        alert('请填写正确的"考生可迟到时间"！');
        return false;
    }
    //如果开启最短答题时长
    if($("input[name=setMinExamTime]").val() == "1"){
        if((!/^\d{1,}$/.test($("input[name=minExamTime]").val()))||($("input[name=minExamTime]").val()==0)) {//最短答题时长需要为整数
            alert('请填写正确的"最短答题时长"！');
            return false;
        }
        //若答卷时长不为'不限时长'，则最短答题时长需要比这个时间小
        if(($("input[name=examTimeRestrict]:checked").val()==1)&&(parseInt($("input[name=minExamTime]").val())>parseInt($("input[name=examTime]").val()))){
            alert('"最短答题时长"不能超过"答题时长"，请检查！');
            return false;
        }
    }
	var exam_price = $("input[name=examPrice]").val();
	if ($("input[name=userPayConfirm]").is(":checked")) {
        var checkReg = /^(([0-9][0-9]*)|(([0]\.\d{1,2}|[0-9][0-9]*\.\d{1,2})))$/;
        if (!$.isNumeric(exam_price) || exam_price < 1 || !checkReg.test(exam_price)) {
			alert("付费金额输入有误，不得小于1元，最多支持两位小数");
			moveHtml($("input[name=examPrice]"))
		   $("input[name=examPrice]").focus();
			$("input[name=examPrice]").select();
			return false;
		}
	}
	// 闯关模式限制答错次数 errorTimes
    var answer_wrong = $("input[name=errorTimes]").val();
    if ($("input[name=passMode]").is(":checked")) {
        var regex = /^[0-9]*[0-9][0-9]*$/;
        if (!$.isNumeric(answer_wrong)  || (!regex.test(answer_wrong))) {
            alert("请保证答错次数为整数");
            moveHtml($("input[name=errorTimes]"));
            $("input[name=errorTimes]").focus();
            $("input[name=errorTimes]").select();
            return false;
        }
    }

    //允许查看试卷-校验
    if($("input[name='is_paper_forever']:checked").val()==1&&$('.switch_scan_paper').hasClass('switch-on')){//开启允许查看试卷且设置了天数
        var reg = /^(([^0][0-9]+|0)$)|^(([1-9]+)$)/;
        var num =  $("#allow_p_a_days").val();
        if (num == "") {
            alert("请填写允许查看试卷的可查看天数!");
            return false;
        } else if (!reg.test(num)) {
            alert("允许查看试卷的可查看天数请输入整数");
            return false;
        } else if (num <=0) {
            alert("允许查看试卷的可查看天数必须大于0!");
            return false;
        }
    }

    if($("input[name=releaseWaySwitch]").val() != '3'){
        var check_score = true;
        var reg = /^[1-9]\d*|0$/;
        //判断是否开启'显示评语'
        if($("input[name=setRemark]").is(":checked")) {
            $(".on_state input").removeAttr("disabled");
            var minArr = [],
                maxArr = [];
            $(".on_state").each(function () {
                var min_score = $(this).children("input").eq(0).val();
                var max_score = $(this).children("input").eq(1).val();
                minArr.push(min_score==""?0:Number(min_score));
                maxArr.push(max_score==""?0:Number(max_score));
                var inputCheck = true;//判断当前input是否正确，如果输入错误，添加error-input类
                if (min_score != "" && max_score != "" ) {
                    if(!reg.test(min_score) || parseFloat(min_score) > parseFloat(totalPoints) || !reg.test(max_score) || parseFloat(max_score) > parseFloat(totalPoints) || parseFloat(min_score) > parseFloat(max_score)){
                        inputCheck = false;
                        alert("请保证'显示评语'的分数区间输入正确");
                    }
                }else {
                    inputCheck = false;
                    alert("分数区间不能为空");
                }
                if(!inputCheck) {
                    $(this).children("input").addClass("error-input");
                    check_score = false;
                    return false;
                }
            });
            if(check_score && arrCross(minArr,maxArr)){
                alert("'显示评语'的分数区间不能有交叉");
                check_score = false;
            }
        }else {
            //如果没有开启评语，那么就把.on_state中的input禁用掉，避免提交后过不了后端校验
            $(".on_state input").attr("disabled",true);
        }
        if(check_score == false){
            return false;
        }
    }

    //判断是否开启微信红包
    if ($("input[name=setWechatRedPack]").is(":checked")) {
        var check = true;
        var reg = /^(([0-9][0-9]*)|(([0]\.\d{1,2}|[0-9][0-9]*\.\d{1,2})))$/; //价格金额允许保留小数点后两位;微信红包分数也保留小数点后两位
        var minArr = [],
            maxArr = [];
        $(".showRedPackage .grade-item input").removeAttr("disabled");
        $(".grade-item").each(function () {
            var min_score = $(this).children("input").eq(0).val();
            var max_score = $(this).children("input").eq(1).val();
            var min_money = $(this).children("input").eq(2).val();
            var max_money = $(this).children("input").eq(3).val();
            var inputCheck = true;//判断当前input是否正确，如果输入错误，添加error-input类
            minArr.push(min_score==""?0:Number(min_score));
            maxArr.push(max_score==""?0:Number(max_score));
            if (min_score != "" && max_score != "") {
                if (!reg.test(min_score) || !reg.test(max_score) || parseFloat(min_score) < 0 || parseFloat(max_score) < 0 || parseFloat(min_score) > parseFloat(totalPoints)  || parseFloat(max_score) > parseFloat(totalPoints) || parseFloat(min_score) > parseFloat(max_score)) {
                    inputCheck = false;
                    alert("红包分数段输入有误，最多支持两位小数");
                }
            }else {
                inputCheck = false;
                alert("'微信红包'分数不能为空");
            }
            if (inputCheck) {
                if(min_money != "" && max_money != ""){
                    //微信红包金额 1——200
                    if (!reg.test(min_money) || !reg.test(max_money) || parseFloat(min_money) < 1 || parseFloat(min_money) > 200 || parseFloat(max_money) < 1 || parseFloat(max_money) > 200 || parseFloat(min_money) > parseFloat(max_money)) {
                        inputCheck = false;
                        alert("红包金额输入有误，仅支持1～200元金额，最多支持两位小数。");
                    }
                }else {
                    inputCheck = false;
                    alert("红包金额不能为空");
                }
            }
            if(!inputCheck) {
                $(this).children("input").addClass("error-input");
                check = false;
                return false;
            }
        });
        if(!check){
            return false;
        }else if(arrCross(minArr,maxArr)){
            alert("'微信红包'的分数区间不能有交叉");
            check_score = false;
        }
    }else {
        //如果没有开启微信红包，那么就把.grade-item中的input禁用掉，避免提交后过不了后端校验
        $(".showRedPackage .grade-item input").attr("disabled",true);
    }
	if ($("input[name=paperInfoId]").val() == "") {
		alert('请选择试卷！');
		return false;
	}
	if ($("#set_release_way1").is(":checked")) {
		$("input[name=setReleaseTime]").val("");
	}
	return true;
}

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
//异步保存fn
var has_obj_question;
function savePaperFn(url) {
	var examUsers = join_user_id();
	$("input[name=userIds]").val(examUsers.trim());
	var skipLogin = $("input[name = skipLogin]").val();//免登录时隐藏发送邮件
    //如果开启考前校验密码
    if($('input[name=setExamPwd]').val() == "1"){
        var pwdStr = $(".change-pwd-box input").val().replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
        $("input[name=examPwd]").removeAttr('disabled').val(pwdStr);
    }else {
        // $("input[name=examPwd]").attr("disabled","disabled");
    }

    //试题分数是否对考生可见
    if($(".switch-isVisible").hasClass("switch-on")) {
        $("input.scoreIsVisible").val(0);//可见为0
	}else{
        $("input.scoreIsVisible").val(1);//不可见为1
	}

    //批改评语
    if($(".switch-correct-comment").hasClass("switch-on")) {
        $("input[name=setCorrectComment]").val(1);
    }else{
        $("input[name=setCorrectComment]").val(0);
    }

    //允许查看试卷-设置表单值
    setAllowsPaperDays();
    //规范系统评语中外链地址格式
    $('.url_address').each(function(){
        var value = $(this).val();
        var number = value.indexOf('://');
        if(number >= 0) {
            $(this).val(value.substr(number+3));
        }
    });
    var dataForm = $('#subForm').serializeArray();
    var data = {};
    $(dataForm).each(function(index, obj){
        data[obj.name] = obj.value;
    });
    data['paperId'] = getParam('paper_info_id');
    console.log(JSON.stringify(data));


	$.ajax({
        type: "POST",
        dataType: "json",
        url: url,
        data: JSON.stringify(data),
        contentType: 'application/json;charset=UTF-8',
		success: function (msg) {
			has_obj_question = msg.hasObjectiveQuestion;
			if (msg.status == 'ok') {
                //临时会话存储是否提交
                sessionStorage.setItem('ksxSaveData',1);
                $('#saveBtn').attr('disabled',true);
				// if (check_subsidiary(domain)) {
				// 	post_exam_info(msg.bizContent.paperId);
				// }
				//管理员体验地址
				//var url = msg.bizContent.trialExamLink;
                var isSkipLogin = $('input[name=skipLogin]').val();
				// var password = msg.bizContent.examPwd;
				$("#trialExamBtn").html('<span class="try-exam guide-btn">考一下</span>');
				$("#loading").hide();
				// 短信内容
				//var notification = msg.bizContent.msgContent.split(',');
				//$('.notification .notificationContent').text("666");
                //$('.notification .notificationUrl').text("888");

                if($("input[name='setProcess']").val()==1){
                    $("#cannotLinkModal").modal("show");
                }
                else{
                    //showSelOk(msg.bizContent.examId, msg.bizContent.examLink, msg.bizContent.examPwd,url,'exam',isSkipLogin);
                    alert('考试创建成功!');
                    window.location.reload();
                }

			} else {
				alert("操作失败，请联系管理员！");
			}
		}
	});
}

$("#cannotLinkModal .btn").click(function(){
    window.location.href="/admin/exam_mgr_new";
})

//将指定考生的id拼装成字符串
function join_user_id() {
    var usernameLabels = $("#usersName .label-default .useridItem");
    var examUsers = '';
    for (var i = 0; i < usernameLabels.length; i++) {
        examUsers = examUsers + usernameLabels[i].textContent.trim() + ",";
    };
    return examUsers;
}

$(".showRedPackage .grade-item input").focus(function(){
    $(this).parents(".grade-item").children("input").removeClass("error-input");
});
$(".onShow_state .on_state input").focus(function(){
    $(this).parents(".on_state").children("input").removeClass("error-input");
});

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
var post_exam_info = function (exam_info_id) {
    //考试状态
    if ($("select[name=status]").val() == "0") {
        var exam_status = "1";
    }
    else {
        exam_status = "0";
    };

    //考试次数
    if ($("select[name=examTimesRestrict]").val() == "1") {
        var take_exam_time = "0";
    }
    else {
        take_exam_time = $("input[name=examTimes]").val();
    };
    //是否发布成绩
    if ($("input[name=releaseWaySwitch]").is(":checked")) {
        var release_type = "1";
    }
    else {
        release_type = "0";
    };

    company_id = domain.split(".")[0];
    create_user_id = user_name.split("@")[0];

    if (!($("input[name=set_full_screen]").is(":checked"))) {
        var blur_count = "0";
    }
    else {
        blur_count = $("input[name=blur_count]").val();
    }
    var post_data = {
        "company_id": company_id,
        "exam_id": exam_info_id,
        "exam_name": $("input[name=exam_name]").val(),
        "classification": $("#selTypeLink span").text(),
        "release_way": release_type,
        "status": exam_status,
        "total_score": total_points,
        "take_exam_time": take_exam_time,
        "exam_start_time": $("#dateFrom").val(),
        "exam_end_time": $("#dateTo").val(),
        "exam_time": $("input[name=exam_time]").val(),
        "create_user_id": create_user_id,
        "blur_count": blur_count,
        "has_obj_question": has_obj_question
    };
    var status;
    $.ajax({
        type: "post",
        url: "http://restful.gaoxiaobang.com/exam/create/api?jwt=" + jwt,
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
                    post_exam_info(exam_info_id);
                }
            }
        }
    })
}
//自定义考试页背景设置
$(".switch-examBg").on("click",function(e){
    e.stopPropagation();
    e.preventDefault();
    if($(this).hasClass('switch-disabled')){
        alert("您没有权限，请先开通该功能");
        return false;
    }
    if($(this).prop("class").indexOf("switch-on") == -1){
        $("#examBgLink").show();
    }else {
        $("#examBgLink").hide();
    }
});
//背景图片设置
$("#examBgLink").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    $("#examBgModal").modal("show");
});

//上传图片
$('.button-upload').click(function (e) {
    $(this).find('input[type=file]').click();
});
$('input[type=file]').click(function (e) {
    e.stopPropagation();
});

//自定义考试背景 PC
$("input[name=examFile]").change(function () {
    if ($(this).val() != '') {
        var dom = this;
        var type = 'examBg';
        var formData = new FormData();
        formData.append('examBgFile', this.files[0]);
        formData.append('classification', type);
        $.ajax({
            url: '/admin/uploadExamBgFile',
            cache: false,
            type: 'post',
            dataType: 'json',
            data: formData,
            contentType: false,
            processData: false,
            success: function (msg) {
                if (msg.success == true) {
                    exam_url = msg.bizContent;
                    $("input[name=examBgFile]").val(exam_url);
                    $("#examBgModal .exam-bg .show-exam-bg").css("background-image","url("+exam_url+")");
                    $("#examBgModal .exam-bg .preview .wrap").css("background-image","url("+exam_url+")");
                } else
                    alert (msg.desc);
            }
        });
    }
});

//自定义考试背景 移动端
$("input[name=mExamFile]").change(function () {
    if ($(this).val() != '') {
        var dom = this;
        var type = 'mExamBg';
        var formData = new FormData();
        formData.append('examBgFile', this.files[0]);
        formData.append('classification', type);
        $.ajax({
            url: '/admin/uploadExamBgFile',
            cache: false,
            type: 'post',
            dataType: 'json',
            data: formData,
            contentType: false,
            processData: false,
            success: function (msg) {
                if (msg.success == true) {
                    m_exam_url = msg.bizContent;
                    $("input[name=mExamBgFile]").val(m_exam_url);
                    $("#examBgModal .m-exam-bg .show-exam-bg").css("background-image","url("+m_exam_url+")");
                    $("#examBgModal .m-exam-bg .preview .wrap").css("background-image","url("+m_exam_url+")");
                } else
                    alert (msg.desc);
            }
        });
    }
});

//批量录入人员
$("#selUsersLink").click(function(){
	//显示模态框
	$("#inputUsersModal").modal("show");
});
$("#inputUsersModal textarea").bind("input propertychange", function() {
    var _this = $(this);
    var _val = _this.val().replace(/\r\n/ig," ").replace(/\r/ig," ").replace(/\n/ig," ");
    _val = _val.replace(/\s+/g," ");
    _this.val(_val);
});
//确定
$("#saveUsers").click(function(){
	var _input_str = $("#inputUsersModal textarea").val();
    if(_input_str == "") {
		return false;
	}else if(_input_str.charAt(_input_str.length-1) == " ") {//如果最后一个字符为空字符串
        _input_str = _input_str.substring(0,_input_str.length-1);
	}
    var _account_arr = _input_str.split(" ");//数组
    var _account_str = _account_arr.join("@"+domain+",");//账号后拼接@+公司id+","
    _account_str = _account_str + "@" + domain;//给最后一项拼接@+公司id
    $.ajax({
        type: "POST",
        cache : false,
        headers: { "cache-control": "no-cache" },
        dataType: "json",
        url: "/admin/batch_addition",
        data: {
            examinee: _account_str,
            departments: $(".hasSelectedDeptIds").val(),//input[name=deptIds]//已选部门
            existingIds: $(".hasSelectedUserIds").val()//input[name=userIds]//已选人员
		},
        success: function(msg){
        	if(msg.success){
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
                if(_users.length > 0){
                    for (var i=0; i<_users.length; i++) {
                        _namesArray.unshift([_users[i].id,_users[i].surname.toString()]);
                        _userIds_str+=(_users[i].id+",");
                    }
                    $(".hasSelectedUserIds").val(_userIds_str);
                    selMuchUser(_namesArray);
				}
			}
        }
    });
});
//清空可考人员
$("#clearUsers").click(function(){
    BootstrapDialog.show({
        title: "",
        message: "是否确定清空全部可考人员？",
        buttons: [{
            label: "否",
            action: function(dialogItself) {
                dialogItself.close();
            }
        },{
            label: "是",
            cssClass: 'btn-primary',
            action: function(dialogItself) {
                dialogItself.close();
                $(".userNameLabel").html("");//清空label
                $(".hasSelectedUserIds").val("");//清空input
                $("#clearUsers").attr("disabled", true);
            }
        }]
    });
});

//试题水印
$(".switch-waterMark").on("click",function(e){
    e.stopPropagation();
    e.preventDefault();
    if($(this).prop("class").indexOf("switch-on") == -1){
        $("#watermarkPreview").show();
    }else {
        $("#watermarkPreview").hide();
    }
});
//显示水印模态框
var watermarkImg = "";
$("#watermarkPreview").click(function(){
    var _this = $(this);
    if(watermarkImg != "") {
        $("#watermarkPreviewModal").modal('show');
    }else {
        $.ajax({
            type: "GET",
            cache: false,
            headers: {"cache-control": "no-cache"},
            dataType: "json",
            url: "/course/get_watermark",
            success: function (msg) {
                if(msg.success){
                    watermarkImg = msg.bizContent;
                    $("#watermarkPreviewModal .modal-body").css({
                        "background-image": "url("+msg.bizContent+")"
                    });
                    $("#watermarkPreviewModal").modal('show');
                }else {
                    alert("水印预览失败，请重试");
                }
            }
        });
    }
});
