import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
cartItemsnav:string =""
isLogin:boolean =false;

constructor(private _CartService:CartService , private _AuthenticationService: AuthenticationService ,private _Router:Router){}

ngOnInit(): void {
this._CartService.cartItemsNum.subscribe(()=>{
 this.cartItemsnav = this._CartService.cartItemsNum.getValue()
})
this._AuthenticationService.userDataVar.subscribe(()=>{
if(this._AuthenticationService.userDataVar.getValue()==null){
this.isLogin= false;
}else{
  this.isLogin=true;
}
})
}
logout(){
localStorage.removeItem("userToken")
this._AuthenticationService.saveDataMethod()
this._Router.navigate(['/login'])
}
}
