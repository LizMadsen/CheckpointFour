import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

function _drawWeather() {
    const weather = ProxyState.weather
    let template = ''
    template = weather.Template
    document.getElementById('weather').innerHTML = template
}

export class WeatherController {
    constructor() {
        this.getSandboxWeather()

        ProxyState.on('weather', _drawWeather)
    }
    async getSandboxWeather() {
        try {
            await weatherService.getSandboxWeather()
        } catch (error) {
            console.error("[Sandbox Weather Error], error")
        }
    }
    toggleTemp(value) {
        console.log(value.checked)
    }
}