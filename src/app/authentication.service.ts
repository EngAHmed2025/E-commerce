
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';


interface registerInterface{
  name?:string,
  eamil:string,
  password:string,
  repassword?:string,
  phone?:string,
  resetCode?:string,
  newPassword?:string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
userDataVar:BehaviorSubject<any>=new BehaviorSubject(null);
baseUrl:string='https://ecommerce.routemisr.com'
  constructor(private _HttpClient:HttpClient ,private _Router:Router) {
    if (localStorage.getItem('currentPage')) {
      _Router.navigate([localStorage.getItem("currentPage")]);
    }
   }

  registerApi(rData:registerInterface):Observable<any>{
   return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signup`,rData)
  }
  loginApi(rData:registerInterface):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/signin`,rData)
   }
  
  forgetApi(rData:registerInterface):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/forgotPasswords`,rData)
   }
  verifyApi(rData:registerInterface):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/api/v1/auth/verifyResetCode`,rData)
   }
  newPassApi(rData:registerInterface):Observable<any>{
    return this._HttpClient.put(`${this.baseUrl}/api/v1/auth/resetPassword`,rData)
   }
  
  

  saveDataMethod(){
if (localStorage.getItem('userToken')!= null) {  
this.userDataVar.next(localStorage.getItem('userToken')) 
this.userDataVar.next(jwtDecode(this.userDataVar.getValue())
) 

}else{

  this.userDataVar.next(null)
}

  }

}




