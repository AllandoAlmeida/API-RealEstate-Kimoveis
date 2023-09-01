import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { UserRepository } from "../../interfaces/users.interfaces/users.interfaces";

export const userRepository: UserRepository = AppDataSource.getRepository(User);
