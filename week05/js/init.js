// declare variables
let mapOptions = {'center': [34.4135868,-119.8496976],'zoom':8}

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

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTsfi0OL-ZDjF2GznxLodQinhPIidkyA9jO8EIH82ZUeGyyOR3nBmyKz2nc7cJzgQkiyoanv1c5GIuX/pub?output=csv"

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
        addMarker(data.lat,data.lng, data['What is your zip code?'], data['Are you aware of the sources of oil pollution in or near your area?'])
    })
}

loadData(dataUrl)








