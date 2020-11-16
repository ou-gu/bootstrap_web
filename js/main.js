'use strict';
// 画像の配列


const curryImages = [
  'img/curry/curry-02.jpg',
  'img/curry/curry-03.jpg',
  'img/curry/curry-04.jpg'
];

const chickenImages = [
  'img/chicken/chicken-01.jpg',
  'img/chicken/chicken-02.jpg',
  'img/chicken/chicken-03.jpg'
];
const pizzaImages = [
  'img/pizza/pizza-01.jpg',
  'img/pizza/pizza-02.jpg',
  'img/pizza/pizza-03.jpg'
];

thumbnailChanger(curryImages,'curryImg');
thumbnailChanger(chickenImages,'chickenImg');
thumbnailChanger(pizzaImages,'pizzaImg');

function thumbnailChanger(images,target_name){

  let currentIndex = 0;
  //   mainのIdを取得して画像の表示
  const mainImage = document.getElementById(target_name);
  mainImage.src =images[currentIndex]
  // const mainImage = mainImg;
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
      const thumbnails = document.querySelectorAll('.'+ target_name +'.thumbnails > li');
      thumbnails[currentIndex].classList.remove('current');
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current');
    });
    
    li.appendChild(img);
    document.querySelector('.'+ target_name +'.thumbnails').appendChild(li);
    li.classList.add('col-4')
  });

}




function initMap() {

// グーグルマップで緯度、経度で表示させる方法
let target = document.getElementById('target');
let map;
let カスタマンダップ = {lat: 26.298402, lng: 127.760786};
let marker;


  map = new google.maps.Map(target, {
    center: カスタマンダップ,
    zoom: 14,
    disableDefaultUI: true,
    zoomControl: true
  });

  marker = new google.maps.Marker({
    position: カスタマンダップ,
    map: map,
    title: 'カスタマンダップ(北谷店)',
    animation: google.maps.Animation.DROP
  });



  // map.addListener('click', function(e) {
  //   let marker = new google.maps.Marker({
  //     position: e.latLng,
  //     map: map,
  //     title: e.latLng.toString(),
  //     animation: google.maps.Animation.DROP
  //   });
  //   marker.addListener('click', function() {
  //     this.setMap(null);
  //   });
  // });

}