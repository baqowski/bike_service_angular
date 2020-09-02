import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AddressInterface} from "./address";
import {environment} from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getAllByUserId(userId): Observable<AddressInterface> {
    return this.http.get<AddressInterface>(environment.apiUrl + "/api/addresses/" + userId);

  }
}
