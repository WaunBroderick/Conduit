import usersActionTypes from "./users.actionTypes";

const usersLoadStart = () => ({
  type: usersActionTypes.USERS_LOAD_START,
});

const usersLoadSuccess = (users) => ({
  type: usersActionTypes.USERS_LOAD_SUCCESS,
  payload: users,
});

const usersLoadError = (errorMessage) => ({
  type: usersActionTypes.USERS_LOAD_ERROR,
  payload: errorMessage,
});

export default { usersLoadError, usersLoadStart, usersLoadSuccess };
