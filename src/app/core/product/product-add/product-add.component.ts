import {Component, OnInit} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onAddProduct(product: Product) : void {

  }

}
