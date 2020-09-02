import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AddressInterface} from './address';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.addressForm.addControl('address', new FormGroup({
      street: new FormControl('', Validators.required),
      houseNumber: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      savedAddress: new FormControl('', Validators.required),
      saveToClient: new FormControl('', Validators.required)
    }));
  }

  get form(): any {
    return this.addressForm.controls;
  }


  onEmitClientAddress(address) {
    this.emitClientAddress.emit(address);
  }

  onSubmit(data) {

  }
}
