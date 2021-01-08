// first map decleration
function initMap(json) {
    console.log(json);
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
      markers.push(marker);
    }
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}  

// map decleration after call with fuel
function selectedFuel(json) {
    console.log(json);
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
      markers.push(marker);
    }
}