import { ImagesController } from "./Controllers/ImageController.js";
import { QuotesController } from "./Controllers/QuoteController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  quotesController = new QuotesController()
  weatherController = new WeatherController()
  imageController = new ImagesController()
}

window["app"] = new App()