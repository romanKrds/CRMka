
const initialState = '';

export function curentClientReducer(
  state = initialState,
  action: {type: string, payload: string}
) {
  switch (action.type) {
    case '[CurentClient] Load Success':
      return action.payload;

    default:
    return state;
  }
}
