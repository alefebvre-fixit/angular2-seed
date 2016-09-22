import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { SectionComponent } from '../../shared/index';
import { ExposuresService } from '../../services/index';
import { ExposureSummaryComponent } from './exposure-summary.component';
import { ExposureUnderlyingsComponent } from './exposure-underlyings.component';
import { ExposureCollateralsComponent } from './exposure-collaterals.component';
import { ExposureAllocationsComponent } from './exposure-allocations.component';


@Component({
  moduleId: module.id,
  templateUrl: 'exposure-view.component.html',
  styleUrls: ['exposure-view.component.css'],
  viewProviders: [ ExposuresService ],
})
export class ExposureDetailsComponent implements OnInit {

  exposure: Object;

  constructor(private route: ActivatedRoute, private exposuresService: ExposuresService) {}

  userClick(id: string): void {
    alert('clicked on exposure: ' + id);
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.exposuresService
          .getOneById(id)
          .subscribe(exposure => this.exposure = exposure);
      });
  }
}
