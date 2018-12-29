// Game Start
function game () {
    // Setting game functions
    // Random attack numbers from 1 ~ 20
    var randomAttack = Math.floor(Math.random() * 40) + 1;
    // setting counter attack amount
    var counterAttack = 15;




    // Health Counters
    var myHealth = 110;
    var enemyHealth = 100;


    // Player selects a starter by clicking on img, then becomes that character.
    // Selecting img tags with id
    var starters = $("#starters");
    var bulbasaur = $("#bulbasaur");
    var charmander = $("#charmander");
    var squirtle = $("#squirtle");

    // on click changes div to only selected pokemon
    bulbasaur.on("click", function () {
        starters.html('<img src="images/bulbasaur.png" id="bulbasaur" alt="bulbasaur">');
        // Setting Health for bulbasaur
        $("#pick-starter h3").text("HP: " + myHealth);
        enemyAppears();
    })
    charmander.on("click", function () {
        starters.html('<img src="images/charmander.png" id="charmander" alt="charmander">');
        // Setting Health for Charmander
        $("#pick-starter h3").text("HP: " + myHealth);
        enemyAppears();
    })
    squirtle.on("click", function () {
        starters.html('<img src="images/squirtle.png" id="squirtle" alt="squirtle">');
        // Setting Health for Squirtle
        $("#pick-starter h3").text("HP: " + myHealth);
        enemyAppears();
    })

    
    // function enemy appears

    function enemyAppears () {
        // Adding enemy portion of HTML
        $("#pick-enemy-attack").text("Pick Enemy to Defeat!");
        $("#pick-enemy").html(
            '<img src="images/golbat.png" id="golbat" alt="golbat">' +
            '<img src="images/koffing.png" id="koffing" alt="koffing">' + 
            '<img src="images/persian.png" id="persian" alt="persian">'  +
            '<img src="images/victreebel.png" id="victreebel" alt="victreebel">');

            // grabbing enemies that has been created & giving them properties
        var golbat = $("#golbat");
        var koffing = $("#koffing");
        var persian = $("#persian");
        var victreebel = $("#victreebel");

        // on click for different enemies

        golbat.on("click", function() {
            $("#pick-enemy-attack").replaceWith('<button id="attackBtn"> Attack! </button>');
            $("#enemy-selected").html('<div id="picked-enemy"> <img src="images/golbat.png" id="golbat" alt="golbat"> <h3 id="enemy-health"> HP: ' + enemyHealth + ' </h3> </div>');
            golbat.remove();
         
            
        })
        koffing.on("click", function() {
            $("#pick-enemy-attack").replaceWith('<button id="attackBtn"> Attack! </button>');
            $("#enemy-selected").html('<div id="picked-enemy">  <img src="images/koffing.png" id="koffing" alt="koffing"> <h3 id="enemy-health"> HP: ' + enemyHealth + '</h3> </div>');
            koffing.remove();
       
        })
        persian.on("click", function() {
            $("#pick-enemy-attack").replaceWith('<button id="attackBtn"> Attack! </button>');
            $("#enemy-selected").html('<div id="picked-enemy"> <img src="images/persian.png" id="persian" alt="persian"> <h3 id="enemy-health"> HP: ' + enemyHealth + '</h3> </div>');
            persian.remove();
       
        })
        victreebel.on("click", function() {
            $("#pick-enemy-attack").replaceWith('<button id="attackBtn"> Attack! </button>');
            $("#enemy-selected").html('<div id="picked-enemy"> <img src="images/victreebel.png" id="victreebel" alt="victreebel"> <h3 id="enemy-health"> HP: ' + enemyHealth + ' </h3> </div>');
            victreebel.remove();
      
        })

       
    }


    // attack button function 

    function attackBtn (myHealth, enemyHealth, attack, counterAttack) {
        myHealth -= counterAttack;
        enemyHealth -= attack;
        $("#pick-starter h3").text("HP: " + myHealth);
        $("#enemy-health").text("HP: " + enemyHealth);
    }

    // Game Logic 



}

game();