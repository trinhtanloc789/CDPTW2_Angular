import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Module12Component } from './module12/module12.component';
import { Module15Component } from './module15/module15.component';

@NgModule({
  declarations: [
    AppComponent,
    Module12Component,
    Module15Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
