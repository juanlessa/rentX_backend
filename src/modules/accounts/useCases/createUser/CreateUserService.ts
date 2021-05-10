import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

@injectable()
class CreateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute({
        name,
        password,
        email,
        driver_license,
        avatar,
        id,
    }: ICreateUserDTO) {
        const passwordHash = await hash(password, 8);

        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("user already exists");
        }

        await this.usersRepository.create({
            name,
            password: passwordHash,
            email,
            driver_license,
            avatar,
            id,
        });
    }
}

export { CreateUserService };
