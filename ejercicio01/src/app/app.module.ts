import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejercicio1Component,
    Ejercicio2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
