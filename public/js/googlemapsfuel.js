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

function selectedFuel(json) {
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

function popup(json){
    var x;
    x = `<div class="card" style="width: 10rem;">
            <img class="card-img-top" style="width: 10rem; height: 4rem;" src="${searchIcon(json.fuelCompNormalName)}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${json.fuelCompNormalName}</h5>
                <h6> ${json.phone1}</h6>
                <p class="card-text">${json.gasStationOwner}</p>
            </div>
            <div class="card-body">
                <a class="nav-link" data-toggle="modal" data-target="#basicModal-order" href="#" onclick="getPriceList(${json.gasStationID})">Τιμοκαταλογος</a>
            </div>
        </div>`;
    return x;
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



function getPriceList(stationID){
    var link = 'http://localhost/project%20kokkoras/myFuel/public/api/gasstations/';
    var call = link+stationID;
    fetch(call,
        {method: 'GET'}
        )
        .then(response => response.json())
        .then(json => createPriceList(json))
}

function createPriceList(pricelist){
    globalJson = pricelist;
    const div = document.getElementById('price_list');
    const ul = document.createElement("ul");
    ul.setAttribute("id","prices");
    ul.setAttribute("class","list-group");
    for (let i = 0; i < pricelist.length; i++) {
        var li = document.createElement("li");
        li.setAttribute("class","list-group-item");
        li.innerText =`Fuel: ${pricelist[i].fuelName} Price: ${pricelist[i].fuelPrice}`;
        ul.appendChild(li);
    }
    div.parentNode.insertBefore(ul,div);
}

function removePriceList(){
    var elem = document.querySelector('#prices');
    elem.parentNode.removeChild(elem);
}

function orderFuel(json,user){
    var fuel = document.getElementById("fuel");
    var lt = document.getElementById("lt");
    var username = user;
    var fuelID;
    var quantity = lt.value;
    for(let i=0; i<json.length; i++){
        if(json[i].fuelName === fuel.value){
            fuelID = json[i].fuelTypeID;
        }
    }
    

    console.log(quantity);
    console.log(fuelID);
    console.log(username);
    //reset input 
    removePriceList();
    fuel.value = "choose";
    lt.value = 0;
}
