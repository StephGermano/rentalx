import { v4 as uuidv4 } from 'uuid';

class User {
  id: string;
  name: string;
  username: string;
  password: string;
  email: string;
  driver_license: string;
  admin: boolean;
  created_at: Date;

  constructor() {
    this.id = uuidv4();
  }
}

export { User };
