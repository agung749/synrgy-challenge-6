"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarModel = void 0;
const objection_1 = require("objection");
const CarBrandModel_1 = require("./../CarBrands/CarBrandModel");
const CarTransmissionModel_1 = __importDefault(require("../CarTransamissions/CarTransmissionModel"));
const CarTypeModel_1 = require("../CarTypes/CarTypeModel");
class CarModel extends objection_1.Model {
    static get tableName() {
        return "car";
    }
}
exports.CarModel = CarModel;
CarModel.relationMappings = {
    carBrand: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: CarBrandModel_1.CarBrandModel,
        join: {
            from: "car.car_brand_id",
            to: "car_brand.id",
        },
    },
    carTransmission: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: CarTransmissionModel_1.default,
        join: {
            from: "car.car_transmission_id",
            to: "car_transmission.id",
        },
    },
    carType: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: CarTypeModel_1.CarTypeModel,
        join: {
            from: "car.car_type_id",
            to: "car_type.id",
        },
    },
};
