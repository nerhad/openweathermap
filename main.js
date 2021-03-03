let search = document.querySelector('#keyword');
const button = document.querySelector('#bouton');
const liste = document.querySelector('#list');
const body = document.querySelector('body');

const tableauTemperatures = [];
const tableauDates = [];


button.addEventListener('click', (event)=>{
    event.preventDefault();
    let recherche = search.value;
    liste.innerHTML = "";
    let url = 'http://api.openweathermap.org/data/2.5/forecast?q='+ recherche +'&units=metric&appid=bfe0f70e0b20b22795cd09a72dc6dc9a&lang=fr';
    //let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ recherche +'&units=metric&appid=bfe0f70e0b20b22795cd09a72dc6dc9a&lang=fr';

fetch(url).then(response => response.json()).then( (data) => {
         liste.insertAdjacentHTML('beforeend', `
                   <li>
                      <h3>la temperature ${data.list[0].main.temp}° ${data.list[1].main.temp}° ${data.list[2].main.temp}° ${data.list[3].main.temp}° ${data.list[4].main.temp}° ${data.list[5].main.temp}°</h3>
                   </li>`);
                   getMap(data.city.coord.lat, data.city.coord.lon);               
                });
                search.value = "";
                
                getGraph(tableauDates, tableauTemperatures);
    });
        