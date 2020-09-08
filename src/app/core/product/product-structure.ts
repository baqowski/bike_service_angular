import {TableStructureInterface} from '../../shared/table/table-structure.interface';

export const productTableStructure: Array<TableStructureInterface> = [

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
    columnDef: 'imageUrl',
    header: 'Image',
    cell: (element: any) => {
      return element.imageUrl;
    }
  },
  {
    columnDef: 'category',
    header: 'Category',
    cell: (element: any) => {
      return element.productCategory.categoryName;
    }
  }
];

