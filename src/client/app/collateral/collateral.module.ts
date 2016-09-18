import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CollateralComponent } from './index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [CollateralComponent],
  exports: [CollateralComponent],
  providers: []
})
export class CollateralModule { }
