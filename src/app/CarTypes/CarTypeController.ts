import { Request, Response, NextFunction } from "express";
import { CarTypeReqDto } from "./CarTypeDto";
import { CarTypeModel } from "./CarTypeModel";
import { CarTypeService } from "./CarTypeService";

const carTypeService = new CarTypeService();
class CarTypeController {
    async getAll(req: Request, res: Response, next: NextFunction) {
        const carBrand = await carTypeService.getAll();
        res.status(200).json({
          message: "Berhasil mendapatkan data tipe mobil",
          data: carBrand,
        });
      }
    
      async getById(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        try {
          res.status(200).json({
            message: "Berhasil mendapatkan data tipe mobil",
            data: await carTypeService.getById(id),
          });
        } catch (error) {
          next(error);
        }
      }
    
      async create(req: Request, res: Response, next: NextFunction) {
        try {
          const createBrand: CarTypeReqDto = req.body;
          res.status(201).json({
            message: "Berhasil membuat data tipe mobil",
            data: await carTypeService.create(createBrand),
          });
        } catch (error) {
          next(error);
        }
      }
    
      async update(req: Request, res: Response, next: NextFunction) {
        try {
          const { id } = req.params;
          const updatedData: CarTypeReqDto = req.body;
          res.status(200).json({
            message: "Berhasil memperbarui data tipe mobil",
            data: await carTypeService.update(id, updatedData),
          });
        } catch (error) {
          next(error);
        }
      }
}
export default CarTypeController