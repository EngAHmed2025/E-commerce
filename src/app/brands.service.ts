import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  baseUrl:string='https://ecommerce.routemisr.com'
  constructor(private _HttpClient:HttpClient) { }
  userToken :any =  {token :localStorage.getItem("userToken")}




  GetAllbrandsAPI():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/api/v1/brands`,{headers:this.userToken})
  }



}
