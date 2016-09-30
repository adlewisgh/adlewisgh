//Create a variable to hold the answer.
var answer;
var answer2;
var answer3;
// Set up the game.
function setupGame() {
    //Clear out old values.
    $('#inputOne').val(" ");
    $("#message").val(" ");

    // come up with the answer.
    answer = parseInt(Math.random() * 10);
    console.log("Cheater! Don't you dare enter " + answer);
    answer2 = parseInt(Math.random() * 10);
    console.log("Cheater! Don't you dare enter " + answer2);
    answer3 = parseInt(Math.random() * 10);
    console.log("Cheater! Don't you dare enter " + answer3);

    //Hide Show the approptriate divs.
    $('#intro').show();
    $('#game').hide();

}
// handle the guess.
function handleGuess() {
    var guess = $('#inputOne').val();
    var guess2 = $('#inputTwo').val();
    var guess3 = $('#inputThree').val();
    if (+guess == answer) {
        //tell them the answer is right
       $("#inputOne").css("background-color","green");
        
    }

     else if (+guess == answer2){
         $("#inputOne").css("background-color","yellow");
    }
    else if (+guess == answer3){
        $("#inputOne").css("background-color","yellow");
    }

   else if (+guess != answer || answer2 || answer3){
        $("#inputOne").css("background-color","red");
   }


  
    if (+guess2 == answer) {
        //tell them the answer is right
       $("#inputTwo").css("background-color","yellow");
    }
     else if (+guess2 == answer2){
         $("#inputTwo").css("background-color","green");
    }
    else if (+guess2 == answer3){
        $("#inputTwo").css("background-color","yellow");
    }

   else if (+guess2 != answer || answer2 || answer3){
        $("#inputTwo").css("background-color","red");
   }


if (+guess3 == answer) {
        //tell them the answer is right
       $("#inputThree").css("background-color","yellow");
    }
     else if (+guess3 == answer2){
         $("#inputThree").css("background-color","yellow");
    }
    else if (+guess3 == answer3){
        $("#inputThree").css("background-color","green");
    }

   else if (+guess3 != answer || answer2 || answer3){
        $("#inputThree").css("background-color","red");
   }
        

        if(+guess == answer && +guess2 == answer2 && +guess3 == answer3){
            console.log("You're win!");
        }
}

// set up the page for the game.
function playGame() {
    $('#intro').hide();
    $('#game').show();
}

//when the page loads, setup the game.
$(function () {

    //wire up event handlers.
    $('#startGame').on("click", playGame);
    $('#checkBtn').on("click", handleGuess);

    // Start the game.
    setupGame();
});