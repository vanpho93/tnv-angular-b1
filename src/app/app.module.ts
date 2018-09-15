import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ControlComponent } from './control.component';
import { RequestService } from './request.service';
import { valueReducer } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({ value: valueReducer })
  ],
  providers: [RequestService],
  bootstrap: [AppComponent],
})
export class AppModule { }
