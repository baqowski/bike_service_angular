import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import { SummaryComponent } from './summary/summary.component';
import {OrderRoutingModule} from './order-routing.module';
import { AddressComponent } from './address/address.component';
import {OrderResolver} from './order.resolver';
import { OrderComponent } from './order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import {PaymentModule} from '../payment/payment.module';


@NgModule({
  declarations: [
    SummaryComponent,
    AddressComponent,
    OrderComponent,
    OrderDetailComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrderRoutingModule,
    PaymentModule
  ],
  providers: [
    OrderResolver
  ]
})
export class OrderModule {
}
