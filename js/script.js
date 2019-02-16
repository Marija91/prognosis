$(document).ready(function() {
  $('#city-select').change(function() {
    var value = $(this).val();
    CallApi(value);
    console.log(value);
  });
});

function CallApi(city_name) {
  $.getJSON(
    'http://api.openweathermap.org/data/2.5/weather?q=' +
      city_name +
      '&units=metric&APPID=7f6a4636a31720bed7397057e770d533',
    function(data) {
      console.log(data);

      var city = data.name;
      $('.city').text(city);

      var icon =
        'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
      $('.icon').attr('src', icon);

      var weather = data.weather[0].main;
      $('.weather').text(weather);

      var temp = Math.floor(data.main.temp);
      $('.temp').text(temp);
    }
  );
}
