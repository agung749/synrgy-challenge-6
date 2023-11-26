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
const CarService_1 = require("./CarService");
const carService = new CarService_1.CarService();
class CarController {
    getAll(req, res, _next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name = "", size = "", availability = "" } = req.query || {};
            let cars = yield carService.getAll(name.toString(), size.toString(), availability.toString());
            res.status(200).json({
                message: "Berhasil mendapatkan data mobil",
                data: cars,
            });
        });
    }
    getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const result = yield carService.getById(id);
                res.status(200).json({
                    message: "Berhasil mendapatkan data mobil",
                    data: result,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            try {
                res.status(201).json({
                    message: "Data berhasil disimpan",
                    data: yield carService.create(body),
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const body = req.body;
                res.status(200).json({
                    message: "Data berhasil disimpan",
                    data: yield carService.update(id, body),
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield carService.delete(id);
                res.status(200).json({
                    message: "Data berhasil dihapus",
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = CarController;
