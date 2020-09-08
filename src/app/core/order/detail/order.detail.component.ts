import {Component, OnInit} from '@angular/core';
import {OrderService} from '../order.service';
import {ActivatedRoute} from '@angular/router';
import {OrderInterface} from '../order';
import {TableStructureInterface} from '../../../shared/table/table-structure.interface';
import {productDetailTableStructure} from '../../product/product';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order.detail.component.html',
  styleUrls: ['./order.detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  order: OrderInterface;
  productDetailTableStructureColumns: Array<TableStructureInterface> = productDetailTableStructure;

  constructor(private orderService: OrderService,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.order = this.route.snapshot.data.order;
  }
}
