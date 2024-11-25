import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./user/login-page/login-page.component').then(
        (c) => c.LoginPageComponent
      ),
  },
];
