// Initial State
import { initialState } from './initialState';

// Actions
import {
  LOADING,
  FETCH_FAILED,
  FETCH_SUCCESS
} from './../../actions/constants.actions';

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case FETCH_FAILED:
      return { ...state, loading: false, error: action.payload };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        byId: action.payload.entities.users,
        allIds: action.payload.result
      };
    default:
      return state;
  }
};
