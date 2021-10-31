export class Quote {
    constructor(data) {
        this.quote = data.quote
    }

    get Template() {
        return `<div id="quote" class="col-md-6 text-center">
            ${this.quote}
        </div>`
    }
}