var nav = $("#header #nav ul li");
    var cont = $("#wrap > section");

    nav.click(function(e){
      e.preventDefault();
      var target = $(this);
      var index = target.index();
      //alert(index);
      var section = cont.eq(index);
      var offset = section.offset().top;
      $("html,body").animate({ scrollTop:offset },600,"easeInOutExpo");
    });

    $(window).scroll(function(){
      var wScroll = $(this).scrollTop();

      if(wScroll >= cont.eq(0).offset().top){
        nav.removeClass("active");
        nav.eq(0).addClass("active");
      }
      if(wScroll >= cont.eq(1).offset().top){
        nav.removeClass("active");
        nav.eq(1).addClass("active");
      }
      if(wScroll >= cont.eq(2).offset().top){
        nav.removeClass("active");
        nav.eq(2).addClass("active");
      }
      if(wScroll >= cont.eq(3).offset().top){
        nav.removeClass("active");
        nav.eq(3).addClass("active");
      }
      if(wScroll >= cont.eq(4).offset().top){
        nav.removeClass("active");
        nav.eq(4).addClass("active");
      }
      if(wScroll >= cont.eq(5).offset().top){
        nav.removeClass("active");
        nav.eq(5).addClass("active");
      }
    });
    
    var wHeight = $(window).height();
        var dHeight = $(document).height();
        var navHeight = $("#header").outerHeight();
        var lastScrollTop = 0;
        var moveScroll;

        $(window).scroll(function(event){ //스크롤을 감지
            moveScroll = true;
        });

        setInterval(function(){ //스크롤이 감지가 되면 0,25마다 실행
            if(moveScroll){
                hasScroll();
                moveScroll = false;
            }
        },250);

        function hasScroll(){
            var wScroll = $(this).scrollTop();  //현재 스크롤 값

            if( wScroll > lastScrollTop && wScroll > navHeight ){
                    //스크롤을 내렸을 때 
                    $("#header").addClass("on");
            }else {
                    //스크롤을 올렸을 때 
                    if(wScroll + wHeight < dHeight) {
                        $("#header").removeClass("on");
                    }
            }

            lastScrollTop = wScroll;
        }