import { AppDataSource } from "../../data-source";
import { Schedule } from "../../entities";
import { SchedulesRepository } from "../../interfaces/schedules.interfaces/schedules.interfaces";

export const scheduleRepository: SchedulesRepository =
  AppDataSource.getRepository(Schedule);
