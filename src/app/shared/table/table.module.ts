import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table.component';
import {ButtonComponent} from '../button/button.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    TableComponent,
    ButtonComponent
  ],
  exports: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class TableModule {
}
