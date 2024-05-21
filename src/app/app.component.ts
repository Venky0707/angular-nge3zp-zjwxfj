import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuItems = [
    {
      label: 'Item 1',
      children: [
        { label: 'Item 1.1' },
        {
          label: 'Item 1.2',
          children: [
            { label: 'Item 1.2.1' },
            {
              label: 'Item 1.2.2',
              children: [{ label: 'test' }, { label: 'test' }],
            },
          ],
        },
      ],
    },
    {
      label: 'Item 2',
      children: [
        { label: 'Item 2.1' },
        { label: 'Item 2.2', children: [{ label: 'test' }, { label: 'test' }] },
      ],
    },
  ];
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
