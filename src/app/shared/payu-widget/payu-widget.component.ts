import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PaymentService} from "../../core/order/payment/payment.service";
import {PaymentInterface} from "../../core/order/payment/payment";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-payu-widget',
  templateUrl: './payu-widget.component.html',
  styleUrls: ['./payu-widget.component.scss']
})
export class PayuWidgetComponent implements OnInit {

  @Input() payment: PaymentInterface;

  constructor(private router: Router,
              private paymentService: PaymentService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

  onClickPayu(payment: PaymentInterface) {
    debugger
    this.setOrderId(payment)
    this.paymentService.create(payment).subscribe(payment => {
      debugger
      window.location.href = payment.redirectUri;
    })
  }

  private setOrderId(payment: PaymentInterface): void {
    this.route.paramMap.pipe(
      tap(id => {
       payment.orderId = Number(id.get('id'));
      })
    ).subscribe();
  }
}
