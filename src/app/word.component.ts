import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Word } from './types';

@Component({
    selector: 'app-word',
    template: `
        <div class="word" *ngIf="shouldShowWord">
          <div class="word-container">
              <h3 class="text-success">{{word.isMemorized ? '-----' : word.en}}</h3>
              <h3 class="text-danger">{{word.vn}}</h3>
          </div>
          <div class="btn-container">
              <button class="btn btn-warning" *ngIf="word.isMemorized" (click)="toggle(word._id);">
                  Forgot
              </button>
              <button class="btn btn-success" *ngIf="!word.isMemorized" (click)="toggle(word._id);">
                  Memorized
              </button>
              <button class="btn btn-danger" (click)="remove(word._id);">
                  Remove
              </button>
          </div>
        </div>
  `
})

export class WordComponent {
    @Input() word: Word;
    filterStatus: string;
    constructor(private store: Store<any>) {
        this.store.select('filterStatus').subscribe(f => this.filterStatus = f);
    }

    get shouldShowWord(): boolean {
        if (this.filterStatus === 'SHOW_ALL') return true;
        if (this.filterStatus === 'SHOW_FORGOT') return !this.word.isMemorized;
        return this.word.isMemorized;
    }

    remove(_id: string) { this.store.dispatch({ type: 'REMOVE_WORD', _id }); }
    toggle(_id: string) { this.store.dispatch({ type: 'TOGGLE_WORD', _id }); }
}
