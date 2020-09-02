import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Order, OrderInterface} from '../order';
import {ShoppingCartService} from '../../../public/shopping-cart/shopping-cart.service';
import {OrderService} from '../order.service';
import {tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DeliveryInterface} from './delivery/delivery';
import {DeliveryComponent} from './delivery/delivery.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(DeliveryComponent) deliveryRef: DeliveryComponent;

  total: number;
  order: OrderInterface = new Order();
  stepNumber = 1;
  orderForm: FormGroup;
  deliverySelectData: DeliveryInterface[];

  constructor(private shoppingCartService: ShoppingCartService,
              private orderService: OrderService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {
    this.orderForm = this.formBuilder.group({});
    this.deliverySelectData = this.route.snapshot.data.delivery._embedded.deliveries;
  }

  ngOnInit(): void {
    this.total = this.shoppingCartService.getTotalAmount;
    this.initShoppingProducts();
  }

  ngAfterViewInit(): void {
  }

  create(): void {
    this.setOrder();
    this.orderService.create(this.order)
      .subscribe(id => {
        this.router.navigate(['/orders/' + id]);
      });
  }

 /* onGetClientAddress(address): void {
    this.order.address = address;
  }*/

  onGetDeliveryCost(): void {
    this.total = this.order.amount + this.deliveryRef.selectedPrice;
  }

  initShoppingProducts(): void {
    this.shoppingCartService.behaviorProducts.pipe(
      tap(value => {
        this.order.products = value;
        this.order.amount = this.shoppingCartService.getTotalAmount;
        if (this.deliveryRef) {
          this.total = this.order.amount + this.deliveryRef.selectedPrice;
        }
      })).subscribe();
  }

  private setOrder(): void {
    this.order.delivery = this.orderForm.value.deliveryType.delivery;
    this.order.delivery.deliveryAddress = this.orderForm.value.address;
  }

  ngOnDestroy(): void {
  }
}

