import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserLogin } from '../services/User.login';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: UserLogin, private router: Router) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      if (this.auth.authenticated) { return true; }

      console.log('access denied!')
      this.router.navigate(['/']);
      return false


  }
}