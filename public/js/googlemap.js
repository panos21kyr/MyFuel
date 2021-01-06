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
    const iconBase = 'http://localhost/project%20kokkoras/myFuel/public/js/logos/';
    const mylatlng = { lat: parseFloat(json[0].gasStationLat), lng: parseFloat(json[0].gasStationLong) };
    // map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: mylatlng,
    });
    // markers
    for(var i = 0; i < json.length; i++){
      const marker = new google.maps.Marker({
          position: { lat: parseFloat(json[i].gasStationLat), lng: parseFloat(json[i].gasStationLong) },
          map,
          title: json[i].fuelCompNormalName,
          icon: `${iconBase}${json[i].fuelCompNormalName}.png`,
      });
    }
}