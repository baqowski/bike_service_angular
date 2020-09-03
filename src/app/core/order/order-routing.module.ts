import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderResolver} from './order.resolver';
import {OrderComponent} from './order.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {PaymentDetailComponent} from "./payment/payment-detail/payment-detail.component";
import {PaymentResolver} from "./payment/payment.resolver";

const routes: Routes = [
  {
    path: '*',
    redirectTo: 'home'
  },
  {
    path: '',
    component: OrderComponent
  },
  {
    path: ':id',
    component: OrderDetailComponent,
    resolve: {
      order: OrderResolver
    }
  },
  {
    path: ':id/payment',
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
export class OrderRoutingModule {

}
