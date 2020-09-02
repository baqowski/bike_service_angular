import {Product} from '../../public/product/product';
import {DeliveryInterface} from './summary/delivery/delivery';
import {AddressInterface} from './summary/address/address';

export class Order implements OrderInterface {
  constructor() {
    this.amount = 0;
    this.products = [];
  }

  amount: number;
  products: Product[];
  id: number;
  delivery: DeliveryInterface;
  deliveryAddress: AddressInterface;
}

export interface OrderInterface {
  id: number;
  products: Product[];
  amount: number;
  delivery: DeliveryInterface;
  deliveryAddress: AddressInterface;
}
