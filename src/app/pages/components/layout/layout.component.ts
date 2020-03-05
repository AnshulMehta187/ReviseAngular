import { Component, OnInit } from '@angular/core';

import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel
} from '@angular/router';
import { environment } from '../../../../environments/environment';
import { SidenavItem } from 'src/app/shared/sidenav/sidenav-item.model';
import { SidenavState } from 'src/app/shared/sidenav/sidenav-state';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  sidenavItems: SidenavItem[];
  environment: any;
  constructor(private router: Router) {
    this.environment = environment;
    this.sidenavItems = [
      { id: 100, name: 'Students', url: '/students', icon: 'widgets', children: [] }
    ];
  }
  loaded: boolean = true;
  isSideNavOpen = false;

  // hideSidenav =
  //   this.router.url.startsWith('/students');

  // loginPage = this.router.url === '/login';

  ngOnInit(): void {
    // there has to be a better way of doing this eg. subscribing to a selector in the store
    // this.router.events.subscribe(evt => {
    //   if (evt instanceof NavigationStart) {
    //     this.loaded = false;
    //   } else if (
    //     evt instanceof NavigationEnd ||
    //     evt instanceof NavigationCancel
    //   ) {
    //     this.loaded = true;
    //   }
    // });
  }

  sidenavStateChanged(state: SidenavState) {
    this.isSideNavOpen = state === SidenavState.Expanded;
  }
}
