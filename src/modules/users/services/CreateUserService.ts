import { IUsersRepository } from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  username: string;
  password: string;
  email: string;
  driver_license: string;
  admin: boolean;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, username, password, email, driver_license, admin }: IRequest): void {
    const userAlreadyExist = this.usersRepository.findByName(username);
    if (userAlreadyExist) {
      throw new Error('User name already exist!');
    }

    this.usersRepository.create({ name, username, password, email, driver_license, admin });
  }
}

export { CreateUserService };
