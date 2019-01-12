//When Page loads random Number is generated 20 ~ 120.
//When Page loads each crystal will be given a random value between 1 ~ 15.
//clicking each crystal will add to "Your score is" value
//If you hit the random number value, You win, then add 1 to Wins.
//If you go over the number, You lose, then add 1 to Loss.
//Click reset button to play again.

var game = {
    // object variables
    randomNumber: (Math.floor(Math.random()*100)+20),
    blueCrystal: (Math.floor(Math.random()*15)+1),
    purpleCrystal: (Math.floor(Math.random()*15)+1),
    diamondCrystal: (Math.floor(Math.random()*15)+1),
    whiteCrystal: (Math.floor(Math.random()*15)+1),

    score: 0,
    winCounter: 0,
    lossCounter: 0,

    // load method
    load: function () {
        $("#random-number").text(this.randomNumber);
    },
    //click method
    click: function () {
        var blueClick = $("#blue-crystal");
        var purpleClick = $("#purple-crystal");
        var diamondClick = $("#diamond-crystal");
        var whiteClick = $("#white-crystal");
        var that = this;
        blueClick.on("click", function () {
            that.score += parseInt(that.blueCrystal);
            $("#score").text(that.score);
            if(that.randomNumber === that.score) {
                that.win();
            } else if(that.score > that.randomNumber) {
                that.lose();
            }
        })
        purpleClick.on("click", function () {
            that.score += parseInt(that.purpleCrystal);
            $("#score").text(that.score);
            if(that.randomNumber === that.score) {
                that.win();
            } else if(that.score > that.randomNumber) {
                that.lose();
            }
        })
        diamondClick.on("click", function () {
            that.score += parseInt(that.diamondCrystal);
            $("#score").text(that.score);
            if(that.randomNumber === that.score) {
                that.win();
            } else if(that.score > that.randomNumber) {
                that.lose();
            }
        })
        whiteClick.on("click", function () {
            that.score += parseInt(that.whiteCrystal);
            $("#score").text(that.score);
            if(that.randomNumber === that.score) {
                that.win();
            } else if(that.score > that.randomNumber) {
                that.lose();
            }
        })
        return that.score;
    },
    //win method
    win: function () {
        alert("You Win!");
        this.winCounter++;
        $("#win").text(this.winCounter);
        game.reset();
        game.load();
        game.click();
    },
    // lose method
    lose: function() {
        alert("You Lost!");
        this.lossCounter++;
        $("#loss").text(this.lossCounter);
        game.reset();
        game.load();
        game.click();
    },
    // Reset method
    reset: function() {
        this.randomNumber = (Math.floor(Math.random()*100)+50);
        this.blueCrystal = (Math.floor(Math.random()*15)+1);
        this.purpleCrystal = (Math.floor(Math.random()*15)+1);
        this.diamondCrystal = (Math.floor(Math.random()*15)+1);
        this.whiteCrystal = (Math.floor(Math.random()*15)+1);
        this.score = 0;
        $("#score").text(0);
    },

    resetBtn: function () {
        $("#reset-btn").on("click", function() {
            this.reset();
            $("#win").text("");
            $("#loss").text("");
        })
    }
}


// Run game object methods to start
game.load();
game.click();
