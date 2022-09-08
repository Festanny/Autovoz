// Получение сегодняшнего дня
function dateContact() {
  var d = new Date();
  var n = d.getDay();
  var time = $('.address-time-form .info-block .block .time .info-time');
  if (n==1) {
    time.eq(0).css({'font-weight':'900', 'color': '#444444'});
  } else if (n==2) {
    time.eq(1).css({'font-weight':'900', 'color': '#444444'});
  } else if (n==3) {
    time.eq(2).css({'font-weight':'900', 'color': '#444444'});
  } else if (n==4) {
    time.eq(3).css({'font-weight':'900', 'color': '#444444'});
  } else if (n==5) {
    time.eq(4).css({'font-weight':'900', 'color': '#444444'});
  } else if (n==6) {
    time.eq(5).css({'font-weight':'900', 'color': '#444444'});
  } else {
    time.eq(6).css({'font-weight':'900', 'color': '#444444'});
  } 
}
dateContact();

// первый слайдер
$('.first-slider').slick();

// второй слайдер
$('.second-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  appendArrows: $('.second_slider_arrow'),
  prevArrow: '<button type="button" class="btn_second"></button>',
  nextArrow: '<button type="button" class="btn_second"></button>'
});    

// отступ слева у навигации слайдера
$( window ).resize(function() {
  mlSlider();
});
function mlSlider() {
  if ($(window).width() > 1200) {
    $cnt = 1170;
  }
  $cntMl = ($(window).width() - $cnt) / 2 + 15;
  $('.slick-arrow').css('margin-left', $cntMl);
}
mlSlider();

// аккордион (форма)
$('.accordion-form form #collapse1 .accordion-body label').click(function () {
  $('.accordion-form form #collapse1 .accordion-body label').addClass('hidden');
  $(this).addClass('active');
  $('.accordion-form form #collapse1 .accordion-body .edit').removeClass('hidden');
});

$('.accordion-form form #collapse1 .accordion-body .edit').click(function () {
  $('.accordion-form form #collapse1 .accordion-body label').removeClass('hidden active');
  $('.accordion-form form #collapse1 .accordion-body .edit').addClass('hidden');
});

// маска для телефона
window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('#phone'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }
  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, true);
  input.addEventListener("keydown", mask, false)
});
});

// получение данных из формы
document.querySelector(".accordion-form form").addEventListener( "click" , function() {
  let car = $('input[name="car"]:checked').val()
  let brand = $('input[name="brand"]').val()
  let model = $('input[name="model"]').val()
  let city1 = $('input[name="city1"]').val()
  let city2 = $('input[name="city2"]').val()
  let date = $('input[name="date"]').val()

  if (car === undefined) {
    car = '';
  }
  if (car!='' && city1!='' && city2!='' && date!='') {
    $('.accordion-form form .info-block .info-block-main .info span').html(`${car} ${brand} ${model} из ${city1} в ${city2}. Желаемая дата отправки: ${date}`);
  }
});

// счетчик чисел
var s=0;
$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() >= $('.counter .info-block').offset().top) {
    // $('#fastRightStart').addClass('active');
    console.log(1);
    if (s==0) {
      calcCount();
    }
  }
});
function calcCount() {
  for (var i = 0; i < $('.counter .info-block .block .number-counter span').length; i++) {
      var end = $('.counter .info-block .block .number-counter span').eq(i).text();
      countStart(end, i);
  }
  s=1;
}
function countStart(end, i) {
  var start = 0;
  var interval = setInterval(function () {
      $('.counter .info-block .block .number-counter span').eq(i).text(++start);
      if (start == end) {
          clearInterval(interval);
      }
  }, 30);
}

// Просмотр изображения
$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});

