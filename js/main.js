//配置依赖
require.config({
    baseUrl : 'js',
    paths: {
        "zepto" : "http://rm.sina.com.cn/minisite/publicweb/js/zepto.min.1.1.6",
        "zeptotouch" : "http://rm.sina.com.cn/minisite/publicweb/js/zepto.touch.min",
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
        }
    }
});


// 页面初始化
require(["zepto", "zeptotouch"]);
require(['text!../layout/menus.html', "util"], function (m, base) {
    base.init(m);
});