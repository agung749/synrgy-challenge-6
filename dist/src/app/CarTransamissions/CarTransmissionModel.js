"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
class CarTransmissionModel extends objection_1.Model {
    static get tableName() {
        return "car_transmission";
    }
}
exports.default = CarTransmissionModel;
