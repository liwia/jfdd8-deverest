$(document).ready(function () {
    var scoreNum = 0;
    var bubble = $('.bubble');
    var interval;
    var stopInterval;

    $('.startGame').click(function () {
        scoreNum = 0;
        $('.scoreBoard').css('visibility', 'visible');
        $('.timeBoard').css('visibility', 'visible');
        bubble.css('visibility', 'visible');
        $('.score').text(scoreNum);
        var time = 30;
        clearInterval(interval);
        interval = setInterval(function () {
            if (time === 0) {
                $('.startGame').text('Play Again?').css({'opacity': '1', 'z-index': '0', 'height': '70px'});
                bubble.css('visibility', 'hidden');
            }
            $('.timer').text(time--)
            ;
        }, 1000);
            clearInterval(stopInterval);
            stopInterval = setInterval(function () {
            var maxHeight = bubble.parent().height() - bubble.height();
            var maxWidth = bubble.parent().width() - bubble.width();
            bubble.css({
                top: Math.random() * maxHeight,
                left: Math.random() * maxWidth
            });
        }, 1000);
    });




    bubble.click(function () {
        $('.score').text(scoreNum += 10);
        if (scoreNum === 1000) {
            bubble.css('visibility', 'hidden');
            $('.toWin').text('You Win!').css({'opacity': '1', 'z-index': '0'});
        }
    });

});



