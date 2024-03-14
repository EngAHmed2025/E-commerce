import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isloading:boolean =false;
  errMassge! : string;

  constructor(private _AuthenticationService:AuthenticationService ,private _Router:Router){}

registerForm : FormGroup = new FormGroup({
name: new FormControl(null,[Validators.required, Validators.minLength(3)]),
email: new FormControl(null,[Validators.required , Validators.email]),
password: new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z].{6,}$/)]),
rePassword: new FormControl(null,[Validators.required, Validators.pattern(/^[A-Z].{6,}$/)]),
Phone: new FormControl(null,[Validators.required, Validators.pattern(/^[01][0125][0-9]{8}$/)])
},this.vld)





registerSubmit(){
  this.isloading =true;


this._AuthenticationService.registerApi(this.registerForm.value).subscribe({

  next:(res)=>{this.isloading =false;
    this._Router.navigate(['/login'])
console.log(res)},

  
  error:(err)=> {
    this.isloading =false;
    this.errMassge = err.error.message
  }
})


}




vld(g:any){

if (g.get('password')?.value == g.get('rePassword')?.value) {
  return null
}
else{
  return{"matchedPass":true}
}
}
}


