// Initialize and add the map
function initMap() {
  // The location of Bushy Park
  var bushy = {lat: 51.416531, lng: -0.339817};
  // The map, centered at Bushy Park
  var map = new google.maps.Map(
      document.getElementById("map"), {zoom: 11, center: bushy, mapTypeId: "terrain"});
  // The marker, positioned at Bushy Park
  var marker = new google.maps.Marker({position: bushy, map: map});

//  var bikeLayer = new google.maps.BicyclingLayer();
//        bikeLayer.setMap(map);

  // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

// Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
       
      }
var locations = [
        {lat: 51.446531, lng: -0.359817},
        {lat: 51.466531, lng: -0.379817},
        {lat: 51.456531, lng: -0.369817},
        {lat: 51.456531, lng: -0.379817}
      ]

// Email send functon strts here----------------->
function sendMail(contactForm) {
    emailjs.send("gmail", "mtb_tours", {
        "first_name": contactForm.fname.value,
        "last_name": contactForm.lname.value,
        "from_email": contactForm.emailaddress.value,
        "contact_no": contactForm.contactno.value,
        "message_text": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}