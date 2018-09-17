import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { WordService } from './word.service';

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
                  [disabled]="loading"
              >
                  {{ loading ? 'Loading...': 'Add word' }}
              </button>
              <button
                  class="btn btn-danger"
                  (click)="toggleForm();"
                  [disabled]="loading"
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
    loading = false;
    constructor(private store: Store<any>, private wordService: WordService) {
        this.store.select('shouldShowForm').subscribe(s => this.shouldShowForm = s);
    }
    formNewWord = new FormGroup({
        en: new FormControl(''),
        vn: new FormControl('')
    });

    addWord() {
        this.loading = true;
        const { en, vn } = this.formNewWord.value;
        this.wordService.createWord(en, vn)
        .then(() => {
            this.toggleForm();
            this.formNewWord.reset();
            this.loading = false;
        });
    }

    toggleForm() { this.store.dispatch({ type: 'TOGGLE_FORM' }); }
}
