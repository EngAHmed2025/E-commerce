import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private _HttpClient:HttpClient) { }
baseUrl:string='https://ecommerce.routemisr.com'
userToken :any =  {token :localStorage.getItem("userToken")}
addTowISHApI(pId:string):Observable<any>{
return this._HttpClient.post(`${this.baseUrl}/api/v1/wishlist`,{productId: pId} ,{

  headers:this.userToken
})
}
getWishList():Observable<any>{
  return this._HttpClient.get(`${this.baseUrl}/api/v1/wishlist`,{headers:this.userToken});
}

RemoveItems(prodId:string):Observable<any>{

  return this._HttpClient.delete(`${this.baseUrl}/api/v1/wishlist/${prodId}`,{headers:this.userToken})
}


}
