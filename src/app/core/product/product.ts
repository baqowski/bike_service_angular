import {User} from '../user/user';

export interface ProductInterface {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  color: string;
  producer: string;
  isEditable: boolean;
  user: User;
}
