import { z } from "zod";
import {
  usersCreateSchema,
  usersResult,
  usersUpDateSchemaOmitAdm,
} from "../../schemas/user.schemas.ts/user.schemas";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../../entities";

export type UsersCreate = z.infer<typeof usersCreateSchema>;
export type UsersSearch = Array<User>;
export type UsersUpdate = DeepPartial<User>;
export type UserRepository = Repository<User>;
export type UsersReturn = z.infer<typeof usersResult>;
export type UserUpdateOmitAdm = z.infer<typeof usersUpDateSchemaOmitAdm>;
