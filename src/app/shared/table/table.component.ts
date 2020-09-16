import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TableStructureInterface} from './table-structure.interface';
import {ProductInterface} from '../../core/product/product';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() selectData: any[];
  @Input() data: any[];
  @Input() isEnabledAction: boolean;
  @Input() property: string;
  @Input() columns: TableStructureInterface[];
  @Input() navigateToId: boolean;
  @Output() onUpdatedEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDeleteEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  isEditable: boolean[];

  ngOnInit(): void {
    debugger
  }

  onClickDeleteButton(row): void {
    this.onDeleteEventEmitter.next(row);
  }

  onClickUpdateButton(row: ProductInterface): void {
    row.active = !row.active;
    if (row.active === true) {
      this.onUpdatedEventEmitter.next(row);
    }
  }

  onChangeEditableStatus(index: number): void {
    this.data[index].isEditable = !this.data[index].isEditable;
  }

  onUpdate(element: any): void {

  }

}
