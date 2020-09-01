import {User} from "../../core/user/user";

export interface Product {
  id: number;
  name: string;
  price: number;
  filename: string;
  quantity: number;
  isEditable: boolean;
  user: User;
}
