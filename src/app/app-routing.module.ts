import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {DashboardComponent} from './core/dashboard/dashboard.component';
import {AuthGuard} from './auth/guard';
import {HomeComponent} from './public/home/home.component';
import {SummaryComponent} from './core/order/summary/summary.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {AccessDeniedComponent} from './shared/access-denied/access-denied.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products',
    loadChildren: () => import('./public/product/product.module').then(module => module.ProductModule),
  },
  {
    path: 'orders',
    loadChildren: () => import('./core/order/order.module').then(module => module.OrderModule),
  },
  {
    path: 'summary',
    component: SummaryComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
