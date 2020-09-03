import {Component, OnInit} from '@angular/core';
import {PaymentInterface} from "../payment";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.scss']
})
export class PaymentDetailComponent implements OnInit {

  payment: PaymentInterface;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    debugger
    this.payment = this.route.snapshot.data.payment;
  }

}
