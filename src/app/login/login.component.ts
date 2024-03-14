import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isloading:boolean = false;
  forgetFlag:boolean = true;
  verifyFlag:boolean = false;
  newPassFlag:boolean = false;


  errMassge! : string;

  constructor(private _AuthenticationService:AuthenticationService ,private _Router:Router){}

loginForm : FormGroup = new FormGroup({
email: new FormControl(null,[Validators.required , Validators.email]),
password: new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z].{6,}$/)]),
})



forgetForm:FormGroup = new FormGroup({
email: new FormControl(null ,[Validators.required , Validators.email])
})

verifyFrom:FormGroup = new FormGroup({
resetCode: new FormControl(null ,[Validators.required])
})



newPasswordForm:FormGroup = new FormGroup({
  email: new FormControl(null,[Validators.required , Validators.email]),
  newPassword: new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z].{6,}$/)]),
})



loginFormMethod(){
  this.isloading =true;


this._AuthenticationService.loginApi(this.loginForm.value).subscribe({

  next:(res)=>{
this.isloading =false;
if(res.message == "success"){

localStorage.setItem("userToken", res.token);
this._AuthenticationService.saveDataMethod()
this._Router.navigate(['/home']) 
}},

  
  error:(err)=> {
    this.isloading =false;
 this.errMassge = err.error.message
 
  }
})


}




ForgetFormMethod(){
  this.isloading =true;


this._AuthenticationService.forgetApi(this.forgetForm.value).subscribe({

  next:(res)=>{
this.isloading =false;
if(res.message){
this.forgetFlag= false;
this.verifyFlag= true;

}},

  
  error:(err)=> {
    this.isloading =false;
 this.errMassge = err.error.message
 
  }
})


}



VerifyFormMethod(){
  this.isloading =true;


this._AuthenticationService.verifyApi(this.verifyFrom.value).subscribe({

  next:(res)=>{
this.isloading =false;
if(res.status == "Success"){
  this.verifyFlag= false;
  this.newPassFlag= true;
}},

  
  error:(err)=> {
    this.isloading =false;
 this.errMassge = err.error.message
 
  }
})


}



newPassFormMethod(){
  this.isloading =true;


this._AuthenticationService.newPassApi(this.newPasswordForm.value).subscribe({

  next:(res)=>{
this.isloading =false;
if(res.token){
console.log("new password tamam");

}},

  
  error:(err)=> {
    this.isloading =false;
 this.errMassge = err.error.message
 
  }
})


}




}
