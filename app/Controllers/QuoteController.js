import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesServices.js"

function _drawSandboxQuote() {
    const quote = ProxyState.quote
    let template = ''
    // quote.forEach(q => template +=
    //     `<div id="quote" class="col-md-6 text-center">
    //         ${this.quote}
    //     </div>)`)
    // document.getElementById('quote').innerHTML = template
}

export class QuotesController {
    constructor() {
        this.getQuote()

        ProxyState.on('quote', _drawSandboxQuote)
    }
    async getQuote() {
        try {
            await quotesService.getSandboxQuote()
        } catch (error) {
            console.error("[Sandbox Quote Error], error")
        }
    }
}