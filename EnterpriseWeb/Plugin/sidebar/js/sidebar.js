$(function () {
    //sidebar收缩展开
    $('.sidebar-item>a').on('click', function () {
        if (!$('.sidebar').hasClass('sidebar-mini')) {
            if ($(this).next().css('display') == "none") {
                //展开未展开
                $('.sidebar-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('sidebar-show').siblings('li').removeClass('sidebar-show');
            } else {
                //收缩已展开
                $(this).next('ul').slideUp(300);
                $('.sidebar-item.sidebar-show').removeClass('sidebar-show');
            }
        }
    });
    //sidebar-mini切换
    $('.sidebar-top').on('click', function () {
        if (!$('.sidebar').hasClass('sidebar-mini')) {
            $('.sidebar-item.sidebar-show').removeClass('sidebar-show');
            $('.sidebar-item').children('ul').removeAttr('style');
            $('.sidebar').addClass('sidebar-mini');
            $('.main').removeClass('main-mini').addClass('main-show');
        } else {
            $('.sidebar').removeClass('sidebar-mini');
            $('.main').removeClass('main-show').addClass('main-mini');
        }
    });
});