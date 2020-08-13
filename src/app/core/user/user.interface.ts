
export interface User {
  id: number;
  username: string;
  isLogged: boolean;
  authorities: [];
  token?: string;
}
