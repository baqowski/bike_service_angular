import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductSummaryComponent} from "./product-summary/product-summary.component";
import {OrderAddressComponent} from './order-address/order-address.component';
import {SharedModule} from "../../shared/shared.module";
import {PaymentComponent} from './payment/payment.component';


@NgModule({
  declarations: [
    ProductSummaryComponent,
    OrderAddressComponent,
    PaymentComponent
  ],
  exports: [
    ProductSummaryComponent,
    OrderAddressComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class OrderModule {
}
