export class Weather {
    constructor(data) {
        this.name = data.name
        this.temp = data.temp
        this.feelsLike = data.feelsLike
        this.humidity = data.humidity
        this.description = data.description
        this.icon = data.icon
    }

    get Template() {
        return `
            <a class="btn btn-transparent m-2 text-light" data-bs-toggle="collapse" href="#contentId" aria-expanded="false" aria-controls="contentId" style="text-align:right">
                <h5><img src="${this.icon}"> ${this.name} ${this.temp}°</h5>
            </a>
            <div class="collapse p-2 text-light" id="contentId">
                <h5><b>Humidity:</b> ${this.humidity}
                <p>${this.description}
                </h5>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label class="form-check-label" for="flexSwitchCheckDefault">Celcius
                    </label>
                </div>
            </div>
        `
    }
}