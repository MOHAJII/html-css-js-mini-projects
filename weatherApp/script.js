const cityInput = document.getElementById('city-input');
const cityButton = document.getElementById('city-button');
let cityName = document.getElementById('city-name');
let temp = document.getElementById('temp');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');

const apiKey = "90d22d75a53769254bffce8c5577390f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const getIcon = (weather) => {
    const clear = "images/clear.png";
    const clouds = "images/clouds.png";
    const rain = "images/rain.png";
    const drizzle = "images/drizzle.png";
    const mist = "images/mist.png";
    const snow = "images/snow.png";

    console.log(weather.toLowerCase());

    switch(weather.toLowerCase()) {
        case "clear" : return clear;
        case "rain" : return rain;
        case "clouds" : return clouds;  
        case "drizzle" : return drizzle;
        case "mist" : return mist;
        case "snow" : return snow;
        default : return clear;
    }
}

const checkWeather = async (city = "Mohammedia") => {
    try {
        const response = await fetch(apiUrl + "&q=" + city + "&appid=" + apiKey);
        var data = await response.json();

        if (data.cod === "404") {
            console.error("Error : invalid city");
            document.getElementById('weather-part').style.display = 'none';
            document.getElementById('error').style.display = "block";

        } else {
            console.log(data);
            cityName.innerHTML = data.name;
            temp.innerHTML = data.main.temp + "°c";
            humidity.innerHTML = data.main.humidity + "%";
            wind.innerHTML = data.wind.speed + " km/h";
            document.getElementById('weather-icon').src = getIcon(data.weather[0].main);
            document.getElementById('weather-part').style.display = 'block';
            document.getElementById('error').style.display = "none";
        }
    } catch (e) {
        console.error("Error: fetching data field");
    }
}

cityButton.addEventListener("click", () => {
    if (cityInput.value) {
        checkWeather(cityInput.value);
    }
    cityInput.value = "";
})
