
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService  {
cartItemsNum:BehaviorSubject<any> = new BehaviorSubject (null)
  baseUrl:string='https://ecommerce.routemisr.com'
  constructor(private _HttpClient:HttpClient) { }
userToken :any =  {token :localStorage.getItem("userToken")}
addTocartApI(pId:string):Observable<any>{
return this._HttpClient.post(`${this.baseUrl}/api/v1/cart`,{productId: pId} ,{

  headers:this.userToken
})
}

UpdateCartItemQunAPI(PId:string , Pcount:string):Observable<any>{
  return this._HttpClient.put(`${this.baseUrl}/api/v1/cart/${PId}`, {count:Pcount},{headers:this.userToken});

}


GetAllCartItemsAPI():Observable<any>{
  return this._HttpClient.get(`${this.baseUrl}/api/v1/cart`,{headers:this.userToken})
}


RemoveItemsApI(pId:string):Observable<any>{

return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart/${pId}`,{headers:this.userToken});
}
ClearCartAPI():Observable<any>{
  return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart`,{headers:this.userToken})
}


ClearCartApI():Observable<any>{

  return this._HttpClient.delete(`${this.baseUrl}/api/v1/cart` , {headers:this.userToken});
  }
}
