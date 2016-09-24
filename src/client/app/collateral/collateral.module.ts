import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CollateralComponent } from './collateral.component';

import { DashboardComponent } from './index';
import { ExposuresComponent} from './index';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [CommonModule, SharedModule, Ng2BootstrapModule, ChartsModule],
  declarations: [CollateralComponent, DashboardComponent, ExposuresComponent],
  exports: [CollateralComponent, DashboardComponent],
  providers: []
})

export class CollateralModule { }
