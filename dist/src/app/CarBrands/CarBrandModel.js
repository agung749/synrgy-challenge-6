"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarBrandModel = void 0;
const objection_1 = require("objection");
class CarBrandModel extends objection_1.Model {
    static get tableName() {
        return "car_brand";
    }
}
exports.CarBrandModel = CarBrandModel;
