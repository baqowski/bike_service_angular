import {Component, OnInit} from '@angular/core';
import {OrderService} from '../order/order.service';
import {OrderInterface} from '../order/order';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  shopping: OrderInterface[];
  repairs: OrderInterface[];
  loans: OrderInterface[];

  constructor(private orderService: OrderService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.shopping = this.route.snapshot.data.order._embedded.orders.filter(value => value.orderServiceType === 'SHOPPING' && value.orderStatus !== 'FINISHED');
    this.repairs = this.route.snapshot.data.order._embedded.orders.filter(value => value.orderServiceType === 'REPAIR' && value.orderStatus !== 'FINISHED');
    this.loans = this.route.snapshot.data.order._embedded.orders.filter(value => value.orderServiceType === 'RENT' && value.orderStatus !== 'FINISHED');
  }
}
