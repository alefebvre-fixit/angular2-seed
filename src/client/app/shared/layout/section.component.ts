import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: "section",
  templateUrl: 'section.component.html',
  styleUrls: ['section.component.css'],
  viewProviders: [],
})
export class SectionComponent implements OnInit {

  @Input() name: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}
