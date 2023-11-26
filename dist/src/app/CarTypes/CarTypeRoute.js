"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CarTypeController_1 = __importDefault(require("./CarTypeController"));
const carTypeRouter = (0, express_1.Router)();
const controller = new CarTypeController_1.default();
carTypeRouter.route("/car-type").get(controller.getAll);
carTypeRouter.route("/car-type/:id").get(controller.getById).put(controller.update);
carTypeRouter.route("/car-type").post(controller.create);
exports.default = carTypeRouter;
