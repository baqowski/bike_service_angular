import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OrderService} from '../order.service';
import {ActivatedRoute} from '@angular/router';
import {OrderInterface} from '../order';
import {TableStructureInterface} from '../../../shared/table/table-structure.interface';
import {productDetailTableStructure} from '../../product/product';
import {UserInterface} from '../../user/user';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order.detail.component.html',
  styleUrls: ['./order.detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  @Output() onValueChange: EventEmitter<any> = new EventEmitter<any>();
  order: OrderInterface;
  user: UserInterface;
  productDetailTableStructureColumns: Array<TableStructureInterface> = productDetailTableStructure;
  orderStatuses: string[] = ['CREATED_BY_CLIENT', 'PAYMENT_IN_PROGRESS', 'PAYMENT_SUCCESSFULLY', 'PREPARED_TO_SENT', 'SENT_TO_CLIENT', 'RECEIVED_FROM_CLIENT', 'FINISHED'];
  properties: 'status';


  constructor(private orderService: OrderService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    debugger
    this.user = this.route.snapshot.data.user;
    this.order = this.route.snapshot.data.order;
  }

  onClickEmitValue(value): void {
    debugger;
    this.order.orderStatus = value;
  }

  onUpdate(): void {
    debugger
    this.orderService.onUpdate(this.order.id, this.order);
  }
}
