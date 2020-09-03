
export class Payment implements PaymentInterface{
  constructor() {
  }
  id: number;
  paymentType: PaymentType;
  paymentStatus: number;
  payuOrderId: string;
  orderId: number;

}

export interface PaymentInterface {
  id: number;
  paymentType: PaymentType;
  paymentStatus: number;
  payuOrderId: string;
  orderId: number;
}

export enum PaymentType {
  PAYU = 'PAYU',
  BANK_TRANSFER = 'BANK_TRANSFER',
  ON_DELIVERY= 'ON_DELIVERY',
}
