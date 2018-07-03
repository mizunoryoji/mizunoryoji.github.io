$(function() {


  // header　スムーズスクロール
  $('header a').click(function(){
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    $('html, body').animate({ scrollTop: top }, 500);
  });


  // nav　ハンバーガーメニュー
  $('.navToggle').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }

  });


  // modal windows

  // 「.modal-open」をクリック

  $('.modal-open').click(function(){

    // オーバーレイ用の要素を追加
    $('body').append('<div class="modal-overlay"></div>');

    // オーバーレイをフェードイン
    $('.modal-overlay').fadeIn('slow');

    // モーダルコンテンツのIDを取得
    var modal = '#' + $(this).attr('data-target');

    // モーダルコンテンツの表示位置を設定

    modalResize();

    // モーダルコンテンツフェードイン

    $(modal).fadeIn('slow');


    // 「.modal-overlay」あるいは「.modal-close」をクリック

    $('.modal-overlay, .modal-close').off().click(function(){

      // モーダルコンテンツとオーバーレイをフェードアウト

      $(modal).fadeOut('slow');

      $('.modal-overlay').fadeOut('slow',function(){

        // オーバーレイを削除

        $('.modal-overlay').remove();

      });

    });

    // リサイズしたら表示位置を再取得

    $(window).on('resize', function(){

      modalResize();

    });


    // モーダルコンテンツの表示位置を設定する関数

    function modalResize(){

      // ウィンドウの横幅、高さを取得

      var w = $(window).width();

      var h = $(window).height();


      // モーダルコンテンツの表示位置を取得

      var x = (w - $(modal).outerWidth(true)) / 2;

      var y = (h - $(modal).outerHeight(true)) / 2;


      // モーダルコンテンツの表示位置を設定

      $(modal).css({'left': x + 'px','top': y + 'px'});

    }
  });


  $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });



});



$(window).on('load',function(){

	// fade-up
    $(window).scroll(function (){
        $('.fade-up').each(function(){
            var POS = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > POS - windowHeight){
                $(this).css({
                        'opacity':'1',
                        'transform':'translateY(0)',
                        '-webkit-transform':'translateY(0)',
                        '-moz-transform':'translateY(0)',
                        '-ms-transform':'translateY(0)'
                });
            } else {
                $(this).css({
                        'opacity':'0',
                        'transform':'translateY(70px)',
                        '-webkit-transform':'translateY(70px)',
                        '-moz-transform':'translateY(70px)',
                        '-ms-transform':'translateY(70px)'
                });
            }
        });
    });
});
