import { User } from '../../model/User';
import { IUserCategoryDTO, IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  findByName(username: string): User {
    const user = this.users.find((user) => user.username === username);
    return user;
  }

  create({ name, username, password, email, driver_license, admin }: IUserCategoryDTO) {
    const user = new User();

    Object.assign(user, {
      name,
      username,
      password,
      email,
      driver_license,
      admin,
      created_at: new Date(),
    });

    this.users.push(user);
  }
}

export { UsersRepository };
