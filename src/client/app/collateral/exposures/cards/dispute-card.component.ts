import { Component, OnInit, Input} from '@angular/core';
import { FigureComponent} from '../../../shared/index';
import { Dispute } from '../../../models/index';

@Component({
  moduleId: module.id,
  selector: "dispute-card",
  templateUrl: 'dispute-card.component.html',
  styleUrls: ['dispute-card.component.css'],
  viewProviders: [],
})

export class DisputeCard implements OnInit {

  @Input() dispute: Dispute;

  constructor() {}

  ngOnInit(): void {
    this.dispute = new Dispute();
  }

  flipped = false;

  flipCard(): void{
    this.flipped = !this.flipped
  }

}
