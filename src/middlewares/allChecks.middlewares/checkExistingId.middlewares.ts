import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError.errors";
import { User } from "../../entities";
import { userRepository } from "../../repositories/user.repositories/user.repositories";

export const checkExistingId = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const existingId: User | null = await userRepository.findOneBy({
    id: Number(request.params.id),
  });

  if (!existingId) throw new AppError("User not found", 404);

  response.locals = { ...response.locals, existingId };
  return next();
};
