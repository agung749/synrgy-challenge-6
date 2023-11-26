import { Model, ModelObject } from "objection";
import { CarModel } from "../Cars/CarModel";

export class CarBrandModel extends Model {
  id!: string;
  name!: string;

  static get tableName() {
    return "car_brand";
  }
}

export type CarBrand = ModelObject<CarBrandModel>
