        var map;
        var lat;
        var long;
function generateMap() {
  //$('#map').show();
  };


     function initMap(lat,long) {
  var myLatLng = {lat: lat, lng: long};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Location"
  });
  $('#map').append(map);
}



      function locSearch_Complete(result) {
    var lat = result.results[0].geometry.location.lat;
    var long = result.results[0].geometry.location.lng;
    place = result.results[0].address_components[1].short_name + "," +
        result.results[0].address_components[3].short_name;
    initMap(lat,long);
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
   var zip = $("#searchBox").val();
    console.log(zip);
    locSearch("", "", zip);
}


      $(function(){
         // $('#map').hide();
          $('#startBtn').on("click", getZip);
      });