import { Router } from "express";
import {
  createCategory,
  searchAllCategories,
  searchCategoryById,
} from "../../controllers/categories.controllers/categories.controllers";
import { checkExistingNameCategory } from "../../middlewares/categories.middlewares/checkExistingNameCategory.middlewares";
import { checkValidToken } from "../../middlewares/allChecks.middlewares/checkValidToken.middlewares";
import { checkUserPermission } from "../../middlewares/allChecks.middlewares/checkUserPermission.middlewares";
import { checkExistingId } from "../../middlewares/categories.middlewares/checkExistingId.middlewares";

export const categoriesRouter: Router = Router();

categoriesRouter.post(
  "",
  checkExistingNameCategory,
  checkValidToken,
  checkUserPermission,
  createCategory
);
categoriesRouter.get("", searchAllCategories);
categoriesRouter.get("/:id/realEstate", checkExistingId, searchCategoryById);
