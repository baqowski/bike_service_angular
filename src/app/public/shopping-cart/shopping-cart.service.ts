import {EventEmitter, Injectable, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ProductInterface} from '../../core/product/product';
import {OrderServiceType} from "../../core/order/order";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  behaviorProducts: BehaviorSubject<ProductInterface[]>;
  @Output() orderTypEmitter: EventEmitter<OrderServiceType> = new EventEmitter<OrderServiceType>();

  constructor() {
    this.initBehaviorSubject();
  }

  addProduct(product): void {
    this.getProductsValue.push(product);
    this.update();
  }

  removeProduct(product): void {
    this.getProductsValue.splice(this.getProductsValue.indexOf(product), 1);
    this.update();
  }

  increaseCount(product): void {
    product.quantity = product.quantity + 1;
    this.updateArrayElement(product);
  }


  decreaseCount(product): void {
    product.quantity = product.quantity - 1;
    this.updateArrayElement(product);
  }

  public get getTotalAmount(): number {
    return this.getProductsValue.map(
      value => value.quantity * value.price)
      .reduce(
        (acc, val) => acc + val);
  }

  public get getProductsValue(): ProductInterface[] {
    if (this.behaviorProducts.value) {
      return this.behaviorProducts.value;
    }
  }

  public get getProductsSubject(): BehaviorSubject<ProductInterface[]> {
    if (this.behaviorProducts) {
      return this.behaviorProducts;
    }
  }

  private initBehaviorSubject(): void {
    if (!sessionStorage.getItem('products')) {
      this.behaviorProducts = new BehaviorSubject<ProductInterface[]>([]);
      return;
    }
    this.behaviorProducts = new BehaviorSubject<ProductInterface[]>(JSON.parse(sessionStorage.getItem('products')));
  }

  private updateSessionStorageProducts(): void {
    sessionStorage.setItem('products', JSON.stringify(this.getProductsValue));
  }

  private updateBehaviorProducts(): void {
    this.behaviorProducts.next(this.getProductsValue);
  }

  private update(): void {
    this.updateBehaviorProducts();
    this.updateSessionStorageProducts();
  }

  private updateArrayElement(product: ProductInterface): void {
    this.getProductsValue[this.getProductsValue.indexOf(product)] = product;
    this.update();
  }
}
