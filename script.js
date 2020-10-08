/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (name) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  var key = 'a8e71c9932b20c4ceb0aed183e6a83bb';
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + name + '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    document.getElementById('city-name').innerHTML = data.name;
    document.getElementById('weather-type').innerHTML = data.weather[0].description;
    document.getElementById('temp').innerHTML = data.main.temp;
    document.getElementById('min-temp').innerHTML = data.main.temp_min;
    document.getElementById('max-temp').innerHTML = data.main.temp_max;
    document.getElementById('icon').innerHTML = data.weather[0].icon;
    
//console.log(data.name);
//console.log(data.weather[0].description);
//console.log(data.main.temp);
//console.log(data.main.temp_min);
//console.log(data.main.temp_max);
  })
    .catch(function() {
    // catch any errors
  });
}
//window.onload = function() {
 // getWeatherData('melbourne');

  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE

//console.log(getWeatherData)
/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  var weatherdata = getWeatherData(city);

  // CODE GOES HERE

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
 //document.getElementById("city-name").innerHTML = data.name
 
   //name = (data.name);
  //CODE GOES HERE
  showWeatherData(weatherdata);
}

function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  
}

initMap();

