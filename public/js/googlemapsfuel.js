function initMap(json) {
    const larisa = { lat: 39.643452, lng: 22.413208 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: larisa,
    });


    for (var i = 0; i < json.length; i++) {
        const infowindow = new google.maps.InfoWindow({
            content: popup(json[i]),
        });
        const gasIcon = searchIcon(json[i].fuelCompNormalName);
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(parseFloat(json[i].gasStationLat),parseFloat(json[i].gasStationLong)),
            title: json[i].fuelCompNormalName,
            map,
            icon: gasIcon,
        });
        marker.addListener("click", () => {
            infowindow.open(map, marker);
            popup(json[i]);
        });
    }
}
// fuelCompNormalName: "AVIN"
// gasStationAddress: "ΒΟΛΟΥ 22-24 ΛΑΡΙΣΑ"
// gasStationID: 441
// gasStationLat: "39.6337420"
// gasStationLong: "22.4324412"
// gasStationOwner: "ΜΑΚΡΑΙΩΝ Α.Ε. ΥΠΟΚ/ΜΑ Νο 53"
// municipalityID: "42010000"
// municipalityNormalName: "ΛΑΡΙΣΑΣ"
// phone1: null
// updated_at: null
// username: "user1"
function popup(jsoni){
    var x;
    x = `<div class="card" style="width: 10rem;">
            <img class="card-img-top" style="width: 10rem; height: 4rem;" src="${searchIcon(jsoni.fuelCompNormalName)}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${jsoni.fuelCompNormalName}</h5>
                <h6> ${jsoni.phone1}</h6>
                <p class="card-text">${jsoni.gasStationOwner}</p>
            </div>
            <div class="card-body">
                <a class="nav-link" data-toggle="modal" data-target="#basicModal-order" href="#" onclick="getPriceList(${jsoni.gasStationID})">Τιμοκαταλογος</a>
            </div>
        </div>`;
    return x;
}

function selectedFuel(json) {
    const larisa = { lat: 39.643452, lng: 22.413208 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: larisa,
    });

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    for (var i = 0; i < json.length; i++) {
        const gasIcon = searchIcon(json[i].fuelCompNormalName);
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(parseFloat(json[i].gasStationLat),parseFloat(json[i].gasStationLong)),
            title: json[i].fuelCompNormalName,
            map,
            icon: gasIcon,
        });
        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    }
}

function searchIcon(gasName) {
    var png;
    var link = 'http://localhost/project%20kokkoras/myFuel/resources/logosm/';
    switch(gasName) {
        case 'Α.Π.':
            png = `${link}1.png`;
            break;
        case 'JETOIL':
            png = `${link}2.png`;
            break;
        case 'SHELL':
            png = `${link}3.png`;
            break;
        case 'SILKOIL':
            png = `${link}4.png`;
            break;
        case 'ΕΤΕΚΑ':
            png = `${link}5.png`;
            break;
        case 'AVIN':
            png = `${link}6.png`;
            break;
        case 'AEGEAN':
            png = `${link}7.png`;
            break;
        case 'EKO':
            png = `${link}8.png`;
            break;
        case 'REVOIL':
            png = `${link}9.png`;
            break;
        case 'BP':
            png = `${link}10.png`;
            break;
        case 'ΕΛΙΝΟΙΛ':
            png = `${link}11.png`;
            break;
        // case '':
        //     png = `${link}12.png`;
        //     break;
        case 'CYCLON':
            png = `${link}13.png`;
            break;
        // case '':
        //     png = `${link}14.png`;
        //     break;
        // case '':
        //     png = `${link}15.png`;
        //     break;
        case 'ΑΡΓΩ':
            png = `${link}16.png`;
            break;
        case 'KAOIL':
            png = `${link}17.png`;
            break;
        // case '':
        //     png = `${link}18.png`;
        //     break;
        case 'ΤΡΙΑΙΝΑ':
            png = `${link}19.png`;
            break;
        default:
            png = `${link}default.png`;
    }
    return png;
}


