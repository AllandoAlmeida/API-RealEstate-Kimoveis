import { RealEstate, Address, Category } from "../../entities";
import { AppError } from "../../errors/AppError.errors";
import { RealEstatesCreate } from "../../interfaces/realEstates.interfaces/realEstates.interfaces";
import { addressesRepository } from "../../repositories/addresses.repositories/addresses.repositories";
import { categoryRespository } from "../../repositories/category.repositories/category.respositories";
import { realEstatesRepository } from "../../repositories/realEstates.repositories/realEstates.Respositories";

export const addNewRealEstate = async (
  realEstateBody: RealEstatesCreate
): Promise<RealEstate> => {
  const { address, categoryId, ...body } = realEstateBody;

  const newAddress: Address = addressesRepository.create({ ...address });
  await addressesRepository.save(newAddress);

  const existingId: Category | null = await categoryRespository.findOneBy({
    id: categoryId,
  });

  if (!existingId) {
    throw new AppError("Category not found");
  }

  const newRealEstate: RealEstate = realEstatesRepository.create({
    category: existingId,
    address: newAddress,
    ...body,
  });

  await realEstatesRepository.save(newRealEstate);

  return newRealEstate;
};

export const getRealEstates = async (): Promise<Array<RealEstate>> => {
  const realEstates: Array<RealEstate> = await realEstatesRepository.find({
    relations: ["address"],
  });
  return realEstates;
};
