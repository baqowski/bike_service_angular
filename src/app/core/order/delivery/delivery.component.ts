import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DeliveryInterface} from './delivery';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  @Output() emitValue: EventEmitter<DeliveryInterface> = new EventEmitter<DeliveryInterface>();
  @Input() deliveries;

  constructor() {
  }

  ngOnInit(): void {
  }

  getSelectedValue(value): any {
    this.emitValue.emit(value);
  }
}
