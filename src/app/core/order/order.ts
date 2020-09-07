import {ProductInterface} from '../product/product';
import {DeliveryOrderInterface} from './summary/delivery/delivery';
import {PaymentInterface} from '../payment/payment';

export class Order implements OrderInterface {

  constructor(amount: number, products: ProductInterface[], deliveryOrder: DeliveryOrderInterface) {
    this.amount = amount;
    this.products = products;
    this.deliveryOrder = deliveryOrder;
  }

  amount: number;
  products: ProductInterface[];
  id: number;
  orderStatus: string;
  deliveryOrder: DeliveryOrderInterface;
  payment: PaymentInterface;
}

export interface OrderInterface {
  id: number;
  products: ProductInterface[];
  amount: number;
  orderStatus: string;
  deliveryOrder: DeliveryOrderInterface;
  payment: PaymentInterface;
}

export enum OrderServiceType {
  SHOPPING = 'SHOPPING',
  RENT = 'RENT',
  REPAIR = 'REAPIR'
}


