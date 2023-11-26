import { Router } from "express";
import CarTypeController from "./CarTypeController";

const carTypeRouter = Router()
const controller = new CarTypeController();

carTypeRouter.route("/car-type").get(controller.getAll);
carTypeRouter.route("/car-type/:id").get(controller.getById).put(controller.update);
carTypeRouter.route("/car-type").post(controller.create);

export default carTypeRouter;