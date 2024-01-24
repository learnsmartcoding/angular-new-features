import { Routes } from '@angular/router';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth-guard';
import { CanDeactivateGuard } from './guards/deactivate-guard';
import { ProfileGuard } from './guards/profile-guard';
import { ProfileResolver } from './resolver/profile-resolver';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    canActivateChild: [ProfileGuard],
    //canDeactivate: [CanDeactivateGuard],
    resolve: { profileData: ProfileResolver },
    children: [
      { path: '', component: ProfileComponent },
      {
        path: 'edit',
        component: EditProfileComponent,
        //, canDeactivate: [CanDeactivateGuard]
      },
    ],
  },
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];
