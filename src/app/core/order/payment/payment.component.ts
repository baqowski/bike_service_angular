import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PaymentInterface, PaymentType} from "./payment";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  payment: PaymentInterface;
  paymentTypes = [
    {type: PaymentType.PAYU}, {type: PaymentType.BANK_TRANSFER}, {type: PaymentType.ON_DELIVERY}
  ];

  constructor(private route: ActivatedRoute) {
    debugger
  }

  ngOnInit(): void {
  }

  onSelectPayment(payment) {
    debugger

  }
}
