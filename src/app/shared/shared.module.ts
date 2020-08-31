import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {RouterModule} from '@angular/router';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ShoppingCartModule} from '../public/shopping-cart/shopping-cart.module';
import {ButtonComponent} from './button/button.component';
import {PayuWidgetComponent} from './payu-widget/payu-widget.component';
import {TableComponent} from './table/table.component';
import {SelectBoxComponent} from './select-box/select-box.component';
import {NotFoundService} from './not-found/not-found.service';
import {AccessDeniedComponent} from './access-denied/access-denied.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ButtonComponent,
    PayuWidgetComponent,
    TableComponent,
    SelectBoxComponent,
    AccessDeniedComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ButtonComponent,
    PayuWidgetComponent,
    TableComponent,
    SelectBoxComponent,
    AccessDeniedComponent
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
    NotFoundService
  ]
})
export class SharedModule {
}
