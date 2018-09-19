import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";

import { environment } from "../../environments/environment";
import * as fromLinkEntities from "../links/entities/link.reducer";
import * as fromLink from "../links/state/link.reducer";

export interface AppState {
  linkE: fromLinkEntities.State;
  link: fromLink.State;
}

export const reducers: ActionReducerMap<AppState> = {
  link: fromLink.reducer,
  linkE: fromLinkEntities.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
