import { Routes } from '@angular/router';
import { SigninComponent } from '@pages/signin/signin.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { AuthLayoutComponent } from '@components/layouts/auth-layout/auth-layout.component';
import { SignupComponent } from '@pages/signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', component: SigninComponent, pathMatch: 'full' },
    ]
  },
  {
    path: 'signup',
    component: AuthLayoutComponent,
    children: [
      { path: '', component: SignupComponent },
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
];
