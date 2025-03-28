import { createAction, props } from '@ngrx/store';

export const setFirstMessage = createAction(
    '[HW] Set First Message',
    props<{message: string}>()
);

export const setMessage = createAction(
    '[HW] Set Message',
    props<{message: string}>()
);

export const appendMessage = createAction(
    '[HW] Appen Message',
    props<{messageAppend: string}>()
);