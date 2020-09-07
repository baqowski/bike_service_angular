import {Component, OnInit} from '@angular/core';
import {ProductInterface} from './product';
import {map, tap} from 'rxjs/operators';
import {ProductService} from './product.service';
import {ShoppingCartService} from '../../public/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: ProductInterface[];

  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit(): void {
    this.productService.getAll().pipe(
      map(value => value.map(
        (product: ProductInterface) => {
          product.quantity = 1;
          return product;
        }
      )),
      tap(data => {
        this.products = data;
      })
    ).subscribe(() => {
    });
  }

  addProductToShoppingCart(product): void {
    if (!this.productExistInShoppingCard(product) && product.quantity > 0) {
      this.shoppingCartService.addProduct(product);
    }
  }

  onClickIncrement(product: ProductInterface): void {
    product.quantity = product.quantity + 1;
    /*this.shoppingCartService.increaseCount(product);*/
  }

  onClickDecrement(product: ProductInterface): void {
    this.shoppingCartService.decreaseCount(product);
  }


  private productExistInShoppingCard(product: ProductInterface): boolean {
    let status = false;
    this.shoppingCartService.getProductsValue.forEach(value => {
      if (value === product) {
        status = true;
      }
    });
    return status;
  }
}
