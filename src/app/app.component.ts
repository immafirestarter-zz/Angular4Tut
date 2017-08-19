import { Component } from '@angular/core';
import { FetchService } from './fetch.service'
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
@Component({
  selector: 'app-root',
  template: `
     <p [@cool]='state' (click)="animateMe()">AHHHHHHH</p>
  `,
  styles: [`
    p {
      width:200px;
      background:pink;
      margin:100px auto;
      padding: 20px;
      text-align: center
    }

   `],
   animations: [
     trigger('cool', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('big', style({
        transform: 'scale(1.5)',
      })),
      transition('small <=> big', animate('500ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateX(-75%)', offset: 0}),
        style({opacity: 0.5, transform: 'translateX(-35%)', offset: 0.5}),
        style({opacity: 1, transform: 'translateX(0)', offset: 1}),

      ]))),
     ]),
   ]
  })
export class AppComponent {

  state: string = 'small'

  animateMe() {
    this.state = (this.state === 'small' ? 'big' : 'small');
  }

}
