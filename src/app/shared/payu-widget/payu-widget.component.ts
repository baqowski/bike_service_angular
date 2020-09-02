import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PaymentService} from "../../core/order/payment/payment.service";
import {OrderInterface} from "../../core/order/order";

@Component({
  selector: 'app-payu-widget',
  templateUrl: './payu-widget.component.html',
  styleUrls: ['./payu-widget.component.scss']
})
export class PayuWidgetComponent implements OnInit {

  @Input() order: OrderInterface;

  constructor(private router: Router, private paymentService: PaymentService) {
  }

  ngOnInit(): void {
  }

  onClickPayu(order) {
    debugger
    this.paymentService.create(order).subscribe(payment => {
      debugger
      this.router.navigateByUrl("/");
    })
  }
}
