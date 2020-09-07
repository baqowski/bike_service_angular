import {User} from '../user/user';
import {TableStructureInterface} from '../../shared/table/table-structure.interface';

export interface ProductInterface {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  color: string;
  producer: string;
  isEditable: boolean;
  user: User;
}

export const productDetailTableStructure: Array<TableStructureInterface> = [
  {
    columnDef: 'id',
    header: 'Id',
    cell: (element: any) => {
      return element.product.id;
    }
  },
  {
    columnDef: 'product.name',
    header: 'Product name',
    cell: (element: any) => {
      return element.product.name;
    }
  },
  {
    columnDef: 'product.price',
    header: 'Product price',
    cell: (element: any) => {
      return element.product.price;
    }
  }
];
