import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  
  // get isLoggedIn(): boolean {
  //   return localStorage.getItem("token") ? true : false;
  // };
  localItem: any;
  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.localItem = localStorage.getItem("token");
    let token = (this.localItem);
    console.log('token', token);
    if (token) {
      return true;
    } else {
      this.router.navigate(['/admin/login']);
      return false;
    }
    
  }

}


