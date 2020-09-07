import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemServiceBoxComponent} from './item-service-box/item-service-box.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    ItemServiceBoxComponent
  ],
  exports: [
    ItemServiceBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DashboardModule { }
