import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError.errors";

export const checkUserPermission = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  const { id } = request.params;
  const { sub, admin } = response.locals.decoded;

  if (admin) {
    return next();
  }

  if (id !== sub) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
