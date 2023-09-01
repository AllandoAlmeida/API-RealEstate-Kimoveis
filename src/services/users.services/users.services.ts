import { User } from "../../entities";
import {
  UsersCreate,
  UsersReturn,
  UsersUpdate,
} from "../../interfaces/users.interfaces/users.interfaces";
import { userRepository } from "../../repositories/user.repositories/user.repositories";
import { usersResult } from "../../schemas/user.schemas.ts/user.schemas";

export const addNewUser = async (
  userBody: UsersCreate
): Promise<UsersReturn> => {
  const newUser: User = userRepository.create(userBody);
  return usersResult.parse(await userRepository.save(newUser));
};

export const getAllUsers = async (): Promise<Array<User>> => {
  const users: Array<User> = await userRepository.find();
  return users;
};

export const updateUserById = async (
  user: User,
  userBody: UsersUpdate
): Promise<UsersReturn> => {
  const { admin, ...updateData } = userBody;

  const updatedUser = usersResult.parse(
    await userRepository.save({ ...user, ...updateData })
  );
  return updatedUser;
};

export const softDeleteByIdUser = async (user: User): Promise<void> => {
  await userRepository.softRemove(user);
};
