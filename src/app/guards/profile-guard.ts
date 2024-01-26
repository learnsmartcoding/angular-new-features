import { Injectable, inject } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChildFn } from '@angular/router';
import { AuthService } from '../services/auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Allow access to the '' route for any user
    if (route.routeConfig?.path === '' || this.authService.userRole === 'admin') {
      return true;
    } else {
      this.router.navigate(['/access-denied']);
      return false;
    }
  }
}


export const canActivateChild: CanActivateChildFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        if (route.routeConfig?.path === '' || inject(AuthService).userRole === 'admin') {
            return true;
          } else {
            inject(Router).navigate(['/access-denied']);
            return false;
          }      
    };
