import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
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
