import { NotFoundException } from "../../exceptions/NotFoundException";
import executeTransactionAsync from "../Repositories/ExecuteTransactionAsync";
import { Repository } from "../Repositories/Repository";
import { CarTypeReqDto } from "./CarTypeDto";
import { CarTypeModel } from "./CarTypeModel";
const { v4: uuidv4 } = require("uuid");

export class CarTypeService {
  private carTypeRepo: Repository<CarTypeModel>;
  constructor() {
    this.carTypeRepo = new Repository(CarTypeModel);
  }

  async getAll(): Promise<CarTypeModel[]> {
    return await this.carTypeRepo.findAll();
  }

  async getById(id: string): Promise<CarTypeModel> {
    const carBrand = await this.carTypeRepo.findById(id);
    if (!carBrand) throw new NotFoundException("Data car type tidak ditemukan");
    return carBrand;
  }

  async create(carBrandReq: CarTypeReqDto): Promise<CarTypeModel> {
    const result = await executeTransactionAsync(async () => {
      const brand: Partial<CarTypeModel> = {
        id: uuidv4(),
        name: carBrandReq.name,
      };
      return await this.carTypeRepo.save(brand);
    });
    return result;
  }

  async update(id: string, carBrandReq: CarTypeReqDto): Promise<CarTypeModel> {
    const result = await executeTransactionAsync(async () => {
      let carBrand = await this.getById(id);
      carBrand.name = carBrandReq.name;
      return await this.carTypeRepo.update(id, carBrand);
    });
    return result;
  }
}
