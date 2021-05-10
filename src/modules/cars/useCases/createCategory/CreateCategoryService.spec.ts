import "reflect-metadata";
import CreateCategoryService from "./CreateCategoryService";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import AppError from "@errors/AppError";

let createCategoryService: CreateCategoryService;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("create category", () => {
    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryService = new CreateCategoryService(
            categoriesRepositoryInMemory
        );
    });

    it("should be able to create a new category", async () => {
        const category = {
            name: "Category name Test",
            description: "Category description Test",
        };

        await createCategoryService.execute({
            name: category.name,
            description: category.description,
        });

        const categoryCreated = await categoriesRepositoryInMemory.findByName(
            category.name
        );

        expect(categoryCreated).toHaveProperty("id");
    });

    it("should not be able to create a new category with a name that already exists", async () => {
        const category = {
            name: "Category name Test",
            description: "Category description Test",
        };

        expect(async () => {
            await createCategoryService.execute({
                name: category.name,
                description: category.description,
            });

            await createCategoryService.execute({
                name: category.name,
                description: category.description,
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
