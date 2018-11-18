const initialState = '';

export function curentBusinessReducer(
  state = initialState,
  action: {type: string, payload: string}
) {
  switch (action.type) {
    case '[CurentBusiness] Load Success':
      return action.payload;

    default:
    return state;
  }
}
