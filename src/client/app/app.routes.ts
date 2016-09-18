import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { CollateralRoutes } from './collateral/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...CollateralRoutes
];
