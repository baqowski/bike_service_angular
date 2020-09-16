import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderResolver} from './order.resolver';
import {OrderComponent} from './order.component';
import {OrderDetailComponent} from './detail/order.detail.component';
import {OrderDetailResolver} from './detail/order.detail.resolver';
import {TypeComponent} from './payment/type/type.component';
import {CurrentUserResolver} from '../user/current-user.resolver';

const routes: Routes = [
  {
    path: '*',
    redirectTo: 'home'
  },
  {
    path: '',
    component: OrderComponent,
    resolve: {
      order: OrderResolver,
      user: CurrentUserResolver
    }
  },
  {
    path: ':orderId',
    component: OrderDetailComponent,
    resolve: {
      order: OrderDetailResolver,
      user: CurrentUserResolver
    }
  },
  {
    path: ':orderId/payment',
    component: TypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {

}
