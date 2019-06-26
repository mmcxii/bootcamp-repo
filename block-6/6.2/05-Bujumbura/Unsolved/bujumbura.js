function howsTheWeather(req) {
    // Things to accomplish:
    // Get an API Key from OpenWeatherMap API
    const key = 'b7d94e212448dfa739f6fd35c8292690';
    // Create an AJAX call to retrieve data Log the data in console
    $.ajax({
        method: 'GET',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${req}&&apikey=${key}`,
    }).then((res) => {
        // Log the data in HTML
        $('.city').text(`In ${res.name}:`);
        $('.wind').text(
            `The wind is blowing with a force of ${
                res.wind.speed
            } km/h (I assume) with a heading of ${res.wind.deg} degrees.`
        );
        $('.humidity').text(`The humidity is ${res.main.humidity}.`);
        $('.temp').text(
            `And the temperature is a mighty ${((res.main.temp - 273.15) * 1.8 + 32).toFixed(2)}F.`
        );
    });
    // Scream Ushindi (victory in Swahili)! at the top of your lungs
}

howsTheWeather('Bujumbura');
