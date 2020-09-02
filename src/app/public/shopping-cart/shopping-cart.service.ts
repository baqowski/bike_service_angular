import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  behaviorProducts: BehaviorSubject<Product[]>;

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

  public get getProductsValue(): Product[] {
    if (this.behaviorProducts.value) {
      return this.behaviorProducts.value;
    }
  }

  public get getProductsSubject(): BehaviorSubject<Product[]> {
    if (this.behaviorProducts) {
      return this.behaviorProducts;
    }
  }

  private initBehaviorSubject(): void {
    if (!sessionStorage.getItem('products')) {
      this.behaviorProducts = new BehaviorSubject<Product[]>([]);
      return;
    }
    this.behaviorProducts = new BehaviorSubject<Product[]>(JSON.parse(sessionStorage.getItem('products')));
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

  private updateArrayElement(product: Product): void {
    this.getProductsValue[this.getProductsValue.indexOf(product)] = product;
    this.update();
  }
}
