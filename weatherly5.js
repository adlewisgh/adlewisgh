var place;



function locSearch_Complete(result) {
    var lat = result.results[0].geometry.location.lat;
    var long = result.results[0].geometry.location.lng;
    place = result.results[0].address_components[1].short_name + "," +
        result.results[0].address_components[3].short_name;
    retrieveData(lat, long);

}

function locSearch(city, state, address) {

    var addLocation = "";
    if (address.length != 0) {
        addLocation = address.trim();
    }
    else if (city.length != 0 && state != 0) {
        addLocation = city.trim() + ", " + state;
    }
    else {
        return;
    }


    var googleTag = "https://maps.googleapis.com/maps/api/geocode/json?address=" + addLocation + "&key=AIzaSyBZfkXozgEve7U6AezGLYljEVMRR-EFUuo";

    var request = {
        url: googleTag,
        success: locSearch_Complete
    };

    $.ajax(request);
}


function searchPlace_click() {
    var zip = $("#loc").val();
    locSearch("", "", zip);
    
}

function remove2(){
   
}

function remove(){
    $('#templateDiv').last().remove();
}

$(function () {
    $("#searchPlace").on("click", searchPlace_click);
    $("#remove").on("click", remove);
});



function retrieveData(lat, long) {
    var dSky = "https://api.darksky.net/forecast/ed7be92607845014ac1b22c8b2dcb545/" + lat + "," + long;
    var weatherResults = {
        url: dSky,
        dataType: "jsonp",
        success: dataRetrievalSuccess
    };

    $.ajax(weatherResults);
}


function dataRetrievalSuccess(result) {
    console.log("It is currently " + result.timezone + ".");

    var stats = {
        time: new Date(result.currently.time * 1000),
        lrgTemp: Math.round((result.currently.temperature)) + "&deg",
        crntCond: (result.currently.summary),
        tempMin: Math.round((result.daily.data[0].temperatureMin)) + "&deg",
        rainChance: (result.daily.data[0].precipProbability),
        maxTemp: Math.round((result.daily.data[0].temperatureMax)) + "&deg",
        minText: ("Low"),
        rainChancetext: ("Precipitation"),
        maxText: ("High"),
        icon: (result.currently.icon)
    };

    displayDiv(stats);

}

function createDiv(stats) {
    var objectData = $("#divA").html();

    objectData = objectData.replace("@@place@@", place);
    objectData = objectData.replace("@@precipitation%@@", stats.rainChance + "%");
    objectData = objectData.replace("@@highTemp@@", stats.maxTemp);
    objectData = objectData.replace("@@low@@", stats.minText);
    objectData = objectData.replace("@@temperature@@", stats.lrgTemp);
    objectData = objectData.replace("@@summary@@", stats.crntCond);
    objectData = objectData.replace("@@lowTemp@@", stats.tempMin);
    objectData = objectData.replace("@@precipitation@@", stats.rainChancetext);
    objectData = objectData.replace("@@high@@", stats.maxText);
    objectData = objectData.replace("@@class@@", stats.icon);
    return objectData;

}

function displayDiv(objectData) {
    var html = createDiv(objectData);
    $('#divB').append(html);



};




