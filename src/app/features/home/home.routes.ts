import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/index/index.component').then(m => m.IndexComponent)
    },
];