import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  api = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }
  getCarts(): Observable<any> {
    return this.httpClient.get(this.api+"/cart");
    
  }
}
