import {Product} from '../product/product';

export interface ShoppingCart {
  id: number
  amount: number;
  products: Product[];
}
