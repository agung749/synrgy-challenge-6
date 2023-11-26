import { CarModel } from "./CarModel";
import { NotFoundException } from "../../exceptions/NotFoundException";
import { CarRequestDto } from "./CarDto";
import { Repository } from "../Repositories/Repository";
import executeTransactionAsync from "../Repositories/ExecuteTransactionAsync";
const { v4: uuidv4 } = require("uuid");

let currTime = new Date();
currTime.setHours(currTime.getHours() + 7);
export class CarService {
  private carRepo: Repository<CarModel>;

  constructor() {
    this.carRepo = new Repository(CarModel);
  }

  async getAll(name?: string, size?: string, availability?: string): Promise<CarModel[]> {
    const searchPattern = new RegExp(name?.toString() || "", "i");
    const isAvailable = availability?.toLowerCase() == "true";

    const criteria = {
      is_deleted: false,
    };

    let filterParams = [
      { filterName: name, isEmpty: !name, condition: (car: CarModel) => searchPattern.test(car.name) },
      {
        filterName: size,
        isEmpty: !size,
        condition: (car: CarModel) => car.size.toUpperCase() === size?.toString().toUpperCase(),
      },
      {
        filterName: availability,
        isEmpty: !availability,
        condition: (car: CarModel) => car.availability === isAvailable,
      },
    ];

    let cars = await this.carRepo.findAllWithCriteriaAndJoin(criteria, ["carBrand", "carTransmission", "carType"]);
    for (const filter of filterParams) {
      if (!filter.isEmpty) {
        cars = cars.filter(filter.condition);
      }
    }

    return cars;
  }

  async getById(id: string): Promise<CarModel> {
    const criteria = {
      id: id,
      is_deleted: false,
    };

    const car = await this.carRepo.findWithJoin(criteria, ["carType", "carBrand", "carTransmission"]);
    if (!car) {
      throw new NotFoundException("Data mobil tidak ditemukan");
    } else {
      return car;
    }
  }

  async create(carRequest: CarRequestDto): Promise<CarModel> {
    let availableTime = currTime;
    if (carRequest.available_at) {
      availableTime = new Date(carRequest.available_at);
      availableTime.setHours(availableTime.getHours() + 7);
    }
    const result = await executeTransactionAsync(async () => {
      const car: Partial<CarModel> = {
        id: uuidv4(),
        name: carRequest.name,
        price: carRequest.price,
        size: carRequest.size,
        picture_url: carRequest.picture_url ?? "",
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

      return await this.carRepo.save(car);
    });
    return result;
  }

  async update(id: string, carRequest: CarRequestDto): Promise<CarModel> {
    const result = await executeTransactionAsync(async () => {
      let carUpdate: CarModel = await this.getById(id);

      carUpdate.name = carRequest.name;
      carUpdate.price = carRequest.price;
      carUpdate.size = carRequest.size;
      carUpdate.updated_at = currTime;
      carUpdate.year = carRequest.year;
      carUpdate.availability = carRequest.availability;
      carUpdate.capacity = carRequest.capacity;
      carUpdate.description = carRequest.description;
      carUpdate.available_at = carRequest.available_at;
      carUpdate.picture_url = carRequest.picture_url ?? carUpdate.picture_url;
      carUpdate.car_brand_id = carRequest.car_brand_id ?? carUpdate.car_brand_id;
      carUpdate.car_transmission_id = carRequest.car_transmission_id ?? carUpdate.car_transmission_id;
      carUpdate.car_type_id = carRequest.car_type_id ?? carUpdate.car_type_id;

      return await this.carRepo.update(id, carUpdate);
    });
    return result;
  }

  // hard delete
  async delete(id: string): Promise<void> {
    await executeTransactionAsync(async () => {
      await this.getById(id);
      await this.carRepo.delete(id);
    });
  }

  // soft delete
  // async delete(id: string): Promise<void> {
  //   let findCar = await this.getById(id);
  //   findCar.is_deleted = true;
  //   try {
  //     await this.carRepo.update(id, findCar);
  //   } catch (error) {
  //     throw new Error(`${error}`);
  //   }
  // }
}
