import { Request, Response } from "express";
import {
  addNewRealEstate,
  getRealEstates,
} from "../../services/realEstates.services/realEstates.services";
import { RealEstate } from "../../entities";

export const createRealEstates = async (
  request: Request,
  response: Response
): Promise<Response> => {
  return response.status(201).json(await addNewRealEstate(request.body));
};

export const searchRealEstates = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const realEstates: Array<RealEstate> = await getRealEstates();
  return response.status(200).json(realEstates);
};
