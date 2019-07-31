var comb_data={question:'',insert_data:[]};
$(document).ready( function() {
	//答案乱序默认开启
	// $(".pull-right .has-switch div").attr("class","switch-on");
	$(".keyJudge, .keyFill, .keyCloze").hide();
    $("input[type=file]").change(function() {
        $("#uploadForm").submit();
        $(".loading").show();
    });

	// 重置页面
	$(".btn-reset").click(function(e) {
		e.stopPropagation();
		e.preventDefault();
		resetPage();
	});

	// 初始化编辑器
    $.each($('.questions_add').toArray().reverse(),function() {
		initialEditor($(this));
    });

	// 保持只有一个编辑器
	$('body').on('click','.wangEditor-container',function () {
		$('.wangEditor-container').removeClass('active');
		$(this).addClass('active');
	});

	//选择分类
	$("body").on("click", "#selTypeLink", function(e) {
        // e.stopPropagation();//解决点击'试题分类'，'试题难度'下拉框不隐藏的bug
		// e.preventDefault();
		showSelType(this);
    });

	// 选择标签
    $("body").on("click", "#selLabelLink", function(e) {
        showSelLabel(this);
    });

	//切换试题分类
	$(".batch-type select[name=type]").change(function(e) {
		$('.wangEditor-container').removeClass('active');
		$("#asyncForm input[name=type]").val($(this).val());
		changeType($(this).val(),true);
	});

	//<!---------问答题关键字start------------>
	// 添加关键词
	$("#normalWord, #keyWord").click(function() {
		var characterCheck = /[`~!@#$%^&*()_\-+=<>?:"{},.\/;'\\[\]·~！@￥%……&*（）——\-+={}《》？：“”【】、；‘’，。、]/im;
		//var characterCheck = /^[\u4e00-\u9fa50-9A-Za-z]+$/im;//匹配特殊字符  //特殊字符会影响关键词判分准确性，因此先禁止
		var inputVal = $(this).parents(".keyWordPanel").find("input[name=key_word]").val();
		//因为前端后台约定以"#"来作为关键词的拼接符和分割符，因此暂且限制关键词中不能输入"#"
		if(characterCheck.test(inputVal)){
			alert("关键词不允许使用特殊字符");
			return false;
		}
		var keyWord = $.trim(inputVal);
		// escape keyWord
		keyWord = escapeKeyHTML(keyWord);
		var keyType = $(this).hasClass("btn-normal-word") ? 'normal-word' : 'key-word';
		var keyLength = $("#keyBlock").find(".whole-word").length;
		var index = (keyLength==0) ? 0 : (parseInt($("#keyBlock").find(".whole-word").last().attr("index"))+1);
		var key_html = "";
		if(keyWord==""){
			alert("请输入关键词！");
			return false;
		}else {
			if(keyWord.search(/[\||｜]/)==-1){//单个关键词
				key_html = '<span class="word single-word">' + keyWord + '</span><em class="remove-word icons8-delete"></em>';
			}else {//组合型关键词
				var keyWords = keyWord.split(/[\||｜]/);
				for (var i = 0; i < keyWords.length; i++) {
					key_html += '<span class="word multi-word">' + keyWords[i] + '</span>' +
							   ((i==keyWords.length-1) ? '<em class="remove-word icons8-delete"></em>' : '<em class="relate-word">或</em>');
				}
			}
			$("#keyBlock").append('<div class="whole-word ' + keyType + '" id="word' + index + '" index="' + index + '">' + key_html + '</div>');
			$(this).parents(".keyWordPanel").find("input[name=key_word]").val("");
			// 初始化每个关键词的提示框
			initialPopover($("#word"+index),index);
			if(keyLength==0){
				$("#keyBlock").slideToggle(200);
			}
		}

	});

	// 切换关键词类型
	$("body").on("click", ".switch-word" , function(e) {
		e.stopPropagation();
		e.preventDefault();
		var index = $(this).attr("index");
		var $word = $("#word"+index);
		if($(this).hasClass("switch-key-word")){//normal->key
			$($word).removeClass("normal-word").addClass("key-word");
		}else if ($(this).hasClass("switch-normal-word")) {//key-normal
			$($word).removeClass("key-word").addClass("normal-word");
		}
	});

	// 删除关键词
	$("body").on("click", ".remove-word", function(e) {
		e.stopPropagation();
		e.preventDefault();
		var $o = $(this);
		var $p = $($o).parents(".key_block");
		$($o).parents(".whole-word").remove();
		var keyLength = $("#keyBlock").find(".whole-word").length;
		if(keyLength==0){
			$("#keyBlock").slideToggle(200);
		}
	});

	//<!---------问答题关键字end------------>

	// <------批量导入组合题小题start------>
	//选择试题类型，显示不同示例
	$(".combBatchPanel input[name=insert_type]").change(function(e) {
		// 更换试题类型时给出提示信息
		if(confirm("输入区试题内容会清空，请确认")==false){
			$(".combBatchPanel #type"+qt_type).prop("checked",true);
			return false;
		}
		qt_type = $(".combBatchPanel input[name=insert_type]:checked").val();
        $("#text-input .fr-view").html("");
		$("#preview").empty();
		$("#qtExample .accordion").hide();
		$("#accordion"+qt_type).show();
	});

	// 点击查看例题示范
	$("#showExample").click(function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('#qtExample').modal({});
	});

	// 点击关闭例题示范
	$(".btn-close").click(function(e){
		e.stopPropagation();
		e.preventDefault();
		$('#qtExample').modal('hide');
	});
    var errorIndex = -1;
    var topNum = 0;
    var bottomNum = 0;
	// 点击显示下一个错误
	$("#nextError").click(function (e) {
		e.stopPropagation();
		e.preventDefault();

        var boxOffsetTop = $('.box').offset().top;
        var error=$("#preview").find(".check_error");

        //先判断滚动条是否到底部
        if(bottomNum === 1){
            topNum = 0;
            bottomNum = 0;
			errorIndex=-1
        }else{
            errorIndex++;
            if(errorIndex > (error.length)-1){
                errorIndex = -1;
            }
           topNum += parseInt(error.eq(errorIndex).offset().top-boxOffsetTop-10);
        }
        $('.box').scrollTop(topNum);
	});
	//滚动检测
    $('.box').scroll(function(){
        if($(this).scrollTop()+$(this).height() >= $('#preview').height()){
            errorIndex = -1;
            topNum = 0;
            bottomNum = 1
        }

    });
	// 组合题列表中删除小题
	$("body").on("click",".questionList .icons8-delete",function(e) {
		e.preventDefault();
		e.stopPropagation();
		var insert_obj= $(this).parents(".single");
		deleteInsert(insert_obj);
	});

	// 组合题列表中上移小题
	$("body").on("click",".questionList .icon-a_arrow_up",function(e) {
		e.preventDefault();
		e.stopPropagation();
		var insert_obj= $(this).parents(".single");
		chevronUpInsert(insert_obj);
	});

	// 组合题列表中下移小题
	$("body").on("click",".questionList .icon-a_arrow_down",function(e) {
		e.preventDefault();
		e.stopPropagation();
		var insert_obj= $(this).parents(".single");
		chevronDownInsert(insert_obj);
	});

	//批量导入小题
	$("#importBtn").click(function(e) {
		e.stopPropagation();
		e.preventDefault();
		if(checkError()==0) return false;
		var text = $("#text-input .fr-view").html();
		$("#errorText , #errorTextNew").hide();
		if(text==""){
			alert("导入内容不能为空！");
			return false;
		}else{
			var data=serializeFn();
			var dataForm=JSON.stringify(data);
			$("#import").hide();
			$("#import_questions").show();
			$.ajax({
			  type: "POST",
			  cache : false,
			  headers: { "cache-control": "no-cache" },
			  dataType: "json",
              contentType: "application/json",
              url: "/admin/edit_mix_question/?dataType=addBatch",
			  data: dataForm,
			  success: function(data){
				  addBatchInsert(data.bizContent);
                  $("#text-input .fr-view").html("");
				  $("#preview").empty();
				  $("#import_questions").hide();
				  $("#import").show();
			  }
		  });
		}
	});

	// <------批量导入组合题小题 end ------>

	//增加答案选项
	$("body").on("click",".keyRadio .addKey",function() {
		var obj = $(this).parents(".keyPanel");
		var keyLength = $(obj).find(".keyList").length;
		var input_type = $("select[name=type]").val()=="1" ? "radio" : "checkbox";
		var html =  '<div class="keyList keyListAdd">'+
                    '    <div class="keyLeft">'+
                    '        <input type="' + input_type + '" class="radioOrCheck" name="keyChk" />'+
                    '    </div>'+
                    '    <div class="keyRight keyRight'+(keyLength+1)+'">'+
                    '        <div id="key'+(keyLength+1)+'Editor" class="questions_add"></div>'+
                    '        <input name="answer'+(keyLength+1)+'" type="hidden" />'+
                    '    </div>'+
                    '    <a href="javascript:void(0);" class="removeKey icons8-delete"></a>'+
                    '</div>';
		$(obj).find(".addKeyBtn").before(html);
		initialEditor("key"+(keyLength+1)+"Editor");
		$('.wangEditor-container').removeClass('active');
		$(".keyRight"+(keyLength+1)+" .wangEditor-container").addClass('active');
		if (keyLength==19) {
			$(obj).find(".addKeyBtn").addClass("hidden");
			return false;
		}
	});

	// 删除答案选项
	$("body").on("click",".keyRadio .removeKey",function() {
		$(".keyRadio .addKeyBtn").removeClass("hidden");
		$(this).parents(".keyList").remove();
		$(".keyRadio .keyList").each(function(index, element) {
			var obj = $(this).find(".keyRight");
			$(obj).attr("class","keyRight keyRight"+(index+1));
			$(obj).find(".questions_add").attr("id","key"+(index+1)+"Editor");
			$(obj).find("input").attr("name","answer"+(index+1));
		});
	});


	//填空题添加多个
	$("div.keyFill .addKeyFill").click(function(e) {
		var keyLength = $("input[name=keyFill]").length + 1;
		if (keyLength==19) {
			$(".keyFill .addKeyFillBtn").addClass("hidden");
		}
		var html='<div class="keyFillContent keyFillContentAdd">'+
				 '	  <div class="input-group">'+
				 '		  <span class="input-group-addon">'+(keyLength)+'</span>'+
				 '		  <input type="text" name="keyFill"  id="input'+keyLength+'Editor" class="form-control" placeholder="请输入答案">'+
				 '	  </div>'+
				 '	  <a href="javascript:void(0);" class="removeKeyFill icons8-delete"></a>'+
				 '</div>';
		$("div.addKeyFillBtn").before(html);
    });

	//填空题删除多个
	$("body").on("click", "a.removeKeyFill", function(e) {
		$(".keyFill .addKeyFillBtn").removeClass("hidden");
        $(this).parents("div.keyFillContent").remove();
		$(".keyFill .input-group-addon").each(function(index,element) {
			$(this).text(index+1);
		});
    });

	//答案乱序
	if($(".answerDisorder").hasClass("switch-on")){
		$("input[name=disorder]").val(1);
	}else{
        $("input[name=disorder]").val(0);
    }

    $('#createExam').click(function () {
		window.location.href = '/admin/paper_add_new';
    });
});

// 重置页面
function resetPage() {
	var type = $("#subForm select[name=type]").val();
	var html = "";
	if(type=="1"||type=="2"){
		var input_type = (type==1) ? "radio" : "checkbox";
		var key_length = $(".keyRadio").find(".keyList").length;
		for (var i = key_length; i < 4; i++) {
			html = '<div class="keyList">'+
					'    <div class="keyLeft">'+
					'        <input type="' + input_type + '" class="radioOrCheck" name="keyChk" />'+
					'    </div>'+
					'    <div class="keyRight keyRight'+(i+1)+'">'+
					'        <div id="key'+(i+1)+'Editor" class="questions_add"></div>'+
					'        <input name="answer'+(i+1)+'" type="hidden" />'+
					'    </div>'+ ((i<2) ? '' :'<a href="javascript:void(0);" class="removeKey icons8-delete"></a>')+
					'</div>';
			$(".addKeyBtn").before(html);
			initialEditor("key"+(i+1)+"Editor");
		}
	}
	$('.wangEditor-container').removeClass('active');
	if(type == "1"){
		$(".keyRadio input[type=checkbox]").attr("type","radio");
	}else if (type == "2") {
		$(".keyRadio input[type=radio]").attr("type","checkbox");
	}
	$('#asyncForm')[0].reset();
	$(".radioOrCheck").prop("checked",false);
	$("#asyncForm div .radioOrCheck").remove();
    $("#judgeYes").prop("checked",true);
	$("div.keyFillContentAdd, div.keyListAdd").remove();
	$(".questionPanel,#keyBlock").hide();
	$(".questionPanel .questionList, .questions_add, #keyBlock, #preview").empty();
	$(".keyRadio .addKeyBtn, .keyFill .addKeyFillBtn").removeClass("hidden");
	$("input[name=keyFill], #text-input").val("");
	$(".combPanel, .descPanel, .keyPanel, .analysisPanel").find("input").val("");
    $(".bootstrap-tagsinput span").remove();
    $("input[data-role=tagsinput]").tagsinput("removeAll");
}

// 初始化编辑器
function initialEditor(o) {
	var editor = new wangEditor(o);
	editor.config.printLog = false;
	editor.config.uploadImgUrl = '/admin/upload/?userRole=admin&action=uploadimage';
	editor.config.uploadImgFileName = 'upfile';
	editor.config.uploadVideoUrl = '/admin/upload/?userRole=admin&action=uploadvideo';
	editor.config.uploadVideoFileName = 'upfile';
	editor.config.uploadFileUrl = '/admin/upload/?userRole=admin&action=uploadfile';
	editor.config.uploadFileFileName = 'upfile';
	editor.config.menus = [
		'bold',
		'underline',
		'italic',
		'strikethrough',
		'|',
		'fontfamily',
		'fontsize',
		'head',
		'unorderlist',
		'orderlist',
		'alignleft',
		'aligncenter',
		'alignright',
		'|',
		'table',
		'img',
		'fileUpload',
		'mediaUpload',
		'|',
		'fullscreen'
	];
	editor.create();
    // force editor blur
	editor.$txt.blur();
	var $input = $(editor.$editorContainer).next();
	editor.$txt.blur(function () {
		var $temp = $('<div></div>');
		$temp.html($(this).html());
		$.each($temp.find('.video-temp-img'), function() {
			var src = $(this).attr('temp_src');
			var alt = $(this).attr('alt');
			$(this).after('<video controls alt="'+alt+'"><source src="'+src+'"></video>');
			$(this).remove();
		});
        $.each($temp.find('.audio-temp-img'), function() {
            var src = $(this).attr('temp_src');
            var alt = $(this).attr('alt');
            $(this).after('<audio controls alt="'+alt+'"><source src="'+src+'"></audio>');
            $(this).remove();
        });
		$input.val($temp.html());
    });
}

// 初始化每个关键词的提示框
function initialPopover(o, index) {
	$('#word'+index).popover({
		'container' : '#word'+index,
		'placement' : 'top',
		'trigger' : 'hover',
		'content' : function() {
						var type = $(o).hasClass("key-word") ? "key-word" : "normal-word";
						var normal_btn = '<button class="btn btn-gray switch-word switch-normal-word" index="' + index +'">切为普通关键词</button>';
						var key_btn = '<button class="btn btn-l-orange switch-word switch-key-word" index="' + index +'">切为核心关键词</button>';
						return (type == 'key-word' ? normal_btn : key_btn);
					},
		'html' : true,
		'template' : '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>',
	});
}

// escape keyWord
function escapeKeyHTML( text ) {
  return text.replace( /&/g, "&amp;" )
             .replace( /</g, "&lt;" )
             .replace( />/g, "&gt;" )
             .replace( /"/g, "&quot;" )
             .replace( /'/g, "&#39;" )
}

//显示选择分类对话框
function showSelType(obj){
	selTypeModal.location.href = "/admin/tree/tests_class";
	$("#typeModal").modal({
		backdrop:"static",
		keyboard:false
	});
}

//关闭选择分类对话框
function hideSelType(obj){
	$('#typeModal').modal('hide');
}

//接受选择分类数据
function selType(id, name){
	$("input[name=classification]").val(id);
	$("#selTypeLink").text('已选择');
}

//显示选择标签对话框
function showSelLabel(obj){
    localStorage.setItem("selArryLabel"+user_id, $("input[name=label]").val());
    selLabelModal.location.href = "/admin/tree/tests_multi_label";
    $("#labelModal").modal({
        backdrop:"static",
        keyboard:false
    });
}
//关闭选择标签对话框
function hideSelLabel(obj){
    $('#labelModal').modal('hide');
}
// 接受选择标签数据
function selLabel(data) {
	var ids = '';
    for (var i = 0; i < data.length; i++) {
        ids += data[i].id + ',';
    }
    ids = ids.slice(0,ids.length - 1);
    $("input[name=label]").val(ids);
    $("#selLabelLink").text('已选择');
    localStorage.setItem("selArryLabel"+user_id, $("input[name=label]").val());
}

//显示选择导入方式对话框
function showSelMode(obj){
	$('#modeModal').modal({
		backdrop:"static",
		keyboard:false
	});
}

//关闭选择分类对话框
function hideSelMode(obj){
	$('#modeModal').modal('hide');
}

//切换试题分类fn
function changeType(type, normal){
	resetPage();
	$(".keyPanel").hide();
    $(".cont-r").removeClass("min-height-1000");
	if(type==1){ //单选
		if(normal){
			$(".combPanel").hide();
			$(".combBatchPanel").hide();
			$(".questionPanel").hide();
		}
		$(".keyRadio").show();
		$(".question-content").show();
		return;
	}
	if(type==2){ //多选
		if(normal){
			$(".questionPanel").hide();
			$(".combPanel").hide();
			$(".combBatchPanel").hide();
		}
		$(".keyRadio input[type=radio]").attr("type","checkbox");
		$(".keyRadio").show();
		$(".question-content").show();
		$(".question").show();
		return;
	}
	if(type==3){ //判断
		if(normal){
			$(".combPanel").hide();
			$(".combBatchPanel").hide();
			$(".questionPanel").hide();
		}
		$(".question-content").show();
		$(".keyJudge").show();
		return;
	}
	if(type==4){ //填空
		if(normal){
			$(".combPanel").hide();
			$(".combBatchPanel").hide();
			$(".questionPanel").hide();
		}
		$(".question-content").show();
		$(".keyFill").show();
		return;
	}
	if(type==5||type==7){ //问答
		if(normal){
			$(".combPanel").hide();
			$(".combBatchPanel").hide();
			$(".questionPanel").hide();
		}
		$(".question-content").show();
		if(type==5){
			$(".keyCloze .keyWordPanel").show();
		}else if (type==7) {
			$(".keyCloze .keyWordPanel").hide();
		}
		$(".keyCloze").show();
		return;
	}
	if(type==6){ //组合题
		if(normal){
			$(".question-content").hide();
			if($(".questionPanel .input-group").length==0){
				$(".questionPanel").hide();
			}else {
				$(".questionPanel").show();
			}
			$(".combPanel").show();
			$(".combBatchPanel").show();
			$(".cont-r").addClass("min-height-1000");
		}
		return;
	}
}

//验证表单选项
function checkForm(){
	var classification = $("#subForm input[name=classification]").val();
	var type = $("#asyncForm input[name=type]").val();
	if(classification=='0'){
		alert("请选择试题分类！");
		return false;
	}
	if(type==0){
		alert("请选择试题类型！");
		return false;
	}
	if(filterContentIsEmpty($("input[name=question]").val())){
		alert("请填写试题描述！");
		return false;
	}

	if(type==1||type==2){
		var key = $(".keyRadio .radioOrCheck");
		var ifCheck = false;
		for(var i=0;i<key.length;i++){
			var checked = $(key[i]).is(":checked");
			$(key[i]).parent().find(".key").remove();
			if(checked===true){
				ifCheck = true;
				$(key[i]).parent().append('<input type="hidden" class="key" name="key'+(i+1)+'" value="1" />');
			}else{
				$(key[i]).parent().append('<input type="hidden" class="key" name="key'+(i+1)+'" value="0" />');
			}
		}
		if(ifCheck===false){
			alert("请选择正确答案！");
			return false;
		}
		return true;
	}
	if(type==4){
		var key=$(".cont-r").find("input[name=keyFill]");
		var ifFill= true;

		for(var i = 0;i<key.length;i++){
			if(filterContentIsEmpty($(key[i]).val())){
				alert("请填写试题答案！");
				ifFill=false;
				break;
			}
		}
		if(ifFill==false){
			return false;
		}
		return true;

	}
	if(type==5||type==7){
		if(filterContentIsEmpty($(".keyCloze input[name=answer1]").val())){
			 alert("请填写试题答案！");
			 return false;
		 }
	}
	return true;
}

//提交试题数据合并
function serializeForm(){
	$("#asyncForm div").html("&nbsp;");
	$("#asyncForm input[name=classification]").val($("#subForm input[name=classification]").val());
	$("#asyncForm input[name=tab_num]").val($(".keyRadio").find(".keyList").length);
	$("#asyncForm input[name=status]").val("enable");
	$("#asyncForm input[name=difficult]").val($("#subForm select[name=difficult]").val());
	$("#asyncForm input[name=encrypt]").val("0");
	if($(".answerDisorder").hasClass("switch-on")){
        $("#asyncForm input[name=disorder]").val(1);
    }else{
        $("#asyncForm input[name=disorder]").val(0);
    }

	// 关键词整合
	var normal_words = '';
	var normal_length = $("#keyBlock").find(".normal-word").length;
	$("#keyBlock").find(".normal-word").each(function(index, element) {
		var $w = $(this).find(".word");
		if($($w).hasClass("single-word")){//单个关键词 分隔符：＃
			normal_words += escapeKeyHTML($($w).text()) + (index == normal_length-1 ? '' : '#');
		}else if ($($w).hasClass("multi-word")) {//组合型关键词  分隔符：&
			var $w_length = $w.length;
			$($w).each(function(index, element) {
				normal_words += escapeKeyHTML($(this).text()) + (index == $w_length-1 ? '' : '||');
			});
			normal_words += (index == normal_length-1 ? '' : '#');
		}
	});
	var key_words = '';
	var key_length = $("#keyBlock").find(".key-word").length;
	$("#keyBlock").find(".key-word").each(function(index, element) {
		var $w = $(this).find(".word");
		if($($w).hasClass("single-word")){//单个关键词  分隔符：＃
			key_words += escapeKeyHTML($($w).text()) + (index == key_length-1 ? '' : '#');
		}else if ($($w).hasClass("multi-word")) {//组合型关键词  分隔符：&
			var $w_length = $w.length;
			$($w).each(function(index, element) {
				key_words += escapeKeyHTML($(this).text()) + (index == $w_length-1 ? '' : '||');
			});
			key_words += (index == key_length-1 ? '' : '#');
		}
	});
	$("#asyncForm input[name=normalWords]").val(normal_words);
	$("#asyncForm input[name=keyWords]").val(key_words);

	var parent_dom=$("#editor").parent();
	$("#asyncForm textarea[name=question]").text($("input[name=question]").val());
	$("#asyncForm textarea[name=analysis]").text($("input[name=analysis]").val());

	var type = $("#asyncForm input[name=type]").val();
	if(type==1||type==2){
		var keyList = $(".keyRadio").find(".keyList");
		for(var i=0;i<keyList.length;i++){
			if(i<=(keyList.length-1)){
				var answer='';
				//此处注意，不能用keyList，否则下面input有两个，取不到值
				answer=$(keyList[i]).find(".keyRight").children("input[name=answer"+(i+1)+"]").val();
				$(keyList[i]).find(".key").clone().appendTo("#asyncForm div");
				$("#asyncForm div").append('<textarea name="answer'+(i+1)+'"></textarea>');
				$("#asyncForm textarea[name=answer"+(i+1)+"]").text(answer);
			}
		}
		return true;
	}else if(type==3){
		if($("#judgeYes").is(":checked")){
			$("#keyYes").val("1");
			$("#keyNo").val("0");
			$("#asyncForm div").html('<input type="hidden" class="" name="key1" value="1" /><input type="hidden" class="" name="key2" value="0" /><input type="hidden" class="radioOrCheck" name="answer1" value="" /><input type="hidden" class="radioOrCheck" name="answer2" value="" />');
		}else{
			$("#keyYes").val("0");
			$("#keyNo").val("1");
			$("#asyncForm div").html('<input type="hidden" class="" name="key1" value="0" /><input type="hidden" class="" name="key2" value="1" /><input type="hidden" class="radioOrCheck" name="answer1" value="" /><input type="hidden" class="radioOrCheck" name="answer2" value="" />');
		}
		return true;
	}else if(type==4){
		var keyList = $("input[name=keyFill]");
		var html = "";
		$("input[name=keyFill]").each(function(index, element) {
            var reg=/,/g;
			//去除首尾空格
			var ans_arr=$(this).val().split(',');
			var noblank_reg=/(^\s*)|(\s*$)/g;
			ans_arr.forEach(function(item,index,arr){
				arr[index]=arr[index].replace(noblank_reg,"");
			})
			$(this).val(ans_arr.join(','));
			html = '<input type="hidden" class="" name="key'+(index+1)+'" value="1" /><input type="hidden" class="radioOrCheck" name="answer'+(index+1)+'" value="'+$(this).val().replace(reg,"&&")+'" />';
			$("#asyncForm div").append(html);
		});
		return true;

	}else if(type==5||type==7){
		$("#asyncForm div").append('<textarea name="answer1"></textarea>');
		$("#asyncForm div").append('<input type="hidden" class="" name="key1" value="1" />');
		$("#asyncForm div textarea[name=answer1]").text($(".keyCloze input[name=answer1]").val());
		return true;
	}
}

//异步提交表单
function asyncSub(){
	var dataForm =$('#asyncForm').serialize();
	$.ajax({
		type: "POST",
		cache : false,
		headers: { "cache-control": "no-cache" },
		dataType: "json",
		url: "/admin/addtestqm",
		data: dataForm + "&t="+Math.random(),
		success: function(msg){
				if(msg.success == true){
					resetPage();
                    //gio
                    ksxProbe.gioTrack('enterQuestionSuccess', 1, {
                        'questionEnterMethod_var': '手动录入',
                        'questionEnterCount_var': 1
                    });
                    if (USER_ROLE == 'sub_admin' && KSXRIGHTS.allowPaperAdd != 1){
                        $('#createExam').hide();
                    }
                    $('#saveQuestionModal').modal();
				}else{
					alert(msg.errmsg);
				}
		}
	});
}


// <------组合题小题操作 start ------>

// 检查组合题小题
function checkInsert(){
	var type=comb_data.insert_data[0].type;

	if(filterContentIsEmpty($("input[name=question]").val())){
		alert("请填写试题描述！");
		return false;
	}
	if(type==1||type==2){
		var key_len=$(".keyRadio .radioOrCheck:checked").length;
		if(key_len==0){
			alert("请选择正确答案！");
			return false;
		}
	}
	if(type==4){
		var key=$(".cont-r").find("input[name=keyFill]");
		var ifFill= true;
		for(var i=0;i<key.length;i++){
			if(filterContentIsEmpty($(key[i]).val())){
				alert("请填写试题答案！");
				ifFill=false;
				break;
			}
		}
		if(ifFill==false){
			return false;
		}
	}
	if(type==5||type==7){
        if(filterContentIsEmpty($(".keyCloze input[name=answer1]").val())){
            alert("请填写试题答案！");
            return false;
        }
	}

	return true;
}


// 组合题列表中删除小题
function deleteInsert(obj) {
	var has_insert_num=$(obj).find(".input-group").attr("sort");
	$(".questionPanel").find(".input-group").each(function(index, element) {
		var sort=$(this).attr("sort");
		if(sort>has_insert_num){
			$(this).attr("sort",sort-1);
			$(this).find(".input-group-addon").text(sort);
			$(this).removeClass("input-group"+sort);
			$(this).addClass("input-group"+(sort-1));
		}
	});
	$(obj).remove();
	var has_insert_num = $(".questionPanel .questionList .single").length;
	if(has_insert_num == 0){
		$(".questionPanel").hide();
	}
}

// 组合题列表中上移小题
function chevronUpInsert(obj){
	var prev_html = $(obj).prev().find(".input-div").html();
	var prev_id = $(obj).prev().find(".input-group").attr("insert_id");
	var this_html = $(obj).find(".input-div").html();
	var this_id = $(obj).find(".input-group").attr("insert_id");
	$(obj).find(".input-div").html(prev_html);
	$(obj).find(".input-group").attr("insert_id",prev_id);
	$(obj).prev().find(".input-div").html(this_html);
	$(obj).prev().find(".input-group").attr("insert_id",this_id);
}

// 组合题列表中下移小题
function chevronDownInsert(obj) {
	var next_html = $(obj).next().find(".input-div").html();
	var next_id = $(obj).next().find(".input-group").attr("insert_id");
	var this_html = $(obj).find(".input-div").html();
	var this_id = $(obj).find(".input-group").attr("insert_id");
	$(obj).find(".input-div").html(next_html);
	$(obj).find(".input-group").attr("insert_id",next_id);
	$(obj).next().find(".input-div").html(this_html);
	$(obj).next().find(".input-group").attr("insert_id",this_id);
}

// <------组合题小题操作 end ------>


// <------批量导入组合题小题 start ------>

//点击导入时检查试题中是否存在错误
function checkError() {
    // 首先检查题目中有无重复项，若有重复则对整题做标记
    $("#preview").find(".question").each(function (index,element) {
        var key_t=[];
        key_t[0]=$(this).find(".key_A").length;
        key_t[1]=$(this).find(".key_B").length;
        key_t[2]=$(this).find(".key_C").length;
        key_t[3]=$(this).find(".key_D").length;
        key_t[4]=$(this).find(".key_E").length;
        key_t[5]=$(this).find(".key_F").length;
        key_t[6]=$(this).find(".key_G").length;
        key_t[7]=$(this).find(".key_H").length;
        key_t[8]=$(this).find(".key_I").length;
        key_t[9]=$(this).find(".key_J").length;
        key_t[10]=$(this).find(".key_K").length;
        key_t[11]=$(this).find(".key_L").length;
        key_t[12]=$(this).find(".key_M").length;
        key_t[13]=$(this).find(".key_N").length;
        key_t[14]=$(this).find(".key_O").length;
        key_t[15]=$(this).find(".key_P").length;
        key_t[16]=$(this).find(".key_Q").length;
        key_t[17]=$(this).find(".key_R").length;
        key_t[18]=$(this).find(".key_S").length;
        key_t[19]=$(this).find(".key_T").length;

        // 按照选项重复个数从大到小排序
        key_t.sort(function(a,b) {
            return b-a;
        });
        if(key_t[0]>1){
            $(this).addClass("check_error");
        }
        // 对按照答案对选型进行检索，若答案不在选项中，则将答案标记为错误
        if(qt_type=="1"||qt_type=="2"){
            var ans=$(this).find(".qt_answer").text().replace(/^答案[:：]/,"").replace(/\s/g,"").toUpperCase();
            if(ans.replace(/[A-Z]/g,"")!=""){
                $(this).addClass("check_error");
            }else {
                var ans_l=$.trim(ans).split("");
                for (var i = 0; i < ans_l.length; i++) {
                    var key_f=$(this).find(".key_"+ans_l[i]).length;
                    if(key_f==0){
                        $(this).addClass("check_error");
                        break;
                    }
                }
            }
        }
        if(qt_type=="3") {
            ans=$(this).find(".qt_answer").text().replace(/^答案[:：]/,"").replace(/\s/g,"");
            if(ans != '正确' && ans != '错误' && ans != '对' && ans != '错'){
                $(this).find(".qt_answer").addClass("error");
            }
        }
        if(qt_type=='4'||qt_type=='5'){
            ans=$(this).find(".qt_answer").text().replace(/^答案[:：]/,"").replace(/\s/g,"");
            if(ans==''){
                $(this).addClass("check_error");
            }
        }
        //错误标记check_error
        if($(this).find('.error,.qt_error').size() > 0){
            $(this).addClass("check_error")
        }
    });
    var error=$("#preview").find(".check_error");

    if (error.length!=0){
        $("#errorCount").text(error.length);
        $("#errorText").show();
        $("#nextError").show();
        return 0;//仍有错误
    }else {
        // 若无错误则初始化状态
        $("#errorText").hide();
        $("#nextError").hide();
        // $("#preview").parent(".box").scrollTop(0);
        // $("text-input").scrollTop(0);
        return 1;//没有错误
    }
}

// 批量插入小题
function addBatchInsert(data){
	var has_insert_num = $(".questionPanel .questionList .input-group").length;
	var type = $(".combBatchBlock input[name=insert_type]:checked").val();
	var type_label = "";
	switch (type) {
		case "1": type_label = "单选题";break;
		case "2": type_label = "多选题";break;
		case "3": type_label = "判断题";break;
		case "4": type_label = "填空题";break;
		case "5": type_label = "问答题";break;
	}
	var insert_html = "";
	if(has_insert_num == 0){
		$(".questionPanel").show();
	}
	for (var i = 0; i < data.length; i++) {
		has_insert_num += 1;
		data[i].sTitle = data[i].sTitle.replace("&lt;br&gt;"," ");
		insert_html += '<div class="single">'+
					   '<div class="input-group input-group'+has_insert_num+'" sort="' + has_insert_num + '" insert_id="'+ data[i].sId +'">'+
					   '  <span class="input-group-addon">' + has_insert_num + '</span>'+
					   '  <div  class="input-div"><span class="type">' + type_label + '</span>'+ data[i].sTitle +'</div>' +
					   '</div>'+
					   '<div class="operation-icon">'+
					   '  <em class="icons8-delete"></em>'+
					   '  <em class="icon icon-a_arrow_up"></em>'+
					   '  <em class="icon icon-a_arrow_down"></em>'+
					   '</div>'+
					   '</div>';
	}
	$(".questionPanel .questionList").append(insert_html);
}

// 组织导入试题的信息
function serializeFn() {
    var classification = $("input[name=classification]").val();
    var type=qt_type;
    var difficult=$("select[name=difficult]").val();
    // var disorder=$("input[name=disorder]").val();
    var data=[];
    $("#preview").find(".question").each(function (index,element) {
		var question=escapeHTML($(this).find(".qt_title").html());
        var answer1=$(this).find(".key_A").length==0 ? "" : (escapeHTML($(this).find(".key_A").html())==""?" ":escapeHTML($(this).find(".key_A").html()));
        var answer2=$(this).find(".key_B").length==0 ? "" : (escapeHTML($(this).find(".key_B").html())==""?" ":escapeHTML($(this).find(".key_B").html()))
        var answer3=$(this).find(".key_C").length==0 ? "" : (escapeHTML($(this).find(".key_C").html())==""?" ":escapeHTML($(this).find(".key_C").html()))
        var answer4=$(this).find(".key_D").length==0 ? "" : (escapeHTML($(this).find(".key_D").html())==""?" ":escapeHTML($(this).find(".key_D").html()))
        var answer5=$(this).find(".key_E").length==0 ? "" : (escapeHTML($(this).find(".key_E").html())==""?" ":escapeHTML($(this).find(".key_E").html()))
        var answer6=$(this).find(".key_F").length==0 ? "" : (escapeHTML($(this).find(".key_F").html())==""?" ":escapeHTML($(this).find(".key_F").html()))
        var answer7=$(this).find(".key_G").length==0 ? "" : (escapeHTML($(this).find(".key_G").html())==""?" ":escapeHTML($(this).find(".key_G").html()))
        var answer8=$(this).find(".key_H").length==0 ? "" : (escapeHTML($(this).find(".key_H").html())==""?" ":escapeHTML($(this).find(".key_H").html()))
        var answer9=$(this).find(".key_I").length==0 ? "" : (escapeHTML($(this).find(".key_I").html())==""?" ":escapeHTML($(this).find(".key_I").html()))
        var answer10=$(this).find(".key_J").length==0 ? "" : (escapeHTML($(this).find(".key_J").html())==""?" ":escapeHTML($(this).find(".key_J").html()))
        var answer11=$(this).find(".key_K").length==0 ? "" : (escapeHTML($(this).find(".key_K").html())==""?" ":escapeHTML($(this).find(".key_K").html()))
        var answer12=$(this).find(".key_L").length==0 ? "" : (escapeHTML($(this).find(".key_L").html())==""?" ":escapeHTML($(this).find(".key_L").html()))
        var answer13=$(this).find(".key_M").length==0 ? "" : (escapeHTML($(this).find(".key_M").html())==""?" ":escapeHTML($(this).find(".key_M").html()))
        var answer14=$(this).find(".key_N").length==0 ? "" : (escapeHTML($(this).find(".key_N").html())==""?" ":escapeHTML($(this).find(".key_N").html()))
        var answer15=$(this).find(".key_O").length==0 ? "" : (escapeHTML($(this).find(".key_O").html())==""?" ":escapeHTML($(this).find(".key_O").html()))
        var answer16=$(this).find(".key_P").length==0 ? "" : (escapeHTML($(this).find(".key_P").html())==""?" ":escapeHTML($(this).find(".key_P").html()))
        var answer17=$(this).find(".key_Q").length==0 ? "" : (escapeHTML($(this).find(".key_Q").html())==""?" ":escapeHTML($(this).find(".key_Q").html()))
        var answer18=$(this).find(".key_R").length==0 ? "" : (escapeHTML($(this).find(".key_R").html())==""?" ":escapeHTML($(this).find(".key_R").html()))
        var answer19=$(this).find(".key_S").length==0 ? "" : (escapeHTML($(this).find(".key_S").html())==""?" ":escapeHTML($(this).find(".key_S").html()))
        var answer20=$(this).find(".key_T").length==0 ? "" : (escapeHTML($(this).find(".key_T").html())==""?" ":escapeHTML($(this).find(".key_T").html()))

        if(type=="1"||type=="2"){
            var key=escapeHTML($(this).find(".qt_answer").html()).replace(/&nbsp;/g,"").toUpperCase();
        }else if (type=="3") {
            var key=escapeHTML($(this).find(".qt_answer").html()).replace(/(^\s+)|(\s+$)/g,"").replace(/(正确|对)/,1).replace(/(错误|错)/,0);
		}else{
            var key=escapeHTML($(this).find(".qt_answer").html());
        }
        var analysis=$(this).find(".qt_analysis").length==0 ? "" : escapeHTML($(this).find(".qt_analysis").html());
        data[index]={
            "classification":classification,
            "type":type,
            "difficult":difficult,

			// "disorder":disorder,

            "question":question,
            "answer1":answer1,
            "answer2":answer2,
            "answer3":answer3,
            "answer4":answer4,
            "answer5":answer5,
            "answer6":answer6,
            "answer7":answer7,
            "answer8":answer8,
            "answer9":answer9,
            "answer10":answer10,
            "answer11":answer11,
            "answer12":answer12,
            "answer13":answer13,
            "answer14":answer14,
            "answer15":answer15,
            "answer16":answer16,
            "answer17":answer17,
            "answer18":answer18,
            "answer19":answer19,
            "answer20":answer20,

            "key":key,
            "analysis":analysis
        };
        // 若不存在该项则不存入
        for (i in data[index]) {
            if(data[index][i]==""||!data[index][i]){
                delete data[index][i];
            }
        }
    });
    return data;
}

//转义部分，换行　$markdown_return 进行两次替换
function escapeHTML( text ) {
    return text.replace(/^[\s\S]*<span class="title"[\s\S]*>[\s\S]+<\/span>([\s\S]*)$/,"$1")
        .replace(/<br class="markdown_return">/g, "$markdown_return")
        // .replace( /</g, "&lt;" )
        // .replace( />/g, "&gt;" )
        .replace(/\&nbsp;/g, " ")
        .replace(/\$markdown_return/g, '<br class="markdown_return">');
}


// 组合题信息拼合
function saveComb(){
	comb_data.question= $(".combPanel input[name=comb_question]").val();
	comb_data.question = comb_data.question.replace(/\&nbsp;/g, " ");
	if(filterContentIsEmpty(comb_data.question)){
		alert("请填写大题题干！");
		return false;
	}
	if($(".questionPanel .input-group").length==0){
		alert("请至少插入一道小题！");
		return false;
	}
	comb_data.status="enable";
	comb_data.difficult=$("#subForm select[name=difficult]").val();
	comb_data.classification=$("#subForm input[name=classification]").val();
    comb_data.label=$("#subForm input[name=label]").val();
    comb_data.type='6';
	comb_data.id='';
	comb_data.tab_num='1';
	$(".questionPanel").find(".input-group").each(function(index, element) {
		var insert_id=$(this).attr("insert_id");
		comb_data.insert_data[index]=insert_id;
	});
	var dataForm = JSON.stringify(comb_data);
	$.ajax({
		type: "POST",
		cache : false,
		headers: { "cache-control": "no-cache" },
		dataType: "json",
        contentType: "application/json",
		url: "/admin/edit_mix_question/?dataType=whole&addType=text",
		data: dataForm,
		success: function(msg){
			if(msg.success == true){
				resetPage();
                //gio
                ksxProbe.gioTrack('enterQuestionSuccess', 1, {
                    'questionEnterMethod_var': '手动录入',
                    'questionEnterCount_var': 1
                });

                comb_data={question:'',insert_data:[]};
				alert("保存成功！");
			}
		}
	});
}


// <------批量导入组合题小题 end ------>

//过滤编辑器内容，确保确实有内容，而非无效标签
function filterContentIsEmpty(str) {
	var regImg = /<img(.*?)>/gi;
	var regTable = /<table(.*?)table>/gi;
    var regFrame = /<iframe(.*?)iframe>/gi;
    var filterStr;

    if(str === ' '){
		return true;
	}
	if(regImg.test(str)||regTable.test(str)||regFrame.test(str)){
    	return false;
	}
	// filterStr = str.replace(/&+[?=n]+[?=b]+[?=s]+[(?=p)]+\;/, 0); 匹配&nbsp;
	filterStr = str.replace(/<\/?[^>]*>/g, '').replace(/[ |\n]/g, '');

	return filterStr=='';
}
