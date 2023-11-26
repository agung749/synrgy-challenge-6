import CarTransmissionModel, { CarTransmission } from "./CarTransmissionModel";
import { Repository } from "../Repositories/Repository";
import { CarTransmissionReqDto } from "./CarTransmissionDto";
import { NotFoundException } from "../../exceptions/NotFoundException";
import executeTransactionAsync from "../Repositories/ExecuteTransactionAsync";


export class CarTransmissionService {
  private carTransmissionRepo: Repository<CarTransmissionModel>;

  constructor() {
    this.carTransmissionRepo = new Repository(CarTransmissionModel);
  }

  async getAll(): Promise<CarTransmissionModel[]> {
    return await this.carTransmissionRepo.findAll();
  }

  async getById(id: string): Promise<CarTransmissionModel> {
    const carBrand = await this.carTransmissionRepo.findById(id);
    if (!carBrand) throw new NotFoundException("Data transmisi tidak ditemukan");
    return carBrand;
  }

  async create(carBrandReq: CarTransmissionReqDto): Promise<CarTransmissionModel> {
    const result = await executeTransactionAsync(async() => {
      const brand: Partial<CarTransmissionModel> = {
        name: carBrandReq.name,
      };
      return await this.carTransmissionRepo.save(brand);
    })
    return result;
  }

  async update(id: string, carBrandReq: CarTransmissionReqDto): Promise<CarTransmissionModel> {
    const result = await executeTransactionAsync(async () => {
      let carBrand = await this.getById(id);
      carBrand.name = carBrandReq.name;
      return await this.carTransmissionRepo.update(id, carBrand);
    })
    return result;
  }
}
