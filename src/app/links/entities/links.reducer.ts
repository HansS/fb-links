import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Links } from './links.model';
import { LinksActions, LinksActionTypes } from './links.actions';

export interface State extends EntityState<Links> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Links> = createEntityAdapter<Links>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: LinksActions
): State {
  switch (action.type) {
    case LinksActionTypes.AddLinks: {
      return adapter.addOne(action.payload.links, state);
    }

    case LinksActionTypes.UpsertLinks: {
      return adapter.upsertOne(action.payload.links, state);
    }

    case LinksActionTypes.AddLinkss: {
      return adapter.addMany(action.payload.linkss, state);
    }

    case LinksActionTypes.UpsertLinkss: {
      return adapter.upsertMany(action.payload.linkss, state);
    }

    case LinksActionTypes.UpdateLinks: {
      return adapter.updateOne(action.payload.links, state);
    }

    case LinksActionTypes.UpdateLinkss: {
      return adapter.updateMany(action.payload.linkss, state);
    }

    case LinksActionTypes.DeleteLinks: {
      return adapter.removeOne(action.payload.id, state);
    }

    case LinksActionTypes.DeleteLinkss: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case LinksActionTypes.LoadLinkss: {
      return adapter.addAll(action.payload.linkss, state);
    }

    case LinksActionTypes.ClearLinkss: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
