import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { sandboxAPI } from "../Services/AxiosService.js";

class WeatherService {

    async getSandboxWeather() {
        const res = await sandboxAPI.get('' + 'weather')

        let temp = res.data.main.temp
        let fahrenheit = Math.round((temp - 273.15) * (9 / 5) + 32)
        let celcius = Math.round((fahrenheit - 32) * (5 / 9))
        let weatherIconURL = 'http://openweathermap.org/img/w/' + res.data.weather[0].icon + '.png'

        let weatherData = {
            name: res.data.name,
            temp: fahrenheit,
            fahrenheit: fahrenheit,
            celcius: celcius,
            description: res.data.weather[0].description,
            icon: weatherIconURL,
            humidity: res.data.main.humidity
        }
        const weather = new Weather(weatherData)
        ProxyState.weather = weather
    }

    toggleTemp() {
        ProxyState.weather.isFahrenheit = !ProxyState.weather.isFahrenheit
        if (ProxyState.weather.isFahrenheit) {
            ProxyState.weather.scale = 'F'
            ProxyState.weather.temp = ProxyState.weather.fahrenheit
        } else {
            ProxyState.weather.scale = 'C'
            ProxyState.weather.temp = ProxyState.weather.celcius
        }
        ProxyState.weather = ProxyState.weather
    }
}

export const weatherService = new WeatherService()