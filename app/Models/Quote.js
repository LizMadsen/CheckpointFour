export class Quote {
    constructor(data) {
        this.time = data.time
        this.quote = data.quote
        this.author = data.author
    }

    get Template() {
        return `<div class="hoverAuthor text-center quote text-light" title="${this.author}">
            <h1>${this.time}</h1>
            <h5>${this.quote}</h5>
            <div class="hiddenText">
                <p>${this.author}</p>
            </div>
        </div>`
    }
}