import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../product/product';
import {ShoppingCartService} from './shopping-cart.service';
import {map, tap} from 'rxjs/operators';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  products: Product[] = [];
  total = 0;

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

  calculateTotalPrice(products: Product[]): number {
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
