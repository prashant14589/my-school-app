import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
