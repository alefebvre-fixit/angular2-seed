import { Component, OnInit, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: "figure",
  templateUrl: 'figure.component.html',
  styleUrls: ['figure.component.css'],
  viewProviders: [],
})
export class FigureComponent implements OnInit {

  @Input() value: number = 0;
  @Input() currency: string;

  constructor() {}

  ngOnInit(): void {
  }

}
