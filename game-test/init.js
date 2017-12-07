var scoreNum = 0;

$(document).ready(function () {
    $('.startGame').click(function () {
        scoreNum = 0;
        $('.scoreBoard').css('visibility', 'visible');
        $('.timeBoard').css('visibility', 'visible');
        $('.bubble').css('visibility', 'visible');
        $('.score').text(scoreNum);

        var time = 30;
        var interval = setInterval(function () {
            if (time === 0) {
                clearInterval(interval);
            $('.startGame').text('Play Again?').css({'opacity': '1', 'z-index': '0', 'height': '70px'});
                $('.bubble').css('visibility', 'hidden');
            }
            $('.timer').text(time--)
            ;
        }, 100);
    });

    $('.bubble').click(function () {
        $('.score').text(scoreNum += 10);
        $('.bubble').css({
            top: Math.random() * 300 + 500,
            left: Math.random() * 300 + 500
        });
        if (scoreNum === 1000) {
            $('.bubble').css('visibility', 'hidden');
            $('.toWin').text('You Win!').css({'opacity': '1', 'z-index': '0'});
        }
    });
});

