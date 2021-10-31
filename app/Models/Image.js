export class Image {
    constructor(data) {
        this.largeImgUrl = data.largeImgUrl
        this.author = data.author
    }

    get Template() {
        return `
        <div class="text-light">
            <b>Image credit:</b> ${this.author}
        </div>
        `
    }
}