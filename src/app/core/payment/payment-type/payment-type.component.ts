import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Payment} from '../payment';
import {PaymentType} from './payment-type';

@Component({
  selector: 'app-payment',
  templateUrl: './payment-type.component.html',
  styleUrls: ['./payment-type.component.scss']
})
export class PaymentTypeComponent implements OnInit {


  paymentType: PaymentType;
  paymentTypes = [
    PaymentType.PAYU, PaymentType.BANK_TRANSFER, PaymentType.ON_DELIVERY
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getSelectedValue(value): any {
    this.paymentType = value;
  }
}
