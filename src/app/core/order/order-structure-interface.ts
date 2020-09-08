import {TableStructureInterface} from '../../shared/table/table-structure.interface';

export const orderTableStructure: Array<TableStructureInterface> = [
  {
    columnDef: 'id',
    header: 'Nr. zamówienia',
    cell: (element: any) => {
      return element.id;
    },
    navigateToId: true
  },
  {
    columnDef: 'amount',
    header: 'Kwota',
    cell: (element: any) => {
      return element.amount;
    },
  },
  {
    columnDef: 'status',
    header: 'Status zamówienia',
    cell: (element: any) => {
      return element.orderStatus;
    },
  },
  {
    columnDef: 'serviceType',
    header: 'Rodzaj usługi',
    cell: (element: any) => {
      return element.orderServiceType;
    },
  },
  {
    columnDef: 'status',
    header: 'Status płatności',
    cell: (element: any) => {
      return element.payment.status;
    },
  },
  {
    columnDef: 'type',
    header: 'Rodzaj płatności',
    cell: (element: any) => {
      return element.payment.type;
    },
  },
];
