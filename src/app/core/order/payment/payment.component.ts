import {Component, OnInit} from '@angular/core';

import {Payment, PaymentInterface, PaymentType} from '../../payment/payment';
import {PaymentService} from '../../payment/payment.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  payment: PaymentInterface = new Payment();
  paymentTypes = [
    {type: PaymentType.PAYU}, {type: PaymentType.BANK_TRANSFER}, {type: PaymentType.ON_DELIVERY}
  ];

  constructor(private paymentService: PaymentService,
              private route: ActivatedRoute) {
    this.payment = this.route.snapshot.data.payment;
  }

  ngOnInit(): void {
  }

  onChange(value): void {
    this.payment.paymentType = value;
    console.log(value);
  }
}
