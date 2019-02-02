import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { KnoxposervService } from './knoxposerv.service';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	FormsModule,
    AppRoutingModule
  ],
  providers: [KnoxposervService],
  bootstrap: [AppComponent]
})
export class AppModule { }
