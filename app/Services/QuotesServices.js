import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { sandboxAPI } from "./AxiosService.js";

class QuotesServices {

    async getSandboxQuote() {
        const res = await sandboxAPI.get('' + 'quotes')
        let quoteData = {
            quote: res.data.content,
            author: res.data.author
        }
        const quote = new Quote(quoteData)
        ProxyState.quote = quote
    }
}

export const quotesService = new QuotesServices()