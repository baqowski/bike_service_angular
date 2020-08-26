import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user/user.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthService} from '../auth/auth.service';
import {ProductComponent} from './product/product.component';
import {ProductModule} from './product/product.module';
import {ProductResolver} from './product/product.resolver';
import {ItemComponent} from './shopping-cart/item/item.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {TableComponent} from "../shared/table/table.component";
import {SharedModule} from "../shared/shared.module";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";


@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    ProductComponent,
    ItemComponent,
    ShoppingCartComponent,
    TableComponent
  ],
  exports: [
    UserComponent,
    DashboardComponent,
    ProductComponent,
    ItemComponent,
    ShoppingCartComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    AuthService,
    ProductResolver
  ]
})
export class CoreModule {
}
