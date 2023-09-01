import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError.errors";
import { userRepository } from "../../repositories/user.repositories/user.repositories";

export const checkExistingEmail = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = request.body;

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!email) return next();

  if (user) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
