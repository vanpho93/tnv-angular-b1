import { Word } from './types';

export function wordsReducer (state: Word[] = [], action): Word[] {
    if (action.type === 'SET_WORDS') return action.words;
    if (action.type === 'REMOVE_WORD') return state.filter(w => w._id !== action._id);
    if (action.type === 'TOGGLE_WORD') return state.map(w => {
        if (w._id !== action._id) return w;
        return { ...w, isMemorized: !w.isMemorized };
    });
    if (action.type === 'ADD_WORD') return state.concat(action.word);
    return state;
}

export function filterStatusReducer(state = 'SHOW_ALL', action): string {
    if (action.type === 'SET_FILTER_STATUS') return action.value;
    return state;
}

export function shouldShowFormReducer(state = false, action): boolean {
    if (action.type === 'TOGGLE_FORM') return !state;
    return state;
}
