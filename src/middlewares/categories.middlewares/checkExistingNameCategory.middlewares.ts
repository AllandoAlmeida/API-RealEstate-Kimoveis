import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError.errors";
import { categoryRespository } from "../../repositories/category.repositories/category.respositories";

export const checkExistingNameCategory = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = request.body;

  const category = await categoryRespository.findOneBy({
    name: name,
  });

  if (!name) return next();

  if (category) {
    throw new AppError("Category already exists", 409);
  }

  return next();
};
