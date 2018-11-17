import { statusesReducers, initialState } from './statuses.reducer';

describe('Status Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = statusesReducers(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
