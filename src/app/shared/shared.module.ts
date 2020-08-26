import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {RouterModule} from '@angular/router';
import {BasketComponent} from './basket/basket.component';
import {BasketProductComponent} from './basket/basket-product/basket-product.component';
import {BasketService} from './basket/basket.service';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ShoppingCartComponent} from "../core/shopping-cart/shopping-cart.component";


@NgModule({
  declarations: [
    HeaderComponent,
    BasketComponent,
    BasketProductComponent,
    SidebarComponent,
    ShoppingCartComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BasketComponent,
    BasketProductComponent,
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    BasketService
  ]
})
export class SharedModule {
}
