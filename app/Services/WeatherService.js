import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { sandboxAPI } from "../Services/AxiosService.js";

class WeatherService {

    async getSandboxWeather() {
        const res = await sandboxAPI.get('' + 'weather')

        let temp = res.data.main.temp
        let fahrenheit = Math.round((temp - 273.15) * (9 / 5) + 32)

        let weatherData = {
            name: res.data.name,
            temp: fahrenheit,
            description: res.data.weather.main,
            humidity: res.data.main.humidity
        }
        const weather = new Weather(weatherData)
        ProxyState.weather = weather
    }
}

export const weatherService = new WeatherService()