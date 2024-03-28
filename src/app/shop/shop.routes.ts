import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./shop-list/shop-list.component').then(
            (m) => m.ShopListComponent,
          ),
      },
      {
        path: 'details',
        loadComponent: () =>
          import('./shop-details/shop-details.component').then(
            (m) => m.ShopDetailsComponent,
          ),
      },
      { path: '**', redirectTo: 'list' },
    ],
  },
];
