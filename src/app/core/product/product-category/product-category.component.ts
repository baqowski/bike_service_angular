import {Component, OnInit} from '@angular/core';
import {ProductInterface} from '../product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  products: ProductInterface[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.products = this.route.snapshot.data.category;
  }
}
