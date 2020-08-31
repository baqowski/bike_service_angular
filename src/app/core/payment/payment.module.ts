import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaymentTypeComponent} from './payment-type/payment-type.component';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    PaymentTypeComponent
  ],
  exports: [
    PaymentTypeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class PaymentModule { }
