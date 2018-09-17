import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Word } from './types';
import { RequestService } from './request.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <app-form></app-form>
    <app-filter></app-filter>
    <app-word *ngFor="let word of words" [word]="word"></app-word>
  </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  words: Word[];
  constructor(private store: Store<any>, private request: RequestService) {
    this.store.select('words').subscribe(w => this.words = w);
    this.request.get('/word')
    .then(words => this.store.dispatch({ type: 'SET_WORDS', words }));
  }
}
