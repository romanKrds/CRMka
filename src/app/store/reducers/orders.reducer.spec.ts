import { initialState, ordersReducer } from './orders.reducer';

describe('Order Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = ordersReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
