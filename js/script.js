$(function() {


  // header　スムーズスクロール
  $('header a').click(function(){
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    $('html, body').animate({ scrollTop: top }, 500);
  });


  // nav　
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



         // スクロールバーの横幅を取得

        var scrollsize = $(window).width() - $('body').prop('clientWidth');



        // html、bodyを固定（overflow:hiddenにする）

        $('html, body').addClass('lock');



        // オーバーレイ用の要素を追加

        $('body').append('<div class="modal-overlay"></div>');



        // オーバーレイをフェードイン

        $('.modal-overlay').fadeIn('slow');


        // モーダルコンテンツのIDを取得

        var modal = '#' + $(this).attr('data-target');



         // モーダルコンテンツを囲む要素を追加

        $(modal).wrap("<div class='modal-wrap'></div>");



        // モーダルコンテンツを囲む要素を表示

        $('.modal-wrap').show();



        // モーダルコンテンツの表示位置を設定

        modalResize();



         // モーダルコンテンツフェードイン

        $(modal).fadeIn('slow');



        // モーダルコンテンツをクリックした時はフェードアウトしない

        $(modal).click(function(e){

            e.stopPropagation();

        });


        // 「.modal-overlay」あるいは「.modal-close」をクリック

        $('.modal-overlay, .modal-close').off().click(function(){

            // モーダルコンテンツとオーバーレイをフェードアウト

            $(modal).fadeOut('slow');

            $('.modal-overlay').fadeOut('slow',function(){

                // html、bodyの固定解除

                $('html, body').removeClass('lock');

                // オーバーレイを削除

                $('.modal-overlay').remove();

                // モーダルコンテンツを囲む要素を削除

                $(modal).unwrap("<div class='modal-wrap'></div>");

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



            // モーダルコンテンツの横幅、高さを取得
            var mw = $(modal).outerWidth(true);

            var mh = $(modal).outerHeight(true);



            // モーダルコンテンツの表示位置を設定

            if ((mh > h) && (mw > w)) {

                $(modal).css({'left': 0 + 'px','top': 0 + 'px'});

            } else if ((mh > h) && (mw < w)) {

                var x = (w - scrollsize - mw) / 2;

                $(modal).css({'left': x + 'px','top': 0 + 'px'});

            } else if ((mh < h) && (mw > w)) {

                var y = (h - scrollsize - mh) / 2;

                $(modal).css({'left': 0 + 'px','top': y + 'px'});

            } else {

                var x = (w - mw) / 2;

                var y = (h - mh) / 2;

                $(modal).css({'left': x + 'px','top': y + 'px'});

            }

        }

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
