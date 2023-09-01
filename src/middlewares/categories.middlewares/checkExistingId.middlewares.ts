import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError.errors";
import { Category } from "../../entities";
import { categoryRespository } from "../../repositories/category.repositories/category.respositories";

export const checkExistingId = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const existingId: Category | null = await categoryRespository.findOneBy({
    id: Number(request.params.id),
  });

  if (!existingId) throw new AppError("Category not found", 404);

  response.locals = { ...response.locals, existingId };
  return next();
};
