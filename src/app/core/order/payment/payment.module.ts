import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaymentService} from "./payment.service";
import {PaymentComponent} from './payment.component';


@NgModule({
  declarations: [
    PaymentComponent
  ],
  exports: [
  ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [
    PaymentService
  ]
})
export class PaymentModule { }
