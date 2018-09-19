import { Action } from '@ngrx/store';
import { LinkActions, LinkActionTypes } from './link.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: LinkActions): State {
  switch (action.type) {

    case LinkActionTypes.LoadLinks:
      return state;


    default:
      return state;
  }
}
