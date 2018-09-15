import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Word } from './types';

@Component({
    selector: 'app-form',
    template: `
            <button
                  class="btn btn-success"
                  style="margin-top: 10px; margin-bottom: 10px"
                  *ngIf="!shouldShowForm"
                  (click)="toggleForm();"
              >
                  +
              </button>
        <div class="form-group word" *ngIf="shouldShowForm">
            <form [formGroup]="formNewWord" (ngSubmit)="addWord();">
              <input
                  placeholder="English"
                  class="form-control"
                  formControlName="en"
              />
              <br />
              <input
                  placeholder="Vietnamese"
                  class="form-control"
                  formControlName="vn"
              />
          <br />
          <div class="btn-container">
              <button
                  class="btn btn-success"
                  type="submit"
              >
                  Add word
              </button>
              <button
                  class="btn btn-danger"
                  (click)="toggleForm();"
              >
                  Cancel
              </button>
          </div>
          </form>
        </div>
  `
})

export class FormComponent {
    shouldShowForm: boolean;
    constructor(private store: Store<any>) {
        this.store.select('shouldShowForm').subscribe(s => this.shouldShowForm = s);
    }
    formNewWord = new FormGroup({
        en: new FormControl(''),
        vn: new FormControl('')
    });

    addWord() {
        const { en, vn } = this.formNewWord.value;
        const word: Word = { _id: Date.now() + '', en, vn, isMemorized: false };
        this.store.dispatch({ type: 'ADD_WORD', word });
        this.toggleForm();
        this.formNewWord.reset();
    }

    toggleForm() { this.store.dispatch({ type: 'TOGGLE_FORM' }); }
}
