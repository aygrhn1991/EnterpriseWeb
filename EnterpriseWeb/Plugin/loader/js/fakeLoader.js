(function ($) {

    $.fn.fakeLoader = function (options) {

        //Defaults
        var settings = $.extend({
            timeToHide: 180000, // Default Time to hide fakeLoader
            pos: 'fixed',// Default Position
            top: '0px',  // Default Top value
            left: '0px', // Default Left value
            width: '100%', // Default width 
            height: '100%', // Default Height
            zIndex: '99999',  // Default zIndex 
            bgColor: 'rgba(0,0,0,.5)', // Default background color
        }, options);

        var spinnerHtml = '<div class="fl spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>';

        //The target
        var el = $(this);

        //Init styles
        var initStyles = {
            'position': settings.pos,
            'width': settings.width,
            'height': settings.height,
            'top': settings.top,
            'left': settings.left
        };

        //Apply styles
        el.css(initStyles);

        el.html(spinnerHtml);
        //Time to hide fakeLoader
        setTimeout(function () {
            $(el).fadeOut();
        }, settings.timeToHide);

        //Return Styles 
        return this.css({
            'backgroundColor': settings.bgColor,
            'zIndex': settings.zIndex
        });

    }; // End Fake Loader
}(jQuery));





