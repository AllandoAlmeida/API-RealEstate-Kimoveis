import { z } from "zod";

export const usersSchema = z.object({
  id: z.number().positive(),
  name: z
    .string()
    .max(45, "String must contain at most 45 character(s)")
    .nonempty(),
  email: z.string().email("Invalid email").max(45),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.date().nullable().or(z.string()),
});

export const usersCreateSchema = usersSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});
export const usersResult = usersSchema.omit({ password: true });
export const usersUpDateSchemaOmitAdm = usersSchema.omit({ admin: true });
export const usersUpDateSchema = usersCreateSchema.partial();
