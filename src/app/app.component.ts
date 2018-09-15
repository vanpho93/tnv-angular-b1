import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  value: number;
  constructor(private store: Store<any>) {
    this.store.select('value').subscribe(x => this.value = x);
  }
}
