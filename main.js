let search = document.querySelector('#keyword');
const button = document.querySelector('#bouton');
const liste = document.querySelector('.list');
const body = document.querySelector('body');

let ytemp = [];
let xdate = [];


let temperature = [];
let date = [];


button.addEventListener('click', (event)=>{
    event.preventDefault();
    let recherche = search.value;
    liste.innerHTML = "";
    let url = 'http://api.openweathermap.org/data/2.5/forecast?q='+ recherche +'&units=metric&appid=bfe0f70e0b20b22795cd09a72dc6dc9a&lang=fr';
    //let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ recherche +'&units=metric&appid=bfe0f70e0b20b22795cd09a72dc6dc9a&lang=fr';

    fetch(url)
    .then(response => response.json()).then(data => {
       const { list, city } = data;

       getGraph(list[0].dt_txt,list[1].dt_txt,list[2].dt_txt, list[3].dt_txt, list[4].dt_txt, list[5].dt_txt, 
         list[0].main.temp, list[1].main.temp, list[2].main.temp, list[3].main.temp, list[4].main.temp, list[5].main.temp );
        console.log(list[0].dt_txt)
        console.log(list[0].main.temp)

      
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        list[0].weather[0].icon}.svg`;
      const icon1 = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        list[1].weather[0].icon}.svg`;
      const icon2 = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        list[2].weather[0].icon}.svg`;
      const icon3 = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        list[3].weather[0].icon}.svg`; 
      const icon4 = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        list[4].weather[0].icon}.svg`;   
      
      
      liste.insertAdjacentHTML('beforeend', `
      <ul>
        <li>
        <h3 class="city-name" data-name="${city.name},${city.country}">
          <span>${city.name}</span>
          <sup>${city.country}</sup>
        </h3>
        <div class="city-temp">${Math.round(data.list[0].main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon}">
          <figcaption>${data.list[0].weather[0].description}</figcaption>
        </figure>
        </li>

        <li>
        <h3 class="city-name" data-name="${city.name},${city.country}">
          <span>${city.name}</span>
          <sup>${city.country}</sup>
        </h3>
        <div class="city-temp">${Math.round(data.list[1].main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon1}">
          <figcaption>${data.list[1].weather[0].description}</figcaption>
        </figure>
        </li>

        <li>
        <h3 class="city-name" data-name="${city.name},${city.country}">
          <span>${city.name}</span>
          <sup>${city.country}</sup>
        </h3>
        <div class="city-temp">${Math.round(data.list[2].main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon2}">
          <figcaption>${data.list[2].weather[0].description}</figcaption>
        </figure>
        </li>

        <li>
        <h3 class="city-name" data-name="${city.name},${city.country}">
          <span>${city.name}</span>
          <sup>${city.country}</sup>
        </h3>
        <div class="city-temp">${Math.round(data.list[3].main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon3}">
          <figcaption>${data.list[3].weather[0].description}</figcaption>
        </figure>
        </li>

        <li>
        <h3 class="city-name" data-name="${city.name},${city.country}">
          <span>${city.name}</span>
          <sup>${city.country}</sup>
        </h3>
        <div class="city-temp">${Math.round(data.list[4].main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon4}">
          <figcaption>${data.list[4].weather[0].description}</figcaption>
        </figure>
        </li>
      </ul>

      `);
   getMap(data.city.coord.lat, data.city.coord.lon);               
        });
      search.value = "";


});
        