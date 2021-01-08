function loadPage(){
    fetch('http://localhost/project%20kokkoras/myFuel/public/api/data',
    {method: 'GET'}
    )
    .then(response => response.json())
    .then(json => initMap(json))
    .catch(error => console.error(error))
}

const iconBase = 'http://localhost/project%20kokkoras/myFuel/public/js/logos/';
let map;
let markers = [];

loadPage();



