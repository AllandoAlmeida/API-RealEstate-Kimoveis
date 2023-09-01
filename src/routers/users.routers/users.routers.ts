import { Router } from "express";
import {
  UserCreation,
  searchUsers,
  softDeleteOnUser,
  upDateUsers,
} from "../../controllers/users.controllers/users.controllers";
import { checkValidBody } from "../../middlewares/allChecks.middlewares/checkValidBody.middlewares";
import {
  usersCreateSchema,
  usersUpDateSchema,
} from "../../schemas/user.schemas.ts/user.schemas";
import { checkExistingEmail } from "../../middlewares/allChecks.middlewares/checkExistingEmail.middlewares";
import { checkUserPermission } from "../../middlewares/allChecks.middlewares/checkUserPermission.middlewares";
import { checkValidToken } from "../../middlewares/allChecks.middlewares/checkValidToken.middlewares";
import { checkExistingId } from "../../middlewares/allChecks.middlewares/checkExistingId.middlewares";

export const usersRouter: Router = Router();

usersRouter.post(
  "",
  checkValidBody(usersCreateSchema),
  checkExistingEmail,
  UserCreation
);
usersRouter.get("", checkValidToken, checkUserPermission, searchUsers);
usersRouter.patch(
  "/:id",
  checkValidBody(usersUpDateSchema),
  checkExistingId,
  checkValidToken,
  checkUserPermission,
  checkExistingEmail,
  upDateUsers
);
usersRouter.delete(
  "/:id",
  checkExistingId,
  checkValidToken,
  checkUserPermission,
  softDeleteOnUser
);
