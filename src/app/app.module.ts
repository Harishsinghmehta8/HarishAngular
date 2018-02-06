import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ResturantsListComponent } from './resturants-list/resturants-list.component';
import { charDashString } from "./customFilter/charDashString.pipe";





@NgModule({
  declarations: [
    AppComponent,
    ResturantsListComponent,
    charDashString
      ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
