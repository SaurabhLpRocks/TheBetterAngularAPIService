import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule',
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule',
  },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'superAdmin', loadChildren: './super-admin/super-admin.module#SuperAdminModule' },
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
