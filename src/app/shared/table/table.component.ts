import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TableStructureInterface} from './table-structure.interface';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: any[];
  @Input() isEnabledAction: boolean;
  @Input() property: string;
  @Input() columns: TableStructureInterface[];
  @Output() onUpdatedEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDeleteEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  isEditable: boolean[];

  ngOnInit(): void {
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
