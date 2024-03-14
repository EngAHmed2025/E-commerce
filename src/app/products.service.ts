import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';




@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  baseUrl:string='https://ecommerce.routemisr.com'
  constructor(private _HttpClient:HttpClient) { }

  getProductApi():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/products`)
   }

  getCategoryApi():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/categories`)
   }





  getSpecProductApi(_id:string):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/products/${_id}`)
   }
}
