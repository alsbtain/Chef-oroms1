       var latitude=0;
       var longitude=0;
       	
    var dslan =0;
	var dslon =0;
	
	
	function setlan(lan){
		
		dslan =lan;
		
	}
	
	function setlog (logn) {
		 dslon =logn;
	  
	}
	
	function vip(){
	
  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(position){

    var map;
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
    var accuracy = position.coords.accuracy;
    var coords = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    var mapOptions = {
        zoom: 15,
        center: coords,
        mapTypeControl: true,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
        };


        map = new google.maps.Map(
            document.getElementById("map"), mapOptions
            );
        var marker = new google.maps.Marker({
                position: coords,
                map: map,
                title: "ok"
        });
        
        
        
        var directionsDisplay = new google.maps.DirectionsRenderer({
   			 map: map
  		});

 		 // Set destination, origin and travel mode.
 		 var from = {lat:position.coords.latitude, lng:longitude = position.coords.longitude};
 		 var to = {lat: dslan, lng: dslon};
 		 var request = {
  		  destination: to,
   		  origin: from,
   		  travelMode: google.maps.TravelMode.DRIVING
  		};

  // Pass the directions request to the directions service.
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      // Display the route on the map.
      directionsDisplay.setDirections(response);
    }
  });
        


 
function calcRoute() {
  var request = {
    origin:start,
    destination:end,
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
}
    },function error(msg){alert('Please enable your GPS position future.');  

  }, {maximumAge:600000, timeout:5000, enableHighAccuracy: true});

}else {
    alert("Geolocation API is not supported in your browser.");
}

}
