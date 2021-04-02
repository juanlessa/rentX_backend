import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import Category from "../../models/Category";
interface IRequest {
    name: string;
    description: string;
}

class ListCategoriesService {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute(): Category[] {
        const categories = this.categoriesRepository.list();
        return categories;
    }
}

export default ListCategoriesService;
