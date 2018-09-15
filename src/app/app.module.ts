import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ControlComponent } from './control.component';
import { RequestService } from './request.service';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent],
})
export class AppModule { }
