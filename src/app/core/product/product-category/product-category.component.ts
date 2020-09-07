import {Component, OnInit} from '@angular/core';
import {ProductInterface} from '../product';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  products: ProductInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
