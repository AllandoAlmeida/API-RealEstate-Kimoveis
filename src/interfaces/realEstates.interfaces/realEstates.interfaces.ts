import { Repository } from "typeorm";
import { RealEstate } from "../../entities";
import {
  realEstatesCreateSchema,
  realEstatesSchema,
} from "../../schemas/realEstates.schemas/realEstates.schemas";
import { AddressCreate } from "../addresses.interfaces/addresses.interfaces";
import { z } from "zod";

export type RealEstateAndAddress = {
  realEstates: RealEstatesCreate;
  address: AddressCreate;
};

export type RealEstatesCreate = z.infer<typeof realEstatesCreateSchema>;
export type RealEstatesSearch = Array<RealEstateAndAddress>;
export type RealEstateReturn = z.infer<typeof realEstatesSchema>;
export type ReaLEstatesRepository = Repository<RealEstate>;
