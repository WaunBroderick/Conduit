import ProfileAction from "./profile.action";

export const loadProfileAsync = (data) => (dispatch) => {
  dispatch(ProfileAction.profileLoadStart());
  dispatch(ProfileAction.profileLoadSuccess(data));
};
