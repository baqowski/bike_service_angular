import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderModalComponent} from './header/header.component';
import {BodyComponent} from './body/body.component';
import {ModalService} from './modal.service';


@NgModule({
  declarations: [HeaderModalComponent, BodyComponent],
  exports: [
    HeaderModalComponent,
    BodyComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ModalService
  ],
  entryComponents: [BodyComponent]
})
export class ModalModule {
}
