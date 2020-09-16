import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Order, OrderInterface, OrderServiceType} from '../order';
import {ShoppingCartService} from '../../../public/shopping-cart/shopping-cart.service';
import {OrderService} from '../order.service';
import {tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DeliveryInterface, DeliveryOrder, DeliveryOrderInterface} from './delivery/delivery';
import {DeliveryComponent} from './delivery/delivery.component';
import {ProductInterface} from '../../product/product';
import {TableStructureInterface} from '../../../shared/table/table-structure.interface';
import {summaryTableStructure} from './summary-structure.interface';
import {LoanService} from './loan/loan.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() orderType: OrderServiceType;
  @ViewChild(DeliveryComponent) deliveryRef: DeliveryComponent;
  products: ProductInterface[] = [];
  summaryStructureTableColumns: Array<TableStructureInterface> = summaryTableStructure;
  orderSummaryPrice = 0;
  productSummaryPrice: number;
  order: OrderInterface;
  orderForm: FormGroup;
  deliverySelectData: DeliveryInterface[];
  deliveryOrder: DeliveryOrderInterface;

  constructor(private shoppingCartService: ShoppingCartService,
              private orderService: OrderService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private loanService: LoanService) {

    this.orderForm = this.formBuilder.group({});
    this.deliverySelectData = this.route.snapshot.data.delivery._embedded.deliveries;
    this.products = this.shoppingCartService.getProductsValue;
  }

  ngOnInit(): void {
    this.initOrder();
    /*this.shoppingCartService.behaviorProducts.pipe(
      tap(() => this.productSummaryPrice = this.shoppingCartService.getTotalAmount),
    ).subscribe();*/

    this.orderService.orderSubject.asObservable().pipe(
      tap(type => {
        this.orderType = type;
      })
    ).subscribe();


    this.loanService.loanAmount.subscribe((value) => {
      this.productSummaryPrice = value;
    });
    console.log(this.orderType);
  }

  ngAfterViewInit(): void {
  }

  create(): void {
    console.log(this.orderType);
    this.setOrder();
    /*this.order.orderServiceType = OrderServiceType.SHOPPING;*/
    debugger
    this.orderService.createOrder(this.order)
      .subscribe(id => {
        this.router.navigate(['/orders/' + id + '/payment']);
      });
  }


  onGetDeliveryCost(): void {
    this.orderSummaryPrice = this.productSummaryPrice + this.deliveryRef.selectedPrice;
  }

  initOrder(): void {
    this.shoppingCartService.behaviorProducts.pipe(
      tap(value => {
        this.productSummaryPrice = this.shoppingCartService.getTotalAmount;
        if (this.deliveryRef) {
          this.orderSummaryPrice = this.productSummaryPrice + this.deliveryRef.selectedPrice;
        }
      })).subscribe();
  }


  private setOrder(): void {
    this.deliveryOrder = new DeliveryOrder(this.orderForm.value.deliveryType.delivery, this.orderForm.value.address);
    this.order = new Order(this.orderSummaryPrice, this.products, this.deliveryOrder, this.orderType);
    this.setLoanData(this.order);
  }

  ngOnDestroy(): void {
  }

  private calculateTotalPrice(): void {
    switch (this.orderType) {
      case OrderServiceType.SHOPPING: {
        this.orderSummaryPrice = this.shoppingCartService.getTotalAmount + this.orderForm.value.deliveryType.delivery.cost;
        break;
      }
      case OrderServiceType.RENT: {
        this.orderSummaryPrice = this.loanService.total + this.orderForm.value.deliveryType.delivery.cost;
      }
      case OrderServiceType.REPAIR: {
      }
    }
  }

  private setLoanData(order: Order): void {
    if (this.orderType === 'RENT') {
      this.order.loanDays = this.orderForm.value.loan.days;
    }
  }


}

