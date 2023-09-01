import { Router } from "express";
import {
  createRealEstates,
  searchRealEstates,
} from "../../controllers/realEstates.controller/realEstates.controller";
import { checkExistingAddress } from "../../middlewares/address.middlewares/checkExistingAddress.middlewares";
import { checkUserPermission } from "../../middlewares/allChecks.middlewares/checkUserPermission.middlewares";
import { checkValidBody } from "../../middlewares/allChecks.middlewares/checkValidBody.middlewares";
import { checkValidToken } from "../../middlewares/allChecks.middlewares/checkValidToken.middlewares";
import { realEstatesCreateSchema } from "../../schemas/realEstates.schemas/realEstates.schemas";

export const realEstatesRouter: Router = Router();

realEstatesRouter.post(
  "",
  checkValidToken,
  checkUserPermission,
  checkValidBody(realEstatesCreateSchema),
  checkExistingAddress,
  createRealEstates
);

realEstatesRouter.get("", searchRealEstates);
