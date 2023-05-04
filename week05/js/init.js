// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    return message
}

function loadData(url){
    fetch(url)
    .then(response => {
        return response
    })
    .then(data =>{
        // Basic Leaflet method to add GeoJSON data
     console.log(data)
    })
}
const dataURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTgSpMPrWb9h3ccNLJKxO4I1u6BRQP_PdKnzVcfI8CQ6uDYi9YQ7XFJyIousEIBg_4jBJ7KEAuB5qWx/pub?output=csv"
loadData(dataURL)