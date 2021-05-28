import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { PageComponent } from './home/page/page.component';
import { PresentationComponent } from './home/presentation/presentation.component';
import { TableContainerComponent } from './home/table-container/table-container.component';
import { HomeModule } from './home/home.module';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HomeModule,
    HttpClientModule
  ],
  exports: [
    PageComponent,
    TableContainerComponent,
    PresentationComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
