import profileActionTypes from "./profile.actionTypes";

const profileLoadStart = () => ({
  type: profileActionTypes.PROFILE_LOAD_START,
});

const profileLoadSuccess = (profile) => ({
  type: profileActionTypes.PROFILE_LOAD_SUCCESS,
  payload: profile,
});

const profileLoadError = (errorMessage) => ({
  type: profileActionTypes.PROFILE_LOAD_ERROR,
  payload: errorMessage,
});

export default {
  profileLoadError,
  profileLoadStart,
  profileLoadSuccess,
};
