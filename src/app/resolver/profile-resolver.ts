import { Injectable, inject } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ResolveFn,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Profile, ProfileService } from '../services/profile-service';

@Injectable({
  providedIn: 'root',
})
export class ProfileResolver implements Resolve<any> {
  constructor(private profileService:ProfileService){

  }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.profileService.getProfile((route.paramMap.get('id')!));
  }
}

export const productResolver: ResolveFn<Profile> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(ProfileService).getProfile(route.paramMap.get('id')!);
};
