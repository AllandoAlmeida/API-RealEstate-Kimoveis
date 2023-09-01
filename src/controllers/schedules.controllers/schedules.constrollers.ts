import { Request, Response } from "express";
import {
  createSchedule,
  getRealEstatesScheduleById,
} from "../../services/schedules.services/schedules.services";
import { AppError } from "../../errors/AppError.errors";

export const createAnAppointmentToVisitTheProperty = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId = response.locals.id;
  await createSchedule(userId, request.body);
  return response.status(201).json({ message: "Schedule created" });
};

export const getRealEstatesSchedules = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const { admin } = response.locals.decoded;
  if (!admin) {
    throw new AppError("Insufficient permission", 403);
  }
  const id: number = Number(request.params.id);
  const realEstate = await getRealEstatesScheduleById(id);
  return response.status(200).send(realEstate);
};
