import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderResolver} from './order.resolver';
import {OrderComponent} from './order.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {

}
