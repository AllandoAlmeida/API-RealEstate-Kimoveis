import { usersSchema } from "../user.schemas.ts/user.schemas";

export const sessionCreate = usersSchema.pick({
  email: true,
  password: true,
});
