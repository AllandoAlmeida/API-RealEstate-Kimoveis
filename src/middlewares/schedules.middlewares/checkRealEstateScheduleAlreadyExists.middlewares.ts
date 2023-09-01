import { Request, Response, NextFunction } from "express";
import { Schedule } from "../../entities";
import { AppError } from "../../errors/AppError.errors";
import { scheduleRepository } from "../../repositories/schedules.repositories/schedules.repositories";

export const checkRealEstateScheduleAlreadyExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { realEstateId, date, hour } = request.body;

  const existingUserSchedule: Schedule | null =
    await scheduleRepository.findOne({
      where: { realEstate: { id: realEstateId }, date, hour },
    });

  if (existingUserSchedule) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  return next();
};
