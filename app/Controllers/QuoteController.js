import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesServices.js"

function _drawSandboxQuote() {
    const quote = ProxyState.quote
    let template = ''
    template = quote.Template
    document.getElementById('quote').innerHTML = template
}

export class QuotesController {
    constructor() {
        this.getQuote()
        ProxyState.on('quote', _drawSandboxQuote)
        startClockInterval()
    }
    async getQuote() {
        try {
            await quotesService.getSandboxQuote()
        } catch (error) {
            console.error("[Sandbox Quote Error]", error)
        }
    }
}

function startClockInterval() {
    setInterval(updateClock, 300)
}

function updateClock() {
    let currentTime = new Date()
    ProxyState.quote.time = currentTime.getHours()
        + ":"
        + ((currentTime.getMinutes() < 10)
            ? "0" + currentTime.getMinutes()
            : currentTime.getMinutes())
    ProxyState.quote = ProxyState.quote
}