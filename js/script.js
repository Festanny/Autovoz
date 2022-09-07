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


// получение даты
// $('#datepicker').change(function () {
//   let date = $('#datepicker').val();
//   let value = $('input[name="auto"]:checked').val()
// })


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



  // $num1 = document.querySelectorAll('.counter .info-block .block .number-counter span')[0].innerHTML;
  // $num1 = Number($num1);
  //   $(window).scroll(function () {
  //     if ($(window).scrollTop() + $(window).height() >= $('.counter .info-block').offset().top) {
  //       console.log(1);
  //       numPlus();
  //     }
  //   });
  
  // function numPlus() {
  //   setInterval(function() {
  //     $s = 0;
  //     while ($s > $num1) {
  //       document.querySelectorAll('.counter .info-block .block .number-counter span')[0].innerHTML = $s;
  //       $s++;
  //       console.log($s);
  //     }
  //   }, 10000);
  // }

