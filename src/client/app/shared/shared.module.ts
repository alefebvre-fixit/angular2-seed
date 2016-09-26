import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ToolbarComponent } from './toolbar/index';
import { NavbarComponent } from './navbar/index';
import { NameListService } from './name-list/index';

import { SectionComponent } from './layout/index';
import { LoadingContainer } from './layout/index';

import { Statistics } from './grid/statistics.component';
import { FigureComponent } from './grid/figure.component';
import { GridComponent } from './grid/grid.component';


import { RankedList } from './analytics/ranked-list.component';

import { RemoveUndefined } from './pipes/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, Ng2BootstrapModule],
  declarations: [ToolbarComponent, NavbarComponent, SectionComponent, Statistics, FigureComponent, RemoveUndefined, RankedList, GridComponent, LoadingContainer],
  exports: [ToolbarComponent, NavbarComponent,
    CommonModule, FormsModule, RouterModule, SectionComponent, Statistics, FigureComponent, RankedList, GridComponent, LoadingContainer]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService]
    };
  }
}
