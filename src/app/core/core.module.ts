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
import {SharedModule} from "../shared/shared.module";
import {ShoppingCartModule} from "./shopping-cart/shopping-cart.module";
import {RoleComponent} from './role/role.component';
import {OrderComponent} from './order/order.component';
import {OrderModule} from "./order/order.module";


@NgModule({
  declarations: [
    DashboardComponent,
    RoleComponent,
    UserComponent,
    OrderComponent,
    ProductComponent
  ],
  exports: [
    DashboardComponent,
    RoleComponent,
    UserComponent,
    OrderComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ShoppingCartModule,
    OrderModule
  ],
  providers: [
    AuthService,
    ProductResolver
  ]
})
export class CoreModule {
}
