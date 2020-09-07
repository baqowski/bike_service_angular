import {Component, OnInit} from '@angular/core';
import {OrderService} from '../order.service';
import {ActivatedRoute} from '@angular/router';
import {OrderInterface} from '../order';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order.detail.component.html',
  styleUrls: ['./order.detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  order: OrderInterface;

  constructor(private orderService: OrderService,
              private route: ActivatedRoute,
              private toastr: ToastrService) {

  }
  ngOnInit(): void {
    this.order = this.route.snapshot.data.order;
  }
}
