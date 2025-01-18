import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/home.page'),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/auth/register.page'),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login.page'),
  },
];
