import "reflect-metadata";

import { CreateCarService } from "./CreateCarService";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import AppError from "@errors/AppError";

let carsRepositoryInMemory: ICarsRepository;
let createCarService: CreateCarService;

describe("Create Car", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarService = new CreateCarService(carsRepositoryInMemory);
    });
    it("should be able to create a new car", async () => {
        const car = await createCarService.execute({
            name: "Name Car",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category",
        });

        expect(car).toHaveProperty("id");
    });

    it("should not be able to create a car with a exists license plate", () => {
        expect(async () => {
            await createCarService.execute({
                name: "Car1",
                description: "Description Car",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Brand",
                category_id: "category",
            });
            await createCarService.execute({
                name: "Car2",
                description: "Description Car",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Brand",
                category_id: "category",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should be able to create a car with available true", async () => {
        const car = await createCarService.execute({
            name: "Name Car",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category",
        });

        expect(car.available).toBe(true);
    });
});
