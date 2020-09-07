export interface TableStructureInterface {
  columnDef: string;
  header: string;
  action?: boolean;
  methodAction?(element: any): any;
  cell(element: any): any;
}
