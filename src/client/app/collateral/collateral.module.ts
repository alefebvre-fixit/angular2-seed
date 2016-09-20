import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CollateralComponent } from './collateral.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [CommonModule, SharedModule, Ng2BootstrapModule],
  declarations: [CollateralComponent],
  exports: [CollateralComponent],
  providers: []
})

export class CollateralModule { }
