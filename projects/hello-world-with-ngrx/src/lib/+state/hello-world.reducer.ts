import { createReducer, on } from '@ngrx/store';
import { setMessage, appendMessage } from './hello-world.action';

export const HW_FEATURE_KEY = 'HW';

export interface HWState {
    message: string 
};

const initialState : HWState = {
    message: ''
}

export const hwReducer = createReducer(
  initialState,
  on(setMessage, (state, action) => ({...state, message: action.message})),
  on(appendMessage, (state, action) => ({...state, message: state.message+action.messageAppend})),
);