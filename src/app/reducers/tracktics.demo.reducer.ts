import { Action, createReducer, on, createSelector } from '@ngrx/store';
import Debug from 'debug';
import * as fromActions from '../actions/tracktics.demo.actions';
const debug = Debug('tracktics:pitch:Reducer');
// State Declarations - START

export const appStateFeatureKey = 'trackticsAppState';

export interface FeatureState {
  pitches: any;
}

export interface AppState {
  trackticsAppState: FeatureState;
}
// define app state
export const selectFeature = (state: AppState) => state.trackticsAppState;

export const selectPitches = createSelector(
  selectFeature,
  (state: FeatureState) => state.pitches
);

export const initialState: FeatureState = {
  pitches: null
};
const pitchReducer = createReducer(
  initialState,
  on(fromActions.onGetPitches, state => ({ ...state })),
  on(fromActions.onGetPitchesSuccess, (state, action) => ({ ...state, pitches: action.payload.pitches})),
  on(fromActions.onGetPitchesFail, state => ({ ...state})),
);

export function reducer(state: FeatureState | undefined, action: Action) {
  console.log(action);
  return pitchReducer(state, action);
}
