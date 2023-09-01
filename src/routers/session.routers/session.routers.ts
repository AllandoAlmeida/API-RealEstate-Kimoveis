import { Router } from "express";
import { createUserLogin } from "../../controllers/session.controllers/session.controllers";
import { sessionCreate } from "../../schemas/session.schemas/session.schemas";
import { checkValidBody } from "../../middlewares/allChecks.middlewares/checkValidBody.middlewares";

export const sessionRouter: Router = Router();

sessionRouter.post("", checkValidBody(sessionCreate), createUserLogin);
