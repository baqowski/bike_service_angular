import {Component, OnInit} from '@angular/core';
import {ProductInterface} from './product';
import {map, tap} from 'rxjs/operators';
import {ProductService} from './product.service';
import {ShoppingCartService} from '../../public/shopping-cart/shopping-cart.service';
import {TableStructureInterface} from '../../shared/table/table-structure.interface';
import {summaryTableStructure} from '../order/summary/summary-structure.interface';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: ProductInterface[];
  summaryStructureTableColumns: Array<TableStructureInterface> = summaryTableStructure;

  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.productService.getAll().pipe(
      map(value => value.map(
        (product: ProductInterface) => {
          product.quantity = 1;
          return product;
        }
      )),
      tap(data => {
        this.products = data;
      })
    ).subscribe(() => {
    });
  }

  addProductToShoppingCart(product): void {
    if (!this.productExistInShoppingCard(product) && product.quantity > 0) {
      this.shoppingCartService.addProduct(product);
    }
  }

  private productExistInShoppingCard(product: ProductInterface): boolean {
    let status = false;
    this.shoppingCartService.getProductsValue.forEach(value => {
      if (value === product) {
        status = true;
      }
    });
    return status;
  }

  onClickDelete(element): void {
    debugger
    this.productService.delete(element.id).pipe(
      tap((value: any) => {
        this.toastrService.success('Produkt ' + value.name + 'został usunięty');
      })
    ).subscribe();
  }

  onClickUpdate(element): void {
    debugger
  }
}
