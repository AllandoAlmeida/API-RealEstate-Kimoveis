import { z } from "zod";
import { sessionCreate } from "../../schemas/session.schemas/session.schemas";

export type SessionCreate = z.infer<typeof sessionCreate>;
export type SessionReturn = { token: string };
