import {Product} from '../../public/product/product';
import {User} from '../user/user';
import {DeliveryInterface} from './delivery/delivery';

export class Order implements OrderInterface {
  constructor() {
    this.amount = 0;
    this.products = [];
  }

  amount: number;
  products: Product[];
  id: number;
  user: User;
  delivery: DeliveryInterface;
}

export interface OrderInterface {
  id: number;
  products: Product[];
  amount: number;
  delivery: DeliveryInterface;
  user: User;
}
