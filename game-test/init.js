var scoreNum = 0;

$(document).ready(function () {
    var bubble = $('.bubble');
    $('.startGame').click(function () {
        scoreNum = 0;
        bubble.css('visibility', 'visible');
        $('.score').text(scoreNum);
    })


    var stopInterval = setInterval(function(){
        var maxHeight = bubble.parent().height() - bubble.height();
        var maxWidth = bubble.parent().width() - bubble.width();
        bubble.css({
            top: Math.random() * maxHeight,
            left: Math.random() * maxWidth
        });
    }, 1000);

    bubble.click(function() {
        $('.score').text(scoreNum +=10);


        // $('.bubble').css({
        //     top: Math.random() * 300 + 500,
        //     left: Math.random() * 900 + 350
        // });

        if (scoreNum === 1000) {
            bubble.css('visibility', 'hidden');
            $('.toWin').text('You Win!').css({'opacity': '1', 'z-index': '0'});
            $('.startgame').text('Play Again?').css({'opacity': '1', 'z-index': '0'});
        }
    });
});

