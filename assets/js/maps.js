// Initialize and add the map
function initMap() {
  // The location of Bushy Park
  var bushy = {lat: 51.416531, lng: -0.339817};
  // The map, centered at Bushy Park
  var map = new google.maps.Map(
      document.getElementById("map"), {zoom: 11, center: bushy});
  // The marker, positioned at Bushy Park
  var marker = new google.maps.Marker({position: bushy, map: map});
}
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