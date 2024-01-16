const url = "https://api.openweathermap.org/data/2.5/weather?q="

const api_Key = "&appid=6511e14723ad8cb6f243ece1366c5deb"

function getWeather(cityName = "Bishkek") {
    const response = fetch(url + cityName + api_Key)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            showWeather(data)
        })
}
getWeather()

const cityName = document.getElementById("cityName")
const temp = document.getElementById("temp")
const weatherStatus = document.getElementById("weatherStatus")
const wind = document.getElementById("wind")
const  humidity= document.getElementById("humidity")
const  textField= document.getElementById("textField")
const  btnShow= document.getElementById("btnShow")

btnShow.addEventListener('click',() => {
    getWeather(textField.value)
})
function showWeather (city) {
    const {name, sys, main} = city
    cityName.innerHTML =`${city.name} <span>${city.sys.country}</span>`
    temp.innerHTML = `${(city.main.temp - 273.15).toFixed()}`
}
