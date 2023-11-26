import { CarBrand, CarBrandModel } from "./CarBrandModel";
import { Repository } from "../Repositories/Repository";
import { CarBrandReqDto } from "./CarBrandDto";
import { NotFoundException } from "../../exceptions/NotFoundException";
import executeTransactionAsync from "../Repositories/ExecuteTransactionAsync";
const { v4: uuidv4 } = require("uuid");

export class CarBrandService {
  private carBrandRepo: Repository<CarBrandModel>;

  constructor() {
    this.carBrandRepo = new Repository(CarBrandModel);
  }

  async getAll(): Promise<CarBrandModel[]> {
    return await this.carBrandRepo.findAll();
  }

  async getById(id: string): Promise<CarBrandModel> {
    const carBrand = await this.carBrandRepo.findById(id);
    if (!carBrand) throw new NotFoundException("Data car brand tidak ditemukan");
    return carBrand;
  }

  async create(carBrandReq: CarBrandReqDto): Promise<CarBrandModel> {
    const result = await executeTransactionAsync(async() => {
      const brand: Partial<CarBrandModel> = {
        id: uuidv4(),
        name: carBrandReq.name,
      };
      return await this.carBrandRepo.save(brand);
    })
    return result;
  }

  async update(id: string, carBrandReq: CarBrandReqDto): Promise<CarBrandModel> {
    const result = await executeTransactionAsync(async() => {
      let carBrand = await this.getById(id);
      carBrand.name = carBrandReq.name;
      return await this.carBrandRepo.update(id, carBrand);
    })
    return result
  }
}
