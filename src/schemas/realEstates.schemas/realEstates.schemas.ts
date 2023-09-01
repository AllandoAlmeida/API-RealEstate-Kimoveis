import { z } from "zod";
import {
  addressCreateSchema,
  addressSchema,
} from "../addresses.schemas/addresses.schemas";

export const realEstatesSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.string().or(z.number()),
  size: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  address: addressSchema,
});

export const realEstatesCreateSchema = realEstatesSchema
  .omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true })
  .extend({ categoryId: z.number(), address: addressCreateSchema });
