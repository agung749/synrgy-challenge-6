import { Model, ModelObject } from "objection";
import { CarModel } from "../Cars/CarModel";
export class CarTypeModel extends Model {
  id!: string;
  name!: string;
  carList!: CarModel[];

  static get tableName() {
    return "car_type";
  }

}

export type CarType = ModelObject<CarTypeModel>;
