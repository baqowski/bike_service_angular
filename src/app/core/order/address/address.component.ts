import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AddressInterface} from "./address";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Output() emitClientAddress: EventEmitter<AddressInterface> = new EventEmitter<AddressInterface>();
  selectedAddress: AddressInterface;
  @Input() addressForm: FormGroup;
  @Output() addressFormChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    debugger
    this.addressForm = this.formBuilder.group({
      street: ['asdas', Validators.required],
      houseNumber: ['asdas', Validators.required],
      postalCode: ['asdas', Validators.required],
      city: ['asd', Validators.required],
      saveToClient: [true, ""]
    });
  }

  get form(): any {
    return this.addressForm.controls;
  }



  onEmitClientAddress(address) {
    this.emitClientAddress.emit(address)
  }

  onSubmit(data) {
    debugger

  }
}
