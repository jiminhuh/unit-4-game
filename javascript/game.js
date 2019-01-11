//When Page loads random Number is generated 50 ~ 100.
//When Page loads each crystal will be given a random value between 1 ~ 15.
//clicking each crystal will add to "Your score is" value
//If you hit the random number value, You win, then add 1 to Wins.
//If you go over the number, You lose, then add 1 to Loss.
//Click reset button to play again.

var game = {
    randomNumber: (Math.floor(Math.random()*100)+50),
    blueCrystal: (Math.floor(Math.random()*15)+1),
    purpleCrystal: (Math.floor(Math.random()*15)+1),
    diamondCrystal: (Math.floor(Math.random()*15)+1),
    whiteCrystal: (Math.floor(Math.random()*15)+1),

    score: 0,

    load: function () {
        $("#random-number").text(this.randomNumber);
    },

    click: function () {
        var blueClick = $("#blue-crystal");
        var purpleClick = $("#purple-crystal");
        var diamondClick = $("#diamond-crystal");
        var whiteClick = $("#white-crystal");
        console.log(this.blueCrystal);
        blueClick.on("click", function () {
            this.score += parseInt(this.blueCrystal);
            $("#score").text(this.score);
            console.log(this.score);
        })

        
    }
}

game.load();
game.click();