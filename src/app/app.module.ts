import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { WordComponent } from './word.component';
import { FormComponent } from './form.component';
import { FilterComponent } from './filter.component';
import { RequestService } from './request.service';
import { WordService } from './word.service';
import { wordsReducer, filterStatusReducer, shouldShowFormReducer } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    FormComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      words: wordsReducer,
      filterStatus: filterStatusReducer,
      shouldShowForm: shouldShowFormReducer
    })
  ],
  providers: [RequestService, WordService],
  bootstrap: [AppComponent],
})
export class AppModule { }
