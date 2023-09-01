import { z } from "zod";
import {
  CategoryCreateSchema,
  CategoryResult,
} from "../../schemas/categories.schemas/categories.schemas";
import { Category } from "../../entities";
import { Repository } from "typeorm";

export type CategoryCreate = z.infer<typeof CategoryCreateSchema>;
export type CategorySearch = Array<Category>;
export type CategoryRepository = Repository<Category>;
export type CategoryReturn = z.infer<typeof CategoryResult>;
