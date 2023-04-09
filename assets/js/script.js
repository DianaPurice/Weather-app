// variables that store html elements
var today = $("#today");
var forecast = $("#forecast");

// variable to store the city history
var cities = [];

// function to render weather information
function displayToday() {
  // create html elemets to be appended
  var todayTitle = $("<h2>");
  var date = $("<h2>");
  var todayIcon = $("<image>");
  var temperature = $("<p>");
  var humidity = $("<p>");
  var windSpeed = $("<p>");

  // add class to the elements
  todayTitle.addClass("todayTitle");
  todayIcon.addClass("todayIcon");
  date.addClass("date");
  temperature.addClass("todayP");
  humidity.addClass("todayP");
  windSpeed.addClass("todayP");
  // add the html elements to the today's div
  today.append(todayTitle);
  today.append(date);
  today.append(todayIcon);
  today.append(temperature);
  today.append(humidity);
  today.append(windSpeed);
}
function displayForecast() {
  // create html elemets to be appended
  var forecastDay = $("<div>");
  var date = $("<h3>");
  var icon = $("<image>");
  var temperature = $("<p>");
  var humidity = $("<p>");
  var windSpeed = $("<p>");

  // add class to the elements
  forecastDay.addClass("forecastSection");
  date.addClass("forecastDate");
  icon.addClass("forecastIcon");
  temperature.addClass("forecastP");
  humidity.addClass("forecastP");
  windSpeed.addClass("forecastP");
  // add the html elements to each forecast's div
  forecastDay.append(date);
  forecastDay.append(icon);
  forecastDay.append(temperature);
  forecastDay.append(humidity);
  forecastDay.append(windSpeed);
  // append the forecast div to the forecast section
  forecast.append(forecastDay);
}

// function for displaying the searched cities
function renderCities() {
  // delete the existing buttons
  $("#history").empty();
  // loop through the history list
  for (var i = 0; i < cities.length; i++) {
    // create a button for each separate searched city
    var btn = $("<button>");
    // add class to each button
    btn.addClass("city");
    // add data name to store in the local storage later
    btn.attr("data-name", cities[i]);
    // add text to the button
    btn.text(cities[i]);
    // append the button to the history div
    $("#history").append(btn);
  }
}

$("#search-button").on("click", function (event) {
  // prevent the page from reloading
  event.preventDefault();
  // get the city name the user inputed
  var city = $("#search-input").val().trim();
  // add city to the cities list
  cities.push(city);
  // create buttons for the city
  renderCities();
  // empty the today's and forecast weather sections
  today.empty();
  forecast.empty();
  // display today's weather
  displayToday();
  // display the forecat weather
  displayForecast();
});

renderCities();
