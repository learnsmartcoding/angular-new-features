import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    // You can fetch user profile data here
    const userProfile = {
      id: 1,
      username: 'john_doe',
      email: 'john.doe@example.com'
    };
    return of(userProfile);
  }
}
