import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Links } from './links.model';

export enum LinksActionTypes {
  LoadLinkss = '[Links] Load Linkss',
  AddLinks = '[Links] Add Links',
  UpsertLinks = '[Links] Upsert Links',
  AddLinkss = '[Links] Add Linkss',
  UpsertLinkss = '[Links] Upsert Linkss',
  UpdateLinks = '[Links] Update Links',
  UpdateLinkss = '[Links] Update Linkss',
  DeleteLinks = '[Links] Delete Links',
  DeleteLinkss = '[Links] Delete Linkss',
  ClearLinkss = '[Links] Clear Linkss'
}

export class LoadLinkss implements Action {
  readonly type = LinksActionTypes.LoadLinkss;

  constructor(public payload: { linkss: Links[] }) {}
}

export class AddLinks implements Action {
  readonly type = LinksActionTypes.AddLinks;

  constructor(public payload: { links: Links }) {}
}

export class UpsertLinks implements Action {
  readonly type = LinksActionTypes.UpsertLinks;

  constructor(public payload: { links: Links }) {}
}

export class AddLinkss implements Action {
  readonly type = LinksActionTypes.AddLinkss;

  constructor(public payload: { linkss: Links[] }) {}
}

export class UpsertLinkss implements Action {
  readonly type = LinksActionTypes.UpsertLinkss;

  constructor(public payload: { linkss: Links[] }) {}
}

export class UpdateLinks implements Action {
  readonly type = LinksActionTypes.UpdateLinks;

  constructor(public payload: { links: Update<Links> }) {}
}

export class UpdateLinkss implements Action {
  readonly type = LinksActionTypes.UpdateLinkss;

  constructor(public payload: { linkss: Update<Links>[] }) {}
}

export class DeleteLinks implements Action {
  readonly type = LinksActionTypes.DeleteLinks;

  constructor(public payload: { id: string }) {}
}

export class DeleteLinkss implements Action {
  readonly type = LinksActionTypes.DeleteLinkss;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearLinkss implements Action {
  readonly type = LinksActionTypes.ClearLinkss;
}

export type LinksActions =
 LoadLinkss
 | AddLinks
 | UpsertLinks
 | AddLinkss
 | UpsertLinkss
 | UpdateLinks
 | UpdateLinkss
 | DeleteLinks
 | DeleteLinkss
 | ClearLinkss;
