export default function reducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case 'SET_USER': {
      return {
        ...state,
        // user: payload,
        ...payload,
      };
    }
    default: {
      return state;
    }
  }
}
