import { Word } from './types';

const defaultWords: Word[] = [
    { _id: 'a1', en: 'one', vn: 'mot', isMemorized: true },
    { _id: 'a2', en: 'two', vn: 'hai', isMemorized: false },
    { _id: 'a3', en: 'three', vn: 'ba', isMemorized: false },
    { _id: 'a4', en: 'four', vn: 'bon', isMemorized: true },
];

export function wordsReducer (state = defaultWords, action) {
    if (action.type === 'REMOVE_WORD') return state.filter(w => w._id !== action._id);
    if (action.type === 'TOGGLE_WORD') return state.map(w => {
        if (w._id !== action._id) return w;
        return { ...w, isMemorized: !w.isMemorized };
    });
    return state;
}
