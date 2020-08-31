import {Order} from '../order/order';
import {PaymentType} from './payment-type/payment-type';

export interface Payment {
  id: number;
  order: Order;
  paymentType: PaymentType;
}
