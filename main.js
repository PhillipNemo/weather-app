// variable names
const weatherInfo = document.getElementById("weather-info")

const input = document.getElementById("input")
const btn = document.getElementById("btn")

const currentDate = document.getElementById("date")

const wicon = document.getElementById("wicon")

const country = document.getElementById("country")
const cityName = document.getElementById("name")
const main = document.getElementById("main")
const degree = document.getElementById("degree");
const weatherIcon = document.getElementById("weather-icon");




// generate random images
let images =[
  "images/anthony-delanoix-__TFY6uE-L8-unsplash.jpg",
  "images/freddie-marriage-mYOea-xnu-k-unsplash.jpg",
  "images/jack-finnigan-aEkk0KxvPpg-unsplash.jpg",
  "images/michael-d-jSADgWPmKDU-unsplash.jpg",
  "images/roman-burki-zeM4eTle8GY-unsplash.jpg",
  "images/andrea-cau-nV7GJmSq3zc-unsplash.jpg",
  "images/henning-witzel-ukvgqriuOgo-unsplash.jpg",
  "images/jc-gellidon-Khqmo4T-rs0-unsplash.jpg",
  "images/jezael-melgoza-layMbSJ3YOE-unsplash.jpg",
  "images/jonathan-roger-LY1eyQMFeyo-unsplash.jpg",
  "images/malte-schmidt-enGr5YbjQKQ-unsplash.jpg",
  "images/matt-jones-9CPAjGVB378-unsplash.jpg",
  "images/max-bender-VmX3vmBecFE-unsplash.jpg",
  "images/pedro-lastra-Nyvq2juw4_o-unsplash.jpg",
  "images/tom-podmore-QVL_wWwxwlQ-unsplash.jpg",
  "images/tom-podmore-sg4SBLu2e48-unsplash.jpg",
  "images/tom-podmore-V2-zg6lu9C4-unsplash.jpg",
  "images/yeshi-kangrang-wTD1-_u8x1g-unsplash.jpg"
];

// function that generate random images
 function getRandomImage() {
  let randomIndex = Math.floor(Math.random() * images.length);
  let randomImage = images[randomIndex];
  return randomImage;
 }

//weather app key

const apiKey ="6aed2792cce896f83d9a9b7fcd1b9866";


//fetching weather api file

btn.addEventListener("click", function (){

  
  
  const word= input.value;
  weatherInfo.className="container";
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=${apiKey}&units=metric`;
  
  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    appendData(data)
    let randomImage = getRandomImage()
    body.style.backgroundImage="url(' " + randomImage + " ')"
      // console.log(data)
    })
    .catch(function(err) {
       console.log("error");
    });

})

//getting dates

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
  
  
 //appending api file into html 
function appendData(data) {

main.innerHTML = `${data.weather[0].description}`;

currentDate.innerHTML =`${n.toUpperCase()} ${d.getDate()}, ${d.getFullYear()}.`;

cityName.innerHTML = `${data.name}`;

country.innerHTML = `${data.sys.country}`;

let icon = `${data.weather[0].icon}`;

wicon.src=` http://openweathermap.org/img/w/${icon}.png `;

degree.innerHTML =`${Math.floor(data.main.temp)}°C</div>`
input.value=" ";
}