var mymap;

const getMap = (lattitude, longitude) => {
    if (mymap !== undefined) {
        mymap.remove();
    }
    mymap = L.map('mapid').setView([lattitude, longitude], 13)    
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 10,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibmVybzE0IiwiYSI6ImNrbHJ6cnByMDBiM2QycHAzM3NvejZ6M3YifQ.NIjigAX8vV2gcAQttKkJqg'
   })
   .addTo(mymap);

}