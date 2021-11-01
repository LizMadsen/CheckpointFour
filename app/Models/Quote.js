export class Quote {
    constructor(data) {
        this.quote = data.quote
        this.author = data.author
    }

    get Template() {
        return `<div class="hoverAuthor text-center quote text-light">
            <h5>${this.quote}</h5>
            <div class="hiddenText">
                <p>${this.author}</p>
            </div>
        </div>`
    }
}