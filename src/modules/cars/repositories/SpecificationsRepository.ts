import {
    ISpecificationsRepository,
    ISpecificationDTO,
} from "./ISpecificationsRepository";

import Specification from "../models/Specification";

class SpecificationsRepository implements ISpecificationsRepository {
    private sprecifications: Specification[];

    constructor() {
        this.sprecifications = [];
    }
    create({ description, name }: ISpecificationDTO) {
        const specification = new Specification();
        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.sprecifications.push(specification);
    }
    findByName(name: string): Specification {
        const specification = this.sprecifications.find(
            (specification) => specification.name === name
        );

        return specification;
    }
}
export default SpecificationsRepository;
