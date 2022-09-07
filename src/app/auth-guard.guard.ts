import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router){

  }
  canActivate()
    {
      if(localStorage.getItem("currentUser") != ""){
        this.router.navigate(['dashboard'])
        return true;
      }
    else{
      this.router.navigate(['login'])
      return false;
    }
  }
  
}
