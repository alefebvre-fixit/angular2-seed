import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { ExposuresComponent} from './index';
import { ExposureDetailsComponent} from './index';
import { ExposureCollateralsComponent } from './index';
import { ExposureSummaryComponent } from './index';
import { ExposureUnderlyingsComponent } from './index';
import { ExposureAllocationsComponent } from './index';

import { DisputeCard } from './cards/index';
import { MTACard } from './cards/index';
import { RoundingCard } from './cards/index';
import { ThresholdCard } from './cards/index';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';


@NgModule({
  imports: [CommonModule, SharedModule, Ng2BootstrapModule, ChartsModule],
  declarations: [ExposuresComponent, ExposureDetailsComponent, ExposureCollateralsComponent, ExposureSummaryComponent, ExposureUnderlyingsComponent, ExposureAllocationsComponent, DisputeCard, MTACard, RoundingCard, ThresholdCard
  ],
  exports: [ExposuresComponent, ExposureDetailsComponent, ExposureCollateralsComponent, ExposureSummaryComponent, ExposureUnderlyingsComponent, ExposureAllocationsComponent],
  providers: []
})

export class ExposureModule { }
