// function geocode(search, token) {
//     var baseUrl = 'https://api.mapbox.com';
//     var endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
//         .then(function(res) {
//             return res.json();
//             // to get all the data from the request, comment out the following three lines...
//         }).then(function(data) {
//             return data.features[0].center;
//         });
// }


// Map access
mapboxgl.accessToken = MAP_BOX_API_TOKEN;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.491142, 29.424349], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

// Open Weather get request

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    type: "GET",
    data: {
        APPID: OPEN_WEATHER_API_TOKEN,
        q: "San Antonio, US"
    }
    }).done(function(data) {
    console.log(data);
});
