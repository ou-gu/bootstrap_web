'use strict';

// 画像の配列
const images = [
  'img/curry/curry-02.jpg',
  'img/curry/curry-03.jpg',
  'img/curry/curry-04.jpg'
];

// function mainContentsImg() {
  let currentIndex = 0;

  //   mainのIdを取得して画像の表示
  const mainImage = document.getElementById('main-img');
  mainImage.src = images[currentIndex];

  //   imgのIdを取得した,thumbnailsにliの子要素を追加する
  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;
    
    const li = document.createElement('li');
    // 表示されている画像にcurrentクラスを付けてる
    if (index === currentIndex) {
      li.classList.add('current');
    }
    // 今あるcurrentクラスを外して、クリックした画像に追加する
    li.addEventListener('click', () => {
      mainImage.src = image;
      const thumbnails = document.querySelectorAll('.thumbnails > li');
      thumbnails[currentIndex].classList.remove('current');
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current');
    });
    
    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li);
    li.classList.add('col-4')
  });
// }


function initMap() {

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