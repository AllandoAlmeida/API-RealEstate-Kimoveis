import { compareSync } from "bcryptjs";
import { AppError } from "../../errors/AppError.errors";
import { SessionReturn } from "../../interfaces/session.interfaces/session.interfaces";
import { UsersCreate } from "../../interfaces/users.interfaces/users.interfaces";
import { userRepository } from "../../repositories/user.repositories/user.repositories";
import { sign } from "jsonwebtoken";
import { User } from "../../entities";

export const userLogin = async (
  userLoginBody: UsersCreate
): Promise<SessionReturn> => {
  const user: User | null = await userRepository.findOne({
    where: { email: userLoginBody.email },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordIsValid: boolean = compareSync(
    userLoginBody.password,
    user.password
  );

  if (!passwordIsValid) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = sign(
    { username: user.name, admin: user.admin },
    process.env.SECRET_KEY!,
    { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );

  return { token };
};
