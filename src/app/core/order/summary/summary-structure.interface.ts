import {TableStructureInterface} from '../../../shared/table/table-structure.interface';

export const summaryTableStructure: Array<TableStructureInterface> = [
  {
    columnDef: 'id',
    header: 'Id',
    cell: (element: any) => {
      return element.id;
    }
  },
  {
    columnDef: 'name',
    header: 'Name',
    cell: (element: any) => {
      return element.name;
    }
  },
  {
    columnDef: 'price',
    header: 'Price',
    cell: (element: any) => {
      return element.price;
    }
  },
  {
    columnDef: 'color',
    header: 'Color',
    cell: (element: any) => {
      return element.color;
    }
  },
  {
    columnDef: 'producer',
    header: 'Procuder',
    cell: (element: any) => {
      return element.producer;
    }
  },
  {
    columnDef: 'summary.quantity',
    header: 'Quantity',
    cell: (element: any) => {
      return element.quantity;
    }
  }
];
