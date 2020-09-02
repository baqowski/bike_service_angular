import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {SummaryComponent} from './summary/summary.component';
import {OrderRoutingModule} from './order-routing.module';
import {AddressComponent} from './summary/address/address.component';
import {OrderResolver} from './order.resolver';
import {OrderComponent} from './order.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {PaymentModule} from './payment/payment.module';
import {DeliveryComponent} from './summary/delivery/delivery.component';
import {AddressService} from "./summary/address/address.service";
import {ReactiveFormsModule} from "@angular/forms";
import {DeliveryResolver} from './summary/delivery/delivery.resolver';


@NgModule({
  declarations: [
    SummaryComponent,
    AddressComponent,
    OrderComponent,
    OrderDetailComponent,
    DeliveryComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrderRoutingModule,
    PaymentModule,
    ReactiveFormsModule
  ],
  providers: [
    OrderResolver,
    AddressService,
    DeliveryResolver
  ]
})
export class OrderModule {
}
