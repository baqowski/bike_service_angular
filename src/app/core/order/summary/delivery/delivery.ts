import {AddressInterface} from '../address/address';

export interface DeliveryInterface {
  id: number;
  cost: number;
  type: string;
  deliveryAddress: AddressInterface;
}

