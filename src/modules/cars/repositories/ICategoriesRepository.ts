import Category from "../models/Category";

interface ICategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    create({ name, description }: ICategoryDTO): void;
    list(): Category[];
}

export { ICategoriesRepository, ICategoryDTO };
