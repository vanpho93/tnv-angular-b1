import { Component } from '@angular/core';

@Component({
    selector: 'app-control',
    template: `
        <button (click)="increase();">Increase</button>
        <button (click)="decrease();">Decrease</button>
    `
})

export class ControlComponent {
    increase() {}

    decrease() {}
}

// dinh nghia store thong qua reducer function
// connect store voi application
// lay du lieu tu trong store de hien thi trong components
// thay doi du lieu trong store tu components
