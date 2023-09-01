import { z } from "zod";
import { Schedule, RealEstate } from "../../entities";
import { Repository } from "typeorm";
import {
  scheduleCreateSchema,
  schedulesResult,
} from "../../schemas/schedules.schemas/schedules.schemas";

export type ScheduleAndRealEstate = {
  schedule: Schedule;
  realEstates: RealEstate;
};

export type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;
export type ScheduleSearch = Array<ScheduleAndRealEstate>;

export type SchedulesRepository = Repository<Schedule>;

export type ScheduleReturn = z.infer<typeof schedulesResult>;
