import Specification from "../models/Specification";

interface ISpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ description, name }: ISpecificationDTO): void;
    findByName(name: string): Specification;
}

export { ISpecificationDTO, ISpecificationsRepository };
