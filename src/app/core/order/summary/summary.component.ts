import {Component, OnInit} from '@angular/core';
import {Order, OrderInterface} from '../order';
import {ShoppingCartService} from '../../../public/shopping-cart/shopping-cart.service';
import {OrderService} from '../order.service';
import {tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DeliveryService} from '../delivery/delivery.service';
import {DeliveryInterface} from '../delivery/delivery';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  order: OrderInterface = new Order();
  stepNumber = 1;
  addressForm: FormGroup;
  deliverySelectData: DeliveryInterface[];

  constructor(private shoppingCartService: ShoppingCartService,
              private orderService: OrderService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private deliveryService: DeliveryService) {
    this.addressForm = this.formBuilder.group({});
    this.deliverySelectData = this.route.snapshot.data.delivery._embedded.deliveries;
  }

  create(): void {
    this.orderService.create(this.shoppingCartService.getProductsValue)
      .subscribe(response => {
        this.router.navigate(['/orders/' + response]);
      });
  }

  ngOnInit(): void {
    this.deliveryService.getDeliveryData()
      .subscribe((response) => {
        this.deliverySelectData = response;
      });

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
    this.order.delivery = value;
  }

  onGetClientAddress(address): void {
    this.order.address = address;
  }
}
