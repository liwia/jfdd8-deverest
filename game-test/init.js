var scoreNum = 0;

$(document).ready(function () {
    $('.startGame').click(function () {
       scoreNum = 0;
        $('.bubble').css('visibility', 'visible');
        $('.score').text(scoreNum);
    })

    $('.bubble').click(function() {
        $('.score').text(scoreNum +=10);
        $('.bubble').css({
            top: Math.random() * 300 + 500,
            left: Math.random() * 300 + 500
        });
        if (scoreNum === 100) {
            $('.bubble').css('visibility', 'hidden');
            $('.computer').text('You Win!').css({'opacity': '1', 'z-index': '0'});
            $('.startgame').text('Play Again?').css({'opacity': '1', 'z-index': '0'});
        }
    });
});

