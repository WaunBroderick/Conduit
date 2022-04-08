import ProfileService from "./profile.service";
import ProfileAction from "./profile.action";

export const loadProfileAsync = (JWT) => (dispatch) => {
  dispatch(ProfileAction.profileLoadStart());
  ProfileService.getProfile(JWT)
    .then((response) =>
      dispatch(ProfileAction.profileLoadSuccess(response.data))
    )
    .catch((error) => dispatch(ProfileAction.profileLoadError(error.message)));
};
