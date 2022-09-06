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