import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from "./auth/register/register.component";
import {DashboardComponent} from "./core/dashboard/dashboard.component";
import {AuthGuard} from "./auth/guard";
import {ProductComponent} from "./core/product/product.component";

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

  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( module => module.TestModule)
  }

  /*{path: 'product/:id', component: ProductDetailComponent }*/

  /*{path: '**', redirectTo: '#' }*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
