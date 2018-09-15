import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
        <div class="form-group word">
          <input
              placeholder="English"
              class="form-control"
          />
          <br />
          <input
              placeholder="Vietnamese"
              class="form-control"
          />
          <br />
          <div class="btn-container">
              <button
                  class="btn btn-success"
              >
                  Add word
              </button>
              <button
                  class="btn btn-danger"
              >
                  Cancel
              </button>
          </div>
        </div>
  `
})

export class FormComponent {}
