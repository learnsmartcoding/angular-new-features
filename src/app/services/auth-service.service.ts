import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  userRole: string = '';

  login() {
    // Simulate login
    this.isLoggedIn = true;
    this.userRole = 'admin'; // For example purposes
    //this.userRole = 'support'; // For example purposes
  }

  logout() {
    // Simulate logout
    this.isLoggedIn = false;
    this.userRole = '';
  }
}
