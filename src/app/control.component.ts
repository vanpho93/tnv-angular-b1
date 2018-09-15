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
