import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SectionComponent, LoadingPage, GridComponent, GridConfiguration} from '../../shared/index';
import { FigureComponent, Statistics, Statistic, StatisticFactory} from '../../shared/index';

import { ExposuresService } from '../../services/index';
import { Exposure } from '../../models/index';

@Component({
  moduleId: module.id,
  templateUrl: 'exposure-list.component.html',
  styleUrls: ['exposure-list.component.css'],
  viewProviders: [ ExposuresService ],
})
export class ExposuresComponent extends LoadingPage implements OnInit {

  private exposures: Exposure[];
  private config: GridConfiguration;
  private statistics: Statistic[];

  constructor(private router: Router, private exposuresService: ExposuresService) {
      super(false);

    this.config = new GridConfiguration(
              [{ "name": "id", "header": "Id"},
              { "name": "name", "header": "Name"},
              { "name": "description", "header": "Description"},
              { "name": "status", "header": "Status"},
              { "name": "requiredMargin", "header": "Required Margin"},
              { "name": "currency", "header": "Currency"}]);

    this.config.view = true;
    this.config.edit = false;
    this.config.selector = true;
    
  }

  ngOnInit(): void {
    this.loadExposures();
  }

  applyAction(action: string): void{

    if (this.loading){
      this.ready();
    } else {
      this.standby();

      let selected = this.exposures.filter(function (exposure: any) { return exposure.selected;})
      console.log(selected);
      this.exposuresService.applyActions(selected, action);
      

      setTimeout(() => this.ready(), 750);
    }
  }

  loadExposures(): void {
    this.exposuresService.exposures$.subscribe((exposures: Exposure[]) => {
      this.exposures = exposures;
      this.statistics = StatisticFactory.createForAll(this.exposures);
    });
  }

  view(exposure: any): void{
    this.router.navigate(['/collateral/exposures', exposure.id]);
  }

  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
 
  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }
 
  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }


}
