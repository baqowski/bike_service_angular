import {AddressInterface} from '../address/address';

export class DeliveryOrder implements DeliveryOrderInterface{
  delivery: DeliveryInterface;
  deliveryAddress: AddressInterface;


  constructor(delivery: DeliveryInterface, deliveryAddress: AddressInterface) {
    this.delivery = delivery;
    this.deliveryAddress = deliveryAddress;
  }
}

export interface DeliveryInterface {
  id: number;
  type: string;
  cost: number;
}

export interface DeliveryOrderInterface {
  deliveryAddress: AddressInterface;
  delivery: DeliveryInterface;
}
