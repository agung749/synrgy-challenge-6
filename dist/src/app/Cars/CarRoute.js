"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CarController_1 = __importDefault(require("./CarController"));
const carRouter = (0, express_1.Router)();
const controller = new CarController_1.default();
carRouter.route("/car").get(controller.getAll).post(controller.create);
carRouter.route('/car/:id').put(controller.update).delete(controller.delete).get(controller.getById);
exports.default = carRouter;
