// Constants
import { FETCH_FAILED, FETCH_SUCCESS, LOADING } from './constants.actions';

// Api
import { fetchAllUsers } from './../../api/users';

// Entities
import normalizeUsers from './../entities/users.entities';

export const getAllUsers = () => async dispatch => {
  try {
    dispatch(loadingUsers);
    const users = await fetchAllUsers();
    const normalizedUsers = normalizeUsers(users);
    console.log(normalizedUsers);
    dispatch(getAllUsersSuccess(normalizedUsers));
  } catch (error) {
    dispatch(getAllUsersFailed(error));
  }
};

export const loadingUsers = {
  type: LOADING
};

export const getAllUsersSuccess = payload => ({
  type: FETCH_SUCCESS,
  payload
});

export const getAllUsersFailed = payload => ({
  type: FETCH_FAILED,
  payload
});
