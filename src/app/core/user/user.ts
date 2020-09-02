export interface User {
  id: number;
  uuid: string,
  username: string;
  password: string;
  token: string;
  roleName: string;
  authorities: [];
}
