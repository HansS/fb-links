import { Action } from '@ngrx/store';

export enum LinkActionTypes {
  LoadLinks = '[Link] Load Links'
}

export class LoadLinks implements Action {
  readonly type = LinkActionTypes.LoadLinks;
}

export type LinkActions = LoadLinks;
