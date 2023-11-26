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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const CarModel_1 = require("./CarModel");
const NotFoundException_1 = require("../../exceptions/NotFoundException");
const Repository_1 = require("../Repositories/Repository");
const ExecuteTransactionAsync_1 = __importDefault(require("../Repositories/ExecuteTransactionAsync"));
const { v4: uuidv4 } = require("uuid");
let currTime = new Date();
currTime.setHours(currTime.getHours() + 7);
class CarService {
    constructor() {
        this.carRepo = new Repository_1.Repository(CarModel_1.CarModel);
    }
    getAll(name, size, availability) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchPattern = new RegExp((name === null || name === void 0 ? void 0 : name.toString()) || "", "i");
            const isAvailable = (availability === null || availability === void 0 ? void 0 : availability.toLowerCase()) == "true";
            const criteria = {
                is_deleted: false,
            };
            let filterParams = [
                { filterName: name, isEmpty: !name, condition: (car) => searchPattern.test(car.name) },
                {
                    filterName: size,
                    isEmpty: !size,
                    condition: (car) => car.size.toUpperCase() === (size === null || size === void 0 ? void 0 : size.toString().toUpperCase()),
                },
                {
                    filterName: availability,
                    isEmpty: !availability,
                    condition: (car) => car.availability === isAvailable,
                },
            ];
            let cars = yield this.carRepo.findAllWithCriteriaAndJoin(criteria, ["carBrand", "carTransmission", "carType"]);
            for (const filter of filterParams) {
                if (!filter.isEmpty) {
                    cars = cars.filter(filter.condition);
                }
            }
            return cars;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const criteria = {
                id: id,
                is_deleted: false,
            };
            const car = yield this.carRepo.findWithJoin(criteria, ["carType", "carBrand", "carTransmission"]);
            if (!car) {
                throw new NotFoundException_1.NotFoundException("Data mobil tidak ditemukan");
            }
            else {
                return car;
            }
        });
    }
    create(carRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            let availableTime = currTime;
            if (carRequest.available_at) {
                availableTime = new Date(carRequest.available_at);
                availableTime.setHours(availableTime.getHours() + 7);
            }
            const result = yield (0, ExecuteTransactionAsync_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                var _a;
                const car = {
                    id: uuidv4(),
                    name: carRequest.name,
                    price: carRequest.price,
                    size: carRequest.size,
                    picture_url: (_a = carRequest.picture_url) !== null && _a !== void 0 ? _a : "",
                    year: carRequest.year,
                    availability: carRequest.availability,
                    capacity: carRequest.capacity,
                    description: carRequest.description,
                    available_at: availableTime,
                    updated_at: currTime,
                    car_brand_id: carRequest.car_brand_id,
                    car_transmission_id: carRequest.car_transmission_id,
                    car_type_id: carRequest.car_type_id,
                };
                return yield this.carRepo.save(car);
            }));
            return result;
        });
    }
    update(id, carRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, ExecuteTransactionAsync_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c, _d;
                let carUpdate = yield this.getById(id);
                carUpdate.name = carRequest.name;
                carUpdate.price = carRequest.price;
                carUpdate.size = carRequest.size;
                carUpdate.updated_at = currTime;
                carUpdate.year = carRequest.year;
                carUpdate.availability = carRequest.availability;
                carUpdate.capacity = carRequest.capacity;
                carUpdate.description = carRequest.description;
                carUpdate.available_at = carRequest.available_at;
                carUpdate.picture_url = (_a = carRequest.picture_url) !== null && _a !== void 0 ? _a : carUpdate.picture_url;
                carUpdate.car_brand_id = (_b = carRequest.car_brand_id) !== null && _b !== void 0 ? _b : carUpdate.car_brand_id;
                carUpdate.car_transmission_id = (_c = carRequest.car_transmission_id) !== null && _c !== void 0 ? _c : carUpdate.car_transmission_id;
                carUpdate.car_type_id = (_d = carRequest.car_type_id) !== null && _d !== void 0 ? _d : carUpdate.car_type_id;
                return yield this.carRepo.update(id, carUpdate);
            }));
            return result;
        });
    }
    // hard delete
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, ExecuteTransactionAsync_1.default)(() => __awaiter(this, void 0, void 0, function* () {
                yield this.getById(id);
                yield this.carRepo.delete(id);
            }));
        });
    }
}
exports.CarService = CarService;
