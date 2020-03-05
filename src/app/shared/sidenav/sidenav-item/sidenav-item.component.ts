import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';

import { SidenavItem } from '../sidenav-item.model';
import { subMenuAnimation } from './sidenav-item.animation';

@Component({
  selector: 'eb-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [subMenuAnimation]
})
export class SidenavItemComponent {
  @Input() item: SidenavItem;
  @Input() showArrow: boolean;
  @Output() itemClick = new EventEmitter();

  clicked() {
    this.itemClick.emit();
  }
}
