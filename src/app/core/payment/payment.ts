import {OrderInterface} from '../order/order';

export class Payment implements PaymentInterface{
  constructor() {
  }
  id: number;
  type: PaymentType;
  status: string;
  payuOrderId: string;
  order: OrderInterface;

}

export interface PaymentInterface {
  id: number;
  type: PaymentType;
  status: string;
  payuOrderId: string;
  order: OrderInterface;
}

export enum PaymentType {
  PAYU = 'PAYU',
  BANK_TRANSFER = 'BANK_TRANSFER',
  ON_DELIVERY= 'ON_DELIVERY',
}
