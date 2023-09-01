import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { ReaLEstatesRepository } from "../../interfaces/realEstates.interfaces/realEstates.interfaces";

export const realEstatesRepository: ReaLEstatesRepository =
  AppDataSource.getRepository(RealEstate);
