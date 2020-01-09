import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHeader } from './components/header/header.component';
import { AppLinksList, SafePipe } from './components/links-list/links-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppLinksList,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
