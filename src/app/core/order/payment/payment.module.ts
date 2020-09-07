import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaymentService} from '../../payment/payment.service';
import {PaymentDetailComponent} from './detail/payment.detail.component';
import {PaymentResolver} from './payment.resolver';
import {RouterModule} from '@angular/router';
import {PaymentComponent} from './payment.component';
import {PaymentRoutingModule} from './payment-routing.module';
import {TypeComponent} from './type/type.component';


@NgModule({
  declarations: [
    PaymentComponent,
    PaymentDetailComponent,
    TypeComponent
  ],
  exports: [
    PaymentComponent,
    PaymentDetailComponent,
    TypeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PaymentRoutingModule
  ],
  providers: [
    PaymentService,
    PaymentResolver
  ]
})
export class PaymentModule {
}
