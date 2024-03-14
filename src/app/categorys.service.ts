import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorysService {
  baseUrl:string='https://ecommerce.routemisr.com'

  constructor(private _HttpClient:HttpClient) { }
  userToken :any = {token:localStorage.getItem("userToken")}
  categApi():Observable<any>{
   return this._HttpClient.get(`${this.baseUrl}/api/v1/categories`,{headers:this.userToken})
  }
}
