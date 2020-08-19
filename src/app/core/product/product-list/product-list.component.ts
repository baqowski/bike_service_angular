import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  observable: Observable<Product[]>;

  items: Product[] = [
    {id: 1 ,name: 'first', price: 12},
    {id: 2, name: 'second', price: 15},
  ]


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().pipe(map((result: any) => {
      console.log(result);
      return result._embedded.products;
    }))
      .subscribe(value => {
        this.products = value;
      })
  }

  /*getData(): any[] {
    this.productService.getAll().pipe(map())
      .subscribe(value => {
        debugger
        this.products = value;
      })*/



/*  private getEmbedded(): any[] {
    let data: any;
    this.productService.getAll().pipe(first())
      .subscribe(value => {
        debugger
        this.products = value._embedded.products;
       return  value;
      })
  }*/
}
