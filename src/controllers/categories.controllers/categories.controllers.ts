import { Request, Response } from "express";
import { CategoryReturn } from "../../interfaces/categories.interfaces/categories.interfaces";
import {
  addNewCategory,
  getAllCategories,
  getRealEstatesByCategoryId,
} from "../../services/categories.services/categories.services";

export const createCategory = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const newCategory: CategoryReturn = await addNewCategory(request.body);
  return response.status(201).json(newCategory);
};

export const searchAllCategories = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const listCategories = await getAllCategories();
  return response.status(200).json(listCategories);
};

export const searchCategoryById = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const categoryId = response.locals.id;

  const realEstates = await getRealEstatesByCategoryId(categoryId);
  return response.status(200).json(realEstates);
};
