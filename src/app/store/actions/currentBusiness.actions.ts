import { Action } from '@ngrx/store';
import { Business } from '@models/*';
import { CurrentBusiness } from '@constants/*';

export class SelectCurrentBusiness implements Action {
  readonly type = CurrentBusiness.SelectBusiness;
  constructor(public payload: Business) {}
}
export class ClearCurrentBusiness implements Action {
  readonly type = CurrentBusiness.ClearCurrentBusiness;
}

export type CurrentBusinessActions =
  | SelectCurrentBusiness
  | ClearCurrentBusiness;
