import {
    animate,
    state,
    style,
    transition,
    trigger
  } from '@angular/animations';
  
  // sets the width of the element to 200px when 'open' and 60px when 'closed'. Animates between those 2 states
  export const sideNavAnimation = trigger('openCloseSidenav', [
    state(
      'open',
      style({
        width: '255px'
      })
    ),
    state(
      'closed',
      style({
        width: '60px'
      })
    ),
    transition('open <=> closed', [animate('0.1s')])
  ]);
  
  // sets the margin-left of the container element to match with the above animation
  export const sideNavContainerAnimation = trigger('openCloseSidenavContent', [
    state(
      'open',
      style({
        'margin-left': '255px'
      })
    ),
    state(
      'closed',
      style({
        'margin-left': '60px'
      })
    ),
    transition('open <=> closed', [animate('0.1s')])
  ]);
  