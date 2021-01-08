function initMap(json) {
    const larisa = { lat: 39.643452, lng: 22.413208 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: larisa,
    });

    const contentString = 'o kwstas gamnietai';
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    for (var i = 0; i < json.length; i++) {
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(parseFloat(json[i].gasStationLat),parseFloat(json[i].gasStationLong)),
            map,
        });
        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    }
}

function selectedFuel(json) {
    const larisa = { lat: 39.643452, lng: 22.413208 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: larisa,
    });

    const contentString = 'o kwstas gamnietai';
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    for (var i = 0; i < json.length; i++) {
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(parseFloat(json[i].gasStationLat),parseFloat(json[i].gasStationLong)),
            map,
        });
        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    }
}
