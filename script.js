const inputBox = document.querySelector('.inputbox');
const searchbtn = document.getElementById("searchBtn");

const weather_img = document.querySelector(".weather-img");
const tempreature = document.querySelector(".tempreature")
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windspeed");
const location_not_found = document.querySelector('.location-not-found')
const weather_body = document.querySelector('.weather-body');

async function weatherCheck(city){
    const API_KEY = "138efd809c1154783a0d15448b34bdf3"
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    const weather_data = await fetch(`${URL}`)
    .then(data => data.json());
    
    if (weather_data.cod === '404') {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        // console.log("error")
        return
    }
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    tempreature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windSpeed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "/asetss/cloud.png";
            break;
    
        case 'Snow':
            weather_img.src = "/asetss/snow.png";
            break;
    
        case 'Mist':
            weather_img.src = "/asetss/mist.png";
            break;
    
        case 'Clear':
            weather_img.src = "/asetss/clear.png"; 
            break;
    
        case 'Rain':
            weather_img.src = "/asetss/rain.png";
            break;
    }


    console.log(weather_data);
    // console.log(city);
}

searchbtn.addEventListener('click', ()=>{
    weatherCheck(inputBox.value);
})