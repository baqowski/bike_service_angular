import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderResolver} from './order.resolver';
import {OrderComponent} from './order.component';
import {OrderDetailComponent} from './detail/order.detail.component';
import {OrderDetailResolver} from './detail/order.detail.resolver';
import {TypeComponent} from './payment/type/type.component';
import {LoanComponent} from './loan/loan.component';

const routes: Routes = [
  {
    path: '*',
    redirectTo: 'home'
  },
  {
    path: '',
    component: OrderComponent,
    resolve: {
      order: OrderResolver
    }
  },
  {
    path: ':orderId',
    component: OrderDetailComponent,
    resolve: {
      order: OrderDetailResolver
    }
  },
  {
    path: ':orderId/payment',
    component: TypeComponent
  },
  {
    path: 'loan',
    component: LoanComponent
  }
/*  {
    path: 'summary',
    component: SummaryComponent,
    resolve: {
      delivery: DeliveryResolver
    }
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {

}
