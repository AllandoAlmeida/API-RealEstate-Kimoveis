import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError.errors";

export const checkUserIdForScheduling = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  const userId = response.locals.decoded.sub;

  if (userId !== response.locals.decoded.sub) {
    throw new AppError("Permissão insuficiente", 403);
  }

  response.locals.id = Number(userId);
  return next();
};
