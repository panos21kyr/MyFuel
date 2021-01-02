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

    const iconBase = 'http://localhost/project%20kokkoras/myFuel/public/js/logos/';
    var contentString = '<div>o kwstas ton pairnei</div>';

    for(var i = 0; i < json.length; i++){
      const marker = new google.maps.Marker({
          position: { lat: parseFloat(json[i].gasStationLat), lng: parseFloat(json[i].gasStationLong) },
          map,
          title: json[i].fuelCompNormalName,
          icon: `${iconBase}${json[i].fuelCompNormalName}.png`,
      });
      
      var infoWindow = new google.maps.Marker({
        contet: contentString
      });
      
      marker.addEventListener('click', () => {
        infoWindow.open(map, marker);
      });
    }
    
    // google.maps.event.addListener(markers,'click', (function(marker,contentString,infowindow){ 
    //   return function() {
    //       infowindow.setContent(contentString);
    //       infowindow.open(map,marker);
    //   };
    // })(marker,contentString,infowindow)); 
}



//radio buttons
$(document).ready(function() {
    $("input[type=radio]").change(function() {
      $("select").removeClass('myVisible myHide');
      if (check1.checked) {
        $('#firstDropdown').addClass('myVisible');
        $('#secondDropdown').addClass('myHide');
        $('#thirdDropdown').addClass('myHide');
      }
      if (check2.checked) {
        $('#firstDropdown').addClass('myHide');
        $('#secondDropdown').addClass('myVisible');
        $('#thirdDropdown').addClass('myHide');
      }
      if (check3.checked) {
        $('#firstDropdown').addClass('myHide');
        $('#secondDropdown').addClass('myHide');
        $('#thirdDropdown').addClass('myVisible');
      }
    });
  });

const a = document.querySelector(".monada");

document.querySelector(".xrimata").addEventListener("click", () => {
  const xrimata = "$";
  a.textContent = xrimata;
});

document.querySelector(".litra").addEventListener("click", () => {
  const litra = "lt";
  a.textContent = litra;
});

