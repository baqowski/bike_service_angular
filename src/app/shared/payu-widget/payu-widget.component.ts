import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PaymentService} from '../../core/payment/payment.service';
import {PaymentInterface, PaymentType} from '../../core/payment/payment';
import {tap} from 'rxjs/operators';

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

  onClickPayu(paymentType: PaymentType): void {
    /*this.setOrderId(payment);*/
/*    this.paymentService.createByPaymentType(this.route.snapshot.params.id, paymentType).subscribe(payu => {
      window.location.href = payu.redirectUri;
    });*/
  }

  private setOrderId(payment: PaymentInterface): void {
    this.route.paramMap.pipe(
      tap(id => {
       payment.order.id = Number(id.get('id'));
      })
    ).subscribe();
  }
}
