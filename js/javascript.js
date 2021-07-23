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

// 圖片輪播
$(document).on('ready', function () {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4500,
		arrows: false,
	})
})

//跑馬燈伸縮
$(function(){
    var wWD = window.innerWidth;
    var size1 = $('.marqueeBox');
    if(wWD > 1500) {
        $(size1).css('width', (String(1400) + "px"));
    }else if(wWD <= 1500 && wWD > 1280) {
        $(size1).css('width', (String(wWD - 100) + "px"));
    }else {
        $(size1).css('width', (String(1180) + "px"));
    }

    $(window).resize(function(){
        var wWD = window.innerWidth;
        var size1 = $('.marqueeBox');
        if(wWD > 1500) {
            $(size1).css('width', (String(1400) + "px"));
        }else if(wWD <= 1500 && wWD > 1280) {
            $(size1).css('width', (String(wWD - 100) + "px"));
        }else {
            $(size1).css('width', (String(1180) + "px"));
        }
    })
})

//mainPage
$(function(){
    var wWD = window.innerWidth;
    var size1 = $('.mainBox article');
    if(wWD > 1560) {
        $(size1).css('width', (String(1480) + "px"));
    }else if(wWD <= 1560 && wWD > 1280) {
        $(size1).css('width', (String(wWD - 80) + "px"));
    }else {
        $(size1).css('width', (String(1200) + "px"));
    }

    $(window).resize(function(){
        var wWD = window.innerWidth;
        var size1 = $('.mainBox article');
        if(wWD > 1560) {
            $(size1).css('width', (String(1480) + "px"));
        }else if(wWD <= 1560 && wWD > 1280) {
            $(size1).css('width', (String(wWD - 80) + "px"));
        }else {
            $(size1).css('width', (String(1200) + "px"));
        }
    })
})
// $(function(){
//     $('.openBtn').click(function(){
//         $('.imgBox').addClass('slide');
//         setTimeout(function(){
//             $('.imgBox li').css('opacity','1');
//         },3000)
//     })
// })

// mainBg
$(function(){
    var wWD = window.innerWidth;
    var size1 = $('.mainBg .img');
    $(size1).css('width', (String(wWD) + "px"));

    $(window).resize(function(){
        var wWD = window.innerWidth;
        var size1 = $('.mainBg .img');
        $(size1).css('width', (String(wWD) + "px"));
    })
})
// $(function(){
//     setTimeout(function(){
//         $('.openBtn').delay('5000').fadeIn('300');
//     })

//     $('.openBtn').click(function(){
//         $(this).fadeOut('300');
//         $('.mainBg').addClass('display');

//         var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
//         $body.animate({
//                 scrollTop:500
//         },300)
//     })
// })

//main區域入場動畫
$(function(){
    setTimeout(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.animate({
                scrollTop:500
        },500)
    },2800)

    setTimeout(function(){
        $('.mainBg').addClass('display');
    },3000)

    setTimeout(function(){
        $('.imgBox').addClass('slide');
    },3200)

    setTimeout(function(){
        $('.imgBox li').css('opacity','1');
    },6200)
})

// footer
$(function(){
    var wWD = window.innerWidth;
    var size1 = $('footer article');
    if(wWD > 1560) {
        $(size1).css('width', (String(1480) + "px"));
    }else if(wWD <= 1560 && wWD > 1280) {
        $(size1).css('width', (String(wWD - 80) + "px"));
    }else {
        $(size1).css('width', (String(1200) + "px"));
    }

    $(window).resize(function(){
        var wWD = window.innerWidth;
        var size1 = $('footer article');
        if(wWD > 1560) {
            $(size1).css('width', (String(1480) + "px"));
        }else if(wWD <= 1560 && wWD > 1280) {
            $(size1).css('width', (String(wWD - 80) + "px"));
        }else {
            $(size1).css('width', (String(1200) + "px"));
        }
    })
})

//goTop
$(function(){
	$(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 0){
                $(".goTop").fadeIn(300);
        } else{
                $(".goTop").fadeOut(300);
        };
	})

    $('.goTop').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },300)
    })
})