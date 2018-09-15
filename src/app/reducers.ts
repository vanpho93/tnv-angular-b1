import { Word } from './types';

const defaultWords: Word[] = [
    { _id: 'a1', en: 'one', vn: 'mot', isMemorized: true },
    { _id: 'a2', en: 'two', vn: 'hai', isMemorized: true },
    { _id: 'a3', en: 'three', vn: 'ba', isMemorized: true },
    { _id: 'a4', en: 'four', vn: 'bon', isMemorized: true },
];

export function wordsReducer (state = defaultWords, action) {
    return state;
}
