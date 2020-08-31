import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: any[];
  @Input() showActionButtons: boolean;
  @Output() onUpdatedEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDeleteEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  columns: string[];
  isEditable: boolean[];

  ngOnInit(): void {
    this.columns = Object.keys(this.data[0])
      .filter(el => el != '_links')
      .filter(el => el != 'id')
      .filter(el => el != 'isEditable');
  }

  onClickDeleteButton(row): void {
    this.onDeleteEventEmitter.next(row);
  }

  onClickUpdateButton(row): void {
    if (row.isEditable === true) {
      this.onUpdatedEventEmitter.next(row);
    }
  }

  onChangeEditableStatus(index: number): void {
    this.data[index].isEditable = !this.data[index].isEditable;
  }

  onUpdate(element: any): void {

  }

}
