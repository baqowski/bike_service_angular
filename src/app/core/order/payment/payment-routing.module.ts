import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PaymentDetailComponent} from './detail/payment.detail.component';
import {PaymentResolver} from './payment.resolver';
import {TypeComponent} from './type/type.component';


const routes: Routes = [
  {
    path: '*',
    redirectTo: 'home'
  },
  {
    path: '',
    component: TypeComponent,
  },
  {
    path: ':paymentId',
    component: PaymentDetailComponent,
    resolve: {
      payment: PaymentResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule {

}
