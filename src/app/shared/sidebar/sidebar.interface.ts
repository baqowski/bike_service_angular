import {ProductCategoryInterface} from '../../core/product/product-category/product-category';

export interface SidebarInterface {
  name: string;
  routerLink: string;
  hrefId: string;
  href: string;
  subLinks?: SidebarInterface[];
  category?: ProductCategoryInterface;
}
