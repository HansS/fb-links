import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LinkActionTypes } from './link.actions';

@Injectable()
export class LinkEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(LinkActionTypes.LoadLinks));

  constructor(private actions$: Actions) {}
}
