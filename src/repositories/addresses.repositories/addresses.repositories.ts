import { AppDataSource } from "../../data-source";
import { Address } from "../../entities";
import { AddressRepositoy } from "../../interfaces/addresses.interfaces/addresses.interfaces";

export const addressesRepository: AddressRepositoy =
  AppDataSource.getRepository(Address);
