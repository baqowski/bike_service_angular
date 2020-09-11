import {Role} from '../role/role';

export interface UserInterface {
  id: number;
  uuid: string;
  username: string;
  password: string;
  token?: string;
  role: Role;
  authorities?: [];
}
