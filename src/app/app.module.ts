import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { WordComponent } from './word.component';
import { FormComponent } from './form.component';
import { RequestService } from './request.service';
import { wordsReducer } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ words: wordsReducer })
  ],
  providers: [RequestService],
  bootstrap: [AppComponent],
})
export class AppModule { }
