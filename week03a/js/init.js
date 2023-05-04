
// declare the map and use the variables above
const map = L.map('the_map').setView([21.351190, -157.793690], 10);

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


// use our marker functions
addMarker(21.351190, -157.793690, 'Manoa Falls Trail','favorite hike ever!')
addMarker(21.637810,-158.057660,'Waimea Valley','beautiful nature and unique farmers market!')
addMarker(21.268570,-157.812430,'Diamond Head State Monument','second best hiking experience after Manoa Falls!')
addMarker(21.506750, -158.005100,'Dole Plantation','delicious dole whip!')

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    createButtons(lat,lng,title);
    return message
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng], 15); //this is the flyTo from Leaflet
    })
    document.getElementById("contents").appendChild(newButton); //this adds the button to our page.
}





// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });

// // Function to change the content of t2
// function modifyText() {
//     const t2 = document.getElementById("t2");
//     const isNodeThree = t2.firstChild.nodeValue === "three";
//     t2.firstChild.nodeValue = isNodeThree ? "two" : "three";
//   }
  
//   // Add event listener to table
//   const el = document.getElementById("outside");
//   el.addEventListener("click", modifyText, false);
  