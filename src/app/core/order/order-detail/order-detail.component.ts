import {Component, OnInit} from '@angular/core';
import {OrderService} from '../order.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {mergeMap, tap} from 'rxjs/operators';
import {Order, OrderInterface} from '../order';
import {Product} from '../../../public/product/product';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  order: OrderInterface;
  products: Product[] = [];

  constructor(private orderService: OrderService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      mergeMap((params: ParamMap) => this.orderService.getOrderProducts(Number(params.get('id'))))
    ).subscribe((order: Order) => {
      this.order = order;
    });
  }

  getProducts(id): void {
    this.orderService.getOrderProducts(id).pipe(
      tap(value => {
        this.products = value;
        return value;
      })).subscribe(response => {
    });
  }
}
