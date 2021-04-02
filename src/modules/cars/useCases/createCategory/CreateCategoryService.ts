import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}
    execute({ name, description }) {}
}
export default CreateCategoryService;
