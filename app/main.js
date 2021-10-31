import { QuotesController } from "./Controllers/QuoteController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  quotesController = new QuotesController()
  weatherController = new WeatherController()
}

window["app"] = new App()