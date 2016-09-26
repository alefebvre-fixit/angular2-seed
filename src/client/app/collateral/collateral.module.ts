import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


import { ExposureModule } from './exposures/exposure.module';
import { ContractModule } from './contracts/contract.module';
import { InventoryModule } from './inventory/inventory.module';
import { EntityModule } from './entities/entity.module';
import { SinkModule } from './sink/sink.module';



import { CollateralComponent } from './collateral.component';

import { DashboardComponent } from './index';
import { ExposuresComponent} from './index';




import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';




@NgModule({
  imports: [CommonModule, SharedModule, Ng2BootstrapModule, ChartsModule, ExposureModule, ContractModule, InventoryModule, EntityModule, SinkModule],
  declarations: [CollateralComponent, DashboardComponent],
  exports: [CollateralComponent, DashboardComponent, ExposureModule, ContractModule, InventoryModule, EntityModule, SinkModule],
  providers: []
})

export class CollateralModule { }
