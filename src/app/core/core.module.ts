import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthService} from '../auth/auth.service';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {ShoppingCartModule} from '../public/shopping-cart/shopping-cart.module';
import {RoleComponent} from './role/role.component';
import {OrderModule} from './order/order.module';
import {ProductResolver} from './product/product.resolver';
import {ManagementModule} from './management/management.module';
import {ProductModule} from './product/product.module';


@NgModule({
  declarations: [
    DashboardComponent,
    RoleComponent
  ],
  exports: [
    DashboardComponent,
    RoleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ShoppingCartModule,
    ManagementModule,
    OrderModule,
    ProductModule
  ],
  providers: [
    AuthService,
    ProductResolver
  ]
})
export class CoreModule {
}
