import { AuthController } from "./Controllers/AuthController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  authController = new AuthController();
  valuesController = new ValuesController();
}

window["app"] = new App();
