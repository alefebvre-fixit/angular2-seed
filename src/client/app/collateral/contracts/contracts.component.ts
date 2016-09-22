import { Component, OnInit } from '@angular/core';
import { ContractsService } from '../../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'contracts.component.html',
  styleUrls: ['contracts.component.css'],
  viewProviders: [ ContractsService ],
})
export class ContractsComponent implements OnInit {

  contracts: Object[];

  constructor(private contractsService: ContractsService) {}

  ngOnInit(): void {
    this.loadContracts();
  }

  loadContracts(): void {
    this.contractsService.getAll().subscribe((contracts: Object[]) => {
      this.contracts = contracts;
    });
  }

    config = {
    "columns": [{ "name": "name", "header": "Name"},
              { "name": "description", "header": "Description"},
              { "name": "counterparty", "header": "Counterparty"},
              { "name": "startDate", "header": "Start Date"}]
    }

}
