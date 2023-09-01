import { z } from "zod";

export const categorySchema = z.object({
  id: z.number().positive(),
  name: z
    .string()
    .max(45, "String must contain at most 45 character(s)")
    .nonempty(),
});

export const CategoryCreateSchema = categorySchema.omit({ id: true });
export const CategoryResult = CategoryCreateSchema;
