import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {AngularSvgIconModule} from "angular-svg-icon";
import {RouterModule} from "@angular/router";
import { BasketComponent } from './basket/basket.component';
import { BasketProductComponent } from './basket/basket-product/basket-product.component';
import {BasketService} from "./basket/basket.service";
import {SidebarComponent} from "./sidebar/sidebar.component";



@NgModule({
  declarations: [
    HeaderComponent,
    BasketComponent,
    BasketProductComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    RouterModule
  ],
  providers: [
    BasketService
  ]
})
export class SharedModule { }
