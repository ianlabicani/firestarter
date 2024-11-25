import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./user/login-page/login-page.component').then(
        (c) => c.LoginPageComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./user/register-page/register-page.component').then(
        (c) => c.RegisterPageComponent
      ),
  },
];
