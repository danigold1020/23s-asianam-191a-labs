// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':10}

let pistachio = L.featureGroup();
let noPistachio = L.featureGroup();

let layers = {
    "Pistachio": pistachio,
    "No Pistachio": noPistachio
}

let circleOptions = {
    radius: 4,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQl0VZwxFiHJt97YQdsfw8WWbip9fBrdPRjVLVAwHdPiv89bM5X2H9V4pF93VdiCMUbEdsSutfD1JGy/pub?output=csv"

// define the leaflet map
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

// add layer control box
L.control.layers(null,layers).addTo(map)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([34.0699, -118.4438]).addTo(map)
    .bindPopup('UCLA<br> The university I attend.')
    .openPopup();

function addMarker(data){
    if(data['Do they sell pistachio ice cream?'] == "Yes"){
        circleOptions.fillColor = "green"
        pistachio.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>Pistachio</h2>`))
        createButtons(data.lat,data.lng,data['What is the name of your favorite ice cream shop in LA?'])
        }
    else{
        circleOptions.fillColor = "red"
        noPistachio.addLayer(L.circleMarker([data.lat,data.lng],circleOptions).bindPopup(`<h2>No Pistachio</h2>`))
        createButtons(data.lat,data.lng,data['What is the name of your favorite ice cream shop in LA?'])
    }
    return data
}

createHomeButton(34.0709,-118.444, "Home")

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng], 14); //this is the flyTo from Leaflet
    })
    const spaceForButtons = document.getElementById('placeForButtons')
    spaceForButtons.appendChild(newButton);//this adds the button to our page.
}

function createHomeButton(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng], 10); //this is the flyTo from Leaflet
    })
    const spaceForButtons = document.getElementById('placeForButtons')
    spaceForButtons.appendChild(newButton);//this adds the button to our page.
}


function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
}

function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker(data)
    })
    pistachio.addTo(map) // add our layers after markers have been made
    noPistachio.addTo(map) // add our layers after markers have been made  
    let allLayers = L.featureGroup([pistachio,noPistachio]);
    map.fitBounds(allLayers.getBounds());
}

loadData(dataUrl)
