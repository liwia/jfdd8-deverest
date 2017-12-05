$(function () {

    var colors = ['#555555', '#666666', '#777777', '#888888'];

    var elements = Array.from({ length: 4}, function (_, index) {
        index ++;

        var blocks = Array.from({ length: 550}, function (_, index2) {
            return $('<div>').css({
                height: Math.random() * 300,

                backgroundColor: colors[index -1],
                flex: 1
            })
        });

        var result = $('<div>')
            .addClass('par' + index).css('width', '5000%').css('display', 'flex').css('align-items', 'flex-end').append(blocks)
            ;

        function loop() {
          result.css('left', '-5000%' ).stop().animate({
                left: 1100 + ((index-1)  + 200)
            }, 10000 * (index + 1), 'linear', loop);
        }

        loop();

        return result;

    });
    $('.horizontal-parallax').append(elements);
});