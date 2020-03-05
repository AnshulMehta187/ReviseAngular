import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  OnInit,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { SidenavItem } from './sidenav-item.model';
import { Router } from '@angular/router';
import { subMenuAnimation } from './sidenav-item/sidenav-item.animation';
import { SidenavState } from './sidenav-state';
import { SidenavLevel } from './sidenav-level';

@Component({
  selector: 'eb-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [subMenuAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {
  @Output() state = new EventEmitter<SidenavState>();
  @Input() items: SidenavItem[];
  isCollapsed: boolean;
  sidenavLevel = SidenavLevel;
  l1OpenedItem: SidenavItem;

  constructor(private router: Router) {}

  ngOnInit() {
    this.setOpenItem(this.router.url);
    //this.isCollapsed=true;
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.items.forEach(item => {
        item.isOpen = false;
      });
    } else {
      if (this.l1OpenedItem) {
        this.items.find(x => x.id === this.l1OpenedItem.id).isOpen = true;
      }
    }

    this.state.emit(
      this.isCollapsed ? SidenavState.Collapsed : SidenavState.Expanded
    );
  }

  toggleItem(item: SidenavItem, level: SidenavLevel) {
    item.isOpen = !item.isOpen;
    switch (level) {
      case SidenavLevel.Level1:
        this.l1OpenedItem = item.isOpen ? item : undefined;
        break;
    }
    this.isCollapsed = false;
  }

  setOpenItem(url: string): void {
    if (url.indexOf('admin') !== -1) {
      this.items[0].isOpen = true;
      this.l1OpenedItem = this.items[0];
      if (url.indexOf('cat-events') !== -1) {
        this.items[0].children[0].isOpen = true;
      } else if (url.indexOf('states') !== -1) {
        this.items[0].children[0].isOpen = true;
      } else if (url.indexOf('shortcut') !== -1) {
        this.items[0].children[1].isOpen = true;
      } else if (url.indexOf('price-lists') !== -1) {
        this.items[0].children[1].isOpen = true;
      } else if (url.indexOf('cost-code') !== -1) {
        this.items[0].children[1].isOpen = true;
      } else if (url.indexOf('budget') !== -1) {
        this.items[0].children[2].isOpen = true;
      } else if (url.indexOf('unlock-variation') !== -1) {
        this.items[0].children[3].isOpen = true;
      }
    }
  }
}
