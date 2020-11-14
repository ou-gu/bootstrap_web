function initMap() {
  'use strict';
// グーグルマップで緯度、経度で表示させる方法
  let target = document.getElementById('target');
  let map;
  let 北谷 = {lat: 26.31608, lng: 127.757744};


  map = new google.maps.Map(target, {
    center: 北谷,
    zoom: 16
  });

  map.addListener('click', function(e) {
    let marker = new google.maps.Marker({
      position: e.latLng,
      map: map,
      title: e.latLng.toString(),
      animation: google.maps.Animation.DROP
    });
    marker.addListener('click', function() {
      this.setMap(null);
    });
  });
}