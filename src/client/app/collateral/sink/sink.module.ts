import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { SinkComponent} from './sink.component';
import { ChildSinkComponent} from './child-sink.component';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';


@NgModule({
  imports: [CommonModule, SharedModule, Ng2BootstrapModule, ChartsModule],
  declarations: [SinkComponent, ChildSinkComponent],
  exports: [SinkComponent, ChildSinkComponent],
  providers: []
})

export class SinkModule { }
