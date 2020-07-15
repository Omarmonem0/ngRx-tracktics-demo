import { createAction, props, Action } from '@ngrx/store';


export const onGetPitches = createAction(
    '[tracktics demo] getPitches',
);

export const onGetPitchesSuccess = createAction(
    '[tracktics demo] getPitches done successfully',
    props<{payload: any}>()
);

export const onGetPitchesFail = createAction(
    '[tracktics demo] getPitches failed',
    props<{payload: any}>()
);

export interface ActionWithPayload<T> extends Action {
    payload: T;
}
