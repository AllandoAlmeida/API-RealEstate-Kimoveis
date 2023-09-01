import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError.errors";
import { addressesRepository } from "../../repositories/addresses.repositories/addresses.repositories";
import { Address } from "../../entities";

export const checkExistingAddress = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { street, zipCode, number, city, state } = request.body.address;

  const existingAddress: Address | null = await addressesRepository.findOne({
    where: { street, zipCode, number, city, state },
  });

  if (existingAddress) {
    throw new AppError("Address already exists", 409);
  }

  return next();
};
