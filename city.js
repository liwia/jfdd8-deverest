$(function () {
    var elements = Array.from({ length: 4}, function (_, index) {
        index ++;
        return $('<div>').addClass('par' + index).css('left', (index-1) * 150).animate({ left: 1000 + ((index-1) * 150 + 200)})
    })
    $('.horizontal-parallax').append(elements);
});