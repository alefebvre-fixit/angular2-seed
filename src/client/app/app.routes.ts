import { Routes } from '@angular/router';

import { CollateralRoutes } from './collateral/index';

export const routes: Routes = [
  ...CollateralRoutes,

  {
        path: '',
        redirectTo: 'collateral/dashboard',
        pathMatch: 'full'
      }

];
