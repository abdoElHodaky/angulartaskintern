import {
    trigger,
    animate,
    transition,
    style,
    query,
  } from '@angular/animations';
  
  export const fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
      query(':enter', [style({ opacity: 0, position: 'absolute' })], {
        optional: true,
      }),
      query(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('1.1s', style({ opacity: 0, position: 'absolute' })),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('1.3s', style({ opacity: 1, position: 'relative' })),
        ],
        { optional: true }
      ),
    ]),
  ]);