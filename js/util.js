var base = new function () {
    // 初始化页面
    this.init = function (m,w) {
        $('#main').html(w);
        $('#layout_menus').html(m);
        return this;
    };
    // 菜单效果
    this.menus = function (element) {
        element.clickObject.bind('tap', function () {
            if ($(this).hasClass(element.hasClass)) {   // 收回
                $(this).addClass(element.hideClass[0]).removeClass(element.displayClass[0]);
                $('#menusList').addClass(element.hideClass[1]).removeClass(element.displayClass[1]);
                $('#mask').hide();
            } else {    // 展开
                $(this).addClass(element.displayClass[0]).removeClass(element.hideClass[0]);
                $('#menusList').addClass(element.displayClass[1]).removeClass(element.hideClass[1]);
                $('#mask').show();
            }
        });
        return this;
    };
}