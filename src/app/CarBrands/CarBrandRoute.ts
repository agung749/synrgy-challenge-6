import { Router } from "express";
import CarBrandController from "./CarBrandController";

const carBrandRouter = Router()
const controller = new CarBrandController();

carBrandRouter.route("/car-brand").get(controller.getAll);
carBrandRouter.route("/car-brand/:id").get(controller.getById).put(controller.update);
carBrandRouter.route("/car-brand").post(controller.create);

export default carBrandRouter;