import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { FetchService } from './fetch.service'
@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
