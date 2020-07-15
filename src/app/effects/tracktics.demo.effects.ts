import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, retry, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import Debug from 'debug';
import * as fromActions from '../actions/tracktics.demo.actions';
import { TrackticsService } from '../services/tracktics.service';
const debug = Debug('tracktics-demo: TrackticsDemoEffects');


@Injectable()
export class TrackticsEffects {

  constructor(private actions$: Actions, private service: TrackticsService) { }

  loadAllPitchesData$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromActions.onGetPitches.type),
      mergeMap(
        (action: any) => {
          return this.service.getPitches()
            .pipe(
              retry(1),
              tap(
                response => debug(response)
              ),
              map(
                getPitchesResponse => (fromActions.onGetPitchesSuccess({ payload: getPitchesResponse }))
              ),
              catchError((error) => of(fromActions.onGetPitchesFail({ payload: error })))
            );
        }
      )
    )
  );

  errorOnLoadPitchesData$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromActions.onGetPitchesFail.type),
      tap(
        (action: fromActions.ActionWithPayload<any>) => this.handleOnLoadSessionDataErrors(action.payload)
      )
    )
    , { dispatch: false });

    handleOnLoadSessionDataErrors(error) {
    debug(error);
    return error;
  }
}
