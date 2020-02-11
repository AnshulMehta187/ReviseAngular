import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  template: `
    <div class="section-header">
      <h4>{{ title }}</h4>
    </div>
  `,
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {

  constructor() { }
  @Input() title: string;

  ngOnInit() {
  }

}
