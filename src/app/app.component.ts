import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> Sup modas! </h1>
    <div *ngIf="myArr; then var1 else var2"></div>
    <ng-template #var1>Silyllyly</ng-template>
    <ng-template #var2>Silylsdfslyly</ng-template>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myArr = true;

}
