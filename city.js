$(function () {
  $('.par1').each(function (index) {
      $(this).css('left', index * 150)
      $(this).animate({ left: 1000 + (index * 150 + 200)})
  })
});