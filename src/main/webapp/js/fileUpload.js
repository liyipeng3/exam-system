
(function () {
    var E = window.wangEditor;
    var $ = window.jQuery;
    E.config.uploadFileUrl = '';
    E.config.uploadFileFileName = 'upfile';
    E.config.fileListInit = false;

    // 用 createMenu 方法创建菜单
    E.createMenu(function (check) {

        // 定义菜单id，不要和其他菜单id重复。编辑器自带的所有菜单id，可通过『参数配置-自定义菜单』一节查看
        var menuId = 'fileUpload';

        // check将检查菜单配置（『参数配置-自定义菜单』一节描述）中是否该菜单id，如果没有，则忽略下面的代码。
        if (!check(menuId)) {
            return;
        }

        // this 指向 editor 对象自身
        var editor = this;
        var url = editor.config.uploadFileUrl;
        var filename = editor.config.uploadFileFileName;

        var $dom = $('<a href="#" tabindex="-1"><i class="wangeditor-menu-img-upload"></i></a>');
        var $upfile = $('<input type="file" style="display:none">');

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,  // 编辑器对象
            id: menuId,  // 菜单id
            title: '上传附件（文件大小不超过5M）', // 菜单标题

            // 正常状态和选中状态下的dom对象，样式需要自定义
            $domNormal: $dom,
            $domSelected: $('<a href="#" tabindex="-1"><i class="wangeditor-menu-img-upload"></i></a>')
        });

        // 菜单正常状态下，点击将触发该事件
        menu.clickEvent = function (e) {
            var rangeElem = editor.getRangeElem();
            var targetElem = editor.getSelfOrParentByName(rangeElem, '.upfile');
            if (!targetElem)
                $upfile.click();
            else alert ('不要在附件链接内添加附件');
            // editor.customCommand(e, commandFn);
        };

        // 菜单选中状态下，点击将触发该事件
        menu.clickEventSelected = function (e) {
            var rangeElem = editor.getRangeElem();
            var targetElem = editor.getSelfOrParentByName(rangeElem, 'a');
            if (!targetElem)
                $upfile.click();
            else alert ('不要在附件链接内添加附件');
            // editor.customCommand(e, commandFn);
        };

        $upfile.change(function (e) {
            if ($(this).val() != '') {
                var formData = new FormData();
                formData.append(filename, $upfile[0].files[0]);
                $.ajax({
                    url: url,
                    data: formData,
                    type: 'post',
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function (msg) {
                        msg = JSON.parse(msg);
                        if (msg.success) {
                            editor.command(e, 'insertHtml', '<a class="upfile" href="'+ msg.bizContent.url +'" target="_blank">'+ msg.bizContent.title +'</a>');
                        } else {
                            alert (msg.desc);
                        }
                    },
                    error: function (err) {}

                });
            }
        });

        // 根据当前选区，自定义更新菜单的选中状态或者正常状态
        menu.updateSelectedEvent = function () {
            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });
})();

