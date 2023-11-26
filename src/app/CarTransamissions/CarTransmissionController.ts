import { CarTransmissionService } from "./CarTransmissionService";
import { Request, Response, NextFunction } from "express";
import { CarTransmissionReqDto } from "./CarTransmissionDto";

const carTransmissionRepo = new CarTransmissionService();
class CarTransmissionController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    const carBrand = await carTransmissionRepo.getAll();

    res.status(200).json({
      message: "Berhasil mendapatkan data mobil",
      data: carBrand,
    });
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      res.status(200).json({
        message: "Berhasil mendapatkan data mobil",
        data: await carTransmissionRepo.getById(id),
      });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const createBrand: CarTransmissionReqDto = req.body;

      res.status(200).json({
        message: "Berhasil membuat mobil",
        data: await carTransmissionRepo.create(createBrand),
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const updatedData: CarTransmissionReqDto = req.body;
      res.status(200).json({
        message: "Berhasil memperbarui data mobil",
        data: await carTransmissionRepo.update(id, updatedData),
      });
    } catch (error) {
      next(error);
    }
  }
}

export default CarTransmissionController;
