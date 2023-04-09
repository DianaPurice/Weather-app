// variable to store the city history
var cities = [];

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
});

renderCities();
