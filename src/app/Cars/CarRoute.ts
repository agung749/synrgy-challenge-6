import { Router } from "express";
import CarController from "./CarController";

const carRouter = Router()
const controller = new CarController();

carRouter.route("/car").get(controller.getAll).post(controller.create)
carRouter.route('/car/:id').put(controller.update).delete(controller.delete).get(controller.getById);

export default carRouter;