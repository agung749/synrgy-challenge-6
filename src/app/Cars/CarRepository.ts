import { CarModel } from "./CarModel";

export class CarRepository {

    async getAll(): Promise<CarModel[]> {
        return await CarModel.query();
    }

    async getById(id: string): Promise<CarModel | undefined> {
        return await CarModel.query().findById(id);
    }

    async create(car: Partial<CarModel>): Promise<CarModel> {
        return await CarModel.query().insert(car);
    }

    async update(id: string, car: Partial<CarModel>): Promise<CarModel> {
        const updatedCar = await CarModel.query().patchAndFetchById(id, car);
        return updatedCar;
    }

    async delete(id: string): Promise<void> {
        await CarModel.query().deleteById(id);
    }
}