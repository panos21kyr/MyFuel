function initMap(json) {

    const mylatlng = { lat: parseFloat(json[0].gasStationLat), lng: parseFloat(json[0].gasStationLong) };
    // map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: mylatlng,
    });

    var divs = [];
    for (var i = 0; i < json.length; i++) {
        const divElement = document.createElement('div');
        const title = document.createElement('h6');
        title.innerText = `${json[i].fuelCompNormalName}`;
        divElement.appendChild(title);
        const divBody = document.createElement('div');
        const owner = document.createElement('h6');
        owner.innerText = `Owner : ${json[i].gasStationOwner}`;
        divBody.appendChild(owner);
        const gasStationAddress = document.createElement('p');
        gasStationAddress.innerText = `Address : ${json[i].gasStationAddress}`;
        divBody.appendChild(gasStationAddress);
        const phone1 = document.createElement('p');
        phone1.innerText = `Phone : ${json[i].phone1}`;
        divBody.appendChild(phone1);
        divElement.append(divBody);
        divs.push(divElement);
    }
    const iconBase = 'http://localhost/project%20kokkoras/myFuel/public/js/logos/';
    // markers
    for (var i = 0; i < json.length; i++) {
        
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(parseFloat(json[i].gasStationLat),parseFloat(json[i].gasStationLong)),
            map: map,
            title: json[i].fuelCompNormalName,
            icon: `${iconBase}${json[i].fuelCompNormalName}.png`,
        });

        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(divs[i]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

}  