function initMap() {
  var uluru = {lat: 46.2929245, lng: 16.3725107};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
  var infowindow = new google.maps.InfoWindow({
  content:"<img src='images/googlemaps.png' width='135' height='75' /><br>ELMMATIC d.o.o.<br>Marofska ul. 9, 42000,<br> Kućan Marof"
});

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
});
infowindow.open(map,marker);
}