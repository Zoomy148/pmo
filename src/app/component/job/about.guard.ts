import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, UrlTree, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class AboutGuard implements CanActivate, CanActivateChild{
  constructor(public router: Router) {  }
 check = false;
  public route: ActivatedRouteSnapshot;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    if (this.check ){
      return true;
    }
    else {
      console.log('Неверное ввели логин или пароль');
    }
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | boolean {
    return this.canActivate(this.route , state);
  }
}
