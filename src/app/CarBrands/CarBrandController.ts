import { CarBrandService } from "./CarBrandService";
import { Request, Response, NextFunction } from "express";
import { CarBrandReqDto } from "./CarBrandDto";

const carBrandService = new CarBrandService();
class CarBrandController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    const carBrand = await carBrandService.getAll();

    res.status(200).json({
      message: "Berhasil mendapatkan data brand mobil",
      data: carBrand,
    });
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      res.status(200).json({
        message: "Berhasil mendapatkan data brand mobil",
        data: await carBrandService.getById(id),
      });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const createBrand: CarBrandReqDto = req.body;

      res.status(200).json({
        message: "Berhasil membuat data brand mobil",
        data: await carBrandService.create(createBrand),
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const updatedData: CarBrandReqDto = req.body;
      res.status(200).json({
        message: "Berhasil memperbarui data brand mobil",
        data: await carBrandService.update(id, updatedData),
      });
    } catch (error) {
      next(error);
    }
  }
}

export default CarBrandController;
