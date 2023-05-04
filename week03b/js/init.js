// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':1}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// use our marker functions
addMarker(21.351190, -157.793690, 'Manoa Falls Trail','favorite hike ever!', 8)
addMarker(21.637810,-158.057660,'Waimea Valley','beautiful nature and unique farmers market!', 10)
addMarker(21.268570,-157.812430,'Diamond Head State Monument','second best hiking experience after Manoa Falls!', 12)
addMarker(21.506750, -158.005100,'Dole Plantation','delicious dole whip!', 15)

// create a function to add markers
function addMarker(lat,lng,title,message, zoomlevel){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    createButtons(lat,lng,title, zoomlevel)
    return message
}

createButtons(0,0, "Home", 1)

fetch("map.geojson")
    .then(response => {
        return response.json()
    })
    .then(data =>{
        // Basic Leaflet method to add GeoJSON data
        L.geoJSON(data, {
                pointToLayer: (feature, latlng) => { 
                    return L.circleMarker(latlng, {color: feature.properties.color})
                }
            }).bindPopup(layer => {
                return layer.feature.properties.place;
            }).addTo(map);
    })

function createButtons(lat,lng,title, zoomlevel){
        const newButton = document.createElement("button"); // adds a new button
        newButton.id = "button"+title; // gives the button a unique id
        newButton.innerHTML = title; // gives the button a title
        newButton.setAttribute("lat",lat); // sets the latitude 
        newButton.setAttribute("lng",lng); // sets the longitude 
        newButton.addEventListener('click', function(){
            map.flyTo([lat,lng], zoomlevel); //this is the flyTo from Leaflet
        })
        document.getElementById("contents").appendChild(newButton); //this adds the button to our page.
}

function createHomeButton(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng], 1); //this is the flyTo from Leaflet
    })
    document.getElementById("contents").appendChild(newButton); //this adds the button to our page.
}
