import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


import { ExposureModule } from './exposures/exposure.module';
import { ContractModule } from './contracts/contract.module';
import { InventoryModule } from './inventory/inventory.module';
import { EntityModule } from './entities/entity.module';
import { SinkModule } from './sink/sink.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { CollateralComponent } from './collateral.component';


import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';


@NgModule({
  imports: [CommonModule, SharedModule, Ng2BootstrapModule, ChartsModule, ExposureModule, ContractModule, InventoryModule, EntityModule, SinkModule, DashboardModule],
  declarations: [CollateralComponent],
  exports: [CollateralComponent, ExposureModule, ContractModule, InventoryModule, EntityModule, SinkModule, DashboardModule],
  providers: []
})

export class CollateralModule { }
