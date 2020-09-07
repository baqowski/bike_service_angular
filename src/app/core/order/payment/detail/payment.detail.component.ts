import {Component, Input, OnInit} from '@angular/core';
import {PaymentInterface} from '../../../payment/payment';
import {ActivatedRoute, Router} from '@angular/router';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment.detail.component.html',
  styleUrls: ['./payment.detail.component.scss']
})
export class PaymentDetailComponent implements OnInit {

  @Input() payment: PaymentInterface;
  orderId: number;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.payment = this.route.snapshot.data.payment;
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      mergeMap((params: any) => {
        this.orderId = params.orderId;
        return params;
      })
    ).subscribe(value => {
    });
  }

  changePaymentForm(payment: PaymentInterface): void {
    this.router.navigate(['/orders/' + this.route.snapshot.params.orderId + '/payment']);
  }
}
