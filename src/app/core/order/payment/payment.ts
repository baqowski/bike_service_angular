
export interface PaymentInterface {
  id: number;
  paymentType: PaymentType;
}

export enum PaymentType {
  PAYU = 'PAYU',
  BANK_TRANSFER = 'BANK_TRANSFER',
  ON_DELIVERY= 'ON_DELIVERY',
}
