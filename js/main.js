'use strict';
// 画像の配列


const curryImages = [
  'img/curry/curry-02.jpg',
  'img/curry/curry-03.jpg',
  'img/curry/curry-04.jpg'
];

let currentIndex = 0;
//   mainのIdを取得して画像の表示
const mainImage = document.getElementById('curryImg');
mainImage.src =curryImages[currentIndex]
// const mainImage = mainImg;
mainImage.src = curryImages[currentIndex];
//   imgのIdを取得した,thumbnailsにliの子要素を追加する
curryImages.forEach((image, index) => {
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

// cc's chicken
// const cheickenImages = [
//   'img/chicken/chicken-01.jpg',
//   'img/chicken/chicken-02.jpg',
//   'img/chicken/chicken-03.jpg'
// ];

// let Index = 0;
// //   mainのIdを取得して画像の表示
// const mainImage = document.getElementById('chickenImg');
// mainImage.src = cheickenImages[currentIndex]
// // const mainImage = mainImg;
// mainImage.src = cheickenImages[currentIndex];
// //   imgのIdを取得した,thumbnailsにliの子要素を追加する
// cheickenImages.forEach((image, index) => {
//   const img = document.createElement('img');
//   img.src = image;
  
//   const li = document.createElement('li');
//   // 表示されている画像にcurrentクラスを付けてる
//   if (index === currentIndex) {
//     li.classList.add('current');
//   }
//   // 今あるcurrentクラスを外して、クリックした画像に追加する
//   li.addEventListener('click', () => {
//     mainImage.src = image;
//     const thumbnails = document.querySelectorAll('.thumbnails > li');
//     thumbnails[currentIndex].classList.remove('current');
//     currentIndex = index;
//     thumbnails[currentIndex].classList.add('current');
//   });
  
//   li.appendChild(img);
//   document.querySelector('.thumbnails').appendChild(li);
//   li.classList.add('col-4')
// });


// const curryImages = [
//   'img/curry/curry-02.jpg',
//   'img/curry/curry-03.jpg',
//   'img/curry/curry-04.jpg'
// ];

// let currentIndex = 0;
// //   mainのIdを取得して画像の表示
// const mainImage = document.getElementById('curryImg');
// mainImage.src =curryImages[currentIndex]
// // const mainImage = mainImg;
// mainImage.src = curryImages[currentIndex];
// //   imgのIdを取得した,thumbnailsにliの子要素を追加する
// curryImages.forEach((image, index) => {
//   const img = document.createElement('img');
//   img.src = image;

//   const li = document.createElement('li');
//   // 表示されている画像にcurrentクラスを付けてる
//   if (index === currentIndex) {
//     li.classList.add('current');
//   }
//   // 今あるcurrentクラスを外して、クリックした画像に追加する
//   li.addEventListener('click', () => {
//     mainImage.src = image;
//     const thumbnails = document.querySelectorAll('.thumbnails > li');
//     thumbnails[currentIndex].classList.remove('current');
//     currentIndex = index;
//     thumbnails[currentIndex].classList.add('current');
//   });

//   li.appendChild(img);
//   document.querySelector('.thumbnails').appendChild(li);
//   li.classList.add('col-4')
// });



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