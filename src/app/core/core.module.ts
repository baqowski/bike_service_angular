import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user/user.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthService} from '../auth/auth.service';
import {ProductComponent} from './product/product.component';
import {ProductModule} from './product/product.module';
import {ProductResolver} from './product/product.resolver';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ItemComponent} from './shopping-cart/item/item.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    ProductComponent,
    ShoppingCartComponent,
    ItemComponent,
  ],
  exports: [
    UserComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    AuthService,
    ProductResolver
  ]
})
export class CoreModule {
}
