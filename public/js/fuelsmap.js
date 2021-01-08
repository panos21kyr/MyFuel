function removemarkers(){
  function setMapOnAll(map) {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }

  function clearMarkers() {
    setMapOnAll(null);
  }

  function showMarkers() {
    setMapOnAll(map);
  }

  function deleteMarkers() {
    clearMarkers();
    markers = [];
  }
}


function getFuels(){
    var link = 'http://localhost/project%20kokkoras/myFuel/public/api/gasstations/fuels/';
    var e = document.getElementById("dropDown");
    var fuel = e.value;
    var call = link+fuel;
    removemarkers();
    fetch(call,
    {method: 'GET'}
    )
    .then(response => response.json())
    .then(json => selectedFuel(json))
}


    