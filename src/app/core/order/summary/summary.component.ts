import {Component, OnInit} from '@angular/core';
import {Order, OrderInterface} from '../order';
import {ShoppingCartService} from '../../../public/shopping-cart/shopping-cart.service';
import {OrderService} from '../order.service';
import {tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  order: OrderInterface = new Order();
  stepNumber = 1;
  addressForm: FormGroup;

  constructor(private shoppingCartService: ShoppingCartService,
              private orderService: OrderService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  create(): void {
    this.orderService.create(this.shoppingCartService.getProductsValue)
      .subscribe(response => {
        debugger;
        this.router.navigate(['/orders/' + response]);
      });
  }

  ngOnInit(): void {
    debugger;

    this.shoppingCartService.behaviorProducts.pipe(
      tap(value => {
      this.order.products = value;
      this.order.amount = this.shoppingCartService.getTotalAmount;
    })).subscribe(value => {
    });

  }

  onClickNextStep(step: number): void {
    this.stepNumber = step + 1;
  }

  onClickBackStep(step: number): void {
    this.stepNumber = step - 1;
  }

  onGetDelivery(value): void {
    debugger
    this.order.delivery = value;
  }

  onGetClientAddress(address): void {
    debugger
    this.order.address = address;
  }
}
