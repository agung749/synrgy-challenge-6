import { Model, ModelObject } from "objection";

export default class CarTransmissionModel extends Model {
  id!: string;
  name!: string;

  static get tableName() {
    return "car_transmission";
  }
}

export type CarTransmission = ModelObject<CarTransmissionModel>;
