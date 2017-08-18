import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 [ngClass]="titleClasses"> Sup Modas! </h1>

  `,
  styles: [`

    .blue-title {
      color:blue;
    }

    .big-title {
      font-size: 70px
    }

   `]
  })
export class AppComponent {

  titleClass = false
  titleClasses = {
    'blue-title': true,
    'big-title': true
  }

}
