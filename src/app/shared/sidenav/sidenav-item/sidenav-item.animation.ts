import {
    animate,
    state,
    style,
    transition,
    trigger
  } from '@angular/animations';
  
  export const subMenuAnimation = trigger('slideInOut', [
    state('open', style({ overflow: 'hidden' })),
    state('closed', style({ overflow: 'hidden', height: 0 })),
    transition('open => closed', [
      style({ height: '*' }),
      animate(250, style({ height: 0 }))
    ]),
    transition('closed => open', [
      style({ height: '0' }),
      animate(250, style({ height: '*' }))
    ])
  ]);
  