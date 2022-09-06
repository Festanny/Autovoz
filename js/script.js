$(document).ready(function(){
  $('.first-slider').slick();

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

