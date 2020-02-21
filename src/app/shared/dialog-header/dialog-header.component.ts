import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-header',
  templateUrl: './dialog-header.component.html',
  styleUrls: ['./dialog-header.component.scss']
})
export class DialogHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() loading: boolean;
  @Output() closeClick = new EventEmitter<boolean>();


  ngOnInit() {
  }
  
  constructor() {}

  closeEvent() {
    if (!this.loading) {
      this.closeClick.emit(true);
    }
  }

}
