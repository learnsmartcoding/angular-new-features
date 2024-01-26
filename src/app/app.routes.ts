import { Routes } from '@angular/router';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { canActivateGuard } from './guards/auth-guard';
import { canActivateChild } from './guards/profile-guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'profile',
    canActivate: [canActivateGuard], //[AuthGuard],
    canActivateChild: [canActivateChild], //[ProfileGuard],    
    children: [
      { path: '', component: ProfileComponent },
      {
        path: 'edit/:id',        
        component: EditProfileComponent,
        canDeactivate: [
          (component: EditProfileComponent) => !component.hasUnsavedChanges,
        ],
      },
    ],
  },  
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];
