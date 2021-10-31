export class Weather {
    constructor(data) {
        this.name = data.name
        this.temp = data.temp
        this.feelsLike = data.feelsLike
        this.humidity = data.humidity
        this.main = data.main
    }

    get Template() {
        return `
            <a class="btn btn-transparent m-2 text-light" data-bs-toggle="collapse" href="#contentId" aria-expanded="false" aria-controls="contentId" style="text-align:right">
                <h5>${this.name} ${this.temp}°</h5>
            </a>
            <div class="collapse p-2" id="contentId">
                <h5><b>Humidity:</b> ${this.humidity}
                ${this.main}
                </h5>
            </div>
        `
    }
}