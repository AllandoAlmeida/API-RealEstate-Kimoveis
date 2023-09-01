import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { CategoryRepository } from "../../interfaces/categories.interfaces/categories.interfaces";

export const categoryRespository: CategoryRepository =
  AppDataSource.getRepository(Category);
