import ProfileAction from "./profile.action";

export const loadProfileAsync = (data) => (dispatch) => {
  dispatch(ProfileAction.profileLoadStart());
  dispatch(ProfileAction.profileLoadSuccess(data));
};

export const loadDepartmentsAsync = (JWT) => (dispatch) => {
  dispatch(departmentsAction.departmentsLoadStart());
  departmentsService
    .getAllDepartments(JWT)
    .then((response) =>
      dispatch(departmentsAction.departmentsLoadSuccess(response.data))
    )
    .catch((error) =>
      dispatch(departmentsAction.departmentsLoadError(error.message))
    );
};
