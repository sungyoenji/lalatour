$(function(){
    // 검색
    $('.popupBox').hide()
    $('.hd_m_left input').click(function(){
        $('.popupBox').show()
    })
    $('.btn_close').click(function(){
        $('.popupBox').hide()
    })

    // TOP
    $('.btn_top').click(function(){
        $('body,html').animate({scrollTop:0})
    })
    $(window).scroll(function(){
        let num = $(this).scrollTop()
        console.log(num)

        if(num >= 800){
            $('.btn_top').slideDown()
        }else{
            $('.btn_top').slideUp()
        }
    })

    //전체메뉴_icon
    $('.hd_allmenu li a').click(function(){
        $(this).toggleClass('on')
    })
    // 2단메뉴
    // $('.depth2_allmenu').hide()
    $('.hd_allmenu>li>a').click(function(){
        $('.depth2_allmenu').stop().slideToggle()
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
 

 
    //banner_slide
    $('.slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover:false,
        dots: true,
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

    // section2_sale_slide
    $('.sale').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });


    //캘린더  
    $('.departure_Wrap').click(function(){
        $('.calendar_wrap').toggleClass('on')
    })

    $('.btn_calendar_month').click(function(){
        $('.month_list').toggleClass('on')
    })


    // tit_Tab
    $('.list2').hide()
    $('.section_tit li').click(function(){
        let num = $(this).index()

        $('.section_tit li').removeClass('on')
        $(this).addClass('on')

        $('.list').hide();
        $('.list').eq(num).show();
        
    })

   //카운트다운
    function remaindTime() {
    var now = new Date();
    var end = new Date(now.getFullYear(),now.getMonth(),now.getDate(),21,00,00);
    var open = new Date(now.getFullYear(),now.getMonth(),now.getDate(),09,00,00);
  
    var nt = now.getTime();
    var ot = open.getTime();
    var et = end.getTime();
  
   if(nt<ot){
     $(".time").fadeIn();

     sec =parseInt(ot - nt) / 1000;
     day  = parseInt(sec/60/60/24);
     sec = (sec - (day * 60 * 60 * 24));
     hour = parseInt(sec/60/60);
     sec = (sec - (hour*60*60));
     min = parseInt(sec/60);
     sec = parseInt(sec-(min*60));

     if(hour<10){hour="0"+hour;}
     if(min<10){min="0"+min;}
     if(sec<10){sec="0"+sec;}
      $(".hours").html(hour);
      $(".minutes").html(min);
      $(".seconds").html(sec);
   } else if(nt>et){
    $("p.time-title").html("오픈까지 남은 시간");
    $(".time").fadeOut();
   }else {
       $(".time").fadeIn();
     sec = parseInt(et - nt) / 1000;
     day  = parseInt(sec/60/60/24);
     sec = (sec - (day * 60 * 60 * 24));
     hour = parseInt(sec/60/60);
     sec = (sec - (hour*60*60));
     min = parseInt(sec/60);
     sec = parseInt(sec-(min*60));
     if(hour<10){hour="0"+hour;}
     if(min<10){min="0"+min;}
     if(sec<10){sec="0"+sec;}
      $(".hours").html(hour);
      $(".minutes").html(min);
      $(".seconds").html(sec);
   }
 }
 setInterval(remaindTime,1000);

   //travelTab 
    $('.travelList:nth-child(2)').hide()
    $('.travelList:nth-child(3)').hide()
    $('.travelList:nth-child(4)').hide()
    $('.travelTab li').click(function(){
        let num = $(this).index()

        $('.travelTab li').removeClass('on')
        $(this).addClass('on')

        $('.travelList').hide();
        $('.travelList').eq(num).show();
        
    })

    // section6_slide(후기)
    $('.section6_inner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows:false
      });
      
      

}); 
 