import {Component, Input, OnInit} from '@angular/core';
import {ProductInterface} from '../../core/product/product';
import {ShoppingCartService} from './shopping-cart.service';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {User} from '../../core/user/user';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  products: ProductInterface[] = [];
  total = 0;
  @Input() user: User;

  constructor(private shoppingCardService: ShoppingCartService, private router: Router) {
  }

  ngOnInit(): void {
    this.shoppingCardService.getProductsSubject.pipe(
      tap(value => {
        this.products = value;
        this.total = this.calculateTotalPrice(value);
      })
    ).subscribe(response => {
    });
  }

  calculateTotalPrice(products: ProductInterface[]): number {
    let amount = 0;
    products.map(value => {
      amount = amount + value.quantity * value.price;
    });
    return amount;
  }

  removeProduct(product): void {
    this.shoppingCardService.removeProduct(product);
  }

  updateTotalCost(): void {
    this.shoppingCardService.getProductsValue.forEach(value => {
    });
  }

  calculateTotalAmount(): number {
    this.products.forEach(value => {
      this.total = value.price * value.quantity + this.total;
    });
    return this.total;
  }

  goToPayment() {
  }
}
