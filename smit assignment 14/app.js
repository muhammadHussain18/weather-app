let city = document.getElementById("city")
let country = document.getElementById("country")
let weatherImg = document.getElementById("weather-img")
let temp = document.getElementById("temp")
let type = document.getElementById("weather-type")
let humidity = document.getElementById("humidity")
let wind = document.getElementById("wind")


navigator.geolocation.getCurrentPosition((location) =>{
    let lat = location.coords.latitude;
    let lon = location.coords.longitude;
console.log(lat)
console.log(lon)

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7c5c09c9743581bccb9f0ad5b11d75cc&units=metric`)
    .then((res) => res.json())
    .then((res) =>{
        console.log(res)
        console.log(res.main.temp)

        city.innerHTML = res.name;
        country.innerHTML = res.sys.country       
        temp.innerHTML = Math.round(res.main.temp ) + '°C'
        type.innerHTML = res.weather[0].main
        humidity.innerHTML = res.main.humidity + '%'
        wind.innerHTML = res.wind.speed + 'km/H'

        if(res.weather[0].main === "Haze"){
            weatherImg.src = 'images/haze.svg'
        }
        if(res.weather[0].main === "Clear"){
            weatherImg.src = 'images/clear-day.svg'
        }

        if(res.weather[0].main === "Smoke"){
            weatherImg.src = 'images/smoke.svg'
        }

        if(res.weather[0].main === "Rain"){
            weatherImg.src = 'images/rain.svg'
        }
        if(res.weather[0].main === "Clouds"){
           weatherImg.src = 'images/cloudy.svg'
        }


    })
    .catch((rej) => {
        console.log(rej)
    })
    
})

let body = document.getElementById("body")
let searchWeather = document.getElementById('search-weather')
let search = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchWeather.value}&appid=7c5c09c9743581bccb9f0ad5b11d75cc&units=metric`)
    .then((res) => res.json())
    .then((res) =>{
        console.log(res)
        console.log(res.main.temp)

        city.innerHTML = res.name;
        country.innerHTML = res.sys.country       
        temp.innerHTML = Math.round(res.main.temp ) + '°C'
        type.innerHTML = res.weather[0].main
        humidity.innerHTML = res.main.humidity + '%'
        wind.innerHTML = res.wind.speed + 'km/H'

        if(res.weather[0].main === "Haze"){
            weatherImg.src = 'images/haze.svg'
            // body.style.background.image.url("images/fog.gif")
        }
        if(res.weather[0].main === "Clear"){
            weatherImg.src = 'images/clear-day.svg'
            // body.style.background.image.url("images/clear.gif")
        }

        if(res.weather[0].main === "Smoke"){
            weatherImg.src = 'images/smoke.svg'
            // body.style.background.image.url("images/fog.gif")
        }

        if(res.weather[0].main === "Rain"){
            weatherImg.src = 'images/rain.svg'
            // body.style.background.image.url("images/rain.gif")
        }
        if(res.weather[0].main === "Clouds"){
           weatherImg.src = 'images/cloudy.svg'
        //    body.style.background.image.url("images/clouds.gif")
        }


    })
    .catch((rej) => {
        console.log(rej)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Enter Your Correct Location!',
          })
    })
}


