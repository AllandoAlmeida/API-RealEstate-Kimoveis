import { z } from "zod";
import { addressSchema } from "../addresses.schemas/addresses.schemas";
import { CategoryResult } from "../categories.schemas/categories.schemas";
import { usersResult } from "../user.schemas.ts/user.schemas";

export const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
});

export const scheduleCreateSchema = scheduleSchema
  .omit({ id: true })
  .extend({ realEstateId: z.number() });
export const schedulesResult = scheduleSchema.extend({
  user: usersResult,
  category:CategoryResult,
  address:addressSchema
})