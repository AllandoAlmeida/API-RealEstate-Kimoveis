import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError.errors";
import { categoryRespository } from "../../repositories/category.repositories/category.respositories";
import { Category } from "../../entities";

export const checkExistingCategoryById = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = request.body;

  const categoryId: Category | null = await categoryRespository.findOneBy({
    id: id,
  });

  if (categoryId) return next();

  if (!categoryId) {
    throw new AppError("Category already exists", 409);
  }

  response.locals = { ...response.locals, categoryId };

  return next();
};
