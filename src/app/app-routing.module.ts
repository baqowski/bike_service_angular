import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from "./auth/register/register.component";
import {DashboardComponent} from "./core/dashboard/dashboard.component";
import {AuthGuard} from "./auth/guard";
import {AppComponent} from "./app.component";
import {ProductComponent} from "./core/product/product.component";
import {ProductDetailComponent} from "./core/product/product-detail/product-detail.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},

  {
    path: 'product',
    component: ProductComponent,
    /*canActivate: [AuthGuard],*/
    loadChildren: './core/product/product.module#ProductModule'
  },

  /*{path: 'product/:id', component: ProductDetailComponent }*/

  /*{path: '**', redirectTo: '#' }*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
