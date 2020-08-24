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
import {TableModule} from './table/table.module';
import {CoreModule} from '../core/core.module';


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
    TableModule
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
    TableModule,
    CoreModule
  ],
  providers: [
    BasketService
  ]
})
export class SharedModule {
}
