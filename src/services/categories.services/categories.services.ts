import { Category } from "../../entities";
import {
  CategoryCreate,
  CategoryReturn,
  CategorySearch,
} from "../../interfaces/categories.interfaces/categories.interfaces";
import { categoryRespository } from "../../repositories/category.repositories/category.respositories";

export const addNewCategory = async (
  categoryBody: CategoryCreate
): Promise<CategoryReturn> => {
  const newCategory: Category = categoryRespository.create(categoryBody);
  return await categoryRespository.save(newCategory);
};

export const getAllCategories = async (): Promise<CategorySearch> => {
  return await categoryRespository.find();
};

export const getRealEstatesByCategoryId = async (
  categoryId: number
): Promise<Category | null> => {
  const category: Category | null = await categoryRespository.findOne({
    where: {
      id: categoryId,
    },
    relations: ["realEstate"],
  });
  return category;
};
