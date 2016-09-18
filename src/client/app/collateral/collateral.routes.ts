import { Route } from '@angular/router';

import { CollateralComponent } from './index';

/*
import { ContractsComponent } from './index';
import { ExposuresComponent } from './index';
import { DashboardComponent } from './index';
import { ExposureDetailsComponent } from './index';
import { InventoryComponent } from './index';
import { EntityListComponent } from './index';
import { EntityViewComponent } from './index';
import { SinkComponent } from './index';
*/

export const CollateralRoutes: Route[] = [
  {
      path: 'collateral', 
      component: CollateralComponent,

      /*
      children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'exposures',
        component: ExposuresComponent
      },
      {
        path: 'exposures/:id', 
        component: ExposureDetailsComponent
      },
      {
        path: 'contracts',
        component: ContractsComponent
      },
      {
        path: 'inventory',
        component: InventoryComponent
      },
      {
        path: 'counterparties',
        component: EntityListComponent
      },
      {
        path: 'counterparties/:id', 
        component: EntityViewComponent
      },
      {
        path: 'sink', 
        component: SinkComponent,
        children: [
        ]
      }
      */
      ]
    },




];
