


//Making Input Require Numeric Value Only//

function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

//Generating and Replacing Tip Amount

function generate(tipAmount) {

    var replace = $("#tipValue").html().replace('Amount', tipAmount);
    $("#tipValue").html(replace);
    $('#tipValue').css('visibility','visible');

}

//Calculating Tip Amount//

function calculation() {
    var bill = $("#bill").val()
    var share = $("#share").val()
    var tipAmount = Math.round(bill * percentage / share);

    if (bill != 0 && share != 0) {

        console.log(tipAmount);
        generate(tipAmount);
    }
};

//Getting Percentage//

function menuValue() {
    var menu = $("#menu").val()
    if (menu == "15%") {
        percentage = 0.15;
        calculation(percentage);
    }
    else if (menu == "30%") {
        percentage = 0.30;
        calculation(percentage);
    }
    else if (menu == "5%") {
        percentage = .05;
        calculation(percentage);
    }
    else {

    }
};

//Click Event//

$(function () {
    $("#calculateButton").on("click", menuValue);
    $('#clearButton').click(function () {
        location.reload();
    });
});