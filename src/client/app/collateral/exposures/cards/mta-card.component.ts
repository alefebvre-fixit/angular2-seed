import { Component, OnInit, Input} from '@angular/core';
import { FigureComponent} from '../../../shared/index';
import { MTA} from '../../../models/index';
import { Exposure} from '../../../models/index';

@Component({
  moduleId: module.id,
  selector: "mta-card",
  templateUrl: 'mta-card.component.html',
  styleUrls: ['mta-card.component.css'],
  viewProviders: [],
})

export class MTACard implements OnInit {

  @Input() mta: MTA;
  @Input() exposure: Exposure;

  constructor() {}

  ngOnInit(): void {
    this.mta = new MTA();
    this.exposure = new Exposure();
  }

  getStatus(): string{
    if (this.mta.value >= Math.abs(this.exposure.requiredMargin)){
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
