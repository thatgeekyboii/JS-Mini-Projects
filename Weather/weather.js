const API_KEY = ""
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function weatherCheck(city){
    const res = await fetch(API_URL + city + `&appid=${API_KEY}`);

    if(res.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
            var data = await res.json()
            console.log(data)
            document.querySelector(".city").innerHTML = data.name
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity +  "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
        
            // updating images
            if(data.weather[0].main == "Clouds"){weatherIcon.src = "icons/clouds.png"}
            else if(data.weather[0].main == "Drizzle"){weatherIcon.src = "icons/drizzle.png"}
            else if(data.weather[0].main == "Clear"){weatherIcon.src = "icons/clear.png"}
            else if(data.weather[0].main == "Rain"){weatherIcon.src = "icons/rain.png"}
            else if(data.weather[0].main == "Mist"){weatherIcon.src = "icons/mist.png"}
        
            document.querySelector(".weather").style.display = "block";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}


searchButton.addEventListener('click', () => {
    weatherCheck(searchBox.value)
})
weatherCheck()