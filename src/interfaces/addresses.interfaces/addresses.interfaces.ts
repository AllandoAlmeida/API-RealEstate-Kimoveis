import { z } from "zod";
import { addressCreateSchema } from "../../schemas/addresses.schemas/addresses.schemas";
import { Repository } from "typeorm";
import { Address } from "../../entities";

export type AddressCreate = z.infer<typeof addressCreateSchema>;
export type AddressRepositoy = Repository<Address>;
