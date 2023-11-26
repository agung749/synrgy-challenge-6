import { Router } from "express";
import CarTransmissionController from "./CarTransmissionController";

const carTransmissionRouter = Router()
const controller = new CarTransmissionController();

carTransmissionRouter.route("/car-transmission").get(controller.getAll);
carTransmissionRouter.route("/car-transmission/:id").get(controller.getById).put(controller.update);
carTransmissionRouter.route("/car-transmission").post(controller.create);

export default carTransmissionRouter;