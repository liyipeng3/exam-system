$(function () {

  // var RECORDER_APP_ID = "recorderApp";
  var $level, currentObj, questionsId;
  var TIME_LIMIT = 61;
  var limitId;

  var appWidth = 24;
  var appHeight = 24;
  var flashvars = {'upload_image': '/static/plugins/FlashWavRecorder/images/icon_record_upload.png'};
  var params = {};
  // var attributes = {'id': RECORDER_APP_ID, 'name': RECORDER_APP_ID};
  // embedSWF each .flash-content
  $(".recorder .flash-content").each(function(index, element) {
      var RECORDER_APP_ID = "flash"+$(this).attr("data-id");
      var attributes = {'id': RECORDER_APP_ID, 'name': RECORDER_APP_ID};
      swfobject.embedSWF("/static/plugins/FlashWavRecorder/recorder.swf?v=201801171822", RECORDER_APP_ID, appWidth, appHeight, "11.0.0", "", flashvars, params, attributes);
  });

  $(document).on('click',".recorder .start-recording",function() {
      $level = $(this).parents(".recorder").find(".progress");
      currentObj = $(this).parents(".question-content");
      var currentId = $(currentObj).attr("data-id");
      //解决 录音时长达到TIME_LIMIT时的音频上传没有examResultsId和examInfoId 的bug
      $("#uploadForm_"+currentId).find("input[name=examResultsId]").val(exam_results_id);
      $("#uploadForm_"+currentId).find("input[name=examInfoId]").val(exam_info_id);
      FWRecorder.uploadFormId = "#uploadForm_" + currentId;
      FWRecorder.uploadFieldName = "uploadFile";
      FWRecorder.connect("flash"+currentId, 0);
      FWRecorder.record('audio', 'audio.wav');
  });

  $(document).on('click',".recorder .stop-recording",function() {
      currentObj = $(this).parents(".question-content");
      var uploadObj = $(this).parents(".recorder").find(".upload");
      var currentId = $(currentObj).attr("data-id");
      $("#uploadForm_"+currentId).find("input[name=examResultsId]").val(exam_results_id);
      $("#uploadForm_"+currentId).find("input[name=examInfoId]").val(exam_info_id);
      FWRecorder.uploadFormId = "#uploadForm_" + currentId;
      FWRecorder.uploadFieldName = "uploadFile";
      FWRecorder.connect("flash"+currentId, 0);
      FWRecorder.stopRecording('audio');
  });
  // $(".recorder .start-playing").click(function() {
  //     currentObj = $(this).parents(".questionsContent");
  //     var uploadObj = $(this).parents(".recorder").find(".upload");
  //     var currentId = $(uploadObj).find("object").attr("id");
  //     FWRecorder.uploadFormId = "#uploadForm_" + currentId;
  //     FWRecorder.uploadFieldName = "upload_file";
  //     FWRecorder.connect("flash"+currentId, 0);
  //     FWRecorder.playBack('audio');
  // });

  window.fwr_event_handler = function fwr_event_handler() {
    var name, $controls;
    switch (arguments[0]) {
      case "ready":
        FWRecorder.recorderOriginalWidth = appWidth;
        FWRecorder.recorderOriginalHeight = appHeight;
        break;

      case "microphone_user_request":
        FWRecorder.showPermissionWindow();
        break;

      case "permission_panel_closed":
        FWRecorder.defaultSize();
        break;

      case "recording":
        FWRecorder.hide();
        FWRecorder.observeLevel();
        limitId = setTimeout(function() {
                FWRecorder.stopRecording('audio');
            },TIME_LIMIT*1000);
        break;

      case "recording_stopped":
        FWRecorder.show();
        FWRecorder.stopObservingLevel();
        $level.css({height: 0});
        clearTimeout(limitId);
        break;

      case "microphone_level":
        $level.css({height: arguments[1] * 100 + '%'});
        break;

      case "save_pressed":
        $("#spinnerLoading").removeClass("hidden");
        $(currentObj).find(".uploading").css("display","inline-block");
        FWRecorder.updateForm();
        break;

      case "saving":
        name = arguments[1];
        // console.info('saving started', name);
        break;

      case "saved":
        name = arguments[1];
        var response = arguments[2];
        var msg = JSON.parse(response);
        if(msg.success){
            showSuccessTip('录音上传成功');
            questionsId = $(currentObj).attr("data-id");
            var audioHtml = "<div class='audio-row'>"+
                                "<audio controls src='"+ msg.bizContent.audioUrl +"'></audio>"+
                                "<i class='icon icon-m_exam_error2 icon-audio-delete'></i>"+
                            "</div>";

            $(currentObj).find(".audio-list").append(audioHtml);
            $(currentObj).find(".uploading").hide();
            $(currentObj).attr("data-commit","true");
            $("#numberCardModal a.questions_"+questionsId).parent(".s1").removeClass("s1").addClass("s2");
            commitProcess(questionsId, true);
            $("#spinnerLoading").addClass("hidden");
            FWRecorder.hide();
        }
        // console.info('saving success', name, response);
        break;

      case "save_failed":
          showErrorTip('录音上传失败');
        name = arguments[1];
        var errorMessage = arguments[2];
          // console.info('saving failed', name, errorMessage);
        break;

      case "save_progress":
        name = arguments[1];
        var bytesLoaded = arguments[2];
        var bytesTotal = arguments[3];
        // console.info('saving progress', name, bytesLoaded, '/', bytesTotal);
        break;
    }
  };


  // function recorderEl(id) {
  //   return $('#' + id);
  // }

});
