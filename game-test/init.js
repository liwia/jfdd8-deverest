$(document).ready(function () {
    var scoreNum = 0;
    var bubble = $('.bubble');
    var timerInterval;
    var bubbleInterval;

    $('.startGame').click(function () {
        scoreNum = 0;
        $('.scoreBoard').css('visibility', 'visible');
        $('.timeBoard').css('visibility', 'visible');
        bubble.css('visibility', 'visible');
        $('.score').text(scoreNum);
        $('.toWin').text('CLICK AS MANY PARTY BUBBLES AS YOU CAN!');

        var time = 30;
        clearInterval(timerInterval);
        timerInterval = setInterval(function () {
            time--;
            $('.timer').text(time);
            if (time === 0) {
                clearInterval(timerInterval);
                $('.startGame').text('Play Again?').css({'opacity': '1', 'z-index': '0', 'height': '70px'});
                bubble.css('visibility', 'hidden');
                showScore();
            }

        }, 1000);

        clearInterval(bubbleInterval);
        bubbleInterval = setInterval(function () {
            var maxHeight = bubble.parent().height() - bubble.height();
            var maxWidth = bubble.parent().width() - bubble.width();
            bubble.css({
                top: Math.random() * maxHeight,
                left: Math.random() * maxWidth
            });
        }, 1000);
    });


    function showScore() {

        if (scoreNum < 100) {
            $('.toWin').text('YOUR SCORE IS: ' + scoreNum + " - COULD BE BETTER")
        }
        else if (scoreNum < 200 && scoreNum > 100) {
            $('.toWin').text('YOUR SCORE IS: ' + scoreNum + " - QUITE WELL")
        }
        else if (scoreNum > 200) {
            $('.toWin').text('YOUR SCORE IS: ' + scoreNum + " - ARE YOU CHUCK NORRIS?")
        }
    }


    bubble.click(function () {
        $('.score').text(scoreNum += 10);

    });

});




