import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShoppingCartComponent} from './shopping-cart.component';
import {ItemComponent} from './item/item.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ItemComponent
  ],
  exports: [
    ShoppingCartComponent,
    ItemComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ]
})
export class ShoppingCartModule {
}
