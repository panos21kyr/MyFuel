function getFuels(){
    var link = 'http://localhost/project%20kokkoras/myFuel/public/api/gasstations/fuels/';
    var e = document.getElementById("dropDown");
    var fuel = e.value;

    var call = link+fuel;
    console.log(call);
      fetch(call,
      {method: 'GET'}
      )
      .then(response => response.json())
      .then(json => logcall(json))
    }

    function logcall(json){
      console.log(json);
    }
    