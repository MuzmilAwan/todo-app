
const apiKey = "c447c652f725c39c58b98c9c4c7301d1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inp = document.querySelector("#search");
const btn = document.querySelector(".btn");
const imgs = document.querySelector(".icons")

async function changeWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    
    document.querySelector(".tamp").innerHTML = Math.floor(data.main.temp)+ "°C";
    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".win").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".hum").innerHTML = data.main.humidity + "%";

    if(data.weather[0].main == "Clouds"){
        imgs.src = "clouds.png";
    }
    else if(data.weather[0].main == "partly-cloudy"){
        imgs.src = "partly-cloudy.png";
    }
    else if(data.weather[0].main == "storm"){
        imgs.src = "stormy-weather.png";
    }
    else if(data.weather[0].main == "rain"){
        imgs.src = "storm-with-heavy-rain.png";
    }
   
}

btn.addEventListener("click", ()=> {
    changeWeather(inp.value);
    inp.value = "";
})
