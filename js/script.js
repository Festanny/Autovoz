$(document).ready(function(){
  $('.first-slider').slick();

  $('.second-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendArrows: $('.second_slider_arrow'),
    prevArrow: '<button type="button" class="btn_second"></button>',
    nextArrow: '<button type="button" class="btn_second"></button>'
  });    

  $( window ).resize(function() {
    mlSlider();
  });

  function mlSlider() {
    if ($(window).width() > 1200) {
      $cnt = 1170;
    } else {
      $cnt = 570;
    }
    $cntMl = ($(window).width() - $cnt) / 2 + 15;
    $('.slick-arrow').css('margin-left', $cntMl);
  }
  mlSlider();

});

  $num1 = document.querySelectorAll('.counter .info-block .block .number-counter span')[0].innerHTML;
  $num1 = Number($num1);
    $(window).scroll(function () {
      if ($(window).scrollTop() + $(window).height() >= $('.counter .info-block').offset().top) {
        console.log(1);
        numPlus();
      }
    });
  
  function numPlus() {
    setInterval(function() {
      $s = 0;
      while ($s > $num1) {
        document.querySelectorAll('.counter .info-block .block .number-counter span')[0].innerHTML = $s;
        $s++;
        console.log($s);
      }
    }, 10000);
  }