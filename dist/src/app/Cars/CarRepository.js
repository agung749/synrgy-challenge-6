"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRepository = void 0;
const CarModel_1 = require("./CarModel");
class CarRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CarModel_1.CarModel.query();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CarModel_1.CarModel.query().findById(id);
        });
    }
    create(car) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CarModel_1.CarModel.query().insert(car);
        });
    }
    update(id, car) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedCar = yield CarModel_1.CarModel.query().patchAndFetchById(id, car);
            return updatedCar;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield CarModel_1.CarModel.query().deleteById(id);
        });
    }
}
exports.CarRepository = CarRepository;
