import { Component, OnInit } from '@angular/core';
import {trigger, animate, style, transition, state } from '@angular/animations';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger ('snack-visibility', [
      state ('hidden', style ({
        opacity: 0,
        botton: '0px'
      })),
      state ('visible', style ({
        opacity: 1,
        botton: '30px'
      })),
      transition ('hidden => visible', animate ('500ms 0s ease-in')),
      transition ('visible => hidden', animate ('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {
  message = 'Hello World!';

  snackVisibility = 'hidden';

  constructor() { }

  ngOnInit() {
  }
}
