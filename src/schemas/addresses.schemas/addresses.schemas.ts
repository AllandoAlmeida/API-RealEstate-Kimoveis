import { z } from "zod";

export const addressSchema = z.object({
  id: z.number().positive(),
  street: z.string().max(45).nonempty(),
  zipCode: z.string().max(8).nonempty(),
  number: z.number().positive().int(),
  city: z.string().max(20),
  state: z.string().max(2),
});

export const addressCreateSchema = addressSchema.omit({ id: true });
