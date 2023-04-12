
// JavaScript const variable declaration
const map = L.map('the_map').setView([34.0709, -118.444], 15); // (1)!

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); // (2)!

//JavaScript let variable declaration to create a marker
let marker = L.marker([21.306944, -157.858337]).addTo(map) // (3)!
		.bindPopup('Honolulu')
		.openPopup();

let marker2 = L.marker([21.637810, -158.057660]).addTo(map) // (3)!
		.bindPopup('Waimea Valley (beautiful nature and unique farmers market!)')
		.openPopup();

let marker3 = L.marker([21.268570, -157.812430]).addTo(map) // (3)!
		.bindPopup('Diamond Head State Monument (second best hiking experience after Manoa Falls!)')
		.openPopup();

let marker4 = L.marker([21.506750, -158.005100]).addTo(map) // (3)!
		.bindPopup('Dole Plantation (delicious dole whip!)')
		.openPopup();

let marker5 = L.marker([21.351190, -157.793690]).addTo(map) // (3)!
		.bindPopup('Manoa Falls Trail (favorite hike ever!)')
		.openPopup();