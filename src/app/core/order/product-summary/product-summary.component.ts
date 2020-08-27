import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../product/product";

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent implements OnInit {

  @Input() products: Product[];
  @Input() amount: number;

  constructor() { }

  ngOnInit(): void {
  }

}
