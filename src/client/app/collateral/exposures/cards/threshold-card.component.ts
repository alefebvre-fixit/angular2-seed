import { Component, OnInit, Input} from '@angular/core';
import { FigureComponent} from '../../../shared/index';
import { Threshold } from '../../../models/index';
import { Exposure} from '../../../models/index';

@Component({
  moduleId: module.id,
  selector: "threshold-card",
  templateUrl: 'threshold-card.component.html',
  styleUrls: ['threshold-card.component.css'],
  viewProviders: [],
})

export class ThresholdCard implements OnInit {

  @Input() threshold: Threshold;
  @Input() exposure: Exposure;

  constructor() {}

  ngOnInit(): void {
    this.threshold = new Threshold();
    this.exposure = new Exposure();
  }

  getStatus(): string{
    if (this.threshold.value >= Math.abs(this.exposure.netBalance)){
      return "above";
    } else {
      return "bellow";
    }
  }

  flipped = false;

  flipCard(): void{
    this.flipped = !this.flipped
  }

}
