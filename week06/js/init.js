// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(data){
    // console.log(message)
    L.marker([data.lat,data.lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    createButtons(lat,lng,location)
    return message
}


function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: function(results) {
            console.log(results.data)
            for (let i=0; i < results.data.length; i++){
                console.log(results.data[i].lat)
                //addMarker(results[i][0],results[i][1])
                addMarker(data)
            }
        }
    })
}

const dataURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTgSpMPrWb9h3ccNLJKxO4I1u6BRQP_PdKnzVcfI8CQ6uDYi9YQ7XFJyIousEIBg_4jBJ7KEAuB5qWx/pub?output=csv"
loadData(dataURL)

const sampleDataArray = [[37,-122],[32,-118],[39,-119],[36,-120]]

