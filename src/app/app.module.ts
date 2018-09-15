import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ControlComponent } from './control.component';
import { RequestService } from './request.service';
import { valueReducer } from './reducers';
import { FormSignUpComponent } from './components/form-sign-up/form-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    FormSignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ value: valueReducer })
  ],
  providers: [RequestService],
  bootstrap: [AppComponent],
})
export class AppModule { }
