// function response(callback){
//     return new Promise((resolve, reject) => {   
//         var json;
//         var xhr = new XMLHttpRequest();
//         var url = "http://localhost/project%20kokkoras/myFuel/public/api/data";
//         xhr.open("GET", url, true,);
//         xhr.setRequestHeader("Content-Type", "application/json");
//         xhr.send(null);
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4 && xhr.status === 200) {
//                 json = JSON.parse(xhr.responseText);
//             }
//         }
//     }) 
// }

function getJson(){
    fetch('http://localhost/project%20kokkoras/myFuel/public/api/data',
    {method: 'GET'}
    )
    .then(response => response.json())
    .then(json => initMap(json))
    .catch(error => console.error(error))
    
}

getJson();

let map;
function initMap(json) {
    const mylatlng = { lat: parseFloat(json[0].gasStationLat), lng: parseFloat(json[0].gasStationLong) };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: mylatlng,
    });
    for(var i = 0; i < json.length; i++){
        new google.maps.Marker({
            position: { lat: parseFloat(json[i].gasStationLat), lng: parseFloat(json[i].gasStationLong) },
            map,
            title: "prathrio" + i,
        });
    }
}