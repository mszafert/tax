import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginLayoutComponent } from './components/layouts/login-layout/login-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: '', component: LoginComponent, pathMatch: 'full' },
    ]
  },
  { path: 'home', component: HomeComponent },
];
