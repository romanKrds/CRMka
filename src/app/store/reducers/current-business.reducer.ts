import { CurrentBusiness } from '@constants/*';
import { CurrentBusinessActions } from '../actions/currentBusiness.actions';
import { CurrentBusinessState } from 'src/app/models/current-business-state';

const initialCurrentBusinessState: CurrentBusinessState = {
  id: null,
  clientId: null,
  description: null,
  title: null
};

export function currentBusinessReducer(
  state = initialCurrentBusinessState,
  action: CurrentBusinessActions
): CurrentBusinessState {
  switch (action.type) {
    case CurrentBusiness.SelectBusiness: {
      return action.payload;
    }
    case CurrentBusiness.ClearCurrentBusiness: {
      return initialCurrentBusinessState;
    }

    default:
      return state;
  }
}
