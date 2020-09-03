import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaymentService} from "./payment.service";
import {PaymentComponent} from './payment.component';
import {PaymentDetailComponent} from './payment-detail/payment-detail.component';
import {PaymentResolver} from "./payment.resolver";


@NgModule({
  declarations: [
    PaymentComponent,
    PaymentDetailComponent
  ],
  exports: [
    PaymentComponent,
    PaymentDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PaymentService,
    PaymentResolver
  ]
})
export class PaymentModule {
}
