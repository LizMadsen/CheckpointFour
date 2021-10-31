export class Clock {
  constructor(data) {
    this.date = new Date();
    this.hours = data.getHours();
    this.minutes = data.getMinutes();
  }


  get Template() {
    return `
            <div>
              ${this.date}
              <p>
              ${this.hours}.${this.minutes}
            </div>
  `
  }
}