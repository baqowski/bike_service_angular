import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {ProductModule} from './product/product.module';
import {ProductComponent} from './product/product.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ProductComponent,
    HomeComponent
  ],
  exports: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ProductModule,
    RouterModule
  ]
})
export class PublicModule { }
