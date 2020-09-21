import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, UrlTree, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AboutGuard implements CanActivate, CanActivateChild{
  constructor(public auth: AuthService, public router: Router) { this.check = this.auth.getAufChecked();
  }
 check: boolean;
  public route: ActivatedRouteSnapshot;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    if (this.check ){
      return true;
    }
    else {
      console.log(this.auth.getAufChecked());
    }
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | boolean {
    return this.canActivate(this.route , state);
  }
}
