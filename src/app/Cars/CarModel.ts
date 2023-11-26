import { Model, ModelObject } from "objection";
import { CarBrandModel } from "./../CarBrands/CarBrandModel";
import CarTransmissionModel from "../CarTransamissions/CarTransmissionModel";
import { CarTypeModel } from "../CarTypes/CarTypeModel";

export class CarModel extends Model {
  id!: string;
  name!: string;
  price!: number;
  year?: number;
  size!: string;
  availability?: boolean;
  capacity!: number;
  description?: string;
  picture_url!: string;
  available_at?: Date;
  updated_at!: Date;
  is_deleted?: boolean;
  car_brand_id?: string;
  car_transmission_id?: string;
  car_type_id?: string;

  static relationMappings = {
    carBrand: {
      relation: Model.BelongsToOneRelation,
      modelClass: CarBrandModel,
      join: {
        from: "car.car_brand_id",
        to: "car_brand.id",
      },
    },
    carTransmission: {
      relation: Model.BelongsToOneRelation,
      modelClass: CarTransmissionModel,
      join: {
        from: "car.car_transmission_id",
        to: "car_transmission.id",
      },
    },
    carType: {
      relation: Model.BelongsToOneRelation,
      modelClass: CarTypeModel,
      join: {
        from: "car.car_type_id",
        to: "car_type.id",
      },
    },
  };

  static get tableName() {
    return "car";
  }
}

export type Car = ModelObject<CarModel>;
