import { Injectable } from '@angular/core';
import { debug } from 'console';
import { of } from 'rxjs';

export interface Profile {
  id: number;
  name: string;
  emailId: string;
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
  getproduct(id: string) {
    const product: Profile = {
      id: +id,
      name: 'Karthik',
      emailId: 'learnsmartcoding@gmail.com',
    };
    return of(product);
  }
}
