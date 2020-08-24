import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user/user.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthService} from '../auth/auth.service';
import {ProductComponent} from './product/product.component';
import {ProductModule} from './product/product.module';
import {ProductResolver} from './product/product.resolver';
import {SharedModule} from '../shared/shared.module';
import {ShoppingCardComponent} from './shopping-card/shopping-card.component';
import {ItemComponent} from './shopping-card/item/item.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    ProductComponent,
    ShoppingCardComponent,
    ItemComponent,
  ],
  exports: [
    UserComponent,
    ShoppingCardComponent
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
