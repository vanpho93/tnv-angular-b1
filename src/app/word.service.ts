import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Store } from '@ngrx/store';

@Injectable()

export class WordService {
    constructor(private store: Store<any>, private request: RequestService) { }

    getAll() {
        return this.request.get('/word')
        .then(words => this.store.dispatch({ type: 'SET_WORDS', words }));
    }

    createWord(en: string, vn: string) {
        return this.request.post('/word', { en, vn })
        .then(word => this.store.dispatch({ type: 'ADD_WORD', word }))
        .catch(error => console.log(error));
    }

    removeWord(_id: string) {
        this.request.delete(`/word/${_id}`)
        .then(() => this.store.dispatch({ type: 'REMOVE_WORD', _id }))
        .catch(error => alert(error.message));
    }

    toggleWord(_id: string, isMemorized: boolean) {
        this.request.put(`/word/${_id}`, { isMemorized })
        .then(() => this.store.dispatch({ type: 'TOGGLE_WORD', _id }))
        .catch(error => alert(error.message));
    }
}
