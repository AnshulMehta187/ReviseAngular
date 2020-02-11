import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  template:`
  <div>
     <div class="section-content"><ng-content></ng-content></div>
   </div>
  `,
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
