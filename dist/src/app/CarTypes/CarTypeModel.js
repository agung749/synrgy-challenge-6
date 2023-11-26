"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarTypeModel = void 0;
const objection_1 = require("objection");
class CarTypeModel extends objection_1.Model {
    static get tableName() {
        return "car_type";
    }
}
exports.CarTypeModel = CarTypeModel;
