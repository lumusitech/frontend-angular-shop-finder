import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.routes').then((m) => m.routes),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.routes),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((m) => m.routes),
  },
  {
    path: 'contact-us',
    component: ContactComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shop',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'shop',
  },
];
