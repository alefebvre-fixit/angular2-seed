import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SectionComponent} from '../../shared/index';
import { EntityService } from '../../services/index';
import { GridComponent, GridConfiguration} from '../../shared/index';

@Component({
  moduleId: module.id,
  templateUrl: 'entity-list.component.html',
  styleUrls: ['entity-list.component.css'],
  viewProviders: [ EntityService ],
})
export class EntityListComponent  implements OnInit {

  entities: Object[];
  private config: GridConfiguration;

  constructor(private router: Router, private entityService: EntityService) {
  
    this.config = new GridConfiguration(
              [{ "name": "id", "header": "Id"},
              { "name": "name", "header": "Name"},
              { "name": "country", "header": "Country"},
              { "name": "city", "header": "City"}]);

    this.config.view = true;
    this.config.edit = false;
    
  }

  ngOnInit(): void {
    this.loadEntities();
  }

  loadEntities(): void {
    this.entityService.getAll().subscribe((entities: Object[]) => {
      this.entities = entities;
    });
  }

  view(entity: any): void{
    this.router.navigate(['/collateral/counterparties', entity.id]);
  }
  

}
