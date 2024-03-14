import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl:string='https://ecommerce.routemisr.com'
  constructor(private _HttpClient:HttpClient) { }
  userToken :any = {token:localStorage.getItem("userToken")}
 

  Outcheck(cartId:string , formValue:object):Observable<any>{

    return this._HttpClient.post(`${this.baseUrl}/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,{
      shippingAddress:formValue} , {headers:this.userToken} 
    
    )
    
  }
    

}
