import { Schedule, RealEstate } from "../../entities";
import { AppError } from "../../errors/AppError.errors";
import { ScheduleCreate } from "../../interfaces/schedules.interfaces/schedules.interfaces";
import { realEstatesRepository } from "../../repositories/realEstates.repositories/realEstates.Respositories";
import { scheduleRepository } from "../../repositories/schedules.repositories/schedules.repositories";

export const createSchedule = async (
  userId: number,
  scheduleBody: ScheduleCreate
): Promise<Schedule> => {
  const { realEstateId, ...body } = scheduleBody;

  const existingRealEstateId: RealEstate | null =
    await realEstatesRepository.findOneBy({
      id: realEstateId,
    });

  if (!existingRealEstateId) {
    throw new AppError("RealEstate not found", 404);
  }

  const dateTime = new Date(body.date + " " + body.hour);

  const dayOfTheWeek = dateTime.getDay();
  const businessHours = dateTime.getHours();

  if (dayOfTheWeek < 1 || dayOfTheWeek > 5) {
    throw new AppError("Invalid date, work days are monday to friday");
  }

  if (businessHours < 8 || businessHours > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM");
  }

  const newSchedule = scheduleRepository.create({
    realEstate: existingRealEstateId,
    user: { id: userId },
    ...body,
  });
  await scheduleRepository.save(newSchedule);

  return newSchedule;
};

export const getRealEstatesScheduleById = async (
  realEstateId: number
): Promise<RealEstate> => {
  const realEstate: RealEstate | null = await realEstatesRepository.findOne({
    where: {
      id: realEstateId,
    },
    relations: {
      schedules: {
        user: true,
      },
      address: true,
      category: true,
    },
  });

  if (!realEstate) throw new AppError("RealEstate not found", 404);
  return realEstate;
};
