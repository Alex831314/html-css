// Реализуем Появление Иконки при Скроле
// Ловим событие начала Скрола
$(window).scroll(function () {
  let scrolled = $(window).scrollTop();

  // console.log(scrolled);
      // Появление "кнопки" после Трёх прокруток (вниз)/300 (пикселей)
  if (scrolled > 300) {
    $('#back_to_tap').addClass('active');
  } else {
    $('#back_to_tap').removeClass('active');
  }
});
    // и Само Срабатывание "Скрола" через 1500 мс, т.е. полторы секунды
$('#back_to_tap').click(function () {
  $('body, html').animate({ scrollTop: 0 }, 1500);
});
