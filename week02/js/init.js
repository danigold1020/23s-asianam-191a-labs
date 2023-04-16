// declare variables
let zoomLevel = 5;
const mapCenter = [34.0709,-118.444];

// use the variables
const map = L.map('the_map').setView(mapCenter, zoomLevel);

L.tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
// function addMarker(lat,lng,title,message){
//     console.log(message)
//     L.marker([lat,lng]).addTo(map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();
//     return message
// }

function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`);
    return message
}

// use our marker functions
addMarker(21.351190, -157.793690, 'Manoa Falls Trail','favorite hike ever!')
addMarker(21.637810,-158.057660,'Waimea Valley','beautiful nature and unique farmers market!')
addMarker(21.268570,-157.812430,'Diamond Head State Monument','second best hiking experience after Manoa Falls!')
addMarker(21.506750, -158.005100,'Dole Plantation','delicious dole whip!')


