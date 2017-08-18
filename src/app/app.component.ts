import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> Sup Reshma! </h1>

    <button (mouseenter)="buttonStatus($event)">Buttton</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

buttonStatus(event) {
  console.log(event)
}
}
