// Initialize and add the map
function initMap() {
  // The location of Uluru
  var bushy = {lat: 51.416531, lng: -0.339817};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 5, center: bushy});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: bushy, map: map});
}