"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CarTransmissionController_1 = __importDefault(require("./CarTransmissionController"));
const carTransmissionRouter = (0, express_1.Router)();
const controller = new CarTransmissionController_1.default();
carTransmissionRouter.route("/car-transmission").get(controller.getAll);
carTransmissionRouter.route("/car-transmission/:id").get(controller.getById).put(controller.update);
carTransmissionRouter.route("/car-transmission").post(controller.create);
exports.default = carTransmissionRouter;
