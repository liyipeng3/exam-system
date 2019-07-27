
accessid = ''
accesskey = ''
host = ''
policyBase64 = ''
signature = ''
callbackbody = ''
filename = ''
key = ''
expire = 0
g_object_name = ''
g_object_name_type = ''
now = timestamp = Date.parse(new Date()) / 1000; 
var fileName='',fileType='',fileSize=0,time=1;
function send_request()
{
    var xmlhttp = null;
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  
    if (xmlhttp!=null)
    {
        var pid = $("input[name=pId]").val();
        serverUrl = '/course/getOssPolicy?pId='+pid+'&fileName='+fileName+'&fileType='+fileType+'&fileSize='+fileSize+'&userId='+user_id;
        xmlhttp.open( "GET", serverUrl, false );
        xmlhttp.send( null );
        return xmlhttp.responseText
    }
    else
    {
        alert("您的浏览器不支持XMLHTTP");
    }
};

function check_object_radio() {
    var tt = document.getElementsByName('myradio');
    for (var i = 0; i < tt.length ; i++ )
    {
        if(tt[i].checked)
        {
            g_object_name_type = tt[i].value;
            break;
        }
    }
}

function get_signature()
{
    //可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
    now = timestamp = Date.parse(new Date()) / 1000;
    responseObj = JSON.parse(send_request());
    obj = responseObj.bizContent;
    console.log(responseObj);
    if(responseObj.success == false){
        alert(responseObj.desc);
        window.location.reload();
        return false;
    }
    if (expire < now + 3)
    {
        host = obj['host']
        policyBase64 = obj['policy']
        accessid = obj['accessid']
        signature = obj['signature']
        expire = parseInt(obj['expire'])
        callbackbody = obj['callback'] 
        key = obj['dir']
        return true;
    }
    return false;
};

function random_string(len) {
　　len = len || 32;
　　var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';   
　　var maxPos = chars.length;
　　var pwd = '';
　　for (i = 0; i < len; i++) {
    　　pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

function get_suffix(filename) {
    pos = filename.lastIndexOf('.')
    suffix = ''
    if (pos != -1) {
        suffix = filename.substring(pos)
    }
    return suffix;
}

function calculate_object_name(filename)
{
    if (g_object_name_type == 'local_name')
    {
        g_object_name += "${filename}"
    }
    else if (g_object_name_type == 'random_name')
    {
        suffix = get_suffix(filename)
        g_object_name = key + random_string(10) + suffix
    }
    return ''
}

function get_uploaded_object_name(filename)
{
    if (g_object_name_type == 'local_name')
    {
        tmp_name = g_object_name
        tmp_name = tmp_name.replace("${filename}", filename);
        return tmp_name
    }
    else if(g_object_name_type == 'random_name')
    {
        return g_object_name
    }
}

function set_upload_param(up, filename, ret)
{
    g_object_name = key;
    if (filename != '') { suffix = get_suffix(filename)
        calculate_object_name(filename)
    }
    new_multipart_params = {
        'key' : g_object_name + '${filename}',
        'policy': policyBase64,
        'OSSAccessKeyId': accessid, 
        'success_action_status' : '200', //让服务端返回200,不然，默认会返回204
        'callback' : callbackbody,
        'signature': signature,
        'pId': NOW_ID

};

    up.setOption({
        'url': '/admin/file/upload_new',
        'multipart_params': new_multipart_params
    });

    up.start();
}

$('#showUploadFileModal').click(function(){
    getQnToken();
})
var FILE_TYLE_LIST=['doc','docx','pdf','xls','xlsx','ppt','pptx','mp3','mp4'];
function isFileTypeAllowed(file_name){//判断文件格式是否合法
    var list=file_name.split('.');
    var file_type=list[list.length-1];
    for(var i=0;i<FILE_TYLE_LIST.length;i++){
        if(file_type==FILE_TYLE_LIST[i]){
            return true;
        }
    }
    return false;
}

var uploader = new plupload.Uploader({
	runtimes : 'html5,flash,silverlight,html4',
	browse_button : 'selectfiles',
    multi_selection: false,
	container: document.getElementById('container'),
	flash_swf_url : './Moxie.swf',
	silverlight_xap_url : './Moxie.xap',
    url : 'http://oss.aliyuncs.com',

    filters: {
        // mime_types : [ //只允许上传图片和zip文件
        // { title : "Image files", extensions : "jpg,gif,png,bmp" },
        // { title : "Zip files", extensions : "zip,rar" }
        // ],
        max_file_size : '500mb', //最大只能上传10mb的文件
        prevent_duplicates : true //不允许选取重复文件
    },

	init: {
		PostInit: function() {
			document.getElementById('ossfile').innerHTML = '';
			document.getElementById('postfiles').onclick = function() {
            set_upload_param(uploader, '', false);
            return false;
			};
		},

		FilesAdded: function(up, files) {
            $("#uploadFileModal").modal("hide");
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
            plupload.each(files, function(file) {
                fileName = file.name;
                fileType = file.type;
                fileSize = file.size;
                if(!isFileTypeAllowed(fileName)){
                    alert('您上传的文件格式不支持！');
                    window.location.reload();
                    return;
                    // $("#grid-data").bootgrid("reload");
                }
                if(file.type.indexOf("officedocument") != -1 || file.type.indexOf("powerpoint") != -1 || file.type.indexOf("word") != -1 || file.type.indexOf("excel") != -1){
                    if(fileSize>5000000){
                        alert('您上传的文件过大！');
                        window.location.reload();
                        return;
                        // $("#grid-data").bootgrid("reload");
                    }
                }
                document.getElementById('ossfile').innerHTML += '<div id="' + file.id + '">' +'<div class="progress"><div class="progress-bar" style="width: 0%"></div></div><b></b>'
                    + '<br/><span class="file-style">'+file.name + '</span>'+'<span class="file-style">'+ '(' + plupload.formatSize(file.size) + ')'+'</span>'
                    +'</div>';
			    if(file.type.indexOf("officedocument") == -1 && file.type.indexOf("powerpoint") == -1 && file.type.indexOf("word") == -1 && file.type.indexOf("excel") == -1){
                    // $('#postfiles').click();
                    qn_file=file;//用于七牛回调显示进度
                    qnUploadFile(file.getNative(),file.name);
			    }else {
			        var pathId = $(".file_active").attr("path_id");
                    uploader.setOption('url','/admin/upload_document_baiduyun/?pathId='+pathId);
                    uploader.start();
                }
			});
		},

		BeforeUpload: function(up, file) {
            if(file.type.indexOf("officedocument") == -1 && file.type.indexOf("powerpoint") == -1 && file.type.indexOf("word") == -1 && file.type.indexOf("excel") == -1){
                check_object_radio();
                // set_upload_param(up, file.name, true);
                // qn_file=file;　//用于七牛回调显示进度
                // qnUploadFile(file.getNative(),file.name);
            }
        },

		UploadProgress: function(up, file) {
            var d = document.getElementById(file.id);
            var prog = d.getElementsByTagName('div')[0];
            var progBar = prog.getElementsByTagName('div')[0];
            if(file.type.indexOf("officedocument") == -1 && file.type.indexOf("powerpoint") == -1 && file.type.indexOf("word") == -1 && file.type.indexOf("excel") == -1){
                d.getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
                progBar.style.width= 2*file.percent + 'px';
                progBar.setAttribute('aria-valuenow', file.percent);
            }else if(time==1) {
                var randomNum = Math.ceil(Math.random()*10);
                d.getElementsByTagName('b')[0].innerHTML = '<span>' + (100 - randomNum) + "%</span>";
                progBar.style.width= 2*(100-randomNum)+'px';
                progBar.setAttribute('aria-valuenow', (100-randomNum));
                time++;
                setTimeout(function () {
                    d.getElementsByTagName('b')[0].getElementsByTagName('span')[0].innerHTML=(100 - randomNum) + "%  已上传，等待服务器确认";
                },900)
            }
		},

		FileUploaded: function(up, file, info) {
            if(file.type.indexOf("officedocument") == -1 && file.type.indexOf("powerpoint") == -1 && file.type.indexOf("word") == -1 && file.type.indexOf("excel") == -1){
                if (info.status == 200){
                    // gio
                    ksxProbe.gioTrack('uploadKnowledgeSuccess', 1);
                    alert('上传成功');
                    $("#grid-data").bootgrid("reload");
                    document.getElementById('ossfile').innerHTML = '';
                    // window.location.reload();
                }else if(info.status == 203){
                    alert('上传失败，请联系管理员');
                    // window.location.reload();
                    $("#grid-data").bootgrid("reload");
                    document.getElementById('ossfile').innerHTML = '';
                }else {
                    alert(info.response);
                    // window.location.reload();
                    $("#grid-data").bootgrid("reload");
                    document.getElementById('ossfile').innerHTML = '';
                }
            }else {
                var jsonObj= JSON.parse(info.response);
                if(jsonObj.success){
                    // gio
                    ksxProbe.gioTrack('uploadKnowledgeSuccess', 1);

                    var d = document.getElementById(file.id);
                    var prog = d.getElementsByTagName('div')[0];
                    var progBar = prog.getElementsByTagName('div')[0];
                    setTimeout(function(){
                        d.getElementsByTagName('b')[0].getElementsByTagName('span')[0].innerHTML="100%";
                        progBar.style.width= 200 +'px';
                        progBar.setAttribute('aria-valuenow', 100);
                    },1000);
                    setTimeout(function(){
                        alert('上传成功');
                        // window.location.reload();
                        $("#grid-data").bootgrid("reload");
                        document.getElementById('ossfile').innerHTML = '';
                    },1500);
                }else {
                    alert(jsonObj.desc);
                }
            }
		},

		Error: function(up, err) {
		    $("#uploadFileModal").modal("hide");
            if (err.code == -600) {
                alert("您选择的文件太大了");
                // window.location.reload();
                $("#grid-data").bootgrid("reload");
                document.getElementById('ossfile').innerHTML = '';
                // document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
            }
            else if (err.code == -601) {
                alert("请选择正确的格式");
                // window.location.reload();
                $("#grid-data").bootgrid("reload");
                document.getElementById('ossfile').innerHTML = '';
                // document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
            }
            else if (err.code == -602) {
                alert("该文件已上传");
                // window.location.reload();
                $("#grid-data").bootgrid("reload");
                document.getElementById('ossfile').innerHTML = '';
                // document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
            }
            else
            {
                alert(err.message);
                // window.location.reload();
                $("#grid-data").bootgrid("reload");
                document.getElementById('ossfile').innerHTML = '';
                // document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
            }
		}
	}
});
uploader.init();

/*七牛上传*/
var qnToken = '';
var qnPath = '';//储存相对路径
var qn_file='';// 用于传入七牛回调的全局变量，为plupload方法里的file参数
var qnFileName=''; //文件名
var qnFileSize=0; //文件大小
var config = {
    useCdnDomain: true,
    region: qiniu.region.z1,
    concurrentRequestLimit:10,
};
var putExtra = {
    fname: "",
    params: {},
    mimeType: null //文件类型限制，null为不作限制
};
var observer={
    next(res){
        //console.log('进度：',res.total.percent);
        var d = document.getElementById(qn_file.id);
        var prog = d.getElementsByTagName('div')[0];
        var progBar = prog.getElementsByTagName('div')[0];
        var percent=parseInt(res.total.percent);
        d.getElementsByTagName('b')[0].innerHTML = '<span>' + percent + "%</span>";
        progBar.style.width= 2*percent + 'px';
        progBar.setAttribute('aria-valuenow', percent);
    },
    error(err){
        console.log('错误：',err);
        alert('上传失败，请联系管理员！');
    },
    complete(res){
        var d = document.getElementById(qn_file.id);
        var prog = d.getElementsByTagName('div')[0];
        var progBar = prog.getElementsByTagName('div')[0];
        var percent=100;
        d.getElementsByTagName('b')[0].innerHTML = '<span>' + percent + "%</span>";
        progBar.style.width= 2*percent + 'px';
        progBar.setAttribute('aria-valuenow', percent);
        $.ajax({
            type:'POST',
            cache : false,
            headers: { "cache-control": "no-cache" },
            dataType: "json",
            data:'fileName='+qnFileName+'&pId='+NOW_ID+'&fileSize='+qnFileSize,
            url: "/qn/oss_callback",
            success:function(){

            },
        });
        alert('上传成功');
        // window.location.reload();
        $("#grid-data").bootgrid("reload");
        document.getElementById('ossfile').innerHTML = '';
    }
}
function getQnToken() { //获取七牛token
    $.ajax({
        type: "POST",
        cache : false,
        headers: { "cache-control": "no-cache" },
        dataType: "json",
        url: "/qn/get_token",
        success :function(msg){
            if (msg.success) {
                qnToken = msg.bizContent.upToken;
                qnPath = msg.bizContent.fileDir;
            }
        },
        error: function (e){
            console.log(e);
        }
    });
};

function qnUploadFile(file,file_name){ //七牛上传
    var key=qnPath+file_name;
    qnFileName=key;
    qnFileSize=file.size;
    var observable = qiniu.upload(file, key, qnToken, putExtra, config);
    //console.log(observable);
    var subscription = observable.subscribe(observer);
}


