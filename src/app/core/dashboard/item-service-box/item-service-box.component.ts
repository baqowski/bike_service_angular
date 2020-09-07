import {Component, Input, OnInit} from '@angular/core';
import {OrderInterface} from '../../order/order';

@Component({
  selector: 'app-item-service-box',
  templateUrl: './item-service-box.component.html',
  styleUrls: ['./item-service-box.component.scss']
})
export class ItemServiceBoxComponent implements OnInit {

  @Input() orders: OrderInterface[];
  constructor() { }

  ngOnInit(): void {

  }

}
