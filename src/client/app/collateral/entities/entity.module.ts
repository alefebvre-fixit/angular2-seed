import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { ContactEditComponent} from './contact-edit.component';
import { EntityListComponent} from './entity-list.component';
import { EntitySummaryComponent} from './entity-summary.component';
import { EntityViewComponent} from './entity-view.component';



import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';


@NgModule({
  imports: [CommonModule, SharedModule, Ng2BootstrapModule, ChartsModule],
  declarations: [ContactEditComponent, EntityListComponent, EntitySummaryComponent, EntityViewComponent],
  exports: [ContactEditComponent, EntityListComponent, EntitySummaryComponent, EntityViewComponent],
  providers: []
})

export class EntityModule { }
