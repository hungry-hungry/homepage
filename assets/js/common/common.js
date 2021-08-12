(function($) { 
  
  // アコーディオン
  $(function(){
    $('.js-accordion').on('click', function(){
      if($(this).hasClass('open')) {
        $(this).siblings('.accordion_body').slideUp(200);
        $(this).removeClass('open');
      } else {
        $(this).siblings('.accordion_body').slideDown(200);
        $(this).addClass('open');
      }
    });
  });
  // スムーススクロール
  $(function(){
    var windowWidth = window.innerWidth;
    $('a[href^="#"]').on('click', function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? false : href);
      console.log();
      $('.js-spMenuToggle').removeClass('open');
      if($(target).length === 1 ) {
        var position = target.offset().top - 81;
        if(windowWidth < 767 ) {
          position = $(target).offset().top - 50;
        }
        $("html, body").animate({scrollTop:position}, speed, "swing");
      }
      return false;
    });
  });
  // SP時ナビ表示制御
  $(function(){
    $('.js-spMenuToggle').on('click', function(){
      var windowWidth = window.innerWidth;
      if(windowWidth >= 1280 ) return;
      $(this).toggleClass('open')
    });
  });
  $(function(){
    // ウィンドウを開く
    $('.js-modal-open').each( function() {
      $(this).on('click', function(e) {
        scrollPosition = $(window).scrollTop();
        $('body').addClass('fixed').css({'top': -scrollPosition});
        var target = $(this).data('target');
        var modal = document.getElementById(target);
        $(modal).fadeIn(300);
        return false;
      });
    });

    // ウィンドウを閉じる
    $('.js-modal-close').on('click', function() {
    $('.js-modal').fadeOut(300);
      $('body').removeClass('fixed').css({'top': 0});
      window.scrollTo( 0 , scrollPosition );
      return false;
    });
    var scrollPosition;
  });

})(jQuery);