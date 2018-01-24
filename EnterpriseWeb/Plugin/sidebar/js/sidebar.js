$(function () {
    $('.sidebar-item>a').on('click', function () {
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
    });
});