import {Component, Input, OnInit} from '@angular/core';
import {ProductInterface} from '../../core/product/product';
import {ShoppingCartService} from './shopping-cart.service';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {UserInterface} from '../../core/user/user';
import {OrderService} from '../../core/order/order.service';
import {OrderServiceType} from '../../core/order/order';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  products: ProductInterface[] = [];
  total = 0;
  @Input() user: UserInterface;
  /*@Output() orderTypEmitter: EventEmitter<OrderServiceType> = new EventEmitter<OrderServiceType>();*/

  constructor(private shoppingCardService: ShoppingCartService,
              private router: Router,
              private orderService: OrderService) {
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

  goToSummary(): void {
    this.orderService.orderSubject.next(OrderServiceType.SHOPPING);
  }
}
