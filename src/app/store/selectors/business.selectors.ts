import { businessAdapter } from '../reducers/business.reducer';

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = businessAdapter.getSelectors();
