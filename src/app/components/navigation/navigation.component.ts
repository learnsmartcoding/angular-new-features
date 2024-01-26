import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  constructor(private authService: AuthService) {}

  login() {
    // Call the login function from your AuthService
    this.authService.login();
  }

  logout() {
    // Call the logout function from your AuthService
    this.authService.logout();
  }
}
