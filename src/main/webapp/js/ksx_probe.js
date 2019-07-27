//定义对象“构造”函数
function Probe() {
    //本地存储
    this.localStorage = window.localStorage;

    /*
    * @params gio预留字段
    * opts = {
    *   userId//用户id
    *   companyId//公司id
    *   companyName//公司名字
    *   rightsGrade//权限
    * }
    * */
    this.gioInit = function (opts) {
        !function (e, t, n, g, i) {
            e[i] = e[i] || function () {
                (e[i].q = e[i].q || []).push(arguments)
            }, n = t.createElement("script"), tag = t.getElementsByTagName("script")[0], n.async = 1, n.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + g, tag.parentNode.insertBefore(n, tag)
        }(window, document, "script", "assets.growingio.com/2.1/gio.js", "gio");

        gio('init', '87d10bc8158a4ed0a2206a6f0bdd2a5c', {});
        /*
        * GrowingIO默认不会把 hashtag 识别成页面 URL 的一部分。
        * 对于使用 hashtag 进行页面跳转的单页面网站应用来说，
        * 可以启用 hashtag 作为标识页面的一部分。
        * 放在init和send之间
        * */
        gio('config', {'hashtag':true});
        //原CS1字段
        gio('setUserId', opts.userId);
        //原CS2-10字段
        gio('app.set', {
            'company_id': opts.companyId,
            'company_name': opts.companyName,
            'company_right': opts.rightsGrade
        });
        gio('send');
    };

    /*
    * ksx页面url匹配页面名称
    * */
    this.gioPageNameUrlJson = {
        'wechat1': {
            'regx': /^(.*)(\.kaoshixing\.com\/account\/m_wechat_login_independent)(.*)$/,
            'name': '微信跳转'
        },
        'wechat2': {
            'regx': /^(.*)(mp\.weixinbridge\.com\/mp\/wapredirect)(\?.*)?$/,
            'name': '微信跳转'
        },
        'wechat3': {
            'regx': /^(.*)(\.kaoshixing\.com\/account\/wechat_login_independent)(.*)$/,
            'name': '微信跳转'
        },
        'home': {
            'regx': /^(.*)(\.kaoshixing\.com(\/home)?\/?)(\?.+)?$/,
            'name': '首页'
        },
        'function': {
            'regx': /^(.*)(\.kaoshixing\.com\/function\/?)$/,
            'name': '功能页'
        },
        'partyBuilding': {
            'regx': /^(.*)(\.kaoshixing\.com\/party_building\/?)$/,
            'name': '党建平台'
        },
        'competitionPlan': {
            'regx': /^(.*)(\.kaoshixing\.com\/competition_plan\/?)$/,
            'name': '竞赛方案'
        },
        'competition': {
            'regx': /^(.*)(\.kaoshixing\.com\/competition\/?)$/,
            'name': '竞赛宣传页'
        },
        'news': {
            'regx': /^(.*)(\.kaoshixing\.com\/news\/?)(\?classifyOne=1)$/,
            'name': '案例'
        },
        'newsDetail': {
            'regx': /^(.*)(\.kaoshixing\.com\/news\/)([0-9]+)(\?classifyOne=1)$/,
            'name': '案例详情'
        },
        'information': {
            'regx': /^(.*)(\.kaoshixing\.com\/news\/?)(\?classifyOne=2)$/,
            'name': '资讯中心'
        },
        'newsDetailDetail': {
            'regx': /^(.*)(\.kaoshixing\.com\/news\/)([0-9]+)(\?classifyOne=2)$/,
            'name': '资讯详情'
        },
        'version':  {
            'regx': /^(.*)(\.kaoshixing\.com\/version\/?)$/,
            'name': '版本对比'
        },
        'about':  {
            'regx': /^(.*)(\.kaoshixing\.com\/about\/?)$/,
            'name': '关于我们'
        },
        'changeLog': {
            'regx': /^(.*)(\.kaoshixing\.com\/change\/log\/?)$/,
            'name': '更新日志'
        },
        'brandIntro': {
            'regx': /^(.*)(\.kaoshixing\.com\/brand\/intro\/?)$/,
            'name': '品牌介绍'
        },
        'companyIntro': {
            'regx': /^(.*)(\.kaoshixing\.com\/company\/intro\/?)$/,
            'name': '公司介绍'
        },
        'login': {
            'regx': /^(.*)(\.kaoshixing\.com\/account\/login)(.)*$/,
            'name': '登录'
        }
    };

    /*
    * 设置用户id
    * @params id 用户id
    * */
    this.gioSetUserId = function (id) {
        gio('setUserId', id);
    };

    /*
    * 设置localstorage中内容
    * @params
    * key 标志符
    * val 对应值
    * */
    this.gioSetItem = function (key, val) {
        if(this.localStorage){
            var gioTrack = this.localStorage.gioTrack ? JSON.parse(this.localStorage.gioTrack) : {};

            gioTrack[key] = val;
            this.localStorage.setItem('gioTrack', JSON.stringify(gioTrack));
        }
    };

    /*
    * 获取localstorage中内容
    * */
    this.gioGetItem = function () {
        if(this.localStorage){
            var gioTrack = this.localStorage.gioTrack ? JSON.parse(this.localStorage.gioTrack) : {};

            return gioTrack;
        }else {
            return {};
        }

    };

    /*
    * 匹配来源页面名称
    * */
    this.gioPageNameFromUrl = function(url) {
        var pageJson = this.gioPageNameUrlJson;
        var pageName = '', obj;

        for (var key in pageJson) {
            obj = pageJson[key];
            if(obj.regx.test(url)){
                pageName = obj.name;
            }
        }

        return pageName == '' ? '未知页面' : pageName;
    };

    /*
    * 获取来源页面和页面名称
    * */
    this.gioGetPageInfo = function () {
        var obj = {'postion': '无来源'};

        if(document.referrer){
           obj.url  = document.referrer;
           obj.name = this.gioPageNameFromUrl(document.referrer);
        }else {
            obj.url = '***';
            obj.name = '无来源';
        }

        return obj;
    };

    /*
    * 获取注册来源信息
    * */
    this.gioGetRegistPageInfo = function () {
        var gioTrack = this.gioGetItem();
        var obj = {};

        if(gioTrack.registerFromPage_var){
            obj.url = gioTrack.registerFromPage_var;
            obj.name = gioTrack.registerFromPageName_var;
            obj.postion = gioTrack.registerFromPosition_var;
        }else {
            obj = this.gioGetPageInfo();
        }

        return obj;
    };
    
    /*
    * 删除localstorage中记录条目
    * @params key 条目key
    * */
    this.gioRemoveItem = function (key) {
        if(this.localStorage){
            var gioTrack = this.localStorage.gioTrack ? JSON.parse(this.localStorage.gioTrack) : {};

            delete gioTrack[key];
            this.localStorage.setItem('gioTrack', JSON.stringify(gioTrack));
        }
    };

    /*
    * 打点事件
    * @params
    * eventId String 事件标识符
    * number Number 事件的数值，事件自增number的数值
    * eventLevelVariables JSON Object 包含事件级变量的JSON对象，暨事件发生时所伴随的维度信息
    * */
    this.gioTrack = function (eventId, number, eventLevelVariables) {
        gio('track', eventId, number, eventLevelVariables);
    };

    /*
    * type: 后端不同server探针类型
    * */
    this.tingyun = function () {
        var location = window.location;
        var hostname = location.hostname.replace('.kaoshixing.com', '');
        var pathname = location.pathname.replace(/^(\/[a-z]+\/).+$/, '$1');
        var tingyunType = '';

        switch (hostname) {
            case 'admin':
                tingyunType = 'admin';
                break;
            case 'new':
                tingyunType = 'analysis';
                break;
            case 'www':
                if(pathname=='/account/' || pathname=='/admin/' || pathname=='/exam/') {
                    tingyunType = 'home';
                }else {
                    tingyunType = 'website';
                }
                break;
            case 'exam':
                tingyunType = 'exam';
                break;
            case 'test':
                tingyunType = 'test';
                break;
            case 'preview':
                tingyunType = 'pre';
                break;
            case 'stag':
                tingyunType = 'stag';
                break;
            default:
                //用于本地调试
                tingyunType = 'admin';
        }

        !function (e, t, n, g) {
            var tag = t.getElementsByTagName("script")[0];
            n = t.createElement("script");
            n.async = 1;
            n.src = 'https://s6.kaoshixing.com/static/plugins/tingyunServer/' + g;
            tag.parentNode.insertBefore(n, tag)
        }(window, document, "script", 'tingyun-rum-'+tingyunType+'.js');
    }

}
//使用new调用对象构造函数创建对象
var ksxProbe = new Probe();