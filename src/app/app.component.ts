import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Word } from './types';

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
  constructor(private store: Store<any>) { this.store.select('words').subscribe(w => this.words = w); }
}
