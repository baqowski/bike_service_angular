import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {AngularSvgIconModule} from "angular-svg-icon";
import {RouterModule} from "@angular/router";
import {BasketComponent} from './basket/basket.component';
import {BasketProductComponent} from './basket/basket-product/basket-product.component';
import {BasketService} from "./basket/basket.service";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HeaderComponent,
    BasketComponent,
    BasketProductComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BasketComponent,
    BasketProductComponent,
    BasketProductComponent
  ],
    imports: [
        CommonModule,
        AngularSvgIconModule,
        RouterModule,
        FormsModule
    ],
  providers: [
    BasketService
  ]
})
export class SharedModule {
}
