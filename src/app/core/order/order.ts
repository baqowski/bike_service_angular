import {ProductInterface} from '../product/product';
import {DeliveryOrderInterface} from './summary/delivery/delivery';
import {PaymentInterface} from '../payment/payment';

export class Order implements OrderInterface {

  constructor(amount: number, products: ProductInterface[], deliveryOrder: DeliveryOrderInterface, orderServiceType: OrderServiceType) {
    this.amount = amount;
    this.products = products;
    this.deliveryOrder = deliveryOrder;
    this.orderServiceType = orderServiceType;
  }

  amount: number;
  products: ProductInterface[];
  id: number;
  orderStatus: string;
  deliveryOrder: DeliveryOrderInterface;
  orderServiceType: OrderServiceType;
  payment: PaymentInterface;
}

export interface OrderInterface {
  id: number;
  products: ProductInterface[];
  amount: number;
  orderStatus: string;
  deliveryOrder: DeliveryOrderInterface;
  orderServiceType: OrderServiceType;
  payment: PaymentInterface;
}

export enum OrderServiceType {
  SHOPPING = 'SHOPPING',
  RENT = 'RENT',
  REPAIR = 'REAPIR'
}


