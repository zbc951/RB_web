// header 伸縮
$(function(){
    var wWD = window.innerWidth;
    var size1 = $('.dicoration.d1');
    var size2 = $('header .bottom ul');
    var size3 = $('header article');
    var size4 = $('.dicoration.d2 div:nth-of-type(2)');
    if(wWD > 1710) {
        $(size1).css('width', (String(267) + "px"));
        $(size2).css('padding-right', (String(110) + "px"));
        $(size3).css('width', (String(1460) + "px"));
        $(size4).css('width', (String(351) + "px"));
    }else if(wWD <= 1710 && wWD > 1510) {
        $(size1).css('width', (String(wWD - 1443) + "px"));
        $(size2).css('padding-right', (String(wWD - 1600) + "px"));
        $(size3).css('width', (String(wWD - 250) + "px"));
    }else if(wWD <= 1510) {
        $(size1).css('width', (String(68) + "px"));
        $(size2).css('padding-right', (String(0) + "px"));
        $(size3).css('width', (String(wWD - 250) + "px"));
        $(size4).css('width', (String(wWD - 1170) + "px"));
    }

    $(window).resize(function(){
        var wWD = window.innerWidth;
        var size1 = $('.dicoration.d1');
        var size2 = $('header .bottom ul');
        var size3 = $('header article');
        var size4 = $('.dicoration.d2 div:nth-of-type(2)');
        if(wWD > 1710) {
            $(size1).css('width', (String(267) + "px"));
            $(size2).css('padding-right', (String(110) + "px"));
            $(size3).css('width', (String(1460) + "px"));
            $(size4).css('width', (String(351) + "px"));
        }else if(wWD <= 1710 && wWD > 1510) {
            $(size1).css('width', (String(wWD - 1443) + "px"));
            $(size2).css('padding-right', (String(wWD - 1600) + "px"));
            $(size3).css('width', (String(wWD - 250) + "px"));
        }else if(wWD <= 1510 && wWD > 1280) {
            $(size1).css('width', (String(68) + "px"));
            $(size2).css('padding-right', (String(0) + "px"));
            $(size3).css('width', (String(wWD - 250) + "px"));
            $(size4).css('width', (String(wWD - 1170) + "px"));
        }else {
            $(size1).css('width', (String(68) + "px"));
            $(size2).css('padding-right', (String(0) + "px"));
            $(size3).css('width', (String(1030) + "px"));
            $(size4).css('width', (String(100) + "px"));
        }
    })
})