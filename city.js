$(function () {

  $('.par1').each(function (index) {
      $(this).css('left', index * 150);
      $(this).animate({ left: 1000 + (index * 150 + 200)})
  });


    $('.par2').each(function (index) {
        $(this).css('left', index * 150);
        $(this).animate({ left: 1000 + (index * 150 + 200)})
    });

    $('.par3').each(function (index) {
        $(this).css('left', index * 150);
        $(this).animate({ left: 1000 + (index * 150 + 200)})
    });

    $('.par4').each(function (index) {
        $(this).css('left', index * 150);
        $(this).animate({ left: 1000 + (index * 150 + 200)})
    });
});