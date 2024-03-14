import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

export const authGuard: CanActivateFn = (route, state) => {

let _Router:Router =  inject(Router);
let _AuthenticationService:AuthenticationService = inject(AuthenticationService);

if (localStorage.getItem("userToken")== null) {
  _Router.navigate(['/login']);
    return false;
}else{
  _AuthenticationService.saveDataMethod()
  return true;
}
};
