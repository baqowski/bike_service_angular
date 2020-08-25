import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../product.service';
import {mergeMap} from 'rxjs/operators';
import {Product} from '../product';
import {ToastrService} from 'ngx-toastr';
import {ShoppingCartService} from "../../shopping-cart/services/shopping-cart.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private shoppingCardService: ShoppingCartService,
              private toasterService: ToastrService) {
  }
  ngOnInit(): void {
    this.route.paramMap.pipe(
      mergeMap((params: ParamMap) => this.productService.getById(Number(params.get('id'))))
    ).subscribe(value => {
      this.product = value;
    });
  }

  addProductToShoppingBasket(product: Product): void {
    debugger
    this.shoppingCardService.addProduct(product).subscribe(value => {
      console.log(value)
      debugger
    }, error => {
      this.toasterService.info(error)
      // toDo
    }, () => {
      this.toasterService.success("Produkt został dodany do koszyka")
    });
  }
}
