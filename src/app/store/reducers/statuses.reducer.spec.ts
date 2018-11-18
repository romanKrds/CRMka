import { statusesReducers, statusesInitialState } from './statuses.reducer';

describe('Status Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = statusesReducers(statusesInitialState, action);

      expect(result).toBe(statusesInitialState);
    });
  });
});
