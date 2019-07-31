/**
 * Created by examstar on 2017/2/27.
 */
(function () {
    var E = window.wangEditor;
    var $ = window.jQuery;

    // 用 createMenu 方法创建菜单
    E.createMenu(function (check) {

        // 定义菜单id，不要和其他菜单id重复。编辑器自带的所有菜单id，可通过『参数配置-自定义菜单』一节查看
        var menuId = 'upload';

        // check将检查菜单配置（『参数配置-自定义菜单』一节描述）中是否该菜单id，如果没有，则忽略下面的代码。
        if (!check(menuId)) {
            return;
        }

        // this 指向 editor 对象自身
        var editor = this;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,  // 编辑器对象
            id: menuId,  // 菜单id
            title: '上传附件（文件大小不超过5M）', // 菜单标题

            // 正常状态和选中状态下的dom对象，样式需要自定义
            $domNormal: $('<a href="#" tabindex="-1"><i class="wangeditor-menu-img-upload"></i></a>'),
            $domSelected: $('<a href="#" tabindex="-1"><i class="wangeditor-menu-img-upload"></i></a>')
        });

        // 菜单正常状态下，点击将触发该事件
        menu.clickEvent = function (e) {
            var parentDiv = editor.$txt.parents('.filled');
            var file = parentDiv.find('input[type=file]');

            function commandFn() {
                if ($('#fileupForm').length == 0)
                    file.click();
                else alert ('正在上传其他附件...');
            }
            editor.customCommand(e, commandFn);
        };

        // 菜单选中状态下，点击将触发该事件
        menu.clickEventSelected = function (e) {
            var parentDiv = editor.$txt.parents('.filled');
            var file = parentDiv.find('input[type=file]');

            function commandFn() {
                if ($('#fileupForm').length == 0)
                    file.click();
                else alert ('正在上传其他附件...');
            }
            editor.customCommand(e, commandFn);
        };

        // 根据当前选区，自定义更新菜单的选中状态或者正常状态
        menu.updateSelectedEvent = function () {
            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });
})();

