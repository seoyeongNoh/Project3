function initMap(){
  var school = {lat: 37.541625, lng: 127.079475};
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 16, center: school
    }
  );
  var marker = new google.maps.Marker({
    position: school,
    map: map
  });
}