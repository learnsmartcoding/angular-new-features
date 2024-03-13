import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Profile {
  id: number;
  name: string;
  emailId: string;
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
  getProfile(id: string) {
    const profile: Profile = {
      id: +id,
      name: 'Karthik',
      emailId: 'learnsmartcoding@gmail.com',
    };

    // Introduce a delay of 2 seconds before emitting the response
    return of(profile).pipe(delay(1000));
  }
}
