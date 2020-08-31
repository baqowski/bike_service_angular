import {Product} from '../../public/product/product';
import {User} from '../user/user';

export class OrderImpl implements Order {
  constructor() {
    this.amount = 0;
    this.products = [];
  }

  amount: number;
  products: Product[];
  id: number;
  user: User;
}

export interface Order {
  id: number;
  products: Product[];
  amount: number;
  user: User;
}
