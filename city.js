$(function () {


    var container = $('.horizontal-parallax');

    var colors = ['#01110E', '#12221F', '#23332F', '#34443F'];

    var elements = Array.from({ length: 4}, function (_, index) {
        index ++;

        var blocks = Array.from({ length: 900}, function (_, index2) {
            return $('<div>').css({
                height: Math.random() * 300,
                backgroundColor: colors[index -1],
                flex: 1
            })
        });

        var result = $('<div>')
            .addClass('par' + index).css('width', container.width() * 50).css('display', 'flex').css('align-items', 'flex-end').append(blocks)
            ;

        function loop() {
            // debugger
          result.stop().css('left', -container.width() * 50).animate({
                left: 1300 + ((index-1))
            }, 150000 * (index + 1), 'linear', loop)
        }
        loop();


        return result;

    });
    container.append(elements);
});

