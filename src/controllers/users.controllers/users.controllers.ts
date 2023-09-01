import { Request, Response } from "express";
import { User } from "../../entities";
import {
  addNewUser,
  getAllUsers,
  softDeleteByIdUser,
  updateUserById,
} from "../../services/users.services/users.services";
import { usersResult } from "../../schemas/user.schemas.ts/user.schemas";
import { UsersReturn } from "../../interfaces/users.interfaces/users.interfaces";

export const UserCreation = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const newUser: UsersReturn = await addNewUser(request.body);
  return response.status(201).json(newUser);
};

export const searchUsers = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const formatUser = (user: User) => {
    return usersResult.parse(user);
  };
  const users: Array<User> = await getAllUsers();
  const formattedUserList = users.map(formatUser);
  return response.status(200).json(formattedUserList);
};

export const upDateUsers = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const { existingId } = response.locals;
  const { body } = request;

  const updatedUser: UsersReturn = await updateUserById(existingId, body);
  return response.status(200).json(updatedUser);
};

export const softDeleteOnUser = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const { existingId } = response.locals;
  await softDeleteByIdUser(existingId);
  return response.status(204).json();
};
