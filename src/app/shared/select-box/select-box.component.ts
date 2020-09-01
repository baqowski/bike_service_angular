import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit {

  @Input() data: any[];
  @Output() valueEmitter: EventEmitter<any> = new EventEmitter<any>();
  indexes: number[];

  constructor() {
  }

  ngOnInit(): void {
    debugger
  }


  emitAnyValue(value): any {
    return this.valueEmitter.emit(value);
  }
}
