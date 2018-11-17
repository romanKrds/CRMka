import { customersReducer, customersInitialState } from './customers.reducer';

describe('Customer Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = customersReducer(customersInitialState, action);

      expect(result).toBe(customersInitialState);
    });
  });
});
