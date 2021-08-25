function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}

// Map access
mapboxgl.accessToken = MAP_BOX_API_TOKEN;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.491142, 29.424349], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

/////MARKER START
let marker = new mapboxgl.Marker({draggable: true})
    .setLngLat([-98.4916, 29.4260])
    .addTo(map);



///// MARKER END

// DYNAMIC BUTTON START

$('#dynamicButton').click(function(e){
    e.preventDefault();
    marker.remove();
    geocode($('#dynamicInput').val(), MAP_BOX_API_TOKEN).then((result)=>{
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/onecall",
            type: "GET",
            data: {
                APPID: OPEN_WEATHER_API_TOKEN,
                lat: result[1],
                lon: result[0],
                exclude: 'minutely,hourly',
                units: 'imperial'
            }
        }).done(function(result) {
            let cardHtml = '';
            for (let i = 0; i < 5; i++) {
                let dynamicDay = new Date(result.daily[i].dt * 1000).toDateString()

                cardHtml += '<div class="card" style="width: 18rem;">' +
                    '<div class="card-header">' + dynamicDay + '</div>' + '<ul class="list-group list-group-flush">' +
                    '<li class="list-group-item">' + result.daily[i].temp.max + '    ' + '<img src="http://openweathermap.org/img/wn/' + result.daily[i].weather[0].icon + '@2x.png"/>' + '</li>' +
                    '<li class="list-group-item">' + result.daily[i].weather[0].description + '</li>' +
                    '<li class="list-group-item">' + result.daily[i].humidity + '</li>' +
                    '<li class="list-group-item">' + result.daily[i].wind_speed + '</li>' +
                    '<li class="list-group-item">' + result.daily[i].pressure + '</li>' +
                    '</ul>' +
                    '</div>'

            }
            $('#following-cards').html(cardHtml);

            map.setCenter([result.lon, result.lat]);

             marker = new mapboxgl.Marker({draggable: true})
                .setLngLat([result.lon, result.lat])
                .addTo(map);
        })
    })
});

///DYNAMIC BUTTON END





// Open Weather get request

 $.ajax({
    url: "https://api.openweathermap.org/data/2.5/onecall",
    type: "GET",
    data: {
        APPID: OPEN_WEATHER_API_TOKEN,
        lat: 29.4252,
        lon: -98.4916,
        exclude: 'minutely,hourly',
        units: 'imperial'
    }


    }).done(function(data) {
     let cardHtml = '';
     for (let i = 0; i < 5; i++) {
         let dynamicDay = new Date(data.daily[i].dt * 1000).toDateString()
         cardHtml += '<div class="card" style="width: 18rem;">' +
             '<div class="card-header">' + dynamicDay + '</div>' + '<ul class="list-group list-group-flush">' +
             '<li class="list-group-item">' + data.daily[i].temp.max + '    ' + '<img src="http://openweathermap.org/img/wn/' + data.daily[i].weather[0].icon + '@2x.png"/>' + '</li>' +
             '<li class="list-group-item">' + data.daily[i].weather[0].description + '</li>' +
             '<li class="list-group-item">' + data.daily[i].humidity + '</li>' +
             '<li class="list-group-item">' + data.daily[i].wind_speed + '</li>' +
             '<li class="list-group-item">' + data.daily[i].pressure + '</li>' +
             '</ul>' +
             '</div>'

     }
     $('#following-cards').html(cardHtml);

     marker.on('dragend', function() {
         let newCoordinates = marker.getLngLat();
         console.log(newCoordinates)
     });



 }).fail(function(error) {
     console.log(error);
 });



/////CARD ONE - FIVE START




    ////////////// CARD TWO - FIVE END



