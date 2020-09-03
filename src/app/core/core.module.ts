import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user/user.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthService} from '../auth/auth.service';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {ShoppingCartModule} from '../public/shopping-cart/shopping-cart.module';
import {RoleComponent} from './role/role.component';
import {OrderModule} from './order/order.module';
import {ProductResolver} from '../public/product/product.resolver';
import {ManagementModule} from './management/management.module';
import {UserShoppingComponent} from './dashboard/user-shopping/user-shopping.component';


@NgModule({
  declarations: [
    DashboardComponent,
    RoleComponent,
    UserComponent,
    UserShoppingComponent
  ],
  exports: [
    DashboardComponent,
    RoleComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ShoppingCartModule,
    ManagementModule,
    OrderModule
  ],
  providers: [
    AuthService,
    ProductResolver
  ]
})
export class CoreModule {
}
