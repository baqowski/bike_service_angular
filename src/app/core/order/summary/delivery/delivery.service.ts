import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DeliveryInterface} from './delivery';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }

  getDeliveryData(): Observable<DeliveryInterface[]>{
    return this.http.get<DeliveryInterface[]>(environment.apiUrl + '/api/deliveries');
  }
}
