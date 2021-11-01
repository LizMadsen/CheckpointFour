import { ImagesController } from "./Controllers/ImageController.js";
import { QuotesController } from "./Controllers/QuoteController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  quotesController = new QuotesController()
  weatherController = new WeatherController()
  imageController = new ImagesController()
  todoController = new TodoController()
}

window["app"] = new App()