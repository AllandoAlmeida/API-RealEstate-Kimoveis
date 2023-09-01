import { Request, Response, NextFunction } from "express";
import { Schedule } from "../../entities";
import { AppError } from "../../errors/AppError.errors";
import { scheduleRepository } from "../../repositories/schedules.repositories/schedules.repositories";

export const checkUserScheduleAlreadyExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { userId, realEstateId, date, hour } = request.body;

  const existingUserSchedule: Schedule | null =
    await scheduleRepository.findOne({
      where: { user: { id: userId }, date, hour },
    });

  if (existingUserSchedule) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  return next();
};
