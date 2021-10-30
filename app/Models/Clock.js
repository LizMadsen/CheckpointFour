export class Clock {
    constructor(data) {
        this.date = new Date();
        this.hh = data.getHours();
        this.mm = data.getMinutes();
        this.ss = data.getSeconds();
        let session = "AM";
    }


    get Template() {
        return `
            <div>
              ${this.date}
            </div>
  `
    }
}