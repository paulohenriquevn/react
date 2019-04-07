export const Types = {
  ADD_REQUEST: 'header/ADD_REQUEST',
  ADD_SUCCESS: 'header/ADD_SUCCESS',
  ADD_FAILURE: 'header/ADD_FAILURE',
};

const INITIAL_STATE = {
  loading: false,
  search: '',
  error: null,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        search: action.payload.search,
        loading: true,
      };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        search: action.payload.search,
        loading: false,
        error: null,
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  searchRequest: search => ({
    type: Types.ADD_REQUEST,
    payload: { search },
  }),

  searchSuccess: search => ({
    type: Types.ADD_SUCCESS,
    payload: { search },
  }),

  searchFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
