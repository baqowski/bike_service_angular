import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user/user.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthService} from '../auth/auth.service';
import {ProductComponent} from './product/product.component';
import {ProductModule} from './product/product.module';
import {ProductResolver} from './product/product.resolver';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {TableComponent} from "../shared/table/table.component";
import {SharedModule} from "../shared/shared.module";
import {ShoppingCartModule} from "./shopping-cart/shopping-cart.module";


@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    ProductComponent,
    TableComponent
  ],
  exports: [
    UserComponent,
    DashboardComponent,
    ProductComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ShoppingCartModule
  ],
  providers: [
    AuthService,
    ProductResolver
  ]
})
export class CoreModule {
}
