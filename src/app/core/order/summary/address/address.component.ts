import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() addressForm: FormGroup;
  @Output() addressFormChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor() {
  }

  ngOnInit(): void {
    this.addressForm.addControl('address', new FormGroup({
      street: new FormControl('', Validators.required),
      houseNumber: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      savedAddress: new FormControl('', Validators.required),
      saveToClient: new FormControl('')
    }));
  }

  onEmitClientAddress(address): void {
    this.addressFormChange.emit(address);
  }
}
