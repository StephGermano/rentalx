import { User } from '../model/User';

//DTO => Data Transfer Object
interface IUserCategoryDTO {
  name: string;
  username: string;
  password: string;
  email: string;
  driver_license: string;
  admin: boolean;
}

interface IUsersRepository {
  findByName(username: string): User;
  create({ name, username, password, email, driver_license, admin }: IUserCategoryDTO): void;
}

export { IUserCategoryDTO, IUsersRepository };
