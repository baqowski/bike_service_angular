import {Component, OnInit} from '@angular/core';
import {ProductInterface} from './product';
import {tap} from 'rxjs/operators';
import {ProductService} from './product.service';
import {ShoppingCartService} from '../../public/shopping-cart/shopping-cart.service';
import {TableStructureInterface} from '../../shared/table/table-structure.interface';
import {ToastrService} from 'ngx-toastr';
import {productTableStructure} from './product-structure';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: ProductInterface[];
  productStructureTableColumns: Array<TableStructureInterface> = productTableStructure;

  constructor(private productService: ProductService,
              private shoppingCartService: ShoppingCartService,
              private toastrService: ToastrService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    debugger
    this.products = this.route.snapshot.data.products._embedded.products;
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
