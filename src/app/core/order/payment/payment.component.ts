import {Component, OnInit} from '@angular/core';

import {Payment, PaymentInterface, PaymentType} from "./payment";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  selected: PaymentInterface = new Payment();
  paymentTypes = [
    {type: PaymentType.PAYU}, {type: PaymentType.BANK_TRANSFER}, {type: PaymentType.ON_DELIVERY}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(value) {
    this.selected.paymentType = value;
    console.log(value);
  }
}
