import {Component, Input, OnInit} from '@angular/core';
import {Payment, PaymentInterface, PaymentType} from '../../../payment/payment';
import {PaymentService} from '../../../payment/payment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError, tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-payment-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  @Input() payment: PaymentInterface = new Payment();
  paymentTypes = [
    {type: PaymentType.PAYU}, {type: PaymentType.BANK_TRANSFER}, {type: PaymentType.ON_DELIVERY}
  ];

  constructor(private paymentService: PaymentService,
              private route: ActivatedRoute,
              private router: Router,
              private toastrService: ToastrService) {
    /*this.payment = this.route.snapshot.data.payment;*/
  }

  ngOnInit(): void {
  }

  createNewPayment(type: PaymentType): void {
    const orderId = this.route.snapshot.params.orderId;
    this.paymentService.create(orderId, type).pipe(
      tap(payment => {
        if (type === 'PAYU') {
          window.location.href = payment.redirectUri;
        }
        this.router.navigate(['/orders/' + orderId]);
      }), catchError(err => {
        this.toastrService.error(err.error.message, err.error.error.message);
        return err;
      })
    )
      .subscribe(response => {
      });
  }

  onChange(value): void {
    this.payment.paymentType = value;
    console.log(value);
  }
}
