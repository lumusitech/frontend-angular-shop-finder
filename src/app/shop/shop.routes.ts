import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./pages/shop-list/shop-list.component').then(
            (m) => m.ShopListComponent,
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/shop-details/shop-details.component').then(
            (m) => m.ShopDetailsComponent,
          ),
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
];
