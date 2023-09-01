import "express-async-errors";
import express, { Application, json } from "express";
import { HandleError } from "./errors/handle.errors";
import { usersRouter } from "./routers/users.routers/users.routers";
import { sessionRouter } from "./routers/session.routers/session.routers";
import { categoriesRouter } from "./routers/categories.routers/categories.routers";
import { realEstatesRouter } from "./routers/realEstates.routers/realEstates.routers";
import { schedulesRouter } from "./routers/schedules.routers/schedules.routers";

export const app: Application = express();
app.use(json());

app.use("/users", usersRouter);
app.use("/login", sessionRouter);
app.use("/categories", categoriesRouter)
app.use("/realEstate", realEstatesRouter)
app.use("/schedules", schedulesRouter)

app.use(HandleError);


