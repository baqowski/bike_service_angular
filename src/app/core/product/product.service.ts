import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ProductInterface} from './product';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ProductCategoryInterface} from './product-category/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(environment.apiUrl + '/ext/products');
  }

  findAllByProductCategory(categoryName): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(environment.apiUrl + '/ext/products/search/' + categoryName);
  }

  findAllCategories(): Observable<ProductCategoryInterface> {
    return this.http.get<ProductCategoryInterface>(environment.apiUrl + '/api/productCategories');
  }


  getById(id: number): Observable<ProductInterface> {
    return this.http.get<ProductInterface>(environment.apiUrl + '/ext/products/' + id);
  }

  update(product: ProductInterface): any {
    return this.http.put<ProductInterface>(environment.apiUrl + '/api/product/' + product.id, product);
  }

  delete(id: number): Observable<ProductInterface> {
    return this.http.delete<ProductInterface>(environment.apiUrl + '/api/product/' + id);
  }

  create(product: ProductService): any {
    return this.http.post<ProductInterface>(environment.apiUrl + '/api/products', product);
  }

  getProductsFullProjection(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(environment.apiUrl + '/api/products?projection=full');
  }
}
