import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-filter',
    template: `
        <select class="form-control" style="width: 200px" [value]="filterStatus" (change)="changeValue($event)">
            <option value="SHOW_ALL">SHOW ALL</option>
            <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
            <option value="SHOW_FORGOT">SHOW FORGOT</option>
        </select>
    `
})

export class FilterComponent {
    filterStatus: string;
    constructor(private store: Store<any>) {
        this.store.select('filterStatus').subscribe(f => this.filterStatus = f);
    }

    changeValue(event) {
        this.store.dispatch({ type: 'SET_FILTER_STATUS', value: event.target.value });
    }
}
