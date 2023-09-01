import { Router } from "express";
import { checkValidToken } from "../../middlewares/allChecks.middlewares/checkValidToken.middlewares";
import { checkUserIdForScheduling } from "../../middlewares/schedules.middlewares/checkUserIdForScheduling.middlewares";
import {
  createAnAppointmentToVisitTheProperty,
  getRealEstatesSchedules,
} from "../../controllers/schedules.controllers/schedules.constrollers";
import { checkUserScheduleAlreadyExists } from "../../middlewares/schedules.middlewares/checkTheExistingSchedule.middlewares";
import { scheduleCreateSchema } from "../../schemas/schedules.schemas/schedules.schemas";
import { checkValidBody } from "../../middlewares/allChecks.middlewares/checkValidBody.middlewares";
import { checkRealEstateScheduleAlreadyExists } from "../../middlewares/schedules.middlewares/checkRealEstateScheduleAlreadyExists.middlewares";
import { checkUserPermission } from "../../middlewares/allChecks.middlewares/checkUserPermission.middlewares";

export const schedulesRouter: Router = Router();

schedulesRouter.post(
  "",
  checkValidToken,
  checkValidBody(scheduleCreateSchema),
  checkRealEstateScheduleAlreadyExists,
  checkUserScheduleAlreadyExists,
  checkUserIdForScheduling,
  createAnAppointmentToVisitTheProperty
);

schedulesRouter.get(
  "/realEstate/:id",
  checkValidToken,
  checkUserPermission,
  getRealEstatesSchedules
);
