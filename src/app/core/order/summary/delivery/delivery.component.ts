import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  @Input() deliveries;

  @Input() deliveryForm: FormGroup;
  @Output() deliveryFormChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  selectedPrice = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.deliveryForm.addControl('deliveryType', new FormGroup({
      delivery: new FormControl('', Validators.required)
    }));
  }

  onProductCostChange(value: any): void {
    this.selectedPrice = value.cost;
    this.deliveryFormChange.emit(this.deliveryForm);
  }
}
