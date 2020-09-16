import {TableStructureInterface} from '../../shared/table/table-structure.interface';

export const productTableStructure: Array<TableStructureInterface> = [

  {
    columnDef: 'id',
    header: 'Identyfikator',
    cell: (element: any) => {
      return element.id;
    }
  },
  {
    columnDef: 'name',
    header: 'Nazwa',
    cell: (element: any) => {
      return element.name;
    }
  },
  {
    columnDef: 'price',
    header: 'Cena',
    cell: (element: any) => {
      return element.price;
    }
  },
  {
    columnDef: 'color',
    header: 'Kolor',
    cell: (element: any) => {
      return element.color;
    }
  },
  {
    columnDef: 'producer',
    header: 'Producent',
    cell: (element: any) => {
      return element.producer;
    }
  },
  {
    columnDef: 'imageUrl',
    header: 'Zdjęcie',
    cell: (element: any) => {
      return element.imageUrl;
    }
  },
  {
    columnDef: 'category',
    header: 'Kategoria',
    cell: (element: any) => {
      return element.productCategory.categoryName;
    },
    action: true
  }
];

