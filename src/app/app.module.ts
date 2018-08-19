import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueryPageComponent } from './pages/query-page/query-page.component';
import { ReportPageComponent } from './pages/report-page/report-page.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    QueryPageComponent,
    ReportPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
