import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Word } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  words: Word[];
  constructor(private store: Store<any>) { this.store.select('words').subscribe(w => this.words = w); }
}
