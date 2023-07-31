$(function(){
    $('.depth2_allmenu').hide()
    $('.hd_allmanu p').mouseover(function(){
        $('.depth2_allmenu').stop().slideDown()
    })

    $('.depth2_allmenu').mouseleave(function(){
        $('.depth2_allmenu').stop().slideUp()
    })
    $('.depth2_allmenu').mouseleave(function(){
        $('.depth2_allmenu').stop().slideUp()
    })


    $('.depth2_overseas').hide()
    $('.gnb>li:first').mouseover(function(){
        $('.depth2_overseas').stop().slideDown()
    })

    $('.depth2_overseas').mouseleave(function(){
        $('.depth2_overseas').stop().slideUp()
    })
    $('.gnb>li:first a').mouseleave(function(){
        $('.depth2_overseas').stop().slideUp()
    })

    $('.depth2_korea').hide()
    $('.gnb>li:nth-child(2)').mouseover(function(){
        $('.depth2_korea').stop().slideDown()
    })
    $('.depth2_korea').mouseleave(function(){
        $('.depth2_korea').stop().slideUp()
    })
    $('.gnb>li:nth-child(2)').mouseleave(function(){
        $('.depth2_korea').stop().slideUp()
    })

    $('.depth2_theme').hide()
    $('.gnb>li:nth-child(3)').mouseover(function(){
        $('.depth2_theme').stop().slideDown()
    })
    $('.depth2_theme').mouseleave(function(){
        $('.depth2_theme').stop().slideUp()
    })
    $('.gnb>li:nth-child(3)').mouseleave(function(){
        $('.depth2_theme').stop().slideUp()
    })

    $('.depth2_hotel').hide()
    $('.gnb>li:nth-child(5)').mouseover(function(){
        $('.depth2_hotel').stop().slideDown()
    })
    $('.depth2_hotel').mouseleave(function(){
        $('.depth2_hotel').stop().slideUp()
    })
    $('.gnb>li:nth-child(5)').mouseleave(function(){
        $('.depth2_hotel').stop().slideUp()
    })

    $('.depth2_local').hide()
    $('.gnb>li:nth-child(6)').mouseover(function(){
        $('.depth2_local').stop().slideDown()
    })
    $('.depth2_local').mouseleave(function(){
        $('.depth2_local').stop().slideUp()
    })
    $('.gnb>li:nth-child(6)').mouseleave(function(){
        $('.depth2_local').stop().slideUp()
    })
 

 

    $('.slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover:false,
    });
    
    
    //슬라이드 재생/정지
    $('.btn_pause').click(function(){
        $('.btn_pause').toggleClass('on')
    })

    let sw = true

    $('.btn_pause').click(function(){
        if( sw == true ){
            $('.btn_pause').addClass('on')
            $('.slide').slick('slickPause')
            sw = false;
        }else{
            $('.btn_pause').removeClass('on')
            $('.slide').slick('slickPlay')
            sw = true;
        }
    });


}); 
