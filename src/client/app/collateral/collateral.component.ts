import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-collateral',
  templateUrl: 'collateral.component.html',
  styleUrls: ['collateral.component.css'],
})

export class CollateralComponent implements OnInit {


  constructor() {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
  }


}
