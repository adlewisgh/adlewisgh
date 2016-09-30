var value;
var num;

function blah (){

}

function backgroundChangeOne (){
    $("#inputOne").css("background-color","red");
    console.log("working");
}


function guessCheck (num){

//if (valueOne!=num){
   // backgroundChangeOne(num);

   // console.log(valueOne);
    console.log(num);
//}
};


function inputValue(num){
    var valueOne = $("#inputOne").val();
   guessCheck(valueOne);
   
    
}



function generateNum (){
//var num = Math.floor(Math.random() * 10) + 0;
var num = 4;
guessCheck(num);

};


/*
function startEvent (){
generateNum();
}
*/

$(function () {
    $("#startBtn").on("click", generateNum);
    $("#checkBtn").on("click", inputValue);
    
});