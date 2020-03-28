console.log('Hello World');

window.TrelloPowerUp.initialize({
    'card-badges': function (t, opts) {
        // return an array of card badges for the given card
        return t.card('coordinates')
            .then(function (card) {
                console.log(card);
                if (card.coordinates) {
                    const { latitude, longitude } = card.coordinates;
                    //if our card has a location, we will pull the current weather data
                    return fetch('https://http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&
                    APPID =%% APP_ID %% ')
                            .then(function (response) {
                                return response.json();
                            })
                            .then(function (weaterData) {
                                return [{
                                    text: weatherData.main.temp.toString()
                                }, {
                                    text: weatherData.main.wind.speed.toString()
                                }]
                            });
                }
                return [];
            })
    }
});