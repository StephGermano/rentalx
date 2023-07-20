import { Router } from 'express';
import { UsersRepository } from '../modules/users/repositories/implementations/UsersRepository';
import { CreateUserService } from '../modules/users/services/CreateUserService';

const usersRoutes = Router();
const usersRepository = new UsersRepository();

usersRoutes.post('/', (request, response) => {
  const { name, username, password, email, driver_license, admin } = request.body;

  const createUserService = new CreateUserService(usersRepository);

  createUserService.execute({ name, username, password, email, driver_license, admin });

  return response.status(201).send();
});

export { usersRoutes };
