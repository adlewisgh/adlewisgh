var place;
var map;


      function initMap(lat, long) {
        map = new google.maps.Map(document.getElementById('#map'), {
          center: {lat:lat, lng:long},
          zoom: 8
        });
      }
   
    

function locSearch_Complete(result) {
    var lat = result.results[0].geometry.location.lat;
    var long = result.results[0].geometry.location.lng;
    place = result.results[0].address_components[1].short_name + "," +
        result.results[0].address_components[3].short_name;
console.log(lat,long);
   initMap(lat, long);
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



function getZip (){
var zip = $("#zipCode").val();
    console.log(zip);
  locSearch("", "", zip);
  
}



$(function(){
$('#searchBtn').on("click", getZip);
});