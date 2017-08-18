import { Component } from '@angular/core';
import { FetchService } from './fetch.service'
@Component({
  selector: 'app-root',
  template: `
    <p> {{ someProperty }}

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

  constructor(private fetchService:FetchService) {

}

someProperty:string = '';
ngOnInit() {
  console.log(this.fetchService.cars);
  this.someProperty = this.fetchService.myData();
}

}
