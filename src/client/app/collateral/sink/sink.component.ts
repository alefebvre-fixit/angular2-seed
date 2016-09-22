import { Component, OnInit, ViewChild } from '@angular/core';
import { SectionComponent } from '../../shared/index';
import { ChildSinkComponent } from './child-sink.component';

@Component({
  moduleId: module.id,
  templateUrl: 'sink.component.html',
  styleUrls: ['sink.component.css'],
  viewProviders: [],
})

export class SinkComponent implements OnInit {

  @ViewChild('child') child:ChildSinkComponent;

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit() : void{
    console.log("After Init");
    console.log(this.child);
  }


}
