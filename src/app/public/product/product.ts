import {User} from '../../core/user/user';

export interface ProductInterface {
  id: number;
  name: string;
  price: number;
  filename: string;
  quantity: number;
  isEditable: boolean;
  user: User;
}
