$(function () {
    var elements = Array.from({ length: 4}, function (_, index) {
        index ++;

        var result = $('<div>')
            .addClass('par' + index)
            ;

        function loop() {
          result.css('left', -100 ).animate({
                left: 1000 + ((index-1)  + 200)
            }, 2000 * index, 'linear', loop);
        }

        loop()

        return result;

    })
    $('.horizontal-parallax').append(elements);
});