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
import {ShoppingCartModule} from "../core/shopping-cart/shopping-cart.module";
import {ButtonComponent} from "./button/button.component";
import {PayuWidgetComponent} from './payu-widget/payu-widget.component';
import {TableComponent} from "./table/table.component";


@NgModule({
  declarations: [
    HeaderComponent,
    BasketComponent,
    BasketProductComponent,
    SidebarComponent,
    ButtonComponent,
    PayuWidgetComponent,
    TableComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BasketComponent,
    BasketProductComponent,
    ButtonComponent,
    PayuWidgetComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    RouterModule,
    FormsModule,
    ShoppingCartModule,
    FontAwesomeModule
  ],
  providers: [
    BasketService
  ]
})
export class SharedModule {
}
