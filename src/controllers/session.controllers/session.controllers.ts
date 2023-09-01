import { Request, Response } from "express";
import { SessionReturn } from "../../interfaces/session.interfaces/session.interfaces";
import { userLogin } from "../../services/session.services/session.services";

export const createUserLogin = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const token: SessionReturn = await userLogin(request.body);
  return response.status(200).json(token);
};
