$(function () {
    var getExamEndTimeInterval; //获取考试时间的定时器，在交卷后需要清除该定时器
    var result = new Array();

    $.ajaxSettings.async = false;
    $.getJSON("/exam/get_parsed_paper_exam", "examId=" + getParam("exam_id"), function (e) {
        answer_time_left = parseInt(e.examTime)*60;
        var len = e.items.length - 1;
        for(var i = 1; i <= len; i++){
            var bigItem = '';
            var card_content = '';
            var flag = '';
            if(e.itemsType[i]=='单选题'){
                bigItem+='<div class="questions">'
                    +           '<div class="questions-title" id="">'+e.itemsTitle[i]+'(共' +  e.items[i].length + '题，合计' + e.itemsScore[i] + '分)</div>'
                    +           '<div class="questions-content"></div>'
                    +     '</div>';

                card_content = '<div class="card-content">'
                    + '<div class="card-content-title">'+e.itemsTitle[i]+'(共' + e.items[i].length + '题，合计' +e.itemsScore[i] + '分)</div>'
                    + '<div class="box-list">'
                    + '</div><div class="split"></div></div>';
                $card_content = $(card_content);
                $bigItem = $(bigItem);
                $.each(e.items[i], function (ind, ele) {
                    var smallItem = '<div class="question-content" id="'+ele.itemId+'" data-id="'+ele.itemId+'" data-commit="false">'
                        +            '<div class="question-operation operation-icon icon-mark" data-type="1" data-toggle="tooltip"'
                        +                   ' data-placement="top" data-container="body" title="" data-original-title="标记本题"><i '
                        +                      ' class="icon icon-p_exam_tag_de"></i>'
                        +              '</div>'
                        +              '<div class="exam-question"><span class="question-index ellipsis">'+(ind + 1)+'.</span>'
                        +               ele.itemQuestion + ' (' + ele.itemScore + '分)'
                        +              '</div>'
                        +              '<div class="answers">'
                        +              '</div>'
                        +  '</div>';
                    $smallItem = $(smallItem);
                    flag = '<div class="box normal-box question_cbox s1">'
                        +       '<a class="iconBox questions_'+ele.itemId+'" href="'+String(window.location.href).split("#")[0]+'#'+ele.itemId+'" questionsid="'+ele.itemId+'" num="questions_'+ele.itemId+'" perscore="3.0">'+(ind +1) +'</a>'
                        +       '<span class="box icon-box question_marked"></span>'
                        + '</div>';
                    $card_content.find('.box-list').append($(flag));
                    $.each(ele.itemOption, function (index, element) {
                        var answer =                '<div class="select single-select '+String.fromCharCode(97 + index)+'. ">'
                            +                      '<input type="radio" class="radioOrCheck hidden" data-type="1"'
                            +                             ' id="'+ele.itemId+(index + 1)+'" name="keyChk_questions_'+ele.itemId+'"'
                            +                             ' data-name="key'+(index + 1)+'">'
                            +                      '<label for="'+ele.itemId+(index + 1)+'"> <span class="select-icon"><i'
                            +                              ' class="icon icon-m_exam_correct"></i></span>'
                            +                        '<span class="words">'+String.fromCharCode(65 + index) +'. '+element  +' </span>'
                            +                      '</label>'
                            +                  '</div>';
                        $smallItem.find('.answers').append($(answer));
                    });
                    $bigItem.find('.questions-content').append($smallItem);
                });
                //console.log($bigItem.html());
                $('.paper').append($bigItem);
                $('.card-content-list').append($card_content);

            }
            else if(e.itemsType[i]=='多选题'){
                bigItem+='<div class="questions">'
                    +           '<div class="questions-title" id="">'+e.itemsTitle[i]+'(共' +  e.items[i].length + '题，合计' + e.itemsScore[i] + '分，漏选错选不得分)</div>'
                    +           '<div class="questions-content"></div>'
                    +     '</div>';

                card_content = '<div class="card-content">'
                    + '<div class="card-content-title">'+e.itemsTitle[i]+'(共' + e.items[i].length + '题，合计' +e.itemsScore[i] + '分，漏选错选不得分)</div>'
                    + '<div class="box-list">'
                    + '</div><div class="split"></div></div>';
                $card_content = $(card_content);
                $bigItem = $(bigItem);
                $.each(e.items[i], function (ind, ele) {
                    var smallItem = '<div class="question-content" id="'+ele.itemId+'" data-id="'+ele.itemId+'" data-commit="false">'
                        +            '<div class="question-operation operation-icon icon-mark" data-type="2" data-toggle="tooltip"'
                        +                   ' data-placement="top" data-container="body" title="" data-original-title="标记本题"><i '
                        +                      ' class="icon icon-p_exam_tag_de"></i>'
                        +              '</div>'
                        +              '<div class="exam-question"><span class="question-index ellipsis">'+(ind + 1)+'.</span>'
                        +               ele.itemQuestion + ' (' + ele.itemScore + '分)'
                        +              '</div>'
                        +              '<div class="answers">'
                        +              '</div>'
                        +  '</div>';
                    $smallItem = $(smallItem);
                    flag = '<div class="box normal-box question_cbox s1">'
                        +       '<a class="iconBox questions_'+ele.itemId+'" href="'+String(window.location.href).split("#")[0]+'#'+ele.itemId+'" questionsid="'+ele.itemId+'" num="questions_'+ele.itemId+'" perscore="'+ele.itemScore+'">'+(ind +1) +'</a>'
                        +       '<span class="box icon-box question_marked"></span>'
                        + '</div>';
                    $card_content.find('.box-list').append($(flag));
                    $.each(ele.itemOption, function (index, element) {
                        var answer =                '<div class="select multi-select '+String.fromCharCode(97 + index)+'. ">'
                            +                      '<input type="checkbox" class="radioOrCheck hidden" data-type="2"'
                            +                             ' id="'+ele.itemId+(index + 1)+'" name="keyChk_questions_'+ele.itemId+'"'
                            +                             ' data-name="key'+(index + 1)+'">'
                            +                      '<label for="'+ele.itemId+(index + 1)+'"> <span class="select-icon"><i'
                            +                              ' class="icon icon-m_exam_correct2"></i></span>'
                            +                        '<span class="words">'+String.fromCharCode(65 + index) +'. '+element  +' </span>'
                            +                      '</label>'
                            +                  '</div>';
                        $smallItem.find('.answers').append($(answer));
                    });
                    $bigItem.find('.questions-content').append($smallItem);
                });
                //console.log($bigItem.html());
                $('.paper').append($bigItem);
                $('.card-content-list').append($card_content);
            }
            else if(e.itemsType[i]=='填空题'){
                bigItem+='<div class="questions">'
                    +           '<div class="questions-title" id="">'+e.itemsTitle[i]+'(共' +  e.items[i].length + '题，合计' + e.itemsScore[i] + '分，漏选错选不得分)</div>'
                    +           '<div class="questions-content"></div>'
                    +     '</div>';

                card_content = '<div class="card-content">'
                    + '<div class="card-content-title">'+e.itemsTitle[i]+'(共' + e.items[i].length + '题，合计' +e.itemsScore[i] + '分)</div>'
                    + '<div class="box-list">'
                    + '</div><div class="split"></div></div>';
                $card_content = $(card_content);
                $bigItem = $(bigItem);
                $.each(e.items[i], function (ind, ele) {
                    var smallItem = '<div class="question-content" id="'+ele.itemId+'" data-id="'+ele.itemId+'" data-commit="false">'
                        +            '<div class="question-operation operation-icon icon-mark" data-type="2" data-toggle="tooltip"'
                        +                   ' data-placement="top" data-container="body" title="" data-original-title="标记本题"><i '
                        +                      ' class="icon icon-p_exam_tag_de"></i>'
                        +              '</div>'
                        +              '<div class="exam-question"><span class="question-index ellipsis">'+(ind + 1)+'.</span>'
                        +               ele.itemQuestion + ' (' + ele.itemScore + '分)'
                        +              '</div>'
                        +              '<div class="answers">'
                        +              '</div>'
                        +  '</div>';
                    $smallItem = $(smallItem);
                    flag = '<div class="box normal-box question_cbox s1">'
                        +       '<a class="iconBox questions_'+ele.itemId+'" href="'+String(window.location.href).split("#")[0]+'#'+ele.itemId+'" questionsid="'+ele.itemId+'" num="questions_'+ele.itemId+'" perscore="'+ele.itemScore+'">'+(ind +1) +'</a>'
                        +       '<span class="box icon-box question_marked"></span>'
                        + '</div>';
                    $card_content.find('.box-list').append($(flag));
                    $.each(ele.itemAnswer, function (index, element) {
                        var answer =                '<dd class="filled">'
                            +    '<div class="input-group"><span class="input-group-addon">'+(index+1)+'</span>'
                            +       '<div class="expanding-wrapper" style="position:relative">'
                            +            '<div class="expanding-wrapper" style="position:relative">'
                            +                '<textarea name="key'+(index + 1)+'" data-type="4" class="keyFill form-control expanding" onpaste="return false" oncopy="return false" style="margin: 0px; box-sizing: border-box; width: 100%; position: absolute; top: 0px; left: 0px; height: 100%; resize: none; overflow: auto;"></textarea>'
                            +                '<pre class="expanding-clone" style="margin: 0px; box-sizing: border-box; width: 100%; display: block; border: 1px solid; visibility: hidden; min-height: 39px; white-space: pre-wrap; line-height: 20px; text-decoration: none solid rgb(155, 155, 155); font-size: 14px; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; word-break: normal; padding: 4px 10px;"><span></span><br></pre>'
                            +            '</div>'
                            +        '</div>'
                            +    '</div>'
                            +'</dd>';
                        $smallItem.find('.answers').append($(answer));
                    });
                    $bigItem.find('.questions-content').append($smallItem);
                });
                //console.log($bigItem.html());
                $('.paper').append($bigItem);
                $('.card-content-list').append($card_content);
            }
            else if(e.itemsType[i]=='问答题'){
                bigItem+='<div class="questions">'
                    +           '<div class="questions-title" id="">'+e.itemsTitle[i]+'(共' +  e.items[i].length + '题，合计' + e.itemsScore[i] + '分，漏选错选不得分)</div>'
                    +           '<div class="questions-content"></div>'
                    +     '</div>';

                card_content = '<div class="card-content">'
                    + '<div class="card-content-title">'+e.itemsTitle[i]+'(共' + e.items[i].length + '题，合计' +e.itemsScore[i] + '分)</div>'
                    + '<div class="box-list">'
                    + '</div><div class="split"></div></div>';
                $card_content = $(card_content);
                $bigItem = $(bigItem);
                $.each(e.items[i], function (ind, ele) {
                    var smallItem = '<div class="question-content" id="'+ele.itemId+'" data-id="'+ele.itemId+'" data-commit="false">'
                        +            '<div class="question-operation operation-icon icon-mark" data-type="2" data-toggle="tooltip"'
                        +                   ' data-placement="top" data-container="body" title="" data-original-title="标记本题"><i '
                        +                      ' class="icon icon-p_exam_tag_de"></i>'
                        +              '</div>'
                        +              '<div class="exam-question"><span class="question-index ellipsis">'+(ind + 1)+'.</span>'
                        +               ele.itemQuestion + ' (' + ele.itemScore + '分)'
                        +              '</div>'
                        +              '<div class="answers">'
                        +              '</div>'
                        +  '</div>';
                    $smallItem = $(smallItem);
                    flag = '<div class="box normal-box question_cbox s1">'
                        +       '<a class="iconBox questions_'+ele.itemId+'" href="'+String(window.location.href).split("#")[0]+'#'+ele.itemId+'" questionsid="'+ele.itemId+'" num="questions_'+ele.itemId+'" perscore="'+ele.itemScore+'">'+(ind +1) +'</a>'
                        +       '<span class="box icon-box question_marked"></span>'
                        + '</div>';
                    $card_content.find('.box-list').append($(flag));
                        var answer = '<div class="filled">'
                            +   '<div class="wangEditor-container">'
                            +        '<div class="wangEditor-container">'
                            +            '<div class="keyCloze wangEditor-txt" data-type="5" id="keyCloze_'+ele.itemId+'" style="min-height: 250px; height: 250px;" contenteditable="true">'
                            +                '<p><br></p>'
                            +            '</div>'
                            +        '</div>'
                            +    '</div>'
                            +    '<input type="hidden" name="key1" value="<p><br></p>">'
                            +    '<input type="file" name="uploadFile" class="wang-upload-file hidden">'
                            +    '<div class="file-list"></div>'
                            +'</div>';
                        $smallItem.find('.answers').append($(answer));
                    $bigItem.find('.questions-content').append($smallItem);
                });
                //console.log($bigItem.html());
                $('.paper').append($bigItem);
                $('.card-content-list').append($card_content);
            }
        }

        console.log(e);
    });

    // 是否强制交卷
    var isForce;

    //答题进度
    function commitProcess(id, status) {
        //id: 试题id，status：true答题，false取消
        var commitLength, totalLength;
        if (status) {
            $("#numberCardModal a.questions_" + id).parent(".box").removeClass("s1").addClass("s2");
            $(".question-content[data-id=" + id + "]").attr("data-commit", "true");
        } else {
            $("#numberCardModal a.questions_" + id).parent(".box").removeClass("s2").addClass("s1");
            $(".question-content[data-id=" + id + "]").attr("data-commit", "false");
        }
        commitLength = $("#numberCardModal .modal-body .box.s2").length;
        totalLength = $("#numberCardModal .modal-body .box.question_cbox").length;

        $("#commitCount").text(commitLength);
        $("#totalCount").text(totalLength);
        $("#commitProcess").css({
            width: commitLength * 100 / totalLength + 'px'
        });
    }

    //计时

    // 交卷时间
    var d = new Date();
    var initTime = parseInt(d.getTime() / 1000);
    //考试结束时间点
    var endTime = initTime + answer_time_left;

    //  考试时间倒计时
    // 非"不限时长"类的考试，获取倒计时
    if (examTimeRestrict != 0) {

        timeDownInterval = setInterval(timeDown, 1000);
    }

    //倒计时
    function timeDown() {

        var t = new Date();
        var nowTime = parseInt(t.getTime() / 1000);
        var leftTime = endTime - nowTime;

        if (leftTime <= 0) {
            $("#timeDown").removeClass("warning");
            $("#timeDown").text("即将交卷");
            //填空问答强制失焦保存
            $(".keyCloze").blur();
            $(".keyFill").blur();
            alert("考试时间到！");
            saveExamFn(0);//考试时间到
        }

        answer_time_left = answer_time_left - 1;

        // if(answer_time_left==10){
        //     $("#timeDown").addClass("warning");
        // }

        $("#timeDown").text(formatTime(leftTime));
    }


    //心跳链接
    // 每30秒请求一次考试时间
    // 非"不限时长"类的考试，获取倒计时
    if (examTimeRestrict != 0) {
        getExamEndTimeInterval = setInterval(heartAjax, 30000);
    }

    // 心跳链接，请求考试时间
    function heartAjax() {
        //不显示loading
        $("#spinnerLoading").addClass("hide");

        $.ajax({
            type: "post",
            url: "/exam/getExamEndTime",
            dataType: "json",
            data: "examId=" + exam_info_id,
            success: function (msg) {
                //不显示loading
                // $("#spinnerLoading").removeClass("hide");

                if (msg.success) {
                    //code:0 未设置，不操作
                    //code:1 重新设置时间
                    //code:2 立即交卷
                    //code:3 批量交卷
                    if (msg.bizContent.code == '3') {
                        $('.submit-notice').show();
                        var endNum = 3;
                        var submitExam = setInterval(function () {
                            endNum--;
                            if (endNum < 0) {
                                clearInterval(submitExam);
                                $('.submit-notice').hide();
                                saveExamFn(6);//立即交卷->批量交卷3秒延迟

                            }
                            $('.notice-time').text(endNum)

                        }, 1000);
                    }

                    if (msg.bizContent.code == '1') {

                        if (answer_time_left != msg.bizContent.totalTime) {
                            d = new Date();
                            initTime = parseInt(d.getTime() / 1000);
                            answer_time_left = msg.bizContent.totalTime;
                            endTime = initTime + answer_time_left;

                            $("#timeResetModal .delay-time").text(msg.bizContent.delayTimeStamp);
                            $('#timeResetModal').modal();
                        }


                    } else if (msg.bizContent.code == '2') {
                        saveExamFn(0);//立即交卷
                    }

                } else {
                    console.log(msg.desc);
                }
            },
            error: function (msg) {
                //不显示loading
                $("#spinnerLoading").removeClass("hide");
            }

        });
    }

    // 格式化时间
    function formatTime(time) {
        var day = Math.floor(time / 86400);
        var day_left = time - 86400 * day;
        var hour = Math.floor(day_left / 3600);
        var hour_left = day_left - 3600 * hour;
        var minutes = Math.floor(hour_left / 60);
        var seconds = hour_left - 60 * minutes;
        var time_show = (day == 0 ? '' : (day + '天:')) + (hour < 10 ? '0' + hour : hour) + ':' + (minutes < 10 ? '0' + minutes : minutes) +
            ':' + (seconds < 10 ? '0' + seconds : seconds);

        return time_show;
    }

    //**************************************答案存储**************************************
    var answered_num = 1; //已答未保存考题数量
    var answered_multi_all = []; //所以试题延时提交数据
    var answered_all = [];

    //初始化答题进度
    commitProcess();

    //处理aliyun附件url问题，进行uri编码
    $(".question-content .answers .filled .file-row a").each(function (index, element) {
        var url = aliyunEncodeURI($(this).attr("href"));
        $(this).attr("href", url).attr("download", url).attr("target", "_blank");
    });


    //生成每个编辑器,blur存储
    $('.keyCloze').each(function () {
        var keyCloze = this;
        var editor = new wangEditor(keyCloze);
        var _parent = $(keyCloze).parents('.question-content');
        var questionsId = _parent.attr('data-id');
        editor.config.uploadImgUrl = '/admin/upload/?userRole=staff&action=uploadimage';
        editor.config.uploadImgFileName = 'upfile';
        editor.config.noPaste = true;
        editor.config.menus = [
            'table',
            '|',
            'img',
            'upload',
            '|',
            'fullscreen'
        ];
        editor.create();
        editor.$txt.blur(function () {
            var txt = $.trim(editor.$txt.html());
            if (txt != '<p><br></p>') {
                var keyList = editor.$txt.html();
                $(keyCloze).parents('.wangEditor-container').next().val(keyList);
                saveQuestionsCatch(questionsId, keyList, false, true);
            }
        })
    });


    //单选，多选，判断
    //之所以将事件绑定至label而不是.select，是因为select内同时包含input和label，
    //而label又指向input，这会导致点击select，click被触发两次
    $(".question-content .select label").click(function (e) {
        var _this = $(this);
        var _parent = $(_this).parents(".question-content");
        var _select = $(_this).parents(".select");
        var questionsId = _parent.attr("data-id");
        var keyList = "";

        setTimeout(function () {
            if ($(_select).hasClass("single-select") || $(_select).hasClass("judge")) {
                $(_parent).find(".radioOrCheck").each(function (index, element) {
                    if ($(this).is(":checked")) {
                        keyList = $(this).attr("data-name") + ",";
                    }
                });
            } else if ($(_select).hasClass("multi-select")) {
                $(_parent).find(".radioOrCheck").each(function (index, element) {
                    if ($(this).is(":checked")) {
                        keyList += $(this).attr("data-name") + ",";
                    }
                });
            }

            saveQuestionsCatch(questionsId, keyList);
        }, 100);

    });

    //填空
    $(".keyFill").blur(function (e) {
        var _parent = $(this).parents(".question-content");
        var questionsId = _parent.attr("data-id");
        var keyFillDom = _parent.find(".keyFill");
        var keyList = [];

        $(_parent).find(".keyFill").each(function (index, element) {
            keyList[index] = $(this).val();
        });

        saveQuestionsCatch(questionsId, keyList.join("||"));

    });

    //交卷
    $("#endExamBtn").click(function (e) {
        e.preventDefault();

        //交卷提示
        var length = $("#numberCardModal .modal-body .box.s1").length;
        var html = "";

        if (length == 0) {
            html = "是否现在交卷？";
        } else {
            html = "有试题未完成，是否现在交卷？";
        }

        $("#endExamModal .modal-title").html(html);
        $("#endExamModal").modal("show");
    });

    var loadingProgress = 0; //进度条数值
    var loadingText = ''; //不同百分比显示内容
    var progress; //进度条定时器

    //确认交卷
    $("#confirmEndExamBtn").click(function (e) {
        e.preventDefault();

        //最短答卷时长判断
        if (!isMinTimeLimit(setMinExamTime, minExamTime, true)) {
            $('#endExamModal').modal("hide");
            $("#spinnerLoading").addClass('hide');
            return false;
        }
        saveExamFn(0);//用户主动点击触发交卷


        //监听页面切换
        var hiddenTime;
        var statTime = 0;
        var hiddenNum = 0;
        var makeSureTime = setInterval(function () {
            statTime++
        }, 1000);

        $('#endExamModal').modal("hide");
        $("#spinnerLoading").addClass('hide');


        //页面切换不可见的情况下
        document.addEventListener("visibilitychange", function () {

            if (document.visibilityState === 'hidden') {
                clearInterval(makeSureTime);
                hiddenTime = setInterval(function () {

                    hiddenNum++;

                    if ((hiddenNum + statTime) >= 10) {
                        clearInterval(hiddenTime);
                        window.location.href = "/exam/result/inquire?examResultsId=" + exam_results_id;
                    }
                }, 1000)

            } else if (document.visibilityState === 'visible') {

                clearInterval(hiddenTime);

                var totalTime = hiddenNum + statTime;

                if (loadingProgress < totalTime * 10) {

                    loadingProgress = totalTime * 10

                }
            }

        });

    });

    window.saveExamFn = saveExamFn;
    //交卷提交后台异步保存fn
    // isForce--是否强制交卷，强制交卷方式 //0--否 1--是 2--切屏防作弊 3--x秒不动自动交卷 4--闯关失败 5--答题时间或者考试时间已到 6-批量交卷3秒后交卷
    function saveExamFn(isForce) {
        //如果附件正在上传中 //非强制交卷


        $(".had-save-mark").addClass("had-confirm-save");//作为是否已经触发交卷操作的标记
        $("#spinnerLoading").addClass("hidden");
        $('.loading-box').removeClass('hidden');

        //清除考试时间
        // 非"不限时长"类的考试，获取倒计时
        if (examTimeRestrict != 0) {
            clearInterval(timeDownInterval);
        }

        //判断是否有未保存的考题
        $.each(answered_multi_all, function (index, value) {
            var unsaved_answer = value;
            var has_save = false;
            $.each(answered_all, function (index, value) {
                if (value.test_id == unsaved_answer.test_id) {
                    value.test_ans = unsaved_answer.test_ans;
                    has_save = true;
                    $("#spinnerLoading").addClass("hidden");
                    return false;
                }
            });
            if (!has_save) {
                answered_all.push(unsaved_answer);
            }
        });

        if (answered_all.length > 0) {
            saveQuestionsCatch("", "", true, false, isForce);
            $("#spinnerLoading").addClass("hidden");

            return false;
        } else {
            commit_exam(isForce);
        }
    }

    //缓存已答未提交考题数据
    function saveQuestionsCatch(questionsId, keyList, overExam, editor_blur, isForce) {
        keyList = keyList.replace(/"/g, "&quot;").replace(/'/g, "&apos;");
        //问答题blur保存答案
        if (editor_blur == true) {
            var questionsData = {
                "exam_id": getParam('exam_id'),
                "test_id": questionsId,
                "test_ans": keyList,
                "exam_results_id": exam_results_id,
                "exam_info_id": exam_info_id
            };
            console.log(questionsData);
            result.push(questionsData);
            //ajax_post("/exam/post_result",questionsData );
            answered_multi_all.push(questionsData);
            commitProcess(questionsId, true);
            saveAnswerFn_timeout(isForce);
            return;
        }
        //交卷操作时还有未保存的考题
        if (overExam == true) {
            saveAnswerFn_timeout(isForce, overExam);
            return;
        }
        var hasSave = false; //是否保存过
        $.each(answered_multi_all, function (index, value) {
            if (value.test_id == questionsId) {
                value.test_ans = keyList;
                hasSave = true;
                return;
            }
        });
        var questionsData = {
            "exam_id": getParam('exam_id'),
            "test_id": questionsId,
            "test_ans": keyList,
            "exam_results_id": exam_results_id,
            "exam_info_id": exam_info_id
        };
        console.log(questionsData);
        result.push(questionsData);
        //ajax_post("/exam/post_result",questionsData );
        if (!hasSave) {
            answered_multi_all.push(questionsData);
            if (questionsData.test_ans == '') {
                commitProcess(questionsId, false);
            } else {
                commitProcess(questionsId, true);
            }
        }
        if (answered_multi_all.length == answered_num) {
            saveAnswerFn_timeout(isForce);
        }
    }

    //延时答题后提交后台异步保存fn
    function saveAnswerFn_timeout(isForce, overExam) {
        var exam_test_list_json, exam_test_list;
        //答案数组
        if (overExam) {
            exam_test_list_json = answered_all;
        } else {
            exam_test_list_json = answered_multi_all;
            answered_multi_all = [];
        }
        exam_test_list = JSON.stringify(exam_test_list_json);
        //将分割URI的&符号转义为十六进制序列
        exam_test_list = encodeURIComponent(exam_test_list);

        //时间戳
        var timeStamp = new Date();
        var dataForm = "examTestList=" + exam_test_list + "&timeStamp=" + timeStamp.getTime();

        $("#spinnerLoading").addClass("hide");
        /*$.ajax({
            type: "POST",
            dataType: "json",
            url: "/exam/exam_start_ing_multi",
            data: dataForm,
            processData: false,
            success: function(msg){

                $("#spinnerLoading").removeClass("hide");

                if(msg.success=='true'){
                    if(overExam==true){
                        answered_all = [];
                        commit_exam(isForce);
                    }
                }else if(msg.success=="answered"){
                    $('.laoding-box').hide();
                    alert("您已交卷，请关闭页面");

                }else{
                    $('.laoding-box').hide();
                    alert("操作失败，请联系管理员！");
                }
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
                // $("#spinnerLoading").removeClass("hide");
                $.each(exam_test_list_json,function(index,value){
                    var fail_answer = value;
                    var has_save = false;

                    $.each(answered_all,function(index,value){
                        if(value.test_id==fail_answer.test_id){
                            value.test_ans = fail_answer.test_ans;
                            has_save = true;
                            return false;
                        }
                    });

                    if(!has_save){
                        answered_all.push(fail_answer);
                    }
                });
                asynSubTimeoutFn(exam_test_list_json);
            }
        });*/
    }

    //查询成绩时间间隔
    var queryInterval;
    var resultTime = 2; //请求考试结果的间隔时间

    //交卷
    function commit_exam(isForce) {
        var switchScreen = 0;//切屏次数
        var noOpsAutoCommit = 0;//无操作时间
        switch (isForce) {
            case 2:
                switchScreen = parseInt(blur_count) + 1;
                break;
            case 3:
                noOpsAutoCommit = quietSecond;
                break;
            default:
                break;
        }

        //进度条定时器
        progress = setInterval(function () {

            var random = Math.floor(Math.random() * 2.5 + 1);

            loadingProgress += random;

            if (loadingProgress >= 100) {

                loadingProgress = 100;

            }

            if (loadingProgress <= 30) {

                loadingText = '正在提交答案...';

            } else if (loadingProgress > 30 && loadingProgress <= 70) {

                loadingText = '正在判分中...'

            } else {
                loadingText = '正在出分中...';
            }

            $('.loading-label').text(loadingText);

            $('.loading-num span').text(loadingProgress + '%').css({
                marginLeft: loadingProgress + '%'
            });

            $('.loading-develop').width(loadingProgress + '%');

        }, 120);

        $.ajax({
            type: "GET",
            dataType: "json",
            url: "/exam/exam_ending",
            data: "examInfoId=" + exam_info_id + "&examResultsId=" + exam_results_id + "&isForce=" + isForce + "&switchScreen=" + switchScreen + "&noOpsAutoCommit=" + noOpsAutoCommit,
            success: function (msg) {
                if (true/*msg.success*/) {
                    //清除请求考试时间的定时器
                    clearInterval(getExamEndTimeInterval);
                    resultTimeout();
                } else {
                    //alert("操作失败，请重试！");
                    $("#resultInquireModal").modal('hide');
                }
            },
            error: function () {
                //alert("操作失败，请重试！");
                if (true/*msg.success*/) {
                    //清除请求考试时间的定时器
                    clearInterval(getExamEndTimeInterval);
                    resultTimeout();
                } else {
                    //alert("操作失败，请重试！");
                    $("#resultInquireModal").modal('hide');
                }
                //$("#resultInquireModal").modal('hide');
            }
        });
    }

    // 倒计时 // time 为请求的时长
    function resultTimeout() {
        clearTimeout(queryInterval);
        // 请求考试结果以2-3-4-5-6-7-8-9-10-10-10的时间间隔请求
        queryInterval = setTimeout(resultInquire, (resultTime > 9 ? 10 : resultTime++) * 1000);
    }

    //生成考试成绩
    function resultInquire() {

        var exam_id = 1;
        //不显示loading
        $("#spinnerLoading").addClass("hide");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "/exam/result_inquire",
            data: "examId=" + exam_id,
            ansyc: false,
            success: function (msg) {
                if (msg.success) {
                    clearTimeout(queryInterval);

                    // 每200毫秒检测loadingProgress的值，如果到达100，清除定时
                    var time = setInterval(function () {
                        if (loadingProgress >= 100) {
                            clearInterval(progress);
                            clearInterval(time);
                            var url = "/exam/post_result";
                            console.log(Array.from(result));
                            $.ajax({
                                url: url,
                                method: "POST",
                                data: JSON.stringify(Array.from(result)),
                                dataType: 'json',
                                contentType: "application/json;charset=UTF-8",
                                success: function (res) {
                                    console.log(res.studentScore);
                                    window.location.href = "/exam_result?score=" + String(res.studentScore) + "&sumScore="+ String(res.sumScore) + "&studentId=" + res.studentId;
                                },
                                error: function (res) {
                                    console.log(res);
                                }
                            });
                        }
                    }, 120);
                } else {
                    resultTimeout();
                }
            },
            error: function () {

                resultTimeout();

            }
        });
    }

    //异步提交答案超时FN
    function asynSubTimeoutFn(data) {

        $.each(data, function (index, value) {
            var questionsId = value.test_id;
            //commitProcess(questionsId, false);

        });
        console.log("网络连接不稳定，请您刷新页面重试。");
    }

    //**************************************答案存储**************************************


    //字号
    $(function () {
        //题干字号默认16
        //内容默认14（单选，多选，判断）
        var questionSize = 16;
        var answerSize = 14;

        //增加字号
        $(".fontsize-plus").click(function (e) {
            e.preventDefault();

            if (questionSize < 20) {
                questionSize = questionSize + 1;
                answerSize = answerSize + 1;
                $(".exam-question").css({
                    "font-size": questionSize + "px"
                });
                $(".answers .select").css({
                    "font-size": answerSize + "px"
                });
            }
        });

        //减小字号
        $(".fontsize-minus").click(function (e) {
            e.preventDefault();

            if (questionSize > 14) {
                questionSize = questionSize - 1;
                answerSize = answerSize - 1;
                $(".exam-question").css({
                    "font-size": questionSize + "px"
                });
                $(".answers .select").css({
                    "font-size": answerSize + "px"
                });
            }

        });

    });


    //切换中英文
    $("#switchLangBtn").click(function (e) {
        switchLang('en');
    });


    //显示答题卡
    $("#numberCardBtn").click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        $("#numberCardModal").modal();
    });

    //点击答题卡跳转至对应题,使用了锚点跳转
    //位置调整90（因为有顶栏），并关闭答题卡
    $("#numberCardModal .modal-body .box").click(function (e) {

        $("#numberCardModal").modal('hide');
        setTimeout(function () {
            var scrollTop = $("html").scrollTop();

            $("html").animate({scrollTop: scrollTop - 90}, 200);
        }, 100);

    });


    //固定组合题
    var $body = $("body");
    var $main = $('.main');
    var parentsHeight = 0,
        fixedHeight = 0,
        scrollHeight = 0,
        goBottomHeight = 0;
    var $questionList;
    $main.scroll(function () {

        //上滑时
        if ($main.scrollTop() < scrollHeight) {
            $questionList.css({
                'marginTop': 0
            });
            getEle();
            scrollHeight = 0;

        }
        //goBottomHeight不为0时在进行比较
        if (goBottomHeight) {

            if ($main.scrollTop() > goBottomHeight) {
                $questionList.css({
                    'marginTop': 0
                });
                getEle();
                goBottomHeight = 0

            }
        }
    });

    // 右侧图标样式设定
    function getEle() {
        var tagetEle = $('.operation-icon.icon-pushpined');
        tagetEle.parent().removeClass('isStuck').removeClass('stuckMenu ').attr('style', '');

        tagetEle.find(".icon").removeClass("icon-p_exam_fix_se").addClass("icon-p_exam_fix_de");

        tagetEle.removeClass("icon-pushpined").addClass("icon-pushpin")
            .attr("title", "固定题干").attr("data-original-title", "固定题干");
    }

    //固定题干
    $body.on("click", ".operation-icon.icon-pushpin", function () {


        var index = $(this).parents('.questions').index();

        // //获取question-insert-list
        $questionList = $(this).parents('.questions-detail').find('.question-insert-list');

        //获取每个组合题第一个小题的高度
        var labelHeight = $questionList.find('.question-insert').eq(0).find('.exam-question').height();

        //获取questions-detail的offsetTop值
        var questionTop = $(this).parents('.questions-detail').offset().top;

        //获取main的scrollTop值
        var mainScrollTop = $main.scrollTop();

        parentsHeight = $questionList.height();

        fixedHeight = $(this).parent().height();

        //获取临界值
        if (index === 0) {
            $questionList.css({
                'marginTop': fixedHeight - 40
            })
        }
        //向下取整
        scrollHeight = Math.floor(mainScrollTop + questionTop - fixedHeight - labelHeight - 90);

        //下滑超出高度
        goBottomHeight = Math.floor(scrollHeight + fixedHeight + parentsHeight + labelHeight - 90);

        $main.scrollTop(scrollHeight);

        $(this).parent().stickUp({});

        $(this).parent().addClass('isStuck').css({
            position: 'fixed',
            top: 0
        });

        // $(".stuckMenu.isStuck").removeClass("isStuck").removeClass("stuckMenu").attr("style","");

        $(this).removeClass("icon-pushpin").addClass("icon-pushpined")
            .attr("title", "解锁题干").attr("data-original-title", "解锁题干");

        $(this).find(".icon").removeClass("icon-p_exam_fix_de").addClass("icon-p_exam_fix_se");

        // $(this).parents(".question-comb").stickUp();

    });

    //取消固定
    $body.on("click", ".operation-icon.icon-pushpined", function () {

        $questionList.css({
            'marginTop': 0
        });

        $(this).parent().removeClass('isStuck').removeClass('stuckMenu ').attr('style', '');

        // $(".stuckMenu.isStuck").removeClass("isStuck").removeClass("stuckMenu").attr("style","");

        $(this).removeClass("icon-pushpined").addClass("icon-pushpin")
            .attr("title", "固定题干").attr("data-original-title", "固定题干");

        $(this).find(".icon").removeClass("icon-p_exam_fix_se").addClass("icon-p_exam_fix_de");

        $(".question-insert-list").css("margin-top", 0);
    });

    //标记试题
    $body.on("click", ".operation-icon.icon-mark", function () {
        var questionId = $(this).parents(".question-content").attr("data-id");

        $(this).removeClass("icon-mark").addClass("icon-marked")
            .attr("title", "取消标记").attr("data-original-title", "取消标记");
        $(this).find(".icon").removeClass("icon-p_exam_tag_de").addClass("icon-p_exam_tag_se");
        $("#numberCardModal a.questions_" + questionId).parent(".box").addClass("marked");
        $("#numberCardModal a.questions_" + questionId).parent(".box").find(".question_marked").show();
    });

    //取消标记
    $body.on("click", ".operation-icon.icon-marked", function () {
        var questionId = $(this).parents(".question-content").attr("data-id");

        $(this).removeClass("icon-marked").addClass("icon-mark")
            .attr("title", "标记本题").attr("data-original-title", "标记本题");
        $(this).find(".icon").removeClass("icon-p_exam_tag_se").addClass("icon-p_exam_tag_de");
        $("#numberCardModal a.questions_" + questionId).parent(".box").removeClass("marked");
        $("#numberCardModal a.questions_" + questionId).parent(".box").find(".question_marked").hide();
    });


    //删除录音
    $body.on('click', ".audio-list .icon-audio-delete", function (e) {
        e.preventDefault();

        var _this = $(this);
        var _question = $(_this).parents(".question-content");
        var question_id = $(_question).attr("data-id");
        var _audio = $(_this).parents(".audio-row");
        var audio_url = $(_audio).find("audio").attr("src");

        $.ajax({
            type: "POST",
            url: "/exam/attachment_operate/?method=remove",
            dataType: "json",
            data: "examResultsId=" + exam_results_id + "&questionId=" + question_id + "&audioUrl=" + audio_url,
            success: function (msg) {
                if (msg.success) {
                    $(_audio).remove();
                }
            }
        });
    });


    //**************************************防作弊**************************************
    //禁止复制粘贴
    document.oncontextmenu = new Function("event.returnValue=false");
    document.oncopy = new Function("event.returnValue=false");
    document.onpaste = new Function("event.returnValue=false");


    //拍照防作弊
    $(function () {
        var webcam_json = {};
        var capture_id;

        /* // 开启摄像头，拍照防作弊
         if(capture==1){
             $("#webcam").webcam({
                 width: 320,
                 height: 240,
                 mode: "callback",
                 swffile: "https://s6.kaoshixing.com/static/plugins/webcam/jscam_canvas_only.swf",
                 onLoad: function() {
                     //获取题目总数
                     var question_total=$("#numberCardModal .modal-body .box").length;
                     webcam_json = getRandom(1, question_total);//创建json存拍照题号和相应拍照状态
                     console.log(webcam_json);
                 },
                 onTick: function(remain) {},
                 onSave: saveImg(),
                 onCapture: function() {
                     webcam.save();
                 },
                 debug: function(type,string) {
                     // console.log(type + ": " + string);
                     if(type=='notify'&&string=='Camera started'){
                         $("#webcamAlert").addClass("hidden");
                         var questionId=$("#numberCardModal .modal-body .iconBox:first").attr("questionsId");
                         $("#captureForm input[name=questionId]").val(questionId);

                         setTimeout(function () {
                             webcam.capture(0);
                         }, 3000);


                         setTimeout(function () {
                             $("#webCamBar, #webcam").addClass("folded");
                         }, 10000)
                     }
                 }*/
    });


    //获取随机试题
    function getRandom(min, max) {
        //获取试题数目，按照1/10的比例，至少一题
        var random_num = Math.ceil((max - min + 1) / 10);
        var random_arr = [];
        var random_json = {};
        var question_id;

        while (random_arr.length < random_num) {
            var random_int = Math.floor(Math.random() * (max - min + 1)) + min - 1;

            if (random_arr.indexOf(random_int) == -1) {
                question_id = $("#numberCardModal .modal-body .iconBox").eq(random_int).attr("questionsId");
                random_json[question_id] = 0;
                random_arr.push(random_int);
            }
        }
        return random_json;
    }

    function saveImg(data) {
        var pos = 0, ctx = null, saveCB, image = [];
        var canvas = document.createElement("canvas");
        canvas.setAttribute('width', 320);
        canvas.setAttribute('height', 240);
        if (canvas.toDataURL) {
            ctx = canvas.getContext("2d");
            image = ctx.getImageData(0, 0, 320, 240);
            saveCB = function (data) {
                var col = data.split(";");
                var img = image;
                for (var i = 0; i < 320; i++) {
                    var tmp = parseInt(col[i]);
                    img.data[pos + 0] = (tmp >> 16) & 0xff;
                    img.data[pos + 1] = (tmp >> 8) & 0xff;
                    img.data[pos + 2] = tmp & 0xff;
                    img.data[pos + 3] = 0xff;
                    pos += 4;
                }
                if (pos >= 4 * 320 * 240) {
                    ctx.putImageData(img, 0, 0);
                    $("#captureForm").append("<textarea name='file'>" + canvas.toDataURL("image/png") + "</textarea>");
                    $("#captureForm").submit();
                    $("#captureForm textarea").remove();
                    pos = 0;
                }
            };
        }
        return saveCB;
    }

});


//切屏防作弊
//若干次切换后自动交卷
$(function () {
    if (set_full_screen == 0) {
        $('#alertModal').modal("show");
        //若开启全屏防作弊，则点击页面触发全屏
        //screenfull.js?v=201801101413:93
        // Failed to execute 'requestFullscreen' on 'Element':
        // API can only be initiated by a user gesture.
        //必须手动触发
        $("body").on("click", function (e) {
            $('#alertModal').modal("hide");
            //拍照防作弊的刷新按钮不绑定该事件
            if (!$(e.target).hasClass("webcam-refresh")) {
                //当且仅当页面处于非全屏状态时再次触发全屏请求，否则，每次点击页面都会回到页面顶部
                if (!screenfull.isFullscreen && screenfull.enabled) {
                    screenfull.request();
                    return false;
                }
            }
        });

        //窗口失去焦点
        $(window).blur(function () {
            if (screenfull.isFullscreen) {
                setTimeout(function () {
                    blurCount();
                }, 50);
            }
        });

        //退出全屏记一次切屏
        if (screenfull.enabled) {
            document.addEventListener(screenfull.raw.fullscreenchange, function () {
                if (!screenfull.isFullscreen) {
                    setTimeout(function () {
                        blurCount();
                    }, 50);
                }
            });
        }
    }


    //切换
    function blurCount() {
        //如果已经点击了交卷，不做切屏防作弊
        if ($(".had-save-mark").hasClass("had-confirm-save")) {
            return false;
        }
        cuttingScreenCount++;
        sendCuttingScreenCount(cuttingScreenCount);

        if (cuttingScreenCount > parseInt(blur_count)) {
            saveExamFn(2);
        } else {
            $("#blurCount").text(cuttingScreenCount);
            $("#blurCountModal").modal();
        }
    }

});

//最短答题时长  返回一个判断值，如果返回值为true，则允许调用commit_exam交卷，否则在调用前return false终止调用commit_exam
function isMinTimeLimit(setMinExamTime, minExamTime, isShowAlert) {
    var canSubmit = true;
    $.ajax({
        type: "post",
        url: "/exam/get_remian_time",
        dataType: "json",
        data: "examResultId=" + exam_results_id,
        async: false,
        success: function (msg) {
            var consume_time = Math.abs(msg.consumeTime);
            console.log(consume_time);
            $("#limitMinTimeCount").text(Math.ceil((minExamTime * 60 - consume_time) / 60));
            //若设置了最短答题时长，且答题时间小于该时长，返回一个false
            if (setMinExamTime && consume_time < (minExamTime * 60)) {
                if (isShowAlert) { //是否要显示提示
                    showMinTimeLimitAlert();
                }
                canSubmit = false;
            }
        }
    })
    return canSubmit;
}

//显示'最短答题时长'提示
function showMinTimeLimitAlert() {
    $('#minTimeLimitAlert').removeClass('hidden');
    var minTimeLimitTimeout = setTimeout(function () {
        $('#minTimeLimitAlert').addClass('hidden');
        clearTimeout(minTimeLimitTimeout);
    }, 3000);
}

//无操作防作弊
$(function () {
    //若干秒无操作提示，自动交卷
    if (setQuietCheat == 1) {
        //预留10秒提示时间
        var maxTime = parseInt(quietSecond) + 10;
        var d = new Date();
        //剩余时间截止时间
        var restTime = parseInt(d.getTime() / 1000) + maxTime;

        var timeLimitInterval = setInterval(function () {
            //如果已经点击了交卷，取消倒计时
            if ($(".had-save-mark").hasClass("had-confirm-save")) {
                clearInterval(timeLimitInterval);
                return false;
            }
            var d = new Date();
            var restTimeLeft = restTime - parseInt(d.getTime() / 1000);

            if (restTimeLeft <= 0) {
                $("#timeLimitAlert").text("交卷中...");
                clearInterval(timeLimitInterval);
                saveExamFn(3);
            } else if (restTimeLeft <= 10) {
                $("#limitTimeCount").text(restTimeLeft);
                $("#timeLimitAlert").removeClass("hidden");
            }
            // restTime--;
        }, 1000);

        $("body").on('keydown click mousemove scroll', function (e) {
            $("#timeLimitAlert").addClass("hidden");
            var d = new Date();
            // reset
            restTime = parseInt(d.getTime() / 1000) + maxTime;
        });
    }
});

//**************************************防作弊**************************************


//提示弹窗
function showSuccessTip(text) {
    $(".ksx-success .text label").text(text);
    $(".ksx-success").show();
    $(".ksx-success").fadeOut(3000);
}

function showErrorTip(text) {
    $(".ksx-error .text label").text(text);
    $(".ksx-error").show();
    $(".ksx-error").fadeOut(3000);
}

function showWarnTip(text) {
    $(".ksx-warn .text label").text(text);
    $(".ksx-warn").show();
    $(".ksx-warn").fadeOut(3000);
}

//*******************************************答题卡优化********************************************

//新答题卡-收起
$("#answercardFoldBtn").click(function () {
    $("#answercardOpenBtn").show();
    $(this).hide();
    $("#numberCardModal .card-content").hide();
    $("#numberCardModal .modal-footer").hide();
    $("#numberCardModal .title_border").css({
        width: '18px',
        height: '4px',
        top: '-6px',
        margin: '0',
    });
    $("#numberCardModal .title").css("padding-top", "4px");
    $("#numberCardModal .title_content").css("margin-left", "unset").css("width", "12px");
    $("#numberCardModal").css("width", "66px");
});
//新答题卡-展开
$("#answercardOpenBtn").click(function () {
    $("#answercardFoldBtn").show();
    $(this).hide();
    $("#numberCardModal .card-content").show();
    $("#numberCardModal .modal-footer").show();
    $("#numberCardModal .title_border").css({
        width: '4px',
        height: '18px',
        top: '0px',
        margin: 'auto',
    });
    $("#numberCardModal .title").css("padding-top", "0px");
    $("#numberCardModal .title_content").css("margin-left", "10px").css("width", "unset");
    $("#numberCardModal").css("width", "240px");
});
//打开监控的时候
$(function () {
    if ($("#webcam").length != 0) {
        $("#numberCardModal").css("height", "calc(100% - " + (110 + 173).toString() + "px)").css("top", (90 + 173).toString() + "px"); //答题卡的高度和位置调整
    }
})


//*******************************************切屏优化********************************************
//切屏次数发给后端
function sendCuttingScreenCount(count) {
    $.ajax({
        type: "POST",
        cache: false,
        dataType: "json",
        headers: {"cache-control": "no-cache"},
        url: '/exam/update_cutting_count',
        data: "switchScreen=" + count + "&examResultsId=" + exam_results_id,
    });
}