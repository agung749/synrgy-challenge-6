"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CarBrandController_1 = __importDefault(require("./CarBrandController"));
const carBrandRouter = (0, express_1.Router)();
const controller = new CarBrandController_1.default();
carBrandRouter.route("/car-brand").get(controller.getAll);
carBrandRouter.route("/car-brand/:id").get(controller.getById).put(controller.update);
carBrandRouter.route("/car-brand").post(controller.create);
exports.default = carBrandRouter;
