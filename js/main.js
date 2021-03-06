//配置依赖
require.config({
    baseUrl : 'js',
    paths: {
        "zepto" : "https://cdn.bootcss.com/zepto/1.1.7/zepto.min",
        "zeptotouch" : "touch",
        "util" : 'util',
        "text" : 'text',
    },
    map: {  // 告诉RequireJS在任何模块之前，都先载入这个模块
        '*': {'css': 'css'}
    },
    shim:{
        'zepto':[   // 在zepto之前加载样式
            'css!../css/base.css'
        ],
        'zeptotouch':{  // 基于zepto模块
            deps:['zepto'],
            exports: '$'
        },
        'util': {
            deps: ['zepto'],
            exports: 'base'
        },
        'text!../layout/docs.html': {
            deps: [
                'css!../../../css/docs.css'
            ]
        },
        'text!../layout/danmaku.html': {
            deps: [
                'css!../../../css/danmaku.css'
            ]
        },
        'text!../layout/live.html': {
            deps: [
                'css!../../../css/live.css'
            ]
        }
    }
});


// 页面初始化
require(["zepto", "zeptotouch"]);
require([
    'text!../layout/menus.html',
    'text!../layout/welcome.html',
    'text!../layout/vote.html',
    "util"], function (m, w, d, base) {
    base.init(m, d);
});