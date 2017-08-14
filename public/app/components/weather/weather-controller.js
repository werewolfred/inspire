function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(function (weather) {
		//What can you do with this weather object?
		var kelvin = weather.main.temp
		var farhrenheight = Math.floor((kelvin - 273.15) * 1.8) + 32
		console.log(farhrenheight);
		document.getElementById('weather').innerHTML = farhrenheight + ' degrees'




	})

}
