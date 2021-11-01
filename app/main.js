import { ImagesController } from "./Controllers/ImageController.js";
import { QuotesController } from "./Controllers/QuoteController.js";
import { TaskController } from "./Controllers/TaskController.js";
import { WeatherController } from "./Controllers/WeatherController.js";
import { ListController } from "./Controllers/ListController.js"

class App {
  quotesController = new QuotesController()
  weatherController = new WeatherController()
  imageController = new ImagesController()
  taskController = new TaskController()
  listController = new ListController()
}

window["app"] = new App()