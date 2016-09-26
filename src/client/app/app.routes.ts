import { Routes } from '@angular/router';

import { CollateralRoutes } from './collateral/index';
import { AccountRoutes } from './account/index';

export const routes: Routes = [
  ...CollateralRoutes,
  ...AccountRoutes,
  {
        path: '',
        redirectTo: 'collateral/dashboard',
        pathMatch: 'full'
      }
];
