import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {DashboardComponent} from './core/dashboard/dashboard.component';
import {AuthGuard} from './auth/guard';
import {HomeComponent} from './public/home/home.component';
import {SummaryComponent} from './core/order/summary/summary.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {DeliveryResolver} from './core/order/summary/delivery/delivery.resolver';
import {OrderResolver} from './core/order/order.resolver';
import {LoanComponent} from './core/order/loan/loan.component';
import {ProductsCategoryComponent} from "./public/products-categories/products-category.component";
import {ProductsCategoryResolver} from "./public/products-categories/products-category.resolver";

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
    canActivate: [AuthGuard],
    resolve: {
      order: OrderResolver
    }
  },
  {
    path: 'loan',
    component: LoanComponent
  },
  {
    path: 'products',
    loadChildren: () => import('./core/product/product.module').then(module => module.ProductModule),
  },
  {
    path: 'orders',
    loadChildren: () => import('./core/order/order.module').then(module => module.OrderModule),
  },
  {
    path: 'account',
    loadChildren: () => import('./public/account/account.module').then(module => module.AccountModule),
  },
  {
    path: 'categories/:category',
    component: ProductsCategoryComponent,
    resolve: {
      products: ProductsCategoryResolver
    }
  },
 /* {
    path: 'categories',
    loadChildren: () => import('./public/public.module').then(module => module.PublicModule),
  },*/
  {
    path: 'summary',
    component: SummaryComponent,
    resolve: {
      delivery: DeliveryResolver
    }
  },
  {
    path: '**',
    redirectTo: '/404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
