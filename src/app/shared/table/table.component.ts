import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: any[];
  columns: string[];
  isEditable: boolean = false;

  ngOnInit(): void {
    this.columns = Object.keys(this.data[0])
      .filter(el => el != '_links')
      .filter(el => el != 'id');
  }

  onClickDeleteButton(): void {
    debugger
  }

  onClickEditable(): void {
    this.isEditable = !this.isEditable;
  }


}
