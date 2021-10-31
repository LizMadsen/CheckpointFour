import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { sandboxAPI } from "./AxiosService.js";

class QuotesServices {

    async getSandboxQuote() {
        const res = await sandboxAPI.get('' + 'quotes')
        ProxyState.quote = res.data.results
    }
}

export const quotesService = new QuotesServices()